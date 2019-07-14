#SKILLS

- Anglais (premium) - Certificate of proficiency in English - niveau C2

- HTML/CSS

- Javascript

- PHP

- mySQL

- Bootstrap

- Bulma

- Lumen

- React.js

- Trello/Slack

- Git/Github

- Rédaction Web

- API

- Programmation Orientée Objets

- AJAX

- jQuery

- Photographie

- Conception de formation

- Conception de supports pédagogiques

- Animation de comptes de réseaux sociaux

- Soins / Secourisme

  



#SOFT SKILLS

- Adaptabilité

- Prise de parole

- Pédagogie

- Travail d'équipe

- Humour

- Créativité

- Resolution de Problèmes

- Empathie

- Gestion d'équipe

- Connaissances des cultures étrangères

- Travail sous stress

  



----------

#CONTENU DE LA BASE DE DONNÉES SKILLS - DICO DES DONNÉES



| Nom      | Description              | Type                  | Commentaire                    |
| -------- | ------------------------ | --------------------- | ------------------------------ |
| Skill    | Compétence               | VARCHAR (32)          | -                              |
| Type     | Type de Skill            | VARCHAR (32)          | Skill/Soft Skill/Connaissances |
| Exp      | Expérience liée au skill | VARCHAR (255)         | -                              |
| Position | Affichage                | INT NOT NULL UNSIGNED | Place dans l'affichage         |
| Premium  | Skill mastered           | BOOL                  | Premium ou non                 |

----------

#CONTENU DE LA BASE DE DONNÉES WANTED - DICO DES DONNÉES



| Nom      | Description              | Type                  | Commentaire                    |
| -------- | ------------------------ | --------------------- | ------------------------------ |
| skill    | Compétence               | VARCHAR (32)          | -                              |
| nom     | Nom du demandeur            | VARCHAR (32)          | - |
| prénom      | Prénom du demandeur | VARCHAR (32)         | -                              |
| email | email du demandeur                | email | -        |
| update  | Le demandeur souhaite être informé           | BOOL                  | -                 |



#**USER STORIES**



| Who      | What              | Why                  | Comment                    |
| -------- | ------------------------ | --------------------- | ------------------------------ |
| Visiteur | Visualiser, dès la page d'accueil, tous les skills | Ne pas bouncer |                               |
| Visiteur | Pouvoir trouver rapidement les infos de contact    | Contacter l'auteur du site |  |
| Visiteur | Trouver facilement des infos sur chaque skill | m'informer rapidement         | -                              |
| Admin | Visualiser les analytics | voir ce qui est recherché | V2 .0         |
| Visiteur  | centraliser les skills qui m'interessent          | sous forme de panier                  |                |
| Visiteur  | Proposer un skill que je recherche          | trouver le dev idéal                  |                |
| Admin  | voir les skills qui ont été likés         | savoir lesquels sont recherchés                  |     système de coeur à cliquer           |

------------

# ROUTES

| URL           | Titre      | Description de la page   | Méthode HTTP | Controller        | Méthode  | commentaire |
| ------------- | ---------- | ------------------------ | ------------ | ----------------- | -------- | ----------- |
| `/`           | Accueil    | liste des Skills         | GET          | MainController    | home     |             |
| `/contact`    | Contact    | Formulaire de contact    | POST         | ContactController | contact  |             |
| `/suggestion` | Suggestion | Formulaire de suggestion | GET          | QuizController    | quizPost |             |
