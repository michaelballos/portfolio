FROM node:lts
ENV PORT 3000

# app directory
RUN mkdir -p /packages/app
WORKDIR /packages/app

# install dependencies
COPY package*.json ./
RUN yarn

# copy source files
COPY . .

# build and run
RUN yarn build
EXPOSE 3000
CMD ["yarn", "dev"]