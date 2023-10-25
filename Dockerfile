FROM httpd
WORKDIR /home
RUN touch hola.txt
COPY . .