(this["webpackJsonpsas-fe"]=this["webpackJsonpsas-fe"]||[]).push([[17],{1129:function(e,t,a){"use strict";a.d(t,"b",(function(){return i}));var r=a(38),n=a(39);function i(e){return Object(r.a)("MuiCheckbox",e)}var c=Object(n.a)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]);t.a=c},1156:function(e,t,a){"use strict";var r=a(1193),n=a(1194),i=a(1195),c=a(1041),o=a(1196),s=a(0);t.a=function(e){var t=e.title,a=e.content,l=e.cancel,d=e.confirm,b=e.cancelDialog,j=e.confirmDialog;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(r.a,{id:"alert-dialog-title",children:t}),Object(s.jsx)(n.a,{children:Object(s.jsx)(i.a,{id:"alert-dialog-description",children:a})}),Object(s.jsxs)(o.a,{children:[Object(s.jsx)(c.a,{onClick:function(){return b()},color:"primary",children:l}),Object(s.jsx)(c.a,{onClick:function(){return j()},color:"primary",autoFocus:!0,children:d})]})]})}},1192:function(e,t,a){"use strict";var r=a(4),n=a(13),i=a(3),c=a(1),o=(a(12),a(43)),s=a(50),l=a(289),d=a(154),b=a(0),j=Object(d.a)(Object(b.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),u=Object(d.a)(Object(b.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),m=Object(d.a)(Object(b.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),h=a(18),O=a(23),f=a(14),x=a(1129),p=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],g=Object(f.a)(l.a,{shouldForwardProp:function(e){return Object(f.b)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.indeterminate&&t.indeterminate,"default"!==a.color&&t["color".concat(Object(h.a)(a.color))]]}})((function(e){var t,a=e.theme,n=e.ownerState;return Object(i.a)({color:a.palette.text.secondary},!n.disableRipple&&{"&:hover":{backgroundColor:Object(s.a)("default"===n.color?a.palette.action.active:a.palette[n.color].main,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==n.color&&(t={},Object(r.a)(t,"&.".concat(x.a.checked,", &.").concat(x.a.indeterminate),{color:a.palette[n.color].main}),Object(r.a)(t,"&.".concat(x.a.disabled),{color:a.palette.action.disabled}),t))})),v=Object(b.jsx)(u,{}),S=Object(b.jsx)(j,{}),y=Object(b.jsx)(m,{}),N=c.forwardRef((function(e,t){var a,r,s=Object(O.a)({props:e,name:"MuiCheckbox"}),l=s.checkedIcon,d=void 0===l?v:l,j=s.color,u=void 0===j?"primary":j,m=s.icon,f=void 0===m?S:m,N=s.indeterminate,C=void 0!==N&&N,P=s.indeterminateIcon,F=void 0===P?y:P,k=s.inputProps,I=s.size,w=void 0===I?"medium":I,R=Object(n.a)(s,p),V=C?F:f,z=C?F:d,H=Object(i.a)({},s,{color:u,indeterminate:C,size:w}),E=function(e){var t=e.classes,a=e.indeterminate,r=e.color,n={root:["root",a&&"indeterminate","color".concat(Object(h.a)(r))]},c=Object(o.a)(n,x.b,t);return Object(i.a)({},t,c)}(H);return Object(b.jsx)(g,Object(i.a)({type:"checkbox",inputProps:Object(i.a)({"data-indeterminate":C},k),icon:c.cloneElement(V,{fontSize:null!=(a=V.props.fontSize)?a:w}),checkedIcon:c.cloneElement(z,{fontSize:null!=(r=z.props.fontSize)?r:w}),ownerState:H,ref:t},R,{classes:E}))}));t.a=N},1236:function(e,t,a){"use strict";a.d(t,"a",(function(){return R}));var r=a(93),n=a(4),i=a(54),c=a(14),o=a(8),s=a(1),l=a(995),d=a(48),b=a(1061),j=a(41),u=a(17),m=a(0);var h=function(e){var t=Object(d.a)(),a=Object(u.c)(Object(j.c)(t.palette.primary.main));return Object(m.jsx)("div",{className:"FusePageCarded-header",children:e.header&&Object(m.jsx)(b.a,{theme:a,children:e.header})})},O=a(6),f=a(16),x=a(109),p=a(1071),g=a(1073);var v=function(e){var t=Object(d.a)(),a=Object(u.c)(Object(j.c)(t.palette.primary.main));return Object(m.jsxs)(m.Fragment,{children:[e.header&&Object(m.jsx)(b.a,{theme:a,children:Object(m.jsx)("div",{className:Object(o.a)("FusePageCarded-sidebarHeader",e.variant),children:e.header})}),e.content&&Object(m.jsx)(i.a,{className:"FusePageCarded-sidebarContent",enable:e.innerScroll,children:e.content})]})};function S(e,t){var a=Object(s.useState)(!1),r=Object(f.a)(a,2),n=r[0],i=r[1];Object(s.useImperativeHandle)(t,(function(){return{toggleSidebar:c}}));var c=function(){i(!n)};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(p.a,{lgUp:"permanent"===e.variant,children:Object(m.jsx)(g.a,{variant:"temporary",anchor:e.position,open:n,onOpen:function(e){},onClose:function(e){return c()},disableSwipeToOpen:!0,classes:{root:Object(o.a)("FusePageCarded-sidebarWrapper",e.variant),paper:Object(o.a)("FusePageCarded-sidebar",e.variant,"left"===e.position?"FusePageCarded-leftSidebar":"FusePageCarded-rightSidebar")},ModalProps:{keepMounted:!0},container:e.rootRef.current,BackdropProps:{classes:{root:"FusePageCarded-backdrop"}},style:{position:"absolute"},children:Object(m.jsx)(v,Object(O.a)({},e))})}),"permanent"===e.variant&&Object(m.jsx)(p.a,{lgDown:!0,children:Object(m.jsx)(x.a,{variant:"permanent",className:Object(o.a)("FusePageCarded-sidebarWrapper",e.variant),open:n,classes:{paper:Object(o.a)("FusePageCarded-sidebar",e.variant,"left"===e.position?"FusePageCarded-leftSidebar":"FusePageCarded-rightSidebar")},children:Object(m.jsx)(v,Object(O.a)({},e))})})]})}var y,N=Object(s.forwardRef)(S),C=Object(c.a)("div")((function(e){var t=e.theme;return{display:"flex",flexDirection:"row",minWidth:0,minHeight:"100%",position:"relative",flex:"1 1 auto",width:"100%",height:"auto",backgroundColor:t.palette.background.default,"& .FusePageCarded-innerScroll":{height:"100%"},"& .FusePageCarded-topBg":{position:"absolute",left:0,right:0,top:0,height:F,background:"linear-gradient(to right, ".concat(t.palette.primary.dark," 0%, ").concat(t.palette.primary.main," 100%)"),backgroundSize:"cover",pointerEvents:"none"},"& .FusePageCarded-contentWrapper":Object(n.a)({display:"flex",flexDirection:"column",padding:"0 3.2rem",flex:"1 1 100%",zIndex:2,maxWidth:"100%",minWidth:0,minHeight:0},t.breakpoints.down("sm"),{padding:"0 1.6rem"}),"& .FusePageCarded-header":{height:I,minHeight:I,maxHeight:I,display:"flex",color:t.palette.primary.contrastText},"& .FusePageCarded-headerSidebarToggleButton":{color:t.palette.primary.contrastText},"& .FusePageCarded-contentCard":{display:"flex",flex:"1 1 100%",flexDirection:"column",backgroundColor:t.palette.background.paper,boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",minHeight:0,borderRadius:"20px 20px 0 0"},"& .FusePageCarded-toolbar":{height:k,minHeight:k,display:"flex",alignItems:"center",borderBottom:"1px solid ".concat(t.palette.divider)},"& .FusePageCarded-content":{flex:"1 1 auto",height:"100%",overflow:"auto",WebkitOverflowScrolling:"touch"},"& .FusePageCarded-sidebarWrapper":{position:"absolute",backgroundColor:"transparent",zIndex:5,overflow:"hidden","&.permanent":Object(n.a)({},t.breakpoints.up("lg"),{zIndex:1,position:"relative"})},"& .FusePageCarded-sidebar":{position:"absolute","&.permanent":Object(n.a)({},t.breakpoints.up("lg"),{backgroundColor:"transparent",position:"relative",border:"none",overflow:"hidden"}),width:P,height:"100%"},"& .FusePageCarded-leftSidebar":{},"& .FusePageCarded-rightSidebar":{},"& .FusePageCarded-sidebarHeader":{height:F,minHeight:F,color:t.palette.primary.contrastText,backgroundColor:t.palette.primary.dark,"&.permanent":Object(n.a)({},t.breakpoints.up("lg"),{backgroundColor:"transparent"})},"& .FusePageCarded-sidebarContent":Object(n.a)({display:"flex",flex:"1 1 auto",flexDirection:"column",backgroundColor:t.palette.background.default,color:t.palette.text.primary},t.breakpoints.up("lg"),{overflow:"auto",WebkitOverflowScrolling:"touch"}),"& .FusePageCarded-backdrop":{position:"absolute"}}})),P=240,F=200,k=64,I=F-k,w=Object(s.forwardRef)((function(e,t){var a=Object(s.useRef)(null),r=Object(s.useRef)(null),n=Object(s.useRef)(null),c=e.rightSidebarHeader||e.rightSidebarContent,d=e.leftSidebarHeader||e.leftSidebarContent;return Object(s.useImperativeHandle)(t,(function(){return{rootRef:n,toggleLeftSidebar:function(){a.current.toggleSidebar()},toggleRightSidebar:function(){r.current.toggleSidebar()}}})),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(l.a,{styles:function(t){return{"#fuse-main":{height:e.innerScroll&&"100vh"}}}}),Object(m.jsxs)(C,{className:Object(o.a)("FusePageCarded-root",e.innerScroll&&"FusePageCarded-innerScroll",e.className),ref:n,children:[Object(m.jsx)("div",{className:"FusePageCarded-topBg"}),Object(m.jsxs)("div",{className:"flex container w-full",children:[d&&Object(m.jsx)(N,{position:"left",header:e.leftSidebarHeader,content:e.leftSidebarContent,variant:e.leftSidebarVariant||"permanent",innerScroll:e.innerScroll,ref:a,rootRef:n}),Object(m.jsxs)("div",{className:Object(o.a)("FusePageCarded-contentWrapper",d&&(void 0===e.leftSidebarVariant||"permanent"===e.leftSidebarVariant)&&"lg:ltr:pl-0 lg:rtl:pr-0",c&&(void 0===e.rightSidebarVariant||"permanent"===e.rightSidebarVariant)&&"lg:pr-0"),children:[Object(m.jsx)(h,{header:e.header}),Object(m.jsxs)("div",{className:Object(o.a)("FusePageCarded-contentCard",e.innerScroll&&"inner-scroll"),children:[e.contentToolbar&&Object(m.jsx)("div",{className:"FusePageCarded-toolbar",children:e.contentToolbar}),e.content&&Object(m.jsx)(i.a,{className:"FusePageCarded-content",enable:e.innerScroll,scrollToTopOnRouteChange:e.innerScroll,children:e.content})]})]}),c&&Object(m.jsx)(N,{position:"right",header:e.rightSidebarHeader,content:e.rightSidebarContent,variant:e.rightSidebarVariant||"permanent",innerScroll:e.innerScroll,ref:r,rootRef:n})]})]})]})}));w.defaultProps={};var R=Object(s.memo)(Object(c.a)(w)(y||(y=Object(r.a)([""]))))},1242:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(106),n=function(e,t){for(var a in t.fields){var n=t.fields[a];if(n&&n.ref&&"reportValidity"in n.ref){var i=Object(r.d)(e,a);n.ref.setCustomValidity(i&&i.message||""),n.ref.reportValidity()}}},i=function(e,t){t.shouldUseNativeValidation&&n(e,t);var a={};for(var i in e){var c=Object(r.d)(t.fields,i);Object(r.e)(a,i,Object.assign(e[i],{ref:c&&c.ref}))}return a},c=function(e,t,a){return void 0===t&&(t={}),void 0===a&&(a={}),function(c,o,s){try{return Promise.resolve(function(r,i){try{var l=(t.context,Promise.resolve(e["sync"===a.mode?"validateSync":"validate"](c,Object.assign({abortEarly:!1},t,{context:o}))).then((function(e){return s.shouldUseNativeValidation&&n({},s),{values:e,errors:{}}})))}catch(d){return i(d)}return l&&l.then?l.then(void 0,i):l}(0,(function(e){return{values:{},errors:i((t=e,a=!s.shouldUseNativeValidation&&"all"===s.criteriaMode,t.inner.reduce((function(e,t){if(e[t.path]||(e[t.path]={message:t.message,type:t.type}),a){var n=e[t.path].types,i=n&&n[t.type];e[t.path]=Object(r.c)(t.path,a,e,t.type,i?[].concat(i,t.message):t.message)}return e}),{})),s)};var t,a})))}catch(l){return Promise.reject(l)}}}},1243:function(e,t,a){"use strict";var r=a(12),n=a.n(r),i=a(58),c=function(e){var t=e.roles,a=e.children;return i.a.hasRole(t)?a:null};c.propTypes={roles:n.a.arrayOf(n.a.string).isRequired},t.a=c},1247:function(e,t,a){"use strict";var r=a(16),n=a(1026),i=a(48),c=a(1),o=a(1268),s=a(194),l=a(1014),d=a(1068),b=a(106),j=a(17),u=a(72),m=a(59),h=a(61),O=a(31),f=a(1156),x=a(259),p=a(0),g=function(e){var t=Object(j.b)(),a=e.title,g=e.titleStatic,v=e.subtitleStatic,S=e.updateElement,y=e.deleteElement,N=e.urlIndex,C=e.urlIndexLabel,P=e.backOnSave,F=Object(l.a)("common").t,k=Object(b.h)(),I=k.formState,w=k.watch,R=k.getValues,V=I.isValid,z=I.dirtyFields,H=a?w(a):"",E=Object(i.a)(),L=Object(m.g)(),U=Object(c.useState)(!1),M=Object(r.a)(U,2),W=M[0],T=M[1],B=Object(m.i)();return Object(p.jsxs)("div",{className:"flex flex-1 w-full items-center justify-between",children:[Object(p.jsxs)("div",{className:"flex flex-col items-start max-w-full min-w-0",children:[N&&C&&Object(p.jsx)(d.a.div,{initial:{x:20,opacity:0},animate:{x:0,opacity:1,transition:{delay:.3}},children:Object(p.jsxs)(s.a,{className:"flex items-center sm:mb-12",component:h.a,role:"button",to:N,color:"inherit",children:[Object(p.jsx)(n.a,{className:"text-20",children:"ltr"===E.direction?"arrow_back":"arrow_forward"}),Object(p.jsx)("span",{className:"hidden sm:flex mx-4 font-medium",children:C})]})}),Object(p.jsx)("div",{className:"flex items-center max-w-full",children:Object(p.jsx)("div",{className:"flex flex-col min-w-0 mx-8 sm:mc-16",children:Object(p.jsxs)(d.a.div,{initial:{x:-20},animate:{x:0,transition:{delay:.3}},children:[Object(p.jsx)(s.a,{className:"text-16 sm:text-20 truncate font-semibold",children:H||g||F("Nuovo")}),v&&Object(p.jsx)(s.a,{className:"text-16 sm:text-20 truncate font-semibold",children:v})]})})})]}),Object(p.jsxs)(d.a.div,{className:"flex",initial:{opacity:0,x:20},animate:{opacity:1,x:0,transition:{delay:.3}},children:["new"!==B.id&&y&&Object(p.jsx)(o.a,{loading:W,loadingPosition:"start",className:"whitespace-nowrap mx-4",variant:"contained",color:"secondary",onClick:function(){t(Object(x.c)({children:Object(p.jsx)(f.a,{title:F("Eliminazione"),content:F("EliminazioneDomanda",{recordName:H}),cancel:F("Annulla"),confirm:F("Conferma"),cancelDialog:function(){return t(Object(x.a)())},confirmDialog:function(){T(!0),t(y()).then((function(e){e.error?(T(!1),t(Object(u.c)({message:e.error.message,autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"center"},variant:"error"}))):(T(!1),t(Object(u.c)({message:F("Cancellazione effettuata correttamente"),autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"center"},variant:"success"})),t(Object(x.a)()),L.push(N))}))}})}))},startIcon:Object(p.jsx)(n.a,{className:"hidden sm:flex",children:"delete"}),children:F("Elimina")}),Object(p.jsx)(o.a,{loading:W,loadingPosition:"start",className:"whitespace-nowrap mx-4",variant:"contained",color:"secondary",disabled:O.a.isEmpty(z)||!V,startIcon:Object(p.jsx)(n.a,{className:"hidden sm:flex",children:"save"}),onClick:function(){T(!0),t(S(R())).then((function(e){e.error?(T(!1),t(Object(u.c)({message:e.error.message,autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"center"},variant:"error"}))):(T(!1),t(Object(u.c)({message:F("Modifiche effettuate correttamente"),autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"center"},variant:"success"})),P&&L.push(N))}))},children:F("Salva")})]})]})};g.defaultProps={title:"",deleteElement:void 0,backOnSave:!0,urlIndex:"",urlIndexLabel:""},t.a=g},1268:function(e,t,a){"use strict";var r=a(4),n=a(13),i=a(3),c=a(1),o=(a(12),a(18)),s=a(1313),l=a(14),d=a(23),b=a(1041),j=a(1198),u=a(1314),m=a(1315);function h(e){return Object(u.a)("MuiLoadingButton",e)}var O=Object(m.a)("MuiLoadingButton",["root","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]),f=a(0),x=["children","disabled","loading","loadingIndicator","loadingPosition"],p=Object(l.a)(b.a,{shouldForwardProp:function(e){return function(e){return"ownerState"!==e&&"theme"!==e&&"sx"!==e&&"as"!==e&&"classes"!==e}(e)||"classes"===e},name:"MuiLoadingButton",slot:"Root",overridesResolver:function(e,t){return[t.root,t.startIconLoadingStart&&Object(r.a)({},"& .".concat(O.startIconLoadingStart),t.startIconLoadingStart),t.endIconLoadingEnd&&Object(r.a)({},"& .".concat(O.endIconLoadingEnd),t.endIconLoadingEnd)]}})((function(e){var t=e.ownerState,a=e.theme;return Object(i.a)(Object(r.a)({},"& .".concat(O.startIconLoadingStart,", & .").concat(O.endIconLoadingEnd),{transition:a.transitions.create(["opacity"],{duration:a.transitions.duration.short}),opacity:0}),"center"===t.loadingPosition&&Object(r.a)({transition:a.transitions.create(["background-color","box-shadow","border-color"],{duration:a.transitions.duration.short})},"&.".concat(O.loading),{color:"transparent"}))})),g=Object(l.a)("div",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:function(e,t){var a=e.ownerState;return[t.loadingIndicator,t["loadingIndicator".concat(Object(o.a)(a.loadingPosition))]]}})((function(e){var t=e.theme,a=e.ownerState;return Object(i.a)({position:"absolute",visibility:"visible",display:"flex"},"start"===a.loadingPosition&&{left:14},"center"===a.loadingPosition&&{left:"50%",transform:"translate(-50%)",color:t.palette.action.disabled},"end"===a.loadingPosition&&{right:14})})),v=Object(f.jsx)(j.a,{color:"inherit",size:16}),S=c.forwardRef((function(e,t){var a=Object(d.a)({props:e,name:"MuiLoadingButton"}),r=a.children,c=a.disabled,l=void 0!==c&&c,b=a.loading,j=void 0!==b&&b,u=a.loadingIndicator,m=void 0===u?v:u,O=a.loadingPosition,S=void 0===O?"center":O,y=Object(n.a)(a,x),N=Object(i.a)({},a,{disabled:l,loading:j,loadingIndicator:m,loadingPosition:S}),C=function(e){var t=e.loading,a=e.loadingPosition,r=e.classes,n={root:["root",t&&"loading"],startIcon:[t&&"startIconLoading".concat(Object(o.a)(a))],endIcon:[t&&"endIconLoading".concat(Object(o.a)(a))],loadingIndicator:["loadingIndicator",t&&"loadingIndicator".concat(Object(o.a)(a))]},c=Object(s.a)(n,h,r);return Object(i.a)({},r,c)}(N);return Object(f.jsxs)(p,Object(i.a)({disabled:l||j,ref:t},y,{classes:C,ownerState:N,children:[j&&Object(f.jsx)(g,{className:C.loadingIndicator,ownerState:N,children:m}),r]}))}));t.a=S},1327:function(e,t,a){"use strict";a.r(t);var r=a(6),n=a(16),i=a(4),c=a(257),o=a(1236),s=a(111),l=a(1041),d=a(1200),b=a(1205),j=a(194),u=a(1014),m=a(438),h=a(1068),O=a(1),f=a(17),x=a(59),p=a(61),g=a(31),v=a(106),S=a(261),y=a(1242),N=a(14),C=a(549),P=a(262),F=a(1247),k=a(27),I=a(1038),w=a(1037),R=a(1039),V=a(614),z=a(617),H=a(1043),E=a(620),L=a(1207),U=a(58),M=a(1243),W=a(1192),T=a(1046),B=a(0),D=function(e){var t,a=Object(v.h)(),i=a.control,c=a.formState,o=a.watch,s=a.trigger,l=a.setValue,d=o(),b=c.errors,m=(Object(f.c)((function(e){var t=e.i18n;return null===t||void 0===t?void 0:t.language})),Object(f.c)((function(e){return e.auth.user}))),h=Object(O.useState)(!0),x=Object(n.a)(h,2),p=(x[0],x[1],Object(O.useState)(!0)),g=Object(n.a)(p,2),S=(g[0],g[1],Object(f.b)()),y=Object(O.useState)([]),N=Object(n.a)(y,2),C=(N[0],N[1],Object(O.useState)([])),P=Object(n.a)(C,2),F=(P[0],P[1],Object(u.a)("UserManager").t);Object(u.a)("common").t;return Object(O.useEffect)((function(){U.a.hasRole(["Admin"])||(l("attributes.mainRole","User"),s())}),[S,l,s,m]),Object(B.jsxs)(B.Fragment,{children:[Object(B.jsxs)("div",{className:"pb-8",children:[Object(B.jsx)("div",{className:"pb-8 flex items-center",children:Object(B.jsx)(j.a,{className:"h2 font-medium",color:"textSecondary",children:F("Dati")})}),Object(B.jsx)(w.a,{variant:"fullWidth",sx:{mb:2}}),Object(B.jsxs)(L.a,{container:!0,spacing:2,className:"px-12",children:[Object(B.jsx)(L.a,{item:!0,xs:12,sm:6,children:Object(B.jsx)(v.a,{name:"firstName",control:i,render:function(e){var t,a=e.field;return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(j.a,{className:"h5 font-medium",color:"textSecondary",children:F("Nome")}),Object(B.jsx)(I.a,Object(r.a)(Object(r.a)({},a),{},{className:"mt-8 mb-16",error:!!b.firstName,required:!0,helperText:null===b||void 0===b||null===(t=b.firstName)||void 0===t?void 0:t.message,id:"firstName",variant:"outlined",fullWidth:!0,disabled:!0}))]})}})}),Object(B.jsx)(L.a,{item:!0,xs:12,sm:6,children:Object(B.jsx)(v.a,{name:"lastName",control:i,render:function(e){var t,a=e.field;return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(j.a,{className:"h5 font-medium",color:"textSecondary",children:F("Cognome")}),Object(B.jsx)(I.a,Object(r.a)(Object(r.a)({},a),{},{className:"mt-8 mb-16",error:!!b.lastName,required:!0,helperText:null===b||void 0===b||null===(t=b.lastName)||void 0===t?void 0:t.message,id:"lastName",variant:"outlined",fullWidth:!0,disabled:!0}))]})}})}),Object(B.jsx)(L.a,{item:!0,xs:12,sm:6,children:Object(B.jsx)(v.a,{name:"email",control:i,render:function(e){var t,a=e.field;return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(j.a,{className:"h5 font-medium",color:"textSecondary",children:F("Email")}),Object(B.jsx)(I.a,Object(r.a)(Object(r.a)({},a),{},{className:"mt-8 mb-16",error:!!b.email,required:!0,helperText:null===b||void 0===b||null===(t=b.email)||void 0===t?void 0:t.message,id:"email",variant:"outlined",fullWidth:!0,disabled:!0}))]})}})}),Object(B.jsx)(L.a,{item:!0,xs:12,sm:6,children:Object(B.jsx)(v.a,{name:"emailVerified",control:i,render:function(e){var t,a=e.field;return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(j.a,{className:"h5 font-medium",color:"textSecondary",children:F("Email verificata")}),Object(B.jsxs)(V.a,{fullWidth:!0,className:"mt-8 mb-16",error:!!b.emailVerified,required:!0,children:[Object(B.jsxs)(E.a,Object(r.a)(Object(r.a)({},a),{},{id:"emailVerified",disabled:!0,children:[Object(B.jsx)(R.a,{value:!0,children:F("common:Si")}),Object(B.jsx)(R.a,{value:!1,children:F("common:No")})]})),Object(B.jsx)(z.a,{children:null===b||void 0===b||null===(t=b.emailVerified)||void 0===t?void 0:t.message})]})]})}})})]})]}),Object(B.jsx)(M.a,{roles:["Admin"],children:Object(B.jsxs)("div",{className:"pb-8",children:[Object(B.jsx)("div",{className:"pb-8 flex items-center",children:Object(B.jsx)(j.a,{className:"h2 font-medium",color:"textSecondary",children:F("Ruolo")})}),Object(B.jsx)(w.a,{variant:"fullWidth",sx:{mb:2}}),Object(B.jsx)(L.a,{container:!0,spacing:2,className:"px-12",children:Object(B.jsx)(L.a,{item:!0,xs:12,sm:6,children:Object(B.jsx)(v.a,{name:"attributes.mainRole",control:i,render:function(e){var t,a,r,n=e.field,i=n.onChange,c=n.onBlur,o=n.value,l=(n.name,n.ref);return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(j.a,{className:"h5 font-medium",color:"textSecondary",children:F("Il tuo ruolo")}),Object(B.jsxs)(V.a,{fullWidth:!0,className:"mt-8 mb-16",error:!!(null===(t=b.attributes)||void 0===t?void 0:t.mainRole),required:!0,children:[Object(B.jsxs)(E.a,{id:"attributes.mainRole",onChange:function(e){i(e),s()},onBlur:c,value:o,inputRef:l,displayEmpty:!0,disabled:!0,children:[Object(B.jsx)(R.a,{value:"Admin",children:F("UserManager:Amminstratore")},"Admin"),Object(B.jsx)(R.a,{value:"User",children:F("UserManager:Utente")},"User")]}),Object(B.jsx)(z.a,{children:null===b||void 0===b||null===(a=b.attributes)||void 0===a||null===(r=a.mainRole)||void 0===r?void 0:r.message})]})]})}})})})]})}),"User"===d.attributes.mainRole&&Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(M.a,{roles:["HRAdmin","HRUser"],children:Object(B.jsxs)("div",{className:"pb-8",children:[Object(B.jsx)("div",{className:"pb-8 flex items-center",children:Object(B.jsx)(j.a,{className:"h2 font-medium",color:"textSecondary",children:F("Azienda appaltatrice")})}),Object(B.jsx)(w.a,{variant:"fullWidth",sx:{mb:2}}),Object(B.jsxs)(L.a,{container:!0,spacing:2,className:"px-12",children:[Object(B.jsx)(L.a,{item:!0,xs:12,sm:6,children:Object(B.jsx)(v.a,{name:"attributes.hrcRagioneSociale",control:i,render:function(e){var t=e.field;return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(j.a,{className:"h5 font-medium",color:"textSecondary",children:F("La tua azienda appaltatrice")}),Object(B.jsx)(I.a,Object(r.a)(Object(r.a)({},t),{},{className:"mt-8 mb-16",required:!0,id:"attributes.hrcRagioneSociale",variant:"outlined",fullWidth:!0,disabled:!0}))]})}})}),Object(B.jsx)(L.a,{item:!0,xs:12,sm:6,children:Object(B.jsx)(v.a,{name:"attributes.hrcRole",control:i,render:function(e){var t=e.field;return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(j.a,{className:"h5 font-medium",color:"textSecondary",children:F("Il tuo ruolo")}),Object(B.jsx)(V.a,{fullWidth:!0,className:"mt-8 mb-16",children:Object(B.jsxs)(E.a,Object(r.a)(Object(r.a)({},t),{},{id:"attributes.hrcRole",displayEmpty:!0,disabled:!0,children:[Object(B.jsx)(R.a,{value:"HRAdmin",children:F("UserManager:Amminstratore")},"Admin"),Object(B.jsx)(R.a,{value:"HRUser",children:F("UserManager:Utente")},"User")]}))})]})}})})]})]})}),Object(B.jsx)(M.a,{roles:["TRAdmin","TRUser"],children:Object(B.jsxs)("div",{className:"pb-8",children:[Object(B.jsx)("div",{className:"pb-8 flex items-center",children:Object(B.jsx)(j.a,{className:"h2 font-medium",color:"textSecondary",children:F("Istituto di formazione")})}),Object(B.jsx)(w.a,{variant:"fullWidth",sx:{mb:2}}),Object(B.jsxs)(L.a,{container:!0,spacing:2,className:"px-12",children:[Object(B.jsx)(L.a,{item:!0,xs:12,sm:6,children:Object(B.jsx)(v.a,{name:"attributes.trcRagioneSociale",control:i,render:function(e){var t=e.field;return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(j.a,{className:"h5 font-medium",color:"textSecondary",children:F("Il tuo istituto di formazione")}),Object(B.jsx)(I.a,Object(r.a)(Object(r.a)({},t),{},{className:"mt-8 mb-16",id:"attributes.trcRagioneSociale",variant:"outlined",fullWidth:!0,disabled:!0}))]})}})}),Object(B.jsx)(L.a,{item:!0,xs:12,sm:6,children:Object(B.jsx)(v.a,{name:"attributes.trcRole",control:i,render:function(e){var t=e.field;return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(j.a,{className:"h5 font-medium",color:"textSecondary",children:F("Il tuo ruolo")}),Object(B.jsx)(V.a,{fullWidth:!0,className:"mt-8 mb-16",children:Object(B.jsxs)(E.a,Object(r.a)(Object(r.a)({},t),{},{id:"attributes.trcRole",displayEmpty:!0,disabled:!0,children:[Object(B.jsx)(R.a,{value:"TRAdmin",children:F("UserManager:Amminstratore")},"Admin"),Object(B.jsx)(R.a,{value:"TRUser",children:F("UserManager:Utente")},"User")]}))})]})}})})]}),"TRUser"===(null===(t=d.attributes)||void 0===t?void 0:t.trcRole)&&Object(B.jsx)(L.a,{container:!0,spacing:2,className:"px-12",children:Object(B.jsxs)(L.a,{item:!0,xs:12,sm:12,children:[Object(B.jsx)(j.a,{className:"h5 font-medium",color:"textSecondary",children:F("I tuoi profili da valutatore")}),Object(B.jsx)(T.a,{sx:{display:"flex",flexDirection:"row"},children:["Sicurezza","D","E","F","G"].map((function(e){return Object(B.jsx)(v.a,{name:"attributes.profiliValutatore",control:i,render:function(t){var a,r=t.field,n=(r.value,r.onChange,r.ref);return Object(B.jsx)(B.Fragment,{children:Object(B.jsx)(V.a,{fullWidth:!0,className:"mt-8 mb-16",error:!!(null===(a=b.attributes)||void 0===a?void 0:a.profiliValutatore),required:!0,disabled:!0,children:Object(B.jsx)(H.a,{control:Object(B.jsx)(W.a,{value:e,onChange:function(t){if(d.attributes.profiliValutatore.includes(e)){var a=d.attributes.profiliValutatore.filter((function(t){return t!==e}));l("attributes.profiliValutatore",a)}else{var r=[].concat(Object(k.a)(d.attributes.profiliValutatore),[e]);l("attributes.profiliValutatore",r)}s()},inputRef:n,name:"attributes.profiliValutatore",id:"attributes.profiliValutatore",checked:d.attributes.profiliValutatore.includes(e),disabled:!0}),label:F(e)})})})}},e)}))})]})})]})})]})]})},A=Object(N.a)(o.a)((function(e){var t=e.theme;return{"& .FusePageCarded-header":Object(i.a)({minHeight:72,height:72,alignItems:"center"},t.breakpoints.up("sm"),{minHeight:136,height:136})}}));t.default=Object(m.a)("profile",P.a)((function(e){var t=Object(u.a)("UserManager").t,a=(Object(u.a)("common").t,Object(f.b)()),i=Object(f.c)((function(e){var t=e.userManager;return null===t||void 0===t?void 0:t.profile})),o=Object(x.i)(),m=Object(O.useState)(0),N=Object(n.a)(m,2),P=N[0],k=N[1],I=Object(O.useState)(!1),w=Object(n.a)(I,2),R=w[0],V=w[1],z=S.g().shape({firstName:S.i().required().max(255),lastName:S.i().required().max(255)}).required(),H=Object(v.g)({mode:"onChange",defaultValues:{},resolver:Object(y.a)(z)}),E=H.reset,L=H.watch,U=(H.control,H.onChange,H.formState,H.trigger),M=L();return Object(s.b)((function(){a(Object(C.b)(o)).then((function(e){e.payload||V(!0)}))}),[a,o]),Object(O.useEffect)((function(){i&&(E(i),U())}),[i,E,U]),Object(O.useEffect)((function(){return function(){a(Object(C.c)()),V(!1)}}),[a]),R?Object(B.jsxs)(h.a.div,{initial:{opacity:0},animate:{opacity:1,transition:{delay:.1}},className:"flex flex-col flex-1 items-center justify-center h-full",children:[Object(B.jsx)(j.a,{color:"textSecondary",variant:"h5",children:t("L'utente richiesto non \xe8 esistente")}),Object(B.jsx)(l.a,{className:"mt-24",component:p.a,variant:"outlined",to:"/user",color:"inherit",children:t("Torna indietro")})]}):g.a.isEmpty(M)?Object(B.jsx)(c.a,{}):Object(B.jsx)(v.b,Object(r.a)(Object(r.a)({},H),{},{children:Object(B.jsx)(A,{header:Object(B.jsx)(F.a,{title:"firstAndLastName",updateElement:C.d,backOnSave:!1}),contentToolbar:Object(B.jsx)(b.a,{value:P,onChange:function(e,t){return k(t)},indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:"auto",classes:{root:"w-full h-64"},children:Object(B.jsx)(d.a,{className:"h-64",label:t("Informazioni")})}),content:Object(B.jsx)("div",{className:"p-16 sm:p-24 max-w-2xl",children:Object(B.jsx)("div",{className:0!==P?"hidden":"",children:Object(B.jsx)(D,{form:M})})}),innerScroll:!0})}))}))}}]);