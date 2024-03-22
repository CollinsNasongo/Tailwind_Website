(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['list_item'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"flex flex-row justify-items-start items-center\">\r\n        <div class=\"m-2\">\r\n            <button>\r\n                <svg class=\"w-5 h-5\" version=\"1.0\" xmlns=\"http://www.w3.org/2000/svg\" width=\"512.000000pt\" height=\"512.000000pt\" viewBox=\"0 0 512.000000 512.000000\" preserveAspectRatio=\"xMidYMid meet\">\r\n\r\n                    <g transform=\"translate(0.000000,512.000000) scale(0.100000,-0.100000)\" fill=\"rgb(239, 131, 49)\" stroke=\"none\">\r\n                        <path d=\"M2330 5110 c-494 -48 -950 -230 -1350 -538 -195 -150 -448 -432 -594\r\n                        -662 -63 -99 -186 -351 -230 -471 -49 -134 -102 -340 -128 -499 -31 -195 -31\r\n                        -565 0 -760 45 -276 116 -498 237 -745 132 -269 269 -460 489 -681 221 -220\r\n                        412 -357 681 -489 247 -121 469 -192 745 -237 195 -31 565 -31 760 0 276 45\r\n                        498 116 745 237 269 132 460 269 681 489 220 221 357 412 489 681 88 179 132\r\n                        296 180 476 63 240 78 371 78 649 0 278 -15 409 -78 649 -48 180 -92 297 -180\r\n                        476 -132 269 -269 460 -489 681 -221 220 -412 357 -681 489 -246 121 -474 193\r\n                        -740 235 -147 23 -475 34 -615 20z m1569 -1452 c50 -16 127 -91 148 -146 24\r\n                        -64 22 -147 -6 -205 -32 -65 -1678 -1699 -1752 -1740 -72 -38 -156 -38 -228 1\r\n                        -42 22 -800 701 -929 832 -51 51 -76 113 -75 185 2 151 113 253 263 243 36 -3\r\n                        80 -12 97 -22 27 -13 532 -468 696 -625 l47 -46 748 747 c411 410 761 753 779\r\n                        762 69 35 131 39 212 14z\"></path>\r\n                    </g>\r\n                </svg>\r\n            </button>\r\n        </div>\r\n        <p>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"list_item") || (depth0 != null ? lookupProperty(depth0,"list_item") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"list_item","hash":{},"data":data,"loc":{"start":{"line":25,"column":11},"end":{"line":25,"column":24}}}) : helper)))
    + "</p>\r\n    </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"list_items") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":4},"end":{"line":27,"column":13}}})) != null ? stack1 : "")
    + "</div>";
},"useData":true});
})();