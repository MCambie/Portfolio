function masquer_div(id)
{
  if (document.getElementById(id).style.display == 'none')
  {
       document.getElementById(id).style.display = 'block'; 
  }
  else
  {  
       document.getElementById(id).style.display = 'none';
  }
};



document.addEventListener("DOMContentLoaded", function() {
     // Boucle toute les classes .courriel
     var oC = document.getElementsByClassName("courriel");
     var i;
     for (i = 0; i < oC.length; i++) {
       // récupère l'adresse codée
       var sC = oC[i].getAttribute("data-courriel");
       // Remplace le mot « point » par un point 
       sC = sC.replace("point", ".");
       // Remplacer le mot « arobas » par @
       sC = sC.replace("arobas", "@");
       // Ajouter l'attribut « href » avec l'adresse
       oC[i].setAttribute("href", "mailto:" + sC);
       // Ajouter l'adresse comme texte du lien 
     } 
   })