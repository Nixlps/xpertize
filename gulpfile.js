const { src, dest, series, watch } = require('gulp');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();

// html

function html() {
    return src(['./page-sections/header.html', './page-sections/footer.html'])
        .pipe( concat('index.html'))
        .pipe( dest ('./') )
        .pipe( dest('./dist/') )
        .pipe( browserSync.stream() )
}

// styles

const autoprefixer = require('gulp-autoprefixer');
const cssMinify = require('gulp-clean-css');

function styles() {
    return src('./styles/*.css')
        .pipe( concat('style.css'))
        .pipe( autoprefixer('last 2 versions') )
        .pipe( cssMinify() )
        .pipe( dest('./') )
        .pipe( dest('./dist/') )
        .pipe( browserSync.stream() )

}

// script

const jsMinify = require('gulp-terser');

function scripts() {
    return src('./scripts/*.js')
    .pipe( concat('bundle.js'))
    .pipe( jsMinify() )
    .pipe( dest('./') )
    .pipe( dest('./dist/') )
    .pipe( browserSync.stream() )
}

//Watchtask

function watchTask(){

    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    watch('./styles/*.css', styles)
    watch('./scripts/*.js', scripts)
    watch('./page-sections/*.html', html)
    watch('index.html').on('change', browserSync.reload);
}

exports.default = series(html, styles, scripts, watchTask);