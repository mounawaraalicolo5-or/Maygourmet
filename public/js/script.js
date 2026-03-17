function supprimer( id) {
      const routeComplete = '/api/equipe/' + id;


      fetch(routeComplete, {method: "DELETE"} 

      ).then(
        (response) => response.json()
      ).then(
        (donnee) => window.location.href = donnee.routeAccueil
      ).catch((erreur) => console.log(erreur)
      )

    } 