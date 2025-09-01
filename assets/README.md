# Assets Folder Guide

This folder contains all media assets for your portfolio website.

## 📁 Folder Structure

```
assets/
├── profile/
│   └── profile-placeholder.svg (Replace with your photo)
└── project-media/
    ├── the-big-one-demo.svg (Replace with gameplay GIF/video)
    ├── copy-car-demo.svg (Replace with AI training GIF/video)  
    ├── project-e-demo.svg (Replace with platformer GIF/video)
    └── gravity-games-demo.svg (Replace with gravity control GIF/video)
```

## 🖼️ Profile Photo

**File:** `profile/profile-placeholder.svg`

**To update your profile photo:**

1. **Add your photo** to the `profile/` folder
2. **Supported formats:** JPG, PNG, WebP, or SVG
3. **Recommended specs:**
   - **Size:** 400x400 pixels minimum
   - **Format:** Square (1:1 aspect ratio)
   - **Quality:** High resolution for crisp display

4. **Update the filename** in `index.html`:
   ```html
   <!-- Change this line in the hero section -->
   <img src="./assets/profile/your-photo.jpg" alt="Himansh Saraswat" class="profile-photo">
   ```

**Example filenames:**
- `profile-photo.jpg`
- `himansh-photo.png` 
- `headshot.webp`

## 🎮 Project Media (GIFs/Videos)

**Files:** `project-media/[project-name]-demo.[ext]`

**Current placeholders:**
- `the-big-one-demo.svg` → Replace with FPS gameplay
- `copy-car-demo.svg` → Replace with AI car learning  
- `project-e-demo.svg` → Replace with platformer movement
- `gravity-games-demo.svg` → Replace with gravity mechanics

### For GIFs:
**Supported:** `.gif`
**Recommended specs:**
- **Size:** 600x300 pixels (2:1 ratio)
- **Duration:** 3-10 seconds
- **File size:** Under 5MB for fast loading
- **Quality:** Balanced between clarity and file size

### For Videos:
**Supported:** `.mp4`, `.webm`
**Recommended specs:**
- **Size:** 600x300 pixels (2:1 ratio)  
- **Duration:** 5-15 seconds
- **Format:** MP4 (H.264) for best browser support
- **File size:** Under 10MB

### How to Update Project Media:

1. **Add your GIF/video** to `project-media/` folder
2. **Update the filename** in `index.html`:

```html
<!-- For The Big One project -->
<img src="./assets/project-media/your-fps-gameplay.gif" alt="The Big One Demo" class="project-media" loading="lazy">

<!-- For videos, use video tag instead -->
<video class="project-video" muted loop>
    <source src="./assets/project-media/your-gameplay.mp4" type="video/mp4">
</video>
```

## 🎯 Implementation Notes

### Current Behavior:
- **Static state:** Shows simple colored thumbnail
- **Hover state:** Shows your GIF/video
- **Responsive:** Automatically adjusts for mobile devices

### File Naming Convention:
Use descriptive, web-friendly names:
- ✅ `fps-gameplay.gif`
- ✅ `ai-training-demo.mp4`
- ✅ `platformer-movement.gif`
- ❌ `My Game Video (Final).mov`

### Optimization Tips:
1. **Compress GIFs:** Use tools like GIPHY or EZGIF
2. **Optimize videos:** Use HandBrake or similar tools
3. **Test file sizes:** Keep under 5-10MB each
4. **Preview on mobile:** Ensure quality looks good on small screens

## 🔄 Quick Update Process

1. **Replace files** in appropriate folders
2. **Update HTML** references if changing filenames  
3. **Test locally** to ensure everything loads
4. **Check mobile view** for responsiveness

The website will automatically use your new media files with the same hover effects and responsive behavior!

---

**Note:** The current SVG placeholders are just temporary - replace them with your actual project screenshots, GIFs, or videos for the best showcase of your work.
