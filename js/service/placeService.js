'use strict';

var gMap = {};
var gMarkers = [];
var gCurrPosition = {};
var gNextId = 101;

function setCurrPosition(latLng) {
    gCurrPosition = latLng;
}

function getPosition() {
    return gCurrPosition;
}

function setMap(map) {
    gMap = map;
}

function handleLocation(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    gMap.setCenter(new google.maps.LatLng(lat, lng))
    addMarker(lat, lng, 'My Location')
}

function addMarker(lat, lng, title) {
    if (gMarkers.length && title === 'My Location' && getMarkerByTitle(title)) return;
    const marker = new google.maps.Marker({
        position: { lat, lng },
        map: gMap,
        title,
        id: gNextId++
    });
    gMarkers.push(marker);
    renderSavedLocations();
}

function getMap() {
    return gMap;
}

function getMarkers() {
    return gMarkers;
}

function getMarkerById(id) {
    var marker = gMarkers.filter(marker => marker.id === id)
    return marker;
}

function getMarkerByTitle(title) {
    return gMarkers.filter(marker => marker.title === title)
}

function deleteMarker(id){
    const idx = gMarkers.findIndex(marker => marker.id === id);
    var marker = getMarkerById(id);
    gMarkers.splice(idx,1);
    marker[0].setMap(null)
    renderSavedLocations();
}

function centerLocation(marker){
    gMap.setCenter(new google.maps.LatLng(marker[0].position.lat(), marker[0].position.lng()))
}
