FROM node

ENV NPM_CONFIG_LOGLEVEL warn

RUN mkdir -p /frontend
WORKDIR /frontend
COPY . /frontend
RUN npm install

CMD npm run dev

EXPOSE 8080
