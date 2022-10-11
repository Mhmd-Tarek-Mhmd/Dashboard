const gulp = require("gulp"),
  pug = require("gulp-pug"),
  sass = require("gulp-sass")(require("sass")),
  autoprefixer = require("gulp-autoprefixer");

// HTML Tasks
gulp.task("html", () =>
  gulp.src("src/pug/screens/*.pug").pipe(pug()).pipe(gulp.dest("dist"))
);

// CSS Tasks
gulp.task("css", () =>
  gulp
    .src("src/scss/screens/*.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(autoprefixer("last 2 versions"))
    .pipe(gulp.dest("dist/assets/css"))
);

// Watch All Tasks
gulp.task("default", () => {
  gulp.watch("src/pug/**/*.pug", gulp.series("html"));
  gulp.watch("src/scss/**/*.scss", gulp.series("css"));
});
