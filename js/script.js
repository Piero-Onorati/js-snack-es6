/* Snack 1 Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal */

const bici = [
    {
        nome: 'Wilier 0 SLR',
        peso: 6.5
    },

    {
        nome: 'Cannondale SuperSix',
        peso: 8.0
    },

    {
        nome: 'Trek Emonda',
        peso: 4.65
    }

];

let biciLeggera = bici[0];

for (let i = 1; i< bici.length; i++){
    if(bici[i].peso < biciLeggera.peso){
        biciLeggera = bici[i];
    }
}

// destructuring//
const {nome,peso} = biciLeggera;

// console.log(biciLeggera);

document.getElementById('bicileggera').innerHTML = `La bici con peso maggiore è la ${nome} con un peso pari a ${peso}`;


/* Snack2 Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. (Utilizzate le arrow function). Infine usando la destrutturazione creiamo un nuovo array i cui elementi sono sempre degli oggetti che contengono solo nomi e falli subiti. Stampiamo tutto in console. */

const squadreDiCalcio = [
    {
        nome:'Juve',
        puntifatti : 0,
        fallisubiti: 0
    },

    {
        nome:'Inter',
        puntifatti : 0,
        fallisubiti: 0
    },

    {
        nome:'Milan',
        puntifatti : 0,
        fallisubiti: 0
    },

    {
        nome:'Roma',
        puntifatti : 0,
        fallisubiti: 0
    }
];


const getRndInteger = (min, max) => Math.floor(Math.random() * (max - min + 1) ) + min;


for (let i= 0; i< squadreDiCalcio.length; i++) {

    let numRdn1 = getRndInteger(1,3);

    let numRdn2 = getRndInteger(0,9);

    squadreDiCalcio[i].puntifatti = numRdn1;
    squadreDiCalcio[i].fallisubiti = numRdn2;
}

console.log(squadreDiCalcio);

const nuovoArray = [];

for (let i = 0; i < squadreDiCalcio.length; i++) {
    const {nome , fallisubiti} = squadreDiCalcio[i];
    nuovoArray.push({
        nome,
        fallisubiti
    });
}

console.log(nuovoArray);