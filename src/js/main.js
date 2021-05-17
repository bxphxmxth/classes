// ### Créer une class Personnage avec comme propriétés : 
// ### age , nom , ville
// ### Faire 2 instances de cette class.

// ## EXO2
// ### Rajouter la methode 'sePresenter' à la class Personnage qui dira "Bonjour, je m'appelle [nom-de-la-personne] !" via un console.log
// ### Lancer cette méthode sur les deux instances de l'exo1


class Personnage {
    constructor (age, nom, ville){
        this.age = age;
        this.nom = nom;
        this.ville = ville;
        this.sePresenter = () =>{
            console.log(`bonjour, je m'appelle ${this.nom}`);
        }
    }
}

let paul = new Personnage (50,"papa", "Bruxelles");
let mimi = new Personnage (17,"mimi", "bruxelles");
paul.sePresenter();
mimi.sePresenter();


// class Personnage{
//     constructor(nom, prenom, age){
//         this.nom = nom;
//         this.prenom = prenom;
//         this.age = age;
//         this.parler = (phrase) =>{
//             return phrase;
//         }
//     }
// }

// let fanny = new Personnage("Hunin","Fanny",24); //on appelle ca une instance de la classe "Personnage"
// let pilouLeChat = new Personnage("Le chat", "Pilou", 10)
// console.log(fanny.parler("salut"));
// console.log(pilouLeChat.parler("miaou"));



// ## EXO2
// ## Traduire le code suivant en class et en instances

// ### lieux
// ### let maison = {
// ###   nom: "maison",
// ###   contenu: [],
// ### };
// ### let epicerie = {
// ###   nom: "epicerie",
// ###   contenu: [],
// ###   ingredients: [],
// ### };
// ### let cuisine = {
// ###   nom: "cuisine",
// ###   contenu: [],
// ###   ingredients: [],
// ### };


class Lieu {
    constructor(nom, contenu,ingredients){
        this.nom = nom;
        this.contenu = contenu;
        this.ingredients = ingredients;
    }
}

let maison = new Lieu ("maison", []);
console.log(maison);
let epicerie = new Lieu ("epicerie", [], []);
console.log(epicerie);
let cuisine = new Lieu ("cuisine", [], []);
console.log(cuisine);



// ### ingredients
// ### let poivron = {
// ###   nom: 'poivron',
// ###   etat: 'entier',
// ###   prix:  1 ,
// ###  };
// ###  let oignon = {
// ###   nom: 'oignon',
// ###   etat: 'entier',
// ###   prix:  2 ,
// ###  };
// ###  let oeuf = {
// ###   nom: 'oeuf',
// ###   etat: 'entier',
// ###   prix:  4 ,
// ###  };
// ###  let epice = {
// ###   nom: 'epice',
// ###   etat: 'moulu',
// ###   prix:  3.25 ,
// ###  };
// ###  let paprika = {
// ###   nom: 'paprika',
// ###   etat: 'moulu',
// ###   prix:  1.5 ,
// ###  };
// ###  let fromage = {
// ###   nom: 'fromage',
// ###   etat: 'coupé',
// ###   prix:  1.6 ,
// ###  };

class Ingredients {
    constructor(nom, etat, prix){
        this.nom = nom;
        this.contenu = etat; //etat et non contenu
        this.prix = prix;

    }
}

let poivron = new Ingredients ("poivron","entier",1);
console.log(poivron);
let oignon = new Ingredients ("oignon","entier",2);
console.log(oignon);
let oeuf = new Ingredients ("oeuf","entier",4);
console.log(oeuf);
let epice = new Ingredients ("epice","moulu",3.25);
console.log(epice);
let paprika = new Ingredients ("paprika","moulu",1.5);
console.log(paprika);
let fromage = new Ingredients ("fromage", "coupé", 1.6);
console.log(fromage);

// ### Personne
// ### let personnage = {
// ###  nom: "Maxime",
// ###  lieu: "néant",
// ###  argent: 100,
// ###  panier: [],
// ###  se_deplacer(x){
// ###  },
// ###  payer(x){
// ###  },
// ###  couper(x,y){
// ###  }
// ### }


class Personne {
    constructor(nom, lieu, argent, panier){
        this.nom = nom;
        this.lieu = lieu;
        this.argent = argent;
        this.panier = panier;
        this.seDeplacer = (x) => {

        };
        this.payer = (x) => {

        };
        this.se_deplacer = (x,y) =>{

        };
        this.couper = (x,y) =>{

        };
        
    }
}

