(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
Handlebars.partials['navbar'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<nav class=\"flex flex-row justify-between items-center\">\r\n    <div class=\"flex flex-row justify-start items-center gap-16\">\r\n        <!-- Logo -->\r\n            <div class=\"max-w-14 h-auto border-solid border border-black rounded-full flex justify-center\">\r\n                <a href=\"\">\r\n                    <img src=\"./img/logo-300x300.png\" alt=\"Devcher logo\" height=\"300\" width=\"300\" class=\"w-11 h-auto\">\r\n                </a>\r\n            </div>\r\n\r\n        <!-- Links -->\r\n            <div class=\" hidden lg:block\">\r\n                <div class=\"flex flex-row items-center justify-between\">\r\n                    <div class=\"py-1 px-6 mr-3\">\r\n                        <a href=\"\" class=\"hover:underline\">🤷🏽‍♀️ For Instructors</a>\r\n                    </div>\r\n                    <div class=\"py-1 px-6 mr-3\">\r\n                        <a href=\"\" class=\"hover:underline\">🎊 Upcoming classes</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n    </div>\r\n\r\n    <div class=\"flex flex-row justify-end lg:gap-9 items-center w-1/6 lg:w-2/5\">\r\n        <!-- Light/dark -->\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"light_dark"),depth0,{"name":"light_dark","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "        \r\n        <!-- Merch Store -->\r\n        <div class=\"hidden lg:block\">\r\n            <a href=\"\" class=\"hover:underline\">\r\n                <span role=\"img\" aria-label=\"Shopping emoji\">🛍</span>\r\n                Merch Store\r\n            </a>       \r\n        </div>\r\n    \r\n        <!-- Sign up -->\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"sign_in"),depth0,{"name":"sign_in","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    \r\n        <!-- Burger -->\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"burger"),depth0,{"name":"burger","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    </div>\r\n</nav>\r\n";
},"usePartial":true,"useData":true});
})();