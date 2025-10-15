# 09-project-poe

### Project description

- A subscribable website showing currency values in POE.

### 20251013 - File creation

- npm create vite@latest i-am-project-name --template react
  - Using React + JS

1. Installing `NavBar`

- `react-router-dom`
  - React itself doesn't have built-in routing. A navbar with links to different pages require routing.
  - It provdes:
    - `<BrowserRouter>` - wraps your app for routing.
    - `<Routes>` and `<Route>` - define which component shows for which URL.
    - `<Link>` amd `<NavLink>` - clickable link without reloading the page.
  - What is Routing?
    - Routing is the process of determining what conten to display based on the URL in the browser.
    - `SPA` Single page application, only one HTML(index.html) is loaded, routing let React dynamically swap components whem the URL changes without refreshing the page.

### 20251014 - File creation

- Fixing `NavBar.jsx` to separate `<Link>` and `<Routes>` `App.jsx`

### 20251015 - File creation

- Installing tailwindcss
  1. `npm install tailwindcss @tailwindcss/vite`
  2. Add the `@tailwindcss/vite` plugin to your Vite configuration.
