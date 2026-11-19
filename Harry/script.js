const STORAGE = {
  users: "arenaClashUsers",
  tournaments: "arenaClashTournaments",
  results: "arenaClashResults",
  teams: "arenaClashTeams",
  current: "arenaClashCurrentUser",
  activities: "arenaClashActivities",
};

const defaultTournaments = [
  {
    id: 1,
    name: "MLBB Elite Cup",
    game: "Mobile Legends",
    date: "2026-11-25",
    slots: 256,
    status: "Open",
    description:
      "A competitive Mobile Legends tournament for teams ready to prove their skill.",
    participants: 128,
    joinedBy: [],
  },
  {
    id: 2,
    name: "Valorant Champions Cup",
    game: "Valorant",
    date: "2026-11-28",
    slots: 128,
    status: "Open",
    description:
      "A tactical competition built for coordinated teams and precise play.",
    participants: 64,
    joinedBy: [],
  },
  {
    id: 3,
    name: "Dota 2 Masters",
    game: "Dota 2",
    date: "2026-11-22",
    slots: 64,
    status: "Closed",
    description: "A Dota 2 competition featuring strategic team play.",
    participants: 64,
    joinedBy: [],
  },
  {
    id: 4,
    name: "CoD Warzone Showdown",
    game: "Call of Duty",
    date: "2026-12-06",
    slots: 128,
    status: "Open",
    description:
      "A Call of Duty competition for squads looking for their next challenge.",
    participants: 32,
    joinedBy: [],
  },
  {
    id: 5,
    name: "League Clash Open",
    game: "League of Legends",
    date: "2026-12-12",
    slots: 64,
    status: "Open",
    description: "A League of Legends tournament for competitive teams.",
    participants: 16,
    joinedBy: [],
  },
];

const defaultTeams = [
  {
    name: "Team Alpha",
    game: "Mobile Legends",
    wins: 12,
    losses: 4,
    players: [
      { name: "Alex", role: "Team Captain" },
      { name: "Marcus", role: "Jungler" },
      { name: "Noah", role: "Mid Laner" },
      { name: "Ethan", role: "Gold Laner" },
      { name: "Liam", role: "Roamer" },
    ],
  },
  {
    name: "Team Bravo",
    game: "Mobile Legends",
    wins: 10,
    losses: 6,
    players: [
      { name: "Ryan", role: "Team Captain" },
      { name: "Kai", role: "Jungler" },
      { name: "Cole", role: "Mid Laner" },
      { name: "Zane", role: "Gold Laner" },
      { name: "Jace", role: "Roamer" },
    ],
  },
  {
    name: "Team Nova",
    game: "Mobile Legends",
    wins: 8,
    losses: 3,
    players: [
      { name: "Aiden", role: "Team Captain" },
      { name: "Leo", role: "Jungler" },
      { name: "Milo", role: "Mid Laner" },
      { name: "Ezra", role: "Gold Laner" },
      { name: "Luke", role: "Roamer" },
    ],
  },
  {
    name: "Team Phoenix",
    game: "Mobile Legends",
    wins: 7,
    losses: 5,
    players: [
      { name: "James", role: "Team Captain" },
      { name: "Cruz", role: "Jungler" },
      { name: "Finn", role: "Mid Laner" },
      { name: "Drew", role: "Gold Laner" },
      { name: "Wyatt", role: "Roamer" },
    ],
  },
  {
    name: "Team Echo",
    game: "Mobile Legends",
    wins: 6,
    losses: 3,
    players: [
      { name: "Oliver", role: "Team Captain" },
      { name: "Lucas", role: "Jungler" },
      { name: "Henry", role: "Mid Laner" },
      { name: "Mason", role: "Gold Laner" },
      { name: "Logan", role: "Roamer" },
    ],
  },
  {
    name: "Team Delta",
    game: "Mobile Legends",
    wins: 7,
    losses: 4,
    players: [
      { name: "Daniel", role: "Team Captain" },
      { name: "Eli", role: "Jungler" },
      { name: "Owen", role: "Mid Laner" },
      { name: "Adam", role: "Gold Laner" },
      { name: "Luke", role: "Roamer" },
    ],
  },
  {
    name: "Team Titans",
    game: "Mobile Legends",
    wins: 5,
    losses: 2,
    players: [
      { name: "Gabriel", role: "Team Captain" },
      { name: "Jayden", role: "Jungler" },
      { name: "Isaac", role: "Mid Laner" },
      { name: "Julian", role: "Gold Laner" },
      { name: "Levi", role: "Roamer" },
    ],
  },
  {
    name: "Team Vortex",
    game: "Mobile Legends",
    wins: 4,
    losses: 3,
    players: [
      { name: "Nathan", role: "Team Captain" },
      { name: "Caleb", role: "Jungler" },
      { name: "Dylan", role: "Mid Laner" },
      { name: "Wyatt", role: "Gold Laner" },
      { name: "Cruz", role: "Roamer" },
    ],
  },
];

const gameNames = [
  "Mobile Legends",
  "Valorant",
  "Dota 2",
  "Call of Duty",
  "League of Legends",
];

const gameImages = {
  "Mobile Legends": "images/mlbb-cover.jpg",
  Valorant: "images/valorant-cover.jpg",
  "Dota 2": "images/dota2-cover.jpg",
  "Call of Duty": "images/cod-warzone-cover.jpg",
  "League of Legends": "images/league-cover.jpg",
  Other: "images/arena-banner.jpg",
};

const teamImages = {
  "Team Alpha": "images/team-alpha.png",
  "Team Bravo": "images/team-bravo.png",
  "Team Nova": "images/team-nova.png",
  "Team Phoenix": "images/team-phoenix.png",
  "Team Echo": "images/team-echo.png",
  "Team Delta": "images/team-delta.png",
  "Team Titans": "images/team-titans.png",
  "Team Vortex": "images/team-vortex.png",
};

const trophyImage = "images/champion-trophy.png";

