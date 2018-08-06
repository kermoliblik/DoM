var data;
var task;
var shop;
function loadData() {
    let xhr = new XMLHttpRequest();
    xhr.open('POST','https://www.dragonsofmugloar.com/api/v2/game/start',true);
    xhr.onload=function() {
        if(this.status===200){
            //document.getElementById('outputTXT').innerHTML = `<p>${this.responseText}<p>`;
            window.data = JSON.parse(xhr.responseText);
                output = `
                <ul>
                    <li>Game ID: ${window.data.gameId}</li>
                    <li>Lives: ${window.data.lives}</li>
                    <li>Gold: ${window.data.gold}</li>
                    <li>Level: ${window.data.level}</li>
                    <li>Score: ${window.data.score}</li>
                    <li>Highscore: ${window.data.highScore}</li>
                    <li>Turn: ${window.data.turn}</li>
                </ul>
            `;
        };
        document.getElementById('outputTXT2').innerHTML = output;
    }
    xhr.onerror=function(){
        console.log('request error...');
    }
    xhr.send();
    return window.data;
}

function loadTasks(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET' ,`https://www.dragonsofmugloar.com/api/v2/${window.data.gameId}/messages`, true);
    xhr.onload=function() {
        if(this.status===200){
            window.task = JSON.parse(xhr.responseText);
            alert(window.task);
            let output1 = '';
            window.task.forEach(function(item){
                output1 += `
                <ul>
                    <li>adid: ${item.adId}</li>
                    <li>message: ${item.message}</li>
                    <li>reward: ${item.reward}</li>
                    <li>expires in: ${item.expiresIn}</li>
                    <li>probability: ${item.probability}</li>
                </ul>
            `;
            document.getElementById('showT').innerHTML = output1;
            })
        };
    }
    xhr.onerror=function(){
        console.log('request error...');
    }
    xhr.send();
    return window.tasks;
}

function loadShop() {
     let xhr = new XMLHttpRequest();
    xhr.open('GET' ,`https://www.dragonsofmugloar.com/api/v2/${window.data.gameId}/shop`, true);
    xhr.onload=function() {
        if(this.status===200){
            window.shop = JSON.parse(xhr.responseText);
            alert(window.shop);
            let output1 = '';
            window.shop.forEach(function(item){
                output1 += `
                <ul>
                    <li>id: ${item.id}</li>
                    <li>name: ${item.name}</li>
                    <li>cost: ${item.cost}</li>
                </ul>
            `;
            document.getElementById('showS').innerHTML = output1;
            })
        };
    }
    xhr.onerror=function(){
        console.log('request error...');
    }
    xhr.send();
    return window.tasks;
}



document.getElementById("12345").addEventListener('click', loadData);
document.getElementById("123456").addEventListener('click', loadTasks);
document.getElementById("1234567").addEventListener('click', loadShop);
