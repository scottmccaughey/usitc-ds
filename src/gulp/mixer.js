var through = require('through2'),
	gutil = require('gulp-util'),
	path = require('path');

module.exports = function(outname) {
	var paths = ''; // where we will push the path names with the @import

	var write = function(file, enc, cb) {
		if (file.path != 'undefined') {
			var dir = process.cwd() + '/src/assets-dev/tokens/';
			var fileImport = file.path.replace(dir, '');
			paths = paths + "@import '" + fileImport + "';\n";
		}
		cb();
	};

	var flush = function(cb) {
		// flush occurs at the end of the concating from write()

		var newFile = new gutil.File({
			// create a new file
			base: __dirname,
			cwd: __dirname,
			path: __dirname + '/' + outname + '.scss',
			contents: new Buffer(paths) // set the contents to the paths we created
		});

		this.push(newFile); // push the new file to gulp's stream
		cb();
	};

	return through.obj(write, flush); // return it
};
