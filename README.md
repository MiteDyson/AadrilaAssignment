
---

# 📝 **Aadrila – AI-Powered Document Automation & Fraud Detection**

<div align="center">

<img src="https://raw.githubusercontent.com/MiteDyson/AadrilaAssignment/main/src/assets/Group%2047.svg" width="180" alt="Aadrila Logo">

### **Pixel-perfect replication of Aadrila.ai’s intelligent automation platform (Assignment).**

🔗 **Live Demo:** [Here](https://aadrila-task-mite.vercel.app/)

📦 **Repository:** [Here](https://www.google.com/url?sa=E&source=gmail&q=https://github.com/MiteDyson/AadrilaAssignment)

</div>

---

## ✨ **Project Overview**

This project is a high-fidelity, **pixel-perfect replication** of the Aadrila.ai design. Developed as a technical assignment, it focuses on matching the exact spacing, typography, and complex animation behaviors defined in the official Figma prototype.

The platform showcases Aadrila’s AI-driven suite for document extraction, fraud detection, and industry-specific automation (Healthcare, Lending, and Insurance).

---

## 🎯 **Evaluation & Quality Standards**

This implementation was built to meet the following high-quality expectations:

* **Pixel-Perfect Accuracy:** Every margin, padding, color hex code, and font-weight matches the Figma design.
* **Exact Animation Behavior:** Replicated transitions and interactions (including the scan-line effect) from the Figma Prototype/Present mode.
* **Fully Responsive:** Seamless layout transitions from mobile to ultra-wide desktop screens.
* **Clean Codebase:** Modular component structure using React 19 and TypeScript for maximum readability and scalability.

---

## 🚀 **Key Features**

### 🛠️ Product Showcase

* **DocSim:** AI engine for detecting near-duplicates and fraudulent patterns.
* **DocPilot:** Real-time tracking dashboards and automated document routing.
* **Doxtract:** High-accuracy OCR extraction for unstructured documents.

### 🎨 UI & Animation Engine

* **Hero Scan Animation:** A custom CSS-driven "AI Scanner" effect that overlays document previews.
* **Staggered Entrance:** Sections utilize Intersection Observers to trigger synchronized fade-in and slide animations.
* **Interactive Carousels:** Smoothly animated sliders for both the Hero section and the Blog insights.
* **Modern Form Logic:** A fully responsive contact and inquiry section.

---

## 🏗️ **Architecture Overview**

```
AadrilaAssignment/
├── src/
│   ├── components/         # Atomic & Layout components
│   │   ├── Navbar.tsx      # Dynamic scroll-aware navigation
│   │   ├── HeroHome.tsx    # Carousel with scanning logic
│   │   ├── Products.tsx    # Features grid with hover effects
│   │   └── Contact.tsx     # Footer & Inquiry form
│   ├── assets/             # SVGs and optimized PNGs
│   ├── index.css           # Tailwind 4.0 configuration & custom keyframes
│   ├── App.tsx             # Root layout assembly
│   └── main.tsx            # React 19 entry point
└── vite.config.ts          # Build and alias configuration

```

---

## 🔧 **Tech Stack**

| Tool | Usage |
| --- | --- |
| **React 19** | Modern UI framework utilizing the latest rendering features. |
| **TypeScript** | Type-safety across all components and props. |
| **Tailwind CSS 4** | High-performance styling with zero-runtime overhead. |
| **Lucide React** | Consistent, lightweight vector iconography. |
| **Vite** | Next-generation frontend tooling for instant HMR. |

---

## ⚙️ **Local Setup**

### 1. Clone & Install

```bash
git clone https://github.com/MiteDyson/AadrilaAssignment
cd AadrilaAssignment
npm install

```

### 2. Run Locally

```bash
npm run dev

```

➡ Open **http://localhost:5173** to view the app.

---

## 📡 **Implementation Highlights**

### **The Scan Animation**

To achieve the "AI Scanning" look from the Figma file, I implemented a custom CSS animation:

```css
@keyframes scanLines {
  0% { transform: translateY(-100%); opacity: 0; }
  50% { transform: translateY(100%); opacity: 1; }
  100% { transform: translateY(-100%); opacity: 0; }
}

```

### **Deployment**

The project is continuously deployed via **Vercel** with automated builds triggered by GitHub commits to ensure the live environment is always up to date.

---

<div align="center">

### **Developed with 🎯 precision, 💻 clean code, and 🚀 performance in mind.**

[View Live Site](https://aadrila-task-mite.vercel.app/)

</div>
