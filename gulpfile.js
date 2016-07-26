"use strict"
//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp'), //本地安装gulp所用到的地方
    less = require('gulp-less');
    // 引入组件
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minifyCss = require('gulp-minify-css');
var connect = require('gulp-connect');
var livereload = require('gulp-livereload');

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
    gulp.watch('build/js/*/*.js',function(){
        gulp.src('build/js/*/*.js')
            //.pipe(concat('all.js'))  //文件合并
            //.pipe(gulp.dest('build/dist')) //文件生成后的位置
            //.pipe(rename('all.min.js')) //文件重命名
            //.pipe(uglify())  //文件压缩
            .pipe(gulp.dest('build/dist'))
            .pipe(connect.reload());
    })
})

//使用connect启动一个Web服务器
gulp.task('connect', function () {
  connect.server({
    root: './',
    ip:'10.101.40.16',
    port: '8099', //可以修改启动端口号
    livereload: true
  });
});

gulp.task('html', function () {
    gulp.watch('build/html/*.html',function(){
        gulp.src('build/html/*.html')
            .pipe(connect.reload());
    })

});

//默认模块
gulp.task('default', function(){
    gulp.run('less','scripts','html','connect');
});