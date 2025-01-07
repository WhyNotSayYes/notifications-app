let e,t,n,i,r,s,o,a,l,h,c,u,d,p,f,_,m,g;var y,v,w,b,C,I,T,E,S=globalThis,k={},N=k={};function D(){throw Error("setTimeout has not been defined")}function R(){throw Error("clearTimeout has not been defined")}function P(e){if(b===setTimeout)return setTimeout(e,0);if((b===D||!b)&&setTimeout)return b=setTimeout,setTimeout(e,0);try{return b(e,0)}catch(t){try{return b.call(null,e,0)}catch(t){return b.call(this,e,0)}}}!function(){try{b="function"==typeof setTimeout?setTimeout:D}catch(e){b=D}try{C="function"==typeof clearTimeout?clearTimeout:R}catch(e){C=R}}();var x=[],A=!1,O=-1;function L(){A&&I&&(A=!1,I.length?x=I.concat(x):O=-1,x.length&&M())}function M(){if(!A){var e=P(L);A=!0;for(var t=x.length;t;){for(I=x,x=[];++O<t;)I&&I[O].run();O=-1,t=x.length}I=null,A=!1,function(e){if(C===clearTimeout)return clearTimeout(e);if((C===R||!C)&&clearTimeout)return C=clearTimeout,clearTimeout(e);try{C(e)}catch(t){try{return C.call(null,e)}catch(t){return C.call(this,e)}}}(e)}}function F(e,t){this.fun=e,this.array=t}function q(){}N.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];x.push(new F(e,t)),1!==x.length||A||P(M)},F.prototype.run=function(){this.fun.apply(null,this.array)},N.title="browser",N.browser=!0,N.env={},N.argv=[],N.version="",N.versions={},N.on=q,N.addListener=q,N.once=q,N.off=q,N.removeListener=q,N.removeAllListeners=q,N.emit=q,N.prependListener=q,N.prependOnceListener=q,N.listeners=function(e){return[]},N.binding=function(e){throw Error("process.binding is not supported")},N.cwd=function(){return"/"},N.chdir=function(e){throw Error("process.chdir is not supported")},N.umask=function(){return 0};/**
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
 */const B={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},j=function(e,t){if(!e)throw W(t)},W=function(e){return Error("Firebase Database ("+B.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},$=function(e){let t=[],n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:(r<2048?t[n++]=r>>6|192:((64512&r)==55296&&i+1<e.length&&(64512&e.charCodeAt(i+1))==56320?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128):t[n++]=r>>12|224,t[n++]=r>>6&63|128),t[n++]=63&r|128)}return t},U=function(e){let t=[],n=0,i=0;for(;n<e.length;){let r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){let s=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){let s=((7&r)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(s>>10)),t[i++]=String.fromCharCode(56320+(1023&s))}else{let s=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return t.join("")},H={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){let r=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,h=r>>2,c=(3&r)<<4|o>>4,u=(15&o)<<2|l>>6,d=63&l;a||(d=64,s||(u=64)),i.push(n[h],n[c],n[u],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray($(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):U(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){let r=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0,o=++t<e.length?n[e.charAt(t)]:64,a=++t<e.length?n[e.charAt(t)]:64;if(++t,null==r||null==s||null==o||null==a)throw new z;let l=r<<2|s>>4;if(i.push(l),64!==o){let e=s<<4&240|o>>2;if(i.push(e),64!==a){let e=o<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class z extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const V=function(e){let t=$(e);return H.encodeByteArray(t,!0)},K=function(e){return V(e).replace(/\./g,"")},G=function(e){try{return H.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},Y=()=>/**
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
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==S)return S;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,Q=()=>{if(void 0===k||void 0===k.env)return;let e=void 0;if(e)return JSON.parse(e)},J=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}let t=e&&G(e[1]);return t&&JSON.parse(t)},X=()=>{try{return Y()||Q()||J()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Z=()=>{var e;return null===(e=X())||void 0===e?void 0:e.config};/**
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
 */class ee{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}function et(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test("undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:"")}function en(){return!0===B.NODE_CLIENT||!0===B.NODE_ADMIN}function ei(){try{return"object"==typeof indexedDB}catch(e){return!1}}function er(){return new Promise((e,t)=>{try{let n=!0,i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})}class es extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,es.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,eo.prototype.create)}}class eo{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){let n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],s=r?r.replace(ea,(e,t)=>{let i=n[t];return null!=i?String(i):`<${t}?>`}):"Error",o=`${this.serviceName}: ${s} (${i}).`;return new es(i,o,n)}}const ea=/\{\$([^}]+)}/g;/**
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
 */function el(e){return JSON.parse(e)}function eh(e){return JSON.stringify(e)}/**
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
 */const ec=function(e){let t={},n={},i={},r="";try{let s=e.split(".");t=el(G(s[0])||""),n=el(G(s[1])||""),r=s[2],i=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:i,signature:r}},eu=function(e){let t=ec(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},ed=function(e){let t=ec(e).claims;return"object"==typeof t&&!0===t.admin};/**
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
 */function ep(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function ef(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function e_(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function em(e,t,n){let i={};for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=t.call(n,e[r],r,e));return i}function eg(e,t){if(e===t)return!0;let n=Object.keys(e),i=Object.keys(t);for(let r of n){if(!i.includes(r))return!1;let n=e[r],s=t[r];if(ey(n)&&ey(s)){if(!eg(n,s))return!1}else if(n!==s)return!1}for(let e of i)if(!n.includes(e))return!1;return!0}function ey(e){return null!==e&&"object"==typeof e}/**
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
 */class ev{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=0x67452301,this.chain_[1]=0xefcdab89,this.chain_[2]=0x98badcfe,this.chain_[3]=0x10325476,this.chain_[4]=0xc3d2e1f0,this.inbuf_=0,this.total_=0}compress_(e,t){let n,i;t||(t=0);let r=this.W_;if("string"==typeof e)for(let n=0;n<16;n++)r[n]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let n=0;n<16;n++)r[n]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){let t=r[e-3]^r[e-8]^r[e-14]^r[e-16];r[e]=(t<<1|t>>>31)&0xffffffff}let s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],l=this.chain_[3],h=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(n=l^o&(a^l),i=0x5a827999):(n=o^a^l,i=0x6ed9eba1):e<60?(n=o&a|l&(o|a),i=0x8f1bbcdc):(n=o^a^l,i=0xca62c1d6);let t=(s<<5|s>>>27)+n+h+i+r[e]&0xffffffff;h=l,l=a,a=(o<<30|o>>>2)&0xffffffff,o=s,s=t}this.chain_[0]=this.chain_[0]+s&0xffffffff,this.chain_[1]=this.chain_[1]+o&0xffffffff,this.chain_[2]=this.chain_[2]+a&0xffffffff,this.chain_[3]=this.chain_[3]+l&0xffffffff,this.chain_[4]=this.chain_[4]+h&0xffffffff}update(e,t){if(null==e)return;void 0===t&&(t=e.length);let n=t-this.blockSize,i=0,r=this.buf_,s=this.inbuf_;for(;i<t;){if(0===s)for(;i<=n;)this.compress_(e,i),i+=this.blockSize;if("string"==typeof e){for(;i<t;)if(r[s]=e.charCodeAt(i),++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}else for(;i<t;)if(r[s]=e[i],++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){let e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let i=24;i>=0;i-=8)e[n]=this.chain_[t]>>i&255,++n;return e}}/**
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
 */const ew=function(e){let t=[],n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);if(r>=55296&&r<=56319){let t=r-55296;j(++i<e.length,"Surrogate pair missing trail surrogate."),r=65536+(t<<10)+(e.charCodeAt(i)-56320)}r<128?t[n++]=r:(r<2048?t[n++]=r>>6|192:(r<65536?t[n++]=r>>12|224:(t[n++]=r>>18|240,t[n++]=r>>12&63|128),t[n++]=r>>6&63|128),t[n++]=63&r|128)}return t},eb=function(e){let t=0;for(let n=0;n<e.length;n++){let i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};function eC(e,t=1e3,n=2){let i=t*Math.pow(n,e),r=Math.round(.5*i*(Math.random()-.5)*2);return Math.min(144e5,i+r)}/**
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
 */function eI(e){return e&&e._delegate?e._delegate:e}class eT{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const eE="[DEFAULT]";/**
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
 */class eS{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new ee;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:eE})}catch(e){}for(let[e,t]of this.instancesDeferred.entries()){let n=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=eE){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=eE){return this.instances.has(e)}getOptions(e=eE){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(let[e,t]of this.instancesDeferred.entries())n===this.normalizeInstanceIdentifier(e)&&t.resolve(i);return i}onInit(e,t){var n;let i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);let s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){let n=this.onInitCallbacks.get(t);if(n)for(let i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:e===eE?void 0:e,options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}return n||null}normalizeInstanceIdentifier(e=eE){return this.component?this.component.multipleInstances?e:eE:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
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
 */class ek{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new eS(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const eN=[];(y=T||(T={}))[y.DEBUG=0]="DEBUG",y[y.VERBOSE=1]="VERBOSE",y[y.INFO=2]="INFO",y[y.WARN=3]="WARN",y[y.ERROR=4]="ERROR",y[y.SILENT=5]="SILENT";const eD={debug:T.DEBUG,verbose:T.VERBOSE,info:T.INFO,warn:T.WARN,error:T.ERROR,silent:T.SILENT},eR=T.INFO,eP={[T.DEBUG]:"log",[T.VERBOSE]:"log",[T.INFO]:"info",[T.WARN]:"warn",[T.ERROR]:"error"},ex=(e,t,...n)=>{if(t<e.logLevel)return;let i=new Date().toISOString(),r=eP[t];if(r)console[r](`[${i}]  ${e.name}:`,...n);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class eA{constructor(e){this.name=e,this._logLevel=eR,this._logHandler=ex,this._userLogHandler=null,eN.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in T))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?eD[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,T.DEBUG,...e),this._logHandler(this,T.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,T.VERBOSE,...e),this._logHandler(this,T.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,T.INFO,...e),this._logHandler(this,T.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,T.WARN,...e),this._logHandler(this,T.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,T.ERROR,...e),this._logHandler(this,T.ERROR,...e)}}const eO=(e,t)=>t.some(t=>e instanceof t),eL=new WeakMap,eM=new WeakMap,eF=new WeakMap,eq=new WeakMap,eB=new WeakMap;let ej={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return eM.get(e);if("objectStoreNames"===t)return e.objectStoreNames||eF.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return eW(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function eW(n){var i;if(n instanceof IDBRequest)return function(e){let t=new Promise((t,n)=>{let i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",s)},r=()=>{t(eW(e.result)),i()},s=()=>{n(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&eL.set(t,e)}).catch(()=>{}),eB.set(t,e),t}(n);if(eq.has(n))return eq.get(n);let r="function"==typeof(i=n)?i!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(t||(t=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(i)?function(...e){return i.apply(e$(this),e),eW(eL.get(this))}:function(...e){return eW(i.apply(e$(this),e))}:function(e,...t){let n=i.call(e$(this),e,...t);return eF.set(n,e.sort?e.sort():[e]),eW(n)}:(i instanceof IDBTransaction&&function(e){if(eM.has(e))return;let t=new Promise((t,n)=>{let i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",s),e.removeEventListener("abort",s)},r=()=>{t(),i()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",s),e.addEventListener("abort",s)});eM.set(e,t)}(i),eO(i,e||(e=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(i,ej):i;return r!==n&&(eq.set(n,r),eB.set(r,n)),r}const e$=e=>eB.get(e);function eU(e,t,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){let o=indexedDB.open(e,t),a=eW(o);return i&&o.addEventListener("upgradeneeded",e=>{i(eW(o.result),e.oldVersion,e.newVersion,eW(o.transaction),e)}),n&&o.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),a.then(e=>{s&&e.addEventListener("close",()=>s()),r&&e.addEventListener("versionchange",e=>r(e.oldVersion,e.newVersion,e))}).catch(()=>{}),a}const eH=["get","getKey","getAll","getAllKeys","count"],ez=["put","add","delete","clear"],eV=new Map;function eK(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(eV.get(t))return eV.get(t);let n=t.replace(/FromIndex$/,""),i=t!==n,r=ez.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||eH.includes(n)))return;let s=async function(e,...t){let s=this.transaction(e,r?"readwrite":"readonly"),o=s.store;return i&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),r&&s.done]))[0]};return eV.set(t,s),s}ej={...g=ej,get:(e,t,n)=>eK(e,t)||g.get(e,t,n),has:(e,t)=>!!eK(e,t)||g.has(e,t)};/**
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
 */class eG{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}const eY="@firebase/app",eQ="0.10.17",eJ=new eA("@firebase/app"),eX="[DEFAULT]",eZ={[eY]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/data-connect":"fire-data-connect","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","@firebase/vertexai":"fire-vertex","fire-js":"fire-js",firebase:"fire-js-all"},e0=new Map,e1=new Map,e2=new Map;function e4(e,t){try{e.container.addComponent(t)}catch(n){eJ.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function e6(e){let t=e.name;if(e2.has(t))return eJ.debug(`There were multiple attempts to register component ${t}.`),!1;for(let n of(e2.set(t,e),e0.values()))e4(n,e);for(let t of e1.values())e4(t,e);return!0}function e3(e,t){let n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}const e5=new eo("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});/**
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
 */class e8{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new eT("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw e5.create("app-deleted",{appName:this._name})}}function e9(e,t={}){let n=e;"object"!=typeof t&&(t={name:t});let i=Object.assign({name:eX,automaticDataCollectionEnabled:!1},t),r=i.name;if("string"!=typeof r||!r)throw e5.create("bad-app-name",{appName:String(r)});if(n||(n=Z()),!n)throw e5.create("no-options");let s=e0.get(r);if(s){if(eg(n,s.options)&&eg(i,s.config))return s;throw e5.create("duplicate-app",{appName:r})}let o=new ek(r);for(let e of e2.values())o.addComponent(e);let a=new e8(n,i,o);return e0.set(r,a),a}function e7(e,t,n){var i;let r=null!==(i=eZ[e])&&void 0!==i?i:e;n&&(r+=`-${n}`);let s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){let e=[`Unable to register library "${r}" with version "${t}":`];s&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),eJ.warn(e.join(" "));return}e6(new eT(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}const te="firebase-heartbeat-store";let tt=null;function tn(){return tt||(tt=eU("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(te)}catch(e){console.warn(e)}}}).catch(e=>{throw e5.create("idb-open",{originalErrorMessage:e.message})})),tt}async function ti(e){try{let t=(await tn()).transaction(te),n=await t.objectStore(te).get(ts(e));return await t.done,n}catch(e){if(e instanceof es)eJ.warn(e.message);else{let t=e5.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});eJ.warn(t.message)}}}async function tr(e,t){try{let n=(await tn()).transaction(te,"readwrite"),i=n.objectStore(te);await i.put(t,ts(e)),await n.done}catch(e){if(e instanceof es)eJ.warn(e.message);else{let t=e5.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});eJ.warn(t.message)}}}function ts(e){return`${e.name}!${e.options.appId}`}class to{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new tl(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){var e,t;try{let n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ta();if((null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(e=>e.date===i))return;return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf();return Date.now()-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache)}catch(e){eJ.warn(e)}}async getHeartbeatsHeader(){var e;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null||0===this._heartbeatsCache.heartbeats.length)return"";let t=ta(),{heartbeatsToSend:n,unsentEntries:i}=function(e,t=1024){let n=[],i=e.slice();for(let r of e){let e=n.find(e=>e.agent===r.agent);if(e){if(e.dates.push(r.date),th(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),th(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),r=K(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return eJ.warn(e),""}}}function ta(){return new Date().toISOString().substring(0,10)}class tl{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!ei()&&er().then(()=>!0).catch(()=>!1)}async read(){if(!await this._canUseIndexedDBPromise)return{heartbeats:[]};{let e=await ti(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let n=await this.read();return tr(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){let n=await this.read();return tr(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function th(e){return K(JSON.stringify({version:2,heartbeats:e})).length}e6(new eT("platform-logger",e=>new eG(e),"PRIVATE")),e6(new eT("heartbeat",e=>new to(e),"PRIVATE")),e7(eY,eQ,""),e7(eY,eQ,"esm2017"),e7("fire-js",""),/**
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
 */e7("firebase","11.1.0","app");const tc="@firebase/installations",tu="0.6.11",td=`w:${tu}`,tp="FIS_v2",tf=new eo("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function t_(e){return e instanceof es&&e.code.includes("request-failed")}/**
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
 */function tm({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function tg(e){return{token:e.token,requestStatus:2,expiresIn:Number(e.expiresIn.replace("s","000")),creationTime:Date.now()}}async function ty(e,t){let n=(await t.json()).error;return tf.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function tv({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}async function tw(e){let t=await e();return t.status>=500&&t.status<600?e():t}/**
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
 */async function tb({appConfig:e,heartbeatServiceProvider:t},{fid:n}){let i=tm(e),r=tv(e),s=t.getImmediate({optional:!0});if(s){let e=await s.getHeartbeatsHeader();e&&r.append("x-firebase-client",e)}let o={method:"POST",headers:r,body:JSON.stringify({fid:n,authVersion:tp,appId:e.appId,sdkVersion:td})},a=await tw(()=>fetch(i,o));if(a.ok){let e=await a.json();return{fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:tg(e.authToken)}}throw await ty("Create Installation",a)}/**
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
 */function tC(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */const tI=/^[cdef][\w-]{21}$/;/**
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
 */function tT(e){return`${e.appName}!${e.appId}`}/**
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
 */const tE=new Map;function tS(e,t){let n=tT(e);tk(n,t),function(e,t){let n=(!tN&&"BroadcastChannel"in self&&((tN=new BroadcastChannel("[Firebase] FID Change")).onmessage=e=>{tk(e.data.key,e.data.fid)}),tN);n&&n.postMessage({key:e,fid:t}),0===tE.size&&tN&&(tN.close(),tN=null)}(n,t)}function tk(e,t){let n=tE.get(e);if(n)for(let e of n)e(t)}let tN=null;const tD="firebase-installations-store";let tR=null;function tP(){return tR||(tR=eU("firebase-installations-database",1,{upgrade:(e,t)=>{0===t&&e.createObjectStore(tD)}})),tR}async function tx(e,t){let n=tT(e),i=(await tP()).transaction(tD,"readwrite"),r=i.objectStore(tD),s=await r.get(n);return await r.put(t,n),await i.done,s&&s.fid===t.fid||tS(e,t.fid),t}async function tA(e){let t=tT(e),n=(await tP()).transaction(tD,"readwrite");await n.objectStore(tD).delete(t),await n.done}async function tO(e,t){let n=tT(e),i=(await tP()).transaction(tD,"readwrite"),r=i.objectStore(tD),s=await r.get(n),o=t(s);return void 0===o?await r.delete(n):await r.put(o,n),await i.done,o&&(!s||s.fid!==o.fid)&&tS(e,o.fid),o}/**
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
 */async function tL(e){let t;let n=await tO(e.appConfig,n=>{let i=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine)return{installationEntry:t,registrationPromise:Promise.reject(tf.create("app-offline"))};let n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=tM(e,n);return{installationEntry:n,registrationPromise:i}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:tF(e)}:{installationEntry:t}}(e,tB(n||{fid:function(){try{let e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;let t=btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_").substr(0,22);return tI.test(t)?t:""}catch(e){return""}}(),registrationStatus:0}));return t=i.registrationPromise,i.installationEntry});return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function tM(e,t){try{let n=await tb(e,t);return tx(e.appConfig,n)}catch(n){throw t_(n)&&409===n.customData.serverCode?await tA(e.appConfig):await tx(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function tF(e){let t=await tq(e.appConfig);for(;1===t.registrationStatus;)await tC(100),t=await tq(e.appConfig);if(0===t.registrationStatus){let{installationEntry:t,registrationPromise:n}=await tL(e);return n||t}return t}function tq(e){return tO(e,e=>{if(!e)throw tf.create("installation-not-found");return tB(e)})}function tB(e){return 1===e.registrationStatus&&e.registrationTime+1e4<Date.now()?{fid:e.fid,registrationStatus:0}:e}/**
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
 */async function tj({appConfig:e,heartbeatServiceProvider:t},n){let i=function(e,{fid:t}){return`${tm(e)}/${t}/authTokens:generate`}(e,n),r=function(e,{refreshToken:t}){let n=tv(e);return n.append("Authorization",`${tp} ${t}`),n}(e,n),s=t.getImmediate({optional:!0});if(s){let e=await s.getHeartbeatsHeader();e&&r.append("x-firebase-client",e)}let o={method:"POST",headers:r,body:JSON.stringify({installation:{sdkVersion:td,appId:e.appId}})},a=await tw(()=>fetch(i,o));if(a.ok)return tg(await a.json());throw await ty("Generate Auth Token",a)}/**
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
 */async function tW(e,t=!1){let n;let i=await tO(e.appConfig,i=>{var r;if(!tz(i))throw tf.create("not-registered");let s=i.authToken;if(!t&&2===(r=s).requestStatus&&!function(e){let t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+36e5}(r))return i;if(1===s.requestStatus)return n=t$(e,t),i;{if(!navigator.onLine)throw tf.create("app-offline");let t=function(e){let t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(i);return n=tH(e,t),t}});return n?await n:i.authToken}async function t$(e,t){let n=await tU(e.appConfig);for(;1===n.authToken.requestStatus;)await tC(100),n=await tU(e.appConfig);let i=n.authToken;return 0===i.requestStatus?tW(e,t):i}function tU(e){return tO(e,e=>{var t;if(!tz(e))throw tf.create("not-registered");return 1===(t=e.authToken).requestStatus&&t.requestTime+1e4<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function tH(e,t){try{let n=await tj(e,t),i=Object.assign(Object.assign({},t),{authToken:n});return await tx(e.appConfig,i),n}catch(n){if(t_(n)&&(401===n.customData.serverCode||404===n.customData.serverCode))await tA(e.appConfig);else{let n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await tx(e.appConfig,n)}throw n}}function tz(e){return void 0!==e&&2===e.registrationStatus}/**
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
 */async function tV(e){let{installationEntry:t,registrationPromise:n}=await tL(e);return n?n.catch(console.error):tW(e).catch(console.error),t.fid}/**
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
 */async function tK(e,t=!1){return await tG(e),(await tW(e,t)).token}async function tG(e){let{registrationPromise:t}=await tL(e);t&&await t}function tY(e){return tf.create("missing-app-config-values",{valueName:e})}/**
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
 */const tQ="installations";e6(new eT(tQ,e=>{let t=e.getProvider("app").getImmediate(),n=/**
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
 */function(e){if(!e||!e.options)throw tY("App Configuration");if(!e.name)throw tY("App Name");for(let t of["projectId","apiKey","appId"])if(!e.options[t])throw tY(t);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t),i=e3(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},"PUBLIC")),e6(new eT("installations-internal",e=>{let t=e3(e.getProvider("app").getImmediate(),tQ).getImmediate();return{getId:()=>tV(t),getToken:e=>tK(t,e)}},"PRIVATE")),e7(tc,tu),e7(tc,tu,"esm2017");/**
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
 */const tJ="analytics",tX="https://www.googletagmanager.com/gtag/js",tZ=new eA("@firebase/analytics"),t0=new eo("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."});/**
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
 */function t1(e){if(!e.startsWith(tX)){let t=t0.create("invalid-gtag-resource",{gtagURL:e});return tZ.warn(t.message),""}return e}function t2(e){return Promise.all(e.map(e=>e.catch(e=>e)))}async function t4(e,t,n,i,r,s){let o=i[r];try{if(o)await t[o];else{let e=(await t2(n)).find(e=>e.measurementId===r);e&&await t[e.appId]}}catch(e){tZ.error(e)}e("config",r,s)}async function t6(e,t,n,i,r){try{let s=[];if(r&&r.send_to){let e=r.send_to;Array.isArray(e)||(e=[e]);let i=await t2(n);for(let n of e){let e=i.find(e=>e.measurementId===n),r=e&&t[e.appId];if(r)s.push(r);else{s=[];break}}}0===s.length&&(s=Object.values(t)),await Promise.all(s),e("event",i,r||{})}catch(e){tZ.error(e)}}const t3=new class{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};async function t5(e){var t;let{appId:n,apiKey:i}=e,r={method:"GET",headers:new Headers({Accept:"application/json","x-goog-api-key":i})},s="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),o=await fetch(s,r);if(200!==o.status&&304!==o.status){let e="";try{let n=await o.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(e){}throw t0.create("config-fetch-failed",{httpStatus:o.status,responseMessage:e})}return o.json()}async function t8(e,t=t3,n){let{appId:i,apiKey:r,measurementId:s}=e.options;if(!i)throw t0.create("no-app-id");if(!r){if(s)return{measurementId:s,appId:i};throw t0.create("no-api-key")}let o=t.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new t7;return setTimeout(async()=>{a.abort()},void 0!==n?n:6e4),t9({appId:i,apiKey:r,measurementId:s},o,a,t)}async function t9(e,{throttleEndTimeMillis:t,backoffCount:n},i,r=t3){var s;let{appId:o,measurementId:a}=e;try{await new Promise((e,n)=>{let r=setTimeout(e,Math.max(t-Date.now(),0));i.addEventListener(()=>{clearTimeout(r),n(t0.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}catch(e){if(a)return tZ.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${null==e?void 0:e.message}]`),{appId:o,measurementId:a};throw e}try{let t=await t5(e);return r.deleteThrottleMetadata(o),t}catch(h){if(!function(e){if(!(e instanceof es)||!e.customData)return!1;let t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(h)){if(r.deleteThrottleMetadata(o),a)return tZ.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${null==h?void 0:h.message}]`),{appId:o,measurementId:a};throw h}let t=503===Number(null===(s=null==h?void 0:h.customData)||void 0===s?void 0:s.httpStatus)?eC(n,r.intervalMillis,30):eC(n,r.intervalMillis),l={throttleEndTimeMillis:Date.now()+t,backoffCount:n+1};return r.setThrottleMetadata(o,l),tZ.debug(`Calling attemptFetch again in ${t} millis`),t9(e,l,i,r)}}class t7{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function ne(e,t,n,i,r){if(r&&r.global){e("event",n,i);return}{let r=await t;e("event",n,Object.assign(Object.assign({},i),{send_to:r}))}}/**
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
 */async function nt(){if(!ei())return tZ.warn(t0.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await er()}catch(e){return tZ.warn(t0.create("indexeddb-unavailable",{errorInfo:null==e?void 0:e.toString()}).message),!1}return!0}async function nn(e,t,r,s,o,a,l){var h;let c=t8(e);c.then(t=>{r[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&tZ.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(e=>tZ.error(e)),t.push(c);let u=nt().then(e=>e?s.getId():void 0),[d,p]=await Promise.all([c,u]);!function(e){for(let t of Object.values(window.document.getElementsByTagName("script")))if(t.src&&t.src.includes(tX)&&t.src.includes(e))return t;return null}(a)&&function(e,t){var n,i;let r;let s=(n="firebase-js-sdk-policy",i={createScriptURL:t1},window.trustedTypes&&(r=window.trustedTypes.createPolicy(n,i)),r),o=document.createElement("script"),a=`${tX}?l=${e}&id=${t}`;o.src=s?null==s?void 0:s.createScriptURL(a):a,o.async=!0,document.head.appendChild(o)}(a,d.measurementId),i&&(o("consent","default",i),i=void 0),o("js",new Date);let f=null!==(h=null==l?void 0:l.config)&&void 0!==h?h:{};return f.origin="firebase",f.update=!0,null!=p&&(f.firebase_id=p),o("config",d.measurementId,f),n&&(o("set",n),n=void 0),d.measurementId}/**
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
 */class ni{constructor(e){this.app=e}_delete(){return delete nr[this.app.options.appId],Promise.resolve()}}let nr={},ns=[];const no={};let na="dataLayer",nl=!1;const nh="@firebase/analytics",nc="0.10.10";e6(new eT(tJ,(e,{options:t})=>(function(e,t,n){!function(){let e=[];if(function(){let e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()&&e.push("This is a browser extension environment."),"undefined"!=typeof navigator&&navigator.cookieEnabled||e.push("Cookies are not available."),e.length>0){let t=e.map((e,t)=>`(${t+1}) ${e}`).join(" "),n=t0.create("invalid-analytics-context",{errorInfo:t});tZ.warn(n.message)}}();let i=e.options.appId;if(!i)throw t0.create("no-app-id");if(!e.options.apiKey){if(e.options.measurementId)tZ.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw t0.create("no-api-key")}if(null!=nr[i])throw t0.create("already-exists",{id:i});if(!nl){var o,a;let e,t;e=[],Array.isArray(window[na])?e=window[na]:window[na]=e;let{wrappedGtag:n,gtagCore:i}=(o="gtag",t=function(...e){window[na].push(arguments)},window[o]&&"function"==typeof window[o]&&(t=window[o]),window[o]=(a=t,async function(e,...t){try{if("event"===e){let[e,n]=t;await t6(a,nr,ns,e,n)}else if("config"===e){let[e,n]=t;await t4(a,nr,ns,no,e,n)}else if("consent"===e){let[e,n]=t;a("consent",e,n)}else if("get"===e){let[e,n,i]=t;a("get",e,n,i)}else if("set"===e){let[e]=t;a("set",e)}else a(e,...t)}catch(e){tZ.error(e)}}),{gtagCore:t,wrappedGtag:window[o]});s=n,r=i,nl=!0}return nr[i]=nn(e,ns,no,t,r,na,n),new ni(e)})(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),t),"PUBLIC")),e6(new eT("analytics-internal",function(e){try{let t=e.getProvider(tJ).getImmediate();return{logEvent:(e,n,i)=>{var r;return r=t,void(r=eI(r),ne(s,nr[r.app.options.appId],e,n,i).catch(e=>tZ.error(e)))}}}catch(e){throw t0.create("interop-component-reg-failed",{reason:e})}},"PRIVATE")),e7(nh,nc),e7(nh,nc,"esm2017");const nu="@firebase/database",nd="1.0.10";/**
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
 */let np="";/**
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
 */class nf{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),eh(t))}get(e){let t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:el(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class n_{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return ep(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const nm=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){let t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new nf(t)}}catch(e){}return new n_},ng=nm("localStorage"),ny=nm("sessionStorage"),nv=new eA("@firebase/database"),nw=(m=1,function(){return m++}),nb=function(e){let t=ew(e),n=new ev;n.update(t);let i=n.digest();return H.encodeByteArray(i)},nC=function(...e){let t="";for(let n=0;n<e.length;n++){let i=e[n];Array.isArray(i)||i&&"object"==typeof i&&"number"==typeof i.length?t+=nC.apply(null,i):"object"==typeof i?t+=eh(i):t+=i,t+=" "}return t};let nI=null,nT=!0;const nE=function(e,t){j(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(nv.logLevel=T.VERBOSE,nI=nv.log.bind(nv),t&&ny.set("logging_enabled",!0)):"function"==typeof e?nI=e:(nI=null,ny.remove("logging_enabled"))},nS=function(...e){if(!0===nT&&(nT=!1,null===nI&&!0===ny.get("logging_enabled")&&nE(!0)),nI){let t=nC.apply(null,e);nI(t)}},nk=function(e){return function(...t){nS(e,...t)}},nN=function(...e){let t="FIREBASE INTERNAL ERROR: "+nC(...e);nv.error(t)},nD=function(...e){let t=`FIREBASE FATAL ERROR: ${nC(...e)}`;throw nv.error(t),Error(t)},nR=function(...e){let t="FIREBASE WARNING: "+nC(...e);nv.warn(t)},nP=function(){"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&nR("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},nx=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},nA=function(e){if(en()||"complete"===document.readyState)e();else{let t=!1,n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}t||(t=!0,e())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{"complete"===document.readyState&&n()}),window.attachEvent("onload",n))}},nO="[MIN_NAME]",nL="[MAX_NAME]",nM=function(e,t){if(e===t)return 0;{if(e===nO||t===nL)return -1;if(t===nO||e===nL)return 1;let n=nH(e),i=nH(t);return null!==n?null!==i?n-i==0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},nF=function(e,t){return e===t?0:e<t?-1:1},nq=function(e,t){if(t&&e in t)return t[e];throw Error("Missing required key ("+e+") in object: "+eh(t))},nB=function(e){if("object"!=typeof e||null===e)return eh(e);let t=[];for(let n in e)t.push(n);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=eh(t[i]),n+=":",n+=nB(e[t[i]]);return n+"}"},nj=function(e,t){let n=e.length;if(n<=t)return[e];let i=[];for(let r=0;r<n;r+=t)r+t>n?i.push(e.substring(r,n)):i.push(e.substring(r,r+t));return i};function nW(e,t){for(let n in e)e.hasOwnProperty(n)&&t(n,e[n])}const n$=function(e){let t,n,i,r,s;j(!nx(e),"Invalid JSON number"),0===e?(n=0,i=0,t=1/e==-1/0?1:0):(t=e<0,(e=Math.abs(e))>=22250738585072014e-324?(n=(r=Math.min(Math.floor(Math.log(e)/Math.LN2),1023))+1023,i=Math.round(e*Math.pow(2,52-r)-0x10000000000000)):(n=0,i=Math.round(e/5e-324)));let o=[];for(s=52;s;s-=1)o.push(i%2?1:0),i=Math.floor(i/2);for(s=11;s;s-=1)o.push(n%2?1:0),n=Math.floor(n/2);o.push(t?1:0),o.reverse();let a=o.join(""),l="";for(s=0;s<64;s+=8){let e=parseInt(a.substr(s,8),2).toString(16);1===e.length&&(e="0"+e),l+=e}return l.toLowerCase()},nU=RegExp("^-?(0*)\\d{1,10}$"),nH=function(e){if(nU.test(e)){let t=Number(e);if(t>=-0x80000000&&t<=0x7fffffff)return t}return null},nz=function(e){try{e()}catch(e){setTimeout(()=>{throw nR("Exception was thrown by user callback.",e.stack||""),e},Math.floor(0))}},nV=function(e,t){let n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n};/**
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
 */class nK{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then(e=>this.appCheck=e)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,n)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){nR(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class nG{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit(e=>this.auth_=e)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(e=>e&&"auth/token-not-initialized"===e.code?(nS("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e)):new Promise((t,n)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',nR(e)}}class nY{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}nY.OWNER="owner";const nQ=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,nJ="websocket",nX="long_polling";/**
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
 */class nZ{constructor(e,t,n,i,r=!1,s="",o=!1,a=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ng.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ng.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){let e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function n0(e,t,n){let i;if(j("string"==typeof t,"typeof type must == string"),j("object"==typeof n,"typeof params must == object"),t===nJ)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else if(t===nX)i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?";else throw Error("Unknown connection type: "+t);(e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams)&&(n.ns=e.namespace);let r=[];return nW(n,(e,t)=>{r.push(e+"="+t)}),i+r.join("&")}/**
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
 */class n1{constructor(){this.counters_={}}incrementCounter(e,t=1){ep(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return function e(t,n){if(!(n instanceof Object))return n;switch(n.constructor){case Date:return new Date(n.getTime());case Object:void 0===t&&(t={});break;case Array:t=[];break;default:return n}for(let i in n)n.hasOwnProperty(i)&&"__proto__"!==i&&(t[i]=e(t[i],n[i]));return t}(void 0,this.counters_)}}/**
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
 */const n2={},n4={};function n6(e){let t=e.toString();return n2[t]||(n2[t]=new n1),n2[t]}/**
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
 */class n3{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){let e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&nz(()=>{this.onMessage_(e[t])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const n5="start";class n8{constructor(e,t,n,i,r,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=nk(e),this.stats_=n6(t),this.urlFn=e=>(this.appCheckToken&&(e.ac=this.appCheckToken),n0(t,nX,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new n3(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(3e4)),nA(()=>{if(this.isClosed_)return;this.scriptTagHolder=new n9((...e)=>{let[t,n,i,r,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder){if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===n5)this.id=n,this.password=i;else if("close"===t)n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,()=>{this.onClosed_()})):this.onClosed_();else throw Error("Unrecognized command received: "+t)}},(...e)=>{let[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)},()=>{this.onClosed_()},this.urlFn);let e={};e[n5]="t",e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&nQ.test(location.hostname)&&(e.r="f");let t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){n8.forceAllow_=!0}static forceDisallow(){n8.forceDisallow_=!0}static isAvailable(){return!en()&&(!!n8.forceAllow_||!n8.forceDisallow_&&"undefined"!=typeof document&&null!=document.createElement&&!("object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))&&!("object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){!this.isClosed_&&(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){let t=eh(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);let n=nj(V(t),1840);for(let e=0;e<n.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,n.length,n[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(en())return;this.myDisconnFrame=document.createElement("iframe");let n={};n.dframe="t",n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){let t=eh(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class n9{constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,en())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=nw(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=n9.createIFrame_();let n="";this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)&&(n='<script>document.domain="'+document.domain+'";<\/script>');let i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(e){nS("frame writing exception"),e.stack&&nS(e.stack),nS(e)}}}static createIFrame_(){let e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||nS("No IE domain setting required")}catch(n){let t=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+t+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));let e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(!this.alive||!this.sendNewPolls||!(this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)))return!1;{this.currentSerial++;let e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",i=0;for(;this.pendingSegs.length>0;)if(this.pendingSegs[0].d.length+30+n.length<=1870){let e=this.pendingSegs.shift();n=n+"&seg"+i+"="+e.seg+"&ts"+i+"="+e.ts+"&d"+i+"="+e.d,i++}else break;return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);let n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(25e3));this.addTag(e,()=>{clearTimeout(i),n()})}addTag(e,t){en()?this.doNodeLongPoll(e,t):setTimeout(()=>{try{if(!this.sendNewPolls)return;let n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){let e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{nS("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}},Math.floor(1))}}let n7=null;"undefined"!=typeof MozWebSocket?n7=MozWebSocket:"undefined"!=typeof WebSocket&&(n7=WebSocket);class ie{constructor(e,t,n,i,r,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=nk(this.connId),this.stats_=n6(t),this.connURL=ie.connectionURL_(t,s,o,i,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,i,r){let s={};return s.v="5",!en()&&"undefined"!=typeof location&&location.hostname&&nQ.test(location.hostname)&&(s.r="f"),t&&(s.s=t),n&&(s.ls=n),i&&(s.ac=i),r&&(s.p=r),n0(e,nJ,s)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ng.set("previous_websocket_failure",!0);try{let e;if(en()){let t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/5/${np}/${k.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);let n={},i=0===this.connURL.indexOf("wss://")?n.HTTPS_PROXY||n.https_proxy:n.HTTP_PROXY||n.http_proxy;i&&(e.proxy={origin:i})}this.mySock=new n7(this.connURL,[],e)}catch(t){this.log_("Error instantiating WebSocket.");let e=t.message||t.data;e&&this.log_(e),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");let t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){ie.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){let t=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);t&&t.length>1&&4.4>parseFloat(t[1])&&(e=!0)}return!e&&null!==n7&&!ie.forceDisallow_}static previouslyFailed(){return ng.isInMemoryStorage||!0===ng.get("previous_websocket_failure")}markConnectionHealthy(){ng.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){let e=this.frames.join("");this.frames=null;let t=el(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(j(null===this.frames,"We already have a frame buffer"),e.length<=6){let t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;let t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{let e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();let t=eh(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);let n=nj(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){!this.isClosed_&&(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ie.responsesRequiredToBeHealthy=2,ie.healthyTimeout=3e4;/**
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
 */class it{static get ALL_TRANSPORTS(){return[n8,ie]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){let t=ie&&ie.isAvailable(),n=t&&!ie.previouslyFailed();if(e.webSocketOnly&&(t||nR("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[ie];else{let e=this.transports_=[];for(let t of it.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);it.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}it.globalTransportInitialized_=!1;class ii{constructor(e,t,n,i,r,s,o,a,l,h){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=nk("c:"+this.id+":"),this.transportManager_=new it(t),this.log_("Connection created"),this.start_()}start_(){let e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;let t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,n)},Math.floor(0));let i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=nV(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){this.sendData_({t:"d",d:e})}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){let t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){let t=nq("t",e),n=nq("d",e);if("c"===t)this.onSecondaryControl_(n);else if("d"===t)this.pendingDataMessages.push(n);else throw Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){let t=nq("t",e),n=nq("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){!this.isHealthy_&&(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){let t=nq("t",e);if("d"in e){let n=e.d;if("h"===t){let e=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?nN("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):nN("Unknown control packet command: "+t)}}onHandshake_(e){let t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==n&&nR("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){let e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;let t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),nV(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):nV(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){let e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ng.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class ir{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class is{constructor(e){this.allowedEvents_=e,this.listeners_={},j(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){let n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});let i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);let i=this.listeners_[e]||[];for(let e=0;e<i.length;e++)if(i[e].callback===t&&(!n||n===i[e].context)){i.splice(e,1);return}}validateEventType_(e){j(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class io extends is{static getInstance(){return new io}constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||et()||(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return j("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}class ia{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function il(){return new ia("")}function ih(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function ic(e){return e.pieces_.length-e.pieceNum_}function iu(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new ia(e.pieces_,t)}function id(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function ip(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function i_(e){if(e.pieceNum_>=e.pieces_.length)return null;let t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new ia(t,0)}function im(e,t){let n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof ia)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{let e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new ia(n,0)}function ig(e){return e.pieceNum_>=e.pieces_.length}function iy(e,t){let n=ih(e),i=ih(t);if(null===n)return t;if(n===i)return iy(iu(e),iu(t));throw Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function iv(e,t){if(ic(e)!==ic(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function iw(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(ic(e)>ic(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class ib{constructor(e,t){this.errorPrefix_=t,this.parts_=ip(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=eb(this.parts_[e]);iC(this)}}function iC(e){if(e.byteLength_>768)throw Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+iI(e))}function iI(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}/**
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
 */class iT extends is{static getInstance(){return new iT}constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{let t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))},!1)}getInitialEvent(e){return j("visible"===e,"Unknown event type: "+e),[this.visible_]}}class iE extends ir{constructor(e,t,n,i,r,s,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=iE.nextPersistentConnectionId_++,this.log_=nk("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=1e3,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!en())throw Error("Auth override specified in options, but not supported on non Node.js platforms");iT.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&io.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){let i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(eh(r)),j(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();let t=new ee,n={p:e._path.toString(),q:e._queryObject};this.outstandingGets_.push({action:"g",request:n,onComplete:e=>{let n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}}),this.outstandingGetCount_++;let i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,i){this.initConnection_();let r=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+r),this.listens.has(s)||this.listens.set(s,new Map),j(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),j(!this.listens.get(s).has(r),"listen() called twice for same path/queryId.");let o={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(s).set(r,o),this.connected_&&this.sendListen_(o)}sendGet_(e){let t=this.outstandingGets_[e];this.sendRequest("g",t.request,n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)})}sendListen_(e){let t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);let r={p:n};e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest("q",r,r=>{let s=r.d,o=r.s;iE.warnOnListenWarnings_(s,t),(this.listens.get(n)&&this.listens.get(n).get(i))===e&&(this.log_("listen response",r),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,s))})}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&ep(e,"w")){let n=ef(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){let e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();nR(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||ed(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){let e=this.authToken_,t=eu(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,t=>{let n=t.s,i=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{let t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)})}unlisten(e,t){let n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),j(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(n,i)&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);let r={p:e};i&&(r.q=n,r.t=i),this.sendRequest("n",r)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){let r={p:t,d:n};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,e=>{i&&setTimeout(()=>{i(e.s,e.d)},Math.floor(0))})}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,r){this.initConnection_();let s={p:t,d:n};void 0!==r&&(s.h=r),this.outstandingPuts_.push({action:e,request:s,onComplete:i}),this.outstandingPutCount_++;let o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){let t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n.s,n.d)})}reportStats(e){if(this.connected_){let t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,e=>{if("ok"!==e.s){let t=e.d;this.log_("reportStats","Error sending stats: "+t)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+eh(e));let t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else if("error"in e)throw"A server-side error has occurred: "+e.error;else"a"in e&&this.onDataPush_(e.a,e.b)}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):nN("Unrecognized action received from server: "+eh(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){j(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){!e||this.visible_||this.reconnectDelay_!==this.maxReconnectDelay_||(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=1e3),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());let e=new Date().getTime()-this.lastConnectionAttemptTime_,t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;let e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+iE.nextConnectionId_++,r=this.lastSessionId,s=!1,o=null,a=function(){o?o.close():(s=!0,n())};this.realtime_={close:a,sendRequest:function(e){j(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(e)}};let l=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{let[a,h]=await Promise.all([this.authTokenProvider_.getToken(l),this.appCheckTokenProvider_.getToken(l)]);s?nS("getToken() completed but was canceled"):(nS("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=h&&h.token,o=new ii(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,e=>{nR(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")},r))}catch(e){this.log_("Failed to get token: "+e),s||(this.repoInfo_.nodeAdmin&&nR(e),a())}}}interrupt(e){nS("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){nS("Resuming connection for reason: "+e),delete this.interruptReasons_[e],e_(this.interruptReasons_)&&(this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){let t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){let t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map(e=>nB(e)).join("$"):"default";let i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){let n;let i=new ia(e).toString();if(this.listens.has(i)){let e=this.listens.get(i);n=e.get(t),e.delete(t),0===e.size&&this.listens.delete(i)}else n=void 0;return n}onAuthRevoked_(e,t){nS("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),("invalid_token"===e||"permission_denied"===e)&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){nS("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,("invalid_token"===e||"permission_denied"===e)&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){for(let e of(this.tryAuth(),this.tryAppCheck(),this.listens.values()))for(let t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){let e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){let e={},t="js";en()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+np.replace(/\./g,"-")]=1,et()?e["framework.cordova"]=1:"object"==typeof navigator&&"ReactNative"===navigator.product&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){let e=io.getInstance().currentlyOnline();return e_(this.interruptReasons_)&&e}}iE.nextPersistentConnectionId_=0,iE.nextConnectionId_=0;/**
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
 */class iS{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new iS(e,t)}}/**
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
 */class ik{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){let n=new iS(nO,e),i=new iS(nO,t);return 0!==this.compare(n,i)}minPost(){return iS.MIN}}class iN extends ik{static get __EMPTY_NODE(){return o}static set __EMPTY_NODE(e){o=e}compare(e,t){return nM(e.name,t.name)}isDefinedOn(e){throw W("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return iS.MIN}maxPost(){return new iS(nL,o)}makePost(e,t){return j("string"==typeof e,"KeyIndex indexValue must always be a string."),new iS(e,o)}toString(){return".key"}}const iD=new iN;/**
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
 */class iR{constructor(e,t,n,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,i&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else if(0===s){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}getNext(){let e;if(0===this.nodeStack_.length)return null;let t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;let e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class iP{constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:iP.RED,this.left=null!=i?i:ix.EMPTY_NODE,this.right=null!=r?r:ix.EMPTY_NODE}copy(e,t,n,i,r){return new iP(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this,r=n(e,i.key);return(i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n))).fixUp_()}removeMin_(){if(this.left.isEmpty())return ix.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),(e=e.copy(null,null,null,e.left.removeMin_(),null)).fixUp_()}remove(e,t){let n,i;if(n=this,0>t(e,n.key))n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return ix.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight_())).rotateLeft_()).colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=(e=e.rotateRight_()).colorFlip_()),e}rotateLeft_(){let e=this.copy(null,null,iP.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){let e=this.copy(null,null,iP.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){return Math.pow(2,this.check_())<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw Error("Right child of ("+this.key+","+this.value+") is red");let e=this.left.check_();if(e===this.right.check_())return e+(this.isRed_()?0:1);throw Error("Black depths differ")}}iP.RED=!0,iP.BLACK=!1;class ix{constructor(e,t=ix.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new ix(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,iP.BLACK,null,null))}remove(e){return new ix(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,iP.BLACK,null,null))}get(e){let t;let n=this.root_;for(;!n.isEmpty();){if(0===(t=this.comparator_(e,n.key)))return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;for(;!n.isEmpty();){if(0===(t=this.comparator_(e,n.key))){if(n.left.isEmpty()){if(i)return i.key;return null}for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new iR(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new iR(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new iR(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new iR(this.root_,null,this.comparator_,!0,e)}}/**
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
 */function iA(e,t){return nM(e.name,t.name)}function iO(e,t){return nM(e,t)}ix.EMPTY_NODE=new class{copy(e,t,n,i,r){return this}insert(e,t,n){return new iP(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const iL=function(e){return"number"==typeof e?"number:"+n$(e):"string:"+e},iM=function(e){if(e.isLeafNode()){let t=e.val();j("string"==typeof t||"number"==typeof t||"object"==typeof t&&ep(t,".sv"),"Priority must be a string or number.")}else j(e===a||e.isEmpty(),"priority of unexpected type.");j(e===a||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};class iF{static set __childrenNodeConstructor(e){l=e}static get __childrenNodeConstructor(){return l}constructor(e,t=iF.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,j(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),iM(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new iF(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:iF.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ig(e)?this:".priority"===ih(e)?this.priorityNode_:iF.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:iF.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){let n=ih(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(j(".priority"!==n||1===ic(e),".priority must be the last token in a path"),this.updateImmediateChild(n,iF.__childrenNodeConstructor.EMPTY_NODE.updateChild(iu(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+iL(this.priorityNode_.val())+":");let t=typeof this.value_;e+=t+":","number"===t?e+=n$(this.value_):e+=this.value_,this.lazyHash_=nb(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===iF.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof iF.__childrenNodeConstructor?-1:(j(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){let t=typeof e.value_,n=typeof this.value_,i=iF.VALUE_TYPE_ORDER.indexOf(t),r=iF.VALUE_TYPE_ORDER.indexOf(n);return(j(i>=0,"Unknown leaf type: "+t),j(r>=0,"Unknown leaf type: "+n),i!==r)?r-i:"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1}withIndex(){return this}isIndexed(){return!0}equals(e){return e===this||!!e.isLeafNode()&&this.value_===e.value_&&this.priorityNode_.equals(e.priorityNode_)}}iF.VALUE_TYPE_ORDER=["object","boolean","number","string"];const iq=new class extends ik{compare(e,t){let n=e.node.getPriority(),i=t.node.getPriority(),r=n.compareTo(i);return 0===r?nM(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return iS.MIN}maxPost(){return new iS(nL,new iF("[PRIORITY-POST]",c))}makePost(e,t){return new iS(t,new iF("[PRIORITY-POST]",h(e)))}toString(){return".priority"}},iB=Math.log(2);class ij{constructor(e){this.count=parseInt(Math.log(e+1)/iB,10),this.current_=this.count-1;let t=parseInt(Array(this.count+1).join("1"),2);this.bits_=e+1&t}nextBitIsOne(){let e=!(this.bits_&1<<this.current_);return this.current_--,e}}const iW=function(e,t,n,i){e.sort(t);let r=function(t,i){let s;let o=i-t;if(0===o)return null;if(1===o)return s=e[t],new iP(n?n(s):s,s.node,iP.BLACK,null,null);{let a=parseInt(o/2,10)+t,l=r(t,a),h=r(a+1,i);return s=e[a],new iP(n?n(s):s,s.node,iP.BLACK,l,h)}};return new ix(i||t,function(t){let i=null,s=null,o=e.length,a=function(t,i){let s=o-t,a=o;o-=t;let h=r(s+1,a),c=e[s];l(new iP(n?n(c):c,c.node,i,null,h))},l=function(e){i?i.left=e:s=e,i=e};for(let e=0;e<t.count;++e){let n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,iP.BLACK):(a(i,iP.BLACK),a(i,iP.RED))}return s}(new ij(e.length)))},i$={};class iU{static get Default(){return j(i$&&iq,"ChildrenNode.ts has not been loaded"),u=u||new iU({".priority":i$},{".priority":iq})}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){let t=ef(this.indexes_,e);if(!t)throw Error("No index defined for "+e);return t instanceof ix?t:null}hasIndex(e){return ep(this.indexSet_,e.toString())}addIndex(e,t){let n;j(e!==iD,"KeyIndex always exists and isn't meant to be added to the IndexMap.");let i=[],r=!1,s=t.getIterator(iS.Wrap),o=s.getNext();for(;o;)r=r||e.isDefinedOn(o.node),i.push(o),o=s.getNext();n=r?iW(i,e.getCompare()):i$;let a=e.toString(),l=Object.assign({},this.indexSet_);l[a]=e;let h=Object.assign({},this.indexes_);return h[a]=n,new iU(h,l)}addToIndexes(e,t){return new iU(em(this.indexes_,(n,i)=>{let r=ef(this.indexSet_,i);if(j(r,"Missing index implementation for "+i),n===i$){if(!r.isDefinedOn(e.node))return i$;{let n=[],i=t.getIterator(iS.Wrap),s=i.getNext();for(;s;)s.name!==e.name&&n.push(s),s=i.getNext();return n.push(e),iW(n,r.getCompare())}}{let i=t.get(e.name),r=n;return i&&(r=r.remove(new iS(e.name,i))),r.insert(e,e.node)}}),this.indexSet_)}removeFromIndexes(e,t){return new iU(em(this.indexes_,n=>{if(n===i$)return n;{let i=t.get(e.name);return i?n.remove(new iS(e.name,i)):n}}),this.indexSet_)}}class iH{static get EMPTY_NODE(){return d||(d=new iH(new ix(iO),null,iU.Default))}constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&iM(this.priorityNode_),this.children_.isEmpty()&&j(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||d}updatePriority(e){return this.children_.isEmpty()?this:new iH(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{let t=this.children_.get(e);return null===t?d:t}}getChild(e){let t=ih(e);return null===t?this:this.getImmediateChild(t).getChild(iu(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(j(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{let n,i;let r=new iS(e,t);t.isEmpty()?(n=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(n=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(r,this.children_));let s=n.isEmpty()?d:this.priorityNode_;return new iH(n,s,i)}}updateChild(e,t){let n=ih(e);if(null===n)return t;{j(".priority"!==ih(e)||1===ic(e),".priority must be the last token in a path");let i=this.getImmediateChild(n).updateChild(iu(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;let t={},n=0,i=0,r=!0;if(this.forEachChild(iq,(s,o)=>{t[s]=o.val(e),n++,r&&iH.INTEGER_REGEXP_.test(s)?i=Math.max(i,Number(s)):r=!1}),e||!r||!(i<2*n))return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t;{let e=[];for(let n in t)e[n]=t[n];return e}}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+iL(this.getPriority().val())+":"),this.forEachChild(iq,(t,n)=>{let i=n.hash();""!==i&&(e+=":"+t+":"+i)}),this.lazyHash_=""===e?"":nb(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){let i=this.resolveIndex_(n);if(!i)return this.children_.getPredecessorKey(e);{let n=i.getPredecessorKey(new iS(e,t));return n?n.name:null}}getFirstChildName(e){let t=this.resolveIndex_(e);if(!t)return this.children_.minKey();{let e=t.minKey();return e&&e.name}}getFirstChild(e){let t=this.getFirstChildName(e);return t?new iS(t,this.children_.get(t)):null}getLastChildName(e){let t=this.resolveIndex_(e);if(!t)return this.children_.maxKey();{let e=t.maxKey();return e&&e.name}}getLastChild(e){let t=this.getLastChildName(e);return t?new iS(t,this.children_.get(t)):null}forEachChild(e,t){let n=this.resolveIndex_(e);return n?n.inorderTraversal(e=>t(e.name,e.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){let n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,e=>e);{let n=this.children_.getIteratorFrom(e.name,iS.Wrap),i=n.peek();for(;null!=i&&0>t.compare(i,e);)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){let n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,e=>e);{let n=this.children_.getReverseIteratorFrom(e.name,iS.Wrap),i=n.peek();for(;null!=i&&t.compare(i,e)>0;)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===iz?-1:0}withIndex(e){if(e===iD||this.indexMap_.hasIndex(e))return this;{let t=this.indexMap_.addIndex(e,this.children_);return new iH(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===iD||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode()||!this.getPriority().equals(e.getPriority())||this.children_.count()!==e.children_.count())return!1;{let t=this.getIterator(iq),n=e.getIterator(iq),i=t.getNext(),r=n.getNext();for(;i&&r;){if(i.name!==r.name||!i.node.equals(r.node))return!1;i=t.getNext(),r=n.getNext()}return null===i&&null===r}}resolveIndex_(e){return e===iD?null:this.indexMap_.get(e.toString())}}iH.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const iz=new class extends iH{constructor(){super(new ix(iO),iH.EMPTY_NODE,iU.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return iH.EMPTY_NODE}isEmpty(){return!1}};function iV(e,t=null){if(null===e)return iH.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),j(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e)return new iF(e,iV(t));if(e instanceof Array){let n=iH.EMPTY_NODE;return nW(e,(t,i)=>{if(ep(e,t)&&"."!==t.substring(0,1)){let e=iV(i);(e.isLeafNode()||!e.isEmpty())&&(n=n.updateImmediateChild(t,e))}}),n.updatePriority(iV(t))}{let n=[],i=!1;if(nW(e,(e,t)=>{if("."!==e.substring(0,1)){let r=iV(t);r.isEmpty()||(i=i||!r.getPriority().isEmpty(),n.push(new iS(e,r)))}}),0===n.length)return iH.EMPTY_NODE;let r=iW(n,iA,e=>e.name,iO);if(!i)return new iH(r,iV(t),iU.Default);{let e=iW(n,iq.getCompare());return new iH(r,iV(t),new iU({".priority":e},{".priority":iq}))}}}Object.defineProperties(iS,{MIN:{value:new iS(nO,iH.EMPTY_NODE)},MAX:{value:new iS(nL,iz)}}),iN.__EMPTY_NODE=iH.EMPTY_NODE,iF.__childrenNodeConstructor=iH,a=iz,c=iz,h=iV;/**
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
 */class iK extends ik{constructor(e){super(),this.indexPath_=e,j(!ig(e)&&".priority"!==ih(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){let n=this.extractChild(e.node),i=this.extractChild(t.node),r=n.compareTo(i);return 0===r?nM(e.name,t.name):r}makePost(e,t){let n=iV(e);return new iS(t,iH.EMPTY_NODE.updateChild(this.indexPath_,n))}maxPost(){return new iS(nL,iH.EMPTY_NODE.updateChild(this.indexPath_,iz))}toString(){return ip(this.indexPath_,0).join("/")}}const iG=new /**
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
 */class extends ik{compare(e,t){let n=e.node.compareTo(t.node);return 0===n?nM(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return iS.MIN}maxPost(){return iS.MAX}makePost(e,t){return new iS(t,iV(e))}toString(){return".value"}};function iY(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}/**
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
 */class iQ{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=iq}hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return j(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return(j(this.startSet_,"Only valid if start has been set"),this.startNameSet_)?this.indexStartName_:nO}hasEnd(){return this.endSet_}getIndexEndValue(){return j(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return(j(this.endSet_,"Only valid if end has been set"),this.endNameSet_)?this.indexEndName_:nL}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return j(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===iq}copy(){let e=new iQ;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function iJ(e){let t;let n={};if(e.isDefault())return n;if(e.index_===iq?t="$priority":e.index_===iG?t="$value":e.index_===iD?t="$key":(j(e.index_ instanceof iK,"Unrecognized index type!"),t=e.index_.toString()),n.orderBy=eh(t),e.startSet_){let t=e.startAfterSet_?"startAfter":"startAt";n[t]=eh(e.indexStartValue_),e.startNameSet_&&(n[t]+=","+eh(e.indexStartName_))}if(e.endSet_){let t=e.endBeforeSet_?"endBefore":"endAt";n[t]=eh(e.indexEndValue_),e.endNameSet_&&(n[t]+=","+eh(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?n.limitToFirst=e.limit_:n.limitToLast=e.limit_),n}function iX(e){let t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==iq&&(t.i=e.index_.toString()),t}/**
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
 */class iZ extends ir{reportStats(e){throw Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(j(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=nk("p:rest:"),this.listens_={}}listen(e,t,n,i){let r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);let s=iZ.getListenId_(e,n),o={};this.listens_[s]=o;let a=iJ(e._queryParams);this.restRequest_(r+".json",a,(e,t)=>{let a=t;404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(r,a,!1,n),ef(this.listens_,s)===o&&i(e?401===e?"permission_denied":"rest_error:"+e:"ok",null)})}unlisten(e,t){let n=iZ.getListenId_(e,t);delete this.listens_[n]}get(e){let t=iJ(e._queryParams),n=e._path.toString(),i=new ee;return this.restRequest_(n+".json",t,(e,t)=>{let r=t;404===e&&(r=null,e=null),null===e?(this.onDataUpdate_(n,r,!1,null),i.resolve(r)):i.reject(Error(r))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);let s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+function(e){let t=[];for(let[n,i]of Object.entries(e))Array.isArray(i)?i.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}(t);this.log_("Sending REST request for "+s);let o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+s+" received. status:",o.status,"response:",o.responseText);let e=null;if(o.status>=200&&o.status<300){try{e=el(o.responseText)}catch(e){nR("Failed to parse JSON response for "+s+": "+o.responseText)}n(null,e)}else 401!==o.status&&404!==o.status&&nR("Got unsuccessful REST response for "+s+" Status: "+o.status),n(o.status);n=null}},o.open("GET",s,!0),o.send()})}}/**
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
 */class i0{constructor(){this.rootNode_=iH.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function i1(){return{value:null,children:new Map}}function i2(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach((e,n)=>{t(n,e)})}(e,(e,i)=>{i2(i,new ia(t.toString()+"/"+e),n)})}/**
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
 */class i4{constructor(e){this.collection_=e,this.last_=null}get(){let e=this.collection_.get(),t=Object.assign({},e);return this.last_&&nW(this.last_,(e,n)=>{t[e]=t[e]-n}),this.last_=e,t}}class i6{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new i4(e);let n=1e4+2e4*Math.random();nV(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){let e=this.statsListener_.get(),t={},n=!1;nW(e,(e,i)=>{i>0&&ep(this.statsToReport_,e)&&(t[e]=i,n=!0)}),n&&this.server_.reportStats(t),nV(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}function i3(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function i5(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function i8(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}(v=E||(E={}))[v.OVERWRITE=0]="OVERWRITE",v[v.MERGE=1]="MERGE",v[v.ACK_USER_WRITE=2]="ACK_USER_WRITE",v[v.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";/**
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
 */class i9{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=E.ACK_USER_WRITE,this.source=i3()}operationForChild(e){if(!ig(this.path))return j(ih(this.path)===e,"operationForChild called for unrelated child."),new i9(iu(this.path),this.affectedTree,this.revert);if(null!=this.affectedTree.value)return j(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{let t=this.affectedTree.subtree(new ia(e));return new i9(il(),t,this.revert)}}}/**
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
 */class i7{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=E.OVERWRITE}operationForChild(e){return ig(this.path)?new i7(this.source,il(),this.snap.getImmediateChild(e)):new i7(this.source,iu(this.path),this.snap)}}/**
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
 */class re{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=E.MERGE}operationForChild(e){if(!ig(this.path))return j(ih(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new re(this.source,iu(this.path),this.children);{let t=this.children.subtree(new ia(e));return t.isEmpty()?null:t.value?new i7(this.source,il(),t.value):new re(this.source,il(),t)}}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class rt{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ig(e))return this.isFullyInitialized()&&!this.filtered_;let t=ih(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function rn(e,t,n,i,r,s){let o=i.filter(e=>e.type===n);o.sort((t,n)=>(function(e,t,n){if(null==t.childName||null==n.childName)throw W("Should only compare child_ events.");let i=new iS(t.childName,t.snapshotNode),r=new iS(n.childName,n.snapshotNode);return e.index_.compare(i,r)})(e,t,n)),o.forEach(n=>{let i=("value"===n.type||"child_removed"===n.type||(n.prevName=s.getPredecessorChildName(n.childName,n.snapshotNode,e.index_)),n);r.forEach(r=>{r.respondsTo(n.type)&&t.push(r.createEvent(i,e.query_))})})}/**
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
 */function ri(e,t){return{eventCache:e,serverCache:t}}function rr(e,t,n,i){return ri(new rt(t,n,i),e.serverCache)}function rs(e,t,n,i){return ri(e.eventCache,new rt(t,n,i))}function ro(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function ra(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}const rl=()=>(p||(p=new ix(nF)),p);class rh{static fromObject(e){let t=new rh(null);return nW(e,(e,n)=>{t=t.set(new ia(e),n)}),t}constructor(e,t=rl()){this.value=e,this.children=t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:il(),value:this.value};if(ig(e))return null;{let n=ih(e),i=this.children.get(n);if(null===i)return null;{let r=i.findRootMostMatchingPathAndValue(iu(e),t);return null!=r?{path:im(new ia(n),r.path),value:r.value}:null}}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ig(e))return this;{let t=ih(e),n=this.children.get(t);return null!==n?n.subtree(iu(e)):new rh(null)}}set(e,t){if(ig(e))return new rh(t,this.children);{let n=ih(e),i=(this.children.get(n)||new rh(null)).set(iu(e),t),r=this.children.insert(n,i);return new rh(this.value,r)}}remove(e){if(ig(e))return this.children.isEmpty()?new rh(null):new rh(null,this.children);{let t=ih(e),n=this.children.get(t);if(!n)return this;{let i;let r=n.remove(iu(e));return(i=r.isEmpty()?this.children.remove(t):this.children.insert(t,r),null===this.value&&i.isEmpty())?new rh(null):new rh(this.value,i)}}}get(e){if(ig(e))return this.value;{let t=ih(e),n=this.children.get(t);return n?n.get(iu(e)):null}}setTree(e,t){if(ig(e))return t;{let n;let i=ih(e),r=(this.children.get(i)||new rh(null)).setTree(iu(e),t);return n=r.isEmpty()?this.children.remove(i):this.children.insert(i,r),new rh(this.value,n)}}fold(e){return this.fold_(il(),e)}fold_(e,t){let n={};return this.children.inorderTraversal((i,r)=>{n[i]=r.fold_(im(e,i),t)}),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,il(),t)}findOnPath_(e,t,n){let i=!!this.value&&n(t,this.value);if(i)return i;if(ig(e))return null;{let i=ih(e),r=this.children.get(i);return r?r.findOnPath_(iu(e),im(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,il(),t)}foreachOnPath_(e,t,n){if(ig(e))return this;{this.value&&n(t,this.value);let i=ih(e),r=this.children.get(i);return r?r.foreachOnPath_(iu(e),im(t,i),n):new rh(null)}}foreach(e){this.foreach_(il(),e)}foreach_(e,t){this.children.inorderTraversal((n,i)=>{i.foreach_(im(e,n),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,n)=>{n.value&&e(t,n.value)})}}/**
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
 */class rc{constructor(e){this.writeTree_=e}static empty(){return new rc(new rh(null))}}function ru(e,t,n){if(ig(t))return new rc(new rh(n));{let i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){let r=i.path,s=i.value,o=iy(r,t);return s=s.updateChild(o,n),new rc(e.writeTree_.set(r,s))}{let i=new rh(n);return new rc(e.writeTree_.setTree(t,i))}}}function rd(e,t,n){let i=e;return nW(n,(e,n)=>{i=ru(i,im(t,e),n)}),i}function rp(e,t){return ig(t)?rc.empty():new rc(e.writeTree_.setTree(t,new rh(null)))}function rf(e,t){return null!=r_(e,t)}function r_(e,t){let n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(iy(n.path,t)):null}function rm(e){let t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(iq,(e,n)=>{t.push(new iS(e,n))}):e.writeTree_.children.inorderTraversal((e,n)=>{null!=n.value&&t.push(new iS(e,n.value))}),t}function rg(e,t){if(ig(t))return e;{let n=r_(e,t);return new rc(null!=n?new rh(n):e.writeTree_.subtree(t))}}function ry(e){return e.writeTree_.isEmpty()}function rv(e,t){return function e(t,n,i){if(null!=n.value)return i.updateChild(t,n.value);{let r=null;return n.children.inorderTraversal((n,s)=>{".priority"===n?(j(null!==s.value,"Priority writes must always be leaf nodes"),r=s.value):i=e(im(t,n),s,i)}),i.getChild(t).isEmpty()||null===r||(i=i.updateChild(im(t,".priority"),r)),i}}(il(),e.writeTree_,t)}function rw(e){return e.visible}function rb(e,t,n){let i=rc.empty();for(let r=0;r<e.length;++r){let s=e[r];if(t(s)){let e;let t=s.path;if(s.snap)iw(n,t)?i=ru(i,e=iy(n,t),s.snap):iw(t,n)&&(e=iy(t,n),i=ru(i,il(),s.snap.getChild(e)));else if(s.children){if(iw(n,t))i=rd(i,e=iy(n,t),s.children);else if(iw(t,n)){if(ig(e=iy(t,n)))i=rd(i,il(),s.children);else{let t=ef(s.children,ih(e));if(t){let n=t.getChild(iu(e));i=ru(i,il(),n)}}}}else throw W("WriteRecord should have .snap or .children")}}return i}function rC(e,t,n,i,r){if(i||r){let s=rg(e.visibleWrites,t);return!r&&ry(s)?n:r||null!=n||rf(s,il())?rv(rb(e.allWrites,function(e){return(e.visible||r)&&(!i||!~i.indexOf(e.writeId))&&(iw(e.path,t)||iw(t,e.path))},t),n||iH.EMPTY_NODE):null}{let i=r_(e.visibleWrites,t);if(null!=i)return i;{let i=rg(e.visibleWrites,t);return ry(i)?n:null!=n||rf(i,il())?rv(i,n||iH.EMPTY_NODE):null}}}function rI(e,t,n,i){return rC(e.writeTree,e.treePath,t,n,i)}function rT(e,t){return function(e,t,n){let i=iH.EMPTY_NODE,r=r_(e.visibleWrites,t);if(r)return r.isLeafNode()||r.forEachChild(iq,(e,t)=>{i=i.updateImmediateChild(e,t)}),i;if(!n)return rm(rg(e.visibleWrites,t)).forEach(e=>{i=i.updateImmediateChild(e.name,e.node)}),i;{let r=rg(e.visibleWrites,t);return n.forEachChild(iq,(e,t)=>{let n=rv(rg(r,new ia(e)),t);i=i.updateImmediateChild(e,n)}),rm(r).forEach(e=>{i=i.updateImmediateChild(e.name,e.node)}),i}}(e.writeTree,e.treePath,t)}function rE(e,t,n,i){return function(e,t,n,i,r){j(i||r,"Either existingEventSnap or existingServerSnap must exist");let s=im(t,n);if(rf(e.visibleWrites,s))return null;{let t=rg(e.visibleWrites,s);return ry(t)?r.getChild(n):rv(t,r.getChild(n))}}(e.writeTree,e.treePath,t,n,i)}function rS(e,t){var n,i;return n=e.writeTree,i=im(e.treePath,t),r_(n.visibleWrites,i)}function rk(e,t,n){return function(e,t,n,i){let r=im(t,n),s=r_(e.visibleWrites,r);return null!=s?s:i.isCompleteForChild(n)?rv(rg(e.visibleWrites,r),i.getNode().getImmediateChild(n)):null}(e.writeTree,e.treePath,t,n)}function rN(e,t){return rD(im(e.treePath,t),e.writeTree)}function rD(e,t){return{treePath:e,writeTree:t}}/**
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
 */class rR{constructor(){this.changeMap=new Map}trackChildChange(e){let t=e.type,n=e.childName;j("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),j(".priority"!==n,"Only non-priority child changes can be tracked.");let i=this.changeMap.get(n);if(i){let r=i.type;if("child_added"===t&&"child_removed"===r)this.changeMap.set(n,iY(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===r)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===r)this.changeMap.set(n,{type:"child_removed",snapshotNode:i.oldSnap,childName:n});else if("child_changed"===t&&"child_added"===r)this.changeMap.set(n,{type:"child_added",snapshotNode:e.snapshotNode,childName:n});else if("child_changed"===t&&"child_changed"===r)this.changeMap.set(n,iY(n,e.snapshotNode,i.oldSnap));else throw W("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}const rP=new /**
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
 */class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class rx{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){let t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{let t=null!=this.optCompleteServerCache_?new rt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return rk(this.writes_,e,t)}}getChildAfterChild(e,t,n){var i;let r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:ra(this.viewCache_),s=function(e,t,n,i,r,s,o){let a;let l=rg(e.visibleWrites,t),h=r_(l,il());if(null!=h)a=h;else{if(null==n)return[];a=rv(l,n)}if((a=a.withIndex(o)).isEmpty()||a.isLeafNode())return[];{let e=[],t=o.getCompare(),n=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o),r=n.getNext();for(;r&&e.length<1;)0!==t(r,i)&&e.push(r),r=n.getNext();return e}}((i=this.writes_).writeTree,i.treePath,r,t,0,n,e);return 0===s.length?null:s[0]}}function rA(e,t,n,i,r,s){let o=t.eventCache;if(null!=rS(i,n))return t;{let a,l;if(ig(n)){if(j(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){let n=ra(t),r=rT(i,n instanceof iH?n:iH.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),r,s)}else{let n=rI(i,ra(t));a=e.filter.updateFullNode(t.eventCache.getNode(),n,s)}}else{let h=ih(n);if(".priority"===h){j(1===ic(n),"Can't have a priority with additional path components");let r=o.getNode(),s=rE(i,n,r,l=t.serverCache.getNode());a=null!=s?e.filter.updatePriority(r,s):o.getNode()}else{let c;let u=iu(n);if(o.isCompleteForChild(h)){l=t.serverCache.getNode();let e=rE(i,n,o.getNode(),l);c=null!=e?o.getNode().getImmediateChild(h).updateChild(u,e):o.getNode().getImmediateChild(h)}else c=rk(i,h,t.serverCache);a=null!=c?e.filter.updateChild(o.getNode(),h,c,u,r,s):o.getNode()}}return rr(t,a,o.isFullyInitialized()||ig(n),e.filter.filtersNodes())}}function rO(e,t,n,i,r,s,o,a){let l;let h=t.serverCache,c=o?e.filter:e.filter.getIndexedFilter();if(ig(n))l=c.updateFullNode(h.getNode(),i,null);else if(c.filtersNodes()&&!h.isFiltered()){let e=h.getNode().updateChild(n,i);l=c.updateFullNode(h.getNode(),e,null)}else{let e=ih(n);if(!h.isCompleteForPath(n)&&ic(n)>1)return t;let r=iu(n),s=h.getNode().getImmediateChild(e).updateChild(r,i);l=".priority"===e?c.updatePriority(h.getNode(),s):c.updateChild(h.getNode(),e,s,r,rP,null)}let u=rs(t,l,h.isFullyInitialized()||ig(n),c.filtersNodes()),d=new rx(r,u,s);return rA(e,u,n,r,d,a)}function rL(e,t,n,i,r,s,o){let a,l;let h=t.eventCache,c=new rx(r,t,s);if(ig(n))l=e.filter.updateFullNode(t.eventCache.getNode(),i,o),a=rr(t,l,!0,e.filter.filtersNodes());else{let r=ih(n);if(".priority"===r)l=e.filter.updatePriority(t.eventCache.getNode(),i),a=rr(t,l,h.isFullyInitialized(),h.isFiltered());else{let s;let l=iu(n),u=h.getNode().getImmediateChild(r);if(ig(l))s=i;else{let e=c.getCompleteChild(r);s=null!=e?".priority"===id(l)&&e.getChild(i_(l)).isEmpty()?e:e.updateChild(l,i):iH.EMPTY_NODE}a=u.equals(s)?t:rr(t,e.filter.updateChild(h.getNode(),r,s,l,c,o),h.isFullyInitialized(),e.filter.filtersNodes())}}return a}function rM(e,t){return e.eventCache.isCompleteForChild(t)}function rF(e,t,n){return n.foreach((e,n)=>{t=t.updateChild(e,n)}),t}function rq(e,t,n,i,r,s,o,a){let l;if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let h=t;l=ig(n)?i:new rh(null).setTree(n,i);let c=t.serverCache.getNode();return l.children.inorderTraversal((n,i)=>{if(c.hasChild(n)){let l=rF(e,t.serverCache.getNode().getImmediateChild(n),i);h=rO(e,h,new ia(n),l,r,s,o,a)}}),l.children.inorderTraversal((n,i)=>{let l=!t.serverCache.isCompleteForChild(n)&&null===i.value;if(!c.hasChild(n)&&!l){let l=rF(e,t.serverCache.getNode().getImmediateChild(n),i);h=rO(e,h,new ia(n),l,r,s,o,a)}}),h}function rB(e,t,n,i){var r,s;t.type===E.MERGE&&null!==t.source.queryId&&(j(ra(e.viewCache_),"We should always have a full cache before handling merges"),j(ro(e.viewCache_),"Missing event cache, even though we have a server cache"));let o=e.viewCache_,a=function(e,t,n,i,r){let s,o;let a=new rR;if(n.type===E.OVERWRITE)n.source.fromUser?s=rL(e,t,n.path,n.snap,i,r,a):(j(n.source.fromServer,"Unknown source."),o=n.source.tagged||t.serverCache.isFiltered()&&!ig(n.path),s=rO(e,t,n.path,n.snap,i,r,o,a));else if(n.type===E.MERGE){var l,h;let c;n.source.fromUser?(l=n.path,h=n.children,c=t,h.foreach((n,s)=>{let o=im(l,n);rM(t,ih(o))&&(c=rL(e,c,o,s,i,r,a))}),h.foreach((n,s)=>{let o=im(l,n);rM(t,ih(o))||(c=rL(e,c,o,s,i,r,a))}),s=c):(j(n.source.fromServer,"Unknown source."),o=n.source.tagged||t.serverCache.isFiltered(),s=rq(e,t,n.path,n.children,i,r,o,a))}else if(n.type===E.ACK_USER_WRITE)s=n.revert?function(e,t,n,i,r,s){let o;if(null!=rS(i,n))return t;{let a;let l=new rx(i,t,r),h=t.eventCache.getNode();if(ig(n)||".priority"===ih(n)){let n;if(t.serverCache.isFullyInitialized())n=rI(i,ra(t));else{let e=t.serverCache.getNode();j(e instanceof iH,"serverChildren would be complete if leaf node"),n=rT(i,e)}a=e.filter.updateFullNode(h,n,s)}else{let r=ih(n),c=rk(i,r,t.serverCache);null==c&&t.serverCache.isCompleteForChild(r)&&(c=h.getImmediateChild(r)),(a=null!=c?e.filter.updateChild(h,r,c,iu(n),l,s):t.eventCache.getNode().hasChild(r)?e.filter.updateChild(h,r,iH.EMPTY_NODE,iu(n),l,s):h).isEmpty()&&t.serverCache.isFullyInitialized()&&(o=rI(i,ra(t))).isLeafNode()&&(a=e.filter.updateFullNode(a,o,s))}return o=t.serverCache.isFullyInitialized()||null!=rS(i,il()),rr(t,a,o,e.filter.filtersNodes())}}(e,t,n.path,i,r,a):function(e,t,n,i,r,s,o){if(null!=rS(r,n))return t;let a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=i.value){if(ig(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return rO(e,t,n,l.getNode().getChild(n),r,s,a,o);if(!ig(n))return t;{let i=new rh(null);return l.getNode().forEachChild(iD,(e,t)=>{i=i.set(new ia(e),t)}),rq(e,t,n,i,r,s,a,o)}}{let h=new rh(null);return i.foreach((e,t)=>{let i=im(n,e);l.isCompleteForPath(i)&&(h=h.set(e,l.getNode().getChild(i)))}),rq(e,t,n,h,r,s,a,o)}}(e,t,n.path,n.affectedTree,i,r,a);else if(n.type===E.LISTEN_COMPLETE)s=function(e,t,n,i,r){let s=t.serverCache;return rA(e,rs(t,s.getNode(),s.isFullyInitialized()||ig(n),s.isFiltered()),n,i,rP,r)}(e,t,n.path,i,a);else throw W("Unknown operation type: "+n.type);let c=a.getChanges();return function(e,t,n){let i=t.eventCache;if(i.isFullyInitialized()){let r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=ro(e);!(n.length>0)&&e.eventCache.isFullyInitialized()&&(!r||i.getNode().equals(s))&&i.getNode().getPriority().equals(s.getPriority())||n.push({type:"value",snapshotNode:ro(t)})}}(t,s,c),{viewCache:s,changes:c}}(e.processor_,o,t,n,i);return r=e.processor_,j((s=a.viewCache).eventCache.getNode().isIndexed(r.filter.getIndex()),"Event snap not indexed"),j(s.serverCache.getNode().isIndexed(r.filter.getIndex()),"Server snap not indexed"),j(a.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=a.viewCache,function(e,t,n,i){let r=e.eventRegistrations_;return function(e,t,n,i){let r=[],s=[];return t.forEach(t=>{if("child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)){var n;s.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))}}),rn(e,r,"child_removed",t,i,n),rn(e,r,"child_added",t,i,n),rn(e,r,"child_moved",s,i,n),rn(e,r,"child_changed",t,i,n),rn(e,r,"value",t,i,n),r}(e.eventGenerator_,t,n,r)}(e,a.changes,a.viewCache.eventCache.getNode(),0)}function rj(e,t,n,i){let r=t.source.queryId;if(null!==r){let s=e.views.get(r);return j(null!=s,"SyncTree gave us an op for an invalid query."),rB(s,t,n,i)}{let r=[];for(let s of e.views.values())r=r.concat(rB(s,t,n,i));return r}}function rW(e,t){let n=null;for(let i of e.views.values())n=n||function(e,t){let n=ra(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!ig(t)&&!n.getImmediateChild(ih(t)).isEmpty())?n.getChild(t):null}(i,t);return n}class r${constructor(e){this.listenProvider_=e,this.syncPointTree_=new rh(null),this.pendingWriteTree_={visibleWrites:rc.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function rU(e,t,n=!1){let i=function(e,t){for(let n=0;n<e.allWrites.length;n++){let i=e.allWrites[n];if(i.writeId===t)return i}return null}(e.pendingWriteTree_,t);if(!function(e,t){let n=e.allWrites.findIndex(e=>e.writeId===t);j(n>=0,"removeWrite called with nonexistent writeId.");let i=e.allWrites[n];e.allWrites.splice(n,1);let r=i.visible,s=!1,o=e.allWrites.length-1;for(;r&&o>=0;){let t=e.allWrites[o];t.visible&&(o>=n&&function(e,t){if(e.snap)return iw(e.path,t);for(let n in e.children)if(e.children.hasOwnProperty(n)&&iw(im(e.path,n),t))return!0;return!1}(t,i.path)?r=!1:iw(i.path,t.path)&&(s=!0)),o--}return!!r&&(s?(e.visibleWrites=rb(e.allWrites,rw,il()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1):i.snap?e.visibleWrites=rp(e.visibleWrites,i.path):nW(i.children,t=>{e.visibleWrites=rp(e.visibleWrites,im(i.path,t))}),!0)}(e.pendingWriteTree_,t))return[];{let t=new rh(null);return null!=i.snap?t=t.set(il(),!0):nW(i.children,e=>{t=t.set(new ia(e),!0)}),rV(e,new i9(i.path,t,n))}}function rH(e,t,n){return rV(e,new i7(i5(),t,n))}function rz(e,t,n){let i=e.pendingWriteTree_,r=e.syncPointTree_.findOnPath(t,(e,n)=>{let i=rW(n,iy(e,t));if(i)return i});return rC(i,t,r,n,!0)}function rV(e,t){var n;return function e(t,n,i,r){if(ig(t.path))return function e(t,n,i,r){let s=n.get(il());null==i&&null!=s&&(i=rW(s,il()));let o=[];return n.children.inorderTraversal((n,s)=>{let a=i?i.getImmediateChild(n):null,l=rN(r,n),h=t.operationForChild(n);h&&(o=o.concat(e(h,s,a,l)))}),s&&(o=o.concat(rj(s,t,r,i))),o}(t,n,i,r);{let s=n.get(il());null==i&&null!=s&&(i=rW(s,il()));let o=[],a=ih(t.path),l=t.operationForChild(a),h=n.children.get(a);if(h&&l){let t=i?i.getImmediateChild(a):null,n=rN(r,a);o=o.concat(e(l,h,t,n))}return s&&(o=o.concat(rj(s,t,r,i))),o}}(t,e.syncPointTree_,null,(n=e.pendingWriteTree_,rD(il(),n)))}function rK(e,t){return e.tagToQueryMap.get(t)}function rG(e){let t=e.indexOf("$");return j(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new ia(e.substr(0,t))}}function rY(e,t,n){let i=e.syncPointTree_.get(t);return j(i,"Missing sync point for query tag that we're tracking"),rj(i,n,rD(t,e.pendingWriteTree_),null)}/**
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
 */class rQ{constructor(e){this.node_=e}getImmediateChild(e){return new rQ(this.node_.getImmediateChild(e))}node(){return this.node_}}class rJ{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){let t=im(this.path_,e);return new rJ(this.syncTree_,t)}node(){return rz(this.syncTree_,this.path_)}}const rX=function(e,t,n){return e&&"object"==typeof e?(j(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"])?rZ(e[".sv"],t,n):"object"==typeof e[".sv"]?r0(e[".sv"],t):void j(!1,"Unexpected server value: "+JSON.stringify(e,null,2)):e},rZ=function(e,t,n){if("timestamp"===e)return n.timestamp;j(!1,"Unexpected server value: "+e)},r0=function(e,t,n){e.hasOwnProperty("increment")||j(!1,"Unexpected server value: "+JSON.stringify(e,null,2));let i=e.increment;"number"!=typeof i&&j(!1,"Unexpected increment value: "+i);let r=t.node();if(j(null!=r,"Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;let s=r.getValue();return"number"!=typeof s?i:s+i};function r1(e,t,n){let i;let r=rX(e.getPriority().val(),t.getImmediateChild(".priority"),n);if(!e.isLeafNode())return i=e,r!==e.getPriority().val()&&(i=i.updatePriority(new iF(r))),e.forEachChild(iq,(e,r)=>{let s=r1(r,t.getImmediateChild(e),n);s!==r&&(i=i.updateImmediateChild(e,s))}),i;{let i=rX(e.getValue(),t,n);return i!==e.getValue()||r!==e.getPriority().val()?new iF(i,iV(r)):e}}/**
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
 */class r2{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function r4(e,t){let n=t instanceof ia?t:new ia(t),i=e,r=ih(n);for(;null!==r;){let e=ef(i.node.children,r)||{children:{},childCount:0};i=new r2(r,i,e),r=ih(n=iu(n))}return i}function r6(e){return e.node.value}function r3(e,t){e.node.value=t,function e(t){null!==t.parent&&function(t,n,i){let r=void 0===r6(i)&&!r5(i),s=ep(t.node.children,n);r&&s?(delete t.node.children[n],t.node.childCount--,e(t)):r||s||(t.node.children[n]=i.node,t.node.childCount++,e(t))}(t.parent,t.name,t)}(e)}function r5(e){return e.node.childCount>0}function r8(e,t){nW(e.node.children,(n,i)=>{t(new r2(n,e,i))})}function r9(e){return new ia(null===e.parent?e.name:r9(e.parent)+"/"+e.name)}/**
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
 */const r7=/[\[\].#$\/\u0000-\u001F\u007F]/,se=/[\[\].#$\u0000-\u001F\u007F]/,st=function(e){return"string"==typeof e&&0!==e.length&&!r7.test(e)},sn=function(e){var t;return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),"string"==typeof(t=e)&&0!==t.length&&!se.test(t)},si=function(e,t,n){let i=n instanceof ia?new ib(n,e):n;if(void 0===t)throw Error(e+"contains undefined "+iI(i));if("function"==typeof t)throw Error(e+"contains a function "+iI(i)+" with contents = "+t.toString());if(nx(t))throw Error(e+"contains "+t.toString()+" "+iI(i));if("string"==typeof t&&t.length>0xa00000/3&&eb(t)>0xa00000)throw Error(e+"contains a string greater than 10485760 utf8 bytes "+iI(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,r=!1;if(nW(t,(t,s)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(r=!0,!st(t)))throw Error(e+" contains an invalid key ("+t+") "+iI(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');i.parts_.length>0&&(i.byteLength_+=1),i.parts_.push(t),i.byteLength_+=eb(t),iC(i),si(e,s,i),function(e){let t=e.parts_.pop();e.byteLength_-=eb(t),e.parts_.length>0&&(e.byteLength_-=1)}(i)}),n&&r)throw Error(e+' contains ".value" child '+iI(i)+" in addition to actual children.")}},sr=function(e,t){let n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!st(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!sn(n))throw Error(`${e} failed: url argument must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class ss{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function so(e,t,n){!function(e,t){let n=null;for(let i=0;i<t.length;i++){let r=t[i],s=r.getPath();null===n||iv(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(r)}n&&e.eventLists_.push(n)}(e,n),function(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){let r=e.eventLists_[i];r&&(t(r.path)?(function(e){for(let t=0;t<e.events.length;t++){let n=e.events[t];if(null!==n){e.events[t]=null;let i=n.getEventRunner();nI&&nS("event: "+n.toString()),nz(i)}}}(e.eventLists_[i]),e.eventLists_[i]=null):n=!1)}n&&(e.eventLists_=[]),e.recursionDepth_--}(e,e=>iw(e,t)||iw(t,e))}class sa{constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ss,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=i1(),this.transactionQueueTree_=new r2,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function sl(e){var t;return(t=t={timestamp:function(e){let t=e.infoData_.getNode(new ia(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}(e)}).timestamp=t.timestamp||new Date().getTime(),t}function sh(e,t,n,i,r){e.dataUpdateCount++;let s=new ia(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(r){if(i){let t=em(n,e=>iV(e));o=function(e,t,n,i){let r=rK(e,i);if(!r)return[];{let i=rG(r),s=i.path,o=i.queryId,a=iy(s,t),l=rh.fromObject(n);return rY(e,s,new re(i8(o),a,l))}}(e.serverSyncTree_,s,t,r)}else{let t=iV(n);o=function(e,t,n,i){let r=rK(e,i);if(null==r)return[];{let i=rG(r),s=i.path,o=i.queryId,a=iy(s,t);return rY(e,s,new i7(i8(o),a,n))}}(e.serverSyncTree_,s,t,r)}}else if(i){let t=em(n,e=>iV(e));o=function(e,t,n){let i=rh.fromObject(n);return rV(e,new re(i5(),t,i))}(e.serverSyncTree_,s,t)}else{let t=iV(n);o=rH(e.serverSyncTree_,s,t)}let a=s;o.length>0&&(a=sf(e,s)),so(e.eventQueue_,a,o)}function sc(e,t){su(e,"connected",t),!1===t&&function(e){sd(e,"onDisconnectEvents");let t=sl(e),n=i1();i2(e.onDisconnect_,il(),(i,r)=>{let s=r1(r,new rJ(e.serverSyncTree_,i),t);!function e(t,n,i){if(ig(n))t.value=i,t.children.clear();else if(null!==t.value)t.value=t.value.updateChild(n,i);else{let r=ih(n);t.children.has(r)||t.children.set(r,i1()),e(t.children.get(r),n=iu(n),i)}}(n,i,s)});let i=[];i2(n,il(),(t,n)=>{i=i.concat(rH(e.serverSyncTree_,t,n));let r=function(e,t){let n=r9(s_(e,t)),i=r4(e.transactionQueueTree_,t);return function(e,t,n){let i=e.parent;for(;null!==i;){if(t(i))return!0;i=i.parent}}(i,t=>{sy(e,t)}),sy(e,i),function e(t,n,i,r){i&&!r&&n(t),r8(t,t=>{e(t,n,!0,r)}),i&&r&&n(t)}(i,t=>{sy(e,t)}),n}(e,t);sf(e,r)}),e.onDisconnect_=i1(),so(e.eventQueue_,il(),i)}(e)}function su(e,t,n){let i=new ia("/.info/"+t),r=iV(n);e.infoData_.updateSnapshot(i,r);let s=rH(e.infoSyncTree_,i,r);so(e.eventQueue_,i,s)}function sd(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),nS(n,...t)}function sp(e,t,n){return rz(e.serverSyncTree_,t,n)||iH.EMPTY_NODE}function sf(e,t){let n=s_(e,t),i=r9(n),r=sm(e,n);return function(e,t,n){if(0===t.length)return;let i=[],r=[],s=t.filter(e=>0===e.status).map(e=>e.currentWriteId);for(let o=0;o<t.length;o++){let a=t[o],l=iy(n,a.path),h=!1,c;if(j(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null."),4===a.status)h=!0,c=a.abortReason,r=r.concat(rU(e.serverSyncTree_,a.currentWriteId,!0));else if(0===a.status){if(a.retryCount>=25)h=!0,c="maxretry",r=r.concat(rU(e.serverSyncTree_,a.currentWriteId,!0));else{let n=sp(e,a.path,s);a.currentInputSnapshot=n;let i=t[o].update(n.val());if(void 0!==i){si("transaction failed: Data returned ",i,a.path);let t=iV(i);"object"==typeof i&&null!=i&&ep(i,".priority")||(t=t.updatePriority(n.getPriority()));let o=a.currentWriteId,l=sl(e),h=r1(t,new rQ(n),l);a.currentOutputSnapshotRaw=t,a.currentOutputSnapshotResolved=h,a.currentWriteId=e.nextWriteId_++,s.splice(s.indexOf(o),1),r=(r=r.concat(function(e,t,n,i,r){var s,o;return(s=e.pendingWriteTree_,o=r,j(i>s.lastWriteId,"Stacking an older write on top of newer ones"),void 0===o&&(o=!0),s.allWrites.push({path:t,snap:n,writeId:i,visible:o}),o&&(s.visibleWrites=ru(s.visibleWrites,t,n)),s.lastWriteId=i,r)?rV(e,new i7(i3(),t,n)):[]}(e.serverSyncTree_,a.path,h,a.currentWriteId,a.applyLocally))).concat(rU(e.serverSyncTree_,o,!0))}else h=!0,c="nodata",r=r.concat(rU(e.serverSyncTree_,a.currentWriteId,!0))}}so(e.eventQueue_,n,r),r=[],h&&(t[o].status=2,setTimeout(t[o].unwatcher,Math.floor(0)),t[o].onComplete&&("nodata"===c?i.push(()=>t[o].onComplete(null,!1,t[o].currentInputSnapshot)):i.push(()=>t[o].onComplete(Error(c),!1,null))))}sg(e,e.transactionQueueTree_);for(let e=0;e<i.length;e++)nz(i[e]);(function e(t,n=t.transactionQueueTree_){if(n||sg(t,n),r6(n)){let i=sm(t,n);j(i.length>0,"Sending zero length transaction queue"),i.every(e=>0===e.status)&&function(t,n,i){let r=sp(t,n,i.map(e=>e.currentWriteId)),s=r,o=r.hash();for(let e=0;e<i.length;e++){let t=i[e];j(0===t.status,"tryToSendTransactionQueue_: items in queue should all be run."),t.status=1,t.retryCount++;let r=iy(n,t.path);s=s.updateChild(r,t.currentOutputSnapshotRaw)}let a=s.val(!0);t.server_.put(n.toString(),a,r=>{sd(t,"transaction put response",{path:n.toString(),status:r});let s=[];if("ok"===r){let r=[];for(let e=0;e<i.length;e++)i[e].status=2,s=s.concat(rU(t.serverSyncTree_,i[e].currentWriteId)),i[e].onComplete&&r.push(()=>i[e].onComplete(null,!0,i[e].currentOutputSnapshotResolved)),i[e].unwatcher();sg(t,r4(t.transactionQueueTree_,n)),e(t,t.transactionQueueTree_),so(t.eventQueue_,n,s);for(let e=0;e<r.length;e++)nz(r[e])}else{if("datastale"===r)for(let e=0;e<i.length;e++)3===i[e].status?i[e].status=4:i[e].status=0;else{nR("transaction at "+n.toString()+" failed: "+r);for(let e=0;e<i.length;e++)i[e].status=4,i[e].abortReason=r}sf(t,n)}},o)}(t,r9(n),i)}else r5(n)&&r8(n,n=>{e(t,n)})})(e,e.transactionQueueTree_)}(e,r,i),i}function s_(e,t){let n;let i=e.transactionQueueTree_;for(n=ih(t);null!==n&&void 0===r6(i);)i=r4(i,n),n=ih(t=iu(t));return i}function sm(e,t){let n=[];return function e(t,n,i){let r=r6(n);if(r)for(let e=0;e<r.length;e++)i.push(r[e]);r8(n,n=>{e(t,n,i)})}(e,t,n),n.sort((e,t)=>e.order-t.order),n}function sg(e,t){let n=r6(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,r3(t,n.length>0?n:void 0)}r8(t,t=>{sg(e,t)})}function sy(e,t){let n=r6(t);if(n){let i=[],r=[],s=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(j(s===t-1,"All SENT items should be at beginning of queue."),s=t,n[t].status=3,n[t].abortReason="set"):(j(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),r=r.concat(rU(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,Error("set"),!1,null))));-1===s?r3(t,void 0):n.length=s+1,so(e.eventQueue_,r9(t),r);for(let e=0;e<i.length;e++)nz(i[e])}}const sv=function(e,t){let n=sw(e),i=n.namespace;"firebase.com"===n.domain&&nD(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||nD("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||nP();let r="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new nZ(n.host,n.secure,i,r,t,"",i!==n.subdomain),path:new ia(n.pathString)}},sw=function(e){let t="",n="",i="",r="",s="",o=!0,a="https",l=443;if("string"==typeof e){let h=e.indexOf("//");h>=0&&(a=e.substring(0,h-1),e=e.substring(h+2));let c=e.indexOf("/");-1===c&&(c=e.length);let u=e.indexOf("?");-1===u&&(u=e.length),t=e.substring(0,Math.min(c,u)),c<u&&(r=/**
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
 */function(e){let t="",n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let i=n[e];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(e){}t+="/"+i}return t}(e.substring(c,u)));let d=function(e){let t={};for(let n of("?"===e.charAt(0)&&(e=e.substring(1)),e.split("&"))){if(0===n.length)continue;let i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):nR(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,u)));(h=t.indexOf(":"))>=0?(o="https"===a||"wss"===a,l=parseInt(t.substring(h+1),10)):h=t.length;let p=t.slice(0,h);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{let e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),s=i}"ns"in d&&(s=d.ns)}return{host:t,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};/**
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
 */class sb{constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}get key(){return ig(this._path)?null:id(this._path)}get ref(){return new sC(this._repo,this._path)}get _queryIdentifier(){let e=nB(iX(this._queryParams));return"{}"===e?"default":e}get _queryObject(){return iX(this._queryParams)}isEqual(e){if(!((e=eI(e))instanceof sb))return!1;let t=this._repo===e._repo,n=iv(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}class sC extends sb{constructor(e,t){super(e,t,new iQ,!1)}get parent(){let e=i_(this._path);return null===e?null:new sC(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}}j(!f,"__referenceConstructor has already been defined"),f=sC,j(!_,"__referenceConstructor has already been defined"),_=sC;const sI={};class sT{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(function(e,t,n){if(e.stats_=n6(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new iZ(e.repoInfo_,(t,n,i,r)=>{sh(e,t,n,i,r)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>sc(e,!0),0);else{if(null!=n){if("object"!=typeof n)throw Error("Only objects are supported for option databaseAuthVariableOverride");try{eh(n)}catch(e){throw Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new iE(e.repoInfo_,t,(t,n,i,r)=>{sh(e,t,n,i,r)},t=>{sc(e,t)},t=>{nW(t,(t,n)=>{su(e,t,n)})},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(t=>{e.server_.refreshAuthToken(t)}),e.appCheckProvider_.addTokenChangeListener(t=>{e.server_.refreshAppCheckToken(t.token)}),e.statsReporter_=function(e,t){let n=e.toString();return n4[n]||(n4[n]=t()),n4[n]}(e.repoInfo_,()=>new i6(e.stats_,e.server_)),e.infoData_=new i0,e.infoSyncTree_=new r$({startListening:(t,n,i,r)=>{let s=[],o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=rH(e.infoSyncTree_,t._path,o),setTimeout(()=>{r("ok")},0)),s},stopListening:()=>{}}),su(e,"connected",!1),e.serverSyncTree_=new r$({startListening:(t,n,i,r)=>(e.server_.listen(t,i,n,(n,i)=>{let s=r(n,i);so(e.eventQueue_,t._path,s)}),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new sC(this._repo,il())),this._rootInternal}_delete(){return null!==this._rootInternal&&(function(e,t){let n=sI[t];n&&n[e.key]===e||nD(`Database ${t}(${e.repoInfo_}) has already been deleted.`),e.persistentConnection_&&e.persistentConnection_.interrupt("repo_interrupt"),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&nD("Cannot call "+e+" on a deleted database.")}}iE.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},iE.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)},np="11.1.0",e6(new eT("database",(e,{instanceIdentifier:t})=>(function(e,t,n,i,r){var s,o;let a,l,h,c,u=i||e.options.databaseURL;void 0===u&&(e.options.projectId||nD("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),nS("Using default host for project ",e.options.projectId),u=`${e.options.projectId}-default-rtdb.firebaseio.com`);let d=sv(u,void 0),p=d.repoInfo;void 0!==k&&k.env&&(h=k.env.FIREBASE_DATABASE_EMULATOR_HOST),h?(c=!0,p=(d=sv(u=`http://${h}?ns=${p.namespace}`,void 0)).repoInfo):c=!d.repoInfo.secure;let f=new nG(e.name,e.options,t);return sr("Invalid Firebase Database URL",d),ig(d.path)||nD("Database URL must point to the root of a Firebase Database (not including a child path)."),new sT((s=p,o=new nK(e.name,n),(a=sI[e.name])||(a={},sI[e.name]=a),(l=a[s.toURLString()])&&nD("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new sa(s,!1,f,o),a[s.toURLString()]=l,l),e)})(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t),"PUBLIC").setMultipleInstances(!0)),e7(nu,nd,void 0),e7(nu,nd,"esm2017"),window.process=(w=k)&&w.__esModule?w.default:w,function(e=function(e=eX){let t=e0.get(e);if(!t&&e===eX&&Z())return e9();if(!t)throw e5.create("no-app",{appName:e});return t}()){let t=e3(e=eI(e),tJ);t.isInitialized()?t.getImmediate():function(e,t={}){let n=e3(e,tJ);if(n.isInitialized()){let e=n.getImmediate();if(eg(t,n.getOptions()))return e;throw t0.create("already-initialized")}return n.initialize({options:t})}(e)}(e9({apiKey:"AIzaSyBrBT42Yn4nmQ5EHzzZMLN4JJKiV4UbJD4",authDomain:"reminder-app-81d22.firebaseapp.com",databaseURL:"https://reminder-app-81d22-default-rtdb.firebaseio.com",projectId:"reminder-app-81d22",storageBucket:"reminder-app-81d22.firebasestorage.app",messagingSenderId:"37109372943",appId:"1:37109372943:web:28bf06121469faab47ab7a",measurementId:"G-3XZCVNSRF9"}));class sE{constructor(e,t,n,i=null){this.comment=e,this.datetime=new Date(t),this.frequency=n,this.disableTime=i?new Date(i):null}}const sS=[],sk=document.getElementById("popup"),sN=document.getElementById("save-reminder"),sD=document.getElementById("close-popup"),sR=document.getElementById("new-reminder-btn"),sP=document.getElementById("frequency"),sx=document.getElementById("custom-frequency"),sA=document.getElementById("custom-minutes"),sO=document.getElementById("disable-time-checkbox"),sL=document.getElementById("disable-datetime-container"),sM=document.getElementById("reminder-items");let sF=null;function sq(e){e.timeoutId&&(clearTimeout(e.timeoutId),e.timeoutId=null)}function sB(e){let t=new Date,n=e.datetime-t;if(n<=0&&(e.datetime=new Date(t.getTime()+6e4*e.frequency)),e.disableTime&&t>=e.disableTime){sj(e);return}e.timeoutId=setTimeout(()=>{var t;if(t=e.comment,"granted"===Notification.permission?new Notification("Reminder",{body:t}):"default"===Notification.permission?Notification.requestPermission().then(e=>{"granted"===e?new Notification("Reminder",{body:t}):console.warn("Notifications denied by the user.")}):console.warn("Notifications are blocked. Please enable them in your browser settings."),e.disableTime&&new Date>=e.disableTime){sj(e);return}e.datetime=new Date(e.datetime.getTime()+6e4*e.frequency),sB(e),function(e){let t=sS.indexOf(e);if(-1!==t){let n=sM.children[t],i=new Date,r=sU(e.datetime-i);n.innerHTML=`
            <div class="reminder-details">
                <div class="comment">${e.comment}</div>
                <div class="time">Next reminder: ${e.datetime.toLocaleString()}</div>
                <div class="time-left">Time left: ${r}</div>
                ${e.disableTime?`<div class="disable-time">Disable at: ${e.disableTime.toLocaleString()}</div>`:""}
            </div>
            <button class="edit-btn" data-index="${t}">Edit</button>
            <button class="delete-btn" data-index="${t}">Delete</button>
        `,n.querySelector(".edit-btn").addEventListener("click",()=>{s$(e)}),n.querySelector(".delete-btn").addEventListener("click",()=>{sj(e)})}}(e)},n)}function sj(e){let t=sS.indexOf(e);-1!==t&&(sq(e),sS.splice(t,1),sW())}function sW(){sM.innerHTML="",sS.forEach((e,t)=>{let n=new Date,i=e.datetime-n;e.disableTime&&e.disableTime.toLocaleString();let r=sU(i),s=document.createElement("li");s.innerHTML=`
            <div class="reminder-details">
                <div class="comment">${e.comment}</div>
                <div class="time">${e.datetime.toLocaleString()}</div>
                <div class="time-left">Time left: ${r}</div>
                ${e.disableTime?`<div class="disable-time">Disable at: ${e.disableTime.toLocaleString()}</div>`:""}
            </div>
            <button class="edit-btn" data-index="${t}">Edit</button>
            <button class="delete-btn" data-index="${t}">Delete</button>
        `,sM.appendChild(s)}),document.querySelectorAll(".edit-btn").forEach(e=>{e.addEventListener("click",e=>{s$(sS[e.target.getAttribute("data-index")])})}),document.querySelectorAll(".delete-btn").forEach(e=>{e.addEventListener("click",e=>{let t=e.target.getAttribute("data-index");sS.splice(t,1),sW()})})}function s$(e){sF=e,document.getElementById("comment").value=e.comment;let t=new Date(e.datetime.getTime()-6e4*e.datetime.getTimezoneOffset()).toISOString().slice(0,16);if(document.getElementById("reminder-datetime").value=t,e.frequency&&60!==e.frequency&&120!==e.frequency?(sP.value="custom",sx.classList.remove("hidden"),sA.value=e.frequency):(sP.value=e.frequency.toString(),sx.classList.add("hidden"),sA.value=""),e.disableTime){sO.checked=!0,sL.classList.remove("hidden");let t=new Date(e.disableTime.getTime()-6e4*e.disableTime.getTimezoneOffset()).toISOString().slice(0,16);document.getElementById("disable-datetime").value=t}else sO.checked=!1,sL.classList.add("hidden"),document.getElementById("disable-datetime").value="";sk.classList.remove("hidden")}function sU(e){let t=Math.floor(e/6e4)%60,n=Math.floor(e/36e5)%24,i=Math.floor(e/864e5);return i>0?`${i}d ${n}h ${t}m`:n>0?`${n}h ${t}m`:`${t}m`}sR.addEventListener("click",()=>{sk.classList.remove("hidden"),document.getElementById("comment").value="",document.getElementById("reminder-datetime").value="",sP.value="60",sx.classList.add("hidden"),sA.value="",sO.checked=!1,sL.classList.add("hidden"),document.getElementById("disable-datetime").value="",sF=null}),sD.addEventListener("click",()=>{sk.classList.add("hidden")}),sP.addEventListener("change",()=>{"custom"===sP.value?sx.classList.remove("hidden"):sx.classList.add("hidden")}),sO.addEventListener("change",()=>{sO.checked?sL.classList.remove("hidden"):sL.classList.add("hidden")}),sN.addEventListener("click",()=>{let e=document.getElementById("comment").value,t=document.getElementById("reminder-datetime").value,n="custom"===sP.value?parseInt(sA.value)||60:parseInt(sP.value),i=sO.checked?document.getElementById("disable-datetime").value:null;if(!e||!t)return alert("Please fill in all required fields.");if(sF)sq(sF),sF.comment=e,sF.datetime=new Date(t),sF.frequency=n,sF.disableTime=i?new Date(i):null,sB(sF);else{let r=new sE(e,t,n,i);sS.push(r),sB(r)}sW(),sk.classList.add("hidden")});
//# sourceMappingURL=index.0a509e97.js.map
