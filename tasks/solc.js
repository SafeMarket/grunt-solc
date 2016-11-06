module.exports = function(grunt){
	
	const glob = require('glob')
  const path = require('path')

	grunt.registerMultiTask('solc', 'Compile solidity contracts', function() {

  	var options = this.options({
  		doOptimize: true
  	})

    if(!Array.isArray(options.files) || options.files.length === 0){
    	grunt.log.error('options.files should be an array of files')
    	return false
    }

    if(! options.solc ){
      grunt.log.error('options.solc should be a solc instance')
      return false
    }

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

    var solcOutput = options.solc.compile({ sources: sources }, options.doOptimize ? 1 : 0 )

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