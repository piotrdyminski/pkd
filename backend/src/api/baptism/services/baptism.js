'use strict';

/**
 * baptism service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::baptism.baptism');
