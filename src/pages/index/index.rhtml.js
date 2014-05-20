module.exports = function create(__helpers) {
  var empty = __helpers.e,
      notEmpty = __helpers.ne,
      raptor_templates_taglibs_layout_use_tag = require("raptor-templates/taglibs/layout/use-tag"),
      raptor_templates_taglibs_layout_put_tag = require("raptor-templates/taglibs/layout/put-tag"),
      forEach = __helpers.f,
      escapeXml = __helpers.x;

  return function render(data, context) {
    __helpers.t(context, 
      raptor_templates_taglibs_layout_use_tag,
      {
        "template": __helpers.l(require.resolve("../../layouts/master-layout.rhtml"))
      },
      function(_layout) {
        __helpers.t(context, 
          raptor_templates_taglibs_layout_put_tag,
          {
            "into": "title",
            "value": "Suggestions",
            "_layout": _layout
          });
        __helpers.t(context, 
          raptor_templates_taglibs_layout_put_tag,
          {
            "into": "body",
            "_layout": _layout
          },
          function() {
            context.w('<h2>Try Auto Complete .. Simple Polymer Based</h2><section><div style="float:left;width:100%"><auto-complete watermark="Enter 3 letter word to search..." dataList="[&quot;Red&quot;, &quot; Blue&quot;,&#10;        &quot;Green&quot;, &quot;Yellow&quot;, &quot;Yelp&quot;, &quot;Yello Stone&quot;, &quot;Pink&quot;, &quot;Blah&quot;, &quot;position&quot;, &quot;bottom&quot;, &quot;z-index&quot;, &quot;background-color&quot;, &quot;min-width&quot;, &quot;max-width&quot;, &quot;border-top-left-radius&quot;, &quot;border-top-right-radius&quot;, &quot;border-bottom-right-radius&quot;, &quot;border-bottom-left-radius&quot;]"></auto-complete><a href="#datalist">Show Data Source</a></div><div id="datalist" style="float:right;border-top:solid 1px red"><h3>Auto Complete - searches and recommends from the following data list </h3><ul class="autocomplete-ds-items">');

            forEach(data.items, function(item) {
              context.w('<li>' +
                escapeXml(item) +
                '</li>');
            });

            context.w('</ul></div></section>');
          });
      });
  };
}