
/*setTimeout(function(){
	var el = document.querySelector('.odometer');

od = new Odometer({
  el: el,
  value: 000,

  // Any option (other than auto and selector) can be passed in here
  format: '',
  theme: 'digital'
});

od.update(769)
// or
//el.innerHTML = 769

}, 1000);

/*odometer.innerHTML = 768;*/

$(window).scroll(function(){

	var wScroll = $(this).scrollTop();

	if(wScroll > $(".myButton").offset().top - ($(window).height()/30)) {

		console.log("hi");


		$('.animeS1').html(1378)
		$('.animeS2').html(86)
		$('.animeS3').html(2337003+"$")
		$('.animeS4').html(93)



	}

	/*

	*/

});
