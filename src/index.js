import "@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css";
import "./assets/sass/style.scss";
import 'bootstrap/dist/js/bootstrap.min.js';
import "jquery/dist/jquery.min.js";
import 'popper.js/dist/popper.min.js';
import "@fortawesome/fontawesome-free/js/all.min.js";
import "normalize.css/normalize.css";

$("#year").text(new Date().getFullYear());

$(window).on( 'scroll' , function(){
    if ($(this).scrollTop() >= 100) {
        $("nav").addClass("scroll");
    }
    else {
        $("nav").removeClass("scroll");
    }
});    
$(function(){
    $(window).on( 'resize' , function(){
        var width = $(window).width();
        if(width<=767){
            $("nav").addClass("scroll");
        }
        else{
            $("nav").removeClass("scroll");
        }
    });

    $("#shopping").on("click" , function(){
        alert("تم إضافة كتاب إلي عربة الشراء");
    });
    $('svg.right-hand').animate({ right:'10%'} , 400 , function(){
        $('svg.right-hand').animate({ right:'13%'} , 400 , function(){
            $('svg.right-hand').animate({ right:'10%'} , 400 , function(){
                $('svg.right-hand').animate({ right:'13%'} , 400 , function(){
                    $('svg.right-hand').animate({ right:'10%'} , 400 , function(){
                        $('svg.right-hand').animate({ right:'13%'} , 400 , function(){
                            $('svg.right-hand').animate({ right:'10%'} , 400 , function(){
                                $('svg.right-hand').animate({ right:'13%'} , 400 , function(){
                                    $('svg.right-hand').animate({ right:'10%'} , 400 , function(){
                                        $('svg.right-hand').animate({ right:'13%'} , 400 , function(){
                                            $('svg.right-hand').animate({ right:'10%'} , 400 , function(){
                                                $('svg.right-hand').animate({ right:'13%'} , 400 , function(){
                                                    $('svg.right-hand').animate({ right:'10%'} , 400 , function(){
                                                        $('svg.right-hand').animate({ right:'13%'} , 400 , function(){
                                                            $('svg.right-hand').animate({ right:'10%'} , 400 , function(){
                                                                $('svg.right-hand').animate({ right:'13%'} , 400 , function(){
                                                                    $('svg.right-hand').animate({ right:'10%'} , 400 , function(){
                                                                        $('svg.right-hand').animate({ right:'13%'} , 400 , function(){
                                                                            $('svg.right-hand').animate({ right:'10%'} , 400 , function(){
                                                                                $('svg.right-hand').animate({ right:'13%'} , 400 , function(){
                                                                                });
                                                                            });
                                                                        });
                                                                    });
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
    $('svg.left-hand').animate({left:'9.9%'} , 400 , function(){
        $('svg.left-hand').animate({ left:'12.9%'} , 400 , function(){
            $('svg.left-hand').animate({left:'9.9%'} , 400 , function(){
                $('svg.left-hand').animate({ left:'12.9%'} , 400 , function(){
                    $('svg.left-hand').animate({left:'9.9%'} , 400 , function(){
                        $('svg.left-hand').animate({ left:'12.9%'} , 400 , function(){
                            $('svg.left-hand').animate({left:'9.9%'} , 400 , function(){
                                $('svg.left-hand').animate({ left:'12.9%'} , 400 , function(){
                                    $('svg.left-hand').animate({left:'9.9%'} , 400 , function(){
                                        $('svg.left-hand').animate({ left:'12.9%'} , 400 , function(){
                                            $('svg.left-hand').animate({left:'9.9%'} , 400 , function(){
                                                $('svg.left-hand').animate({ left:'12.9%'} , 400 , function(){
                                                    $('svg.left-hand').animate({left:'9.9%'} , 400 , function(){
                                                        $('svg.left-hand').animate({ left:'12.9%'} , 400 , function(){
                                                            $('svg.left-hand').animate({left:'9.9%'} , 400 , function(){
                                                                $('svg.left-hand').animate({ left:'12.9%'} , 400 , function(){
                                                                    $('svg.left-hand').animate({left:'9.9%'} , 400 , function(){
                                                                        $('svg.left-hand').animate({ left:'12.9%'} , 400 , function(){
                                                                            $('svg.left-hand').animate({left:'9.9%'} , 400 , function(){
                                                                                $('svg.left-hand').animate({ left:'12.9%'} , 400 , function(){
                                                                                });
                                                                            });
                                                                        });
                                                                    });
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
     
   
});