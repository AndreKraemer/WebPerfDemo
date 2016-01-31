var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
var rename = require("gulp-rename");
var sourcemaps = require('gulp-sourcemaps');
var htmlmin = require('gulp-htmlmin');
var concat = require('gulp-concat');

var path = {
    src: "bower_components"
}

gulp.task("copyDemo1BootstrapCSS", function(){
    return gulp.src(path.src + "/bootstrap/dist/css/bootstrap.*css")
            .pipe(gulp.dest("demo1/css"));
});

gulp.task("copyDemo1BootstrapFonts", function(){
    return gulp.src(path.src + "/bootstrap/dist/fonts/*")
            .pipe(gulp.dest("demo1/fonts"));
});

gulp.task("copyDemo1BootstrapJS", function(){
    return gulp.src([path.src + "/bootstrap/dist/js/bootstrap.*js", path.src+"/jquery/dist/jquery.*js"])
            .pipe(gulp.dest("demo1/Scripts"));
});

gulp.task("minCSSDemo1", function(){
    return gulp.src("Demo1/css/site.css")
           .pipe(sourcemaps.init())
           .pipe(cssnano())
           .pipe(rename("site.min.css"))
           .pipe(sourcemaps.write())
           .pipe(gulp.dest("Demo1/css"));
});

gulp.task("minHTMLDemo1", function(){
    return gulp.src("Demo1/solution.html")
           .pipe(htmlmin({removeComments: true, collapseWhitespace: true}))
           .pipe(rename("solution.min.html"))
           .pipe(gulp.dest("Demo1"));
});
gulp.task("combineMinJSDemo1", function(){
    gulp.src(["Demo1/Scripts/jquery.min.js","Demo1/Scripts/bootstrap.min.js"])
        .pipe(concat("vendor.js"))
        .pipe(gulp.dest("Demo1/Scripts/"));
});

gulp.task("Demo1", ["copyDemo1BootstrapCSS", "copyDemo1BootstrapFonts", "copyDemo1BootstrapJS", "minCSSDemo1","minHTMLDemo1", "combineMinJSDemo1"]);