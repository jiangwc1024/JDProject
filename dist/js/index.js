/*
 * @Author: your name
 * @Date: 2020-03-10 16:05:27
 * @LastEditTime: 2020-03-12 19:02:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /JDProject/res/js/index.js
 */
$(function () {
    $(".left_banner li").mouseover(function () {
        $(".twice").show().children().eq($(this).index()).show().
        siblings().hide();
    });
    $(".left_banner").mouseleave(function () {
        $(".twice").hide();
    });
    $('.ban_min_right').sliderSmall({
        imgList: [{
                img: 'img/lunboyou01.png',
                a: '#',
            },
            {
                img: 'img/lunboyou02.png',
                a: '#',
            },
            {
                img: 'img/lunboyou03.png',
                a: '#',
            },
        ], //图片的列表
        width: 190, //图片的宽
        height: 470, //图片的高
        isAuto: false, //是否自动轮播
        moveTime: 10000, //运动时间
        direction: 'right', //轮播的方向
        btnWidth: 25, //按钮的宽
        btnHeight: 25, //按钮的高
        spanWidth: 10, //span按钮的宽
        spanHeight: 10, //span按钮的高
        spanColor: '#fff', //span按钮的颜色
        activeSpanColor: '#666', //选中的span颜色
        btnBackgroundColor: 'rgba(0, 0, 0, 0.3)', //两侧按钮的颜色
        spanRadius: '50%', //span按钮的圆角程度
        spanMargin: 3, //span之间的距离
    })
    //倒计时
    function moveTime() {
        let endTime = new Date(new Date(new Date().toLocaleDateString()).getTime() + 24 * 60 * 60 * 1000 - 1);
        let time = endTime - new Date();
        let hour = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minute = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        let second = Math.floor((time % (1000 * 60)) / 1000);
        if (hour < 10) {
            hour = "0" + hour;
        }
        if (minute < 10) {
            minute = "0" + minute;
        }
        if (second < 10) {
            second = "0" + second;
        }
        $(".hour").html(hour);
        $(".min").html(minute);
        $(".sec").html(second);
    }
    let timeIn = setInterval(moveTime, 1000);
    $(".goods_left").click(function () {
        $(".time_goods").animate({
            left: "-800"
        }, 1000);
    });
    $(".goods_right").click(function () {
        $(".time_goods").animate({
            left: "0"
        }, 1000);
    });
    $('.timethree').sliderThree({
        imgList: [{
                img: '../img/lunbo301.png',
                a: '#',
            },
            {
                img: '../img/lunbo302.png',
                a: '#',
            },
        ], //图片的列表
        width: 180, //图片的宽
        height: 230, //图片的高
        isAuto: true, //是否自动轮播
        moveTime: 3000, //运动时间
        direction: 'right', //轮播的方向
        btnWidth: 25, //按钮的宽
        btnHeight: 25, //按钮的高
        spanWidth: 10, //span按钮的宽
        spanHeight: 10, //span按钮的高
        spanColor: '#fff', //span按钮的颜色
        activeSpanColor: '#666', //选中的span颜色
        btnBackgroundColor: 'rgba(0, 0, 0, 0.3)', //两侧按钮的颜色
        spanRadius: '50%', //span按钮的圆角程度
        spanMargin: 3, //span之间的距离
    })
    //tab切换
    $(".main2_h_right a").mouseover(function () {
        console.log(1)
        $(this).addClass("active").siblings().removeClass();
        let index = $(this).index();
        $(".body_item").eq(index).fadeIn().siblings().fadeOut();
    })
    $(".paomading").css("width",$(".paomading li").length*$(".paomading li").outerWidth())
    var left = null;
    timer = setInterval(function () {
        left -= 0.5;
        if (left < -$(".paomading").outerWidth()/2) {
            left = 0;
        }
        $(".paomading").css("left",left);
    }, 10)
    $(".paomading").mouseover(function(){
        clearInterval(timer);
    })
    $(".paomading").mouseout(function(){
        timer = setInterval(function () {
            left -= 0.5;
            if (left < -$(".paomading").outerWidth()/2) {
                left = 0;
            }
            $(".paomading").css("left",left);
        }, 10)
    })
    $('.box_body1').sliderlast({
        imgList: [{
                img: '../img/dzlb.jpg',
                a: '#',
            },
            {
                img: '../img/lunbo301.png',
                a: '#',
            },
            {
                img: '../img/lunbo302.png',
                a: '#',
            },
        ], //图片的列表
        width: 270, //图片的宽
        height: 250, //图片的高
        isAuto: true, //是否自动轮播
        moveTime: 3000, //运动时间
        direction: 'right', //轮播的方向
        btnWidth: 25, //按钮的宽
        btnHeight: 25, //按钮的高
        spanWidth: 10, //span按钮的宽
        spanHeight: 10, //span按钮的高
        spanColor: '#fff', //span按钮的颜色
        activeSpanColor: '#666', //选中的span颜色
        btnBackgroundColor: 'rgba(0, 0, 0, 0.3)', //两侧按钮的颜色
        spanRadius: '50%', //span按钮的圆角程度
        spanMargin: 3, //span之间的距离
    })
    //tab切换
    $(".box_tab_title li").mouseover(function(){
        $(this).addClass("active").siblings().removeClass();
        let index = $(this).index();
        $(".t_body").eq(index).fadeIn().siblings().fadeOut();
    })
    $(".wn_tabu li").click(function(){
        console.log(1);
        $(this).find(".top_con").addClass("clickSpan").parent().parent().siblings().find(".top_con").removeClass("clickSpan");
        $(this).find(".li_bottom").addClass("clicktext").parent().siblings().find(".li_bottom").removeClass("clicktext");
    });
    //获取商品列表,有用户登录的时候
        if(getCookie("id")){
            uid = getCookie("id");
        $.get("http://jx.xuzhixiang.top/ap/api/allproductlist.php",{
            uid:uid
        },
        ).then((data)=>{
            str = '';
            data = data.data;
            for(let i in data){
                str+=`
                <li>
                            <a href="productDetial.html?id=${data[i].pid}" class="product">
                                <div class="inner_img">
                                    <img src="${data[i].pimg}" alt="">
                                </div>
                                <div class="desc">
                                    <p class="desc_con">${data[i].pdesc}</p>
                                    <div class="inner_price">
                                        <div class="mod_price">
                                            <i>￥</i>
                                            <span class="in_price">
                                                ${data[i].pprice}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                `;
            }
            $(".productUL").html(str);
        });

        }else{
            //如果没有用户登录，获取公共列表，此处公共列表资源不再本地，图片不显示
            $.get("http://jx.xuzhixiang.top/ap/api/allproductlist.php"
        ).then((data)=>{
            str = '';
            data = data.data;
            console.log(data);
            for(let i in data){
                str+=`
                <li>
                            <a href="productDetial.html?id=${data[i].pid}" class="product">
                                <div class="inner_img">
                                    <img src="${data[i].pimg}" alt="">
                                </div>
                                <div class="desc">
                                    <p class="desc_con">${data[i].pdesc}</p>
                                    <div class="inner_price">
                                        <div class="mod_price">
                                            <i>￥</i>
                                            <span class="in_price">
                                                ${data[i].pprice}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                `;
            }
            $(".productUL").html(str);
        });
        }
        //页面滚动式，搜索栏以及购物车显示在顶部
        $(window).scroll(function(){
            let st = $(this).scrollTop();
            console.log(st);
            if(st>400){
                console.log($(".xlss"));
                $(".xlss").show().animate({height:"60px"},500);

            }else{
                $(".xlss").hide().css("height","0");
            }
        })
        //楼层效果
        $(window).scroll(function(){
            let st = $(this).scrollTop();
            if(st>$(".JDMS").offset().top-80){
                $(".floor").css({position:"fixed",top:"80px",right:"165px"});
            }else{
                $(".floor").css({position:"absolute",top:"0",right:"-70px"});
            }
        })
        $(window).scroll(function(){
            let st = $(this).scrollTop();
            console.log($(".floor1"));
            $(".floor1").each(function(i){
                if(st>=$(this).offset().top-60){
                    console.log(1);
                    $(".floor li").eq(i).addClass("xs").siblings().removeClass("xs")
                }
            })
        });
        $(window).scroll(function(){
            let st = $(this).scrollTop();
            if(st<600){
                $(".floor li").removeClass("xs");
            }
            
        });
        $(".floor li").click(function(){
            $("body,html").stop().animate({"scrollTop":$(".floor1").eq($(this).index()).offset().top-60},800);
        })
        $(window).scroll(function(){
            let st = $(this).scrollTop();
            if(st>$(".wn_list").offset().top-70){
                console.log($(".xlss"));
                $(".wntj_tab_c").show().animate({height:"60px"},500);

            }else{
                $(".wntj_tab_c").hide().css("height","0");
            }
        })
        
})