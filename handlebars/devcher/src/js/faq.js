(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['faq'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"w-full h-auto lg:w-11/12\">\r\n            <h3 class=\"mx-auto text-2xl font-bold text-left my-4\">\r\n                "
    + alias4(((helper = (helper = lookupProperty(helpers,"question") || (depth0 != null ? lookupProperty(depth0,"question") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"question","hash":{},"data":data,"loc":{"start":{"line":10,"column":16},"end":{"line":10,"column":28}}}) : helper)))
    + "  \r\n            </h3>\r\n            <p class=\"text-left\">\r\n                "
    + alias4(((helper = (helper = lookupProperty(helpers,"answer") || (depth0 != null ? lookupProperty(depth0,"answer") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"answer","hash":{},"data":data,"loc":{"start":{"line":13,"column":16},"end":{"line":13,"column":26}}}) : helper)))
    + " \r\n            </p>\r\n        </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<section class=\" w-full h-auto bg-orange-100 p-14 dark:bg-gray-800\">\r\n    <h2 class=\"text-4xl font-bold text-wrap text-left text-gray-800 dark:text-white\">\r\n        Frequently asked questions\r\n    </h2>\r\n    \r\n    <section class=\"text-gray-800 grid grid-cols-1 lg:grid-cols-3  gap-2 dark:text-white\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"faqs") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":8},"end":{"line":16,"column":17}}})) != null ? stack1 : "")
    + "    </section>\r\n\r\n    <section class=\"w-full my-28\">\r\n        <figure>\r\n            <img src=\"./img/classroom-hashtags-316x179.png\" alt=\"Classroom Hashtags\" class=\"mx-auto\">\r\n        </figure>\r\n        <section class=\"flex flex-row justify-center\">\r\n            <a href=\"\" class=\"m-2\">\r\n                <img src=\"./img/twitter.png\" alt=\"Twitter logo\" class=\"w-6 h-auto\">\r\n            </a>\r\n            <a href=\"\" class=\"m-2\">\r\n                <img src=\"./img/facebook.png\" alt=\"Facebook logo\" class=\"w-6 h-auto\">\r\n            </a>\r\n        </section>\r\n        <p class=\"text-left text-sm sm:text-center text-gray-800 dark:text-white\">\r\n            We’re social, and we don’t bite. Honestly, say hello!\r\n        </p>\r\n    </section>\r\n    \r\n</section>";
},"useData":true});
})();