var data;
var task;
var shop;
document.getElementById("start").addEventListener('click', loadData);
// new game and stores game data at var data
function loadData() {
    let xhr = new XMLHttpRequest();
    xhr.open('POST','https://www.dragonsofmugloar.com/api/v2/game/start',true);
    xhr.onload=function() {
        if(this.status===200){
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
// gets and displays ads from server
function loadTasks(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET' ,`https://www.dragonsofmugloar.com/api/v2/${window.data.gameId}/messages`, true);
    xhr.onload=function() {
        if(this.status===200){
            window.task = JSON.parse(xhr.responseText);
            let output1 = '';
            tLen = window.task.length;
            for(var i = 0; i < tLen; i++){
                output1 += `
                <ul>
                    <li>Number of ad: ${i+1}</li>
                    <li>adid: ${window.task[i].adId}</li>
                    <li>message: ${window.task[i].message}</li>
                    <li>reward: ${window.task[i].reward}</li>
                    <li>expires in: ${window.task[i].expiresIn}</li>
                    <li>probability: ${window.task[i].probability}</li>
                </ul>
            `;
            document.getElementById('showT').innerHTML = output1;
            }
        };
    }
    xhr.onerror=function(){
        console.log('request error...');
    }
    xhr.send();
    return window.tasks;
}
// gets shop items and displays them
function loadShop() {
     let xhr = new XMLHttpRequest();
    xhr.open('GET' ,`https://www.dragonsofmugloar.com/api/v2/${window.data.gameId}/shop`, true);
    xhr.onload=function() {
        if(this.status===200){
            window.shop = JSON.parse(xhr.responseText);
            let output1 = '';
            sLen = window.shop.length;
            alert(sLen);
            for(var i = 0; i < sLen; i++){
                output1 += `
                <ul>
                    <li>number of item: ${i+1}</li>
                    <li>id: ${window.shop[i].id}</li>
                    <li>name: ${window.shop[i].name}</li>
                    <li>cost: ${window.shop[i].cost}</li>
                </ul>
            `;
            document.getElementById('showS').innerHTML = output1;
            }
        };
    }
    xhr.onerror=function(){
        console.log('request error...');
    }
    xhr.send();
    return window.tasks;
}
//function for solving ads
function solveTask(){
    var selAd = document.getElementById("adnr").value;
    var adSel = window.task[selAd].adId;
    console.log(adSel);
    let xhr = new XMLHttpRequest();
    xhr.open('POST', `https://www.dragonsofmugloar.com/api/v2/${window.data.gameId}/solve/${adSel}`, true);
    xhr.onload=function() {
        if(this.status===200){
            alert(this.responseText);
            var adSolve = JSON.parse(xhr.responseText);
            console.log(adSolve);
        }
    }
    xhr.onerror=function(){
        console.log('request error...');
    }
    xhr.send();
    loadTasks();
}

// function for buying items from shop
function buyItems(){
    var buyItm = document.getElementById('spnr').value;
    var itmBuy = window.shop[buyItm].id;
    let xhr = new XMLHttpRequest();
    xhr.open('POST',`https://www.dragonsofmugloar.com/api/v2/${window.data.gameId}/shop/buy/${itmBuy}`, true);
    xhr.onload=function() {
        if(this.status===200){
            alert(this.responseText);
            var itmBght =JSON.parse(xhr.responseText);
        }
    }
    xhr.onerror=function(){
        console.log('request error...');
    }
    xhr.send();
    loadShop();
}

document.getElementById("ads").addEventListener('click', loadTasks);
document.getElementById("shop").addEventListener('click', loadShop);
document.getElementById("adcomp").addEventListener('click', solveTask);
document.getElementById("buyItems").addEventListener('click', buyItems);
