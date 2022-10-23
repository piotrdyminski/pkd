'use strict';

/**
 * altar-boy router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::altar-boy.altar-boy');
