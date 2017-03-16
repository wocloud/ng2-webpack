/**
 * Created by sophia.wang on 17/3/6.
 */
'use strict';

let gulp = require('gulp'),
    webpack = require('gulp-webpack'),
    less = require('gulp-less'),
    sass = require('gulp-sass'),
    minifycss = require('gulp-minify-css'),
    //jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    minimist = require('minimist');

let src = process.cwd() + '/src';
let dist = process.cwd() + '/dist';

let knownOptions = {
    string: 'env',
    default: {env: process.env.NODE_ENV || 'production'}
};

let options = minimist(process.argv.slice(2), knownOptions);

let webpackConfProd = require('./config/webpack.prod.js');
let webpackConfDev = require('./config/webpack.dev.js');

//styles
gulp.task('sass', function() {
    return gulp.src('src/app/*.scss')
        .pipe(sass())
        .pipe(concat('app.css'))
        //.pipe(rename({ suffix: '.min' }))
        //.pipe(minifycss())
        .pipe(gulp.dest('src/assets/css/'))
        .pipe(notify({ message: 'Sass task complete' }));
});
gulp.task('less', function() {
    return gulp.src('src/app/*.less')
        .pipe(less())
        .pipe(concat('app.css'))
        //.pipe(rename({ suffix: '.min' }))
        //.pipe(minifycss())
        .pipe(gulp.dest('src/assets/css/'))
        .pipe(notify({ message: 'Less task complete' }));
});
gulp.task('styles', ['less', 'images', 'fonts'], function() {
    return gulp.src('src/assets/css/*.css')
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifycss())
        .pipe(gulp.dest('dist/css/'))
        .pipe(notify({ message: 'Styles task complete' }));
});

//fonts
gulp.task('fonts', function() {
    return gulp.src('src/assets/fonts/**')
        .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
        .pipe(gulp.dest('dist/assets/fonts'))
        .pipe(notify({ message: 'Fonts task complete' }));
});

//images
gulp.task('images', function() {
    return gulp.src('src/assets/img/**')
        .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
        .pipe(gulp.dest('dist/assets/img'))
        .pipe(notify({ message: 'Images task complete' }));
});

// html
gulp.task('html', function() {
    return gulp.src('src/index.html')
        .pipe(gulp.dest('dist/'))
        .pipe(notify({ message: 'html task complete' }));
});

//pages
gulp.task('pages', function() {
    return gulp.src('src/app/**/*.ts')
        .pipe(gulp.dest('dist/app/'))
        .pipe(notify({ message: 'pages task complete' }));
});

// clean asserts
gulp.task('clean', function () {
    return gulp.src(dist, {read: true}).pipe(clean())
});

//run webpack pack
gulp.task('scripts', function (done) {
    var _conf = options.env === 'production' ? webpackConfProd : webpackConfDev;
    //webpack(_conf, function (err, stats) {
    //    if (err) throw new console.log('webpack', err);
    //    console.log('[webpack]', stats.toString({colors: true}));
    //    done()
    //});
});

gulp.task('build', ['clean'], function () {
    gulp.start('styles', 'html', 'scripts', 'pages');
});

//default task
gulp.task('default', ['clean'], function() {
    gulp.start('styles', 'html', 'scripts', 'pages');
});

//watch all files change
gulp.task('watch', function() {

    gulp.watch('src/app/**/*.less', ['less']);

    //gulp.watch('src/**/.ts', ['scripts']);
    //
    //gulp.watch('src/index.html', ['html']) ;

    livereload.listen();

    gulp.watch(['dist/**']).on('change', livereload.changed);

});
