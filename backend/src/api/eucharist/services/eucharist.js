'use strict';

/**
 * eucharist service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::eucharist.eucharist');
