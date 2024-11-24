Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJjMzE5NThiNS00M2U1LTRhYjMtYTdlZC1iMmYwNGY3NTY2YmUiLCJpZCI6MjU3NTg3LCJpYXQiOjE3MzI0NDA2NzR9.82HPTiDFwwX0OnkV-D-JAqaqJQsxn52H0W-X-gs-AZw';


// Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.
const viewer = new Cesium.Viewer('cesiumContainer', {
    terrain: Cesium.Terrain.fromWorldTerrain(),
});
console.log("check");

// Fly the camera to San Francisco at the given longitude, latitude, and height.
viewer.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(35.217018, 31.771959, 1500),
    orientation: {
        heading: Cesium.Math.toRadians(0.0),
        pitch: Cesium.Math.toRadians(-15.0),
    }
});

// Function to update the location information
function updateLocation() {
    var cameraPosition = viewer.camera.positionWC;
    var ellipsoid = viewer.scene.globe.ellipsoid;
    var cartographic = ellipsoid.cartesianToCartographic(cameraPosition);

    var latitude = Cesium.Math.toDegrees(cartographic.latitude).toFixed(4);
    var longitude = Cesium.Math.toDegrees(cartographic.longitude).toFixed(4);
    var altitude = cartographic.height.toFixed(2);
    console.log("erez");

    // Update the info section with the current location
    document.getElementById('latitude').textContent = latitude;
    document.getElementById('longitude').textContent = longitude;
    document.getElementById('altitude').textContent = altitude;
    // Position the arrow based on latitude and longitude
    positionArrow(latitude, longitude);
}

// Function to position the arrow
function positionArrow(latitude, longitude) {
    var lat = parseFloat(latitude);
    var lon = parseFloat(longitude);

    var globeImage = document.getElementById('globeImage');
    var globeWidth = globeImage.naturalWidth;
    var globeHeight = globeImage.naturalHeight;

    // Convert latitude and longitude to pixel position in the image
    var xPos = (lon + 180) * (globeWidth / 360);  // Calculate x position based on longitude
    var yPos = (90 - lat) * (globeHeight / 180);   // Calculate y position based on latitude


    // Update the arrow's position on the globe image
    var arrow = document.getElementById('arrowImage');
    arrow.style.left = `${xPos}px`;
    arrow.style.top = `${yPos}px`;
}

// Update location every 500ms 
setInterval(updateLocation, 500);
