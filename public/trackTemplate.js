(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['trackTemplate'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li>\n<section class=\"track-item\">\n    <div id=\"track-info\" data-title=\""
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\" data-artist=\""
    + alias4(((helper = (helper = helpers.artist || (depth0 != null ? depth0.artist : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"artist","hash":{},"data":data}) : helper)))
    + "\" data-album=\""
    + alias4(((helper = (helper = helpers.album || (depth0 != null ? depth0.album : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"album","hash":{},"data":data}) : helper)))
    + "\" data-year=\""
    + alias4(((helper = (helper = helpers.year || (depth0 != null ? depth0.year : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"year","hash":{},"data":data}) : helper)))
    + "\" data-genre=\""
    + alias4(((helper = (helper = helpers.genre || (depth0 != null ? depth0.genre : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"genre","hash":{},"data":data}) : helper)))
    + "\">\n      <ul>\n        <li id=\"track-name\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</li>\n\n        <li id=\"artist-name\">"
    + alias4(((helper = (helper = helpers.artist || (depth0 != null ? depth0.artist : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"artist","hash":{},"data":data}) : helper)))
    + "</li>\n\n        <li id=\"album-name\">"
    + alias4(((helper = (helper = helpers.album || (depth0 != null ? depth0.album : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"album","hash":{},"data":data}) : helper)))
    + "</li>\n\n        <li id=\"album-year\">"
    + alias4(((helper = (helper = helpers.year || (depth0 != null ? depth0.year : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"year","hash":{},"data":data}) : helper)))
    + "</li>\n\n        <li id=\"album-genre\">"
    + alias4(((helper = (helper = helpers.genre || (depth0 != null ? depth0.genre : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"genre","hash":{},"data":data}) : helper)))
    + "</li>\n      <ul>\n    </div>\n    <div id=\"cover-art-container\">\n      <img src=\"/"
    + alias4(((helper = (helper = helpers.artist || (depth0 != null ? depth0.artist : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"artist","hash":{},"data":data}) : helper)))
    + "/"
    + alias4(((helper = (helper = helpers.album || (depth0 != null ? depth0.album : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"album","hash":{},"data":data}) : helper)))
    + "/"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = helpers.album || (depth0 != null ? depth0.album : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"album","hash":{},"data":data}) : helper)))
    + " + cover art\">\n    </div>\n    <div id=\"audio-player-container\">\n      <audio id=\"player\" controls>\n        <source src=\"/tracks/"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" type=\"audio/mp3\">\n      </audio>\n    </div>\n\n</section>\n</li>\n";
},"useData":true});
})();