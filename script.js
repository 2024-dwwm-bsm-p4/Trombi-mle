
// Initialiser la carte centrée sur Boulogne-sur-Mer
var map = L.map('map').setView([50.725231, 1.613334], 13);

// Ajouter une couche de tuiles OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Ajoute un marqueur pour chaque ville
L.marker([50.725231, 1.613334]).addTo(map)
    .bindPopup('Boulogne-sur-Mer, Nord-Pas-de-Calais')
    .openPopup();

    L.marker([50.95194, 1.85635]).addTo(map)
    .bindPopup('Calais, Nord-Pas-de-Calais')
    .openPopup();

    L.marker([50.75 , 2.25]).addTo(map)
    .bindPopup('Saint-Omer, Nord-Pas-de-Calais')
    .openPopup();

    L.marker([50.731906 , 1.645652]).addTo(map)
    .bindPopup('Saint-Martin les Boulogne, Nord-Pas-de-Calais')
    .openPopup();

    L.marker([50.824 , 1.5931]).addTo(map)
    .bindPopup('Audresselles, Nord-Pas-de-Calais')
    .openPopup();

    L.marker([ 50.650002 , 1.65]).addTo(map)
    .bindPopup('Condette, Nord-Pas-de-Calais')
    .openPopup();

    L.marker([  50.950001 , 1.85635]).addTo(map)
    .bindPopup('Calais, Nord-Pas-de-Calais')
    .openPopup();

    L.marker([ 50.700001 , 1.56667]).addTo(map)
    .bindPopup('Le Portel, Nord-Pas-de-Calais')
    .openPopup();

    L.marker([ 50.6384 , 1.74628]).addTo(map)
    .bindPopup('Samer, Nord-Pas-de-Calais')
    .openPopup();