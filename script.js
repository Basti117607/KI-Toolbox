// Countdown Timer Script
document.addEventListener('DOMContentLoaded', function() {
    const countdownElement = document.getElementById('countdown');
    const targetDate = new Date();
    // Set target date to 7 days from now (adjust as needed)
    targetDate.setDate(targetDate.getDate() + 7);

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate.getTime() - now;

        if (distance < 0) {
            countdownElement.innerHTML = "Angebot abgelaufen!";
            // Optionally hide the urgency section or change CTA
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        // Update scarcity bar (optional, requires more complex logic based on sales)
        // For now, the progress bar is static via CSS
    }

    // Update the countdown every 1 second
    const countdownInterval = setInterval(updateCountdown, 1000);

    // Initial call to display countdown immediately
    updateCountdown();
});
