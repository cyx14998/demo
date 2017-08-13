"use strict"
//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp'), //本地安装gulp所用到的地方
    less = require('gulp-less');
    // 引入组件
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minifyCss = require('gulp-minify-css');
var connect = require('gulp-connect');
var livereload = require('gulp-livereload');
var webserver = require('gulp-webserver');
var fs = require('fs');
var bytediff = require('gulp-bytediff');
var browserSync = require("browser-sync").create();//这个 好像不太好用
var outpath = 'public/assets';

//监听less模块，模块名自定
gulp.task('less',function(){
    gulp.watch('build/less/*/*.less',function(){
        gulp.src('build/less/*/*.less') //该任务针对的文件
            .pipe(less()) //该任务调用的模块
            .pipe(gulp.dest('build/css')) //将会在build/css下生成对应css
            .pipe(minifyCss()) //对生成后的css进行压缩
            .pipe(gulp.dest('build/css/min')) //在css/min下生成对应压缩文件
            .pipe(connect.reload());
    })
});
//监听js文件、合并、压缩
gulp.task('scripts', function() {
    gulp.watch('build/js/**/*.js',function(){
        return gulp.src('build/js/**/*.js')
            //.pipe(concat('all.js'))  //文件合并
            .pipe(uglify())  //文件压缩
            .pipe(gulp.dest(outpath + '/js')) //文件生成后的位置
            //.pipe(rename('all.min.js')) //文件重命名
            .pipe(connect.reload());
    })
})

//使用connect启动一个Web服务器
gulp.task('connect', function () {
  connect.server({
    root: './',
    ip:'10.101.62.65',
    port: '8081', //可以修改启动端口号
    livereload: true
  });
});

gulp.task('webserver', function() {
  gulp.src('build')
    .pipe(webserver({
      open: true,
      port: 8081
    }));
});

gulp.task('html', function () {
    gulp.watch('build/html/*/*.html',function(){
        gulp.src('build/html/*/*.html')
            .pipe(connect.reload());
    })

});

//默认模块
gulp.task('default', ['less','scripts','html','connect','webserver']);

function bytediffFormatter(data) {
    let difference = (data.savings > 0) ? ' smaller.' : ' larger.',
        result = data.savings > 0 ? ('and is ' +
        $.util.colors.yellow.bold(~~((1 - data.percent) * 100) + '%') + difference) : "";
    return `${$.util.colors.cyan.bold(data.fileName)} from ${$.util.colors.yellow.bold((data.startSize / 1000).toFixed(2))} kB to ${$.util.colors.yellow.bold((data.endSize / 1000).toFixed(2))} kB ${result}`;
}