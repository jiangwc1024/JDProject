/*
 * @Author: your name
 * @Date: 2020-03-10 16:05:27
 * @LastEditTime: 2020-03-10 20:27:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /JDProject/res/js/index.js
 */
$(function(){
    $(".left_banner li").mouseover(function(){
        $(".twice").show().children().eq($(this).index()).show().
        siblings().hide();
    });
    $(".left_banner").mouseleave(function(){
        $(".twice").hide();
    });
    $('.ban_min_right').slider({
            imgList: [
                {
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
            isAuto: true, //是否自动轮播
            moveTime: 6000, //运动时间
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