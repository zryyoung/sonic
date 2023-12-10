"use strict";(self["webpackChunkhalo_admin"]=self["webpackChunkhalo_admin"]||[]).push([[756],{58137:function(e,t,n){n.d(t,{Z:function(){return m}});var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-modal",{attrs:{destroyOnClose:"",title:"评论回复"},on:{close:e.onClose},scopedSlots:e._u([{key:"footer",fn:function(){return[n("ReactiveButton",{attrs:{errored:e.submitErrored,loading:e.submitting,erroredText:"回复失败",loadedText:"回复成功",text:"回复",type:"primary"},on:{callback:e.handleSubmitCallback,click:e.handleSubmit}})]},proxy:!0}]),model:{value:e.modalVisible,callback:function(t){e.modalVisible=t},expression:"modalVisible"}},[n("a-form-model",{ref:"replyCommentForm",attrs:{model:e.model,rules:e.rules,layout:"vertical"}},[n("a-form-model-item",{attrs:{prop:"content"}},[n("a-input",{ref:"contentInput",attrs:{autoSize:{minRows:8},type:"textarea"},model:{value:e.model.content,callback:function(t){e.$set(e.model,"content",t)},expression:"model.content"}})],1)],1)],1)},r=[],o=n(54288),i=(n(70315),n(12566),n(36591)),l={name:"CommentReplyModal",props:{visible:{type:Boolean,default:!0},comment:{type:Object,default:null},targetId:{type:Number,default:0},target:{type:String,required:!0,validator:function(e){return-1!==["post","sheet","journal"].indexOf(e)}}},data:function(){return{model:{},submitting:!1,submitErrored:!1,rules:{content:[{required:!0,message:"* 内容不能为空",trigger:["change"]}]}}},computed:{modalVisible:{get:function(){return this.visible},set:function(e){this.$emit("update:visible",e)}}},watch:{modalVisible:function(e){var t=this;e&&this.$nextTick((function(){t.$refs.contentInput.focus()}))}},methods:{handleSubmit:function(){var e=this;e.$refs.replyCommentForm.validate(function(){var t=(0,o.Z)(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!n){t.next=15;break}return t.prev=1,e.submitting=!0,e.model.postId=e.targetId,e.comment&&(e.model.parentId=e.comment.id),t.next=7,i.Z.comment.create("".concat(e.target,"s"),e.model);case 7:t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](1),e.submitErrored=!0;case 12:return t.prev=12,setTimeout((function(){e.submitting=!1}),400),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,9,12,15]])})));return function(e){return t.apply(this,arguments)}}())},handleSubmitCallback:function(){this.submitErrored?this.submitErrored=!1:(this.model={},this.modalVisible=!1,this.$emit("succeed"))},onClose:function(){this.model={},this.modalVisible=!1}}},s=l,c=n(70739),u=(0,c.Z)(s,a,r,!1,null,null,null),m=u.exports},2756:function(e,t,n){n.d(t,{Z:function(){return b}});var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-modal",{attrs:{afterClose:e.onClose,title:e.title,width:1024,destroyOnClose:""},scopedSlots:e._u([{key:"footer",fn:function(){return[e._t("extraFooter"),n("a-button",{attrs:{type:"primary"},on:{click:function(t){e.replyModalVisible=!0}}},[e._v("创建评论")]),n("a-button",{on:{click:function(t){e.modalVisible=!1}}},[e._v("关闭")])]},proxy:!0}],null,!0),model:{value:e.modalVisible,callback:function(t){e.modalVisible=t},expression:"modalVisible"}},[n("a-list",{attrs:{loading:e.list.loading,"item-layout":"vertical"}},e._l(e.list.data,(function(t,a){return n("TargetCommentTreeNode",{key:a,attrs:{comment:t,target:e.target,"target-id":e.targetId},on:{reload:e.handleGetComments}})})),1),n("div",{staticClass:"page-wrapper"},[n("a-pagination",{staticClass:"pagination",attrs:{current:e.pagination.page,defaultPageSize:e.pagination.size,pageSizeOptions:["10","20","50","100"],total:e.pagination.total,showLessItems:"",showSizeChanger:""},on:{change:e.handlePageChange,showSizeChange:e.handlePageSizeChange}})],1),n("CommentReplyModal",{attrs:{target:e.target,"target-id":e.targetId,visible:e.replyModalVisible},on:{"update:visible":function(t){e.replyModalVisible=t},succeed:e.handleGetComments}})],1)},r=[],o=n(54288),i=(n(70315),n(12566),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-list-item",{staticClass:"!p-0"},[n("a-comment",{scopedSlots:e._u([{key:"author",fn:function(){return[n("a",{attrs:{href:e.comment.authorUrl,target:"_blank"}},[e.comment.isAdmin?n("a-icon",{staticStyle:{"margin-right":"3px"},attrs:{type:"user"}}):e._e(),e._v(" "+e._s(e.comment.author)+" ")],1)]},proxy:!0},{key:"avatar",fn:function(){return[n("a-avatar",{attrs:{alt:e.comment.author,src:e.comment.avatar,size:"large"}})]},proxy:!0},{key:"content",fn:function(){return[n("div",{staticClass:"comment-modal-content",domProps:{innerHTML:e._s(e.$options.filters.markdownRender(e.comment.content))}})]},proxy:!0},{key:"datetime",fn:function(){return[n("a-tooltip",{scopedSlots:e._u([{key:"title",fn:function(){return[n("span",[e._v(e._s(e._f("moment")(e.comment.createTime)))])]},proxy:!0}])},[n("span",[e._v(e._s(e._f("timeAgo")(e.comment.createTime)))])])]},proxy:!0},{key:"actions",fn:function(){return["AUDITING"===e.comment.status?n("a-dropdown",{attrs:{trigger:["click"]},scopedSlots:e._u([{key:"overlay",fn:function(){return[n("a-menu",[n("a-menu-item",{key:"1",on:{click:function(t){return e.handleChangeStatus("PUBLISHED")}}},[e._v(" 通过")]),n("a-menu-item",{key:"2",on:{click:e.handlePublishAndReply}},[e._v(" 通过并回复")])],1)]},proxy:!0}],null,!1,357119804)},[n("span",[e._v("通过")])]):"PUBLISHED"===e.comment.status?n("span",{on:{click:function(t){e.replyModalVisible=!0}}},[e._v("回复")]):"RECYCLE"===e.comment.status?n("a-popconfirm",{attrs:{title:"你确定要还原该评论？",cancelText:"取消",okText:"确定"},on:{confirm:function(t){return e.handleChangeStatus("PUBLISHED")}}},[e._v(" 还原 ")]):e._e(),"PUBLISHED"===e.comment.status||"AUDITING"===e.comment.status?n("a-popconfirm",{attrs:{title:"你确定要将该评论移到回收站？",cancelText:"取消",okText:"确定"},on:{confirm:function(t){return e.handleChangeStatus("RECYCLE")}}},[e._v(" 回收站 ")]):e._e(),n("a-popconfirm",{attrs:{title:"你确定要永久删除该评论？",cancelText:"取消",okText:"确定"},on:{confirm:e.handleDelete}},[e._v(" 删除 ")])]},proxy:!0}])},[e.comment.children?e._l(e.comment.children,(function(t,a){return n("TargetCommentTreeNode",{key:a,attrs:{comment:t,target:e.target,"target-id":e.targetId},on:{reload:function(t){return e.$emit("reload")}}})})):e._e(),n("CommentReplyModal",{attrs:{comment:e.comment,target:e.target,"target-id":e.targetId,visible:e.replyModalVisible},on:{"update:visible":function(t){e.replyModalVisible=t},succeed:function(t){return e.$emit("reload")}}})],2)],1)}),l=[],s=n(36591),c=n(58137),u={name:"TargetCommentTreeNode",components:{CommentReplyModal:c.Z},props:{target:{type:String,required:!0,validator:function(e){return-1!==["post","sheet","journal"].indexOf(e)}},targetId:{type:Number,required:!0,default:0},comment:{type:Object,required:!1,default:null}},data:function(){return{replyModalVisible:!1}},methods:{handleChangeStatus:function(e){var t=this;return(0,o.Z)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.comment.updateStatusById("".concat(t.target,"s"),t.comment.id,e);case 3:n.next=8;break;case 5:n.prev=5,n.t0=n["catch"](0),t.$log.error("Failed to change comment status",n.t0);case 8:return n.prev=8,t.$emit("reload"),n.finish(8);case 11:case"end":return n.stop()}}),n,null,[[0,5,8,11]])})))()},handlePublishAndReply:function(){var e=this;return(0,o.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.handleChangeStatus("PUBLISHED");case 2:e.replyModalVisible=!0;case 3:case"end":return t.stop()}}),t)})))()},handleDelete:function(){var e=this;return(0,o.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.Z.comment["delete"]("".concat(e.target,"s"),e.comment.id);case 3:t.next=8;break;case 5:t.prev=5,t.t0=t["catch"](0),e.$log.error("Failed to delete comment",t.t0);case 8:return t.prev=8,e.$emit("reload"),t.finish(8);case 11:case"end":return t.stop()}}),t,null,[[0,5,8,11]])})))()}}},m=u,d=n(70739),p=(0,d.Z)(m,i,l,!1,null,null,null),f=p.exports,h={name:"TargetCommentListModal",components:{TargetCommentTreeNode:f,CommentReplyModal:c.Z},props:{visible:{type:Boolean,default:!0},title:{type:String,default:"评论"},target:{type:String,required:!0,validator:function(e){return-1!==["post","sheet","journal"].indexOf(e)}},targetId:{type:Number,required:!0,default:0}},data:function(){return{list:{data:[],loading:!1,params:{page:0,size:10},total:0},replyModalVisible:!1}},computed:{modalVisible:{get:function(){return this.visible},set:function(e){this.$emit("update:visible",e)}},pagination:function(){return{page:this.list.params.page+1,size:this.list.params.size,total:this.list.total}}},watch:{modalVisible:function(e){e&&this.handleGetComments()},targetId:function(){this.handleGetComments()}},methods:{handleGetComments:function(){var e=this;return(0,o.Z)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.list.loading=!0,t.next=4,s.Z.comment.listAsTreeView("".concat(e.target,"s"),e.targetId,e.list.params);case 4:n=t.sent,e.list.data=n.data.content,e.list.total=n.data.total,t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),e.$log.error("Failed to get target comments",t.t0);case 12:return t.prev=12,e.list.loading=!1,t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,9,12,15]])})))()},handlePageChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.list.params.page=e-1,this.handleGetComments()},handlePageSizeChange:function(e,t){this.list.params.page=0,this.list.params.size=t,this.handleGetComments()},onClose:function(){this.$emit("close")}}},g=h,v=(0,d.Z)(g,a,r,!1,null,null,null),b=v.exports}}]);