#!/usr/bin/env node
'use strict';

var weather = require('./App');
(async () => {
    var mars = await weather(process.argv[2]);
    console.log('Now its ' + mars.Season + ' on Mars')
})();
    