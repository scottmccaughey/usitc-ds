require('events').EventEmitter.prototype._maxListeners = 100;

var gulp = require('gulp-help')(require('gulp'), { hideDepsMessage: true }),
  plumber = require('gulp-plumber'),
  sequence = require('gulp-sequence'),
  autoprefixer = require('gulp-autoprefixer'),
  clone = require('gulp-clone').sink(),
  del = require('del'),
  rename = require('gulp-rename'),
  replace = require('gulp-replace'),
  yamlToJson = require('gulp-yaml'),
  jsonToSass = require('./src/gulp/json-to-sass'),
  sassToCss = require('gulp-sass'),
  run = require('gulp-run'),
  yRequire = require('require-yml'),
  config = yRequire('./src/gulp/config.yml'),
  mixer = require('./src/gulp/mixer'),
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

  Compile a list of the file formats to be converted into and push those onto an array
  called "convert".
*/
config.formats.forEach(function(format) {
  convert.push('convert:' + format);
});

/*
  TASK: 'convert'

  Run the "convert" tasks.
*/
gulp.task('convert', 'Convert YAML Design Tokens into formats specified in config.yml.', convert);

/*
  TASK: 'convert:json'

  Empty the JSON distribution folder, then convert the YAML Design Tokens into JSON so that they
  can be used in JavaScript.
*/
gulp.task('convert:json', 'Convert YAML Design Tokens into JSON.', function() {
  return gulp
    .src(config.path.tokens.src)
    .pipe(plumber())
    .pipe(yamlToJson())
    .pipe(gulp.dest(config.path.tokens.dist.json));
});

/*
  TASK: 'convert:scss'

  Convert the YAML Design Tokens into SCSS so that they
  can be used in SCSS (Sass).
*/
gulp.task('convert:scss', 'Convert YAML Design Tokens into SCSS.', function() {
  return gulp
    .src(config.path.tokens.src)
    .pipe(plumber())
    .pipe(yamlToJson())
    .pipe(jsonToSass())
    .pipe(clone)
    .pipe(mixer('tokens'))
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

  Run the "copy", "convert" and "compile" tasks.
*/
gulp.task(
  'compile',
  'Copy and compile SCSS, copy fonts, and convert icons.',
  sequence('copy:fonts', 'convert:icons', 'compile:scss', 'generate:styleguide')
);

/*
  TASK: 'copy:fonts'

  Copy fonts from the source folder to the destination folder.
*/
gulp.task('copy:fonts', 'Copy fonts from the source folder to the destination folder.', function() {
  return gulp.src(config.path.fonts.src).pipe(plumber()).pipe(gulp.dest(config.path.fonts.dist));
});

/*
  TASK: 'convert:icons'

  Optimize SVG icons and save them, then convert them all into a single SVG sprite for easy use.
*/
gulp.task('convert:icons', 'Convert SVG icons into an SVG sprite.', function() {
  return gulp
    .src(config.path.icons.src)
    .pipe(plumber())
    .pipe(svgo())
    .pipe(gulp.dest(config.path.icons.dist))
    .pipe(svgSprite(config.settings.icons))
    .pipe(gulp.dest(config.path.icons.dist));
});

/*
  TASK: 'copy:scss'

  Copy SCSS from the source folder to the destination folder.
*/
gulp.task(
  'copy:scss',
  'Copy SCSS from the source folder to the destination folder.',
  [ 'convert:scss' ],
  function() {
    return gulp.src(config.path.scss.src).pipe(plumber()).pipe(gulp.dest(config.path.scss.dist));
  }
);

/*
  TASK: 'compile:scss'

  Run the "convert:scss" task, then copy the SCSS to the distribution folder and compile SCSS
  styles into CSS.
*/
gulp.task('compile:scss', 'Compile SCSS into CSS.', [ 'copy:scss' ], function() {
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
    .pipe(gulp.dest(config.path.css.dist))
    .pipe(replace(config.settings.scss.fontPath.prod, config.settings.scss.fontPath.dev))
    .pipe(
      rename(function(path) {
        path.basename = path.basename + config.settings.scss.devSuffix;
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
    return run(
      'node ' +
        __dirname +
        '/node_modules/kss/bin/kss --config src/styleguide/kss-config.json > src/assets/styleguide/kss.json'
    ).exec();
  }
);

/*
  TASK: "build"

  Run the "clean" task, then run the "convert" task, then run the "compile" task.
*/
gulp.task(
  'build',
  'Empty the distribution folder, convert tokens, then compile.',
  sequence('clean', 'convert', 'compile')
);

/*
  TASK: "watch"

  Watch files for processing.
*/
gulp.task('watch', 'Watch files for processing.', function() {
  gulp.watch(config.path.tokens.src, [ 'convert' ]);
  gulp.watch(config.path.scss.watch, [ 'compile:scss' ]);
  gulp.watch(config.path.fonts.src, [ 'copy:fonts' ]);
  gulp.watch(config.path.icons.src, [ 'convert:icons' ]);
  gulp.watch(config.path.styleguide.src, [ 'generate:styleguide' ]);
});

/*
  TASK: "default"

  Run the "build" task, then watch files for processing.
*/
gulp.task(
  'default',
  'Run the "build" task, then watch files for processing.',
  sequence('build', 'watch')
);
