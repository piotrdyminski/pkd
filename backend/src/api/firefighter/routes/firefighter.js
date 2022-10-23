'use strict';

/**
 * firefighter router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::firefighter.firefighter');
