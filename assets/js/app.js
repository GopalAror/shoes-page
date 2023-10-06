let mobileView = document.querySelector(".mobileView")
let menu = document.querySelector("#menu")
let span4 = document.querySelector(".span4")
let span5 = document.querySelector(".span5")
let span6 = document.querySelector(".span6")
let home  = document.querySelector(".home")
let sale = document.querySelector(".sale")
let count = 1
let count_no= document.getElementById("count_no")
let sub = document.getElementById("sub")
let add = document.getElementById("add")

// nav//
menu.addEventListener("click",function(){
  mobileView.classList.toggle("show");
  document.querySelector("body").classList.toggle("overflow-hidden");
  span4.classList.toggle("span1");
  span5.classList.toggle("span2");
  span6.classList.toggle("span3");
})
home.addEventListener("click",function(){
  mobileView.classList.remove("show");
  document.querySelector("body").classList.remove("overflow-hidden");
  span4.classList.remove("span1");
  span5.classList.remove("span2");
  span6.classList.remove("span3");
})
sale.addEventListener("click",function(){
  mobileView.classList.remove("show");
  document.querySelector("body").classList.remove("overflow-hidden");
  span4.classList.remove("span1");
  span5.classList.remove("span2");
  span6.classList.remove("span3");
})

// tab//
function opentab(tabId) {
  mycontent = document.querySelectorAll(".tab-text")
  mycontent.forEach(Mycontent => {
      Mycontent.classList.add("d_none")
      Mycontent.classList.remove("d_block")
      
  });
  const opentab = document.getElementById(tabId);
  opentab.classList.add("d_block");
        };
        opentab('tab1') ;
// count//

        add.addEventListener("click", function(){
          count++;
          count_no.innerHTML = count;
        })
        sub.addEventListener("click", function(){
          if( count > 1 ) count--;
          count_no.innerHTML = count;
        })

        // preloader//

        const preloader = document.getElementById("preloader")
setTimeout(() => {
        preloader.classList.add("d-none")
        document.body.classList.remove("overflow-hidden")
    }, 2000)
    

    // backto-top-btn//
    