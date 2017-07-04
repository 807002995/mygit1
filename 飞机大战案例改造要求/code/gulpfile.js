var obj = {
	removeComments: true, //清除HTML 注释
	collapseWhitespace: true, //压缩HTML
	collapseBooleanAttributes: true,//省略布尔属性的值<input checked="true"/> ==><input checked/>
	removeEmptyAttributes: true, //删除所有空格作属性值<input id="" /> ==> <input />
	removeScriptTypeAttributes: true, //删除<script>的type="text/javascript"
	removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
	minifyJS: true, //压缩页面JS
	minifyCSS: true //压缩页面CSS
}

//var gulp = require('gulp');
//var minifyCss = require('gulp-minify-css'); //css 压缩插件
var uglify = require('gulp-uglify'); //js 压缩插件
//var babel = require('gulp-babel'); //js es6
//var bom = require('gulp-bom'); //解决中文乱码插件

//es6
var gulp = require('gulp');  
var babel = require('gulp-babel');  
var config={  
    es6file:'js/common.js',  
    es5file:'newFile/js/'  
};  
gulp.task('es6', function () {  
    return gulp.src(config.es6file)  
        .pipe(babel({  
            presets: ['es2015']  
        }))  
        .pipe(uglify())
        // .pipe(uglify())  
        .pipe(gulp.dest(config.es5file));
});  
gulp.task('default', function () {  
    gulp.watch(config.es6file, ['es6']);  
});  














//压缩js
gulp.task('jsTask', function(){
	gulp.src('js/bullet.js')
	.pipe(babel())
	.pipe(bom())
	.pipe(uglify(obj))
	.pipe(gulp.dest('newFile/js'));
});
//压缩css
gulp.task('cssTask', function(){
	gulp.src('css/*.css')
	.pipe(minifyCss(obj))
	.pipe(gulp.dest('newFile/css'));
});

