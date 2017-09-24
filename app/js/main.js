$(document).ready(function(){


    var burger = document.getElementsByClassName('burger')[0];
    var main_dropdown_nav = document.getElementsByClassName('main_dropdown_nav')[0];
    var height_mob_nav = document.querySelectorAll('.main_dropdown_nav .wrapper')[0].offsetHeight;
    var questions = document.querySelectorAll('.drop_down');
    var checkInput = document.querySelectorAll('.checkInput');

    var list_block_products = document.querySelectorAll('.list_block_products')[0];
    var all_product_preview = document.querySelectorAll('.list_block_products .product_preview');
    var catalog_list = document.querySelectorAll('.list_block_products .catalog_list')[0];
    var table = document.querySelectorAll('.chart_content table')[0];
    // var scroll_table_block = document.querySelectorAll('.chart_content')[0];
    var tableName = document.querySelectorAll('.chart_name table tr');
    var tdName = document.querySelectorAll('.chart_name tr');
    var all_td = document.querySelectorAll('.chart_content table td');
    var all_tr = document.querySelectorAll('.chart_content table tr');
    var compBtn = document.getElementById('comp');
    var compAll = document.querySelectorAll('.comparison');



    // console.log(table);
    // console.log(scroll_table_block);


    // function bannerDotsLeft() {
    //     var banner = document.querySelectorAll('.banner_main');
    //     if(banner.length>0){
    //         var dots = document.querySelectorAll('.banner_main .slick-dots');
    //         var wrapper = document.querySelectorAll('.wrapper')[0].clientWidth;
    //         var windowWidth = window.innerWidth;
    //         dots[0].style.left =  (windowWidth - wrapper)/2 + 100 + 'px';
    //     }
    // }
    function addClass(o, c){
        var re = new RegExp("(^|\\s)" + c + "(\\s|$)", "g");
        if (re.test(o.className)) return;
        o.className = (o.className + " " + c).replace(/\s+/g, " ").replace(/(^ | $)/g, "")
    }
    function removeClass(o, c){
        var re = new RegExp("(^|\\s)" + c + "(\\s|$)", "g");
        o.className = o.className.replace(re, "$1").replace(/\s+/g, " ").replace(/(^ | $)/g, "")
    }
    function toogleOpenClass(elem) {
        var elemClass = elem.className;
        if(elemClass.indexOf('open')>0){
            removeClass(elem,'open');
            addClass(elem,'close');
        }else{
            addClass(elem,'open');
            removeClass(elem,'close');
        }
    }
    function addHeightDropDownNav(elem) {
        var elemClass = elem.className;
        if(elemClass.indexOf('open')>0){
            elem.style.height = height_mob_nav + 'px';
            setTimeout(function () {
                main_dropdown_nav.style.height = 'auto'
            },400);
        }else{
            elem.style.height = 0 + 'px'
        }

    }
    function showAnswer(elem) {
        addClass(elem.parentElement, 'active');
        elem.nextElementSibling.style.height = elem.nextElementSibling.getElementsByTagName('p')[0].offsetHeight + 'px';
    }
    function checkInputFunc(elem) {
        if(elem.value == ''){
            removeClass(elem,'full');
        }else{
            addClass(elem,'full');
        }
    }
    function trHover(index_elem,event) {
        if('mouseover' == event.type){
            addClass(tableName[index_elem],'hover');
            addClass(all_tr[index_elem],'hover');
        }else{
            removeClass(tableName[index_elem],'hover');
            removeClass(all_tr[index_elem],'hover');
        }
    }
    function addEventHover(array) {
        array.forEach(function (item,index,array) {
            item.addEventListener('mouseover', function (event) {
                trHover(index,event);
            });
            item.addEventListener('mouseout', function (event) {
                trHover(index,event);
            });
        });
    }

    if($('.banner_main').length>0){
        $('.banner_main').slick({
            dots: false,
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev"></button>',
            nextArrow: '<button type="button" class="slick-next"></button>',
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            autoplay: true
        });
    }
    if($('.list_feedback').length>0){
        $('.list_feedback').slick({
            dots: false,
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev"></button>',
            nextArrow: '<button type="button" class="slick-next"></button>',
            infinite: true,
            speed: 500,
            fade: false,
            cssEase: 'linear',
            autoplay: true
        });
    }
    if($('.photo_obj_carousel').length>0){
        $('.photo_obj_carousel').slick({
            dots: false,
            infinite: true,
            speed: 500,
            cssEase: 'linear',
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev"></button>',
            nextArrow: '<button type="button" class="slick-next"></button>',
            autoplay: true
        });
    }
    if($('.photo_gallery').length>0){
        $('.photo_gallery').slick({
            dots: false,
            infinite: false,
            speed: 500,
            cssEase: 'linear',
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev"></button>',
            nextArrow: '<button type="button" class="slick-next"></button>',
            // autoplay: true,
            asNavFor: '.thumbs-to-photo_gallery'
        });
    }
    if($('.thumbs-to-photo_gallery').length>0){
        $('.thumbs-to-photo_gallery').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.photo_gallery',
            dots: false,
            infinite: false,
            speed: 500,
            // cssEase: 'linear',
            arrows: false,
            // autoplay: true,
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 740,
                    settings: {
                        slidesToShow: 2
                    }
                }
            ]
        });
    }
    if($('.list_sert').length>0){
        $('.list_sert').slick({
            dots: false,
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev"></button>',
            nextArrow: '<button type="button" class="slick-next"></button>',
            infinite: false,
            speed: 500,
            cssEase: 'linear',
            autoplay: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 960,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 740,
                    settings: {
                        slidesToShow: 2
                    }
                }
            ]
        });
    }
    if($('.fancybox').length>0){
        $(".fancybox").fancybox({
            prevEffect	: 'none',
            nextEffect	: 'none'
            // helpers	: {
            //     title	: {
            //         type: 'outside'
            //     },
            //     thumbs	: {
            //         width	: 150,
            //         height	: 150
            //     }
            // }
        });
    }
    if($(".various").length>0){
        $(".various").fancybox({
            maxWidth	: 800,
            maxHeight	: 600,
            fitToView	: false,
            width		: '70%',
            height		: '70%',
            autoSize	: false,
            closeClick	: false,
            openEffect	: 'none',
            closeEffect	: 'none'
        });
    }
    // bannerDotsLeft();
    if(checkInput.length>0){
        checkInput.forEach(function (item,index,array) {
            item.addEventListener('blur',function () {
                checkInputFunc(item);
            });
        });
    }
    if(tdName.length>0){
        addEventHover(all_tr);
        addEventHover(tdName);
    }
    questions.forEach(function (item, index, array) {
        item.addEventListener('click',function () {
            array.forEach(function (item, index, array) {
                removeClass(item.parentElement,'active');
                item.nextElementSibling.style.height = 0;
            });
            showAnswer(item);
        });
    });
    burger.addEventListener('click', function () {
        toogleOpenClass(burger);
        toogleOpenClass(main_dropdown_nav);
        addHeightDropDownNav(main_dropdown_nav);
    });
    if(compBtn){
        compBtn.addEventListener('click', function () {
            if(compAll[0].className.indexOf('active')>0){
                removeClass(compAll[0],'active');
            }else{
                addClass(compAll[0],'active');
            }
        });
    }


    // window.addEventListener('resize',bannerDotsLeft);

    // if(document.querySelectorAll('.banner_main').length>0){
    //     bannerDotsLeft();
    // }

    // растановка блоков на страници сравнения
    if(document.querySelectorAll('.list_block_products .catalog_list').length>0){
        if(window.innerWidth>960){
            catalog_list.style.width = (list_block_products.offsetWidth / 3) * all_product_preview.length + 10 + 'px';
        }else if(window.innerWidth<960){
            catalog_list.style.width = (list_block_products.offsetWidth / 2) * all_product_preview.length + 10 + 'px';
        }

    }

    if(document.querySelectorAll('.chart_content table').length>0){
        if(window.innerWidth>960){
            table.style.width = (list_block_products.offsetWidth/3)*all_product_preview.length + 10 + 'px';
        }else if(window.innerWidth<960){
            table.style.width = (list_block_products.offsetWidth/2)*all_product_preview.length + 10 + 'px';
        }

    }

    all_td.forEach(function (item,index,array) {
        item.style.width = table.offsetWidth/all_product_preview.length + 'px'
    });

    // if(document.querySelectorAll('.chart_content').length>0){
    //     scroll_table_block.addEventListener('scroll',function () {
    //         catalog_list.style.transform = 'translateX(-'+scroll_table_block.scrollLeft+'px)';
    //     })
    // }
    // if(document.querySelectorAll('.catalog_list').length>0){
    //     list_block_products.addEventListener('scroll',function () {
    //         table.style.transform = 'translateX(-'+list_block_products.scrollLeft+'px)';
    //     })
    // }


    $('.dropdown_menu_level2 h5 button,.dropdown_menu_level3 h5 button').on({
        click:function () {
            var this_ = $(this);
            this_.parent().next('ul').slideToggle();
        }
    });


    var width_give_feedback_wrapper = $('.give-feedback-wrapper').width();
    var give_feedback_modal = $('.give-feedback-modal');
    var width_give_feedback_modal = give_feedback_modal.width();


    //give scroll value
    var list_block_products_object = $('.list_block_products');
    var chart_content_object = $('.chart_comparison .chart_content');


    if(list_block_products_object){
        list_block_products_object.scroll(function (event){
            chart_content_object.scrollLeft(list_block_products_object.scrollLeft());
        });
    }

    if(chart_content_object){
        chart_content_object.scroll(function (event){
            list_block_products_object.scrollLeft(chart_content_object.scrollLeft());
        });
    }
    //give scroll value end



    // full window height overlay-page element
    var height_window = document.documentElement.offsetHeight;
    var overlay_page = document.querySelectorAll('.overlay-page');

    if(overlay_page){
        overlay_page.height = height_window + 'px';
    }
    // full window height overlay-page element end


    //open feedback popup form
    $('.give-feedback-btn, .overlay-page, .close-feedback-btn').click(function(){
        $('.overlay-page').toggleClass('open-overlay-page');
        $('.give-feedback-modal').toggleClass('open-feedback-modal');
    });
    //open feedback popup form end

    //left (position: absolute) feedback popup form
    give_feedback_modal.css({
        left: (width_give_feedback_wrapper / 2) - (width_give_feedback_modal / 2) + 'px'
    });
    //left (position: absolute) feedback popup form end


    //form
    $('.request_form .row').each(function() {
        var input = $(this).find('input');
        var label = $(this).find('label');
        var textarea = $(this).find('textarea');

        input.on({
            focus: function() {
                label.addClass('label-focus');
                return false;
            },
            blur: function () {
                var elem_val = $(this).val();
                if(elem_val && /^\s*$/.test(elem_val) !== true){
                    label.addClass('label-focus');
                    return false;
                } else {
                    label.removeClass('label-focus');
                    return false;
                }
            }
        });

        textarea.on({
            focus: function() {
                label.addClass('label-focus');
                return false;
            },
            blur: function () {
                var elem_val = $(this).val();
                if(elem_val && /^\s*$/.test(elem_val) !== true){
                    label.addClass('label-focus');
                    return false;
                } else {
                    label.removeClass('label-focus');
                    return false;
                }
            }
        });

    });
    //form end

    //tabs
    var tab1 = $('.tabs-section .tabs-switch .tab1');
    var tab2 = $('.tabs-section .tabs-switch .tab2');
    var tab3 = $('.tabs-section .tabs-switch .tab3');

    var breaking_camera_form = $('.tabs-section .breaking_camera_form');
    var breaking_dvr_form = $('.tabs-section .breaking_dvr_form');
    var general_question_form = $('.tabs-section .general_question_form');

    tab1.click(function(){
        var that_element = $(this);
        that_element.addClass('active-tab');
        tab2.removeClass('active-tab');
        tab3.removeClass('active-tab');
        breaking_camera_form.addClass('open-tab');
        breaking_dvr_form.removeClass('open-tab');
        general_question_form.removeClass('open-tab');
    });
    tab2.click(function(){
        var that_element = $(this);
        that_element.addClass('active-tab');
        tab1.removeClass('active-tab');
        tab3.removeClass('active-tab');
        breaking_dvr_form.addClass('open-tab');
        breaking_camera_form.removeClass('open-tab');
        general_question_form.removeClass('open-tab');
    });
    tab3.click(function(){
        var that_element = $(this);
        that_element.addClass('active-tab');
        tab1.removeClass('active-tab');
        tab2.removeClass('active-tab');
        general_question_form.addClass('open-tab');
        breaking_dvr_form.removeClass('open-tab');
        breaking_camera_form.removeClass('open-tab');
    });
    //tabs end

    //custom scrollBar
    // var list_block_products_object = $('.list_block_products');
    // var chart_content_object = $('.chart_comparison .chart_content');
    //
    //
    // if(list_block_products_object){
    //     list_block_products_object.mCustomScrollbar({
    //         axis:"x", // horizontal scrollbar
    //         theme:"dark-2",
    //         callbacks:{
    //             whileScrolling:function(){
    //                 chart_content_object.mCustomScrollbar("scrollTo",this.mcs.left,{
    //                     moveDragger:true
    //                 });
    //             }
    //         }
    //     });
    // }
    //
    // // ---
    //
    // if(chart_content_object){
    //     chart_content_object.mCustomScrollbar({
    //         axis:"x", // horizontal scrollbar
    //         theme:""
    //     });
    // }
    //custom scrollBar end


    $(window).on({
        scroll: function (){
            var scrolled = window.pageYOffset || document.documentElement.scrollTop;

            var list_comparison_products_element = $('.list_comparison_products');
            var chart_comparison_element = $('.chart_comparison');
            var width_window = $(window).width();


            if(chart_comparison_element || list_comparison_products_element){
                list_comparison_products_element.each(function(){

                    var top_list_comparison_products_element = list_comparison_products_element.offset().top;
                    var height_list_comparison_products_element = list_comparison_products_element.height();
                    var list_block_products_elements = $('.list_block_products');

                    var top_chart_comparison_element = chart_comparison_element.offset().top;
                    var height_chart_comparison_element = chart_comparison_element.height();
                    var width_chart_comparison_element = chart_comparison_element.width();
                    var chart_content_element = $('.chart_comparison .chart_content');
                    var top_chart_content_element = chart_content_element.offset().top;
                    var height_chart_content_element = chart_content_element.height();
                    var width_chart_content_element = chart_content_element.width();


                    if(scrolled > top_list_comparison_products_element + height_list_comparison_products_element){
                        list_block_products_elements.addClass('fixed-table').css({
                            width: width_chart_content_element + 'px',
                            left: ((width_window - width_chart_comparison_element) / 2) + (width_chart_comparison_element - width_chart_content_element) + 'px'
                        });
                    } else {
                        list_block_products_elements.removeClass('fixed-table');
                    }

                    console.log(scrolled, top_chart_content_element + height_chart_content_element);
                    console.log(scrolled > top_chart_content_element + height_chart_content_element);

                    if(scrolled > top_chart_content_element + height_chart_content_element){
                        list_block_products_elements.removeClass('fixed-table');
                    }

                });

            }
        },
        resize: function(){

            var chart_comparison_element = $('.chart_comparison');
            var width_window = $(window).width();


            var list_block_products_elements = $('.list_block_products');

            var width_chart_comparison_element = chart_comparison_element.width();
            var chart_content_element = $('.chart_comparison .chart_content');
            var width_chart_content_element = chart_content_element.width();

            list_block_products_elements.css({
                width: width_chart_content_element + 'px',
                left: ((width_window - width_chart_comparison_element) / 2) + (width_chart_comparison_element - width_chart_content_element) + 'px'
            });


        }
    });


    // sticky name products end


});