 /**
 * @file 
 */
define('select',function() {

	;(function(){var stylestr = '.ui-select{z-index:1002;margin:0 auto;position:fixed;bottom:-260px;left:0;display:none;font-size:14px;font-size:14px;line-height:1.5}.ui-select .ui-select-c{margin:0 auto;width:90%}.ui-select .ui-select-c-top{width:100%}.clearfix:before,.clearfix:after{display:table;content:""}.clearfix:after{clear:both}.ui-select-bg{position:fixed;top:0;left:0;background:#333;opacity:0;display:none;z-index:1001;width:100%;height:100%}.ui-select *,.ui-select-bg{-webkit-user-select:none;-webkit-tap-highlight-color:rgba(255,255,255,0);-webkit-transform:translateZ(0);-webkit-user-drag:none}.ui-select .select-content,.ui-select .ui-select-c>.select-cancel,.ui-select .ui-select-c>.select-ok{background:#fff}.ui-selec2t *{padding:0;margin:0}.ui-select li{list-style:none;height:45px;line-height:45px;text-align:center}.ui-select .ui-select-c>.select-cancel,.ui-select .ui-select-c>.select-ok{margin:10px auto;display:block;text-align:center;height:45px;line-height:45px;width:100%;color:#46d264;border-radius:5px}.select-title-content{background:#0b3c39}.ui-select .ui-select-c .select-title-content h3{background:#0b3c39;color:#fff;margin:auto 50px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.select-title-content .select-ok,.select-title-content .select-cancel{position:absolute;top:50%;left:0;color:#fff;padding:5px 10px;transform:translateY(-50%);-webkit-transform:translateY(-50%);z-index:2}.select-title-content .select-ok{left:auto;right:0}.ui-select .ui-select-c>.select-ok{margin:0;border-radius:0 0 5px 5px}.ui-select .ui-select-c>.select-ok:after{height:1px;content:"";width:100%;border-bottom:1px solid #e1e1e1;position:absolute;top:-1px;right:0;transform:scaleY(.5);-webkit-transform:scaleY(.5)}.ui-select .ui-select-c h3{background:#fff}.ui-select .ui-select-c h3:after{height:1px;content:"";width:100%;background:#e1e1e1;position:absolute;left:0;bottom:0;transform:scaleY(.5);-webkit-transform:scaleY(.5)}.ui-select .select-content{display:block;position:relative;border-radius:0;z-index:20;overflow:hidden}.ui-select .select-collect,.ui-select .ui-select-c h3{border-radius:5px 5px 0 0}.ui-select .select-select,.ui-select .select-content ul{border-radius:0 0 5px 5px;padding-left:0}.ui-select .ui-select-c h3{text-align:center;font-size:16px;height:42px;line-height:42px;color:#333}.ui-select .select-open-con .select-select{border-radius:0 0 5px 5px}.ui-select .select-content ul{width:100%}.ui-select .select-content ul li{width:100%;border-radius:5px;height:35px;line-height:35px}.select-ul{height:105px;overflow:hidden}.select-larger .select-ul{height:175px}.ui-select .select-content p{height:35px;border-color:#ccc;position:absolute;top:50%;left:0;width:100%;border-top:1px solid #ddd;border-bottom:1px solid #ddd;margin-top:-4px;pointer-events:none}.ui-select table{width:100%}.ui-select table li span{display:block;min-width:32px}body .city-select-pro table td{width:100%}body .city-select-city table td{width:50%}.ui-select .select-content ul .actives{font-size:16px}.ui-select .select-ul-mask:after{content:"";position:absolute;z-index:3;top:0;left:0;width:100%;height:100%;pointer-events:none;background:linear-gradient(#fff 0,rgba(245,245,245,0) 52%,rgba(245,245,245,0) 48%,#fff 100%);background:-webkit-gradient(linear,left bottom,left top,from(#fff),color-stop(.52,rgba(245,245,245,0)),color-stop(.48,rgba(245,245,245,0)),to(#fff));background:-webkit-linear-gradient(#fff 0,rgba(245,245,245,0) 52%,rgba(245,245,245,0) 48%,#fff 100%);background:-moz-linear-gradient(#fff 0,rgba(245,245,245,0) 52%,rgba(245,245,245,0) 48%,#fff 100%)}';var stylelist = document.createElement('style');stylelist.innerHTML = stylestr;document.getElementsByTagName('head')[0].appendChild(stylelist);})();
/*
     * larger       {Boolean}    显示3 or 5个，默认true 表示5个
     * mask         {Boolean}    是否显示蒙层，默认true
     * width        {String}     容器宽度，默认100%
     * title        {String}     头部显示文案
     * maskClose    {Boolean}    点击遮罩层 是否关闭
     * cancelTxt    {String}     取消按钮文案，默认 取消
     * okTxt        {String}     确定按钮文案，默认确定
     * data         {Array}      数据，格式 [
                                            {name:'year',data:[[1990,'1990年'],[1991,'1991年']]，index:1991},
                                            {name:'month',data:[[1,'1月'],[2,'2月']]，index:1},
                                            {name:'day',data:[[1,'1日'],[2,'2日']]，index:1}
                                          ]
                                data 里面的每个数组第一个值是唯一的id，会根据这个值索引，第二个值可以有可以没有，
                                如果没有的话，需要配置itemPrintFn。index和data里面的id对应。表示默认选中
     
     * itemPrintFn {Function}   每个数据的打印函数，返回一个字符串，字符串会被赋值到列表的每一行中，默认生成'<span data-id="'+ data[0] +'">' + data[1] + '</span>'
     
     * changeFn    {Function}   发生改变时候触发的函数，接收一个参数，该参数为一个数组，第一个值为name，第二个参数为当前选中的li元素。
     
     * cancelFn    {Function}   执行关闭(close)前会执行的函数，包括取消按钮 return false表示不关闭
     
     *btnPosition  {string}     默认 bottom 可以选 top
     * 
     * selectFn    {Function}  点击确定执行的函数，接收一个参数，该参数为一个数组，[ [name1,elem],[name2,elem] ]返回选中的，如果return false的话不会关闭选择框
     *
     **  return
     * title       {Function}  获取或设置头部文案，接收一个参数（文案内容）可不传
     * create      {Function}  添加选择列，参数同data
     * getVal      {Function}  获取某一列的选中的值，接收一个参数 name。表示那一列，返回一个数组[name,elem]
     * updateIndex {Function}  更改选中项，接收两个参数 name，index
     * updateSelect{Function}  更改某一列的内容，参数同data里面的{name:'',data:[],index:1}
     *
     * open        {Function}  打开选择框的方法。
     * close       {Function}  关闭选择框方法，接收一个参数fn 在完全关闭选择框之后执行
     * destroy     {Function}  销毁
 */
         var options = {
        /**
         * @property {Boolean} [mask=true] 是否有遮罩层
         * @namespace options
         */
        mask: true,
        /**
         * @property {Number} [width=300] 弹出分享宽度
         * @namespace options
         */
        width: '100%',
        larger:true,
        title:'选择',
        okTxt:'确定',
        className:'',
	btnPosition:'top',
        cancelTxt:'取消',
        changeFn:function(elem){
        },
        cancelFn:function(){
        },
        itemPrintFn:function(data){
            return '<span data-id="'+ data[0] +'">' + data[1] + '</span>';
        }
    };
    function select(param){
        this._options = this._options || {};
        $.extend(this._options,options);
        $.extend(this._options,param);
        this.init();
    }


    select.prototype.init = function(){
        var me = this, opts = me._options;
        
        me.eventHand = $.proxy(eventHandler, me);
        me.Onstart = $.proxy(Onstart, me);
        me.onEnd = $.proxy(onEnd, me);
        opts._container = $(document.body);
        opts._cIsBody = true;
        opts._mask = opts.mask ? $('<div class="ui-select-bg"></div>').appendTo(opts._container) : null;
        opts._isOpen = false;

        if(opts.maskClose){
            opts._mask.on('click',function(){
                me.close()
            })
        }
        var cancelbtn = '<a class="select-cancel" title="'+ opts.cancelTxt +'">'+ opts.cancelTxt +'</a>',
            okbtn = '<a class="select-ok" title="'+ opts.okTxt +'">'+ opts.okTxt +'</a>',
            titletxt = '<h3>'+ opts.title +'</h3>',
            htmlStr = '<div class="ui-select '+ opts.className +'">'+
                        '<div class="ui-select-c '+ (opts.btnPosition === 'top' ? 'ui-select-c-top':'') +'">'+
                        (opts.btnPosition !== 'top' ? titletxt : '<div class="select-title-content">' + cancelbtn + titletxt + okbtn +'</div>') +
                            '<div class="select-content clearfix">'+
                                '<table '+ (opts.larger ? 'class="select-larger"':'') +'>'+
                                '</table>'+
                                '<p></p>'+
                            '</div>'+
                            (opts.btnPosition !== 'top' ? okbtn + cancelbtn : '')
                            +
                        '</div>'+
                      '</div>';
        opts._wrap = $(htmlStr).appendTo(opts._container);
        opts.table = $("table",opts._wrap);
        
        opts.overIndex = overIndex = opts.larger ? 2 : 1;
        me.create(opts.data);

        opts._wrap.css({
            width: opts.width,
            height: 'auto'
        });
        
        $(".select-cancel",opts._wrap).on("click",function(){
            me.close();
        });
        $(".select-ok",opts._wrap).on("click",function(){
            if(opts.selectFn){
                var arrs = [];
                $('table td ul',opts._wrap).each(function(){
                    arrs.push(me.getVal(this))
                })
                if(opts.selectFn(arrs) !== false){
                    me.close();
                }
            }else{
                 me.close();
            }
        });
        $(".select-content li",opts._wrap).on("click",function(e){
        });
        opts._mask.on('click',function(){
            opts.maskClickClose && me.close();
        })
        //bind events绑定事件
        opts._wrap.on('click', me.eventHand);
    };
    select.prototype.title = function(val){
        var titleEl = $('.ui-select-c>h3',this._options._wrap);
        if(val){
            titleEl.html(val)
        }
        return titleEl
    }
    select.prototype.create = function(arr){
        var me = this,
            opts = me._options;
        if(arr && arr.length > 0){
            var htmlStr = '<tr>';
            for (var i = 0; i < arr.length; i++) {
                htmlStr += createTd.call(me,arr[i],opts.itemPrintFn)
            };
            htmlStr+='</tr>';
            var addElem = $(htmlStr).appendTo(opts.table);
            $('.select-ul ul',addElem).on('touchstart',function(e){
                me.Onstart(this,e)
            }).each(function(){
                me.updateIndex(this,$(this).attr('data-index'))
            })
        }
    }

    select.prototype.getVal = function(name){
        var opts = this._options;
        var elems = typeof name === 'string' ? $('td[data-name="'+ name +'"] ul',opts.table) : name;
        return getSelectElem.call(this,elems);
    }

    select.prototype.updateIndex = function(name,id){
        var me = this,
            opts = me._options,
            ulelem =  typeof name === 'string' ? $('td[data-name="'+ name +'"] ul') : $(name),
            _li = $('li[data-id="'+ id +'"]',ulelem),
            _index = _li.index(),
            movepx = (opts.overIndex - _index) * hi;

        if(!_li[0]){
            var lens = ulelem.attr('data-top');
            lens = lens ? (-lens / 35) + opts.overIndex : opts.overIndex;
            $('li',ulelem).removeClass('actives').eq(lens).addClass('actives');
            return;
        }
        ulelem[0].style[picks + 'Transition'] = 'all 0s ease-out';
        ulelem[0].style[picks + 'Transform'] = 'translate3d(0,' + movepx + 'px,0)';
        ulelem.attr('data-top',movepx);
        $('li',ulelem).removeClass('actives').eq((-movepx/35) + opts.overIndex).addClass('actives');

    }
    select.prototype.updateSelect = function(param){
        var me = this,
            opts = me._options;
        if(!param.name){
            return;
        }
        var upTd = $('td[data-name="'+ param.name +'"]',opts.table);
        if(upTd[0]){
            var newTd = $(createTd.call(me,param,opts.itemPrintFn));
            upTd.replaceWith(newTd);
            $('.select-ul ul',newTd).on('touchstart',function(e){
                me.Onstart(this,e)
            })
            me.updateIndex($('ul',newTd),param.index)
        }
        
    }
    function createTd(data,fn){
        var listData = data.data,
            names = data.name || '';
        var htmlStr = '<td data-name="'+ names +'"><div class="select-ul select-ul-mask"><ul data-index="'+ (data.index || 0) +'">';
        for (var j = 0; j < listData.length; j++) {
            htmlStr+= '<li data-id="'+ listData[j][0] +'">' + fn(listData[j]) + '</li>'
        };
        htmlStr+='</ul></div></td>';
        return htmlStr;
    }
    function eventHandler (e){
        switch(e.type){
            case 'orientationchange':
                this.refresh();
                break;
            case 'touchmove':
                e.preventDefault();
                break;
        }
    };
    
    var target,
        min,
        max = 0,
        overIndex,
        hi = 35,
        start,
        nums,
        nowtop = 0,
        posObj = {},
        picks = '',
        startTime;

    var divs = document.createElement('div');
    $.each(['webkit', 'Moz', 'O', 'ms'], function (i, v) {
        if (divs.style[v + 'Transform'] !== undefined) {
            picks = v;
            return false;
        }
    });
    function Onstart(elem,e){
        if(!target){
            var childLen = $('li',elem).length;
            if(childLen < 2){return}
            e.preventDefault();
            target = elem;
            nums = Math.floor($(elem.parentNode).height() / (hi * 2));
            min = - ((childLen - nums - 1) * hi);
            max = nums * hi;
            startTime = new Date();
            if (event.targetTouches && event.targetTouches.length == 1) {
              var touch = event.targetTouches[0];
              posObj.starttop = touch.pageY;
            }
            start = getPosTop(target);
            $(document).on('touchmove', onMove).on('touchend', this.onEnd);
        }
    }
    function onMove(e){
        e.stopPropagation();
        e.preventDefault();
        if (event.targetTouches.length == 1) {
            var touch = event.targetTouches[0];
            posObj.movetop = touch.pageY;
            nowtop = getPosTop(target);
            nowtop = parseFloat(nowtop,10);
            scroll(target,posObj.movetop - (posObj.lasttop || posObj.starttop) + nowtop,0)
            posObj.lasttop = posObj.movetop;
        }
    }
    function constrain(val, min, max) {
        return Math.max(min, Math.min(val, max));
    }
    function onEnd(e){
        var time = new Date() - startTime,
            me = this,
            opts = me._options,
            speed,
            stop = getPosTop(target),
            dist,
            lastPos = stop,
            tindex;
        if (time < 300) { //300
            speed = Math.abs(Math.abs(stop) - Math.abs(start)) / time;
            dist = (speed * speed) / 0.0013 //s.speedUnit;
            time = Math.sqrt(Math.abs(speed * speed * 0.8)) * 8 / 10;
            if (posObj.movetop < posObj.starttop) {
                dist = -dist;
            }
            lastPos = lastPos + dist;
        } else {
           
            time = 0.01;
        }
        lastPos = constrain((Math.round(parseFloat(lastPos,10) / hi) * hi), min, max);

        var selectElem = target;
        scroll(target, lastPos, time,function(){
            var selects = getSelectElem.call(me,selectElem,false);
            if(selects!== false && opts.changeFn){
                opts.changeFn(selects)
            }
        })
        
        posObj.lasttop = 0;
        target = null;
        $(document).off('touchmove', onMove).off('touchend', this.onEnd);
    }

    function getSelectElem(target,gets){
        var dist = $(target).attr('data-top') || 0,
            me = this,
            opts = me._options,
            index = Math.abs(dist / hi);
        if(dist > 0){
            index = Math.abs(index - opts.overIndex);
        }else{
            index = index + opts.overIndex;
        }
        index  = index < 0 ? 0:index;
        var thisLi = $('li',target)[index],
            name = $(thisLi).closest('td');

        if(gets === false){
            if(name.data('choose') === thisLi){
                return false;
            }
            name.data('choose',thisLi); 
        }
        name = name.attr('data-name');
        return [name,thisLi];
    }

    function getPosTop(elem){
        var top  = $(target).attr('data-top');
        if(top && top != 'NaN'){
            return parseFloat(top);
        }else{
            return 0;
        }
    }
    var timers;
    function scroll(elem, val, time, fn) {
        var style = elem.style,
            px = constrain(val,min,max);
        style[picks + 'Transition'] = 'all ' + (time ? time.toFixed(3) : 0) + 's ease-out';
        // if (has3d) {
        style[picks + 'Transform'] = 'translate3d(0,' + px + 'px,0)';
        // } else {
        //     style.top = px + 'px';
        // }
        
        (function(target){
            clearTimeout(timers)
            timers = setTimeout(function () {
                $('li',target).removeClass('actives').eq((-px/35) + overIndex).addClass('actives');
                fn && fn();
            }, (time || 0) * 1000);
        })($(target).attr('data-top',px));

    }
    select.prototype.calculate = function(){
        var me = this, opts = me._options, size, _win = $(window), root = document.body,
            ret = {}, isBody = opts._cIsBody, round = Math.round;

        opts.mask && (ret.mask = isBody ? {
            width:  '100%',
            height: Math.max(root.scrollHeight, root.clientHeight)-1//不减1的话uc浏览器再旋转的时候不触发resize.奇葩！
        }:{
            width: '100%',
            height: '100%'
        });

        size = opts._wrap.offset();
        ret.wrap = {
            left: '50%',
            marginLeft: -round(size.width/2) +'px'
            // ,top: isBody?round(_win.height() / 2) + window.pageYOffset:'50%',
            // marginTop: -round(size.height/2) +'px'
        }
        return ret;
    };

    /**
     * 用来更新弹出框位置和mask大小。如父容器大小发生变化时，可能弹出框位置不对，可以外部调用refresh来修正。
     * @method refresh
     * @return {self} 返回本身
     */
    select.prototype.refresh =  function(){
        var me = this, opts = me._options, ret, action;
        if(!opts._isOpenRefresh) {

            action = function(){
                ret = me.calculate();
                ret.mask && opts._mask.css(ret.mask);
                opts._wrap.css(ret.wrap);
            }

            //如果有键盘在，需要多加延时
            if($.os && $.os.ios &&
                document.activeElement &&
                /input|textarea|select/i.test(document.activeElement.tagName)){

                document.body.scrollLeft = 0;

                setTimeout(action, 200);

            } else {
                action();//do it now
            }
        }
        return me;
    };
    /**
     * 打开弹出框
     * @method close
     * @return {self} 返回本身
     */
    select.prototype.open = function(){
        var opts = this._options,me = this;

        opts._wrap.css('display', 'block');
        opts._mask && opts._mask.css('display', 'block');
        opts._isOpenRefresh = false;
        me.refresh();
        opts._mask.animate({
            opacity: 0.8
            },300);
        opts._wrap.animate({
            bottom: 0
            }, 300,function(){
                opts._isOpen = true;
            });
        $(window).on('orientationchange touchmove click', me.eventHand);
    };
    /**
     * 关闭弹出框
     * @method close
     * @return {self} 返回本身
     */
    select.prototype.close = function(fn){
        var opts = this._options;
        if(opts._isOpen === false){
            return this;
        }
        if(opts.cancelFn){
            if(opts.cancelFn() === false){
                return;
            }
        }
        opts._mask.animate({
            opacity: 0
            },200);
        opts._wrap.animate({
            bottom: -260
            }, 200,function(){
                opts._wrap.css('display', 'none');
                opts._mask && opts._mask.css('display', 'none');
                opts._isOpen = false;
                opts._isOpenRefresh = false;
                fn && fn();
            });
        $(window).off('orientationchange touchmove click', this.eventHand);
        return this;
    }
    /**
     * @desc 销毁组件。
     * @name destroy
     */
    select.prototype.destroy = function(){
        var opts = this._options, _eventHander = this.eventHand;
        $(window).off('orientationchange', _eventHander);
        $(document).off('touchmove', _eventHander);
        opts._wrap.off('click', _eventHander).remove();
        opts._mask && opts._mask.off('click', _eventHander).remove();
    }

    $.select = function (param) { //Select
       return new select(param);
    };
    // document.body.onselectstart = function(){return false;}
});//