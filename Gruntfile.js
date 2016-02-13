/*global module:false*/
module.exports = function(grunt) {

  grunt.loadTasks('tasks');

  grunt.initConfig({
    solc:{
      contracts:{
        options:{
          files:['contracts/*']
          ,output:'output.json'
          ,compilerPath:'./bin/soljson-v0.1.6-2015-11-16-c881d10.js'
          ,doOptimize:false
        }
      }
    }
  })

};
