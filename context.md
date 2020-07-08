<h1>Application d'organisation de compétition de courses à pied amateurs. 
</h1>
Sur cette application, on peut organiser sa propre compétition amateur, en petit comité.

Chaque utilisateur peut créer sa propre course en mentionnant les informations de celles-ci 
(départ, arrivée; kilométrage, dénivelé, nombre max de participant, voire tracé gps si j'arrive )

Les administrateurs de l'application peuvent contrôler la légalité et la faisabilité de cette course : 
Si elle elle est située dans un endroit dangereux ou dans un endroit inadapté à une course, 
ils peuvent annuler la course.
Si l'administrateur est d'accord, il valide la création de cette course. 

D'autres utilisateurs peuvent alors s'inscrire à cette course.

Un forum concernant la course est alors créée, en attendant le jour J.

Une fois la course déroulée, les résultats sont publiés par l'organisateur de celle-ci. 
Les utilisateurs peuvent discuter de leurs résultats ...

Sur son profil, un utilisateur a des statistiques détaillées sur ses performances .

#Install

<p>1 => entrez vos identifiants MySql (username et password) dans l'objet "developpement" (/server/config/config.json) </p>

<p>2 => Créer la base de données My Race (myrace) avec votre utilisateur mysql
  => "CREATE DATABASE myrace" PUIS lancer le script SQL situé dans /server/sql/database.sql </p>
  
  <p>3=> Renseigner votre adresse IP dans la fonction baseUrl() de "/client/services/api/config.json"</p>
  
<p>4 => cd /server</p>
<p> npm start</p>

<p>5 => cd /client</p>
<p> npm start</p>