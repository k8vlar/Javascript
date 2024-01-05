let jours = [ 'lun', '007', 'mer', 'jeu', 'ven', 'sam', 'BUG' ];

// Quelles instructions JavaScript faut-il exécuter pour effectuer les opérations suivantes ?
// 1. Retirer la dernière valeur du tableau jours
// 2. Afficher les valeurs du tableau dans la console
// 3. Ajouter la valeur 'dim' à la fin du tableau
// 4. Remplacer la valeur '007' par 'mar'
// 5. Afficher le nombre de valeurs du tableau dans la console
// 6. Afficher la troisième valeur du tableau dans la console
// Quelle est la valeur finale du tableau, après avoir effectué toutes ces opérations ?
// 1.+3.
jours.splice(6,1,'dim');
// 4.
jours.splice(1,1,'mar')
// 5.
jours.length;
// 6.
console.log(jours[2]);
// 2.
console.log(jours);

