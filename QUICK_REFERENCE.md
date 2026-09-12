# YouthHub MVP - Quick Reference Guide

## 🚀 Getting Started (30 seconds)

```bash
git clone https://github.com/Cyuzuzofabrice/rwanda-youth-hub.git
cd rwanda-youth-hub
npm install
npm run dev
# Open http://localhost:3000
```

---

## 📍 Main Pages & Routes

### Public Pages (Anyone can access)

| Page | URL | Purpose |
|------|-----|----------|
| Home | `/` | Landing page, overview |
| Opportunities | `/opportunities` | Browse jobs/internships/etc |
| Opportunity Details | `/opportunities/1` | Full details of one opportunity |
| Skill Swap | `/skill-swap` | Find people to exchange skills |
| Create Skill | `/skill-swap/create` | Add your skills (login required) |
| Learn | `/learn` | Browse courses & resources |
| Career Paths | `/career` | Explore career options |
| Profile | `/profile/1` | View user profile |
| Login | `/login` | Sign in |
| Register | `/register` | Create account |
| Forgot Password | `/forgot-password` | Reset password |

### Protected Pages (Login required)

| Page | URL | Purpose |
|------|-----|----------|
| Dashboard | `/dashboard` | User dashboard, saved items |

---

## 🧬 File Structure Quick Navigation

### Pages (Add new pages here)
```
src/pages/
├── Home.jsx                 ← Landing page
├── Opportunities.jsx        ← Opportunities list
├── OpportunityDetails.jsx   ← Single opportunity
├── SkillSwap.jsx           ← Skill profiles
├── CreateSkill.jsx         ← Create skill form
├── Learn.jsx               ← Courses
├── Career.jsx              ← Career paths
├── Profile.jsx             ← User profile
├── Dashboard.jsx           ← User dashboard (protected)
├── Login.jsx               ← Login form
├── Register.jsx            ← Registration form
└── ForgotPassword.jsx      ← Password reset
```

### Components (Reusable UI)
```
src/components/
├── Navbar.jsx              ← Top navigation
├── Footer.jsx              ← Site footer
├── Button.jsx              ← Button component
├── OpportunityCard.jsx     ← Opportunity card
├── OpportunityFilters.jsx  ← Filter panel
├── SkillCard.jsx          ← Skill profile card
├── CategoryCard.jsx        ← Category card
├── SearchBar.jsx           ← Search input
├── ProfileCard.jsx         ← User profile card
├── EmptyState.jsx          ← No results state
├── LoadingState.jsx        ← Loading spinner
├── Navbar.css              ← Navbar styles
└── [other component styles]
```

### Data (Mock data)
```
src/data/
├── opportunities.js        ← 12 job/internship opportunities
├── skills.js              ← 8 skill profiles
├── courses.js             ← 8 learning courses
└── careers.js             ← 8 career paths
```

### Context (State management)
```
src/context/
└── AuthContext.jsx        ← User authentication state
    ├── useAuth()          ← Hook to access auth
    ├── login()            ← Login function
    ├── register()         ← Registration function
    ├── logout()           ← Logout function
    └── user               ← Current user object
```

### Layouts (Page wrappers)
```
src/layouts/
├── MainLayout.jsx         ← Standard layout with Navbar/Footer
└── DashboardLayout.jsx    ← Dashboard layout
```

### Core Files
```
src/
├── App.jsx                ← Main app with routing
├── main.jsx               ← Entry point
├── index.css              ← Global styles
├── tailwind.config.js     ← Design system config
└── postcss.config.js      ← CSS processing
```

---

## 🎨 Design System

### Colors
```
Primary: #1b5e2e (Rwanda Green)
Primary Dark: #0f4620
Primary Light: #2d7d45
Accent: #d4a574 (Gold)
Neutral 900: #1a1a1a (Black)
Neutral 100: #f5f5f5 (Light Gray)
Neutral 50: #fafafa (Lightest)
```

### Spacing (8px base unit)
```
1 = 8px
2 = 16px
3 = 24px
4 = 32px
5 = 40px
6 = 48px
```

### Typography
```
Font: Inter (Google Fonts)
Base Size: 16px

Headings:
- 4xl: 40px
- 3xl: 32px
- 2xl: 24px
- xl: 20px

Body:
- base: 16px
- sm: 14px
- xs: 12px
```

