// By prefixing loaders to a module request, the module went through a loader pipeline. 
// These loaders transform the file content in specific ways. 
// After these transformations are applied, the result is a JavaScript module.

require("!style-loader!css-loader!./style.css");

document.write(require("./content"));