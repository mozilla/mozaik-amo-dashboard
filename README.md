# Mozaïk amo dashboard

[![Greenkeeper badge](https://badges.greenkeeper.io/mozilla/mozaik-amo-dashboard.svg)](https://greenkeeper.io/)

AMO Dashboard based on mozaik-demo.

## Running locally

* yarn install
* node server.js

### Adding environment variables

Some extensions requires additional settings, you
can add it via environment variables to avoid
modifying config files, you can use `export`:

``` sh
export GITHUB_API_TOKEN="xxxxx"
node server.js config.yml
```

or prepend it to the command:

``` sh
GITHUB_API_TOKEN="xxxxx" node server.js config.yml
```

or create an `.env` file if you want a more permanent solution:

``` sh
# .env
GITHUB_API_TOKEN=xxxxx
node server.js config.yml
```

Note that `.env` file is in `.gitignore` to prevent pushing
sensitive data to GitHub.
