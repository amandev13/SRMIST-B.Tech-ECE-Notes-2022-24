"use strict";(self.webpackChunkece_college_notes=self.webpackChunkece_college_notes||[]).push([[187],{1187:function(t,e,r){r.r(e);var i=r(8214),n=r(5861),a=r(885),o=r(2791),l=r(6871),c=r(1943),s=r(890),d=r(5519),h=r(6934),u=r(4554),v=r(184),f=(0,h.ZP)(u.Z)({display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100%",height:"100vh","> *":{width:"100%"}});e.default=function(){var t=(0,l.TH)(),e=(0,o.useState)(null),r=(0,a.Z)(e,2),h=r[0],u=r[1],p=(0,o.useState)([]),g=(0,a.Z)(p,2),m=g[0],w=g[1],x=(0,o.useMemo)((function(){var e=t.pathname.split("/").pop();return[e.replace("-",""),e.split("-").map((function(t){return t.charAt(0).toUpperCase()+t.slice(1)})).join(" ")]}),[t]),b=(0,a.Z)(x,2),Z=b[0],S=b[1];return(0,o.useEffect)((function(){var t=function(){var t=(0,n.Z)((0,i.Z)().mark((function t(){var e,r;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.Semesters.getAllSemesters();case 2:e=t.sent,r=e.find((function(t){return t.name===S})),u(r);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();h||t()}),[h,S]),(0,o.useEffect)((function(){var t=function(){var t=(0,n.Z)((0,i.Z)().mark((function t(){var e;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.Semesters.getCoursesOfSemester(Z);case 2:e=t.sent,w(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();0===m.length&&t()}),[m,Z]),(0,v.jsxs)(f,{children:[(0,v.jsx)(s.Z,{variant:"h1",fontSize:"4rem",children:S}),(0,v.jsx)(d.Z,{})]})}},5519:function(t,e,r){var i=r(3366),n=r(7462),a=r(2791),o=r(8182),l=r(4419),c=r(2065),s=r(6934),d=r(1402),h=r(133),u=r(184),v=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],f=(0,s.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:function(t,e){var r=t.ownerState;return[e.root,r.absolute&&e.absolute,e[r.variant],r.light&&e.light,"vertical"===r.orientation&&e.vertical,r.flexItem&&e.flexItem,r.children&&e.withChildren,r.children&&"vertical"===r.orientation&&e.withChildrenVertical,"right"===r.textAlign&&"vertical"!==r.orientation&&e.textAlignRight,"left"===r.textAlign&&"vertical"!==r.orientation&&e.textAlignLeft]}})((function(t){var e=t.theme,r=t.ownerState;return(0,n.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(e.vars||e).palette.divider,borderBottomWidth:"thin"},r.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},r.light&&{borderColor:e.vars?"rgba(".concat(e.vars.palette.dividerChannel," / 0.08)"):(0,c.Fq)(e.palette.divider,.08)},"inset"===r.variant&&{marginLeft:72},"middle"===r.variant&&"horizontal"===r.orientation&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},"middle"===r.variant&&"vertical"===r.orientation&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},"vertical"===r.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},r.flexItem&&{alignSelf:"stretch",height:"auto"})}),(function(t){var e=t.theme,r=t.ownerState;return(0,n.Z)({},r.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:"thin solid ".concat((e.vars||e).palette.divider),top:"50%",content:'""',transform:"translateY(50%)"}})}),(function(t){var e=t.theme,r=t.ownerState;return(0,n.Z)({},r.children&&"vertical"===r.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:"thin solid ".concat((e.vars||e).palette.divider),transform:"translateX(0%)"}})}),(function(t){var e=t.ownerState;return(0,n.Z)({},"right"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})})),p=(0,s.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:function(t,e){var r=t.ownerState;return[e.wrapper,"vertical"===r.orientation&&e.wrapperVertical]}})((function(t){var e=t.theme,r=t.ownerState;return(0,n.Z)({display:"inline-block",paddingLeft:"calc(".concat(e.spacing(1)," * 1.2)"),paddingRight:"calc(".concat(e.spacing(1)," * 1.2)")},"vertical"===r.orientation&&{paddingTop:"calc(".concat(e.spacing(1)," * 1.2)"),paddingBottom:"calc(".concat(e.spacing(1)," * 1.2)")})})),g=a.forwardRef((function(t,e){var r=(0,d.Z)({props:t,name:"MuiDivider"}),a=r.absolute,c=void 0!==a&&a,s=r.children,g=r.className,m=r.component,w=void 0===m?s?"div":"hr":m,x=r.flexItem,b=void 0!==x&&x,Z=r.light,S=void 0!==Z&&Z,A=r.orientation,C=void 0===A?"horizontal":A,I=r.role,R=void 0===I?"hr"!==w?"separator":void 0:I,k=r.textAlign,j=void 0===k?"center":k,y=r.variant,L=void 0===y?"fullWidth":y,W=(0,i.Z)(r,v),D=(0,n.Z)({},r,{absolute:c,component:w,flexItem:b,light:S,orientation:C,role:R,textAlign:j,variant:L}),T=function(t){var e=t.absolute,r=t.children,i=t.classes,n=t.flexItem,a=t.light,o=t.orientation,c=t.textAlign,s={root:["root",e&&"absolute",t.variant,a&&"light","vertical"===o&&"vertical",n&&"flexItem",r&&"withChildren",r&&"vertical"===o&&"withChildrenVertical","right"===c&&"vertical"!==o&&"textAlignRight","left"===c&&"vertical"!==o&&"textAlignLeft"],wrapper:["wrapper","vertical"===o&&"wrapperVertical"]};return(0,l.Z)(s,h.V,i)}(D);return(0,u.jsx)(f,(0,n.Z)({as:w,className:(0,o.Z)(T.root,g),role:R,ref:e,ownerState:D},W,{children:s?(0,u.jsx)(p,{className:T.wrapper,ownerState:D,children:s}):null}))}));e.Z=g}}]);
//# sourceMappingURL=187.4ce5126f.chunk.js.map