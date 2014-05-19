module.exports = function create(__helpers) {
  var empty = __helpers.e,
      notEmpty = __helpers.ne,
      raptor_templates_taglibs_layout_placeholder_tag = require("raptor-templates/taglibs/layout/placeholder-tag");

  return function render(data, context) {
    context.w('<!doctype html> <html lang="en"><head><meta charset="UTF-8"><meta charset="utf-8"><title>AutoComplete</title><link rel="stylesheet" href="/css/app.css"><script src="/bower_components/platform/platform.js"></script><link rel="import" href="/auto-complete/auto-complete.html"></head><body><header><h1>Auto Complete</h1></header><div id="content"><main id="main">');
    __helpers.t(context, 
      raptor_templates_taglibs_layout_placeholder_tag,
      {
        "name": "body",
        "content": data.layoutContent
      });

    context.w('</main></div><footer id="footer"></footer></body></html>');
  };
}