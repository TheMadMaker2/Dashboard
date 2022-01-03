const servs = ["PLEX", "RADARR", "SONARR", "JACKETT", "QBIT VPN", "QBIT"];

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
    
            if (jsonThing == "Active") {
            document.getElementById(serv).className = "Green_Button";
            } else {
            document.getElementById(serv).className = "Red_Button";
            }
        });
    });
}

//this code was written by ItIsShadow uwu