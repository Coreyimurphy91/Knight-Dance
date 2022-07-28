// GLOBAL DOM / VARIABLES
console.log('Knight Walker');
const map = document.querySelector('.map');
const movement = document.getElementById('movement');
const canvas = document.getElementById('canvas');
const status = document.getElementById('status');
const ctx = canvas.getContext('2d'); //creates a 2D canvas
let knight;
let rook;
let bishop;
let queen;
let king;

// ---------------- Images -------------------  //
const kPiece = document.getElementById('kPiece');
const bgBlack = document.getElementById('bgBlack');
const bgWhite = document.getElementById('bgWhite');

// EVENT LISTENERS
window.addEventListener('DOMContentLoaded', function() {

    const runGame = setInterval(gameLoop, 60);
});


// ---------------- Canvas Rendering ----------  //
canvas.width = 840;
canvas.height = 840;
//    map.style.transform = `translate3d(1368px,1363px, 0 )`;
// canvas.setAttribute('height', getComputedStyle(canvas)['height']);
// canvas.setAttribute('width', getComputedStyle(canvas)['width']);

// ---------------- Entities ------------------  //


class Player {
    constructor(x, y, image, width, height) {
        this.x = x,
        this.y = y
        this.width = width
        this.height = height
        this.image = image;
        this.alive = true;

        this.render = function() {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
        }
    }
}

knight = new Player(365, 365, kPiece, 100, 100);
bgBlacksquare = new Player(0, 0, bgBlack, 840, 840)
bgWhitesquare = new Player(0, 0, bgWhite, 840, 840)





// ---------------- Movement ------------ //
document.addEventListener('keydown', movementHandler);

function movementHandler(e) { // e just means event (what keydown recognizes)
    console.log('movement', e.key)

    switch(e.key) {
        case 'r': 
            keys.r.pressed = true;
            if (knight.x < 590 && knight.y > 30) {
                knight.x += 228;
                knight.y -= 114;
            } // solved
            // knight.x < 590 ? (knight.x += 228) : null;
            // knight.y > 252 ? (knight.y -= 114) : null;
                break;
        case 'f': 
            keys.r.pressed = true;
            if (knight.x < 590 && knight.y < 700) {
                knight.x += 228;
                knight.y += 114;
            } // solved
            // knight.x < 590 ? (knight.x += 228) : null;
            // knight.y < 478 ? (knight.y += 114) : null;
                break;
        case 'c': 
            keys.r.pressed = true;
            if (knight.x < 700 && knight.y < 590) {
                knight.x += 114;
                knight.y += 228;
            } // solved
            // knight.x += 114;
            // knight.y += 228;
                break;
        case 'x': 
            keys.r.pressed = true;
            if (knight.x > 130 && knight.y < 590) {
                knight.x -= 114;
                knight.y += 228;
            } // solved
            // knight.x -= 114;
            // knight.y += 228;
                break;
        case 'a': 
            keys.r.pressed = true;
            if (knight.x > 250 && knight.y < 700 ) {
                knight.x -= 228;
                knight.y += 114;
            } // solved
            // knight.x -= 228;
            // knight.y += 114;
                break;
        case 'q': 
            keys.r.pressed = true;
            if (knight.x > 250 && knight.y > 30) {
                knight.x -= 228;
                knight.y -= 114;
            } // solved
            // knight.x -= 228;
            // knight.y -= 114;
                break;
        case '2': 
            keys.r.pressed = true;
            if (knight.x > 30 && knight.y > 140) {
                knight.x -= 114;
                knight.y -= 228;
            } // solved
            // knight.x -= 114;
            // knight.y -= 228;
                break;
        case '3': 
            keys.r.pressed = true;
            if (knight.x < 700 && knight.y > 140) {
                knight.x += 114;
                knight.y -= 228;
            } // solved
            // knight.x += 114;
            // knight.y -= 228;
                break;
    }
    
}

const keys = {
    2: {
        pressed: false
    },
    3: {
        pressed: false
    },
    q: {
        pressed: false
    },
    r: {
        pressed: false
    },
    a: {
        pressed: false
    },
    f: {
        pressed: false
    },
    x: {
        pressed: false
    },
    c: {
        pressed: false
    }
};

function gameLoop() {
    // Call window.requestAnimationFrame() and pass in animate to refresh the canvas constantly
    window.requestAnimationFrame(gameLoop)
    // check to see if shrek is alive
    if (knight.alive) {
        // render shre
        // bgWhitesquare.render();
        bgBlacksquare.render();
        knight.render();
        // @todo - check for collision
        // let hit = detectHit(donkey, shrek);
     
    }

}