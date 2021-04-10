//VARS
var prevScrollpos = window.pageYOffset;
var pbar1 = document.getElementById("PG-step-1");
var pbar2 = document.getElementById("PG-step-2");
var pbar3 = document.getElementById("PG-step-3");

var infIc = document.getElementById("infoIcon");
var calendIc = document.getElementById("calendIcon");
var awardIc = document.getElementById("awardIcon");
var starIc = document.getElementById("starIcon");


// OB SCROLL EVENTS
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  var screen_height = window.innerHeight;  
   // Navbar Behavior 

   var navBar = document.getElementById("app-navbar");
    if (prevScrollpos > currentScrollPos) {
        navBar.style.top =  "0px"
  } else {
      document.getElementById("app-navbar").style.top = "-160px";
  }
  prevScrollpos = currentScrollPos;
// page behavior
    var wib_top = getOffset(document.getElementById("what_is_ebec_text")).top;
    var deadline_y = getOffset(document.getElementById("deadline_text")).top;
    var prizes_y = getOffset(document.getElementById("prizes_text")).top;
    var sponsors_y = getOffset(document.getElementById("sponsors_text")).top;
    var page_y = window.pageYOffset;
    
    var pixels = document.documentElement.scrollHeight;
    
    pbar1.style.width = 0 + "%";
    pbar2.style.width = 0 + "%";
    pbar3.style.width = 0 + "%";
    
    
    
    
    var colored = "rgb(164,98,181)";
    if(page_y > wib_top)
        {
            var progress1 = page_y - wib_top;
            var percent1 = (progress1 / (deadline_y - wib_top)) * 100;
            if(percent1 > 100)
                percent1 = 100;
            pbar1.style.width = percent1 + "%";
            
        }
    if(page_y > deadline_y)
        {
            var progress2 = page_y - deadline_y;
            var percent2 = (progress2 / (prizes_y - deadline_y)) * 100;
            if(percent2 > 100)
                percent2 = 100;
            pbar2.style.width = percent2 + "%";
        }
    
    if(page_y > prizes_y)
        {
            var progress3 = page_y - prizes_y;   
            var percent3 = (progress3 / (sponsors_y - prizes_y)) * 100;
            
            if(screen_height > pixels - sponsors_y)
                {
                    percent3 = (progress3 / ((pixels - screen_height) - prizes_y)) * 100;
                }
            
            if(percent3 > 100)
                percent3 = 100;
            pbar3.style.width = percent3 + "%";
        }
    
        
        if(percent3 >= 98)
            {
                infIc.style.color = colored;
                calendIc.style.color = colored;
                awardIc.style.color = colored;
                starIc.style.color = colored;
            }
        else if(page_y >= prizes_y-1)
            {
                infIc.style.color = colored;
                calendIc.style.color = colored;
                awardIc.style.color = colored;
                starIc.style.color = "white";
            }
        else if(page_y >= deadline_y-1)
            {
                infIc.style.color = colored;
                calendIc.style.color = colored;
                awardIc.style.color = "white";
                starIc.style.color = "white";
            }
        else if(page_y >= wib_top-1)
            {
                infIc.style.color = colored;
                calendIc.style.color = "white";
                awardIc.style.color = "white";
                starIc.style.color = "white";
            }
        else
            {
                infIc.style.color = "white";
                calendIc.style.color = "white";
                awardIc.style.color = "white";
                starIc.style.color = "white";
            }
    var h_i = parseInt(page_y, 10);
    var wib_i = parseInt(wib_top, 10);
    var dead_i = parseInt(deadline_y, 10);
    var priz_i = parseInt(prizes_y, 10);
    var spon_i = parseInt(sponsors_y, 10);
    
    if(h_i < wib_i+5 && h_i > wib_i-5 ||
       h_i < dead_i+5 && h_i > dead_i-5 ||
       h_i < priz_i+5 && h_i > priz_i-5 ||
       h_i < spon_i+5 && h_i > spon_i-5 )
        {
          document.getElementById("app-navbar").style.top = "-160px";  
        }
}

//GET OFFSET
function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY
  };
}