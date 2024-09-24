
// Initialiser la carte centrée sur Boulogne-sur-Mer
var map = L.map('map').setView([50.725231, 1.613334], 10);

// Ajouter une couche de tuiles OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Ajoute un marqueur pour chaque ville
L.marker([50.725231, 1.613334]).addTo(map)
    .bindPopup(`
        <div class="card">
            <img  class="img" src="img/aledorian.webp">
             Aledorian<br>
            Legrand<br>
            Boulogne-sur-mer<br>
            Art 🎨 et jeux vidéos 🎮 <br>
            HTML, CSS, JS, PHP
        </div>
    `)
    .openPopup();

    

    L.marker([50.742231, 1.653334]).addTo(map)
    .bindPopup(`
        <div class="card">
            <img  class="img" src="img/terence-creteur.webp">
             Térence<br>
            Creteur<br>
            Boulogne-sur-mer<br>
            Ecriture 🖋️ et musique 🎵<br>
            HTML, CSS, JS, C#
        </div>
    `)
    .openPopup();

    L.marker([50.744231, 1.673334]).addTo(map)
    .bindPopup(`
        <div class="card">
            <img  class="img" src="img/philippe.webp">
             Philippe<br>
            Bourgeois<br>
            Boulogne-sur-mer<br>
            Randonnée ⛰️ et musique 🎼<br>
            HTML, CSS, MySQL, Symphony
        </div>
    `)
    

    L.marker([50.731906 , 1.645652]).addTo(map)
    .bindPopup(`
        <div class="card">
            <img  class="img" src="img/julie.webp">
             Julie<br>
            Charles<br>
            Saint-Martin Boulogne<br>
            Films 📽️ et séries  🎞️ <br>
            HTML, CSS, 
        </div>
    `)
    .openPopup();


    L.marker([  50.950001 , 1.85635]).addTo(map)
    .bindPopup(`
        <div class="card">
            <img  class="img" src="img/florent.webp">
             Florent<br>
            Broutin<br>
            Calais<br>
            Informatique 💻 et jeux vidéos 🎮<br>
            HTML, CSS, JS
        </div>
    `)
    .openPopup();

    L.marker([ 50.700001 , 1.56667]).addTo(map)
    .bindPopup( `
        <div class="card">
            <img  class="img" src="img/photo-de-moi.jpg">
             Maryline<br>
            Lesaffre<br>
            Le Portel<br>
            Dessin ✏️ Jeux vidéo 🎮<br>
            HTML, CSS
        </div>
    `)
    .openPopup();

    


