(function() {
     var options = {
        title:'选择城市',
        city:true,
        area:true,
        btnPosition:'top',
        itemPrintFn:function(data){
            return '<span data-id="'+ data[0] +'">' + data[1] + '</span>';
        }
    },
    ajaxUrl = (location.protocol === "https:" ? "https:" : "http:") + '//m.ly.com/member/ajax/GetNationalPlace';
    function createArr(s,e,txt){
         var arr = [],
             s = parseInt(s,10),
             e = parseInt(e,10);
        for (var i = 0; i <= (e - s); i++) {
            arr.push([s + i,s + i+txt])
        };
        return arr;
    }

    function citySelect(param){
        this.options = this.options || {};
        $.extend(this.options,options);
        $.extend(this.options,param);
        this.init();
    }

    citySelect.prototype.init = function(){
        var me = this,
            opts = me.options;
        if(opts.city === false){
            opts.className = 'city-select-pro'
        }else if(opts.area == false){
            opts.className = 'city-select-city'
        }
       
        me.options.changeFn = function(arr,cityChangeFn,areaChangeFn){
            var name = arr[0],
                id = parseInt($(arr[1]).attr('data-id'),10);
            if(arr[0] == 'city'){
                me.selectCity[1] = id;
            }
            if(arr[0] == 'pro'){
                me.selectCity[0] = id;
            }
            if(arr[0] == 'area'){
                me.selectCity[2] = id;
            }
            if(arr[0] == 'pro'){
                if(opts.city){
                  
                    me.loadCity('1',me.selectCity[0],function(data){
                        me.selectObj.updateSelect({
                            name:'city',
                            data:data,
                            index:0
                        });
                        cityChangeFn && cityChangeFn(data)
                    });
                    
                    if(opts.area && !arr[2]){
                        me.selectObj.updateSelect({
                            name:'area',
                            data:[[0,'请选择']],
                            index:0
                        });
                        areaChangeFn && areaChangeFn(data)
                    }
                }
            }else if(arr[0] == 'city'){
                if(opts.area){
                    me.loadCity('2',me.selectCity[1],function(data){
                        me.selectObj.updateSelect({
                            name:'area',
                            data:data,
                            index:0
                        });
                        areaChangeFn && areaChangeFn(data)
                    });
                }
            }
        }
        var selectFn = me.options.selectFn || function(){};
        me.options.selectFn =function(a){            
            var selects= [];
            for (var i = 0; i < a.length; i++) {
                var iElem = $('span',a[i][1]);
                selects.push([parseInt(iElem.attr('data-id'),10),iElem.html()])
            };
            return selectFn(selects)
        }
        me.selectCity = [];
        me.createCityArr(function(){
            me.selectObj = $.select(me.options);
            me.selectCity = opts.normal;            
       });
         
        //
    };

    citySelect.prototype.title = function(val){
        return this.selectObj.title(val)
    }
    citySelect.prototype.createCityArr = function(fn){
        var me = this,opts = me.options;
        me.options.data = [];
        opts.normal = opts.normal || [0];
        opts.normal[0] = searchIndex(opts.normal[0],$.citySelectData.provinceData);
        me.options.data.push({name:'pro',data:$.citySelectData.provinceData,index:opts.normal[0]})
        if(opts.normal){
            if(opts.normal[0] === 0){
                if(opts.city){
                    me.options.data.push({name:'city',data:[[0,'请选择']],index:0})
                }
                if(opts.area && opts.city){
                    me.options.data.push({name:'area',data:[[0,'请选择']],index:0})
                }
                fn()
            }else{
                me.loadCity('1',opts.normal[0],function(data){
                    opts.normal[1] = opts.normal[1] || 0;
                    opts.normal[1] = searchIndex(opts.normal[1],data);
                    me.options.data.push({name:'city',data:data,index:opts.normal[1]});
                  
                    if(opts.area && opts.city){
                        if(opts.normal[1] != 0){
                            me.loadCity('2',opts.normal[1],function(datas){
                                opts.normal[2] = opts.normal[2] || 0;
                                opts.normal[2] = searchIndex(opts.normal[2],datas);
                                me.options.data.push({name:'area',data:datas,index:opts.normal[2]});
                                fn()
                            })
                        }else{
                            me.options.data.push({name:'area',data:[[0,'请选择']],index:0});
                            fn()
                        }
                        
                    }
                })
            }
        }else{
            if(opts.city){
                me.options.data.push({name:'city',data:[[0,'请选择']],index:0})
                opts.normal.push(0);
            }
            if(opts.area && opts.city){
                me.options.data.push({name:'pro',data:[[0,'请选择']],index:0})
                opts.normal.push(0);
            }
            fn();
        }
    }
    citySelect.prototype.loadCity = function(type,id,fn){
        var me = this,opts = me.options,cData,nData,ajaxType = 'GetCity';
        if(id == 0){
            fn([[0,'请选择']])
        }
        if(!type || !id){
            return;
        }

        if(type === '1'){
            cData = $.citySelectData.cityData
        }else{
            cData = $.citySelectData.areaData;
            ajaxType = 'GetDivision';
        }
        for (var i = 0; i < cData.length; i++) {
            if(cData[i].id == id){
                nData = cData[i]
                break
            }
        };
        if(nData){
            fn(nData.data)
            return;
        }
        $.ajax({
            url:ajaxUrl,
            data:'type='+ ajaxType +'&pid=' + id,
            dataType:'jsonp',
            success:function(data){
                setData(data)
            },
            error:function(){
                setData({ReturnValue:[]})
            }
        })
        function setData(data){
            if(data && data.ReturnValue && data.ReturnValue.length){
                var nowData = handleData(data.ReturnValue)
                if(type === '1'){
                    $.citySelectData.cityData.push({id: id,data:nowData})
                    if(me.selectCity[0] && me.selectCity[0] == id){
                        fn(nowData)
                    }
                }else{
                    $.citySelectData.areaData.push({id: id,data:nowData})
                    if(me.selectCity[1] && me.selectCity[1] == id){
                        fn(nowData)
                    }
                }

            }
        }
    }

    function searchIndex(txt,data){
        var index = data[0][0];
        for (var i = 0; i < data.length; i++) {
            if(data[i][0] == txt || data[i][1] == txt){
                index = data[i][0]
                break;
            }
        };
        return index;
    }

    function handleData(data){
        var newData = [[0,'请选择']];
        for (var i = 0; i < data.length; i++) {
            newData.push([data[i].Id,data[i].Name])
        };
        return newData
    }
    /**
     * @return {self} 返回本身
     */
    citySelect.prototype.open = function(param){
        var me = this,opts = me.options;
        if(param){
            $.extend(opts,param);
            me.createCityArr(function(){
                me.options.data.forEach(function(a){
                    me.selectObj.updateSelect(a)
                });
                this.selectObj.open()
            });
            
        }else{
            this.selectObj.open()
        }
    };

    citySelect.prototype.setNormal = function(data,fn){
        var type = ['pro','city','area'],
            me = this;
            
            if(data[0]){
                me.selectObj.updateIndex(type[0],data[0]);
                me.options.changeFn([type[0],$('.select-ul li[data-id="'+ data[0] +'"]',me.selectObj._options._wrap),true],function(){
                    if(data[1]){
                        me.selectObj.updateIndex(type[1],data[1])
                        debugger;
                        me.options.changeFn(['city',$('.select-ul li[data-id="'+ data[1] +'"]',me.selectObj._options._wrap),true],false,function(){
                            if(data[2]){
                                me.options.changeFn(['area',$('.select-ul li[data-id="'+ data[2] +'"]',me.selectObj._options._wrap)])
                                ff.selectObj.updateIndex(type[2],data[2])
                            }else{
                                fn()
                            }
                        })
                    }else{
                        fn()
                    }
                })
            }else{
                fn()
            }
      
    }
    /**
     * 关闭弹出框
     * @method close
     * @return {self} 返回本身
     */
    citySelect.prototype.close = function(fn){
        this.selectObj.close()
    }
    /**
     * @desc 销毁组件。
     * @name destroy
     */
    citySelect.prototype.destroy = function(){
      me.selectObj.destroy();
      me.selectObj = null;
    }

    /**
     * @event destroy
     * @param {Event} e gmu.Event对象
     * @description 组件在销毁的时候触发
     */
    $.citySelect = function (param) {
       return new citySelect(param);
    };
    $.citySelectData = $.citySelectData || {};
    $.citySelectData.provinceData = $.citySelectData.provinceData ||  [[0,"请选择省"],[2,"安徽"],[3,"北京"],[4,"福建"],[5,"甘肃"],[6,"广东"],[7,"广西"],[8,"贵州"],[9,"海南"],[10,"河北"],[11,"河南"],[12,"黑龙江"],[13,"湖北"],[14,"湖南"],[15,"吉林"],[16,"江苏"],[17,"江西"],[18,"辽宁"],[19,"内蒙古"],[20,"宁夏"],[21,"青海"],[22,"山东"],[23,"山西"],[24,"陕西"],[25,"上海"],[26,"四川"],[27,"天津"],[28,"西藏"],[29,"新疆"],[30,"云南"],[31,"浙江"],[32,"重庆"],[33,"香港"],[34,"澳门"],[35,"台湾"]];
    $.citySelectData.cityData = $.citySelectData.cityData || [];
    $.citySelectData.areaData = $.citySelectData.areaData || [];    
})();
if ( typeof define === "function") {
	define(function (require, exports, module) {
        require('select');
        exports.citySelect = $.citySelect;
	});
}