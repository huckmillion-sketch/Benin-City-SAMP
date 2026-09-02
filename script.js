/*
BENIN CITY SA-MP MOBILE
Website JavaScript
*/

/* MOBILE MENU */

const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");

if (menuButton) {

menuButton.addEventListener("click", function () {

    navigation.classList.toggle("active");

});

}

/* CLOSE MOBILE MENU AFTER CLICKING A LINK */

const navigationLinks = document.querySelectorAll("#navigation a");

navigationLinks.forEach(function (link) {

link.addEventListener("click", function () {

    navigation.classList.remove("active");

});

});

/* SERVER DATA */

const servers = [

{
    name: "Benin City Roleplay",
    ip: "play.benincityrp.com:7777",
    mode: "ROLEPLAY",
    players: "128/500",
    status: "ONLINE"
},

{
    name: "Benin City Freeroam",
    ip: "freeroam.benincityrp.com:7777",
    mode: "FREEROAM",
    players: "36/200",
    status: "ONLINE"
},

{
    name: "Benin City Drift",
    ip: "drift.benincityrp.com:7777",
    mode: "DRIFT",
    players: "21/100",
    status: "ONLINE"
}

];

/*
SERVER LIST

The website currently uses the information
above.

Later we can connect this to your real
SA-MP server.

*/

function loadServers() {

const serverList = document.getElementById("serverList");

if (!serverList) {
    return;
}


serverList.innerHTML = "";


servers.forEach(function (server) {


    const serverBox = document.createElement("div");

    serverBox.className = "server";


    serverBox.innerHTML = `

        <div>

            <h3>${server.name}</h3>

            <p>${server.ip}</p>

        </div>


        <div>

            <span>MODE</span>

            <strong>
                ${server.mode}
            </strong>

        </div>


        <div>

            <span>PLAYERS</span>

            <strong>
                ${server.players}
            </strong>

        </div>


        <div>

            <span>STATUS</span>

            <strong class="online">
                ${server.status}
            </strong>

        </div>


        <a
            class="connect"
            href="samp://${server.ip}"
        >
            CONNECT
        </a>

    `;


    serverList.appendChild(serverBox);

});

}

/* LOAD SERVERS */

loadServers();

/* UPDATE ONLINE PLAYER NUMBER */

function updateOnlinePlayers() {

let totalPlayers = 0;


servers.forEach(function (server) {

    const playerNumber =
        server.players.split("/")[0];

    totalPlayers +=
        parseInt(playerNumber) || 0;

});


const onlineCounter =
    document.querySelector(
        ".statistics div:first-child strong"
    );


if (onlineCounter) {

    onlineCounter.textContent =
        totalPlayers;

}

}

/* UPDATE PLAYER COUNT */

updateOnlinePlayers();

/*
WEBSITE STARTUP MESSAGE

This appears in the browser console
and does not affect the website.

*/

console.log(
"Benin City SA-MP Mobile website loaded successfully."
);