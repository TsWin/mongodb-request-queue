'use strict';

const { register } = require('./moduleError');

const Messages = {
    MAP_INVALID_TYPE: (prop, must) => `The ${prop} option must be ${must}`,
    PRIORITY_INVALID_TYPE: (prop, must) => `The ${prop} option must be ${must}`,
    REQUEST_INVALID_TYPE: (prop, must) => `The ${prop} option must be ${must}`,
    // PRIORITY_INVALID_TYPE: (prop, list) => `The ${prop} option must be one of: ${list}`,
}

for (const [name, message] of Object.entries(Messages)) register(name, message);