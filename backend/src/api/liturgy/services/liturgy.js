'use strict';

/**
 * liturgy service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::liturgy.liturgy');
