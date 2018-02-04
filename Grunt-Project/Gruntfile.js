module.exports = function(grunt) {

    grunt.initConfig({
        name: "Rufus",
        watch: {
            files: ["*.js", "*.css"],
            task: "updated"
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


    grunt.registerTask("updated", () => {
        grunt.log.writeln(`Yah it updated baby!! ;-)`);
    });

    grunt.registerTask("default", () => {
        grunt.log.writeln(`Where are you ${grunt.config.get("name")} ???`);
    });

};