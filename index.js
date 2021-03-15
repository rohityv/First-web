                    // toggle button for toggle navbar
var togglebutton = document.getElementsByClassName("menu-icon")[0];
togglebutton.addEventListener("click", function(){
  var navbarlinks = document.getElementsByClassName("toggle-navbar")[0];
  navbarlinks.classList.toggle("toggle-active");
  });
                       // toggle btn for about
  function AboutFunc(){
    var ClickonAbout = document.getElementById("ClickonAbout")
    ClickonAbout.style = "display:block;";
    }
    function Aboutbackbtn(){
      ClickonAbout.style = "display:none;";
    }
                      // toggle btn for contact
    function ContFunc(){
    var ClickonContact = document.getElementById("ClickonContact")
    ClickonContact.style = "display:block;";
          }
      function Contbackbtn(){
      ClickonContact.style = "display:none;";
          }
                          // For search btn
    function SearchFunc(){
      var ClickonSearch = document.getElementsByClassName("ClickonSearch")[0]
        ClickonSearch.classList.toggle("toggle-searchbtn")
    }
