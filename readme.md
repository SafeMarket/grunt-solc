# grunt-solc

> Compile contracts and (optionally) save output to file

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-solc --save-dev 
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-solc');
```

## The "solc" task

Add a file to solc

```js
grunt.initConfig({
  solc: {
    default:{
      options: {
        files:['contracts/*']
        ,output:'output.json'     //optional
      }
    }
  },
});
```