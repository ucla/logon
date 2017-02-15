
FROM node:6.9.1

RUN apt-get update && apt-get install -y \
  git \
  curl

RUN npm install yarn phantomjs bower --global

ENV TEMPLATES_COMPILE_DESTINATION /var/templates/dist

VOLUME $TEMPLATES_COMPILE_DESTINATION

RUN mkdir -p /var/templates/src

WORKDIR /var/templates/src

ADD . /var/templates/src

RUN npm install && bower --allow-root install && node_modules/.bin/gulp build --dest=/var/templates/dist --production --no_styleguide

CMD ["node_modules/.bin/gulp", "--dest=/var/templates/dist", "--no_styleguide", "--no_uncss"]

EXPOSE 8000





