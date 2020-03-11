(function () {

    function SliderSmall(option) {
        this.wrap = option.wrap; //调用slider的元素
        this.imgList = option.imgList; //图片列表
        this.imgNum = this.imgList.length; //图片的长度
        this.width = option.width || $(this.wrap).width(); //图片的宽
        this.height = option.height || $(this.wrap).height(); //图片的高
        this.isAuto = option.isAuto || true; //是否自动轮播
        this.moveTime = option.moveTime; //轮播的时间
        this.direction = option.direction || 'right'; //轮播的方向
        this.btnWidth = option.btnWidth; //按钮的宽
        this.btnHeight = option.btnHeight; //按钮的高
        this.spanWidth = option.spanWidth; //span的宽
        this.spanHeight = option.spanHeight; //span的高
        this.spanColor = option.spanColor; //span按钮的背景颜色
        this.activeSpanColor = option.activeSpanColor; //选中span的颜色
        this.btnBackgroundColor = option.btnBackgroundColor; //按钮的背景颜色
        this.spanRadius = option.spanRadius; //按钮的圆角程度
        this.spanMargin = option.spanMargin; //span之间的距离
        this.flag = false;
        this.nowIndex = 0;
        this.createDom();
        this.initStyle();
        this.bindEvent();
        if(this.isAuto){
            this.autoMove()
        }
    }

    SliderSmall.prototype.createDom = function() {
        var oUl = $('<ul class="imgListSmall"></ul>');
        var Spot = $('<div class="spotSmall"></div>')
        this.imgList.forEach(function(item) {
            var oLi = ('<li><a href=" ' + item.a +' "><img src=" ' + item.img + ' "></a></li>');
            oUl.append(oLi);
            var span = ('<span></span>');
            Spot.append(span);
        });
        var leftBtn = $('<div class="left-btnSmall">&lt</div>');
        var rightBtn = $('<div class="right-btnSmall">&gt</div>');
        this.wrap.append(oUl).append(leftBtn).append(rightBtn).append(Spot);
    }

    SliderSmall.prototype.initStyle = function() {
        $('*', this.wrap).css({
            margin: 0,
            padding: 0,
            listStyle: 'none',
        });
        $(this.wrap).css({
            overflow: 'hidden',
            position: 'relative',
        })
        $('.imgListSmall', this.wrap).css({
            width: this.width,
            height: this.height,
            position: 'relative',
        });
        $('.imgListSmall li', this.wrap).css({
            width: this.width,
            height: this.height,
            position: 'absolute',
            left: 0,
            top: 0,
            display: 'none',
        }).eq(this.nowIndex).css({
            display: 'block',
        })
        $('.imgListSmall li a, .imgListSmall li a img', this.wrap).css({
            display: 'inline-block',
            width: this.width,
            height: this.height,
        });
        $('.left-btnSmall, .right-btnSmall', this.wrap).css({
            width: this.btnWidth,
            height: this.btnHeight,
            backgroundColor: this.btnBackgroundColor,
            color: '#fff',
            textAlign: 'center',
            lineHeight: this.btnHeight + 'px',
            position: 'absolute',
            top: '50%',
            marginTop: - this.btnHeight / 2,
            cursor: 'pointer',
        });
        $('.right-btnSmall', this.wrap).css({
            right: 0,
        });
        $('.spotSmall', this.wrap).css({
            height: this.spanHeight + (this.spanMargin * 2),
            position: 'absolute',
            left: '10%',
            marginLeft: - this.imgNum * (this.spanWidth + (this.spanMargin) * 2) / 2,
            bottom: 10,
        })
        $('.spotSmall span', this.wrap).css({
            display: 'inline-block',
            width: this.spanWidth,
            height: this.spanHeight,
            margin: this.spanMargin,
            backgroundColor: this.spanColor,
            borderRadius: this.spanRadius,
            cursor: 'pointer',
        }).eq(this.nowIndex).css({
            backgroundColor: this.activeSpanColor,
            boxShadow: '10px 10px 5px #ffffff'
        })
    }

    SliderSmall.prototype.bindEvent = function() {
        var self = this;
        $('.left-btnSmall', this.wrap).click(function() {
            self.move('prev');
        });
        $('.right-btnSmall', this.wrap).click(function() {
            self.move('next');
        });
        $('.spot spanSmall').click(function(e) {
            self.move($(this).index())
        });
        $(this.wrap).mouseenter(function () {
            clearInterval(self.time);
        }).mouseleave(function() {
            self.autoMove()
        })
    }

    SliderSmall.prototype.move = function(dir) {
        if(this.flag) {
            return false;
        }
        this.flag = true;
        switch(dir) {
            case 'prev':
                if(this.nowIndex === 0) {
                    this.nowIndex = this.imgNum -1;
                }else{
                    this.nowIndex --;
                }
                break;
            case 'next':
                if(this.nowIndex === this.imgNum - 1) {
                    this.nowIndex = 0;
                }else{
                    this.nowIndex ++;
                }
                break;
            default: 
                this.nowIndex = dir;
                break;
        }
        var self = this;
        $('.imgListSmall li', this.wrap).fadeOut().eq(this.nowIndex).fadeIn(function() {
            self.flag = false;
        });
        $('.spotSmall  span', this.wrap).css({
            backgroundColor: this.spanColor,
        }).eq(this.nowIndex % this.imgNum).css({
            backgroundColor: this.activeSpanColor,
        })
    }

    SliderSmall.prototype.autoMove = function() {
        var self = this;
        this.time = setInterval(function() {
            if(this.direction == 'left') {
                $('.left-btnSmall', this.wrap).trigger('click');
            }else{
                $('.right-btnSmall', this.wrap).trigger('click');
            }
        },this.moveTime);
    }

    $.fn.extend({
        sliderSmall: function(option) {
            option.wrap = this;
            new SliderSmall(option);
        }
    })
} ())