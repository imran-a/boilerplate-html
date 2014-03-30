
module.exports = function (grunt) {

    grunt.initConfig({
        
        pkg: grunt.file.readJSON('package.json'),
        
        // server settings
        connect: {
            server: {
                options: {
                    port: 8080,
                    base: './<%= pkg.name %>',
                    livereload: true
                }
            }
        },

        // watch files and associated files
        watch: {
            src: {
                files: [
                    '<%= pkg.name %>/{,*/}*.html',
                    '<%= pkg.name %>/css/**/*.css',
					'<%= pkg.name %>/scripts/**/*.js',
					'<%= pkg.name %>/images/**/*'
                ],
                options: { livereload: true }
            },
            styles: {
                files: ['<%= pkg.name %>/css/**/*.less'],
                tasks: ['less']
            }
        },
        
        // less config
        less: {
            options: {
                compress: true,
                yuicompress: true,
                optimization: 2
            },
            all: {
                files: {
                    "<%= pkg.name %>/css/site.css": "<%= pkg.name %>/css/site.less"
                }
            }
        }
        
    });
    
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default', ['connect:server', 'watch']);

};
