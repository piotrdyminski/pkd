'use strict';

/**
 * bible-circle service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bible-circle.bible-circle');
