FROM node:24-alpine3.22

# Add tini entrypoint
# https://github.com/krallin/tini?tab=readme-ov-file#alpine-linux-package
RUN apk add --no-cache tini
ENTRYPOINT ["/sbin/tini", "--"]