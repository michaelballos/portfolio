FROM node:lts
ENV PORT 3000

# app directory
RUN mkdir /app
WORKDIR /app

# install dependencies
COPY package*.json ./
RUN yarn install

# copy rest of next js into app image directory

# expose port and run
EXPOSE 3000
CMD ["yarn", "dev"]