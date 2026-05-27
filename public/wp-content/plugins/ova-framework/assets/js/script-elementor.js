(function($){
	"use strict";
	

	$(window).on('elementor/frontend/init', function () {
        
		
		/* Menu Shrink */
        elementorFrontend.hooks.addAction('frontend/element_ready/ova_menu.default', function(){

			$( '.ova_menu_clasic .ova_openNav' ).on( 'click', function(){
				$( this ).closest('.ova_wrap_nav').find( '.ova_nav' ).removeClass( 'hide' );
				$( this ).closest('.ova_wrap_nav').find( '.ova_nav' ).addClass( 'show' );
				$( '.ova_menu_clasic  .ova_closeCanvas' ).addClass( 'show');

				
				$( 'body' ).css( 'background-color', 'rgba(0,0,0,0.6)' );
				
			});

			$( '.ova_menu_clasic  .ova_closeNav' ).on( 'click', function(){
				$( this ).closest('.ova_wrap_nav').find( '.ova_nav' ).removeClass( 'show' );
				$( this ).closest('.ova_wrap_nav').find( '.ova_nav' ).addClass( 'hide' );
				$( '.ova_closeCanvas' ).removeClass( 'show');

				$('.ova_menu_clasic #menu-primary-menu .dropdown-menu').css( 'display','none' );
				
				$( 'body' ).css( 'background-color', 'transparent' );
				
			});

			// Display in mobile
			$( '.ova_menu_clasic li.menu-item button.dropdown-toggle').off('click').on( 'click', function() {
			    $(this).parent().find('.dropdown-menu').first().toggle('fast');
			});

        	if( $('.ovamenu_shrink').length > 0 && $( 'body' ).data('elementor-device-mode') == 'desktop' ){
				
				if( !$('.show_mask_header').hasClass( 'mask_header_shrink' ) ){
					$( '<div class="show_mask_header mask_header_shrink" style="position: relative; height: 0;"></div>' ).insertAfter('.ovamenu_shrink');
					

				}

				
				var header = $('.ovamenu_shrink');
				var header_shrink_height = header.height();
				

				$(window).scroll(function () {
						
						var scroll = $(this).scrollTop();

						if (scroll >= header_shrink_height+150 ) {
							header.addClass( 'active_fixed' );
							$('.mask_header_shrink').css('height',header_shrink_height);
							$('#active_fixed').css('margin', '0');
				        } else {
				            header.removeClass('active_fixed');
				            $('.mask_header_shrink').css('height','0');
				            $('#active_fixed').css('margin', '');
				        }
				});
			}

			if( $('.ovamenu_shrink_mobile').length > 0 && $( 'body' ).data('elementor-device-mode') != 'desktop' ){
				
				if( !$('.show_mask_header_mobile').hasClass( 'mask_header_shrink_mobile' ) ){
					$( '<div class="show_mask_header_mobile mask_header_shrink_mobile" style="position: relative; height: 0;"></div>' ).insertAfter('.ovamenu_shrink_mobile');
					
				}
				
				var header = $('.ovamenu_shrink_mobile');
				var header_shrink_height = header.height();
				

				$(window).scroll(function () {
						
						var scroll = $(this).scrollTop();

						if (scroll >= header_shrink_height+150 ) {
							header.addClass( 'active_fixed' );
							$('.mask_header_shrink_mobile').css('height',header_shrink_height);
							$('#active_fixed').css('margin', '0');
				        } else {
				            header.removeClass('active_fixed');
				            $('.mask_header_shrink_mobile').css('height','0');
				            $('#active_fixed').css('margin', '');
				        }
				});
			}
			$(window).resize(function(){
				if( $(window).width() > 1024 ){
					$('.ova_menu_clasic #menu-primary-menu .dropdown-menu').css( 'display','block' );
					$('.ova_closeCanvas').css('display', 'none');
					$( 'body' ).css( 'background-color', 'transparent' );
				}else{
					$('.ova_closeCanvas').css('display', 'block');
					$('.ova_menu_clasic #menu-primary-menu .dropdown-menu').css( 'display','none' );
				}
			});

        });


        /* testimonial */
		elementorFrontend.hooks.addAction('frontend/element_ready/ova_testimonial.default', function(){
			$(".slide-testimonials").each(function(){
		        var owlsl = $(this) ;
		        var owlsl_ops = owlsl.data('options') ? owlsl.data('options') : {};

		        var responsive_value = {
		            0:{
		              items:1,
		              nav:false
		            },
		            576:{
		              items:1

		            },
		            992:{
		              items:2
		            },
		            1170:{
		              items:owlsl_ops.items
		            }
		        };
		        
		        owlsl.owlCarousel({
		          autoWidth: owlsl_ops.autoWidth,
		          margin: owlsl_ops.margin,
		          items: owlsl_ops.items,
		          loop: owlsl_ops.loop,
		          autoplay: owlsl_ops.autoplay,
		          autoplayTimeout: owlsl_ops.autoplayTimeout,
		          center: owlsl_ops.center,
		          nav: owlsl_ops.nav,
		          dots: owlsl_ops.dots,
		          thumbs: owlsl_ops.thumbs,
		          autoplayHoverPause: owlsl_ops.autoplayHoverPause,
		          slideBy: owlsl_ops.slideBy,
		          smartSpeed: owlsl_ops.smartSpeed,
		          navText:[
		          '<i class="arrow_carrot-left" ></i>',
		          '<i class="arrow_carrot-right" ></i>'
		          ],
		          responsive: responsive_value,
		        });

		      });

			//version 2
			$(".slide-testimonials-v2").each(function(){
		        var owlsl = $(this) ;
		        var owlsl_ops = owlsl.data('options') ? owlsl.data('options') : {};

		        var responsive_value = {
		            0:{
		              items:1,
		              nav:false
		            },
		            576:{
		              items:1

		            },
		            992:{
		              items:1
		            },
		            1170:{
		              items:owlsl_ops.items
		            }
		        };
		        
		        owlsl.owlCarousel({
		          autoWidth: owlsl_ops.autoWidth,
		          margin: owlsl_ops.margin,
		          items: owlsl_ops.items,
		          loop: owlsl_ops.loop,
		          autoplay: owlsl_ops.autoplay,
		          autoplayTimeout: owlsl_ops.autoplayTimeout,
		          center: owlsl_ops.center,
		          nav: owlsl_ops.nav,
		          dots: owlsl_ops.dots,
		          thumbs: owlsl_ops.thumbs,
		          autoplayHoverPause: owlsl_ops.autoplayHoverPause,
		          slideBy: owlsl_ops.slideBy,
		          smartSpeed: owlsl_ops.smartSpeed,
		          navText:[
		          '<i class="arrow_carrot-left" ></i>',
		          '<i class="arrow_carrot-right" ></i>'
		          ],
		          responsive: responsive_value,
		        });

		      });
		});
		/* end testimonial */

		/* accordion */
		elementorFrontend.hooks.addAction('frontend/element_ready/ova_accordion.default', function(){
			$( ".ova-accordion" ).ready(function(){
				var icon = $('#icon').attr('class');
				var icon_active = $("#icon_active").attr('class');
				$(".accordion-header").click(function(){
					if( $(this).next(".accordion-body").hasClass("active") ) {
						$(this).removeAttr("id", "acc-active");
						$(this).next(".accordion-body").removeClass("active").slideUp("slow");
						$(this).children("span").removeClass(icon_active).addClass(icon);
					} else {
						$(".accordion-items .accordion-header").removeAttr("id", "acc-active");
						$(".accordion-items .accordion-body").removeClass("active").slideUp("slow");
						$(".accordion-items .accordion-header span").removeClass(icon_active).addClass(icon);
						$(this).attr("id", "acc-active");
						$(this).next(".accordion-body").addClass("active").slideDown("slow");
						$(this).children("span").removeClass(icon).addClass(icon_active);
					}
				});
			});
		});
		/* end accordion */


		/* testimonial image */
		elementorFrontend.hooks.addAction('frontend/element_ready/ova_testimonial_image.default', function(){
			//version 1
			$(".version-1 .testimonial-image").each(function(){
		        var owlsl = $(this) ;
		        var owlsl_ops = owlsl.data('options') ? owlsl.data('options') : {};

		        var responsive_value = {
		            0:{
		              items:1,
		              nav:false,
		              autoplayHoverPause:false
		            },
		            576:{
		              items:1,
		              autoplayHoverPause:false

		            },
		            768:{
		              items:2

		            },
		            992:{
		              items:2
		            },
		            1170:{
		              items:owlsl_ops.items
		            }
		        };
		        
		        owlsl.owlCarousel({
		          autoWidth: owlsl_ops.autoWidth,
		          margin: owlsl_ops.margin,
		          items: owlsl_ops.items,
		          loop: owlsl_ops.loop,
		          autoplay: owlsl_ops.autoplay,
		          autoplayTimeout: owlsl_ops.autoplayTimeout,
		          center: owlsl_ops.center,
		          nav: owlsl_ops.nav,
		          dots: owlsl_ops.dots,
		          thumbs: owlsl_ops.thumbs,
		          autoplayHoverPause: owlsl_ops.autoplayHoverPause,
		          slideBy: owlsl_ops.slideBy,
		          smartSpeed: owlsl_ops.smartSpeed,
		          navText:[
		          '<i class="arrow_carrot-left" ></i>',
		          '<i class="arrow_carrot-right" ></i>'
		          ],
		          responsive: responsive_value,
		        });

		      });

			//version 2
			$(".version-2 .testimonial-image-v2").each(function(){
		        var owlsl = $(this) ;
		        var owlsl_ops = owlsl.data('options') ? owlsl.data('options') : {};

		        var responsive_value = {
		            0:{
		              items:1,
		              nav:false,
		              autoplayHoverPause:false
		            },
		            576:{
		              items:1,
		              autoplayHoverPause:false

		            },
		            768:{
		              items:2

		            },
		            992:{
		              items:2
		            },
		            1170:{
		              items:owlsl_ops.items
		            }
		        };
		        
		        owlsl.owlCarousel({
		          autoWidth: owlsl_ops.autoWidth,
		          margin: owlsl_ops.margin,
		          items: owlsl_ops.items,
		          loop: owlsl_ops.loop,
		          autoplay: owlsl_ops.autoplay,
		          autoplayTimeout: owlsl_ops.autoplayTimeout,
		          center: owlsl_ops.center,
		          nav: owlsl_ops.nav,
		          dots: owlsl_ops.dots,
		          thumbs: owlsl_ops.thumbs,
		          autoplayHoverPause: owlsl_ops.autoplayHoverPause,
		          slideBy: owlsl_ops.slideBy,
		          smartSpeed: owlsl_ops.smartSpeed,
		          navText:[
		          '<i class="arrow_carrot-left" ></i>',
		          '<i class="arrow_carrot-right" ></i>'
		          ],
		          responsive: responsive_value,
		        });

		      });

			$( ".version-2" ).ready(function(){
				$("[data-fancybox='gallery']").fancybox({
					loop: true,
					buttons: [
						"zoom",
						"share",
						"slideShow",
						"fullScreen",
						"download",
						"thumbs",
						"close"
					],
					animationDuration: 366,
					animationEffect: "fade",
					transitionEffect: "fade",
				});
			});

			//version 3
			$(".version-3 .testimonial-image-v3").each(function(){
		        var owlsl = $(this) ;
		        var owlsl_ops = owlsl.data('options') ? owlsl.data('options') : {};

		        var responsive_value = {
		            0:{
		              items:1,
		              nav:false,
		              autoplayHoverPause:false
		            },
		            576:{
		              items:1,
		              autoplayHoverPause:false

		            },
		            768:{
		              items:2

		            },
		            992:{
		              items:3
		            },
		            1500:{
		              items:4
		            },
		            1600:{
		              items:owlsl_ops.items
		            }
		        };
		        
		        owlsl.owlCarousel({
		          autoWidth: owlsl_ops.autoWidth,
		          margin: owlsl_ops.margin,
		          items: owlsl_ops.items,
		          loop: owlsl_ops.loop,
		          autoplay: owlsl_ops.autoplay,
		          autoplayTimeout: owlsl_ops.autoplayTimeout,
		          center: owlsl_ops.center,
		          nav: owlsl_ops.nav,
		          dots: owlsl_ops.dots,
		          thumbs: owlsl_ops.thumbs,
		          autoplayHoverPause: owlsl_ops.autoplayHoverPause,
		          slideBy: owlsl_ops.slideBy,
		          smartSpeed: owlsl_ops.smartSpeed,
		          navText:[
		          '<i class="arrow_carrot-left" ></i>',
		          '<i class="arrow_carrot-right" ></i>'
		          ],
		          responsive: responsive_value,
		        });

		      });
		});
		/* end testimonial image */



   				  /* ova_give */
		elementorFrontend.hooks.addAction('frontend/element_ready/ova_give_donations.default', function(){

           if( $(".archive_give_donation .media .video").length > 0 ){
		         $(".archive_give_donation .media .video").fancybox({
		            iframe : {
		               css : {
		                  maxWidth : '80%',
		               }
		            }
		         });
		      }

      		$('.project-percent').appear(function(){
				var $this = $(this);
				var percent = $this.data('percent');
				$this.css("width",percent+'%');
				$({animatedValue: 0}).animate({animatedValue: percent},{
					duration: 100,
					step: function(){
						$this.attr('percent', Math.floor(this.animatedValue) + '%');
					},
					complete: function(){
						$this.attr('percent', Math.floor(this.animatedValue) + '%');
					}
				});
			});
      		
   		});
   		// end ova_give


   		/* ova_progress_bar */
   		elementorFrontend.hooks.addAction('frontend/element_ready/ova_progress_bar.default', function(){

   			$('.project-percent').appear(function(){
   				var $this = $(this);
   				var percent = $this.data('percent');
   				$this.css("width",percent+'%');
   				$({animatedValue: 0}).animate({animatedValue: percent},{
   					duration: 100,
   					step: function(){
   						$this.attr('percent', Math.floor(this.animatedValue) + '%');
   					},
   					complete: function(){
   						$this.attr('percent', Math.floor(this.animatedValue) + '%');
   					}
   				});
   			});

   		});
   		// end ova_progress_bar

	/* ova_give_slide */
		elementorFrontend.hooks.addAction('frontend/element_ready/ova_give_slide.default', function(){
			$(".give-slide ").each(function(){
		        var owlsl = $(this) ;
		        var owlsl_ops = owlsl.data('options') ? owlsl.data('options') : {};
		        var responsive_value = {
		            0:{
		              items:1,
		              autoplayHoverPause:false
		            },
		            576:{
		              items:1,
		              autoplayHoverPause:false


		            },
		            768:{
		              items:2,
		            },
		            1170:{
		              items:owlsl_ops.items
		            }
		        };

		        var data = {
		          autoWidth: owlsl_ops.autoWidth,
		          margin: owlsl_ops.margin,
		          items: owlsl_ops.items,
		          autoplay: owlsl_ops.autoplay,
		          loop: owlsl_ops.loop,
		          autoplayTimeout: owlsl_ops.autoplayTimeout,
		          center: owlsl_ops.center,
		          nav: true,
		          dots: owlsl_ops.dots,
		          thumbs: owlsl_ops.thumbs,
		          autoplayHoverPause: owlsl_ops.autoplayHoverPause,
		          slideBy: owlsl_ops.slideBy,
		          smartSpeed: owlsl_ops.smartSpeed,
		          navText:[
		           '<i class="icon-right-arrow" ></i>',
		          '<i class="icon-right-arrow" ></i>',
		          ],
		          responsive: responsive_value,
		        }
		        
		        owlsl.owlCarousel(data);

		        $(window).resize(function() {
		        	var items = $('.give-slide');

		        	items.trigger('destroy.owl.carousel');
		        	items.owlCarousel(data);
		        });

		        $('.give-slide').on('translate.owl.carousel', function(e){

		        	var $this = $(this);
		        	var percent = $this.data('percent');
		        	$this.css("width",percent+'%');

		        });


		        asting_carosel_width('.asting_carosel_right');
		        $(window).resize(function () {

		        	asting_carosel_width('.asting_carosel_right');

		        });


		  
      		$('.project-percent').appear(function(){
				var $this = $(this);
				var percent = $this.data('percent');
				$this.css("width",percent+'%');
				$({animatedValue: 0}).animate({animatedValue: percent},{
					duration: 100,
					step: function(){
						$this.attr('percent', Math.floor(this.animatedValue) + '%');
					},
					complete: function(){
						$this.attr('percent', Math.floor(this.animatedValue) + '%');
					}
				});
			});

		 
		      });


		});
		/* end ova_give_slide */





			/* ova_blog_slide */
		elementorFrontend.hooks.addAction('frontend/element_ready/ova_blog_slide.default', function(){
			$(".blog-slide").each(function(){
		        var owlsl = $(this) ;
		        var owlsl_ops = owlsl.data('options') ? owlsl.data('options') : {};
		        var responsive_value = {
		            0:{
		              items:1,
		              autoplayHoverPause:false
		            },
		            576:{
		              items:1,
		              autoplayHoverPause:false


		            },
		            768:{
		              items:2,
		            },
		            1170:{
		              items:owlsl_ops.items
		            }
		        };

		       var data = {
		          autoWidth: owlsl_ops.autoWidth,
		          margin: owlsl_ops.margin,
		          items: owlsl_ops.items,
		          loop: owlsl_ops.loop,
		          autoplay: owlsl_ops.autoplay,
		          autoplayTimeout: owlsl_ops.autoplayTimeout,
		          center: owlsl_ops.center,
		          nav: true,
		          dots: owlsl_ops.dots,
		          thumbs: owlsl_ops.thumbs,
		          autoplayHoverPause: owlsl_ops.autoplayHoverPause,
		          slideBy: owlsl_ops.slideBy,
		          smartSpeed: owlsl_ops.smartSpeed,
		          navText:[
		          '<i class="icon-right-arrow" ></i>',
		          '<i class="icon-right-arrow" ></i>',
		     
		          ],
		          responsive: responsive_value,
		        }

		        owlsl.owlCarousel(data);

		        $(window).resize(function() {
		        	var items = $('.blog-slide');

		        	items.trigger('destroy.owl.carousel');
		        	items.owlCarousel(data);
		        });


		        asting_carosel_width('.asting_carosel_right');
		        $(window).resize(function () {

		        	asting_carosel_width('.asting_carosel_right');

		        });

		      });

		});
		/* end ova_blog_slide */


		/* ova_give_slide 2*/
		elementorFrontend.hooks.addAction('frontend/element_ready/ova_give_slide2.default', function(){
			$(".give-slide2 ").each(function(){
				  
		        var owlsl = $(this) ;
		        var owlsl_ops = owlsl.data('options') ? owlsl.data('options') : {};
		             var responsive_value = {
		            0:{
		              items:1,
		              autoplayHoverPause:false
		            },
		            576:{
		              items:1,
		              autoplayHoverPause:false


		            },
		            768:{
		              items:1,
		            }
		        };

		        var data = {
		          autoWidth: owlsl_ops.autoWidth,
		          items: 1,
		          autoplay: owlsl_ops.autoplay,
		          loop: owlsl_ops.loop,
		          autoplayTimeout: owlsl_ops.autoplayTimeout,
		          nav: true,
		          dots: owlsl_ops.dots,
		          thumbs: owlsl_ops.thumbs,
		          autoplayHoverPause: owlsl_ops.autoplayHoverPause,
		          smartSpeed: owlsl_ops.smartSpeed,
		          slideBy: 1,
		          navText:[
		           '<i class="icon-right-arrow" ></i>',
		          '<i class="icon-right-arrow" ></i>',
		          ],
		           responsive: responsive_value,
		        }

		    
		        
		        owlsl.owlCarousel(data);

		          $(window).resize(function() {
		        	var items = $('.give-slide2');
		        	items.trigger('destroy.owl.carousel');
		        	items.owlCarousel(data);
		        });


		        $('.give-slide2').on('translate.owl.carousel', function(e){

		        	var $this = $(this);
		        	var percent = $this.data('percent');
		        	$this.css("width",percent+'%');

		        });


		        $('.project-percent').appear(function(){
		        	var $this = $(this);
		        	var percent = $this.data('percent');
		        	$this.css("width",percent+'%');
		        	$({animatedValue: 0}).animate({animatedValue: percent},{
		        		duration: 100,
		        		step: function(){
		        			$this.attr('percent', Math.floor(this.animatedValue) + '%');
		        		},
		        		complete: function(){
		        			$this.attr('percent', Math.floor(this.animatedValue) + '%');
		        		}
		        	});
		        });

		 
		      });

		});
		/* end ova_give_slide 2*/


		/* icon_box */
		elementorFrontend.hooks.addAction('frontend/element_ready/ova_icon_box.default', function(){
			$( ".ova-icon-box" ).ready(function(){

				function getId(url) {
				    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
				    var match = url.match(regExp);

				    if (match && match[2].length == 11) {
				        return match[2];
				    } else {
				        return 'error';
				    }
				}

				var $videoSrc; 
				$('.video-btn').click(function() {
				    $videoSrc = getId( $(this).data( "src" ) );
				});

				$('#videoModal').on('shown.bs.modal', function (e) {
					$("#video").attr('src', "https://www.youtube.com/embed/" + $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" ); 
				});

				$('#videoModal').on('hide.bs.modal', function (e) {
    				$("#video").attr('src',$videoSrc); 
				});

			});
		});
		/* end icon_box */

		/* counter up */
		elementorFrontend.hooks.addAction('frontend/element_ready/ova_counter_up.default', function(){
			$( ".ova-image-text_v2" ).ready(function(){
				$(".counter").counterUp({
						delay: 10,
						time: 1200
				});
			});
		});
		/* end counter up */

		/* Search Popup */
		elementorFrontend.hooks.addAction('frontend/element_ready/ova_search_popup.default', function(){
			$( '.ova_wrap_search_popup i' ).on( 'click', function(){
				$( this ).closest( '.ova_wrap_search_popup' ).addClass( 'show' );
			});

			$( '.btn_close' ).on( 'click', function(){
				$( this ).closest( '.ova_wrap_search_popup' ).removeClass( 'show' );

			});
		});
		/* end Search Popup */

		function asting_carosel_width( directly ){

			if( $(directly).length ){

				var width_win = $(window).outerWidth();
				var $whatever        = $('.asting_carosel_right');
				var ending_right     = ($(window).width() - ($whatever.offset().left + $whatever.outerWidth()));
				var myrightLineWidth = window.innerWidth - ending_right;
				var width_right = $(directly).outerWidth() + myrightLineWidth;
				var windowsize = $(window).width();

				$('.asting_carosel_right .owl-stage-outer').css('width', width_right);
				$('.asting_carosel_right .owl-stage-outer').css('margin-right', -ending_right);
				if( windowsize <= 1024 ) {
					$('.asting_carosel_right .owl-stage-outer').css('width', 'auto');
					$('.asting_carosel_right .owl-stage-outer').css('margin-right', 'auto');
				}

			}

		}

   });	    

})(jQuery);
