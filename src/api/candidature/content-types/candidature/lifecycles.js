module.exports = {
    async afterCreate(event) {
      const { result } = event;
      
      try {
        // Log visible via une action ou email
        console.log(`Nouvelle candidature créée : ${JSON.stringify(result)}`);
    
        // Extraire les informations spécifiques
        const nom = result.nom || 'Non renseigné';
        const prenom = result.prenom || 'Non renseigné';
        const email = result.email || 'Non renseigné';
        const objet = result.objet || 'Non renseigné';
        const tel = result.tel || 'Non renseigné';
        const message = result.message || 'Non renseigné';
    
        
    
        // Envoi de l'email avec les pièces jointes
        await strapi.plugin('email').service('email').send({
          to: 'nathan.crincket@etu.imt-nord-europe.fr', // Ton adresse email pour vérifier
          subject: `Nouvelle Candidature : ${objet}`,
          text: `Une nouvelle candidature a été ajoutée avec les informations suivantes :\n\nNom : ${nom}\nPrénom : ${prenom}\nEmail : ${email}\nTéléphone : ${tel}\nMessage : ${message}`,
          html: `<p>Une nouvelle candidature a été ajoutée :</p>
                 <ul>
                   <li><strong>Nom :</strong> ${nom}</li>
                   <li><strong>Prénom :</strong> ${prenom}</li>
                   <li><strong>Email :</strong> ${email}</li>
                   <li><strong>Téléphone :</strong> ${tel}</li>
                   <li><strong>Message :</strong> ${message}</li>
                 </ul>
                 <p>Rendez-vous sur le site pour télécharger le CV et la lettre de motivation : <a href="https://rational-flowers-37168cb5d5.strapiapp.com/admin/auth/login">Ici</a></p>`
        });
      } catch (err) {
        console.log(`Erreur lors de l'exécution du lifecycle : ${err.message}`);
      }
    },
  };
  
  
  