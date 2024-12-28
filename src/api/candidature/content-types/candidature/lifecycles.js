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
    
        // Récupérer les fichiers de type CV et lettre de motivation
        const cv = result.cv && result.cv.url ? result.cv.url : null;
        const motiv = result.motiv && result.motiv.url ? result.motiv.url : null;
    
        // Préparer les pièces jointes
        const attachments = [];
        if (cv) {
          attachments.push({
            filename: 'cv.pdf', // ou le nom du fichier CV
            path: cv, // URL du fichier CV
          });
        }
        if (motiv) {
          attachments.push({
            filename: 'lettre_de_motivation.pdf', // ou le nom du fichier Motiv
            path: motiv, // URL du fichier Motiv
          });
        }
    
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
                 </ul>`,
          attachments: attachments, // Ajouter les pièces jointes
        });
      } catch (err) {
        console.log(`Erreur lors de l'exécution du lifecycle : ${err.message}`);
      }
    },
  };
  
  
  