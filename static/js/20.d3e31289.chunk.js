(this["webpackJsonpsas-fe"]=this["webpackJsonpsas-fe"]||[]).push([[20],{1262:function(e,t,a){"use strict";a.r(t);var n=a(9),c=a(16),o=a(1014),l=a(1),r=a(31),i=a(40),s=a(1133),u=a(249),b=a(17),d=a(69),f=a(433),j=a(1069),O=a(0);t.default=function(e){var t=Object(b.b)(),a=Object(o.a)("UserManager").t,m=Object(j.a)(["tables"]),g=Object(c.a)(m,2),h=g[0],p=(g[1],Object(l.useState)(null)),v=Object(c.a)(p,2),w=v[0],N=v[1],E=Object(b.c)(f.d),C=Object(l.useMemo)((function(){return E?E.map((function(e){return Object(n.a)(Object(n.a)({},e),{},{enabledTxt:e.enabled?a("Si"):a("No"),roles:"".concat(e.attributes.mainRole," ").concat(e.attributes.hrcRole," ").concat(e.attributes.trcRole)})})):[]}),[E,a]),x=Object(b.c)(i.e),D=Object(l.useState)(!0),k=Object(c.a)(D,2),L=k[0],R=k[1],S=Object(l.useState)(C),T=Object(c.a)(S,2),M=T[0],y=T[1];Object(l.useEffect)((function(){t(Object(f.b)()).then((function(){return R(!1)}))}),[t]),Object(l.useEffect)((function(){var e=h.tables;N(e.find((function(e){return"user"===e.id})))}),[h]),Object(l.useEffect)((function(){var e,t;(null===w||void 0===w||null===(e=w.searchForm)||void 0===e||null===(t=e.text)||void 0===t?void 0:t.length)?y(r.a.filter(C,(function(e){var t=w.searchForm.text.toLowerCase();return e.lastName.toLowerCase().includes(t)||e.firstName.toLowerCase().includes(t)}))):y(C)}),[C,w]);var B=function(e,t,a,n,c){return{id:e,numeric:t,disablePadding:a,align:n,label:c}},F=[B("lastName",!1,!1,"left",a("Cognome")),B("firstName",!1,!1,"left",a("Nome")),B("email",!1,!1,"left",a("Email")),B("enabledTxt",!1,!1,"left",a("Enabled")),B("roles",!1,!1,"left",a("Ruoli"))];return Object(O.jsx)(s.a,{loading:L,theme:x,id:"user",data:M,headCells:F,title:a("Title"),icon:"group",editColumn:{updateEnabled:!0,editLink:"/user",deleteEnabled:!1},createButton:{enabled:!0,icon:"person_add",label:a("Nuovo"),link:"/user/new"},showMessage:d.c,openDialog:u.c,closeDialog:u.a,rowTitleProperty:"cognome",orderByDefault:"lastName",orderDirDefault:"asc"})}}}]);