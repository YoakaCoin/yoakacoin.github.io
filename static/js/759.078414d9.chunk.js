"use strict";(self.webpackChunkyoaka_coin_web=self.webpackChunkyoaka_coin_web||[]).push([[759],{20874:function(n,e,t){t.d(e,{W:function(){return h}});var r=t(15671),i=t(43144),a=t(97326),c=t(60136),s=t(29388),o=t(46170),u=t(73274),h=function(n){(0,c.Z)(t,n);var e=(0,s.Z)(t);function t(n){var i;(0,r.Z)(this,t);var c=n.chains,s=void 0===c?u.gL9:c,h=n.options;return i=e.call(this),(0,o._)((0,a.Z)(i),"id",void 0),(0,o._)((0,a.Z)(i),"name",void 0),(0,o._)((0,a.Z)(i),"chains",void 0),(0,o._)((0,a.Z)(i),"options",void 0),(0,o._)((0,a.Z)(i),"ready",void 0),i.chains=s,i.options=h,i}return(0,i.Z)(t,[{key:"getBlockExplorerUrls",value:function(n){var e,t,r=null!==(e=null===(t=n.explorers)||void 0===t?void 0:t.map((function(n){return n.url})))&&void 0!==e?e:[];return r.length>0?r:void 0}},{key:"isChainUnsupported",value:function(n){return!this.chains.some((function(e){return e.chainId===n}))}},{key:"updateChains",value:function(n){this.chains=n}}]),t}(t(65892).Z)},44126:function(n,e,t){t.d(e,{A:function(){return f},C:function(){return p},R:function(){return l},S:function(){return Z},U:function(){return g},a:function(){return v}});var r=t(43144),i=t(15671),a=t(97326),c=t(60136),s=t(29388),o=t(98737),u=t(46170),h=function(n){(0,c.Z)(t,n);var e=(0,s.Z)(t);function t(n,r){var c;(0,i.Z)(this,t);var s=r.cause,o=r.code,h=r.data;if(!Number.isInteger(o))throw new Error('"code" must be an integer.');if(!n||"string"!==typeof n)throw new Error('"message" must be a nonempty string.');return c=e.call(this,"".concat(n,". Cause: ").concat(s)),(0,u._)((0,a.Z)(c),"cause",void 0),(0,u._)((0,a.Z)(c),"code",void 0),(0,u._)((0,a.Z)(c),"data",void 0),c.cause=s,c.code=o,c.data=h,c}return(0,r.Z)(t)}((0,o.Z)(Error)),d=function(n){(0,c.Z)(t,n);var e=(0,s.Z)(t);function t(n,r){(0,i.Z)(this,t);var a=r.cause,c=r.code,s=r.data;if(!(Number.isInteger(c)&&c>=1e3&&c<=4999))throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');return e.call(this,n,{cause:a,code:c,data:s})}return(0,r.Z)(t)}(h),f=function(n){(0,c.Z)(t,n);var e=(0,s.Z)(t);function t(){var n;return(0,i.Z)(this,t),n=e.apply(this,arguments),(0,u._)((0,a.Z)(n),"name","AddChainError"),(0,u._)((0,a.Z)(n),"message","Error adding chain"),n}return(0,r.Z)(t)}((0,o.Z)(Error)),p=function(n){(0,c.Z)(t,n);var e=(0,s.Z)(t);function t(n){var r;(0,i.Z)(this,t);var c=n.chainId,s=n.connectorId;return r=e.call(this,'Chain "'.concat(c,'" not configured for connector "').concat(s,'".')),(0,u._)((0,a.Z)(r),"name","ChainNotConfigured"),r}return(0,r.Z)(t)}((0,o.Z)(Error)),v=function(n){(0,c.Z)(t,n);var e=(0,s.Z)(t);function t(){var n;return(0,i.Z)(this,t),n=e.apply(this,arguments),(0,u._)((0,a.Z)(n),"name","ConnectorNotFoundError"),(0,u._)((0,a.Z)(n),"message","Connector not found"),n}return(0,r.Z)(t)}((0,o.Z)(Error)),l=function(n){(0,c.Z)(t,n);var e=(0,s.Z)(t);function t(n){var r;return(0,i.Z)(this,t),r=e.call(this,"Resource unavailable",{cause:n,code:-32002}),(0,u._)((0,a.Z)(r),"name","ResourceUnavailable"),r}return(0,r.Z)(t)}(h),Z=function(n){(0,c.Z)(t,n);var e=(0,s.Z)(t);function t(n){var r;return(0,i.Z)(this,t),r=e.call(this,"Error switching chain",{cause:n,code:4902}),(0,u._)((0,a.Z)(r),"name","SwitchChainError"),r}return(0,r.Z)(t)}(d),g=function(n){(0,c.Z)(t,n);var e=(0,s.Z)(t);function t(n){var r;return(0,i.Z)(this,t),r=e.call(this,"User rejected request",{cause:n,code:4001}),(0,u._)((0,a.Z)(r),"name","UserRejectedRequestError"),r}return(0,r.Z)(t)}(d)},61779:function(n,e,t){function r(n){return"string"===typeof n?Number.parseInt(n,"0x"===n.trim().substring(0,2)?16:10):"bigint"===typeof n?Number(n):n}t.d(e,{n:function(){return r}})},40759:function(n,e,t){t.r(e),t.d(e,{CoinbaseWalletConnector:function(){return _}});var r=t(29439),i=t(74165),a=t(15861),c=t(1413),s=t(15671),o=t(43144),u=t(97326),h=t(60136),d=t(29388),f=t(41146),p=t(63700),v=t(46170),l=t(97419),Z=t(60723),g=t(49716),w=t(2513),m=t(20874),b=t(61779),k=t(44126),C=(t(65892),new WeakMap),x=new WeakMap,y=new WeakSet,_=function(n){(0,h.Z)(m,n);var e=(0,d.Z)(m);function m(n){var t;(0,s.Z)(this,m);var r=n.chains,i=n.options;return t=e.call(this,{chains:r,options:(0,c.Z)({reloadOnDisconnect:!1},i)}),(0,f._)((0,u.Z)(t),y),(0,v._)((0,u.Z)(t),"id",w.w.coinbase),(0,v._)((0,u.Z)(t),"name","Coinbase Wallet"),(0,v._)((0,u.Z)(t),"ready",!0),(0,p._)((0,u.Z)(t),C,{writable:!0,value:void 0}),(0,p._)((0,u.Z)(t),x,{writable:!0,value:void 0}),(0,v._)((0,u.Z)(t),"onAccountsChanged",(function(n){0===n.length?t.emit("disconnect"):t.emit("change",{account:l.getAddress(n[0])})})),(0,v._)((0,u.Z)(t),"onChainChanged",(function(n){var e=(0,b.n)(n),r=t.isChainUnsupported(e);t.emit("change",{chain:{id:e,unsupported:r}})})),(0,v._)((0,u.Z)(t),"onDisconnect",(function(){t.emit("disconnect")})),t}return(0,o.Z)(m,[{key:"connect",value:function(){var n=(0,a.Z)((0,i.Z)().mark((function n(){var e,t,r,a,c,s,o,u=arguments;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=(u.length>0&&void 0!==u[0]?u[0]:{}).chainId,n.prev=1,n.next=4,this.getProvider();case 4:return t=n.sent,this.setupListeners(),this.emit("message",{type:"connecting"}),n.next=9,t.enable();case 9:return r=n.sent,a=l.getAddress(r[0]),n.next=13,this.getChainId();case 13:if(c=n.sent,s=this.isChainUnsupported(c),!e||c===e){n.next=27;break}return n.prev=16,n.next=19,this.switchChain(e);case 19:o=n.sent,c=o.chainId,s=this.isChainUnsupported(c),n.next=27;break;case 24:n.prev=24,n.t0=n.catch(16),console.error("Connected but failed to switch to desired chain ".concat(e),n.t0);case 27:return n.abrupt("return",{account:a,chain:{id:c,unsupported:s},provider:new Z.Q(t)});case 30:if(n.prev=30,n.t1=n.catch(1),!/(user closed modal|accounts received is empty)/i.test(n.t1.message)){n.next=34;break}throw new k.U(n.t1);case 34:throw n.t1;case 35:case"end":return n.stop()}}),n,this,[[1,30],[16,24]])})));return function(){return n.apply(this,arguments)}}()},{key:"disconnect",value:function(){var n=(0,a.Z)((0,i.Z)().mark((function n(){var e;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if((0,p.b)(this,x)){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,this.getProvider();case 4:(e=n.sent).removeListener("accountsChanged",this.onAccountsChanged),e.removeListener("chainChanged",this.onChainChanged),e.removeListener("disconnect",this.onDisconnect),e.disconnect(),e.close();case 10:case"end":return n.stop()}}),n,this)})));return function(){return n.apply(this,arguments)}}()},{key:"getAccount",value:function(){var n=(0,a.Z)((0,i.Z)().mark((function n(){var e,t;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.getProvider();case 2:return e=n.sent,n.next=5,e.request({method:"eth_accounts"});case 5:if(0!==(t=n.sent).length){n.next=8;break}throw new Error("No accounts found");case 8:return n.abrupt("return",l.getAddress(t[0]));case 9:case"end":return n.stop()}}),n,this)})));return function(){return n.apply(this,arguments)}}()},{key:"getChainId",value:function(){var n=(0,a.Z)((0,i.Z)().mark((function n(){var e,t;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.getProvider();case 2:return e=n.sent,t=(0,b.n)(e.chainId),n.abrupt("return",t);case 5:case"end":return n.stop()}}),n,this)})));return function(){return n.apply(this,arguments)}}()},{key:"getProvider",value:function(){var n=(0,a.Z)((0,i.Z)().mark((function n(){var e,r,a,c,s,o,u=this;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if((0,p.b)(this,x)){n.next=11;break}return n.next=3,Promise.all([t.e(3146),t.e(5419),t.e(6942)]).then(t.bind(t,25419));case 3:"function"!==typeof(r=n.sent.default)&&"function"===typeof r.default&&(r=r.default),(0,p.a)(this,C,new r(this.options)),a=null===(e=(0,p.b)(this,C).walletExtension)||void 0===e?void 0:e.getChainId(),c=this.chains.find((function(n){return u.options.chainId?n.chainId===u.options.chainId:n.chainId===a}))||this.chains[0],s=this.options.chainId||(null===c||void 0===c?void 0:c.chainId),o=this.options.jsonRpcUrl||(null===c||void 0===c?void 0:c.rpc[0]),(0,p.a)(this,x,(0,p.b)(this,C).makeWeb3Provider(o,s));case 11:return n.abrupt("return",(0,p.b)(this,x));case 12:case"end":return n.stop()}}),n,this)})));return function(){return n.apply(this,arguments)}}()},{key:"getSigner",value:function(){var n=(0,a.Z)((0,i.Z)().mark((function n(){var e,t,a,c,s,o=arguments;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=(o.length>0&&void 0!==o[0]?o[0]:{}).chainId,n.next=3,Promise.all([this.getProvider(),this.getAccount()]);case 3:return t=n.sent,a=(0,r.Z)(t,2),c=a[0],s=a[1],n.abrupt("return",new Z.Q(c,e).getSigner(s));case 8:case"end":return n.stop()}}),n,this)})));return function(){return n.apply(this,arguments)}}()},{key:"isAuthorized",value:function(){var n=(0,a.Z)((0,i.Z)().mark((function n(){var e;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,this.getAccount();case 3:return e=n.sent,n.abrupt("return",!!e);case 7:return n.prev=7,n.t0=n.catch(0),n.abrupt("return",!1);case 10:case"end":return n.stop()}}),n,this,[[0,7]])})));return function(){return n.apply(this,arguments)}}()},{key:"switchChain",value:function(){var n=(0,a.Z)((0,i.Z)().mark((function n(e){var t,r,a,c;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.getProvider();case 2:return t=n.sent,r=g.hexValue(e),n.prev=4,n.next=7,t.request({method:"wallet_switchEthereumChain",params:[{chainId:r}]});case 7:return n.abrupt("return",null!==(a=this.chains.find((function(n){return n.chainId===e})))&&void 0!==a?a:{chainId:e,name:"Chain ".concat(r),slug:"".concat(r),nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpc:[""],testnet:!1,chain:"ethereum",shortName:"eth"});case 10:if(n.prev=10,n.t0=n.catch(4),c=this.chains.find((function(n){return n.chainId===e}))){n.next=15;break}throw new k.C({chainId:e,connectorId:this.id});case 15:if(4902!==n.t0.code){n.next=27;break}return n.prev=16,n.next=19,t.request({method:"wallet_addEthereumChain",params:[{chainId:r,chainName:c.name,nativeCurrency:c.nativeCurrency,rpcUrls:c.rpc,blockExplorerUrls:this.getBlockExplorerUrls(c)}]});case 19:return n.abrupt("return",c);case 22:if(n.prev=22,n.t1=n.catch(16),!(0,f.a)(this,y,I).call(this,n.t1)){n.next=26;break}throw new k.U(n.t1);case 26:throw new k.A;case 27:if(!(0,f.a)(this,y,I).call(this,n.t0)){n.next=29;break}throw new k.U(n.t0);case 29:throw new k.S(n.t0);case 30:case"end":return n.stop()}}),n,this,[[4,10],[16,22]])})));return function(e){return n.apply(this,arguments)}}()},{key:"setupListeners",value:function(){var n=(0,a.Z)((0,i.Z)().mark((function n(){var e;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.getProvider();case 2:(e=n.sent).on("accountsChanged",this.onAccountsChanged),e.on("chainChanged",this.onChainChanged),e.on("disconnect",this.onDisconnect);case 6:case"end":return n.stop()}}),n,this)})));return function(){return n.apply(this,arguments)}}()},{key:"getQrUrl",value:function(){var n=(0,a.Z)((0,i.Z)().mark((function n(){return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.getProvider();case 2:if((0,p.b)(this,C)){n.next=4;break}throw new Error("Coinbase Wallet SDK not initialized");case 4:return n.abrupt("return",(0,p.b)(this,C).getQrUrl());case 5:case"end":return n.stop()}}),n,this)})));return function(){return n.apply(this,arguments)}}()}]),m}(m.W);function I(n){return/(user rejected)/i.test(n.message)}}}]);
//# sourceMappingURL=759.078414d9.chunk.js.map