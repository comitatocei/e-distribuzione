(this["webpackJsonpsas-fe"]=this["webpackJsonpsas-fe"]||[]).push([[9],{1070:function(e,t,a){"use strict";var n=a(1163),r=a(1164),i=a(1165),c=a(1036),o=a(1166),l=a(0);t.a=function(e){var t=e.title,a=e.content,s=e.cancel,d=e.confirm,j=e.cancelDialog,b=e.confirmDialog;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(n.a,{id:"alert-dialog-title",children:t}),Object(l.jsx)(r.a,{children:Object(l.jsx)(i.a,{id:"alert-dialog-description",children:a})}),Object(l.jsxs)(o.a,{children:[Object(l.jsx)(c.a,{onClick:function(){return j()},color:"primary",children:s}),Object(l.jsx)(c.a,{onClick:function(){return b()},color:"primary",autoFocus:!0,children:d})]})]})}},1073:function(e,t,a){"use strict";a.d(t,"a",(function(){return T}));var n=a(95),r=a(4),i=a(54),c=a(14),o=a(7),l=a(1),s=a(989),d=a(48),j=a(1055),b=a(39),m=a(17),u=a(0);var h=function(e){var t=Object(d.a)(),a=Object(m.c)(Object(b.c)(t.palette.primary.main));return Object(u.jsx)("div",{className:"FusePageCarded-header",children:e.header&&Object(u.jsx)(j.a,{theme:a,children:e.header})})},O=a(10),x=a(16),f=a(111),p=a(1063),v=a(1066);var g=function(e){var t=Object(d.a)(),a=Object(m.c)(Object(b.c)(t.palette.primary.main));return Object(u.jsxs)(u.Fragment,{children:[e.header&&Object(u.jsx)(j.a,{theme:a,children:Object(u.jsx)("div",{className:Object(o.a)("FusePageCarded-sidebarHeader",e.variant),children:e.header})}),e.content&&Object(u.jsx)(i.a,{className:"FusePageCarded-sidebarContent",enable:e.innerScroll,children:e.content})]})};function N(e,t){var a=Object(l.useState)(!1),n=Object(x.a)(a,2),r=n[0],i=n[1];Object(l.useImperativeHandle)(t,(function(){return{toggleSidebar:c}}));var c=function(){i(!r)};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(p.a,{lgUp:"permanent"===e.variant,children:Object(u.jsx)(v.a,{variant:"temporary",anchor:e.position,open:r,onOpen:function(e){},onClose:function(e){return c()},disableSwipeToOpen:!0,classes:{root:Object(o.a)("FusePageCarded-sidebarWrapper",e.variant),paper:Object(o.a)("FusePageCarded-sidebar",e.variant,"left"===e.position?"FusePageCarded-leftSidebar":"FusePageCarded-rightSidebar")},ModalProps:{keepMounted:!0},container:e.rootRef.current,BackdropProps:{classes:{root:"FusePageCarded-backdrop"}},style:{position:"absolute"},children:Object(u.jsx)(g,Object(O.a)({},e))})}),"permanent"===e.variant&&Object(u.jsx)(p.a,{lgDown:!0,children:Object(u.jsx)(f.a,{variant:"permanent",className:Object(o.a)("FusePageCarded-sidebarWrapper",e.variant),open:r,classes:{paper:Object(o.a)("FusePageCarded-sidebar",e.variant,"left"===e.position?"FusePageCarded-leftSidebar":"FusePageCarded-rightSidebar")},children:Object(u.jsx)(g,Object(O.a)({},e))})})]})}var S,y=Object(l.forwardRef)(N),C=Object(c.a)("div")((function(e){var t=e.theme;return{display:"flex",flexDirection:"row",minWidth:0,minHeight:"100%",position:"relative",flex:"1 1 auto",width:"100%",height:"auto",backgroundColor:t.palette.background.default,"& .FusePageCarded-innerScroll":{height:"100%"},"& .FusePageCarded-topBg":{position:"absolute",left:0,right:0,top:0,height:P,background:"linear-gradient(to right, ".concat(t.palette.primary.dark," 0%, ").concat(t.palette.primary.main," 100%)"),backgroundSize:"cover",pointerEvents:"none"},"& .FusePageCarded-contentWrapper":Object(r.a)({display:"flex",flexDirection:"column",padding:"0 3.2rem",flex:"1 1 100%",zIndex:2,maxWidth:"100%",minWidth:0,minHeight:0},t.breakpoints.down("sm"),{padding:"0 1.6rem"}),"& .FusePageCarded-header":{height:w,minHeight:w,maxHeight:w,display:"flex",color:t.palette.primary.contrastText},"& .FusePageCarded-headerSidebarToggleButton":{color:t.palette.primary.contrastText},"& .FusePageCarded-contentCard":{display:"flex",flex:"1 1 100%",flexDirection:"column",backgroundColor:t.palette.background.paper,boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",minHeight:0,borderRadius:"20px 20px 0 0"},"& .FusePageCarded-toolbar":{height:z,minHeight:z,display:"flex",alignItems:"center",borderBottom:"1px solid ".concat(t.palette.divider)},"& .FusePageCarded-content":{flex:"1 1 auto",height:"100%",overflow:"auto",WebkitOverflowScrolling:"touch"},"& .FusePageCarded-sidebarWrapper":{position:"absolute",backgroundColor:"transparent",zIndex:5,overflow:"hidden","&.permanent":Object(r.a)({},t.breakpoints.up("lg"),{zIndex:1,position:"relative"})},"& .FusePageCarded-sidebar":{position:"absolute","&.permanent":Object(r.a)({},t.breakpoints.up("lg"),{backgroundColor:"transparent",position:"relative",border:"none",overflow:"hidden"}),width:F,height:"100%"},"& .FusePageCarded-leftSidebar":{},"& .FusePageCarded-rightSidebar":{},"& .FusePageCarded-sidebarHeader":{height:P,minHeight:P,color:t.palette.primary.contrastText,backgroundColor:t.palette.primary.dark,"&.permanent":Object(r.a)({},t.breakpoints.up("lg"),{backgroundColor:"transparent"})},"& .FusePageCarded-sidebarContent":Object(r.a)({display:"flex",flex:"1 1 auto",flexDirection:"column",backgroundColor:t.palette.background.default,color:t.palette.text.primary},t.breakpoints.up("lg"),{overflow:"auto",WebkitOverflowScrolling:"touch"}),"& .FusePageCarded-backdrop":{position:"absolute"}}})),F=240,P=200,z=64,w=P-z,I=Object(l.forwardRef)((function(e,t){var a=Object(l.useRef)(null),n=Object(l.useRef)(null),r=Object(l.useRef)(null),c=e.rightSidebarHeader||e.rightSidebarContent,d=e.leftSidebarHeader||e.leftSidebarContent;return Object(l.useImperativeHandle)(t,(function(){return{rootRef:r,toggleLeftSidebar:function(){a.current.toggleSidebar()},toggleRightSidebar:function(){n.current.toggleSidebar()}}})),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(s.a,{styles:function(t){return{"#fuse-main":{height:e.innerScroll&&"100vh"}}}}),Object(u.jsxs)(C,{className:Object(o.a)("FusePageCarded-root",e.innerScroll&&"FusePageCarded-innerScroll",e.className),ref:r,children:[Object(u.jsx)("div",{className:"FusePageCarded-topBg"}),Object(u.jsxs)("div",{className:"flex container w-full",children:[d&&Object(u.jsx)(y,{position:"left",header:e.leftSidebarHeader,content:e.leftSidebarContent,variant:e.leftSidebarVariant||"permanent",innerScroll:e.innerScroll,ref:a,rootRef:r}),Object(u.jsxs)("div",{className:Object(o.a)("FusePageCarded-contentWrapper",d&&(void 0===e.leftSidebarVariant||"permanent"===e.leftSidebarVariant)&&"lg:ltr:pl-0 lg:rtl:pr-0",c&&(void 0===e.rightSidebarVariant||"permanent"===e.rightSidebarVariant)&&"lg:pr-0"),children:[Object(u.jsx)(h,{header:e.header}),Object(u.jsxs)("div",{className:Object(o.a)("FusePageCarded-contentCard",e.innerScroll&&"inner-scroll"),children:[e.contentToolbar&&Object(u.jsx)("div",{className:"FusePageCarded-toolbar",children:e.contentToolbar}),e.content&&Object(u.jsx)(i.a,{className:"FusePageCarded-content",enable:e.innerScroll,scrollToTopOnRouteChange:e.innerScroll,children:e.content})]})]}),c&&Object(u.jsx)(y,{position:"right",header:e.rightSidebarHeader,content:e.rightSidebarContent,variant:e.rightSidebarVariant||"permanent",innerScroll:e.innerScroll,ref:n,rootRef:r})]})]})]})}));I.defaultProps={};var T=Object(l.memo)(Object(c.a)(I)(S||(S=Object(n.a)([""]))))},1076:function(e,t,a){"use strict";var n=a(1192),r=a(199),i={en_US:r.a,en:r.a,it:n.a,it_IT:n.a},c={getLocale:function(e){return i[e]}};t.a=c},1084:function(e,t,a){"use strict";a.d(t,"b",(function(){return i}));var n=a(36),r=a(37);function i(e){return Object(n.a)("MuiInputAdornment",e)}var c=Object(r.a)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]);t.a=c},1085:function(e,t,a){"use strict";var n=a(16),r=a(1021),i=a(48),c=a(1),o=a(1153),l=a(208),s=a(1007),d=a(1061),j=a(105),b=a(17),m=a(70),u=a(57),h=a(60),O=a(31),x=a(1070),f=a(246),p=a(0),v=function(e){var t=Object(b.b)(),a=e.title,v=e.titleStatic,g=e.subtitleStatic,N=e.updateElement,S=e.deleteElement,y=e.urlIndex,C=e.urlIndexLabel,F=Object(s.a)("common").t,P=Object(j.h)(),z=P.formState,w=P.watch,I=P.getValues,T=z.isValid,E=z.dirtyFields,k=a?w(a):"",W=Object(i.a)(),D=Object(u.g)(),L=Object(c.useState)(!1),M=Object(n.a)(L,2),H=M[0],R=M[1],V=Object(u.i)();return Object(p.jsxs)("div",{className:"flex flex-1 w-full items-center justify-between",children:[Object(p.jsxs)("div",{className:"flex flex-col items-start max-w-full min-w-0",children:[Object(p.jsx)(d.a.div,{initial:{x:20,opacity:0},animate:{x:0,opacity:1,transition:{delay:.3}},children:Object(p.jsxs)(l.a,{className:"flex items-center sm:mb-12",component:h.a,role:"button",to:y,color:"inherit",children:[Object(p.jsx)(r.a,{className:"text-20",children:"ltr"===W.direction?"arrow_back":"arrow_forward"}),Object(p.jsx)("span",{className:"hidden sm:flex mx-4 font-medium",children:C})]})}),Object(p.jsx)("div",{className:"flex items-center max-w-full",children:Object(p.jsx)("div",{className:"flex flex-col min-w-0 mx-8 sm:mc-16",children:Object(p.jsxs)(d.a.div,{initial:{x:-20},animate:{x:0,transition:{delay:.3}},children:[Object(p.jsx)(l.a,{className:"text-16 sm:text-20 truncate font-semibold",children:k||v||F("Nuovo")}),g&&Object(p.jsx)(l.a,{className:"text-16 sm:text-20 truncate font-semibold",children:g})]})})})]}),Object(p.jsxs)(d.a.div,{className:"flex",initial:{opacity:0,x:20},animate:{opacity:1,x:0,transition:{delay:.3}},children:["new"!==V.id&&S&&Object(p.jsx)(o.a,{loading:H,loadingPosition:"start",className:"whitespace-nowrap mx-4",variant:"contained",color:"secondary",onClick:function(){t(Object(f.c)({children:Object(p.jsx)(x.a,{title:F("Eliminazione"),content:F("EliminazioneDomanda",{recordName:k}),cancel:F("Annulla"),confirm:F("Conferma"),cancelDialog:function(){return t(Object(f.a)())},confirmDialog:function(){R(!0),t(S()).then((function(e){e.error?(R(!1),t(Object(m.c)({message:e.error.message,autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"center"},variant:"error"}))):(R(!1),t(Object(m.c)({message:F("Cancellazione effettuata correttamente"),autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"center"},variant:"success"})),t(Object(f.a)()),D.push(y))}))}})}))},startIcon:Object(p.jsx)(r.a,{className:"hidden sm:flex",children:"delete"}),children:F("Elimina")}),Object(p.jsx)(o.a,{loading:H,loadingPosition:"start",className:"whitespace-nowrap mx-4",variant:"contained",color:"secondary",disabled:O.a.isEmpty(E)||!T,startIcon:Object(p.jsx)(r.a,{className:"hidden sm:flex",children:"save"}),onClick:function(){R(!0),t(N(I())).then((function(e){e.error?(R(!1),t(Object(m.c)({message:e.error.message,autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"center"},variant:"error"}))):(R(!1),t(Object(m.c)({message:F("Modifiche effettuate correttamente"),autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"center"},variant:"success"})),D.push(y))}))},children:F("Salva")})]})]})};v.defaultProps={title:"",deleteElement:void 0},t.a=v},1151:function(e,t,a){"use strict";var n=a(4),r=a(13),i=a(3),c=a(1),o=(a(12),a(7)),l=a(43),s=a(19),d=a(208),j=a(196),b=a(98),m=a(14),u=a(1084),h=a(23),O=a(0),x=["children","className","component","disablePointerEvents","disableTypography","position","variant"],f=Object(m.a)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,t["position".concat(Object(s.a)(a.position))],!0===a.disablePointerEvents&&t.disablePointerEvents,t[a.variant]]}})((function(e){var t=e.theme,a=e.ownerState;return Object(i.a)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:t.palette.action.active},"filled"===a.variant&&Object(n.a)({},"&.".concat(u.a.positionStart,"&:not(.").concat(u.a.hiddenLabel,")"),{marginTop:16}),"start"===a.position&&{marginRight:8},"end"===a.position&&{marginLeft:8},!0===a.disablePointerEvents&&{pointerEvents:"none"})})),p=c.forwardRef((function(e,t){var a=Object(h.a)({props:e,name:"MuiInputAdornment"}),n=a.children,m=a.className,p=a.component,v=void 0===p?"div":p,g=a.disablePointerEvents,N=void 0!==g&&g,S=a.disableTypography,y=void 0!==S&&S,C=a.position,F=a.variant,P=Object(r.a)(a,x),z=Object(b.a)()||{},w=F;F&&z.variant,z&&!w&&(w=z.variant);var I=Object(i.a)({},a,{hiddenLabel:z.hiddenLabel,size:z.size,disablePointerEvents:N,position:C,variant:w}),T=function(e){var t=e.classes,a=e.disablePointerEvents,n=e.hiddenLabel,r=e.position,i=e.size,c=e.variant,o={root:["root",a&&"disablePointerEvents",r&&"position".concat(Object(s.a)(r)),c,n&&"hiddenLabel",i&&"size".concat(Object(s.a)(i))]};return Object(l.a)(o,u.b,t)}(I);return Object(O.jsx)(j.a.Provider,{value:null,children:Object(O.jsx)(f,Object(i.a)({as:v,ownerState:I,className:Object(o.a)(T.root,m),ref:t},P,{children:"string"!==typeof n||y?Object(O.jsxs)(c.Fragment,{children:["start"===C?Object(O.jsx)("span",{className:"notranslate",dangerouslySetInnerHTML:{__html:"&#8203;"}}):null,n]}):Object(O.jsx)(d.a,{color:"text.secondary",children:n})}))})}));t.a=p},1262:function(e,t,a){"use strict";a.r(t);var n=a(10),r=a(16),i=a(4),c=a(247),o=a(1073),l=a(108),s=a(1036),d=a(1185),j=a(1195),b=a(208),m=a(1007),u=a(399),h=a(1061),O=a(1),x=a(17),f=a(57),p=a(60),v=a(31),g=a(105),N=a(1081),S=a(251),y=a(14),C=a(545),F=a(252),P=a(1085),z=a(1033),w=a(1062),I=a(1258),T=a(1060),E=a(1034),k=a(608),W=a(611),D=a(614),L=a(1076),M=a(1197),H=a(1032),R=a(426),V=a(0),A=function(e){var t=Object(g.h)(),a=t.control,i=t.formState,o=t.setValue,l=t.trigger,s=i.errors,d=Object(x.c)((function(e){return e.auth.user})),j=Object(x.c)((function(e){var t=e.i18n;return null===t||void 0===t?void 0:t.language})),u=L.a.getLocale(j),h=Object(O.useState)(!0),f=Object(r.a)(h,2),p=f[0],v=f[1],N=Object(O.useState)([]),S=Object(r.a)(N,2),y=S[0],C=S[1],F=Object(x.b)(),P=Object(m.a)("Dipendente").t,A=Object(m.a)("common").t;return Object(O.useEffect)((function(){d.hrcId?(v(!1),o("hrcId",d.hrcId),l()):F(Object(R.c)()).then((function(e){C(e.payload),v(!1)}))}),[F,d.hrcId,o,l]),Object(V.jsxs)(V.Fragment,{children:[Object(V.jsxs)("div",{className:"pb-8",children:[Object(V.jsx)("div",{className:"pb-8 flex items-center",children:Object(V.jsx)(b.a,{className:"h2 font-medium",color:"textSecondary",children:P("Dati personali")})}),Object(V.jsxs)(M.a,{container:!0,spacing:2,className:"px-12",children:[Object(V.jsx)(M.a,{item:!0,xs:12,sm:4,children:Object(V.jsx)(g.a,{name:"nome",control:a,render:function(e){var t,a=e.field;return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(b.a,{className:"h5 font-medium",color:"textSecondary",children:P("Nome")}),Object(V.jsx)(z.a,Object(n.a)(Object(n.a)({},a),{},{className:"mt-8 mb-16",error:!!s.nome,required:!0,helperText:null===s||void 0===s||null===(t=s.nome)||void 0===t?void 0:t.message,id:"nome",variant:"outlined",fullWidth:!0}))]})}})}),Object(V.jsx)(M.a,{item:!0,xs:12,sm:4,children:Object(V.jsx)(g.a,{name:"cognome",control:a,render:function(e){var t,a=e.field;return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(b.a,{className:"h5 font-medium",color:"textSecondary",children:P("Cognome")}),Object(V.jsx)(z.a,Object(n.a)(Object(n.a)({},a),{},{className:"mt-8 mb-16",error:!!s.cognome,required:!0,helperText:null===s||void 0===s||null===(t=s.cognome)||void 0===t?void 0:t.message,id:"cognome",variant:"outlined",fullWidth:!0}))]})}})}),Object(V.jsx)(M.a,{item:!0,xs:12,sm:4,children:Object(V.jsx)(g.a,{name:"codiceFiscale",control:a,render:function(e){var t,a=e.field;return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(b.a,{className:"h5 font-medium",color:"textSecondary",children:P("Codice fiscale")}),Object(V.jsx)(z.a,Object(n.a)(Object(n.a)({},a),{},{className:"mt-8 mb-16",error:!!s.codiceFiscale,required:!0,helperText:null===s||void 0===s||null===(t=s.codiceFiscale)||void 0===t?void 0:t.message,autoFocus:!0,id:"codiceFiscale",variant:"outlined",fullWidth:!0}))]})}})}),Object(V.jsx)(M.a,{item:!0,xs:12,sm:4,children:Object(V.jsx)(g.a,{name:"nazionalita",control:a,render:function(e){var t,a=e.field;return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(b.a,{className:"h5 font-medium",color:"textSecondary",children:P("Nazionalit\xe0")}),Object(V.jsx)(z.a,Object(n.a)(Object(n.a)({},a),{},{className:"mt-8 mb-16",error:!!s.nazionalita,helperText:null===s||void 0===s||null===(t=s.nazionalita)||void 0===t?void 0:t.message,id:"nazionalita",variant:"outlined",fullWidth:!0}))]})}})}),Object(V.jsx)(M.a,{item:!0,xs:12,sm:4,children:Object(V.jsx)(g.a,{name:"dataDiNascita",control:a,render:function(e){var t=e.field;return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(b.a,{className:"h5 font-medium",color:"textSecondary",children:P("Data di nascita")}),Object(V.jsx)(T.b,{dateAdapter:w.a,locale:u,children:Object(V.jsx)(I.a,Object(n.a)(Object(n.a)({},t),{},{renderInput:function(e){var t;return Object(V.jsx)(z.a,Object(n.a)(Object(n.a)({},e),{},{className:"mt-8 mb-16",variant:"outlined",fullWidth:!0,error:!!s.dataDiNascita,helperText:null===s||void 0===s||null===(t=s.dataDiNascita)||void 0===t?void 0:t.message,id:"dataDiNascita"}))}}))})]})}})}),Object(V.jsx)(M.a,{item:!0,xs:12,sm:4,children:Object(V.jsx)(g.a,{name:"sesso",control:a,render:function(e){var t,a=e.field;return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(b.a,{className:"h5 font-medium",color:"textSecondary",children:P("Sesso")}),Object(V.jsxs)(k.a,{fullWidth:!0,className:"mt-8 mb-16",error:!!s.sesso,required:!0,children:[Object(V.jsxs)(D.a,Object(n.a)(Object(n.a)({},a),{},{id:"sesso",displayEmpty:!0,variant:"outlined",children:[Object(V.jsx)(E.a,{value:"",children:Object(V.jsx)("em",{children:A("Selezionare un valore")})}),Object(V.jsx)(E.a,{value:"M",children:P("Maschio")}),Object(V.jsx)(E.a,{value:"F",children:P("Femmina")}),Object(V.jsx)(E.a,{value:"N",children:P("Non Definito")})]})),Object(V.jsx)(W.a,{children:null===s||void 0===s||null===(t=s.sesso)||void 0===t?void 0:t.message})]})]})}})})]})]}),Object(V.jsx)(H.a,{variant:"fullWidth",sx:{mb:2}}),!d.hrcId&&Object(V.jsxs)(V.Fragment,{children:[Object(V.jsxs)("div",{className:"pb-8",children:[Object(V.jsx)("div",{className:"pb-8 flex items-center",children:Object(V.jsx)(b.a,{className:"h2 font-medium",color:"textSecondary",children:P("Azienda appaltatrice")})}),Object(V.jsx)(M.a,{container:!0,spacing:2,className:"px-12",children:Object(V.jsx)(M.a,{item:!0,xs:12,sm:6,children:Object(V.jsx)(g.a,{name:"hrcId",control:a,render:function(e){var t,a=e.field;return Object(V.jsxs)(V.Fragment,{children:[p&&Object(V.jsx)(c.a,{}),!p&&Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(b.a,{className:"h5 font-medium",color:"textSecondary",children:P("Ragione sociale")}),Object(V.jsxs)(k.a,{fullWidth:!0,className:"mt-8 mb-16",error:!!s.hrcId,children:[Object(V.jsxs)(D.a,Object(n.a)(Object(n.a)({},a),{},{id:"hrcId",displayEmpty:!0,variant:"outlined",children:[Object(V.jsx)(E.a,{value:"",children:Object(V.jsx)("em",{children:A("Selezionare un'azienda")})}),y&&y.map((function(e){return Object(V.jsx)(E.a,{value:e.id,children:e.ragioneSociale},e.id)}))]})),Object(V.jsx)(W.a,{children:null===s||void 0===s||null===(t=s.sesso)||void 0===t?void 0:t.message})]})]})]})}})})})]}),Object(V.jsx)(H.a,{variant:"fullWidth",sx:{mb:2}})]}),d.hrcId&&Object(V.jsx)(g.a,{name:"hrcId",control:a,render:function(e){var t=e.field;return Object(V.jsx)("input",Object(n.a)(Object(n.a)({},t),{},{type:"hidden",name:"hrcId",id:"hrcId"}))}}),Object(V.jsxs)("div",{className:"pb-8",children:[Object(V.jsx)("div",{className:"pb-8 flex items-center",children:Object(V.jsx)(b.a,{className:"h2 font-medium",color:"textSecondary",children:P("Residenza")})}),Object(V.jsxs)(M.a,{container:!0,spacing:2,className:"px-12",children:[Object(V.jsx)(M.a,{item:!0,xs:12,sm:6,children:Object(V.jsx)(g.a,{name:"indirizzo",control:a,render:function(e){var t,a=e.field;return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(b.a,{className:"h5 font-medium",color:"textSecondary",children:P("Indirizzo")}),Object(V.jsx)(z.a,Object(n.a)(Object(n.a)({},a),{},{className:"mt-8 mb-16",error:!!s.indirizzo,helperText:null===s||void 0===s||null===(t=s.indirizzo)||void 0===t?void 0:t.message,id:"indirizzo",variant:"outlined",fullWidth:!0,required:!0}))]})}})}),Object(V.jsx)(M.a,{item:!0,xs:12,sm:6,children:Object(V.jsx)(g.a,{name:"citta",control:a,render:function(e){var t,a=e.field;return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(b.a,{className:"h5 font-medium",color:"textSecondary",children:P("Citta")}),Object(V.jsx)(z.a,Object(n.a)(Object(n.a)({},a),{},{className:"mt-8 mb-16",error:!!s.citta,helperText:null===s||void 0===s||null===(t=s.citta)||void 0===t?void 0:t.message,id:"citta",variant:"outlined",fullWidth:!0,required:!0}))]})}})}),Object(V.jsx)(M.a,{item:!0,xs:12,sm:6,children:Object(V.jsx)(g.a,{name:"provincia",control:a,render:function(e){var t,a=e.field;return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(b.a,{className:"h5 font-medium",color:"textSecondary",children:P("Provincia")}),Object(V.jsx)(z.a,Object(n.a)(Object(n.a)({},a),{},{className:"mt-8 mb-16",error:!!s.provincia,helperText:null===s||void 0===s||null===(t=s.provincia)||void 0===t?void 0:t.message,id:"provincia",variant:"outlined",fullWidth:!0,required:!0}))]})}})}),Object(V.jsx)(M.a,{item:!0,xs:12,sm:6,children:Object(V.jsx)(g.a,{name:"cap",control:a,render:function(e){var t,a=e.field;return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(b.a,{className:"h5 font-medium",color:"textSecondary",children:P("CAP")}),Object(V.jsx)(z.a,Object(n.a)(Object(n.a)({},a),{},{className:"mt-8 mb-16",error:!!s.cap,helperText:null===s||void 0===s||null===(t=s.cap)||void 0===t?void 0:t.message,id:"cap",variant:"outlined",fullWidth:!0,required:!0}))]})}})})]})]}),Object(V.jsx)(H.a,{variant:"fullWidth",sx:{mb:2}}),Object(V.jsxs)("div",{className:"pb-8",children:[Object(V.jsx)("div",{className:"pb-8 flex items-center",children:Object(V.jsx)(b.a,{className:"h2 font-medium",color:"textSecondary",children:P("Contatti")})}),Object(V.jsxs)(M.a,{container:!0,spacing:2,className:"px-12",children:[Object(V.jsx)(M.a,{item:!0,xs:12,sm:4,children:Object(V.jsx)(g.a,{name:"telefono",control:a,render:function(e){var t,a=e.field;return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(b.a,{className:"h5 font-medium",color:"textSecondary",children:P("Telefono")}),Object(V.jsx)(z.a,Object(n.a)(Object(n.a)({},a),{},{className:"mt-8 mb-16",error:!!s.telefono,helperText:null===s||void 0===s||null===(t=s.telefono)||void 0===t?void 0:t.message,id:"telefono",variant:"outlined",fullWidth:!0}))]})}})}),Object(V.jsx)(M.a,{item:!0,xs:12,sm:4,children:Object(V.jsx)(g.a,{name:"cellulare",control:a,render:function(e){var t,a=e.field;return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(b.a,{className:"h5 font-medium",color:"textSecondary",children:P("Cellulare")}),Object(V.jsx)(z.a,Object(n.a)(Object(n.a)({},a),{},{className:"mt-8 mb-16 mx-4",error:!!s.cellulare,helperText:null===s||void 0===s||null===(t=s.cellulare)||void 0===t?void 0:t.message,id:"cellulare",variant:"outlined",fullWidth:!0,required:!0}))]})}})}),Object(V.jsx)(M.a,{item:!0,xs:12,sm:4,children:Object(V.jsx)(g.a,{name:"email",control:a,render:function(e){var t,a=e.field;return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(b.a,{className:"h5 font-medium",color:"textSecondary",children:P("Email")}),Object(V.jsx)(z.a,Object(n.a)(Object(n.a)({},a),{},{className:"mt-8 mb-16 mx-4",error:!!s.email,helperText:null===s||void 0===s||null===(t=s.email)||void 0===t?void 0:t.message,id:"email",variant:"outlined",fullWidth:!0}))]})}})})]})]}),Object(V.jsx)(H.a,{variant:"fullWidth",sx:{mb:2}}),Object(V.jsxs)("div",{className:"pb-8",children:[Object(V.jsx)("div",{className:"pb-8 flex items-center",children:Object(V.jsx)(b.a,{className:"h2 font-medium",color:"textSecondary",children:P("Altro")})}),Object(V.jsxs)(M.a,{container:!0,spacing:2,className:"px-12",children:[Object(V.jsx)(M.a,{item:!0,xs:12,sm:6,children:Object(V.jsx)(g.a,{name:"conoscenzaItaliano",control:a,render:function(e){var t,a=e.field;return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(b.a,{className:"h5 font-medium",color:"textSecondary",children:P("Conoscenza italiano")}),Object(V.jsxs)(k.a,{fullWidth:!0,className:"mt-8 mb-16",error:!!s.conoscenzaItaliano,children:[Object(V.jsxs)(D.a,Object(n.a)(Object(n.a)({},a),{},{id:"conoscenzaItaliano",displayEmpty:!0,children:[Object(V.jsx)(E.a,{value:"",children:Object(V.jsx)("em",{children:A("Selezionare un valore")})}),Object(V.jsx)(E.a,{value:!0,children:P("common:Si")}),Object(V.jsx)(E.a,{value:!1,children:P("common:No")})]})),Object(V.jsx)(W.a,{children:null===s||void 0===s||null===(t=s.conoscenzaItaliano)||void 0===t?void 0:t.message})]})]})}})}),Object(V.jsx)(M.a,{item:!0,xs:12,sm:6,children:Object(V.jsx)(g.a,{name:"sedeDiRiferimento",control:a,render:function(e){var t,a=e.field;return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(b.a,{className:"h5 font-medium",color:"textSecondary",children:P("Sede di riferimento")}),Object(V.jsx)(z.a,Object(n.a)(Object(n.a)({},a),{},{className:"mt-8 mb-16",error:!!s.sedeDiRiferimento,helperText:null===s||void 0===s||null===(t=s.sedeDiRiferimento)||void 0===t?void 0:t.message,id:"sedeDiRiferimento",variant:"outlined",fullWidth:!0}))]})}})})]})]}),Object(V.jsx)(H.a,{variant:"fullWidth",sx:{mb:2}})]})},q=a(39),B=a(546),U=a(425);var _=function(e){var t=Object(x.b)(),a=Object(x.c)((function(e){var t=e.dipendenteManager;return null===t||void 0===t?void 0:t.dipendente})),n=Object(f.i)(),i=Object(m.a)("Dipendente").t,o=Object(m.a)("common").t,l="valutazioneTab",d=Object(x.c)(B.c),j=(Object(x.c)(q.e),Object(O.useState)(!0)),u=Object(r.a)(j,2),v=u[0],g=u[1];Object(O.useEffect)((function(){t(Object(B.b)(n)).then((function(){return g(!1)}))}),[t,n]);var N=Object(x.c)((function(e){var t=e.alma;return t.tables&&t.tables.configs.find((function(e){return e.id===l}))}));Object(O.useEffect)((function(){N||t(Object(U.h)({id:l,searchForm:{text:""}}))}),[t,N,l]);var S=function(e,t,a,n,r){return{idParam:e,numeric:t,disablePadding:a,align:n,label:r}};return S("codiceFiscale",!1,!1,"left",i("Codice fiscale")),S("cognome",!1,!1,"left",i("Cognome")),S("nome",!1,!1,"left",i("Nome")),S("indirizzo",!1,!1,"left",i("Indirizzo")),S("citta",!1,!1,"left",i("Citt\xe0")),S("provincia",!1,!1,"left",i("Provincia")),S("cap",!1,!1,"left",i("CAP")),v?Object(V.jsx)(c.a,{}):d.length>0?Object(V.jsx)(V.Fragment,{children:Object(V.jsxs)(h.a.div,{initial:{opacity:0},animate:{opacity:1,transition:{delay:.1}},className:"flex flex-col flex-1 items-center justify-center h-full",children:[Object(V.jsx)(b.a,{color:"textSecondary",variant:"h5",children:o("Valutazione in corso")}),Object(V.jsx)(s.a,{className:"mt-24",component:p.a,variant:"outlined",to:"/valutazione/".concat(d[0].id),color:"inherit",children:i("Vai alla valutazione")})]})}):Object(V.jsx)(V.Fragment,{children:Object(V.jsxs)(h.a.div,{initial:{opacity:0},animate:{opacity:1,transition:{delay:.1}},className:"flex flex-col flex-1 items-center justify-center h-full",children:[Object(V.jsx)(b.a,{color:"textSecondary",variant:"h5",children:o("Non \xe8 presente alcuna valutazione")}),Object(V.jsx)(s.a,{className:"mt-24",component:p.a,variant:"outlined",to:"/valutazione/new/".concat(a.id),color:"inherit",children:i("Nuova valutazione")})]})})},Z=Object(y.a)(o.a)((function(e){var t=e.theme;return{"& .FusePageCarded-header":Object(i.a)({minHeight:72,height:72,alignItems:"center"},t.breakpoints.up("sm"),{minHeight:136,height:136})}}));t.default=Object(u.a)("dipendente",F.a)((function(e){var t=Object(m.a)("Dipendente").t,a=Object(m.a)("common").t,i=Object(x.b)(),o=Object(x.c)((function(e){var t=e.dipendenteManager;return null===t||void 0===t?void 0:t.dipendente})),u=Object(f.i)(),y=Object(O.useState)(0),F=Object(r.a)(y,2),z=F[0],w=F[1],I=Object(O.useState)(!1),T=Object(r.a)(I,2),E=T[0],k=T[1],W=S.f().shape({codiceFiscale:S.h().required().matches(/^(?:[A-Z][AEIOU][AEIOUX]|[B-DF-HJ-NP-TV-Z]{2}[A-Z]){2}(?:[\dLMNP-V]{2}(?:[A-EHLMPR-T](?:[04LQ][1-9MNP-V]|[15MR][\dLMNP-V]|[26NS][0-8LMNP-U])|[DHPS][37PT][0L]|[ACELMRT][37PT][01LM]|[AC-EHLMPR-T][26NS][9V])|(?:[02468LNQSU][048LQU]|[13579MPRTV][26NS])B[26NS][9V])(?:[A-MZ][1-9MNP-V][\dLMNP-V]{2}|[A-M][0L](?:[1-9MNP-V][\dLMNP-V]|[0L][1-9MNP-V]))[A-Z]$/i),sesso:S.h(),nome:S.h().required(),cognome:S.h().required(),indirizzo:S.h(),citta:S.h(),provincia:S.h(),cap:S.h().matches(/^\d{5}$/,{excludeEmptyString:!0,message:a("Inserire un zip/cap corretto")}),cellulare:S.h().required(),email:S.h().email(),conoscenzaItaliano:S.h().required(),hrcId:S.h().required()}),D=Object(g.g)({mode:"onChange",defaultValues:{},resolver:Object(N.a)(W)}),L=D.reset,M=D.watch,H=(D.control,D.onChange,D.formState,D.trigger),R=M();return Object(l.b)((function(){"new"===u.id?i(Object(C.d)()):i(Object(C.c)(u)).then((function(e){e.payload||k(!0)}))}),[i,u]),Object(O.useEffect)((function(){o&&(L(o),H())}),[o,L,H]),Object(O.useEffect)((function(){return function(){i(Object(C.e)()),k(!1)}}),[i]),E?Object(V.jsxs)(h.a.div,{initial:{opacity:0},animate:{opacity:1,transition:{delay:.1}},className:"flex flex-col flex-1 items-center justify-center h-full",children:[Object(V.jsx)(b.a,{color:"textSecondary",variant:"h5",children:a("L'elemento richiesto non esiste")}),Object(V.jsx)(s.a,{className:"mt-24",component:p.a,variant:"outlined",to:"/dipendente",color:"inherit",children:a("Torna indietro")})]}):v.a.isEmpty(R)||o&&u.id!==o.id&&"new"!==u.id?Object(V.jsx)(c.a,{}):Object(V.jsx)(g.b,Object(n.a)(Object(n.a)({},D),{},{children:Object(V.jsx)(Z,{header:Object(V.jsx)(P.a,{title:"nome",updateElement:C.f,deleteElement:C.b,urlIndex:"/dipendente",urlIndexLabel:t("Title")}),contentToolbar:Object(V.jsxs)(j.a,{value:z,onChange:function(e,t){return w(t)},indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:"auto",classes:{root:"w-full h-64"},children:[Object(V.jsx)(d.a,{className:"h-64",label:t("Informazioni")}),o&&o.id&&Object(V.jsx)(d.a,{className:"h-64",label:t("Valutazioni")})]}),content:Object(V.jsxs)("div",{className:"p-16 sm:p-24 max-w-2xl w-full",children:[Object(V.jsx)("div",{className:0!==z?"hidden":"",children:Object(V.jsx)(A,{})}),Object(V.jsx)("div",{className:1!==z?"hidden":"",children:Object(V.jsx)(_,{})})]}),innerScroll:!0})}))}))}}]);