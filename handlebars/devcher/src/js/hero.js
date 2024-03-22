(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
Handlebars.partials['hero'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<!-- Hero -->\r\n<section class=\"flex flex-row w-full py-5 h-screen justify-center relative lg:justify-start md:justify-start items-center\">\r\n    <section class=\"w-full lg:w-1/2 md:w-1/2\">\r\n        <h1 class=\"text-4xl font-extrabold text-gray-800  leading-relaxed dark:text-white\">\r\n            Join live classes with the best web engineers in the industry\r\n        </h1>\r\n        <section class=\"w-full mt-4 mb-16 text-gray-800 text-sm text-justify lg:w-96 dark:text-white\">\r\n            <p>\r\n                Learn or stay up to date more effectively with real-time instruction from the best engineers in the game \r\n            </p>\r\n            <p>\r\n                You'll soon agree with us that there's nothing quite like real-time instruction \r\n            </p>\r\n        </section>\r\n\r\n        \r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"form_input"),depth0,{"name":"form_input","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "        \r\n    </section>\r\n\r\n    <section class=\" bg-gradient-to-r from-orange-400 to-pink-600 rounded-xl hidden md:block h-4/5 w-2/5 absolute right-0 top-10\">\r\n        <div class=\"bg-gradient-to-r from-orange-400 to-pink-600 rounded-xl\">  \r\n        </div>\r\n    </section>\r\n\r\n    <figure class=\"hidden absolute right-32 top-32 w-2/5 h-auto md:block\">\r\n        <img src=\"./img/coders-home-chat-581x503.png\" width=\"581\" height=\"503\" alt=\"Coders home Chat\">\r\n    </figure>\r\n</section>";
},"usePartial":true,"useData":true});
})();