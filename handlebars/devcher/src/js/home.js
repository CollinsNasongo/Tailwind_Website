(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['home'] = template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"navbar"),depth0,{"name":"navbar","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"hero"),depth0,{"name":"hero","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"content_image"),depth0,{"name":"content_image","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"contact"),depth0,{"name":"contact","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"nav_layout"),depth0,{"name":"nav_layout","fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"main_layout"),depth0,{"name":"main_layout","fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n<div id=\"faq\"></div>\r\n      <!-- Mobile Menu-->\r\n      <div id=\"mobile-menu\" class=\"flex-col  top-20 z-10 right-0 bg-orange-100 w-80 h-full shadow-md shadow-black rounded-md  dark:dk-blue dark:words hidden animate-slideOut lg:hidden fixed\">\r\n        <div  class=\"absolute right-0\">\r\n            <button id=\"close-btn\" class=\"p-2\">\r\n                <svg class=\"w-3 h-3 fill-black dark:bug-fill\" version=\"1.0\" xmlns=\"http://www.w3.org/2000/svg\"\r\n                width=\"512.000000pt\" height=\"512.000000pt\" viewBox=\"0 0 512.000000 512.000000\"\r\n                preserveAspectRatio=\"xMidYMid meet\">\r\n    \r\n                    <g transform=\"translate(0.000000,512.000000) scale(0.100000,-0.100000)\"\r\n                     stroke=\"none\">\r\n                    <path d=\"M271 5109 c-104 -20 -194 -91 -239 -187 -22 -47 -27 -71 -27 -137 0\r\n                    -155 -68 -78 1075 -1220 l1010 -1010 -1019 -1020 c-827 -829 -1022 -1029\r\n                    -1041 -1070 -34 -71 -35 -199 -2 -270 29 -63 93 -129 157 -163 72 -37 187 -42\r\n                    270 -12 58 22 94 56 1083 1044 l1022 1021 1018 -1016 c817 -816 1027 -1021\r\n                    1067 -1040 42 -20 65 -24 145 -24 83 0 101 4 145 27 62 32 129 103 158 166 32\r\n                    68 30 197 -3 267 -19 41 -214 241 -1041 1070 l-1019 1020 1010 1010 c1143\r\n                    1142 1075 1065 1075 1220 0 65 -5 90 -26 135 -81 172 -284 242 -454 158 -26\r\n                    -13 -391 -370 -1057 -1036 l-1018 -1017 -1017 1017 c-667 666 -1032 1023\r\n                    -1058 1036 -34 17 -145 45 -164 41 -3 -1 -26 -5 -50 -10z\"/>\r\n                    </g>\r\n                </svg>\r\n            </button>\r\n        </div>\r\n        <div class=\"menu-border rounded-md w-10/12 mx-auto p-3 mb-5 mt-14\">\r\n            <a href=\"\" class=\"hover:underline\">🤷🏽‍♀️ For Instructors</a>\r\n        </div>\r\n        <div class=\"menu-border rounded-md w-10/12 mx-auto p-3 mb-5\">\r\n            <a href=\"\" class=\"hover:underline\">🎊 Upcoming classes</a>\r\n        </div>\r\n        <div class=\"menu-border rounded-md w-10/12 mx-auto p-3 mb-5\">\r\n            <a href=\"\" class=\"hover:underline\">\r\n                <span role=\"img\" aria-label=\"Shopping emoji\">🛍</span>\r\n                Merch Store\r\n            </a>       \r\n        </div>\r\n    \r\n        <div class=\"w-10/12 mx-auto mt-10\">\r\n            <button class=\"bg-gray-800 text-white  p-3 rounded-xl hover:bg-orange-400 active:bg-blue-300 transition duration-75 min-w-20 dark:bg-orange-400 dark:hover:bg-gray-600 w-full\">\r\n                Sign in\r\n            </button> \r\n        </div>\r\n    </div>\r\n\r\n\r\n       <!-- Comment -->\r\n       <button>\r\n        <svg class=\"w-12 h-12 bg-white rounded-full fixed right-3 bottom-3 z-10\" version=\"1.0\" xmlns=\"http://www.w3.org/2000/svg\" width=\"512.000000pt\" height=\"512.000000pt\" viewBox=\"0 0 512.000000 512.000000\" preserveAspectRatio=\"xMidYMid meet\">\r\n            <g transform=\"translate(0.000000,512.000000) scale(0.100000,-0.100000)\" fill=\"rgb(239, 131, 49)\" stroke=\"none\">\r\n            <path d=\"M2315 5109 c-800 -83 -1501 -518 -1927 -1196 -604 -961 -490 -2237\r\n            274 -3068 425 -462 951 -737 1583 -827 119 -17 512 -16 635 1 622 86 1148 360\r\n            1572 820 349 378 572 861 650 1406 17 118 17 512 0 630 -59 416 -191 769 -410\r\n            1099 -92 140 -185 254 -315 385 -399 404 -893 653 -1462 737 -123 18 -478 26\r\n            -600 13z m1075 -1389 c135 -22 244 -104 303 -228 l32 -67 0 -670 0 -670 -32\r\n            -67 c-60 -127 -171 -209 -312 -230 l-71 -10 0 -219 c0 -121 -3 -219 -6 -219\r\n            -3 0 -150 99 -326 220 l-321 220 -516 0 c-287 0 -542 4 -575 10 -131 21 -234\r\n            98 -293 218 l-38 76 0 670 0 671 32 67 c57 121 168 206 293 227 79 13 1749 13\r\n            1830 1z\"></path>\r\n            </g>\r\n        </svg>\r\n  </button>\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"footer"),depth0,{"name":"footer","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"1_d":  function(fn, props, container, depth0, data, blockParams, depths) {

  var decorators = container.decorators, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"args":["nav_content"],"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":4,"column":11}}}) || fn;
  return fn;
  }

,"useDecorators":true,"4_d":  function(fn, props, container, depth0, data, blockParams, depths) {

  var decorators = container.decorators, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"args":["content"],"data":data,"loc":{"start":{"line":8,"column":0},"end":{"line":12,"column":11}}}) || fn;
  return fn;
  }

,"usePartial":true,"useData":true,"useDepths":true});
})();