### Components
```
.btn-primary         ← Green button
.btn-secondary       ← Gray button
.btn-outline         ← Outlined button
.card                ← Card component
.input-field         ← Form input
.label               ← Form label
.error-text          ← Error message
```

---

## 🔧 Common Tasks

### Add a New Page

1. Create `src/pages/NewPage.jsx`
   ```jsx
   import React from 'react'
   import MainLayout from '../layouts/MainLayout'

   const NewPage = () => {
     return (
       <MainLayout>
         <div className="max-w-4xl mx-auto px-4 py-12">
           <h1>New Page</h1>
         </div>
       </MainLayout>
     )
   }

   export default NewPage
   ```

2. Import in `src/App.jsx`
   ```jsx
   import NewPage from './pages/NewPage'
   ```

3. Add route in `App.jsx`
   ```jsx
   <Route path="/new-page" element={<NewPage />} />
   ```

### Add a New Component

1. Create `src/components/NewComponent.jsx`
   ```jsx
   import React from 'react'

   const NewComponent = ({ title, description }) => {
     return (
       <div className="card p-4">
         <h2 className="text-xl font-bold">{title}</h2>
         <p className="text-neutral-600">{description}</p>
       </div>
     )
   }

   export default NewComponent
   ```

2. Use in pages
   ```jsx
   import NewComponent from '../components/NewComponent'
   ```

### Use Authentication

```jsx
import { useAuth } from '../context/AuthContext'

const MyComponent = () => {
  const { user, isAuthenticated, logout, login } = useAuth()

  if (!isAuthenticated) {
    return <p>Please login</p>
  }

  return (
    <div>
      <p>Hello {user.fullName}</p>
      <button onClick={logout}>Logout</button>
    </div>
  )
}
```

### Protect a Route

```jsx
// Already done in App.jsx, but here's how:
<Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>
```

### Add Search/Filter

```jsx
const [filteredItems, setFilteredItems] = useState(items)

const handleSearch = (query) => {
  setFilteredItems(
    items.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase())
    )
  )
}

const handleFilter = (category) => {
  setFilteredItems(
    items.filter(item => item.category === category)
  )
}
```

---

## 🧪 Testing

### Test All Routes

```
✓ /                    - Home page loads
✓ /opportunities       - Opportunities list shows
✓ /opportunities/1     - Details page loads
✓ /skill-swap          - Skill profiles show
✓ /skill-swap/create   - Form appears (login required)
✓ /learn               - Courses show
✓ /career              - Careers show
✓ /profile/1           - Profile shows
✓ /dashboard           - Dashboard shows (login required)
✓ /login               - Login form shows
✓ /register            - Register form shows
✓ /forgot-password     - Password reset form shows
✓ /invalid             - Redirects to home
```

### Test Features

- [ ] Search works on opportunities
- [ ] Filters work on opportunities
- [ ] Sort works on opportunities
- [ ] Navigation works between pages
- [ ] Login/logout works
- [ ] Dashboard is protected
- [ ] Forms validate
- [ ] Responsive on mobile
- [ ] No console errors
- [ ] All links work

### Test Credentials

```
Email: any@example.com
Password: any password 6+ characters
(Mock auth - any valid combo works)
```

---

## 🚨 Troubleshooting

### Port 3000 already in use
```bash
npm run dev -- --port 3001
```

### Dependencies not found
```bash
rm -rf node_modules package-lock.json
npm install
```

### CSS not working
- Check `index.css` is imported in `main.jsx`
- Verify tailwind.config.js has correct content paths
- Clear browser cache (Ctrl+Shift+Delete)
- Restart dev server

### Build errors
```bash
npm run build
# Look at error messages
# Usually missing import or typo
```

### Routes not working
- Check import in App.jsx
- Verify component exports default
- Check path matches route
- Restart dev server

### Styling not applying
- Use correct Tailwind class names
- Check component has proper className
- Verify no CSS conflicts
- Check browser DevTools

---

## 📊 Data Structure

