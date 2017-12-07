// By prefixing loaders to a module request, the module went through a loader pipeline. 
// These loaders transform the file content in specific ways. 
// After these transformations are applied, the result is a JavaScript module.

// require("!style-loader!css-loader!./style.css");

// Run with: webpack ./entry.js bundle.js --module-bind 'css=style-loader!css-loader'
require("./style.css");

document.write(require("./content"));