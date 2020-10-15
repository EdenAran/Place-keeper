'use strict';


function initMap(lat = 29.55805, lng = 34.94821) {
    const elMap = document.querySelector('.map');
    var options = {
        center: { lat, lng },
        zoom: 15,
        streetViewControl: false,
        zoomControl: false,
        disableDoubleClickZoom: true
    };
    var map = new google.maps.Map(
        elMap,
        options
    );
    setMap(map);
    google.maps.event.addListener(map, "dblclick", onMapClick);
    const elInnerMap = document.querySelector('.map div')
    elInnerMap.innerHTML = `<img class="my-location" src="/img/my-location.png" onclick="onMyLocation()">`
}


function onMyLocation() {
    navigator.geolocation.getCurrentPosition(handleLocation)
}

function onMapClick({ latLng }) {
    openModal();
    setCurrPosition(latLng);
}

function onSaveModal() {
    const position = getPosition();
    const elInput = document.querySelector('[name=title]')
    const title = elInput.value;
    if (!title) return
    addMarker(position.lat(), position.lng(), title);
    closeModal();
    elInput.value = '';
}

function onCloseModal(){
    const elInput = document.querySelector('[name=title]')
    elInput.value = '';
    closeModal();
}

function openModal() {
    document.querySelector('.modal').classList.remove('hide')
}

function closeModal() {
    document.querySelector('.modal').classList.add('hide')
}

function renderSavedLocations() {
    var strHTML = gMarkers.map(marker => {
        if (marker.title === 'My Location') return;
        return `
                <div class="position">
                <span  onclick="onLocationClick(${marker.id})">${marker.title}</span>
                <button class="del-btn" onclick="onDeleteLocation(${marker.id})">x</button>
                </div>
                `}).join('');
    document.querySelector('.positions').innerHTML = strHTML;
}

function onDeleteLocation(id) {
    deleteMarker(id);
}

function onLocationClick(id) {
    const marker = getMarkerById(id);
    centerLocation(marker);
}