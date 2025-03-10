// Function to toggle visibility of the video buttons
        // Function to toggle categories
        function toggleCategory(category) {
            // Hide all categories first
            const categories = ['normal', 'myopia', 'hyperopia', 'aberration', 'astigmatic'];
            categories.forEach(function(cat) {
                if (cat !== category) {
                    document.getElementById(cat).style.display = 'none';
                }
            });

            // Toggle the selected category
            const categoryElement = document.getElementById(category);
            if (categoryElement.style.display === 'none') {
                categoryElement.style.display = 'block';
            } else {
                categoryElement.style.display = 'none';
            }
        }


// Function to load the video
function loadVideo(videoFile) {
    var videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.src = videoFile;
    videoPlayer.load();
    videoPlayer.play();
}

