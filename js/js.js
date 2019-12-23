

var gridBannerBox = new Swiper('.gridBannerBox', {
    spaceBetween: 10,
    slidesPerView: 9,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var mainBannerBox = new Swiper('.mainBannerBox', {
    spaceBetween: 10,
    autoplay: {
      delay: 8000,
    },
    thumbs: {
      swiper: gridBannerBox
    }
  });


// gridBannerBox.controller.control = mainBannerBox;
// mainBannerBox.controller.control = gridBannerBox;
$('.prevBtn').on('click',function(){
	mainBannerBox.slidePrev()
})
$('.nextBtn').on('click',function(){
	mainBannerBox.slideNext()
})