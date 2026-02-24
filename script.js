// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");
const finalText2 = document.getElementById("final-text-2");

// Click Envelope

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout( () => {
        document.querySelector(".letter-window").classList.add("open");
    },50);
});

// Logic to move the NO btn

noBtn.addEventListener("mouseover", () => {
    const min = 200;
    const max = 200;

    const distance = Math.random() * (max - min) + min;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// Logic to make YES btn to grow

// let yesScale = 1;

// yesBtn.style.position = "relative"
// yesBtn.style.transformOrigin = "center center";
// yesBtn.style.transition = "transform 0.3s ease";

// noBtn.addEventListener("click", () => {
//     yesScale += 2;

//     if (yesBtn.style.position !== "fixed") {
//         yesBtn.style.position = "fixed";
//         yesBtn.style.top = "50%";
//         yesBtn.style.left = "50%";
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }else{
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }
// });

// Variable to track the "Are you sure" steps
let yesStep = 0;
const messages = [
    "Are you sure? 🥺",
    "Are you 100% sure? 🧐",
    "Is that your Final answer? 💖"
];

const gifs = [
    "chiikawa-hmm.gif",     // Matches "Are you sure? 🥺"
    "jokebear-bear.gif",    // Matches "Are you 100% sure? 🧐"
    "hachiware-bouncing-hachiware-jumping.webp"   // Matches "Is that your final answer? 💖" 
];
yesBtn.addEventListener("click", () => {
    if (yesStep < messages.length) {
        // Change the title to the next question
        title.textContent = messages[yesStep];
        
        // Pick the GIF from our list based on the current step
        catImg.src = gifs[yesStep]; 

        yesStep++;
    } else {
        // THE FINAL YIPPEE MOMENT
        title.textContent = "Yippee! 🎉💖";
        catImg.src = "love.gif"; 

        document.querySelector(".letter-window").classList.add("final");

        buttons.style.display = "none";
        finalText.style.display = "block";
        
        finalText.textContent = "I love you! See you then! 🥰";
    }
});
// NO is clicked
noBtn.addEventListener("click", () => {

    title.textContent = "You weren't supposed to click that"
    
    catImg.src = "momonga-chii-kawa.gif";

    document.querySelector(".letter-window").classList.add("final-text-2");

    buttons.style.display = "none";
    
    // Change This Line:
    
    finalText2.style.display = "block";
});