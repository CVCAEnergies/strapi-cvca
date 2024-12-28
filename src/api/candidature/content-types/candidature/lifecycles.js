module.exports = {
    async afterCreate(event) {
      const { result } = event;
  
      // Envoi d'un email via le plugin email de Strapi
      try {
        await strapi.plugin('email').service('email').send({
          to: 'nathan.crincket@etu.imt-nord-europe.fr', // Adresse de réception
          subject: 'Nouvelle candidature reçue',
          text: `Une nouvelle candidature a été soumise par : ${result.name}.`,
          html: `<p>Une nouvelle candidature a été soumise par : <strong>${result.name}</strong>.</p>`,
        });
  
        strapi.log.info('Email envoyé avec succès.');
      } catch (err) {
        strapi.log.error('Erreur lors de l\'envoi de l\'email :', err);
      }
    },
  };
  