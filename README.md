# myrace
<h1>Application d'organisation de compétition de courses à pied amateurs. 
</h1>
Sur cette application, on peut organiser sa propre compétition amateur, en petit comité.

#Install

<p>1 => entrez vos identifiants MySql (username et password) dans l'objet "developpement" (/server/config/config.json) </p>

<p>2 => Créer la base de données My Race (myrace) avec votre utilisateur mysql
  => "CREATE DATABASE myrace" PUIS lancer le script SQL situé dans /server/sql/database.sql </p>
  
  <p>3=> Renseigner votre adresse IP dans la fonction baseUrl() de "/client/services/api/config.json"</p>
  
<p>4 => cd /server</p>
<p>npm i</p>
<p> npm start</p>

<p>5 => cd /client</p>
<p>npm install --global expo-cli</p>
<p>npm i</p>
<p> npm start</p>

<p>COmpte admin : romain@admin.fr</p>
<p>Mdp : 19</p>
