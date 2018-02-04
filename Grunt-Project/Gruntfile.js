// require('load-grunt-tasks')(grunt);

module.exports = function(grunt) {

    grunt.initConfig({
        name: "Rufus",
        watch: {
            files: ["*.js", "*.css"],
            task: "updated"
        },
        babel: {
            options: {
                sourceMap: true,
                presets: ['env']
            },
            dist: {
                files: {
                    'index.js': '/src/index.js',
                    'logger.js': '/src/logger.js'
                }
            }
        },
        uglify: {
            build: {
                src: ['index.js', 'logger.js'],
                dest: 'dist/bundle.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('babel-cli');

    grunt.registerTask("updated", () => {
        grunt.log.writeln(`Yah it updated baby!! ;-)`);
    });

    // grunt.registerTask("default", ['babel']);

};