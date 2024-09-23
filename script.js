
// Initialiser la carte centrée sur Boulogne-sur-Mer
var map = L.map('map').setView([50.725231, 1.613334], 13);

// Ajouter une couche de tuiles OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Ajouter un marqueur pour Boulogne-sur-Mer
L.marker([50.725231, 1.613334]).addTo(map)
    .bindPopup('Boulogne-sur-Mer, Nord-Pas-de-Calais')
    .openPopup();

    L.marker([50.95194, 1.85635]).addTo(map)
    .bindPopup('Calais, Nord-Pas-de-Calais')
    .openPopup();
