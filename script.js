/**
 * Created by CoBLiN on 2016/04/28.
 */
$(document).ready(function() {


   // $('div').draggable();
var drg = false;
var down = true;
var clr = false;









   $('body').append('<button id ="gSearch" width=100% style="background-color: #2b2b2b; color:white ;display:inline-block;bottom:0;left:0;position:fixed;z-index: 1201;"></button>');
    $('body').append('<iframe id ="iF" width=100% height = 50% style=" bottom:0;left:0;position:fixed;z-index: 1101;"></iframe>');


    var gS = $("#gSearch");






    gS.click(function () {
        if (down) {
            $("#iF").show();
            gS.css('bottom', '50%');
            gS.css('top', 'auto');
            gS.css('position', 'fixed');

            down = false;
        } else {
            $("#iF").hide();
            gS.css('bottom', '0');
            gS.css('top', 'auto');
            gS.css('position', 'fixed');
            down = true;


        }


    });







  //  gS.css('-webkit-user-select', 'none');

    //gS.css('-moz-user-select', 'none');
    //gS.css('-ms-user-select', 'none');
     //  gS .css('user-select', 'none');
    //   gS .on('selectstart', false);




    $("#iF").hide();


    function getSelectionText() {

        var text = "";

            var activeEl = document.activeElement;
            var activeElTagName = activeEl ? activeEl.tagName.toLowerCase() : null;

       // if(activeEl.attr("id")!="gSearch") {
            if (
                (activeElTagName == "textarea" || activeElTagName == "input") &&
                /^(?:text|search|password|tel|url)$/i.test(activeEl.type) &&
                (typeof activeEl.selectionStart == "number")
            ) {
                text = activeEl.value.slice(activeEl.selectionStart, activeEl.selectionEnd);
            } else if (window.getSelection) {
                text = window.getSelection().toString();
            }
        //}



        return text;
    }


   //
    document.onmouseup = document.onkeyup = document.onselectionchange = function() {
        //  document.onmouseup = document.onkeyup = function() {

        if (this.id != "gSearch") {
            var selected = getSelectionText();

            // document.getElementById("sel").value = getSelectionText();







            //gSearch(getSelectionText());
            // gS.click(function() {
            //   alert("a");
           // selected.replace(' ', '+');
            if (selected != "") {
                gS.text(selected);
                var source = "https://en.wikipedia.org/wiki/" + selected;
             //   var source = "https://www.proxy-server-free.com/browse.php?u=http%3A%2F%2Fwww.google.nl%2F&b=4";
              //      "https://cse.google.com/cse/publicurl?cx=007229903482672091417:emqtqa7dala&q=" +
//"http://www.google.com/custom?q=&btnG=Search"
                //    selected;



                /*

                 var cx = '007229903482672091417:emqtqa7dala';
                 var gcse = document.createElement('script');
                 gcse.type = 'text/javascript';
                 gcse.async = true;
                 gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
                 var s = document.getElementsByTagName('script')[0];
                 s.parentNode.insertBefore(gcse, s);

                 $('body').append("<gcse:searchresults-only>");
                 */


                var iS = $("#iF");
                //iS.attr("id",c);
                iS.attr("src", source);
                // $("body").append(iS);

            }

            // });
        }



    };




   /* $('#dragbut').click(function(){

      if(drg == false) {
          $('*').each(function () {
              $(this).draggable();



          });




          $('#dragbut').html('make all elements undraggable');
          drg = true;
      }else{
          $('*').each(function () {
              $(this).draggable('destroy');

          });
          drg = false;
          $('#dragbut').html('make all elements draggable');

      }
    });




*/



});
