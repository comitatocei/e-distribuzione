(this["webpackJsonpsas-fe"]=this["webpackJsonpsas-fe"]||[]).push([[15],{1276:function(e,t,n){"use strict";n.r(t);var c=n(6),a=n(16),o=n(1015),i=n(40),s=n(31),l=n(17),d=n(1),r=n(1134),u=n(250),b=n(69),f=n(551),j=n(1069),O=n(120),m=n(0);t.default=function(e){var t=Object(l.b)(),n=Object(o.a)("Dipendente").t,g=Object(j.a)(["tables"]),p=Object(a.a)(g,2),v=p[0],h=(p[1],Object(d.useState)(null)),w=Object(a.a)(h,2),C=w[0],x=w[1],D=Object(l.c)(f.d),E=Object(d.useMemo)((function(){return D?D.map((function(e){return Object(c.a)(Object(c.a)({},e),{},{assessmentTxt:n(O.a.getIndex()[e.assessment])})})):[]}),[D,n]),L=Object(l.c)(i.e),k=Object(d.useState)(!0),F=Object(a.a)(k,2),T=F[0],S=F[1],y=Object(d.useState)([]),B=Object(a.a)(y,2),I=B[0],J=B[1];Object(d.useEffect)((function(){t(Object(f.c)()).then((function(){return S(!1)}))}),[t]),Object(d.useEffect)((function(){var e,t;(null===C||void 0===C||null===(e=C.searchForm)||void 0===e||null===(t=e.text)||void 0===t?void 0:t.length)?J(s.a.filter(E,(function(e){var t=C.searchForm.text.toLowerCase();return e.cognome.toLowerCase().includes(t)||e.nome.toLowerCase().includes(t)||e.codiceFiscale.toLowerCase().includes(t)}))):J(E)}),[E,C]),Object(d.useEffect)((function(){var e=v.tables;x(e.find((function(e){return"dipendente"===e.id})))}),[v]);var M=function(e,t,n,c,a){return{id:e,numeric:t,disablePadding:n,align:c,label:a}},N=[M("codiceFiscale",!1,!1,"left",n("Codice fiscale")),M("cognome",!1,!1,"left",n("Cognome")),M("nome",!1,!1,"left",n("Nome")),M("citta",!1,!1,"left",n("Citt\xe0")),M("assessmentTxt",!1,!1,"left",n("Valutazione"))];return Object(m.jsx)(r.a,{loading:T,theme:L,id:"dipendente",data:I,headCells:N,title:n("Title"),icon:"engineering",editColumn:{updateEnabled:!0,editLink:"/dipendente",deleteEnabled:!1},createButton:{enabled:!0,icon:"person_add",label:n("Nuovo"),link:"/dipendente/new"},deleteItemsAction:f.b,showMessage:b.c,openDialog:u.c,closeDialog:u.a,rowTitleProperty:"cognome",orderByDefault:"cognome",orderDirDefault:"asc"})}}}]);