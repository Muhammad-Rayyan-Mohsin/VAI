# VAIBRANT Project Submission System Setup Guide

This guide will help you set up the complete project submission system with Supabase integration.

## 🚀 Features Implemented

✅ **Responsive Modal Form** with all required fields  
✅ **Frontend Validation** with real-time error feedback  
✅ **File Upload Support** (PDF, DOCX, JPG, PNG, ZIP)  
✅ **Supabase Integration** for database and storage  
✅ **Mobile Optimization** with touch-friendly design  
✅ **Success/Error Feedback** with loading states  
✅ **Multiple Integration Points** (Projects page, Homepage CTA)  

## 📋 Prerequisites

- Supabase account ([sign up here](https://supabase.com))
- Node.js and npm installed
- Access to your project's environment variables

## 🔧 Setup Instructions

### Step 1: Create Supabase Project

1. Go to [Supabase Dashboard](https://app.supabase.com)
2. Click "New Project"
3. Choose your organization and set project details
4. Wait for the project to be created (2-3 minutes)

### Step 2: Set Up Database Schema

1. In your Supabase dashboard, go to **SQL Editor**
2. Open the `supabase-schema.sql` file from your project root
3. Copy and paste the entire contents into the SQL Editor
4. Click **Run** to execute the schema
5. Verify the `projects` table was created in **Table Editor**

### Step 3: Configure Storage

1. Go to **Storage** in your Supabase dashboard
2. Click **New bucket**
3. Name it `projects`
4. Set it to **Public** for easier file access
5. Click **Create bucket**

### Step 4: Environment Variables

1. In your Supabase dashboard, go to **Settings > API**
2. Copy the **Project URL** and **anon public key**
3. Create a `.env.local` file in your project root:

```env
NEXT_PUBLIC_SUPABASE_URL=your-project-url-here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

**Example:**
```env
NEXT_PUBLIC_SUPABASE_URL=https://xyzcompany.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Step 5: Install Dependencies

If not already installed, run:

```bash
npm install @supabase/supabase-js
```

### Step 6: Test the Integration

1. Start your development server:
```bash
npm run dev
```

2. Navigate to the Projects page or Homepage
3. Click any "Start Project" button
4. Fill out and submit the form
5. Check your Supabase dashboard to see the submitted data

## 📁 File Structure

```
src/
├── components/ui/
│   └── start-project-modal.tsx    # Main modal component
├── lib/
│   └── supabase.ts               # Supabase configuration
├── app/
│   ├── page.tsx                  # Homepage with modal integration
│   └── projects/page.tsx         # Projects page with modal integration
├── supabase-schema.sql           # Database schema
└── PROJECT_SUBMISSION_SETUP.md   # This setup guide
```

## 🎯 Form Fields Included

| Field | Type | Required | Validation |
|-------|------|----------|------------|
| Full Name | Text | ✅ | Min 2 characters |
| Email | Email | ✅ | Valid email format |
| Service | Dropdown | ✅ | Must select option |
| Budget | Dropdown | ✅ | Must select range |
| Timeline | Dropdown | ✅ | Must select timeline |
| Project Details | Textarea | ✅ | Min 20 characters |
| Files | Upload | ❌ | PDF, DOCX, JPG, PNG, ZIP (10MB max) |

## 📱 Mobile Features

- **Horizontal scrolling categories** with fade indicators
- **Fixed floating view toggles** in bottom-right corner
- **Touch-friendly buttons** (48px+ targets)
- **Responsive modal** that works on all screen sizes
- **Optimized file upload** with drag-and-drop support

## 🔐 Security Features

- **Row Level Security (RLS)** enabled on database
- **File type validation** on frontend and backend
- **File size limits** (10MB per file)
- **Input sanitization** and validation
- **Environment variable protection**

## 🛠 Customization Options

### Modify Form Fields

Edit `src/components/ui/start-project-modal.tsx`:

```typescript
// Add new service options
const services = [
  'AI & Machine Learning',
  'Data Science & Analytics',
  'Your New Service',  // Add here
  // ...existing services
]

// Add new budget ranges
const budgetRanges = [
  'Under $10,000',
  'Your Custom Range',  // Add here
  // ...existing ranges
]
```

### Update Database Schema

Add new fields to the `projects` table:

```sql
ALTER TABLE projects ADD COLUMN your_new_field TEXT;
```

Update the TypeScript interface in `src/lib/supabase.ts`:

```typescript
export interface Project {
  // ...existing fields
  your_new_field?: string
}
```

### Styling Customization

The modal uses Tailwind CSS classes. Key customization points:

```typescript
// Modal backdrop
className="bg-black/60 backdrop-blur-sm"

// Modal container
className="bg-white rounded-2xl shadow-2xl"

// Button styles
className="bg-black text-white hover:bg-gray-800"
```

## 📊 Admin Dashboard (Optional)

You can build an admin dashboard to manage submissions:

```typescript
// Example: Fetch all projects
import { getProjects } from '@/lib/supabase'

const projects = await getProjects()
console.log(projects)

// Example: Update project status
import { updateProjectStatus } from '@/lib/supabase'

await updateProjectStatus('project-id', 'approved')
```

## 🐛 Troubleshooting

### Common Issues

**1. "Missing Supabase environment variables" error**
- Check your `.env.local` file exists and has correct values
- Restart your development server after adding env vars

**2. File upload fails**
- Verify the `projects` storage bucket exists
- Check bucket permissions are set to public
- Ensure file types are supported

**3. Form submission fails**
- Check Supabase dashboard for RLS policies
- Verify the `projects` table exists
- Check browser console for detailed errors

**4. Modal doesn't open**
- Check for JavaScript errors in browser console
- Verify modal state management is working
- Ensure button onClick handlers are connected

### Database Queries for Debugging

```sql
-- Check if projects table exists
SELECT * FROM information_schema.tables WHERE table_name = 'projects';

-- View all submitted projects
SELECT * FROM projects ORDER BY created_at DESC;

-- Check RLS policies
SELECT * FROM pg_policies WHERE tablename = 'projects';
```

## 🔄 Updates and Maintenance

### Adding New Features

1. Update the modal component for new UI features
2. Modify the database schema if new fields are needed
3. Update TypeScript interfaces
4. Test thoroughly on mobile and desktop

### Database Migrations

When updating the schema, always:

1. Test changes in development first
2. Backup production data
3. Use `IF NOT EXISTS` for backward compatibility
4. Update TypeScript types accordingly

## 📞 Support

If you encounter issues:

1. Check the browser console for errors
2. Verify Supabase dashboard shows data correctly
3. Test with simple data first
4. Check this guide for troubleshooting steps

---

**🎉 Congratulations!** Your project submission system is now ready to collect leads and project inquiries with full mobile optimization and professional UX. 