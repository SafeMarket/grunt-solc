/*global module:false*/
module.exports = function(grunt) {

  grunt.loadTasks('tasks');

  grunt.initConfig({
    solc:{
      contracts:{
        options:{
          files:['contracts/*']
          ,output:'output.json'
        }
      }
    }
  })


};
