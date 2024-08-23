'use strict';

/**
 * valeur service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::valeur.valeur');
