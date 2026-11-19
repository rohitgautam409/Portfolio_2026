# 📱 iPhone 17 Pro — 3D Interactive Portfolio

[![React](https://img.shields.io/badge/React-19.3.1-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-0.187.0-000000?logo=threedotjs&logoColor=white)](https://threejs.org/)
[![React Three Fiber](https://img.shields.io/badge/R3F-9.8.2-black?logo=react&logoColor=white)](https://docs.pmnd.rs/react-three-fiber)
[![Motion](https://img.shields.io/badge/Framer_Motion-14.9.0-FF0055?logo=framer&logoColor=white)](https://motion.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.3.3-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-8.3.5-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)

An immersive, high-performance creative portfolio experience built with **React 19**, **Three.js (React Three Fiber)**, **Tailwind CSS v4**, and **Framer Motion**.

The project merges a real-time 3D **iPhone 17 Pro** hardware model with a live, interactive **DOM HTML layer** using sub-pixel CSS 3D `matrix3d` camera projections and fluid Apple-style shared element (`layoutId`) animations.

---

## 🌟 Key Features

### 1. Hybrid 3D WebGL + Native DOM Screen
- **Physical 3D Model**: Transformed, photorealistic iPhone 17 Pro GLB mesh rendered via `@react-three/fiber` and `@react-three/drei`.
- **CSS 3D Projection**: Synchronizes the Three.js camera inverted world matrix with the CSS 3D container in real-time, allowing standard HTML/React components (buttons, links, text, inputs) to sit seamlessly flush against the 3D phone glass at 60 FPS.
- **Facing Camera Cull**: Automatically toggles DOM pointer events and visibility when the phone turns away from the viewport to eliminate ghost touches and optimize GPU cycles.

### 2. Apple iOS Shared Layout Animations (`layoutId`)
- Every app on the Home Screen and Dock expands fluidly out of its icon's exact bounding box into a fullscreen application layer.
- Powered by Framer Motion's shared `layoutId` engine using custom spring physics (`stiffness: 300, damping: 30`).
- Closing an app smoothly collapses the viewport back into its corresponding icon on the Home Screen.

### 3. Interactive Spring Physics & Tilt Drag
- **Pointer Drag & Inertia**: Drag to rotate and tilt the phone in full 3D space with subtle spring-back damping.
- **Click vs. Drag Discrimination**: Intelligently differentiates a click from a drag gesture (>6px threshold), preventing accidental 3D rotation when tapping buttons on the phone.

### 4. Mathematical Precision Alignment
- **Centered Dynamic Island**: Mathematically centered pill matching Apple's hardware specifications with balanced flanks.
- **Symmetrical Status Bar**: Live Indian Standard Time (IST) via `dayjs`, custom SVG cellular signal, Wi-Fi, and battery indicator sharing a unified horizontal centerline.

### 5. App Ecosystem
- **Files / Resume**: Comprehensive interactive resume showcasing professional background, experience timeline, education, and direct PDF download.
- **Spotify**: Sleek music player with album artwork, audio scrubbers, and playback controls.
- **Notes**: Developer engineering notes, technical architecture summaries, and memos.
- **App Store**: Featured showcase apps with download badges and category filters.
- **Photos**: Gallery grid displaying creative 3D shaders, renders, and photography.
- **Mail**: Clean inbox interface with message previews and contact compose triggers.
- **Settings**: System preferences and developer links.

---

## 🏗️ Architecture & Mathematics

```
                ┌──────────────────────────────────────┐
                │             App.jsx                  │
                └──────────────────┬───────────────────┘
                                   │
         ┌─────────────────────────┴────────────────────────┐
         ▼                                                  ▼
┌──────────────────┐                               ┌──────────────────┐
│  WebGL 3D Scene  │                               │  CSS 3D DOM Stage│
│ (React Three Fiber)                              │   (HTML Screen)  │
├──────────────────┤                               ├──────────────────┤
│ • ModelExp.jsx   │                               │ • IphoneScreen   │
│ • iPhone 17 Mesh │                               │ • Status Bar     │
│ • Lights & Env   │                               │ • Dynamic Island │
│ • Anchor Object  │                               │ • App Layers     │
└────────┬─────────┘                               └────────┬─────────┘
         │                                                  │
         └───────────── Matrix Synchronization ─────────────┘
                                  │
      ┌───────────────────────────┴───────────────────────────┐
      │  stageEl.style.perspective = camDistance              │
      │  cameraEl.style.transform  = formatCameraMatrix3D()   │
      │  screenEl.style.transform  = formatMatrix3D()         │
      └───────────────────────────────────────────────────────┘
```

### The Matrix Projection Bridge

To map a 2D HTML `div` onto a moving 3D WebGL mesh surface without lag or jitter, `ModelExp.jsx` computes two transformation matrices every frame:

1. **Camera Inversion**:
   $$\text{CSS Camera Transform} = \text{translateZ}(d) \cdot \mathbf{M}_{\text{cam}}^{-1} \cdot \text{translate}\left(\frac{W}{2}, \frac{H}{2}\right)$$
   Where $d = \frac{H / 2}{\tan(\text{FOV} \cdot \pi / 360)}$.

2. **Anchor Projection**:
   Converts the 3D screen plane's `matrixWorld` into a 16-element CSS `matrix3d(...)` string, applying row sign inversion to align WebGL’s right-handed coordinate system with CSS 3D coordinate space.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React 19** | Latest core library for component architecture and state |
| **Three.js** | WebGL 3D graphics rendering engine |
| **React Three Fiber (R3F)** | Declarative Three.js wrapper for React |
| **@react-three/drei** | Optimized GLTF loaders and 3D utilities |
| **Framer Motion / Motion** | Shared element `layoutId` transitions and spring physics |
| **Tailwind CSS v4** | Modern, high-performance styling engine |
| **Vite** | Blazing-fast development and optimized production bundler |
| **Lucide React** | Clean SVG icon set |
| **Day.js** | Lightweight timezone and live time formatting |

---

## 📁 Project Structure

```
Portfolio/
├── public/
│   ├── icons/                  # iOS application icon assets
│   ├── iphone-17-pro/          # Wallpaper textures
│   ├── models/                 # Optimized glTF/GLB 3D models
│   └── profile-2.jpg           # Profile avatar
├── src/
│   ├── components/
│   │   ├── AppLayer/           # Fullscreen App Layers
│   │   │   ├── appStoreApp/    # App Store UI
│   │   │   ├── filesApp/       # Resume & Files UI
│   │   │   ├── mailApp/        # Mail client UI
│   │   │   ├── notesApp/       # Apple Notes UI
│   │   │   ├── photosApp/      # Photos gallery UI
│   │   │   ├── settingsApp/    # System settings UI
│   │   │   └── spotifyApp/     # Spotify music player UI
│   │   ├── HomeScreen/         # iOS Home Screen Interface
│   │   │   ├── appgrid/        # Desktop apps grid
│   │   │   ├── dock/           # Persistent bottom dock
│   │   │   ├── widgets/        # GitHub & Weather interactive widgets
│   │   │   ├── IphoneScreen.jsx# Main screen wrapper & App switcher
│   │   │   └── StatusBar.jsx   # Dynamic Island & status bar
│   │   ├── models/             # 3D GLTF mesh definitions
│   │   └── three/              # WebGL scene, lighting & math loop
│   │       ├── Lights.jsx      # Studio lighting setup
│   │       └── ModelExp.jsx    # Matrix projection & drag loop
│   ├── App.jsx                 # Main application root
│   ├── index.css               # Global styles & Tailwind imports
│   └── main.jsx                # DOM entrypoint
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18.0.0 or higher
- **npm** or **pnpm** / **yarn**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/rohitgautam409/Portfolio_2026.git
   cd Portfolio_2026
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to `http://localhost:5173` to explore the experience.

### Production Build

To compile a minified, production-ready build:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

---

## ⚡ Performance Highlights

- **Reusable Math Vectors**: Instantiates Three.js `Quaternion` and `Vector3` objects outside the render loop, eliminating Garbage Collection (GC) pauses during animation frames.
- **Hardware Acceleration**: All UI transitions use CSS `transform`, `opacity`, and `will-change-transform` to ensure composite-layer acceleration.
- **Optimized Assets**: 3D phone model compressed into transformed binary GLB with deduplicated buffer attributes.

---

## 👨‍💻 Author

**Rohit Gautam**
*Frontend Engineer & Creative Developer*

- 🌐 **GitHub**: [@rohitgautam409](https://github.com/rohitgautam409)
- 📍 **Location**: New Delhi, India

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
