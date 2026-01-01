# Landing Page

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Github API](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)

![GitHub contributors](https://img.shields.io/github/contributors/Nguyen-HanhNong/landing-page?color=ffcc66&style=for-the-badge)
![GitHub stars](https://img.shields.io/github/stars/Nguyen-HanhNong/landing-page?color=ffcc66&style=for-the-badge)
[![GitHub forks](https://img.shields.io/github/forks/Nguyen-HanhNong/landing-page?style=for-the-badge)](https://github.com/Nguyen-HanhNong/star_book/network)
[![GitHub issues](https://img.shields.io/github/issues/Nguyen-HanhNong/landing-page?color=ffcc66&style=for-the-badge)](https://github.com/Nguyen-HanhNong/star_book/issues)
[![GitHub license](https://img.shields.io/github/license/Nguyen-HanhNong/landing-page?color=ffcc66&style=for-the-badge)](https://github.com/Nguyen-HanhNong/landing-page/blob/master/LICENSE)
[![Node Version](https://img.shields.io/static/v1?label=Node&message=^20.10.0&color=026e00&style=for-the-badge)](https://nodejs.org)
[![npm Version](https://img.shields.io/static/v1?label=npm&message=^10.2.3&color=cb0000&style=for-the-badge)](https://nodejs.org)
## About The Project 

![Image of Landing Page](public/social-image.png)

This project contains the code for my personal landing page, which can be found at [nnong.dev](https://nnong.dev). The landing page is built using React and styled with Tailwind CSS.

## Getting Started

### Prerequisites

- **For Docker setup**: Docker and Docker Compose installed. Download Docker [here](https://www.docker.com/get-started).
- **For local setup**: Node.js and npm. If you do not have Node.js installed, you can download it [here](https://nodejs.org/en/download/).
- The project will also require git and a valid GitHub account to run. You can download git [here](https://git-scm.com/downloads).

## Running with Docker (Recommended)

Docker provides a simple, consistent environment for running the application without needing to install Node.js locally.

### Quick Start

1. Clone the repository
   ```sh
   git clone https://github.com/Nguyen-HanhNong/landing-page.git
   cd landing-page
   ```

2. Start the application with Docker Compose
   ```sh
   docker-compose up
   ```

3. Open the project in your browser
   ```
   http://localhost:3000/
   ```

The application will automatically reload when you make changes to the source code.

### Docker Commands

- **Start the application**: `docker-compose up`
- **Start in detached mode** (background): `docker-compose up -d`
- **Stop the application**: `docker-compose down`
- **View logs**: `docker-compose logs -f`
- **Rebuild containers** (after dependency changes): `docker-compose up --build`
- **Access container shell**: `docker-compose exec app sh`

### Alternative: Using Docker directly

If you prefer using Docker directly without Docker Compose:

1. Build the Docker image
   ```sh
   docker build -t landing-page .
   ```

2. Run the container
   ```sh
   docker run -p 3000:3000 -v $(pwd):/app -v /app/node_modules landing-page
   ```

## Running Locally (Without Docker)

If you prefer to run the application without Docker:

1. Clone the repository
   ```sh
   git clone https://github.com/Nguyen-HanhNong/landing-page.git
   cd landing-page
   ```

2. Install NPM packages
   ```sh
   npm install
   ```

3. Run the project
   ```sh
   npm run start
   ```

4. Open the project in your browser
   ```
   http://localhost:3000/
   ```

## Deployment to GitHub Pages

The Docker setup is only for local development. GitHub Pages deployment remains unchanged and works exactly as before:

1. Build the project
   ```sh
   npm run build
   ```

2. Deploy to GitHub Pages
   ```sh
   npm run deploy
   ```

Or use the custom deploy script:
   ```sh
   npm run custom-deploy
   ```

The Docker files (Dockerfile, docker-compose.yml, .dockerignore) are ignored during GitHub Pages deployment and will not interfere with the deployment process.

## License

Distributed under the GNU General Public License v3.0. See `LICENSE` for more information.
