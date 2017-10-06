
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
		
		(function(){
			  some(768);
       
    })();
	}
	
	/*
	
	*/
		
});

function some (ik){
	 $('.animeS').each(function(){
            var v = 123;
            var o = new Odometer({
                el: this,
                value: 123,
                theme: "car"
            });
            o.render();
            setInterval(function(){
                o.update(ik);
               
            }, 1000);
            
        });
}


