const { src, dest, series, watch } = require('gulp');
const concat = require('gulp-concat');
const webp = require('gulp-webp');
const browserSync = require('browser-sync').create();

// html

function html() {
    return src('index.html')
        .pipe( dest('./dist/') )
        .pipe( browserSync.stream() )
}

// images

function images() {
    return src('./assets/images/*.png')
        .pipe( webp() )
        .pipe( dest('./dist/assets/images') )
        .pipe( dest('./assets/images') )
        .pipe( browserSync.stream() )
}

// fonts

function fonts() {
    return src('./assets/fonts/**')
    .pipe( dest('./dist/assets/fonts') )
    .pipe( browserSync.stream() )
}

// icons

function icons() {
    return src('./assets/icons/**')
    .pipe( dest('./dist/assets/icons') )
    .pipe( browserSync.stream() )
}

// styles

const autoprefixer = require('gulp-autoprefixer');
const cssMinify = require('gulp-clean-css');

function styles() {
    return src([
            './styles/reset.css', 
            './styles/common.css', 
            './styles/header.css', 
            './styles/first-section.css', 
            './styles/second-section.css',
            './styles/third-section.css',
            './styles/fourth-section.css',
            './styles/fifth-section.css',
        ])
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
    return src([
            './scripts/highlight-link.js', 
            './scripts/product-selection.js',
            './scripts/form.js',
        ])
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

exports.default = series(html, styles, scripts, images, fonts, icons, watchTask);