let personnage = new Personne ("Maxime","néant","100",[]);
console.log(personnage);




// ## Exo3

// ### Créer une class Objet
// ### _Propriétés : nom, prix

// ### Créer deux instances d'objets avec un nom et un prix
// ### Créer une boite (tableau) et mettre les deux objets dedans.

class Objet {
    constructor(nom,prix){
        this.nom = nom;
        this.prix = prix;
    }
}

let carteGraphique = new Objet ("GTX 1660 Ti", 550);
console.log(carteGraphique);
let drum = new Objet ("drum", 1660);
console.log(drum);

// ### Créer une class Personnage
// ### _Propriétés : nom(string), sac(tableau), argent(number)
// ### _Méthode : prendre(objet)
// ### _Méthode : acheter(vendeur, objet)

// ### Créer deux instances de Personnage et faites leur chacun [prendre] un objet de la boite avec leur méthode.
// ### Ensuite faites acheter à l'un des deux, l'objet de l'autre.

class Personnage1 {
    constructor(nom,sac,argent){
        this.nom = nom;
        this.sac = sac;
        this.argent = argent;
        this.prendre =() =>{

        }
    }
}

let pierre = new Personnage1("pierre", [], 500);
console.log(pierre);
let kayou = new Personnage1("kayou", [], 200);
console.log(kayou);


// ## Exo3

// ### Créer une class Objet
// ### _Propriétés : nom, prix

class Objet {
    constructor(nom,prix){
        this.nom = nom;
        this.prix = prix;
    }
}

// ### Créer deux instances d'objets avec un nom et un prix
// ### Créer une boite (tableau) et mettre les deux objets dedans.

let ipad = new Objet("iPad", 500);
let iphone = new Object("iPhone", 300);
let tab = [ipad,iphone];

// ### Créer une class Personnage
// ### _Propriétés : nom(string), sac(tableau), argent(number)
// ### _Méthode : prendre(objet)
// ### _Méthode : acheter(vendeur, objet)


class Personnage {
    constructor(nom, sac, argent){
        this.nom = nom;
        this.sac = sac;
        this.argent = argent;
        this.prendre = (objet) =>{
            this.sac.push(objet[0]);
            objet.splice(0,1)

        };
        this.acheter = (vendeur,objet) =>{
           this.argent = this.argent-objet.prix;
           vendeur.argent = vendeur.argent+objet.prix;
           this.sac.push(objet);
           vendeur.sac.splice(0.1);

            
        };
    }
    
}

// ### Créer deux instances de Personnage et faites leur chacun [prendre] un objet de la boite avec leur méthode.
let naz = new Personnage("Naz", [], 1000);
let lea = new Personnage("lea", [], 5044);
naz.prendre(tab);
lea.prendre(tab);
console.log(naz.sac);
naz.acheter(lea,iphone);
lea.acheter(naz,ipad);

// ### Ensuite faites acheter à l'un des deux, l'objet de l'autre.








// ## EXO4

// ### Créez une class [Lieu] avec une propriété nom(string) et personnes(array vide).
// ### Puis créez des instances de [Lieu]: MolenGeek, Snack et Maison
// ### Puis créez une class [Personne] avec une propriété nom(string), prenom(string), argent(number) et une methode seDeplacer(), cette methode permet de vous déplacer dans les differents lieux en faisant appel à la méthode embarquer() du bus.
// ### Puis créez une instance de votre personnage.
// ### Créez une class [Bus] avec une propriéte personnes(array vide), une propriéte caisse(number) et une methode embarquer() (qui sera appelée dans la méthode seDeplacer() de la personne) qui va vérifier si vous possedez l'argent, si oui, il le déduit de votre argent, et le rajoute à sa caisse, et le personnage rentre dans le bus. Le bus cout 2.80.

// ### Créez une instance de Bus. 
// ### 8h00 Vous êtes à la maison.
// ### 8h30 Vous prennez le bus vers MolenGeek.
// ### 8h45 Vous êtes à MolenGeek.
// ### 12h45 Vous sortez de MolenGeek, vous prenez le bus pour aller au snack.
// ### 13h30 Vous sortez du snack, et vous rentrer pied à MolenGeek pour digérer.
// ### 17h10 Vous sortez de MolenGeek, vous prenez le bus pour rentrer chez vous.

// ### Faites un console.log() de votre argent, ainsi que l'argent du Bus