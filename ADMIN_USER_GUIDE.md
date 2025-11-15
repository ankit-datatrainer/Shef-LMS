# 📚 SHEF LMS - Admin User Guide

## Table of Contents
1. [Getting Started](#getting-started)
2. [Dashboard Overview](#dashboard-overview)
3. [Managing Students](#managing-students)
4. [Managing Courses](#managing-courses)
5. [Managing Content](#managing-content)
6. [Analytics & Reports](#analytics--reports)
7. [Best Practices](#best-practices)

---

## 🚀 Getting Started

### Logging In
1. Navigate to the SHEF LMS login page
2. Enter your admin credentials
3. Click "Login" to access the admin panel

### First-Time Setup
1. **Add Courses** - Start by creating your course structure
2. **Add Modules** - Organize courses into modules
3. **Add Lessons** - Create lesson content within modules
4. **Add Students** - Enroll students into the system
5. **Configure Settings** - Set up system preferences

---

## 📊 Dashboard Overview

### Main Navigation Sidebar

#### 📊 Overview
- View key statistics (Total Students, Courses, Jobs, Completion Rate)
- Quick action buttons for common tasks
- Recent activity feed

#### 👥 Students
- View all enrolled students
- Add new students
- Edit student information
- Manage student status (Active/Inactive)
- Delete students

#### 📚 Courses
- View all courses
- Create new courses
- Edit course details
- Set course status
- Delete courses

#### 📖 Modules
- Organize course content into modules
- Link modules to specific courses
- Set module order
- Add descriptions and durations

#### 📝 Lessons
- Create individual lessons
- Add lesson content (text, video URLs)
- **Add Class Links** - Include Zoom/meet links for live classes
- Set lesson duration and order

#### 📁 Projects
- Add capstone and practice projects
- Set difficulty levels
- Define required skills
- Manage project deliverables

#### ✏️ Assessments
- Create quizzes and tests
- Set question counts
- Define duration limits
- Add descriptions

#### 💼 Jobs
- Post job opportunities
- Set job details (title, company, location)
- Add required skills
- Manage job status (Active/Closed)

#### 👨‍🏫 Mentors
- Add mentor profiles
- Set credentials and experience
- Add skills and bio
- Manage availability

#### 📢 Content
- Post announcements
- Add featured content
- Create supplementary materials
- Target specific audiences

#### 📈 Analytics
- View enrollment trends (bar charts)
- Check course distribution (progress bars)
- Monitor job placements (pie chart)
- Track user engagement (line chart)
- Generate comprehensive reports

---

## 👥 Managing Students

### Adding a New Student

1. Click the **Students** section in the sidebar
2. Click the **+ Add Student** button
3. Fill in the required fields:
   - **Name*** (Required)
   - **Email*** (Required) - This will be their login username
   - **Password*** (Required) - Initial password (students should change this)
   - **Enrollment Number*** (Required) - Unique student ID
   - **Phone Number** (Optional)
   - **Address** (Optional)
   - **Course** (Optional) - Select from dropdown
   - **Status** - Active or Inactive

4. Click **Create** to add the student

✅ **Success!** A notification will show with the student's login credentials.

### Editing a Student

1. Find the student in the table
2. Click the **Edit** (✏️) button
3. Modify the details
4. Click **Update** to save changes

### Deleting a Student

1. Find the student in the table
2. Click the **Delete** (🗑️) button
3. Confirm the deletion
4. ✅ Student removed successfully

⚠️ **Warning:** Deleting a student is permanent and cannot be undone.

---

## 📚 Managing Courses

### Creating a Course

1. Navigate to **Courses** section
2. Click **+ Add Course**
3. Fill in the details:
   - **Title*** - Course name
   - **Description*** - Detailed course description
   - **Duration** - e.g., "6 months", "12 weeks"
   - **Status** - Active or Draft

4. Click **Create**

### Course Structure Best Practices

```
Course
├── Module 1
│   ├── Lesson 1.1
│   ├── Lesson 1.2
│   └── Lesson 1.3
├── Module 2
│   ├── Lesson 2.1
│   └── Lesson 2.2
└── Module 3
    └── Lessons...
```

### Adding Modules to a Course

1. Go to **Modules** section
2. Click **+ Add Module**
3. Enter:
   - **Name*** - Module title
   - **Course*** - Select the parent course
   - **Duration** - Estimated completion time
   - **Order** - Number for sequencing (1, 2, 3...)
   - **Lessons** - Number of lessons (for display)

4. Click **Create**

### Adding Lessons to Modules

1. Go to **Lessons** section
2. Click **+ Add Lesson**
3. Fill in:
   - **Title*** - Lesson name
   - **Module*** - Select parent module
   - **Content*** - Lesson content/description
   - **Duration** - e.g., "45 min"
   - **Video URL** - Optional YouTube/Vimeo link
   - **Class Link** - 🆕 Zoom/Google Meet link for live classes
   - **Order** - Lesson sequence number

4. Click **Create**

---

## 📝 Managing Content

### Adding Projects

1. Navigate to **Projects**
2. Click **+ Add Project**
3. Enter details:
   - **Title*** - Project name
   - **Description*** - What students will build
   - **Difficulty** - Beginner, Intermediate, Advanced
   - **Duration** - Estimated time to complete
   - **Skills** - Required skills (comma-separated)
   - **Requirements** - Prerequisites
   - **Deliverables** - What students should submit

4. Click **Create**

### Adding Assessments

1. Go to **Assessments**
2. Click **+ Add Assessment**
3. Fill in:
   - **Title*** - Assessment name
   - **Description** - Instructions
   - **Questions** - Number of questions
   - **Duration** - Time limit in minutes
   - **Difficulty** - Level of difficulty

4. Click **Create**

### Posting Job Opportunities

1. Select **Jobs** section
2. Click **+ Add Job**
3. Enter:
   - **Title*** - Job position
   - **Company*** - Company name
   - **Location** - Job location or "Remote"
   - **Salary** - Salary range
   - **Type** - Full-time, Part-time, Contract
   - **Status** - Active or Closed
   - **Skills** - Required skills (comma-separated)
   - **Description** - Job details

4. Click **Create**

### Adding Mentors

1. Go to **Mentors**
2. Click **+ Add Mentor**
3. Fill in:
   - **Name*** - Mentor's full name
   - **Job Title*** - Current position
   - **Company*** - Company name
   - **Experience** - Years of experience
   - **Skills** - Expertise areas (comma-separated)
   - **Bio** - Short biography

4. Click **Create**

---

## 📈 Analytics & Reports

### Understanding the Analytics Dashboard

#### Summary Cards
- **Total Students** - Current enrollment count with monthly growth
- **Active Courses** - Number of available courses and modules
- **Job Opportunities** - Active job postings
- **Completion Rate** - Overall student success percentage

#### Charts & Visualizations

1. **📈 Student Enrollment Trend** (Bar Chart)
   - Shows monthly enrollment patterns
   - Displays total and average enrollments
   - Useful for capacity planning

2. **📚 Course Distribution** (Progress Bars)
   - Shows enrollment distribution across courses
   - Identifies popular courses
   - Helps with resource allocation

3. **💼 Job Placement Stats** (Pie Chart)
   - Placed: 70% - Students successfully employed
   - Interviewing: 20% - Students in the hiring process
   - Searching: 10% - Students actively job hunting

4. **👥 User Engagement** (Line Chart)
   - Daily active users trend
   - Peak usage hours
   - Engagement patterns

### Generating Reports

Click any report button to generate:

1. **📊 Student Progress Report**
   - Individual student progress
   - Course completion status
   - Time spent on platform

2. **✅ Course Completion Report**
   - Overall completion rates
   - Module-by-module analytics
   - Success metrics

3. **💰 Revenue Report**
   - Financial summary
   - Payment tracking
   - Revenue trends

4. **📈 Monthly Analytics**
   - Comprehensive monthly overview
   - Key performance indicators
   - Comparative analysis

### Key Insights Section

The system automatically highlights:
- Top performing courses
- Average completion times
- Student satisfaction rates
- Most popular modules

Use these insights to:
- ✅ Improve course content
- ✅ Allocate resources effectively
- ✅ Identify trends early
- ✅ Make data-driven decisions

---

## 💡 Best Practices

### Student Management
✅ **DO:**
- Create students with clear enrollment numbers
- Provide strong initial passwords
- Regularly review inactive students
- Keep contact information updated

❌ **DON'T:**
- Use duplicate email addresses
- Share student credentials
- Delete students with active enrollments
- Ignore status updates

### Course Management
✅ **DO:**
- Structure courses logically (Course → Module → Lesson)
- Use consistent naming conventions
- Add detailed descriptions
- Include video content where possible
- Add class links for live sessions
- Number lessons sequentially

❌ **DON'T:**
- Create lessons without parent modules
- Skip order numbers
- Leave descriptions empty
- Use broken video links

### Content Management
✅ **DO:**
- Keep job postings current
- Update mentor availability
- Archive old content
- Review projects regularly
- Test all links before publishing

❌ **DON'T:**
- Post expired job listings
- Leave outdated information
- Ignore student feedback
- Publish without review

### Security
✅ **DO:**
- Change default admin password immediately
- Use strong passwords (12+ characters)
- Log out when finished
- Review activity logs regularly
- Backup data frequently

❌ **DON'T:**
- Share admin credentials
- Use public computers without logging out
- Ignore security warnings
- Skip regular backups

### Performance Optimization
✅ **DO:**
- Regularly archive old data
- Monitor system performance
- Keep content organized
- Use analytics for insights
- Clean up unused resources

❌ **DON'T:**
- Leave hundreds of draft items
- Ignore slow loading times
- Store large files directly (use external storage)
- Neglect database maintenance

---

## 🆘 Troubleshooting

### Common Issues & Solutions

**Issue:** Can't create student with existing email
- **Solution:** Each email must be unique. Check if student already exists.

**Issue:** Lessons not appearing in student dashboard
- **Solution:** Ensure lessons are linked to modules, and modules to courses.

**Issue:** Changes not saving
- **Solution:** Check internet connection. Ensure all required fields are filled.

**Issue:** Charts not loading in Analytics
- **Solution:** Refresh the page. Ensure data exists for all collections.

**Issue:** Students can't log in
- **Solution:** Verify email and password are correct. Check student status is "Active".

---

## 📞 Support

For additional help:
- 📧 Email: support@shef.com
- 📱 Phone: +1 (XXX) XXX-XXXX
- 🌐 Website: https://shef.com/support
- 📚 Documentation: https://docs.shef.com

---

**Version:** 1.0.0  
**Last Updated:** November 14, 2025  
**© 2025 SHEF LMS. All rights reserved.**
