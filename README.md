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

### 20251014 - Fixing NavBar

- Fixing `NavBar.jsx` to separate `<Link>` and `<Routes>` `App.jsx`

### 20251015 - Adding tailwindcss & graph

- Installing tailwindcss
  1. `npm install tailwindcss @tailwindcss/vite`
  2. Add the `@tailwindcss/vite` plugin to your Vite configuration.

### 20251016 - Messing with layout and learning graph

1. Learning ` import {useLocation} from "react-router-dom"` to add style to current page tap.

### 20251017 - API

1. Test an API call locally (cleint-side or Node-side)
   Before integrate it into the Express routes, you should confirm that your request actually works and that the API responds.

- Three ways to test:

  1. Use a Tool (Recommended First Step):

     - Postman (GUI-based)
     - curl (command line)

     ```
     powershell

     $response = curl.exe "https://poe.ninja/api/data/currencyoverview?league=Mercenaries&amp;type=Currency" | ConvertFrom-Json

     $divine = $response.lines | Where-Object { $_.currencyTypeName -eq "Divine Orb" }

     $divine.chaosEquivalent
     ```

     ```
     powershell - return

     % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                     Dload  Upload   Total   Spent    Left  Speed
     100  128k    0  128k     0    0  1223k      0 --:--:-- --:--:-- --:--:-- 1285k
     137.56
     ```

  - VS Code REST Client (extension)

  2. Using Node.js/JS

     ```
     JS

     import fetch from "node-fetch";

     const league = "Mercenaries";
     const url = `https://poe.ninja/api/data/currencyoverview?league=${league}&type=Currency`;

     const response = await fetch(url);
     const data = await response.json();

     const divine = data.lines.find(c => c.currencyTypeName === "Divine Orb");
     console.log(`1 Divine Orb = ${divine.chaosEquivalent} Chaos Orbs`);

     ----
     Output

     1 Divine Orb = 138.33 Chaos Orbs
     ----
     ```

  ```

  ```

### 220251018 - Working on API

1. Finding how does it work exactly.

```

const league = "Mercenaries";
const url = `https://poe.ninja/api/data/currencyoverview?league=${league}&type=Currency`;

try {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

  const data = await response.json();
  const divine = data.lines.find((c) => c.currencyTypeName === "Divine Orb");

  if (!divine) {
    console.error("Divine Orb not found in API response.");
  } else {
    console.log(`1 Divine Orb = ${divine.chaosEquivalent} Chaos Orbs`);
  }
} catch (error) {
  console.error("Error fetching data:", error);
}
```

2. Using chartGPT to generate the code to fetch the data from poe.niji & stored it via a file creation on its own.
3. The chart will take the value from the data and adjust manually.
4. Need code review to make it into my own knowledge.
