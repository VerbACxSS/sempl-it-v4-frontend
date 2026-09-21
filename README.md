# SEMPL-IT V4 frontend

This is the frontend of SEMPL-IT, a web application designed to simplify and analyze Italian administrative documents.

## WebApp

The SEMPL-IT web app consists of the following repositories:

- Frontend: https://github.com/VerbACxSS/sempl-it-v4-frontend
- Backend: https://github.com/VerbACxSS/sempl-it-v4-backend
- Monitoring Module: https://github.com/VerbACxSS/sempl-it-v4-monitoring

## Getting Started

### Pre-requisites

This web application is developed using the Angular framework and the Design Angular Kit library.

To run the application locally, the following software is required:

- Node 22.14.0
- npm

Alternatively, the application can be run using Docker. The current setup has been tested with:

- Node 22.14.0 (`node:22.14.0-bookworm-slim`)
- npm 10.9.2
- Docker 29.8.0
- Docker Compose v5.5.1

The production container uses `nginxinc/nginx-unprivileged:1.31.5-alpine3.24`.

### Using `node` and `npm`

Install the dependencies:

```shell
npm install
```

Run the application:

```shell
npm run serve-local
```

### Using `docker`

Run the application using `docker compose`:

```shell
docker compose up --build -d
```

## Usage

The web application will be running at `http://localhost:20010`.

Text inputs for Simplify and Analyze are limited to 4,000 characters. Compare accepts up to 4,000 characters for each input text.

## Built With

- Angular
- Design Angular Kit
- Apache ECharts
- NGINX

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

This contribution is a result of the research conducted within the framework of the PRIN 2020 (Progetti di Rilevante Interesse Nazionale) "VerbACxSS: on analytic verbs, complexity, synthetic verbs, and simplification. For accessibility" (Prot. 2020BJKB9M), funded by the Italian Ministero dell'Università e della Ricerca.
