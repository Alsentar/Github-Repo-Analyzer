# GitHub Repository Analyzer

-------------------------------------------------------------------------

This project is a simple full-stack web application that connects to the GitHub REST API using a Personal Access Token and displays information about a user's repositories.

The application retrieves the authenticated user's repositories and presents basic information such as:

- GitHub username

- Total number of repositories

- Repository names

- Number of stars per repository


The backend communicates with GitHub using Octokit, while the frontend displays the retrieved data in a dynamic React interface.

-------------------------------------------------------------------------

Tech Stack

Backend:

- Node.js

- Express.js

- Octokit (GitHub API client)

- dotenv

Frontend:

- React

- Vite

- React Router

APIs:

- GitHub REST API

-------------------------------------------------------------------------

Project Structure
Prueba-tecnica-github-api
│
├── backend
│   ├── apis
│   │   └── githubapi.js
│   │
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend (legacy)
|
├── frontend-react
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── dist
│   └── package.json
│
├── .gitignore
└── README.md


-------------------------------------------------------------------------
Application Workflow

The application follows a simple client-server architecture

# 1. Express Server Initialization

When the backend server starts:

- Express initializes middleware.

- The React production build (dist) is served as static content.

- The API endpoint /api/github becomes available.

# 2. Frontend Request

When the user opens the application in the browser:

- The React frontend sends a request to:

GET /api/github

# 3. Backend API Processing

When Express receives the request:

- The route handler calls the function getGitHubData().

- The function creates an Octokit instance authenticated using the GitHub Personal Access Token.

Two requests are sent to the GitHub API:

GET /user
GET /user/repos

The response data is processed and formatted.

# 4. Response Handling

The backend returns a JSON response containing:

{
  username,
  repoCount,
  repos: [
    { name, stars }
  ]
}

# 5. Frontend Rendering

The React frontend receives the JSON response and dynamically renders the data in a table displaying:

- Repository name

- Number of stars

- Security Notes



