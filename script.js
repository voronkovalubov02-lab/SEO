function toggleAnsver(id) {
    const ansver = document.getElementById(id);
    if (ansver.style.display === 'none' || ansver.style.display === '') {
        ansver.style.display = 'block';
    } else {
        ansver.style.display = 'none';
    }
}