module.exports = function(grunt) {

    grunt.initConfig({
        name: "Rufus"
    });

    grunt.registerTask("default", () => {
        grunt.log.writeln(`Where are you ${grunt.config.get("name")} ???`);
    });

};