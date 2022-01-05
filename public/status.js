const servs = ["PLEX", "RADARR", "SONARR", "JACKETT", "QBIT VPN", "QBIT", "WEBSITE", "MINECRAFT", "PFSENSE", "UNIFI", "JACKETT2", "SONARR2"];

update(); //initially runs the update() function on website startup
setInterval(update, 360000); //runs update() every 5 minutes

//defines the function update()
function update() {
	fetch("./status.json").then(response => {return response.json();}).then((stat) => {
		//get the Service status for each Service
		servs.forEach((serv) => {
			let Service_Status; 
			if (serv == "PLEX") {Service_Status = stat.PLEX}
			if (serv == "RADARR") {Service_Status = stat.RADARR}
			if (serv == "SONARR" || serv == "SONARR2") {Service_Status = stat.SONARR}
			if (serv == "JACKETT" || serv == "JACKETT2") {Service_Status = stat.JACKETT}
			if (serv == "QBIT VPN") {Service_Status = stat.QBITVPN}
			if (serv == "QBIT") {Service_Status = stat.QBIT}
			if (serv == "WEBSITE") {Service_Status = stat.WEBSITE}
			if (serv == "MINECRAFT") {Service_Status = stat.MINECRAFT}
			if (serv == "PFSENSE") {Service_Status = stat.PFSENSE}
			if (serv == "UNIFI") {Service_Status = stat.UNIFI}

			//changes the class name based on Service Status
			if (Service_Status == "Active") {
			document.getElementById(serv).className = "Green_Button";
			} else {
			document.getElementById(serv).className = "Red_Button";
			}
		});
	});
}

//this code was written by ItIsShadow uwu