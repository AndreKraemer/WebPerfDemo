var gulp = require('gulp');

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
    return gulp.src([path.src + "/bootstrap/dist/js/bootstrap.js", path.src+"/jquery/dist/jquery.*js"])
            .pipe(gulp.dest("demo1/Scripts"));
});

gulp.task("Demo1", ["copyDemo1BootstrapCSS", "copyDemo1BootstrapFonts", "copyDemo1BootstrapJS" ]);