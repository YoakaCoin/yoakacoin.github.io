"use strict";(self.webpackChunkyoaka_coin_web=self.webpackChunkyoaka_coin_web||[]).push([[928],{47638:function(t,r,e){e.d(r,{S:function(){return i}});var n=e(74165),a=e(15861),c=e(15671),s=e(43144),o=e(83699),u=e(31943),i=function(){function t(r,e,s){var i=this;(0,c.Z)(this,t),(0,o._)(this,"contractWrapper",void 0),(0,o._)(this,"storage",void 0),(0,o._)(this,"erc721",void 0),(0,o._)(this,"_chainId",void 0),(0,o._)(this,"transfer",(0,u.d6)(function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r,e){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",i.erc721.transfer.prepare(r,e));case 1:case"end":return t.stop()}}),t)})));return function(r,e){return t.apply(this,arguments)}}())),(0,o._)(this,"setApprovalForAll",(0,u.d6)(function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r,e){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",i.erc721.setApprovalForAll.prepare(r,e));case 1:case"end":return t.stop()}}),t)})));return function(r,e){return t.apply(this,arguments)}}())),(0,o._)(this,"setApprovalForToken",(0,u.d6)(function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r,e){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=u.aV,t.t1=i.contractWrapper,t.next=4,(0,u.cs)(r);case 4:return t.t2=t.sent,t.t3=e,t.t4=[t.t2,t.t3],t.t5={contractWrapper:t.t1,method:"approve",args:t.t4},t.abrupt("return",t.t0.fromContractWrapper.call(t.t0,t.t5));case 9:case"end":return t.stop()}}),t)})));return function(r,e){return t.apply(this,arguments)}}())),this.contractWrapper=r,this.storage=e,this.erc721=new u.aC(this.contractWrapper,this.storage,s),this._chainId=s}return(0,s.Z)(t,[{key:"chainId",get:function(){return this._chainId}},{key:"onNetworkUpdated",value:function(t){this.contractWrapper.updateSignerOrProvider(t)}},{key:"getAddress",value:function(){return this.contractWrapper.readContract.address}},{key:"getAll",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.erc721.getAll(r));case 1:case"end":return t.stop()}}),t,this)})));return function(r){return t.apply(this,arguments)}}()},{key:"getOwned",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r){t.next=4;break}return t.next=3,(0,u.cs)(r);case 3:r=t.sent;case 4:return t.abrupt("return",this.erc721.getOwned(r));case 5:case"end":return t.stop()}}),t,this)})));return function(r){return t.apply(this,arguments)}}()},{key:"getOwnedTokenIds",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r){t.next=4;break}return t.next=3,(0,u.cs)(r);case 3:r=t.sent;case 4:return t.abrupt("return",this.erc721.getOwnedTokenIds(r));case 5:case"end":return t.stop()}}),t,this)})));return function(r){return t.apply(this,arguments)}}()},{key:"totalSupply",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.erc721.totalCirculatingSupply());case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"get",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.erc721.get(r));case 1:case"end":return t.stop()}}),t,this)})));return function(r){return t.apply(this,arguments)}}()},{key:"ownerOf",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.erc721.ownerOf(r));case 1:case"end":return t.stop()}}),t,this)})));return function(r){return t.apply(this,arguments)}}()},{key:"balanceOf",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.erc721.balanceOf(r));case 1:case"end":return t.stop()}}),t,this)})));return function(r){return t.apply(this,arguments)}}()},{key:"balance",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.erc721.balance());case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"isApproved",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r,e){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.erc721.isApproved(r,e));case 1:case"end":return t.stop()}}),t,this)})));return function(r,e){return t.apply(this,arguments)}}()}]),t}()},56671:function(t,r,e){e.d(r,{h:function(){return o}});var n=e(74165),a=e(15861),c=e(31943),s=e(49242);function o(t,r,e){return u.apply(this,arguments)}function u(){return(u=(0,a.Z)((0,n.Z)().mark((function t(r,e,a){var o,u,i,p,d;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=r.getProvider(),u=new c.dd(o,e,s,{}),t.next=4,r.getSignerAddress();case 4:return i=t.sent,p=r.readContract.address,t.next=8,u.readContract.allowance(i,p);case 8:return d=t.sent,t.abrupt("return",d.gte(a));case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},70928:function(t,r,e){e.r(r),e.d(r,{Multiwrap:function(){return l}});var n=e(37762),a=e(74165),c=e(15861),s=e(15671),o=e(43144),u=e(97326),i=e(60136),p=e(29388),d=e(83699),f=e(31943),h=e(47638),v=e(6222),k=e(56671),l=(e(80518),e(20737),e(78262),e(31583),e(98528),e(84255),function(t){(0,i.Z)(e,t);var r=(0,p.Z)(e);function e(t,n,o){var i;(0,s.Z)(this,e);var p=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},h=arguments.length>4?arguments[4]:void 0,v=arguments.length>5?arguments[5]:void 0,k=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new f.dd(t,n,h,p);return i=r.call(this,k,o,v),(0,d._)((0,u.Z)(i),"abi",void 0),(0,d._)((0,u.Z)(i),"encoder",void 0),(0,d._)((0,u.Z)(i),"estimator",void 0),(0,d._)((0,u.Z)(i),"metadata",void 0),(0,d._)((0,u.Z)(i),"app",void 0),(0,d._)((0,u.Z)(i),"events",void 0),(0,d._)((0,u.Z)(i),"roles",void 0),(0,d._)((0,u.Z)(i),"royalties",void 0),(0,d._)((0,u.Z)(i),"owner",void 0),(0,d._)((0,u.Z)(i),"wrap",(0,f.d6)(function(){var t=(0,c.Z)((0,a.Z)().mark((function t(r,e,n){var c,s,o;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,f.dz)(e,i.storage);case 2:if(c=t.sent,t.t0=f.cs,!n){t.next=8;break}t.t1=n,t.next=11;break;case 8:return t.next=10,i.contractWrapper.getSignerAddress();case 10:t.t1=t.sent;case 11:return t.t2=t.t1,t.next=14,(0,t.t0)(t.t2);case 14:return s=t.sent,t.next=17,i.toTokenStructList(r);case 17:return o=t.sent,t.abrupt("return",f.aV.fromContractWrapper({contractWrapper:i.contractWrapper,method:"wrap",args:[o,c,s],parse:function(t){var r=i.contractWrapper.parseLogs("TokensWrapped",null===t||void 0===t?void 0:t.logs);if(0===r.length)throw new Error("TokensWrapped event not found");var e=r[0].args.tokenIdOfWrappedToken;return{id:e,receipt:t,data:function(){return i.get(e)}}}}));case 19:case"end":return t.stop()}}),t)})));return function(r,e,n){return t.apply(this,arguments)}}())),(0,d._)((0,u.Z)(i),"unwrap",(0,f.d6)(function(){var t=(0,c.Z)((0,a.Z)().mark((function t(r,e){var n;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0=f.cs,!e){t.next=5;break}t.t1=e,t.next=8;break;case 5:return t.next=7,i.contractWrapper.getSignerAddress();case 7:t.t1=t.sent;case 8:return t.t2=t.t1,t.next=11,(0,t.t0)(t.t2);case 11:return n=t.sent,t.abrupt("return",f.aV.fromContractWrapper({contractWrapper:i.contractWrapper,method:"unwrap",args:[r,n]}));case 13:case"end":return t.stop()}}),t)})));return function(r,e){return t.apply(this,arguments)}}())),i.abi=f.e.parse(h||[]),i.metadata=new f.ag(i.contractWrapper,f.dx,i.storage),i.app=new f.a$(i.contractWrapper,i.metadata,i.storage),i.roles=new f.ah(i.contractWrapper,e.contractRoles),i.encoder=new f.af(i.contractWrapper),i.estimator=new f.aP(i.contractWrapper),i.events=new f.aQ(i.contractWrapper),i.royalties=new f.ai(i.contractWrapper,i.metadata),i.owner=new f.aU(i.contractWrapper),i}return(0,o.Z)(e,[{key:"getWrappedContents",value:function(){var t=(0,c.Z)((0,a.Z)().mark((function t(r){var e,c,s,o,u,i,p,d;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.contractWrapper.readContract.getWrappedContents(r);case 2:e=t.sent,c=[],s=[],o=[],u=(0,n.Z)(e),t.prev=7,u.s();case 9:if((i=u.n()).done){t.next=25;break}p=i.value,t.t0=p.tokenType,t.next=0===t.t0?14:1===t.t0?19:2===t.t0?21:23;break;case 14:return t.next=16,(0,f.bc)(this.contractWrapper.getProvider(),p.assetContract);case 16:return d=t.sent,c.push({contractAddress:p.assetContract,quantity:v.formatUnits(p.totalAmount,d.decimals)}),t.abrupt("break",23);case 19:return s.push({contractAddress:p.assetContract,tokenId:p.tokenId}),t.abrupt("break",23);case 21:return o.push({contractAddress:p.assetContract,tokenId:p.tokenId,quantity:p.totalAmount.toString()}),t.abrupt("break",23);case 23:t.next=9;break;case 25:t.next=30;break;case 27:t.prev=27,t.t1=t.catch(7),u.e(t.t1);case 30:return t.prev=30,u.f(),t.finish(30);case 33:return t.abrupt("return",{erc20Tokens:c,erc721Tokens:s,erc1155Tokens:o});case 34:case"end":return t.stop()}}),t,this,[[7,27,30,33]])})));return function(r){return t.apply(this,arguments)}}()},{key:"toTokenStructList",value:function(){var t=(0,c.Z)((0,a.Z)().mark((function t(r){var e,c,s,o,u,i,p,d,h,v,l,w,Z;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=[],c=this.contractWrapper.getProvider(),t.next=4,this.contractWrapper.getSignerAddress();case 4:if(s=t.sent,!r.erc20Tokens){t.next=30;break}o=(0,n.Z)(r.erc20Tokens),t.prev=7,o.s();case 9:if((u=o.n()).done){t.next=22;break}return i=u.value,t.next=13,(0,f.bb)(c,i.quantity,i.contractAddress);case 13:return p=t.sent,t.next=16,(0,k.h)(this.contractWrapper,i.contractAddress,p);case 16:if(t.sent){t.next=19;break}throw new Error('ERC20 token with contract address "'.concat(i.contractAddress,'" does not have enough allowance to transfer.\n\nYou can set allowance to the multiwrap contract to transfer these tokens by running:\n\nawait sdk.getToken("').concat(i.contractAddress,'").setAllowance("').concat(this.getAddress(),'", ').concat(i.quantity,");\n\n"));case 19:e.push({assetContract:i.contractAddress,totalAmount:p,tokenId:0,tokenType:0});case 20:t.next=9;break;case 22:t.next=27;break;case 24:t.prev=24,t.t0=t.catch(7),o.e(t.t0);case 27:return t.prev=27,o.f(),t.finish(27);case 30:if(!r.erc721Tokens){t.next=52;break}d=(0,n.Z)(r.erc721Tokens),t.prev=32,d.s();case 34:if((h=d.n()).done){t.next=44;break}return v=h.value,t.next=38,(0,f.d9)(this.contractWrapper.getProvider(),this.getAddress(),v.contractAddress,v.tokenId,s);case 38:if(t.sent){t.next=41;break}throw new Error('ERC721 token "'.concat(v.tokenId,'" with contract address "').concat(v.contractAddress,'" is not approved for transfer.\n\nYou can give approval the multiwrap contract to transfer this token by running:\n\nawait sdk.getNFTCollection("').concat(v.contractAddress,'").setApprovalForToken("').concat(this.getAddress(),'", ').concat(v.tokenId,");\n\n"));case 41:e.push({assetContract:v.contractAddress,totalAmount:0,tokenId:v.tokenId,tokenType:1});case 42:t.next=34;break;case 44:t.next=49;break;case 46:t.prev=46,t.t1=t.catch(32),d.e(t.t1);case 49:return t.prev=49,d.f(),t.finish(49);case 52:if(!r.erc1155Tokens){t.next=74;break}l=(0,n.Z)(r.erc1155Tokens),t.prev=54,l.s();case 56:if((w=l.n()).done){t.next=66;break}return Z=w.value,t.next=60,(0,f.d9)(this.contractWrapper.getProvider(),this.getAddress(),Z.contractAddress,Z.tokenId,s);case 60:if(t.sent){t.next=63;break}throw new Error('ERC1155 token "'.concat(Z.tokenId,'" with contract address "').concat(Z.contractAddress,'" is not approved for transfer.\n\nYou can give approval the multiwrap contract to transfer this token by running:\n\nawait sdk.getEdition("').concat(Z.contractAddress,'").setApprovalForAll("').concat(this.getAddress(),'", true);\n\n'));case 63:e.push({assetContract:Z.contractAddress,totalAmount:Z.quantity,tokenId:Z.tokenId,tokenType:2});case 64:t.next=56;break;case 66:t.next=71;break;case 68:t.prev=68,t.t2=t.catch(54),l.e(t.t2);case 71:return t.prev=71,l.f(),t.finish(71);case 74:return t.abrupt("return",e);case 75:case"end":return t.stop()}}),t,this,[[7,24,27,30],[32,46,49,52],[54,68,71,74]])})));return function(r){return t.apply(this,arguments)}}()},{key:"prepare",value:function(){var t=(0,c.Z)((0,a.Z)().mark((function t(r,e,n){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",f.aV.fromContractWrapper({contractWrapper:this.contractWrapper,method:r,args:e,overrides:n}));case 1:case"end":return t.stop()}}),t,this)})));return function(r,e,n){return t.apply(this,arguments)}}()},{key:"call",value:function(){var t=(0,c.Z)((0,a.Z)().mark((function t(r,e,n){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.contractWrapper.call(r,e,n));case 1:case"end":return t.stop()}}),t,this)})));return function(r,e,n){return t.apply(this,arguments)}}()}]),e}(h.S));(0,d._)(l,"contractRoles",f.dy)}}]);
//# sourceMappingURL=928.888c6cd7.chunk.js.map