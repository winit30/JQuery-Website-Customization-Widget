 var textColor;
 var headingColor;
 var bgColor;

jQuery(document).ready(function($) {

    var html;
    html += '<div class="jstool_settings_cont">';
    html += '<div class="jstool_setting_icon"></div>';
    html += '<div class="radio_btns">';
    html += '<span class="large">A</span>';
    html += '<input type="radio" name="reduct" class="enlarge_text"/>';
    html += '<span class="normal">A</span>';
    html += '<input type="radio" name="reduct" class="reset_text"/>';
    html += '<span class="small">A</span>';
    html += '<input type="radio" name="reduct" class="reduce_text"/>';
    html +='</div>';
    html += '<div class="jstool_widget_cont">';
    html += '<div class="jstool_top_bar">';
    html += '<div class="jstool_close_icon"></div>';
    html += '<div class="jstool_setting_btn"></div>';
    html += '</div>';
    html += '<div class="jstool_area_btns">';
    html += '<div class="change_background_round_cont">';
    html += '<div class="color_circle_1 top_color_circle" data-color="#000000"></div>';
    html += '<div class="color_circle_2 top_color_circle" data-color="#F50303"></div>';
    html += '<div class="color_circle_3 top_color_circle" data-color="#5B9AD3"></div>';
    html += '<div class="color_circle_4 top_color_circle" data-color="#FEC000"></div>';
    html += '</div>';
    html += 'ACCESSIBILITY SETTINGS';
    html += '</div>';
    html += '<div class="jstool_pirmary_cont"></div>';
    html += '<div class="jstool_main_cont">';
    html += '<div class="jstool_setting_btn_cont">';
    html += '<div class="jstool_btn_row jstool_heading">';
    html += '<div class="jstool_main_btn full_width single_btn jstool_heading_cont">TEXT SIZE</div>';
    html += '</div>';
    html += '<div class="jstool_btn_row">';
    html += '<div class="jstool_main_btn reduce_text">';
    html += '<span class="minus_icon accessibility_icon"></span>';
    html += '<div class="jstool_text_cont">Reduce text</div>';
    html += '</div>';
    html += '<div class="jstool_main_btn reset_text">';
    html += '<span class="reset_icon accessibility_icon"></span>';
    html += '<div class="jstool_text_cont">Reset text</div>';
    html += '</div>';
    html += '<div class="jstool_main_btn enlarge_text">';
    html += '<span class="plus_icon accessibility_icon"></span>';
    html += '<div class="jstool_text_cont">Enlarge text</div>';
    html += '</div>';
    html += '</div>';
    html += '<div class="jstool_btn_row jstool_heading">';
    html += '<div class="jstool_main_btn full_width single_btn jstool_heading_cont">CONTRAST AND COLOR SETTINGS</div>';
    html += '</div>';
    html += '<div class="jstool_btn_row">';
    html += '<div class="color_close"><i class="fa fa-close"></i></div>';
    html += '<div class="jstool_main_btn heading_colors"> ';
    html += '<span class="heading_color_icon accessibility_icon"></span>';
    html += '<div class="jstool_text_cont">Heading colors</div> ';
    html += '<div class="jstool_colors_cont">';
    html += '<div class="color_0" data-color="rgb(0, 0, 0)" ></div>';
    html += '<div class="color_1" data-color="rgb(136, 136, 136)" ></div>';
    html += '<div class="color_2" data-color="rgb(187, 187, 187)"></div>';
    html += '<div class="color_3" data-color="rgb(255, 0, 0)"></div>';
    html += '<div class="color_4" data-color="rgb(255, 106, 0)"></div>';
    html += '<div class="color_5" data-color="rgb(255, 216, 0)"></div>';
    html += '<div class="color_6" data-color="rgb(0, 255, 33)"></div>';
    html += '<div class="color_7" data-color="rgb(0, 255, 255)"></div>';
    html += '<div class="color_8" data-color="rgb(0, 38, 255)"></div>';
    html += '<div class="color_9" data-color="rgb(178, 0, 255)"></div>';
    html += '<div class="color_10" data-color="rgb(255, 0, 220)"></div>';
    html += '<div class="color_11" data-color="rgb(255, 255, 255)"></div>';
    html += '</div>';
    html += '</div>';
    html += '<div class="jstool_main_btn text_colors">';
    html += '<span class="text_color_icon accessibility_icon"></span>';
    html += '<div class="jstool_text_cont">Text colors</div>';
    html += '<div class="jstool_colors_cont">';
    html += '<div class="color_0" data-color="rgb(0, 0, 0)" ></div>';
    html += '<div class="color_1" data-color="rgb(136, 136, 136)" ></div>';
    html += '<div class="color_2" data-color="rgb(187, 187, 187)"></div>';
    html += '<div class="color_3" data-color="rgb(255, 0, 0)"></div>';
    html += '<div class="color_4" data-color="rgb(255, 106, 0)"></div>';
    html += '<div class="color_5" data-color="rgb(255, 216, 0)"></div>';
    html += '<div class="color_6" data-color="rgb(0, 255, 33)"></div>';
    html += '<div class="color_7" data-color="rgb(0, 255, 255)"></div>';
    html += '<div class="color_8" data-color="rgb(0, 38, 255)"></div>';
    html += '<div class="color_9" data-color="rgb(178, 0, 255)"></div>';
    html += '<div class="color_10" data-color="rgb(255, 0, 220)"></div>';
    html += '<div class="color_11" data-color="rgb(255, 255, 255)"></div>';
    html += '</div>';
    html += '</div>';
    html += '<div class="jstool_main_btn bg_colors"> ';
    html += '<span class="bg_color_icon accessibility_icon"></span>';
    html += '<div class="jstool_text_cont">Bg colors</div>';
    html += '<div class="jstool_colors_cont">';
    html += '<div class="color_0" data-color="rgb(0, 0, 0)" ></div>';
    html += '<div class="color_1" data-color="rgb(136, 136, 136)" ></div>';
    html += '<div class="color_2" data-color="rgb(187, 187, 187)"></div>';
    html += '<div class="color_3" data-color="rgb(255, 0, 0)"></div>';
    html += '<div class="color_4" data-color="rgb(255, 106, 0)"></div>';
    html += '<div class="color_5" data-color="rgb(255, 216, 0)"></div>';
    html += '<div class="color_6" data-color="rgb(0, 255, 33)"></div>';
    html += '<div class="color_7" data-color="rgb(0, 255, 255)"></div>';
    html += '<div class="color_8" data-color="rgb(0, 38, 255)"></div>';
    html += '<div class="color_9" data-color="rgb(178, 0, 255)"></div>';
    html += '<div class="color_10" data-color="rgb(255, 0, 220)"></div>';
    html += '<div class="color_11" data-color="rgb(255, 255, 255)"></div>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    html += '<div class="jstool_btn_row">';
    html += '<div class="jstool_main_btn bright_color">';
    html += '<span class="bright_icon accessibility_icon"></span>';
    html += '<div class="jstool_text_cont">Bright colors</div>';
    html += '</div>';
    html += '<div class="jstool_main_btn dark_color"> ';
    html += '<span class="dark_icon accessibility_icon"></span>';
    html += '<div class="jstool_text_cont">Dark colors</div>';
    html += '</div>';
    html += '<div class="jstool_main_btn reset_color">';
    html += '<span class="reset_icon accessibility_icon"></span>';
    html += '<div class="jstool_text_cont">Original colors</div>';
    html += '</div>';
    html += '</div>';
    html += '<div class="jstool_btn_row">';
    html += '<div class="jstool_main_btn black_cursor">';
    html += '<span class="black_cursor_img accessibility_icon"></span> ';
    html += '<div class="jstool_text_cont">Black cursor</div> ';
    html += '</div>';
    html += '<div class="jstool_main_btn large_cursor">';
    html += '<span class="large_cursor_img accessibility_icon"></span>';
    html += '<div class="jstool_text_cont">White cursor</div>';
    html += '</div>';
    html += '<div class="jstool_main_btn normal_cursor">';
    html += '<span class="reset_icon accessibility_icon"></span>';
    html += '<div class="jstool_text_cont">Reset cursor</div>';
    html += '</div>';
    html += '</div>';
    html += '<div class="jstool_btn_row jstool_heading">';
    html += '<div class="jstool_main_btn full_width single_btn jstool_heading_cont">GENERAL SETTINGS</div>';
    html += '</div>';
    html += '<div class="jstool_btn_row half_width">';
    html += '<div class="jstool_main_btn full_width single_btn hilight_jaquh"><span class="highlight_text_icon accessibility_icon"></span><div>Highlight Text</div></div>';
    html += '</div>';
    html += '<div class="jstool_btn_row half_width left_border">';
    html += '<div class="jstool_main_btn full_width single_btn font_arial"><span class="simple_font_icon accessibility_icon"></span><div>Simple Fonts</div></div>';
    html += '</div>';
    html += '<div class="jstool_btn_row half_width">';
    html += '<div class="jstool_main_btn full_width single_btn magnifying_glass"><span class="magnify_text_icon accessibility_icon"></span><div>Magnify text</div></div>';
    html += '</div>';
    html += '<div class="jstool_btn_row half_width left_border">';
    html += '<div class="jstool_main_btn full_width single_btn right_click_enable"><span class="accessibility_menu_icon accessibility_icon"></span><div>Accessibility Menu</div></div>';
    html += '</div>';
    html += '<div class="jstool_btn_row half_width">';
    html += '<div class="jstool_main_btn full_width single_btn reset_settings"><span class="reset_icon accessibility_icon"></span><div>Reset Settings</div></div>';
    html += '</div>';
    html += '<div class="jstool_btn_row half_width left_border">';
    html += '<div class="jstool_main_btn full_width single_btn  add_favourites"><span class="save_favorites_icon accessibility_icon"></span><div>Save to favorites</div></div>';
    html += '</div>';
    html += '<div class="jstool_btn_row">';
    html += '<div class="jstool_main_btn full_width single_btn info_ddown">select widget language [dropdown]<span class="info_icon accessibility_icon"></span>';
    html +='</div>';
    html += '<ul class="drop_down_menu">';
    html += '<li>English</li>';
    html += '<li>Hindi</li>';
    html +='</ul>';
    html += '</div>';
    html += '</div>';
    html += '<div class="jstool_info_icon_cont"></div>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    html += '<div class="right_click_menu">';
    html += '<div class="right_click_row">';
    html += '<div class="right_click_cell window_forword">';
    html += '<i class="fa fa-arrow-right"></i>';
    html += '</div>';
    html += '<div class="right_click_cell window_reload">';
    html += '<i class="fa fa-refresh"></i>';
    html += '</div>';
    html += '<div class="right_click_cell window_backword">';
    html += '<i class="fa fa-arrow-left"></i>';
    html += '</div>  ';
    html += '</div>';
    html += '<div class="right_click_row">';
    html += '<div class="right_click_cell jstool_copy_text">';
    html += '<i class="fa fa-copy"></i>';
    html += '</div>';
    html += '<div class="right_click_cell jstool_cut_text">';
    html += '<i class="fa fa-cut"></i>';
    html += '</div>';
    html += '<div class="right_click_cell jstool_paste_text">';
    html += '<i class="fa fa-paste"></i>';
    html += '</div>   ';
    html += '</div>';
    html += '<div class="right_click_row">';
    html += '<div class="right_click_cell dark_color">';
    html += '<i class="fa fa-circle"></i>';
    html += '</div>';
    html += '<div class="right_click_cell reset_color">';
    html += '<i class="fa fa-repeat"></i>';
    html += '</div>';
    html += '<div class="right_click_cell bright_color">';
    html += '<i class="fa fa-circle-o"></i>';
    html += '</div> ';
    html += '</div>';
    html += '<div class="right_click_row">';
    html += '<div class="right_click_cell reduce_text">';
    html += '<i class="fa fa-minus"></i> ';
    html += '</div>';
    html += '<div class="right_click_cell reset_text">';
    html += '<i class="fa fa-repeat"></i>';
    html += '</div>';
    html += '<div class="right_click_cell enlarge_text">';
    html += '<i class="fa fa-plus"></i> ';
    html += '</div> ';
    html += '</div>';
    html += '<div class="right_click_row">';
    html += '<div class="right_click_cell magnifying_glass">';
    html += '<i class="fa fa-search-plus"></i> ';
    html += '</div>';
    html += '<div class="right_click_cell add_favourites">';
    html += '<i class="fa fa-star"></i>';
    html += '</div>';
    html += '<div class="right_click_cell hilight_jaquh">';
    html += '<i class="fa fa-link"></i> ';
    html += '</div> ';
    html += '</div>';
    html += '<div class="right_click_row">';
    html += '<div class="right_click_cell font_arial">';
    html += '<i class="fa fa-font"></i> ';
    html += '</div>';
    html += '<div class="right_click_cell right_click_enable">';
    html += '<i class="fa fa-mouse-pointer"></i>';
    html += '</div>';
    html += '<div class="right_click_cell">';
    html += '<i class="fa fa-book"></i> ';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    html += '<div class="jstool_tooltip"></div>';

    $('body').after(html);

	$(document).on('click','.change_background_round_cont .top_color_circle' , function(){
		var black = $(this).hasClass('color_circle_1');
		var red = $(this).hasClass('color_circle_2');
		var blue = $(this).hasClass('color_circle_3');
		var yellow = $(this).hasClass('color_circle_4');

		$('.jstool_settings_cont').removeClass('black_background red_background blue_background yellow_background');

		if(black) {
			$('.jstool_settings_cont').addClass('black_background');
			localStorage.setItem('jToolBgColor', 'black_background');
		}
		if(red) {
			$('.jstool_settings_cont').addClass('red_background');
			localStorage.setItem('jToolBgColor', 'red_background');
		}
		if(blue) {
			$('.jstool_settings_cont').addClass('blue_background');
			localStorage.setItem('jToolBgColor', 'blue_background');
		}
		if(yellow) {
			$('.jstool_settings_cont').addClass('yellow_background');
			localStorage.setItem('jToolBgColor', 'yellow_background');
		}

    });

	$(document).on('click','.jstool_main_btn.info_ddown', function(){
	    	$(this).closest('.jstool_btn_row').find('.drop_down_menu').stop().slideToggle();
	});


    // bring and show the toolbox outside
    $(document).on('click', '.jstool_settings_cont .jstool_setting_icon', function() {
        $(this).addClass('jstool_active');
        $('.jstool_widget_cont').show();
        $('.jstool_widget_cont').animate({
            'right': '20px'
        });
    });

    // slideout and hide the toolbox outside
    $(document).on('click', '.jstool_top_bar .jstool_close_icon', function() {
        $(this).removeClass('jstool_active');
        $('.jstool_widget_cont').animate({
            'right': '-353px'
        });
    });

    //reduce fontsize
    $(document).on('click', '.reduce_text', function() {
        localStorage.setItem('reduceText', 'jstool_active');
        localStorage.removeItem('enlargeText');
        $('.enlarge_text').removeClass('jstool_active');
        if ($(this).hasClass('jstool_active')) {
            return false;
        } else {
            $('.reduce_text').addClass('jstool_active');
        }

		$('.radio_btns').find('input.reduce_text').prop( "checked", true );

        resetFont();
        $('body, .site-inner').find('h1, h2, h3, h4, h5, p, a, div, label, span').each(function() {
            var fontSize = $(this).css('font-size');
            fontSize = parseInt(fontSize);
            if (fontSize > 10) {
                $(this).css('font-size', (fontSize - 2) + 'px');
            }
        });
    });

    // reset fontSize
    $(document).on('click', '.reset_text', function() {
		$('.radio_btns').find('input.reset_text').prop( "checked", true );
        localStorage.removeItem('reduceText');
        localStorage.removeItem('enlargeText');
        $('.reduce_text').removeClass('jstool_active');
        $('.enlarge_text').removeClass('jstool_active');
        resetFont();
    });

    //Enlarge fontsize
    $(document).on('click', '.enlarge_text', function() {
        localStorage.setItem('enlargeText', 'jstool_active');
        localStorage.removeItem('reduceText');
        $('.reduce_text').removeClass('jstool_active');
        if ($(this).hasClass('jstool_active')) {
            return false;
        } else {
            $('.enlarge_text').addClass('jstool_active');
        }
		$('.radio_btns').find('input.enlarge_text').prop( "checked", true );
        resetFont();
        $('body, .site-inner').find('h1, h2, h3, h4, h5, p, a, div, label, span, *').each(function() {
            var fontSize = $(this).css('font-size');
            fontSize = parseInt(fontSize);
            if (fontSize > 10) {
                $(this).css('font-size', (fontSize + 2) + 'px');
            }
        });
    });


    // dark background
    $(document).on('click', ' .dark_color', function() {
        localStorage.setItem('darkColor', 'jstool_active');
        localStorage.removeItem('brightColor');
		 $('.dark_color').addClass('jstool_active');
		 $('.bright_color').removeClass('jstool_active');
        $('body, .site').css('background-color', '#333');
        $('body,.site-inner').find('h1, h2, h3, h4, h5, p, div, span').each(function() {
            $(this).css('color', '#fff');
        });
        $('body,.site-inner').find('*').css('border-color', '#cecece')
        $('body,.site-inner').find('a').each(function() {
            $(this).css('color', 'yellow');
        });
    });

    //reset background
    $(document).on('click', '.reset_color', function() {
        localStorage.removeItem('darkColor');
        localStorage.removeItem('brightColor');
        localStorage.removeItem('textColors');
        localStorage.removeItem('headingColors');
        localStorage.removeItem('bgColors');
		 $('.dark_color').removeClass('jstool_active');
		 $('.bright_color').removeClass('jstool_active');
        $('body, .site').css('background-color', '');
        $('body, .site-inner').find('h1, h2, h3, h4, h5, p, a, div, label, span').each(function() {
            $(this).css('color', '');
            $('body, .site-inner').find('*').css('border-color', '')
        });
    });

    //bright color background
    $(document).on('click', '.bright_color', function() {
        localStorage.setItem('brightColor', 'jstool_active');
        localStorage.removeItem('darkColor');
		$('.bright_color').addClass('jstool_active');
		$('.dark_color').removeClass('jstool_active');
        $('body, .site').css('background-color', '#fff');
        $('body, .site-inner').find('h1, h2, h3, h4, h5, p, a, div, label, span').each(function() {
            $(this).css('color', '#cecece');
            $('.site-inner').find('*').css('border-color', '')
        });
    });

    //reset font
    function resetFont() {
        $('body, .site-inner').find('h1, h2, h3, h4, h5, p, a, div, label, span').each(function() {
            var fontSize = $(this).css('font-size');
            fontSize = parseInt(fontSize);
            $(this).css('font-size', '');
        });
    }

    //open color toolbox
    $(document).on('click', '.jstool_btn_row .text_colors, .jstool_btn_row .heading_colors, .jstool_btn_row .bg_colors', function() {
        $(this).find('.jstool_colors_cont').slideDown();
        $('.color_close').show();
    });

    //close color toolbox
    $(document).on('click', '.color_close', function() {
        $('.jstool_colors_cont').slideUp();
        $(this).hide();
        return false;
    });

    //choose color from toolbox

    $(document).on('click', '.jstool_colors_cont div', function() {
        var textColors = $(this).closest('.jstool_main_btn').hasClass('text_colors');
        var headingColors = $(this).closest('.jstool_main_btn').hasClass('heading_colors');
        var bgColors = $(this).closest('.jstool_main_btn').hasClass('bg_colors');

        if (textColors) {
            textColor = $(this).attr('data-color');
            $('body, .site-inner').find('p, span, label').css('color', textColor);
            localStorage.setItem('textColors', textColor);
        }
		if (headingColors) {
            headingColor = $(this).attr('data-color');
            $('body, .site-inner').find('h1,h2,h3,h4,h5,h6, a').css('color', headingColor);
            localStorage.setItem('headingColors', headingColor);
        }

		if (bgColors){
            bgColor = $(this).attr('data-color');
            $('body, .site').css('background-color', bgColor);
            localStorage.setItem('bgColors', bgColor);
        }
    });

    //underline anchor tags
    $(document).on('click', '.hilight_jaquh', function() {
        $('body').toggleClass('anchor_underline');
		$('.hilight_jaquh').toggleClass('jstool_active');
        if ($('body').hasClass('anchor_underline')) {
            localStorage.setItem('anchorUnderline', 'anchor_underline');
        } else {
            localStorage.removeItem('anchorUnderline');
        }
    });

    //change fonts to arial
    $(document).on('click', '.font_arial', function() {
        $('*').toggleClass('arial_font_active');
		$('.font_arial').toggleClass('jstool_active');
        if ($('body').hasClass('arial_font_active')) {
            localStorage.setItem('arialActive', 'arial_font_active');
        } else {
            localStorage.removeItem('arialActive');
        }
    });

    //Accessibility Menu om Right click mouse
    var rightClickActive = false;
    var currentMousePos = {
        x: -1,
        y: -1
    };
    $(document).on('click', '.right_click_enable', function() {
        if (rightClickActive) {
			$('.right_click_enable').removeClass('jstool_active');
            rightClickActive = false;
            localStorage.removeItem('rightClick');
        } else {
			$('.right_click_enable').addClass('jstool_active');
            rightClickActive = true;
            localStorage.setItem('rightClick', 'jstool_active');
        }
    });

    $(document).contextmenu(function(event) {
        if (rightClickActive) {
            $('.right_click_menu').hide();
            currentMousePos.x = event.pageX;
            currentMousePos.y = event.pageY;
            event.preventDefault();
            $('.right_click_menu').css({
                'left': currentMousePos.x + 'px',
                'top': currentMousePos.y + 'px'
            });
            $('.right_click_menu').show('fast');
        }
    });

    $(document).on('click', function() {
        $('.right_click_menu').hide('fast');

    });

    //window forword
    $(document).on('click', '.window_forword', function() {
        window.history.forward();
    });

    //window backword
    $(document).on('click', '.window_backword', function() {
        window.history.back();
    });

    //window reload
    $(document).on('click', '.window_reload', function() {
        location.reload();
    });

    //copy
    $(document).on('click', '.jstool_copy_text', function(e) {
        alert('use ctrl+c');
    });

    //cut
    $(document).on('click', '.jstool_cut_text', function(e) {
        alert('use ctrl+x');
    });

    //paste
    $(document).on('click', '.jstool_paste_text', function(e) {
        alert('use ctrl+v');
    });

    //Add to favorites
    $(document).on('click', '.add_favourites', function() {
        if (window.sidebar && window.sidebar.addPanel) { // Mozilla Firefox Bookmark
            window.sidebar.addPanel(document.title, window.location.href, '');
        } else if (window.external && ('AddFavorite' in window.external)) { // IE Favorite
            window.external.AddFavorite(location.href, document.title);
        } else if (window.opera && window.print) { // Opera Hotlist
            this.title = document.title;
            return true;
        } else { // webkit - safari/chrome
            alert('Press ' + (navigator.userAgent.toLowerCase().indexOf('mac') != -1 ? 'Command/Cmd' : 'CTRL') + ' + D to bookmark this page.');
        }
    });

    //magnifying glass
    var magnifyingGlassActive = false;
    $(document).on('click', '.magnifying_glass', function() {
        if (magnifyingGlassActive) {
			$('.magnifying_glass').removeClass('jstool_active');
            magnifyingGlassActive = false;
            localStorage.removeItem('magnifyingGlass');
        } else {
			$('.magnifying_glass').addClass('jstool_active');
            magnifyingGlassActive = true;
            localStorage.setItem('magnifyingGlass', 'jstool_active');
        }
    });

    $('h1,h2, h3, h4, h5, h6, a').stop().on('mouseenter', function(event) {
        if (!magnifyingGlassActive) {
            return false;
        }
        var content = $(this).text();
        $('.jstool_tooltip').html(content);
        $('.jstool_tooltip').show();
    });

    $('h1,h2, h3, h4, h5, h6, a').stop().on('mouseleave', function(event) {
        if (!magnifyingGlassActive) {
            return false;
        }
        $('.jstool_tooltip').hide();
    });

    $('h1,h2, h3, h4, h5, h6, a').stop().on('mousemove', function(event) {
        if (!magnifyingGlassActive) {
            return false;
        }
        currentMousePos.x = event.pageX;
        currentMousePos.y = event.pageY;
        $('.jstool_tooltip').css({
            'left': (currentMousePos.x - (parseInt($('.jstool_tooltip').width()) / 2)) + 'px',
            'top': (currentMousePos.y + 25) + 'px'
        });
    });

    //Black cursor
    $(document).on('click', '.black_cursor', function() {
		$(this).addClass('jstool_active');
		$('.large_cursor').removeClass('jstool_active');
        localStorage.removeItem('largeCursor');
        localStorage.setItem('blackCursor', 'jstool_active');
        $('body').toggleClass('black_cursor_active');
        $('body').removeClass('large_cursor_active');
    });

    //large cursor
    $(document).on('click', '.large_cursor', function() {
	    $(this).addClass('jstool_active');
		$('.black_cursor').removeClass('jstool_active');
        localStorage.removeItem('blackCursor');
        localStorage.setItem('largeCursor', 'jstool_active');
        $('body').toggleClass('large_cursor_active');
        $('body').removeClass('black_cursor_active');
    });

    //normal cursor
    $(document).on('click', '.normal_cursor', function() {
		$('.black_cursor').removeClass('jstool_active');
		$('.large_cursor').removeClass('jstool_active');
        localStorage.removeItem('largeCursor');
        localStorage.removeItem('blackCursor');
        $('body').removeClass('large_cursor_active');
        $('body').removeClass('black_cursor_active');
    });

    //Reset all Settings
    $(document).on('click', '.reset_settings', function() {
        localStorage.clear();
        $('.reset_text').click();
        $('.normal_cursor').click();
        $('.reset_color').click();
        $('body').removeClass('anchor_underline');
        $('*').removeClass('arial_font_active');
        rightClickActive = false;
        magnifyingGlassActive = false;
		$('*').removeClass('jstool_active');
		$('body, .site-inner').css('background-color','');
		$('.jstool_settings_cont').removeClass('black_background red_background blue_background yellow_background');
    });

    //localstorage script starts here
    if (localStorage.getItem('reduceText')) {
        $('.reduce_text').click();
    }

    if (localStorage.getItem('enlargeText')) {
        $('.enlarge_text').click();
    }

    if (localStorage.getItem('darkColor')) {
        $('.dark_color').click();
    }

    if (localStorage.getItem('brightColor')) {
        $('.bright_color').click();
    }

    if (localStorage.getItem('textColors')) {
        var color = localStorage.getItem('textColors');
        $('body, .site-inner').find('p, span, label').css('color', color);
    }

    if (localStorage.getItem('headingColors')) {
        var color = localStorage.getItem('headingColors');
        $('body, .site-inner').find('h1,h2,h3,h4,h5,h6, a').css('color', color);
    }

    if (localStorage.getItem('bgColors')) {
        var color = localStorage.getItem('bgColors');
        $('body, .site').css('background-color', color);
    }

    if (localStorage.getItem('anchorUnderline')) {
        $('body').addClass(localStorage.getItem('anchorUnderline'));
		$('.hilight_jaquh').addClass('jstool_active');
    }

    if (localStorage.getItem('arialActive')) {
        $('*').addClass(localStorage.getItem('arialActive'));
		$('.font_arial').addClass('jstool_active');
    }

    if (localStorage.getItem('rightClick')) {
        rightClickActive = true;
		$('.right_click_enable').addClass('jstool_active');
    }

	if (localStorage.getItem('magnifyingGlass')) {
        magnifyingGlassActive = true;
		$('.magnifying_glass').addClass('jstool_active');
    }

    if (localStorage.getItem('blackCursor')) {
        $('body').addClass('black_cursor_active');
		$('.black_cursor').addClass('jstool_active');
    }

    if (localStorage.getItem('largeCursor')) {
        $('body').addClass('large_cursor_active');
		$('.large_cursor').addClass('jstool_active');
    }

    if(localStorage.getItem('bgColor')) {
     $('body, #page').css('background-color',localStorage.getItem('bgColor'));
    }

	if(localStorage.getItem('jToolBgColor')) {
		var colorClass = localStorage.getItem('jToolBgColor');
		if(colorClass == 'black_background') {
			$('.jstool_settings_cont').addClass('black_background');
		} else if(colorClass == 'red_background') {
		    $('.jstool_settings_cont').addClass('red_background');
		} else if(colorClass == 'blue_background') {
			$('.jstool_settings_cont').addClass('blue_background');
		} else if(colorClass == 'yellow_background') {
			$('.jstool_settings_cont').addClass('yellow_background');
		}
  }

});
