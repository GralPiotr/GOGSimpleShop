# 🛒 Simple Shop – Angular Demo Store

**Simple Shop** is a responsive Angular 20 demo application that mimics a basic game catalog with a shopping cart. It's built to showcase modern Angular capabilities, including Signals, Standalone Components, and a clean UI/UX flow.

---

## ✨ Features

- 🖼️ Product list with lazy loading (5 + 5 logic)
- 🧃 "Game of the Week" banner support
- 🛒 Cart powered by `Signal Store` (add, remove, clear)
- 💾 Persistent cart state using `sessionStorage`
- 📦 Interactive product cards (Owned / In Cart / Available status)
- 🖼️ Fallback image support if `img` fails to load
- 🔁 Simulated API calls via `ProductService` and RxJS `delay`
- 🎨 CSS3 spinner, responsive layout, custom button styling
- 🧪 Unit tests for components and services
- 🌐 Favicon + optimized image loading with `NgOptimizedImage`

---
## 📁 Project Structure
```bash 
src/
├── app/
│   ├── common/            # Reusable components
│   ├── stores/            # Signal-based stores
│   ├── services/          # Product & cart logic
│   ├── directives/        # Fallback image directive
│   ├── mock-data/         # Product mock data
│   └── home/              # Homepage feature
├── assets/                # Images, icons and fonts
├── styles.scss            # Global styling



```

## 🛠️ Technology Stack

- Angular 20 (Standalone Components + Signals)
- SCSS (Modular styling)
- RxJS (with `signal()` and `computed()`)
- Unit testing: Karma + Jasmine

---

## 🚀 Run the App

```bash
npm install
npm start 
```
or
```bash 
ng serve
 ```

- Navigate to: http://localhost:4200
---
## 🧪 Run Unit Tests
```ng test```

Includes tests for:

- Cart / product state and storage

- Header logic and cart visibility

- Product listing & lazy loading

- Fallback image directive

- Home loading and display logic
___
