var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

var scss_dir = 'app/scss/**/*.scss';

gulp.task('sass',function(){
	return gulp.src(scss_dir)
		.pipe(sass())
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({
			stream:true
		}))
});

gulp.task('watch',['browserSync','sass'],function() {
	gulp.watch(scss_dir,['sass']);
	gulp.watch('app/*.html',browserSync.reload);
	gulp.watch('app/js/**/*.js',browserSync.reload);
});

gulp.task('browserSync',function(){
	browserSync({
		server: {
			baseDir:'app'
		}
	})
})
