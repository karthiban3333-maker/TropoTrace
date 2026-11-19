# ⚡ TropoTrace — Convective Intelligence Command Center

> **A hyperlocal convective storm tracking and atmospheric intelligence platform built with React, TypeScript, Vite, Leaflet, and Firebase.**

TropoTrace is a real-time convective storm tracking, nowcasting, and disaster mitigation command center. It equips meteorologists, emergency response teams, and civil protection operators with advanced situational awareness for monitoring extreme convective phenomena — including lightning swarms, hail cores, downbursts, and flash-flood producing cloudbursts.

---

## ✨ Features

- 🌩️ **Real-Time Storm Cell Tracking** — Live situational awareness tracking convective initiation, vertical velocity, reflectivity, and estimated times of arrival (ETA).
- 🗺️ **Interactive GIS Geospatial Map** — Powered by Leaflet and OpenStreetMap with layered radar simulation, storm cell vectors, and danger-radius contours.
- ⚠️ **Multi-Hazard Impact Intelligence** — Automated risk scoring and exposure modeling for critical infrastructure, population clusters, and transit corridors.
- 📢 **Multilingual Alert Dispatcher** — Rapid generation of geo-targeted warning broadcasts across multiple regional languages and broadcast channels.
- 🧪 **Scenario Simulation Lab** — Dynamic playback engine running historic and synthetic severe convective storms across 4 complex meteorological scenarios.
- 📈 **Forecast Verification & Model Skill** — Real-time performance evaluation displaying MAE, RMSE, Probability of Detection (POD), and Critical Success Index (CSI).
- 🤖 **TropoTrace AI Analyst** — Meteorological decision-support assistant grounded in live telemetry and simulation snapshots.
- 🔐 **Firebase Security & Storage** — Authenticated role-based access with live Firestore scenario synchronization.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend Framework** | React 19 + TypeScript + Vite |
| **Geospatial & Mapping** | Leaflet + OpenStreetMap |
| **Icons & UI** | Lucide React |
| **Authentication & Database** | Firebase Authentication + Cloud Firestore |
| **Styling** | Modern CSS3 (High-Contrast Radar Command Theme) |
| **Deployment** | Firebase Hosting / Vercel / Netlify |

---

## 📁 Folder Structure

```
TropoTrace/
├── src/
│   ├── components/             # Command center views, map overlays, KPI cards
│   ├── integrations/           # Firebase initialization, Auth, and Firestore
│   ├── services/               # Data provider interfaces & simulation engine
│   ├── data/                   # Scenario definitions, sensor streams, storm cells
│   ├── types.ts                # TypeScript domain models
│   ├── main.tsx                # Application bootstrap
│   └── index.css               # Global theme and radar display styling
├── public/                     # Static icons, map markers, and assets
├── ARCHITECTURE.md             # Detailed architectural specification
├── API.md                      # Data contract and service APIs
├── MODEL.md                    # Convective cell tracking algorithms
├── TOTAL_PROJECT_DOCUMENTATION.md # Comprehensive operator guide
├── firebase.json               # Firebase deployment configuration
├── package.json                # Project dependencies and npm scripts
├── tsconfig.json               # TypeScript configuration
└── vite.config.ts              # Vite configuration
```

---

## 🚀 How to Install and Run

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+) & `npm`

### 1. Clone the Repository
```bash
git clone https://github.com/karthiban3333-maker/TropoTrace.git
cd TropoTrace
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
Provide your Firebase credentials if running with live cloud sync (optional; runs in demo mode out of the box).

### 4. Start Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 5. Build for Production
```bash
npm run build
npm run preview
```

---

## 📸 Screenshots

> _Add screenshots here._

---

## 📄 License

This project is private and proprietary. All rights reserved.

---

## 👨‍💻 Author

**Karthiban A** — [Kode Prime](https://github.com/karthiban3333-maker)
