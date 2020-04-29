(function(){
    
    var lines = 10;
    var linesUsed = $('#linesUsed');
    
    $('#countMe').keydown(function(e) {
        
        newLines = $(this).val().split("\n").length;
        linesUsed.text(newLines);
        
        if(e.keyCode == 13 && newLines >= lines) {
            linesUsed.css('color', 'red');
            return false;
        }
        else {
            linesUsed.css('color', '');
        }
    });
});
