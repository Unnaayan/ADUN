// Floating hearts animation
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (3 + Math.random() * 3) + "s";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);

// Play background music (optional if browser autoplay restrictions)
const bgMusic = document.getElementById("bgMusic");
bgMusic.volume = 0.3; // soft volume
bgMusic.play().catch(() => console.log("Autoplay blocked, click to play"));
