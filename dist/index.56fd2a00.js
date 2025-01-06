let e,t,n,i,r,s,o,a,l,h,c,u,d,p,f,_,m,g;var y,v,w,b,C,I,T,E=globalThis,S={},k=S={};function N(){throw Error("setTimeout has not been defined")}function D(){throw Error("clearTimeout has not been defined")}function R(e){if(w===setTimeout)return setTimeout(e,0);if((w===N||!w)&&setTimeout)return w=setTimeout,setTimeout(e,0);try{return w(e,0)}catch(t){try{return w.call(null,e,0)}catch(t){return w.call(this,e,0)}}}!function(){try{w="function"==typeof setTimeout?setTimeout:N}catch(e){w=N}try{b="function"==typeof clearTimeout?clearTimeout:D}catch(e){b=D}}();var P=[],x=!1,A=-1;function O(){x&&C&&(x=!1,C.length?P=C.concat(P):A=-1,P.length&&L())}function L(){if(!x){var e=R(O);x=!0;for(var t=P.length;t;){for(C=P,P=[];++A<t;)C&&C[A].run();A=-1,t=P.length}C=null,x=!1,function(e){if(b===clearTimeout)return clearTimeout(e);if((b===D||!b)&&clearTimeout)return b=clearTimeout,clearTimeout(e);try{b(e)}catch(t){try{return b.call(null,e)}catch(t){return b.call(this,e)}}}(e)}}function M(e,t){this.fun=e,this.array=t}function F(){}k.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];P.push(new M(e,t)),1!==P.length||x||R(L)},M.prototype.run=function(){this.fun.apply(null,this.array)},k.title="browser",k.browser=!0,k.env={},k.argv=[],k.version="",k.versions={},k.on=F,k.addListener=F,k.once=F,k.off=F,k.removeListener=F,k.removeAllListeners=F,k.emit=F,k.prependListener=F,k.prependOnceListener=F,k.listeners=function(e){return[]},k.binding=function(e){throw Error("process.binding is not supported")},k.cwd=function(){return"/"},k.chdir=function(e){throw Error("process.chdir is not supported")},k.umask=function(){return 0};const q={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},B=function(e,t){if(!e)throw j(t)},j=function(e){return Error("Firebase Database ("+q.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},W=function(e){let t=[],n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:(r<2048?t[n++]=r>>6|192:((64512&r)==55296&&i+1<e.length&&(64512&e.charCodeAt(i+1))==56320?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128):t[n++]=r>>12|224,t[n++]=r>>6&63|128),t[n++]=63&r|128)}return t},$=function(e){let t=[],n=0,i=0;for(;n<e.length;){let r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){let s=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){let s=((7&r)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(s>>10)),t[i++]=String.fromCharCode(56320+(1023&s))}else{let s=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return t.join("")},U={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){let r=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,h=r>>2,c=(3&r)<<4|o>>4,u=(15&o)<<2|l>>6,d=63&l;a||(d=64,s||(u=64)),i.push(n[h],n[c],n[u],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(W(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):$(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){let r=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0,o=++t<e.length?n[e.charAt(t)]:64,a=++t<e.length?n[e.charAt(t)]:64;if(++t,null==r||null==s||null==o||null==a)throw new H;let l=r<<2|s>>4;if(i.push(l),64!==o){let e=s<<4&240|o>>2;if(i.push(e),64!==a){let e=o<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class H extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const z=function(e){let t=W(e);return U.encodeByteArray(t,!0)},V=function(e){return z(e).replace(/\./g,"")},K=function(e){try{return U.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},G=()=>/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==E)return E;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,Y=()=>{if(void 0===S||void 0===S.env)return;let e=void 0;if(e)return JSON.parse(e)},Q=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}let t=e&&K(e[1]);return t&&JSON.parse(t)},J=()=>{try{return G()||Y()||Q()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},X=()=>{var e;return null===(e=J())||void 0===e?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}function ee(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test("undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:"")}function et(){return!0===q.NODE_CLIENT||!0===q.NODE_ADMIN}function en(){try{return"object"==typeof indexedDB}catch(e){return!1}}function ei(){return new Promise((e,t)=>{try{let n=!0,i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})}class er extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,er.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,es.prototype.create)}}class es{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){let n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],s=r?r.replace(eo,(e,t)=>{let i=n[t];return null!=i?String(i):`<${t}?>`}):"Error",o=`${this.serviceName}: ${s} (${i}).`;return new er(i,o,n)}}const eo=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ea(e){return JSON.parse(e)}function el(e){return JSON.stringify(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eh=function(e){let t={},n={},i={},r="";try{let s=e.split(".");t=ea(K(s[0])||""),n=ea(K(s[1])||""),r=s[2],i=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:i,signature:r}},ec=function(e){let t=eh(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},eu=function(e){let t=eh(e).claims;return"object"==typeof t&&!0===t.admin};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ed(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function ep(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function ef(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function e_(e,t,n){let i={};for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=t.call(n,e[r],r,e));return i}function em(e,t){if(e===t)return!0;let n=Object.keys(e),i=Object.keys(t);for(let r of n){if(!i.includes(r))return!1;let n=e[r],s=t[r];if(eg(n)&&eg(s)){if(!em(n,s))return!1}else if(n!==s)return!1}for(let e of i)if(!n.includes(e))return!1;return!0}function eg(e){return null!==e&&"object"==typeof e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=0x67452301,this.chain_[1]=0xefcdab89,this.chain_[2]=0x98badcfe,this.chain_[3]=0x10325476,this.chain_[4]=0xc3d2e1f0,this.inbuf_=0,this.total_=0}compress_(e,t){let n,i;t||(t=0);let r=this.W_;if("string"==typeof e)for(let n=0;n<16;n++)r[n]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let n=0;n<16;n++)r[n]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){let t=r[e-3]^r[e-8]^r[e-14]^r[e-16];r[e]=(t<<1|t>>>31)&0xffffffff}let s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],l=this.chain_[3],h=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(n=l^o&(a^l),i=0x5a827999):(n=o^a^l,i=0x6ed9eba1):e<60?(n=o&a|l&(o|a),i=0x8f1bbcdc):(n=o^a^l,i=0xca62c1d6);let t=(s<<5|s>>>27)+n+h+i+r[e]&0xffffffff;h=l,l=a,a=(o<<30|o>>>2)&0xffffffff,o=s,s=t}this.chain_[0]=this.chain_[0]+s&0xffffffff,this.chain_[1]=this.chain_[1]+o&0xffffffff,this.chain_[2]=this.chain_[2]+a&0xffffffff,this.chain_[3]=this.chain_[3]+l&0xffffffff,this.chain_[4]=this.chain_[4]+h&0xffffffff}update(e,t){if(null==e)return;void 0===t&&(t=e.length);let n=t-this.blockSize,i=0,r=this.buf_,s=this.inbuf_;for(;i<t;){if(0===s)for(;i<=n;)this.compress_(e,i),i+=this.blockSize;if("string"==typeof e){for(;i<t;)if(r[s]=e.charCodeAt(i),++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}else for(;i<t;)if(r[s]=e[i],++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){let e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let i=24;i>=0;i-=8)e[n]=this.chain_[t]>>i&255,++n;return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev=function(e){let t=[],n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);if(r>=55296&&r<=56319){let t=r-55296;B(++i<e.length,"Surrogate pair missing trail surrogate."),r=65536+(t<<10)+(e.charCodeAt(i)-56320)}r<128?t[n++]=r:(r<2048?t[n++]=r>>6|192:(r<65536?t[n++]=r>>12|224:(t[n++]=r>>18|240,t[n++]=r>>12&63|128),t[n++]=r>>6&63|128),t[n++]=63&r|128)}return t},ew=function(e){let t=0;for(let n=0;n<e.length;n++){let i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};function eb(e,t=1e3,n=2){let i=t*Math.pow(n,e),r=Math.round(.5*i*(Math.random()-.5)*2);return Math.min(144e5,i+r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eC(e){return e&&e._delegate?e._delegate:e}class eI{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eT="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new Z;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:eT})}catch(e){}for(let[e,t]of this.instancesDeferred.entries()){let n=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=eT){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=eT){return this.instances.has(e)}getOptions(e=eT){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(let[e,t]of this.instancesDeferred.entries())n===this.normalizeInstanceIdentifier(e)&&t.resolve(i);return i}onInit(e,t){var n;let i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);let s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){let n=this.onInitCallbacks.get(t);if(n)for(let i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:e===eT?void 0:e,options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}return n||null}normalizeInstanceIdentifier(e=eT){return this.component?this.component.multipleInstances?e:eT:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new eE(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ek=[];(y=I||(I={}))[y.DEBUG=0]="DEBUG",y[y.VERBOSE=1]="VERBOSE",y[y.INFO=2]="INFO",y[y.WARN=3]="WARN",y[y.ERROR=4]="ERROR",y[y.SILENT=5]="SILENT";const eN={debug:I.DEBUG,verbose:I.VERBOSE,info:I.INFO,warn:I.WARN,error:I.ERROR,silent:I.SILENT},eD=I.INFO,eR={[I.DEBUG]:"log",[I.VERBOSE]:"log",[I.INFO]:"info",[I.WARN]:"warn",[I.ERROR]:"error"},eP=(e,t,...n)=>{if(t<e.logLevel)return;let i=new Date().toISOString(),r=eR[t];if(r)console[r](`[${i}]  ${e.name}:`,...n);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ex{constructor(e){this.name=e,this._logLevel=eD,this._logHandler=eP,this._userLogHandler=null,ek.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in I))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?eN[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,I.DEBUG,...e),this._logHandler(this,I.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,I.VERBOSE,...e),this._logHandler(this,I.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,I.INFO,...e),this._logHandler(this,I.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,I.WARN,...e),this._logHandler(this,I.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,I.ERROR,...e),this._logHandler(this,I.ERROR,...e)}}const eA=(e,t)=>t.some(t=>e instanceof t),eO=new WeakMap,eL=new WeakMap,eM=new WeakMap,eF=new WeakMap,eq=new WeakMap;let eB={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return eL.get(e);if("objectStoreNames"===t)return e.objectStoreNames||eM.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ej(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function ej(n){var i;if(n instanceof IDBRequest)return function(e){let t=new Promise((t,n)=>{let i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",s)},r=()=>{t(ej(e.result)),i()},s=()=>{n(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&eO.set(t,e)}).catch(()=>{}),eq.set(t,e),t}(n);if(eF.has(n))return eF.get(n);let r="function"==typeof(i=n)?i!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(t||(t=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(i)?function(...e){return i.apply(eW(this),e),ej(eO.get(this))}:function(...e){return ej(i.apply(eW(this),e))}:function(e,...t){let n=i.call(eW(this),e,...t);return eM.set(n,e.sort?e.sort():[e]),ej(n)}:(i instanceof IDBTransaction&&function(e){if(eL.has(e))return;let t=new Promise((t,n)=>{let i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",s),e.removeEventListener("abort",s)},r=()=>{t(),i()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",s),e.addEventListener("abort",s)});eL.set(e,t)}(i),eA(i,e||(e=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(i,eB):i;return r!==n&&(eF.set(n,r),eq.set(r,n)),r}const eW=e=>eq.get(e);function e$(e,t,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){let o=indexedDB.open(e,t),a=ej(o);return i&&o.addEventListener("upgradeneeded",e=>{i(ej(o.result),e.oldVersion,e.newVersion,ej(o.transaction),e)}),n&&o.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),a.then(e=>{s&&e.addEventListener("close",()=>s()),r&&e.addEventListener("versionchange",e=>r(e.oldVersion,e.newVersion,e))}).catch(()=>{}),a}const eU=["get","getKey","getAll","getAllKeys","count"],eH=["put","add","delete","clear"],ez=new Map;function eV(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(ez.get(t))return ez.get(t);let n=t.replace(/FromIndex$/,""),i=t!==n,r=eH.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||eU.includes(n)))return;let s=async function(e,...t){let s=this.transaction(e,r?"readwrite":"readonly"),o=s.store;return i&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),r&&s.done]))[0]};return ez.set(t,s),s}eB={...g=eB,get:(e,t,n)=>eV(e,t)||g.get(e,t,n),has:(e,t)=>!!eV(e,t)||g.has(e,t)};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eK{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}const eG="@firebase/app",eY="0.10.17",eQ=new ex("@firebase/app"),eJ="[DEFAULT]",eX={[eG]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/data-connect":"fire-data-connect","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","@firebase/vertexai":"fire-vertex","fire-js":"fire-js",firebase:"fire-js-all"},eZ=new Map,e0=new Map,e1=new Map;function e2(e,t){try{e.container.addComponent(t)}catch(n){eQ.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function e4(e){let t=e.name;if(e1.has(t))return eQ.debug(`There were multiple attempts to register component ${t}.`),!1;for(let n of(e1.set(t,e),eZ.values()))e2(n,e);for(let t of e0.values())e2(t,e);return!0}function e6(e,t){let n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}const e3=new es("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e5{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new eI("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw e3.create("app-deleted",{appName:this._name})}}function e8(e,t={}){let n=e;"object"!=typeof t&&(t={name:t});let i=Object.assign({name:eJ,automaticDataCollectionEnabled:!1},t),r=i.name;if("string"!=typeof r||!r)throw e3.create("bad-app-name",{appName:String(r)});if(n||(n=X()),!n)throw e3.create("no-options");let s=eZ.get(r);if(s){if(em(n,s.options)&&em(i,s.config))return s;throw e3.create("duplicate-app",{appName:r})}let o=new eS(r);for(let e of e1.values())o.addComponent(e);let a=new e5(n,i,o);return eZ.set(r,a),a}function e9(e,t,n){var i;let r=null!==(i=eX[e])&&void 0!==i?i:e;n&&(r+=`-${n}`);let s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){let e=[`Unable to register library "${r}" with version "${t}":`];s&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),eQ.warn(e.join(" "));return}e4(new eI(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}const e7="firebase-heartbeat-store";let te=null;function tt(){return te||(te=e$("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(e7)}catch(e){console.warn(e)}}}).catch(e=>{throw e3.create("idb-open",{originalErrorMessage:e.message})})),te}async function tn(e){try{let t=(await tt()).transaction(e7),n=await t.objectStore(e7).get(tr(e));return await t.done,n}catch(e){if(e instanceof er)eQ.warn(e.message);else{let t=e3.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});eQ.warn(t.message)}}}async function ti(e,t){try{let n=(await tt()).transaction(e7,"readwrite"),i=n.objectStore(e7);await i.put(t,tr(e)),await n.done}catch(e){if(e instanceof er)eQ.warn(e.message);else{let t=e3.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});eQ.warn(t.message)}}}function tr(e){return`${e.name}!${e.options.appId}`}class ts{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new ta(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){var e,t;try{let n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=to();if((null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(e=>e.date===i))return;return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf();return Date.now()-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache)}catch(e){eQ.warn(e)}}async getHeartbeatsHeader(){var e;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null||0===this._heartbeatsCache.heartbeats.length)return"";let t=to(),{heartbeatsToSend:n,unsentEntries:i}=function(e,t=1024){let n=[],i=e.slice();for(let r of e){let e=n.find(e=>e.agent===r.agent);if(e){if(e.dates.push(r.date),tl(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),tl(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),r=V(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return eQ.warn(e),""}}}function to(){return new Date().toISOString().substring(0,10)}class ta{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!en()&&ei().then(()=>!0).catch(()=>!1)}async read(){if(!await this._canUseIndexedDBPromise)return{heartbeats:[]};{let e=await tn(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let n=await this.read();return ti(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){let n=await this.read();return ti(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function tl(e){return V(JSON.stringify({version:2,heartbeats:e})).length}e4(new eI("platform-logger",e=>new eK(e),"PRIVATE")),e4(new eI("heartbeat",e=>new ts(e),"PRIVATE")),e9(eG,eY,""),e9(eG,eY,"esm2017"),e9("fire-js",""),/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */e9("firebase","11.1.0","app");const th="@firebase/installations",tc="0.6.11",tu=`w:${tc}`,td="FIS_v2",tp=new es("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function tf(e){return e instanceof er&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t_({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function tm(e){return{token:e.token,requestStatus:2,expiresIn:Number(e.expiresIn.replace("s","000")),creationTime:Date.now()}}async function tg(e,t){let n=(await t.json()).error;return tp.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function ty({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}async function tv(e){let t=await e();return t.status>=500&&t.status<600?e():t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tw({appConfig:e,heartbeatServiceProvider:t},{fid:n}){let i=t_(e),r=ty(e),s=t.getImmediate({optional:!0});if(s){let e=await s.getHeartbeatsHeader();e&&r.append("x-firebase-client",e)}let o={method:"POST",headers:r,body:JSON.stringify({fid:n,authVersion:td,appId:e.appId,sdkVersion:tu})},a=await tv(()=>fetch(i,o));if(a.ok){let e=await a.json();return{fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:tm(e.authToken)}}throw await tg("Create Installation",a)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tb(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tC=/^[cdef][\w-]{21}$/;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tI(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tT=new Map;function tE(e,t){let n=tI(e);tS(n,t),function(e,t){let n=(!tk&&"BroadcastChannel"in self&&((tk=new BroadcastChannel("[Firebase] FID Change")).onmessage=e=>{tS(e.data.key,e.data.fid)}),tk);n&&n.postMessage({key:e,fid:t}),0===tT.size&&tk&&(tk.close(),tk=null)}(n,t)}function tS(e,t){let n=tT.get(e);if(n)for(let e of n)e(t)}let tk=null;const tN="firebase-installations-store";let tD=null;function tR(){return tD||(tD=e$("firebase-installations-database",1,{upgrade:(e,t)=>{0===t&&e.createObjectStore(tN)}})),tD}async function tP(e,t){let n=tI(e),i=(await tR()).transaction(tN,"readwrite"),r=i.objectStore(tN),s=await r.get(n);return await r.put(t,n),await i.done,s&&s.fid===t.fid||tE(e,t.fid),t}async function tx(e){let t=tI(e),n=(await tR()).transaction(tN,"readwrite");await n.objectStore(tN).delete(t),await n.done}async function tA(e,t){let n=tI(e),i=(await tR()).transaction(tN,"readwrite"),r=i.objectStore(tN),s=await r.get(n),o=t(s);return void 0===o?await r.delete(n):await r.put(o,n),await i.done,o&&(!s||s.fid!==o.fid)&&tE(e,o.fid),o}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tO(e){let t;let n=await tA(e.appConfig,n=>{let i=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine)return{installationEntry:t,registrationPromise:Promise.reject(tp.create("app-offline"))};let n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=tL(e,n);return{installationEntry:n,registrationPromise:i}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:tM(e)}:{installationEntry:t}}(e,tq(n||{fid:function(){try{let e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;let t=btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_").substr(0,22);return tC.test(t)?t:""}catch(e){return""}}(),registrationStatus:0}));return t=i.registrationPromise,i.installationEntry});return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function tL(e,t){try{let n=await tw(e,t);return tP(e.appConfig,n)}catch(n){throw tf(n)&&409===n.customData.serverCode?await tx(e.appConfig):await tP(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function tM(e){let t=await tF(e.appConfig);for(;1===t.registrationStatus;)await tb(100),t=await tF(e.appConfig);if(0===t.registrationStatus){let{installationEntry:t,registrationPromise:n}=await tO(e);return n||t}return t}function tF(e){return tA(e,e=>{if(!e)throw tp.create("installation-not-found");return tq(e)})}function tq(e){return 1===e.registrationStatus&&e.registrationTime+1e4<Date.now()?{fid:e.fid,registrationStatus:0}:e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tB({appConfig:e,heartbeatServiceProvider:t},n){let i=function(e,{fid:t}){return`${t_(e)}/${t}/authTokens:generate`}(e,n),r=function(e,{refreshToken:t}){let n=ty(e);return n.append("Authorization",`${td} ${t}`),n}(e,n),s=t.getImmediate({optional:!0});if(s){let e=await s.getHeartbeatsHeader();e&&r.append("x-firebase-client",e)}let o={method:"POST",headers:r,body:JSON.stringify({installation:{sdkVersion:tu,appId:e.appId}})},a=await tv(()=>fetch(i,o));if(a.ok)return tm(await a.json());throw await tg("Generate Auth Token",a)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tj(e,t=!1){let n;let i=await tA(e.appConfig,i=>{var r;if(!tH(i))throw tp.create("not-registered");let s=i.authToken;if(!t&&2===(r=s).requestStatus&&!function(e){let t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+36e5}(r))return i;if(1===s.requestStatus)return n=tW(e,t),i;{if(!navigator.onLine)throw tp.create("app-offline");let t=function(e){let t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(i);return n=tU(e,t),t}});return n?await n:i.authToken}async function tW(e,t){let n=await t$(e.appConfig);for(;1===n.authToken.requestStatus;)await tb(100),n=await t$(e.appConfig);let i=n.authToken;return 0===i.requestStatus?tj(e,t):i}function t$(e){return tA(e,e=>{var t;if(!tH(e))throw tp.create("not-registered");return 1===(t=e.authToken).requestStatus&&t.requestTime+1e4<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function tU(e,t){try{let n=await tB(e,t),i=Object.assign(Object.assign({},t),{authToken:n});return await tP(e.appConfig,i),n}catch(n){if(tf(n)&&(401===n.customData.serverCode||404===n.customData.serverCode))await tx(e.appConfig);else{let n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await tP(e.appConfig,n)}throw n}}function tH(e){return void 0!==e&&2===e.registrationStatus}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tz(e){let{installationEntry:t,registrationPromise:n}=await tO(e);return n?n.catch(console.error):tj(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tV(e,t=!1){return await tK(e),(await tj(e,t)).token}async function tK(e){let{registrationPromise:t}=await tO(e);t&&await t}function tG(e){return tp.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tY="installations";e4(new eI(tY,e=>{let t=e.getProvider("app").getImmediate(),n=/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if(!e||!e.options)throw tG("App Configuration");if(!e.name)throw tG("App Name");for(let t of["projectId","apiKey","appId"])if(!e.options[t])throw tG(t);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t),i=e6(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},"PUBLIC")),e4(new eI("installations-internal",e=>{let t=e6(e.getProvider("app").getImmediate(),tY).getImmediate();return{getId:()=>tz(t),getToken:e=>tV(t,e)}},"PRIVATE")),e9(th,tc),e9(th,tc,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tQ="analytics",tJ="https://www.googletagmanager.com/gtag/js",tX=new ex("@firebase/analytics"),tZ=new es("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t0(e){if(!e.startsWith(tJ)){let t=tZ.create("invalid-gtag-resource",{gtagURL:e});return tX.warn(t.message),""}return e}function t1(e){return Promise.all(e.map(e=>e.catch(e=>e)))}async function t2(e,t,n,i,r,s){let o=i[r];try{if(o)await t[o];else{let e=(await t1(n)).find(e=>e.measurementId===r);e&&await t[e.appId]}}catch(e){tX.error(e)}e("config",r,s)}async function t4(e,t,n,i,r){try{let s=[];if(r&&r.send_to){let e=r.send_to;Array.isArray(e)||(e=[e]);let i=await t1(n);for(let n of e){let e=i.find(e=>e.measurementId===n),r=e&&t[e.appId];if(r)s.push(r);else{s=[];break}}}0===s.length&&(s=Object.values(t)),await Promise.all(s),e("event",i,r||{})}catch(e){tX.error(e)}}const t6=new class{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};async function t3(e){var t;let{appId:n,apiKey:i}=e,r={method:"GET",headers:new Headers({Accept:"application/json","x-goog-api-key":i})},s="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),o=await fetch(s,r);if(200!==o.status&&304!==o.status){let e="";try{let n=await o.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(e){}throw tZ.create("config-fetch-failed",{httpStatus:o.status,responseMessage:e})}return o.json()}async function t5(e,t=t6,n){let{appId:i,apiKey:r,measurementId:s}=e.options;if(!i)throw tZ.create("no-app-id");if(!r){if(s)return{measurementId:s,appId:i};throw tZ.create("no-api-key")}let o=t.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new t9;return setTimeout(async()=>{a.abort()},void 0!==n?n:6e4),t8({appId:i,apiKey:r,measurementId:s},o,a,t)}async function t8(e,{throttleEndTimeMillis:t,backoffCount:n},i,r=t6){var s;let{appId:o,measurementId:a}=e;try{await new Promise((e,n)=>{let r=setTimeout(e,Math.max(t-Date.now(),0));i.addEventListener(()=>{clearTimeout(r),n(tZ.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}catch(e){if(a)return tX.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${null==e?void 0:e.message}]`),{appId:o,measurementId:a};throw e}try{let t=await t3(e);return r.deleteThrottleMetadata(o),t}catch(h){if(!function(e){if(!(e instanceof er)||!e.customData)return!1;let t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(h)){if(r.deleteThrottleMetadata(o),a)return tX.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${null==h?void 0:h.message}]`),{appId:o,measurementId:a};throw h}let t=503===Number(null===(s=null==h?void 0:h.customData)||void 0===s?void 0:s.httpStatus)?eb(n,r.intervalMillis,30):eb(n,r.intervalMillis),l={throttleEndTimeMillis:Date.now()+t,backoffCount:n+1};return r.setThrottleMetadata(o,l),tX.debug(`Calling attemptFetch again in ${t} millis`),t8(e,l,i,r)}}class t9{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function t7(e,t,n,i,r){if(r&&r.global){e("event",n,i);return}{let r=await t;e("event",n,Object.assign(Object.assign({},i),{send_to:r}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ne(){if(!en())return tX.warn(tZ.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await ei()}catch(e){return tX.warn(tZ.create("indexeddb-unavailable",{errorInfo:null==e?void 0:e.toString()}).message),!1}return!0}async function nt(e,t,r,s,o,a,l){var h;let c=t5(e);c.then(t=>{r[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&tX.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(e=>tX.error(e)),t.push(c);let u=ne().then(e=>e?s.getId():void 0),[d,p]=await Promise.all([c,u]);!function(e){for(let t of Object.values(window.document.getElementsByTagName("script")))if(t.src&&t.src.includes(tJ)&&t.src.includes(e))return t;return null}(a)&&function(e,t){var n,i;let r;let s=(n="firebase-js-sdk-policy",i={createScriptURL:t0},window.trustedTypes&&(r=window.trustedTypes.createPolicy(n,i)),r),o=document.createElement("script"),a=`${tJ}?l=${e}&id=${t}`;o.src=s?null==s?void 0:s.createScriptURL(a):a,o.async=!0,document.head.appendChild(o)}(a,d.measurementId),i&&(o("consent","default",i),i=void 0),o("js",new Date);let f=null!==(h=null==l?void 0:l.config)&&void 0!==h?h:{};return f.origin="firebase",f.update=!0,null!=p&&(f.firebase_id=p),o("config",d.measurementId,f),n&&(o("set",n),n=void 0),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e){this.app=e}_delete(){return delete ni[this.app.options.appId],Promise.resolve()}}let ni={},nr=[];const ns={};let no="dataLayer",na=!1;const nl="@firebase/analytics",nh="0.10.10";e4(new eI(tQ,(e,{options:t})=>(function(e,t,n){!function(){let e=[];if(function(){let e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()&&e.push("This is a browser extension environment."),"undefined"!=typeof navigator&&navigator.cookieEnabled||e.push("Cookies are not available."),e.length>0){let t=e.map((e,t)=>`(${t+1}) ${e}`).join(" "),n=tZ.create("invalid-analytics-context",{errorInfo:t});tX.warn(n.message)}}();let i=e.options.appId;if(!i)throw tZ.create("no-app-id");if(!e.options.apiKey){if(e.options.measurementId)tX.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw tZ.create("no-api-key")}if(null!=ni[i])throw tZ.create("already-exists",{id:i});if(!na){var o,a;let e,t;e=[],Array.isArray(window[no])?e=window[no]:window[no]=e;let{wrappedGtag:n,gtagCore:i}=(o="gtag",t=function(...e){window[no].push(arguments)},window[o]&&"function"==typeof window[o]&&(t=window[o]),window[o]=(a=t,async function(e,...t){try{if("event"===e){let[e,n]=t;await t4(a,ni,nr,e,n)}else if("config"===e){let[e,n]=t;await t2(a,ni,nr,ns,e,n)}else if("consent"===e){let[e,n]=t;a("consent",e,n)}else if("get"===e){let[e,n,i]=t;a("get",e,n,i)}else if("set"===e){let[e]=t;a("set",e)}else a(e,...t)}catch(e){tX.error(e)}}),{gtagCore:t,wrappedGtag:window[o]});s=n,r=i,na=!0}return ni[i]=nt(e,nr,ns,t,r,no,n),new nn(e)})(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),t),"PUBLIC")),e4(new eI("analytics-internal",function(e){try{let t=e.getProvider(tQ).getImmediate();return{logEvent:(e,n,i)=>{var r;return r=t,void(r=eC(r),t7(s,ni[r.app.options.appId],e,n,i).catch(e=>tX.error(e)))}}}catch(e){throw tZ.create("interop-component-reg-failed",{reason:e})}},"PRIVATE")),e9(nl,nh),e9(nl,nh,"esm2017");const nc="@firebase/database",nu="1.0.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nd="";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),el(t))}get(e){let t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:ea(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return ed(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n_=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){let t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new np(t)}}catch(e){}return new nf},nm=n_("localStorage"),ng=n_("sessionStorage"),ny=new ex("@firebase/database"),nv=(m=1,function(){return m++}),nw=function(e){let t=ev(e),n=new ey;n.update(t);let i=n.digest();return U.encodeByteArray(i)},nb=function(...e){let t="";for(let n=0;n<e.length;n++){let i=e[n];Array.isArray(i)||i&&"object"==typeof i&&"number"==typeof i.length?t+=nb.apply(null,i):"object"==typeof i?t+=el(i):t+=i,t+=" "}return t};let nC=null,nI=!0;const nT=function(e,t){B(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(ny.logLevel=I.VERBOSE,nC=ny.log.bind(ny),t&&ng.set("logging_enabled",!0)):"function"==typeof e?nC=e:(nC=null,ng.remove("logging_enabled"))},nE=function(...e){if(!0===nI&&(nI=!1,null===nC&&!0===ng.get("logging_enabled")&&nT(!0)),nC){let t=nb.apply(null,e);nC(t)}},nS=function(e){return function(...t){nE(e,...t)}},nk=function(...e){let t="FIREBASE INTERNAL ERROR: "+nb(...e);ny.error(t)},nN=function(...e){let t=`FIREBASE FATAL ERROR: ${nb(...e)}`;throw ny.error(t),Error(t)},nD=function(...e){let t="FIREBASE WARNING: "+nb(...e);ny.warn(t)},nR=function(){"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&nD("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},nP=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},nx=function(e){if(et()||"complete"===document.readyState)e();else{let t=!1,n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}t||(t=!0,e())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{"complete"===document.readyState&&n()}),window.attachEvent("onload",n))}},nA="[MIN_NAME]",nO="[MAX_NAME]",nL=function(e,t){if(e===t)return 0;{if(e===nA||t===nO)return -1;if(t===nA||e===nO)return 1;let n=nU(e),i=nU(t);return null!==n?null!==i?n-i==0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},nM=function(e,t){return e===t?0:e<t?-1:1},nF=function(e,t){if(t&&e in t)return t[e];throw Error("Missing required key ("+e+") in object: "+el(t))},nq=function(e){if("object"!=typeof e||null===e)return el(e);let t=[];for(let n in e)t.push(n);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=el(t[i]),n+=":",n+=nq(e[t[i]]);return n+"}"},nB=function(e,t){let n=e.length;if(n<=t)return[e];let i=[];for(let r=0;r<n;r+=t)r+t>n?i.push(e.substring(r,n)):i.push(e.substring(r,r+t));return i};function nj(e,t){for(let n in e)e.hasOwnProperty(n)&&t(n,e[n])}const nW=function(e){let t,n,i,r,s;B(!nP(e),"Invalid JSON number"),0===e?(n=0,i=0,t=1/e==-1/0?1:0):(t=e<0,(e=Math.abs(e))>=22250738585072014e-324?(n=(r=Math.min(Math.floor(Math.log(e)/Math.LN2),1023))+1023,i=Math.round(e*Math.pow(2,52-r)-0x10000000000000)):(n=0,i=Math.round(e/5e-324)));let o=[];for(s=52;s;s-=1)o.push(i%2?1:0),i=Math.floor(i/2);for(s=11;s;s-=1)o.push(n%2?1:0),n=Math.floor(n/2);o.push(t?1:0),o.reverse();let a=o.join(""),l="";for(s=0;s<64;s+=8){let e=parseInt(a.substr(s,8),2).toString(16);1===e.length&&(e="0"+e),l+=e}return l.toLowerCase()},n$=RegExp("^-?(0*)\\d{1,10}$"),nU=function(e){if(n$.test(e)){let t=Number(e);if(t>=-0x80000000&&t<=0x7fffffff)return t}return null},nH=function(e){try{e()}catch(e){setTimeout(()=>{throw nD("Exception was thrown by user callback.",e.stack||""),e},Math.floor(0))}},nz=function(e,t){let n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nV{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then(e=>this.appCheck=e)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,n)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){nD(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nK{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit(e=>this.auth_=e)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(e=>e&&"auth/token-not-initialized"===e.code?(nE("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e)):new Promise((t,n)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',nD(e)}}class nG{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}nG.OWNER="owner";const nY=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,nQ="websocket",nJ="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nX{constructor(e,t,n,i,r=!1,s="",o=!1,a=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=nm.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&nm.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){let e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function nZ(e,t,n){let i;if(B("string"==typeof t,"typeof type must == string"),B("object"==typeof n,"typeof params must == object"),t===nQ)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else if(t===nJ)i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?";else throw Error("Unknown connection type: "+t);(e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams)&&(n.ns=e.namespace);let r=[];return nj(n,(e,t)=>{r.push(e+"="+t)}),i+r.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{constructor(){this.counters_={}}incrementCounter(e,t=1){ed(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return function e(t,n){if(!(n instanceof Object))return n;switch(n.constructor){case Date:return new Date(n.getTime());case Object:void 0===t&&(t={});break;case Array:t=[];break;default:return n}for(let i in n)n.hasOwnProperty(i)&&"__proto__"!==i&&(t[i]=e(t[i],n[i]));return t}(void 0,this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n1={},n2={};function n4(e){let t=e.toString();return n1[t]||(n1[t]=new n0),n1[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n6{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){let e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&nH(()=>{this.onMessage_(e[t])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n3="start";class n5{constructor(e,t,n,i,r,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=nS(e),this.stats_=n4(t),this.urlFn=e=>(this.appCheckToken&&(e.ac=this.appCheckToken),nZ(t,nJ,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new n6(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(3e4)),nx(()=>{if(this.isClosed_)return;this.scriptTagHolder=new n8((...e)=>{let[t,n,i,r,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder){if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===n3)this.id=n,this.password=i;else if("close"===t)n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,()=>{this.onClosed_()})):this.onClosed_();else throw Error("Unrecognized command received: "+t)}},(...e)=>{let[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)},()=>{this.onClosed_()},this.urlFn);let e={};e[n3]="t",e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&nY.test(location.hostname)&&(e.r="f");let t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){n5.forceAllow_=!0}static forceDisallow(){n5.forceDisallow_=!0}static isAvailable(){return!et()&&(!!n5.forceAllow_||!n5.forceDisallow_&&"undefined"!=typeof document&&null!=document.createElement&&!("object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))&&!("object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){!this.isClosed_&&(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){let t=el(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);let n=nB(z(t),1840);for(let e=0;e<n.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,n.length,n[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(et())return;this.myDisconnFrame=document.createElement("iframe");let n={};n.dframe="t",n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){let t=el(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class n8{constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,et())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=nv(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=n8.createIFrame_();let n="";this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)&&(n='<script>document.domain="'+document.domain+'";<\/script>');let i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(e){nE("frame writing exception"),e.stack&&nE(e.stack),nE(e)}}}static createIFrame_(){let e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||nE("No IE domain setting required")}catch(n){let t=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+t+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));let e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(!this.alive||!this.sendNewPolls||!(this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)))return!1;{this.currentSerial++;let e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",i=0;for(;this.pendingSegs.length>0;)if(this.pendingSegs[0].d.length+30+n.length<=1870){let e=this.pendingSegs.shift();n=n+"&seg"+i+"="+e.seg+"&ts"+i+"="+e.ts+"&d"+i+"="+e.d,i++}else break;return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);let n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(25e3));this.addTag(e,()=>{clearTimeout(i),n()})}addTag(e,t){et()?this.doNodeLongPoll(e,t):setTimeout(()=>{try{if(!this.sendNewPolls)return;let n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){let e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{nE("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}},Math.floor(1))}}let n9=null;"undefined"!=typeof MozWebSocket?n9=MozWebSocket:"undefined"!=typeof WebSocket&&(n9=WebSocket);class n7{constructor(e,t,n,i,r,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=nS(this.connId),this.stats_=n4(t),this.connURL=n7.connectionURL_(t,s,o,i,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,i,r){let s={};return s.v="5",!et()&&"undefined"!=typeof location&&location.hostname&&nY.test(location.hostname)&&(s.r="f"),t&&(s.s=t),n&&(s.ls=n),i&&(s.ac=i),r&&(s.p=r),nZ(e,nQ,s)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,nm.set("previous_websocket_failure",!0);try{let e;if(et()){let t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/5/${nd}/${S.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);let n={},i=0===this.connURL.indexOf("wss://")?n.HTTPS_PROXY||n.https_proxy:n.HTTP_PROXY||n.http_proxy;i&&(e.proxy={origin:i})}this.mySock=new n9(this.connURL,[],e)}catch(t){this.log_("Error instantiating WebSocket.");let e=t.message||t.data;e&&this.log_(e),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");let t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){n7.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){let t=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);t&&t.length>1&&4.4>parseFloat(t[1])&&(e=!0)}return!e&&null!==n9&&!n7.forceDisallow_}static previouslyFailed(){return nm.isInMemoryStorage||!0===nm.get("previous_websocket_failure")}markConnectionHealthy(){nm.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){let e=this.frames.join("");this.frames=null;let t=ea(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(B(null===this.frames,"We already have a frame buffer"),e.length<=6){let t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;let t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{let e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();let t=el(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);let n=nB(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){!this.isClosed_&&(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}n7.responsesRequiredToBeHealthy=2,n7.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{static get ALL_TRANSPORTS(){return[n5,n7]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){let t=n7&&n7.isAvailable(),n=t&&!n7.previouslyFailed();if(e.webSocketOnly&&(t||nD("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[n7];else{let e=this.transports_=[];for(let t of ie.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);ie.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ie.globalTransportInitialized_=!1;class it{constructor(e,t,n,i,r,s,o,a,l,h){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=nS("c:"+this.id+":"),this.transportManager_=new ie(t),this.log_("Connection created"),this.start_()}start_(){let e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;let t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,n)},Math.floor(0));let i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=nz(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){this.sendData_({t:"d",d:e})}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){let t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){let t=nF("t",e),n=nF("d",e);if("c"===t)this.onSecondaryControl_(n);else if("d"===t)this.pendingDataMessages.push(n);else throw Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){let t=nF("t",e),n=nF("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){!this.isHealthy_&&(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){let t=nF("t",e);if("d"in e){let n=e.d;if("h"===t){let e=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?nk("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):nk("Unknown control packet command: "+t)}}onHandshake_(e){let t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==n&&nD("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){let e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;let t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),nz(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):nz(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){let e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(nm.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e){this.allowedEvents_=e,this.listeners_={},B(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){let n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});let i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);let i=this.listeners_[e]||[];for(let e=0;e<i.length;e++)if(i[e].callback===t&&(!n||n===i[e].context)){i.splice(e,1);return}}validateEventType_(e){B(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is extends ir{static getInstance(){return new is}constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||ee()||(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return B("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}class io{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function ia(){return new io("")}function il(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function ih(e){return e.pieces_.length-e.pieceNum_}function ic(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new io(e.pieces_,t)}function iu(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function id(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function ip(e){if(e.pieceNum_>=e.pieces_.length)return null;let t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new io(t,0)}function i_(e,t){let n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof io)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{let e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new io(n,0)}function im(e){return e.pieceNum_>=e.pieces_.length}function ig(e,t){let n=il(e),i=il(t);if(null===n)return t;if(n===i)return ig(ic(e),ic(t));throw Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function iy(e,t){if(ih(e)!==ih(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function iv(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(ih(e)>ih(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class iw{constructor(e,t){this.errorPrefix_=t,this.parts_=id(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=ew(this.parts_[e]);ib(this)}}function ib(e){if(e.byteLength_>768)throw Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+iC(e))}function iC(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI extends ir{static getInstance(){return new iI}constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{let t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))},!1)}getInitialEvent(e){return B("visible"===e,"Unknown event type: "+e),[this.visible_]}}class iT extends ii{constructor(e,t,n,i,r,s,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=iT.nextPersistentConnectionId_++,this.log_=nS("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=1e3,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!et())throw Error("Auth override specified in options, but not supported on non Node.js platforms");iI.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&is.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){let i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(el(r)),B(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();let t=new Z,n={p:e._path.toString(),q:e._queryObject};this.outstandingGets_.push({action:"g",request:n,onComplete:e=>{let n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}}),this.outstandingGetCount_++;let i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,i){this.initConnection_();let r=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+r),this.listens.has(s)||this.listens.set(s,new Map),B(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),B(!this.listens.get(s).has(r),"listen() called twice for same path/queryId.");let o={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(s).set(r,o),this.connected_&&this.sendListen_(o)}sendGet_(e){let t=this.outstandingGets_[e];this.sendRequest("g",t.request,n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)})}sendListen_(e){let t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);let r={p:n};e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest("q",r,r=>{let s=r.d,o=r.s;iT.warnOnListenWarnings_(s,t),(this.listens.get(n)&&this.listens.get(n).get(i))===e&&(this.log_("listen response",r),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,s))})}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&ed(e,"w")){let n=ep(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){let e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();nD(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||eu(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){let e=this.authToken_,t=ec(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,t=>{let n=t.s,i=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{let t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)})}unlisten(e,t){let n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),B(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(n,i)&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);let r={p:e};i&&(r.q=n,r.t=i),this.sendRequest("n",r)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){let r={p:t,d:n};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,e=>{i&&setTimeout(()=>{i(e.s,e.d)},Math.floor(0))})}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,r){this.initConnection_();let s={p:t,d:n};void 0!==r&&(s.h=r),this.outstandingPuts_.push({action:e,request:s,onComplete:i}),this.outstandingPutCount_++;let o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){let t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n.s,n.d)})}reportStats(e){if(this.connected_){let t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,e=>{if("ok"!==e.s){let t=e.d;this.log_("reportStats","Error sending stats: "+t)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+el(e));let t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else if("error"in e)throw"A server-side error has occurred: "+e.error;else"a"in e&&this.onDataPush_(e.a,e.b)}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):nk("Unrecognized action received from server: "+el(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){B(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){!e||this.visible_||this.reconnectDelay_!==this.maxReconnectDelay_||(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=1e3),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());let e=new Date().getTime()-this.lastConnectionAttemptTime_,t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;let e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+iT.nextConnectionId_++,r=this.lastSessionId,s=!1,o=null,a=function(){o?o.close():(s=!0,n())};this.realtime_={close:a,sendRequest:function(e){B(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(e)}};let l=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{let[a,h]=await Promise.all([this.authTokenProvider_.getToken(l),this.appCheckTokenProvider_.getToken(l)]);s?nE("getToken() completed but was canceled"):(nE("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=h&&h.token,o=new it(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,e=>{nD(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")},r))}catch(e){this.log_("Failed to get token: "+e),s||(this.repoInfo_.nodeAdmin&&nD(e),a())}}}interrupt(e){nE("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){nE("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ef(this.interruptReasons_)&&(this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){let t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){let t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map(e=>nq(e)).join("$"):"default";let i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){let n;let i=new io(e).toString();if(this.listens.has(i)){let e=this.listens.get(i);n=e.get(t),e.delete(t),0===e.size&&this.listens.delete(i)}else n=void 0;return n}onAuthRevoked_(e,t){nE("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),("invalid_token"===e||"permission_denied"===e)&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){nE("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,("invalid_token"===e||"permission_denied"===e)&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){for(let e of(this.tryAuth(),this.tryAppCheck(),this.listens.values()))for(let t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){let e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){let e={},t="js";et()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+nd.replace(/\./g,"-")]=1,ee()?e["framework.cordova"]=1:"object"==typeof navigator&&"ReactNative"===navigator.product&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){let e=is.getInstance().currentlyOnline();return ef(this.interruptReasons_)&&e}}iT.nextPersistentConnectionId_=0,iT.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new iE(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){let n=new iE(nA,e),i=new iE(nA,t);return 0!==this.compare(n,i)}minPost(){return iE.MIN}}class ik extends iS{static get __EMPTY_NODE(){return o}static set __EMPTY_NODE(e){o=e}compare(e,t){return nL(e.name,t.name)}isDefinedOn(e){throw j("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return iE.MIN}maxPost(){return new iE(nO,o)}makePost(e,t){return B("string"==typeof e,"KeyIndex indexValue must always be a string."),new iE(e,o)}toString(){return".key"}}const iN=new ik;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iD{constructor(e,t,n,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,i&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else if(0===s){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}getNext(){let e;if(0===this.nodeStack_.length)return null;let t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;let e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class iR{constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:iR.RED,this.left=null!=i?i:iP.EMPTY_NODE,this.right=null!=r?r:iP.EMPTY_NODE}copy(e,t,n,i,r){return new iR(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this,r=n(e,i.key);return(i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n))).fixUp_()}removeMin_(){if(this.left.isEmpty())return iP.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),(e=e.copy(null,null,null,e.left.removeMin_(),null)).fixUp_()}remove(e,t){let n,i;if(n=this,0>t(e,n.key))n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return iP.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight_())).rotateLeft_()).colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=(e=e.rotateRight_()).colorFlip_()),e}rotateLeft_(){let e=this.copy(null,null,iR.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){let e=this.copy(null,null,iR.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){return Math.pow(2,this.check_())<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw Error("Right child of ("+this.key+","+this.value+") is red");let e=this.left.check_();if(e===this.right.check_())return e+(this.isRed_()?0:1);throw Error("Black depths differ")}}iR.RED=!0,iR.BLACK=!1;class iP{constructor(e,t=iP.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new iP(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,iR.BLACK,null,null))}remove(e){return new iP(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,iR.BLACK,null,null))}get(e){let t;let n=this.root_;for(;!n.isEmpty();){if(0===(t=this.comparator_(e,n.key)))return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;for(;!n.isEmpty();){if(0===(t=this.comparator_(e,n.key))){if(n.left.isEmpty()){if(i)return i.key;return null}for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new iD(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new iD(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new iD(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new iD(this.root_,null,this.comparator_,!0,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ix(e,t){return nL(e.name,t.name)}function iA(e,t){return nL(e,t)}iP.EMPTY_NODE=new class{copy(e,t,n,i,r){return this}insert(e,t,n){return new iR(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const iO=function(e){return"number"==typeof e?"number:"+nW(e):"string:"+e},iL=function(e){if(e.isLeafNode()){let t=e.val();B("string"==typeof t||"number"==typeof t||"object"==typeof t&&ed(t,".sv"),"Priority must be a string or number.")}else B(e===a||e.isEmpty(),"priority of unexpected type.");B(e===a||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};class iM{static set __childrenNodeConstructor(e){l=e}static get __childrenNodeConstructor(){return l}constructor(e,t=iM.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,B(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),iL(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new iM(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:iM.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return im(e)?this:".priority"===il(e)?this.priorityNode_:iM.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:iM.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){let n=il(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(B(".priority"!==n||1===ih(e),".priority must be the last token in a path"),this.updateImmediateChild(n,iM.__childrenNodeConstructor.EMPTY_NODE.updateChild(ic(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+iO(this.priorityNode_.val())+":");let t=typeof this.value_;e+=t+":","number"===t?e+=nW(this.value_):e+=this.value_,this.lazyHash_=nw(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===iM.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof iM.__childrenNodeConstructor?-1:(B(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){let t=typeof e.value_,n=typeof this.value_,i=iM.VALUE_TYPE_ORDER.indexOf(t),r=iM.VALUE_TYPE_ORDER.indexOf(n);return(B(i>=0,"Unknown leaf type: "+t),B(r>=0,"Unknown leaf type: "+n),i!==r)?r-i:"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1}withIndex(){return this}isIndexed(){return!0}equals(e){return e===this||!!e.isLeafNode()&&this.value_===e.value_&&this.priorityNode_.equals(e.priorityNode_)}}iM.VALUE_TYPE_ORDER=["object","boolean","number","string"];const iF=new class extends iS{compare(e,t){let n=e.node.getPriority(),i=t.node.getPriority(),r=n.compareTo(i);return 0===r?nL(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return iE.MIN}maxPost(){return new iE(nO,new iM("[PRIORITY-POST]",c))}makePost(e,t){return new iE(t,new iM("[PRIORITY-POST]",h(e)))}toString(){return".priority"}},iq=Math.log(2);class iB{constructor(e){this.count=parseInt(Math.log(e+1)/iq,10),this.current_=this.count-1;let t=parseInt(Array(this.count+1).join("1"),2);this.bits_=e+1&t}nextBitIsOne(){let e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ij=function(e,t,n,i){e.sort(t);let r=function(t,i){let s;let o=i-t;if(0===o)return null;if(1===o)return s=e[t],new iR(n?n(s):s,s.node,iR.BLACK,null,null);{let a=parseInt(o/2,10)+t,l=r(t,a),h=r(a+1,i);return s=e[a],new iR(n?n(s):s,s.node,iR.BLACK,l,h)}};return new iP(i||t,function(t){let i=null,s=null,o=e.length,a=function(t,i){let s=o-t,a=o;o-=t;let h=r(s+1,a),c=e[s];l(new iR(n?n(c):c,c.node,i,null,h))},l=function(e){i?i.left=e:s=e,i=e};for(let e=0;e<t.count;++e){let n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,iR.BLACK):(a(i,iR.BLACK),a(i,iR.RED))}return s}(new iB(e.length)))},iW={};class i${static get Default(){return B(iW&&iF,"ChildrenNode.ts has not been loaded"),u=u||new i$({".priority":iW},{".priority":iF})}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){let t=ep(this.indexes_,e);if(!t)throw Error("No index defined for "+e);return t instanceof iP?t:null}hasIndex(e){return ed(this.indexSet_,e.toString())}addIndex(e,t){let n;B(e!==iN,"KeyIndex always exists and isn't meant to be added to the IndexMap.");let i=[],r=!1,s=t.getIterator(iE.Wrap),o=s.getNext();for(;o;)r=r||e.isDefinedOn(o.node),i.push(o),o=s.getNext();n=r?ij(i,e.getCompare()):iW;let a=e.toString(),l=Object.assign({},this.indexSet_);l[a]=e;let h=Object.assign({},this.indexes_);return h[a]=n,new i$(h,l)}addToIndexes(e,t){return new i$(e_(this.indexes_,(n,i)=>{let r=ep(this.indexSet_,i);if(B(r,"Missing index implementation for "+i),n===iW){if(!r.isDefinedOn(e.node))return iW;{let n=[],i=t.getIterator(iE.Wrap),s=i.getNext();for(;s;)s.name!==e.name&&n.push(s),s=i.getNext();return n.push(e),ij(n,r.getCompare())}}{let i=t.get(e.name),r=n;return i&&(r=r.remove(new iE(e.name,i))),r.insert(e,e.node)}}),this.indexSet_)}removeFromIndexes(e,t){return new i$(e_(this.indexes_,n=>{if(n===iW)return n;{let i=t.get(e.name);return i?n.remove(new iE(e.name,i)):n}}),this.indexSet_)}}class iU{static get EMPTY_NODE(){return d||(d=new iU(new iP(iA),null,i$.Default))}constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&iL(this.priorityNode_),this.children_.isEmpty()&&B(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||d}updatePriority(e){return this.children_.isEmpty()?this:new iU(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{let t=this.children_.get(e);return null===t?d:t}}getChild(e){let t=il(e);return null===t?this:this.getImmediateChild(t).getChild(ic(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(B(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{let n,i;let r=new iE(e,t);t.isEmpty()?(n=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(n=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(r,this.children_));let s=n.isEmpty()?d:this.priorityNode_;return new iU(n,s,i)}}updateChild(e,t){let n=il(e);if(null===n)return t;{B(".priority"!==il(e)||1===ih(e),".priority must be the last token in a path");let i=this.getImmediateChild(n).updateChild(ic(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;let t={},n=0,i=0,r=!0;if(this.forEachChild(iF,(s,o)=>{t[s]=o.val(e),n++,r&&iU.INTEGER_REGEXP_.test(s)?i=Math.max(i,Number(s)):r=!1}),e||!r||!(i<2*n))return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t;{let e=[];for(let n in t)e[n]=t[n];return e}}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+iO(this.getPriority().val())+":"),this.forEachChild(iF,(t,n)=>{let i=n.hash();""!==i&&(e+=":"+t+":"+i)}),this.lazyHash_=""===e?"":nw(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){let i=this.resolveIndex_(n);if(!i)return this.children_.getPredecessorKey(e);{let n=i.getPredecessorKey(new iE(e,t));return n?n.name:null}}getFirstChildName(e){let t=this.resolveIndex_(e);if(!t)return this.children_.minKey();{let e=t.minKey();return e&&e.name}}getFirstChild(e){let t=this.getFirstChildName(e);return t?new iE(t,this.children_.get(t)):null}getLastChildName(e){let t=this.resolveIndex_(e);if(!t)return this.children_.maxKey();{let e=t.maxKey();return e&&e.name}}getLastChild(e){let t=this.getLastChildName(e);return t?new iE(t,this.children_.get(t)):null}forEachChild(e,t){let n=this.resolveIndex_(e);return n?n.inorderTraversal(e=>t(e.name,e.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){let n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,e=>e);{let n=this.children_.getIteratorFrom(e.name,iE.Wrap),i=n.peek();for(;null!=i&&0>t.compare(i,e);)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){let n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,e=>e);{let n=this.children_.getReverseIteratorFrom(e.name,iE.Wrap),i=n.peek();for(;null!=i&&t.compare(i,e)>0;)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===iH?-1:0}withIndex(e){if(e===iN||this.indexMap_.hasIndex(e))return this;{let t=this.indexMap_.addIndex(e,this.children_);return new iU(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===iN||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode()||!this.getPriority().equals(e.getPriority())||this.children_.count()!==e.children_.count())return!1;{let t=this.getIterator(iF),n=e.getIterator(iF),i=t.getNext(),r=n.getNext();for(;i&&r;){if(i.name!==r.name||!i.node.equals(r.node))return!1;i=t.getNext(),r=n.getNext()}return null===i&&null===r}}resolveIndex_(e){return e===iN?null:this.indexMap_.get(e.toString())}}iU.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const iH=new class extends iU{constructor(){super(new iP(iA),iU.EMPTY_NODE,i$.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return iU.EMPTY_NODE}isEmpty(){return!1}};function iz(e,t=null){if(null===e)return iU.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),B(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e)return new iM(e,iz(t));if(e instanceof Array){let n=iU.EMPTY_NODE;return nj(e,(t,i)=>{if(ed(e,t)&&"."!==t.substring(0,1)){let e=iz(i);(e.isLeafNode()||!e.isEmpty())&&(n=n.updateImmediateChild(t,e))}}),n.updatePriority(iz(t))}{let n=[],i=!1;if(nj(e,(e,t)=>{if("."!==e.substring(0,1)){let r=iz(t);r.isEmpty()||(i=i||!r.getPriority().isEmpty(),n.push(new iE(e,r)))}}),0===n.length)return iU.EMPTY_NODE;let r=ij(n,ix,e=>e.name,iA);if(!i)return new iU(r,iz(t),i$.Default);{let e=ij(n,iF.getCompare());return new iU(r,iz(t),new i$({".priority":e},{".priority":iF}))}}}Object.defineProperties(iE,{MIN:{value:new iE(nA,iU.EMPTY_NODE)},MAX:{value:new iE(nO,iH)}}),ik.__EMPTY_NODE=iU.EMPTY_NODE,iM.__childrenNodeConstructor=iU,a=iH,c=iH,h=iz;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iV extends iS{constructor(e){super(),this.indexPath_=e,B(!im(e)&&".priority"!==il(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){let n=this.extractChild(e.node),i=this.extractChild(t.node),r=n.compareTo(i);return 0===r?nL(e.name,t.name):r}makePost(e,t){let n=iz(e);return new iE(t,iU.EMPTY_NODE.updateChild(this.indexPath_,n))}maxPost(){return new iE(nO,iU.EMPTY_NODE.updateChild(this.indexPath_,iH))}toString(){return id(this.indexPath_,0).join("/")}}const iK=new /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class extends iS{compare(e,t){let n=e.node.compareTo(t.node);return 0===n?nL(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return iE.MIN}maxPost(){return iE.MAX}makePost(e,t){return new iE(t,iz(e))}toString(){return".value"}};function iG(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iY{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=iF}hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return B(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return(B(this.startSet_,"Only valid if start has been set"),this.startNameSet_)?this.indexStartName_:nA}hasEnd(){return this.endSet_}getIndexEndValue(){return B(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return(B(this.endSet_,"Only valid if end has been set"),this.endNameSet_)?this.indexEndName_:nO}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return B(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===iF}copy(){let e=new iY;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function iQ(e){let t;let n={};if(e.isDefault())return n;if(e.index_===iF?t="$priority":e.index_===iK?t="$value":e.index_===iN?t="$key":(B(e.index_ instanceof iV,"Unrecognized index type!"),t=e.index_.toString()),n.orderBy=el(t),e.startSet_){let t=e.startAfterSet_?"startAfter":"startAt";n[t]=el(e.indexStartValue_),e.startNameSet_&&(n[t]+=","+el(e.indexStartName_))}if(e.endSet_){let t=e.endBeforeSet_?"endBefore":"endAt";n[t]=el(e.indexEndValue_),e.endNameSet_&&(n[t]+=","+el(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?n.limitToFirst=e.limit_:n.limitToLast=e.limit_),n}function iJ(e){let t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==iF&&(t.i=e.index_.toString()),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iX extends ii{reportStats(e){throw Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(B(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=nS("p:rest:"),this.listens_={}}listen(e,t,n,i){let r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);let s=iX.getListenId_(e,n),o={};this.listens_[s]=o;let a=iQ(e._queryParams);this.restRequest_(r+".json",a,(e,t)=>{let a=t;404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(r,a,!1,n),ep(this.listens_,s)===o&&i(e?401===e?"permission_denied":"rest_error:"+e:"ok",null)})}unlisten(e,t){let n=iX.getListenId_(e,t);delete this.listens_[n]}get(e){let t=iQ(e._queryParams),n=e._path.toString(),i=new Z;return this.restRequest_(n+".json",t,(e,t)=>{let r=t;404===e&&(r=null,e=null),null===e?(this.onDataUpdate_(n,r,!1,null),i.resolve(r)):i.reject(Error(r))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);let s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+function(e){let t=[];for(let[n,i]of Object.entries(e))Array.isArray(i)?i.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}(t);this.log_("Sending REST request for "+s);let o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+s+" received. status:",o.status,"response:",o.responseText);let e=null;if(o.status>=200&&o.status<300){try{e=ea(o.responseText)}catch(e){nD("Failed to parse JSON response for "+s+": "+o.responseText)}n(null,e)}else 401!==o.status&&404!==o.status&&nD("Got unsuccessful REST response for "+s+" Status: "+o.status),n(o.status);n=null}},o.open("GET",s,!0),o.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iZ{constructor(){this.rootNode_=iU.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i0(){return{value:null,children:new Map}}function i1(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach((e,n)=>{t(n,e)})}(e,(e,i)=>{i1(i,new io(t.toString()+"/"+e),n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i2{constructor(e){this.collection_=e,this.last_=null}get(){let e=this.collection_.get(),t=Object.assign({},e);return this.last_&&nj(this.last_,(e,n)=>{t[e]=t[e]-n}),this.last_=e,t}}class i4{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new i2(e);let n=1e4+2e4*Math.random();nz(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){let e=this.statsListener_.get(),t={},n=!1;nj(e,(e,i)=>{i>0&&ed(this.statsToReport_,e)&&(t[e]=i,n=!0)}),n&&this.server_.reportStats(t),nz(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}function i6(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function i3(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function i5(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}(v=T||(T={}))[v.OVERWRITE=0]="OVERWRITE",v[v.MERGE=1]="MERGE",v[v.ACK_USER_WRITE=2]="ACK_USER_WRITE",v[v.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i8{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=T.ACK_USER_WRITE,this.source=i6()}operationForChild(e){if(!im(this.path))return B(il(this.path)===e,"operationForChild called for unrelated child."),new i8(ic(this.path),this.affectedTree,this.revert);if(null!=this.affectedTree.value)return B(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{let t=this.affectedTree.subtree(new io(e));return new i8(ia(),t,this.revert)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i9{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=T.OVERWRITE}operationForChild(e){return im(this.path)?new i9(this.source,ia(),this.snap.getImmediateChild(e)):new i9(this.source,ic(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i7{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=T.MERGE}operationForChild(e){if(!im(this.path))return B(il(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new i7(this.source,ic(this.path),this.children);{let t=this.children.subtree(new io(e));return t.isEmpty()?null:t.value?new i9(this.source,ia(),t.value):new i7(this.source,ia(),t)}}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(im(e))return this.isFullyInitialized()&&!this.filtered_;let t=il(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function rt(e,t,n,i,r,s){let o=i.filter(e=>e.type===n);o.sort((t,n)=>(function(e,t,n){if(null==t.childName||null==n.childName)throw j("Should only compare child_ events.");let i=new iE(t.childName,t.snapshotNode),r=new iE(n.childName,n.snapshotNode);return e.index_.compare(i,r)})(e,t,n)),o.forEach(n=>{let i=("value"===n.type||"child_removed"===n.type||(n.prevName=s.getPredecessorChildName(n.childName,n.snapshotNode,e.index_)),n);r.forEach(r=>{r.respondsTo(n.type)&&t.push(r.createEvent(i,e.query_))})})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(e,t){return{eventCache:e,serverCache:t}}function ri(e,t,n,i){return rn(new re(t,n,i),e.serverCache)}function rr(e,t,n,i){return rn(e.eventCache,new re(t,n,i))}function rs(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function ro(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}const ra=()=>(p||(p=new iP(nM)),p);class rl{static fromObject(e){let t=new rl(null);return nj(e,(e,n)=>{t=t.set(new io(e),n)}),t}constructor(e,t=ra()){this.value=e,this.children=t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:ia(),value:this.value};if(im(e))return null;{let n=il(e),i=this.children.get(n);if(null===i)return null;{let r=i.findRootMostMatchingPathAndValue(ic(e),t);return null!=r?{path:i_(new io(n),r.path),value:r.value}:null}}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(im(e))return this;{let t=il(e),n=this.children.get(t);return null!==n?n.subtree(ic(e)):new rl(null)}}set(e,t){if(im(e))return new rl(t,this.children);{let n=il(e),i=(this.children.get(n)||new rl(null)).set(ic(e),t),r=this.children.insert(n,i);return new rl(this.value,r)}}remove(e){if(im(e))return this.children.isEmpty()?new rl(null):new rl(null,this.children);{let t=il(e),n=this.children.get(t);if(!n)return this;{let i;let r=n.remove(ic(e));return(i=r.isEmpty()?this.children.remove(t):this.children.insert(t,r),null===this.value&&i.isEmpty())?new rl(null):new rl(this.value,i)}}}get(e){if(im(e))return this.value;{let t=il(e),n=this.children.get(t);return n?n.get(ic(e)):null}}setTree(e,t){if(im(e))return t;{let n;let i=il(e),r=(this.children.get(i)||new rl(null)).setTree(ic(e),t);return n=r.isEmpty()?this.children.remove(i):this.children.insert(i,r),new rl(this.value,n)}}fold(e){return this.fold_(ia(),e)}fold_(e,t){let n={};return this.children.inorderTraversal((i,r)=>{n[i]=r.fold_(i_(e,i),t)}),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,ia(),t)}findOnPath_(e,t,n){let i=!!this.value&&n(t,this.value);if(i)return i;if(im(e))return null;{let i=il(e),r=this.children.get(i);return r?r.findOnPath_(ic(e),i_(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ia(),t)}foreachOnPath_(e,t,n){if(im(e))return this;{this.value&&n(t,this.value);let i=il(e),r=this.children.get(i);return r?r.foreachOnPath_(ic(e),i_(t,i),n):new rl(null)}}foreach(e){this.foreach_(ia(),e)}foreach_(e,t){this.children.inorderTraversal((n,i)=>{i.foreach_(i_(e,n),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,n)=>{n.value&&e(t,n.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(e){this.writeTree_=e}static empty(){return new rh(new rl(null))}}function rc(e,t,n){if(im(t))return new rh(new rl(n));{let i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){let r=i.path,s=i.value,o=ig(r,t);return s=s.updateChild(o,n),new rh(e.writeTree_.set(r,s))}{let i=new rl(n);return new rh(e.writeTree_.setTree(t,i))}}}function ru(e,t,n){let i=e;return nj(n,(e,n)=>{i=rc(i,i_(t,e),n)}),i}function rd(e,t){return im(t)?rh.empty():new rh(e.writeTree_.setTree(t,new rl(null)))}function rp(e,t){return null!=rf(e,t)}function rf(e,t){let n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(ig(n.path,t)):null}function r_(e){let t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(iF,(e,n)=>{t.push(new iE(e,n))}):e.writeTree_.children.inorderTraversal((e,n)=>{null!=n.value&&t.push(new iE(e,n.value))}),t}function rm(e,t){if(im(t))return e;{let n=rf(e,t);return new rh(null!=n?new rl(n):e.writeTree_.subtree(t))}}function rg(e){return e.writeTree_.isEmpty()}function ry(e,t){return function e(t,n,i){if(null!=n.value)return i.updateChild(t,n.value);{let r=null;return n.children.inorderTraversal((n,s)=>{".priority"===n?(B(null!==s.value,"Priority writes must always be leaf nodes"),r=s.value):i=e(i_(t,n),s,i)}),i.getChild(t).isEmpty()||null===r||(i=i.updateChild(i_(t,".priority"),r)),i}}(ia(),e.writeTree_,t)}function rv(e){return e.visible}function rw(e,t,n){let i=rh.empty();for(let r=0;r<e.length;++r){let s=e[r];if(t(s)){let e;let t=s.path;if(s.snap)iv(n,t)?i=rc(i,e=ig(n,t),s.snap):iv(t,n)&&(e=ig(t,n),i=rc(i,ia(),s.snap.getChild(e)));else if(s.children){if(iv(n,t))i=ru(i,e=ig(n,t),s.children);else if(iv(t,n)){if(im(e=ig(t,n)))i=ru(i,ia(),s.children);else{let t=ep(s.children,il(e));if(t){let n=t.getChild(ic(e));i=rc(i,ia(),n)}}}}else throw j("WriteRecord should have .snap or .children")}}return i}function rb(e,t,n,i,r){if(i||r){let s=rm(e.visibleWrites,t);return!r&&rg(s)?n:r||null!=n||rp(s,ia())?ry(rw(e.allWrites,function(e){return(e.visible||r)&&(!i||!~i.indexOf(e.writeId))&&(iv(e.path,t)||iv(t,e.path))},t),n||iU.EMPTY_NODE):null}{let i=rf(e.visibleWrites,t);if(null!=i)return i;{let i=rm(e.visibleWrites,t);return rg(i)?n:null!=n||rp(i,ia())?ry(i,n||iU.EMPTY_NODE):null}}}function rC(e,t,n,i){return rb(e.writeTree,e.treePath,t,n,i)}function rI(e,t){return function(e,t,n){let i=iU.EMPTY_NODE,r=rf(e.visibleWrites,t);if(r)return r.isLeafNode()||r.forEachChild(iF,(e,t)=>{i=i.updateImmediateChild(e,t)}),i;if(!n)return r_(rm(e.visibleWrites,t)).forEach(e=>{i=i.updateImmediateChild(e.name,e.node)}),i;{let r=rm(e.visibleWrites,t);return n.forEachChild(iF,(e,t)=>{let n=ry(rm(r,new io(e)),t);i=i.updateImmediateChild(e,n)}),r_(r).forEach(e=>{i=i.updateImmediateChild(e.name,e.node)}),i}}(e.writeTree,e.treePath,t)}function rT(e,t,n,i){return function(e,t,n,i,r){B(i||r,"Either existingEventSnap or existingServerSnap must exist");let s=i_(t,n);if(rp(e.visibleWrites,s))return null;{let t=rm(e.visibleWrites,s);return rg(t)?r.getChild(n):ry(t,r.getChild(n))}}(e.writeTree,e.treePath,t,n,i)}function rE(e,t){var n,i;return n=e.writeTree,i=i_(e.treePath,t),rf(n.visibleWrites,i)}function rS(e,t,n){return function(e,t,n,i){let r=i_(t,n),s=rf(e.visibleWrites,r);return null!=s?s:i.isCompleteForChild(n)?ry(rm(e.visibleWrites,r),i.getNode().getImmediateChild(n)):null}(e.writeTree,e.treePath,t,n)}function rk(e,t){return rN(i_(e.treePath,t),e.writeTree)}function rN(e,t){return{treePath:e,writeTree:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rD{constructor(){this.changeMap=new Map}trackChildChange(e){let t=e.type,n=e.childName;B("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),B(".priority"!==n,"Only non-priority child changes can be tracked.");let i=this.changeMap.get(n);if(i){let r=i.type;if("child_added"===t&&"child_removed"===r)this.changeMap.set(n,iG(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===r)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===r)this.changeMap.set(n,{type:"child_removed",snapshotNode:i.oldSnap,childName:n});else if("child_changed"===t&&"child_added"===r)this.changeMap.set(n,{type:"child_added",snapshotNode:e.snapshotNode,childName:n});else if("child_changed"===t&&"child_changed"===r)this.changeMap.set(n,iG(n,e.snapshotNode,i.oldSnap));else throw j("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}const rR=new /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class rP{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){let t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{let t=null!=this.optCompleteServerCache_?new re(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return rS(this.writes_,e,t)}}getChildAfterChild(e,t,n){var i;let r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:ro(this.viewCache_),s=function(e,t,n,i,r,s,o){let a;let l=rm(e.visibleWrites,t),h=rf(l,ia());if(null!=h)a=h;else{if(null==n)return[];a=ry(l,n)}if((a=a.withIndex(o)).isEmpty()||a.isLeafNode())return[];{let e=[],t=o.getCompare(),n=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o),r=n.getNext();for(;r&&e.length<1;)0!==t(r,i)&&e.push(r),r=n.getNext();return e}}((i=this.writes_).writeTree,i.treePath,r,t,0,n,e);return 0===s.length?null:s[0]}}function rx(e,t,n,i,r,s){let o=t.eventCache;if(null!=rE(i,n))return t;{let a,l;if(im(n)){if(B(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){let n=ro(t),r=rI(i,n instanceof iU?n:iU.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),r,s)}else{let n=rC(i,ro(t));a=e.filter.updateFullNode(t.eventCache.getNode(),n,s)}}else{let h=il(n);if(".priority"===h){B(1===ih(n),"Can't have a priority with additional path components");let r=o.getNode(),s=rT(i,n,r,l=t.serverCache.getNode());a=null!=s?e.filter.updatePriority(r,s):o.getNode()}else{let c;let u=ic(n);if(o.isCompleteForChild(h)){l=t.serverCache.getNode();let e=rT(i,n,o.getNode(),l);c=null!=e?o.getNode().getImmediateChild(h).updateChild(u,e):o.getNode().getImmediateChild(h)}else c=rS(i,h,t.serverCache);a=null!=c?e.filter.updateChild(o.getNode(),h,c,u,r,s):o.getNode()}}return ri(t,a,o.isFullyInitialized()||im(n),e.filter.filtersNodes())}}function rA(e,t,n,i,r,s,o,a){let l;let h=t.serverCache,c=o?e.filter:e.filter.getIndexedFilter();if(im(n))l=c.updateFullNode(h.getNode(),i,null);else if(c.filtersNodes()&&!h.isFiltered()){let e=h.getNode().updateChild(n,i);l=c.updateFullNode(h.getNode(),e,null)}else{let e=il(n);if(!h.isCompleteForPath(n)&&ih(n)>1)return t;let r=ic(n),s=h.getNode().getImmediateChild(e).updateChild(r,i);l=".priority"===e?c.updatePriority(h.getNode(),s):c.updateChild(h.getNode(),e,s,r,rR,null)}let u=rr(t,l,h.isFullyInitialized()||im(n),c.filtersNodes()),d=new rP(r,u,s);return rx(e,u,n,r,d,a)}function rO(e,t,n,i,r,s,o){let a,l;let h=t.eventCache,c=new rP(r,t,s);if(im(n))l=e.filter.updateFullNode(t.eventCache.getNode(),i,o),a=ri(t,l,!0,e.filter.filtersNodes());else{let r=il(n);if(".priority"===r)l=e.filter.updatePriority(t.eventCache.getNode(),i),a=ri(t,l,h.isFullyInitialized(),h.isFiltered());else{let s;let l=ic(n),u=h.getNode().getImmediateChild(r);if(im(l))s=i;else{let e=c.getCompleteChild(r);s=null!=e?".priority"===iu(l)&&e.getChild(ip(l)).isEmpty()?e:e.updateChild(l,i):iU.EMPTY_NODE}a=u.equals(s)?t:ri(t,e.filter.updateChild(h.getNode(),r,s,l,c,o),h.isFullyInitialized(),e.filter.filtersNodes())}}return a}function rL(e,t){return e.eventCache.isCompleteForChild(t)}function rM(e,t,n){return n.foreach((e,n)=>{t=t.updateChild(e,n)}),t}function rF(e,t,n,i,r,s,o,a){let l;if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let h=t;l=im(n)?i:new rl(null).setTree(n,i);let c=t.serverCache.getNode();return l.children.inorderTraversal((n,i)=>{if(c.hasChild(n)){let l=rM(e,t.serverCache.getNode().getImmediateChild(n),i);h=rA(e,h,new io(n),l,r,s,o,a)}}),l.children.inorderTraversal((n,i)=>{let l=!t.serverCache.isCompleteForChild(n)&&null===i.value;if(!c.hasChild(n)&&!l){let l=rM(e,t.serverCache.getNode().getImmediateChild(n),i);h=rA(e,h,new io(n),l,r,s,o,a)}}),h}function rq(e,t,n,i){var r,s;t.type===T.MERGE&&null!==t.source.queryId&&(B(ro(e.viewCache_),"We should always have a full cache before handling merges"),B(rs(e.viewCache_),"Missing event cache, even though we have a server cache"));let o=e.viewCache_,a=function(e,t,n,i,r){let s,o;let a=new rD;if(n.type===T.OVERWRITE)n.source.fromUser?s=rO(e,t,n.path,n.snap,i,r,a):(B(n.source.fromServer,"Unknown source."),o=n.source.tagged||t.serverCache.isFiltered()&&!im(n.path),s=rA(e,t,n.path,n.snap,i,r,o,a));else if(n.type===T.MERGE){var l,h;let c;n.source.fromUser?(l=n.path,h=n.children,c=t,h.foreach((n,s)=>{let o=i_(l,n);rL(t,il(o))&&(c=rO(e,c,o,s,i,r,a))}),h.foreach((n,s)=>{let o=i_(l,n);rL(t,il(o))||(c=rO(e,c,o,s,i,r,a))}),s=c):(B(n.source.fromServer,"Unknown source."),o=n.source.tagged||t.serverCache.isFiltered(),s=rF(e,t,n.path,n.children,i,r,o,a))}else if(n.type===T.ACK_USER_WRITE)s=n.revert?function(e,t,n,i,r,s){let o;if(null!=rE(i,n))return t;{let a;let l=new rP(i,t,r),h=t.eventCache.getNode();if(im(n)||".priority"===il(n)){let n;if(t.serverCache.isFullyInitialized())n=rC(i,ro(t));else{let e=t.serverCache.getNode();B(e instanceof iU,"serverChildren would be complete if leaf node"),n=rI(i,e)}a=e.filter.updateFullNode(h,n,s)}else{let r=il(n),c=rS(i,r,t.serverCache);null==c&&t.serverCache.isCompleteForChild(r)&&(c=h.getImmediateChild(r)),(a=null!=c?e.filter.updateChild(h,r,c,ic(n),l,s):t.eventCache.getNode().hasChild(r)?e.filter.updateChild(h,r,iU.EMPTY_NODE,ic(n),l,s):h).isEmpty()&&t.serverCache.isFullyInitialized()&&(o=rC(i,ro(t))).isLeafNode()&&(a=e.filter.updateFullNode(a,o,s))}return o=t.serverCache.isFullyInitialized()||null!=rE(i,ia()),ri(t,a,o,e.filter.filtersNodes())}}(e,t,n.path,i,r,a):function(e,t,n,i,r,s,o){if(null!=rE(r,n))return t;let a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=i.value){if(im(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return rA(e,t,n,l.getNode().getChild(n),r,s,a,o);if(!im(n))return t;{let i=new rl(null);return l.getNode().forEachChild(iN,(e,t)=>{i=i.set(new io(e),t)}),rF(e,t,n,i,r,s,a,o)}}{let h=new rl(null);return i.foreach((e,t)=>{let i=i_(n,e);l.isCompleteForPath(i)&&(h=h.set(e,l.getNode().getChild(i)))}),rF(e,t,n,h,r,s,a,o)}}(e,t,n.path,n.affectedTree,i,r,a);else if(n.type===T.LISTEN_COMPLETE)s=function(e,t,n,i,r){let s=t.serverCache;return rx(e,rr(t,s.getNode(),s.isFullyInitialized()||im(n),s.isFiltered()),n,i,rR,r)}(e,t,n.path,i,a);else throw j("Unknown operation type: "+n.type);let c=a.getChanges();return function(e,t,n){let i=t.eventCache;if(i.isFullyInitialized()){let r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=rs(e);!(n.length>0)&&e.eventCache.isFullyInitialized()&&(!r||i.getNode().equals(s))&&i.getNode().getPriority().equals(s.getPriority())||n.push({type:"value",snapshotNode:rs(t)})}}(t,s,c),{viewCache:s,changes:c}}(e.processor_,o,t,n,i);return r=e.processor_,B((s=a.viewCache).eventCache.getNode().isIndexed(r.filter.getIndex()),"Event snap not indexed"),B(s.serverCache.getNode().isIndexed(r.filter.getIndex()),"Server snap not indexed"),B(a.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=a.viewCache,function(e,t,n,i){let r=e.eventRegistrations_;return function(e,t,n,i){let r=[],s=[];return t.forEach(t=>{if("child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)){var n;s.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))}}),rt(e,r,"child_removed",t,i,n),rt(e,r,"child_added",t,i,n),rt(e,r,"child_moved",s,i,n),rt(e,r,"child_changed",t,i,n),rt(e,r,"value",t,i,n),r}(e.eventGenerator_,t,n,r)}(e,a.changes,a.viewCache.eventCache.getNode(),0)}function rB(e,t,n,i){let r=t.source.queryId;if(null!==r){let s=e.views.get(r);return B(null!=s,"SyncTree gave us an op for an invalid query."),rq(s,t,n,i)}{let r=[];for(let s of e.views.values())r=r.concat(rq(s,t,n,i));return r}}function rj(e,t){let n=null;for(let i of e.views.values())n=n||function(e,t){let n=ro(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!im(t)&&!n.getImmediateChild(il(t)).isEmpty())?n.getChild(t):null}(i,t);return n}class rW{constructor(e){this.listenProvider_=e,this.syncPointTree_=new rl(null),this.pendingWriteTree_={visibleWrites:rh.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function r$(e,t,n=!1){let i=function(e,t){for(let n=0;n<e.allWrites.length;n++){let i=e.allWrites[n];if(i.writeId===t)return i}return null}(e.pendingWriteTree_,t);if(!function(e,t){let n=e.allWrites.findIndex(e=>e.writeId===t);B(n>=0,"removeWrite called with nonexistent writeId.");let i=e.allWrites[n];e.allWrites.splice(n,1);let r=i.visible,s=!1,o=e.allWrites.length-1;for(;r&&o>=0;){let t=e.allWrites[o];t.visible&&(o>=n&&function(e,t){if(e.snap)return iv(e.path,t);for(let n in e.children)if(e.children.hasOwnProperty(n)&&iv(i_(e.path,n),t))return!0;return!1}(t,i.path)?r=!1:iv(i.path,t.path)&&(s=!0)),o--}return!!r&&(s?(e.visibleWrites=rw(e.allWrites,rv,ia()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1):i.snap?e.visibleWrites=rd(e.visibleWrites,i.path):nj(i.children,t=>{e.visibleWrites=rd(e.visibleWrites,i_(i.path,t))}),!0)}(e.pendingWriteTree_,t))return[];{let t=new rl(null);return null!=i.snap?t=t.set(ia(),!0):nj(i.children,e=>{t=t.set(new io(e),!0)}),rz(e,new i8(i.path,t,n))}}function rU(e,t,n){return rz(e,new i9(i3(),t,n))}function rH(e,t,n){let i=e.pendingWriteTree_,r=e.syncPointTree_.findOnPath(t,(e,n)=>{let i=rj(n,ig(e,t));if(i)return i});return rb(i,t,r,n,!0)}function rz(e,t){var n;return function e(t,n,i,r){if(im(t.path))return function e(t,n,i,r){let s=n.get(ia());null==i&&null!=s&&(i=rj(s,ia()));let o=[];return n.children.inorderTraversal((n,s)=>{let a=i?i.getImmediateChild(n):null,l=rk(r,n),h=t.operationForChild(n);h&&(o=o.concat(e(h,s,a,l)))}),s&&(o=o.concat(rB(s,t,r,i))),o}(t,n,i,r);{let s=n.get(ia());null==i&&null!=s&&(i=rj(s,ia()));let o=[],a=il(t.path),l=t.operationForChild(a),h=n.children.get(a);if(h&&l){let t=i?i.getImmediateChild(a):null,n=rk(r,a);o=o.concat(e(l,h,t,n))}return s&&(o=o.concat(rB(s,t,r,i))),o}}(t,e.syncPointTree_,null,(n=e.pendingWriteTree_,rN(ia(),n)))}function rV(e,t){return e.tagToQueryMap.get(t)}function rK(e){let t=e.indexOf("$");return B(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new io(e.substr(0,t))}}function rG(e,t,n){let i=e.syncPointTree_.get(t);return B(i,"Missing sync point for query tag that we're tracking"),rB(i,n,rN(t,e.pendingWriteTree_),null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rY{constructor(e){this.node_=e}getImmediateChild(e){return new rY(this.node_.getImmediateChild(e))}node(){return this.node_}}class rQ{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){let t=i_(this.path_,e);return new rQ(this.syncTree_,t)}node(){return rH(this.syncTree_,this.path_)}}const rJ=function(e,t,n){return e&&"object"==typeof e?(B(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"])?rX(e[".sv"],t,n):"object"==typeof e[".sv"]?rZ(e[".sv"],t):void B(!1,"Unexpected server value: "+JSON.stringify(e,null,2)):e},rX=function(e,t,n){if("timestamp"===e)return n.timestamp;B(!1,"Unexpected server value: "+e)},rZ=function(e,t,n){e.hasOwnProperty("increment")||B(!1,"Unexpected server value: "+JSON.stringify(e,null,2));let i=e.increment;"number"!=typeof i&&B(!1,"Unexpected increment value: "+i);let r=t.node();if(B(null!=r,"Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;let s=r.getValue();return"number"!=typeof s?i:s+i};function r0(e,t,n){let i;let r=rJ(e.getPriority().val(),t.getImmediateChild(".priority"),n);if(!e.isLeafNode())return i=e,r!==e.getPriority().val()&&(i=i.updatePriority(new iM(r))),e.forEachChild(iF,(e,r)=>{let s=r0(r,t.getImmediateChild(e),n);s!==r&&(i=i.updateImmediateChild(e,s))}),i;{let i=rJ(e.getValue(),t,n);return i!==e.getValue()||r!==e.getPriority().val()?new iM(i,iz(r)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function r2(e,t){let n=t instanceof io?t:new io(t),i=e,r=il(n);for(;null!==r;){let e=ep(i.node.children,r)||{children:{},childCount:0};i=new r1(r,i,e),r=il(n=ic(n))}return i}function r4(e){return e.node.value}function r6(e,t){e.node.value=t,function e(t){null!==t.parent&&function(t,n,i){let r=void 0===r4(i)&&!r3(i),s=ed(t.node.children,n);r&&s?(delete t.node.children[n],t.node.childCount--,e(t)):r||s||(t.node.children[n]=i.node,t.node.childCount++,e(t))}(t.parent,t.name,t)}(e)}function r3(e){return e.node.childCount>0}function r5(e,t){nj(e.node.children,(n,i)=>{t(new r1(n,e,i))})}function r8(e){return new io(null===e.parent?e.name:r8(e.parent)+"/"+e.name)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r9=/[\[\].#$\/\u0000-\u001F\u007F]/,r7=/[\[\].#$\u0000-\u001F\u007F]/,se=function(e){return"string"==typeof e&&0!==e.length&&!r9.test(e)},st=function(e){var t;return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),"string"==typeof(t=e)&&0!==t.length&&!r7.test(t)},sn=function(e,t,n){let i=n instanceof io?new iw(n,e):n;if(void 0===t)throw Error(e+"contains undefined "+iC(i));if("function"==typeof t)throw Error(e+"contains a function "+iC(i)+" with contents = "+t.toString());if(nP(t))throw Error(e+"contains "+t.toString()+" "+iC(i));if("string"==typeof t&&t.length>0xa00000/3&&ew(t)>0xa00000)throw Error(e+"contains a string greater than 10485760 utf8 bytes "+iC(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,r=!1;if(nj(t,(t,s)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(r=!0,!se(t)))throw Error(e+" contains an invalid key ("+t+") "+iC(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');i.parts_.length>0&&(i.byteLength_+=1),i.parts_.push(t),i.byteLength_+=ew(t),ib(i),sn(e,s,i),function(e){let t=e.parts_.pop();e.byteLength_-=ew(t),e.parts_.length>0&&(e.byteLength_-=1)}(i)}),n&&r)throw Error(e+' contains ".value" child '+iC(i)+" in addition to actual children.")}},si=function(e,t){let n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!se(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!st(n))throw Error(`${e} failed: url argument must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ss(e,t,n){!function(e,t){let n=null;for(let i=0;i<t.length;i++){let r=t[i],s=r.getPath();null===n||iy(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(r)}n&&e.eventLists_.push(n)}(e,n),function(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){let r=e.eventLists_[i];r&&(t(r.path)?(function(e){for(let t=0;t<e.events.length;t++){let n=e.events[t];if(null!==n){e.events[t]=null;let i=n.getEventRunner();nC&&nE("event: "+n.toString()),nH(i)}}}(e.eventLists_[i]),e.eventLists_[i]=null):n=!1)}n&&(e.eventLists_=[]),e.recursionDepth_--}(e,e=>iv(e,t)||iv(t,e))}class so{constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new sr,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=i0(),this.transactionQueueTree_=new r1,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function sa(e){var t;return(t=t={timestamp:function(e){let t=e.infoData_.getNode(new io(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}(e)}).timestamp=t.timestamp||new Date().getTime(),t}function sl(e,t,n,i,r){e.dataUpdateCount++;let s=new io(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(r){if(i){let t=e_(n,e=>iz(e));o=function(e,t,n,i){let r=rV(e,i);if(!r)return[];{let i=rK(r),s=i.path,o=i.queryId,a=ig(s,t),l=rl.fromObject(n);return rG(e,s,new i7(i5(o),a,l))}}(e.serverSyncTree_,s,t,r)}else{let t=iz(n);o=function(e,t,n,i){let r=rV(e,i);if(null==r)return[];{let i=rK(r),s=i.path,o=i.queryId,a=ig(s,t);return rG(e,s,new i9(i5(o),a,n))}}(e.serverSyncTree_,s,t,r)}}else if(i){let t=e_(n,e=>iz(e));o=function(e,t,n){let i=rl.fromObject(n);return rz(e,new i7(i3(),t,i))}(e.serverSyncTree_,s,t)}else{let t=iz(n);o=rU(e.serverSyncTree_,s,t)}let a=s;o.length>0&&(a=sp(e,s)),ss(e.eventQueue_,a,o)}function sh(e,t){sc(e,"connected",t),!1===t&&function(e){su(e,"onDisconnectEvents");let t=sa(e),n=i0();i1(e.onDisconnect_,ia(),(i,r)=>{let s=r0(r,new rQ(e.serverSyncTree_,i),t);!function e(t,n,i){if(im(n))t.value=i,t.children.clear();else if(null!==t.value)t.value=t.value.updateChild(n,i);else{let r=il(n);t.children.has(r)||t.children.set(r,i0()),e(t.children.get(r),n=ic(n),i)}}(n,i,s)});let i=[];i1(n,ia(),(t,n)=>{i=i.concat(rU(e.serverSyncTree_,t,n));let r=function(e,t){let n=r8(sf(e,t)),i=r2(e.transactionQueueTree_,t);return function(e,t,n){let i=e.parent;for(;null!==i;){if(t(i))return!0;i=i.parent}}(i,t=>{sg(e,t)}),sg(e,i),function e(t,n,i,r){i&&!r&&n(t),r5(t,t=>{e(t,n,!0,r)}),i&&r&&n(t)}(i,t=>{sg(e,t)}),n}(e,t);sp(e,r)}),e.onDisconnect_=i0(),ss(e.eventQueue_,ia(),i)}(e)}function sc(e,t,n){let i=new io("/.info/"+t),r=iz(n);e.infoData_.updateSnapshot(i,r);let s=rU(e.infoSyncTree_,i,r);ss(e.eventQueue_,i,s)}function su(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),nE(n,...t)}function sd(e,t,n){return rH(e.serverSyncTree_,t,n)||iU.EMPTY_NODE}function sp(e,t){let n=sf(e,t),i=r8(n),r=s_(e,n);return function(e,t,n){if(0===t.length)return;let i=[],r=[],s=t.filter(e=>0===e.status).map(e=>e.currentWriteId);for(let o=0;o<t.length;o++){let a=t[o],l=ig(n,a.path),h=!1,c;if(B(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null."),4===a.status)h=!0,c=a.abortReason,r=r.concat(r$(e.serverSyncTree_,a.currentWriteId,!0));else if(0===a.status){if(a.retryCount>=25)h=!0,c="maxretry",r=r.concat(r$(e.serverSyncTree_,a.currentWriteId,!0));else{let n=sd(e,a.path,s);a.currentInputSnapshot=n;let i=t[o].update(n.val());if(void 0!==i){sn("transaction failed: Data returned ",i,a.path);let t=iz(i);"object"==typeof i&&null!=i&&ed(i,".priority")||(t=t.updatePriority(n.getPriority()));let o=a.currentWriteId,l=sa(e),h=r0(t,new rY(n),l);a.currentOutputSnapshotRaw=t,a.currentOutputSnapshotResolved=h,a.currentWriteId=e.nextWriteId_++,s.splice(s.indexOf(o),1),r=(r=r.concat(function(e,t,n,i,r){var s,o;return(s=e.pendingWriteTree_,o=r,B(i>s.lastWriteId,"Stacking an older write on top of newer ones"),void 0===o&&(o=!0),s.allWrites.push({path:t,snap:n,writeId:i,visible:o}),o&&(s.visibleWrites=rc(s.visibleWrites,t,n)),s.lastWriteId=i,r)?rz(e,new i9(i6(),t,n)):[]}(e.serverSyncTree_,a.path,h,a.currentWriteId,a.applyLocally))).concat(r$(e.serverSyncTree_,o,!0))}else h=!0,c="nodata",r=r.concat(r$(e.serverSyncTree_,a.currentWriteId,!0))}}ss(e.eventQueue_,n,r),r=[],h&&(t[o].status=2,setTimeout(t[o].unwatcher,Math.floor(0)),t[o].onComplete&&("nodata"===c?i.push(()=>t[o].onComplete(null,!1,t[o].currentInputSnapshot)):i.push(()=>t[o].onComplete(Error(c),!1,null))))}sm(e,e.transactionQueueTree_);for(let e=0;e<i.length;e++)nH(i[e]);(function e(t,n=t.transactionQueueTree_){if(n||sm(t,n),r4(n)){let i=s_(t,n);B(i.length>0,"Sending zero length transaction queue"),i.every(e=>0===e.status)&&function(t,n,i){let r=sd(t,n,i.map(e=>e.currentWriteId)),s=r,o=r.hash();for(let e=0;e<i.length;e++){let t=i[e];B(0===t.status,"tryToSendTransactionQueue_: items in queue should all be run."),t.status=1,t.retryCount++;let r=ig(n,t.path);s=s.updateChild(r,t.currentOutputSnapshotRaw)}let a=s.val(!0);t.server_.put(n.toString(),a,r=>{su(t,"transaction put response",{path:n.toString(),status:r});let s=[];if("ok"===r){let r=[];for(let e=0;e<i.length;e++)i[e].status=2,s=s.concat(r$(t.serverSyncTree_,i[e].currentWriteId)),i[e].onComplete&&r.push(()=>i[e].onComplete(null,!0,i[e].currentOutputSnapshotResolved)),i[e].unwatcher();sm(t,r2(t.transactionQueueTree_,n)),e(t,t.transactionQueueTree_),ss(t.eventQueue_,n,s);for(let e=0;e<r.length;e++)nH(r[e])}else{if("datastale"===r)for(let e=0;e<i.length;e++)3===i[e].status?i[e].status=4:i[e].status=0;else{nD("transaction at "+n.toString()+" failed: "+r);for(let e=0;e<i.length;e++)i[e].status=4,i[e].abortReason=r}sp(t,n)}},o)}(t,r8(n),i)}else r3(n)&&r5(n,n=>{e(t,n)})})(e,e.transactionQueueTree_)}(e,r,i),i}function sf(e,t){let n;let i=e.transactionQueueTree_;for(n=il(t);null!==n&&void 0===r4(i);)i=r2(i,n),n=il(t=ic(t));return i}function s_(e,t){let n=[];return function e(t,n,i){let r=r4(n);if(r)for(let e=0;e<r.length;e++)i.push(r[e]);r5(n,n=>{e(t,n,i)})}(e,t,n),n.sort((e,t)=>e.order-t.order),n}function sm(e,t){let n=r4(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,r6(t,n.length>0?n:void 0)}r5(t,t=>{sm(e,t)})}function sg(e,t){let n=r4(t);if(n){let i=[],r=[],s=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(B(s===t-1,"All SENT items should be at beginning of queue."),s=t,n[t].status=3,n[t].abortReason="set"):(B(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),r=r.concat(r$(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,Error("set"),!1,null))));-1===s?r6(t,void 0):n.length=s+1,ss(e.eventQueue_,r8(t),r);for(let e=0;e<i.length;e++)nH(i[e])}}const sy=function(e,t){let n=sv(e),i=n.namespace;"firebase.com"===n.domain&&nN(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||nN("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||nR();let r="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new nX(n.host,n.secure,i,r,t,"",i!==n.subdomain),path:new io(n.pathString)}},sv=function(e){let t="",n="",i="",r="",s="",o=!0,a="https",l=443;if("string"==typeof e){let h=e.indexOf("//");h>=0&&(a=e.substring(0,h-1),e=e.substring(h+2));let c=e.indexOf("/");-1===c&&(c=e.length);let u=e.indexOf("?");-1===u&&(u=e.length),t=e.substring(0,Math.min(c,u)),c<u&&(r=/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t="",n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let i=n[e];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(e){}t+="/"+i}return t}(e.substring(c,u)));let d=function(e){let t={};for(let n of("?"===e.charAt(0)&&(e=e.substring(1)),e.split("&"))){if(0===n.length)continue;let i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):nD(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,u)));(h=t.indexOf(":"))>=0?(o="https"===a||"wss"===a,l=parseInt(t.substring(h+1),10)):h=t.length;let p=t.slice(0,h);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{let e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),s=i}"ns"in d&&(s=d.ns)}return{host:t,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}get key(){return im(this._path)?null:iu(this._path)}get ref(){return new sb(this._repo,this._path)}get _queryIdentifier(){let e=nq(iJ(this._queryParams));return"{}"===e?"default":e}get _queryObject(){return iJ(this._queryParams)}isEqual(e){if(!((e=eC(e))instanceof sw))return!1;let t=this._repo===e._repo,n=iy(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}class sb extends sw{constructor(e,t){super(e,t,new iY,!1)}get parent(){let e=ip(this._path);return null===e?null:new sb(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}}B(!f,"__referenceConstructor has already been defined"),f=sb,B(!_,"__referenceConstructor has already been defined"),_=sb;const sC={};class sI{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(function(e,t,n){if(e.stats_=n4(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new iX(e.repoInfo_,(t,n,i,r)=>{sl(e,t,n,i,r)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>sh(e,!0),0);else{if(null!=n){if("object"!=typeof n)throw Error("Only objects are supported for option databaseAuthVariableOverride");try{el(n)}catch(e){throw Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new iT(e.repoInfo_,t,(t,n,i,r)=>{sl(e,t,n,i,r)},t=>{sh(e,t)},t=>{nj(t,(t,n)=>{sc(e,t,n)})},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(t=>{e.server_.refreshAuthToken(t)}),e.appCheckProvider_.addTokenChangeListener(t=>{e.server_.refreshAppCheckToken(t.token)}),e.statsReporter_=function(e,t){let n=e.toString();return n2[n]||(n2[n]=t()),n2[n]}(e.repoInfo_,()=>new i4(e.stats_,e.server_)),e.infoData_=new iZ,e.infoSyncTree_=new rW({startListening:(t,n,i,r)=>{let s=[],o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=rU(e.infoSyncTree_,t._path,o),setTimeout(()=>{r("ok")},0)),s},stopListening:()=>{}}),sc(e,"connected",!1),e.serverSyncTree_=new rW({startListening:(t,n,i,r)=>(e.server_.listen(t,i,n,(n,i)=>{let s=r(n,i);ss(e.eventQueue_,t._path,s)}),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new sb(this._repo,ia())),this._rootInternal}_delete(){return null!==this._rootInternal&&(function(e,t){let n=sC[t];n&&n[e.key]===e||nN(`Database ${t}(${e.repoInfo_}) has already been deleted.`),e.persistentConnection_&&e.persistentConnection_.interrupt("repo_interrupt"),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&nN("Cannot call "+e+" on a deleted database.")}}iT.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},iT.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)},nd="11.1.0",e4(new eI("database",(e,{instanceIdentifier:t})=>(function(e,t,n,i,r){var s,o;let a,l,h,c,u=i||e.options.databaseURL;void 0===u&&(e.options.projectId||nN("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),nE("Using default host for project ",e.options.projectId),u=`${e.options.projectId}-default-rtdb.firebaseio.com`);let d=sy(u,void 0),p=d.repoInfo;void 0!==S&&S.env&&(h=S.env.FIREBASE_DATABASE_EMULATOR_HOST),h?(c=!0,p=(d=sy(u=`http://${h}?ns=${p.namespace}`,void 0)).repoInfo):c=!d.repoInfo.secure;let f=new nK(e.name,e.options,t);return si("Invalid Firebase Database URL",d),im(d.path)||nN("Database URL must point to the root of a Firebase Database (not including a child path)."),new sI((s=p,o=new nV(e.name,n),(a=sC[e.name])||(a={},sC[e.name]=a),(l=a[s.toURLString()])&&nN("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new so(s,!1,f,o),a[s.toURLString()]=l,l),e)})(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t),"PUBLIC").setMultipleInstances(!0)),e9(nc,nu,void 0),e9(nc,nu,"esm2017"),function(e=function(e=eJ){let t=eZ.get(e);if(!t&&e===eJ&&X())return e8();if(!t)throw e3.create("no-app",{appName:e});return t}()){let t=e6(e=eC(e),tQ);t.isInitialized()?t.getImmediate():function(e,t={}){let n=e6(e,tQ);if(n.isInitialized()){let e=n.getImmediate();if(em(t,n.getOptions()))return e;throw tZ.create("already-initialized")}return n.initialize({options:t})}(e)}(e8({apiKey:"AIzaSyBrBT42Yn4nmQ5EHzzZMLN4JJKiV4UbJD4",authDomain:"reminder-app-81d22.firebaseapp.com",databaseURL:"https://reminder-app-81d22-default-rtdb.firebaseio.com",projectId:"reminder-app-81d22",storageBucket:"reminder-app-81d22.firebasestorage.app",messagingSenderId:"37109372943",appId:"1:37109372943:web:28bf06121469faab47ab7a",measurementId:"G-3XZCVNSRF9"}));class sT{constructor(e,t,n,i=null){this.comment=e,this.datetime=new Date(t),this.frequency=n,this.disableTime=i?new Date(i):null}}const sE=[],sS=document.getElementById("popup"),sk=document.getElementById("save-reminder"),sN=document.getElementById("close-popup"),sD=document.getElementById("new-reminder-btn"),sR=document.getElementById("frequency"),sP=document.getElementById("custom-frequency"),sx=document.getElementById("custom-minutes"),sA=document.getElementById("disable-time-checkbox"),sO=document.getElementById("disable-datetime-container"),sL=document.getElementById("reminder-items");let sM=null;function sF(e){e.timeoutId&&(clearTimeout(e.timeoutId),e.timeoutId=null)}function sq(e){let t=new Date,n=e.datetime-t;if(n<=0&&(e.datetime=new Date(t.getTime()+6e4*e.frequency)),e.disableTime&&t>=e.disableTime){sB(e);return}e.timeoutId=setTimeout(()=>{var t;if(t=e.comment,"granted"===Notification.permission?new Notification("Reminder",{body:t}):"default"===Notification.permission?Notification.requestPermission().then(e=>{"granted"===e?new Notification("Reminder",{body:t}):console.warn("Notifications denied by the user.")}):console.warn("Notifications are blocked. Please enable them in your browser settings."),e.disableTime&&new Date>=e.disableTime){sB(e);return}e.datetime=new Date(e.datetime.getTime()+6e4*e.frequency),sq(e),function(e){let t=sE.indexOf(e);if(-1!==t){let n=sL.children[t],i=new Date,r=s$(e.datetime-i);n.innerHTML=`
            <div class="reminder-details">
                <div class="comment">${e.comment}</div>
                <div class="time">Next reminder: ${e.datetime.toLocaleString()}</div>
                <div class="time-left">Time left: ${r}</div>
                ${e.disableTime?`<div class="disable-time">Disable at: ${e.disableTime.toLocaleString()}</div>`:""}
            </div>
            <button class="edit-btn" data-index="${t}">Edit</button>
            <button class="delete-btn" data-index="${t}">Delete</button>
        `,n.querySelector(".edit-btn").addEventListener("click",()=>{sW(e)}),n.querySelector(".delete-btn").addEventListener("click",()=>{sB(e)})}}(e)},n)}function sB(e){let t=sE.indexOf(e);-1!==t&&(sF(e),sE.splice(t,1),sj())}function sj(){sL.innerHTML="",sE.forEach((e,t)=>{let n=new Date,i=e.datetime-n;e.disableTime&&e.disableTime.toLocaleString();let r=s$(i),s=document.createElement("li");s.innerHTML=`
            <div class="reminder-details">
                <div class="comment">${e.comment}</div>
                <div class="time">${e.datetime.toLocaleString()}</div>
                <div class="time-left">Time left: ${r}</div>
                ${e.disableTime?`<div class="disable-time">Disable at: ${e.disableTime.toLocaleString()}</div>`:""}
            </div>
            <button class="edit-btn" data-index="${t}">Edit</button>
            <button class="delete-btn" data-index="${t}">Delete</button>
        `,sL.appendChild(s)}),document.querySelectorAll(".edit-btn").forEach(e=>{e.addEventListener("click",e=>{sW(sE[e.target.getAttribute("data-index")])})}),document.querySelectorAll(".delete-btn").forEach(e=>{e.addEventListener("click",e=>{let t=e.target.getAttribute("data-index");sE.splice(t,1),sj()})})}function sW(e){sM=e,document.getElementById("comment").value=e.comment;let t=new Date(e.datetime.getTime()-6e4*e.datetime.getTimezoneOffset()).toISOString().slice(0,16);if(document.getElementById("reminder-datetime").value=t,e.frequency&&60!==e.frequency&&120!==e.frequency?(sR.value="custom",sP.classList.remove("hidden"),sx.value=e.frequency):(sR.value=e.frequency.toString(),sP.classList.add("hidden"),sx.value=""),e.disableTime){sA.checked=!0,sO.classList.remove("hidden");let t=new Date(e.disableTime.getTime()-6e4*e.disableTime.getTimezoneOffset()).toISOString().slice(0,16);document.getElementById("disable-datetime").value=t}else sA.checked=!1,sO.classList.add("hidden"),document.getElementById("disable-datetime").value="";sS.classList.remove("hidden")}function s$(e){let t=Math.floor(e/6e4)%60,n=Math.floor(e/36e5)%24,i=Math.floor(e/864e5);return i>0?`${i}d ${n}h ${t}m`:n>0?`${n}h ${t}m`:`${t}m`}sD.addEventListener("click",()=>{sS.classList.remove("hidden"),document.getElementById("comment").value="",document.getElementById("reminder-datetime").value="",sR.value="60",sP.classList.add("hidden"),sx.value="",sA.checked=!1,sO.classList.add("hidden"),document.getElementById("disable-datetime").value="",sM=null}),sN.addEventListener("click",()=>{sS.classList.add("hidden")}),sR.addEventListener("change",()=>{"custom"===sR.value?sP.classList.remove("hidden"):sP.classList.add("hidden")}),sA.addEventListener("change",()=>{sA.checked?sO.classList.remove("hidden"):sO.classList.add("hidden")}),sk.addEventListener("click",()=>{let e=document.getElementById("comment").value,t=document.getElementById("reminder-datetime").value,n="custom"===sR.value?parseInt(sx.value)||60:parseInt(sR.value),i=sA.checked?document.getElementById("disable-datetime").value:null;if(!e||!t)return alert("Please fill in all required fields.");if(sM)sF(sM),sM.comment=e,sM.datetime=new Date(t),sM.frequency=n,sM.disableTime=i?new Date(i):null,sq(sM);else{let r=new sT(e,t,n,i);sE.push(r),sq(r)}sj(),sS.classList.add("hidden")});
//# sourceMappingURL=index.56fd2a00.js.map
