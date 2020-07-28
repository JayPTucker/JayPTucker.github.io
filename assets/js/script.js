
$(".discord").hover(() => {
    console.log("test")
    $('.discord').tooltip('show')
})


// NAVBAR SCROLLING CUSTOMIZATION
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-179px";
  }
  prevScrollpos = currentScrollPos;
}