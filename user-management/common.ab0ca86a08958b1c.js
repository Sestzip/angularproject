"use strict";(self.webpackChunkUserManagement=self.webpackChunkUserManagement||[]).push([[592],{6070:(d,u,r)=>{r.d(u,{M:()=>p});var e=r(4893),a=r(8493);const c=function(){return["/manage-chat"]},l=function(){return["/manage-user"]},g=function(){return["/manage-documents"]};let p=(()=>{class n{constructor(t){this.router=t}ngOnInit(){}logout(){if(this.checkArrayExist(JSON.parse(localStorage.getItem("userList")))){const t=JSON.parse(localStorage.getItem("userList")).map(i=>i.IsActive).indexOf(!0),o=JSON.parse(localStorage.getItem("userList"));o[t].IsActive=!1,localStorage.setItem("userList",JSON.stringify(o))}this.router.navigate(["/"])}checkArrayExist(t){return void 0!==t&&null!=t&&null!=t.length&&t.length>0}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(a.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-menu"]],decls:13,vars:6,consts:[[3,"routerLink"],[3,"click"]],template:function(t,o){1&t&&(e.TgZ(0,"ul")(1,"li")(2,"a",0),e._uU(3,"Group Chat"),e.qZA()(),e.TgZ(4,"li")(5,"a",0),e._uU(6,"Manage Users"),e.qZA()(),e.TgZ(7,"li")(8,"a",0),e._uU(9,"Manage Documents"),e.qZA()(),e.TgZ(10,"li")(11,"a",1),e.NdJ("click",function(){return o.logout()}),e._uU(12,"Logout"),e.qZA()()()),2&t&&(e.xp6(2),e.Q6J("routerLink",e.DdM(3,c)),e.xp6(3),e.Q6J("routerLink",e.DdM(4,l)),e.xp6(3),e.Q6J("routerLink",e.DdM(5,g)))},directives:[a.yS],styles:["ul[_ngcontent-%COMP%]{margin:-21px 0 0;padding:0;list-style:none;height:36px;line-height:36px;background-color:#ddd;font-family:Arial,Helvetica,sans-serif;font-size:13px}li[_ngcontent-%COMP%]{float:left;border-right:1px solid #156ee2;width:25%}a[_ngcontent-%COMP%]{display:block;padding:0 28px;color:#000;text-decoration:none}a[_ngcontent-%COMP%]:hover{background-color:#ddd}"]}),n})()}}]);