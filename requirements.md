# Action Plus Tax — Complete Requirements Document

## 1. Project Vision

Action Plus Tax is evolving into a **fully digital, client-centric tax platform** — not just a website. The goal is to compete with top-tier U.S. tax companies by making everything faster, simpler, more secure, and more professional.

**Core Goal:** Replace manual communication (calls, WhatsApp, emails) with a centralized, professional, and secure digital system.

---

## 2. System Overview

The platform consists of **3 main parts**:

1. **Public Website** — Marketing + Lead Generation
2. **Client Portal** — User Dashboard
3. **Admin Dashboard** — Business Control System

---

## 3. Navigation & Menu Structure

### Top-Level Menu Items
- Home
- About Us
- Services *(Mega Menu / Dropdown)*
- Blog
- Contact
- Client Portal / Login
- CTA Button: **"Get Consultation"**

### Services Mega Menu Structure

| Category | Sub-Services | CTA |
|---|---|---|
| **Tax Services** | Tax Preparation & Filing | Apply Now |
| | Individual Income Tax Filing | Apply Now |
| | Simple / Standard Return Filing | Apply Now |
| | Self-Employed / Freelance Tax Filing | Apply Now |
| | Cryptocurrency & Investment Tax Reporting | Apply Now |
| | Tax Extensions | Apply Now |
| | Amended Tax Returns | Apply Now |
| **Tax Resolution** | Tax Resolution & IRS Issue Support | Resolve My Tax Issue |
| | IRS Audit Support & Representation | Get Audit Support |
| **Tax Planning & Consultation** | Tax Planning Services | Schedule Consultation |
| **Business Services** | Bookkeeping Services | Manage My Business Finances |
| | Payroll Services | Manage My Business Finances |
| | Business Valuation | Get My Business Valued |

**Desktop:** Mega menu with columns, sub-services under headings, CTA at bottom of each column  
**Mobile:** Accordion-style expandable, stacked vertically, large CTA buttons  
**Sticky Nav:** Navbar stays at top on scroll at all times

---

## 4. Public Website Pages

### 4.1 Home Page

**Purpose:** First impression — Trust + Action. Capture attention within 5 seconds.

**Sections:**
1. **Hero Banner**
   - Headline: *"Professional Tax & Financial Services You Can Trust"*
   - Subheadline: *"Simple, Secure, and Tailored Solutions for Individuals & Businesses"*
   - CTA Buttons:
     - "Start Your Application" → Service Selection
     - "Book Appointment" → Appointment Form

2. **Services Overview** — Quick links to all main service categories with "Learn More" CTA

3. **How It Works** — Steps: Apply → Upload Documents → Submit → Admin Review → Client Portal Updates

4. **Testimonials / Reviews** *(optional)* — Show client trust & satisfaction

5. **Contact / Final CTA Section**
   - "Get a Consultation" button
   - Phone, Email, WhatsApp integration

---

### 4.2 About Us Page
- Company history & mission
- Team introduction
- Why choose Action Plus Tax
- CTA: "Book Consultation"

---

### 4.3 Services Overview Page

**Header:** *"Professional Tax & Financial Services — Everything You Need."*  
**Subheading:** *"Simple, Secure, and Tailored Services for Individuals & Businesses."*

- Categories shown as buttons/icons
- Individual service blocks linking to dedicated service pages
- CTA: "Get Started" / "Contact Support"

---

### 4.4 Individual Service Pages (1 per sub-service)

Each service page must include these **7 sections**:

1. **Hero** — Service title + CTA ("Apply Now" / "Book Consultation")
2. **What This Service Is** — Clear, client-friendly explanation
3. **Why You Need It** — Problems it solves, benefits
4. **What's Included** — Bullet list of key features
5. **Required Documents** — Specific uploads required for that service
6. **Book Appointment / Apply Now CTA**
7. **Contact / Support**

#### All Services with Required Documents:

**1. Tax Preparation & Filing**
- Includes: Federal & State filing, maximize deductions/credits, all income sources
- Required Docs: W-2 or 1099, SSN/Tax ID, previous tax returns, bank statements
- CTA: *Start My Tax Filing*

**2. Unfiled Tax Returns**
- Includes: Prior-year federal & state returns, penalty/interest calculation, IRS submission guidance
- Required Docs: Previous year financial records, ID/tax documents, prior IRS notices
- CTA: *Submit My Past Returns*

**3. Self-Employed & Freelance Tax Filing**
- Includes: 1099 income reporting, business expense deductions, SS & Medicare tax calculation
- Required Docs: 1099 forms/invoices, expense receipts, SSN/Tax ID
- CTA: *File My Self-Employed Taxes*

**4. Cryptocurrency & Investment Tax Reporting**
- Includes: Crypto gains/losses calculation, investment income reporting, IRS compliance
- Required Docs: Crypto transaction reports, investment statements, SSN/Tax ID
- CTA: *Report My Crypto & Investments*

**5. Tax Extensions**
- Includes: IRS extension filing, estimated payment guidance, documentation management
- Required Docs: Income statements, ID/tax documents
- CTA: *Apply for Extension*

**6. Amended Tax Returns**
- Includes: Review prior returns, prepare amended forms, submission to IRS and State
- Required Docs: Previous tax return, corrected financial documents, ID/tax documents
- CTA: *Amend My Return*

**7. Tax Resolution & IRS Issue Support**
- Includes: IRS correspondence handling, payment plan setup, penalty reduction guidance
- Required Docs: IRS letters/notices, tax filings, ID/tax documents
- CTA: *Resolve My Tax Issue*

**8. IRS Audit Support & Representation**
- Includes: Audit review/preparation, document submission guidance, direct IRS communication
- Required Docs: Tax returns, supporting documents, ID/tax documents
- CTA: *Get Audit Support*

**9. Tax Planning & Consultation**
- Includes: Year-round planning, personalized consultation, retirement & deduction strategies
- Required Docs: Past tax returns, income/expense statements, ID/tax documents
- CTA: *Schedule Consultation*

**10. Bookkeeping & Payroll Services**
- Includes: Daily transaction recording, bank reconciliations, payroll processing/reporting
- Required Docs: Employee info & salary details, bank statements, business financial records
- CTA: *Manage My Business Finances*

**11. Business Valuation**
- Includes: Financial analysis, asset evaluation, market comparison
- Required Docs: Financial statements, asset lists, business records
- CTA: *Get My Business Valued*

---

### 4.5 Blog / Insights Page
- List of all blog articles with image, title, excerpt, "Read More"
- Individual article page: full content, social sharing buttons
- CTA: "Schedule Consultation"
- Content: Tax tips, financial insights, industry updates

---

### 4.6 Contact Page

**Form Fields:** Name, Email, Phone, Subject, Message, optional small file attachment

**Other Elements:**
- Office info & map
- WhatsApp / Phone / Email CTA
- Book Appointment CTA

**Behavior:** Form submits to admin, stored for follow-up

---

## 5. User Authentication System

**Login & Signup Options:**
- Sign up with Email
- Login with Email
- Login with Google (Google Authentication)

**Signup Fields:** Full Name, Email, Phone Number, Password

**After Login:** User is redirected to Client Dashboard

---

## 6. Client Portal (User Dashboard)

**Purpose:** Secure client access to their applications and documents.

### Dashboard Sections:
1. **Dashboard Overview** — Active applications, document status, recent activity
2. **My Applications** — View all submitted applications with status
3. **Upload Documents** — Secure document upload
4. **Appointments** — Book/reschedule appointments
5. **Profile Settings**

### Client Dashboard Features:
- View submitted applications
- Upload & manage documents securely
- Track application status: **Submitted → In Review → Completed**
- Book or reschedule appointments
- Access messages from admin
- Download completed documents (if any)

