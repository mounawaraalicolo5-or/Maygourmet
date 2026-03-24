/*
TABLE EQUIPE
*/

CREATE TABLE equipe (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(155) NOT NULL,
    poste VARCHAR(100) NOT NULL,
    telephone VARCHAR(100),
    email VARCHAR(255), 
    date_embauche DATE NOT NULL,
    salaire INT NOT NULL
);


/*
INSERTION DES EQUIPE
*/

INSERT INTO equipe (nom, poste, telephone, email, date_embauche, salaire) VALUES
('Ali Moussa', 'Responsable logistique', '0639001122', 'ali.moussa@gmail.com', '2022-05-10', 1800),
('Fatima Abdou', 'Gestionnaire de stock', '0639003344', 'fatima.abdou@gmail.com', '2021-03-15', 1600),
('Said Ahmed', 'Controle qualite', '0639005566', 'said.ahmed@gmail.com', '2020-11-01', 1700),
('Mariam Soilihi', 'Responsable commercial', '0639007788', 'mariam.soilihi@gmail.com', '2019-06-20', 2100),
('Youssouf Ali', 'Assistant administratif', '0639009900', 'youssouf.ali@gmail.com', '2023-01-08', 1500),
('Amina Bakar', 'Comptable', '0639112233', 'amina.bakar@gmail.com', '2018-09-12', 2200),
('Rachid Mohamed', 'Magasinier', '0639223344', 'rachid.mohamed@gmail.com', '2022-02-18', 1400),
('Nassira Ali', 'Chargee clientele', '0639334455', 'nassira.ali@gmail.com', '2024-04-02', 1550),
('Ibrahim Madi', 'Livreur', '0639445566', 'ibrahim.madi@gmail.com', '2023-07-25', 1300),
('Halima Saindou', 'Assistante de direction', '0639556677', 'halima.saindou@gmail.com', '2020-10-30', 2000);

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


alter table fournisseur
add id_produit int not null,
add FOREIGN KEY (id_produit) REFERENCES produit(id_produit);

CREATE TABLE produit IF NOT EXISTS(
    id_produit INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nom VARCHAR(100) NOT NULL,
    presentation VARCHAR(155),
    prix INT NOT NULL,
    origin VARCHAR(30)NOT NULL,
    categorie VARCHAR(30),
    disponibilite BOOLEAN DEFAULT false,
    type_culture VARCHAR(30)
    id_fournisseur INT NOT NULL,
    -- J'associe la table produit à la table fournisseur en utilisant l' ID FOURNISSEUR
    FOREIGN KEY (id_fournisseur) REFERENCES fournisseur(id_fournisseur)
);


-- Ajouter une ligne dans la table founisseur
INSERT INTO fournisseur (nom_fournisseur, adresse, telephone, email, date_partenariat) VALUES("Fournisseur Alimentaire Mayotte", "Kaweni, Mamoudzou", "0269612345", "contact@fam-mayotte.com", "2007-05-03");
INSERT INTO fournisseur (nom_fournisseur, adresse, telephone, email, date_partenariat) VALUES("TETRAMA", "129 rue mazava 97600 Kaweni", "0269601234", "tetramagroupe@gmail.com", "2015-07-04");
INSERT INTO fournisseur (nom_fournisseur, adresse, telephone, email, date_partenariat) VALUES("Jambo", "Majicavo Lamir", "0269624567", "commande@pfoi.fr", "2019-09-10");
INSERT INTO fournisseur (nom_fournisseur, adresse, telephone, email, date_partenariat) VALUES("BDM", "Mamoudzou Centre", "0269617890", "vente@BD-mayotte.com", "2010-12-12");

-- 5. Afficher tous les fournisseurs enregistrés dans la table fournisseur
SELECT * FROM fournisseur;

-- 6. Modifier le nom d'un fournisseur
UPDATE fournisseur SET nom_fournisseur = "Mayana Gourmande" WHERE id = 1;

-- 7. Supprimer un fournisseur de votre choix
DELETE FROM fournisseur WHERE id = 4;

-- 8. Ajouter 5 plats dans la table plat

