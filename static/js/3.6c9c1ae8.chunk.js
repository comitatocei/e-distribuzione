(this["webpackJsonpsas-fe"]=this["webpackJsonpsas-fe"]||[]).push([[3],{1077:function(e,t,a){"use strict";var n=a(1171),r=a(1172),i=a(1173),c=a(1042),o=a(1174),l=a(0);t.a=function(e){var t=e.title,a=e.content,d=e.cancel,s=e.confirm,u=e.cancelDialog,b=e.confirmDialog;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(n.a,{id:"alert-dialog-title",children:t}),Object(l.jsx)(r.a,{children:Object(l.jsx)(i.a,{id:"alert-dialog-description",children:a})}),Object(l.jsxs)(o.a,{children:[Object(l.jsx)(c.a,{onClick:function(){return u()},color:"primary",children:d}),Object(l.jsx)(c.a,{onClick:function(){return b()},color:"primary",autoFocus:!0,children:s})]})]})}},1078:function(e,t,a){"use strict";a.d(t,"a",(function(){return E}));var n=a(94),r=a(4),i=a(54),c=a(14),o=a(7),l=a(1),d=a(994),s=a(48),u=a(1060),b=a(40),j=a(17),p=a(0);var h=function(e){var t=Object(s.a)(),a=Object(j.c)(Object(b.c)(t.palette.primary.main));return Object(p.jsx)("div",{className:"FusePageCarded-header",children:e.header&&Object(p.jsx)(u.a,{theme:a,children:e.header})})},g=a(9),m=a(16),f=a(111),O=a(1070),x=a(1072);var v=function(e){var t=Object(s.a)(),a=Object(j.c)(Object(b.c)(t.palette.primary.main));return Object(p.jsxs)(p.Fragment,{children:[e.header&&Object(p.jsx)(u.a,{theme:a,children:Object(p.jsx)("div",{className:Object(o.a)("FusePageCarded-sidebarHeader",e.variant),children:e.header})}),e.content&&Object(p.jsx)(i.a,{className:"FusePageCarded-sidebarContent",enable:e.innerScroll,children:e.content})]})};function C(e,t){var a=Object(l.useState)(!1),n=Object(m.a)(a,2),r=n[0],i=n[1];Object(l.useImperativeHandle)(t,(function(){return{toggleSidebar:c}}));var c=function(){i(!r)};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(O.a,{lgUp:"permanent"===e.variant,children:Object(p.jsx)(x.a,{variant:"temporary",anchor:e.position,open:r,onOpen:function(e){},onClose:function(e){return c()},disableSwipeToOpen:!0,classes:{root:Object(o.a)("FusePageCarded-sidebarWrapper",e.variant),paper:Object(o.a)("FusePageCarded-sidebar",e.variant,"left"===e.position?"FusePageCarded-leftSidebar":"FusePageCarded-rightSidebar")},ModalProps:{keepMounted:!0},container:e.rootRef.current,BackdropProps:{classes:{root:"FusePageCarded-backdrop"}},style:{position:"absolute"},children:Object(p.jsx)(v,Object(g.a)({},e))})}),"permanent"===e.variant&&Object(p.jsx)(O.a,{lgDown:!0,children:Object(p.jsx)(f.a,{variant:"permanent",className:Object(o.a)("FusePageCarded-sidebarWrapper",e.variant),open:r,classes:{paper:Object(o.a)("FusePageCarded-sidebar",e.variant,"left"===e.position?"FusePageCarded-leftSidebar":"FusePageCarded-rightSidebar")},children:Object(p.jsx)(v,Object(g.a)({},e))})})]})}var P,y=Object(l.forwardRef)(C),S=Object(c.a)("div")((function(e){var t=e.theme;return{display:"flex",flexDirection:"row",minWidth:0,minHeight:"100%",position:"relative",flex:"1 1 auto",width:"100%",height:"auto",backgroundColor:t.palette.background.default,"& .FusePageCarded-innerScroll":{height:"100%"},"& .FusePageCarded-topBg":{position:"absolute",left:0,right:0,top:0,height:k,background:"linear-gradient(to right, ".concat(t.palette.primary.dark," 0%, ").concat(t.palette.primary.main," 100%)"),backgroundSize:"cover",pointerEvents:"none"},"& .FusePageCarded-contentWrapper":Object(r.a)({display:"flex",flexDirection:"column",padding:"0 3.2rem",flex:"1 1 100%",zIndex:2,maxWidth:"100%",minWidth:0,minHeight:0},t.breakpoints.down("sm"),{padding:"0 1.6rem"}),"& .FusePageCarded-header":{height:N,minHeight:N,maxHeight:N,display:"flex",color:t.palette.primary.contrastText},"& .FusePageCarded-headerSidebarToggleButton":{color:t.palette.primary.contrastText},"& .FusePageCarded-contentCard":{display:"flex",flex:"1 1 100%",flexDirection:"column",backgroundColor:t.palette.background.paper,boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",minHeight:0,borderRadius:"20px 20px 0 0"},"& .FusePageCarded-toolbar":{height:D,minHeight:D,display:"flex",alignItems:"center",borderBottom:"1px solid ".concat(t.palette.divider)},"& .FusePageCarded-content":{flex:"1 1 auto",height:"100%",overflow:"auto",WebkitOverflowScrolling:"touch"},"& .FusePageCarded-sidebarWrapper":{position:"absolute",backgroundColor:"transparent",zIndex:5,overflow:"hidden","&.permanent":Object(r.a)({},t.breakpoints.up("lg"),{zIndex:1,position:"relative"})},"& .FusePageCarded-sidebar":{position:"absolute","&.permanent":Object(r.a)({},t.breakpoints.up("lg"),{backgroundColor:"transparent",position:"relative",border:"none",overflow:"hidden"}),width:w,height:"100%"},"& .FusePageCarded-leftSidebar":{},"& .FusePageCarded-rightSidebar":{},"& .FusePageCarded-sidebarHeader":{height:k,minHeight:k,color:t.palette.primary.contrastText,backgroundColor:t.palette.primary.dark,"&.permanent":Object(r.a)({},t.breakpoints.up("lg"),{backgroundColor:"transparent"})},"& .FusePageCarded-sidebarContent":Object(r.a)({display:"flex",flex:"1 1 auto",flexDirection:"column",backgroundColor:t.palette.background.default,color:t.palette.text.primary},t.breakpoints.up("lg"),{overflow:"auto",WebkitOverflowScrolling:"touch"}),"& .FusePageCarded-backdrop":{position:"absolute"}}})),w=240,k=200,D=64,N=k-D,F=Object(l.forwardRef)((function(e,t){var a=Object(l.useRef)(null),n=Object(l.useRef)(null),r=Object(l.useRef)(null),c=e.rightSidebarHeader||e.rightSidebarContent,s=e.leftSidebarHeader||e.leftSidebarContent;return Object(l.useImperativeHandle)(t,(function(){return{rootRef:r,toggleLeftSidebar:function(){a.current.toggleSidebar()},toggleRightSidebar:function(){n.current.toggleSidebar()}}})),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(d.a,{styles:function(t){return{"#fuse-main":{height:e.innerScroll&&"100vh"}}}}),Object(p.jsxs)(S,{className:Object(o.a)("FusePageCarded-root",e.innerScroll&&"FusePageCarded-innerScroll",e.className),ref:r,children:[Object(p.jsx)("div",{className:"FusePageCarded-topBg"}),Object(p.jsxs)("div",{className:"flex container w-full",children:[s&&Object(p.jsx)(y,{position:"left",header:e.leftSidebarHeader,content:e.leftSidebarContent,variant:e.leftSidebarVariant||"permanent",innerScroll:e.innerScroll,ref:a,rootRef:r}),Object(p.jsxs)("div",{className:Object(o.a)("FusePageCarded-contentWrapper",s&&(void 0===e.leftSidebarVariant||"permanent"===e.leftSidebarVariant)&&"lg:ltr:pl-0 lg:rtl:pr-0",c&&(void 0===e.rightSidebarVariant||"permanent"===e.rightSidebarVariant)&&"lg:pr-0"),children:[Object(p.jsx)(h,{header:e.header}),Object(p.jsxs)("div",{className:Object(o.a)("FusePageCarded-contentCard",e.innerScroll&&"inner-scroll"),children:[e.contentToolbar&&Object(p.jsx)("div",{className:"FusePageCarded-toolbar",children:e.contentToolbar}),e.content&&Object(p.jsx)(i.a,{className:"FusePageCarded-content",enable:e.innerScroll,scrollToTopOnRouteChange:e.innerScroll,children:e.content})]})]}),c&&Object(p.jsx)(y,{position:"right",header:e.rightSidebarHeader,content:e.rightSidebarContent,variant:e.rightSidebarVariant||"permanent",innerScroll:e.innerScroll,ref:n,rootRef:r})]})]})]})}));F.defaultProps={};var E=Object(l.memo)(Object(c.a)(F)(P||(P=Object(n.a)([""]))))},1127:function(e,t,a){"use strict";var n=a(16),r=a(4),i=a(1),c=a(1078),o=a(250),l=a(14),d=a(1069),s=a(1195),u=a(38),b=a(1196),j=a(1177),p=a(1208),h=a(1176),g=a(1160),m=a(17),f=a(57),O=a(1047),x=a(1027),v=a(1028),C=a(1175),P=a(1210),y=a(1032),S=a(997),w=a(1013),k=a(436),D=a(1040),N=a(999),F=a(1041),E=a(1036),T=a(1077),R=a(0),z=function(e){var t=e.onSelectAllClick,a=e.order,r=e.orderBy,c=e.numSelected,o=e.setSelected,l=e.rowCount,d=e.onRequestSort,s=e.headCells,u=e.editColumn,b=e.selectedItemIds,p=e.deleteItemsAction,f=e.openDialog,z=e.closeDialog,B=e.showMessage,I=Object(m.b)(),H=Object(w.a)("Table").t,A=Object(i.useState)(null),M=Object(n.a)(A,2),W=M[0],V=M[1];return Object(R.jsx)(C.a,{children:Object(R.jsxs)(h.a,{className:"h-48 sm:h-64",children:[u.deleteEnabled&&Object(R.jsxs)(j.a,{padding:"none",className:"w-40 md:w-64 text-center z-99",children:[Object(R.jsx)(g.a,{color:"primary",indeterminate:c>0&&c<l,checked:l>0&&c===l,onChange:t,inputProps:{"aria-label":"select all"}}),c>0&&Object(R.jsxs)(O.a,{className:"flex items-center justify-center absolute w-64 top-0 ltr:left-0 rtl:right-0 mx-56 h-64 z-10 border-b-1",sx:{background:function(e){return e.palette.background.paper}},children:[Object(R.jsx)(v.a,{"aria-owns":W?"selectedItemsMenu":null,"aria-haspopup":"true",onClick:function(e){V(e.currentTarget)},size:"large",children:Object(R.jsx)(x.a,{children:"more_horiz"})}),Object(R.jsx)(k.a,{id:"selectedItemsMenu",anchorEl:W,open:Boolean(W),onClose:function(){V(null)},children:Object(R.jsx)(N.a,{children:Object(R.jsxs)(D.a,{onClick:function(e){e.stopPropagation(),I(f({children:Object(R.jsx)(T.a,{title:H("Eliminazione"),content:H("EliminazioneDomandaMultipla"),cancel:H("Annulla"),confirm:H("Conferma"),cancelDialog:function(){return I(z())},confirmDialog:function(){I(p(b)).then((function(e){e.error?I(B({message:e.error.message,autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"center"},variant:"error"})):(I(B({message:H("Cancellazione effettuata correttamente"),autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"center"},variant:"success"})),I(z()),o([]))}))}})}))},children:[Object(R.jsx)(F.a,{className:"min-w-40",children:Object(R.jsx)(x.a,{children:"delete"})}),Object(R.jsx)(E.a,{primary:H("common:Delete")})]})})})]})]}),s.map((function(e){return Object(R.jsx)(j.a,{className:"p-4 md:p-16",align:e.numeric?"right":"left",padding:e.disablePadding?"none":"normal",sortDirection:r===e.id&&a,children:Object(R.jsx)(y.a,{title:"Sort",placement:"right"===e.align?"bottom-end":"bottom-start",enterDelay:300,children:Object(R.jsxs)(P.a,{active:r===e.id,direction:r===e.id?a:"asc",onClick:(t=e.id,function(e){d(e,t)}),children:[e.label,r===e.id?Object(R.jsx)(O.a,{component:"span",sx:S.a,children:"desc"===a?"sorted descending":"sorted ascending"}):null]})})},e.id);var t})),(u.updateEnabled||u.deleteEnabled)&&Object(R.jsx)(j.a,{className:"p-4 md:p-16",align:"center",children:"#"})]})})},B=a(1205),I=a(1157),H=Object(l.a)("div")((function(e){return{width:"100%",paddingTop:e.theme.spacing(2)}})),A=function(e){var t=e.data,a=e.customNoData,n=e.colSpan,r=Object(w.a)("Table").t;return Object(R.jsx)(h.a,{children:Object(R.jsx)(j.a,{colSpan:n,style:{borderBottom:"0"},children:Object(R.jsx)(B.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justifyContent:"center",children:Object(R.jsx)(B.a,{item:!0,xs:4,children:0===t.length&&Object(R.jsx)(H,{children:Object(R.jsx)(I.Alert,{severity:"info",children:a||r("NoData")})})})})})},"TableRowEmptyRows")},M=function(e){var t=e.row,a=e.edit,n=e.history,r=e.openDialog,i=e.closeDialog,c=e.showMessage,o=e.deleteItemsAction,l=e.rowTitleProperty,d=Object(w.a)("Table").t,s=Object(m.b)();return a.updateEnabled||a.deleteEnabled?Object(R.jsx)(j.a,{className:"p-4 md:p-16",align:"center",children:Object(R.jsxs)(O.a,{sx:{display:"inline-flex"},children:[a.updateEnabled&&Object(R.jsx)(y.a,{title:d("Edit"),children:Object(R.jsx)("span",{children:Object(R.jsx)(v.a,{onClick:function(){return n.push("".concat(a.editLink,"/").concat(t.id))},size:"medium",children:Object(R.jsx)(x.a,{children:"edit"})})})}),a.deleteEnabled&&Object(R.jsx)(y.a,{title:d("Delete"),children:Object(R.jsx)("span",{children:Object(R.jsx)(v.a,{onClick:function(e){e.stopPropagation(),s(r({children:Object(R.jsx)(T.a,{title:d("Eliminazione"),content:d("EliminazioneDomanda",{recordName:t[l]}),cancel:d("Annulla"),confirm:d("Conferma"),cancelDialog:function(){return s(i())},confirmDialog:function(){s(o([t.id])).then((function(e){e.error?s(c({message:e.error.message,autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"center"},variant:"error"})):(s(c({message:d("Cancellazione effettuata correttamente"),autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"center"},variant:"success"})),s(i()))}))}})}))},size:"medium",children:Object(R.jsx)(x.a,{children:"delete"})})})})]})}):null};M.defaultProps={};var W=Object(f.j)(M),V={NoData:"No data",RetrievingDataError:"Retrieving data failed",selected:"Selected",Annulla:"Cancel",Salva:"Save",Elimina:"Delete",Nuovo:"New",Risultati:"Results",Conferma:"Confirm",Eliminazione:"Delete",EliminazioneDomanda:"Are you sure you want to delete '{{recordName}}'?",EliminazioneDomandaMultipla:"Are you sure you want to delete all the selected elements?"},L={NoData:"Nessun dato",RetrievingDataError:"Errore durante il recupero dei dati",selected:"Selezionati",Annulla:"Annulla",Salva:"Salva",Elimina:"Elimina",Nuovo:"Nuovo",Risultati:"Risultati",Conferma:"Conferma",Eliminazione:"Eliminazione",EliminazioneDomanda:"Confermi di voler eliminare il record '{{recordName}}'?",EliminazioneDomandaMultipla:"Confermi di voler eliminare tutti i record selezionati?"},_=a(9),q={id:"",searchForm:{text:""},rowsPerPage:25,order:"asc",orderBy:"",selected:[],page:0},J={updateTableConfig:function(e,t){var a=e.find((function(e){return e.id===t.id}));return a?(e=e.filter((function(e,t,n){return e.id!==a.id}))).push(Object(_.a)(Object(_.a)({},a),t)):e.push(Object(_.a)(Object(_.a)({},q),{},{id:t.id,orderBy:t.orderBy,order:t.order})),e},updateRowsPerPage:function(e,t){var a=e.find((function(e){return e.id===t.id}));return(e=e.filter((function(e,t,n){return e.id!==a.id}))).push(Object(_.a)(Object(_.a)({},a),{},{rowsPerPage:t.rowsPerPage})),e},updateOrder:function(e,t){var a=e.find((function(e){return e.id===t.id}));return(e=e.filter((function(e,t,n){return e.id!==a.id}))).push(Object(_.a)(Object(_.a)({},a),{},{order:t.order})),e},updateOrderBy:function(e,t){var a=e.find((function(e){return e.id===t.id}));return(e=e.filter((function(e,t,n){return e.id!==a.id}))).push(Object(_.a)(Object(_.a)({},a),{},{orderBy:t.orderBy})),e},updateSelected:function(e,t){var a=e.find((function(e){return e.id===t.id}));return(e=e.filter((function(e,t,n){return e.id!==a.id}))).push(Object(_.a)(Object(_.a)({},a),{},{selected:t.selected})),e},updatePage:function(e,t){var a=e.find((function(e){return e.id===t.id}));return(e=e.filter((function(e,t,n){return e.id!==a.id}))).push(Object(_.a)(Object(_.a)({},a),{},{page:t.page})),e},updateSearchText:function(e,t){var a=e.find((function(e){return e.id===t.id})),n=Object(_.a)(Object(_.a)({},a),{},{searchForm:Object(_.a)(Object(_.a)({},a.searchForm),{},{text:t.searchText}),page:0});return(e=e.filter((function(e,t,n){return e.id!==a.id}))).push(n),e}};u.a.addResourceBundle("en","Table",V),u.a.addResourceBundle("it","Table",L);Object(l.a)("div")((function(e){var t=e.theme;return{paddingTop:t.spacing(2),paddingBottom:t.spacing(2)}}));var U=function(e,t,a){return t[a]<e[a]?-1:t[a]>e[a]?1:0},G=function(e,t){return"desc"===e?function(e,a){return U(e,a,t)}:function(e,a){return-U(e,a,t)}},K=function(e,t){var a=e.map((function(e,t){return[e,t]}));return a.sort((function(e,a){var n=t(e[0],a[0]);return 0!==n?n:e[1]-a[1]})),a.map((function(e){return e[0]}))},Q=function(e){var t=e.data,a=e.customNoData,r=e.headCells,i=e.editColumn,c=e.deleteItemsAction,o=e.openDialog,l=e.closeDialog,u=e.showMessage,f=e.rowTitleProperty,O=e.history,x=e.tableConfig,v=(Object(m.b)(),Object(d.a)(["tables"])),C=Object(n.a)(v,2),P=C[0],y=C[1],S=x.rowsPerPage,w=x.order,k=x.orderBy,D=x.selected,N=x.page,F=N>0?Math.max(0,(1+N)*S-t.length):0;return Object(R.jsxs)("div",{className:"w-full flex flex-col",children:[Object(R.jsxs)(s.a,{stickyHeader:!0,className:"min-w-xl","aria-labelledby":"tableTitle",children:[Object(R.jsx)(z,{selectedItemIds:D,numSelected:D.length,setSelected:function(e){var t=P.tables;J.updateSelected(t,{id:x.id,selected:e})},order:w,orderBy:k,onSelectAllClick:function(e){var a=P.tables;if(e.target.checked){var n=t.map((function(e){return e.id}));J.updateSelected(a,{id:x.id,selected:n})}else J.updateSelected(a,{id:x.id,selected:[]})},onRequestSort:function(e,t){var a=P.tables,n=k===t&&"asc"===w,r=J.updateOrder(a,{id:x.id,order:n?"desc":"asc"});r=J.updateOrderBy(r,{id:x.id,orderBy:t}),y("tables",r,{path:"/"})},rowCount:t.length,headCells:r,editColumn:i,deleteItemsAction:c,openDialog:o,closeDialog:l,showMessage:u}),Object(R.jsxs)(b.a,{children:[t.length>0&&K(t,G(w,k)).slice(N*S,N*S+S).map((function(e){var t,a=(t=e.id,-1!==D.indexOf(t)),n="enhanced-table-checkbox-".concat(e.id);return Object(R.jsxs)(h.a,{hover:!0,className:"h-72 cursor-pointer",role:"checkbox","aria-checked":a,tabIndex:-1,selected:a,onClick:function(t){O.push("".concat(i.editLink,"/").concat(e.id))},children:[i.deleteEnabled&&Object(R.jsx)(j.a,{className:"w-40 md:w-64 text-center",padding:"none",children:Object(R.jsx)(g.a,{color:"primary",checked:a,inputProps:{"aria-labelledby":n},onClick:function(e){return e.stopPropagation()},onChange:function(t){return function(e,t){var a=D.indexOf(t),n=[],r=P.tables;-1===a?n=n.concat(D,t):0===a?n=n.concat(D.slice(1)):a===D.length-1?n=n.concat(D.slice(0,-1)):a>0&&(n=n.concat(D.slice(0,a),D.slice(a+1))),J.updateSelected(r,{id:x.id,selected:n})}(0,e.id)}})},"".concat(e.id,"0")),r.filter((function(e){return!e.invisible||!1===e.invisible})).map((function(t,a){return Object(R.jsx)(j.a,{align:t.align,scope:"row",component:"th",children:Object(R.jsx)("div",{dangerouslySetInnerHTML:{__html:e[t.id]}})},"".concat(e.id).concat(a))})),Object(R.jsx)(W,{rowTitleProperty:f,row:e,edit:i,scope:"row",component:"th",deleteItemsAction:c,openDialog:o,closeDialog:l,showMessage:u})]},e.id)})),F>0&&Object(R.jsx)(h.a,{style:{height:72*F},children:Object(R.jsx)(j.a,{colSpan:r.length+(i.updateEnabled||i.deleteEnabled?1:0)+1})},"TableRowEmptyRows"),0===t.length&&Object(R.jsx)(A,{data:t,customNoData:a,colSpan:r.length+(i.updateEnabled||i.deleteEnabled?1:0)+1})]})]}),t.length>0&&Object(R.jsx)(p.a,{rowsPerPageOptions:[5,10,25],component:"div",count:t.length,rowsPerPage:S,page:N,onPageChange:function(e,t){var a=P.tables;J.updatePage(a,{id:x.id,page:t})},onRowsPerPageChange:function(e){var t=P.tables;J.updateRowsPerPage(t,{id:x.id,rowsPerPage:parseInt(e.target.value,10)}),J.updatePage(t,{id:x.id,page:0})}})]})};Q.defaultProps={data:[],rowTemplateComponent:null,customNoData:null,rootClassName:"",refScrollablePanel:null,checkInViewportEnabled:!0,headCells:[],title:null,edit:{updateEnabled:!1,updateLink:"#",deleteEnabled:!1},rowTitleProperty:"title",tableConfig:null};var X=Object(f.j)(Q),Y=a(1042),Z=a(611),$=a(209),ee=a(185),te=a(1060),ae=a(1067),ne=function(e){var t=e.id,a=e.title,r=e.icon,i=e.createButton,c=e.history,o=e.tableConfig,l=e.theme,s=o.searchForm,u=(Object(m.b)(),Object(w.a)("Table").t,Object(d.a)(["tables"])),b=Object(n.a)(u,2),j=b[0],p=b[1];return Object(R.jsxs)("div",{className:"flex flex-1 w-full items-center justify-between",children:[Object(R.jsxs)("div",{className:"flex items-center",children:[Object(R.jsx)(x.a,{component:ae.a.span,initial:{scale:0},animate:{scale:1,transition:{delay:.2}},className:"text-24 md:text-32",children:r}),Object(R.jsx)($.a,{component:ae.a.span,initial:{x:-20},animate:{x:0,transition:{delay:.2}},delay:300,className:"hidden sm:flex text-16 md:text-24 mx-12 font-semibold",children:a})]}),Object(R.jsx)("div",{className:"flex flex-1 items-center justify-center px-12",children:Object(R.jsx)(te.a,{theme:l,children:Object(R.jsxs)(ee.a,{component:ae.a.div,initial:{y:-20,opacity:0},animate:{y:0,opacity:1,transition:{delay:.2}},className:"flex items-center w-full max-w-512 px-8 py-4 rounded-16 shadow",children:[Object(R.jsx)(x.a,{color:"action",children:"search"}),Object(R.jsx)(Z.a,{placeholder:"Search",className:"flex flex-1 mx-8",disableUnderline:!0,fullWidth:!0,value:s.text,inputProps:{"aria-label":"Search"},onChange:function(e){var a=j.tables,n=J.updateSearchText(a,{searchText:e.target.value,id:t});p("tables",n,{path:"/"})}})]})})}),i.enabled&&Object(R.jsx)(ae.a.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0,transition:{delay:.2}},children:Object(R.jsxs)(Y.a,{className:"whitespace-nowrap",variant:"contained",color:"secondary",startIcon:Object(R.jsx)(x.a,{children:i.icon}),onClick:function(){return c.push("".concat(i.link))},children:[Object(R.jsx)("span",{className:"hidden sm:flex",children:i.label}),Object(R.jsx)("span",{className:"flex sm:hidden",children:i.label})]})})]})};ne.defaultProps={numSelected:0,searchText:""};var re=Object(f.j)(ne),ie=Object(l.a)(c.a)((function(e){var t=e.theme;return{"& .FusePageCarded-header":Object(r.a)({minHeight:72,height:72,alignItems:"center"},t.breakpoints.up("sm"),{minHeight:136,height:136}),"& .FusePageCarded-content":{display:"flex"},"& .FusePageCarded-contentCard":{overflow:"hidden"}}}));t.a=function(e){var t=e.id,a=e.theme,r=e.title,c=e.icon,l=e.data,s=e.headCells,u=e.editColumn,b=e.createButton,j=e.deleteItemsAction,p=e.openDialog,h=e.closeDialog,g=e.showMessage,m=e.rowTitleProperty,f=e.loading,O=e.orderByDefault,x=e.orderDirDefault,v=Object(d.a)(["tables"]),C=Object(n.a)(v,2),P=C[0],y=C[1],S=Object(i.useState)(null),w=Object(n.a)(S,2),k=w[0],D=w[1];return Object(i.useEffect)((function(){var e=P.tables,a=e.find((function(e){return e.id===t}));if(!a){var n=J.updateTableConfig(e,{id:t,searchForm:{text:""},orderBy:O,order:x});y("tables",n,{path:"/"})}D(a)}),[y,P,k,t,O,x]),k&&!f?Object(R.jsx)(ie,{header:Object(R.jsx)(re,{id:t,title:r,icon:c,createButton:b,theme:a,tableConfig:k}),content:Object(R.jsx)(X,{data:l,headCells:s,editColumn:u,deleteItemsAction:j,openDialog:p,closeDialog:h,showMessage:g,rowTitleProperty:m,tableConfig:k})}):f?Object(R.jsx)(o.a,{}):Object(R.jsx)(R.Fragment,{})}}}]);