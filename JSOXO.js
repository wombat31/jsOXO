var board = [
    ["X","X","X"],
    ["X","O","X"],
    ["X","X","X"]
]

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

drawBoard();