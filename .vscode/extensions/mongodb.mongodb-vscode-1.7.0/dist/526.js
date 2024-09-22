"use strict";exports.id=526,exports.ids=[526],exports.modules={39526:(e,t,r)=>{r.d(t,{CreateTokenCommand:()=>Le,SSOOIDCClient:()=>ce});var o=r(81095),s=r(39359),n=r(48377),i=r(30499),a=r(11487),c=r(84966),d=r(70649),p=r(99389),l=r(1018),u=r(47385),h=r(90652),m=r(47135);const y=async(e,t,r)=>({operation:(0,m.u)(t).operation,region:await(0,m.t)(e.region)()||(()=>{throw new Error("expected `region` to be configured for `aws.auth#sigv4`")})()}),f=e=>{const t=[];switch(e.operation){case"CreateToken":case"RegisterClient":case"StartDeviceAuthorization":t.push({schemeId:"smithy.api#noAuth"});break;default:t.push(function(e){return{schemeId:"aws.auth#sigv4",signingProperties:{name:"sso-oauth",region:e.region},propertiesExtractor:(e,t)=>({signingProperties:{config:e,context:t}})}}(e))}return t},w={UseFIPS:{type:"builtInParams",name:"useFipsEndpoint"},Endpoint:{type:"builtInParams",name:"endpoint"},Region:{type:"builtInParams",name:"region"},UseDualStack:{type:"builtInParams",name:"useDualstackEndpoint"}};var x=r(85122),g=r(38257),v=r(94041),b=r(91701),E=r(39987),S=r(37778),I=r(7809),P=r(3323),O=r(16228),$=r(82641),k=r(94572),j=r(33197),T=r(66652),C=r(23875);const _="required",D="fn",K="argv",A="ref",z=!0,R="isSet",M="booleanEquals",U="error",q="endpoint",H="tree",F="PartitionResult",G="getAttr",V={[_]:!1,type:"String"},B={[_]:!0,default:!1,type:"Boolean"},J={[A]:"Endpoint"},L={[D]:M,[K]:[{[A]:"UseFIPS"},!0]},N={[D]:M,[K]:[{[A]:"UseDualStack"},!0]},Z={},Y={[D]:G,[K]:[{[A]:F},"supportsFIPS"]},W={[A]:F},X={[D]:M,[K]:[!0,{[D]:G,[K]:[W,"supportsDualStack"]}]},Q=[L],ee=[N],te=[{[A]:"Region"}],re={version:"1.0",parameters:{Region:V,UseDualStack:B,UseFIPS:B,Endpoint:V},rules:[{conditions:[{[D]:R,[K]:[J]}],rules:[{conditions:Q,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:U},{conditions:ee,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:U},{endpoint:{url:J,properties:Z,headers:Z},type:q}],type:H},{conditions:[{[D]:R,[K]:te}],rules:[{conditions:[{[D]:"aws.partition",[K]:te,assign:F}],rules:[{conditions:[L,N],rules:[{conditions:[{[D]:M,[K]:[z,Y]},X],rules:[{endpoint:{url:"https://oidc-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:Z,headers:Z},type:q}],type:H},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:U}],type:H},{conditions:Q,rules:[{conditions:[{[D]:M,[K]:[Y,z]}],rules:[{conditions:[{[D]:"stringEquals",[K]:[{[D]:G,[K]:[W,"name"]},"aws-us-gov"]}],endpoint:{url:"https://oidc.{Region}.amazonaws.com",properties:Z,headers:Z},type:q},{endpoint:{url:"https://oidc-fips.{Region}.{PartitionResult#dnsSuffix}",properties:Z,headers:Z},type:q}],type:H},{error:"FIPS is enabled but this partition does not support FIPS",type:U}],type:H},{conditions:ee,rules:[{conditions:[X],rules:[{endpoint:{url:"https://oidc.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:Z,headers:Z},type:q}],type:H},{error:"DualStack is enabled but this partition does not support DualStack",type:U}],type:H},{endpoint:{url:"https://oidc.{Region}.{PartitionResult#dnsSuffix}",properties:Z,headers:Z},type:q}],type:H}],type:H},{error:"Invalid Configuration: Missing Region",type:U}]},oe=(e,t={})=>(0,C.sO)(re,{endpointParams:e,logger:t.logger});C.mw.aws=T.UF;var se=r(44321);var ne=r(56928),ie=r(75479);const ae=e=>{const t=e.httpAuthSchemes;let r=e.httpAuthSchemeProvider,o=e.credentials;return{setHttpAuthScheme(e){const r=t.findIndex((t=>t.schemeId===e.schemeId));-1===r?t.push(e):t.splice(r,1,e)},httpAuthSchemes:()=>t,setHttpAuthSchemeProvider(e){r=e},httpAuthSchemeProvider:()=>r,setCredentials(e){o=e},credentials:()=>o}};class ce extends u.Kj{constructor(...[e]){const t=(e=>{(0,u.I9)(process.version);const t=(0,se.I)(e),r=()=>t().then(u.lT),o=(e=>({apiVersion:"2019-06-10",base64Decoder:e?.base64Decoder??k.E,base64Encoder:e?.base64Encoder??k.n,disableHostPrefix:e?.disableHostPrefix??!1,endpointProvider:e?.endpointProvider??oe,extensions:e?.extensions??[],httpAuthSchemeProvider:e?.httpAuthSchemeProvider??f,httpAuthSchemes:e?.httpAuthSchemes??[{schemeId:"aws.auth#sigv4",identityProvider:e=>e.getIdentityProvider("aws.auth#sigv4"),signer:new O.f},{schemeId:"smithy.api#noAuth",identityProvider:e=>e.getIdentityProvider("smithy.api#noAuth")||(async()=>({})),signer:new c.mR}],logger:e?.logger??new u.N4,serviceId:e?.serviceId??"SSO OIDC",urlParser:e?.urlParser??$.D,utf8Decoder:e?.utf8Decoder??j.ar,utf8Encoder:e?.utf8Encoder??j.Pq}))(e);return(0,x.I)(process.version),{...o,...e,runtime:"node",defaultsMode:t,bodyLengthChecker:e?.bodyLengthChecker??I.n,credentialDefaultProvider:e?.credentialDefaultProvider??g.v6,defaultUserAgentProvider:e?.defaultUserAgentProvider??(0,v.mJ)({serviceId:o.serviceId,clientVersion:"3.600.0"}),maxAttempts:e?.maxAttempts??(0,E.Z)(l.qs),region:e?.region??(0,E.Z)(a.GG,a.zH),requestHandler:S.$c.create(e?.requestHandler??r),retryMode:e?.retryMode??(0,E.Z)({...l.kN,default:async()=>(await r()).retryMode||P.L0}),sha256:e?.sha256??b.V.bind(null,"sha256"),streamCollector:e?.streamCollector??S.kv,useDualstackEndpoint:e?.useDualstackEndpoint??(0,E.Z)(a.e$),useFipsEndpoint:e?.useFipsEndpoint??(0,E.Z)(a.Ko)}})(e||{}),r=(m=t,{...m,useDualstackEndpoint:m.useDualstackEndpoint??!1,useFipsEndpoint:m.useFipsEndpoint??!1,defaultSigningName:"sso-oauth"});var m;const y=(0,a.TD)(r),w=(0,p.Co)(y),T=(0,l.$z)(w),C=(0,o.OV)(T);var _;const D=((e,t)=>{const r={...(0,ne.Rq)(e),...(0,u.xA)(e),...(0,ie.eS)(e),...ae(e)};return t.forEach((e=>e.configure(r))),{...e,...(0,ne.$3)(r),...(0,u.uv)(r),...(0,ie.jt)(r),...(o=r,{httpAuthSchemes:o.httpAuthSchemes(),httpAuthSchemeProvider:o.httpAuthSchemeProvider(),credentials:o.credentials()})};var o})((_=(0,i.Dc)(C),{...(0,h.h)(_)}),e?.extensions||[]);super(D),this.config=D,this.middlewareStack.use((0,l.ey)(this.config)),this.middlewareStack.use((0,d.vK)(this.config)),this.middlewareStack.use((0,o.TC)(this.config)),this.middlewareStack.use((0,s.Y7)(this.config)),this.middlewareStack.use((0,n.n4)(this.config)),this.middlewareStack.use((0,i.sM)(this.config)),this.middlewareStack.use((0,c.wB)(this.config,{httpAuthSchemeParametersProvider:this.getDefaultHttpAuthSchemeParametersProvider(),identityProviderConfigProvider:this.getIdentityProviderConfigProvider()})),this.middlewareStack.use((0,c.lW)(this.config))}destroy(){super.destroy()}getDefaultHttpAuthSchemeParametersProvider(){return y}getIdentityProviderConfigProvider(){return async e=>new c.h$({"aws.auth#sigv4":e.credentials})}}var de=r(1208);class pe extends u.TJ{constructor(e){super(e),Object.setPrototypeOf(this,pe.prototype)}}class le extends pe{constructor(e){super({name:"AccessDeniedException",$fault:"client",...e}),this.name="AccessDeniedException",this.$fault="client",Object.setPrototypeOf(this,le.prototype),this.error=e.error,this.error_description=e.error_description}}class ue extends pe{constructor(e){super({name:"AuthorizationPendingException",$fault:"client",...e}),this.name="AuthorizationPendingException",this.$fault="client",Object.setPrototypeOf(this,ue.prototype),this.error=e.error,this.error_description=e.error_description}}class he extends pe{constructor(e){super({name:"ExpiredTokenException",$fault:"client",...e}),this.name="ExpiredTokenException",this.$fault="client",Object.setPrototypeOf(this,he.prototype),this.error=e.error,this.error_description=e.error_description}}class me extends pe{constructor(e){super({name:"InternalServerException",$fault:"server",...e}),this.name="InternalServerException",this.$fault="server",Object.setPrototypeOf(this,me.prototype),this.error=e.error,this.error_description=e.error_description}}class ye extends pe{constructor(e){super({name:"InvalidClientException",$fault:"client",...e}),this.name="InvalidClientException",this.$fault="client",Object.setPrototypeOf(this,ye.prototype),this.error=e.error,this.error_description=e.error_description}}class fe extends pe{constructor(e){super({name:"InvalidGrantException",$fault:"client",...e}),this.name="InvalidGrantException",this.$fault="client",Object.setPrototypeOf(this,fe.prototype),this.error=e.error,this.error_description=e.error_description}}class we extends pe{constructor(e){super({name:"InvalidRequestException",$fault:"client",...e}),this.name="InvalidRequestException",this.$fault="client",Object.setPrototypeOf(this,we.prototype),this.error=e.error,this.error_description=e.error_description}}class xe extends pe{constructor(e){super({name:"InvalidScopeException",$fault:"client",...e}),this.name="InvalidScopeException",this.$fault="client",Object.setPrototypeOf(this,xe.prototype),this.error=e.error,this.error_description=e.error_description}}class ge extends pe{constructor(e){super({name:"SlowDownException",$fault:"client",...e}),this.name="SlowDownException",this.$fault="client",Object.setPrototypeOf(this,ge.prototype),this.error=e.error,this.error_description=e.error_description}}class ve extends pe{constructor(e){super({name:"UnauthorizedClientException",$fault:"client",...e}),this.name="UnauthorizedClientException",this.$fault="client",Object.setPrototypeOf(this,ve.prototype),this.error=e.error,this.error_description=e.error_description}}class be extends pe{constructor(e){super({name:"UnsupportedGrantTypeException",$fault:"client",...e}),this.name="UnsupportedGrantTypeException",this.$fault="client",Object.setPrototypeOf(this,be.prototype),this.error=e.error,this.error_description=e.error_description}}class Ee extends pe{constructor(e){super({name:"InvalidRequestRegionException",$fault:"client",...e}),this.name="InvalidRequestRegionException",this.$fault="client",Object.setPrototypeOf(this,Ee.prototype),this.error=e.error,this.error_description=e.error_description,this.endpoint=e.endpoint,this.region=e.region}}class Se extends pe{constructor(e){super({name:"InvalidClientMetadataException",$fault:"client",...e}),this.name="InvalidClientMetadataException",this.$fault="client",Object.setPrototypeOf(this,Se.prototype),this.error=e.error,this.error_description=e.error_description}}class Ie extends pe{constructor(e){super({name:"InvalidRedirectUriException",$fault:"client",...e}),this.name="InvalidRedirectUriException",this.$fault="client",Object.setPrototypeOf(this,Ie.prototype),this.error=e.error,this.error_description=e.error_description}}const Pe=e=>({...e,...e.clientSecret&&{clientSecret:u.$H},...e.refreshToken&&{refreshToken:u.$H},...e.codeVerifier&&{codeVerifier:u.$H}}),Oe=e=>({...e,...e.accessToken&&{accessToken:u.$H},...e.refreshToken&&{refreshToken:u.$H},...e.idToken&&{idToken:u.$H}});var $e=r(21919);const ke=async(e,t)=>{const r=(0,c.lI)(e,t);let o;return r.bp("/token"),o=JSON.stringify((0,u.s)(e,{clientId:[],clientSecret:[],code:[],codeVerifier:[],deviceCode:[],grantType:[],redirectUri:[],refreshToken:[],scope:e=>(0,u.Ss)(e)})),r.m("POST").h({"content-type":"application/json"}).b(o),r.build()},je=async(e,t)=>{if(200!==e.statusCode&&e.statusCode>=300)return Te(e,t);const r=(0,u.Tj)({$metadata:Je(e)}),o=(0,u.Y0)((0,u.Xk)(await(0,$e.Y2)(e.body,t)),"body"),s=(0,u.s)(o,{accessToken:u.lK,expiresIn:u.ET,idToken:u.lK,refreshToken:u.lK,tokenType:u.lK});return Object.assign(r,s),r},Te=async(e,t)=>{const r={...e,body:await(0,$e.CG)(e.body,t)},o=(0,$e.cJ)(e,r.body);switch(o){case"AccessDeniedException":case"com.amazonaws.ssooidc#AccessDeniedException":throw await _e(r,t);case"AuthorizationPendingException":case"com.amazonaws.ssooidc#AuthorizationPendingException":throw await De(r,t);case"ExpiredTokenException":case"com.amazonaws.ssooidc#ExpiredTokenException":throw await Ke(r,t);case"InternalServerException":case"com.amazonaws.ssooidc#InternalServerException":throw await Ae(r,t);case"InvalidClientException":case"com.amazonaws.ssooidc#InvalidClientException":throw await ze(r,t);case"InvalidGrantException":case"com.amazonaws.ssooidc#InvalidGrantException":throw await Me(r,t);case"InvalidRequestException":case"com.amazonaws.ssooidc#InvalidRequestException":throw await qe(r,t);case"InvalidScopeException":case"com.amazonaws.ssooidc#InvalidScopeException":throw await Fe(r,t);case"SlowDownException":case"com.amazonaws.ssooidc#SlowDownException":throw await Ge(r,t);case"UnauthorizedClientException":case"com.amazonaws.ssooidc#UnauthorizedClientException":throw await Ve(r,t);case"UnsupportedGrantTypeException":case"com.amazonaws.ssooidc#UnsupportedGrantTypeException":throw await Be(r,t);case"InvalidRequestRegionException":case"com.amazonaws.ssooidc#InvalidRequestRegionException":throw await He(r,t);case"InvalidClientMetadataException":case"com.amazonaws.ssooidc#InvalidClientMetadataException":throw await Re(r,t);case"InvalidRedirectUriException":case"com.amazonaws.ssooidc#InvalidRedirectUriException":throw await Ue(r,t);default:const s=r.body;return Ce({output:e,parsedBody:s,errorCode:o})}},Ce=(0,u.jr)(pe),_e=async(e,t)=>{const r=(0,u.Tj)({}),o=e.body,s=(0,u.s)(o,{error:u.lK,error_description:u.lK});Object.assign(r,s);const n=new le({$metadata:Je(e),...r});return(0,u.Mw)(n,e.body)},De=async(e,t)=>{const r=(0,u.Tj)({}),o=e.body,s=(0,u.s)(o,{error:u.lK,error_description:u.lK});Object.assign(r,s);const n=new ue({$metadata:Je(e),...r});return(0,u.Mw)(n,e.body)},Ke=async(e,t)=>{const r=(0,u.Tj)({}),o=e.body,s=(0,u.s)(o,{error:u.lK,error_description:u.lK});Object.assign(r,s);const n=new he({$metadata:Je(e),...r});return(0,u.Mw)(n,e.body)},Ae=async(e,t)=>{const r=(0,u.Tj)({}),o=e.body,s=(0,u.s)(o,{error:u.lK,error_description:u.lK});Object.assign(r,s);const n=new me({$metadata:Je(e),...r});return(0,u.Mw)(n,e.body)},ze=async(e,t)=>{const r=(0,u.Tj)({}),o=e.body,s=(0,u.s)(o,{error:u.lK,error_description:u.lK});Object.assign(r,s);const n=new ye({$metadata:Je(e),...r});return(0,u.Mw)(n,e.body)},Re=async(e,t)=>{const r=(0,u.Tj)({}),o=e.body,s=(0,u.s)(o,{error:u.lK,error_description:u.lK});Object.assign(r,s);const n=new Se({$metadata:Je(e),...r});return(0,u.Mw)(n,e.body)},Me=async(e,t)=>{const r=(0,u.Tj)({}),o=e.body,s=(0,u.s)(o,{error:u.lK,error_description:u.lK});Object.assign(r,s);const n=new fe({$metadata:Je(e),...r});return(0,u.Mw)(n,e.body)},Ue=async(e,t)=>{const r=(0,u.Tj)({}),o=e.body,s=(0,u.s)(o,{error:u.lK,error_description:u.lK});Object.assign(r,s);const n=new Ie({$metadata:Je(e),...r});return(0,u.Mw)(n,e.body)},qe=async(e,t)=>{const r=(0,u.Tj)({}),o=e.body,s=(0,u.s)(o,{error:u.lK,error_description:u.lK});Object.assign(r,s);const n=new we({$metadata:Je(e),...r});return(0,u.Mw)(n,e.body)},He=async(e,t)=>{const r=(0,u.Tj)({}),o=e.body,s=(0,u.s)(o,{endpoint:u.lK,error:u.lK,error_description:u.lK,region:u.lK});Object.assign(r,s);const n=new Ee({$metadata:Je(e),...r});return(0,u.Mw)(n,e.body)},Fe=async(e,t)=>{const r=(0,u.Tj)({}),o=e.body,s=(0,u.s)(o,{error:u.lK,error_description:u.lK});Object.assign(r,s);const n=new xe({$metadata:Je(e),...r});return(0,u.Mw)(n,e.body)},Ge=async(e,t)=>{const r=(0,u.Tj)({}),o=e.body,s=(0,u.s)(o,{error:u.lK,error_description:u.lK});Object.assign(r,s);const n=new ge({$metadata:Je(e),...r});return(0,u.Mw)(n,e.body)},Ve=async(e,t)=>{const r=(0,u.Tj)({}),o=e.body,s=(0,u.s)(o,{error:u.lK,error_description:u.lK});Object.assign(r,s);const n=new ve({$metadata:Je(e),...r});return(0,u.Mw)(n,e.body)},Be=async(e,t)=>{const r=(0,u.Tj)({}),o=e.body,s=(0,u.s)(o,{error:u.lK,error_description:u.lK});Object.assign(r,s);const n=new be({$metadata:Je(e),...r});return(0,u.Mw)(n,e.body)},Je=e=>({httpStatusCode:e.statusCode,requestId:e.headers["x-amzn-requestid"]??e.headers["x-amzn-request-id"]??e.headers["x-amz-request-id"],extendedRequestId:e.headers["x-amz-id-2"],cfId:e.headers["x-amz-cf-id"]});class Le extends(u.uB.classBuilder().ep({...w}).m((function(e,t,r,o){return[(0,de.TM)(r,this.serialize,this.deserialize),(0,p.rD)(r,e.getEndpointParameterInstructions())]})).s("AWSSSOOIDCService","CreateToken",{}).n("SSOOIDCClient","CreateTokenCommand").f(Pe,Oe).ser(ke).de(je).build()){}},21919:(e,t,r)=>{r.d(t,{CG:()=>n,Y2:()=>s,cJ:()=>i});var o=r(68218);const s=(e,t)=>(0,o.w)(e,t).then((e=>{if(e.length)try{return JSON.parse(e)}catch(t){throw"SyntaxError"===t?.name&&Object.defineProperty(t,"$responseBodyText",{value:e}),t}return{}})),n=async(e,t)=>{const r=await s(e,t);return r.message=r.message??r.Message,r},i=(e,t)=>{const r=e=>{let t=e;return"number"==typeof t&&(t=t.toString()),t.indexOf(",")>=0&&(t=t.split(",")[0]),t.indexOf(":")>=0&&(t=t.split(":")[0]),t.indexOf("#")>=0&&(t=t.split("#")[1]),t},o=(s=e.headers,Object.keys(s).find((e=>e.toLowerCase()==="x-amzn-errortype".toLowerCase())));var s;return void 0!==o?r(e.headers[o]):void 0!==t.code?r(t.code):void 0!==t.__type?r(t.__type):void 0}}};
//# sourceMappingURL=526.js.map