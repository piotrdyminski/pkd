'use strict';

/**
 * altar-boy service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::altar-boy.altar-boy');
