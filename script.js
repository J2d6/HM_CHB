// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('calculer').addEventListener('click', function() {
//         // Récupération des valeurs
//         const credit = parseFloat(document.getElementById('credit').value);
//         const banqueChecked = document.getElementById('banque').checked;
//         const fraisTransfert = parseFloat(document.getElementById('fraisTransfert').value) || 0;
//         const messages1 = parseInt(document.getElementById('messages1').value);
//         const messages2 = parseInt(document.getElementById('messages2').value);
//         const coursEuro = parseFloat(document.getElementById('coursEuro').value);
//         const LOYER_BANQUE = 50000;

//         // Validation des champs requis
//         if (isNaN(credit) || isNaN(messages1) || isNaN(messages2) || isNaN(coursEuro) || isNaN(fraisTransfert)) {
//             alert('Veuillez remplir tous les champs obligatoires avec des valeurs valides');
//             return;
//         }

        
//         console.log('Montant crédité (MGA):', credit);
//         console.log('Frais banque:', banqueChecked ? 'Oui' : 'Non');
//         console.log('Frais transfert Mvola (MGA):', fraisTransfert);
//         console.log('Messages Associé 1:', messages1);
//         console.log('Messages Associé 2:', messages2);
//         console.log('Cours de l\'euro (1 EUR):', coursEuro, 'MGA');

        //     const LOYER_BANQUE = 50000;
        // const tauxParMessage = credit/(messages1+messages2);
        // const gainA1 = banqueChecked ? (messages1*tauxParMessage) - LOYER_BANQUE : (messages1*tauxParMessage);
        // const gainA2 = banqueChecked ? (messages2 * tauxParMessage) - LOYER_BANQUE : (messages2 * tauxParMessage);


//         console.log("GAIN 1 :", gainA1);
//         console.log("GAIN 2 :", gainA2);
//         console.log("taux :", tauxParMessage);
        
        
        
//     });
// });







document.addEventListener('DOMContentLoaded', function() {
    // Theme switcher
    const themeSwitch = document.getElementById('themeSwitch');
    themeSwitch.addEventListener('change', function() {
        document.documentElement.setAttribute('data-bs-theme', this.checked ? 'dark' : 'light');
    });

    // Animation au chargement
    const inputs = document.querySelectorAll('.form-control');
    inputs.forEach((input, index) => {
        input.style.animationDelay = `${index * 0.1}s`;
        input.classList.add('animate__animated', 'animate__fadeInUp');
    });

    // Calcul des parts
    document.getElementById('calculer').addEventListener('click', function() {
        this.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i> Calcul en cours...';
        
        
        setTimeout(() => {
            // Récupération des valeurs
            const credit = parseFloat(document.getElementById('credit').value);
            const banqueChecked = document.getElementById('banque').checked;
            const fraisTransfert = parseFloat(document.getElementById('fraisTransfert').value) || 0;
            const messages1 = parseInt(document.getElementById('messages1').value);
            const messages2 = parseInt(document.getElementById('messages2').value);
            const coursEuro = parseFloat(document.getElementById('coursEuro').value);

            // Validation
            if (isNaN(credit) || isNaN(messages1) || isNaN(messages2) || isNaN(coursEuro)) {
                alert('Veuillez remplir tous les champs obligatoires');
                this.innerHTML = '<i class="fas fa-calculator me-2"></i> CALCULER LES PARTS';
                return;
            }

            // Affichage console (à remplacer par votre logique)
            console.log({
                credit,
                banqueChecked,
                fraisTransfert,
                messages1,
                messages2,
                coursEuro
            });

            // Réinitialisation du bouton
            this.innerHTML = '<i class="fas fa-check me-2"></i> Calcul terminé';
            setTimeout(() => {
                this.innerHTML = '<i class="fas fa-calculator me-2"></i> CALCULER LES PARTS';
            }, 2000);

            // Ici vous ajouterez votre logique de calcul et d'affichage des résultats

        }, 1000);
    });
});