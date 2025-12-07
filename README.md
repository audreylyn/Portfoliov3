# Audreylyn's Portfolio v3 🚀

A modern, responsive portfolio website showcasing skills, projects, and professional experience. Built with **React**, **TypeScript**, and **Tailwind CSS** with live GitHub integration.

## 🌟 Features

- **Modern UI/UX Design** - Clean, minimalist aesthetic with smooth animations and transitions
- **Dark/Light Theme Toggle** - Seamless theme switching with persistent state
- **Live GitHub Integration** - Real-time GitHub contributions graph and profile stats
- **Responsive Design** - Fully optimized for mobile, tablet, and desktop
- **AI Chatbot** - Interactive Google GenAI-powered chatbot for visitor engagement
- **Smooth Scrolling** - Navigation anchors with smooth scroll behavior
- **Performance Optimized** - Built with Vite for fast development and production builds

## 🛠️ Tech Stack

| Category | Technology |
|----------|-------------|
| **Frontend Framework** | React 19.2 + TypeScript |
| **Styling** | Tailwind CSS 4.1 |
| **Build Tool** | Vite 6.2 |
| **Icons** | Lucide React |
| **AI Integration** | Google GenAI |
| **Deployment** | Vercel |

## 📋 Project Structure

```
Portfoliov3/
├── components/              # React components
│   ├── Navbar.tsx          # Navigation bar with theme toggle
│   ├── Hero.tsx            # Hero section with introduction
│   ├── Philosophy.tsx      # About/Skills section with GitHub stats
│   ├── Projects.tsx        # Portfolio projects showcase
│   ├── Works.tsx           # Work experience/internship
│   ├── Portfolio.tsx       # Portfolio grid layout
│   ├── Certificates.tsx    # Certifications display
│   ├── Ventures.tsx        # Ventures and initiatives
│   ├── BentoGrid.tsx       # Contact section
│   ├── Marquee.tsx         # Scrolling marquee component
│   ├── ParallaxBreak.tsx   # Parallax effect section
│   ├── Interiors.tsx       # Interior sections
│   ├── Footer.tsx          # Footer component
│   ├── Chatbot.tsx         # AI-powered chatbot
│   └── ThemeContext.tsx    # Theme state management
├── App.tsx                 # Main app component
├── index.tsx               # React DOM render
├── index.css               # Global styles
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── package.json            # Project dependencies
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/audreylyn/Portfoliov3.git
   cd Portfoliov3
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📊 GitHub Integration

### Features
- **Live Contribution Graph** - Displays your GitHub contributions for the last 52 weeks
- **Profile Statistics** - Real-time stats including:
  - Public Repositories (39)
  - Private Repositories (8)
  - Followers (6)

### Configuration

The GitHub integration uses two APIs:

1. **GitHub Contributions API**
   ```
   https://github-contributions-api.jogruber.de/v4/audreylyn?y=last
   ```

2. **GitHub REST API**
   ```
   https://api.github.com/users/audreylyn
   ```

To change the GitHub username, edit `components/Philosophy.tsx`:

```typescript
// Line ~19 (Contributions API)
const response = await fetch('https://github-contributions-api.jogruber.de/v4/YOUR_USERNAME?y=last');

// Line ~47 (Profile API)
const profileResponse = await fetch('https://api.github.com/users/YOUR_USERNAME');
```

## 🎨 Customization

### Theme Colors

The portfolio uses a stone/emerald color scheme. Modify `tailwind.config.js` to change colors:

```javascript
// Current palette
- Stone: Text and backgrounds
- Orange: Accent color for CTAs
- Emerald: GitHub contribution intensity
```

### GitHub Stats

Update the total repositories count in `Philosophy.tsx`:

```typescript
const totalRepos = 47; // Update when your total changes
```

## 📱 Sections

| Section | Description |
|---------|-------------|
| **Navbar** | Navigation with theme toggle |
| **Hero** | Introduction and CTA buttons |
| **Philosophy** | Skills, expertise, and GitHub stats |
| **Projects** | Featured projects and portfolio |
| **Works** | Work experience and internship details |
| **Certificates** | Certifications and achievements |
| **Ventures** | Initiatives and side projects |
| **Contact (BentoGrid)** | Contact form and social links |
| **Chatbot** | AI assistant for visitor interaction |
| **Footer** | Footer information |

## 🔗 Navigation

The portfolio uses smooth scroll anchors:

- `/` → Home
- `#about` → About/Skills section
- `#projects` → Projects showcase
- `#works` → Work experience
- `#contact` → Contact section

## 📚 Documentation

For more details on specific features:
- [GitHub Contributions Setup Guide](./GITHUB_CONTRIBUTIONS_SETUP.md)

## 🚀 Deployment

The project is configured for **Vercel** deployment. The `vercel.json` file contains build configurations.

### Deploy to Vercel

1. Connect your GitHub repository to Vercel
2. Vercel automatically detects Vite configuration
3. Deploy with a single click

## 📝 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build locally
```

## 🎯 Features Breakdown

### Dark/Light Theme
- Toggle in navbar (Sun/Moon icon)
- Persists using browser localStorage
- Smooth transitions between themes

### GitHub Contributions
- Fetched in real-time from GitHub API
- 7-row grid showing intensity levels (0-4)
- Fallback data if API fails
- Clickable header links to GitHub profile

### Responsive Design
- Mobile-first approach
- Breakpoints: `md` (768px), `lg` (1024px), `xl` (1280px)
- Touch-friendly navigation on mobile

### Performance
- Code splitting with Vite
- Tree-shaking for unused code
- Optimized images and assets
- Lazy loading where applicable

## 🐛 Troubleshooting

### GitHub Data Not Loading
1. Check if the GitHub username is correct
2. Ensure your GitHub profile is public
3. Check browser console for API errors
4. Try hard refresh (Ctrl+Shift+R)

### Theme Not Persisting
- Check browser localStorage settings
- Ensure cookies/storage are enabled
- Clear cache and reload

### Build Issues
```bash
# Clear node_modules and reinstall
rm -r node_modules
npm install

# Clear Vite cache
rm -r node_modules/.vite
npm run build
```

## 📞 Contact

- **Email**: audreylynmorana@gmail.com
- **GitHub**: [audreylyn](https://github.com/audreylyn)
- **LinkedIn**: [Audreylyn Moraña](#)

## 📄 License

This project is personal and not licensed for redistribution.

## 🙏 Acknowledgments

- [React](https://react.dev) - UI library
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS
- [Vite](https://vitejs.dev) - Next generation frontend tooling
- [Lucide](https://lucide.dev) - Beautiful icon library
- [GitHub Contributions API](https://github.com/grubersjoe/github-contributions-api) - Contribution data

---

**Last Updated**: December 7, 2025  
**Version**: 3.0.0  
**Status**: Active Development
