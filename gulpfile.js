var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cleanCss = require('gulp-clean-css'),
    sourceMaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    cacheBuster = require('gulp-cache-bust'),
    php = require('gulp-connect-php'),
    browserSync = require('browser-sync');

var reload = browserSync.reload;

var config = {
    paths: {
        scss: './scss/*.scss',
        css: './css',
        header: './header.php',
        php: './*.php'
    }
};

gulp.task('php', function () {
    php.server({ base: '.', port: 8010, keepalive: true }, function () {
        browserSync({
            proxy: '127.0.0.1:8010',
            port: 8080,
            open: true,
            notify: false
        });
    });
});

gulp.task('sass-dev', ['php'], function () {
    return gulp.src(config.paths.scss)
        .pipe(sourceMaps.init())
        .pipe(sass({
            includePaths: [
                './scss'
            ],
            outputStyle: 'expanded'
        }).on('error', sass.logError))
        .pipe(sourceMaps.write())
        .pipe(autoprefixer())
        .pipe(gulp.dest(config.paths.css))
        .pipe(reload({ stream: true }));
});

gulp.task('sass-production', function () {
    return gulp.src(config.paths.scss)
        .pipe(sass({
            includePaths: [
                './scss'
            ]
        }).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(cleanCss())
        .pipe(gulp.dest(config.paths.css));
});

gulp.task('cache-buster', ['sass-production'], function () {
    return gulp.src(config.paths.header)
        .pipe(cacheBuster())
        .pipe(gulp.dest('./'))
});

gulp.task('watch', ['php'], function () {
    gulp.watch(config.paths.scss, ['sass-dev']);
    gulp.watch('/*.php').on('change', reload);
});

gulp.task('start', ['sass-dev', 'watch']);

gulp.task('serve-production', ['cache-buster']);