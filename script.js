// Function to toggle categories
function toggleCategory(category) {
    console.log('Toggling category:', category);  // Log to see if the function is triggered

    // Define all categories
    const categories = ['normal', 'myopia', 'hyperopia', 'aberration', 'astigmatic'];
    
    // Hide all categories except the selected one
    categories.forEach(function(cat) {
        const categoryElement = document.getElementById(cat);
        if (cat !== category) {
            categoryElement.style.display = 'none';  // Hide the other categories
        }
    });

    // Toggle the selected category
    const categoryElement = document.getElementById(category);
    if (categoryElement.style.display === 'none' || categoryElement.style.display === '') {
        categoryElement.style.display = 'block';  // Show it if it's hidden
    } else {
        categoryElement.style.display = 'none';  // Hide it if it's already visible
    }
}

// Function to load the video
function loadVideo(videoFile) {
    var videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.src = videoFile;
    videoPlayer.load();
    videoPlayer.play();
}
