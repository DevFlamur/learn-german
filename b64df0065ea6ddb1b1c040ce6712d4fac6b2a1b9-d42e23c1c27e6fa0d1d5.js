(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{PyVJ:function(e,t,a){"use strict";var o=a("5NKs");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(a("q1tI")),r=(0,o(a("8/g6")).default)(n.default.createElement("path",{d:"M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"PlayCircleOutline");t.default=r},YpLw:function(e,t,a){"use strict";var o=a("q1tI"),n=a.n(o),r=a("eb58");t.a=function(e){var t=Object(o.useContext)(r.a).getResourceText;return n.a.createElement(n.a.Fragment,null,n.a.createElement("input",{className:"LinkButton",type:"button",value:t("Next"),onClick:function(t){return e.checkQuestion(e.answer,e.answerCorrect,e.questionType)}}))}},cZxf:function(e,t,a){"use strict";var o=a("q1tI"),n=a.n(o),r=a("eb58"),c=a("R/WZ"),l=a("k1TG"),i=a("aXB2"),s=a("iuhU"),d=a("5AJ6"),p=Object(d.a)(o.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),m=a("H2TA"),u=a("ye/S"),g=a("bfFb"),b=a("NqtD"),f=a("VD++");function y(e){return"Backspace"===e.key||"Delete"===e.key}var v=o.forwardRef((function(e,t){var a=e.avatar,n=e.classes,r=e.className,c=e.clickable,d=e.color,m=void 0===d?"default":d,u=e.component,v=e.deleteIcon,x=e.disabled,h=void 0!==x&&x,C=e.icon,j=e.label,k=e.onClick,w=e.onDelete,O=e.onKeyDown,S=e.onKeyUp,I=e.size,z=void 0===I?"medium":I,E=e.variant,T=void 0===E?"default":E,$=Object(i.a)(e,["avatar","classes","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant"]),N=o.useRef(null),R=Object(g.a)(N,t),P=function(e){e.stopPropagation(),w&&w(e)},W=!(!1===c||!k)||c,L="small"===z,M=u||(W?f.a:"div"),D=M===f.a?{component:"div"}:{},K=null;if(w){var q=Object(s.a)("default"!==m&&("default"===T?n["deleteIconColor".concat(Object(b.a)(m))]:n["deleteIconOutlinedColor".concat(Object(b.a)(m))]),L&&n.deleteIconSmall);K=v&&o.isValidElement(v)?o.cloneElement(v,{className:Object(s.a)(v.props.className,n.deleteIcon,q),onClick:P}):o.createElement(p,{className:Object(s.a)(n.deleteIcon,q),onClick:P})}var B=null;a&&o.isValidElement(a)&&(B=o.cloneElement(a,{className:Object(s.a)(n.avatar,a.props.className,L&&n.avatarSmall,"default"!==m&&n["avatarColor".concat(Object(b.a)(m))])}));var F=null;return C&&o.isValidElement(C)&&(F=o.cloneElement(C,{className:Object(s.a)(n.icon,C.props.className,L&&n.iconSmall,"default"!==m&&n["iconColor".concat(Object(b.a)(m))])})),o.createElement(M,Object(l.a)({role:W||w?"button":void 0,className:Object(s.a)(n.root,r,"default"!==m&&[n["color".concat(Object(b.a)(m))],W&&n["clickableColor".concat(Object(b.a)(m))],w&&n["deletableColor".concat(Object(b.a)(m))]],"default"!==T&&[n.outlined,{primary:n.outlinedPrimary,secondary:n.outlinedSecondary}[m]],h&&n.disabled,L&&n.sizeSmall,W&&n.clickable,w&&n.deletable),"aria-disabled":!!h||void 0,tabIndex:W||w?0:void 0,onClick:k,onKeyDown:function(e){e.currentTarget===e.target&&y(e)&&e.preventDefault(),O&&O(e)},onKeyUp:function(e){e.currentTarget===e.target&&(w&&y(e)?w(e):"Escape"===e.key&&N.current&&N.current.blur()),S&&S(e)},ref:R},D,$),B||F,o.createElement("span",{className:Object(s.a)(n.label,L&&n.labelSmall)},j),K)})),x=Object(m.a)((function(e){var t="light"===e.palette.type?e.palette.grey[300]:e.palette.grey[700],a=Object(u.c)(e.palette.text.primary,.26);return{root:{fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:e.palette.getContrastText(t),backgroundColor:t,borderRadius:16,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:"none",padding:0,verticalAlign:"middle",boxSizing:"border-box","&$disabled":{opacity:.5,pointerEvents:"none"},"& $avatar":{marginLeft:5,marginRight:-6,width:24,height:24,color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],fontSize:e.typography.pxToRem(12)},"& $avatarColorPrimary":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark},"& $avatarColorSecondary":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.dark},"& $avatarSmall":{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)}},sizeSmall:{height:24},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},disabled:{},clickable:{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover, &:focus":{backgroundColor:Object(u.b)(t,.08)},"&:active":{boxShadow:e.shadows[1]}},clickableColorPrimary:{"&:hover, &:focus":{backgroundColor:Object(u.b)(e.palette.primary.main,.08)}},clickableColorSecondary:{"&:hover, &:focus":{backgroundColor:Object(u.b)(e.palette.secondary.main,.08)}},deletable:{"&:focus":{backgroundColor:Object(u.b)(t,.08)}},deletableColorPrimary:{"&:focus":{backgroundColor:Object(u.b)(e.palette.primary.main,.2)}},deletableColorSecondary:{"&:focus":{backgroundColor:Object(u.b)(e.palette.secondary.main,.2)}},outlined:{backgroundColor:"transparent",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(u.c)(e.palette.text.primary,e.palette.action.hoverOpacity)},"& $avatar":{marginLeft:4},"& $avatarSmall":{marginLeft:2},"& $icon":{marginLeft:4},"& $iconSmall":{marginLeft:2},"& $deleteIcon":{marginRight:5},"& $deleteIconSmall":{marginRight:3}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(e.palette.primary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(u.c)(e.palette.primary.main,e.palette.action.hoverOpacity)}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(e.palette.secondary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(u.c)(e.palette.secondary.main,e.palette.action.hoverOpacity)}},avatar:{},avatarSmall:{},avatarColorPrimary:{},avatarColorSecondary:{},icon:{color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],marginLeft:5,marginRight:-6},iconSmall:{width:18,height:18,marginLeft:4,marginRight:-4},iconColorPrimary:{color:"inherit"},iconColorSecondary:{color:"inherit"},label:{overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},labelSmall:{paddingLeft:8,paddingRight:8},deleteIcon:{WebkitTapHighlightColor:"transparent",color:a,height:22,width:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:Object(u.c)(a,.4)}},deleteIconSmall:{height:16,width:16,marginRight:4,marginLeft:-4},deleteIconColorPrimary:{color:Object(u.c)(e.palette.primary.contrastText,.7),"&:hover, &:active":{color:e.palette.primary.contrastText}},deleteIconColorSecondary:{color:Object(u.c)(e.palette.secondary.contrastText,.7),"&:hover, &:active":{color:e.palette.secondary.contrastText}},deleteIconOutlinedColorPrimary:{color:Object(u.c)(e.palette.primary.main,.7),"&:hover, &:active":{color:e.palette.primary.main}},deleteIconOutlinedColorSecondary:{color:Object(u.c)(e.palette.secondary.main,.7),"&:hover, &:active":{color:e.palette.secondary.main}}}}),{name:"MuiChip"})(v),h=a("jZk8"),C=a.n(h),j=Object(c.a)((function(e){return{root:{display:"flex",justifyContent:"center",flexWrap:"wrap","& > *":{margin:e.spacing(.5)}}}}));t.a=function(e){var t=j(),a=Object(o.useContext)(r.a).getResourceText;return n.a.createElement("div",{className:t.root},n.a.createElement(x,{variant:"outlined",size:"medium",icon:n.a.createElement(C.a,null),label:a("Correct")+"  "+e.correctPoints,clickable:!0,color:"primary"}),n.a.createElement(x,{variant:"outlined",size:"medium",icon:n.a.createElement(C.a,null),label:a("Wrong")+"  "+e.wrongPoints,color:"secondary"}))}},jZk8:function(e,t,a){"use strict";var o=a("5NKs");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(a("q1tI")),r=(0,o(a("8/g6")).default)(n.default.createElement("path",{d:"M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"}),"Face");t.default=r},tRbT:function(e,t,a){"use strict";var o=a("aXB2"),n=a("k1TG"),r=a("q1tI"),c=a("iuhU"),l=a("H2TA"),i=[0,1,2,3,4,5,6,7,8,9,10],s=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=parseFloat(e);return"".concat(a/t).concat(String(e).replace(String(a),"")||"px")}var p=r.forwardRef((function(e,t){var a=e.alignContent,l=void 0===a?"stretch":a,i=e.alignItems,s=void 0===i?"stretch":i,d=e.classes,p=e.className,m=e.component,u=void 0===m?"div":m,g=e.container,b=void 0!==g&&g,f=e.direction,y=void 0===f?"row":f,v=e.item,x=void 0!==v&&v,h=e.justify,C=void 0===h?"flex-start":h,j=e.lg,k=void 0!==j&&j,w=e.md,O=void 0!==w&&w,S=e.sm,I=void 0!==S&&S,z=e.spacing,E=void 0===z?0:z,T=e.wrap,$=void 0===T?"wrap":T,N=e.xl,R=void 0!==N&&N,P=e.xs,W=void 0!==P&&P,L=e.zeroMinWidth,M=void 0!==L&&L,D=Object(o.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),K=Object(c.a)(d.root,p,b&&[d.container,0!==E&&d["spacing-xs-".concat(String(E))]],x&&d.item,M&&d.zeroMinWidth,"row"!==y&&d["direction-xs-".concat(String(y))],"wrap"!==$&&d["wrap-xs-".concat(String($))],"stretch"!==s&&d["align-items-xs-".concat(String(s))],"stretch"!==l&&d["align-content-xs-".concat(String(l))],"flex-start"!==C&&d["justify-xs-".concat(String(C))],!1!==W&&d["grid-xs-".concat(String(W))],!1!==I&&d["grid-sm-".concat(String(I))],!1!==O&&d["grid-md-".concat(String(O))],!1!==k&&d["grid-lg-".concat(String(k))],!1!==R&&d["grid-xl-".concat(String(R))]);return r.createElement(u,Object(n.a)({className:K,ref:t},D))})),m=Object(l.a)((function(e){return Object(n.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var a={};return i.forEach((function(o){var n=e.spacing(o);0!==n&&(a["spacing-".concat(t,"-").concat(o)]={margin:"-".concat(d(n,2)),width:"calc(100% + ".concat(d(n),")"),"& > $item":{padding:d(n,2)}})})),a}(e,"xs"),e.breakpoints.keys.reduce((function(t,a){return function(e,t,a){var o={};s.forEach((function(e){var t="grid-".concat(a,"-").concat(e);if(!0!==e)if("auto"!==e){var n="".concat(Math.round(e/12*1e8)/1e6,"%");o[t]={flexBasis:n,flexGrow:0,maxWidth:n}}else o[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else o[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===a?Object(n.a)(e,o):e[t.breakpoints.up(a)]=o}(t,e,a),t}),{}))}),{name:"MuiGrid"})(p);t.a=m}}]);
//# sourceMappingURL=b64df0065ea6ddb1b1c040ce6712d4fac6b2a1b9-d42e23c1c27e6fa0d1d5.js.map