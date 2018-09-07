require('events').EventEmitter.prototype._maxListeners = 100;

var gulp = require('gulp-help')(require('gulp'), { hideDepsMessage: true }),
  plumber = require('gulp-plumber'),
  sequence = require('gulp-sequence'),
  autoprefixer = require('gulp-autoprefixer'),
  clone = require('gulp-clone').sink(),
  del = require('del'),
  rename = require('gulp-rename'),
  yamlToJson = require('gulp-yaml'),
  jsonToSass = require('./gulp/gulp-json-to-scss'),
  jsonMerge = require('gulp-merge-json'),
  sassToCss = require('gulp-sass'),
  run = require('gulp-run'),
  yRequire = require('require-yml'),
  config = yRequire('./gulp/gulp-config.yml'),
  list = require('./gulp/gulp-output-list'),
  svgo = require('gulp-svgo'),
  svgSprite = require('gulp-svg-sprite'),
  convert = [];

/*
  TASK: 'clean'

  Delete contents of distribution folders.
*/
gulp.task('clean', 'Delete contents of distribution folders.', function() {
  return del(config.path.clean);
});

/*
  GENERATOR: 'convert' formats list

  Compile a list of the file formats to be converted into and push those onto an array called "convert".
*/
config.formats.forEach(function(format) {
  convert.push('convert:' + format);
});

/*
  TASK: 'convert'

  Convert YAML Design Tokens into formats specified in gulp-config.yml.
*/
gulp.task(
  'convert',
  'Convert YAML Design Tokens into formats specified in gulp-config.yml.',
  convert
);

/*
  TASK: 'convert:json'

  Convert YAML Design Tokens into JSON so that they can be used in JavaScript.
*/
gulp.task('convert:json', 'Convert YAML Design Tokens into JSON.', function() {
  return gulp
    .src(config.path.tokens.src)
    .pipe(plumber())
    .pipe(yamlToJson())
    .pipe(jsonMerge(config.settings.tokens.json))
    .pipe(gulp.dest(config.path.tokens.dist.tokens));
});

/*
  TASK: 'convert:es6'

  Convert YAML Design Tokens into a TypeScript ECMAScript 6 module.
*/
gulp.task(
  'convert:es6',
  'Convert YAML Design Tokens into a TypeScript ECMAScript 6 module.',
  function() {
    return gulp
      .src(config.path.tokens.src)
      .pipe(plumber())
      .pipe(yamlToJson())
      .pipe(jsonMerge(config.settings.tokens.es6))
      .pipe(gulp.dest(config.path.tokens.dist.tokens));
  }
);

/*
  TASK: 'convert:node'

  Convert YAML Design Tokens into a NodeJS module.
*/
gulp.task('convert:node', 'Convert YAML Design Tokens into a NodeJS module.', function() {
  return gulp
    .src(config.path.tokens.src)
    .pipe(plumber())
    .pipe(yamlToJson())
    .pipe(jsonMerge(config.settings.tokens.node))
    .pipe(gulp.dest(config.path.tokens.dist.tokens));
});

/*
  TASK: 'convert:scss'

  Convert YAML Design Tokens into SCSS.
*/
gulp.task('convert:scss', 'Convert YAML Design Tokens into SCSS.', function() {
  return gulp
    .src(config.path.tokens.src)
    .pipe(plumber())
    .pipe(yamlToJson())
    .pipe(jsonToSass())
    .pipe(clone)
    .pipe(list(config.settings.tokens.scss.fileName, config.settings.tokens.scss.dirName))
    .pipe(clone.tap())
    .pipe(
      rename(function(path) {
        path.basename = '_' + path.basename;
      })
    )
    .pipe(gulp.dest(config.path.tokens.dist.scss));
});

/*
  TASK: 'compile'

  Copy and compile SCSS, copy fonts, and convert icons.
*/
gulp.task('compile', 'Copy and compile SCSS, copy fonts, and convert icons.', function(cb) {
  sequence(
    'copy:fonts',
    'copy:favicons',
    'convert:icons',
    'compile:scss',
    'generate:styleguide'
  )(cb);
});

