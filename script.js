const form = document.querySelector('form');
const feedingTimeInput = document.getElementById('feeding-time');
const feedingTimesList = document.getElementById('feeding-times'); // This will display the list of feeding times

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const feedingTime = feedingTimeInput.value;

    if (feedingTime) {
        // Convert the 24-hour time to 12-hour format (AM/PM)
        const timeParts = feedingTime.split(':');
        let hours = parseInt(timeParts[0], 10);
        const minutes = timeParts[1];
        const period = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12; // Adjust for 12-hour format

        const formattedTime = `${hours}:${minutes} ${period}`;
        
        // Create a new list item
        const listItem = document.createElement('li');
        listItem.textContent = `Feeding time scheduled for: ${formattedTime}`;
        
        // Append the new list item to the feeding times list
        feedingTimesList.appendChild(listItem);

        // Clear the input field after submission
        feedingTimeInput.value = '';
    } else {
        alert('Please select a feeding time!');
    }
});

function showPawGif() {
    const gif = document.createElement('img');
    gif.src='images/Sticker GIF.gif';
    gif.classList.add('paw-gif');

    // Random position in the viewport
    gif.style.left = `${Math.random() * 80 + 10}%`;
    gif.style.top = `${Math.random() * 70 + 10}%`;

    document.body.appendChild(gif);

    setTimeout(() => {
        gif.remove();
    }, 3000); // Remove after 3 seconds
}