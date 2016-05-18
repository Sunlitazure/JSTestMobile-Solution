module.exports = function(grunt) {

    // Add the grunt-mocha-test tasks.
    grunt.loadNpmTasks('grunt-mocha-test');

    grunt.initConfig({
        // Configure a mochaTest task
        mochaTest: {
            test: {
                options: {
                    reporter: 'spec',
                    require: 'test/spec/node-setup.js',
                    clearRequireCache: true
                },
                src: ['test/spec/*.js']
            }
        },

        watch: {
            files: [
                'src/*.js',
                'test/spec/*.js'
            ],
            tasks: ['mochaTest'],
            options: {
                livereload: true,
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', 'watch');
};
