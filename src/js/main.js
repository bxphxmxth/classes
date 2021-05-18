// // ### Créer une class Personnage avec comme propriétés : 
// // ### age , nom , ville
// // ### Faire 2 instances de cette class.

// // ## EXO2
// // ### Rajouter la methode 'sePresenter' à la class Personnage qui dira "Bonjour, je m'appelle [nom-de-la-personne] !" via un console.log
// // ### Lancer cette méthode sur les deux instances de l'exo1


// class Personnage {
//     constructor (age, nom, ville){
//         this.age = age;
//         this.nom = nom;
//         this.ville = ville;
//         this.sePresenter = () =>{
//             console.log(`bonjour, je m'appelle ${this.nom}`);
//         }
//     }
// }

// let paul = new Personnage (50,"papa", "Bruxelles");
// let mimi = new Personnage (17,"mimi", "bruxelles");
// paul.sePresenter();
// mimi.sePresenter();


// // class Personnage{
// //     constructor(nom, prenom, age){
// //         this.nom = nom;
// //         this.prenom = prenom;
// //         this.age = age;
// //         this.parler = (phrase) =>{
// //             return phrase;
// //         }
// //     }
// // }

// // let fanny = new Personnage("Hunin","Fanny",24); //on appelle ca une instance de la classe "Personnage"
// // let pilouLeChat = new Personnage("Le chat", "Pilou", 10)
// // console.log(fanny.parler("salut"));
// // console.log(pilouLeChat.parler("miaou"));



// // ## EXO2
// // ## Traduire le code suivant en class et en instances

// // ### lieux
// // ### let maison = {
// // ###   nom: "maison",
// // ###   contenu: [],
// // ### };
// // ### let epicerie = {
// // ###   nom: "epicerie",
// // ###   contenu: [],
// // ###   ingredients: [],
// // ### };
// // ### let cuisine = {
// // ###   nom: "cuisine",
// // ###   contenu: [],
// // ###   ingredients: [],
// // ### };


// class Lieu {
//     constructor(nom, contenu,ingredients){
//         this.nom = nom;
//         this.contenu = contenu;
//         this.ingredients = ingredients;
//     }
// }

// let maison = new Lieu ("maison", []);
// console.log(maison);
// let epicerie = new Lieu ("epicerie", [], []);
// console.log(epicerie);
// let cuisine = new Lieu ("cuisine", [], []);
// console.log(cuisine);



// // ### ingredients
// // ### let poivron = {
// // ###   nom: 'poivron',
// // ###   etat: 'entier',
// // ###   prix:  1 ,
// // ###  };
// // ###  let oignon = {
// // ###   nom: 'oignon',
// // ###   etat: 'entier',
// // ###   prix:  2 ,
// // ###  };
// // ###  let oeuf = {
// // ###   nom: 'oeuf',
// // ###   etat: 'entier',
// // ###   prix:  4 ,
// // ###  };
// // ###  let epice = {
// // ###   nom: 'epice',
// // ###   etat: 'moulu',
// // ###   prix:  3.25 ,
// // ###  };
// // ###  let paprika = {
// // ###   nom: 'paprika',
// // ###   etat: 'moulu',
// // ###   prix:  1.5 ,
// // ###  };
// // ###  let fromage = {
// // ###   nom: 'fromage',
// // ###   etat: 'coupé',
// // ###   prix:  1.6 ,
// // ###  };

// class Ingredients {
//     constructor(nom, etat, prix){
//         this.nom = nom;
//         this.contenu = etat; //etat et non contenu
//         this.prix = prix;

//     }
// }

// let poivron = new Ingredients ("poivron","entier",1);
// console.log(poivron);
// let oignon = new Ingredients ("oignon","entier",2);
// console.log(oignon);
// let oeuf = new Ingredients ("oeuf","entier",4);
// console.log(oeuf);
// let epice = new Ingredients ("epice","moulu",3.25);
// console.log(epice);
// let paprika = new Ingredients ("paprika","moulu",1.5);
// console.log(paprika);
// let fromage = new Ingredients ("fromage", "coupé", 1.6);
// console.log(fromage);

