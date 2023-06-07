const  canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
// canvas wdth and hieght 
 canvas.width =  window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap =  'round'; 
ctx.lineWidth = 100;
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;

function DrawLine(e)
{
    if (!isDrawing)
        return ;
    console.log(e)
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx,moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    hue +=2;
}   


canvas.addEventListener('mousemove', DrawLine);

canvas.addEventListener('mousedown', () => isDrawing = true);
canvas.addEventListener('mouseout', () => isDrawing = false);
canvas.addEventListener('mouseup', () => isDrawing = false);