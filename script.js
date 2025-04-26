document.addEventListener('DOMContentLoaded', function() {
    const LOYER_BANQUE = 50000; // Constante pour les frais bancaires
    
    // Theme switcher
    const themeSwitch = document.getElementById('themeSwitch');
    themeSwitch.addEventListener('change', function() {
        document.documentElement.setAttribute('data-bs-theme', this.checked ? 'dark' : 'light');
    });

    // Calcul des parts
    document.getElementById('calculer').addEventListener('click', function() {
        const btn = this;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i> Calcul en cours...';
        btn.disabled = true;
        
        // Petit délai pour l'animation
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
                btn.innerHTML = '<i class="fas fa-calculator me-2"></i> CALCULER LES PARTS';
                btn.disabled = false;
                return;
            }

            // Calculs
            const tauxParMessage = credit / (messages1 + messages2);
            const gainA1 = banqueChecked ? 
                (messages1 * tauxParMessage) - LOYER_BANQUE - (fraisTransfert/2) : 
                (messages1 * tauxParMessage) - (fraisTransfert/2);
                
            const gainA2 = banqueChecked ? 
                (messages2 * tauxParMessage) - LOYER_BANQUE - (fraisTransfert/2) : 
                (messages2 * tauxParMessage) - (fraisTransfert/2);

            // Affichage des résultats
            document.getElementById('tauxMessage').textContent = tauxParMessage.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            document.getElementById('gainA1').textContent = gainA1.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ") + ' MGA';
            document.getElementById('gainA2').textContent = gainA2.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ") + ' MGA';
            
            // Animation des résultats
            const resultats = document.getElementById('resultats');
            resultats.style.display = 'block';
            resultats.classList.add('animate__fadeInUp');
            
            // Réinitialisation du bouton
            btn.innerHTML = '<i class="fas fa-check me-2"></i> Calcul terminé';
            setTimeout(() => {
                btn.innerHTML = '<i class="fas fa-calculator me-2"></i> CALCULER LES PARTS';
                btn.disabled = false;
            }, 1500);

        }, 800);
    });

    // Bouton reset
    document.getElementById('resetBtn').addEventListener('click', function() {
        document.getElementById('calculForm').reset();
        const resultats = document.getElementById('resultats');
        resultats.classList.remove('animate__fadeInUp');
        resultats.style.display = 'none';
    });
});