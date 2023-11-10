
  $(document).ready(function () {
    $(".scrolling-menu a").on("click", function (event) {
      event.preventDefault();
      const target = $(this).attr("href");
      $("html, body").animate(
        {
          scrollTop: $(target).offset().top
        },
        1000
      );
    });
  });

