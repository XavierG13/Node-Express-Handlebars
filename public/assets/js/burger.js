$(function () {
  $(".change-devour").on("submit", function (event) {
    var id = $(this).data("id");
    var devourburger = $(this).data("devourburger");

    var eatBurger = {
      devoured: devourburger,
    };

    // Sends Put request
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: eatBurger,
    }).then(function () {
      console.log("change devour to", devourburger);
      // Reloads the page for updated list
      location.reload();
    });
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#newBurger").val().trim(),
    };

    // Sends POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function () {
      console.log("created new burger");
      // Reloads page to get the updated list
      location.reload();
    });
  });

  $(".delete-burger").on("submit", function (event) {
    event.preventDefault();

    var id = $(this).data("id");

    // Sends DELETE request.
    $.ajax({
      type: "DELETE",
      url: "/api/burgers/" + id,
    }).then(function () {
      console.log("deleted burger", id);
      // Reloads page to get the updated list
      location.reload();
    });
  });
});
