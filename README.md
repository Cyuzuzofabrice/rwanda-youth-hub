# YouthHub - Rwanda Youth Opportunity Platform

A modern web platform connecting Rwandan youth with job opportunities, internships, scholarships, training, and peer-to-peer skill sharing.

## 🎯 Project Overview

YouthHub is an MVP (Minimum Viable Product) designed to address youth unemployment and skill gaps in Rwanda by:

- **Centralized Opportunity Hub**: Jobs, internships, scholarships, training, freelance work, and competitions in one place
- **Skill Swap Network**: Peer-to-peer skill sharing platform where youth can teach and learn from each other
- **Career Guidance**: Career path recommendations with learning resources and related opportunities
- **User Profiles**: Build professional profiles and connect with others
- **Learning Hub**: Curated courses and resources from top providers

## ✨ Features

### Current MVP Features

#### 1. Opportunities
- Browse jobs, internships, scholarships, training, freelance work, grants, and competitions
- Search and filter by category, location, type, and remote/on-site
- View detailed opportunity information
- Save opportunities
- Sort by latest or deadline

#### 2. Skill Swap
- Browse user profiles with skills they can teach and want to learn
- Search and filter by skill categories
- Connect directly with users
- Create your own skill profile

#### 3. Learn
- Curated learning resources from major platforms
- Filter by category and skill level
- Links to external courses and materials

#### 4. Career Paths
- Explore 8 career paths in Rwanda
- View key skills for each path
- Recommended learning resources
- Related opportunities

#### 5. User Accounts
- User registration and login
- Personal profiles
- Dashboard with saved opportunities and skill matches
- Password reset functionality

## 🏗️ Architecture

### Tech Stack
- **Frontend**: React 18 + Vite
- **Routing**: React Router v6
- **Styling**: Tailwind CSS + Custom CSS
- **Icons**: Lucide React
- **State Management**: React Context API (Auth)
- **Build Tool**: Vite

### Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Button.jsx
│   ├── OpportunityCard.jsx
│   ├── OpportunityFilters.jsx
│   ├── SkillCard.jsx
│   ├── CategoryCard.jsx
│   ├── SearchBar.jsx
│   ├── ProfileCard.jsx
│   ├── EmptyState.jsx
│   └── LoadingState.jsx
├── pages/               # Page components
│   ├── Home.jsx
│   ├── Opportunities.jsx
│   ├── OpportunityDetails.jsx
│   ├── SkillSwap.jsx
│   ├── CreateSkill.jsx
│   ├── Profile.jsx
│   ├── Dashboard.jsx
│   ├── Learn.jsx
│   ├── Career.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   └── ForgotPassword.jsx
├── layouts/             # Layout wrappers
│   ├── MainLayout.jsx
│   └── DashboardLayout.jsx
├── context/             # React Context
│   └── AuthContext.jsx
├── data/                # Mock data
│   ├── opportunities.js
│   ├── skills.js
│   ├── courses.js
│   └── careers.js
├── App.jsx              # Main app component with routing
├── main.jsx             # Entry point
└── index.css            # Global styles
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm/yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Cyuzuzofabrice/rwanda-youth-hub.git
   cd rwanda-youth-hub
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:3000`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📋 Routes

### Public Routes
- `/` - Homepage with featured opportunities and overview
- `/opportunities` - Browse all opportunities with search and filters
- `/opportunities/:id` - Detailed view of a single opportunity
- `/skill-swap` - Browse skill swap profiles
- `/skill-swap/create` - Create a new skill swap profile
- `/learn` - Learning resources and courses
- `/career` - Career paths and guidance
- `/profile/:id` - User profile page
- `/login` - Sign in page
- `/register` - Create account page
- `/forgot-password` - Password reset page

### Protected Routes
- `/dashboard` - User dashboard (requires login)

## 🔐 Authentication

### Current Implementation
- **Mock Authentication**: Uses localStorage and React Context
- **No Backend**: Currently stores auth state client-side only
- **Persistence**: User data persists on refresh
- **Protected Routes**: Dashboard requires login

### To Connect Real Backend
1. Update `AuthContext.jsx` to call API endpoints
2. Replace mock login/register with actual API calls
3. Implement JWT token management
4. Add proper error handling and validation

## 💾 Data

### Mock Data Files
- `src/data/opportunities.js` - 12 sample opportunities
- `src/data/skills.js` - 8 sample skill profiles
- `src/data/courses.js` - 8 learning courses
- `src/data/careers.js` - 8 career paths

### To Connect Real Backend
1. Create API service layer (`src/services/api.js`)
2. Replace data imports with API calls
3. Implement loading and error states
4. Add pagination for large datasets

## 🎨 Design System

### Colors
- **Primary**: #1b5e2e (Rwanda green)
- **Primary Dark**: #0f4620
- **Primary Light**: #2d7d45
- **Accent**: #d4a574 (Gold)
- **Neutral**: Grayscale from #1a1a1a to #fafafa

### Typography
- **Font**: Inter (Google Fonts)
- **Base size**: 16px
- **Scale**: 12px → 40px

### Components
- Cards with subtle shadows
- Rounded corners (4px - 16px)
- Consistent spacing (8px base unit)
- Accessible form fields
- Icon integration (Lucide React)

## 📱 Responsive Design

- **Mobile**: 375px - 640px
- **Tablet**: 641px - 1024px
- **Desktop**: 1025px+

All components are fully responsive with mobile-first approach.

## 🧪 Testing

### Manual Testing Checklist

- [ ] **Routing**: All routes work correctly
- [ ] **Navigation**: Navbar links navigate properly
- [ ] **Authentication**: Login/Register/Logout flow
- [ ] **Search**: Search filters work on Opportunities and Skill Swap
- [ ] **Forms**: Form validation and submission
- [ ] **Responsive**: Mobile, tablet, desktop layouts
- [ ] **Performance**: Page load times
- [ ] **Browser Console**: No errors or warnings

### Testing Credentials

**Mock Login** (any email/password 6+ chars):
- Email: `user@example.com`
- Password: `password123`

## 🔄 Development Workflow

### Adding New Features

1. **Create page component** in `src/pages/`
2. **Add route** in `src/App.jsx`
3. **Create reusable components** in `src/components/`
4. **Add data** to `src/data/` if needed
5. **Test routing and UI**

### Adding New Data

1. Add to appropriate file in `src/data/`
2. Export from that file
3. Import in component
4. Render using `.map()` or `.filter()`

## 🐛 Troubleshooting

### Port Already in Use
```bash
npm run dev -- --port 3001
```

### Build Errors
```bash
rm -rf node_modules package-lock.json
npm install
```

### CSS Not Loading
- Ensure `index.css` is imported in `main.jsx`
- Check Tailwind config is correct
- Clear browser cache

### Routes Not Working
- Verify all pages are exported correctly
- Check route paths match component paths
- Ensure App.jsx is properly configured

## 📈 Future Enhancements

### Phase 2
- [ ] User favorites/bookmarks
- [ ] Direct messaging between users
- [ ] Application tracking
- [ ] Notifications
- [ ] Email notifications
- [ ] Advanced search filters

### Phase 3
- [ ] Real backend API
- [ ] Database (PostgreSQL)
- [ ] Admin dashboard
- [ ] Moderation system
- [ ] User reviews and ratings
- [ ] Analytics

### Phase 4
- [ ] Mobile app (React Native)
- [ ] Video profiles
- [ ] Live chat
- [ ] Payments/subscriptions
- [ ] Partnerships with employers
- [ ] Verification system

## 📝 License

This project is licensed under the MIT License - see LICENSE file for details.

## 👥 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact & Support

- **Email**: contact@youthhub.rw
- **Website**: www.youthhub.rw
- **GitHub Issues**: Report bugs and request features

## 🙏 Acknowledgments

- Built with React, Vite, and Tailwind CSS
- Icons by Lucide React
- Inspired by global youth platforms
- Special thanks to the Rwandan youth community

---

**Status**: MVP - Actively Developed 🚀

Last Updated: September 2024
