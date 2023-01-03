
/**
 * Exercice
 */
 console.log("--------- Exercice  -------------------");

// 1- Demander à l'utilisateur plusieurs mots (séparés par des virgules).
let nombreBierre = getUserEntre();
let nombreBieresEmporter = 1;

function getUserEntre(){
    let entre = prompt("Nombre de bierre");
    if(entre == "") return alert("Veuillez entrer quelque chose");
    let nombre = Number(entre);
    if(Number.isNaN(nombre)) return alert("Veuillez entrer un nombre");
    return nombre;
}

// 2- Dans la chanson, chaque fois qu'une bouteille tombe, le nombre soustrait doit augmenter de 1 .
while ( nombreBierre > 0) {
    let nombrePassage = initNombrePassage(nombreBierre, nombreBieresEmporter);
    console.log(nombrePassage);
    nombreBierre -= nombreBieresEmporter;
    nombreBieresEmporter++;
}

function initNombrePassage(nombre, compteur){
    let BouteilOrBouteils = getBouteilOrBouteils(nombre);
    let resultGetPetitNombre = getPetitNombre(compteur, nombre);
    let resultGetGrandNombre = getGrandNombre(nombre - compteur, 0);

    let nombrePassage = `${nombre} ${BouteilOrBouteils} de bière au mur
    ${nombre} ${BouteilOrBouteils} de bière
    Prenez-en ${resultGetPetitNombre}, passez-la autour de vous
    ${resultGetGrandNombre} ${getBouteilOrBouteils(resultGetGrandNombre)} de bière au mur`;

    return nombrePassage;
}

function getGrandNombre(a,b){
    return a > b ? a : b ;
}

function getPetitNombre(a,b){
    return a < b ? a : b;
}

function isMany(nombre){
    return nombre > 1 ;
}

function getBouteilOrBouteils(nombre){
    return isMany(nombre) ? "Bouteils" : "Bouteil" ;
}



// 3- La chanson doit se terminer par "0 bouteille de bière sur le mur" ou "pas de bouteille de bière sur le mur".