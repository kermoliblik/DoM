var data;
var task;
var shop;
var adSolve;
var itmBght;
document.getElementById("start").addEventListener('click', loadData);
// new game and stores game data at var data
function loadData() {
    let xhr = new XMLHttpRequest();
    xhr.open('POST','https://www.dragonsofmugloar.com/api/v2/game/start',true);
    xhr.onload=function() {
        if(this.status===200){
            window.data = JSON.parse(xhr.responseText);
            out1 = `Lives: ${window.data.lives}`;
            out2 = `Gold: ${window.data.gold}`;
            out3 = `Score: ${window.data.score}`;
            out4 = `Turns: ${window.data.turn}`;
            out5 = 'Level: 0';
            out6 = `Highscore: ${window.data.highScore}`;
            document.getElementById('uLives').innerHTML = out1;
            document.getElementById('uGold').innerHTML = out2;
            document.getElementById('uScore').innerHTML = out3;
            document.getElementById('uTurn').innerHTML = out4;
            document.getElementById('uLevel').innerHTML = out5;
            document.getElementById('uHS').innerHTML = out6;
        };
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
            window.adSolve = JSON.parse(xhr.responseText);
            if(window.adSolve.success === true){
                alert("ad completed")
            }else {
                alert("You failed and lost a life")
            };
            out1 = `Lives: ${window.adSolve.lives}`;
            out2 = `Gold: ${window.adSolve.gold}`;
            out3 = `Score: ${window.adSolve.score}`;
            out4 = `Turns: ${window.adSolve.turn}`;
            document.getElementById('uLives').innerHTML = out1;
            document.getElementById('uGold').innerHTML = out2;
            document.getElementById('uScore').innerHTML = out3;
            document.getElementById('uTurn').innerHTML = out4;
        }
    }
    xhr.onerror=function(){
        console.log('request error...');
    }
    xhr.send();
    loadTasks();
    return window.adSolve;
        
    
}

// function for buying items from shop
function buyItems(){
    var buyItm = document.getElementById('spnr').value;
    var itmBuy = window.shop[buyItm].id;
    let xhr = new XMLHttpRequest();
    xhr.open('POST',`https://www.dragonsofmugloar.com/api/v2/${window.data.gameId}/shop/buy/${itmBuy}`, true);
    xhr.onload=function() {
        if(this.status===200){
            console.log(this.responseText);
            window.itmBght =JSON.parse(xhr.responseText);
            if(window.itmBght.shoppingSuccess === true){
                alert("Item bought")
            }else {
                alert("u dont have enough funds")
            };
                out1 = `Lives: ${window.itmBght.lives}`;
                out2 = `Gold: ${window.itmBght.gold}`;
                out3 = `Level: ${window.itmBght.level}`;
                out4 = `Turns: ${window.itmBght.turn}`;
                document.getElementById('uLives').innerHTML = out1;
                document.getElementById('uGold').innerHTML = out2;
                document.getElementById('uLevel').innerHTML = out3;
                document.getElementById('uTurn').innerHTML = out4;
        }
    }
    xhr.onerror=function(){
        console.log('request error...');
    }
    xhr.send();
    loadShop();
    return window.itmBght;
}

//something to show player game satas and make them update after solving ads and item purchase
/*function upAfterAd(){
    out1 = `Lives: ${window.adSolve.lives}`;
    out2 = `Gold: ${window.adSolve.gold}`;
    out3 = `Score: ${window.adSolve.score}`;
    out4 = `Turns: ${window.adSolve.turn}`;
    document.getElementById('uLives').innerHTML = out1;
    document.getElementById('uGold').innerHTML = out2;
    document.getElementById('uScore').innerHTML = out3;
    document.getElementById('uTurn').innerHTML = out4;
    
}

function upAfterBuy(){
    out1 = `Lives: ${window.itmBght.lives}`;
    out2 = `Gold: ${window.itmBght.gold}`;
    out3 = `Level: ${window.itmBght.level}`;
    out4 = `Turns: ${window.itmBght.turn}`;
    document.getElementById('uLives').innerHTML = out1;
    document.getElementById('uGold').innerHTML = out2;
    document.getElementById('uLevel').innerHTML = out3;
    document.getElementById('uTurn').innerHTML = out4;
}*/

document.getElementById("ads").addEventListener('click', loadTasks);
document.getElementById("shop").addEventListener('click', loadShop);
document.getElementById("adcomp").addEventListener('click', solveTask);
document.getElementById("buyItems").addEventListener('click', buyItems);
