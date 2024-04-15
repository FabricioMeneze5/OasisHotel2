        // Seleciona todas as imagens em miniatura
        var thumbnails = document.querySelectorAll('.img-thumbnail');

        //Select img and bg
        var displayedImg = document.querySelector('#img-displayed');
        var background = document.querySelector('#background');

        // Add a event listener for each mini img
        thumbnails.forEach(function(thumbnail) {
            thumbnail.addEventListener('click', function() {
                // Show background and displayed img 
                displayedImg.style.display = 'block';
                background.style.display = 'block';

                // Set src to displayed img
                displayedImg.src = this.src;
            });
        });

        // Close img and bg
        background.addEventListener('click', function() {
            // Hide background and displayed img 
            displayedImg.style.display = 'none';
            this.style.display = 'none';
        });