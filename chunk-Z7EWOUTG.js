import{e as K}from"./chunk-VWOTWHLP.js";import{C as Q,Ma as G,N as V,Na as J,T as H,X as L,Z as q,ga as U}from"./chunk-UZV43GBB.js";import{Ca as y,Da as W,Ea as A,La as I,Mb as P,Nb as a,Pb as l,Qa as j,Qb as _,Qc as x,Rb as h,Uc as $,Xc as f,Yb as g,bc as S,cc as N,dc as z,ha as T,hc as F,kc as O,mc as o,nc as u,oa as R,oc as m,pb as v,q as C,qb as s,qc as w,sc as k,tc as D,ud as E,vb as b,xb as c,xc as M,yb as Z}from"./chunk-3Y657L2F.js";var B=["*"],ee=["nz-sider-trigger",""];function te(t,r){}function ie(t,r){if(t&1&&a(0,te,0,0,"ng-template",2),t&2){let e=o(),i=M(5);l("ngTemplateOutlet",e.nzZeroTrigger||i)}}function ne(t,r){}function re(t,r){if(t&1&&a(0,ne,0,0,"ng-template",2),t&2){let e=o(),i=M(3);l("ngTemplateOutlet",e.nzTrigger||i)}}function oe(t,r){if(t&1&&z(0,"nz-icon",3),t&2){let e=o(2);l("nzType",e.nzCollapsed?"left":"right")}}function se(t,r){if(t&1&&z(0,"nz-icon",3),t&2){let e=o(2);l("nzType",e.nzCollapsed?"right":"left")}}function ae(t,r){if(t&1&&a(0,oe,1,1,"nz-icon",3)(1,se,1,1,"nz-icon",3),t&2){let e=o();g(e.nzReverseArrow?0:1)}}function le(t,r){t&1&&z(0,"nz-icon",4)}function de(t,r){if(t&1){let e=F();S(0,"div",2),O("click",function(){W(e);let n=o();return A(n.setCollapsed(!n.nzCollapsed))}),N()}if(t&2){let e=o();l("matchBreakPoint",e.matchBreakPoint)("nzCollapsedWidth",e.nzCollapsedWidth)("nzCollapsed",e.nzCollapsed)("nzBreakpoint",e.nzBreakpoint)("nzReverseArrow",e.nzReverseArrow)("nzTrigger",e.nzTrigger)("nzZeroTrigger",e.nzZeroTrigger)("siderWidth",e.widthSetting)}}var Re=(()=>{class t{constructor(e,i){this.elementRef=e,this.renderer=i,this.renderer.addClass(this.elementRef.nativeElement,"ant-layout-content")}static{this.\u0275fac=function(i){return new(i||t)(s(j),s(b))}}static{this.\u0275cmp=c({type:t,selectors:[["nz-content"]],exportAs:["nzContent"],ngContentSelectors:B,decls:1,vars:0,template:function(i,n){i&1&&(u(),m(0))},encapsulation:2,changeDetection:0})}}return t})();var X=(()=>{class t{constructor(){this.nzCollapsed=!1,this.nzReverseArrow=!1,this.nzZeroTrigger=null,this.nzTrigger=void 0,this.matchBreakPoint=!1,this.nzCollapsedWidth=null,this.siderWidth=null,this.nzBreakpoint=null,this.isZeroTrigger=!1,this.isNormalTrigger=!1}updateTriggerType(){this.isZeroTrigger=this.nzCollapsedWidth===0&&(this.nzBreakpoint&&this.matchBreakPoint||!this.nzBreakpoint),this.isNormalTrigger=this.nzCollapsedWidth!==0}ngOnInit(){this.updateTriggerType()}ngOnChanges(){this.updateTriggerType()}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=c({type:t,selectors:[["","nz-sider-trigger",""]],hostVars:10,hostBindings:function(i,n){i&2&&(_("width",n.isNormalTrigger?n.siderWidth:null),h("ant-layout-sider-trigger",n.isNormalTrigger)("ant-layout-sider-zero-width-trigger",n.isZeroTrigger)("ant-layout-sider-zero-width-trigger-right",n.isZeroTrigger&&n.nzReverseArrow)("ant-layout-sider-zero-width-trigger-left",n.isZeroTrigger&&!n.nzReverseArrow))},inputs:{nzCollapsed:"nzCollapsed",nzReverseArrow:"nzReverseArrow",nzZeroTrigger:"nzZeroTrigger",nzTrigger:"nzTrigger",matchBreakPoint:"matchBreakPoint",nzCollapsedWidth:"nzCollapsedWidth",siderWidth:"siderWidth",nzBreakpoint:"nzBreakpoint"},exportAs:["nzSiderTrigger"],features:[y],attrs:ee,decls:6,vars:2,consts:[["defaultTrigger",""],["defaultZeroTrigger",""],[3,"ngTemplateOutlet"],[3,"nzType"],["nzType","bars"]],template:function(i,n){i&1&&a(0,ie,1,1,null,2)(1,re,1,1,null,2)(2,ae,2,1,"ng-template",null,0,x)(4,le,1,0,"ng-template",null,1,x),i&2&&(g(n.isZeroTrigger?0:-1),v(),g(n.isNormalTrigger?1:-1))},dependencies:[E,q,L],encapsulation:2,changeDetection:0})}}return t})(),Y=(()=>{class t{updateStyleMap(){this.widthSetting=this.nzCollapsed?`${this.nzCollapsedWidth}px`:Q(this.nzWidth),this.flexSetting=`0 0 ${this.widthSetting}`,this.cdr.markForCheck()}updateMenuInlineCollapsed(){this.nzMenuDirective&&this.nzMenuDirective.nzMode==="inline"&&this.nzCollapsedWidth!==0&&this.nzMenuDirective.setInlineCollapsed(this.nzCollapsed)}setCollapsed(e){e!==this.nzCollapsed&&(this.nzCollapsed=e,this.nzCollapsedChange.emit(e),this.updateMenuInlineCollapsed(),this.updateStyleMap(),this.cdr.markForCheck())}constructor(e,i,n){this.platform=e,this.cdr=i,this.breakpointService=n,this.destroy$=new C,this.nzMenuDirective=null,this.nzCollapsedChange=new I,this.nzWidth=200,this.nzTheme="dark",this.nzCollapsedWidth=80,this.nzBreakpoint=null,this.nzZeroTrigger=null,this.nzTrigger=void 0,this.nzReverseArrow=!1,this.nzCollapsible=!1,this.nzCollapsed=!1,this.matchBreakPoint=!1,this.flexSetting=null,this.widthSetting=null}ngOnInit(){this.updateStyleMap(),this.platform.isBrowser&&this.breakpointService.subscribe(G,!0).pipe(T(this.destroy$)).subscribe(e=>{let i=this.nzBreakpoint;i&&V().subscribe(()=>{this.matchBreakPoint=!e[i],this.setCollapsed(this.matchBreakPoint),this.cdr.markForCheck()})})}ngOnChanges(e){let{nzCollapsed:i,nzCollapsedWidth:n,nzWidth:d}=e;(i||n||d)&&this.updateStyleMap(),i&&this.updateMenuInlineCollapsed()}ngAfterContentInit(){this.updateMenuInlineCollapsed()}ngOnDestroy(){this.destroy$.next(!0),this.destroy$.complete()}static{this.\u0275fac=function(i){return new(i||t)(s(H),s($),s(J))}}static{this.\u0275cmp=c({type:t,selectors:[["nz-sider"]],contentQueries:function(i,n,d){if(i&1&&w(d,K,5),i&2){let p;k(p=D())&&(n.nzMenuDirective=p.first)}},hostAttrs:[1,"ant-layout-sider"],hostVars:18,hostBindings:function(i,n){i&2&&(_("flex",n.flexSetting)("max-width",n.widthSetting)("min-width",n.widthSetting)("width",n.widthSetting),h("ant-layout-sider-zero-width",n.nzCollapsed&&n.nzCollapsedWidth===0)("ant-layout-sider-light",n.nzTheme==="light")("ant-layout-sider-dark",n.nzTheme==="dark")("ant-layout-sider-collapsed",n.nzCollapsed)("ant-layout-sider-has-trigger",n.nzCollapsible&&n.nzTrigger!==null))},inputs:{nzWidth:"nzWidth",nzTheme:"nzTheme",nzCollapsedWidth:"nzCollapsedWidth",nzBreakpoint:"nzBreakpoint",nzZeroTrigger:"nzZeroTrigger",nzTrigger:"nzTrigger",nzReverseArrow:[2,"nzReverseArrow","nzReverseArrow",f],nzCollapsible:[2,"nzCollapsible","nzCollapsible",f],nzCollapsed:[2,"nzCollapsed","nzCollapsed",f]},outputs:{nzCollapsedChange:"nzCollapsedChange"},exportAs:["nzSider"],features:[P,y],ngContentSelectors:B,decls:3,vars:1,consts:[[1,"ant-layout-sider-children"],["nz-sider-trigger","",3,"matchBreakPoint","nzCollapsedWidth","nzCollapsed","nzBreakpoint","nzReverseArrow","nzTrigger","nzZeroTrigger","siderWidth"],["nz-sider-trigger","",3,"click","matchBreakPoint","nzCollapsedWidth","nzCollapsed","nzBreakpoint","nzReverseArrow","nzTrigger","nzZeroTrigger","siderWidth"]],template:function(i,n){i&1&&(u(),S(0,"div",0),m(1),N(),a(2,de,1,8,"div",1)),i&2&&(v(2),g(n.nzCollapsible&&n.nzTrigger!==null?2:-1))},dependencies:[X],encapsulation:2,changeDetection:0})}}return t})(),We=(()=>{class t{constructor(e){this.directionality=e,this.dir="ltr",this.destroy$=new C}ngOnInit(){this.dir=this.directionality.value,this.directionality.change?.pipe(T(this.destroy$)).subscribe(e=>{this.dir=e})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}static{this.\u0275fac=function(i){return new(i||t)(s(U))}}static{this.\u0275cmp=c({type:t,selectors:[["nz-layout"]],contentQueries:function(i,n,d){if(i&1&&w(d,Y,4),i&2){let p;k(p=D())&&(n.listOfNzSiderComponent=p)}},hostAttrs:[1,"ant-layout"],hostVars:4,hostBindings:function(i,n){i&2&&h("ant-layout-rtl",n.dir==="rtl")("ant-layout-has-sider",n.listOfNzSiderComponent.length>0)},exportAs:["nzLayout"],ngContentSelectors:B,decls:1,vars:0,template:function(i,n){i&1&&(u(),m(0))},encapsulation:2,changeDetection:0})}}return t})(),Ae=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=Z({type:t})}static{this.\u0275inj=R({imports:[Y,X]})}}return t})();export{Re as a,Y as b,We as c,Ae as d};
