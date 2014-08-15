/*
 * jQuery Orbit Plugin 1.2.3
 * www.ZURB.com/playground
 * Copyright 2010, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/

(function ($) {

	$.fn.orbit = function (options) {

		//Defaults to extend options
		var defaults = {
			animation: 'fade', 		// fade, horizontal-slide, vertical-slide, horizontal-push
			animationSpeed: 800, 				// how fast animtions are
			timer: true, 						// true or false to have the timer
			advanceSpeed: 4000, 				// if timer is enabled, time between transitions 
			pauseOnHover: false, 				// if you hover pauses the slider
			startClockOnMouseOut: false, 		// if clock should start on MouseOut
			startClockOnMouseOutAfter: 1000, 	// how long after MouseOut should the timer start again
			directionalNav: false, 				// manual advancing directional navs
			captions: false, 					// do you want captions?
			captionAnimation: 'fade', 			// fade, slideOpen, none
			captionAnimationSpeed: 600, 		// if so how quickly should they animate in
			bullets: true, 					// true or false to activate the bullet navigation
			bulletThumbs: true, 			// thumbnails for the bullets
			bulletThumbLocation: 'img/slides/bullet-thumbs/', 		// location from this file where thumbs will be
			afterSlideChange: function () { } 		// empty function 
		};

		//Extend those options
		var options = $.extend(defaults, options);

		return this.each(function () {

			// ==============
			// ! SETUP   
			// ==============

			//Global Variables
			var activeSlide = 0,
            	numberSlides = 0,
            	orbitWidth,
            	orbitHeight,
            	locked;

			//Initialize
			var orbit = $(this).addClass('orbit'),
            	orbitWrapper = orbit.wrap('<div class="orbit-wrapper" />').parent();
			//orbit.add(orbitWidth).width('1px').height('1px');

			//Collect all slides and set slider size of largest image
			var slides = orbit.children('img, a, div');
			slides.each(function () {
				/*var _slide = $(this),
				_slideWidth = _slide.width(),
				_slideHeight = _slide.height();
				if (_slideWidth > orbit.width()) {
				orbit.add(orbitWrapper).width(_slideWidth);
				orbitWidth = orbit.width();
				}
				if (_slideHeight > orbit.height()) {
				orbit.add(orbitWrapper).height(_slideHeight);
				orbitHeight = orbit.height();
				}*/
				numberSlides++;
			});

			//Animation locking functions
			function unlock() {
				locked = false;
			}
			function lock() {
				locked = true;
			}

			//If there is only a single slide remove nav, timer and bullets
			if (slides.length == 1) {
				options.directionalNav = false;
				options.timer = false;
				options.bullets = false;
			}

			//Set all slides to "display: block" and "opacity: 0"
			slides.css({ "display": "block", "opacity": 0 })
			//Set initial front photo z-index and fades it in
			slides.eq(activeSlide)
            	.css({ "opacity": 1, "z-index": 3 })
                .fadeIn();

			/***************************************/
			//original code looked like this:
			/*slides.eq(activeSlide)
			.css({"z-index" : 3})
			.fadeIn(function() {
			//brings in all other slides IF css declares a display: none
			slides.css({"display":"block"})
			});*/
			/***************************************/

			// ==============
			// ! TIMER   
			// ==============

			//Timer Execution
			function startClock() {
				if (!options.timer || options.timer == 'false') {
					return false;
					//if timer is hidden, don't need to do crazy calculations
				} else if (timer.is(':hidden')) {
					clock = setInterval(function (e) {
						shift("next");
					}, options.advanceSpeed);
					//if timer is visible and working, let's do some math
				} else {
					timerRunning = true;
					pause.removeClass('active')
					clock = setInterval(function (e) {
						var degreeCSS = "rotate(" + degrees + "deg)"
						degrees += 2
						rotator.css({
							"-webkit-transform": degreeCSS,
							"-moz-transform": degreeCSS,
							"-o-transform": degreeCSS
						});
						if (degrees > 180) {
							rotator.addClass('move');
							mask.addClass('move');
						}
						if (degrees > 360) {
							rotator.removeClass('move');
							mask.removeClass('move');
							degrees = 0;
							shift("next");
						}
					}, options.advanceSpeed / 180);
				}
			}
			function stopClock() {
				if (!options.timer || options.timer == 'false') { return false; } else {
					timerRunning = false;
					clearInterval(clock);
					pause.addClass('active');
				}
			}

			//Timer Setup
			if (options.timer) {
				var timerHTML = '<div class="timer"><span class="mask"><span class="rotator"></span></span><span class="pause"></span></div>'
				orbitWrapper.append(timerHTML);
				var timer = orbitWrapper.children('div.timer'),
                	timerRunning;
				if (timer.length != 0) {
					var rotator = $('div.timer span.rotator'),
                    	mask = $('div.timer span.mask'),
                    	pause = $('div.timer span.pause'),
                    	degrees = 0,
                    	clock;
					startClock();
					timer.click(function () {
						if (!timerRunning) {
							startClock();
						} else {
							stopClock();
						}
					});
					if (options.startClockOnMouseOut) {
						var outTimer;
						orbitWrapper.mouseleave(function () {
							outTimer = setTimeout(function () {
								if (!timerRunning) {
									startClock();
								}
							}, options.startClockOnMouseOutAfter)
						})
						orbitWrapper.mouseenter(function () {
							clearTimeout(outTimer);
						})
					}
				}
			}

			//Pause Timer on hover
			if (options.pauseOnHover) {
				orbitWrapper.mouseenter(function () {
					stopClock();
				});
			}

			// ==============
			// ! CAPTIONS   
			// ==============

			//Caption Setup
			if (options.captions) {
				var captionHTML = '<div class="orbit-caption"></div>';
				orbitWrapper.append(captionHTML);
				var caption = orbitWrapper.children('.orbit-caption');
				setCaption();
			}

			//Caption Execution
			function setCaption() {
				if (!options.captions || options.captions == "false") {
					return false;
				} else {
					var _captionLocation = slides.eq(activeSlide).data('caption'); //get ID from rel tag on image
					_captionHTML = $(_captionLocation).html(); //get HTML from the matching HTML entity            		
					//Set HTML for the caption if it exists
					if (_captionHTML) {
						caption
		            		.attr('id', _captionLocation) // Add ID caption
		                	.html(_captionHTML); // Change HTML in Caption 
						//Animations for Caption entrances
						if (options.captionAnimation == 'none') {
							caption.show();
						}
						if (options.captionAnimation == 'fade') {
							caption.fadeIn(options.captionAnimationSpeed);
						}
						if (options.captionAnimation == 'slideOpen') {
							caption.slideDown(options.captionAnimationSpeed);
						}
					} else {
						//Animations for Caption exits
						if (options.captionAnimation == 'none') {
							caption.hide();
						}
						if (options.captionAnimation == 'fade') {
							caption.fadeOut(options.captionAnimationSpeed);
						}
						if (options.captionAnimation == 'slideOpen') {
							caption.slideUp(options.captionAnimationSpeed);
						}
					}
				}
			}

			// ==================
			// ! DIRECTIONAL NAV   
			// ==================

			//DirectionalNav { rightButton --> shift("next"), leftButton --> shift("prev");
			if (options.directionalNav) {
				if (options.directionalNav == "false") { return false; }
				var directionalNavHTML = '<div class="slider-nav"><span class="right">Right</span><span class="left">Left</span></div>';
				orbitWrapper.append(directionalNavHTML);
				var leftBtn = orbitWrapper.children('div.slider-nav').children('span.left'),
                	rightBtn = orbitWrapper.children('div.slider-nav').children('span.right');
				leftBtn.click(function () {
					stopClock();
					shift("prev");
				});
				rightBtn.click(function () {
					stopClock();
					shift("next")
				});
			}

			// ==================
			// ! BULLET NAV   
			// ==================

			//Bullet Nav Setup
			if (options.bullets) {
				var bulletHTML = '<ul class="orbit-bullets"></ul>';
				orbitWrapper.append(bulletHTML);
				var bullets = orbitWrapper.children('ul.orbit-bullets');
				for (i = 0; i < numberSlides; i++) {
					var liMarkup = $('<li>' + (i + 1) + '</li>');
					if (options.bulletThumbs) {
						//Get the thumbnails name and remove the file extension 
						var thumbName = slides.eq(i).data('thumb');
						thumbName = thumbName.split(".");
						var pageName = thumbName[0].replace("-btn", ".aspx");
						if (thumbName) {
						    //if (pageName == "request-info.aspx") {
							// use the following commented out code to redirect the request-info bullet to the desktop requestinfo.aspx form 
							// var liMarkup = $('<li id="' + thumbName[0] + '" class="has-thumb"><a href="https://www.uat.edu/requestinfo/default.aspx">' + i + '</a><a href="https://www.uat.edu/requestinfo/default.aspx">' + i + '</a></li>');
							//} else {
								//I added the id="#" portion of the following varible so I could call the element by id in the Bullets Hover Function -z-
								var liMarkup = $('<li id="' + thumbName[0] + '" class="has-thumb"><a href="' + pageName + '">' + i + '</a><a href="' + pageName + '">' + i + '</a></li>');
							//}
							//alert(thumbName[0]);
							//liMarkup.children(":first").css({ "background": "url(" + options.bulletThumbLocation + thumbName[0] + "-active.png) no-repeat scroll 0 0 / 100%" });
							//liMarkup.children(":last").css({ "background": "url(" + options.bulletThumbLocation + thumbName[0] + ".png) no-repeat scroll 0 0 / 100%" });
							liMarkup.children(":first").css({ "background": "url(" + options.bulletThumbLocation + thumbName[0] + "-active.png) no-repeat","background-size":"100%" });
							liMarkup.children(":last").css({ "background": "url(" + options.bulletThumbLocation + thumbName[0] + ".png) no-repeat", "background-size": "100%" });
						}
					}
					orbitWrapper.children('ul.orbit-bullets').append(liMarkup);
					liMarkup.data('index', i);
					liMarkup.click(function () {
						stopClock();
						shift($(this).data('index'));
					});
				}
				setActiveBullet();
			}

			//Bullets Hover Function - I added the following hover function to create custom rollover states for the bullets -z-
			/*bullets.children('li').hover(function () {
				//alert(this.id);
				var hoverThumb = this.id;
				//alert(activeSlide);
				//alert(hoverThumb);
				if (hoverThumb != activeSlide + 1) {
					bullets.children("#" + this.id).css({ "background": "url(" + options.bulletThumbLocation + hoverThumb + "-active.png) no-repeat" });
				}
			}, function () {
				//alert(this.id);
				var hoverThumb = this.id;
				if (hoverThumb != activeSlide + 1) {
					bullets.children("#" + this.id).css({ "background": "url(" + options.bulletThumbLocation + hoverThumb + ".png) no-repeat" });
				}
			});*/

			//Bullet Nav Execution
			function setActiveBullet() {
				if (!options.bullets) { return false; } else {
					//bullets.children('li').removeClass('active').eq(activeSlide).addClass('active'); - this is the original code...
					//I added this code so I could have more control over the active state of the bullets -z-
					var activeSlideID = bullets.children('li').eq(activeSlide).attr("id");
					var previousActiveSlideID = bullets.children('li').eq(previousActiveSlide).attr("id");
					//alert(bullets.children('li').eq(activeSlide).attr("id"));
					//bullets.children('li').eq(activeSlide).css({ "background": "url(" + options.bulletThumbLocation + activeSlideID + "-active.png) no-repeat" });
					//bullets.children('li').eq(previousActiveSlide).css({ "background": "url(" + options.bulletThumbLocation + previousActiveSlideID + ".png) no-repeat" })
					//bullets.children('li').eq(previousActiveSlide).animate({ "opacity": 0 }, options.animationSpeed);

					bullets.children('li').eq(activeSlide).children(":last").animate({ "opacity": 0 }, 1000);
					bullets.children('li').eq(activeSlide).children(":first").animate({ "opacity": 1 }, 1000);
					bullets.children('li').eq(previousActiveSlide).children(":last").animate({ "opacity": 1 }, 1000);
					bullets.children('li').eq(previousActiveSlide).children(":first").animate({ "opacity": 0 }, 1000);
					//bullets.children('li').eq(activeSlide).children(":last").css({ "background": "url(" + options.bulletThumbLocation + previousActiveSlideID + "-active.png) no-repeat" })
					//.animate({ "opacity": 1 }, options.animationSpeed);
					//bullets.children('li').eq(previousActiveSlide).children(":first").css({ "background": "url(" + options.bulletThumbLocation + previousActiveSlideID + ".png) no-repeat" })
				}
			} /**/

			// ====================
			// ! SHIFT ANIMATIONS   
			// ====================

			//this varible gets set in the shift function below and gets used in the SetActiveBullet function. -zk-
			var previousActiveSlide;


			//Animating the shift!
			function shift(direction) {
				//remember previous activeSlide
				var prevActiveSlide = activeSlide;
				previousActiveSlide = prevActiveSlide;
				var slideDirection = direction;
				//exit function if bullet clicked is same as the current image
				if (prevActiveSlide == slideDirection) { return false; }
				//reset Z & Unlock
				function resetAndUnlock() {
					slides
                    	.eq(prevActiveSlide)
                    	.css({ "z-index": 1 });
					unlock();
					options.afterSlideChange.call(this);
				}
				if (slides.length == "1") { return false; }
				if (!locked) {
					lock();
					//deduce the proper activeImage
					if (direction == "next") {
						activeSlide++
						if (activeSlide == numberSlides) {
							activeSlide = 0;
						}
					} else if (direction == "prev") {
						activeSlide--
						if (activeSlide < 0) {
							activeSlide = numberSlides - 1;
						}
					} else {
						activeSlide = direction;
						if (prevActiveSlide < activeSlide) {
							slideDirection = "next";
						} else if (prevActiveSlide > activeSlide) {
							slideDirection = "prev"
						}
					}
					//set to correct bullet
					setActiveBullet();

					//set previous slide z-index to one below what new activeSlide will be
					slides
                    	.eq(prevActiveSlide)
                    	.css({ "z-index": 2 })
					//fade out prevActiveSlide
                        .animate({ "opacity": 0 }, options.animationSpeed, resetAndUnlock);

					//fade
					if (options.animation == "fade") {
						slides
                        	.eq(activeSlide)
                        	.css({ "opacity": 0, "z-index": 3 })
                        	.animate({ "opacity": 1 }, options.animationSpeed, resetAndUnlock);
					}
					//horizontal-slide
					if (options.animation == "horizontal-slide") {
						if (slideDirection == "next") {
							slides
                            	.eq(activeSlide)
                            	.css({ "left": orbitWidth, "z-index": 3 })
                            	.animate({ "left": 0 }, options.animationSpeed, resetAndUnlock);
						}
						if (slideDirection == "prev") {
							slides
                            	.eq(activeSlide)
                            	.css({ "left": -orbitWidth, "z-index": 3 })
                            	.animate({ "left": 0 }, options.animationSpeed, resetAndUnlock);
						}
					}
					//vertical-slide
					if (options.animation == "vertical-slide") {
						if (slideDirection == "prev") {
							slides
                            	.eq(activeSlide)
                            	.css({ "top": orbitHeight, "z-index": 3 })
                            	.animate({ "top": 0 }, options.animationSpeed, resetAndUnlock);
						}
						if (slideDirection == "next") {
							slides
                            	.eq(activeSlide)
                            	.css({ "top": -orbitHeight, "z-index": 3 })
                            	.animate({ "top": 0 }, options.animationSpeed, resetAndUnlock);
						}
					}
					//push-over
					if (options.animation == "horizontal-push") {
						if (slideDirection == "next") {
							slides
                            	.eq(activeSlide)
                            	.css({ "left": orbitWidth, "z-index": 3 })
                            	.animate({ "left": 0 }, options.animationSpeed, resetAndUnlock);
							slides
                            	.eq(prevActiveSlide)
                            	.animate({ "left": -orbitWidth }, options.animationSpeed);
						}
						if (slideDirection == "prev") {
							slides
                            	.eq(activeSlide)
                            	.css({ "left": -orbitWidth, "z-index": 3 })
                            	.animate({ "left": 0 }, options.animationSpeed, resetAndUnlock);
							slides
                            	.eq(prevActiveSlide)
                            	.animate({ "left": orbitWidth }, options.animationSpeed);
						}
					}
					setCaption();
				} //lock
				return function () {
					return prevActiveSlide;
				};
			} //orbit function
		}); //each call
	} //orbit plugin call

})(jQuery);
