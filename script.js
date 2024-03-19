document.addEventListener("DOMContentLoaded", function() {

    var buttons = document.querySelectorAll(".show-image-button");

 

    buttons.forEach(function(button) {

        button.addEventListener("click", function() {

            var imageId = button.dataset.imageId;

            var image = document.getElementById(imageId);
 

            if (image.style.display === "none") {

                image.style.display = "block";

            } else {

                image.style.display = "none";

            }

        });

    });

});