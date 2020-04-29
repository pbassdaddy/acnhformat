# acnhformat
Formatting for Animal Crossing New Horizons Letter Poems
Textbox matched to in game letter format by row, column, and character count with row limits. 
https://stackoverflow.com/questions/6501043/limit-number-of-lines-in-textarea-and-display-line-count-using-jquery
HTML: 
<div>
<textarea id="countMeOne" cols="29" rows="6"></textarea>
</div>

js:
$(document).ready(function(){

    var lines = 6;
   

    $('#countMeOne').keydown(function(e) {

        newLines = $(this).val().split("\n").length;
       

        if(e.keyCode == 13 && newLines >= lines) {
            return false;
        }
        
    });
});
css:(unrelated?)
body {
  background: white;
  color: #323232;
  font-weight: 300;
  height: 100vh;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: Helvetica neue, roboto;
}

img {
  width: 56px;
  height: 48px;
}

h1 {
  font-weight: 200;
  font-style: 26px;
  margin: 10px;
}

jsfiddle
html:
 <textarea id="countMe" cols="30" rows="5"></textarea><br />
 
 js:
 $(document).ready(function(){
    
    var lines = 10;
    var linesUsed = $('#linesUsed');
    
    $('#countMe').keydown(function(e) {
        
        newLines = $(this).val().split("\n").length;
        linesUsed.text(newLines);
        
        if(e.keyCode == 13 && newLines >= lines) {
            linesUsed.css('color', 'red');
            return false;
        }
        
    });
});
