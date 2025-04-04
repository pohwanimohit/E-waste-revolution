function updateLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        // Save location in Firebase
        db.ref('locations/driver123').set({
            latitude,
            longitude,
            timestamp: Date.now()
        });

        console.log("Location updated:", latitude, longitude);
    });
}

// Update every 10 seconds
setInterval(updateLocation, 10000);

db.ref('locations/driver123').on('value', (snapshot) => {
    const data = snapshot.val();
    console.log("Live Location:", data.latitude, data.longitude);

    // Update on Google Maps
    if (marker) marker.setMap(null);
    marker = new google.maps.Marker({
        position: { lat: data.latitude, lng: data.longitude },
        map: map
    });
});

