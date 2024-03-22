(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
Handlebars.partials['nav_layout'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<header id=\"header\" class=\"w-11/12 mx-auto mt-6 text-sm p-2  dark:text-white lg:w-10/12\" >\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"nav_content"),depth0,{"name":"nav_content","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</header>";
},"usePartial":true,"useData":true});
})();