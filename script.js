function toggleCategory(category) {
    console.log('Toggling category: ' + category); // Test log
    const categoryElement = document.getElementById(category);
    categoryElement.style.display = (categoryElement.style.display === 'none' || categoryElement.style.display === '') ? 'block' : 'none';
}

function loadVideo(videoPath) {
    console.log('Loading video: ' + videoPath); // Test log
    const videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.src = videoPath;
    videoPlayer.play();
}
