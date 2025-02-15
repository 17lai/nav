import{a as Ge,b as K,f as We}from"./chunk-VWOTWHLP.js";import{j as R,r as oe}from"./chunk-GBLQNTSP.js";import{a as Le,b as Xe,f as Ue}from"./chunk-VFXZURDA.js";import{Ab as Qe,Ba as Pe,Q as ne,R as $e,S as je,T as Te,aa as Ae,ca as Fe,cb as Be,ga as _,hb as se,ib as Ye,nb as He,qb as Ze,ua as U,ya as T}from"./chunk-UZV43GBB.js";import{$b as Se,Ac as Oe,Ca as ve,D as C,Da as y,E as ue,Ea as k,Gb as ie,Hb as ke,Hc as j,J as P,Ja as Ce,La as D,M as g,Ma as J,Mb as W,N as b,Nb as De,O as pe,Ob as we,Pa as G,Pb as $,Qa as m,Rb as M,Sb as Me,Tb as xe,Uc as Q,X as me,Xc as h,Zc as Ee,_a as ge,_c as Ie,ac as Ne,ad as Ve,bc as x,cc as f,dc as _e,ga as fe,ha as d,hc as L,kc as X,ma as B,mc as p,nc as S,oa as I,oc as N,pb as ee,q as v,qa as ze,qb as s,r as F,rb as be,rc as Y,sc as H,ta as u,tc as Z,v as he,vb as te,w as de,x as q,xb as w,yb as V,yc as Re,zb as ye}from"./chunk-3Y657L2F.js";var re=["*"],nt=["inputElement"],ot=["nz-checkbox",""],st=(n,r)=>r.value;function rt(n,r){if(n&1&&(x(0,"label",0),Re(1),f()),n&2){let e=r.$implicit,i=p(2);$("nzValue",e.value)("nzName",i.nzName())("nzDisabled",e.disabled||i.finalDisabled()),ee(),Oe(" ",e.label," ")}}function at(n,r){if(n&1&&Se(0,rt,2,4,"label",0,st),n&2){let e=p();Ne(e.normalizedOptions())}}var lt=(()=>{class n{constructor(){this.nzOnChange=new D,this.checkboxList=[]}addCheckbox(e){this.checkboxList.push(e)}removeCheckbox(e){this.checkboxList.splice(this.checkboxList.indexOf(e),1)}onChange(){let e=this.checkboxList.filter(i=>i.nzChecked).map(i=>i.nzValue);this.nzOnChange.emit(e)}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=w({type:n,selectors:[["nz-checkbox-wrapper"]],hostAttrs:[1,"ant-checkbox-group"],outputs:{nzOnChange:"nzOnChange"},exportAs:["nzCheckboxWrapper"],ngContentSelectors:re,decls:1,vars:0,template:function(i,t){i&1&&(S(),N(0))},encapsulation:2,changeDetection:0})}}return n})(),Ke=new ze("NZ_CHECKBOX_GROUP"),qe=(()=>{class n{innerCheckedChange(e){!this.nzDisabled&&!this.checkboxGroupComponent?.finalDisabled()&&(this.setValue(e),this.nzCheckboxWrapperComponent?.onChange(),this.checkboxGroupComponent?.onCheckedChange(this.nzValue,e))}writeValue(e){this.nzChecked=e,this.cdr.markForCheck()}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.nzDisabled=this.isNzDisableFirstChange&&this.nzDisabled||e,this.isNzDisableFirstChange=!1,this.cdr.markForCheck()}focus(){this.focusMonitor.focusVia(this.inputElement,"keyboard")}blur(){this.inputElement.nativeElement.blur()}constructor(e,i,t,o,a){this.ngZone=e,this.elementRef=i,this.cdr=t,this.focusMonitor=o,this.directionality=a,this.dir="ltr",this.destroy$=new v,this.isNzDisableFirstChange=!0,this.onChange=()=>{},this.onTouched=()=>{},this.nzCheckedChange=new D,this.nzValue=null,this.nzAutoFocus=!1,this.nzDisabled=!1,this.nzIndeterminate=!1,this.nzChecked=!1,this.nzId=null,this.nzName=null,this.nzCheckboxWrapperComponent=u(lt,{optional:!0}),this.checkboxGroupComponent=u(Ke,{optional:!0}),this.nzFormStatusService=u(Ue,{optional:!0}),this.checkboxGroupComponent&&Ve(()=>{let l=this.checkboxGroupComponent.value()||[];this.setValue(l.includes(this.nzValue)),this.cdr.markForCheck()})}ngOnInit(){this.focusMonitor.monitor(this.elementRef,!0).pipe(d(this.destroy$)).subscribe(e=>{e||Promise.resolve().then(()=>this.onTouched())}),this.nzCheckboxWrapperComponent?.addCheckbox(this),this.directionality.change.pipe(d(this.destroy$)).subscribe(e=>{this.dir=e,this.cdr.detectChanges()}),this.dir=this.directionality.value,ne(this.elementRef.nativeElement,"click").pipe(d(this.destroy$)).subscribe(e=>{e.preventDefault(),this.focus(),!this.nzDisabled&&this.ngZone.run(()=>{this.innerCheckedChange(!this.nzChecked),this.cdr.markForCheck()})}),ne(this.inputElement.nativeElement,"click").pipe(d(this.destroy$)).subscribe(e=>e.stopPropagation())}ngAfterViewInit(){this.nzAutoFocus&&this.focus()}ngOnDestroy(){this.focusMonitor.stopMonitoring(this.elementRef),this.nzCheckboxWrapperComponent?.removeCheckbox(this),this.destroy$.next(),this.destroy$.complete()}setValue(e){this.nzChecked=e,this.onChange(e),this.nzCheckedChange.emit(e)}static{this.\u0275fac=function(i){return new(i||n)(s(J),s(m),s(Q),s(U),s(_))}}static{this.\u0275cmp=w({type:n,selectors:[["","nz-checkbox",""]],viewQuery:function(i,t){if(i&1&&Y(nt,7),i&2){let o;H(o=Z())&&(t.inputElement=o.first)}},hostAttrs:[1,"ant-checkbox-wrapper"],hostVars:10,hostBindings:function(i,t){i&2&&M("ant-checkbox-group-item",!!t.checkboxGroupComponent)("ant-checkbox-wrapper-in-form-item",!!t.nzFormStatusService)("ant-checkbox-wrapper-checked",t.nzChecked)("ant-checkbox-wrapper-disabled",t.nzDisabled||(t.checkboxGroupComponent==null?null:t.checkboxGroupComponent.finalDisabled()))("ant-checkbox-rtl",t.dir==="rtl")},inputs:{nzValue:"nzValue",nzAutoFocus:[2,"nzAutoFocus","nzAutoFocus",h],nzDisabled:[2,"nzDisabled","nzDisabled",h],nzIndeterminate:[2,"nzIndeterminate","nzIndeterminate",h],nzChecked:[2,"nzChecked","nzChecked",h],nzId:"nzId",nzName:"nzName"},outputs:{nzCheckedChange:"nzCheckedChange"},exportAs:["nzCheckbox"],features:[j([{provide:se,useExisting:B(()=>n),multi:!0}]),W],attrs:ot,ngContentSelectors:re,decls:6,vars:12,consts:[["inputElement",""],[1,"ant-checkbox"],["type","checkbox",1,"ant-checkbox-input",3,"ngModelChange","checked","ngModel","disabled"],[1,"ant-checkbox-inner"]],template:function(i,t){if(i&1){let o=L();S(),x(0,"span",1)(1,"input",2,0),X("ngModelChange",function(l){return y(o),k(t.innerCheckedChange(l))}),f(),_e(3,"span",3),f(),x(4,"span"),N(5),f()}if(i&2){let o;M("ant-checkbox-checked",t.nzChecked&&!t.nzIndeterminate)("ant-checkbox-disabled",t.nzDisabled||(t.checkboxGroupComponent==null?null:t.checkboxGroupComponent.finalDisabled()))("ant-checkbox-indeterminate",t.nzIndeterminate),ee(),$("checked",t.nzChecked)("ngModel",t.nzChecked)("disabled",t.nzDisabled||((o=t.checkboxGroupComponent==null?null:t.checkboxGroupComponent.finalDisabled())!==null&&o!==void 0?o:!1)),we("autofocus",t.nzAutoFocus?"autofocus":null)("id",t.nzId)("name",t.nzName||(t.checkboxGroupComponent==null?null:t.checkboxGroupComponent.nzName()))}},dependencies:[Qe,Ye,He,Ze],encapsulation:2,changeDetection:0})}}return n})(),ct=(()=>{class n{constructor(){this.onChange=()=>{},this.onTouched=()=>{},this.isDisabledFirstChange=!0,this.directionality=u(_),this.nzName=G(null),this.nzDisabled=G(!1,{transform:h}),this.nzOptions=G([]),this.value=ke(null),this.finalDisabled=Ie(()=>this.nzDisabled()),this.dir=Xe(this.directionality.change,{initialValue:this.directionality.value}),this.normalizedOptions=Ee(()=>ht(this.nzOptions()));let e=u(m),i=u(U),t=u(Ce);ge(()=>{i.monitor(e,!0).pipe(Le(t)).subscribe(o=>{o||this.onTouched()}),t.onDestroy(()=>{i.stopMonitoring(e)})})}writeValue(e){this.value.set(e)}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.isDisabledFirstChange||this.finalDisabled.set(e),this.isDisabledFirstChange=!1}onCheckedChange(e,i){this.finalDisabled()||(this.value.update(t=>i?t?.concat(e)||[e]:t?.filter(o=>o!==e)||[]),this.onChange(this.value()))}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=w({type:n,selectors:[["nz-checkbox-group"]],hostAttrs:[1,"ant-checkbox-group"],hostVars:2,hostBindings:function(i,t){i&2&&M("ant-checkbox-group-rtl",t.dir()==="rtl")},inputs:{nzName:[1,"nzName"],nzDisabled:[1,"nzDisabled"],nzOptions:[1,"nzOptions"]},exportAs:["nzCheckboxGroup"],features:[j([{provide:se,useExisting:B(()=>n),multi:!0},{provide:Ke,useExisting:B(()=>n)}])],ngContentSelectors:re,decls:2,vars:0,consts:[["nz-checkbox","",3,"nzValue","nzName","nzDisabled"]],template:function(i,t){i&1&&(S(),N(0,0,null,at,2,0))},dependencies:[qe],encapsulation:2,changeDetection:0})}}return n})();function ht(n){return n.map(r=>typeof r=="string"||typeof r=="number"?{label:`${r}`,value:r}:r)}var $t=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275mod=V({type:n})}static{this.\u0275inj=I({imports:[qe,ct]})}}return n})();var ut=["*"];function pt(n,r){if(n&1){let e=L();x(0,"div",0),X("@slideMotion.done",function(t){y(e);let o=p();return k(o.onAnimationEvent(t))})("mouseenter",function(){y(e);let t=p();return k(t.setMouseState(!0))})("mouseleave",function(){y(e);let t=p();return k(t.setMouseState(!1))}),N(1),f()}if(n&2){let e=p();Me(e.nzOverlayStyle),xe(e.nzOverlayClassName),M("ant-dropdown-rtl",e.dir==="rtl"),$("@slideMotion",void 0)("@.disabled",!!(e.noAnimation!=null&&e.noAnimation.nzNoAnimation))("nzNoAnimation",e.noAnimation==null?null:e.noAnimation.nzNoAnimation)}}var mt="dropDown",ft=[R.bottomLeft,R.bottomRight,R.topRight,R.topLeft],ui=(()=>{let n,r=[],e=[];return class ae{static{let t=typeof Symbol=="function"&&Symbol.metadata?Object.create(null):void 0;n=[je()],de(null,null,n,{kind:"field",name:"nzBackdrop",static:!1,private:!1,access:{has:o=>"nzBackdrop"in o,get:o=>o.nzBackdrop,set:(o,a)=>{o.nzBackdrop=a}},metadata:t},r,e),t&&Object.defineProperty(this,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:t})}setDropdownMenuValue(t,o){this.nzDropdownMenu&&this.nzDropdownMenu.setValue(t,o)}constructor(t,o,a,l,O,E){this.nzConfigService=t,this.elementRef=o,this.overlay=a,this.renderer=l,this.viewContainerRef=O,this.platform=E,this._nzModuleName=mt,this.overlayRef=null,this.destroy$=new v,this.positionStrategy=this.overlay.position().flexibleConnectedTo(this.elementRef.nativeElement).withLockedPosition().withTransformOriginOn(".ant-dropdown"),this.inputVisible$=new F(!1),this.nzTrigger$=new F("hover"),this.overlayClose$=new v,this.nzDropdownMenu=null,this.nzTrigger="hover",this.nzMatchWidthElement=null,this.nzBackdrop=q(this,r,!1),this.nzClickHide=(q(this,e),!0),this.nzDisabled=!1,this.nzVisible=!1,this.nzOverlayClassName="",this.nzOverlayStyle={},this.nzPlacement="bottomLeft",this.nzVisibleChange=new D}ngAfterViewInit(){if(this.nzDropdownMenu){let t=this.elementRef.nativeElement,o=g(P(t,"mouseenter").pipe(C(()=>!0)),P(t,"mouseleave").pipe(C(()=>!1))),a=this.nzDropdownMenu.mouseState$,l=g(a,o),O=P(t,"click").pipe(C(()=>!this.nzVisible)),E=this.nzTrigger$.pipe(fe(c=>c==="hover"?l:c==="click"?O:he)),A=this.nzDropdownMenu.descendantMenuItemClick$.pipe(b(()=>this.nzClickHide),C(()=>!1)),Je=g(E,A,this.overlayClose$).pipe(b(()=>!this.nzDisabled)),et=g(this.inputVisible$,Je);ue([et,this.nzDropdownMenu.isChildSubMenuOpen$]).pipe(C(([c,le])=>c||le),pe(150),me(),b(()=>this.platform.isBrowser),d(this.destroy$)).subscribe(c=>{let ce=(this.nzMatchWidthElement?this.nzMatchWidthElement.nativeElement:t).getBoundingClientRect().width;if(this.nzVisible!==c&&this.nzVisibleChange.emit(c),this.nzVisible=c,c){if(!this.overlayRef)this.overlayRef=this.overlay.create({positionStrategy:this.positionStrategy,minWidth:ce,disposeOnNavigation:!0,hasBackdrop:this.nzBackdrop&&this.nzTrigger==="click",scrollStrategy:this.overlay.scrollStrategies.reposition()}),g(this.overlayRef.backdropClick(),this.overlayRef.detachments(),this.overlayRef.outsidePointerEvents().pipe(b(z=>!this.elementRef.nativeElement.contains(z.target))),this.overlayRef.keydownEvents().pipe(b(z=>z.keyCode===27&&!Ae(z)))).pipe(d(this.destroy$)).subscribe(()=>{this.overlayClose$.next(!1)});else{let z=this.overlayRef.getConfig();z.minWidth=ce}this.positionStrategy.withPositions([R[this.nzPlacement],...ft]),(!this.portal||this.portal.templateRef!==this.nzDropdownMenu.templateRef)&&(this.portal=new Fe(this.nzDropdownMenu.templateRef,this.viewContainerRef)),this.overlayRef.attach(this.portal)}else this.overlayRef&&this.overlayRef.detach()}),this.nzDropdownMenu.animationStateChange$.pipe(d(this.destroy$)).subscribe(c=>{c.toState==="void"&&(this.overlayRef&&this.overlayRef.dispose(),this.overlayRef=null)})}}ngOnDestroy(){this.destroy$.next(!0),this.destroy$.complete(),this.overlayRef&&(this.overlayRef.dispose(),this.overlayRef=null)}ngOnChanges(t){let{nzVisible:o,nzDisabled:a,nzOverlayClassName:l,nzOverlayStyle:O,nzTrigger:E}=t;if(E&&this.nzTrigger$.next(this.nzTrigger),o&&this.inputVisible$.next(this.nzVisible),a){let A=this.elementRef.nativeElement;this.nzDisabled?(this.renderer.setAttribute(A,"disabled",""),this.inputVisible$.next(!1)):this.renderer.removeAttribute(A,"disabled")}l&&this.setDropdownMenuValue("nzOverlayClassName",this.nzOverlayClassName),O&&this.setDropdownMenuValue("nzOverlayStyle",this.nzOverlayStyle)}static{this.\u0275fac=function(o){return new(o||ae)(s($e),s(m),s(Pe),s(te),s(ie),s(Te))}}static{this.\u0275dir=ye({type:ae,selectors:[["","nz-dropdown",""]],hostAttrs:[1,"ant-dropdown-trigger"],inputs:{nzDropdownMenu:"nzDropdownMenu",nzTrigger:"nzTrigger",nzMatchWidthElement:"nzMatchWidthElement",nzBackdrop:[2,"nzBackdrop","nzBackdrop",h],nzClickHide:[2,"nzClickHide","nzClickHide",h],nzDisabled:[2,"nzDisabled","nzDisabled",h],nzVisible:[2,"nzVisible","nzVisible",h],nzOverlayClassName:"nzOverlayClassName",nzOverlayStyle:"nzOverlayStyle",nzPlacement:"nzPlacement"},outputs:{nzVisibleChange:"nzVisibleChange"},exportAs:["nzDropdown"],features:[W,ve]})}}})(),zt=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275mod=V({type:n})}static{this.\u0275inj=I({})}}return n})();var pi=(()=>{class n{onAnimationEvent(e){this.animationStateChange$.emit(e)}setMouseState(e){this.mouseState$.next(e)}setValue(e,i){this[e]=i,this.cdr.markForCheck()}constructor(e,i,t,o,a,l){this.cdr=e,this.elementRef=i,this.renderer=t,this.viewContainerRef=o,this.nzMenuService=a,this.directionality=l,this.mouseState$=new F(!1),this.isChildSubMenuOpen$=this.nzMenuService.isChildSubMenuOpen$,this.descendantMenuItemClick$=this.nzMenuService.descendantMenuItemClick$,this.animationStateChange$=new D,this.nzOverlayClassName="",this.nzOverlayStyle={},this.dir="ltr",this.destroy$=new v,this.noAnimation=u(oe,{host:!0,optional:!0})}ngOnInit(){this.directionality.change?.pipe(d(this.destroy$)).subscribe(e=>{this.dir=e,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngAfterContentInit(){this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement),this.elementRef.nativeElement)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}static{this.\u0275fac=function(i){return new(i||n)(s(Q),s(m),s(te),s(ie),s(K),s(_))}}static{this.\u0275cmp=w({type:n,selectors:[["nz-dropdown-menu"]],viewQuery:function(i,t){if(i&1&&Y(be,7),i&2){let o;H(o=Z())&&(t.templateRef=o.first)}},exportAs:["nzDropdownMenu"],features:[j([K,{provide:Ge,useValue:!0}])],ngContentSelectors:ut,decls:1,vars:0,consts:[[1,"ant-dropdown",3,"mouseenter","mouseleave","nzNoAnimation"]],template:function(i,t){i&1&&(S(),De(0,pt,2,9,"ng-template"))},dependencies:[oe],encapsulation:2,data:{animation:[Be]},changeDetection:0})}}return n})(),mi=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275mod=V({type:n})}static{this.\u0275inj=I({imports:[zt,We]})}}return n})(),fi=[new T({originX:"start",originY:"top"},{overlayX:"start",overlayY:"top"}),new T({originX:"start",originY:"top"},{overlayX:"start",overlayY:"bottom"}),new T({originX:"start",originY:"top"},{overlayX:"end",overlayY:"bottom"}),new T({originX:"start",originY:"top"},{overlayX:"end",overlayY:"top"})];export{ui as a,pi as b,mi as c,qe as d,ct as e,$t as f};
