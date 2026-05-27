(function($){
	"use strict";
	$(document).ready(function(){

		/* Scroll to top */
		asting_scrollUp();
		function asting_scrollUp(options) {
		           
		    var defaults = {
		        scrollName: 'scrollUp', 
		        topDistance: 600, 
		        topSpeed: 800, 
		        animation: 'fade', 
		        animationInSpeed: 200, 
		        animationOutSpeed: 200, 
		        scrollText: '<i class="fas fa-angle-up"></i>', 
		        scrollImg: false, 
		        activeOverlay: false 
		    };

		    var o = $.extend({}, defaults, options),
		            scrollId = '#' + o.scrollName;


		    $('<a/>', {
		        id: o.scrollName,
		        href: '#top',
		        title: o.scrollText
		    }).appendTo('body');


		    if (!o.scrollImg) {

		        $(scrollId).html(o.scrollText);
		    }


		    $(scrollId).css({'display': 'none', 'position': 'fixed', 'z-index': '2147483647'});


		    if (o.activeOverlay) {
		        $("body").append("<div id='" + o.scrollName + "-active'></div>");
		        $(scrollId + "-active").css({'position': 'absolute', 'top': o.topDistance + 'px', 'width': '100%', 'border-top': '1px dotted ' + o.activeOverlay, 'z-index': '2147483647'});
		    }


		    $(window).scroll(function () {
		        switch (o.animation) {
		            case "fade":
		                $(($(window).scrollTop() > o.topDistance) ? $(scrollId).fadeIn(o.animationInSpeed) : $(scrollId).fadeOut(o.animationOutSpeed));
		                break;
		            case "slide":
		                $(($(window).scrollTop() > o.topDistance) ? $(scrollId).slideDown(o.animationInSpeed) : $(scrollId).slideUp(o.animationOutSpeed));
		                break;
		            default:
		                $(($(window).scrollTop() > o.topDistance) ? $(scrollId).show(0) : $(scrollId).hide(0));
		        }
		    });

		    if($('#woo-sidebar').length <=0 ){
				$('.ova-shop-wrap .content-area').css({'flex':'0 0 100%', 'padding-left':'0px'});
			}

		    
		    $(scrollId).on( "click", function (event) {
		        $('html, body').animate({scrollTop: 0}, o.topSpeed);
		        event.preventDefault();
		    });

		}

		/* Fix empty menu in test_uni_data */
		if( $( '.widget_nav_menu ul li' ).length > 0 ){
			$( '.widget_nav_menu ul li a:empty' ).parent().css('display','none');
		}

		/* Select 2 */
		$('select').select2({ 
			width: '100%'
		});

		
	    
	    
	    if( $("[data-fancybox='product_gallery']").length ){

	    	$("[data-fancybox='product_gallery']").fancybox({
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
	    	
	    }
	    


	    $( '.ovatheme_header_default li.menu-item button.dropdown-toggle').off('click').on( 'click', function() {
		    $(this).parent().toggleClass('active_sub');
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

	    if($('.ova_stretch_column_left').length != null ){
			asting_calculate_width( '.ova_stretch_column_left' );
		}
		if($('.ova_stretch_column_right').length != null ){
			asting_calculate_width( '.ova_stretch_column_right' );
		}

	});	


	/* Archive Give Video */
	if( $(".archive_give_donation .media .video").length > 0 ){
	 $(".archive_give_donation .media .video").fancybox({
	    iframe : {
	       css : {
	          maxWidth : '80%',
	       }
	    }
	 });
	}

		/* single Give Video */
	if( $(".entry-summary .media .video").length > 0 ){
	 $(".entry-summary  .media .video").fancybox({
	    iframe : {
	       css : {
	          maxWidth : '80%',
	       }
	    }
	 });
	}



	// Calculate width with special class
	function asting_calculate_width( directly ){

		if( $(directly).length ){

			var width_win = $(window).outerWidth();

			var windowsize = $(window).width();

			if( directly == '.ova_stretch_column_left' ){

				var col_offset = $(directly).offset();
				var myLeftLineWidth = col_offset.left;
				var width_left = $(directly).outerWidth() + myLeftLineWidth ;	
				
				

				$('.ova_stretch_column_left .elementor-column-wrap').css('width', width_left);
				$('.ova_stretch_column_left .elementor-column-wrap').css('margin-left', -myLeftLineWidth);
			}

			if( directly == '.ova_stretch_column_right' ){

				var $whatever        = $('.ova_stretch_column_right');
				var ending_right     = ($(window).width() - ($whatever.offset().left + $whatever.outerWidth()));
				
				var myrightLineWidth = window.innerWidth - ending_right;
				var width_right = $(directly).outerWidth() + myrightLineWidth;


				$('.ova_stretch_column_right .elementor-column-wrap').css('width', width_right);
				$('.ova_stretch_column_right .elementor-column-wrap').css('margin-right', -ending_right);

				if( windowsize <= 1024 ) {
					$('#ova_stretch_column_right .elementor-column-wrap').css('margin-right', 'auto');
				}
			}
		}

	}


	$(window).resize(function () {
		if($('.ova_stretch_column_left').length != null ){
			asting_calculate_width('.ova_stretch_column_left');
		}
		if($('.ova_stretch_column_right').length != null ){
			asting_calculate_width('.ova_stretch_column_right');
		}
	});	

	function asting_custom_give(){

		var btn_text = 'Donate Now';

		if( $('.ova_info_donation').length ){
			btn_text = $('.ova_info_donation').data('donate_now_btn');

			var new_btn = $('<div class="custom_give">'+btn_text+'</div>');

			$(".give-list-inline").append(new_btn);

			$(".custom_give").click(function(){
				$("#give-payment-mode-select").show('slow');
				$("#give_purchase_form_wrap").show('slow');
				$(".custom_give").hide('fast');
				$(".ova_info_donation").css('padding-bottom','30px');

			});
		}

	}

	asting_custom_give();




})(jQuery);