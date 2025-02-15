import{c as Tt,d as q,e as Z,f as K,g as $,h as U}from"./chunk-VFXZURDA.js";import{Bb as Gt,Ha as wt,Oa as v,P as N,T as At,X as bt,Z as Dt,fb as Ot,ga as Q,gb as Ft,hb as Mt,kb as $t,lb as kt,mb as Rt,nb as Vt,tb as Et,ua as Nt,yb as Ht,zb as Bt}from"./chunk-UZV43GBB.js";import{$b as dt,Ca as O,D as W,Da as I,Ea as A,F as Y,Gb as at,Hb as pt,Hc as M,Lb as E,M as J,Ma as ot,Mb as T,N as X,Nb as c,Ob as ut,Pb as u,Qa as b,Qc as L,Rb as D,Tb as lt,Uc as St,X as R,Xc as C,Yb as d,Yc as vt,Zb as ct,Zc as yt,a as k,ac as ft,bc as x,cc as _,dc as g,ec as ht,fa as tt,fc as mt,ga as et,ha as f,hc as zt,ja as it,kc as H,ma as nt,mc as a,nc as B,oa as st,oc as G,pb as l,q as w,qb as p,qc as gt,rc as Ct,sc as P,ta as h,tc as j,ud as It,vb as V,xb as F,xc as S,yb as rt,yc as xt,zb as m,zc as _t}from"./chunk-3Y657L2F.js";var Ut=["nz-input-group-slot",""],Pt=["*"];function Wt(i,r){if(i&1&&g(0,"nz-icon",0),i&2){let t=a();u("nzType",t.icon)}}function Yt(i,r){if(i&1&&(ht(0),xt(1),mt()),i&2){let t=a();l(),_t(t.template)}}function Jt(i,r){if(i&1&&g(0,"span",3),i&2){let t=a(2);u("icon",t.nzAddOnBeforeIcon)("template",t.nzAddOnBefore)}}function Xt(i,r){}function te(i,r){if(i&1&&(x(0,"span",6),c(1,Xt,0,0,"ng-template",5),_()),i&2){let t=a(2),e=S(3);lt(t.affixInGroupStatusCls),D("ant-input-affix-wrapper-disabled",t.disabled)("ant-input-affix-wrapper-sm",t.isSmall)("ant-input-affix-wrapper-lg",t.isLarge)("ant-input-affix-wrapper-focused",t.focused),l(),u("ngTemplateOutlet",e)}}function ee(i,r){}function ie(i,r){if(i&1&&c(0,ee,0,0,"ng-template",5),i&2){a(2);let t=S(5);u("ngTemplateOutlet",t)}}function ne(i,r){if(i&1&&g(0,"span",3),i&2){let t=a(2);u("icon",t.nzAddOnAfterIcon)("template",t.nzAddOnAfter)}}function se(i,r){if(i&1&&(x(0,"span",2),c(1,Jt,1,2,"span",3)(2,te,2,11,"span",4)(3,ie,1,1,null,5)(4,ne,1,2,"span",3),_()),i&2){let t=a();l(),d(t.nzAddOnBefore||t.nzAddOnBeforeIcon?1:-1),l(),d(t.isAffix||t.hasFeedback?2:3),l(2),d(t.nzAddOnAfter||t.nzAddOnAfterIcon?4:-1)}}function oe(i,r){}function re(i,r){if(i&1&&c(0,oe,0,0,"ng-template",5),i&2){a(2);let t=S(3);u("ngTemplateOutlet",t)}}function ae(i,r){}function pe(i,r){if(i&1&&c(0,ae,0,0,"ng-template",5),i&2){a(2);let t=S(5);u("ngTemplateOutlet",t)}}function ue(i,r){if(i&1&&c(0,re,1,1,null,5)(1,pe,1,1,null,5),i&2){let t=a();d(t.isAffix?0:1)}}function le(i,r){if(i&1&&g(0,"span",7),i&2){let t=a(2);u("icon",t.nzPrefixIcon)("template",t.nzPrefix)}}function ce(i,r){}function de(i,r){if(i&1&&g(0,"nz-form-item-feedback-icon",9),i&2){let t=a(3);u("status",t.status)}}function fe(i,r){if(i&1&&(x(0,"span",8),c(1,de,1,1,"nz-form-item-feedback-icon",9),_()),i&2){let t=a(2);u("icon",t.nzSuffixIcon)("template",t.nzSuffix),l(),d(t.isFeedback?1:-1)}}function he(i,r){if(i&1&&c(0,le,1,2,"span",7)(1,ce,0,0,"ng-template",5)(2,fe,2,3,"span",8),i&2){let t=a(),e=S(5);d(t.nzPrefix||t.nzPrefixIcon?0:-1),l(),u("ngTemplateOutlet",e),l(),d(t.nzSuffix||t.nzSuffixIcon||t.isFeedback?2:-1)}}function me(i,r){if(i&1&&(x(0,"span",10),g(1,"nz-form-item-feedback-icon",9),_()),i&2){let t=a(2);l(),u("status",t.status)}}function ze(i,r){if(i&1&&(G(0),c(1,me,2,1,"span",10)),i&2){let t=a();l(),d(!t.isAddOn&&!t.isAffix&&t.isFeedback?1:-1)}}var ge=["otpInput"];function Ce(i,r){if(i&1){let t=zt();x(0,"input",2,0),H("input",function(n){let s=I(t).$index,o=a();return A(o.onInput(s,n))})("focus",function(n){I(t);let s=a();return A(s.onFocus(n))})("keydown",function(n){let s=I(t).$index,o=a();return A(o.onKeyDown(s,n))})("paste",function(n){let s=I(t).$index,o=a();return A(o.onPaste(s,n))}),_()}if(i&2){let t=r.$implicit,e=a();u("nzSize",e.nzSize)("formControl",t)("nzStatus",e.nzStatus)}}var ei=(()=>{class i{set nzAutosize(t){typeof t=="string"||t===!0?this.autosize=!0:(n=>typeof n!="string"&&typeof n!="boolean"&&(!!n.maxRows||!!n.minRows))(t)&&(this.autosize=!0,this.minRows=t.minRows,this.maxRows=t.maxRows,this.maxHeight=this.setMaxHeight(),this.minHeight=this.setMinHeight())}resizeToFitContent(t=!1){if(this.cacheTextareaLineHeight(),!this.cachedLineHeight)return;let e=this.el,n=e.value;if(!t&&this.minRows===this.previousMinRows&&n===this.previousValue)return;let s=e.placeholder;e.classList.add("nz-textarea-autosize-measuring"),e.placeholder="";let o=Math.round((e.scrollHeight-this.inputGap)/this.cachedLineHeight)*this.cachedLineHeight+this.inputGap;this.maxHeight!==null&&o>this.maxHeight&&(o=this.maxHeight),this.minHeight!==null&&o<this.minHeight&&(o=this.minHeight),e.style.height=`${o}px`,e.classList.remove("nz-textarea-autosize-measuring"),e.placeholder=s,typeof requestAnimationFrame<"u"&&this.ngZone.runOutsideAngular(()=>requestAnimationFrame(()=>{let{selectionStart:z,selectionEnd:y}=e;!this.destroy$.isStopped&&document.activeElement===e&&e.setSelectionRange(z,y)})),this.previousValue=n,this.previousMinRows=this.minRows}cacheTextareaLineHeight(){if(this.cachedLineHeight>=0||!this.el.parentNode)return;let t=this.el.cloneNode(!1);t.rows=1,t.style.position="absolute",t.style.visibility="hidden",t.style.border="none",t.style.padding="0",t.style.height="",t.style.minHeight="",t.style.maxHeight="",t.style.overflow="hidden",this.el.parentNode.appendChild(t),this.cachedLineHeight=t.clientHeight-this.inputGap,this.el.parentNode.removeChild(t),this.maxHeight=this.setMaxHeight(),this.minHeight=this.setMinHeight()}setMinHeight(){let t=this.minRows&&this.cachedLineHeight?this.minRows*this.cachedLineHeight+this.inputGap:null;return t!==null&&(this.el.style.minHeight=`${t}px`),t}setMaxHeight(){let t=this.maxRows&&this.cachedLineHeight?this.maxRows*this.cachedLineHeight+this.inputGap:null;return t!==null&&(this.el.style.maxHeight=`${t}px`),t}noopInputHandler(){}constructor(t,e,n,s){this.elementRef=t,this.ngZone=e,this.platform=n,this.resizeService=s,this.autosize=!1,this.el=this.elementRef.nativeElement,this.maxHeight=null,this.minHeight=null,this.destroy$=new w,this.inputGap=10}ngAfterViewInit(){this.autosize&&this.platform.isBrowser&&(this.resizeToFitContent(),this.resizeService.subscribe().pipe(f(this.destroy$)).subscribe(()=>this.resizeToFitContent(!0)))}ngOnDestroy(){this.destroy$.next(!0),this.destroy$.complete()}ngDoCheck(){this.autosize&&this.platform.isBrowser&&this.resizeToFitContent()}static{this.\u0275fac=function(e){return new(e||i)(p(b),p(ot),p(At),p(wt))}}static{this.\u0275dir=m({type:i,selectors:[["textarea","nzAutosize",""]],hostAttrs:["rows","1"],hostBindings:function(e,n){e&1&&H("input",function(){return n.noopInputHandler()})},inputs:{nzAutosize:"nzAutosize"},exportAs:["nzAutosize"]})}}return i})(),ii=(()=>{class i{static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275dir=m({type:i,selectors:[["","nzInputAddonBefore",""]]})}}return i})(),ni=(()=>{class i{static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275dir=m({type:i,selectors:[["","nzInputAddonAfter",""]]})}}return i})(),si=(()=>{class i{static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275dir=m({type:i,selectors:[["","nzInputPrefix",""]]})}}return i})(),oi=(()=>{class i{static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275dir=m({type:i,selectors:[["","nzInputSuffix",""]]})}}return i})(),jt=(()=>{class i{constructor(){this.icon=null,this.type=null,this.template=null}static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275cmp=F({type:i,selectors:[["","nz-input-group-slot",""]],hostVars:6,hostBindings:function(e,n){e&2&&D("ant-input-group-addon",n.type==="addon")("ant-input-prefix",n.type==="prefix")("ant-input-suffix",n.type==="suffix")},inputs:{icon:"icon",type:"type",template:"template"},attrs:Ut,ngContentSelectors:Pt,decls:3,vars:2,consts:[[3,"nzType"],[4,"nzStringTemplateOutlet"]],template:function(e,n){e&1&&(B(),c(0,Wt,1,1,"nz-icon",0)(1,Yt,2,1,"ng-container",1),G(2)),e&2&&(d(n.icon?0:-1),l(),u("nzStringTemplateOutlet",n.template))},dependencies:[Dt,bt,Ft,Ot],encapsulation:2,changeDetection:0})}}return i})(),Lt=(()=>{class i{get disabled(){return this.ngControl&&this.ngControl.disabled!==null?this.ngControl.disabled:this._disabled}set disabled(t){this._disabled=t}constructor(t,e,n,s){this.renderer=t,this.elementRef=e,this.hostView=n,this.directionality=s,this.nzBorderless=!1,this.nzSize="default",this.nzStepperless=!0,this.nzStatus="",this._disabled=!1,this.disabled$=new w,this.dir="ltr",this.prefixCls="ant-input",this.status="",this.statusCls={},this.hasFeedback=!1,this.feedbackRef=null,this.components=[],this.ngControl=h(Rt,{self:!0,optional:!0}),this.finalSize=yt(()=>this.compactSize?this.compactSize():this.size()),this.size=pt(this.nzSize),this.compactSize=h(Tt,{optional:!0}),this.destroy$=h(v),this.nzFormStatusService=h(K,{optional:!0}),this.nzFormNoStatusService=h($,{optional:!0})}ngOnInit(){this.nzFormStatusService?.formStatusChanges.pipe(R((t,e)=>t.status===e.status&&t.hasFeedback===e.hasFeedback),f(this.destroy$)).subscribe(({status:t,hasFeedback:e})=>{this.setStatusStyles(t,e)}),this.ngControl&&this.ngControl.statusChanges?.pipe(X(()=>this.ngControl.disabled!==null),f(this.destroy$)).subscribe(()=>{this.disabled$.next(this.ngControl.disabled)}),this.dir=this.directionality.value,this.directionality.change?.pipe(f(this.destroy$)).subscribe(t=>{this.dir=t})}ngOnChanges({disabled:t,nzStatus:e,nzSize:n}){t&&this.disabled$.next(this.disabled),e&&this.setStatusStyles(this.nzStatus,this.hasFeedback),n&&this.size.set(n.currentValue)}setStatusStyles(t,e){this.status=t,this.hasFeedback=e,this.renderFeedbackIcon(),this.statusCls=N(this.prefixCls,t,e),Object.keys(this.statusCls).forEach(n=>{this.statusCls[n]?this.renderer.addClass(this.elementRef.nativeElement,n):this.renderer.removeClass(this.elementRef.nativeElement,n)})}renderFeedbackIcon(){if(!this.status||!this.hasFeedback||this.nzFormNoStatusService){this.hostView.clear(),this.feedbackRef=null;return}this.feedbackRef=this.feedbackRef||this.hostView.createComponent(U),this.feedbackRef.location.nativeElement.classList.add("ant-input-suffix"),this.feedbackRef.instance.status=this.status,this.feedbackRef.instance.updateIcon()}static{this.\u0275fac=function(e){return new(e||i)(p(V),p(b),p(at),p(Q))}}static{this.\u0275dir=m({type:i,selectors:[["input","nz-input",""],["textarea","nz-input",""]],hostAttrs:[1,"ant-input"],hostVars:13,hostBindings:function(e,n){e&2&&(ut("disabled",n.disabled||null),D("ant-input-disabled",n.disabled)("ant-input-borderless",n.nzBorderless)("ant-input-lg",n.finalSize()==="large")("ant-input-sm",n.finalSize()==="small")("ant-input-rtl",n.dir==="rtl")("ant-input-stepperless",n.nzStepperless))},inputs:{nzBorderless:[2,"nzBorderless","nzBorderless",C],nzSize:"nzSize",nzStepperless:[2,"nzStepperless","nzStepperless",C],nzStatus:"nzStatus",disabled:[2,"disabled","disabled",C]},exportAs:["nzInput"],features:[M([v,{provide:q,useValue:"input"}]),T,E([Z]),O]})}}return i})(),ri=(()=>{class i{constructor(t){this.elementRef=t}static{this.\u0275fac=function(e){return new(e||i)(p(b))}}static{this.\u0275dir=m({type:i,selectors:[["nz-input-group","nzSuffix",""],["nz-input-group","nzPrefix",""]]})}}return i})(),xe=(()=>{class i{constructor(t,e,n,s,o){this.focusMonitor=t,this.elementRef=e,this.renderer=n,this.cdr=s,this.directionality=o,this.nzAddOnBeforeIcon=null,this.nzAddOnAfterIcon=null,this.nzPrefixIcon=null,this.nzSuffixIcon=null,this.nzStatus="",this.nzSize="default",this.nzSearch=!1,this.nzCompact=!1,this.isLarge=!1,this.isSmall=!1,this.isAffix=!1,this.isAddOn=!1,this.isFeedback=!1,this.focused=!1,this.disabled=!1,this.dir="ltr",this.prefixCls="ant-input",this.affixStatusCls={},this.groupStatusCls={},this.affixInGroupStatusCls={},this.status="",this.hasFeedback=!1,this.destroy$=new w,this.nzFormStatusService=h(K,{optional:!0}),this.nzFormNoStatusService=h($,{optional:!0})}updateChildrenInputSize(){this.listOfNzInputDirective&&this.listOfNzInputDirective.forEach(t=>t.size.set(this.nzSize))}ngOnInit(){this.nzFormStatusService?.formStatusChanges.pipe(R((t,e)=>t.status===e.status&&t.hasFeedback===e.hasFeedback),f(this.destroy$)).subscribe(({status:t,hasFeedback:e})=>{this.setStatusStyles(t,e)}),this.focusMonitor.monitor(this.elementRef,!0).pipe(f(this.destroy$)).subscribe(t=>{this.focused=!!t,this.cdr.markForCheck()}),this.dir=this.directionality.value,this.directionality.change?.pipe(f(this.destroy$)).subscribe(t=>{this.dir=t})}ngAfterContentInit(){this.updateChildrenInputSize();let t=this.listOfNzInputDirective.changes.pipe(tt(this.listOfNzInputDirective));t.pipe(et(e=>J(t,...e.map(n=>n.disabled$))),Y(()=>t),W(e=>e.some(n=>n.disabled)),f(this.destroy$)).subscribe(e=>{this.disabled=e,this.cdr.markForCheck()})}ngOnChanges(t){let{nzSize:e,nzSuffix:n,nzPrefix:s,nzPrefixIcon:o,nzSuffixIcon:z,nzAddOnAfter:y,nzAddOnBefore:Qt,nzAddOnAfterIcon:qt,nzAddOnBeforeIcon:Zt,nzStatus:Kt}=t;e&&(this.updateChildrenInputSize(),this.isLarge=this.nzSize==="large",this.isSmall=this.nzSize==="small"),(n||s||o||z)&&(this.isAffix=!!(this.nzSuffix||this.nzPrefix||this.nzPrefixIcon||this.nzSuffixIcon)),(y||Qt||qt||Zt)&&(this.isAddOn=!!(this.nzAddOnAfter||this.nzAddOnBefore||this.nzAddOnAfterIcon||this.nzAddOnBeforeIcon),this.nzFormNoStatusService?.noFormStatus?.next(this.isAddOn)),Kt&&this.setStatusStyles(this.nzStatus,this.hasFeedback)}ngOnDestroy(){this.focusMonitor.stopMonitoring(this.elementRef),this.destroy$.next(),this.destroy$.complete()}setStatusStyles(t,e){this.status=t,this.hasFeedback=e,this.isFeedback=!!t&&e;let n=!!(this.nzSuffix||this.nzPrefix||this.nzPrefixIcon||this.nzSuffixIcon);this.isAffix=n||!this.isAddOn&&e,this.affixInGroupStatusCls=this.isAffix||this.isFeedback?this.affixStatusCls=N(`${this.prefixCls}-affix-wrapper`,t,e):{},this.cdr.markForCheck(),this.affixStatusCls=N(`${this.prefixCls}-affix-wrapper`,this.isAddOn?"":t,this.isAddOn?!1:e),this.groupStatusCls=N(`${this.prefixCls}-group-wrapper`,this.isAddOn?t:"",this.isAddOn?e:!1);let s=k(k({},this.affixStatusCls),this.groupStatusCls);Object.keys(s).forEach(o=>{s[o]?this.renderer.addClass(this.elementRef.nativeElement,o):this.renderer.removeClass(this.elementRef.nativeElement,o)})}static{this.\u0275fac=function(e){return new(e||i)(p(Nt),p(b),p(V),p(St),p(Q))}}static{this.\u0275cmp=F({type:i,selectors:[["nz-input-group"]],contentQueries:function(e,n,s){if(e&1&&gt(s,Lt,4),e&2){let o;P(o=j())&&(n.listOfNzInputDirective=o)}},hostVars:40,hostBindings:function(e,n){e&2&&D("ant-input-group-compact",n.nzCompact)("ant-input-search-enter-button",n.nzSearch)("ant-input-search",n.nzSearch)("ant-input-search-rtl",n.dir==="rtl")("ant-input-search-sm",n.nzSearch&&n.isSmall)("ant-input-search-large",n.nzSearch&&n.isLarge)("ant-input-group-wrapper",n.isAddOn)("ant-input-group-wrapper-rtl",n.dir==="rtl")("ant-input-group-wrapper-lg",n.isAddOn&&n.isLarge)("ant-input-group-wrapper-sm",n.isAddOn&&n.isSmall)("ant-input-affix-wrapper",n.isAffix&&!n.isAddOn)("ant-input-affix-wrapper-rtl",n.dir==="rtl")("ant-input-affix-wrapper-focused",n.isAffix&&n.focused)("ant-input-affix-wrapper-disabled",n.isAffix&&n.disabled)("ant-input-affix-wrapper-lg",n.isAffix&&!n.isAddOn&&n.isLarge)("ant-input-affix-wrapper-sm",n.isAffix&&!n.isAddOn&&n.isSmall)("ant-input-group",!n.isAffix&&!n.isAddOn)("ant-input-group-rtl",n.dir==="rtl")("ant-input-group-lg",!n.isAffix&&!n.isAddOn&&n.isLarge)("ant-input-group-sm",!n.isAffix&&!n.isAddOn&&n.isSmall)},inputs:{nzAddOnBeforeIcon:"nzAddOnBeforeIcon",nzAddOnAfterIcon:"nzAddOnAfterIcon",nzPrefixIcon:"nzPrefixIcon",nzSuffixIcon:"nzSuffixIcon",nzAddOnBefore:"nzAddOnBefore",nzAddOnAfter:"nzAddOnAfter",nzPrefix:"nzPrefix",nzStatus:"nzStatus",nzSuffix:"nzSuffix",nzSize:"nzSize",nzSearch:[2,"nzSearch","nzSearch",C],nzCompact:[2,"nzCompact","nzCompact",C]},exportAs:["nzInputGroup"],features:[M([$,{provide:q,useValue:"input"}]),T,E([Z]),O],ngContentSelectors:Pt,decls:6,vars:1,consts:[["affixTemplate",""],["contentTemplate",""],[1,"ant-input-wrapper","ant-input-group"],["nz-input-group-slot","","type","addon",3,"icon","template"],[1,"ant-input-affix-wrapper",3,"ant-input-affix-wrapper-disabled","ant-input-affix-wrapper-sm","ant-input-affix-wrapper-lg","ant-input-affix-wrapper-focused","class"],[3,"ngTemplateOutlet"],[1,"ant-input-affix-wrapper"],["nz-input-group-slot","","type","prefix",3,"icon","template"],["nz-input-group-slot","","type","suffix",3,"icon","template"],[3,"status"],["nz-input-group-slot","","type","suffix"]],template:function(e,n){e&1&&(B(),c(0,se,5,3,"span",2)(1,ue,2,1)(2,he,3,3,"ng-template",null,0,L)(4,ze,2,1,"ng-template",null,1,L)),e&2&&d(n.isAddOn?0:1)},dependencies:[jt,It,U],encapsulation:2,changeDetection:0})}}return i})(),_e=(()=>{class i{constructor(t,e){this.formBuilder=t,this.nzDestroyService=e,this.nzLength=6,this.nzSize="default",this.disabled=!1,this.nzStatus="",this.nzFormatter=n=>n,this.nzMask=null,this.internalValue=[],this.onTouched=()=>{},this.createFormArray()}ngOnChanges(t){t.nzLength?.currentValue&&this.createFormArray(),t.disabled&&this.setDisabledState(this.disabled)}onInput(t,e){let n=e.target,s=this.otpInputs.toArray()[t+1];n.value&&s?s.nativeElement.focus():s||this.selectInputBox(t)}onFocus(t){t.target.select()}onKeyDown(t,e){let n=this.otpInputs.toArray()[t-1];e.keyCode===8&&(e.preventDefault(),this.internalValue[t]="",this.otpArray.at(t).setValue("",{emitEvent:!1}),n&&this.selectInputBox(t-1),this.emitValue())}writeValue(t){if(!t){this.otpArray.reset();return}let e=t.split("");this.internalValue=e,e.forEach((n,s)=>{let o=this.nzFormatter(n),z=this.nzMask?this.nzMask:o;this.otpArray.at(s).setValue(z,{emitEvent:!1})})}registerOnChange(t){this.onChangeCallback=t}registerOnTouched(t){this.onTouched=t}setDisabledState(t){t?this.otpArray.disable():this.otpArray.enable()}onPaste(t,e){let n=e.clipboardData?.getData("text")||"";if(!n)return;let s=t;for(let o of n.split(""))if(s<this.nzLength){let z=this.nzFormatter(o);this.internalValue[s]=o;let y=this.nzMask?this.nzMask:z;this.otpArray.at(s).setValue(y,{emitEvent:!1}),s++}else break;e.preventDefault(),this.selectInputBox(s),this.emitValue()}createFormArray(){this.otpArray=this.formBuilder.array([]),this.internalValue=new Array(this.nzLength).fill("");for(let t=0;t<this.nzLength;t++){let e=this.formBuilder.nonNullable.control("",[kt.required]);e.valueChanges.pipe(it(n=>{let s=this.nzFormatter(n);this.internalValue[t]=s,e.setValue(this.nzMask??s,{emitEvent:!1}),this.emitValue()}),f(this.nzDestroyService)).subscribe(),this.otpArray.push(e)}}emitValue(){let t=this.internalValue.join("");this.onChangeCallback&&this.onChangeCallback(t)}selectInputBox(t){let e=this.otpInputs.toArray();t>=e.length&&(t=e.length-1),e[t].nativeElement.select()}static{this.\u0275fac=function(e){return new(e||i)(p(Bt),p(v))}}static{this.\u0275cmp=F({type:i,selectors:[["nz-input-otp"]],viewQuery:function(e,n){if(e&1&&Ct(ge,5),e&2){let s;P(s=j())&&(n.otpInputs=s)}},hostAttrs:[1,"ant-otp"],inputs:{nzLength:[2,"nzLength","nzLength",vt],nzSize:"nzSize",disabled:[2,"disabled","disabled",C],nzStatus:"nzStatus",nzFormatter:"nzFormatter",nzMask:"nzMask"},exportAs:["nzInputOtp"],features:[M([{provide:Mt,useExisting:nt(()=>i),multi:!0},v]),T,O],decls:2,vars:0,consts:[["otpInput",""],["nz-input","","type","text","maxlength","1","size","1",1,"ant-otp-input",3,"nzSize","formControl","nzStatus"],["nz-input","","type","text","maxlength","1","size","1",1,"ant-otp-input",3,"input","focus","keydown","paste","nzSize","formControl","nzStatus"]],template:function(e,n){e&1&&dt(0,Ce,2,3,"input",1,ct),e&2&&ft(n.otpArray.controls)},dependencies:[Lt,Gt,$t,Vt,Ht,Et],encapsulation:2,changeDetection:0})}}return i})();var ai=(()=>{class i{static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275mod=rt({type:i})}static{this.\u0275inj=st({imports:[xe,jt,_e]})}}return i})();export{ei as a,ii as b,ni as c,si as d,oi as e,Lt as f,ri as g,xe as h,ai as i};
