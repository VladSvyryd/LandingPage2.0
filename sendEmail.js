$(document).ready(function(){

    $('.send2').on('click', function() {
        var temp = $(".ajaxform");
        $.ajax({
            url     : $(temp).attr('action'),
            type    : $(temp).attr('method'),
            data    : $(temp).serialize(),
            success : function( data ) {
                         console.log('Form is successfully submitted');
                         console.log("hm");
                         $('#start-modal').hide();
                         $('.ajaxform')[0].reset();
                      },
            error   : function(){
                         console.log('Something wrong');
                      }
        });


    });

});
