FROM node:22-alpine as build

ARG VERSION=development
ARG API_URL=http://localhost:8055

USER root

RUN mkdir -p /home/node/app && chown -R node:node /home/node/app

USER node

WORKDIR /home/node/app

COPY --chown=node:node package.json package-lock.json /home/node/app/
RUN npm install

COPY --chown=node:node public /home/node/app/public
COPY --chown=node:node src /home/node/app/src
COPY --chown=node:node .eslintignore /home/node/app/
COPY --chown=node:node .eslint.config.js /home/node/app/
COPY --chown=node:node index.html /home/node/app/
COPY --chown=node:node tsconfig.json /home/node/app/
COPY --chown=node:node tsconfig.app.json /home/node/app/
COPY --chown=node:node tsconfig.node.json /home/node/app/
COPY --chown=node:node vite.config.js /home/node/app/

RUN VERSION=${VERSION} API_URL=${API_URL} npm run build

FROM node:22-alpine

USER root

RUN mkdir -p /home/node/app && chown -R node:node /home/node/app

USER node

COPY --from=build --chown=node:node /home/node/app/dist/spa /home/node/app

WORKDIR /home/node/app

ENTRYPOINT [ "npm" ]

CMD [ "dev", "--host", "." ]
