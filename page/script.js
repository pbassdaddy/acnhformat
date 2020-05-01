  function submit(){
     if (document.getElementById("one").value != ""){
        document.getElementById("divone").innerHTML = document.getElementById("one").value;
      } else {document.getElementById("divone").innerHTML = "<br>"};

      if (document.getElementById("two").value != ""){
         document.getElementById("divtwo").innerHTML = document.getElementById("two").value;
       } else {document.getElementById("divtwo").innerHTML = "<br>"};

       if (document.getElementById("three").value != ""){
          document.getElementById("divthree").innerHTML = document.getElementById("three").value;
        } else {document.getElementById("divthree").innerHTML = "<br>"};

        if (document.getElementById("four").value != ""){
           document.getElementById("divfour").innerHTML = document.getElementById("four").value;
         } else {document.getElementById("divfour").innerHTML = "<br>"};

         if (document.getElementById("five").value != ""){
            document.getElementById("divfive").innerHTML = document.getElementById("five").value;
          } else {document.getElementById("divfive").innerHTML = "<br>"};

          if (document.getElementById("six").value != ""){
             document.getElementById("divsix").innerHTML = document.getElementById("six").value;
           } else {document.getElementById("divsix").innerHTML = "<br>"};
  }
