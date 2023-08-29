const { src, dest, series, watch } = require('gulp');
const concat = require('gulp-concat');

// styles

const autoprefixer = require('gulp-autoprefixer');
const cssMinify = require('gulp-clean-css');

function styles() {
    return src('./styles/*.css')
        .pipe( concat('style.css'))
        .pipe( autoprefixer('last 2 versions') )
        .pipe( cssMinify() )
        .pipe( dest('./dist/') )
}

// script

const jsMinify = require('gulp-terser');

function scripts() {
    return src('./scripts/*.js')
    .pipe( jsMinify() )
    .pipe( dest('./dist/') )
}

//Watchtask

function watchTask(){
    watch(
        ['./styles/*.css', './scripts/*.js'],
        series(styles, scripts)
    )
}

exports.default = series(styles, scripts, watchTask);