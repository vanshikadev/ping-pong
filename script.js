document.addEventListener("DOMContentLoaded", ()=>{

    let ball = document.getElementById("ball");

    let ballX= 1;
    let ballY= 1;

    ball.style.top = `${ballY}rem`
    ball.style.left = `${ballX}rem`

    let dx = 0.1;
    let dy = 0.1;

    setInterval(function executer(){
        ballX += dx;
        ballY += dy;
        ball.style.top = `${ballY}rem`;
        ball.style.left = `${ballX}rem`;
        if(ballX > 50-1 || ballX <=0.2){
            dx *= -1;
        }
        if(ballY> 10-1 || ballY <= 0.1)
        {
            dy *= -1;
        }


    }, 1);


})