# 09-project-poe

## Key takeaways:

### - How to find poe.ninja **API Endpoints**?

1. Open http://poe.ninja in the browser
2. Open **Developer** Tools
3. Go to the **Network** tab
4. In the **Filters**, type `api` or `overview`.
5. Browse to the section your are interested in e.g:
   - Click on "Currency"
   - "Unique Items"
   - "Divination Cards"
6. You will see request like:

   ```
   bash

   https://poe.ninja/api/data/currencyoverview?league=Affliction&type=Currency

   ```

7. Click on one of these network entries → open the **Preview** or **Response** tab → you will see the JSON data poe.ninja uses for its tables.
8. Right click on **Response** and **Open new tab/Pretty-print**
9. Ctrl+F to find the specific currency and follow the order of the object in code to extract the information.

   ```
   JSON

   {
   "lines": [
     {
       "currencyTypeName": "Mirror of Kalandra",
       "pay": {
         "id": 0,
          "id": 0,
          "league_id": 259,
          "pay_currency_id": 1,
          "get_currency_id": 3,
          "sample_time_utc": "2025-10-19T08:08:41.6238713Z",
          "count": 42,
          "value": 145.5,
          "data_point_count": 1,
          "includes_secondary": false,
          "listing_count": 462
       }
     }
   ]
   }
   ```

10.

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

### 20251018 - Working on API

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

### 20251019 - Code review

```
import fs from "fs";
const league = "Mercenaries";
const url = `https://poe.ninja/api/data/currencyoverview?league=${league}&type=Currency`;

try {
  const response = await fetch(url);
  const data = await response.json();

  const divine = data.lines.find((c) => c.currencyTypeName === "Divine Orb");

  if (!divine) throw new Error("Divine Orb not found in response");

  const entry = {
    date: new Date().toISOString().split("T")[0],
    chaosValue: divine.chaosEquivalent,
  };

  // Load existing data (if any)
  let prices = [];
  if (fs.existsSync("divine-history.json")) {
    prices = JSON.parse(fs.readFileSync("divine-history.json", "utf8"));
  }

  // Append new data
  prices.push(entry);

  fs.writeFileSync("divine-history.json", JSON.stringify(prices, null, 2));
  console.log(
    `✅ Saved Divine Orb value: ${entry.chaosValue} Chaos (${entry.date})`
  );
} catch (err) {
  console.error("❌ Error fetching Divine value:", err);
}
```

1. `import fs from "fs";`

- `fs` is a built in module in Node.js that provides API for interacting with the file system. It allwos dev to perform operactions like reading, writing, updating and deleting files and directories both synchronously and asynchronously.

### 20251020 - `fetchAndSave.js` completed

1. `fetchAndSave.js` completed

- However, as there are about 500 lines for each update and about 100 different currencies. So it can get messy very quick.
- It works tho, with two major function
  1. It create a .JSON file what will push a new value in each day.
  2. It create a copy of .JSON each day so it will easy to find out specific value separately if needed.

2. Will start thinking of a function that will:
1. Create a new JSON file based on the currency name.
1. Update the currency .JSON if it already exist
1. In the chart page it will creat a graph basic on the JSON file.

### 20251022

1. Time stamp syntax

```
const date = new Date();
const dateStamp = date.toISOString().split("T")[0];
```

-

2. File creattion done, need code review and adding update function

### 20251023

```
js

import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
```

1. the `path` module provide utilities for working with file and directory patyhs in a way that is safe and consiten across different operating system.

   - **Join paths:**, `path.join("folder","file.txt")` → `"folder/file.txt"`
   - **Resolve absolute paths:** `path.resolve("..","data")` → give you the full path to the `data` folder.

2. `const __filename = fileURLToPath(import.meta.url);`

   - `import.meta.url` gives you teh URL of the current module.
   - `fileURLToPath()` converts that URL in to a regular file path.  
     `OUTPUT c:\Users\ChonL\Documents\GitHub\09-project-poe\components\fetchCreate.js)`

3. `const __dirname = path.dirname(__filename);`

   - `path.dirname()` extracts the **directory portion** of a file path.
     - dirname() it takes a file path string ass input and returns the directory path that contains that file.

4. `const dataDir = path.resolve(__dirname, "../data");`
   - Give me access to the data file by using current file as a starting point.
