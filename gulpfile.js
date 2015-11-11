var gulp = require('gulp');
var browserSync = require('browser-sync');
var Server = require('karma').Server;

gulp.task('serve', function () {
    browserSync.init({
        notify: false,
        port: 8080,
        server: {
            baseDir: ["app"],
            routes: {
                '/scripts': 'bower_components'
            }
        }
    })
    gulp.watch(['app/**/*.*']).on('change', browserSync.reload);
});

gulp.task('serve-test', function () {
    browserSync.init({
        notify: false,
        port: 8081,
        server: {
            baseDir: ["test", "app"],
            routes: {
                '/scripts': 'bower_components'
            }
        }
    })

    gulp.watch(['app/**/*.*']).on('change', browserSync.reload);
});


gulp.task('test-browser', function () {
    var config = {
        configFile: __dirname + '/karma.conf.js',
        singleRun: true,
        //reporters: ['mocha']
    };
    var server = new Server(config);
    server.start();
});