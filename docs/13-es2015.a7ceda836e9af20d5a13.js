(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{S4iM:function(t,e,n){"use strict";n.r(e),n.d(e,"TakeModule",(function(){return d}));var a=n("PCNd"),r=n("tyNb");class i{constructor(){this.fruits=["banana","banana","banana","banana"],this.expectedFruits=["banana","banana"],this.code='const fruits = from([\n    "banana",\n    "banana",\n    "banana",\n    "banana"]);\nfruits.pipe(\n\t\n).subscribe({\n    next: fruit => toConveyorBelt(fruit)\n});',this.minPositionLineNumber=6,this.positionColumnNumber=2}}var c=n("fXoL"),o=n("VIrA"),s=n("sYmb"),b=n("ofXK"),u=n("uzYf"),l=n("OtPg");function p(t,e){if(1&t&&(c.Nb(0,"div"),c.Nb(1,"p"),c.lc(2,"The "),c.Nb(3,"code",1),c.lc(4,"take"),c.Mb(),c.lc(5," operator emits only the first count values emitted by the source Observable. "),c.Nb(6,"a",2),c.lc(7,"Mehr Infos zu take."),c.Mb(),c.Mb(),c.Nb(8,"div",3,4),c.Nb(10,"pre"),c.lc(11,"            "),c.Lb(12,"code",5),c.lc(13,"\n        "),c.Mb(),c.Mb(),c.Mb()),2&t){const t=c.ec(9),e=c.Zb();c.Ab(3),c.cc("appTooltip",t),c.Ab(9),c.cc("highlight",e.takeCode)}}function h(t,e){if(1&t&&(c.Nb(0,"div"),c.Nb(1,"p"),c.lc(2,"The "),c.Nb(3,"code",1),c.lc(4,"take"),c.Mb(),c.lc(5," operator emits only the first count values emitted by the source Observable. "),c.Nb(6,"a",2),c.lc(7,"Mehr Infos zu take."),c.Mb(),c.Mb(),c.Nb(8,"div",3,4),c.Nb(10,"pre"),c.lc(11,"            "),c.Lb(12,"code",5),c.lc(13,"\n        "),c.Mb(),c.Mb(),c.Mb()),2&t){const t=c.ec(9),e=c.Zb();c.Ab(3),c.cc("appTooltip",t),c.Ab(9),c.cc("highlight",e.takeCode)}}const f=[{path:"",component:(()=>{class t{constructor(t,e){this.exerciseService=t,this.translateService=e,this.task="take",this.takeCode="\nimport { interval } from 'rxjs';\nimport { take } from 'rxjs/operators';\n\nconst intervalCount = interval(1000);\nconst takeFive = intervalCount.pipe(take(5));\ntakeFive.subscribe(x => console.log(x));\n\n// Logs:\n// 0\n// 1\n// 2\n// 3\n// 4\n  ",this.currentLanguage=""}ngOnInit(){this.exerciseService.newExercise(new i),this.currentLanguage=this.translateService.currentLang,this.onLangChangeSubscription=this.translateService.onLangChange.subscribe({next:()=>{this.currentLanguage=this.translateService.currentLang}})}ngOnDestroy(){this.onLangChangeSubscription.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(c.Kb(o.a),c.Kb(s.d))},t.\u0275cmp=c.Eb({type:t,selectors:[["app-take"]],decls:5,vars:6,consts:[[4,"ngIf"],[1,"help",3,"appTooltip"],["href","https://rxjs.dev/api/operators/take","target","_blank"],[1,"tooltip","codeTooltip"],["tooltip",""],[3,"highlight"]],template:function(t,e){1&t&&(c.Nb(0,"h3"),c.lc(1),c.ac(2,"translate"),c.Mb(),c.kc(3,p,14,2,"div",0),c.kc(4,h,14,2,"div",0)),2&t&&(c.Ab(1),c.oc("",c.bc(2,4,"EXERCISES.EXERCISETITLE"),": ",e.task,""),c.Ab(2),c.cc("ngIf","de"===e.currentLanguage),c.Ab(1),c.cc("ngIf","en"===e.currentLanguage))},directives:[b.j,u.a,l.b],pipes:[s.c],styles:[""]}),t})()}];let g=(()=>{class t{}return t.\u0275mod=c.Ib({type:t}),t.\u0275inj=c.Hb({factory:function(e){return new(e||t)},imports:[[r.b.forChild(f)],r.b]}),t})(),d=(()=>{class t{}return t.\u0275mod=c.Ib({type:t}),t.\u0275inj=c.Hb({factory:function(e){return new(e||t)},imports:[[a.a,g]]}),t})()}}]);