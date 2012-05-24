var config = document.createElement("script");
config.type = "text/x-mathjax-config";
config.innerHTML =
  '  MathJax.Hub.Config({\n' +
  '    extensions: ["tex2jax.js"],\n' +
  '    jax: ["input/TeX", "output/HTML-CSS"],\n' +
  '    tex2jax: {\n' +
  '      inlineMath: [ ["$","$"], ["\\\\(","\\\\)"] ],\n' +
  '      displayMath: [ ["$$","$$"], ["\\\\[","\\\\]"] ],\n' +
  '      processEscapes: true\n' +
  '    },\n' +
  '    "HTML-CSS": { availableFonts: ["TeX"] }\n' +
  '  });\n' +
  '  MathJax.Hub.Startup.onload();\n';

var script = document.createElement("script");
script.type = "text/javascript";
script.src  = "http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML";

// TODO: please, find a smarter way of doing this.
var runner = document.createElement("script");
runner.type = "text/javascript";
runner.innerHTML =
  'setTimeout(function () {' +
  '  setInterval(\'window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub])\', 1000);' +
  '}, 10000);';

document.getElementsByTagName("head")[0].appendChild(script);
document.getElementsByTagName("head")[0].appendChild(config);
document.getElementsByTagName("head")[0].appendChild(runner);

