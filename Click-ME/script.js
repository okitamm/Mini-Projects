const button = document.querySelector('.click');

button.addEventListener('mouseover', function() {
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;

    const maxRoomHeight = window.innerHeight - buttonHeight;
    const maxRoomWidth = window.innerWidth - buttonWidth;

    const randomY = Math.random() * maxRoomHeight;
    const randomX = Math.random() * maxRoomWidth;

    button.style.top = randomY + "px";
    button.style.left = randomX + "px";
});