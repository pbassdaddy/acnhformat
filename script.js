$(document).ready(function(){

    var lines = 6;
    
    $('#countMeOne').keydown(function(e) {

        newLines = $(this).val().split("\n").length;
        
        if(e.keyCode == 13 && newLines >= lines) {
            
            return false;
        }
    });
});
