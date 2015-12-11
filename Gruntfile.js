module.exports = function (grunt) {
    grunt.initConfig({
        maven: {
            options: {
                groupId: 'de.gedoplan.demo',
                packaging: 'war',
                injectDestFolder: "false"
            },
            install: {
                options: {
                    goal: 'install'
                },
                src: ['public_html/**']
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-maven-tasks');
    grunt.registerTask('install', ['maven:install']);
};
