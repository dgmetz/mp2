function highlightThis(){var backgroundColor=this.style.backgroundColor;this.style.backgroundColor="yellow",alert(this.className),this.style.backgroundColor=backgroundColor}for(var divs=document.getElementsByClassName("alert"),i=0;i<divs.length;i++)divs[i].addEventListener("click",highlightThis);$(document).ready(function(){$(".your-class").slick({dots:!0,infinite:!0,slidesToShow:2,slidesToScroll:1,speed:500,responsive:[{breakpoint:1024,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(window).scroll(function(){$(window).scrollTop()>$("#About").offset().top}),$(document).ready(function(){$('a[href^="#"]').on("click",function(e){e.preventDefault();var target=this.hash,$target=$(target);$("html, body").stop().animate({scrollTop:$target.offset().top-125},900,"swing",function(){window.location.hash=target})})})});