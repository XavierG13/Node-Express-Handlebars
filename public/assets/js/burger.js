$(function () {
  $(".change-devour").on("click", function (event) {
    var id = $(this).data("id");
    var devourburger = $(this).data("devourburger");

    var newDevour = {
      eat: devourburger,
    };

    $.ajax("/api/bugers/" + id, {
      type: "PUT",
      data: eat,
    }).then(function () {
      console.log("change devour to", devourburger);
      location.reload();
    });
  });
});
