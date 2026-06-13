# simple-web-brd-example

The marketing homepage for **isnull**, a small software studio.

A deliberately minimal project: a fully static front end (HTML + CSS + JS) with
**no dependencies** and **no build step** — just files served by nginx in Docker.
It doubles as the simplest possible target for the QA platform's isolated test
environments (clone, `docker compose up`, drive the running site).

## Run locally

```sh
docker compose up --build
# open http://localhost:8080
```

## Structure

| file                 | purpose                                  |
| -------------------- | ---------------------------------------- |
| `index.html`         | the single-page site                     |
| `styles.css`         | dark theme + layout                      |
| `app.js`             | mobile nav, reveal-on-scroll, year stamp |
| `Dockerfile`         | nginx serving the static files           |
| `docker-compose.yml` | one service on port 8080                 |