// // ### Personne
// // ### let personnage = {
// // ###  nom: "Maxime",
// // ###  lieu: "néant",
// // ###  argent: 100,
// // ###  panier: [],
// // ###  se_deplacer(x){
// // ###  },
// // ###  payer(x){
// // ###  },
// // ###  couper(x,y){
// // ###  }
// // ### }


// class Personne {
//     constructor(nom, lieu, argent, panier){
//         this.nom = nom;
//         this.lieu = lieu;
//         this.argent = argent;
//         this.panier = panier;
//         this.seDeplacer = (x) => {

//         };
//         this.payer = (x) => {

//         };
//         this.se_deplacer = (x,y) =>{

//         };
//         this.couper = (x,y) =>{

//         };

//     }
// }

// let personnage = new Personne ("Maxime","néant","100",[]);
// console.log(personnage);




// // ## Exo3

// // ### Créer une class Objet
// // ### _Propriétés : nom, prix

// // ### Créer deux instances d'objets avec un nom et un prix
// // ### Créer une boite (tableau) et mettre les deux objets dedans.

// class Objet {
//     constructor(nom,prix){
//         this.nom = nom;
//         this.prix = prix;
//     }
// }

// let carteGraphique = new Objet ("GTX 1660 Ti", 550);
// console.log(carteGraphique);
// let drum = new Objet ("drum", 1660);
// console.log(drum);

// // ### Créer une class Personnage
// // ### _Propriétés : nom(string), sac(tableau), argent(number)
// // ### _Méthode : prendre(objet)
// // ### _Méthode : acheter(vendeur, objet)

// // ### Créer deux instances de Personnage et faites leur chacun [prendre] un objet de la boite avec leur méthode.
// // ### Ensuite faites acheter à l'un des deux, l'objet de l'autre.

// class Personnage1 {
//     constructor(nom,sac,argent){
//         this.nom = nom;
//         this.sac = sac;
//         this.argent = argent;
//         this.prendre =() =>{

//         }
//     }
// }

// let pierre = new Personnage1("pierre", [], 500);
// console.log(pierre);
// let kayou = new Personnage1("kayou", [], 200);
// console.log(kayou);


// // ## Exo3

// // ### Créer une class Objet
// // ### _Propriétés : nom, prix

// class Objet {
//     constructor(nom,prix){
//         this.nom = nom;
//         this.prix = prix;
//     }
// }

// // ### Créer deux instances d'objets avec un nom et un prix
// // ### Créer une boite (tableau) et mettre les deux objets dedans.

// let aquarium = new Objet("iPad", 50);
// let terrarium = new Object("iPhone", 60);
// let boite = [];
// boite.push(aquarium);
// boite.push(terrarium)

// // ### Créer une class Personnage
// // ### _Propriétés : nom(string), sac(tableau), argent(number)
// // ### _Méthode : prendre(objet)
// // ### _Méthode : acheter(vendeur, objet)


// class Personnage {
//     constructor(nom, sac, argent){
//         this.nom = nom;
//         this.sac = sac;
//         this.argent = argent;
//         this.prendre = (objet,boite) =>{
//             this.sac.push(objet);
//             boite.splice(boite.indexOf(objet),1);
//             console.log(`${this.nom} a mit un ${objet} dans son sac`);

//         };
//         this.acheter = (vendeur,objet) =>{
//            this.argent = this.argent-objet.prix;
//            vendeur.argent = vendeur.argent+objet.prix;
//            this.sac.push(objet);
//            vendeur.sac.splice(0.1);
//         };
//     }

// }

// // ### Créer deux instances de Personnage et faites leur chacun [prendre] un objet de la boite avec leur méthode.
// let julio = new Personnage("julio", [], 30);
// let miguel = new Personnage("miguel", [], 70);
// naz.prendre(tab);
// lea.prendre(tab);
// console.log(naz.sac);
// naz.acheter(lea,iphone);
// lea.acheter(naz,ipad);

