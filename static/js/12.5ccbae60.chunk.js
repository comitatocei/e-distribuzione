(this["webpackJsonpsas-fe"]=this["webpackJsonpsas-fe"]||[]).push([[12],{1070:function(e,t,a){"use strict";var r=a(1163),n=a(1164),i=a(1165),c=a(1036),o=a(1166),l=a(0);t.a=function(e){var t=e.title,a=e.content,s=e.cancel,d=e.confirm,j=e.cancelDialog,u=e.confirmDialog;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(r.a,{id:"alert-dialog-title",children:t}),Object(l.jsx)(n.a,{children:Object(l.jsx)(i.a,{id:"alert-dialog-description",children:a})}),Object(l.jsxs)(o.a,{children:[Object(l.jsx)(c.a,{onClick:function(){return j()},color:"primary",children:s}),Object(l.jsx)(c.a,{onClick:function(){return u()},color:"primary",autoFocus:!0,children:d})]})]})}},1073:function(e,t,a){"use strict";a.d(t,"a",(function(){return k}));var r=a(95),n=a(4),i=a(54),c=a(14),o=a(7),l=a(1),s=a(989),d=a(48),j=a(1055),u=a(39),b=a(17),m=a(0);var h=function(e){var t=Object(d.a)(),a=Object(b.c)(Object(u.c)(t.palette.primary.main));return Object(m.jsx)("div",{className:"FusePageCarded-header",children:e.header&&Object(m.jsx)(j.a,{theme:a,children:e.header})})},O=a(10),x=a(16),f=a(111),g=a(1063),p=a(1066);var v=function(e){var t=Object(d.a)(),a=Object(b.c)(Object(u.c)(t.palette.primary.main));return Object(m.jsxs)(m.Fragment,{children:[e.header&&Object(m.jsx)(j.a,{theme:a,children:Object(m.jsx)("div",{className:Object(o.a)("FusePageCarded-sidebarHeader",e.variant),children:e.header})}),e.content&&Object(m.jsx)(i.a,{className:"FusePageCarded-sidebarContent",enable:e.innerScroll,children:e.content})]})};function S(e,t){var a=Object(l.useState)(!1),r=Object(x.a)(a,2),n=r[0],i=r[1];Object(l.useImperativeHandle)(t,(function(){return{toggleSidebar:c}}));var c=function(){i(!n)};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(g.a,{lgUp:"permanent"===e.variant,children:Object(m.jsx)(p.a,{variant:"temporary",anchor:e.position,open:n,onOpen:function(e){},onClose:function(e){return c()},disableSwipeToOpen:!0,classes:{root:Object(o.a)("FusePageCarded-sidebarWrapper",e.variant),paper:Object(o.a)("FusePageCarded-sidebar",e.variant,"left"===e.position?"FusePageCarded-leftSidebar":"FusePageCarded-rightSidebar")},ModalProps:{keepMounted:!0},container:e.rootRef.current,BackdropProps:{classes:{root:"FusePageCarded-backdrop"}},style:{position:"absolute"},children:Object(m.jsx)(v,Object(O.a)({},e))})}),"permanent"===e.variant&&Object(m.jsx)(g.a,{lgDown:!0,children:Object(m.jsx)(f.a,{variant:"permanent",className:Object(o.a)("FusePageCarded-sidebarWrapper",e.variant),open:n,classes:{paper:Object(o.a)("FusePageCarded-sidebar",e.variant,"left"===e.position?"FusePageCarded-leftSidebar":"FusePageCarded-rightSidebar")},children:Object(m.jsx)(v,Object(O.a)({},e))})})]})}var y,N=Object(l.forwardRef)(S),C=Object(c.a)("div")((function(e){var t=e.theme;return{display:"flex",flexDirection:"row",minWidth:0,minHeight:"100%",position:"relative",flex:"1 1 auto",width:"100%",height:"auto",backgroundColor:t.palette.background.default,"& .FusePageCarded-innerScroll":{height:"100%"},"& .FusePageCarded-topBg":{position:"absolute",left:0,right:0,top:0,height:F,background:"linear-gradient(to right, ".concat(t.palette.primary.dark," 0%, ").concat(t.palette.primary.main," 100%)"),backgroundSize:"cover",pointerEvents:"none"},"& .FusePageCarded-contentWrapper":Object(n.a)({display:"flex",flexDirection:"column",padding:"0 3.2rem",flex:"1 1 100%",zIndex:2,maxWidth:"100%",minWidth:0,minHeight:0},t.breakpoints.down("sm"),{padding:"0 1.6rem"}),"& .FusePageCarded-header":{height:w,minHeight:w,maxHeight:w,display:"flex",color:t.palette.primary.contrastText},"& .FusePageCarded-headerSidebarToggleButton":{color:t.palette.primary.contrastText},"& .FusePageCarded-contentCard":{display:"flex",flex:"1 1 100%",flexDirection:"column",backgroundColor:t.palette.background.paper,boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",minHeight:0,borderRadius:"20px 20px 0 0"},"& .FusePageCarded-toolbar":{height:R,minHeight:R,display:"flex",alignItems:"center",borderBottom:"1px solid ".concat(t.palette.divider)},"& .FusePageCarded-content":{flex:"1 1 auto",height:"100%",overflow:"auto",WebkitOverflowScrolling:"touch"},"& .FusePageCarded-sidebarWrapper":{position:"absolute",backgroundColor:"transparent",zIndex:5,overflow:"hidden","&.permanent":Object(n.a)({},t.breakpoints.up("lg"),{zIndex:1,position:"relative"})},"& .FusePageCarded-sidebar":{position:"absolute","&.permanent":Object(n.a)({},t.breakpoints.up("lg"),{backgroundColor:"transparent",position:"relative",border:"none",overflow:"hidden"}),width:I,height:"100%"},"& .FusePageCarded-leftSidebar":{},"& .FusePageCarded-rightSidebar":{},"& .FusePageCarded-sidebarHeader":{height:F,minHeight:F,color:t.palette.primary.contrastText,backgroundColor:t.palette.primary.dark,"&.permanent":Object(n.a)({},t.breakpoints.up("lg"),{backgroundColor:"transparent"})},"& .FusePageCarded-sidebarContent":Object(n.a)({display:"flex",flex:"1 1 auto",flexDirection:"column",backgroundColor:t.palette.background.default,color:t.palette.text.primary},t.breakpoints.up("lg"),{overflow:"auto",WebkitOverflowScrolling:"touch"}),"& .FusePageCarded-backdrop":{position:"absolute"}}})),I=240,F=200,R=64,w=F-R,P=Object(l.forwardRef)((function(e,t){var a=Object(l.useRef)(null),r=Object(l.useRef)(null),n=Object(l.useRef)(null),c=e.rightSidebarHeader||e.rightSidebarContent,d=e.leftSidebarHeader||e.leftSidebarContent;return Object(l.useImperativeHandle)(t,(function(){return{rootRef:n,toggleLeftSidebar:function(){a.current.toggleSidebar()},toggleRightSidebar:function(){r.current.toggleSidebar()}}})),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(s.a,{styles:function(t){return{"#fuse-main":{height:e.innerScroll&&"100vh"}}}}),Object(m.jsxs)(C,{className:Object(o.a)("FusePageCarded-root",e.innerScroll&&"FusePageCarded-innerScroll",e.className),ref:n,children:[Object(m.jsx)("div",{className:"FusePageCarded-topBg"}),Object(m.jsxs)("div",{className:"flex container w-full",children:[d&&Object(m.jsx)(N,{position:"left",header:e.leftSidebarHeader,content:e.leftSidebarContent,variant:e.leftSidebarVariant||"permanent",innerScroll:e.innerScroll,ref:a,rootRef:n}),Object(m.jsxs)("div",{className:Object(o.a)("FusePageCarded-contentWrapper",d&&(void 0===e.leftSidebarVariant||"permanent"===e.leftSidebarVariant)&&"lg:ltr:pl-0 lg:rtl:pr-0",c&&(void 0===e.rightSidebarVariant||"permanent"===e.rightSidebarVariant)&&"lg:pr-0"),children:[Object(m.jsx)(h,{header:e.header}),Object(m.jsxs)("div",{className:Object(o.a)("FusePageCarded-contentCard",e.innerScroll&&"inner-scroll"),children:[e.contentToolbar&&Object(m.jsx)("div",{className:"FusePageCarded-toolbar",children:e.contentToolbar}),e.content&&Object(m.jsx)(i.a,{className:"FusePageCarded-content",enable:e.innerScroll,scrollToTopOnRouteChange:e.innerScroll,children:e.content})]})]}),c&&Object(m.jsx)(N,{position:"right",header:e.rightSidebarHeader,content:e.rightSidebarContent,variant:e.rightSidebarVariant||"permanent",innerScroll:e.innerScroll,ref:r,rootRef:n})]})]})]})}));P.defaultProps={};var k=Object(l.memo)(Object(c.a)(P)(y||(y=Object(r.a)([""]))))},1081:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(105),n=function(e,t){for(var a in t.fields){var n=t.fields[a];if(n&&n.ref&&"reportValidity"in n.ref){var i=Object(r.d)(e,a);n.ref.setCustomValidity(i&&i.message||""),n.ref.reportValidity()}}},i=function(e,t){t.shouldUseNativeValidation&&n(e,t);var a={};for(var i in e){var c=Object(r.d)(t.fields,i);Object(r.e)(a,i,Object.assign(e[i],{ref:c&&c.ref}))}return a},c=function(e,t,a){return void 0===t&&(t={}),void 0===a&&(a={}),function(c,o,l){try{return Promise.resolve(function(r,i){try{var s=(t.context,Promise.resolve(e["sync"===a.mode?"validateSync":"validate"](c,Object.assign({abortEarly:!1},t,{context:o}))).then((function(e){return l.shouldUseNativeValidation&&n({},l),{values:e,errors:{}}})))}catch(d){return i(d)}return s&&s.then?s.then(void 0,i):s}(0,(function(e){return{values:{},errors:i((t=e,a=!l.shouldUseNativeValidation&&"all"===l.criteriaMode,t.inner.reduce((function(e,t){if(e[t.path]||(e[t.path]={message:t.message,type:t.type}),a){var n=e[t.path].types,i=n&&n[t.type];e[t.path]=Object(r.c)(t.path,a,e,t.type,i?[].concat(i,t.message):t.message)}return e}),{})),l)};var t,a})))}catch(s){return Promise.reject(s)}}}},1085:function(e,t,a){"use strict";var r=a(16),n=a(1021),i=a(48),c=a(1),o=a(1153),l=a(208),s=a(1007),d=a(1061),j=a(105),u=a(17),b=a(70),m=a(57),h=a(60),O=a(31),x=a(1070),f=a(246),g=a(0),p=function(e){var t=Object(u.b)(),a=e.title,p=e.titleStatic,v=e.subtitleStatic,S=e.updateElement,y=e.deleteElement,N=e.urlIndex,C=e.urlIndexLabel,I=Object(s.a)("common").t,F=Object(j.h)(),R=F.formState,w=F.watch,P=F.getValues,k=R.isValid,z=R.dirtyFields,E=a?w(a):"",H=Object(i.a)(),U=Object(m.g)(),A=Object(c.useState)(!1),L=Object(r.a)(A,2),W=L[0],q=L[1],T=Object(m.i)();return Object(g.jsxs)("div",{className:"flex flex-1 w-full items-center justify-between",children:[Object(g.jsxs)("div",{className:"flex flex-col items-start max-w-full min-w-0",children:[Object(g.jsx)(d.a.div,{initial:{x:20,opacity:0},animate:{x:0,opacity:1,transition:{delay:.3}},children:Object(g.jsxs)(l.a,{className:"flex items-center sm:mb-12",component:h.a,role:"button",to:N,color:"inherit",children:[Object(g.jsx)(n.a,{className:"text-20",children:"ltr"===H.direction?"arrow_back":"arrow_forward"}),Object(g.jsx)("span",{className:"hidden sm:flex mx-4 font-medium",children:C})]})}),Object(g.jsx)("div",{className:"flex items-center max-w-full",children:Object(g.jsx)("div",{className:"flex flex-col min-w-0 mx-8 sm:mc-16",children:Object(g.jsxs)(d.a.div,{initial:{x:-20},animate:{x:0,transition:{delay:.3}},children:[Object(g.jsx)(l.a,{className:"text-16 sm:text-20 truncate font-semibold",children:E||p||I("Nuovo")}),v&&Object(g.jsx)(l.a,{className:"text-16 sm:text-20 truncate font-semibold",children:v})]})})})]}),Object(g.jsxs)(d.a.div,{className:"flex",initial:{opacity:0,x:20},animate:{opacity:1,x:0,transition:{delay:.3}},children:["new"!==T.id&&y&&Object(g.jsx)(o.a,{loading:W,loadingPosition:"start",className:"whitespace-nowrap mx-4",variant:"contained",color:"secondary",onClick:function(){t(Object(f.c)({children:Object(g.jsx)(x.a,{title:I("Eliminazione"),content:I("EliminazioneDomanda",{recordName:E}),cancel:I("Annulla"),confirm:I("Conferma"),cancelDialog:function(){return t(Object(f.a)())},confirmDialog:function(){q(!0),t(y()).then((function(e){e.error?(q(!1),t(Object(b.c)({message:e.error.message,autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"center"},variant:"error"}))):(q(!1),t(Object(b.c)({message:I("Cancellazione effettuata correttamente"),autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"center"},variant:"success"})),t(Object(f.a)()),U.push(N))}))}})}))},startIcon:Object(g.jsx)(n.a,{className:"hidden sm:flex",children:"delete"}),children:I("Elimina")}),Object(g.jsx)(o.a,{loading:W,loadingPosition:"start",className:"whitespace-nowrap mx-4",variant:"contained",color:"secondary",disabled:O.a.isEmpty(z)||!k,startIcon:Object(g.jsx)(n.a,{className:"hidden sm:flex",children:"save"}),onClick:function(){q(!0),t(S(P())).then((function(e){e.error?(q(!1),t(Object(b.c)({message:e.error.message,autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"center"},variant:"error"}))):(q(!1),t(Object(b.c)({message:I("Modifiche effettuate correttamente"),autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"center"},variant:"success"})),U.push(N))}))},children:I("Salva")})]})]})};p.defaultProps={title:"",deleteElement:void 0},t.a=p},1153:function(e,t,a){"use strict";var r=a(4),n=a(13),i=a(3),c=a(1),o=(a(12),a(19)),l=a(1248),s=a(14),d=a(23),j=a(1036),u=a(1180),b=a(1249),m=a(1250);function h(e){return Object(b.a)("MuiLoadingButton",e)}var O=Object(m.a)("MuiLoadingButton",["root","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]),x=a(0),f=["children","disabled","loading","loadingIndicator","loadingPosition"],g=Object(s.a)(j.a,{shouldForwardProp:function(e){return function(e){return"ownerState"!==e&&"theme"!==e&&"sx"!==e&&"as"!==e&&"classes"!==e}(e)||"classes"===e},name:"MuiLoadingButton",slot:"Root",overridesResolver:function(e,t){return[t.root,t.startIconLoadingStart&&Object(r.a)({},"& .".concat(O.startIconLoadingStart),t.startIconLoadingStart),t.endIconLoadingEnd&&Object(r.a)({},"& .".concat(O.endIconLoadingEnd),t.endIconLoadingEnd)]}})((function(e){var t=e.ownerState,a=e.theme;return Object(i.a)(Object(r.a)({},"& .".concat(O.startIconLoadingStart,", & .").concat(O.endIconLoadingEnd),{transition:a.transitions.create(["opacity"],{duration:a.transitions.duration.short}),opacity:0}),"center"===t.loadingPosition&&Object(r.a)({transition:a.transitions.create(["background-color","box-shadow","border-color"],{duration:a.transitions.duration.short})},"&.".concat(O.loading),{color:"transparent"}))})),p=Object(s.a)("div",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:function(e,t){var a=e.ownerState;return[t.loadingIndicator,t["loadingIndicator".concat(Object(o.a)(a.loadingPosition))]]}})((function(e){var t=e.theme,a=e.ownerState;return Object(i.a)({position:"absolute",visibility:"visible",display:"flex"},"start"===a.loadingPosition&&{left:14},"center"===a.loadingPosition&&{left:"50%",transform:"translate(-50%)",color:t.palette.action.disabled},"end"===a.loadingPosition&&{right:14})})),v=Object(x.jsx)(u.a,{color:"inherit",size:16}),S=c.forwardRef((function(e,t){var a=Object(d.a)({props:e,name:"MuiLoadingButton"}),r=a.children,c=a.disabled,s=void 0!==c&&c,j=a.loading,u=void 0!==j&&j,b=a.loadingIndicator,m=void 0===b?v:b,O=a.loadingPosition,S=void 0===O?"center":O,y=Object(n.a)(a,f),N=Object(i.a)({},a,{disabled:s,loading:u,loadingIndicator:m,loadingPosition:S}),C=function(e){var t=e.loading,a=e.loadingPosition,r=e.classes,n={root:["root",t&&"loading"],startIcon:[t&&"startIconLoading".concat(Object(o.a)(a))],endIcon:[t&&"endIconLoading".concat(Object(o.a)(a))],loadingIndicator:["loadingIndicator",t&&"loadingIndicator".concat(Object(o.a)(a))]},c=Object(l.a)(n,h,r);return Object(i.a)({},r,c)}(N);return Object(x.jsxs)(g,Object(i.a)({disabled:s||u,ref:t},y,{classes:C,ownerState:N,children:[u&&Object(x.jsx)(p,{className:C.loadingIndicator,ownerState:N,children:m}),r]}))}));t.a=S},1261:function(e,t,a){"use strict";a.r(t);var r=a(10),n=a(16),i=a(4),c=a(247),o=a(1073),l=a(108),s=a(1036),d=a(1185),j=a(1195),u=a(208),b=a(1007),m=a(399),h=a(1061),O=a(1),x=a(17),f=a(57),g=a(60),p=a(31),v=a(105),S=a(251),y=a(1081),N=a(14),C=a(426),I=a(252),F=a(1085),R=a(1033),w=a(1032),P=a(1034),k=a(608),z=a(611),E=a(614),H=a(1197),U=a(69),A=a(12),L=a.n(A),W=function(e){var t=e.roles,a=e.children;return U.a.hasRole(t)?a:null};W.propTypes={roles:L.a.arrayOf(L.a.string).isRequired};var q=W,T=a(0),V=function(e){var t,a,i=Object(v.h)(),o=i.control,l=i.formState,s=i.watch,d=i.trigger,j=i.setValue,m=s(),h=l.errors,f=(Object(x.c)((function(e){var t=e.i18n;return null===t||void 0===t?void 0:t.language})),Object(x.c)((function(e){return e.auth.user}))),g=Object(O.useState)(!0),p=Object(n.a)(g,2),S=p[0],y=p[1],N=Object(O.useState)(!0),I=Object(n.a)(N,2),F=I[0],A=I[1],L=Object(x.b)(),W=Object(O.useState)([]),V=Object(n.a)(W,2),M=V[0],B=V[1],D=Object(O.useState)([]),J=Object(n.a)(D,2),_=J[0],G=J[1],K=Object(b.a)("UserManager").t,Q=Object(b.a)("common").t;return Object(O.useEffect)((function(){U.a.hasRole(["Admin"])&&(L(Object(C.c)()).then((function(e){B(e.payload),y(!1)})),L(Object(C.d)()).then((function(e){G(e.payload),A(!1)}))),U.a.hasRole(["Admin"])||(j("attributes.mainRole","User"),d()),U.a.hasRole(["HRAdmin"])&&L(Object(C.b)()).then((function(e){B([{id:e.payload.id,ragioneSociale:e.payload.ragioneSociale}]),y(!1),j("attributes.hrcId",e.payload.id),d()})),U.a.hasRole(["TRAdmin"])&&L(Object(C.e)()).then((function(e){G([{id:e.payload.id,ragioneSociale:e.payload.ragioneSociale}]),A(!1),j("attributes.trcId",e.payload.id),d()}))}),[L,j,d,f]),Object(T.jsxs)(T.Fragment,{children:[Object(T.jsxs)("div",{className:"pb-8",children:[Object(T.jsx)("div",{className:"pb-8 flex items-center",children:Object(T.jsx)(u.a,{className:"h2 font-medium",color:"textSecondary",children:K("Dati")})}),Object(T.jsxs)(H.a,{container:!0,spacing:2,className:"px-12",children:[Object(T.jsx)(H.a,{item:!0,xs:12,sm:6,children:Object(T.jsx)(v.a,{name:"firstName",control:o,render:function(e){var t,a=e.field;return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(u.a,{className:"h5 font-medium",color:"textSecondary",children:K("Nome")}),Object(T.jsx)(R.a,Object(r.a)(Object(r.a)({},a),{},{className:"mt-8 mb-16",error:!!h.firstName,required:!0,helperText:null===h||void 0===h||null===(t=h.firstName)||void 0===t?void 0:t.message,id:"firstName",variant:"outlined",fullWidth:!0}))]})}})}),Object(T.jsx)(H.a,{item:!0,xs:12,sm:6,children:Object(T.jsx)(v.a,{name:"lastName",control:o,render:function(e){var t,a=e.field;return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(u.a,{className:"h5 font-medium",color:"textSecondary",children:K("Cognome")}),Object(T.jsx)(R.a,Object(r.a)(Object(r.a)({},a),{},{className:"mt-8 mb-16",error:!!h.lastName,required:!0,helperText:null===h||void 0===h||null===(t=h.lastName)||void 0===t?void 0:t.message,id:"lastName",variant:"outlined",fullWidth:!0}))]})}})}),Object(T.jsx)(H.a,{item:!0,xs:12,sm:6,children:Object(T.jsx)(v.a,{name:"email",control:o,render:function(e){var t,a=e.field;return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(u.a,{className:"h5 font-medium",color:"textSecondary",children:K("Email")}),Object(T.jsx)(R.a,Object(r.a)(Object(r.a)({},a),{},{className:"mt-8 mb-16",error:!!h.email,required:!0,helperText:null===h||void 0===h||null===(t=h.email)||void 0===t?void 0:t.message,id:"email",variant:"outlined",fullWidth:!0}))]})}})}),Object(T.jsx)(H.a,{item:!0,xs:12,sm:6,children:Object(T.jsx)(v.a,{name:"enabled",control:o,render:function(e){var t,a=e.field;return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(u.a,{className:"h5 font-medium",color:"textSecondary",children:K("Abilitato")}),Object(T.jsxs)(k.a,{fullWidth:!0,className:"mt-8 mb-16",error:!!h.enabled,required:!0,children:[Object(T.jsxs)(E.a,Object(r.a)(Object(r.a)({},a),{},{id:"enabled",children:[Object(T.jsx)(P.a,{value:!0,children:K("common:Si")}),Object(T.jsx)(P.a,{value:!1,children:K("common:No")})]})),Object(T.jsx)(z.a,{children:null===h||void 0===h||null===(t=h.enabled)||void 0===t?void 0:t.message})]})]})}})}),Object(T.jsx)(H.a,{item:!0,xs:12,sm:6,children:Object(T.jsx)(v.a,{name:"emailVerified",control:o,render:function(e){var t,a=e.field;return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(u.a,{className:"h5 font-medium",color:"textSecondary",children:K("Email verificata")}),Object(T.jsxs)(k.a,{fullWidth:!0,className:"mt-8 mb-16",error:!!h.emailVerified,required:!0,children:[Object(T.jsxs)(E.a,Object(r.a)(Object(r.a)({},a),{},{id:"emailVerified",children:[Object(T.jsx)(P.a,{value:!0,children:K("common:Si")}),Object(T.jsx)(P.a,{value:!1,children:K("common:No")})]})),Object(T.jsx)(z.a,{children:null===h||void 0===h||null===(t=h.emailVerified)||void 0===t?void 0:t.message})]})]})}})})]})]}),Object(T.jsx)(w.a,{variant:"fullWidth",sx:{mb:2}}),Object(T.jsx)(q,{roles:["Admin"],children:Object(T.jsxs)(T.Fragment,{children:[Object(T.jsxs)("div",{className:"pb-8",children:[Object(T.jsx)("div",{className:"pb-8 flex items-center",children:Object(T.jsx)(u.a,{className:"h2 font-medium",color:"textSecondary",children:K("Ruolo")})}),Object(T.jsx)(H.a,{container:!0,spacing:2,className:"px-12",children:Object(T.jsx)(H.a,{item:!0,xs:12,sm:6,children:Object(T.jsx)(v.a,{name:"attributes.mainRole",control:o,render:function(e){var t,a,r,n=e.field,i=n.onChange,c=n.onBlur,o=n.value,l=(n.name,n.ref);return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(u.a,{className:"h5 font-medium",color:"textSecondary",children:K("Selezionare il ruolo principale")}),Object(T.jsxs)(k.a,{fullWidth:!0,className:"mt-8 mb-16",error:!(null===(t=h.attributes)||void 0===t||!t.mainRole),required:!0,children:[Object(T.jsxs)(E.a,{id:"attributes.mainRole",onChange:function(e){i(e),d()},onBlur:c,value:o,inputRef:l,displayEmpty:!0,children:[Object(T.jsx)(P.a,{value:"",children:Object(T.jsx)("em",{children:Q("Selezionare il ruolo principale")})}),Object(T.jsx)(P.a,{value:"Admin",children:K("UserManager:Amminstratore")},"Admin"),Object(T.jsx)(P.a,{value:"User",children:K("UserManager:Utente")},"User")]}),Object(T.jsx)(z.a,{children:null===h||void 0===h||null===(a=h.attributes)||void 0===a||null===(r=a.mainRole)||void 0===r?void 0:r.message})]})]})}})})})]}),Object(T.jsx)(w.a,{variant:"fullWidth",sx:{mb:2}})]})}),Object(T.jsx)(q,{roles:["HRAdmin","TRAdmin"],children:Object(T.jsx)(v.a,{name:"attributes.mainRole",control:o,render:function(e){var t=e.field;return Object(T.jsx)("input",Object(r.a)(Object(r.a)({},t),{},{type:"hidden",name:"attributes.mainRole",id:"attributes.mainRole"}))}})}),"User"===m.attributes.mainRole&&Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(q,{roles:["Admin","HRAdmin"],children:Object(T.jsxs)(T.Fragment,{children:[Object(T.jsxs)("div",{className:"pb-8",children:[Object(T.jsx)("div",{className:"pb-8 flex items-center",children:Object(T.jsx)(u.a,{className:"h2 font-medium",color:"textSecondary",children:K("Azienda appaltatrice")})}),Object(T.jsxs)(H.a,{container:!0,spacing:2,className:"px-12",children:[Object(T.jsx)(H.a,{item:!0,xs:12,sm:6,children:Object(T.jsx)(v.a,{name:"attributes.hrcId",control:o,render:function(e){var t,a,r,n,i=e.field,o=i.onChange,l=i.onBlur,s=i.value,j=(i.name,i.ref);return Object(T.jsxs)(T.Fragment,{children:[S&&Object(T.jsx)(c.a,{}),!S&&Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(u.a,{className:"h5 font-medium",color:"textSecondary",children:K("Selezionare un'azienda appaltatrice")}),Object(T.jsxs)(k.a,{fullWidth:!0,className:"mt-8 mb-16",error:!(null===(t=h.attributes)||void 0===t||!t.hrcId),required:!0,disabled:""!==(null===(a=m.attributes)||void 0===a?void 0:a.trcId),children:[Object(T.jsxs)(E.a,{id:"attributes.hrcId",onChange:function(e){o(e),d()},onBlur:l,value:s,inputRef:j,displayEmpty:!0,children:[Object(T.jsx)(P.a,{value:"",children:Object(T.jsx)("em",{children:Q("Nessuna azienda appaltatrice")})}),M&&M.map((function(e){return Object(T.jsx)(P.a,{value:e.id,children:e.ragioneSociale},e.id)}))]}),Object(T.jsx)(z.a,{children:null===h||void 0===h||null===(r=h.attributes)||void 0===r||null===(n=r.hrcId)||void 0===n?void 0:n.message})]})]})]})}})}),(null===(t=m.attributes)||void 0===t?void 0:t.hrcId)&&Object(T.jsx)(H.a,{item:!0,xs:12,sm:6,children:Object(T.jsx)(v.a,{name:"attributes.hrcRole",control:o,render:function(e){var t,a,n,i=e.field;return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(u.a,{className:"h5 font-medium",color:"textSecondary",children:K("Selezionare il ruolo")}),Object(T.jsxs)(k.a,{fullWidth:!0,className:"mt-8 mb-16",error:!(null===(t=h.attributes)||void 0===t||!t.hrcRole),required:!0,children:[Object(T.jsxs)(E.a,Object(r.a)(Object(r.a)({},i),{},{id:"attributes.hrcRole",displayEmpty:!0,children:[Object(T.jsx)(P.a,{value:"",children:Object(T.jsx)("em",{children:Q("Selezionare il ruolo")})}),Object(T.jsx)(P.a,{value:"HRAdmin",children:K("UserManager:Amminstratore")},"Admin"),Object(T.jsx)(P.a,{value:"HRUser",children:K("UserManager:Utente")},"User")]})),Object(T.jsx)(z.a,{children:null===h||void 0===h||null===(a=h.attributes)||void 0===a||null===(n=a.hrcRole)||void 0===n?void 0:n.message})]})]})}})})]})]}),Object(T.jsx)(w.a,{variant:"fullWidth",sx:{mb:2}})]})}),Object(T.jsx)(q,{roles:["Admin","TRAdmin"],children:Object(T.jsxs)("div",{className:"pb-8",children:[Object(T.jsx)("div",{className:"pb-8 flex items-center",children:Object(T.jsx)(u.a,{className:"h2 font-medium",color:"textSecondary",children:K("Istituto di formazione")})}),Object(T.jsxs)(H.a,{container:!0,spacing:2,className:"px-12",children:[Object(T.jsx)(H.a,{item:!0,xs:12,sm:6,children:Object(T.jsx)(v.a,{name:"attributes.trcId",control:o,render:function(e){var t,a,r,n,i=e.field,o=i.onChange,l=i.onBlur,s=i.value,j=i.ref;return Object(T.jsxs)(T.Fragment,{children:[F&&Object(T.jsx)(c.a,{}),!F&&Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(u.a,{className:"h5 font-medium",color:"textSecondary",children:K("Selezionare un ente di formazione")}),Object(T.jsxs)(k.a,{fullWidth:!0,className:"mt-8 mb-16",error:!(null===(t=h.attributes)||void 0===t||!t.trcId),required:!0,disabled:""!==(null===(a=m.attributes)||void 0===a?void 0:a.hrcId),children:[Object(T.jsxs)(E.a,{id:"attributes.trcId",onChange:function(e){o(e),d()},onBlur:l,value:s,inputRef:j,displayEmpty:!0,children:[Object(T.jsx)(P.a,{value:"",children:Object(T.jsx)("em",{children:Q("Nessun istituto di formazione")})}),_&&_.map((function(e){return Object(T.jsx)(P.a,{value:e.id,children:e.ragioneSociale},e.id)}))]}),Object(T.jsx)(z.a,{children:null===h||void 0===h||null===(r=h.attributes)||void 0===r||null===(n=r.trcId)||void 0===n?void 0:n.message})]})]})]})}})}),(null===(a=m.attributes)||void 0===a?void 0:a.trcId)&&Object(T.jsx)(H.a,{item:!0,xs:12,sm:6,children:Object(T.jsx)(v.a,{name:"attributes.trcRole",control:o,render:function(e){var t,a,n,i=e.field;return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(u.a,{className:"h5 font-medium",color:"textSecondary",children:K("Selezionare il ruolo")}),Object(T.jsxs)(k.a,{fullWidth:!0,className:"mt-8 mb-16",error:!(null===(t=h.attributes)||void 0===t||!t.trcRole),required:!0,children:[Object(T.jsxs)(E.a,Object(r.a)(Object(r.a)({},i),{},{id:"attributes.trcRole",displayEmpty:!0,children:[Object(T.jsx)(P.a,{value:"",children:Object(T.jsx)("em",{children:Q("Selezionare il ruolo")})}),Object(T.jsx)(P.a,{value:"TRAdmin",children:K("UserManager:Amminstratore")},"Admin"),Object(T.jsx)(P.a,{value:"TRUser",children:K("UserManager:Utente")},"User")]})),Object(T.jsx)(z.a,{children:null===h||void 0===h||null===(a=h.attributes)||void 0===a||null===(n=a.trcRole)||void 0===n?void 0:n.message})]})]})}})})]})]})})]})]})},M=Object(N.a)(o.a)((function(e){var t=e.theme;return{"& .FusePageCarded-header":Object(i.a)({minHeight:72,height:72,alignItems:"center"},t.breakpoints.up("sm"),{minHeight:136,height:136})}}));t.default=Object(m.a)("user",I.a)((function(e){var t=Object(b.a)("UserManager").t,a=(Object(b.a)("common").t,Object(x.b)()),i=Object(x.c)((function(e){var t=e.userManager;return null===t||void 0===t?void 0:t.user})),o=Object(f.i)(),m=Object(O.useState)(0),N=Object(n.a)(m,2),I=N[0],R=N[1],w=Object(O.useState)(!1),P=Object(n.a)(w,2),k=P[0],z=P[1],E=S.f().shape({firstName:S.h().required().max(255),lastName:S.h().required().max(255),email:S.h().required().email(),enabled:S.c().required(),emailVerified:S.c().required(),attributes:S.f().shape({mainRole:S.h().required(),hrcId:S.h().when("mainRole",{is:"User",then:S.h().when("trcId",{is:function(e){return!e||e&&0===e.length},then:S.h().required()})}),hrcRole:S.h().when("hrcId",{is:function(e){return e.length>0},then:S.h().required()}),trcId:S.h().when("mainRole",{is:"User",then:S.h().when("hrcId",{is:function(e){return!e||e&&0===e.length},then:S.h().required()})}),trcRole:S.h().when("trcId",{is:function(e){return e.length>0},then:S.h().required()})})}).required(),H=Object(v.g)({mode:"onChange",defaultValues:{},resolver:Object(y.a)(E)}),U=H.reset,A=H.watch,L=(H.control,H.onChange,H.formState,H.trigger),W=A();return Object(l.b)((function(){"new"===o.id?a(Object(C.g)()):a(Object(C.f)(o)).then((function(e){e.payload||z(!0)}))}),[a,o]),Object(O.useEffect)((function(){i&&(U(i),L())}),[i,U,L]),Object(O.useEffect)((function(){return function(){a(Object(C.h)()),z(!1)}}),[a]),k?Object(T.jsxs)(h.a.div,{initial:{opacity:0},animate:{opacity:1,transition:{delay:.1}},className:"flex flex-col flex-1 items-center justify-center h-full",children:[Object(T.jsx)(u.a,{color:"textSecondary",variant:"h5",children:t("L'utente richiesto non \xe8 esistente")}),Object(T.jsx)(s.a,{className:"mt-24",component:g.a,variant:"outlined",to:"/user",color:"inherit",children:t("Torna indietro")})]}):p.a.isEmpty(W)||i&&o.id!==i.id&&"new"!==o.id?Object(T.jsx)(c.a,{}):Object(T.jsx)(v.b,Object(r.a)(Object(r.a)({},H),{},{children:Object(T.jsx)(M,{header:Object(T.jsx)(F.a,{title:"firstAndLastName",updateElement:C.i,urlIndex:"/user",urlIndexLabel:t("Title")}),contentToolbar:Object(T.jsx)(j.a,{value:I,onChange:function(e,t){return R(t)},indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:"auto",classes:{root:"w-full h-64"},children:Object(T.jsx)(d.a,{className:"h-64",label:t("Informazioni")})}),content:Object(T.jsx)("div",{className:"p-16 sm:p-24 max-w-2xl",children:Object(T.jsx)("div",{className:0!==I?"hidden":"",children:Object(T.jsx)(V,{form:W})})}),innerScroll:!0})}))}))}}]);