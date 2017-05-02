require('dotenv').load({ silent: true })

const path   = require('path')
const Mozaik = require('mozaik')
const fs = require('fs');


let configFile = process.argv[2] || 'config.yml'

console.log(`using config file: ${configFile}\n`)

Mozaik.configureFromFile(path.join(__dirname, configFile))
    .then((config) => {
        Mozaik.registerApi('github',    require('mozaik-ext-github/client'))
        Mozaik.registerApi('travis',    require('mozaik-ext-travis/client'))
        Mozaik.start()

        if (process.env.DYNO) {
            console.log('This is on Heroku..!!');
            fs.openSync('/tmp/app-initialized', 'w');
        }
    })
    .catch(err => {
        console.error(err)
    })
