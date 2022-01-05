const servs = ["PLEX", "RADARR", "SONARR", "JACKETT", "QBIT VPN", "QBIT", "WEBSITE", "MINECRAFT", "PFSENSE", "UNIFI"];

update();
setInterval(update, 360000);

function update() {
	fetch("./status.json").then(response => {return response.json();}).then((stat) => {
		servs.forEach((serv) => {
			let jsonThing; 
			if (serv == "PLEX") {jsonThing = stat.PLEX}
			if (serv == "RADARR") {jsonThing = stat.RADARR}
			if (serv == "SONARR") {jsonThing = stat.SONARR}
			if (serv == "JACKETT") {jsonThing = stat.JACKETT}
			if (serv == "QBIT VPN") {jsonThing = stat.QBITVPN}
			if (serv == "QBIT") {jsonThing = stat.QBIT}
			if (serv == "WEBSITE") {jsonThing = stat.WEBSITE}
			if (serv == "MINECRAFT") {jsonThing = stat.MINECRAFT}
			if (serv == "PFSENSE") {jsonThing = stat.PFSENSE}
			if (serv == "UNIFI") {jsonThing = stat.UNIFI}

			if (jsonThing == "Active") {
			document.getElementById(serv).className = "Green_Button";
			} else {
			document.getElementById(serv).className = "Red_Button";
			}
		});
	});
}

//this code was written by ItIsShadow uwu