// ### Ensuite faites acheter à l'un des deux, l'objet de l'autre.


// ## EXO4

// ### Créez une class [Lieu] avec une propriété nom(string) et personnes(array vide).
// ### Puis créez des instances de [Lieu]: MolenGeek, Snack et Maison
// ### Puis créez une class [Personne] avec une propriété nom(string), prenom(string), argent(number) et une methode seDeplacer(), cette methode permet de vous déplacer dans les differents lieux en faisant appel à la méthode embarquer() du bus.
// ### Puis créez une instance de votre personnage.



// class Lieu {
//     constructor(nom, personnes) {
//         this.nom = nom;
//         this.personnes = personnes;

//     }
// }

// let molenGeek = new Lieu("Molengeek", []);
// let snack = new Lieu("Snack", []);
// let maison = new Lieu("Maison", []);

// class Personne {
//     constructor(nom, prenom, argent) {
//         this.nom = nom;
//         this.prenom = prenom;
//         this.argent = argent;

//         this.seDeplacer = (arrivee, depart, transport) => {
//             if(transport.embarquer.this == true){
//                 console.log(`${this.prenom} est arrivé à ${arrivee.nom} en bus` );
//                 arrivee.personnes.push(this);
//                 depart.personnes.splice(depart.personnes.indexOf(this,1));
//             }else if(transport.embarquer.this == false){
//                 console.log(`${this.prenom} ne peut pas prendre le bus`);
//                 arrivee.personnes.push(this);
//                 depart.personnes.splice(depart.personnes.indexOf(this,1));
//             }else{
//                 console.log(`${this.prenom} va marcher`);
//                 arrivee.personnes.push(this);
//                 depart.personnes.splice(depart.personnes.indexOf(this,1));
//             }
//         }
//     }

// }
// let naz = new Personne("Aala", "Naz", 83);

// // ### Créez une class [Bus] avec une propriéte personnes(array vide), une propriéte caisse(number) et une methode embarquer() (qui sera appelée dans la méthode seDeplacer() de la personne) qui va vérifier si vous possedez l'argent, si oui, il le déduit de votre argent, et le rajoute à sa caisse, et le personnage rentre dans le bus. Le bus cout 2.80.

// class Bus {
//     constructor(personnes, caisse) {
//         this.personnes = personnes;
//         this.caisse = caisse;
//         this.embarquer = (passager) =>{
//             if(passager.argent >= 2.80){
//                 passager.argent -= 2.80;
//                 this.caisse += 2.80;
//                 this.personnes.push(passager)
//                 console.log(`${passager.prenom} est monté dans le bus`);
//                 this.personnes.splice(this.personnes.indexOf(passager));
//                 console.log(` ${passager.prenom} is out, ${this.personnes}`);
//                 return true;
//             }else{
//                 console.log("t'as pas assez de moula");
//                 return false;
//             }
//         }
//     }
// }


// // ### Créez une instance de Bus. 

// let bus = new Bus([], 20);

// // ### 8h00 Vous êtes à la maison.
// // let maison = new Lieu ("Maison", []);

// maison.personnes.push(naz);
// bus.personnes.push(naz);
// console.log(bus);

// console.log(`Il est 8h, ${naz.prenom} est à la ${maison.nom}`);
// naz.seDeplacer();


// // ### 8h30 Vous prennez le bus vers MolenGeek.

// console.log(`Il est 8h30, ${naz.prenom} prends le bus vers ${molenGeek.nom}`);

// // ### 8h45 Vous êtes à MolenGeek.
// naz.seDeplacer();
// molenGeek.personnes.push(naz);
// console.log(molenGeek);

// console.log(`8h45 ${naz.prenom} est à ${molenGeek.nom}`);

