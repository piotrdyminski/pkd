'use strict';

/**
 * firefighter service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::firefighter.firefighter');
