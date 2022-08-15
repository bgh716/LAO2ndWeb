FROM nginx

COPY 34.125.169.162 /etc/nginx/sites-available/34.125.169.162
COPY 34.125.169.162 /etc/nginx/sites-enabled/34.125.169.162

RUN service nginx reload

CMD ["nginx", "-g", "daemon off;"]

EXPOSE 80
