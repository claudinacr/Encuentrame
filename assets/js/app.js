function initMap() {
	var laboratoriaChile = {lat: -33.482237, lng: -70.851741};
	var map = new google.maps.Map(document.getElementById("map"), {
		zoom:6,
		center:laboratoriaChile
	});
	var marker = new google.maps.Marker({
		position: laboratoriaChile,
		map: map
	  });

	function buscar() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(funcionExito, funcionError);
		}
	}

	document.getElementById("encuentrame").addEventListener("click", buscar);

	var latitud, longitud;

	var funcionExito = function (posicion) {
		latitud = posicion.coords.latitude;
		longitud = posicion.coords.longitude;

		var miUbicacion = new google.maps.Marker({
			position: {
				lat: latitud,
				lng: longitud
			},
			animation: google.maps.Animation.DROP,
			map: map
		});

		map.setZoom(17);
		map.setCenter({
			lat: latitud,
			lng: longitud
		});
	}

	var funcionError = function (error) {
		alert("Tenemos un problema con encontrar tu ubicación");
	}
}
initMap();