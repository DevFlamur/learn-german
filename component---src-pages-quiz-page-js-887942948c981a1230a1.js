(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"5AJ6":function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a("k1TG"),r=a("q1tI"),i=a.n(r),l=a("HR5l");function c(e,t){var a=function(t,a){return i.a.createElement(l.a,Object(n.a)({ref:a},t),e)};return a.muiName=l.a.muiName,i.a.memo(i.a.forwardRef(a))}},Jikx:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),i=a("YpLw"),l=a("eb58"),c=a("tRbT"),o=a("aXB2"),s=a("k1TG"),d=a("iuhU"),u=a("ye/S"),p=a("H2TA"),m=a("VD++"),g=a("NqtD"),b=n.forwardRef((function(e,t){var a=e.children,r=e.classes,i=e.className,l=e.disabled,c=void 0!==l&&l,u=e.disableFocusRipple,p=void 0!==u&&u,b=e.onChange,x=e.onClick,h=e.selected,f=e.size,v=void 0===f?"medium":f,E=e.value,w=Object(o.a)(e,["children","classes","className","disabled","disableFocusRipple","onChange","onClick","selected","size","value"]);return n.createElement(m.a,Object(s.a)({className:Object(d.a)(r.root,i,c&&r.disabled,h&&r.selected,"medium"!==v&&r["size".concat(Object(g.a)(v))]),disabled:c,focusRipple:!p,ref:t,onClick:function(e){x&&(x(e,E),e.isDefaultPrevented())||b&&b(e,E)},onChange:b,value:E,"aria-pressed":h},w),n.createElement("span",{className:r.label},a))})),x=Object(p.a)((function(e){return{root:Object(s.a)({},e.typography.button,{boxSizing:"border-box",borderRadius:e.shape.borderRadius,height:48,padding:"0px 12px",border:"1px solid ".concat(Object(u.c)(e.palette.action.active,.12)),color:Object(u.c)(e.palette.action.active,.38),"&$selected":{color:e.palette.action.active,backgroundColor:Object(u.c)(e.palette.action.active,.12),"&:hover":{backgroundColor:Object(u.c)(e.palette.action.active,.15)},"& + &":{borderLeft:0,marginLeft:0}},"&$disabled":{color:Object(u.c)(e.palette.action.disabled,.12)},"&:hover":{textDecoration:"none",backgroundColor:Object(u.c)(e.palette.text.primary,.05),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}}}),disabled:{},selected:{},label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},sizeSmall:{height:40,padding:"0px 8px",fontSize:e.typography.pxToRem(13)},sizeLarge:{height:56,padding:"0px 16px",fontSize:e.typography.pxToRem(15)}}}),{name:"MuiToggleButton"})(b),h=a("t8Zj");a("TOwV");var f=n.forwardRef((function(e,t){var a=e.children,r=e.classes,i=e.className,l=e.exclusive,c=void 0!==l&&l,u=e.onChange,p=e.size,m=void 0===p?"medium":p,b=e.value,x=Object(o.a)(e,["children","classes","className","exclusive","onChange","size","value"]),f=function(e,t){if(u){var a,n=b&&b.indexOf(t);b&&n>=0?(a=Object(h.a)(b)).splice(n,1):a=b?[].concat(Object(h.a)(b),[t]):[t],u(e,a)}},v=function(e,t){u&&u(e,b===t?null:t)};return n.createElement("div",Object(s.a)({className:Object(d.a)(r.root,i),ref:t,role:"group"},x),n.Children.map(a,(function(e){if(!n.isValidElement(e))return null;var t=e.props,a=t.selected,i=t.value,l=void 0===a?function(e,t){return void 0!==t&&void 0!==e&&(Array.isArray(t)?t.indexOf(e)>=0:e===t)}(i,b):a;return n.cloneElement(e,{className:Object(d.a)(r.grouped,e.props.className,"medium"!==m&&r["groupedSize".concat(Object(g.a)(m))]),selected:l,onChange:c?v:f,size:m})})))})),v=Object(p.a)((function(e){return{root:{backgroundColor:e.palette.background.paper,borderRadius:e.shape.borderRadius,display:"inline-flex"},grouped:{padding:"0px 11px 0px 12px","&:not(:first-child)":{marginLeft:-1,borderLeft:"1px solid transparent",borderTopLeftRadius:0,borderBottomLeftRadius:0},"&:not(:last-child)":{borderTopRightRadius:0,borderBottomRightRadius:0}},groupedSizeSmall:{padding:"0px 7px 0px 8px"},groupedSizeLarge:{padding:"0px 15px 0px 16px"}}}),{name:"MuiToggleButtonGroup"})(f);var E=function(e){var t=Object(n.useContext)(l.a).getResourceText;return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{item:!0},r.a.createElement(v,{value:e.articleId,onChange:function(t,a){e.setAnswer({articleId:a,indexValue:e.index})},exclusive:!0,size:"large"},r.a.createElement(x,{key:1,value:1},t("Der")),r.a.createElement(x,{key:2,value:2},t("Die")),r.a.createElement(x,{key:3,value:3},t("Das")))))},w=a("cZxf"),C=a("PyVJ"),O=a.n(C);var j=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{container:!0,spacing:0},r.a.createElement(c.a,{item:!0,xs:11,style:{height:"40px",textAlign:"center"}},r.a.createElement("h3",null,e.word," ")),r.a.createElement(c.a,{item:!0,xs:1,style:{height:"40px",textAlign:"center"}},r.a.createElement(O.a,{style:{height:"40px",width:"35px"},onClick:function(){}}))))},y=a("Wbzz"),k=a("gurl");var R=function(){var e=Object(n.useContext)(k.a),t=e.checkQuestion,a=e.setAnswer,l=e.getIsWrongText,c=e.getDisplayedQuestions,o=e.getCurrentAnswer,s=e.getCurrentWord,d=e.getWordsSource;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0 1.0875rem 1.45rem"}},r.a.createElement(w.a,{correctPoints:o().correctAnswerCount,wrongPoints:o().wrongAnswerCount}),r.a.createElement("br",null),r.a.createElement(E,{articleId:o().answer,setAnswer:a,index:o().index,currentAnswer:o().answer}),r.a.createElement("br",null),r.a.createElement(j,{word:s().word}),r.a.createElement("p",{style:{color:"red",textAlign:"center"}},l()),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(i.a,{checkQuestion:function(e,a,n){t(e,a,n)&&Object(y.navigate)("/quizCompletionPage")},answer:o().answer,answerCorrect:s().correct,questionType:1}),r.a.createElement("br",null),r.a.createElement("p",null,c().length,"/",d().length),r.a.createElement("br",null)))},z=a("rvhV");t.default=function(){return r.a.createElement(z.a,null,r.a.createElement(R,null))}}}]);
//# sourceMappingURL=component---src-pages-quiz-page-js-887942948c981a1230a1.js.map