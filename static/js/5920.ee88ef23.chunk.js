"use strict";(self.webpackChunkyoaka_coin_web=self.webpackChunkyoaka_coin_web||[]).push([[5920],{95920:function(t,e,r){r.r(e),r.d(e,{MarketplaceV3:function(){return h}});var n=r(74165),i=r(15861),a=r(15671),s=r(43144),c=r(83699),o=r(31943),h=(r(80518),r(20737),r(78262),r(31583),r(98528),r(84255),function(){function t(e,r,n){(0,a.Z)(this,t);var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},s=arguments.length>4?arguments[4]:void 0,h=arguments.length>5?arguments[5]:void 0,p=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new o.dd(e,r,s,i);(0,c._)(this,"abi",void 0),(0,c._)(this,"contractWrapper",void 0),(0,c._)(this,"storage",void 0),(0,c._)(this,"encoder",void 0),(0,c._)(this,"events",void 0),(0,c._)(this,"estimator",void 0),(0,c._)(this,"platformFees",void 0),(0,c._)(this,"metadata",void 0),(0,c._)(this,"app",void 0),(0,c._)(this,"roles",void 0),(0,c._)(this,"interceptor",void 0),(0,c._)(this,"_chainId",void 0),this._chainId=h,this.abi=o.e.parse(s||[]),this.contractWrapper=p,this.storage=n,this.metadata=new o.ag(this.contractWrapper,o.ds,this.storage),this.app=new o.a$(this.contractWrapper,this.metadata,this.storage),this.roles=new o.ah(this.contractWrapper,t.contractRoles),this.encoder=new o.af(this.contractWrapper),this.estimator=new o.aP(this.contractWrapper),this.events=new o.aQ(this.contractWrapper),this.platformFees=new o.aS(this.contractWrapper),this.interceptor=new o.aR(this.contractWrapper)}return(0,s.Z)(t,[{key:"directListings",get:function(){return(0,o.c0)(this.detectDirectListings(),o.du)}},{key:"englishAuctions",get:function(){return(0,o.c0)(this.detectEnglishAuctions(),o.dv)}},{key:"offers",get:function(){return(0,o.c0)(this.detectOffers(),o.dw)}},{key:"chainId",get:function(){return this._chainId}},{key:"onNetworkUpdated",value:function(t){this.contractWrapper.updateSignerOrProvider(t)}},{key:"getAddress",value:function(){return this.contractWrapper.readContract.address}},{key:"prepare",value:function(){var t=(0,i.Z)((0,n.Z)().mark((function t(e,r,i){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",o.aV.fromContractWrapper({contractWrapper:this.contractWrapper,method:e,args:r,overrides:i}));case 1:case"end":return t.stop()}}),t,this)})));return function(e,r,n){return t.apply(this,arguments)}}()},{key:"call",value:function(){var t=(0,i.Z)((0,n.Z)().mark((function t(e,r,i){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.contractWrapper.call(e,r,i));case 1:case"end":return t.stop()}}),t,this)})));return function(e,r,n){return t.apply(this,arguments)}}()},{key:"detectDirectListings",value:function(){if((0,o.c1)(this.contractWrapper,"DirectListings"))return new o.aM(this.contractWrapper,this.storage)}},{key:"detectEnglishAuctions",value:function(){if((0,o.c1)(this.contractWrapper,"EnglishAuctions"))return new o.aN(this.contractWrapper,this.storage)}},{key:"detectOffers",value:function(){if((0,o.c1)(this.contractWrapper,"Offers"))return new o.aO(this.contractWrapper,this.storage)}}]),t}());(0,c._)(h,"contractRoles",o.dt)}}]);
//# sourceMappingURL=5920.ee88ef23.chunk.js.map