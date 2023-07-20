"use strict";(self.webpackChunkyoaka_coin_web=self.webpackChunkyoaka_coin_web||[]).push([[2327],{47638:function(r,t,e){e.d(t,{S:function(){return s}});var n=e(74165),a=e(15861),c=e(15671),u=e(43144),o=e(83699),i=e(31943),s=function(){function r(t,e,u){var s=this;(0,c.Z)(this,r),(0,o._)(this,"contractWrapper",void 0),(0,o._)(this,"storage",void 0),(0,o._)(this,"erc721",void 0),(0,o._)(this,"_chainId",void 0),(0,o._)(this,"transfer",(0,i.d6)(function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t,e){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",s.erc721.transfer.prepare(t,e));case 1:case"end":return r.stop()}}),r)})));return function(t,e){return r.apply(this,arguments)}}())),(0,o._)(this,"setApprovalForAll",(0,i.d6)(function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t,e){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",s.erc721.setApprovalForAll.prepare(t,e));case 1:case"end":return r.stop()}}),r)})));return function(t,e){return r.apply(this,arguments)}}())),(0,o._)(this,"setApprovalForToken",(0,i.d6)(function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t,e){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.t0=i.aV,r.t1=s.contractWrapper,r.next=4,(0,i.cs)(t);case 4:return r.t2=r.sent,r.t3=e,r.t4=[r.t2,r.t3],r.t5={contractWrapper:r.t1,method:"approve",args:r.t4},r.abrupt("return",r.t0.fromContractWrapper.call(r.t0,r.t5));case 9:case"end":return r.stop()}}),r)})));return function(t,e){return r.apply(this,arguments)}}())),this.contractWrapper=t,this.storage=e,this.erc721=new i.aC(this.contractWrapper,this.storage,u),this._chainId=u}return(0,u.Z)(r,[{key:"chainId",get:function(){return this._chainId}},{key:"onNetworkUpdated",value:function(r){this.contractWrapper.updateSignerOrProvider(r)}},{key:"getAddress",value:function(){return this.contractWrapper.readContract.address}},{key:"getAll",value:function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",this.erc721.getAll(t));case 1:case"end":return r.stop()}}),r,this)})));return function(t){return r.apply(this,arguments)}}()},{key:"getOwned",value:function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!t){r.next=4;break}return r.next=3,(0,i.cs)(t);case 3:t=r.sent;case 4:return r.abrupt("return",this.erc721.getOwned(t));case 5:case"end":return r.stop()}}),r,this)})));return function(t){return r.apply(this,arguments)}}()},{key:"getOwnedTokenIds",value:function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!t){r.next=4;break}return r.next=3,(0,i.cs)(t);case 3:t=r.sent;case 4:return r.abrupt("return",this.erc721.getOwnedTokenIds(t));case 5:case"end":return r.stop()}}),r,this)})));return function(t){return r.apply(this,arguments)}}()},{key:"totalSupply",value:function(){var r=(0,a.Z)((0,n.Z)().mark((function r(){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",this.erc721.totalCirculatingSupply());case 1:case"end":return r.stop()}}),r,this)})));return function(){return r.apply(this,arguments)}}()},{key:"get",value:function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",this.erc721.get(t));case 1:case"end":return r.stop()}}),r,this)})));return function(t){return r.apply(this,arguments)}}()},{key:"ownerOf",value:function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",this.erc721.ownerOf(t));case 1:case"end":return r.stop()}}),r,this)})));return function(t){return r.apply(this,arguments)}}()},{key:"balanceOf",value:function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",this.erc721.balanceOf(t));case 1:case"end":return r.stop()}}),r,this)})));return function(t){return r.apply(this,arguments)}}()},{key:"balance",value:function(){var r=(0,a.Z)((0,n.Z)().mark((function r(){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",this.erc721.balance());case 1:case"end":return r.stop()}}),r,this)})));return function(){return r.apply(this,arguments)}}()},{key:"isApproved",value:function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t,e){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",this.erc721.isApproved(t,e));case 1:case"end":return r.stop()}}),r,this)})));return function(t,e){return r.apply(this,arguments)}}()}]),r}()},42327:function(r,t,e){e.r(t),e.d(t,{NFTCollection:function(){return v}});var n=e(74165),a=e(15861),c=e(15671),u=e(43144),o=e(97326),i=e(60136),s=e(29388),p=e(83699),f=e(31943),h=e(47638),d=e(68624),v=(e(80518),e(20737),e(78262),e(31583),e(98528),e(84255),function(r){(0,i.Z)(e,r);var t=(0,s.Z)(e);function e(r,u,i){var s;(0,c.Z)(this,e);var h=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},d=arguments.length>4?arguments[4]:void 0,v=arguments.length>5?arguments[5]:void 0,l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new f.dd(r,u,d,h);return s=t.call(this,l,i,v),(0,p._)((0,o.Z)(s),"abi",void 0),(0,p._)((0,o.Z)(s),"metadata",void 0),(0,p._)((0,o.Z)(s),"app",void 0),(0,p._)((0,o.Z)(s),"roles",void 0),(0,p._)((0,o.Z)(s),"encoder",void 0),(0,p._)((0,o.Z)(s),"estimator",void 0),(0,p._)((0,o.Z)(s),"events",void 0),(0,p._)((0,o.Z)(s),"sales",void 0),(0,p._)((0,o.Z)(s),"platformFees",void 0),(0,p._)((0,o.Z)(s),"royalties",void 0),(0,p._)((0,o.Z)(s),"owner",void 0),(0,p._)((0,o.Z)(s),"signature",void 0),(0,p._)((0,o.Z)(s),"interceptor",void 0),(0,p._)((0,o.Z)(s),"mint",(0,f.d6)(function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",s.erc721.mint.prepare(t));case 1:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}())),(0,p._)((0,o.Z)(s),"mintTo",(0,f.d6)(function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t,e){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",s.erc721.mintTo.prepare(t,e));case 1:case"end":return r.stop()}}),r)})));return function(t,e){return r.apply(this,arguments)}}())),(0,p._)((0,o.Z)(s),"mintBatch",(0,f.d6)(function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",s.erc721.mintBatch.prepare(t));case 1:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}())),(0,p._)((0,o.Z)(s),"mintBatchTo",(0,f.d6)(function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t,e){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",s.erc721.mintBatchTo.prepare(t,e));case 1:case"end":return r.stop()}}),r)})));return function(t,e){return r.apply(this,arguments)}}())),(0,p._)((0,o.Z)(s),"burn",(0,f.d6)((function(r){return s.erc721.burn.prepare(r)}))),s.abi=f.e.parse(d||[]),s.metadata=new f.ag(s.contractWrapper,f.dA,s.storage),s.app=new f.a$(s.contractWrapper,s.metadata,s.storage),s.roles=new f.ah(s.contractWrapper,e.contractRoles),s.royalties=new f.ai(s.contractWrapper,s.metadata),s.sales=new f.aj(s.contractWrapper),s.encoder=new f.af(s.contractWrapper),s.estimator=new f.aP(s.contractWrapper),s.events=new f.aQ(s.contractWrapper),s.platformFees=new f.aS(s.contractWrapper),s.interceptor=new f.aR(s.contractWrapper),s.signature=new f.aD(s.contractWrapper,s.storage),s.owner=new f.aU(s.contractWrapper),s}return(0,u.Z)(e,[{key:"onNetworkUpdated",value:function(r){this.contractWrapper.updateSignerOrProvider(r)}},{key:"getAddress",value:function(){return this.contractWrapper.readContract.address}},{key:"isTransferRestricted",value:function(){var r=(0,a.Z)((0,n.Z)().mark((function r(){var t;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,this.contractWrapper.readContract.hasRole((0,f.bJ)("transfer"),d.d);case 2:return t=r.sent,r.abrupt("return",!t);case 4:case"end":return r.stop()}}),r,this)})));return function(){return r.apply(this,arguments)}}()},{key:"getMintTransaction",value:function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t,e){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",this.erc721.getMintTransaction(t,e));case 1:case"end":return r.stop()}}),r,this)})));return function(t,e){return r.apply(this,arguments)}}()},{key:"prepare",value:function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t,e,a){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",f.aV.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:e,overrides:a}));case 1:case"end":return r.stop()}}),r,this)})));return function(t,e,n){return r.apply(this,arguments)}}()},{key:"call",value:function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t,e,a){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",this.contractWrapper.call(t,e,a));case 1:case"end":return r.stop()}}),r,this)})));return function(t,e,n){return r.apply(this,arguments)}}()}]),e}(h.S));(0,p._)(v,"contractRoles",f.dq)}}]);
//# sourceMappingURL=2327.5d52ff58.chunk.js.map