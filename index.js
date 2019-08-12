function getPlayers() {
    return [
        { name: 'Alex', rank: 1800 },
        { name: 'Relu', rank: 1800 },
        { name: 'Roberto', rank: 1700 },
        { name: 'Topala', rank: 1600 },
        { name: 'Catala', rank: 1600 },
        { name: 'Marius', rank: 1600 },
        { name: 'Noris', rank: 1700 },
        { name: 'Gabi', rank: 1900 },
        { name: 'Daniel', rank: 1800 },
        { name: 'Iulian', rank: 1500 },
        { name: 'Mircea', rank: 1900 },
        { name: 'Sorin', rank: 1600 },
        { name: 'Florin', rank: 1600 },
        { name: 'Pitt', rank: 1500 },
        { name: 'Gabulici', rank: 1500 },
    ]
}

async function shuffleTeams() {
    const rawResponse = await fetch('https://localhost:44330/api/soccerRanking/shuffleTeams', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.getPlayers())
    });

    return await rawResponse.json();
}

function renderTable(teams) {
    const container = document.getElementById('main');
    const template = this.getTableTemplate(teams);

    container.innerHTML=template;
}

function getTableTemplate(teams) {
    return `
    <div class="container">
        <div class="row">
            <div class="col-sm" style="font-size:30px;font-weight:bold">Portocaliu</div>
            <div class="col-sm" style="font-size:30px;font-weight:bold">Verde</div>
            <div class="col-sm" style="font-size:30px;font-weight:bold">Albastru</div>
        </div>
        <div class="row">
            <div class="col-sm">${teams[0].players[0].name}</div>
            <div class="col-sm">${teams[1].players[0].name}</div>
            <div class="col-sm">${teams[2].players[0].name}</div>
        </div>
        <div class="row">
            <div class="col-sm">${teams[0].players[1].name}</div>
            <div class="col-sm">${teams[1].players[1].name}</div>
            <div class="col-sm">${teams[2].players[1].name}</div>
        </div>
        <div class="row">
            <div class="col-sm">${teams[0].players[2].name}</div>
            <div class="col-sm">${teams[1].players[2].name}</div>
            <div class="col-sm">${teams[2].players[2].name}</div>
        </div>
        <div class="row">
            <div class="col-sm">${teams[0].players[3].name}</div>
            <div class="col-sm">${teams[1].players[3].name}</div>
            <div class="col-sm">${teams[2].players[3].name}</div>
        </div>
        <div class="row">
            <div class="col-sm">${teams[0].players[4].name}</div>
            <div class="col-sm">${teams[1].players[4].name}</div>
            <div class="col-sm">${teams[2].players[4].name}</div>
        </div>
    </div>`
}

function btnRegenerateClick(){
    this.shuffleTeams().then(response => this.renderTable(response[0].teams));
}