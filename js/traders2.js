var imgPattern = '<img src="|url|">';
var textPattern = 'Застряли деньги в |brokerName| ?';
var pattern = '<input type="hidden" name = "imgId" value = "|brokerName|">';

function addTraderId2(id,url){
    switch (id) {
        case 1:
            $('.trader-logo').html(imgPattern.replace("|url|", url));
            $('.broker-name').html("Daily Trades");
            $('.trader-popup-text').html(textPattern.replace('|brokerName|', 'Daily Trades'));
            $(".letterSubject").html(pattern.replace("|brokerName|", "Daily Trades"));
            break;
            

    }
    $('.brokers-popup').show();

}

$(document).ready(function(){

    $(".close").click(function(){
        $(".popUp").hide();
    });




});