(this["webpackJsonpsas-fe"]=this["webpackJsonpsas-fe"]||[]).push([[11],{1077:function(e,t,a){"use strict";var r=a(1174),i=a(1175),n=a(1176),c=a(1042),o=a(1177),l=a(0);t.a=function(e){var t=e.title,a=e.content,s=e.cancel,d=e.confirm,u=e.cancelDialog,b=e.confirmDialog;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(r.a,{id:"alert-dialog-title",children:t}),Object(l.jsx)(i.a,{children:Object(l.jsx)(n.a,{id:"alert-dialog-description",children:a})}),Object(l.jsxs)(o.a,{children:[Object(l.jsx)(c.a,{onClick:function(){return u()},color:"primary",children:s}),Object(l.jsx)(c.a,{onClick:function(){return b()},color:"primary",autoFocus:!0,children:d})]})]})}},1080:function(e,t,a){"use strict";a.d(t,"a",(function(){return k}));var r=a(94),i=a(4),n=a(54),c=a(14),o=a(8),l=a(1),s=a(994),d=a(48),u=a(1060),b=a(40),j=a(17),m=a(0);var h=function(e){var t=Object(d.a)(),a=Object(j.c)(Object(b.c)(t.palette.primary.main));return Object(m.jsx)("div",{className:"FusePageCarded-header",children:e.header&&Object(m.jsx)(u.a,{theme:a,children:e.header})})},O=a(7),x=a(16),f=a(111),g=a(1070),p=a(1072);var v=function(e){var t=Object(d.a)(),a=Object(j.c)(Object(b.c)(t.palette.primary.main));return Object(m.jsxs)(m.Fragment,{children:[e.header&&Object(m.jsx)(u.a,{theme:a,children:Object(m.jsx)("div",{className:Object(o.a)("FusePageCarded-sidebarHeader",e.variant),children:e.header})}),e.content&&Object(m.jsx)(n.a,{className:"FusePageCarded-sidebarContent",enable:e.innerScroll,children:e.content})]})};function S(e,t){var a=Object(l.useState)(!1),r=Object(x.a)(a,2),i=r[0],n=r[1];Object(l.useImperativeHandle)(t,(function(){return{toggleSidebar:c}}));var c=function(){n(!i)};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(g.a,{lgUp:"permanent"===e.variant,children:Object(m.jsx)(p.a,{variant:"temporary",anchor:e.position,open:i,onOpen:function(e){},onClose:function(e){return c()},disableSwipeToOpen:!0,classes:{root:Object(o.a)("FusePageCarded-sidebarWrapper",e.variant),paper:Object(o.a)("FusePageCarded-sidebar",e.variant,"left"===e.position?"FusePageCarded-leftSidebar":"FusePageCarded-rightSidebar")},ModalProps:{keepMounted:!0},container:e.rootRef.current,BackdropProps:{classes:{root:"FusePageCarded-backdrop"}},style:{position:"absolute"},children:Object(m.jsx)(v,Object(O.a)({},e))})}),"permanent"===e.variant&&Object(m.jsx)(g.a,{lgDown:!0,children:Object(m.jsx)(f.a,{variant:"permanent",className:Object(o.a)("FusePageCarded-sidebarWrapper",e.variant),open:i,classes:{paper:Object(o.a)("FusePageCarded-sidebar",e.variant,"left"===e.position?"FusePageCarded-leftSidebar":"FusePageCarded-rightSidebar")},children:Object(m.jsx)(v,Object(O.a)({},e))})})]})}var y,N=Object(l.forwardRef)(S),C=Object(c.a)("div")((function(e){var t=e.theme;return{display:"flex",flexDirection:"row",minWidth:0,minHeight:"100%",position:"relative",flex:"1 1 auto",width:"100%",height:"auto",backgroundColor:t.palette.background.default,"& .FusePageCarded-innerScroll":{height:"100%"},"& .FusePageCarded-topBg":{position:"absolute",left:0,right:0,top:0,height:I,background:"linear-gradient(to right, ".concat(t.palette.primary.dark," 0%, ").concat(t.palette.primary.main," 100%)"),backgroundSize:"cover",pointerEvents:"none"},"& .FusePageCarded-contentWrapper":Object(i.a)({display:"flex",flexDirection:"column",padding:"0 3.2rem",flex:"1 1 100%",zIndex:2,maxWidth:"100%",minWidth:0,minHeight:0},t.breakpoints.down("sm"),{padding:"0 1.6rem"}),"& .FusePageCarded-header":{height:w,minHeight:w,maxHeight:w,display:"flex",color:t.palette.primary.contrastText},"& .FusePageCarded-headerSidebarToggleButton":{color:t.palette.primary.contrastText},"& .FusePageCarded-contentCard":{display:"flex",flex:"1 1 100%",flexDirection:"column",backgroundColor:t.palette.background.paper,boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",minHeight:0,borderRadius:"20px 20px 0 0"},"& .FusePageCarded-toolbar":{height:F,minHeight:F,display:"flex",alignItems:"center",borderBottom:"1px solid ".concat(t.palette.divider)},"& .FusePageCarded-content":{flex:"1 1 auto",height:"100%",overflow:"auto",WebkitOverflowScrolling:"touch"},"& .FusePageCarded-sidebarWrapper":{position:"absolute",backgroundColor:"transparent",zIndex:5,overflow:"hidden","&.permanent":Object(i.a)({},t.breakpoints.up("lg"),{zIndex:1,position:"relative"})},"& .FusePageCarded-sidebar":{position:"absolute","&.permanent":Object(i.a)({},t.breakpoints.up("lg"),{backgroundColor:"transparent",position:"relative",border:"none",overflow:"hidden"}),width:R,height:"100%"},"& .FusePageCarded-leftSidebar":{},"& .FusePageCarded-rightSidebar":{},"& .FusePageCarded-sidebarHeader":{height:I,minHeight:I,color:t.palette.primary.contrastText,backgroundColor:t.palette.primary.dark,"&.permanent":Object(i.a)({},t.breakpoints.up("lg"),{backgroundColor:"transparent"})},"& .FusePageCarded-sidebarContent":Object(i.a)({display:"flex",flex:"1 1 auto",flexDirection:"column",backgroundColor:t.palette.background.default,color:t.palette.text.primary},t.breakpoints.up("lg"),{overflow:"auto",WebkitOverflowScrolling:"touch"}),"& .FusePageCarded-backdrop":{position:"absolute"}}})),R=240,I=200,F=64,w=I-F,P=Object(l.forwardRef)((function(e,t){var a=Object(l.useRef)(null),r=Object(l.useRef)(null),i=Object(l.useRef)(null),c=e.rightSidebarHeader||e.rightSidebarContent,d=e.leftSidebarHeader||e.leftSidebarContent;return Object(l.useImperativeHandle)(t,(function(){return{rootRef:i,toggleLeftSidebar:function(){a.current.toggleSidebar()},toggleRightSidebar:function(){r.current.toggleSidebar()}}})),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(s.a,{styles:function(t){return{"#fuse-main":{height:e.innerScroll&&"100vh"}}}}),Object(m.jsxs)(C,{className:Object(o.a)("FusePageCarded-root",e.innerScroll&&"FusePageCarded-innerScroll",e.className),ref:i,children:[Object(m.jsx)("div",{className:"FusePageCarded-topBg"}),Object(m.jsxs)("div",{className:"flex container w-full",children:[d&&Object(m.jsx)(N,{position:"left",header:e.leftSidebarHeader,content:e.leftSidebarContent,variant:e.leftSidebarVariant||"permanent",innerScroll:e.innerScroll,ref:a,rootRef:i}),Object(m.jsxs)("div",{className:Object(o.a)("FusePageCarded-contentWrapper",d&&(void 0===e.leftSidebarVariant||"permanent"===e.leftSidebarVariant)&&"lg:ltr:pl-0 lg:rtl:pr-0",c&&(void 0===e.rightSidebarVariant||"permanent"===e.rightSidebarVariant)&&"lg:pr-0"),children:[Object(m.jsx)(h,{header:e.header}),Object(m.jsxs)("div",{className:Object(o.a)("FusePageCarded-contentCard",e.innerScroll&&"inner-scroll"),children:[e.contentToolbar&&Object(m.jsx)("div",{className:"FusePageCarded-toolbar",children:e.contentToolbar}),e.content&&Object(m.jsx)(n.a,{className:"FusePageCarded-content",enable:e.innerScroll,scrollToTopOnRouteChange:e.innerScroll,children:e.content})]})]}),c&&Object(m.jsx)(N,{position:"right",header:e.rightSidebarHeader,content:e.rightSidebarContent,variant:e.rightSidebarVariant||"permanent",innerScroll:e.innerScroll,ref:r,rootRef:i})]})]})]})}));P.defaultProps={};var k=Object(l.memo)(Object(c.a)(P)(y||(y=Object(r.a)([""]))))},1086:function(e,t,a){"use strict";var r=a(12),i=a.n(r),n=a(59),c=function(e){var t=e.roles,a=e.children;return n.a.hasRole(t)?a:null};c.propTypes={roles:i.a.arrayOf(i.a.string).isRequired},t.a=c},1087:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(105),i=function(e,t){for(var a in t.fields){var i=t.fields[a];if(i&&i.ref&&"reportValidity"in i.ref){var n=Object(r.d)(e,a);i.ref.setCustomValidity(n&&n.message||""),i.ref.reportValidity()}}},n=function(e,t){t.shouldUseNativeValidation&&i(e,t);var a={};for(var n in e){var c=Object(r.d)(t.fields,n);Object(r.e)(a,n,Object.assign(e[n],{ref:c&&c.ref}))}return a},c=function(e,t,a){return void 0===t&&(t={}),void 0===a&&(a={}),function(c,o,l){try{return Promise.resolve(function(r,n){try{var s=(t.context,Promise.resolve(e["sync"===a.mode?"validateSync":"validate"](c,Object.assign({abortEarly:!1},t,{context:o}))).then((function(e){return l.shouldUseNativeValidation&&i({},l),{values:e,errors:{}}})))}catch(d){return n(d)}return s&&s.then?s.then(void 0,n):s}(0,(function(e){return{values:{},errors:n((t=e,a=!l.shouldUseNativeValidation&&"all"===l.criteriaMode,t.inner.reduce((function(e,t){if(e[t.path]||(e[t.path]={message:t.message,type:t.type}),a){var i=e[t.path].types,n=i&&i[t.type];e[t.path]=Object(r.c)(t.path,a,e,t.type,n?[].concat(n,t.message):t.message)}return e}),{})),l)};var t,a})))}catch(s){return Promise.reject(s)}}}},1094:function(e,t,a){"use strict";var r=a(16),i=a(1027),n=a(48),c=a(1),o=a(1155),l=a(209),s=a(1014),d=a(1067),u=a(105),b=a(17),j=a(69),m=a(57),h=a(61),O=a(31),x=a(1077),f=a(250),g=a(0),p=function(e){var t=Object(b.b)(),a=e.title,p=e.titleStatic,v=e.subtitleStatic,S=e.updateElement,y=e.deleteElement,N=e.urlIndex,C=e.urlIndexLabel,R=e.backOnSave,I=Object(s.a)("common").t,F=Object(u.h)(),w=F.formState,P=F.watch,k=F.getValues,V=w.isValid,z=w.dirtyFields,E=a?P(a):"",H=Object(n.a)(),A=Object(m.g)(),T=Object(c.useState)(!1),W=Object(r.a)(T,2),q=W[0],L=W[1],U=Object(m.i)();return Object(g.jsxs)("div",{className:"flex flex-1 w-full items-center justify-between",children:[Object(g.jsxs)("div",{className:"flex flex-col items-start max-w-full min-w-0",children:[N&&C&&Object(g.jsx)(d.a.div,{initial:{x:20,opacity:0},animate:{x:0,opacity:1,transition:{delay:.3}},children:Object(g.jsxs)(l.a,{className:"flex items-center sm:mb-12",component:h.a,role:"button",to:N,color:"inherit",children:[Object(g.jsx)(i.a,{className:"text-20",children:"ltr"===H.direction?"arrow_back":"arrow_forward"}),Object(g.jsx)("span",{className:"hidden sm:flex mx-4 font-medium",children:C})]})}),Object(g.jsx)("div",{className:"flex items-center max-w-full",children:Object(g.jsx)("div",{className:"flex flex-col min-w-0 mx-8 sm:mc-16",children:Object(g.jsxs)(d.a.div,{initial:{x:-20},animate:{x:0,transition:{delay:.3}},children:[Object(g.jsx)(l.a,{className:"text-16 sm:text-20 truncate font-semibold",children:E||p||I("Nuovo")}),v&&Object(g.jsx)(l.a,{className:"text-16 sm:text-20 truncate font-semibold",children:v})]})})})]}),Object(g.jsxs)(d.a.div,{className:"flex",initial:{opacity:0,x:20},animate:{opacity:1,x:0,transition:{delay:.3}},children:["new"!==U.id&&y&&Object(g.jsx)(o.a,{loading:q,loadingPosition:"start",className:"whitespace-nowrap mx-4",variant:"contained",color:"secondary",onClick:function(){t(Object(f.c)({children:Object(g.jsx)(x.a,{title:I("Eliminazione"),content:I("EliminazioneDomanda",{recordName:E}),cancel:I("Annulla"),confirm:I("Conferma"),cancelDialog:function(){return t(Object(f.a)())},confirmDialog:function(){L(!0),t(y()).then((function(e){e.error?(L(!1),t(Object(j.c)({message:e.error.message,autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"center"},variant:"error"}))):(L(!1),t(Object(j.c)({message:I("Cancellazione effettuata correttamente"),autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"center"},variant:"success"})),t(Object(f.a)()),A.push(N))}))}})}))},startIcon:Object(g.jsx)(i.a,{className:"hidden sm:flex",children:"delete"}),children:I("Elimina")}),Object(g.jsx)(o.a,{loading:q,loadingPosition:"start",className:"whitespace-nowrap mx-4",variant:"contained",color:"secondary",disabled:O.a.isEmpty(z)||!V,startIcon:Object(g.jsx)(i.a,{className:"hidden sm:flex",children:"save"}),onClick:function(){L(!0),t(S(k())).then((function(e){e.error?(L(!1),t(Object(j.c)({message:e.error.message,autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"center"},variant:"error"}))):(L(!1),t(Object(j.c)({message:I("Modifiche effettuate correttamente"),autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"center"},variant:"success"})),R&&A.push(N))}))},children:I("Salva")})]})]})};p.defaultProps={title:"",deleteElement:void 0,backOnSave:!0,urlIndex:"",urlIndexLabel:""},t.a=p},1155:function(e,t,a){"use strict";var r=a(4),i=a(13),n=a(3),c=a(1),o=(a(12),a(19)),l=a(1268),s=a(14),d=a(23),u=a(1042),b=a(1191),j=a(1269),m=a(1270);function h(e){return Object(j.a)("MuiLoadingButton",e)}var O=Object(m.a)("MuiLoadingButton",["root","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]),x=a(0),f=["children","disabled","loading","loadingIndicator","loadingPosition"],g=Object(s.a)(u.a,{shouldForwardProp:function(e){return function(e){return"ownerState"!==e&&"theme"!==e&&"sx"!==e&&"as"!==e&&"classes"!==e}(e)||"classes"===e},name:"MuiLoadingButton",slot:"Root",overridesResolver:function(e,t){return[t.root,t.startIconLoadingStart&&Object(r.a)({},"& .".concat(O.startIconLoadingStart),t.startIconLoadingStart),t.endIconLoadingEnd&&Object(r.a)({},"& .".concat(O.endIconLoadingEnd),t.endIconLoadingEnd)]}})((function(e){var t=e.ownerState,a=e.theme;return Object(n.a)(Object(r.a)({},"& .".concat(O.startIconLoadingStart,", & .").concat(O.endIconLoadingEnd),{transition:a.transitions.create(["opacity"],{duration:a.transitions.duration.short}),opacity:0}),"center"===t.loadingPosition&&Object(r.a)({transition:a.transitions.create(["background-color","box-shadow","border-color"],{duration:a.transitions.duration.short})},"&.".concat(O.loading),{color:"transparent"}))})),p=Object(s.a)("div",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:function(e,t){var a=e.ownerState;return[t.loadingIndicator,t["loadingIndicator".concat(Object(o.a)(a.loadingPosition))]]}})((function(e){var t=e.theme,a=e.ownerState;return Object(n.a)({position:"absolute",visibility:"visible",display:"flex"},"start"===a.loadingPosition&&{left:14},"center"===a.loadingPosition&&{left:"50%",transform:"translate(-50%)",color:t.palette.action.disabled},"end"===a.loadingPosition&&{right:14})})),v=Object(x.jsx)(b.a,{color:"inherit",size:16}),S=c.forwardRef((function(e,t){var a=Object(d.a)({props:e,name:"MuiLoadingButton"}),r=a.children,c=a.disabled,s=void 0!==c&&c,u=a.loading,b=void 0!==u&&u,j=a.loadingIndicator,m=void 0===j?v:j,O=a.loadingPosition,S=void 0===O?"center":O,y=Object(i.a)(a,f),N=Object(n.a)({},a,{disabled:s,loading:b,loadingIndicator:m,loadingPosition:S}),C=function(e){var t=e.loading,a=e.loadingPosition,r=e.classes,i={root:["root",t&&"loading"],startIcon:[t&&"startIconLoading".concat(Object(o.a)(a))],endIcon:[t&&"endIconLoading".concat(Object(o.a)(a))],loadingIndicator:["loadingIndicator",t&&"loadingIndicator".concat(Object(o.a)(a))]},c=Object(l.a)(i,h,r);return Object(n.a)({},r,c)}(N);return Object(x.jsxs)(g,Object(n.a)({disabled:s||b,ref:t},y,{classes:C,ownerState:N,children:[b&&Object(x.jsx)(p,{className:C.loadingIndicator,ownerState:N,children:m}),r]}))}));t.a=S},1282:function(e,t,a){"use strict";a.r(t);var r=a(7),i=a(16),n=a(4),c=a(248),o=a(1080),l=a(108),s=a(1042),d=a(1197),u=a(1208),b=a(209),j=a(1014),m=a(404),h=a(1067),O=a(1),x=a(17),f=a(57),g=a(61),p=a(31),v=a(105),S=a(253),y=a(1087),N=a(14),C=a(431),R=a(254),I=a(1094),F=a(27),w=a(1039),P=a(1038),k=a(1040),V=a(613),z=a(616),E=a(619),H=a(1209),A=a(59),T=a(1086),W=a(1161),q=a(1044),L=a(1163),U=a(1047),B=a(0),D=function(e){var t,a,n,o,l,s,d=Object(v.h)(),u=d.control,m=d.formState,h=d.watch,f=d.trigger,g=d.setValue,p=h(),S=m.errors,y=(Object(x.c)((function(e){var t=e.i18n;return null===t||void 0===t?void 0:t.language})),Object(x.c)((function(e){return e.auth.user}))),N=Object(O.useState)(!0),R=Object(i.a)(N,2),I=R[0],D=R[1],M=Object(O.useState)(!0),J=Object(i.a)(M,2),_=J[0],G=J[1],K=Object(x.b)(),Q=Object(O.useState)([]),X=Object(i.a)(Q,2),Y=X[0],Z=X[1],$=Object(O.useState)([]),ee=Object(i.a)($,2),te=ee[0],ae=ee[1],re=Object(j.a)("UserManager").t,ie=Object(j.a)("common").t,ne="undefined"!==typeof p.id,ce=function(){return g("attributes.hrcRole","")},oe=function(){g("attributes.trcRole",""),le()},le=function(){g("attributes.profiliValutatore",[])};return Object(O.useEffect)((function(){A.a.hasRole(["Admin"])&&(K(Object(C.c)()).then((function(e){Z(e.payload),D(!1)})),K(Object(C.d)()).then((function(e){ae(e.payload),G(!1)}))),A.a.hasRole(["Admin"])||(g("attributes.mainRole","User"),f()),A.a.hasRole(["HRAdmin"])&&K(Object(C.b)()).then((function(e){Z([{id:e.payload.id,ragioneSociale:e.payload.ragioneSociale}]),D(!1),g("attributes.hrcId",e.payload.id),f()})),A.a.hasRole(["TRAdmin"])&&K(Object(C.e)()).then((function(e){ae([{id:e.payload.id,ragioneSociale:e.payload.ragioneSociale}]),G(!1),g("attributes.trcId",e.payload.id),f()}))}),[K,g,f,y]),Object(B.jsxs)(B.Fragment,{children:[Object(B.jsxs)("div",{className:"pb-8",children:[Object(B.jsx)("div",{className:"pb-8 flex items-center",children:Object(B.jsx)(b.a,{className:"h2 font-medium",color:"textSecondary",children:re("Dati")})}),Object(B.jsxs)(H.a,{container:!0,spacing:2,className:"px-12",children:[Object(B.jsx)(H.a,{item:!0,xs:12,sm:6,children:Object(B.jsx)(v.a,{name:"firstName",control:u,render:function(e){var t,a=e.field;return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(b.a,{className:"h5 font-medium",color:"textSecondary",children:re("Nome")}),Object(B.jsx)(w.a,Object(r.a)(Object(r.a)({},a),{},{className:"mt-8 mb-16",error:!!S.firstName,required:!0,helperText:null===S||void 0===S||null===(t=S.firstName)||void 0===t?void 0:t.message,id:"firstName",variant:"outlined",fullWidth:!0,autoFocus:!0}))]})}})}),Object(B.jsx)(H.a,{item:!0,xs:12,sm:6,children:Object(B.jsx)(v.a,{name:"lastName",control:u,render:function(e){var t,a=e.field;return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(b.a,{className:"h5 font-medium",color:"textSecondary",children:re("Cognome")}),Object(B.jsx)(w.a,Object(r.a)(Object(r.a)({},a),{},{className:"mt-8 mb-16",error:!!S.lastName,required:!0,helperText:null===S||void 0===S||null===(t=S.lastName)||void 0===t?void 0:t.message,id:"lastName",variant:"outlined",fullWidth:!0}))]})}})}),Object(B.jsx)(H.a,{item:!0,xs:12,sm:6,children:Object(B.jsx)(v.a,{name:"email",control:u,render:function(e){var t,a=e.field;return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(b.a,{className:"h5 font-medium",color:"textSecondary",children:re("Email")}),Object(B.jsx)(w.a,Object(r.a)(Object(r.a)({},a),{},{className:"mt-8 mb-16",error:!!S.email,required:!0,helperText:null===S||void 0===S||null===(t=S.email)||void 0===t?void 0:t.message,id:"email",variant:"outlined",fullWidth:!0}))]})}})}),Object(B.jsx)(H.a,{item:!0,xs:12,sm:6,children:Object(B.jsx)(v.a,{name:"enabled",control:u,render:function(e){var t,a=e.field;return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(b.a,{className:"h5 font-medium",color:"textSecondary",children:re("Abilitato")}),Object(B.jsxs)(V.a,{fullWidth:!0,className:"mt-8 mb-16",error:!!S.enabled,required:!0,children:[Object(B.jsxs)(E.a,Object(r.a)(Object(r.a)({},a),{},{id:"enabled",children:[Object(B.jsx)(k.a,{value:!0,children:ie("Si")}),Object(B.jsx)(k.a,{value:!1,children:ie("No")})]})),Object(B.jsx)(z.a,{children:null===S||void 0===S||null===(t=S.enabled)||void 0===t?void 0:t.message})]})]})}})}),Object(B.jsx)(H.a,{item:!0,xs:12,sm:6,children:Object(B.jsx)(v.a,{name:"emailVerified",control:u,render:function(e){var t,a=e.field;return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(b.a,{className:"h5 font-medium",color:"textSecondary",children:re("Email verificata")}),Object(B.jsxs)(V.a,{fullWidth:!0,className:"mt-8 mb-16",error:!!S.emailVerified,required:!0,children:[Object(B.jsxs)(E.a,Object(r.a)(Object(r.a)({},a),{},{id:"emailVerified",children:[Object(B.jsx)(k.a,{value:!0,children:ie("Si")}),Object(B.jsx)(k.a,{value:!1,children:ie("No")})]})),Object(B.jsx)(z.a,{children:null===S||void 0===S||null===(t=S.emailVerified)||void 0===t?void 0:t.message})]})]})}})})]})]}),Object(B.jsx)(P.a,{variant:"fullWidth",sx:{mb:2}}),Object(B.jsx)(T.a,{roles:["Admin"],children:Object(B.jsxs)(B.Fragment,{children:[Object(B.jsxs)("div",{className:"pb-8",children:[Object(B.jsx)("div",{className:"pb-8 flex items-center",children:Object(B.jsx)(b.a,{className:"h2 font-medium",color:"textSecondary",children:re("Ruolo")})}),Object(B.jsx)(H.a,{container:!0,spacing:2,className:"px-12",children:Object(B.jsx)(H.a,{item:!0,xs:12,sm:6,children:Object(B.jsx)(v.a,{name:"attributes.mainRole",control:u,render:function(e){var t,a,r,i=e.field,n=i.onChange,c=i.onBlur,o=i.value,l=(i.name,i.ref);return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(b.a,{className:"h5 font-medium",color:"textSecondary",children:re("Selezionare il ruolo principale")}),Object(B.jsxs)(V.a,{fullWidth:!0,className:"mt-8 mb-16",error:!!(null===(t=S.attributes)||void 0===t?void 0:t.mainRole),required:!0,children:[Object(B.jsxs)(E.a,{id:"attributes.mainRole",onChange:function(e){n(e),"User"!==e.target.value&&(g("attributes.hrcId",""),ce(),g("attributes.trcId",""),oe()),f()},onBlur:c,value:o,inputRef:l,displayEmpty:!0,disabled:ne,children:[Object(B.jsx)(k.a,{value:"",children:Object(B.jsx)("em",{children:ie("Selezionare il ruolo principale")})}),Object(B.jsx)(k.a,{value:"Admin",children:re("Amminstratore di sistema")},"Admin"),Object(B.jsx)(k.a,{value:"User",children:re("Utente")},"User")]}),Object(B.jsx)(z.a,{children:null===S||void 0===S||null===(a=S.attributes)||void 0===a||null===(r=a.mainRole)||void 0===r?void 0:r.message})]})]})}})})})]}),Object(B.jsx)(P.a,{variant:"fullWidth",sx:{mb:2}})]})}),Object(B.jsx)(T.a,{roles:["HRAdmin","TRAdmin"],children:Object(B.jsx)(v.a,{name:"attributes.mainRole",control:u,render:function(e){var t=e.field;return Object(B.jsx)("input",Object(r.a)(Object(r.a)({},t),{},{type:"hidden",name:"attributes.mainRole",id:"attributes.mainRole"}))}})}),"User"===p.attributes.mainRole&&Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(T.a,{roles:["Admin","HRAdmin"],children:Object(B.jsxs)(B.Fragment,{children:[!ne&&Object(B.jsx)("div",{className:"pb-8",children:Object(B.jsx)(H.a,{container:!0,spacing:2,className:"px-12",children:Object(B.jsx)(H.a,{item:!0,xs:12,sm:6,children:Object(B.jsx)(W.Alert,{severity:"info",children:re("\xc8 possibile selezionare o un'azienda appaltatrice o un istituto di formazione")})})})}),ne&&Object(B.jsx)("div",{className:"pb-8",children:Object(B.jsx)(H.a,{container:!0,spacing:2,className:"px-12",children:Object(B.jsx)(H.a,{item:!0,xs:12,sm:6,children:Object(B.jsx)(W.Alert,{severity:"info",children:re("Non \xe8 possibile modificare i ruoli di un utente una volta creato")})})})}),Object(B.jsxs)("div",{className:"pb-8",children:[Object(B.jsx)("div",{className:"pb-8 flex items-center",children:Object(B.jsx)(b.a,{className:"h2 font-medium",color:"textSecondary",children:re("Azienda appaltatrice")})}),Object(B.jsxs)(H.a,{container:!0,spacing:2,className:"px-12",children:[Object(B.jsx)(H.a,{item:!0,xs:12,sm:6,children:Object(B.jsx)(v.a,{name:"attributes.hrcId",control:u,render:function(e){var t,a,r,i,n=e.field,o=n.onChange,l=n.onBlur,s=n.value,d=(n.name,n.ref);return Object(B.jsxs)(B.Fragment,{children:[I&&Object(B.jsx)(c.a,{}),!I&&Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(b.a,{className:"h5 font-medium",color:"textSecondary",children:re("Selezionare un'azienda appaltatrice")}),Object(B.jsxs)(V.a,{fullWidth:!0,className:"mt-8 mb-16",error:!!(null===(t=S.attributes)||void 0===t?void 0:t.hrcId),required:!0,disabled:""!==(null===(a=p.attributes)||void 0===a?void 0:a.trcId)||ne,children:[Object(B.jsxs)(E.a,{id:"attributes.hrcId",onChange:function(e){o(e),e.target.value||ce(),f()},onBlur:l,value:s,inputRef:d,displayEmpty:!0,disabled:ne,children:[Object(B.jsx)(k.a,{value:"",children:Object(B.jsx)("em",{children:ie("Nessuna azienda appaltatrice")})}),Y&&Y.map((function(e){return Object(B.jsx)(k.a,{value:e.id,children:e.ragioneSociale},e.id)}))]}),Object(B.jsx)(z.a,{children:null===S||void 0===S||null===(r=S.attributes)||void 0===r||null===(i=r.hrcId)||void 0===i?void 0:i.message})]})]})]})}})}),(null===(t=p.attributes)||void 0===t?void 0:t.hrcId)&&Object(B.jsx)(H.a,{item:!0,xs:12,sm:6,children:Object(B.jsx)(v.a,{name:"attributes.hrcRole",control:u,render:function(e){var t,a,i,n=e.field;return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(b.a,{className:"h5 font-medium",color:"textSecondary",children:re("Selezionare il ruolo")}),Object(B.jsxs)(V.a,{fullWidth:!0,className:"mt-8 mb-16",error:!!(null===(t=S.attributes)||void 0===t?void 0:t.hrcRole),required:!0,children:[Object(B.jsxs)(E.a,Object(r.a)(Object(r.a)({},n),{},{id:"attributes.hrcRole",displayEmpty:!0,disabled:ne,children:[Object(B.jsx)(k.a,{value:"",children:Object(B.jsx)("em",{children:ie("Selezionare il ruolo")})}),Object(B.jsx)(k.a,{value:"HRAdmin",children:re("HRAdmin")},"Admin"),Object(B.jsx)(k.a,{value:"HRUser",children:re("HRUser")},"User")]})),Object(B.jsx)(z.a,{children:null===S||void 0===S||null===(a=S.attributes)||void 0===a||null===(i=a.hrcRole)||void 0===i?void 0:i.message})]})]})}})})]})]}),Object(B.jsx)(P.a,{variant:"fullWidth",sx:{mb:2}})]})}),Object(B.jsx)(T.a,{roles:["Admin","TRAdmin"],children:Object(B.jsxs)("div",{className:"pb-8",children:[Object(B.jsx)("div",{className:"pb-8 flex items-center",children:Object(B.jsx)(b.a,{className:"h2 font-medium",color:"textSecondary",children:re("Istituto di formazione")})}),Object(B.jsxs)(H.a,{container:!0,spacing:2,className:"px-12",children:[Object(B.jsx)(H.a,{item:!0,xs:12,sm:6,children:Object(B.jsx)(v.a,{name:"attributes.trcId",control:u,render:function(e){var t,a,r,i,n=e.field,o=n.onChange,l=n.onBlur,s=n.value,d=n.ref;return Object(B.jsxs)(B.Fragment,{children:[_&&Object(B.jsx)(c.a,{}),!_&&Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(b.a,{className:"h5 font-medium",color:"textSecondary",children:re("Selezionare un ente di formazione")}),Object(B.jsxs)(V.a,{fullWidth:!0,className:"mt-8 mb-16",error:!!(null===(t=S.attributes)||void 0===t?void 0:t.trcId),required:!0,disabled:""!==(null===(a=p.attributes)||void 0===a?void 0:a.hrcId)||ne,children:[Object(B.jsxs)(E.a,{id:"attributes.trcId",onChange:function(e){o(e),e.target.value||oe(),f()},onBlur:l,value:s,inputRef:d,displayEmpty:!0,children:[Object(B.jsx)(k.a,{value:"",children:Object(B.jsx)("em",{children:ie("Nessun istituto di formazione")})}),te&&te.map((function(e){return Object(B.jsx)(k.a,{value:e.id,children:e.ragioneSociale},e.id)}))]}),Object(B.jsx)(z.a,{children:null===S||void 0===S||null===(r=S.attributes)||void 0===r||null===(i=r.trcId)||void 0===i?void 0:i.message})]})]})]})}})}),(null===(a=p.attributes)||void 0===a?void 0:a.trcId)&&Object(B.jsx)(H.a,{item:!0,xs:12,sm:6,children:Object(B.jsx)(v.a,{name:"attributes.trcRole",control:u,render:function(e){var t,a,r,i=e.field,n=i.onChange,c=i.onBlur,o=i.value,l=i.ref;return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(b.a,{className:"h5 font-medium",color:"textSecondary",children:re("Selezionare il ruolo")}),Object(B.jsxs)(V.a,{fullWidth:!0,className:"mt-8 mb-16",error:!!(null===(t=S.attributes)||void 0===t?void 0:t.trcRole),required:!0,children:[Object(B.jsxs)(E.a,{id:"attributes.trcRole",displayEmpty:!0,onChange:function(e){n(e),"TRUser"!==e.target.value&&le(),f()},onBlur:c,value:o,inputRef:l,disabled:ne,children:[Object(B.jsx)(k.a,{value:"",children:Object(B.jsx)("em",{children:ie("Selezionare il ruolo")})}),Object(B.jsx)(k.a,{value:"TRAdmin",children:re("TRAdmin")},"Admin"),Object(B.jsx)(k.a,{value:"TRUser",children:re("TRUser")},"User")]}),Object(B.jsx)(z.a,{children:null===S||void 0===S||null===(a=S.attributes)||void 0===a||null===(r=a.trcRole)||void 0===r?void 0:r.message})]})]})}})})]}),Object(B.jsx)(H.a,{container:!0,spacing:2,className:"px-12",children:"TRUser"===(null===(n=p.attributes)||void 0===n?void 0:n.trcRole)&&Object(B.jsxs)(H.a,{item:!0,xs:12,sm:12,children:[Object(B.jsx)(b.a,{className:"h5 font-medium",color:"textSecondary",children:re("Indicare i profili del valutatore")}),Object(B.jsx)(U.a,{sx:{display:"flex",flexDirection:"row"},children:["Sicurezza","D","E","F","G"].map((function(e){return Object(B.jsx)(v.a,{name:"attributes.profiliValutatore",control:u,render:function(t){var a,r=t.field,i=(r.value,r.onChange,r.ref);return Object(B.jsx)(V.a,{fullWidth:!0,className:"mt-8 mb-16",error:!!(null===(a=S.attributes)||void 0===a?void 0:a.profiliValutatore),required:!0,disabled:ne,children:Object(B.jsx)(q.a,{control:Object(B.jsx)(L.a,{value:e,onChange:function(t){if(p.attributes.profiliValutatore.includes(e)){var a=p.attributes.profiliValutatore.filter((function(t){return t!==e}));g("attributes.profiliValutatore",a)}else{var r=[].concat(Object(F.a)(p.attributes.profiliValutatore),[e]);g("attributes.profiliValutatore",r)}f()},inputRef:i,name:"attributes.profiliValutatore",id:"attributes.profiliValutatore",checked:p.attributes.profiliValutatore.includes(e),disabled:ne}),label:re(e)})})}},e)}))}),Object(B.jsx)(V.a,{fullWidth:!0,className:"mt-8 mb-16",error:!!(null===(o=S.attributes)||void 0===o?void 0:o.profiliValutatore),required:!0,disabled:ne,children:Object(B.jsx)(z.a,{children:null===S||void 0===S||null===(l=S.attributes)||void 0===l||null===(s=l.profiliValutatore)||void 0===s?void 0:s.message})})]})})]})})]})]})},M=Object(N.a)(o.a)((function(e){var t=e.theme;return{"& .FusePageCarded-header":Object(n.a)({minHeight:72,height:72,alignItems:"center"},t.breakpoints.up("sm"),{minHeight:136,height:136})}}));t.default=Object(m.a)("user",R.a)((function(e){var t=Object(j.a)("UserManager").t,a=(Object(j.a)("common").t,Object(x.b)()),n=Object(x.c)((function(e){var t=e.userManager;return null===t||void 0===t?void 0:t.user})),o=Object(f.i)(),m=Object(O.useState)(0),N=Object(i.a)(m,2),R=N[0],F=N[1],w=Object(O.useState)(!1),P=Object(i.a)(w,2),k=P[0],V=P[1],z=S.f().shape({firstName:S.h().required().max(255),lastName:S.h().required().max(255),email:S.h().required().email(),enabled:S.c().required(),emailVerified:S.c().required(),attributes:S.f().shape({mainRole:S.h().required(),hrcId:S.h().when("mainRole",{is:"User",then:S.h().when("trcId",{is:function(e){return!e||e&&0===e.length},then:S.h().required()})}),hrcRole:S.h().when("hrcId",{is:function(e){return e.length>0},then:S.h().required()}),trcId:S.h().when("mainRole",{is:"User",then:S.h().when("hrcId",{is:function(e){return!e||e&&0===e.length},then:S.h().required()})}),trcRole:S.h().when("trcId",{is:function(e){return e.length>0},then:S.h().required()}),profiliValutatore:S.a().when("trcRole",{is:function(e){return"TRUser"===e},then:S.a().min(1,t("Selezionare almeno un profilo"))})})}).required(),E=Object(v.g)({mode:"onChange",defaultValues:{},resolver:Object(y.a)(z)}),H=E.reset,A=E.watch,T=(E.control,E.onChange,E.formState,E.trigger),W=A();return Object(l.b)((function(){"new"===o.id?a(Object(C.g)()):a(Object(C.f)(o)).then((function(e){e.payload||V(!0)}))}),[a,o]),Object(O.useEffect)((function(){n&&(H(n),T())}),[n,H,T]),Object(O.useEffect)((function(){return function(){a(Object(C.h)()),V(!1)}}),[a]),k?Object(B.jsxs)(h.a.div,{initial:{opacity:0},animate:{opacity:1,transition:{delay:.1}},className:"flex flex-col flex-1 items-center justify-center h-full",children:[Object(B.jsx)(b.a,{color:"textSecondary",variant:"h5",children:t("L'utente richiesto non esiste")}),Object(B.jsx)(s.a,{className:"mt-24",component:g.a,variant:"outlined",to:"/user",color:"inherit",children:t("Torna indietro")})]}):p.a.isEmpty(W)||n&&o.id!==n.id&&"new"!==o.id?Object(B.jsx)(c.a,{}):Object(B.jsx)(v.b,Object(r.a)(Object(r.a)({},E),{},{children:Object(B.jsx)(M,{header:Object(B.jsx)(I.a,{title:"firstAndLastName",updateElement:C.i,urlIndex:"/user",urlIndexLabel:t("Title")}),contentToolbar:Object(B.jsx)(u.a,{value:R,onChange:function(e,t){return F(t)},indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:"auto",classes:{root:"w-full h-64"},children:Object(B.jsx)(d.a,{className:"h-64",label:t("Informazioni")})}),content:Object(B.jsx)("div",{className:"p-16 sm:p-24 max-w-2xl",children:Object(B.jsx)("div",{className:0!==R?"hidden":"",children:Object(B.jsx)(D,{form:W})})}),innerScroll:!0})}))}))}}]);