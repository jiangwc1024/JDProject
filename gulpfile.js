/*
 * @Author: your name
 * @Date: 2020-03-08 11:10:17
 * @LastEditTime: 2020-03-08 12:25:03
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /project/JDProject/gulpfile.js
 */

const gulp = require("gulp");
const sass = require("gulp-sass");
const connect  = require("gulp-connect"); 
const sourcemaps = require("gulp-sourcemaps");
//创建sass
gulp.task("server",done=>{
    connect.server({
        root:"dist",
        livereload:true,

    })
    done();
});
gulp.task("html",done=>{
    gulp.src("res/*.html")
    .pipe(gulp.dest("dist"))
    .pipe(connect.reload());
    done();
});
gulp.task("sass",done=>{
    gulp.src("res/sass/*.scss")
    .pipe(sass({outputStyle:"compressed"}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
    done();
});
gulp.task("img",done=>{
    gulp.src("res/img/*")
    .pipe(gulp.dest("dist/img"));
    done();
});
gulp.task("iconfont",done=>{
    gulp.src("res/iconfont/*")
    .pipe(gulp.dest("dist/iconfont"));
    done();
});
gulp.task("watch",done=>{
    gulp.watch("res/sass/*.scss",gulp.series("sass"));
    gulp.watch("res/*.html",gulp.series("html"));
    gulp.watch("res/img/*",gulp.series("img"));
    gulp.watch("res/iconfont/*",gulp.series("iconfont"));
    done();
});
gulp.task("default",gulp.parallel("server","watch"));
