(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{375:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));r(80),r(79);function n(t){return t.startsWith("/")?"".concat("http://localhost:1337").concat(t):t}},376:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r(375);function c(t){var e=[];if(t.metaTitle&&e.push({property:"og:title",content:t.metaTitle},{name:"twitter:title",content:t.metaTitle}),t.metaDescription&&e.push({name:"description",content:t.metaDescription},{property:"og:description",content:t.metaDescription},{name:"twitter:description",content:t.metaDescription}),t.shareImage){var r=Object(n.a)(t.shareImage.url);e.push({name:"image",content:r},{property:"og:image",content:r},{name:"twitter:image",content:r})}return t.article&&e.push({property:"og:type",content:"article"}),e.push({name:"twitter:card",content:"summary_large_image"}),e}},377:function(t,e,r){"use strict";r(57);var n=r(375),c={props:{article:{type:Object,default:function(){return{}}}},methods:{getStrapiMedia:n.a}},l=r(68),o={components:{ArticleCard:Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nuxt-link",{key:t.article.id,staticClass:"uk-link-reset",attrs:{to:{name:"articles-slug",params:{slug:t.article.slug}}}},[r("div",{staticClass:"uk-card uk-card-muted"},[r("div",{staticClass:"uk-card-media-top"},[r("img",{attrs:{src:t.getStrapiMedia(t.article.image.url),height:"100"}})]),t._v(" "),r("div",{staticClass:"uk-card-body"},[t.article.category?r("p",{staticClass:"uk-text-uppercase",attrs:{id:"category"}},[t._v("\n        "+t._s(t.article.category.name)+"\n      ")]):t._e(),t._v(" "),r("p",{staticClass:"uk-text-large",attrs:{id:"title"}},[t._v(t._s(t.article.title))]),t._v(" "),r("hr",{staticClass:"uk-divider-small"}),t._v(" "),r("div",{staticClass:"uk-grid-small uk-flex-left",attrs:{"data-uk-grid":"true"}},[r("div",[r("img",{staticClass:"avatar",staticStyle:{position:"static","border-radius":"50%","object-fit":"cover"},attrs:{src:t.getStrapiMedia(t.article.author.picture.url),width:"40px",height:"40px",alt:t.article.title}})]),t._v(" "),r("div",{staticClass:"uk-width-expand"},[r("p",{staticClass:"uk-margin-remove-bottom"},[t._v(t._s(t.article.author.name))])])])])])])}),[],!1,null,null,null).exports},props:{articles:{type:Array,default:function(){return[]}}},computed:{leftArticlesCount:function(){return Math.ceil(this.articles.length/5)},leftArticles:function(){return this.articles.slice(0,this.leftArticlesCount)},rightArticles:function(){return this.articles.slice(this.leftArticlesCount,this.articles.length)}}},d=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"uk-child-width-1-2",attrs:{"uk-grid":""}},[r("div",t._l(t.leftArticles,(function(article){return r("ArticleCard",{key:article.id,attrs:{article:article}})})),1),t._v(" "),r("div",[r("div",{staticClass:"uk-child-width-1-2@m uk-grid-match",attrs:{"uk-grid":""}},t._l(t.rightArticles,(function(article){return r("ArticleCard",{key:article.id,attrs:{article:article}})})),1)])])])}),[],!1,null,null,null);e.a=d.exports},516:function(t,e,r){"use strict";r.r(e);r(56),r(41),r(44),r(69),r(43),r(70);var n=r(27),c=r(5),l=(r(42),r(162),r(18),r(29),r(377)),o=r(376),d=r(375);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={components:{Articles:l.a},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r,n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$strapi,n=t.params,e.next=3,r.find("categories",{slug:n.slug});case 3:return c=e.sent,e.t0=c[0],e.next=7,r.find("articles",{"category.name":n.slug});case 7:return e.t1=e.sent,e.next=10,r.find("global");case 10:return e.t2=e.sent,e.abrupt("return",{category:e.t0,articles:e.t1,global:e.t2});case 12:case"end":return e.stop()}}),e)})))()},head:function(){var t=this.global,e=t.defaultSeo,r=t.favicon,n=t.siteName,c=f(f({},e),{},{metaTitle:"".concat(this.category.name," articles"),metaDescription:"All articles about ".concat(this.category.name)});return{title:c.metaTitle,titleTemplate:"%s | ".concat(n),meta:Object(o.a)(c),link:[{rel:"favicon",href:Object(d.a)(r.url)}]}}},v=r(68),component=Object(v.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("client-only",[r("div",{staticClass:"uk-section"},[r("div",{staticClass:"uk-container uk-container-large"},[r("h1",[t._v(t._s(t.category.name))]),t._v(" "),r("Articles",{attrs:{articles:t.articles||[]}})],1)])])],1)}),[],!1,null,null,null);e.default=component.exports}}]);