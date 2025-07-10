import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface Project {
  id: string
  created_at: string
  updated_at: string
  full_name: string
  email: string
  selected_service: string
  estimated_budget: string
  project_timeline: string
  project_details: string
  file_urls: string[]
  status: 'pending' | 'in_review' | 'approved' | 'rejected'
}

// File upload function
export const uploadFile = async (file: File, folder: string = 'project-files') => {
  const fileExt = file.name.split('.').pop()
  const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`
  const filePath = `${folder}/${fileName}`

  const { data, error } = await supabase.storage
    .from('projects')
    .upload(filePath, file)

  if (error) {
    throw error
  }

  // Get public URL
  const { data: { publicUrl } } = supabase.storage
    .from('projects')
    .getPublicUrl(filePath)

  return { filePath, publicUrl }
}

// Database operations
export const insertProject = async (projectData: Omit<Project, 'id' | 'created_at' | 'updated_at' | 'status'>) => {
  const { data, error } = await supabase
    .from('projects')
    .insert([{
      ...projectData,
      status: 'pending'
    }])
    .select()
    .single()

  if (error) {
    throw error
  }

  return data
}

export const getProjects = async () => {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    throw error
  }

  return data
}

export const updateProjectStatus = async (id: string, status: Project['status']) => {
  const { data, error } = await supabase
    .from('projects')
    .update({ status, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single()

  if (error) {
    throw error
  }

  return data
} 