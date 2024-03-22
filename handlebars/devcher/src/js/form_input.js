(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
Handlebars.partials['form_input'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<form action=\"\" class=\"flex flex-row justify-between rounded-md but-hov lg:w-96 p-1 but-hov form-border\">\r\n    <input type=\"email\" placeholder=\"Enter your email\" class=\"focus:outline-0 border-none rounded-md w-2/3 p-1 but-hov \">\r\n    <button class=\"bg-gray-800 text-white whitespace-nowrap  p-3 rounded-xl hover:but-hov transition duration-100 \">\r\n        Get Started\r\n    </button>\r\n</form>";
},"useData":true});
})();