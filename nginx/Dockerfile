FROM nginx

RUN rm /etc/nginx/sites-available/default
COPY default /etc/nginx/sites-available/default

CMD ["nginx", "-g", "daemon off;"]

EXPOSE 80
