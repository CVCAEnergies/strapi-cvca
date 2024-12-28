'use strict';

/**
 * candidature router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::candidature.candidature');

module.exports = {
    routes: [
      {
        method: 'GET',
        path: '/test-lifecycle',
        handler: 'candidature.testLifecycle',
      },
    ],
  };
  