---

## 7. Application Submission System (CORE FEATURE)

### Application Flow:
1. User selects a service
2. Clicks "Apply Now"
3. Application form opens (service pre-selected)
4. Fills form & uploads documents
5. Submits → Confirmation message + Email notification sent

### Application Form Fields:

**Personal Information:**
- Full Name
- Email
- Phone Number
- Address

**Identification Details (IMPORTANT):**
- SSN / Tax ID
- Date of Birth
- Filing Status (Single / Married / Head of Household etc.)

**Service Selection:**
- Pre-selected (auto from service page)

**Additional Fields:**
- Notes / Comments
- Previous tax filing (Yes/No)

**Document Upload (required):**
- ID Proof
- Income documents (W-2, 1099 etc.)
- Bank statements
- Any additional files

### After Submission:
- Application saved with **Status = Pending**
- Visible in both Client Dashboard and Admin Dashboard
- Email confirmation sent to client

---

## 8. Secure Document Upload System

**Features:**
- Upload multiple files (PDF, JPG, PNG)
- Drag & drop or "Choose File" button
- File validation: size & type check
- Show file names and status
- Allow preview/download
- Documents linked to specific application
- Confirmation of upload shown

**Document Status:**
- Pending
- Approved
- Rejected

**Rules:**
- Documents must be linked to the application
- Only the user & admin can access files
- Admin must be able to review each file individually

---

## 9. Appointment Booking System

### Booking Flow:
1. User clicks "Book Appointment"
2. Selects service
3. Chooses date (mobile-first calendar picker)
4. Chooses time slot
5. Submits request
6. Confirmation message + email notification sent

### Form Fields:
- Name
- Email
- Phone
- Service
- Preferred Date
- Preferred Time
- Additional Notes

### After Submission:
- Status = Pending
- Visible to admin
- Option to reschedule via portal

---

## 10. Admin Dashboard (Full Control System)

**Purpose:** Manage all clients, applications, documents, appointments, services, and content from one place.

### 10.1 Dashboard Overview / Analytics
- Total clients
- Total applications
- Pending / In Progress / Completed / Rejected counts
- Appointments scheduled
- Recent activity
- Popular services report
- Export reports option

### 10.2 Application Management (CORE)
- View all submitted applications
- Open full application details
- See uploaded documents
- Change application status:
  - Pending
  - In Progress
  - Completed
  - Rejected
- Add comments / message client

### 10.3 Document Management
- View all documents per application
- Download files
- Approve / Reject documents

### 10.4 Appointment Management
- Calendar view of all bookings
- Approve / Reschedule / Cancel appointments
- Automatic notifications sent to clients

### 10.5 Services Management
- Add / Edit / Delete service pages
- Update service descriptions, required documents, CTAs
- Maintain consistency with Mega Menu

### 10.6 Client Management
- View all user profiles
- Track portal activity
- View their applications
- Reset passwords / manage login credentials

### 10.7 Blog Management
- Create / Edit / Delete blog posts
- Manage categories
- Option to feature posts on homepage

### 10.8 Settings / Configuration
- Site-wide settings
- Notification preferences
- Email templates
- Document upload settings

---

## 11. Notification System

**Admin receives notifications for:**
- New application submitted
- New document uploaded
- New appointment booked

**Client receives notifications for:**
- Application submission confirmation
- Document approval / rejection
- Application status update
- Appointment confirmation & reminders

---

## 12. Complete User Flows

### New Client Journey:
1. Visits website → Views hero, services, testimonials
2. Browses Services via Mega Menu
3. Clicks desired service → Service page opens
4. Clicks "Apply Now" → Fills application form
5. Uploads required documents
6. Submits → Gets confirmation email
7. (Optional) Creates account / logs into Client Portal
8. Tracks application status in portal
9. Books appointment if needed
10. Admin reviews → Updates status → Client notified