/*
  TASK: 'copy:fonts'

  Copy fonts from the source folder to the destination folder.
*/
gulp.task('copy:fonts', 'Copy fonts from the source folder to the destination folder.', function() {
  return gulp
    .src(config.path.fonts.src)
    .pipe(plumber())
    .pipe(gulp.dest(config.path.fonts.dist));
});

/*
  TASK: 'copy:favicons'

  Copy favicons from the source folder to the destination folder.
*/
gulp.task(
  'copy:favicons',
  'Copy favicons from the source folder to the destination folder.',
  function() {
    return gulp
      .src(config.path.favicons.src)
      .pipe(plumber())
      .pipe(gulp.dest(config.path.favicons.dist));
  }
);

/*
  TASK: 'convert:icons'

  Optimize SVG icons, then convert them all into a single SVG sprite.
*/
gulp.task(
  'convert:icons',
  'Optimize SVG icons, then convert them all into a single SVG sprite.',
  function() {
    return gulp
      .src(config.path.icons.src)
      .pipe(plumber())
      .pipe(svgo())
      .pipe(gulp.dest(config.path.icons.dist))
      .pipe(svgSprite(config.settings.icons))
      .pipe(gulp.dest(config.path.icons.dist));
  }
);

/*
  TASK: 'copy:scss'

  Copy SCSS from the source folder to the destination folder.
*/
gulp.task(
  'copy:scss',
  'Copy SCSS from the source folder to the destination folder.',
  ['convert:scss'],
  function() {
    return gulp
      .src(config.path.scss.src)
      .pipe(plumber())
      .pipe(gulp.dest(config.path.scss.dist));
  }
);

/*
  TASK: 'compile:scss'

  Compile SCSS into CSS.
*/
gulp.task('compile:scss', 'Compile SCSS into CSS.', ['copy:scss'], function() {
  return gulp
    .src(config.path.scss.src)
    .pipe(plumber())
    .pipe(gulp.dest(config.path.scss.dist))
    .pipe(
      sassToCss({
        includePaths: config.settings.scss.includePaths
      })
    )
    .pipe(
      autoprefixer({
        browsers: config.settings.scss.browsers
      })
    )
    .pipe(gulp.dest(config.path.css.dist));
});

/*
  TASK: 'generate:styleguide'

  Generate a JSON file containing all the styleguide documentation.
*/
gulp.task(
  'generate:styleguide',
  'Generate a JSON file containing all the styleguide documentation.',
  function() {
    return run('node ' + __dirname + config.settings.styleguide.cmd).exec();
  }
);

/*
  TASK: 'build:tokens'

  Convert tokens to all formats, then generate the styleguide.
*/
gulp.task('build:tokens', 'Convert tokens to all formats, then generate the styleguide.', function(
  cb
) {
  sequence('convert', 'compile:scss', 'generate:styleguide')(cb);
});

/*
  TASK: 'build:scss'

  Compile the SCSS, then generate the styleguide.
*/
gulp.task('build:scss', 'Compile the SCSS, then generate the styleguide.', function(cb) {
  sequence('compile:scss', 'generate:styleguide')(cb);
});

/*
  TASK: 'build:icons'

  Convert the icons, then generate the styleguide.
*/
gulp.task('build:icons', 'Convert the icons, then generate the styleguide.', function(cb) {
  sequence('convert:icon', 'generate:styleguide')(cb);
});

/*
  TASK: 'build'

  Empty the distribution folder, convert tokens, then compile.
*/
gulp.task('build', 'Empty the distribution folder, convert tokens, then compile.', function(cb) {
  sequence('clean', 'convert', 'compile')(cb);
});

/*
  TASK: "watch"

  Watch files for processing.
*/
gulp.task('watch', 'Watch files for processing.', function() {
  gulp.watch(config.path.tokens.src, ['build:tokens']);
  gulp.watch(config.path.scss.watch, ['build:scss']);
  gulp.watch(config.path.icons.src, ['build:icons']);
  gulp.watch(config.path.fonts.src, ['copy:fonts']);
  gulp.watch(config.path.favicons.src, ['copy:favicons']);
});

/*
  TASK: "default"

  Run the 'build' task, then watch files for processing.
*/
gulp.task('default', 'Run the "build" task, then watch files for processing.', function(cb) {
  sequence('build', 'watch')(cb);
});
