////////// Exercice 1 //////////

// function myLength(str) {
//     let length = 0;
//     for (item in str) {
//         length++
//     }
//     console.log(str);
// }
// myLength();

////////// Exercice 1bis //////////

// function search() {
//     let alea = Math.round(Math.random() * 3);
//     for (let j = 1; j > 0; j++) {
//         let call = parseInt(prompt('Trouvez le chiffre entre 1 et 3'));
//         if (call !== alea) {
//             console.log('Recommencez');
//         } else if (call === alea) {
//             console.log('Bravo');
//         }
//     }
// }   
// search();


////////// Exercice 2 //////////

// function entierAleatoire(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function aleatoire(nbre) {
//     let entier = entierAleatoire(1, 3);
//     nbre = entier;
//     for (let i = 1; i > 0; i++) {
//         let essai = parseInt(prompt('Trouvez le chiffre entre 1 et 3'));
//         if (essai === nbre) {
//             alert('Bravo');
//         } else{
//             alert('Recommencez');
//         } 
//     } while (essai != nbre);
// }
// aleatoire();



////////// Exercice 2bis //////////

// function aleatoire(nbre) {
//     let entier = entierAleatoire(10, 20);
//     nbre = entier;
//     for (let i = 1; i > 0; i++) {
//         let essai = parseInt(prompt('Trouvez le chiffre entre 10 et 20'));
//         if (essai > 20) {
//             alert('Plus petit !');
//         } else if (essai < 10) {
//             alert('Plus grand !');
//         } else if (essai === nbre) {
//             alert('Bravo, vous avez trouvé');
//         } else {
//             alert('Recommencez');
//         }
//     } while (essai != nbre);
// }
// aleatoire();


////////// Exercice 3 //////////

// function startNum(num) {
//     num = parseInt(prompt('Veuillez entrer un nombre'));
//     for (a = 0; a <= 9; a++) {
//         num ++;
//         console.log(num);        
//     }
// }
// startNum();


////////// Exercice 4 //////////

// function startNum(num) {
//     num = parseInt(prompt('Veuillez entrer un nombre'));
//     for (a = 0; a <= 9; a++) {
//         num ++;
//         console.log(num);        
//     }
// }
// startNum();


////////// Exercice 5 //////////

// function multiply(a) {
//     let num = parseInt(prompt('Entrez un chiffre pour voir sa table de multiplication'));
//     for (let i = 1; i <= 10; i++) {
//         console.log(num + ' x ' + i + " = " + num * i);       
//     }
// }
// multiply();


////////// Exercice 6 //////////

// function sum () {
//     let nombre = parseInt(prompt('Entrez un nombre de départ'));
//     let somme = 0;
//     for (let i = 1; i <= nombre; i++) {  
//         somme += i;     
//     }   
//     console.log(somme);
// }
// sum();


////////// Exercice 7 //////////

// function fact() {
//     let nombre = parseInt(prompt('Entrez un nombre de départ'));
//     let f = 1;
//     for (let i = 2; i <= nombre; i++) {
//         f = f * i;        
//     }
//     console.log(f);
// }
// fact();


////////// Exercice 8 //////////

// function high () {
//     let position;
//     plusGrand = 0;
//     for (let i = 1; i <= 20; i++) {
//         let nombre = parseInt(prompt('Entrez un nombre'));
//         if (nombre > plusGrand) {
//             plusGrand = nombre;
//             position = i;
//         }
//     } 
//     alert('Le nombre le plus grand était ' + plusGrand);
//     alert('Il a été saisi en position numéro ' + position);
// }
// high();


////////// Exercice 9 //////////

// function high () {
//     let nombre = 1;
//     let i = 0;
//     let plusGrand = 0;
//     let position;
//     while (nombre !== 0) {
//         i+= 1;
//         nombre = parseInt(prompt('Entrez un nombre'));
//         if (nombre > plusGrand) {
//             plusGrand = nombre;
//             position = i;
//         }
//     } 
//     alert('Le nombre le plus grand était ' + plusGrand);
//     alert('Il a été saisi en position numéro ' + position);
// }
// high();


////////// Exercice 10 //////////

// function argent () {
//     let somme = 0;
//     let age = parseInt(prompt('Entrez un age'));
//     for (let i = 1; i <= age; i++) {
//         somme += 100 + (2 * i);
//     }
//     console.log(somme);
// }
// argent();