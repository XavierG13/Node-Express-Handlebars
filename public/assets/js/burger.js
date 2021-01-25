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
});
