const canvas = document.getElementById("tulipCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Function to draw a single tulip
function drawTulip(x, y, petalColor) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    
    // Left petal
    ctx.bezierCurveTo(x - 30, y - 50, x - 40, y - 90, x, y - 100);
    ctx.bezierCurveTo(x + 40, y - 90, x + 30, y - 50, x, y);
    
    ctx.fillStyle = petalColor;
    ctx.fill();
    ctx.closePath();

    // Stem
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y + 100);
    ctx.lineWidth = 6;
    ctx.strokeStyle = "#2e8b57";
    ctx.stroke();
    ctx.closePath();

    // Leaves
    ctx.beginPath();
    ctx.moveTo(x, y + 40);
    ctx.bezierCurveTo(x - 40, y + 30, x - 60, y + 90, x - 10, y + 100);
    ctx.moveTo(x, y + 40);
    ctx.bezierCurveTo(x + 40, y + 30, x + 60, y + 90, x + 10, y + 100);
    
    ctx.fillStyle = "#3cb371";
    ctx.fill();
    ctx.closePath();
}

// Function to generate multiple tulips
function drawBouquet() {
    const tulipColors = ["#ff4d6d", "#ff66b2", "#ffcc00", "#ff6b00", "#a32cc4"];
    
    for (let i = 0; i < 7; i++) {
        let x = canvas.width / 2 + (i - 3) * 50;
        let y = canvas.height / 2;
        let color = tulipColors[i % tulipColors.length];
        drawTulip(x, y, color);
    }
}

drawBouquet();
