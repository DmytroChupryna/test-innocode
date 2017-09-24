var gulp = require('gulp'),
    concatCSS =require('gulp-concat-css'),
    prefixer =require('gulp-autoprefixer'),
    live =require('gulp-livereload'),
    connect =require('gulp-connect'),
    // notify =require('gulp-notify'),
    minifyCss = require('gulp-minify-css'),
    imagemin = require('gulp-imagemin');
var sass = require('gulp-sass');

gulp.task('connect',function(){
    connect.server({
        root:'app',
        livereload: true
    })
});
// gulp.task('sprite', function () {
//     var spriteData = gulp.src('app/images/icon/*.png')
//         .pipe(spritesmith({
//             imgName: 'sprite.png',
//             cssName: 'sprite.css',
//             padding: 10
//         }));
//     return spriteData.pipe(gulp.dest('sprite/images'));
// });
gulp.task('sass', function () {
    gulp.src('app/css/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('app/css'));
});
gulp.task('css', function() {
    gulp.src('app/css/style.css')
        .pipe(concatCSS('style.css'))
        .pipe(prefixer('last 4 versions','>3%'))
        //.pipe(minifyCss())
        .pipe(gulp.dest('dist/css'))
        // .pipe(notify('ok'))
        .pipe(connect.reload());
});

gulp.task("copyHtml",function(){
    gulp.src('app/*.html')
        .pipe(gulp.dest('dist'))
});

gulp.task("html",function(){
    gulp.src('dist/*.html')
        .pipe(connect.reload())
});

gulp.task("copyJs",function(){
    gulp.src('app/js/*.js')
        .pipe(gulp.dest('dist/js'))
});

gulp.task("js",function(){
    gulp.src('dist/js/*.js')
        .pipe(connect.reload())
});


gulp.task('compress', function() {
    gulp.src('app/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
});

gulp.task("watch",function(){
    gulp.watch('app/css/*.sass', ['sass']);
    gulp.watch('app/css/*.css',['css']);
    gulp.watch('app/*.html',['copyHtml']);
    gulp.watch('dist/*.html',['html']);
    gulp.watch('app/js/*.js',['copyJs']);
    gulp.watch('dist/js/*.js',['js']);
    gulp.watch('app/images/*', ['compress']);
});

gulp.task("default",[
    'connect',
    'compress',
    'sass',
    'css',
    'copyHtml',
    'html',
    'copyJs',
    'js',
    'watch'
]);