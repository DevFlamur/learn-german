(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("INYr"),a("0mN4");var i=a("TqRt");t.__esModule=!0,t.default=void 0;var r,n=i(a("PJYZ")),s=i(a("VbXa")),d=i(a("8OQS")),o=i(a("pVnL")),l=i(a("q1tI")),c=i(a("17x9")),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,i=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(S&&!!window.matchMedia(t).matches)},g=function(e){var t=e.fluid,a=e.fixed;return p(t||a).src},p=function(e){if(S&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t]}return e[0]},m=Object.create({}),h=function(e){var t=u(e),a=g(t);return m[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,S="undefined"!=typeof window,y=S&&window.IntersectionObserver,v=new WeakMap;function w(e){return e.map((function(e){var t=e.src,a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},i&&l.default.createElement("source",{type:"image/webp",media:r,srcSet:i,sizes:n}),l.default.createElement("source",{media:r,srcSet:a,sizes:n}))}))}function E(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function A(e){return e.map((function(e){var t=e.src,a=e.media,i=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:i})}))}function I(e){return e.map((function(e){var t=e.src,a=e.media,i=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:i})}))}function L(e,t){var a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?i:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var O=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),v.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),v.set(e,t)),function(){a.unobserve(e),v.delete(e)}},C=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",d=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?L(e,!0):"")+L(e)})).join("")+"<img "+l+s+d+a+i+t+n+r+o+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},z=function(e){var t=e.src,a=e.imageVariants,i=e.generateSources,r=e.spreadProps,n=e.ariaHidden,s=l.default.createElement(B,(0,o.default)({src:t},r,{ariaHidden:n}));return a.length>1?l.default.createElement("picture",null,i(a),s):s},B=l.default.forwardRef((function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,g=e.ariaHidden,p=(0,d.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,o.default)({"aria-hidden":g,sizes:a,srcSet:i,src:r},p,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));B.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var R=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=S&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&y&&!a.isCritical&&!a.seenBefore;var i=a.isCritical||S&&(b||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=O(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=g(t),m[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,s=e.imgStyle,d=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,g=e.placeholderClassName,m=e.fluid,h=e.fixed,b=e.backgroundColor,S=e.durationFadeIn,y=e.Tag,v=e.itemProp,E=e.loading,L=e.draggable,O=!1===this.state.fadeIn||this.state.imgLoaded,R=!0===this.state.fadeIn&&!this.state.imgCached,T=(0,o.default)({opacity:O?1:0,transition:R?"opacity "+S+"ms":"none"},d),V="boolean"==typeof b?"lightgray":b,W={transitionDelay:S+"ms"},k=(0,o.default)({opacity:this.state.imgLoaded?0:1},R&&W,{},d,{},f),N={title:t,alt:this.state.isVisible?"":a,style:k,className:g,itemProp:v};if(m){var x=m,P=p(m);return l.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(P.srcSet)},l.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/P.aspectRatio+"%"}}),V&&l.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:V,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},R&&W)}),P.base64&&l.default.createElement(z,{ariaHidden:!0,src:P.base64,spreadProps:N,imageVariants:x,generateSources:I}),P.tracedSVG&&l.default.createElement(z,{ariaHidden:!0,src:P.tracedSVG,spreadProps:N,imageVariants:x,generateSources:A}),this.state.isVisible&&l.default.createElement("picture",null,w(x),l.default.createElement(B,{alt:a,title:t,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:E,draggable:L})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,o.default)({alt:a,title:t,loading:E},P,{imageVariants:x}))}}))}if(h){var q=h,U=p(h),M=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:U.width,height:U.height},n);return"inherit"===n.display&&delete M.display,l.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:M,ref:this.handleRef,key:"fixed-"+JSON.stringify(U.srcSet)},V&&l.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:V,width:U.width,opacity:this.state.imgLoaded?0:1,height:U.height},R&&W)}),U.base64&&l.default.createElement(z,{ariaHidden:!0,src:U.base64,spreadProps:N,imageVariants:q,generateSources:I}),U.tracedSVG&&l.default.createElement(z,{ariaHidden:!0,src:U.tracedSVG,spreadProps:N,imageVariants:q,generateSources:A}),this.state.isVisible&&l.default.createElement("picture",null,w(q),l.default.createElement(B,{alt:a,title:t,width:U.width,height:U.height,sizes:U.sizes,src:U.src,crossOrigin:this.props.crossOrigin,srcSet:U.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:E,draggable:L})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,o.default)({alt:a,title:t,loading:E},U,{imageVariants:q}))}}))}return null},t}(l.default.Component);R.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var T=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),V=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});R.propTypes={resolutions:T,sizes:V,fixed:c.default.oneOfType([T,c.default.arrayOf(T)]),fluid:c.default.oneOfType([V,c.default.arrayOf(V)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var W=R;t.default=W},INYr:function(e,t,a){"use strict";var i=a("XKFU"),r=a("CkkT")(6),n="findIndex",s=!0;n in[]&&Array(1)[n]((function(){s=!1})),i(i.P+i.F*s,"Array",{findIndex:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),a("nGyu")(n)},XrBh:function(e){e.exports=JSON.parse('{"data":{"placeholderCompletedImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAACK0lEQVQ4y22Uy0vUURTHz6iJhYWgIO1qLe0LgiDaqEkDFrl0485/wSBoFRS0KBctigyT8F7zMU5jZUItAh9RVhb0MnupeW/TWPj+9T1nzjh31B985tzX+d5zzr13iPgzjtTGKPcZ1wyuarsU7NF2HLwAZdovD3wCEeNqwBtwU/u3wGvqXojBjoJZUAHO0cMogq0GtdS3yO028bG+iB1LVOA4PcJC699p/ylwYD94C9ZAFeiixBKLHAEnaUTEL6pgSS7U3eAsSMqkce3gC5gEw+AGuBuMXwFz4AIYApfBIQpyv06PZacM3fuTtcY1ggPgFSWWI+rNZDGuCRSDazS4wv0NeiC+vME+FjsI5hHutIgNSDq1wWYnqP9fJM7W39bUSO04Jdd4/BvW/QAtJAU17omkxZMsan1dIBgPBO/o2C61EzQk0b3E3CUpD34+glYMtFNqI5dWfSB4Ki+IAwmLb/1zSslBfsa6w+A3OzyT07O+g+6v7yzY9zeSOm4XnKDkKq//ifZeqetm+NZbuWvWr8t1yAvy4aQxngFmm6Bxv8BXtCupoMDG9SCC9+ivkPENgeAZcbJ+QTbdKmg9i81gTWXOoUgnWfAT7CoIBU/LBbfeY97qWCDovoOZfIT5p8cpfwDLO6Q8r6l1FwgaNwY4uukw5ZjaAblPPWk+tXgg2IT+kpTC+sSWlKdAWsrBB1uQcvZZpcAUOBYIHgUJYMB5HSvefGHGdeqc/Ov8B9yG/LpcI/R0AAAAAElFTkSuQmCC","aspectRatio":1.3392857142857142,"src":"/static/c944a31775fde5b4e54d8b36a410cab2/630fb/completed_image.png","srcSet":"/static/c944a31775fde5b4e54d8b36a410cab2/5db04/completed_image.png 75w,\\n/static/c944a31775fde5b4e54d8b36a410cab2/6d161/completed_image.png 150w,\\n/static/c944a31775fde5b4e54d8b36a410cab2/630fb/completed_image.png 300w,\\n/static/c944a31775fde5b4e54d8b36a410cab2/62b1f/completed_image.png 450w,\\n/static/c944a31775fde5b4e54d8b36a410cab2/2a4de/completed_image.png 600w,\\n/static/c944a31775fde5b4e54d8b36a410cab2/8755f/completed_image.png 1281w","sizes":"(max-width: 300px) 100vw, 300px"}}}}}')},"o/O+":function(e,t,a){"use strict";a.r(t);var i=a("q1tI"),r=a.n(i),n=a("Bl7J"),s=a("eb58"),d=a("XrBh"),o=a("9eSz"),l=a.n(o),c=function(){var e=d.data;return r.a.createElement(l.a,{fluid:e.placeholderCompletedImage.childImageSharp.fluid})},u=a("Wbzz");var f=function(e){var t=Object(i.useContext)(s.a).getResourceText;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,t("CongratulationText")),r.a.createElement("div",{style:{maxWidth:"200px",margin:"0 auto"}},r.a.createElement(c,null)),r.a.createElement(u.Link,{to:"/results/"},r.a.createElement("input",{className:"LinkButton",type:"button",value:t("Results")})))};t.default=function(){return r.a.createElement(n.a,null,r.a.createElement(f,null))}}}]);
//# sourceMappingURL=component---src-pages-quiz-completion-page-js-ec105c275988a1c58db9.js.map