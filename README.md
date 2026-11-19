Arena Clash
Arena Clash is an esports tournament management website prototype built with HTML, CSS, and JavaScript. It provides a central interface for exploring games and tournaments, viewing tournament brackets, checking match information, and managing tournament activity.
Project status: Front-end prototype. The current version stores its data in the browser using localStorage. It does not use a shared online database or provide secure, server-side authentication.

Features
Player features
- Sign in and account registration screens.
- Player and Team Captain account options.
- Dashboard with tournament and activity summaries.
- Explore supported games and view their tournaments.
- Search and filter tournaments by game and registration status.
- View tournament details and register for open tournaments.
- View an eight-team, single-elimination bracket.
- View match lobby information and match results.
- View team rosters, player roles, team records, and leaderboard standings.
- View account information and team-based competitive statistics.
Administrator features
- Administrator dashboard with tournament and result summaries.
- Create tournaments.
- Open or close tournament registration.
- Review submitted match results.
- Approve or reject pending results.
- Approved results determine the winners shown in the tournament bracket.
Built with
- HTML5 — page structure and content.
- CSS3 — layout, responsive styling, and visual design.
- JavaScript — navigation, forms, tournament interactions, bracket progression, and browser storage.
- Browser localStorage — saves prototype data in the current browser.
No front-end framework or external JavaScript library is required.
Project structure
Keep the files and folders arranged like this:
HARRY/
├── images/
│   ├── arena-banner.jpg
│   ├── champion-trophy.png
│   ├── cod-warzone-cover.jpg
│   ├── dota2-cover.jpg
│   ├── league-cover.jpg
│   ├── mlbb-cover.jpg
│   ├── valorant-cover.jpg
│   ├── team-alpha.png
│   ├── team-bravo.png
│   ├── team-nova.png
│   ├── team-phoenix.png
│   ├── team-echo.png
│   ├── team-delta.png
│   ├── team-titans.png
│   └── team-vortex.png
├── index.html
├── style.css
├── script.js
└── README.md
Important: Image filenames and letter casing must match the paths used in the code. Keep the images folder beside index.html, not inside .vscode.
Run the project locally
1. Download or clone this repository.
2. Open the project folder in Visual Studio Code.
3. Confirm that index.html, style.css, script.js, and the images folder are in the project root as shown above.
4. Open index.html in a browser. For local development, you can also use the VS Code Live Server extension and choose Open with Live Server.
The website should open on the sign-in and registration screen. Create an account to enter the application.
Tournament bracket
The current bracket design displays an eight-team, single-elimination path:
1. Eight participating team slots.
2. Four quarterfinal matches.
3. Two semifinal matches.
4. One grand final.
5. A champion display after the final result is approved.
The bracket uses the team names and sample team records currently stored in the project. It is not yet connected to a live tournament service or an online database.
Data storage and authentication limitations
The current prototype uses localStorage rather than a backend database.
- Data is saved in the browser that is being used.
- Data is not automatically shared with another computer, browser, or website visitor.
- Clearing browser data can remove locally saved accounts, registrations, tournaments, and results.
- The sign-in and registration flow is a front-end demonstration, not production-grade authentication.
- Passwords are stored in browser storage in this prototype. Do not use real or reused passwords.
- The registration screen currently allows account-role selection. A public deployment should not rely on this client-side role selection to protect administrator access.
For a real multi-user service, add a backend, a database, and server-side authentication and authorization before using real accounts or competition records.
Deployment
Arena Clash is a static front-end project and can be hosted on a static website platform. Include the complete images folder and all three website files when deploying. The site will not become a shared multi-user system simply by uploading it to a domain; the current localStorage data remains browser-specific.

Before presenting a public deployment, test the deployed site and check that every image loads. Also review administrator access and the prototype authentication limitations described above.
Project purpose
Arena Clash was created as a high-fidelity academic project prototype to demonstrate an esports tournament management interface and its main user flows.
Credits and asset usage
Game artwork, logos, and other third-party visual assets remain the property of their respective owners unless a different license is provided. Check each asset's license and usage terms before distributing or using the deployed project publicly. The Arena Clash project is not presented as officially affiliated with the game publishers.
Arena Clash — Compete with purpose. Play with respect.
