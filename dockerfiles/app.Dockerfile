FROM node:24-alpine3.22

# Add tini entrypoint
# https://github.com/krallin/tini?tab=readme-ov-file#alpine-linux-package
RUN apk add --no-cache tini
ENTRYPOINT ["/sbin/tini", "--"]

WORKDIR /opt/graphql-service


# Copies everything not in dockerignore, tsc already run, just dist
COPY . .
RUN ls -al
RUN corepack enable
RUN yarn install --immutable
RUN yarn workspaces focus --production

CMD ["node", "./dist/index.js"]
