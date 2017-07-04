var index = {
	init: function(){
		seajs.use('citySelect',function(){
			var cityselec;
            $('#a').on('click',function(){
                cityselec = cityselec || $.citySelect({
                    title:'选择城市',
                    btnPosition:'top',
                    selectFn:function(a){
                        console.log(a)
                    }
                });
                cityselec.open()
            });
		})
	}
}
index.init();