-- =============================================
-- VAIBRANT Project Submission System
-- Supabase Database Schema
-- =============================================

-- Create the projects table
CREATE TABLE IF NOT EXISTS projects (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    selected_service TEXT NOT NULL,
    estimated_budget TEXT NOT NULL,
    project_timeline TEXT NOT NULL,
    project_details TEXT NOT NULL,
    file_urls TEXT[] DEFAULT '{}',
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'in_review', 'approved', 'rejected'))
);

-- Create an index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_projects_email ON projects(email);

-- Create an index on status for filtering
CREATE INDEX IF NOT EXISTS idx_projects_status ON projects(status);

-- Create an index on created_at for ordering
CREATE INDEX IF NOT EXISTS idx_projects_created_at ON projects(created_at DESC);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger for updated_at
DROP TRIGGER IF EXISTS update_projects_updated_at ON projects;
CREATE TRIGGER update_projects_updated_at
    BEFORE UPDATE ON projects
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- =============================================
-- Storage Setup (Run these in Supabase Dashboard > Storage)
-- =============================================

-- 1. Go to Storage in your Supabase dashboard
-- 2. Create a new bucket called 'projects'
-- 3. Set the bucket to 'Public' if you want files to be publicly accessible
-- 4. Or create policies below for authenticated access

-- Storage policies (if bucket is private)
-- Run these in SQL Editor if you want to control access

-- Policy: Allow authenticated users to upload files
-- CREATE POLICY "Allow authenticated uploads" ON storage.objects
-- FOR INSERT TO authenticated
-- WITH CHECK (bucket_id = 'projects');

-- Policy: Allow public read access to files
-- CREATE POLICY "Allow public downloads" ON storage.objects
-- FOR SELECT TO public
-- USING (bucket_id = 'projects');

-- Policy: Allow users to delete their own files (optional)
-- CREATE POLICY "Allow users to delete own files" ON storage.objects
-- FOR DELETE TO authenticated
-- USING (bucket_id = 'projects');

-- =============================================
-- Row Level Security (RLS) Policies
-- =============================================

-- Enable RLS on the projects table
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anyone to insert new projects (for public form submission)
CREATE POLICY "Allow public project submission" ON projects
    FOR INSERT TO anon
    WITH CHECK (true);

-- Policy: Allow authenticated users to view all projects (for admin access)
CREATE POLICY "Allow authenticated read access" ON projects
    FOR SELECT TO authenticated
    USING (true);

-- Policy: Allow authenticated users to update project status
CREATE POLICY "Allow authenticated update access" ON projects
    FOR UPDATE TO authenticated
    USING (true);

-- =============================================
-- Sample Data (Optional - for testing)
-- =============================================

-- Insert sample project (remove in production)
INSERT INTO projects (
    full_name,
    email,
    selected_service,
    estimated_budget,
    project_timeline,
    project_details,
    status
) VALUES (
    'John Doe',
    'john@example.com',
    'AI & Machine Learning',
    '$25,000 - $50,000',
    '3-6 months',
    'I need an AI solution to automate our customer service responses and improve response times.',
    'pending'
);

-- =============================================
-- Views (Optional - for easier querying)
-- =============================================

-- View for pending projects
CREATE OR REPLACE VIEW pending_projects AS
SELECT 
    id,
    created_at,
    full_name,
    email,
    selected_service,
    estimated_budget,
    project_timeline,
    project_details,
    array_length(file_urls, 1) as file_count
FROM projects 
WHERE status = 'pending'
ORDER BY created_at DESC;

-- View for project statistics
CREATE OR REPLACE VIEW project_stats AS
SELECT 
    status,
    COUNT(*) as count,
    selected_service,
    COUNT(*) as service_count
FROM projects 
GROUP BY status, selected_service;

-- =============================================
-- Functions (Optional - for advanced features)
-- =============================================

-- Function to get projects by date range
CREATE OR REPLACE FUNCTION get_projects_by_date_range(
    start_date DATE,
    end_date DATE
)
RETURNS TABLE (
    id UUID,
    created_at TIMESTAMP WITH TIME ZONE,
    full_name TEXT,
    email TEXT,
    selected_service TEXT,
    status TEXT
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        p.id,
        p.created_at,
        p.full_name,
        p.email,
        p.selected_service,
        p.status
    FROM projects p
    WHERE DATE(p.created_at) BETWEEN start_date AND end_date
    ORDER BY p.created_at DESC;
END;
$$ LANGUAGE plpgsql;

-- =============================================
-- Setup Instructions:
-- =============================================

/*
1. Copy and paste this entire schema into your Supabase SQL Editor
2. Run the script to create all tables, indexes, and policies
3. Go to Storage > Create new bucket called 'projects'
4. Set appropriate bucket permissions (public or private with policies)
5. Add your Supabase URL and anon key to your .env.local file:
   NEXT_PUBLIC_SUPABASE_URL=your-project-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
6. Test the form submission to ensure everything works
*/ 