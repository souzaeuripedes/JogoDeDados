//create the function to generate  the random number for the first dice
//add img for the random numbber dice

function randomNumber1(){
    var rd_1 = Math.floor((Math.random()*6)+1);
    let imgRd_1 = document.querySelector(".img1");
    
    if(rd_1 == 1){
        imgRd_1.setAttribute('src', 'images/dice1.png');
    } else if(rd_1 == 2){
        imgRd_1.setAttribute('src', 'images/dice2.png');
    } else if(rd_1 == 3){
        imgRd_1.setAttribute('src', 'images/dice3.png');
    } else if(rd_1 == 4){
        imgRd_1.setAttribute('src', 'images/dice4.png');
    } else if(rd_1 == 5){
        imgRd_1.setAttribute('src', 'images/dice5.png');
    } else {
        imgRd_1.setAttribute('src', 'images/dice6.png');
    }
    return rd_1;
}

//create the function to generate  the random number for the second dice
//add img for the random numbber dice

function randomNumber2(){
    var rd_2 = Math.floor((Math.random()*6)+1);
    let imgRd_2 = document.querySelector(".img2");
    
    if(rd_2 == 1){
        imgRd_2.setAttribute('src', 'images/dice1.png');
    } else if(rd_2 == 2){
        imgRd_2.setAttribute('src', 'images/dice2.png');
    } else if(rd_2 == 3){
        imgRd_2.setAttribute('src', 'images/dice3.png');
    } else if(rd_2 == 4){
        imgRd_2.setAttribute('src', 'images/dice4.png');
    } else if(rd_2 == 5){
        imgRd_2.setAttribute('src', 'images/dice5.png');
    } else {
        imgRd_2.setAttribute('src', 'images/dice6.png');
    }
    return rd_2; 
}


//check the winner

function winner(a,b){
    
    if(a > b){
        
        return document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
        
    }else if (b > a){
        
        return document.querySelector("h1").innerHTML = "Play 2 Wins! 🚩";

    }else{
        return document.querySelector("h1").innerHTML = "Draw!";
    }
}

//run the game

winner(randomNumber1(),randomNumber2());