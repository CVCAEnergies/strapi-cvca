'use strict';

/**
 * candidature controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::candidature.candidature');

module.exports = {
    async testLifecycle(ctx) {
      try {
        const result = { name: 'Test', email: 'test@exemple.com' };
  
        await strapi.plugin('email').service('email').send({
          to: 'nathan.crincket@etu.imt-nord-europe.fr',
          subject: 'Test Email depuis testLifecycle',
          text: `Voici un email de test avec les données suivantes : ${JSON.stringify(result)}`,
        });
  
        ctx.send({ message: 'Email envoyé avec succès depuis testLifecycle.' });
      } catch (err) {
        ctx.send({ error: err.message });
      }
    },
  };
  
