
$(document).ready(function(){
     $('.your-class').slick({
		  
			dots:true,
			infinite: false,
			slidesToShow: 4,
			slidesToScroll: 3,
			arrows:true,
			autoplay: true,
			responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
	});
		
});
$(document).ready(function(){
	$('.kiemelt-slider').slick({
		  
			dots:true,
			infinite: false,
			slidesToShow: 3,
			slidesToScroll: 2,
			arrows:true,
			autoplay: true
	});
		
});
$(document).ready(function(){
     $('.partner-slider').slick({
		  
			dots:true,
			infinite: false,
			slidesToShow: 5,
			slidesToScroll: 1,
			arrows:true,
			autoplay: true,
			responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
	});
		
});