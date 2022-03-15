var home;



function preload(){

}

function setup(){
    createCanvas(windowWidth, windowHeight);
    
    home = new Home();
    
}

function draw(){
    background('rgb(50,0,0)');
    home.display();

    console.log(mouseX, mouseY);
}