$(function () {
  $(".change-devour").on("click", function (event) {
    var id = $(this).data("id");
    var devourburger = $(this).data("devourburger");

    var eatBurger = {
      devoured: devourburger,
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: eatBurger,
    }).then(function () {
      console.log("change devour to", devourburger);
      location.reload();
    });
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#burge").val().trim(),
    };
    // Sends the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("created new burger");
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted burger", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

});
