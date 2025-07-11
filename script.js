gsap.to("#upper_loader", {
  height: 0,
  duration: 2.5,
  ease: "power2.inOut",
  delay : 1.5
});

gsap.to("#lower_loader", {
  height: 0,
  duration: 2.5,
  ease: "power2.inOut",
  delay : 1.5
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
  duration: 1.5,
  ease: "power2.inOut",
  delay : 3.5
});

gsap.from("#item1", {
  duration: 1.5,
  x : 300,
  opacity : 0,
  ease: "power2.inOut",
  delay : 7,
  zIndex:-3
});

gsap.from("#item2", {
  duration: 2,
  x : 300,
  y: 50,
  opacity: 0,
  ease: "power2.inOut",
  delay : 5,
  zIndex: -2
});

gsap.from("#item3", {
  duration: 2,
  y: "150vh",
  ease: "power2.inOut",
  delay : 3.5
});

gsap.from("#item4", {
  duration: 2,
  x : -300,
  y: 50,
  opacity: 0,
  ease: "power2.inOut",
  delay : 5,
  zIndex: -2
});

gsap.from("#item5", {
  duration: 1.5,
  x : -300,
  opacity : 0,
  ease: "power2.inOut",
  delay : 7,
  zIndex:-3
});

gsap.to(".scroll-container", {
  yPercent: -30,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#div2",
    start: "top 25%",
    end: "top 0%", // optional, you can stretch it if needed
    scrub: 1,
    markers: false // remove in production
  }
});

function scrollRight() {
document.getElementById("scrollArea").scrollBy({ left: 240, behavior: 'smooth' });
}

function scrollLeft() {
document.getElementById("scrollArea").scrollBy({ left: 240, behavior: 'smooth' });
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
    closestItem.style.transform = "translateY(40px)";
}
}

document.getElementById("scrollArea").addEventListener("scroll", () => {
clearTimeout(window.scrollTimeout);
window.scrollTimeout = setTimeout(highlightCenterItem, 100);
});






