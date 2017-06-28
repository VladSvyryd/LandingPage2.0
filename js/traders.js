var imgPattern = '<img src="|url|">';
var textPattern = 'Застряли деньги в |brokerName| ?';
var pattern = '<input type="hidden" name = "imgId" value = "|brokerName|">';

function addTraderId(id,url){
    switch (id) {
        case 1:
            $('.trader-logo').html(imgPattern.replace("|url|", url));
            $('.broker-name').html("Daily Trades");
            $('.trader-popup-text').html(textPattern.replace('|brokerName|', 'Daily Trades'));
            $(".letterSubject").html(pattern.replace("|brokerName|", "Daily Trades"));
            break;
            
        case 2:
            $('.trader-logo').html(imgPattern.replace("|url|", url));
            $('.broker-name').html("24 Option");
            $('.trader-popup-text').html(textPattern.replace('|brokerName|', '24 Option'));
            $(".letterSubject").html(pattern.replace("|brokerName|", "24 Option"));
            break;
            
        case 3:
            $('.trader-logo').html(imgPattern.replace("|url|", url));
            $('.broker-name').html("BANC DE BINARY");
            $('.trader-popup-text').html(textPattern.replace('|brokerName|', 'BANC DE BINARY'));
            $(".letterSubject").html(pattern.replace("|brokerName|", "BANC DE BIARY"));
            break;
            
        case 4:
            $('.trader-logo').html(imgPattern.replace("|url|", url));
            $('.broker-name').html("Binary Uno");
            $('.trader-popup-text').html(textPattern.replace('|brokerName|', 'Binary Uno'));
            $(".letterSubject").html(pattern.replace("|brokerName|", "Binary Uno"));
            break;
            
        case 5:
            $('.trader-logo').html(imgPattern.replace("|url|", url));
            $('.broker-name').html("Binary Trader");
            $('.trader-popup-text').html(textPattern.replace('|brokerName|', 'Binary Trader'));
            $(".letterSubject").html(pattern.replace("|brokerName|", "Binary Trader"));
            break;
        
        case 6:
            $('.trader-logo').html(imgPattern.replace("|url|", url));
            $('.broker-name').html("Interactive Option");
            $('.trader-popup-text').html(textPattern.replace('|brokerName|', 'Interactive Option'));
            $(".letterSubject").html(pattern.replace("|brokerName|", "Interactive Option"));
            break;
        
        case 7:
            $('.trader-logo').html(imgPattern.replace("|url|", url));
            $('.broker-name').html("CFD 1000");
            $('.trader-popup-text').html(textPattern.replace('|brokerName|', 'CFD 1000'));
            $(".letterSubject").html(pattern.replace("|brokerName|", "CFD 1000"));
            break;
        
        case 8:
            $('.trader-logo').html(imgPattern.replace("|url|", url));
            $('.broker-name').html("Banco Capital");
            $('.trader-popup-text').html(textPattern.replace('|brokerName|', 'Banco Capital'));
            $(".letterSubject").html(pattern.replace("|brokerName|", "Banco Capital"));
            break;
        
        case 9:
            $('.trader-logo').html(imgPattern.replace("|url|", url));
            $('.broker-name').html("Delta TG");
            $('.trader-popup-text').html(textPattern.replace('|brokerName|', 'Delta TG'));
            $(".letterSubject").html(pattern.replace("|brokerName|", "Delta TG"));
            break;
        
        case 10:
            $('.trader-logo').html(imgPattern.replace("|url|", url));
            $('.broker-name').html("EQ Trades");
            $('.trader-popup-text').html(textPattern.replace('|brokerName|', 'EQ Trades'));
            $(".letterSubject").html(pattern.replace("|brokerName|", "EQ Trades"));
            break;
        
        case 11:
            $('.trader-logo').html(imgPattern.replace("|url|", url));
            $('.broker-name').html("FM Trader");
            $('.trader-popup-text').html(textPattern.replace('|brokerName|', 'FM Trader'));
            $(".letterSubject").html(pattern.replace("|brokerName|", "FM Trader"));
            break;
        
        case 12:
            $('.trader-logo').html(imgPattern.replace("|url|", url));
            $('.broker-name').html("Frontstocks");
            $('.trader-popup-text').html(textPattern.replace('|brokerName|', 'Frontstocks'));
            $(".letterSubject").html(pattern.replace("|brokerName|", "Frontstocks"));
            break;
        
        case 13:
            $('.trader-logo').html(imgPattern.replace("|url|", url));
            $('.broker-name').html("FX Private");
            $('.trader-popup-text').html(textPattern.replace('|brokerName|', 'FX Private'));
            $(".letterSubject").html(pattern.replace("|brokerName|", "FX Private"));
            break;
        
        case 14:
            $('.trader-logo').html(imgPattern.replace("|url|", url));
            $('.broker-name').html("Utrader");
            $('.trader-popup-text').html(textPattern.replace('|brokerName|', 'Utrader'));
            $(".letterSubject").html(pattern.replace("|brokerName|", "Utrader"));
            break;
        
        case 15:
            $('.trader-logo').html(imgPattern.replace("|url|", url));
            $('.broker-name').html("MaxiMarkets");
            $('.trader-popup-text').html(textPattern.replace('|brokerName|', 'MaxiMarkets'));
            $(".letterSubject").html(pattern.replace("|brokerName|", "MaxiMarkets"));
            break;
        
        case 16:
            $('.trader-logo').html(imgPattern.replace("|url|", url));
            $('.broker-name').html("Options Room");
            $('.trader-popup-text').html(textPattern.replace('|brokerName|', 'Options Room'));
            $(".letterSubject").html(pattern.replace("|brokerName|", "Options Room"));
            break;
        
        case 17:
            $('.trader-logo').html(imgPattern.replace("|url|", url));
            $('.broker-name').html("Titan Trade");
            $('.trader-popup-text').html(textPattern.replace('|brokerName|', 'Titan Trade'));
            $(".letterSubject").html(pattern.replace("|brokerName|", "Titan Trade"));
            break;
        
        case 18:
            $('.trader-logo').html(imgPattern.replace("|url|", url));
            $('.broker-name').html("Option Bit");
            $('.trader-popup-text').html(textPattern.replace('|brokerName|', 'Option Bit'));
            $(".letterSubject").html(pattern.replace("|brokerName|", "Option Bit"));
            break;
        
        case 19:
            $('.trader-logo').html(imgPattern.replace("|url|", url));
            $('.broker-name').html("RT Option");
            $('.trader-popup-text').html(textPattern.replace('|brokerName|', 'RT Option'));
            $(".letterSubject").html(pattern.replace("|brokerName|", "RT Option"));
            break;
        
        case 20:
            $('.trader-logo').html(imgPattern.replace("|url|", url));
            $('.broker-name').html("Mill Trade");
            $('.trader-popup-text').html(textPattern.replace('|brokerName|', 'Mill Trade'));
            $(".letterSubject").html(pattern.replace("|brokerName|", "Mill Trade"));
            break;
        
        case 21:
            $('.trader-logo').html(imgPattern.replace("|url|", url));
            $('.broker-name').html("Forex Trend");
            $('.trader-popup-text').html(textPattern.replace('|brokerName|', 'Forex Trend'));
            $(".letterSubject").html(pattern.replace("|brokerName|", "Forex Trend"));
            break;
        
        case 22:
            $('.trader-logo').html(imgPattern.replace("|url|", url));
            $('.broker-name').html("MMCIS");
            $('.trader-popup-text').html(textPattern.replace('|brokerName|', 'MMCIS'));
            $(".letterSubject").html(pattern.replace("|brokerName|", "MMCIS"));
            break;
        
        case 23:
            $('.trader-logo').html(imgPattern.replace("|url|", url));
            $('.broker-name').html("Пантеон Финанс");
            $('.trader-popup-text').html(textPattern.replace('|brokerName|', 'Пантеон Финанс'));
            $(".letterSubject").html(pattern.replace("|brokerName|", "Пантеон Финанс"));
            break;
        
        case 24:
            $('.trader-logo').html(imgPattern.replace("|url|", url));
            $('.broker-name').html("Prime Binary");
            $('.trader-popup-text').html(textPattern.replace('|brokerName|', 'Prime Binary'));
            $(".letterSubject").html(pattern.replace("|brokerName|", "Prime Binary"));
            break;
        
        case 25:
            $('.trader-logo').html(imgPattern.replace("|url|", url));
            $('.broker-name').html("Plus Option");
            $('.trader-popup-text').html(textPattern.replace('|brokerName|', 'Plus Option'));
            $(".letterSubject").html(pattern.replace("|brokerName|", "Plus Option"));
            break;
        
        case 26:
            $('.trader-logo').html(imgPattern.replace("|url|", url));
            $('.broker-name').html("MRT Markets");
            $('.trader-popup-text').html(textPattern.replace('|brokerName|', 'MRT Markets'));
            $(".letterSubject").html(pattern.replace("|brokerName|", "MRT Markets"));
            break;
        
        case 27:
            $('.trader-logo').html(imgPattern.replace("|url|", url));
            $('.broker-name').html("Scala Trade");
            $('.trader-popup-text').html(textPattern.replace('|brokerName|', 'Scala Trade'));
            $(".letterSubject").html(pattern.replace("|brokerName|", "Scala Trade"));
            break;
        
        case 28:
            $('.trader-logo').html(imgPattern.replace("|url|", url));
            $('.broker-name').html("Ubroker");
            $('.trader-popup-text').html(textPattern.replace('|brokerName|', 'Ubroker'));
            $(".letterSubject").html(pattern.replace("|brokerName|", "Ubroker"));
            break;
    }
    $('.brokers-popup').show();

}

$(document).ready(function(){

    $(".close").click(function(){
        $(".popUp").hide();
    });




});