### Opportunity Object
```javascript
{
  id: 1,
  title: "Frontend Developer",
  organization: "TechCorp",
  location: "Kigali",
  type: "Full-time",
  remote: true,
  deadline: "2024-10-30",
  description: "...",
  requirements: ["React", "TypeScript"],
  responsibilities: ["Build UIs", "Fix bugs"]
}
```

### Skill Object
```javascript
{
  id: 1,
  name: "John Doe",
  title: "Frontend Developer",
  location: "Kigali",
  avatar: "https://...",
  canTeach: ["React", "TypeScript"],
  wantToLearn: ["Python", "Django"],
  experienceLevel: "Intermediate"
}
```

### Course Object
```javascript
{
  id: 1,
  title: "React Basics",
  provider: "Udemy",
  category: "Web Development",
  level: "Beginner",
  price: "Free",
  url: "https://..."
}
```

### Career Object
```javascript
{
  id: 1,
  title: "Software Engineer",
  description: "...",
  requiredSkills: ["Programming", "Problem Solving"],
  learningResources: [...],
  relatedOpportunities: [1, 2, 3]
}
```

### User Object
```javascript
{
  id: "1234567890",
  email: "user@example.com",
  fullName: "John Doe",
  location: "Kigali",
  mainInterest: "Finding a job"
}
```

---

## 📚 Useful Links

### Documentation
- [README.md](README.md) - Full project overview
- [VERIFICATION.md](VERIFICATION.md) - Testing checklist
- [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) - Deployment steps
- [FINAL_SUMMARY.md](FINAL_SUMMARY.md) - Project summary

### External Resources
- [React Docs](https://react.dev)
- [React Router](https://reactrouter.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Lucide Icons](https://lucide.dev)
- [Vite](https://vitejs.dev)

---

## 🎯 What's Next

### Before Backend
1. ✅ MVP Frontend complete
2. ⬜ Run application and verify UI
3. ⬜ Fix any visual/functional issues
4. ⬜ Conduct user testing
5. ⬜ Gather feedback

### Backend Phase
1. ⬜ Setup Node.js server
2. ⬜ Configure PostgreSQL database
3. ⬜ Implement authentication API
4. ⬜ Create data APIs
5. ⬜ Connect frontend to backend
6. ⬜ Add email service
7. ⬜ Setup file uploads
8. ⬜ Deploy to production

---

## ✅ Checklist for New Developers

- [ ] Clone repository
- [ ] Run `npm install`
- [ ] Run `npm run dev`
- [ ] Visit `http://localhost:3000`
- [ ] Test all pages and routes
- [ ] Read README.md
- [ ] Read FINAL_SUMMARY.md
- [ ] Understand folder structure
- [ ] Review design system
- [ ] Review mock data files
- [ ] Review AuthContext implementation
- [ ] Make your first contribution

---

## 💡 Tips & Best Practices

### Code Style
- Use functional components
- Use hooks (useState, useEffect, useContext)
- Keep components small and focused
- Use descriptive variable names
- Add comments for complex logic

### Styling
- Use Tailwind classes first
- Create custom CSS only when necessary
- Follow design tokens in tailwind.config.js
- Mobile-first responsive design
- Test on mobile devices

### Performance
- Avoid unnecessary re-renders
- Use keys in lists
- Lazy load images
- Code split routes (for later)
- Minimize bundle size

### Accessibility
- Use semantic HTML
- Add alt text to images
- Ensure keyboard navigation
- Use proper heading hierarchy
- Test with screen readers

### Git Workflow
```bash
# Create feature branch
git checkout -b feature/your-feature

# Make changes
# Test locally

# Commit
git add .
git commit -m "Clear description of changes"

# Push
git push origin feature/your-feature

# Create Pull Request
```

---

## 🆘 Getting Help

1. Check error messages carefully
2. Search in browser DevTools
3. Check console for errors
4. Review component code
5. Check file paths and imports
6. Restart dev server
7. Clear cache and rebuild
8. Ask team member
9. Check documentation
10. Review similar code

---

## 📞 Support

**Issues/Bugs**: Create GitHub issue
**Questions**: Ask in team channel  
**Suggestions**: Submit pull request
**Documentation**: Update docs files

---

**Last Updated**: September 12, 2024  
**Version**: MVP 0.1.0  
**Maintained by**: Development Team
