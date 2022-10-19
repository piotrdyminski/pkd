'use strict';

/**
 * cemetery service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cemetery.cemetery');
