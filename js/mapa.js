
/*
if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;

        var map = L.map('map', {
            center: [latitude, longitude],
            zoom: 10
        });

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        var control = L.Routing.control({
            waypoints: [
                L.latLng(latitude, longitude),
                L.latLng(38.02847, -0.65431)
            ],
            language: 'es'
        }).addTo(map);
        
    });
}
else{
    var map = L.map('map', {
        center: [38.02847, -0.65431],
        zoom: 15
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
}*/
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        function (position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;

            var map = L.map('map', {
                center: [latitude, longitude],
                zoom: 10
            });

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            L.Routing.control({
                waypoints: [
                    L.latLng(latitude, longitude),
                    L.latLng(38.02847, -0.65431)
                ],
                language: 'es'
            }).addTo(map);
        },
        function (error) {
            console.error("Error al obtener la ubicación: ", error.message);
            var map = L.map('map', {
                center: [38.02847, -0.65431],
                zoom: 15
            });

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);
        }
    );
} else {
    console.warn("Geolocalización no soportada.");
    var map = L.map('map', {
        center: [38.02847, -0.65431],
        zoom: 15
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
}

