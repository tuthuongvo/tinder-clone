$(document).ready(function () {
  const toggleSearch = function () {
    $(".toolbar").click(function () {
      $(".modal-search").toggleClass("hidden");
      $(".close-modal").toggleClass("hidden");
    });
  };
  const closeModal = function() {
    $(".close-modal, .btn-secondary, .btn-primary").click(function () {
      $(".modal-search").addClass("hidden");
      $(".close-modal").addClass("hidden");
    });
  }
  const coverSlider = function () {
        $(".cover-slider").slick({
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        });
  }
  const toggleFilter = function() {
    $(".item-title").click(function () {
      $(this).next(".item-content").toggleClass("hidden");
      $(this).find(".icon").toggleClass("rotate-90");
    });
  }
  if ($(".cover-slider").length) { 
    coverSlider();
  }
  

  toggleSearch();
  closeModal();
  toggleFilter();
});

  $(function () {
    $(".radio-input").change(function () {
       // Get the value of the selected radio input
       const selectedValue = $(this).val();
       // Find the <p> element with data-target attribute that matches the group
       $(this).closest(".item").find(".amount").text(selectedValue);
    s});
    if ($("#slider-range").length) {
      $("#slider-range").slider({
        range: true,
        min: 1,
        max: 100,
        values: [15, 80],
        slide: function (event, ui) {
          $("#amount").val(ui.values[0] + " - " + ui.values[1] + " tuổi");
        },
      });
      $("#amount").val(
        $("#slider-range").slider("values", 0) +
          " - " +
          $("#slider-range").slider("values", 1) +
          " tuổi"
      );
    }
    
  });
