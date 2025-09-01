# Himansh Saraswat - Game Developer Portfolio

A modern, professional portfolio website showcasing game development projects, skills, and experience.

## Features

### 🎨 Design
- Clean, minimal design with smooth transitions
- Light/Dark mode toggle
- Fully responsive (mobile, tablet, desktop)
- Professional blue/purple accent colors
- Modern typography with Inter and JetBrains Mono fonts

### 📱 Sections
1. **Hero/Landing** - Introduction with call-to-action buttons
2. **About Me** - Personal background and highlights
3. **Skills & Tools** - Technical skills organized by category
4. **Featured Projects** - 4 main projects with links to live demos
5. **Resume/Experience** - Downloadable resume and achievements
6. **Game Jams & Events** - Community involvement and events
7. **Contact** - Contact form and social links

### ⚡ Technical Features
- Semantic HTML5 structure
- CSS Grid and Flexbox layouts
- CSS Custom Properties for theming
- Vanilla JavaScript (no dependencies)
- Intersection Observer for scroll animations
- Optimized performance and accessibility
- SEO-friendly meta tags

## File Structure

```
portfolio/
├── index.html              # Main HTML file
├── css/
│   └── style.css          # Main stylesheet
├── js/
│   └── script.js          # Interactive functionality
├── images/
│   ├── favicon.svg        # Site favicon
│   ├── the-big-one.svg    # Project image
│   ├── copy-car.svg       # Project image
│   ├── project-e.svg      # Project image
│   └── gravity-games.svg  # Project image
└── HimanshSaraswat_Resume.pdf  # Downloadable resume
```

## Getting Started

1. **Local Development**
   ```bash
   # Navigate to the portfolio directory
   cd portfolio
   
   # Open with a local server (recommended)
   # Option 1: Using Python
   python -m http.server 8000
   
   # Option 2: Using Node.js
   npx serve .
   
   # Option 3: Using VS Code Live Server extension
   # Right-click index.html -> "Open with Live Server"
   ```

2. **Open in Browser**
   - Navigate to `http://localhost:8000` (or the port shown)
   - Or simply open `index.html` directly in a browser

## Customization

### Updating Projects
1. Replace placeholder SVG images in `/images/` with actual screenshots
2. Update project information in `index.html`
3. Modify project links to point to live demos/repositories

### Changing Colors
Edit CSS custom properties in `:root` section of `style.css`:
```css
:root {
    --primary-color: #6366f1;      /* Main brand color */
    --secondary-color: #8b5cf6;    /* Secondary accent */
    --accent-color: #06b6d4;       /* Additional accent */
}
```

### Adding Content
- **New sections**: Add HTML structure and corresponding CSS
- **Additional projects**: Follow the existing project card structure
- **Blog posts**: Implement the blog section (currently placeholder)

### Contact Form
The contact form currently shows a demo notification. To make it functional:

1. **Option 1: EmailJS**
   ```javascript
   // Replace the simulateFormSubmission method in script.js
   // with EmailJS integration
   ```

2. **Option 2: Backend API**
   ```javascript
   // Update the form submission endpoint in ContactForm class
   ```

3. **Option 3: Static Form Services**
   - Use services like Netlify Forms, Formspree, or Getform
   - Update the form action attribute

## Performance Optimizations

- ✅ Lazy loading for images
- ✅ Efficient scroll handling with requestAnimationFrame
- ✅ Minimal external dependencies
- ✅ Compressed and optimized assets
- ✅ Semantic HTML for better SEO

## Browser Support

- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- iOS Safari 14+
- Android Chrome 88+

## Deployment

### GitHub Pages
1. Create a GitHub repository
2. Upload files to the repository
3. Enable GitHub Pages in repository settings
4. Access via `https://username.github.io/repository-name`

### Netlify
1. Drag and drop the portfolio folder to Netlify
2. Or connect to GitHub repository for automatic deployments

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the portfolio directory
3. Follow the deployment prompts

### Traditional Web Hosting
1. Upload files via FTP/SFTP to your web host
2. Ensure `index.html` is in the root directory

## Future Enhancements

- [ ] Add actual project screenshots/GIFs
- [ ] Implement blog/devlog functionality
- [ ] Add project filtering and search
- [ ] Include more detailed project case studies
- [ ] Add analytics tracking
- [ ] Implement Progressive Web App features
- [ ] Add more interactive animations

## Credits

- **Design**: Custom design inspired by modern portfolio trends
- **Icons**: Font Awesome 6
- **Fonts**: Google Fonts (Inter, JetBrains Mono)
- **Built by**: GitHub Copilot for Himansh Saraswat

## License

This portfolio template is open source and available under the MIT License. Feel free to use it as a base for your own portfolio!

---

**Note**: Remember to replace placeholder content with actual project images, update contact information, and customize colors/content to match your personal brand.
