FROM node:18.16.0 AS ng-builder
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install -g @angular/cli
RUN npm install --force
COPY . /app
RUN ls -al
RUN ng build --configuration production

FROM nginx 
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=ng-builder /app/dist/front-end /usr/share/nginx/html
EXPOSE 80