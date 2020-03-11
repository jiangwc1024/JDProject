/*
 * @Author: your name
 * @Date: 2020-03-10 16:05:27
 * @LastEditTime: 2020-03-11 20:54:26
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
    var oUl = document.querySelector('.paomading');
    var lis = oUl.getElementsByTagName('li');
    oUl.style.width = lis.length * lis[0].offsetWidth + 'px';
    var left = null;
    timer = setInterval(function () {
        left -= 3;
        if (left < -oUl.offsetWidth/2) {
            left = 0;
        }
        oUl.style.left = left + 'px'
    }, 100)
    $(".paomading").mouseover(function(){
        clearInterval(timer);
    })
    $(".paomading").mouseout(function(){
        timer = setInterval(function () {
            left -= 3;
            if (left < -oUl.offsetWidth/2) {
                left = 0;
            }
            oUl.style.left = left + 'px'
        }, 100)
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
    


})