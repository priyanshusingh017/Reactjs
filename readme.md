# ReactJS Project

Welcome to the ReactJS project repository.

## PowerShell Execution Policy for npm Install

If you encounter issues running `npm install` due to PowerShell script restrictions, you may need to temporarily adjust your execution policy. Run the following commands in your PowerShell terminal before running `npm install`:

```powershell
Get-ExecutionPolicy
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
npm install
```

This allows you to complete the install process without permanently changing your system's execution policy.

## Scaffolding Your First Vite Project

> **Compatibility Note:**  
> Vite requires Node.js 20.19+ or 22.12+. Some templates may require a higher version—upgrade Node.js if prompted by your package manager.

To scaffold a new Vite project, run:

```bash
npm create vite@latest
```

Follow the prompts to select your framework and template.  
To specify the project name and template directly (example for React):

```bash
npm create vite@latest my-app -- --template react
```

You can use `.` as the project name to scaffold in the current directory.


```bash
cd my-project
npm install
npm run dev
```

For more templates, see the [create-vite documentation](https://vitejs.dev/guide/#scaffolding-your-first-vite-project) or check out [Awesome Vite](https://github.com/vitejs/awesome-vite) for community templates.


## Tailwind CSS with Vite

To add Tailwind CSS to your Vite-powered React project, follow these steps or see the [official Tailwind CSS Vite guide](https://tailwindcss.com/docs/guides/vite):

1. **Create a new Vite React project (if needed):**
    ```bash
    npm create vite@latest my-project -- --template react
    cd my-project
    ```

2. **Install Tailwind CSS and dependencies:**
    ```bash
    npm install -D tailwindcss@3 postcss autoprefixer
    npx tailwindcss init -p
    ```

3. **Configure `tailwind.config.js` content paths:**
    ```js
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    ```

4. **Add Tailwind directives to `src/index.css`:**
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

5. **Import the CSS file in your project entry point (e.g., `src/main.jsx`):**
    ```js
    import './index.css';
    ```

For more details, see the [Tailwind CSS Vite documentation](https://tailwindcss.com/docs/guides/vite).
