(this["webpackJsonpsas-fe"]=this["webpackJsonpsas-fe"]||[]).push([[18],{1277:function(e,t,a){"use strict";a.r(t);var n=a(16),i=a(1016),c=a(40),o=a(31),r=a(17),l=a(1),u=a(1135),s=a(250),d=a(70),b=a(1069),f=a(548),j=a(0);t.default=function(e){var t=Object(r.b)(),a=Object(i.a)("HRC","istitutoFormazione").t,O=Object(b.a)(["tables"]),h=Object(n.a)(O,2),v=h[0],g=(h[1],Object(l.useState)(null)),p=Object(n.a)(g,2),m=p[0],C=p[1],S=Object(r.c)(f.d),w=Object(r.c)(c.e),E=Object(l.useState)(!0),z=Object(n.a)(E,2),D=z[0],P=z[1],k=Object(l.useState)([]),I=Object(n.a)(k,2),x=I[0],F=I[1];Object(l.useEffect)((function(){t(Object(f.c)()).then((function(){return P(!1)}))}),[t]),Object(l.useEffect)((function(){var e,t;(null===m||void 0===m||null===(e=m.searchForm)||void 0===e||null===(t=e.text)||void 0===t?void 0:t.length)?F(o.a.filter(S,(function(e){var t=m.searchForm.text.toLowerCase();return e.ragioneSociale.toLowerCase().includes(t)}))):F(S)}),[S,m]),Object(l.useEffect)((function(){var e=v.tables;C(e.find((function(e){return"hrc"===e.id})))}),[v]);var L=function(e,t,a,n,i){return{id:e,numeric:t,disablePadding:a,alignContent:n,label:i}},y=[L("ragioneSociale",!1,!1,"left","Ragione Sociale"),L("indirizzo",!1,!1,"left","Indirizzo"),L("citta",!1,!1,"left","Citt\xe0"),L("provincia",!1,!1,"left","Provincia"),L("partitaIva",!1,!1,"left","PIVA"),L("pec",!1,!1,"left","PEC")];return Object(j.jsx)(u.a,{loading:D,theme:w,id:"hrc",data:x,headCells:y,title:a("Title"),icon:"apartment",editColumn:{updateEnabled:!0,editLink:"/hrc",deleteEnabled:!1},createButton:{enabled:!0,icon:"add",label:a("Nuovo"),link:"/hrc/new"},deleteItemsAction:function(e){return function(t){return t(Object(f.b)(e))}},showMessage:d.c,openDialog:s.c,closeDialog:s.a,rowTitleProperty:"ragioneSociale",orderByDefault:"ragioneSociale",orderDirDefault:"asc"})}}}]);