(function(e){function t(t){for(var a,i,o=t[0],c=t[1],u=t[2],d=0,m=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&m.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);l&&l(t);while(m.length)m.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},s=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("85ec"),r=n.n(a);r.a},"039a":function(e,t,n){"use strict";var a=n("7174"),r=n.n(a);r.a},"061b":function(e,t,n){"use strict";var a=n("dc1a"),r=n.n(a);r.a},1:function(e,t){},2:function(e,t){},"29b7":function(e,t,n){},3:function(e,t){},"3c19":function(e,t,n){},4:function(e,t){},4678:function(e,t,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=s(e);return n(t)}function s(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=s,e.exports=r,r.id="4678"},"4d51":function(e,t,n){},5:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header"),n("router-view")],1)},s=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[!0===e.loggedIn?n("button",{attrs:{id:"logoutBtn"},on:{click:e.logout}},[e._v(" LOGOUT ")]):e._e(),n("h1",{attrs:{id:"title"}},[e._v("my EVENT LIST")])])},o=[],c=n("2f62"),u={name:"Header",computed:Object(c["b"])(["loggedIn"]),methods:{logout:function(){this.$store.dispatch("logout"),this.$store.state.loggedIn||this.$router.push("/")}}},l=u,d=(n("f192"),n("2877")),m=Object(d["a"])(l,i,o,!1,null,"5b32e3a5",null),v=m.exports,f={name:"App",components:{Header:v},computed:Object(c["b"])(["loggedIn"])},p=f,b=(n("034f"),Object(d["a"])(p,r,s,!1,null,null,null)),g=b.exports,h=(n("99af"),n("d81d"),n("a434"),n("2909")),j=(n("96cf"),n("1da1")),w=n("bc3a"),E=n.n(w),N=n("0e44");a["a"].use(c["a"]);var _="http://localhost:3000",y=n("279c"),x=new c["a"].Store({plugins:[Object(N["a"])({storage:window.sessionStorage})],state:{loggedIn:!1,username:null,userId:null,firstName:null,lastName:null,eventList:[]},getters:{getLoggedIn:function(e){return e.loggedIn},getEventList:function(e){return e.eventList}},mutations:{setLoggedIn:function(e,t){e.loggedIn=t},setUsername:function(e,t){e.username=t},setUserId:function(e,t){e.userId=t},setFirstName:function(e,t){e.firstName=t},setLastName:function(e,t){e.lastName=t},setEventList:function(e,t){e.eventList=t}},actions:{login:function(e,t){return Object(j["a"])(regeneratorRuntime.mark((function n(){var a,r,s,i,o,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,n.prev=1,r=t.username,s=t.password,n.next=6,E.a.get("".concat(_,"/api/users/").concat(r,"/"));case 6:return i=n.sent,n.next=9,i.data[0];case 9:return o=n.sent,c=y.compareSync(s,o.password),c?(a("setLoggedIn",!0),a("setUsername",o.username),a("setUserId",o.user_id),a("setFirstName",o.first_name),a("setLastName",o.last_name)):console.error("Password incorrect"),n.abrupt("return",c);case 15:n.prev=15,n.t0=n["catch"](1),console.error("Error logging in",n.t0);case 18:case"end":return n.stop()}}),n,null,[[1,15]])})))()},logout:function(e){var t=e.commit;t("setLoggedIn",!1),t("setUsername",null),t("setUserId",null),t("setFirstName",null),t("setLastName",null)},register:function(e,t){return Object(j["a"])(regeneratorRuntime.mark((function n(){var a,r,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,n.prev=1,r=t.newUser,n.next=5,E.a.post("".concat(_,"/api/users/"),r);case 5:return s=n.sent,200===s.data.status&&a("setLoggedIn",!0),n.abrupt("return",s.data.status);case 10:return n.prev=10,n.t0=n["catch"](1),console.error("Error creating new user",n.t0),n.abrupt("return",n.t0.response.status);case 14:case"end":return n.stop()}}),n,null,[[1,10]])})))()},retrieveEvents:function(e){var t=this;return Object(j["a"])(regeneratorRuntime.mark((function n(){var a,r,s,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(a=e.commit,n.prev=1,null===t.state.userId){n.next=11;break}return r=t.state.userId,n.next=6,E.a.get("".concat(_,"/api/events/").concat(r,"/"));case 6:return s=n.sent,n.next=9,s.data.sort((function(e,t){var n=new Date(e.date),a=new Date(t.date);return n===a?e.time-t.time:n-a}));case 9:i=n.sent,a("setEventList",i);case 11:n.next=16;break;case 13:n.prev=13,n.t0=n["catch"](1),console.error("Error retrieve event list",n.t0);case 16:case"end":return n.stop()}}),n,null,[[1,13]])})))()},addEvent:function(e,t){var n=e.commit,a=[].concat(Object(h["a"])(this.state.eventList),[t]);return n("setEventList",a),a},removeEvent:function(e,t){var n=e.commit,a=Object(h["a"])(this.state.eventList);return a.map((function(e,n){e.event_id!==t||a.splice(n,1)})),n("setEventList",a),a}}}),k=n("8c4f"),L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[n("h2",[e._v("Welcome")]),n("div",{staticClass:"loginFormContainer"},[n("form",{staticClass:"loginForm",on:{submit:function(t){return t.preventDefault(),e.login(t)}}},[n("label",{attrs:{for:"username"}},[e._v("Username:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{title:"Username must be unique",type:"text",id:"username",name:"username"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),n("br"),n("label",{attrs:{for:"password"}},[e._v("Password:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",id:"password",name:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),n("br"),n("input",{staticClass:"btn",attrs:{id:"loginBtn",type:"submit",value:"LOGIN"}})])]),!0===e.incorrectLoginCredentials?n("p",{staticClass:"loginError"},[e._v(" Username or password is incorrect. Please try again. ")]):e._e(),n("router-link",{staticClass:"registerLink",attrs:{to:"/register"}},[e._v("Register")])],1)},O=[],C={name:"Login",data:function(){return{username:"",password:"",incorrectLoginCredentials:!1}},methods:{login:function(){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function t(){var n,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.username,a=e.password,t.next=4,e.$store.dispatch("login",{username:n,password:a});case 4:r=t.sent,r?e.$router.push("/events"):e.incorrectLoginCredentials=!0;case 6:case"end":return t.stop()}}),t)})))()}}},D=C,I=(n("039a"),Object(d["a"])(D,L,O,!1,null,null,null)),$=I.exports,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"register"},[n("h2",[e._v("Create an account")]),n("form",{staticClass:"register-form",on:{submit:function(t){return t.preventDefault(),e.register(t)}}},[n("label",{attrs:{for:"firstName"}},[e._v("First name:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.firstName,expression:"firstName"}],attrs:{type:"text",id:"firstName",name:"firstName"},domProps:{value:e.firstName},on:{input:function(t){t.target.composing||(e.firstName=t.target.value)}}}),n("br"),n("label",{attrs:{for:"lastName"}},[e._v("Last name:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.lastName,expression:"lastName"}],attrs:{type:"text",id:"lastName",name:"username"},domProps:{value:e.lastName},on:{input:function(t){t.target.composing||(e.lastName=t.target.value)}}}),n("br"),n("label",{attrs:{for:"username"}},[e._v("Username:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",id:"username",name:"username"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),n("br"),n("label",{attrs:{for:"password"}},[e._v("Password:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",id:"password",name:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),n("br"),n("br"),n("input",{staticClass:"btn",attrs:{type:"submit",value:"REGISTER"}})]),n("br"),!0===e.userNameTaken?n("p",{staticClass:"errorMsg userNameTaken"},[e._v(" Username taken. Please select a different username. ")]):e._e(),!0===e.registerError?n("p",{staticClass:"errorMsg registerError"},[e._v(" Error registering new user. Please try again. ")]):e._e(),n("router-link",{attrs:{to:"/"}},[e._v("Login")])],1)},R=[],T={name:"Register",data:function(){return{firstName:"",lastName:"",username:"",password:"",userNameTaken:!1,registerError:!1}},methods:{register:function(){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function t(){var n,a,r,s,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={firstName:e.firstName,lastName:e.lastName,username:e.username,password:e.password},t.next=3,e.$store.dispatch("register",{newUser:n});case 3:if(a=t.sent,409!==a){t.next=9;break}e.registerError=!1,e.userNameTaken=!0,t.next=22;break;case 9:if(200!==a){t.next=20;break}return e.userNameTaken=!1,e.registerError=!1,r=n.username,s=n.password,t.next=16,e.$store.dispatch("login",{username:r,password:s});case 16:i=t.sent,i&&e.$router.push("/events"),t.next=22;break;case 20:e.userNameTaken=!1,e.registerError=!0;case 22:case"end":return t.stop()}}),t)})))()}}},z=T,U=(n("061b"),Object(d["a"])(z,P,R,!1,null,"fefc5430",null)),M=U.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"eventList"},[n("NewEvent"),n("div",{staticClass:"upcomingEvents"},[n("h1",{attrs:{id:"eventListHeading"}},[e._v("UPCOMING EVENTS...")]),0===e.eventList.length?n("div",[n("p",[e._v("There are currently no events in your EVENT LIST.")]),n("p",[e._v("Add a new event reminder to get started!")])]):e._e(),e._l(e.eventList,(function(e){return n("EventCard",{key:e.event_id,attrs:{event:e}})}))],2)],1)},F=[],V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"newEvent"},[n("h1",{attrs:{id:"newEventHeading"}},[e._v("ADD AN EVENT")]),n("form",{staticClass:"event-form",on:{submit:function(t){return t.preventDefault(),e.addEvent(t)}}},[n("label",{attrs:{for:"eventName"}},[e._v("Event name:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.eventName,expression:"eventName"}],attrs:{type:"text",id:"eventName",name:"eventName"},domProps:{value:e.eventName},on:{input:function(t){t.target.composing||(e.eventName=t.target.value)}}}),n("br"),n("label",{attrs:{for:"date"}},[e._v("Date:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.date,expression:"date"}],attrs:{type:"date",id:"date",name:"date"},domProps:{value:e.date},on:{input:function(t){t.target.composing||(e.date=t.target.value)}}}),n("br"),n("label",{attrs:{for:"time"}},[e._v("Time:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.time,expression:"time"}],attrs:{type:"time",id:"time",name:"time"},domProps:{value:e.time},on:{input:function(t){t.target.composing||(e.time=t.target.value)}}}),n("br"),n("label",{attrs:{for:"location"}},[e._v("Location:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.location,expression:"location"}],attrs:{type:"text",id:"location",name:"location"},domProps:{value:e.location},on:{input:function(t){t.target.composing||(e.location=t.target.value)}}}),n("br"),n("br"),n("input",{staticClass:"btn",attrs:{id:"newEventBtn",type:"submit",value:"CREATE REMINDER"}})])])},Y=[],A={name:"NewEvent",data:function(){return{eventName:null,date:null,time:null,location:null}},methods:{addEvent:function(e){var t=this,n={eventName:this.eventName,date:this.date,time:this.time,location:this.location},a=this.$store.state.userId;E.a.post("".concat("http://localhost:3000","/api/events/").concat(a,"/"),n).then((function(e){return t.$store.dispatch("retrieveEvents",a),e})).then((function(n){200===n.status&&t.resetForm(e)})).catch((function(e){console.error("Error adding new event",e)}))},resetForm:function(e){return e.target.reset()}}},H=A,G=(n("9d68"),Object(d["a"])(H,V,Y,!1,null,"415d5f9f",null)),q=G.exports,B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"eventCard"},[n("h3",{attrs:{id:"date"}},[e._v(e._s(e.displayDate))]),n("h3",{attrs:{id:"time"}},[e._v(e._s(e.displayTime))]),n("h2",{attrs:{id:"eventName"}},[e._v(e._s(e.event.event_name))]),n("h3",{attrs:{id:"location"}},[e._v(e._s(e.event.location))]),n("button",{staticClass:"btn",on:{click:e.toggleEditView}},[!1===e.editting?n("span",[e._v("Edit")]):!0===e.editting?n("span",[e._v("Editting")]):e._e()]),n("button",{staticClass:"btn",on:{click:e.updateAfterDelete}},[e._v("Remove")]),!0===e.editting?n("UpdatedEvent",{attrs:{editting:e.editting,event:e.event,calendarDate:e.calendarDate},on:{"update:editting":e.closeEditView}}):e._e()],1)},J=[],W=(n("fb6a"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{staticClass:"updatedEvent",attrs:{name:"modal"}},[!0===e.editting?n("div",[n("div",{staticClass:"overlay"},[n("div",{staticClass:"modal"},[n("h2",[e._v("Edit Event Details")]),n("form",{on:{submit:function(t){return t.preventDefault(),e.updateEventList(t)}}},[n("label",{attrs:{for:"eventName"}},[e._v("Event name:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.eventName,expression:"eventName"}],attrs:{type:"text",id:"eventName",name:"eventName"},domProps:{value:e.eventName},on:{input:function(t){t.target.composing||(e.eventName=t.target.value)}}}),n("br"),n("label",{attrs:{for:"date"}},[e._v("Date:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.date,expression:"date"}],attrs:{type:"date",id:"date",name:"date"},domProps:{value:e.date},on:{input:function(t){t.target.composing||(e.date=t.target.value)}}}),n("br"),n("label",{attrs:{for:"time"}},[e._v("Time:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.time,expression:"time"}],attrs:{type:"time",id:"time",name:"time"},domProps:{value:e.time},on:{input:function(t){t.target.composing||(e.time=t.target.value)}}}),n("br"),n("label",{attrs:{for:"location"}},[e._v("Location:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.location,expression:"location"}],attrs:{type:"text",id:"location",name:"location"},domProps:{value:e.location},on:{input:function(t){t.target.composing||(e.location=t.target.value)}}}),n("br"),n("br"),n("input",{staticClass:"btn",attrs:{type:"submit",value:"Save"}}),n("input",{staticClass:"btn",attrs:{type:"button",value:"Cancel"},on:{click:e.cancelEdit}})])])])]):e._e()])}),K=[],Q={name:"UpdatedEvent",props:["event","editting","calendarDate"],data:function(){return{eventName:this.event.event_name,date:this.calendarDate,time:this.event.time,location:this.event.location}},methods:{updateDatabase:function(){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function t(){var n,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,n={eventName:e.eventName,date:e.date,time:e.time,location:e.location},a=e.event.event_id,t.next=5,E.a.put("".concat("http://localhost:3000","/api/events/").concat(a,"/"),n);case 5:return r=t.sent,t.abrupt("return",r);case 9:t.prev=9,t.t0=t["catch"](0),console.error("Error adding new event",t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()},updateEventList:function(){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:try{n=e.$store.state.userId,e.updateDatabase().then((function(){e.$emit("update:editting",!1),e.$store.dispatch("retrieveEvents",n)}))}catch(a){console.error("Error refreshing page",a)}case 1:case"end":return t.stop()}}),t)})))()},cancelEdit:function(){this.$emit("update:editting",!1)}}},X=Q,Z=(n("5af8"),Object(d["a"])(X,W,K,!1,null,"ac24cc66",null)),ee=Z.exports,te=n("c1df"),ne=n.n(te),ae={name:"EventCard",components:{UpdatedEvent:ee},props:["event"],data:function(){return{editting:!1,calendarDate:"",displayDate:"",displayTime:""}},beforeMount:function(){this.calendarDate=ne()(this.event.date).format("YYYY-MM-DD"),this.displayDate=ne()(this.event.date).format("ddd MMM DD, YYYY");var e=this.event.date.slice(0,11),t=this.event.time.slice(0,5);this.displayTime=ne()(e+t).format("LT")},methods:{toggleEditView:function(){this.editting=!this.editting},closeEditView:function(e){this.editting=e},deleteEvent:function(){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.event.event_id,t.next=3,E.a.delete("".concat("http://localhost:3000","/api/events/").concat(n,"/"));case 3:return a=t.sent,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})))()},updateAfterDelete:function(){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.$store.state.userId,e.deleteEvent().then((function(){e.$store.dispatch("retrieveEvents",n)}));case 2:case"end":return t.stop()}}),t)})))()}}},re=ae,se=(n("8fad"),Object(d["a"])(re,B,J,!1,null,"79234007",null)),ie=se.exports,oe={name:"EventList",components:{NewEvent:q,EventCard:ie},computed:Object(c["b"])(["eventList"]),methods:{retrieveEvents:function(){var e=this;this.$store.dispatch("retrieveEvents").then((function(){e.eventList=e.$store.state.eventList}))}},beforeCreate:function(){this.$store.state.loggedIn&&null!==this.$store.state.loggedIn||this.$router.push("/")},beforeMount:function(){this.retrieveEvents()}},ce=oe,ue=(n("fd1f"),Object(d["a"])(ce,S,F,!1,null,"4431a491",null)),le=ue.exports;a["a"].use(k["a"]);var de=new k["a"]({routes:[{path:"/",component:$},{path:"/login",component:$},{path:"/register",component:M},{path:"/events",component:le}],mode:"history"});a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(g)},store:x,router:de}).$mount("#app")},"5af8":function(e,t,n){"use strict";var a=n("29b7"),r=n.n(a);r.a},6:function(e,t){},7:function(e,t){},7174:function(e,t,n){},8:function(e,t){},"85ec":function(e,t,n){},"8fad":function(e,t,n){"use strict";var a=n("cd7c"),r=n.n(a);r.a},9:function(e,t){},"9d68":function(e,t,n){"use strict";var a=n("4d51"),r=n.n(a);r.a},cd7c:function(e,t,n){},dc1a:function(e,t,n){},e804:function(e,t,n){},f192:function(e,t,n){"use strict";var a=n("3c19"),r=n.n(a);r.a},fd1f:function(e,t,n){"use strict";var a=n("e804"),r=n.n(a);r.a}});
//# sourceMappingURL=app.90cd1b08.js.map