// ### 12h45 Vous sortez de MolenGeek, vous prenez le bus pour aller au snack.

// ### 13h30 Vous sortez du snack, et vous rentrer pied à MolenGeek pour digérer.

// ### 17h10 Vous sortez de MolenGeek, vous prenez le bus pour rentrer chez vous.

// ### Faites un console.log() de votre argent, ainsi que l'argent du Bus








// ## EXO4

// ### Créez une class [Lieu] avec une propriété nom(string) et personnes(array vide).

class Lieu {
    constructor(nom,personnes){
        this.nom = nom;
        this.personnes = personnes;
    }
}

// ### Puis créez des instances de [Lieu]: MolenGeek, Snack et Maison

let molenGeek = new Lieu("Molengeek", []);
let snack = new Lieu("Snack", []);
let maison = new Lieu("Maison", []);

// ### Puis créez une class [Personne] avec une propriété nom(string), prenom(string), argent(number) et une methode seDeplacer(), cette methode permet de vous déplacer dans les differents lieux en faisant appel à la méthode embarquer() du bus ou en y allant à pieds.
class Personne{
    constructor(nom, prenom, argent){
        this.nom = nom;
        this.prenom = prenom;
        this.argent = argent;
        this.seDeplacer = (depart, arrivee, transport) => {
            if(transport == "pieds" ){
            
                arrivee.personnes.push(this);
                depart.personnes.splice(depart.personnes.indexOf(this,1));
                console.log(` J'vé à pieds`);
            }else if (transport.embarquer(this) == true){
                arrivee.personnes.push(this);
                depart.personnes.splice(depart.personnes.indexOf(this,1));
                console.log(`BUUS`);
            }else{
                arrivee.personnes.push(this);
                depart.personnes.splice(depart.personnes.indexOf(this,1));
                console.log(`J'ai pas assez, je prends pas le bus `);
            }


        }

        
    }
}


// ### Puis créez une instance de votre personnage.

let naz = new Personne("Aala", "Naz", 50);

// ### Créez une class [Bus] avec une propriéte personnes(array vide), une propriéte caisse(number) et une methode embarquer() (qui sera appelée dans la méthode seDeplacer() de la personne) qui va vérifier si vous possedez l'argent, si oui, il le déduit de votre argent, et le rajoute à sa caisse, et le personnage rentre dans le bus. Le bus cout 2.80.
// Sinon, il faut y aller à pied.

class Bus {
    constructor(personnes, caisse){
    this.personnes = personnes;
    this.caisse = caisse;
    this.embarquer = (passager) =>{
    if(passager.argent >= 2.80){
       passager.argent -= 2.80;
       this.caisse += 2.80; 
       this.personnes.push(passager);
       console.log(`je suis dans le bus`);
       this.personnes.splice(this.personnes.indexOf(passager,1));
       return true;

    }else {
        console.log(`va travailler `);
        return false; 
    }    

    }    
 }

}

// ### Créez une instance de Bus. 

let bus = new Bus([], 0);
bus.embarquer(naz);


// ### 8h00 Vous êtes à la maison.

maison.personnes.push(naz);
console.log(maison.personnes);

// ### 8h30 Vous prennez le bus vers MolenGeek.

naz.seDeplacer(maison,molenGeek,bus);

// ### 8h45 Vous êtes à MolenGeek.

// ### 12h45 Vous sortez de MolenGeek, vous prenez le bus pour aller au snack.

naz.seDeplacer(molenGeek,snack,bus);
console.log(snack);

// ### 13h30 Vous sortez du snack, et vous rentrer pied à MolenGeek pour digérer.


naz.seDeplacer(snack,molenGeek,"pieds")

// ### 17h10 Vous sortez de MolenGeek, vous prenez le bus pour rentrer chez vous.

naz.seDeplacer(molenGeek,maison, bus);

// ### Faites un console.log() de votre argent, ainsi que l'argent du Bus(modifié)

console.log(naz.argent);
console.log(bus.caisse);

