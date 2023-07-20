"use strict";(self.webpackChunkyoaka_coin_web=self.webpackChunkyoaka_coin_web||[]).push([[4263],{20874:function(e,t,n){n.d(t,{W:function(){return h}});var r=n(15671),i=n(43144),a=n(97326),c=n(60136),s=n(29388),o=n(46170),u=n(73274),h=function(e){(0,c.Z)(n,e);var t=(0,s.Z)(n);function n(e){var i;(0,r.Z)(this,n);var c=e.chains,s=void 0===c?u.gL9:c,h=e.options;return i=t.call(this),(0,o._)((0,a.Z)(i),"id",void 0),(0,o._)((0,a.Z)(i),"name",void 0),(0,o._)((0,a.Z)(i),"chains",void 0),(0,o._)((0,a.Z)(i),"options",void 0),(0,o._)((0,a.Z)(i),"ready",void 0),i.chains=s,i.options=h,i}return(0,i.Z)(n,[{key:"getBlockExplorerUrls",value:function(e){var t,n,r=null!==(t=null===(n=e.explorers)||void 0===n?void 0:n.map((function(e){return e.url})))&&void 0!==t?t:[];return r.length>0?r:void 0}},{key:"isChainUnsupported",value:function(e){return!this.chains.some((function(t){return t.chainId===e}))}},{key:"updateChains",value:function(e){this.chains=e}}]),n}(n(65892).Z)},44126:function(e,t,n){n.d(t,{A:function(){return v},C:function(){return f},R:function(){return l},S:function(){return Z},U:function(){return m},a:function(){return p}});var r=n(43144),i=n(15671),a=n(97326),c=n(60136),s=n(29388),o=n(98737),u=n(46170),h=function(e){(0,c.Z)(n,e);var t=(0,s.Z)(n);function n(e,r){var c;(0,i.Z)(this,n);var s=r.cause,o=r.code,h=r.data;if(!Number.isInteger(o))throw new Error('"code" must be an integer.');if(!e||"string"!==typeof e)throw new Error('"message" must be a nonempty string.');return c=t.call(this,"".concat(e,". Cause: ").concat(s)),(0,u._)((0,a.Z)(c),"cause",void 0),(0,u._)((0,a.Z)(c),"code",void 0),(0,u._)((0,a.Z)(c),"data",void 0),c.cause=s,c.code=o,c.data=h,c}return(0,r.Z)(n)}((0,o.Z)(Error)),d=function(e){(0,c.Z)(n,e);var t=(0,s.Z)(n);function n(e,r){(0,i.Z)(this,n);var a=r.cause,c=r.code,s=r.data;if(!(Number.isInteger(c)&&c>=1e3&&c<=4999))throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');return t.call(this,e,{cause:a,code:c,data:s})}return(0,r.Z)(n)}(h),v=function(e){(0,c.Z)(n,e);var t=(0,s.Z)(n);function n(){var e;return(0,i.Z)(this,n),e=t.apply(this,arguments),(0,u._)((0,a.Z)(e),"name","AddChainError"),(0,u._)((0,a.Z)(e),"message","Error adding chain"),e}return(0,r.Z)(n)}((0,o.Z)(Error)),f=function(e){(0,c.Z)(n,e);var t=(0,s.Z)(n);function n(e){var r;(0,i.Z)(this,n);var c=e.chainId,s=e.connectorId;return r=t.call(this,'Chain "'.concat(c,'" not configured for connector "').concat(s,'".')),(0,u._)((0,a.Z)(r),"name","ChainNotConfigured"),r}return(0,r.Z)(n)}((0,o.Z)(Error)),p=function(e){(0,c.Z)(n,e);var t=(0,s.Z)(n);function n(){var e;return(0,i.Z)(this,n),e=t.apply(this,arguments),(0,u._)((0,a.Z)(e),"name","ConnectorNotFoundError"),(0,u._)((0,a.Z)(e),"message","Connector not found"),e}return(0,r.Z)(n)}((0,o.Z)(Error)),l=function(e){(0,c.Z)(n,e);var t=(0,s.Z)(n);function n(e){var r;return(0,i.Z)(this,n),r=t.call(this,"Resource unavailable",{cause:e,code:-32002}),(0,u._)((0,a.Z)(r),"name","ResourceUnavailable"),r}return(0,r.Z)(n)}(h),Z=function(e){(0,c.Z)(n,e);var t=(0,s.Z)(n);function n(e){var r;return(0,i.Z)(this,n),r=t.call(this,"Error switching chain",{cause:e,code:4902}),(0,u._)((0,a.Z)(r),"name","SwitchChainError"),r}return(0,r.Z)(n)}(d),m=function(e){(0,c.Z)(n,e);var t=(0,s.Z)(n);function n(e){var r;return(0,i.Z)(this,n),r=t.call(this,"User rejected request",{cause:e,code:4001}),(0,u._)((0,a.Z)(r),"name","UserRejectedRequestError"),r}return(0,r.Z)(n)}(d)},61779:function(e,t,n){function r(e){return"string"===typeof e?Number.parseInt(e,"0x"===e.trim().substring(0,2)?16:10):"bigint"===typeof e?Number(e):e}n.d(t,{n:function(){return r}})},4263:function(e,t,n){n.r(t),n.d(t,{FrameConnector:function(){return x}});var r=n(29439),i=n(74165),a=n(15861),c=n(1413),s=n(15671),o=n(43144),u=n(97326),h=n(60136),d=n(29388),v=n(63700),f=n(46170),p=n(97419),l=n(60723),Z=n(49716),m=n(20874),w=n(61779),g=n(44126),k=(n(65892),new WeakMap),x=function(e){(0,h.Z)(m,e);var t=(0,d.Z)(m);function m(e){var n;(0,s.Z)(this,m);var r=e.chains,i=e.options,a=e.connectorStorage,o=(0,c.Z)({shimDisconnect:!0},i);return n=t.call(this,{chains:r,options:o}),(0,f._)((0,u.Z)(n),"id","frame"),(0,f._)((0,u.Z)(n),"name","Frame"),(0,f._)((0,u.Z)(n),"ready",!0),(0,f._)((0,u.Z)(n),"shimDisconnectKey","".concat(n.id,".shimDisconnect")),(0,v._)((0,u.Z)(n),k,{writable:!0,value:void 0}),(0,f._)((0,u.Z)(n),"connectorStorage",void 0),(0,f._)((0,u.Z)(n),"onAccountsChanged",(function(e){0===e.length?n.emit("disconnect"):n.emit("change",{account:p.getAddress(e[0])})})),(0,f._)((0,u.Z)(n),"onChainChanged",(function(e){var t=(0,w.n)(e),r=n.isChainUnsupported(t);n.emit("change",{chain:{id:t,unsupported:r}})})),(0,f._)((0,u.Z)(n),"onDisconnect",(function(){n.emit("disconnect"),n.options.shimDisconnect&&n.connectorStorage.removeItem(n.shimDisconnectKey)})),n.connectorStorage=a,n}return(0,o.Z)(m,[{key:"connect",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t){var n,r,a,c,s,o;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.getProvider();case 3:if(n=e.sent){e.next=6;break}throw new g.a;case 6:return this.setupListeners(),this.emit("message",{type:"connecting"}),e.next=10,n.request({method:"eth_requestAccounts"});case 10:return r=e.sent,a=p.getAddress(r[0]),e.next=14,this.getChainId();case 14:if(c=e.sent,s=this.isChainUnsupported(c),null===t||void 0===t||!t.chainId||c===(null===t||void 0===t?void 0:t.chainId)){e.next=22;break}return e.next=19,this.switchChain(null===t||void 0===t?void 0:t.chainId);case 19:o=e.sent,c=o.chainId,s=this.isChainUnsupported(c);case 22:return this.options.shimDisconnect&&this.connectorStorage.setItem(this.shimDisconnectKey,"true"),e.abrupt("return",{account:a,provider:n,chain:{id:c,unsupported:s}});case 26:if(e.prev=26,e.t0=e.catch(0),!this.isUserRejectedRequestError(e.t0)){e.next=30;break}throw new g.U(e.t0);case 30:if(-32002!==e.t0.code){e.next=32;break}throw new g.R(e.t0);case 32:throw e.t0;case 33:case"end":return e.stop()}}),e,this,[[0,26]])})));return function(t){return e.apply(this,arguments)}}()},{key:"disconnect",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getProvider();case 2:if(null!==(t=e.sent)&&void 0!==t&&t.removeListener){e.next=5;break}return e.abrupt("return");case 5:t.removeListener("accountsChanged",this.onAccountsChanged),t.removeListener("chainChanged",this.onChainChanged),t.removeListener("disconnect",this.onDisconnect),this.isInjected()||t.close(),this.options.shimDisconnect&&this.connectorStorage.removeItem(this.shimDisconnectKey);case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getAccount",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(){var t,n;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getProvider();case 2:if(t=e.sent){e.next=5;break}throw new g.a;case 5:return e.next=7,t.request({method:"eth_accounts"});case 7:return n=e.sent,e.abrupt("return",p.getAddress(n[0]));case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getChainId",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(){var t,n;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getProvider();case 2:if(t=e.sent){e.next=5;break}throw new g.a;case 5:return e.next=7,t.request({method:"eth_chainId"});case 7:return n=e.sent,e.abrupt("return",(0,w.n)(n));case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getProvider",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=v.a,e.t1=this,e.t2=k,!this.isInjected()){e.next=7;break}e.t3=this.injectedProvider(),e.next=10;break;case 7:return e.next=9,this.createProvider();case 9:e.t3=e.sent;case 10:return e.t4=e.t3,(0,e.t0)(e.t1,e.t2,e.t4),e.abrupt("return",(0,v.b)(this,k));case 13:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getSigner",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(){var t,n,a,c,s,o=arguments;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(o.length>0&&void 0!==o[0]?o[0]:{}).chainId,e.next=3,Promise.all([this.getProvider(),this.getAccount()]);case 3:return n=e.sent,a=(0,r.Z)(n,2),c=a[0],s=a[1],e.abrupt("return",new l.Q(c,t).getSigner(s));case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"isAuthorized",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!this.options.shimDisconnect||this.connectorStorage.getItem(this.shimDisconnectKey)){e.next=3;break}return e.abrupt("return",!1);case 3:return e.next=5,this.getProvider();case 5:if(e.sent){e.next=8;break}throw new g.a;case 8:return e.next=10,this.getAccount();case 10:return t=e.sent,e.abrupt("return",!!t);case 14:return e.prev=14,e.t0=e.catch(0),e.abrupt("return",!1);case 17:case"end":return e.stop()}}),e,this,[[0,14]])})));return function(){return e.apply(this,arguments)}}()},{key:"switchChain",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t){var n,r,a,c,s,o=this;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getProvider();case 2:if(n=e.sent){e.next=5;break}throw new g.a;case 5:return r=Z.hexValue(t),e.prev=6,e.next=9,Promise.all([n.request({method:"wallet_switchEthereumChain",params:[{chainId:r}]}),new Promise((function(e){return o.on("change",(function(n){var r=n.chain;(null===r||void 0===r?void 0:r.id)===t&&e()}))}))]);case 9:return e.abrupt("return",null!==(a=this.chains.find((function(e){return e.chainId===t})))&&void 0!==a?a:{chainId:t,name:"Chain ".concat(r),slug:"".concat(r),nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpc:[""],chain:"",shortName:"",testnet:!0});case 12:if(e.prev=12,e.t0=e.catch(6),c=this.chains.find((function(e){return e.chainId===t}))){e.next=17;break}throw new g.C({chainId:t,connectorId:this.id});case 17:if(4902!==e.t0.code){e.next=34;break}return e.prev=18,e.next=21,n.request({method:"wallet_addEthereumChain",params:[{chainId:r,chainName:c.name,nativeCurrency:c.nativeCurrency,rpc:[null!==(s=c.rpc[0])&&void 0!==s?s:""],blockExplorerUrls:this.getBlockExplorerUrls(c)}]});case 21:return e.next=23,this.getChainId();case 23:if(e.sent===t){e.next=26;break}throw new g.U(new Error("User rejected switch after adding network."));case 26:return e.abrupt("return",c);case 29:if(e.prev=29,e.t1=e.catch(18),!this.isUserRejectedRequestError(e.t1)){e.next=33;break}throw new g.U(e.t1);case 33:throw new g.A(e.t1.message);case 34:if(!this.isUserRejectedRequestError(e.t0)){e.next=36;break}throw new g.U(e.t0);case 36:throw new g.S(e.t0);case 37:case"end":return e.stop()}}),e,this,[[6,12],[18,29]])})));return function(t){return e.apply(this,arguments)}}()},{key:"watchAsset",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t){var n,r,a,c,s,o;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.address,r=t.decimals,a=void 0===r?18:r,c=t.image,s=t.symbol,e.next=3,this.getProvider();case 3:if(o=e.sent){e.next=6;break}throw new g.a;case 6:return e.abrupt("return",o.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:n,decimals:a,image:c,symbol:s}}}));case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"setupListeners",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getProvider();case 2:(t=e.sent).on&&(t.on("accountsChanged",this.onAccountsChanged),t.on("chainChanged",this.onChainChanged),t.on("disconnect",this.onDisconnect));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"isUserRejectedRequestError",value:function(e){return 4001===e.code}},{key:"injectedProvider",value:function(){var e;return null===(e=window)||void 0===e?void 0:e.ethereum}},{key:"isInjected",value:function(){var e;return!(null===(e=this.injectedProvider())||void 0===e||!e.isFrame)}},{key:"createProvider",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(549).then(n.t.bind(n,40549,23));case 2:return t=e.sent.default,e.abrupt("return",t("frame"));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),m}(m.W)}}]);
//# sourceMappingURL=4263.37a494ed.chunk.js.map