import "@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css";
import "./assets/sass/style.scss";
import 'bootstrap/dist/js/bootstrap.min.js';
import "jquery/dist/jquery.min.js";
import 'popper.js/dist/popper.min.js';
import "@fortawesome/fontawesome-free/js/all.min.js";
import "normalize.css/normalize.css";

$("#year").text(new Date().getFullYear());

$(window).scroll(function(){
    if ($(this).scrollTop() >= 100) {
        $("nav").addClass("scroll");
    }
    else {
        $("nav").removeClass("scroll");
    }
});
$(function(){
    $("#shopping").on("click" , function(){
        alert("تم إضافة كتاب إلي عربة الشراء");
    });
})