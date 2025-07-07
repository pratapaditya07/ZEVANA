gsap.to("#upper_loader", {
  height: 0,
  duration: 2.5,
  ease: "power2.inOut",
  delay : 2
});

gsap.to("#lower_loader", {
  height: 0,
  duration: 2.5,
  ease: "power2.inOut",
  delay : 2
});

gsap.to("#loader", {
  display: "none",
  duration: 0.1,
  delay : 4.5
});

gsap.from("#nav_left", {
  marginLeft: -250,
  duration: 1.2,
  ease: "power2.inOut",
  delay : 3.5
});

gsap.from("#nav_right", {
  marginLeft: 1500,
  duration: 2,
  ease: "power2.inOut",
  delay : 3.5
});


function scrollRight() {
document.getElementById("scrollArea").scrollBy({ left: 255, behavior: 'smooth' });
}

function scrollLeft() {
document.getElementById("scrollArea").scrollBy({ left: -255, behavior: 'smooth' });
}


function highlightCenterItem() {
const container = document.getElementById("scrollArea");
const items = container.querySelectorAll(".item");
const containerCenter = container.scrollLeft + container.offsetWidth / 2;

let closestItem = null;
let closestDistance = Infinity;

items.forEach(item => {
    const itemCenter = item.offsetLeft + item.offsetWidth / 2;
    const distance = Math.abs(containerCenter - itemCenter);
    
    if (distance < closestDistance) {
    closestDistance = distance;
    closestItem = item;
    }

    // Reset all
    item.style.transform = "translateY(0px)";
});

  // Lower the center one
if (closestItem) {
    closestItem.style.transform = "translateY(20px)";
}
}

document.getElementById("scrollArea").addEventListener("scroll", () => {
clearTimeout(window.scrollTimeout);
window.scrollTimeout = setTimeout(highlightCenterItem, 100);
});






