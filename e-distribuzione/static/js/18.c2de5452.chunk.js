(this["webpackJsonpsas-fe"]=this["webpackJsonpsas-fe"]||[]).push([[18],{1156:function(e,t,a){"use strict";var r=a(1193),n=a(1194),i=a(1195),c=a(1041),o=a(1196),l=a(0);t.a=function(e){var t=e.title,a=e.content,s=e.cancel,d=e.confirm,j=e.cancelDialog,b=e.confirmDialog;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(r.a,{id:"alert-dialog-title",children:t}),Object(l.jsx)(n.a,{children:Object(l.jsx)(i.a,{id:"alert-dialog-description",children:a})}),Object(l.jsxs)(o.a,{children:[Object(l.jsx)(c.a,{onClick:function(){return j()},color:"primary",children:s}),Object(l.jsx)(c.a,{onClick:function(){return b()},color:"primary",autoFocus:!0,children:d})]})]})}},1236:function(e,t,a){"use strict";a.d(t,"a",(function(){return z}));var r=a(93),n=a(4),i=a(54),c=a(14),o=a(8),l=a(1),s=a(995),d=a(48),j=a(1061),b=a(41),u=a(17),m=a(0);var h=function(e){var t=Object(d.a)(),a=Object(u.c)(Object(b.c)(t.palette.primary.main));return Object(m.jsx)("div",{className:"FusePageCarded-header",children:e.header&&Object(m.jsx)(j.a,{theme:a,children:e.header})})},x=a(6),O=a(16),f=a(109),g=a(1071),p=a(1073);var v=function(e){var t=Object(d.a)(),a=Object(u.c)(Object(b.c)(t.palette.primary.main));return Object(m.jsxs)(m.Fragment,{children:[e.header&&Object(m.jsx)(j.a,{theme:a,children:Object(m.jsx)("div",{className:Object(o.a)("FusePageCarded-sidebarHeader",e.variant),children:e.header})}),e.content&&Object(m.jsx)(i.a,{className:"FusePageCarded-sidebarContent",enable:e.innerScroll,children:e.content})]})};function S(e,t){var a=Object(l.useState)(!1),r=Object(O.a)(a,2),n=r[0],i=r[1];Object(l.useImperativeHandle)(t,(function(){return{toggleSidebar:c}}));var c=function(){i(!n)};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(g.a,{lgUp:"permanent"===e.variant,children:Object(m.jsx)(p.a,{variant:"temporary",anchor:e.position,open:n,onOpen:function(e){},onClose:function(e){return c()},disableSwipeToOpen:!0,classes:{root:Object(o.a)("FusePageCarded-sidebarWrapper",e.variant),paper:Object(o.a)("FusePageCarded-sidebar",e.variant,"left"===e.position?"FusePageCarded-leftSidebar":"FusePageCarded-rightSidebar")},ModalProps:{keepMounted:!0},container:e.rootRef.current,BackdropProps:{classes:{root:"FusePageCarded-backdrop"}},style:{position:"absolute"},children:Object(m.jsx)(v,Object(x.a)({},e))})}),"permanent"===e.variant&&Object(m.jsx)(g.a,{lgDown:!0,children:Object(m.jsx)(f.a,{variant:"permanent",className:Object(o.a)("FusePageCarded-sidebarWrapper",e.variant),open:n,classes:{paper:Object(o.a)("FusePageCarded-sidebar",e.variant,"left"===e.position?"FusePageCarded-leftSidebar":"FusePageCarded-rightSidebar")},children:Object(m.jsx)(v,Object(x.a)({},e))})})]})}var y,N=Object(l.forwardRef)(S),C=Object(c.a)("div")((function(e){var t=e.theme;return{display:"flex",flexDirection:"row",minWidth:0,minHeight:"100%",position:"relative",flex:"1 1 auto",width:"100%",height:"auto",backgroundColor:t.palette.background.default,"& .FusePageCarded-innerScroll":{height:"100%"},"& .FusePageCarded-topBg":{position:"absolute",left:0,right:0,top:0,height:F,background:"linear-gradient(to right, ".concat(t.palette.primary.dark," 0%, ").concat(t.palette.primary.main," 100%)"),backgroundSize:"cover",pointerEvents:"none"},"& .FusePageCarded-contentWrapper":Object(n.a)({display:"flex",flexDirection:"column",padding:"0 3.2rem",flex:"1 1 100%",zIndex:2,maxWidth:"100%",minWidth:0,minHeight:0},t.breakpoints.down("sm"),{padding:"0 1.6rem"}),"& .FusePageCarded-header":{height:w,minHeight:w,maxHeight:w,display:"flex",color:t.palette.primary.contrastText},"& .FusePageCarded-headerSidebarToggleButton":{color:t.palette.primary.contrastText},"& .FusePageCarded-contentCard":{display:"flex",flex:"1 1 100%",flexDirection:"column",backgroundColor:t.palette.background.paper,boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",minHeight:0,borderRadius:"20px 20px 0 0"},"& .FusePageCarded-toolbar":{height:I,minHeight:I,display:"flex",alignItems:"center",borderBottom:"1px solid ".concat(t.palette.divider)},"& .FusePageCarded-content":{flex:"1 1 auto",height:"100%",overflow:"auto",WebkitOverflowScrolling:"touch"},"& .FusePageCarded-sidebarWrapper":{position:"absolute",backgroundColor:"transparent",zIndex:5,overflow:"hidden","&.permanent":Object(n.a)({},t.breakpoints.up("lg"),{zIndex:1,position:"relative"})},"& .FusePageCarded-sidebar":{position:"absolute","&.permanent":Object(n.a)({},t.breakpoints.up("lg"),{backgroundColor:"transparent",position:"relative",border:"none",overflow:"hidden"}),width:P,height:"100%"},"& .FusePageCarded-leftSidebar":{},"& .FusePageCarded-rightSidebar":{},"& .FusePageCarded-sidebarHeader":{height:F,minHeight:F,color:t.palette.primary.contrastText,backgroundColor:t.palette.primary.dark,"&.permanent":Object(n.a)({},t.breakpoints.up("lg"),{backgroundColor:"transparent"})},"& .FusePageCarded-sidebarContent":Object(n.a)({display:"flex",flex:"1 1 auto",flexDirection:"column",backgroundColor:t.palette.background.default,color:t.palette.text.primary},t.breakpoints.up("lg"),{overflow:"auto",WebkitOverflowScrolling:"touch"}),"& .FusePageCarded-backdrop":{position:"absolute"}}})),P=240,F=200,I=64,w=F-I,k=Object(l.forwardRef)((function(e,t){var a=Object(l.useRef)(null),r=Object(l.useRef)(null),n=Object(l.useRef)(null),c=e.rightSidebarHeader||e.rightSidebarContent,d=e.leftSidebarHeader||e.leftSidebarContent;return Object(l.useImperativeHandle)(t,(function(){return{rootRef:n,toggleLeftSidebar:function(){a.current.toggleSidebar()},toggleRightSidebar:function(){r.current.toggleSidebar()}}})),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(s.a,{styles:function(t){return{"#fuse-main":{height:e.innerScroll&&"100vh"}}}}),Object(m.jsxs)(C,{className:Object(o.a)("FusePageCarded-root",e.innerScroll&&"FusePageCarded-innerScroll",e.className),ref:n,children:[Object(m.jsx)("div",{className:"FusePageCarded-topBg"}),Object(m.jsxs)("div",{className:"flex container w-full",children:[d&&Object(m.jsx)(N,{position:"left",header:e.leftSidebarHeader,content:e.leftSidebarContent,variant:e.leftSidebarVariant||"permanent",innerScroll:e.innerScroll,ref:a,rootRef:n}),Object(m.jsxs)("div",{className:Object(o.a)("FusePageCarded-contentWrapper",d&&(void 0===e.leftSidebarVariant||"permanent"===e.leftSidebarVariant)&&"lg:ltr:pl-0 lg:rtl:pr-0",c&&(void 0===e.rightSidebarVariant||"permanent"===e.rightSidebarVariant)&&"lg:pr-0"),children:[Object(m.jsx)(h,{header:e.header}),Object(m.jsxs)("div",{className:Object(o.a)("FusePageCarded-contentCard",e.innerScroll&&"inner-scroll"),children:[e.contentToolbar&&Object(m.jsx)("div",{className:"FusePageCarded-toolbar",children:e.contentToolbar}),e.content&&Object(m.jsx)(i.a,{className:"FusePageCarded-content",enable:e.innerScroll,scrollToTopOnRouteChange:e.innerScroll,children:e.content})]})]}),c&&Object(m.jsx)(N,{position:"right",header:e.rightSidebarHeader,content:e.rightSidebarContent,variant:e.rightSidebarVariant||"permanent",innerScroll:e.innerScroll,ref:r,rootRef:n})]})]})]})}));k.defaultProps={};var z=Object(l.memo)(Object(c.a)(k)(y||(y=Object(r.a)([""]))))},1242:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(106),n=function(e,t){for(var a in t.fields){var n=t.fields[a];if(n&&n.ref&&"reportValidity"in n.ref){var i=Object(r.d)(e,a);n.ref.setCustomValidity(i&&i.message||""),n.ref.reportValidity()}}},i=function(e,t){t.shouldUseNativeValidation&&n(e,t);var a={};for(var i in e){var c=Object(r.d)(t.fields,i);Object(r.e)(a,i,Object.assign(e[i],{ref:c&&c.ref}))}return a},c=function(e,t,a){return void 0===t&&(t={}),void 0===a&&(a={}),function(c,o,l){try{return Promise.resolve(function(r,i){try{var s=(t.context,Promise.resolve(e["sync"===a.mode?"validateSync":"validate"](c,Object.assign({abortEarly:!1},t,{context:o}))).then((function(e){return l.shouldUseNativeValidation&&n({},l),{values:e,errors:{}}})))}catch(d){return i(d)}return s&&s.then?s.then(void 0,i):s}(0,(function(e){return{values:{},errors:i((t=e,a=!l.shouldUseNativeValidation&&"all"===l.criteriaMode,t.inner.reduce((function(e,t){if(e[t.path]||(e[t.path]={message:t.message,type:t.type}),a){var n=e[t.path].types,i=n&&n[t.type];e[t.path]=Object(r.c)(t.path,a,e,t.type,i?[].concat(i,t.message):t.message)}return e}),{})),l)};var t,a})))}catch(s){return Promise.reject(s)}}}},1247:function(e,t,a){"use strict";var r=a(16),n=a(1026),i=a(48),c=a(1),o=a(1268),l=a(194),s=a(1014),d=a(1068),j=a(106),b=a(17),u=a(72),m=a(59),h=a(61),x=a(31),O=a(1156),f=a(259),g=a(0),p=function(e){var t=Object(b.b)(),a=e.title,p=e.titleStatic,v=e.subtitleStatic,S=e.updateElement,y=e.deleteElement,N=e.urlIndex,C=e.urlIndexLabel,P=e.backOnSave,F=Object(s.a)("common").t,I=Object(j.h)(),w=I.formState,k=I.watch,z=I.getValues,E=w.isValid,L=w.dirtyFields,T=a?k(a):"",W=Object(i.a)(),H=Object(m.g)(),D=Object(c.useState)(!1),R=Object(r.a)(D,2),V=R[0],B=R[1],M=Object(m.i)();return Object(g.jsxs)("div",{className:"flex flex-1 w-full items-center justify-between",children:[Object(g.jsxs)("div",{className:"flex flex-col items-start max-w-full min-w-0",children:[N&&C&&Object(g.jsx)(d.a.div,{initial:{x:20,opacity:0},animate:{x:0,opacity:1,transition:{delay:.3}},children:Object(g.jsxs)(l.a,{className:"flex items-center sm:mb-12",component:h.a,role:"button",to:N,color:"inherit",children:[Object(g.jsx)(n.a,{className:"text-20",children:"ltr"===W.direction?"arrow_back":"arrow_forward"}),Object(g.jsx)("span",{className:"hidden sm:flex mx-4 font-medium",children:C})]})}),Object(g.jsx)("div",{className:"flex items-center max-w-full",children:Object(g.jsx)("div",{className:"flex flex-col min-w-0 mx-8 sm:mc-16",children:Object(g.jsxs)(d.a.div,{initial:{x:-20},animate:{x:0,transition:{delay:.3}},children:[Object(g.jsx)(l.a,{className:"text-16 sm:text-20 truncate font-semibold",children:T||p||F("Nuovo")}),v&&Object(g.jsx)(l.a,{className:"text-16 sm:text-20 truncate font-semibold",children:v})]})})})]}),Object(g.jsxs)(d.a.div,{className:"flex",initial:{opacity:0,x:20},animate:{opacity:1,x:0,transition:{delay:.3}},children:["new"!==M.id&&y&&Object(g.jsx)(o.a,{loading:V,loadingPosition:"start",className:"whitespace-nowrap mx-4",variant:"contained",color:"secondary",onClick:function(){t(Object(f.c)({children:Object(g.jsx)(O.a,{title:F("Eliminazione"),content:F("EliminazioneDomanda",{recordName:T}),cancel:F("Annulla"),confirm:F("Conferma"),cancelDialog:function(){return t(Object(f.a)())},confirmDialog:function(){B(!0),t(y()).then((function(e){e.error?(B(!1),t(Object(u.c)({message:e.error.message,autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"center"},variant:"error"}))):(B(!1),t(Object(u.c)({message:F("Cancellazione effettuata correttamente"),autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"center"},variant:"success"})),t(Object(f.a)()),H.push(N))}))}})}))},startIcon:Object(g.jsx)(n.a,{className:"hidden sm:flex",children:"delete"}),children:F("Elimina")}),Object(g.jsx)(o.a,{loading:V,loadingPosition:"start",className:"whitespace-nowrap mx-4",variant:"contained",color:"secondary",disabled:x.a.isEmpty(L)||!E,startIcon:Object(g.jsx)(n.a,{className:"hidden sm:flex",children:"save"}),onClick:function(){B(!0),t(S(z())).then((function(e){e.error?(B(!1),t(Object(u.c)({message:e.error.message,autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"center"},variant:"error"}))):(B(!1),t(Object(u.c)({message:F("Modifiche effettuate correttamente"),autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"center"},variant:"success"})),P&&H.push(N))}))},children:F("Salva")})]})]})};p.defaultProps={title:"",deleteElement:void 0,backOnSave:!0,urlIndex:"",urlIndexLabel:""},t.a=p},1268:function(e,t,a){"use strict";var r=a(4),n=a(13),i=a(3),c=a(1),o=(a(12),a(18)),l=a(1313),s=a(14),d=a(23),j=a(1041),b=a(1198),u=a(1314),m=a(1315);function h(e){return Object(u.a)("MuiLoadingButton",e)}var x=Object(m.a)("MuiLoadingButton",["root","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]),O=a(0),f=["children","disabled","loading","loadingIndicator","loadingPosition"],g=Object(s.a)(j.a,{shouldForwardProp:function(e){return function(e){return"ownerState"!==e&&"theme"!==e&&"sx"!==e&&"as"!==e&&"classes"!==e}(e)||"classes"===e},name:"MuiLoadingButton",slot:"Root",overridesResolver:function(e,t){return[t.root,t.startIconLoadingStart&&Object(r.a)({},"& .".concat(x.startIconLoadingStart),t.startIconLoadingStart),t.endIconLoadingEnd&&Object(r.a)({},"& .".concat(x.endIconLoadingEnd),t.endIconLoadingEnd)]}})((function(e){var t=e.ownerState,a=e.theme;return Object(i.a)(Object(r.a)({},"& .".concat(x.startIconLoadingStart,", & .").concat(x.endIconLoadingEnd),{transition:a.transitions.create(["opacity"],{duration:a.transitions.duration.short}),opacity:0}),"center"===t.loadingPosition&&Object(r.a)({transition:a.transitions.create(["background-color","box-shadow","border-color"],{duration:a.transitions.duration.short})},"&.".concat(x.loading),{color:"transparent"}))})),p=Object(s.a)("div",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:function(e,t){var a=e.ownerState;return[t.loadingIndicator,t["loadingIndicator".concat(Object(o.a)(a.loadingPosition))]]}})((function(e){var t=e.theme,a=e.ownerState;return Object(i.a)({position:"absolute",visibility:"visible",display:"flex"},"start"===a.loadingPosition&&{left:14},"center"===a.loadingPosition&&{left:"50%",transform:"translate(-50%)",color:t.palette.action.disabled},"end"===a.loadingPosition&&{right:14})})),v=Object(O.jsx)(b.a,{color:"inherit",size:16}),S=c.forwardRef((function(e,t){var a=Object(d.a)({props:e,name:"MuiLoadingButton"}),r=a.children,c=a.disabled,s=void 0!==c&&c,j=a.loading,b=void 0!==j&&j,u=a.loadingIndicator,m=void 0===u?v:u,x=a.loadingPosition,S=void 0===x?"center":x,y=Object(n.a)(a,f),N=Object(i.a)({},a,{disabled:s,loading:b,loadingIndicator:m,loadingPosition:S}),C=function(e){var t=e.loading,a=e.loadingPosition,r=e.classes,n={root:["root",t&&"loading"],startIcon:[t&&"startIconLoading".concat(Object(o.a)(a))],endIcon:[t&&"endIconLoading".concat(Object(o.a)(a))],loadingIndicator:["loadingIndicator",t&&"loadingIndicator".concat(Object(o.a)(a))]},c=Object(l.a)(n,h,r);return Object(i.a)({},r,c)}(N);return Object(O.jsxs)(g,Object(i.a)({disabled:s||b,ref:t},y,{classes:C,ownerState:N,children:[b&&Object(O.jsx)(p,{className:C.loadingIndicator,ownerState:N,children:m}),r]}))}));t.a=S},1328:function(e,t,a){"use strict";a.r(t);var r=a(6),n=a(16),i=a(4),c=a(257),o=a(1236),l=a(111),s=a(1041),d=a(1200),j=a(1205),b=a(194),u=a(1014),m=a(438),h=a(1068),x=a(1),O=a(17),f=a(59),g=a(61),p=a(31),v=a(106),S=a(1242),y=a(261),N=a(14),C=a(551),P=a(262),F=a(1247),I=a(1038),w=a(1039),k=a(614),z=a(620),E=a(1207),L=a(1037),T=a(0),W=function(e){var t=Object(v.h)(),a=t.control,n=t.formState.errors,i=Object(u.a)("HRC").t;return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsxs)("div",{className:"pb-8",children:[Object(T.jsx)("div",{className:"pb-8 flex items-center",children:Object(T.jsx)(b.a,{className:"h2 font-medium",color:"textSecondary",children:i("Dati fiscali")})}),Object(T.jsx)(L.a,{variant:"fullWidth",sx:{mb:2}}),Object(T.jsxs)(E.a,{container:!0,spacing:2,className:"px-12",children:[Object(T.jsx)(E.a,{item:!0,xs:12,sm:6,children:Object(T.jsx)(v.a,{name:"ragioneSociale",control:a,render:function(e){var t,a=e.field;return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(b.a,{className:"h5 font-medium",color:"textSecondary",children:i("Ragione sociale")}),Object(T.jsx)(I.a,Object(r.a)(Object(r.a)({},a),{},{className:"mt-8 mb-16",error:!!n.ragioneSociale,required:!0,helperText:null===n||void 0===n||null===(t=n.ragioneSociale)||void 0===t?void 0:t.message,autoFocus:!0,id:"ragioneSociale",variant:"outlined",fullWidth:!0}))]})}})}),Object(T.jsx)(E.a,{item:!0,xs:12,sm:6,children:Object(T.jsx)(v.a,{name:"partitaIva",control:a,render:function(e){var t,a=e.field;return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(b.a,{className:"h5 font-medium",color:"textSecondary",children:i("Partita IVA")}),Object(T.jsx)(I.a,Object(r.a)(Object(r.a)({},a),{},{className:"mt-8 mb-16",error:!!n.partitaIva,helperText:null===n||void 0===n||null===(t=n.partitaIva)||void 0===t?void 0:t.message,id:"partitaIva",variant:"outlined",fullWidth:!0}))]})}})}),Object(T.jsx)(E.a,{item:!0,xs:12,sm:6,children:Object(T.jsx)(v.a,{name:"indirizzo",control:a,render:function(e){var t,a=e.field;return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(b.a,{className:"h5 font-medium",color:"textSecondary",children:i("Indirizzo")}),Object(T.jsx)(I.a,Object(r.a)(Object(r.a)({},a),{},{className:"mt-8 mb-16",error:!!n.indirizzo,helperText:null===n||void 0===n||null===(t=n.indirizzo)||void 0===t?void 0:t.message,id:"indirizzo",variant:"outlined",fullWidth:!0}))]})}})}),Object(T.jsx)(E.a,{item:!0,xs:12,sm:6,children:Object(T.jsx)(v.a,{name:"cap",control:a,render:function(e){var t,a=e.field;return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(b.a,{className:"h5 font-medium",color:"textSecondary",children:i("Cap")}),Object(T.jsx)(I.a,Object(r.a)(Object(r.a)({},a),{},{className:"mt-8 mb-16",error:!!n.cap,helperText:null===n||void 0===n||null===(t=n.cap)||void 0===t?void 0:t.message,id:"cap",variant:"outlined",fullWidth:!0}))]})}})}),Object(T.jsx)(E.a,{item:!0,xs:12,sm:6,children:Object(T.jsx)(v.a,{name:"citta",control:a,render:function(e){var t,a=e.field;return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(b.a,{className:"h5 font-medium",color:"textSecondary",children:i("Citta")}),Object(T.jsx)(I.a,Object(r.a)(Object(r.a)({},a),{},{className:"mt-8 mb-16",error:!!n.citta,helperText:null===n||void 0===n||null===(t=n.citta)||void 0===t?void 0:t.message,id:"citta",variant:"outlined",fullWidth:!0}))]})}})}),Object(T.jsx)(E.a,{item:!0,xs:12,sm:6,children:Object(T.jsx)(v.a,{name:"provincia",control:a,render:function(e){var t,a=e.field;return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(b.a,{className:"h5 font-medium",color:"textSecondary",children:i("Provincia")}),Object(T.jsx)(I.a,Object(r.a)(Object(r.a)({},a),{},{className:"mt-8 mb-16",error:!!n.provincia,helperText:null===n||void 0===n||null===(t=n.provincia)||void 0===t?void 0:t.message,id:"provincia",variant:"outlined",fullWidth:!0}))]})}})})]})]}),Object(T.jsxs)("div",{className:"pb-8",children:[Object(T.jsx)("div",{className:"pb-8 flex items-center",children:Object(T.jsx)(b.a,{className:"h2 font-medium",color:"textSecondary",children:i("Contatti")})}),Object(T.jsx)(L.a,{variant:"fullWidth",sx:{mb:2}}),Object(T.jsxs)(E.a,{container:!0,spacing:2,className:"px-12",children:[Object(T.jsx)(E.a,{item:!0,xs:12,sm:4,children:Object(T.jsx)(v.a,{name:"pec",control:a,render:function(e){var t,a=e.field;return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(b.a,{className:"h5 font-medium",color:"textSecondary",children:i("Pec")}),Object(T.jsx)(I.a,Object(r.a)(Object(r.a)({},a),{},{className:"mt-8 mb-16",error:!!n.pec,helperText:null===n||void 0===n||null===(t=n.pec)||void 0===t?void 0:t.message,id:"pec",variant:"outlined",fullWidth:!0}))]})}})}),Object(T.jsx)(E.a,{item:!0,xs:12,sm:4,children:Object(T.jsx)(v.a,{name:"telefono",control:a,render:function(e){var t,a=e.field;return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(b.a,{className:"h5 font-medium",color:"textSecondary",children:i("Telefono")}),Object(T.jsx)(I.a,Object(r.a)(Object(r.a)({},a),{},{className:"mt-8 mb-16",error:!!n.telefono,helperText:null===n||void 0===n||null===(t=n.telefono)||void 0===t?void 0:t.message,id:"telefono",variant:"outlined",fullWidth:!0}))]})}})}),Object(T.jsx)(E.a,{item:!0,xs:12,sm:4,children:Object(T.jsx)(v.a,{name:"cellulare",control:a,render:function(e){var t,a=e.field;return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(b.a,{className:"h5 font-medium",color:"textSecondary",children:i("Cellulare")}),Object(T.jsx)(I.a,Object(r.a)(Object(r.a)({},a),{},{className:"mt-8 mb-16",error:!!n.cellulare,helperText:null===n||void 0===n||null===(t=n.cellulare)||void 0===t?void 0:t.message,id:"cellulare",variant:"outlined",fullWidth:!0}))]})}})})]})]}),Object(T.jsxs)("div",{className:"pb-8",children:[Object(T.jsx)("div",{className:"pb-8 flex items-center",children:Object(T.jsx)(b.a,{className:"h2 font-medium",color:"textSecondary",children:i("Altro")})}),Object(T.jsx)(L.a,{variant:"fullWidth",sx:{mb:2}}),Object(T.jsxs)(E.a,{container:!0,spacing:2,className:"px-12",children:[Object(T.jsx)(E.a,{item:!0,xs:12,sm:6,children:Object(T.jsx)(v.a,{name:"sqaEDistribuzione",control:a,render:function(e){var t,a=e.field;return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(b.a,{className:"h5 font-medium",color:"textSecondary",children:i("SQA e-distribuzione")}),Object(T.jsx)(k.a,{fullWidth:!0,className:"mt-8 mb-16",children:Object(T.jsxs)(z.a,Object(r.a)(Object(r.a)({},a),{},{id:"sqaEDistribuzione",error:!!n.sqaEDistribuzione,helperText:null===n||void 0===n||null===(t=n.sqaEDistribuzione)||void 0===t?void 0:t.message,children:[Object(T.jsx)(w.a,{value:!0,children:i("common:Si")}),Object(T.jsx)(w.a,{value:!1,children:i("common:No")})]}))})]})}})}),Object(T.jsx)(E.a,{item:!0,xs:12,sm:6,children:Object(T.jsx)(v.a,{name:"lele05",control:a,render:function(e){var t,a=e.field;return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(b.a,{className:"h5 font-medium",color:"textSecondary",children:i("LELE05")}),Object(T.jsx)(k.a,{fullWidth:!0,className:"mt-8 mb-16",children:Object(T.jsxs)(z.a,Object(r.a)(Object(r.a)({},a),{},{id:"lele05",error:!!n.lele05,helperText:null===n||void 0===n||null===(t=n.lele05)||void 0===t?void 0:t.message,children:[Object(T.jsx)(w.a,{value:!0,children:i("common:Si")}),Object(T.jsx)(w.a,{value:!1,children:i("common:No")})]}))})]})}})})]})]})]})},H=Object(N.a)(o.a)((function(e){var t=e.theme;return{"& .FusePageCarded-header":Object(i.a)({minHeight:72,height:72,alignItems:"center"},t.breakpoints.up("sm"),{minHeight:136,height:136})}}));t.default=Object(m.a)("hrc",P.a)((function(e){var t=Object(u.a)("HRC").t,a=Object(u.a)("common").t,i=Object(O.b)(),o=Object(O.c)((function(e){var t=e.hrcManager;return null===t||void 0===t?void 0:t.hrc})),m=Object(f.i)(),N=Object(x.useState)(0),P=Object(n.a)(N,2),I=P[0],w=P[1],k=Object(x.useState)(!1),z=Object(n.a)(k,2),E=z[0],L=z[1],D=y.g().shape({ragioneSociale:y.i().required().max(255),partitaIva:y.i().max(255),indirizzo:y.i().max(255),cap:y.i().matches(/^\d{5}$/,{excludeEmptyString:!0,message:a("Inserire un zip/cap corretto")}),citta:y.i().max(255),provincia:y.i().max(255),pec:y.i().email(),telefono:y.i().max(255),cellulare:y.i().max(255),sqaEDistribuzione:y.c().required(),lele05:y.c().required()}),R=Object(v.g)({mode:"onChange",defaultValues:{},resolver:Object(S.a)(D)}),V=R.reset,B=R.trigger,M=R.watch,q=(R.control,R.onChange,R.formState,M());return Object(l.b)((function(){"new"===m.id?i(Object(C.c)()):i(Object(C.b)(m)).then((function(e){e.payload||L(!0)}))}),[i,m]),Object(x.useEffect)((function(){o&&(V(o),B())}),[o,V,B]),Object(x.useEffect)((function(){return function(){i(Object(C.d)()),L(!1)}}),[i]),E?Object(T.jsxs)(h.a.div,{initial:{opacity:0},animate:{opacity:1,transition:{delay:.1}},className:"flex flex-col flex-1 items-center justify-center h-full",children:[Object(T.jsx)(b.a,{color:"textSecondary",variant:"h5",children:a("L'elemento richiesto non esiste")}),Object(T.jsx)(s.a,{className:"mt-24",component:g.a,variant:"outlined",to:"/hrc",color:"inherit",children:a("Torna indietro")})]}):p.a.isEmpty(q)||o&&m.id!==o.id&&"new"!==m.id?Object(T.jsx)(c.a,{}):Object(T.jsx)(v.b,Object(r.a)(Object(r.a)({},R),{},{children:Object(T.jsx)(H,{header:Object(T.jsx)(F.a,{title:"ragioneSociale",updateElement:C.e,urlIndex:"/hrc",urlIndexLabel:t("Title")}),contentToolbar:Object(T.jsx)(j.a,{value:I,onChange:function(e,t){return w(t)},indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:"auto",classes:{root:"w-full h-64"},children:Object(T.jsx)(d.a,{className:"h-64",label:t("Informazioni")})}),content:Object(T.jsx)("div",{className:"p-16 sm:p-24 max-w-2xl",children:Object(T.jsx)("div",{className:0!==I?"hidden":"",children:Object(T.jsx)(W,{})})}),innerScroll:!0})}))}))}}]);