INSERT INTO plat (nom_plat, prix, categorie, date_creation) VALUES("Poulet coco", 15.00, "Plat principal", "2026-01-29");
INSERT INTO plat (nom_plat, prix, categorie, date_creation) VALUES("Brochettes de boeuf", 10.00, "Grillades", "2026-01-30");
INSERT INTO plat (nom_plat, prix, categorie, date_creation) VALUES("Riz au lait de coco", 6.50, "Dessert", "26-02-03");
INSERT INTO plat (nom_plat, prix, categorie, date_creation) VALUES("Salade de papaye verte", 8.00, "Entrée", "26-02-02");

-- 9. Lister tous les plats enregistrés dans la table plat
SELECT * FROM plat;

-- 10. Modifier le nom d'un plat au choix
UPDATE plat SET nom_plat = "Poulet au curry et lait de coco" WHERE id_plat = 2; 

-- 11. Supprimer un plat au choix
DELETE FROM plat WHERE id_plat = 5;

-- je vais ajouter un plat dans la table plat
INSERT INTO plat (nom, quantite, prix, ingredient, fait_maison, origine) VALUES("Mshakiki","1 assiette",5000,"viande,epice,huile",1,"Comorien"),("Biryani","1 assiette",6000,"riz,viande,epice,huile",1,"Indien"),("Sambusa","3 pieces",2000,"pate,viande,epice",1,"Comorien"),("Pizza","1 piece",7000,"pate,tomate,fromage,jambon",0,"Italien");

--je vais ajouter un fournisseur dans la table fournisseur
INSERT INTO fournisseur (nom_fournisseur, adresse, telephone, email, date_partenariat) VALUES("Fournisseur de produits locaux", "Dzaoudzi, Petite-Terre", "0269623456", "contact@fournisseur-locaux.com", "2020-03-15");

--je vais ajouter un produit dans la table produit
INSERT INTO produit (nom, presentation, prix, origin, categorie, disponibilite, type_culture, id_fournisseur) VALUES("Vanille de Mayotte", "Vanille de qualité supérieure cultivée à Mayotte", 15000, "Mayotte", "Épice", true, "Agriculture biologique", 1),("Miel de Fleurs Tropicales", "Miel récolté à partir de fleurs tropicales de Mayotte", 8000, "Mayotte", "Produit apicole", true, "Apiculture durable", 1),("Riz de Mayotte", "Riz cultivé localement à Mayotte avec des méthodes traditionnelles", 5000, "Mayotte", "Céréale", true, "Agriculture traditionnelle", 1),("Huile de Coco Vierge", "Huile de coco extra vierge produite à Mayotte", 12000, "Mayotte", "Huile végétale", true, "Pressage à froid", 1);

--afficher tous les produits enregistrés dans la table produit
SELECT * FROM produit;

--modifier le prix d'un produit
UPDATE produit SET prix = 16000 WHERE id_produit = 1;

--supprimer un produit de votre choix
DELETE FROM produit WHERE id_produit = 4;

-- Afficher les produits disponibles (disponibilite = true)
SELECT * FROM produit WHERE disponibilite = true;

-- Afficher les produits d'une catégorie spécifique (par exemple, "Épice")
SELECT * FROM produit WHERE categorie = "Épice";

-- Afficher les produits d'un fournisseur spécifique (par exemple, id_fournisseur = 1)
SELECT * FROM produit WHERE id_fournisseur = 1;

-- Afficher les produits dont le prix est supérieur à un certain montant (par exemple, 10000)
SELECT * FROM produit WHERE prix > 10000;

-- Afficher les produits dont l'origine est "Mayotte"
SELECT * FROM produit WHERE origin = "Mayotte";

-- Afficher les produits dont le type de culture est "Agriculture biologique"
SELECT * FROM produit WHERE type_culture = "Agriculture biologique";

TABLE : fournisseur

   ========================================================= */

-- Un produit appartient à un fournisseur.Donc la clé étrangère doit être dans produits, pas dans fournisseur.


CREATE TABLE fournisseur (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(155) NOT NULL,
    quantite INT NOT NULL,
    prix INT NOT NULL,
    telephone VARCHAR(100) NOT NULL,
    origine VARCHAR(155) NOT NULL,
    types VARCHAR(100) NOT NULL,
    mail VARCHAR(255) NOT NULL
);

