function toggleAnsver(id) {
    const ansver = document.getElementById(id);
    if (ansver.style.display === 'neno' || ansver.style.display === ''){
        ansver.style.display = 'block';
    } else {ansver.style.display = 'none';}
}