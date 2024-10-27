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
        //   infinite: true,
        //   speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        //   autoplay: true,
        //   autoplaySpeed: 2000,
          arrows: false,
        });
    }

  toggleSearch();
  closeModal();
  coverSlider();
});
