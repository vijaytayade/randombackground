let button = document.getElementById('button').addEventListener('click', buttonClick);
function buttonClick(){
    let red = Math.floor(Math.random()*256);
    red = red.toString(16);
    let green = Math.floor(Math.random()*256);
    green = green.toString(16);
    let blue = Math.floor(Math.random()*256);
    blue = blue.toString(16);
    console.log(red+green+blue);
    document.body.style.backgroundColor =  '#'+red+green+blue;
    

}
