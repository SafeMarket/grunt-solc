module.exports = function(grunt){
	
	var solc = require('solc')
		,glob = require('glob')
		,path = require('path')

	grunt.registerMultiTask('solc', 'Compile solidity contracts', function() {

	var options = this.options({
		doOptimize: true
		,compilerPath:null
	})

    if(!Array.isArray(options.files) || options.files.length === 0){
    	grunt.log.error('options.files should be an array of files')
    	return false
    }

    if(options.compilerPath)
    	solc.useCompilerPath(path.resolve(options.compilerPath))


    var files = []

    options.files.forEach(function(globPath){
      glob.sync(globPath).forEach(function(file){
        files.push(file)
      })
    })

    var sources = {}
    
    files.forEach(function(file){
      var fileName = file.split('/').slice(-1)[0]
      sources[fileName] = grunt.file.read(file)
    })

    var solcOutput = solc.compile({ sources: sources }, options.doOptimize ? 1 : 0 )

    if(solcOutput.errors && solcOutput.errors.length>0){
			solcOutput.errors.forEach(function(err){
				grunt.log.error(err)
			})
			return false
		
		}else{

			for (var contractName in solcOutput.contracts){
				grunt.log.success('Compiled '+contractName)
			}

			if(options.output){
				grunt.file.write(options.output,JSON.stringify(solcOutput))
				grunt.log.success('Saved output to '+options.output)
			}
		}


  })
}