const bracketRounds = [
  { key: "qf1", name: "Quarterfinal 1", short: "QF 01" },
  { key: "qf2", name: "Quarterfinal 2", short: "QF 02" },
  { key: "qf3", name: "Quarterfinal 3", short: "QF 03" },
  { key: "qf4", name: "Quarterfinal 4", short: "QF 04" },
  { key: "sf1", name: "Semifinal 1", short: "SF 01" },
  { key: "sf2", name: "Semifinal 2", short: "SF 02" },
  { key: "final", name: "Grand Final", short: "FINAL" },
];

function loadData(key, fallback) {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : fallback;
  } catch {
    return fallback;
  }
}

function saveData(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    showToast("Browser storage is unavailable.");
  }
}

function escapeHTML(value) {
  return String(value ?? "").replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[character],
  );
}

let users = loadData(STORAGE.users, []);
let tournaments = loadData(STORAGE.tournaments, defaultTournaments);
let results = loadData(STORAGE.results, []);
let teams = loadData(STORAGE.teams, defaultTeams);
let activities = loadData(STORAGE.activities, [
  "Arena Clash is ready.",
  "Tournament listings are available.",
  "Competition management is ready.",
]);

if (!Array.isArray(users)) users = [];
if (!Array.isArray(tournaments)) tournaments = defaultTournaments;
if (!Array.isArray(results)) results = [];
if (!Array.isArray(teams)) teams = defaultTeams;
if (!Array.isArray(activities)) activities = [];

defaultTeams.forEach((defaultTeam) => {
  if (!teams.some((team) => team.name === defaultTeam.name)) {
    teams.push(defaultTeam);
  }
});

let selectedTournamentId = null;

const savedAccount = loadData(STORAGE.current, null);
const savedEmail =
  typeof savedAccount === "string" ? savedAccount : savedAccount?.email;

let currentUser = savedEmail
  ? users.find((user) => user.email === savedEmail) || null
  : null;

tournaments.forEach((tournament) => {
  if (!Array.isArray(tournament.joinedBy)) {
    tournament.joinedBy = [];
  }

  if (
    !Array.isArray(tournament.bracketTeams) ||
    tournament.bracketTeams.length !== 8
  ) {
    const matchingTeams = teams
      .filter((team) => team.game === tournament.game)
      .map((team) => team.name);

    const otherTeams = teams
      .filter((team) => !matchingTeams.includes(team.name))
      .map((team) => team.name);

    tournament.bracketTeams = [...matchingTeams, ...otherTeams].slice(0, 8);
  }
});

results.forEach((result) => {
  if (!result.tournamentId) {
    result.tournamentId = tournaments[0]?.id;
  }

  if (!result.matchKey) {
    const oldMatch = String(result.match || "").toLowerCase();

    result.matchKey =
      bracketRounds.find((round) => round.name.toLowerCase() === oldMatch)
        ?.key || null;
  }
});

function persistAll() {
  saveData(STORAGE.users, users);
  saveData(STORAGE.tournaments, tournaments);
  saveData(STORAGE.results, results);
  saveData(STORAGE.teams, teams);
  saveData(STORAGE.activities, activities);
}

function showToast(message) {
  const toast = document.getElementById("toast");

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(showToast.timer);

  showToast.timer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2800);
}

function addActivity(message) {
  activities.unshift(message);
  activities = activities.slice(0, 8);
  saveData(STORAGE.activities, activities);
}