### Existing Client Journey:
1. Logs into Client Portal
2. Views dashboard: active applications, document status
3. Uploads additional documents if needed
4. Tracks progress in real-time
5. Books / reschedules appointments
6. Gets updates via notifications

### Internal Admin Workflow:
1. Admin logs in → Sees dashboard overview
2. Reviews new applications
3. Downloads & reviews uploaded documents
4. Updates application status
5. Communicates with client via comments
6. Manages appointments from calendar
7. Updates services/content as needed

---

## 13. UI/UX Design Requirements

### Design Philosophy:
- **Mobile-First:** Every element works perfectly on mobile first; desktop is scaled-up version
- **Simplicity & Clarity:** Minimalist design, easy-to-read fonts, clear CTAs
- **Trust & Professionalism:** Professional color palette, visual cues for security
- **Consistency:** Typography, buttons, spacing, colors consistent across all pages

### Color Palette & Branding:
- **Primary Colors:** Red & Black
- **Secondary Accent:** Neon Orange
- **Background:** White or light gray
- **CTA Buttons:** Red button with white text
- **Hover Effect:** Slight shadow or neon accent

### Typography:
- Font: Clean, sans-serif (professional & modern)
- Headlines: Bold, attention-grabbing
- Body text: 14–16px minimum (readable on small screens)
- Line spacing: Comfortable for mobile reading
- High color contrast for readability

### Mobile-First Priorities:
1. Hamburger menu for mobile navigation
2. CTAs always visible above the fold
3. Large touch-friendly buttons and links
4. Avoid crowded layouts
5. Accordion menus for services on mobile
6. Full-width CTA buttons in menus
7. Maximum 2 levels of nested menus

### Layout Guidelines:

**Home Page:**
- Hero section → Services overview → How It Works → Testimonials → Final CTA
- White space around elements to avoid clutter

**Services Page:**
- Cards for each service: title, short description, CTA
- Mobile: stacked vertically
- Desktop: grid layout

**Client Portal / Application Forms:**
- Clear input fields with labels above each field
- Progress bar for multi-step forms
- Upload buttons: large, touch-friendly, drag-and-drop optional
- Error messages: visible and descriptive

**Document Upload UI:**
- Drag-and-drop or "Choose File" button
- Show file name and status (pending/approved/rejected)
- Mobile: vertical stacking

**Appointment Booking UI:**
- Mobile-first calendar picker
- Large clickable dates and time slots
- Confirmation message after submission

**Admin Dashboard UX:**
- Cards, tables, and icons for clarity
- Mobile-first: collapsible sections, scrollable tables
- Quick access to: Applications, Documents, Appointments, Notifications
- Color-coded status indicators

### CTA Placement:

| Location | CTA Text | Purpose |
|---|---|---|
| Mega Menu / Dropdown | Apply Now | Encourage service application |
| Service Page Header | Start My Application | Primary conversion |
| Service Page Footer | Book Appointment | Secondary conversion |
| Navbar / Top Bar | Client Portal Login | Quick access for returning clients |

---

## 14. Security Requirements

- Secure user login system (hashed passwords)
- Google Authentication option
- Protected document handling — only user & admin can access files
- Confidential client data (SSN, Tax ID must be private)
- Documents must be linked to specific user/application only
- Secure file uploads with type/size validation

---

## 15. Key Design Principles (Summary)

Every feature must be built with:
- **Simplicity** — Users should never feel lost
- **Clarity** — Important actions always visible, minimal clicks
- **Security** — Sensitive data protected at all times
- **Efficiency** — Reduce manual work by 50–70%, smooth scrolling, quick feedback

---

## 16. Business Impact Goals

This platform will:
- Fully digitize Action Plus Tax operations
- Replace manual processes (calls, WhatsApp, email back-and-forth)
- Reduce manual workload
- Save time daily
- Improve client satisfaction
- Increase conversion rates
- Position Action Plus Tax as a **premium brand** competing with top U.S. tax platforms
