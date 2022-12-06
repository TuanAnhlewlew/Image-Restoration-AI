// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$(document).ready(function () {
    $(function () {
        var imagesPreview = function (input, placeToInsertImagePreview) {
            if (input.files) {
                $(placeToInsertImagePreview).empty();
                var filesAmount = input.files.length;
                console.log(filesAmount);
                for (i = 0; i < filesAmount; i++) {
                    var reader = new FileReader();
                    reader.onload = function (event) {
                        var div = document.createElement('div');
                        div.style.display = "inline-block";
                        div.style.margin = "2px";
                        div.innerHTML = '<img style=" max-height:120px;padding: 4px; border: 1px solid #101010" src="' + event.target.result + '"/>';
                        $(placeToInsertImagePreview).append(div);
                    }
                    reader.readAsDataURL(input.files[i]);
                }
            }

        };

        $('#img-input').on('change', function () {
            imagesPreview(this, '#preview');
        });
    });
})

