CREATE TABLE equipe (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nom VARCHAR(155) NOT NULL,
    prenom VARCHAR (155) NOT NULL,
    mail VARCHAR (100) NOT NULL,
    telephone VARCHAR (100) NOT NULL,
    poste VARCHAR (80) NOT NULL,
    adress_postale VARCHAR (255),
    presentation VARCHAR (255),
    date_recrutement DATE 

);

-- Afficher les tables existante
SHOW TABLES;

INSERT INTO equipe (nom, prenom, mail, telephone, poste, adress_postale, presentation, date_recrutement) VALUES("SAID","Fatima","hshahida@gamil.com","0639 02 11 20","Gérante","06 Rue de la Mosquée 97600 Mamoudzou","Passionnée de cuisine traditionnelle","2015-02-01"),("ALi","Said","shoumadi@gmail.com","0639 02 11 20","gerante","02 Rue de la Mosquée 97600 labattoir","Passionnée de cuisine traditionnelle","2001-02-15"),("COMBO","Ali","cali@gmail.com","0693 02 01 15","gerante"," 18 Rue AHMED MADI","Passionnée de henne","2011-01-06"),("KAMA","Hama","hkama@gamil.com","0693 15 01 02","Gérante", "18 RUE AHMED MADI","Passionnée de henne","2002-06-11");

-- supprimer une ligne de la table
DELETE FROM equipe WHERE id = 1;

-- modifier une ligne de la table
UPDATE8 FROM equipe SET nom = "nana"*/
/*je vais ajouter quatre personne en plusse*/

-- je vais crée une table plat
CREATE TABLE plat (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nom VARCHAR(155) NOT NULL,
    quantite VARCHAR (100) NOT NULL,
    prix INT NOT NULL,
    ingredient VARCHAR (100)NULL,
    fait_maison BOOLEAN ,
    origine VARCHAR (255) NOT NULL

);
-- je vais ajouter un plat dans la table plat
INSERT INTO plat (nom, quantite, prix, ingredient, fait_maison, origine) VALUES("Mshakiki","1 assiette",5000,"viande,epice,huile",1,"Comorien"),("Biryani","1 assiette",6000,"riz,viande,epice,huile",1,"Indien"),("Sambusa","3 pieces",2000,"pate,viande,epice",1,"Comorien"),("Pizza","1 piece",7000,"pate,tomate,fromage,jambon",0,"Italien");