module.exports = {
    async afterCreate(event) {
      const { result } = event;
  
      try {
        // Log visible via une action ou email
        console.log(`Nouvelle candidature créée : ${JSON.stringify(result)}`);
  
        await strapi.plugin('email').service('email').send({
          to: 'nathan.crincket@etu.imt-nord-europe.fr', // Ton adresse email pour vérifier
          subject: 'Test Lifecycle Hook',
          text: `Une nouvelle candidature a été ajoutée avec les informations suivantes : ${JSON.stringify(result)}`,
          html: `<p>Une nouvelle candidature a été ajoutée :</p><pre>${JSON.stringify(result)}</pre>`,
        });
      } catch (err) {
        console.log(`Erreur lors de l'exécution du lifecycle : ${err.message}`);
      }
    },
  };
  
  