function formatDate(value) {
  if (!value) return "Date TBA";

  return new Date(value + "T00:00:00").toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function getInitials(name) {
  return String(name || "A")
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function getGameImage(game) {
  return gameImages[game] || gameImages.Other;
}

function getTeamImage(name) {
  return teamImages[name] || "";
}

function isAdmin() {
  return currentUser && currentUser.role === "Administrator";
}

function isCaptain() {
  return (
    currentUser && currentUser.role === "Player" && currentUser.captain === true
  );
}

function getTournament(id) {
  return tournaments.find((tournament) => tournament.id === Number(id));
}

function getTournamentTeams(tournamentId) {
  const tournament = getTournament(tournamentId);

  if (!tournament) return [];

  return tournament.bracketTeams || teams.slice(0, 8).map((team) => team.name);
}

function getMatchResult(tournamentId, matchKey) {
  return results.find(
    (result) =>
      Number(result.tournamentId) === Number(tournamentId) &&
      result.matchKey === matchKey,
  );
}

function getMatchWinner(result) {
  if (!result || result.status !== "Approved") return null;
  if (result.scoreA === result.scoreB) return null;

  return result.scoreA > result.scoreB ? result.teamA : result.teamB;
}

function showAuth(mode) {
  document.getElementById("authScreen").classList.remove("hidden");
  document.getElementById("app").classList.add("hidden");

  document.querySelectorAll("[data-auth]").forEach((button) => {
    button.classList.toggle("active", button.dataset.auth === mode);
  });

  document
    .getElementById("loginForm")
    .classList.toggle("hidden", mode !== "login");
  document
    .getElementById("registerForm")
    .classList.toggle("hidden", mode !== "register");

  document.getElementById("authHeading").textContent =
    mode === "login" ? "Sign in to continue" : "Create your account";

  document.getElementById("authSubheading").textContent =
    mode === "login"
      ? "Access your competitive command center."
      : "Join the competition and find your next challenge.";
}

function login(event) {
  event.preventDefault();

  const email = document
    .getElementById("loginEmail")
    .value.trim()
    .toLowerCase();
  const password = document.getElementById("loginPassword").value;

  const account = users.find(
    (user) => user.email.toLowerCase() === email && user.password === password,
  );

  if (!account) {
    document.getElementById("loginMessage").textContent =
      "Incorrect email address or password.";
    return;
  }

  enterApp(account);
}

function register(event) {
  event.preventDefault();

  const name = document.getElementById("registerName").value.trim();
  const email = document
    .getElementById("registerEmail")
    .value.trim()
    .toLowerCase();
  const password = document.getElementById("registerPassword").value;
  const role = document.getElementById("registerRole").value;
  const captain =
    role === "Player" && document.getElementById("registerCaptain").checked;
  const team = document.getElementById("registerTeam").value.trim();

  if (password.length < 6) {
    document.getElementById("registerMessage").textContent =
      "Password must contain at least 6 characters.";
    return;
  }

  if (users.some((user) => user.email.toLowerCase() === email)) {
    document.getElementById("registerMessage").textContent =
      "This email address is already registered.";
    return;
  }

  const account = {
    id: Date.now(),
    name,
    email,
    password,
    role,
    captain,
    team,
    joined: new Date().toISOString().slice(0, 10),
  };

  users.push(account);

  persistAll();
  addActivity(name + " created an account.");

  document.getElementById("registerForm").reset();

  enterApp(account);
  showToast("Account created successfully.");
}

function enterApp(account) {
  currentUser = account;

  saveData(STORAGE.current, account.email);

  document.getElementById("authScreen").classList.add("hidden");
  document.getElementById("app").classList.remove("hidden");

  document.getElementById("topName").textContent = account.name;
  document.getElementById("topRole").textContent =
    account.role + (account.captain ? " · Team Captain" : "");

  document.getElementById("topAvatar").textContent = getInitials(account.name);

  document.getElementById("welcomeName").textContent =
    account.name.split(" ")[0];

  document.getElementById("adminNav").classList.toggle("hidden", !isAdmin());

  document
    .getElementById("submitResultPanel")
    .classList.toggle("hidden", !isCaptain());

  persistAll();
  renderAll();
  navigate("dashboard");
}

function logout() {
  currentUser = null;

  localStorage.removeItem(STORAGE.current);

  document.getElementById("loginForm").reset();
  document.getElementById("registerForm").reset();

  showAuth("login");
}

function navigate(page) {
  const target = document.getElementById("page-" + page);

  if (!target) return;

  const adminPages = ["admin", "create", "management"];

  if (adminPages.includes(page) && !isAdmin()) {
    showToast("Administrator access required.");
    return;
  }

  document.querySelectorAll(".page").forEach((section) => {
    section.classList.remove("active");
  });

  target.classList.add("active");

  document.querySelectorAll(".nav-link[data-page]").forEach((button) => {
    button.classList.toggle("active", button.dataset.page === page);
  });

  const activeButton = document.querySelector(
    '.nav-link[data-page="' + page + '"]',
  );

  document.getElementById("currentPageName").textContent = activeButton
    ? activeButton.textContent.trim()
    : page;

  document.getElementById("sidebar").classList.remove("open");

  window.scrollTo({ top: 0, behavior: "smooth" });

  if (page === "admin") renderAdmin();
  if (page === "management") renderManagement();
  if (page === "results") renderResults();
  if (page === "bracket") renderBracket();
}

function renderTournamentCard(tournament) {
  const percentage = Math.min(
    100,
    Math.round((tournament.participants / tournament.slots) * 100),
  );

  const joined =
    currentUser && (tournament.joinedBy || []).includes(currentUser.email);

  const full = tournament.participants >= tournament.slots;

  return `
        <article class="tournament-card">
            <div class="tournament-card-top">
                <div class="tournament-art">
                    <img src="${getGameImage(tournament.game)}" alt="${escapeHTML(tournament.game)} artwork">
                </div>

                <div>
                    <span class="status ${tournament.status === "Closed" ? "closed" : "open"}">
                        ${escapeHTML(tournament.status)}
                    </span>

                    <h3>${escapeHTML(tournament.name)}</h3>
                    <p>◈ ${escapeHTML(tournament.game)}</p>
                    <p>▣ ${formatDate(tournament.date)}</p>
                    <p>♟ ${tournament.participants} / ${tournament.slots} teams</p>
                </div>
            </div>

            <div class="progress">
                <span style="width: ${percentage}%"></span>
            </div>

            <div class="progress-label">
                <span>Registration progress</span>
                <b>${percentage}%</b>
            </div>

            <div class="card-actions">
                <button data-details="${tournament.id}">View Details</button>

                <button data-join="${tournament.id}"
                    ${tournament.status !== "Open" || joined || full ? "disabled" : ""}>
                    ${joined ? "Joined" : full ? "Full" : tournament.status === "Closed" ? "Closed" : "Join Tournament"}
                </button>
            </div>
        </article>
    `;
}

function renderTournaments() {
  const search = (
    document.getElementById("tournamentSearch").value || ""
  ).toLowerCase();

  const selectedGame = document.getElementById("gameFilter").value;
  const selectedStatus = document.getElementById("statusFilter").value;

  const filtered = tournaments.filter((tournament) => {
    const matchesSearch = (tournament.name + " " + tournament.game)
      .toLowerCase()
      .includes(search);

    const matchesGame =
      selectedGame === "all" || tournament.game === selectedGame;

    const matchesStatus =
      selectedStatus === "all" || tournament.status === selectedStatus;

    return matchesSearch && matchesGame && matchesStatus;
  });

  document.getElementById("tournamentGrid").innerHTML = filtered.length
    ? filtered.map(renderTournamentCard).join("")
    : '<div class="empty-state">No tournaments match your search.</div>';

  document.getElementById("tournamentTotal").textContent = filtered.length;
  document.getElementById("navTournamentCount").textContent =
    tournaments.length;

  document.getElementById("dashboardTournamentList").innerHTML =
    tournaments
      .slice(0, 3)
      .map(
        (tournament) => `
            <div class="compact-tournament">
                <div class="game-thumb">
                    <img src="${getGameImage(tournament.game)}" alt="${escapeHTML(tournament.game)}">
                </div>

                <div>
                    <b>${escapeHTML(tournament.name)}</b>
                    <small>${escapeHTML(tournament.game)} · ${formatDate(tournament.date)}</small>
                </div>

                <button data-details="${tournament.id}">Details</button>
            </div>
        `,
      )
      .join("") || '<div class="empty-state">No tournaments available.</div>';

  const gameFilter = document.getElementById("gameFilter");

  if (gameFilter.options.length !== gameNames.length + 2) {
    gameFilter.innerHTML =
      '<option value="all">All Games</option>' +
      gameNames
        .map(
          (game) =>
            `<option value="${escapeHTML(game)}">${escapeHTML(game)}</option>`,
        )
        .join("") +
      '<option value="Other">Other</option>';
  }
}

function renderGames() {
  document.getElementById("gameGrid").innerHTML = gameNames
    .map((game) => {
      const count = tournaments.filter(
        (tournament) => tournament.game === game,
      ).length;

      return `
                <article class="game-card">
                    <div class="game-art">
                        <img src="${getGameImage(game)}" alt="${escapeHTML(game)} artwork">
                    </div>

                    <div>
                        <h3>${escapeHTML(game)}</h3>
                        <p>${count} available tournaments</p>
                    </div>

                    <button data-game="${escapeHTML(game)}" type="button">→</button>
                </article>
            `;
    })
    .join("");

  document.getElementById("dashboardGames").innerHTML = gameNames
    .slice(0, 4)
    .map(
      (game) => `
            <button class="mini-game" data-game="${escapeHTML(game)}">
                <b>${escapeHTML(game)}</b>
                <small>Explore tournaments →</small>
            </button>
        `,
    )
    .join("");
}

function showGameTournaments(game) {
  const filtered = tournaments.filter((tournament) => tournament.game === game);

  document.getElementById("selectedGameTitle").textContent =
    game + " Tournaments";

  document.getElementById("selectedGameTournaments").innerHTML = filtered.length
    ? filtered.map(renderTournamentCard).join("")
    : '<div class="empty-state">No tournaments available for this game.</div>';

  document.getElementById("selectedGamePanel").classList.remove("hidden");

  document.getElementById("selectedGamePanel").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

function openTournamentDetails(id) {
  const tournament = getTournament(id);

  if (!tournament) return;

  selectedTournamentId = tournament.id;

  const joined =
    currentUser && (tournament.joinedBy || []).includes(currentUser.email);

  const full = tournament.participants >= tournament.slots;

  const canJoin = tournament.status === "Open" && !joined && !full;

  document.getElementById("detailTitle").textContent = tournament.name;

  document.getElementById("detailContent").innerHTML = `
        <div class="detail-layout">
            <div class="detail-info">
                <img class="detail-art" src="${getGameImage(tournament.game)}" alt="${escapeHTML(tournament.game)} artwork">

                <span class="status ${tournament.status === "Closed" ? "closed" : "open"}">
                    ${escapeHTML(tournament.status)}
                </span>

                <h2>${escapeHTML(tournament.name)}</h2>
                <p>${escapeHTML(tournament.description)}</p>
                <p>◈ Game: <b>${escapeHTML(tournament.game)}</b></p>
                <p>▣ Schedule: <b>${formatDate(tournament.date)}</b></p>
                <p>♟ Registered: <b>${tournament.participants} / ${tournament.slots}</b></p>

                <div class="progress">
                    <span style="width:${Math.min(100, (tournament.participants / tournament.slots) * 100)}%"></span>
                </div>
            </div>

            <aside class="detail-side">
                <span class="kicker">REGISTRATION</span>
                <strong>${tournament.participants} / ${tournament.slots}</strong>
                <p class="muted">Registered participants</p>

                <button class="primary-btn" id="detailJoin" ${canJoin ? "" : "disabled"}>
                    ${joined ? "Already Registered" : full ? "Tournament Full" : tournament.status === "Closed" ? "Registration Closed" : "Join Tournament →"}
                </button>
            </aside>
        </div>
    `;

  navigate("details");

  const joinButton = document.getElementById("detailJoin");

  if (joinButton && canJoin) {
    joinButton.addEventListener("click", () => joinTournament(tournament.id));
  }
}

function joinTournament(id) {
  const tournament = getTournament(id);

  if (!tournament || !currentUser) return;

  if (currentUser.role !== "Player") {
    showToast("Only player accounts can register for tournaments.");
    return;
  }

  if (tournament.status !== "Open") {
    showToast("Registration is closed.");
    return;
  }

  if (tournament.participants >= tournament.slots) {
    showToast("This tournament is already full.");
    return;
  }

  tournament.joinedBy = tournament.joinedBy || [];

  if (tournament.joinedBy.includes(currentUser.email)) {
    showToast("You are already registered.");
    return;
  }

  tournament.joinedBy.push(currentUser.email);
  tournament.participants++;

  persistAll();
  addActivity(currentUser.name + " registered for " + tournament.name + ".");

  renderAll();
  showToast("Tournament registration successful.");

  if (selectedTournamentId === tournament.id) {
    openTournamentDetails(tournament.id);
  }
}

function getBracketFixtures(tournamentId) {
  const tournamentTeams = getTournamentTeams(tournamentId);

  const getWinner = (key) => getMatchWinner(getMatchResult(tournamentId, key));

  const qf1Winner = getWinner("qf1");
  const qf2Winner = getWinner("qf2");
  const qf3Winner = getWinner("qf3");
  const qf4Winner = getWinner("qf4");

  const sf1Winner = getWinner("sf1");
  const sf2Winner = getWinner("sf2");

  return [
    {
      key: "qf1",
      name: "Quarterfinal 1",
      short: "QF 01",
      teamA: tournamentTeams[0] || "TBD Team 1",
      teamB: tournamentTeams[1] || "TBD Team 2",
      next: "Winner advances to SF 01",
    },
    {
      key: "qf2",
      name: "Quarterfinal 2",
      short: "QF 02",
      teamA: tournamentTeams[2] || "TBD Team 3",
      teamB: tournamentTeams[3] || "TBD Team 4",
      next: "Winner advances to SF 01",
    },
    {
      key: "qf3",
      name: "Quarterfinal 3",
      short: "QF 03",
      teamA: tournamentTeams[4] || "TBD Team 5",
      teamB: tournamentTeams[5] || "TBD Team 6",
      next: "Winner advances to SF 02",
    },
    {
      key: "qf4",
      name: "Quarterfinal 4",
      short: "QF 04",
      teamA: tournamentTeams[6] || "TBD Team 7",
      teamB: tournamentTeams[7] || "TBD Team 8",
      next: "Winner advances to SF 02",
    },
    {
      key: "sf1",
      name: "Semifinal 1",
      short: "SF 01",
      teamA: qf1Winner || "Winner QF 01",
      teamB: qf2Winner || "Winner QF 02",
      next: "Winner advances to Grand Final",
    },
    {
      key: "sf2",
      name: "Semifinal 2",
      short: "SF 02",
      teamA: qf3Winner || "Winner QF 03",
      teamB: qf4Winner || "Winner QF 04",
      next: "Winner advances to Grand Final",
    },
    {
      key: "final",
      name: "Grand Final",
      short: "FINAL",
      teamA: sf1Winner || "Winner SF 01",
      teamB: sf2Winner || "Winner SF 02",
      next: "Winner becomes tournament champion",
    },
  ];
}

function createTeamSlot(name, index) {
  const image = getTeamImage(name);

  return `
        <div class="bracket-team-slot">
            <span class="seed-number">${String(index + 1).padStart(2, "0")}</span>
            ${image ? `<img class="bracket-team-logo" src="${image}" alt="${escapeHTML(name)} logo">` : ""}
            <span class="seed-team-name">${escapeHTML(name)}</span>
        </div>
    `;
}

function createBracketMatch(fixture, tournamentId) {
  const result = getMatchResult(tournamentId, fixture.key);

  const approved = result?.status === "Approved";
  const pending = result?.status === "Pending";
  const rejected = result?.status === "Rejected";

  const waiting =
    fixture.teamA.startsWith("Winner ") || fixture.teamB.startsWith("Winner ");

  const winner = getMatchWinner(result);

  const status = approved
    ? "COMPLETED"
    : pending
      ? "PENDING"
      : rejected
        ? "REJECTED"
        : waiting
          ? "WAITING"
          : "READY";

  const statusClass = approved
    ? "approved"
    : pending
      ? "pending"
      : rejected
        ? "rejected"
        : "";

  const scoreA = result ? result.scoreA : "–";
  const scoreB = result ? result.scoreB : "–";

  const winnerA = approved && winner === fixture.teamA;
  const winnerB = approved && winner === fixture.teamB;

  const loserA = approved && !winnerA;
  const loserB = approved && !winnerB;

  const finalClass = fixture.key === "final" ? "final-card" : "";

  const imageA = getTeamImage(fixture.teamA);
  const imageB = getTeamImage(fixture.teamB);

  return `
        <article class="bracket-match-card ${approved ? "completed" : pending ? "pending" : waiting ? "waiting" : ""} ${finalClass}">
            <div class="bracket-match-top">
                <strong>${fixture.short}</strong>
                <span class="match-state ${statusClass}">${status}</span>
            </div>

            <div class="bracket-team ${winnerA ? "winner" : ""} ${loserA ? "loser" : ""}">
                <div class="bracket-team-name-wrap">
                    ${imageA ? `<img src="${imageA}" alt="${escapeHTML(fixture.teamA)}">` : ""}
                    <span>${escapeHTML(fixture.teamA)}</span>
                </div>
                <strong>${scoreA}</strong>
            </div>

            <div class="bracket-team ${winnerB ? "winner" : ""} ${loserB ? "loser" : ""}">
                <div class="bracket-team-name-wrap">
                    ${imageB ? `<img src="${imageB}" alt="${escapeHTML(fixture.teamB)}">` : ""}
                    <span>${escapeHTML(fixture.teamB)}</span>
                </div>
                <strong>${scoreB}</strong>
            </div>

            <div class="bracket-match-footer">
                ${fixture.next}
            </div>
        </article>
    `;
}

function renderBracket() {
  const selector = document.getElementById("bracketTournamentSelect");
  const tournamentId = Number(selector.value);
  const tournament = getTournament(tournamentId);

  if (!tournament) {
    document.getElementById("bracketTeamColumn").innerHTML =
      '<div class="empty-state">No tournaments available.</div>';

    document.getElementById("quarterfinalColumn").innerHTML = "";
    document.getElementById("semifinalColumn").innerHTML = "";
    document.getElementById("finalColumn").innerHTML = "";

    return;
  }

  const teamNames = getTournamentTeams(tournamentId);
  const fixtures = getBracketFixtures(tournamentId);

  document.getElementById("bracketTeamColumn").innerHTML = teamNames
    .slice(0, 8)
    .map(createTeamSlot)
    .join("");

  document.getElementById("quarterfinalColumn").innerHTML = fixtures
    .slice(0, 4)
    .map((fixture) => createBracketMatch(fixture, tournamentId))
    .join("");

  document.getElementById("semifinalColumn").innerHTML = fixtures
    .slice(4, 6)
    .map((fixture) => createBracketMatch(fixture, tournamentId))
    .join("");

  document.getElementById("finalColumn").innerHTML = createBracketMatch(
    fixtures[6],
    tournamentId,
  );

  const finalResult = getMatchResult(tournamentId, "final");
  const champion = getMatchWinner(finalResult);
  const championCard = document.getElementById("championCard");

  if (champion) {
    championCard.classList.add("earned");

    championCard.innerHTML = `
            <div class="champion-image">
                <img src="${trophyImage}" alt="Champion trophy">
            </div>
            <div>
                <span class="kicker">TOURNAMENT CHAMPION</span>
                <h2>${escapeHTML(champion)}</h2>
                <p>${escapeHTML(tournament.name)} · Official winner</p>
            </div>
        `;
  } else {
    championCard.classList.remove("earned");

    championCard.innerHTML = `
            <div class="champion-image">
                <img src="${trophyImage}" alt="Champion trophy">
            </div>
            <div>
                <span class="kicker">TOURNAMENT CHAMPION</span>
                <h2>Champion not yet determined</h2>
                <p>The champion will appear after the final match is approved.</p>
            </div>
        `;
  }
}

function updateResultMatchTeams() {
  const tournamentId = Number(
    document.getElementById("resultTournament").value,
  );

  const matchKey = document.getElementById("resultMatchRound").value;

  const fixture = getBracketFixtures(tournamentId).find(
    (item) => item.key === matchKey,
  );

  const teamAInput = document.getElementById("resultTeamA");
  const teamBInput = document.getElementById("resultTeamB");
  const info = document.getElementById("resultMatchInfo");
  const submitButton = document.querySelector(
    "#resultForm button[type='submit']",
  );

  if (!fixture) {
    teamAInput.value = "";
    teamBInput.value = "";
    info.textContent = "Select a match.";
    submitButton.disabled = true;
    return;
  }

  teamAInput.value = fixture.teamA;
  teamBInput.value = fixture.teamB;

  const waitingForTeams =
    fixture.teamA.startsWith("Winner ") || fixture.teamB.startsWith("Winner ");

  const existingResult = getMatchResult(tournamentId, matchKey);

  const alreadySubmitted =
    existingResult && existingResult.status !== "Rejected";

  const captainCanSubmit =
    isCaptain() &&
    (currentUser.team === fixture.teamA || currentUser.team === fixture.teamB);

  if (waitingForTeams) {
    info.textContent =
      "This matchup is waiting for the previous round to finish.";
  } else if (alreadySubmitted) {
    info.textContent = "A result has already been submitted for this matchup.";
  } else if (!captainCanSubmit) {
    info.textContent =
      "Your registered team must be one of the teams in this matchup.";
  } else {
    info.textContent =
      "Your team is eligible to submit a result for this matchup.";
  }

  submitButton.disabled =
    waitingForTeams || alreadySubmitted || !captainCanSubmit;
}

function renderResults() {
  const filter = document.getElementById("resultFilter").value;

  const filtered = results.filter(
    (result) => filter === "all" || result.status === filter,
  );

  document.getElementById("resultsTable").innerHTML = filtered.length
    ? filtered
        .map((result) => {
          const tournament = getTournament(result.tournamentId);

          const winner =
            result.scoreA > result.scoreB
              ? result.teamA
              : result.scoreB > result.scoreA
                ? result.teamB
                : "—";

          return `
                    <tr>
                        <td>${escapeHTML(tournament?.name || "Tournament")}</td>
                        <td>${escapeHTML(result.match)}</td>
                        <td>
                            <div class="result-team-cell">
                                <img src="${getTeamImage(result.teamA)}" alt="">
                                <span>${escapeHTML(result.teamA)} vs ${escapeHTML(result.teamB)}</span>
                                <img src="${getTeamImage(result.teamB)}" alt="">
                            </div>
                        </td>
                        <td>${result.scoreA} - ${result.scoreB}</td>
                        <td>${result.status === "Approved" ? escapeHTML(winner) : "—"}</td>
                        <td>
                            <span class="status ${result.status.toLowerCase()}">
                                ${escapeHTML(result.status)}
                            </span>
                        </td>
                    </tr>
                `;
        })
        .join("")
    : '<tr><td colspan="6">No match results found.</td></tr>';

  document.getElementById("resultTotal").textContent = results.length;

  document.getElementById("approvedCount").textContent = results.filter(
    (result) => result.status === "Approved",
  ).length;

  document.getElementById("pendingCount").textContent = results.filter(
    (result) => result.status === "Pending",
  ).length;

  document.getElementById("rejectedCount").textContent = results.filter(
    (result) => result.status === "Rejected",
  ).length;
}

function renderTeams() {
  document.getElementById("teamGrid").innerHTML = teams
    .map(
      (team) => `
        <article class="team-card">
            <div class="team-head">
                <div class="team-emblem">
                    <img src="${getTeamImage(team.name)}" alt="${escapeHTML(team.name)} logo">
                </div>

                <div>
                    <h3>${escapeHTML(team.name)}</h3>
                    <small>${escapeHTML(team.game)}</small>
                </div>

                <div class="team-record">
                    <b>${team.wins}W - ${team.losses}L</b>
                    <small>TEAM RECORD</small>
                </div>
            </div>

            ${team.players
              .map(
                (player) => `
                <div class="roster-row">
                    <span>${escapeHTML(player.name)}</span>
                    <span>${escapeHTML(player.role)}</span>
                </div>
            `,
              )
              .join("")}
        </article>
    `,
    )
    .join("");
}

function renderLeaderboard() {
  const rankedTeams = [...teams].sort((a, b) => b.wins - a.wins);

  document.getElementById("leaderboardTable").innerHTML = rankedTeams
    .map(
      (team, index) => `
            <tr>
                <td>#${index + 1}</td>
                <td>
                    <div class="result-team-cell">
                        <img src="${getTeamImage(team.name)}" alt="">
                        <b>${escapeHTML(team.name)}</b>
                    </div>
                </td>
                <td>${team.wins}</td>
                <td>${team.losses}</td>
                <td>${team.wins * 3}</td>
            </tr>
        `,
    )
    .join("");
}

function renderProfile() {
  if (!currentUser) return;

  const teamResults = results.filter(
    (result) =>
      result.status === "Approved" &&
      (result.teamA === currentUser.team || result.teamB === currentUser.team),
  );

  const wins = teamResults.filter(
    (result) =>
      (result.teamA === currentUser.team && result.scoreA > result.scoreB) ||
      (result.teamB === currentUser.team && result.scoreB > result.scoreA),
  ).length;

  const losses = teamResults.filter(
    (result) =>
      (result.teamA === currentUser.team && result.scoreA < result.scoreB) ||
      (result.teamB === currentUser.team && result.scoreB < result.scoreA),
  ).length;

  const total = wins + losses;

  document.getElementById("profileAvatar").textContent = getInitials(
    currentUser.name,
  );

  document.getElementById("profileName").textContent = currentUser.name;

  document.getElementById("profileRole").textContent =
    currentUser.role + (currentUser.captain ? " · Team Captain" : "");

  document.getElementById("profileEmail").textContent = currentUser.email;
  document.getElementById("profileTeam").textContent =
    currentUser.team || "Not assigned";
  document.getElementById("profileType").textContent = currentUser.role;
  document.getElementById("profileJoined").textContent = formatDate(
    currentUser.joined,
  );

  document.getElementById("profileWins").textContent = wins;
  document.getElementById("profileLosses").textContent = losses;

  document.getElementById("profileRate").textContent = total
    ? Math.round((wins / total) * 100) + "%"
    : "0%";
}

function renderAdmin() {
  if (!isAdmin()) return;

  document.getElementById("adminTournaments").textContent = tournaments.length;

  document.getElementById("adminPlayers").textContent = users.filter(
    (user) => user.role === "Player",
  ).length;

  document.getElementById("adminApproved").textContent = results.filter(
    (result) => result.status === "Approved",
  ).length;

  document.getElementById("adminPending").textContent = results.filter(
    (result) => result.status === "Pending",
  ).length;

  document.getElementById("adminTournamentTable").innerHTML = tournaments
    .slice(0, 5)
    .map(
      (tournament) => `
            <tr>
                <td>${escapeHTML(tournament.name)}</td>
                <td>${escapeHTML(tournament.game)}</td>
                <td>${formatDate(tournament.date)}</td>
                <td>${tournament.participants}/${tournament.slots}</td>
                <td>
                    <span class="status ${tournament.status === "Closed" ? "closed" : "open"}">
                        ${tournament.status}
                    </span>
                </td>
            </tr>
        `,
    )
    .join("");

  const pending = results.filter((result) => result.status === "Pending");

  document.getElementById("pendingVerificationList").innerHTML = pending.length
    ? pending
        .map(
          (result) => `
                <div class="simple-row">
                    <b>
                        ${escapeHTML(result.match)}
                        · ${escapeHTML(result.teamA)}
                        vs ${escapeHTML(result.teamB)}
                        (${result.scoreA}-${result.scoreB})
                    </b>

                    <span>
                        <button class="table-action approve" data-approve="${result.id}">Approve</button>
                        <button class="table-action reject" data-reject="${result.id}">Reject</button>
                    </span>
                </div>
            `,
        )
        .join("")
    : '<div class="empty-state">No results are waiting for verification.</div>';
}

function renderManagement() {
  if (!isAdmin()) return;

  document.getElementById("managementTable").innerHTML = tournaments
    .map(
      (tournament) => `
            <tr>
                <td>${escapeHTML(tournament.name)}</td>
                <td>${escapeHTML(tournament.game)}</td>
                <td>${formatDate(tournament.date)}</td>
                <td>${tournament.participants}/${tournament.slots}</td>
                <td>
                    <span class="status ${tournament.status === "Closed" ? "closed" : "open"}">
                        ${tournament.status}
                    </span>
                </td>
                <td>
                    <button class="table-action" data-toggle-tournament="${tournament.id}">
                        ${tournament.status === "Open" ? "Close" : "Reopen"}
                    </button>
                </td>
            </tr>
        `,
    )
    .join("");
}

function renderTournamentSelectors() {
  const bracketSelect = document.getElementById("bracketTournamentSelect");
  const resultSelect = document.getElementById("resultTournament");

  const previousBracket = bracketSelect.value;
  const previousResult = resultSelect.value;

  const options = tournaments
    .map(
      (tournament) => `
        <option value="${tournament.id}">
            ${escapeHTML(tournament.name)}
        </option>
    `,
    )
    .join("");

  bracketSelect.innerHTML = options;
  resultSelect.innerHTML = options;

  if (tournaments.some((item) => String(item.id) === previousBracket)) {
    bracketSelect.value = previousBracket;
  }

  if (tournaments.some((item) => String(item.id) === previousResult)) {
    resultSelect.value = previousResult;
  }
}

function renderAll() {
  renderTournamentSelectors();
  renderTournaments();
  renderGames();
  renderResults();
  renderBracket();
  renderTeams();
  renderLeaderboard();
  renderProfile();

  if (isAdmin()) {
    renderAdmin();
    renderManagement();
  }

  document.getElementById("statTournaments").textContent = tournaments.filter(
    (tournament) => tournament.status === "Open",
  ).length;

  document.getElementById("statPlayers").textContent = users.filter(
    (user) => user.role === "Player",
  ).length;

  document.getElementById("statCompleted").textContent = results.filter(
    (result) => result.status === "Approved",
  ).length;

  document.getElementById("statPending").textContent = results.filter(
    (result) => result.status === "Pending",
  ).length;

  document.getElementById("activityFeed").innerHTML = activities
    .slice(0, 5)
    .map(
      (item, index) => `
            <div class="activity-item">
                <span class="activity-icon">${index === 0 ? "✦" : "•"}</span>
                <div>
                    ${escapeHTML(item)}
                    <small>Recent activity</small>
                </div>
            </div>
        `,
    )
    .join("");

  updateResultMatchTeams();
}

function createTournament(event) {
  event.preventDefault();

  if (!isAdmin()) return;

  const name = document.getElementById("newName").value.trim();
  const game = document.getElementById("newGame").value;
  const date = document.getElementById("newDate").value;
  const slots = Number(document.getElementById("newSlots").value);

  if (!Number.isInteger(slots) || slots < 2 || slots > 256) {
    document.getElementById("createMessage").textContent =
      "Enter a participant limit between 2 and 256.";
    return;
  }

  if (
    tournaments.some(
      (tournament) => tournament.name.toLowerCase() === name.toLowerCase(),
    )
  ) {
    document.getElementById("createMessage").textContent =
      "A tournament with this name already exists.";
    return;
  }

  const matchingTeams = teams
    .filter((team) => team.game === game)
    .map((team) => team.name);

  const otherTeams = teams
    .filter((team) => !matchingTeams.includes(team.name))
    .map((team) => team.name);

  const bracketTeams = [...matchingTeams, ...otherTeams].slice(0, 8);

  tournaments.unshift({
    id: Date.now(),
    name,
    game,
    date,
    slots,
    status: document.getElementById("newStatus").value,
    description: document.getElementById("newDescription").value.trim(),
    participants: 0,
    joinedBy: [],
    bracketTeams,
  });

  persistAll();

  addActivity("A new tournament was created: " + name + ".");

  event.target.reset();

  document.getElementById("createMessage").textContent =
    "Tournament created successfully.";

  renderAll();

  showToast("Tournament created successfully.");
}

function submitResult(event) {
  event.preventDefault();

  if (!isCaptain()) {
    showToast("Only Team Captains can submit results.");
    return;
  }

  const tournamentId = Number(
    document.getElementById("resultTournament").value,
  );

  const matchKey = document.getElementById("resultMatchRound").value;

  const fixture = getBracketFixtures(tournamentId).find(
    (item) => item.key === matchKey,
  );

  if (!fixture) {
    showToast("Match not found.");
    return;
  }

  if (
    fixture.teamA.startsWith("Winner ") ||
    fixture.teamB.startsWith("Winner ")
  ) {
    showToast("The previous round must be completed first.");
    return;
  }

  if (
    currentUser.team !== fixture.teamA &&
    currentUser.team !== fixture.teamB
  ) {
    showToast("Your team is not part of this matchup.");
    return;
  }

  const scoreA = Number(document.getElementById("resultScoreA").value);
  const scoreB = Number(document.getElementById("resultScoreB").value);

  if (
    !Number.isInteger(scoreA) ||
    !Number.isInteger(scoreB) ||
    scoreA < 0 ||
    scoreB < 0
  ) {
    showToast("Please enter valid scores.");
    return;
  }

  if (scoreA === scoreB) {
    showToast("A completed match must have a winner.");
    return;
  }

  const existingResult = getMatchResult(tournamentId, matchKey);

  if (existingResult && existingResult.status !== "Rejected") {
    showToast("A result for this match has already been submitted.");
    return;
  }

  if (existingResult && existingResult.status === "Rejected") {
    existingResult.teamA = fixture.teamA;
    existingResult.teamB = fixture.teamB;
    existingResult.scoreA = scoreA;
    existingResult.scoreB = scoreB;
    existingResult.status = "Pending";
    existingResult.submittedBy = currentUser.name;
    existingResult.recordUpdated = false;
  } else {
    results.unshift({
      id: Date.now(),
      tournamentId,
      matchKey,
      match: bracketRounds.find((round) => round.key === matchKey).name,
      teamA: fixture.teamA,
      teamB: fixture.teamB,
      scoreA,
      scoreB,
      status: "Pending",
      submittedBy: currentUser.name,
      recordUpdated: false,
    });
  }

  persistAll();

  addActivity(
    currentUser.name + " submitted " + fixture.name + " for verification.",
  );

  event.target.reset();

  renderAll();

  showToast("Result submitted for administrator approval.");
}

function updateTeamRecord(result) {
  const winner = result.scoreA > result.scoreB ? result.teamA : result.teamB;

  const loser = result.scoreA > result.scoreB ? result.teamB : result.teamA;

  const winningTeam = teams.find((team) => team.name === winner);
  const losingTeam = teams.find((team) => team.name === loser);

  if (winningTeam) winningTeam.wins++;
  if (losingTeam) losingTeam.losses++;
}

function updateResult(id, status) {
  if (!isAdmin()) {
    showToast("Administrator access required.");
    return;
  }

  const result = results.find((item) => item.id === Number(id));

  if (!result || result.status !== "Pending") return;

  result.status = status;

  if (status === "Approved" && !result.recordUpdated) {
    updateTeamRecord(result);
    result.recordUpdated = true;
  }

  persistAll();

  addActivity(
    "Administrator " + status.toLowerCase() + " " + result.match + ".",
  );

  renderAll();

  showToast("Match result " + status.toLowerCase() + ".");
}

function toggleTournament(id) {
  if (!isAdmin()) return;

  const tournament = getTournament(id);

  if (!tournament) return;

  tournament.status = tournament.status === "Open" ? "Closed" : "Open";

  persistAll();
  renderAll();

  addActivity(tournament.name + " registration status was updated.");

  showToast("Tournament status updated.");
}

document.querySelectorAll("[data-auth]").forEach((button) => {
  button.addEventListener("click", () => showAuth(button.dataset.auth));
});

document.getElementById("registerRole").addEventListener("change", (event) => {
  const isPlayer = event.target.value === "Player";

  document
    .getElementById("captainOption")
    .classList.toggle("hidden", !isPlayer);

  if (!isPlayer) {
    document.getElementById("registerCaptain").checked = false;
  }
});

document.getElementById("loginForm").addEventListener("submit", login);
document.getElementById("registerForm").addEventListener("submit", register);
document.getElementById("logoutBtn").addEventListener("click", logout);

document.getElementById("navigation").addEventListener("click", (event) => {
  const button = event.target.closest("[data-page]");

  if (button) navigate(button.dataset.page);
});

document.body.addEventListener("click", (event) => {
  const goButton = event.target.closest("[data-go]");

  if (goButton) {
    navigate(goButton.dataset.go);
    return;
  }

  const detailsButton = event.target.closest("[data-details]");

  if (detailsButton) {
    openTournamentDetails(detailsButton.dataset.details);
    return;
  }

  const joinButton = event.target.closest("[data-join]");

  if (joinButton) {
    joinTournament(joinButton.dataset.join);
    return;
  }

  const gameButton = event.target.closest("[data-game]");

  if (gameButton) {
    navigate("games");
    showGameTournaments(gameButton.dataset.game);
    return;
  }

  const approveButton = event.target.closest("[data-approve]");

  if (approveButton) {
    updateResult(approveButton.dataset.approve, "Approved");
    return;
  }

  const rejectButton = event.target.closest("[data-reject]");

  if (rejectButton) {
    updateResult(rejectButton.dataset.reject, "Rejected");
    return;
  }

  const toggleButton = event.target.closest("[data-toggle-tournament]");

  if (toggleButton) {
    toggleTournament(toggleButton.dataset.toggleTournament);
  }
});

document
  .getElementById("tournamentSearch")
  .addEventListener("input", renderTournaments);
document
  .getElementById("gameFilter")
  .addEventListener("change", renderTournaments);
document
  .getElementById("statusFilter")
  .addEventListener("change", renderTournaments);
document
  .getElementById("resultFilter")
  .addEventListener("change", renderResults);

document.getElementById("clearGameFilter").addEventListener("click", () => {
  document.getElementById("selectedGamePanel").classList.add("hidden");
});

document
  .getElementById("bracketTournamentSelect")
  .addEventListener("change", renderBracket);

document
  .getElementById("resultTournament")
  .addEventListener("change", updateResultMatchTeams);

document
  .getElementById("resultMatchRound")
  .addEventListener("change", updateResultMatchTeams);

document.getElementById("globalSearch").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.getElementById("tournamentSearch").value = event.target.value;
    navigate("tournaments");
    renderTournaments();
  }
});

document.getElementById("menuToggle").addEventListener("click", () => {
  document.getElementById("sidebar").classList.toggle("open");
});

document.getElementById("resultForm").addEventListener("submit", submitResult);

document
  .getElementById("createTournamentForm")
  .addEventListener("submit", createTournament);

if (currentUser) {
  enterApp(currentUser);
} else {
  showAuth("login");
}
