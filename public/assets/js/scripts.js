$(".zip-submit").on("click", function (e) {
    e.preventDefault();

    var zipSearch = {
        ZIP: $("#zip").val().trim()
    };

    // Send the POST request.
    $.ajax("/students/sort", {
        type: "GET",
        data: zipSearch
    }).then(
        function () {
            console.log("Clicked and searched");
            // Reload the page to get the updated list
            location.reload();
        }
    );
});