FROM node:10
ENV INSTALL_PATH /onebitforms-client
RUN npm install -g @angular/cli@1.4.1
RUN mkdir -p $INSTALL_PATH
WORKDIR $INSTALL_PATH
COPY package.json .
COPY . .
RUN npm install
CMD ["npm", "start"]
