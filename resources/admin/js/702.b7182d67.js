(self["webpackChunkhalo_admin"]=self["webpackChunkhalo_admin"]||[]).push([[702],{75935:function(t,e,n){var r=n(32640);t.exports=r((function(){if("function"==typeof ArrayBuffer){var t=new ArrayBuffer(8);Object.isExtensible(t)&&Object.defineProperty(t,"a",{value:8})}}))},53303:function(t,e,n){var r=n(15820),i=Math.floor,o=function(t,e){var n=t.length,l=i(n/2);return n<8?a(t,e):s(t,o(r(t,0,l),e),o(r(t,l),e),e)},a=function(t,e){var n,r,i=t.length,o=1;while(o<i){r=o,n=t[o];while(r&&e(t[r-1],n)>0)t[r]=t[--r];r!==o++&&(t[r]=n)}return t},s=function(t,e,n,r){var i=e.length,o=n.length,a=0,s=0;while(a<i||s<o)t[a+s]=a<i&&s<o?r(e[a],n[s])<=0?e[a++]:n[s++]:a<i?e[a++]:n[s++];return t};t.exports=o},98518:function(t,e,n){"use strict";var r=n(83933).f,i=n(84146),o=n(71951),a=n(62434),s=n(45934),l=n(31830),u=n(70344),f=n(1325),c=n(77383),d=n(45748).fastKey,m=n(48423),h=m.set,p=m.getterFor;t.exports={getConstructor:function(t,e,n,u){var f=t((function(t,r){s(t,m),h(t,{type:e,index:i(null),first:void 0,last:void 0,size:0}),c||(t.size=0),void 0!=r&&l(r,t[u],{that:t,AS_ENTRIES:n})})),m=f.prototype,v=p(e),g=function(t,e,n){var r,i,o=v(t),a=y(t,e);return a?a.value=n:(o.last=a={index:i=d(e,!0),key:e,value:n,previous:r=o.last,next:void 0,removed:!1},o.first||(o.first=a),r&&(r.next=a),c?o.size++:t.size++,"F"!==i&&(o.index[i]=a)),t},y=function(t,e){var n,r=v(t),i=d(e);if("F"!==i)return r.index[i];for(n=r.first;n;n=n.next)if(n.key==e)return n};return o(m,{clear:function(){var t=this,e=v(t),n=e.index,r=e.first;while(r)r.removed=!0,r.previous&&(r.previous=r.previous.next=void 0),delete n[r.index],r=r.next;e.first=e.last=void 0,c?e.size=0:t.size=0},delete:function(t){var e=this,n=v(e),r=y(e,t);if(r){var i=r.next,o=r.previous;delete n.index[r.index],r.removed=!0,o&&(o.next=i),i&&(i.previous=o),n.first==r&&(n.first=i),n.last==r&&(n.last=o),c?n.size--:e.size--}return!!r},forEach:function(t){var e,n=v(this),r=a(t,arguments.length>1?arguments[1]:void 0);while(e=e?e.next:n.first){r(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!y(this,t)}}),o(m,n?{get:function(t){var e=y(this,t);return e&&e.value},set:function(t,e){return g(this,0===t?0:t,e)}}:{add:function(t){return g(this,t=0===t?0:t,t)}}),c&&r(m,"size",{get:function(){return v(this).size}}),f},setStrong:function(t,e,n){var r=e+" Iterator",i=p(e),o=p(r);u(t,e,(function(t,e){h(this,{type:r,target:t,state:i(t),kind:e,last:void 0})}),(function(){var t=o(this),e=t.kind,n=t.last;while(n&&n.removed)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),f(e)}}},5398:function(t,e,n){"use strict";var r=n(79644),i=n(8432),o=n(33691),a=n(83037),s=n(41304),l=n(45748),u=n(31830),f=n(45934),c=n(95740),d=n(10445),m=n(32640),h=n(72269),p=n(29227),v=n(46912);t.exports=function(t,e,n){var g=-1!==t.indexOf("Map"),y=-1!==t.indexOf("Weak"),k=g?"set":"add",b=i[t],x=b&&b.prototype,w=b,C={},_=function(t){var e=o(x[t]);s(x,t,"add"==t?function(t){return e(this,0===t?0:t),this}:"delete"==t?function(t){return!(y&&!d(t))&&e(this,0===t?0:t)}:"get"==t?function(t){return y&&!d(t)?void 0:e(this,0===t?0:t)}:"has"==t?function(t){return!(y&&!d(t))&&e(this,0===t?0:t)}:function(t,n){return e(this,0===t?0:t,n),this})},T=a(t,!c(b)||!(y||x.forEach&&!m((function(){(new b).entries().next()}))));if(T)w=n.getConstructor(e,t,g,k),l.enable();else if(a(t,!0)){var L=new w,O=L[k](y?{}:-0,1)!=L,M=m((function(){L.has(1)})),S=h((function(t){new b(t)})),I=!y&&m((function(){var t=new b,e=5;while(e--)t[k](e,e);return!t.has(-0)}));S||(w=e((function(t,e){f(t,x);var n=v(new b,t,w);return void 0!=e&&u(e,n[k],{that:n,AS_ENTRIES:g}),n})),w.prototype=x,x.constructor=w),(M||I)&&(_("delete"),_("has"),g&&_("get")),(I||O)&&_(k),y&&x.clear&&delete x.clear}return C[t]=w,r({global:!0,forced:w!=b},C),p(w,t),y||n.setStrong(w,t,g),w}},33466:function(t,e,n){var r=n(33691),i=n(36325),o=n(43150),a=/"/g,s=r("".replace);t.exports=function(t,e,n,r){var l=o(i(t)),u="<"+e;return""!==n&&(u+=" "+n+'="'+s(o(r),a,"&quot;")+'"'),u+">"+l+"</"+e+">"}},52103:function(t,e,n){var r=n(82678),i=r.match(/firefox\/(\d+)/i);t.exports=!!i&&+i[1]},76044:function(t,e,n){var r=n(82678);t.exports=/MSIE|Trident/.test(r)},97551:function(t,e,n){var r=n(82678),i=r.match(/AppleWebKit\/(\d+)\./);t.exports=!!i&&+i[1]},77089:function(t,e,n){var r=n(32640);t.exports=!r((function(){return Object.isExtensible(Object.preventExtensions({}))}))},45748:function(t,e,n){var r=n(79644),i=n(33691),o=n(32418),a=n(10445),s=n(61746),l=n(83933).f,u=n(57961),f=n(54503),c=n(85236),d=n(24854),m=n(77089),h=!1,p=d("meta"),v=0,g=function(t){l(t,p,{value:{objectID:"O"+v++,weakData:{}}})},y=function(t,e){if(!a(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!s(t,p)){if(!c(t))return"F";if(!e)return"E";g(t)}return t[p].objectID},k=function(t,e){if(!s(t,p)){if(!c(t))return!0;if(!e)return!1;g(t)}return t[p].weakData},b=function(t){return m&&h&&c(t)&&!s(t,p)&&g(t),t},x=function(){w.enable=function(){},h=!0;var t=u.f,e=i([].splice),n={};n[p]=1,t(n).length&&(u.f=function(n){for(var r=t(n),i=0,o=r.length;i<o;i++)if(r[i]===p){e(r,i,1);break}return r},r({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:f.f}))},w=t.exports={enable:x,fastKey:y,getWeakData:k,onFreeze:b};o[p]=!0},85236:function(t,e,n){var r=n(32640),i=n(10445),o=n(95825),a=n(75935),s=Object.isExtensible,l=r((function(){s(1)}));t.exports=l||a?function(t){return!!i(t)&&((!a||"ArrayBuffer"!=o(t))&&(!s||s(t)))}:s},42873:function(t,e,n){var r=n(32640);t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},19003:function(t,e,n){"use strict";var r=n(79644),i=n(33691),o=n(77925),a=n(43207),s=n(71768),l=n(43150),u=n(32640),f=n(53303),c=n(29415),d=n(52103),m=n(76044),h=n(3718),p=n(97551),v=[],g=i(v.sort),y=i(v.push),k=u((function(){v.sort(void 0)})),b=u((function(){v.sort(null)})),x=c("sort"),w=!u((function(){if(h)return h<70;if(!(d&&d>3)){if(m)return!0;if(p)return p<603;var t,e,n,r,i="";for(t=65;t<76;t++){switch(e=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:n=3;break;case 68:case 71:n=4;break;default:n=2}for(r=0;r<47;r++)v.push({k:e+r,v:n})}for(v.sort((function(t,e){return e.v-t.v})),r=0;r<v.length;r++)e=v[r].k.charAt(0),i.charAt(i.length-1)!==e&&(i+=e);return"DGBEFHACIJK"!==i}})),C=k||!b||!x||!w,_=function(t){return function(e,n){return void 0===n?-1:void 0===e?1:void 0!==t?+t(e,n)||0:l(e)>l(n)?1:-1}};r({target:"Array",proto:!0,forced:C},{sort:function(t){void 0!==t&&o(t);var e=a(this);if(w)return void 0===t?g(e):g(e,t);var n,r,i=[],l=s(e);for(r=0;r<l;r++)r in e&&y(i,e[r]);f(i,_(t)),n=i.length,r=0;while(r<n)e[r]=i[r++];while(r<l)delete e[r++];return e}})},55792:function(t,e,n){"use strict";var r=n(79644),i=n(8432),o=n(64235),a=n(69343),s=n(71768),l=n(43207),u=n(9510),f=n(51903),c=n(43297),d=c("splice"),m=i.TypeError,h=Math.max,p=Math.min,v=9007199254740991,g="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!d},{splice:function(t,e){var n,r,i,c,d,y,k=l(this),b=s(k),x=o(t,b),w=arguments.length;if(0===w?n=r=0:1===w?(n=0,r=b-x):(n=w-2,r=p(h(a(e),0),b-x)),b+n-r>v)throw m(g);for(i=u(k,r),c=0;c<r;c++)d=x+c,d in k&&f(i,c,k[d]);if(i.length=r,n<r){for(c=x;c<b-r;c++)d=c+r,y=c+n,d in k?k[y]=k[d]:delete k[y];for(c=b;c>b-r+n;c--)delete k[c-1]}else if(n>r)for(c=b-r;c>x;c--)d=c+r-1,y=c+n-1,d in k?k[y]=k[d]:delete k[y];for(c=0;c<n;c++)k[c+x]=arguments[c+2];return k.length=b-r+n,i}})},31347:function(t,e,n){"use strict";var r=n(5398),i=n(98518);r("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),i)},68576:function(t,e,n){"use strict";var r=n(79644),i=n(33466),o=n(42873);r({target:"String",proto:!0,forced:o("link")},{link:function(t){return i(this,"a","href",t)}})},71702:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return T}});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("page-view",{scopedSlots:t._u([{key:"extra",fn:function(){return[n("a-space",[n("a-button",{attrs:{type:"primary"},on:{click:function(e){t.form.visible=!0}}},[t._v("添加")])],1)]},proxy:!0}])},[n("LinkCreateModal",{attrs:{form_:t.form,teams:t.computedTeams},on:{"update:form_":function(e){t.form=e},close:function(e){t.form.visible=!1,t.form.model={}},createOrUpdateLink:t.handleCreateOrUpdateLink,saved:t.handleSavedCallback}}),n("a-row",{attrs:{gutter:12}},[n("a-col",{staticClass:"pb-3",attrs:{span:24}},[0===t.linkTeam.length?n("a-empty"):n("draggable",t._b({staticClass:"list-group",attrs:{list:t.linkTeam,group:"pull: 'false', put: false",handle:".mover"},on:{update:t.handleUpdateInBatch}},"draggable",t.dragOptions,!1),[n("transition-group",{attrs:{type:"transition"}},t._l(t.linkTeam,(function(e){return n("a-card",{key:e.team,staticStyle:{"margin-bottom":"10px"},attrs:{bodyStyle:{padding:"16px"}},scopedSlots:t._u([{key:"title",fn:function(){return[t._v(" "+t._s(e.team?e.team:"默认分组")+" "),n("a-icon",{staticClass:"cursor-move mover ml-1 list-group-item",attrs:{type:"bars"}})]},proxy:!0}],null,!0)},[n("draggable",t._b({attrs:{list:e.links,group:"link"},on:{add:function(n){t.modal.lastAdd=e},remove:function(n){return t.handleRemove(n,e)},update:t.handleUpdateInBatch}},"draggable",t.dragOptions,!1),[n("transition-group",{staticClass:"grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",attrs:{type:"transition"}},t._l(e.links,(function(e){return n("div",{key:e.name,staticClass:"cursor-move relative flex items-center space-x-3 rounded border border-solid border-gray-300 bg-white px-2 py-2 shadow-sm hover:border-gray-400 hover:shadow"},[e.logo?n("div",{staticClass:"flex-shrink-0"},[n("a-avatar",{staticClass:"h-12 w-12 rounded-full",attrs:{src:e.logo,size:"large"}})],1):t._e(),n("div",{staticClass:"flex flex-col gap-y-1.5 overflow-hidden"},[n("p",{staticClass:"mb-0 truncate text-sm font-medium text-gray-900 truncate"},[t._v(" "+t._s(e.name)+" ")]),n("p",{staticClass:"mb-0 truncate text-sm text-gray-500"},[t._v(t._s(e.description))])]),n("div",{staticClass:"absolute top-2 right-2 cursor-pointer hover:text-blue-600"},[n("a-dropdown",{scopedSlots:t._u([{key:"overlay",fn:function(){return[n("a-menu",[n("a-menu-item",{on:{click:function(n){return t.handleEdit(e)}}},[t._v(" 编辑")]),n("a-menu-item",{on:{click:function(n){return t.handleDeleteLink(e.id)}}},[t._v(" 删除")])],1)]},proxy:!0}],null,!0)},[n("div",{staticStyle:{width:"30px",display:"flex","justify-content":"flex-end"}},[n("a-icon",{attrs:{type:"more"}})],1)])],1)])})),0)],1)],1)})),1)],1)],1)],1),n("div",{staticStyle:{position:"fixed",bottom:"30px",right:"30px"}},[n("a-button",{attrs:{icon:"setting",shape:"circle",size:"large",type:"primary"},on:{click:function(e){t.optionsModal.visible=!0}}})],1),n("a-modal",{attrs:{afterClose:function(){return t.optionsModal.visible=!1},title:"页面设置"},model:{value:t.optionsModal.visible,callback:function(e){t.$set(t.optionsModal,"visible",e)},expression:"optionsModal.visible"}},[n("template",{slot:"footer"},[n("a-button",{key:"submit",attrs:{type:"primary"},on:{click:function(e){return t.handleSaveOptions()}}},[t._v("保存")])],1),n("a-form",{attrs:{layout:"vertical"}},[n("a-form-item",{attrs:{help:"* 需要主题进行适配",label:"页面标题："}},[n("a-input",{model:{value:t.optionsModal.data.links_title,callback:function(e){t.$set(t.optionsModal.data,"links_title",e)},expression:"optionsModal.data.links_title"}})],1)],1)],2)],1)},i=[],o=(n(37417),n(43126),n(31875),n(96513),n(29888),n(45107),n(87591),n(79311));function a(t,e){var n="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=(0,o.Z)(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return s=t.done,t},e:function(t){l=!0,a=t},f:function(){try{s||null==n["return"]||n["return"]()}finally{if(l)throw a}}}}var s=n(22373),l=(n(90195),n(68576),n(55792),n(31347),n(19003),n(86434),n(96667)),u=n(98906),f=n(77513),c=n.n(f),d=n(94370),m=n(36591),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-modal",{attrs:{visible:t.form.visible,title:t.title,closable:!1,maskClosable:!1},scopedSlots:t._u([{key:"footer",fn:function(){return[n("ReactiveButton",{attrs:{errored:t.form.errored,loading:t.form.saving,erroredText:"保存失败",loadedText:"保存成功",text:"保存",type:"primary"},on:{callback:function(e){return t.$emit("saved")},click:t.handleCreateOrUpdateLink}}),n("a-button",{on:{click:function(e){return t.$emit("close")}}},[t._v("取消")])]},proxy:!0}])},[n("a-form-model",{ref:"linkForm",attrs:{model:t.form.model,rules:t.rules,layout:"horizontal"}},[n("a-form-model-item",{attrs:{label:"网站名称：",prop:"name"}},[n("a-input",{model:{value:t.form.model.name,callback:function(e){t.$set(t.form.model,"name",e)},expression:"form.model.name"}})],1),n("a-form-model-item",{attrs:{help:"* 需要加上 http://",label:"网站地址：",prop:"url"}},[n("a-input",{model:{value:t.form.model.url,callback:function(e){t.$set(t.form.model,"url",e)},expression:"form.model.url"}})],1),n("a-form-model-item",{attrs:{label:"Logo：",prop:"logo"}},[n("a-input",{model:{value:t.form.model.logo,callback:function(e){t.$set(t.form.model,"logo",e)},expression:"form.model.logo"}})],1),n("a-form-model-item",{attrs:{label:"分组：",prop:"team"}},[n("a-auto-complete",{attrs:{dataSource:t.teams,allowClear:""},model:{value:t.form.model.team,callback:function(e){t.$set(t.form.model,"team",e)},expression:"form.model.team"}})],1),n("a-form-model-item",{attrs:{label:"描述：",prop:"description"}},[n("a-input",{attrs:{autoSize:{minRows:5},type:"textarea"},model:{value:t.form.model.description,callback:function(e){t.$set(t.form.model,"description",e)},expression:"form.model.description"}})],1)],1)],1)},p=[],v={name:"LinkCreateModal",props:{form_:Object,teams:Array},data:function(){return{rules:{name:[{required:!0,message:"* 友情链接名称不能为空",trigger:["change"]},{max:255,message:"* 友情链接名称的字符长度不能超过 255",trigger:["change"]}],url:[{required:!0,message:"* 友情链接地址不能为空",trigger:["change"]},{max:1023,message:"* 友情链接地址的字符长度不能超过 1023",trigger:["change"]},{type:"url",message:"* 友情链接地址格式有误",trigger:["change"]}],logo:[{max:1023,message:"* 友情链接 Logo 的字符长度不能超过 1023",trigger:["change"]}],description:[{max:255,message:"* 友情链接描述的字符长度不能超过 255",trigger:["change"]}],team:[{max:255,message:"* 友情链接分组的字符长度 255",trigger:["change"]}]}}},computed:{form:{get:function(){return this.form_},set:function(t){this.$emit("update:form",t)}},title:function(){return this.isUpdateMode?"修改友情链接":"添加友情链接"},isUpdateMode:function(){return!!this.form.model.id},dragOptions:function(){return{animation:200,disabled:!1,ghostClass:"ghost"}}},methods:{handleCreateOrUpdateLink:function(){var t=this;t.$refs.linkForm.validate((function(e){e&&t.$emit("createOrUpdateLink")}))}}},g=v,y=n(70739),k=(0,y.Z)(g,h,p,!1,null,"146d196c",null),b=k.exports,x=n(90351),w={mixins:[d.jB,d.KT],components:{LinkCreateModal:b,PageView:l.B4,draggable:c()},data:function(){return{modal:{toDelete:[],visible:!1,newIndex:null,lastAdd:null,lastRemove:null},table:{data:[],loading:!1},form:{visible:!1,model:{},saving:!1,errored:!1},optionsModal:{visible:!1,data:{}},teams:[],linkTeam:[]}},computed:{isUpdateMode:function(){return!!this.form.model.id},computedTeams:function(){return this.teams.filter((function(t){return""!==t}))},dragOptions:function(){return{animation:200,disabled:!1,ghostClass:"ghost"}}},created:function(){this.handleListLinks(),this.handleListLinkTeams(),this.handleListOptions()},methods:(0,s.Z)((0,s.Z)({},(0,u.nv)(["refreshOptionsCache"])),{},{getPriority:function(){var t,e=[],n=a(this.linkTeam);try{for(n.s();!(t=n.n()).done;){var r,i=t.value,o=a(i.links);try{for(o.s();!(r=o.n()).done;){var s=r.value;s.team=i.team,e.push(s)}}catch(d){o.e(d)}finally{o.f()}}}catch(d){n.e(d)}finally{n.f()}for(var l=e.length,u=0,f=e;u<f.length;u++){var c=f[u];c.priority=l--}return e},handleUpdateInBatch:function(){var t=this,e=this.getPriority();m.Z.link.updateInBatch(e).finally((function(){t.table.loading=!1}))},removeConfirm:function(){var t=this;x.Z.confirm({title:"确定移出分组吗",content:"移出最后一个链接后，该分组将消失。确定要移出分组吗？",onCancel:function(){t.recoverTeam()},onOk:function(){t.removeTeam()}})},removeTeam:function(){this.linkTeam.splice(this.linkTeam.indexOf(this.modal.lastRemove),1),this.modal.newIndex=null},recoverTeam:function(){var t=this.modal.lastAdd.links.splice(this.modal.newIndex,1);this.modal.lastRemove.links.push(t[0]),this.modal.newIndex=null},handleRemove:function(t,e){this.modal.lastRemove=e,0===e.links.length&&(this.modal.newIndex=t.newIndex,this.removeConfirm()),this.handleUpdateInBatch()},splitIntoTeam:function(t){var e,n=new Map,r=a(t);try{for(r.s();!(e=r.n()).done;){var i=e.value;if(n.has(i.team)){var o=n.get(i.team);o.links.push(i),o.priority<i.priority&&(o.priority=i.priority)}else{var s={team:i.team,priority:i.priority,links:[i]};n.set(i.team,s)}}}catch(l){r.e(l)}finally{r.f()}this.linkTeam=Array.from(n.values()).sort((function(t,e){return e.priority-t.priority}))},handleListLinks:function(){var t=this;this.table.loading=!0,m.Z.link.list().then((function(e){t.table.data=e.data,t.table.data.sort((function(t,e){return e.priority-t.priority})),t.splitIntoTeam(t.table.data)})).finally((function(){t.table.loading=!1}))},handleListLinkTeams:function(){var t=this;m.Z.link.listTeams().then((function(e){t.teams=e.data}))},handleListOptions:function(){var t=this;m.Z.option.listAsMapViewByKeys(["links_title"]).then((function(e){t.optionsModal.data=e.data}))},handleEdit:function(t){this.form.visible=!0,this.form.model=Object.assign({},t)},handleDeleteLink:function(t){var e=this;m.Z.link["delete"](t).then((function(){e.$message.success("删除成功！")})).finally((function(){e.handleListLinks(),e.handleListLinkTeams()}))},handleCreateOrUpdateLink:function(){var t=this;if(this.form.saving=!0,this.isUpdateMode){var e,n,r,i,o=a(this.linkTeam);try{for(o.s();!(i=o.n()).done;){var s=i.value;if(e&&n)break;if(s.team===this.form.model.team){var l,u=a(s.links);try{for(u.s();!(l=u.n()).done;){var f=l.value;if(f.id===this.form.model.id)return void m.Z.link.update(this.form.model.id,this.form.model).catch((function(){t.form.errored=!0})).finally((function(){setTimeout((function(){t.form.saving=!1}),400)}))}}catch(h){u.e(h)}finally{u.f()}e=s}else for(var c=0;c<s.links.length;c++)if(s.links[c].id===this.form.model.id){n=s,r=c;break}}}catch(h){o.e(h)}finally{o.f()}e||(e={links:[],priority:-1,team:this.form.model.team},this.linkTeam.push(e)),e.links.push(this.form.model),n.links.splice(r,1);var d=this.getPriority();m.Z.link.updateInBatch(d).catch((function(){t.form.errored=!0})).finally((function(){setTimeout((function(){t.form.saving=!1}),400)}))}else m.Z.link.create(this.form.model).catch((function(){t.form.errored=!0})).finally((function(){setTimeout((function(){t.form.saving=!1}),400)}))},handleSavedCallback:function(){this.form.errored?this.form.errored=!1:(this.form.model={},this.handleListLinks(),this.handleListLinkTeams(),this.form.visible=!1)},handleSaveOptions:function(){var t=this;m.Z.option.saveMapView(this.optionsModal.data).then((function(){t.$message.success("保存成功！"),t.optionsModal.visible=!1})).finally((function(){t.handleListOptions(),t.refreshOptionsCache()}))}})},C=w,_=(0,y.Z)(C,r,i,!1,null,null,null),T=_.exports}}]);