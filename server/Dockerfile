# Specify a base image
FROM node:12.13.0-alpine AS alpine
WORKDIR /app
# Install dependencies
COPY package.json .
RUN npm install
COPY . .
# Default command
CMD ["npm", "run", "dev"]

#docker build . -t mon-serveur
#docker run -d -p 2368:2368 mon-serveur

#stop all images => docker stop $(docker ps -a -q)
#delete all images =>  docker rmi $(docker images -q) -f
#lance contneeur mode interactif docker run -d -it server
#entrer docker exec -it bad1a49b55de bashy
