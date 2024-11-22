# FEATURES

### BASIC SETUP

[x] create github repo
Super simple, a few clicks. For now, don't add license, .gitignore, or README from github GUI
Copy & pase these commands to push to repo & start a remote:
git remote add origin https://github.com/OlisDevSpot/next-feature-testing-convex.git
git branch -M main
git push -u origin main
[x] tailwind custom layers (base, components, utilities)
Set up tailwind's custom styles for basic app theme & look
Example: set up different font for h1, h2, h3, ... elements in the base layer

### DATABASES & BACKEND

[] install Convex backend
Need a GitHub repo to connect convex

### AUTH

[] install Clerk
[] implement Google OAuth
[] implement email login
[] implement authorization routes for signed-out & signed-in
[] connect Clerk to Convex backend

### OTHER FEATURES

[] comments system
[] stripe integration

---

# UI

### FONTS

[x] apply at least 2 fonts
Use layout page, assign both Nunito & Syne to variables.
For default font, pass in nunito.className into <body>
For additional fonts, pass in syne.variable into <body> and implement it in the CSS using font-family: var(--font-syne);

### FAVICON

[] change favicon to svg of your choice

---

# ROUTING

### CLIENT ROUTES

[] landing page
[] app pages
[] user settings
[] account management

### API ROUTES

---

# WORKFLOW

[] work mobile-first
