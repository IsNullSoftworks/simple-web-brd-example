# The isnull homepage is pure static files; nginx just serves them.
FROM nginx:alpine
COPY index.html styles.css app.js forum.html forum.js /usr/share/nginx/html/
EXPOSE 80
