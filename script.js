/* function scrollRight() {
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
 */