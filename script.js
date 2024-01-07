document.getElementById('poo-emoji').addEventListener('mouseover', function() {
    this.style.transform = 'rotate(20deg)';
});

document.getElementById('poo-emoji').addEventListener('mouseout', function() {
    this.style.transform = 'rotate(0deg)';
});

document.getElementById('poo-emoji').addEventListener('click', function() {
    const linksContainer = document.getElementById('links-container');
    // Toggle visibility by checking the display style property
    if (linksContainer.style.display === "none" || linksContainer.style.display === "") {
        linksContainer.style.display = "flex"; // Show the mini poos
    } else {
        linksContainer.style.display = "none"; // Hide the mini poos
    }
});
