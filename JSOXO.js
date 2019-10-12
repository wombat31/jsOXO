var board = [
    [".",".","."],
    [".",".","."],
    [".",".","."]
]
var oTurn = true;

function drawBoard(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    //draw the background
    ctx.fillRect(25,25,300,300);
    //draw the lines
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = "white";
    ctx.moveTo(125,25);
    ctx.lineTo(125,325);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = "white";
    ctx.moveTo(225,25);
    ctx.lineTo(225,325);
    ctx.stroke();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = "white";
    ctx.moveTo(25,125);
    ctx.lineTo(325,125);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = "white";
    ctx.moveTo(25,225);
    ctx.lineTo(325,225);
    ctx.stroke();
    ctx.closePath();

    //draw O s and X s if required
    for (x=0; x<3; x++){
        for (y=0; y<3; y++){
            //Os
            if(board[y][x]=="O"){
                ctx.beginPath();
                ctx.lineWidth = 5;
                ctx.strokeStyle = "white";
                ctx.arc(((x+1)*100)-25,((y+1)*100)-25,30,0,Math.PI*2,false);
                ctx.stroke();
                ctx.closePath();
            }
            //Xs
            else if(board[y][x]=="X"){
                //'\'
                ctx.beginPath();
                ctx.lineWidth = 5;
                ctx.strokeStyle = "white";
                ctx.moveTo(((x+1)*100)-50,((y+1)*100)-50);
                ctx.lineTo(((x+1)*100),((y+1)*100));
                ctx.stroke();
                ctx.closePath();
                //'/'
                ctx.beginPath();
                ctx.lineWidth = 5;
                ctx.strokeStyle = "white";
                ctx.moveTo(((x+1)*100)-50,((y+1)*100));
                ctx.lineTo(((x+1)*100),((y+1)*100)-50);
                ctx.stroke();
                ctx.closePath();
            }
        }
    }

}
//add a listener function for gameplay
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

myCanvas.addEventListener('click', function(event) {
    var rect = myCanvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
    if (oTurn){
        //top row
        if(x>25 && x < 125 && y>25 && y <125){
            board[0][0] = "O";
            drawBoard();
            oTurn = false;
            document.getElementById('turnIndicator').innerHTML = "X Turn";
        }
        else if(x>125 && x<225 && y>25 && y<125){
            board[0][1] = "O";
            drawBoard();
            oTurn = false;
            document.getElementById('turnIndicator').innerHTML = "X Turn";
        }
        else if(x>225 && x< 325 && y>25 && y<125){
            board[0][2] = "O";
            drawBoard();
            oTurn = false;
            document.getElementById('turnIndicator').innerHTML = "X Turn";
        }
        //middle row
        if(x>25 && x < 125 && y>125 && y <225){
            board[1][0] = "O";
            drawBoard();
            oTurn = false;
            document.getElementById('turnIndicator').innerHTML = "X Turn";
        }
        else if(x>125 && x<225 && y>125 && y <225){
            board[1][1] = "O";
            drawBoard();
            oTurn = false;
            document.getElementById('turnIndicator').innerHTML = "X Turn";
        }
        else if(x>225 && x< 325 && y>125 && y <225){
            board[1][2] = "O";
            drawBoard();
            oTurn = false;
            document.getElementById('turnIndicator').innerHTML = "X Turn";
        }
        //bottom row
        if(x>25 && x < 125 && y>225 && y <325){
            board[2][0] = "O";
            drawBoard();
            oTurn = false;
            document.getElementById('turnIndicator').innerHTML = "X Turn";
        }
        else if(x>125 && x<225 && y>225 && y <325){
            board[2][1] = "O";
            drawBoard();
            oTurn = false;
            document.getElementById('turnIndicator').innerHTML = "X Turn";
        }
        else if(x>225 && x< 325 && y>225 && y <325){
            board[2][2] = "O";
            drawBoard();
            oTurn = false;
            document.getElementById('turnIndicator').innerHTML = "X Turn";
        }
    } else {
        //top row
        if(x>25 && x < 125 && y>25 && y <125){
            board[0][0] = "X";
            drawBoard();
            oTurn = true;
            document.getElementById('turnIndicator').innerHTML = "O Turn";
        }
        else if(x>125 && x<225 && y>25 && y<125){
            board[0][1] = "X";
            drawBoard();
            oTurn = true;
            document.getElementById('turnIndicator').innerHTML = "O Turn";
        }
        else if(x>225 && x< 325 && y>25 && y<125){
            board[0][2] = "X";
            drawBoard();
            oTurn = true;
            document.getElementById('turnIndicator').innerHTML = "O Turn";
        }
        //middle row
        if(x>25 && x < 125 && y>125 && y <225){
            board[1][0] = "X";
            drawBoard();
            oTurn = true;
            document.getElementById('turnIndicator').innerHTML = "O Turn";
        }
        else if(x>125 && x<225 && y>125 && y <225){
            board[1][1] = "X";
            drawBoard();
            oTurn = true;
            document.getElementById('turnIndicator').innerHTML = "O Turn";
        }
        else if(x>225 && x< 325 && y>125 && y <225){
            board[1][2] = "X";
            drawBoard();
            oTurn = true;
            document.getElementById('turnIndicator').innerHTML = "O Turn";
        }
        //bottom row
        if(x>25 && x < 125 && y>225 && y <325){
            board[2][0] = "X";
            drawBoard();
            oTurn = true;
            document.getElementById('turnIndicator').innerHTML = "O Turn";
        }
        else if(x>125 && x<225 && y>225 && y <325){
            board[2][1] = "X";
            drawBoard();
            oTurn = true;
            document.getElementById('turnIndicator').innerHTML = "O Turn";
        }
        else if(x>225 && x< 325 && y>225 && y <325){
            board[2][2] = "X";
            drawBoard();
            oTurn = true;
            document.getElementById('turnIndicator').innerHTML = "O Turn";
        }
    }


}, false);

drawBoard();