'use strict';

/**
 * writing-assistant service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::writing-assistant.writing-assistant');
