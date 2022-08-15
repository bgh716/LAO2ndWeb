FROM nginx
 
RUN rm /etc/nginx/conf.d/default.conf

COPY conf.d/default.conf /etc/nginx/conf.d/default.conf

RUN sudo /etc/init.d/nginx reload

CMD ["nginx", "-g", "daemon off;"]

EXPOSE 80