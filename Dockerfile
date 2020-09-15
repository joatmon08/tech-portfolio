FROM node:lts

WORKDIR /app/website

EXPOSE 3000 35729
COPY ./docs /app/docs
COPY ./website /app/website
COPY ./publish.sh /usr/local/bin
RUN yarn install

CMD ["yarn", "start"]
