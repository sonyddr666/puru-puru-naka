var Hu=0,cc=1,Vu=2;var xl=1,Gu=2,pn=3,Nn=0,Tt=1,mn=2,Un=0,wi=1,lc=2,uc=3,hc=4,Wu=5,Jn=100,Xu=101,qu=102,Yu=103,Zu=104,Ju=200,$u=201,ju=202,Ku=203,fo=204,po=205,Qu=206,eh=207,th=208,nh=209,ih=210,rh=211,sh=212,oh=213,ah=214,mo=0,go=1,yo=2,Ci=3,xo=4,vo=5,_o=6,Mo=7,vl=0,ch=1,lh=2,Fn=0,uh=1,hh=2,dh=3,fh=4,ph=5,mh=6,Ia=7;var _l=300,Pi=301,Ii=302,bo=303,So=304,Ss=306,Eo=1e3,Kn=1001,wo=1002,Ot=1003,gh=1004;var wr=1005;var nn=1006,Ns=1007;var Qn=1008;var xn=1009,Ml=1010,bl=1011,hr=1012,La=1013,ei=1014,rn=1015,ii=1016,Da=1017,Ua=1018,Li=1020,Sl=35902,El=1021,wl=1022,Zt=1023,Tl=1024,Al=1025,Ti=1026,Di=1027,Fa=1028,Na=1029,Rl=1030,Oa=1031;var Ba=1033,$r=33776,jr=33777,Kr=33778,Qr=33779,To=35840,Ao=35841,Ro=35842,Co=35843,Po=36196,Io=37492,Lo=37496,Do=37808,Uo=37809,Fo=37810,No=37811,Oo=37812,Bo=37813,zo=37814,ko=37815,Ho=37816,Vo=37817,Go=37818,Wo=37819,Xo=37820,qo=37821,es=36492,Yo=36494,Zo=36495,Cl=36283,Jo=36284,$o=36285,jo=36286;var ts=2300,Ko=2301,Os=2302,dc=2400,fc=2401,pc=2402;var yh=3200,xh=3201;var Pl=0,vh=1,tn="",yt="srgb",ki="srgb-linear",Es="linear",it="srgb";var ci=7680;var mc=519,_h=512,Mh=513,bh=514,Il=515,Sh=516,Eh=517,wh=518,Th=519,gc=35044,vr=35048;var yc="300 es",gn=2e3,ns=2001,On=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xc=1234567,cr=Math.PI/180,dr=180/Math.PI;function Hi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Et[i&255]+Et[i>>8&255]+Et[i>>16&255]+Et[i>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[n&255]+Et[n>>8&255]+Et[n>>16&255]+Et[n>>24&255]).toLowerCase()}function _t(i,e,t){return Math.max(e,Math.min(t,i))}function za(i,e){return(i%e+e)%e}function Ah(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Rh(i,e,t){return i!==e?(t-i)/(e-i):0}function lr(i,e,t){return(1-t)*i+t*e}function Ch(i,e,t,n){return lr(i,e,1-Math.exp(-t*n))}function Ph(i,e=1){return e-Math.abs(za(i,e*2)-e)}function Ih(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Lh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Dh(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Uh(i,e){return i+Math.random()*(e-i)}function Fh(i){return i*(.5-Math.random())}function Nh(i){i!==void 0&&(xc=i);let e=xc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Oh(i){return i*cr}function Bh(i){return i*dr}function zh(i){return(i&i-1)===0&&i!==0}function kh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Hh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Vh(i,e,t,n,r){let s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),h=o((e+n)/2),p=s((e-n)/2),u=o((e-n)/2),d=s((n-e)/2),g=o((n-e)/2);switch(r){case"XYX":i.set(a*h,l*p,l*u,a*c);break;case"YZY":i.set(l*u,a*h,l*p,a*c);break;case"ZXZ":i.set(l*p,l*u,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*d,a*c);break;case"YXY":i.set(l*d,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Si(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function At(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Sn={DEG2RAD:cr,RAD2DEG:dr,generateUUID:Hi,clamp:_t,euclideanModulo:za,mapLinear:Ah,inverseLerp:Rh,lerp:lr,damp:Ch,pingpong:Ph,smoothstep:Ih,smootherstep:Lh,randInt:Dh,randFloat:Uh,randFloatSpread:Fh,seededRandom:Nh,degToRad:Oh,radToDeg:Bh,isPowerOfTwo:zh,ceilPowerOfTwo:kh,floorPowerOfTwo:Hh,setQuaternionFromProperEuler:Vh,normalize:At,denormalize:Si},Ue=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},We=class i{constructor(e,t,n,r,s,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],p=n[7],u=n[2],d=n[5],g=n[8],x=r[0],m=r[3],f=r[6],_=r[1],b=r[4],M=r[7],P=r[2],S=r[5],T=r[8];return s[0]=o*x+a*_+l*P,s[3]=o*m+a*b+l*S,s[6]=o*f+a*M+l*T,s[1]=c*x+h*_+p*P,s[4]=c*m+h*b+p*S,s[7]=c*f+h*M+p*T,s[2]=u*x+d*_+g*P,s[5]=u*m+d*b+g*S,s[8]=u*f+d*M+g*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+r*s*c-r*o*l}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],p=h*o-a*c,u=a*l-h*s,d=c*s-o*l,g=t*p+n*u+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=p*x,e[1]=(r*c-h*n)*x,e[2]=(a*n-r*o)*x,e[3]=u*x,e[4]=(h*t-r*l)*x,e[5]=(r*s-a*t)*x,e[6]=d*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Bs.makeScale(e,t)),this}rotate(e){return this.premultiply(Bs.makeRotation(-e)),this}translate(e,t){return this.premultiply(Bs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Bs=new We;function Ll(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function is(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Gh(){let i=is("canvas");return i.style.display="block",i}var vc={};function or(i){i in vc||(vc[i]=!0,console.warn(i))}function Wh(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Xh(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function qh(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var $e={enabled:!0,workingColorSpace:ki,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===it&&(i.r=yn(i.r),i.g=yn(i.g),i.b=yn(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===it&&(i.r=Ai(i.r),i.g=Ai(i.g),i.b=Ai(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===tn?Es:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function yn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ai(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var _c=[.64,.33,.3,.6,.15,.06],Mc=[.2126,.7152,.0722],bc=[.3127,.329],Sc=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ec=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);$e.define({[ki]:{primaries:_c,whitePoint:bc,transfer:Es,toXYZ:Sc,fromXYZ:Ec,luminanceCoefficients:Mc,workingColorSpaceConfig:{unpackColorSpace:yt},outputColorSpaceConfig:{drawingBufferColorSpace:yt}},[yt]:{primaries:_c,whitePoint:bc,transfer:it,toXYZ:Sc,fromXYZ:Ec,luminanceCoefficients:Mc,outputColorSpaceConfig:{drawingBufferColorSpace:yt}}});var li,Qo=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{li===void 0&&(li=is("canvas")),li.width=e.width,li.height=e.height;let n=li.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=li}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=is("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=yn(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(yn(t[n]/255)*255):t[n]=yn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Yh=0,rs=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yh++}),this.uuid=Hi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(zs(r[o].image)):s.push(zs(r[o]))}else s=zs(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function zs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Qo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Zh=0,Lt=class i extends On{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Kn,r=Kn,s=nn,o=Qn,a=Zt,l=xn,c=i.DEFAULT_ANISOTROPY,h=tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zh++}),this.uuid=Hi(),this.name="",this.source=new rs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_l)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Eo:e.x=e.x-Math.floor(e.x);break;case Kn:e.x=e.x<0?0:1;break;case wo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Eo:e.y=e.y-Math.floor(e.y);break;case Kn:e.y=e.y<0?0:1;break;case wo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=_l;Lt.DEFAULT_ANISOTROPY=1;var je=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,l=e.elements,c=l[0],h=l[4],p=l[8],u=l[1],d=l[5],g=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(p-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(p+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,M=(d+1)/2,P=(f+1)/2,S=(h+u)/4,T=(p+x)/4,C=(g+m)/4;return b>M&&b>P?b<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(b),r=S/n,s=T/n):M>P?M<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),n=S/r,s=C/r):P<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),n=T/s,r=C/s),this.set(n,r,s,t),this}let _=Math.sqrt((m-g)*(m-g)+(p-x)*(p-x)+(u-h)*(u-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(p-x)/_,this.z=(u-h)/_,this.w=Math.acos((c+d+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ea=class extends On{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new je(0,0,e,t),this.scissorTest=!1,this.viewport=new je(0,0,e,t);let r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new Lt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new rs(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jt=class extends ea{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ss=class extends Lt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ta=class extends Lt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Bn=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],h=n[r+2],p=n[r+3],u=s[o+0],d=s[o+1],g=s[o+2],x=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=p;return}if(a===1){e[t+0]=u,e[t+1]=d,e[t+2]=g,e[t+3]=x;return}if(p!==x||l!==u||c!==d||h!==g){let m=1-a,f=l*u+c*d+h*g+p*x,_=f>=0?1:-1,b=1-f*f;if(b>Number.EPSILON){let P=Math.sqrt(b),S=Math.atan2(P,f*_);m=Math.sin(m*S)/P,a=Math.sin(a*S)/P}let M=a*_;if(l=l*m+u*M,c=c*m+d*M,h=h*m+g*M,p=p*m+x*M,m===1-a){let P=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=P,c*=P,h*=P,p*=P}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,r,s,o){let a=n[r],l=n[r+1],c=n[r+2],h=n[r+3],p=s[o],u=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+h*p+l*d-c*u,e[t+1]=l*g+h*u+c*p-a*d,e[t+2]=c*g+h*d+a*u-l*p,e[t+3]=h*g-a*p-l*u-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(r/2),p=a(s/2),u=l(n/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=u*h*p+c*d*g,this._y=c*d*p-u*h*g,this._z=c*h*g+u*d*p,this._w=c*h*p-u*d*g;break;case"YXZ":this._x=u*h*p+c*d*g,this._y=c*d*p-u*h*g,this._z=c*h*g-u*d*p,this._w=c*h*p+u*d*g;break;case"ZXY":this._x=u*h*p-c*d*g,this._y=c*d*p+u*h*g,this._z=c*h*g+u*d*p,this._w=c*h*p-u*d*g;break;case"ZYX":this._x=u*h*p-c*d*g,this._y=c*d*p+u*h*g,this._z=c*h*g-u*d*p,this._w=c*h*p+u*d*g;break;case"YZX":this._x=u*h*p+c*d*g,this._y=c*d*p+u*h*g,this._z=c*h*g-u*d*p,this._w=c*h*p-u*d*g;break;case"XZY":this._x=u*h*p-c*d*g,this._y=c*d*p-u*h*g,this._z=c*h*g+u*d*p,this._w=c*h*p+u*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],p=t[10],u=n+a+p;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(n>a&&n>p){let d=2*Math.sqrt(1+n-a-p);this._w=(h-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>p){let d=2*Math.sqrt(1+a-n-p);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+p-n-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-r*a,this._w=o*h-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),p=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=o*p+this._w*u,this._x=n*p+this._x*u,this._y=r*p+this._y*u,this._z=s*p+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),h=2*(a*t-s*r),p=2*(s*n-o*t);return this.x=t+l*c+o*p-a*h,this.y=n+l*h+a*c-s*p,this.z=r+l*p+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ks.copy(this).projectOnVector(e),this.sub(ks)}reflect(e){return this.sub(ks.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ks=new O,wc=new Bn,vn=class{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Xt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Xt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Xt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Xt):Xt.fromBufferAttribute(s,o),Xt.applyMatrix4(e.matrixWorld),this.expandByPoint(Xt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Tr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Tr.copy(n.boundingBox)),Tr.applyMatrix4(e.matrixWorld),this.union(Tr)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xt),Xt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qi),Ar.subVectors(this.max,Qi),ui.subVectors(e.a,Qi),hi.subVectors(e.b,Qi),di.subVectors(e.c,Qi),Rn.subVectors(hi,ui),Cn.subVectors(di,hi),Vn.subVectors(ui,di);let t=[0,-Rn.z,Rn.y,0,-Cn.z,Cn.y,0,-Vn.z,Vn.y,Rn.z,0,-Rn.x,Cn.z,0,-Cn.x,Vn.z,0,-Vn.x,-Rn.y,Rn.x,0,-Cn.y,Cn.x,0,-Vn.y,Vn.x,0];return!Hs(t,ui,hi,di,Ar)||(t=[1,0,0,0,1,0,0,0,1],!Hs(t,ui,hi,di,Ar))?!1:(Rr.crossVectors(Rn,Cn),t=[Rr.x,Rr.y,Rr.z],Hs(t,ui,hi,di,Ar))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ln=[new O,new O,new O,new O,new O,new O,new O,new O],Xt=new O,Tr=new vn,ui=new O,hi=new O,di=new O,Rn=new O,Cn=new O,Vn=new O,Qi=new O,Ar=new O,Rr=new O,Gn=new O;function Hs(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Gn.fromArray(i,s);let a=r.x*Math.abs(Gn.x)+r.y*Math.abs(Gn.y)+r.z*Math.abs(Gn.z),l=e.dot(Gn),c=t.dot(Gn),h=n.dot(Gn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Jh=new vn,er=new O,Vs=new O,sn=class{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Jh.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;er.subVectors(e,this.center);let t=er.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(er,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(er.copy(e.center).add(Vs)),this.expandByPoint(er.copy(e.center).sub(Vs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},un=new O,Gs=new O,Cr=new O,Pn=new O,Ws=new O,Pr=new O,Xs=new O,fr=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(un.copy(this.origin).addScaledVector(this.direction,t),un.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Gs.copy(e).add(t).multiplyScalar(.5),Cr.copy(t).sub(e).normalize(),Pn.copy(this.origin).sub(Gs);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Cr),a=Pn.dot(this.direction),l=-Pn.dot(Cr),c=Pn.lengthSq(),h=Math.abs(1-o*o),p,u,d,g;if(h>0)if(p=o*l-a,u=o*a-l,g=s*h,p>=0)if(u>=-g)if(u<=g){let x=1/h;p*=x,u*=x,d=p*(p+o*u+2*a)+u*(o*p+u+2*l)+c}else u=s,p=Math.max(0,-(o*u+a)),d=-p*p+u*(u+2*l)+c;else u=-s,p=Math.max(0,-(o*u+a)),d=-p*p+u*(u+2*l)+c;else u<=-g?(p=Math.max(0,-(-o*s+a)),u=p>0?-s:Math.min(Math.max(-s,-l),s),d=-p*p+u*(u+2*l)+c):u<=g?(p=0,u=Math.min(Math.max(-s,-l),s),d=u*(u+2*l)+c):(p=Math.max(0,-(o*s+a)),u=p>0?s:Math.min(Math.max(-s,-l),s),d=-p*p+u*(u+2*l)+c);else u=o>0?-s:s,p=Math.max(0,-(o*u+a)),d=-p*p+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Gs).addScaledVector(Cr,u),d}intersectSphere(e,t){un.subVectors(e.center,this.origin);let n=un.dot(this.direction),r=un.dot(un)-n*n,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),p>=0?(a=(e.min.z-u.z)*p,l=(e.max.z-u.z)*p):(a=(e.max.z-u.z)*p,l=(e.min.z-u.z)*p),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,un)!==null}intersectTriangle(e,t,n,r,s){Ws.subVectors(t,e),Pr.subVectors(n,e),Xs.crossVectors(Ws,Pr);let o=this.direction.dot(Xs),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Pn.subVectors(this.origin,e);let l=a*this.direction.dot(Pr.crossVectors(Pn,Pr));if(l<0)return null;let c=a*this.direction.dot(Ws.cross(Pn));if(c<0||l+c>o)return null;let h=-a*Pn.dot(Xs);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},tt=class i{constructor(e,t,n,r,s,o,a,l,c,h,p,u,d,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,h,p,u,d,g,x,m)}set(e,t,n,r,s,o,a,l,c,h,p,u,d,g,x,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=p,f[14]=u,f[3]=d,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/fi.setFromMatrixColumn(e,0).length(),s=1/fi.setFromMatrixColumn(e,1).length(),o=1/fi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){let u=o*h,d=o*p,g=a*h,x=a*p;t[0]=l*h,t[4]=-l*p,t[8]=c,t[1]=d+g*c,t[5]=u-x*c,t[9]=-a*l,t[2]=x-u*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){let u=l*h,d=l*p,g=c*h,x=c*p;t[0]=u+x*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*p,t[5]=o*h,t[9]=-a,t[2]=d*a-g,t[6]=x+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*h,d=l*p,g=c*h,x=c*p;t[0]=u-x*a,t[4]=-o*p,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*h,t[9]=x-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*h,d=o*p,g=a*h,x=a*p;t[0]=l*h,t[4]=g*c-d,t[8]=u*c+x,t[1]=l*p,t[5]=x*c+u,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,d=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=x-u*p,t[8]=g*p+d,t[1]=p,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*p+g,t[10]=u-x*p}else if(e.order==="XZY"){let u=o*l,d=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=-p,t[8]=c*h,t[1]=u*p+x,t[5]=o*h,t[9]=d*p-g,t[2]=g*p-d,t[6]=a*h,t[10]=x*p+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($h,e,jh)}lookAt(e,t,n){let r=this.elements;return Ft.subVectors(e,t),Ft.lengthSq()===0&&(Ft.z=1),Ft.normalize(),In.crossVectors(n,Ft),In.lengthSq()===0&&(Math.abs(n.z)===1?Ft.x+=1e-4:Ft.z+=1e-4,Ft.normalize(),In.crossVectors(n,Ft)),In.normalize(),Ir.crossVectors(Ft,In),r[0]=In.x,r[4]=Ir.x,r[8]=Ft.x,r[1]=In.y,r[5]=Ir.y,r[9]=Ft.y,r[2]=In.z,r[6]=Ir.z,r[10]=Ft.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],p=n[5],u=n[9],d=n[13],g=n[2],x=n[6],m=n[10],f=n[14],_=n[3],b=n[7],M=n[11],P=n[15],S=r[0],T=r[4],C=r[8],v=r[12],y=r[1],E=r[5],L=r[9],B=r[13],F=r[2],N=r[6],R=r[10],z=r[14],D=r[3],k=r[7],q=r[11],ne=r[15];return s[0]=o*S+a*y+l*F+c*D,s[4]=o*T+a*E+l*N+c*k,s[8]=o*C+a*L+l*R+c*q,s[12]=o*v+a*B+l*z+c*ne,s[1]=h*S+p*y+u*F+d*D,s[5]=h*T+p*E+u*N+d*k,s[9]=h*C+p*L+u*R+d*q,s[13]=h*v+p*B+u*z+d*ne,s[2]=g*S+x*y+m*F+f*D,s[6]=g*T+x*E+m*N+f*k,s[10]=g*C+x*L+m*R+f*q,s[14]=g*v+x*B+m*z+f*ne,s[3]=_*S+b*y+M*F+P*D,s[7]=_*T+b*E+M*N+P*k,s[11]=_*C+b*L+M*R+P*q,s[15]=_*v+b*B+M*z+P*ne,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],p=e[6],u=e[10],d=e[14],g=e[3],x=e[7],m=e[11],f=e[15];return g*(+s*l*p-r*c*p-s*a*u+n*c*u+r*a*d-n*l*d)+x*(+t*l*d-t*c*u+s*o*u-r*o*d+r*c*h-s*l*h)+m*(+t*c*p-t*a*d-s*o*p+n*o*d+s*a*h-n*c*h)+f*(-r*a*h-t*l*p+t*a*u+r*o*p-n*o*u+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],p=e[9],u=e[10],d=e[11],g=e[12],x=e[13],m=e[14],f=e[15],_=p*m*c-x*u*c+x*l*d-a*m*d-p*l*f+a*u*f,b=g*u*c-h*m*c-g*l*d+o*m*d+h*l*f-o*u*f,M=h*x*c-g*p*c+g*a*d-o*x*d-h*a*f+o*p*f,P=g*p*l-h*x*l-g*a*u+o*x*u+h*a*m-o*p*m,S=t*_+n*b+r*M+s*P;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/S;return e[0]=_*T,e[1]=(x*u*s-p*m*s-x*r*d+n*m*d+p*r*f-n*u*f)*T,e[2]=(a*m*s-x*l*s+x*r*c-n*m*c-a*r*f+n*l*f)*T,e[3]=(p*l*s-a*u*s-p*r*c+n*u*c+a*r*d-n*l*d)*T,e[4]=b*T,e[5]=(h*m*s-g*u*s+g*r*d-t*m*d-h*r*f+t*u*f)*T,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*f-t*l*f)*T,e[7]=(o*u*s-h*l*s+h*r*c-t*u*c-o*r*d+t*l*d)*T,e[8]=M*T,e[9]=(g*p*s-h*x*s-g*n*d+t*x*d+h*n*f-t*p*f)*T,e[10]=(o*x*s-g*a*s+g*n*c-t*x*c-o*n*f+t*a*f)*T,e[11]=(h*a*s-o*p*s-h*n*c+t*p*c+o*n*d-t*a*d)*T,e[12]=P*T,e[13]=(h*x*r-g*p*r+g*n*u-t*x*u-h*n*m+t*p*m)*T,e[14]=(g*a*r-o*x*r-g*n*l+t*x*l+o*n*m-t*a*m)*T,e[15]=(o*p*r-h*a*r+h*n*l-t*p*l-o*n*u+t*a*u)*T,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+n,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,p=a+a,u=s*c,d=s*h,g=s*p,x=o*h,m=o*p,f=a*p,_=l*c,b=l*h,M=l*p,P=n.x,S=n.y,T=n.z;return r[0]=(1-(x+f))*P,r[1]=(d+M)*P,r[2]=(g-b)*P,r[3]=0,r[4]=(d-M)*S,r[5]=(1-(u+f))*S,r[6]=(m+_)*S,r[7]=0,r[8]=(g+b)*T,r[9]=(m-_)*T,r[10]=(1-(u+x))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,s=fi.set(r[0],r[1],r[2]).length(),o=fi.set(r[4],r[5],r[6]).length(),a=fi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],qt.copy(this);let c=1/s,h=1/o,p=1/a;return qt.elements[0]*=c,qt.elements[1]*=c,qt.elements[2]*=c,qt.elements[4]*=h,qt.elements[5]*=h,qt.elements[6]*=h,qt.elements[8]*=p,qt.elements[9]*=p,qt.elements[10]*=p,t.setFromRotationMatrix(qt),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=gn){let l=this.elements,c=2*s/(t-e),h=2*s/(n-r),p=(t+e)/(t-e),u=(n+r)/(n-r),d,g;if(a===gn)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===ns)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=gn){let l=this.elements,c=1/(t-e),h=1/(n-r),p=1/(o-s),u=(t+e)*c,d=(n+r)*h,g,x;if(a===gn)g=(o+s)*p,x=-2*p;else if(a===ns)g=s*p,x=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},fi=new O,qt=new tt,$h=new O(0,0,0),jh=new O(1,1,1),In=new O,Ir=new O,Ft=new O,Tc=new tt,Ac=new Bn,on=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],p=r[2],u=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(_t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(_t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-_t(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(_t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-_t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Tc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ac.setFromEuler(this),this.setFromQuaternion(Ac,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};on.DEFAULT_ORDER="XYZ";var pr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Kh=0,Rc=new O,pi=new Bn,hn=new tt,Lr=new O,tr=new O,Qh=new O,ed=new Bn,Cc=new O(1,0,0),Pc=new O(0,1,0),Ic=new O(0,0,1),Lc={type:"added"},td={type:"removed"},mi={type:"childadded",child:null},qs={type:"childremoved",child:null},vt=class i extends On{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kh++}),this.uuid=Hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new O,t=new on,n=new Bn,r=new O(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new tt},normalMatrix:{value:new We}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return pi.setFromAxisAngle(e,t),this.quaternion.multiply(pi),this}rotateOnWorldAxis(e,t){return pi.setFromAxisAngle(e,t),this.quaternion.premultiply(pi),this}rotateX(e){return this.rotateOnAxis(Cc,e)}rotateY(e){return this.rotateOnAxis(Pc,e)}rotateZ(e){return this.rotateOnAxis(Ic,e)}translateOnAxis(e,t){return Rc.copy(e).applyQuaternion(this.quaternion),this.position.add(Rc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cc,e)}translateY(e){return this.translateOnAxis(Pc,e)}translateZ(e){return this.translateOnAxis(Ic,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Lr.copy(e):Lr.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hn.lookAt(tr,Lr,this.up):hn.lookAt(Lr,tr,this.up),this.quaternion.setFromRotationMatrix(hn),r&&(hn.extractRotation(r.matrixWorld),pi.setFromRotationMatrix(hn),this.quaternion.premultiply(pi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Lc),mi.child=e,this.dispatchEvent(mi),mi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(td),qs.child=e,this.dispatchEvent(qs),qs.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Lc),mi.child=e,this.dispatchEvent(mi),mi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,e,Qh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,ed,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let p=l[c];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),p=o(e.shapes),u=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}};vt.DEFAULT_UP=new O(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Yt=new O,dn=new O,Ys=new O,fn=new O,gi=new O,yi=new O,Dc=new O,Zs=new O,Js=new O,$s=new O,js=new je,Ks=new je,Qs=new je,$n=class i{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Yt.subVectors(e,t),r.cross(Yt);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Yt.subVectors(r,t),dn.subVectors(n,t),Ys.subVectors(e,t);let o=Yt.dot(Yt),a=Yt.dot(dn),l=Yt.dot(Ys),c=dn.dot(dn),h=dn.dot(Ys),p=o*c-a*a;if(p===0)return s.set(0,0,0),null;let u=1/p,d=(c*l-a*h)*u,g=(o*h-a*l)*u;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,fn)===null?!1:fn.x>=0&&fn.y>=0&&fn.x+fn.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,fn.x),l.addScaledVector(o,fn.y),l.addScaledVector(a,fn.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return js.setScalar(0),Ks.setScalar(0),Qs.setScalar(0),js.fromBufferAttribute(e,t),Ks.fromBufferAttribute(e,n),Qs.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(js,s.x),o.addScaledVector(Ks,s.y),o.addScaledVector(Qs,s.z),o}static isFrontFacing(e,t,n,r){return Yt.subVectors(n,t),dn.subVectors(e,t),Yt.cross(dn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yt.subVectors(this.c,this.b),dn.subVectors(this.a,this.b),Yt.cross(dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,o,a;gi.subVectors(r,n),yi.subVectors(s,n),Zs.subVectors(e,n);let l=gi.dot(Zs),c=yi.dot(Zs);if(l<=0&&c<=0)return t.copy(n);Js.subVectors(e,r);let h=gi.dot(Js),p=yi.dot(Js);if(h>=0&&p<=h)return t.copy(r);let u=l*p-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(gi,o);$s.subVectors(e,s);let d=gi.dot($s),g=yi.dot($s);if(g>=0&&d<=g)return t.copy(s);let x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(yi,a);let m=h*g-d*p;if(m<=0&&p-h>=0&&d-g>=0)return Dc.subVectors(s,r),a=(p-h)/(p-h+(d-g)),t.copy(r).addScaledVector(Dc,a);let f=1/(m+x+u);return o=x*f,a=u*f,t.copy(n).addScaledVector(gi,o).addScaledVector(yi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Dl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ln={h:0,s:0,l:0},Dr={h:0,s:0,l:0};function eo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Te=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=$e.workingColorSpace){return this.r=e,this.g=t,this.b=n,$e.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=$e.workingColorSpace){if(e=za(e,1),t=_t(t,0,1),n=_t(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=eo(o,s,e+1/3),this.g=eo(o,s,e),this.b=eo(o,s,e-1/3)}return $e.toWorkingColorSpace(this,r),this}setStyle(e,t=yt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yt){let n=Dl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yn(e.r),this.g=yn(e.g),this.b=yn(e.b),this}copyLinearToSRGB(e){return this.r=Ai(e.r),this.g=Ai(e.g),this.b=Ai(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yt){return $e.fromWorkingColorSpace(wt.copy(this),e),Math.round(_t(wt.r*255,0,255))*65536+Math.round(_t(wt.g*255,0,255))*256+Math.round(_t(wt.b*255,0,255))}getHexString(e=yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.fromWorkingColorSpace(wt.copy(this),t);let n=wt.r,r=wt.g,s=wt.b,o=Math.max(n,r,s),a=Math.min(n,r,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let p=o-a;switch(c=h<=.5?p/(o+a):p/(2-o-a),o){case n:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-n)/p+2;break;case s:l=(n-r)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=$e.workingColorSpace){return $e.fromWorkingColorSpace(wt.copy(this),t),e.r=wt.r,e.g=wt.g,e.b=wt.b,e}getStyle(e=yt){$e.fromWorkingColorSpace(wt.copy(this),e);let t=wt.r,n=wt.g,r=wt.b;return e!==yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Ln),this.setHSL(Ln.h+e,Ln.s+t,Ln.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ln),e.getHSL(Dr);let n=lr(Ln.h,Dr.h,t),r=lr(Ln.s,Dr.s,t),s=lr(Ln.l,Dr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},wt=new Te;Te.NAMES=Dl;var nd=0,zn=class extends On{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=Hi(),this.name="",this.blending=wi,this.side=Nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fo,this.blendDst=po,this.blendEquation=Jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=Ci,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ci,this.stencilZFail=ci,this.stencilZPass=ci,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==wi&&(n.blending=this.blending),this.side!==Nn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==fo&&(n.blendSrc=this.blendSrc),this.blendDst!==po&&(n.blendDst=this.blendDst),this.blendEquation!==Jn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ci&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ci&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ci&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ci&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Vt=class extends zn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=vl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var ht=new O,Ur=new Ue,bt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=gc,this.updateRanges=[],this.gpuType=rn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ur.fromBufferAttribute(this,t),Ur.applyMatrix3(e),this.setXY(t,Ur.x,Ur.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Si(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=At(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Si(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Si(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Si(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Si(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),r=At(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),r=At(r,this.array),s=At(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gc&&(e.usage=this.usage),e}};var os=class extends bt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var as=class extends bt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var lt=class extends bt{constructor(e,t,n){super(new Float32Array(e),t,n)}},id=0,kt=new tt,to=new vt,xi=new O,Nt=new vn,nr=new vn,gt=new O,Ct=class i extends On{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:id++}),this.uuid=Hi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ll(e)?as:os)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new We().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kt.makeRotationFromQuaternion(e),this.applyMatrix4(kt),this}rotateX(e){return kt.makeRotationX(e),this.applyMatrix4(kt),this}rotateY(e){return kt.makeRotationY(e),this.applyMatrix4(kt),this}rotateZ(e){return kt.makeRotationZ(e),this.applyMatrix4(kt),this}translate(e,t,n){return kt.makeTranslation(e,t,n),this.applyMatrix4(kt),this}scale(e,t,n){return kt.makeScale(e,t,n),this.applyMatrix4(kt),this}lookAt(e){return to.lookAt(e),to.updateMatrix(),this.applyMatrix4(to.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xi).negate(),this.translate(xi.x,xi.y,xi.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new lt(n,3))}else{for(let n=0,r=t.count;n<r;n++){let s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];Nt.setFromBufferAttribute(s),this.morphTargetsRelative?(gt.addVectors(this.boundingBox.min,Nt.min),this.boundingBox.expandByPoint(gt),gt.addVectors(this.boundingBox.max,Nt.max),this.boundingBox.expandByPoint(gt)):(this.boundingBox.expandByPoint(Nt.min),this.boundingBox.expandByPoint(Nt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){let n=this.boundingSphere.center;if(Nt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];nr.setFromBufferAttribute(a),this.morphTargetsRelative?(gt.addVectors(Nt.min,nr.min),Nt.expandByPoint(gt),gt.addVectors(Nt.max,nr.max),Nt.expandByPoint(gt)):(Nt.expandByPoint(nr.min),Nt.expandByPoint(nr.max))}Nt.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)gt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(gt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)gt.fromBufferAttribute(a,c),l&&(xi.fromBufferAttribute(e,c),gt.add(xi)),r=Math.max(r,n.distanceToSquared(gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new O,l[C]=new O;let c=new O,h=new O,p=new O,u=new Ue,d=new Ue,g=new Ue,x=new O,m=new O;function f(C,v,y){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,v),p.fromBufferAttribute(n,y),u.fromBufferAttribute(s,C),d.fromBufferAttribute(s,v),g.fromBufferAttribute(s,y),h.sub(c),p.sub(c),d.sub(u),g.sub(u);let E=1/(d.x*g.y-g.x*d.y);isFinite(E)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(p,-d.y).multiplyScalar(E),m.copy(p).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(E),a[C].add(x),a[v].add(x),a[y].add(x),l[C].add(m),l[v].add(m),l[y].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let C=0,v=_.length;C<v;++C){let y=_[C],E=y.start,L=y.count;for(let B=E,F=E+L;B<F;B+=3)f(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let b=new O,M=new O,P=new O,S=new O;function T(C){P.fromBufferAttribute(r,C),S.copy(P);let v=a[C];b.copy(v),b.sub(P.multiplyScalar(P.dot(v))).normalize(),M.crossVectors(S,v);let E=M.dot(l[C])<0?-1:1;o.setXYZW(C,b.x,b.y,b.z,E)}for(let C=0,v=_.length;C<v;++C){let y=_[C],E=y.start,L=y.count;for(let B=E,F=E+L;B<F;B+=3)T(e.getX(B+0)),T(e.getX(B+1)),T(e.getX(B+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new bt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let r=new O,s=new O,o=new O,a=new O,l=new O,c=new O,h=new O,p=new O;if(e)for(let u=0,d=e.count;u<d;u+=3){let g=e.getX(u+0),x=e.getX(u+1),m=e.getX(u+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,s),p.subVectors(r,s),h.cross(p),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,d=t.count;u<d;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,s),p.subVectors(r,s),h.cross(p),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)gt.fromBufferAttribute(e,t),gt.normalize(),e.setXYZ(t,gt.x,gt.y,gt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,p=a.normalized,u=new c.constructor(l.length*h),d=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let f=0;f<h;f++)u[g++]=c[d++]}return new bt(u,h,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,n);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,p=c.length;h<p;h++){let u=c[h],d=e(u,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let p=0,u=c.length;p<u;p++){let d=c[p];h.push(d.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],p=s[c];for(let u=0,d=p.length;u<d;u++)h.push(p[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let p=o[c];this.addGroup(p.start,p.count,p.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Uc=new tt,Wn=new fr,Fr=new sn,Fc=new O,Nr=new O,Or=new O,Br=new O,no=new O,zr=new O,Nc=new O,kr=new O,ke=class extends vt{constructor(e=new Ct,t=new Vt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){zr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],p=s[l];h!==0&&(no.fromBufferAttribute(p,e),o?zr.addScaledVector(no,h):zr.addScaledVector(no.sub(t),h))}t.add(zr)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere),Fr.applyMatrix4(s),Wn.copy(e.ray).recast(e.near),!(Fr.containsPoint(Wn.origin)===!1&&(Wn.intersectSphere(Fr,Fc)===null||Wn.origin.distanceToSquared(Fc)>(e.far-e.near)**2))&&(Uc.copy(s).invert(),Wn.copy(e.ray).applyMatrix4(Uc),!(n.boundingBox!==null&&Wn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Wn)))}_computeIntersections(e,t,n){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,u=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=u.length;g<x;g++){let m=u[g],f=o[m.materialIndex],_=Math.max(m.start,d.start),b=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let M=_,P=b;M<P;M+=3){let S=a.getX(M),T=a.getX(M+1),C=a.getX(M+2);r=Hr(this,f,e,n,c,h,p,S,T,C),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,f=x;m<f;m+=3){let _=a.getX(m),b=a.getX(m+1),M=a.getX(m+2);r=Hr(this,o,e,n,c,h,p,_,b,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=u.length;g<x;g++){let m=u[g],f=o[m.materialIndex],_=Math.max(m.start,d.start),b=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let M=_,P=b;M<P;M+=3){let S=M,T=M+1,C=M+2;r=Hr(this,f,e,n,c,h,p,S,T,C),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=g,f=x;m<f;m+=3){let _=m,b=m+1,M=m+2;r=Hr(this,o,e,n,c,h,p,_,b,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function rd(i,e,t,n,r,s,o,a){let l;if(e.side===Tt?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===Nn,a),l===null)return null;kr.copy(a),kr.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(kr);return c<t.near||c>t.far?null:{distance:c,point:kr.clone(),object:i}}function Hr(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,Nr),i.getVertexPosition(l,Or),i.getVertexPosition(c,Br);let h=rd(i,e,t,n,Nr,Or,Br,Nc);if(h){let p=new O;$n.getBarycoord(Nc,Nr,Or,Br,p),r&&(h.uv=$n.getInterpolatedAttribute(r,a,l,c,p,new Ue)),s&&(h.uv1=$n.getInterpolatedAttribute(s,a,l,c,p,new Ue)),o&&(h.normal=$n.getInterpolatedAttribute(o,a,l,c,p,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new O,materialIndex:0};$n.getNormal(Nr,Or,Br,u.normal),h.face=u,h.barycoord=p}return h}var _n=class i extends Ct{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],p=[],u=0,d=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new lt(c,3)),this.setAttribute("normal",new lt(h,3)),this.setAttribute("uv",new lt(p,2));function g(x,m,f,_,b,M,P,S,T,C,v){let y=M/T,E=P/C,L=M/2,B=P/2,F=S/2,N=T+1,R=C+1,z=0,D=0,k=new O;for(let q=0;q<R;q++){let ne=q*E-B;for(let te=0;te<N;te++){let me=te*y-L;k[x]=me*_,k[m]=ne*b,k[f]=F,c.push(k.x,k.y,k.z),k[x]=0,k[m]=0,k[f]=S>0?1:-1,h.push(k.x,k.y,k.z),p.push(te/T),p.push(1-q/C),z+=1}}for(let q=0;q<C;q++)for(let ne=0;ne<T;ne++){let te=u+ne+N*q,me=u+ne+N*(q+1),Z=u+(ne+1)+N*(q+1),ie=u+(ne+1)+N*q;l.push(te,me,ie),l.push(me,Z,ie),D+=6}a.addGroup(d,D,v),d+=D,u+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ui(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Rt(i){let e={};for(let t=0;t<i.length;t++){let n=Ui(i[t]);for(let r in n)e[r]=n[r]}return e}function sd(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ul(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}var ka={clone:Ui,merge:Rt},od=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ad=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Dt=class extends zn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=od,this.fragmentShader=ad,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ui(e.uniforms),this.uniformsGroups=sd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},cs=class extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=gn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Dn=new O,Oc=new Ue,Bc=new Ue,xt=class extends cs{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=dr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(cr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return dr*2*Math.atan(Math.tan(cr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Dn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Dn.x,Dn.y).multiplyScalar(-e/Dn.z),Dn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Dn.x,Dn.y).multiplyScalar(-e/Dn.z)}getViewSize(e,t){return this.getViewBounds(e,Oc,Bc),t.subVectors(Bc,Oc)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(cr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},vi=-90,_i=1,na=class extends vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new xt(vi,_i,e,t);r.layers=this.layers,this.add(r);let s=new xt(vi,_i,e,t);s.layers=this.layers,this.add(s);let o=new xt(vi,_i,e,t);o.layers=this.layers,this.add(o);let a=new xt(vi,_i,e,t);a.layers=this.layers,this.add(a);let l=new xt(vi,_i,e,t);l.layers=this.layers,this.add(l);let c=new xt(vi,_i,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===gn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ns)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,p=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(p,u,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ls=class extends Lt{constructor(e,t,n,r,s,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Pi,super(e,t,n,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ia=class extends Jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ls(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:nn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new _n(5,5,5),s=new Dt({name:"CubemapFromEquirect",uniforms:Ui(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Tt,blending:Un});s.uniforms.tEquirect.value=t;let o=new ke(r,s),a=t.minFilter;return t.minFilter===Qn&&(t.minFilter=nn),new na(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}},io=new O,cd=new O,ld=new We,Mt=class{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=io.subVectors(n,t).cross(cd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(io),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ld.getNormalMatrix(e),r=this.coplanarPoint(io).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Xn=new sn,Vr=new O,mr=class{constructor(e=new Mt,t=new Mt,n=new Mt,r=new Mt,s=new Mt,o=new Mt){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=gn){let n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],h=r[5],p=r[6],u=r[7],d=r[8],g=r[9],x=r[10],m=r[11],f=r[12],_=r[13],b=r[14],M=r[15];if(n[0].setComponents(l-s,u-c,m-d,M-f).normalize(),n[1].setComponents(l+s,u+c,m+d,M+f).normalize(),n[2].setComponents(l+o,u+h,m+g,M+_).normalize(),n[3].setComponents(l-o,u-h,m-g,M-_).normalize(),n[4].setComponents(l-a,u-p,m-x,M-b).normalize(),t===gn)n[5].setComponents(l+a,u+p,m+x,M+b).normalize();else if(t===ns)n[5].setComponents(a,p,x,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xn)}intersectsSprite(e){return Xn.center.set(0,0,0),Xn.radius=.7071067811865476,Xn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xn)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Vr.x=r.normal.x>0?e.max.x:e.min.x,Vr.y=r.normal.y>0?e.max.y:e.min.y,Vr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Vr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Fl(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function ud(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,p=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:p}}function n(a,l,c){let h=l.array,p=l.updateRanges;if(i.bindBuffer(c,a),p.length===0)i.bufferSubData(c,0,h);else{p.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<p.length;d++){let g=p[u],x=p[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,p[u]=x)}p.length=u+1;for(let d=0,g=p.length;d<g;d++){let x=p[d];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Gt=class i extends Ct{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,h=l+1,p=e/a,u=t/l,d=[],g=[],x=[],m=[];for(let f=0;f<h;f++){let _=f*u-o;for(let b=0;b<c;b++){let M=b*p-s;g.push(M,-_,0),x.push(0,0,1),m.push(b/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<a;_++){let b=_+c*f,M=_+c*(f+1),P=_+1+c*(f+1),S=_+1+c*f;d.push(b,M,S),d.push(M,P,S)}this.setIndex(d),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(x,3)),this.setAttribute("uv",new lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},hd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,fd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,md=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,xd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,_d=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Md=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ed=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,wd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Td=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ad=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Pd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Id=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ld=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Dd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ud=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Fd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Nd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Od=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Wd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,qd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Zd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$d=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Qd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ef=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,rf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,sf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,of=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,af=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,uf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,hf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,df=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ff=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_f=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Mf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ef=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Af=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Rf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Pf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,If=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Df=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Uf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ff=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Nf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Of=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Hf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Zf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Jf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,$f=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,jf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Qf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ep=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,tp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,np=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ip=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,sp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,op=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ap=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,up=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,hp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,xp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_p=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ep=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Tp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ap=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Pp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ip=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Lp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Dp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Up=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Np=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Op=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,kp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Gp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Wp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:hd,alphahash_pars_fragment:dd,alphamap_fragment:fd,alphamap_pars_fragment:pd,alphatest_fragment:md,alphatest_pars_fragment:gd,aomap_fragment:yd,aomap_pars_fragment:xd,batching_pars_vertex:vd,batching_vertex:_d,begin_vertex:Md,beginnormal_vertex:bd,bsdfs:Sd,iridescence_fragment:Ed,bumpmap_pars_fragment:wd,clipping_planes_fragment:Td,clipping_planes_pars_fragment:Ad,clipping_planes_pars_vertex:Rd,clipping_planes_vertex:Cd,color_fragment:Pd,color_pars_fragment:Id,color_pars_vertex:Ld,color_vertex:Dd,common:Ud,cube_uv_reflection_fragment:Fd,defaultnormal_vertex:Nd,displacementmap_pars_vertex:Od,displacementmap_vertex:Bd,emissivemap_fragment:zd,emissivemap_pars_fragment:kd,colorspace_fragment:Hd,colorspace_pars_fragment:Vd,envmap_fragment:Gd,envmap_common_pars_fragment:Wd,envmap_pars_fragment:Xd,envmap_pars_vertex:qd,envmap_physical_pars_fragment:rf,envmap_vertex:Yd,fog_vertex:Zd,fog_pars_vertex:Jd,fog_fragment:$d,fog_pars_fragment:jd,gradientmap_pars_fragment:Kd,lightmap_pars_fragment:Qd,lights_lambert_fragment:ef,lights_lambert_pars_fragment:tf,lights_pars_begin:nf,lights_toon_fragment:sf,lights_toon_pars_fragment:of,lights_phong_fragment:af,lights_phong_pars_fragment:cf,lights_physical_fragment:lf,lights_physical_pars_fragment:uf,lights_fragment_begin:hf,lights_fragment_maps:df,lights_fragment_end:ff,logdepthbuf_fragment:pf,logdepthbuf_pars_fragment:mf,logdepthbuf_pars_vertex:gf,logdepthbuf_vertex:yf,map_fragment:xf,map_pars_fragment:vf,map_particle_fragment:_f,map_particle_pars_fragment:Mf,metalnessmap_fragment:bf,metalnessmap_pars_fragment:Sf,morphinstance_vertex:Ef,morphcolor_vertex:wf,morphnormal_vertex:Tf,morphtarget_pars_vertex:Af,morphtarget_vertex:Rf,normal_fragment_begin:Cf,normal_fragment_maps:Pf,normal_pars_fragment:If,normal_pars_vertex:Lf,normal_vertex:Df,normalmap_pars_fragment:Uf,clearcoat_normal_fragment_begin:Ff,clearcoat_normal_fragment_maps:Nf,clearcoat_pars_fragment:Of,iridescence_pars_fragment:Bf,opaque_fragment:zf,packing:kf,premultiplied_alpha_fragment:Hf,project_vertex:Vf,dithering_fragment:Gf,dithering_pars_fragment:Wf,roughnessmap_fragment:Xf,roughnessmap_pars_fragment:qf,shadowmap_pars_fragment:Yf,shadowmap_pars_vertex:Zf,shadowmap_vertex:Jf,shadowmask_pars_fragment:$f,skinbase_vertex:jf,skinning_pars_vertex:Kf,skinning_vertex:Qf,skinnormal_vertex:ep,specularmap_fragment:tp,specularmap_pars_fragment:np,tonemapping_fragment:ip,tonemapping_pars_fragment:rp,transmission_fragment:sp,transmission_pars_fragment:op,uv_pars_fragment:ap,uv_pars_vertex:cp,uv_vertex:lp,worldpos_vertex:up,background_vert:hp,background_frag:dp,backgroundCube_vert:fp,backgroundCube_frag:pp,cube_vert:mp,cube_frag:gp,depth_vert:yp,depth_frag:xp,distanceRGBA_vert:vp,distanceRGBA_frag:_p,equirect_vert:Mp,equirect_frag:bp,linedashed_vert:Sp,linedashed_frag:Ep,meshbasic_vert:wp,meshbasic_frag:Tp,meshlambert_vert:Ap,meshlambert_frag:Rp,meshmatcap_vert:Cp,meshmatcap_frag:Pp,meshnormal_vert:Ip,meshnormal_frag:Lp,meshphong_vert:Dp,meshphong_frag:Up,meshphysical_vert:Fp,meshphysical_frag:Np,meshtoon_vert:Op,meshtoon_frag:Bp,points_vert:zp,points_frag:kp,shadow_vert:Hp,shadow_frag:Vp,sprite_vert:Gp,sprite_frag:Wp},ve={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},en={basic:{uniforms:Rt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Rt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Te(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Rt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Rt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Rt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Te(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Rt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Rt([ve.points,ve.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Rt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Rt([ve.common,ve.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Rt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Rt([ve.sprite,ve.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Rt([ve.common,ve.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Rt([ve.lights,ve.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};en.physical={uniforms:Rt([en.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};var Gr={r:0,b:0,g:0},qn=new on,Xp=new tt;function qp(i,e,t,n,r,s,o){let a=new Te(0),l=s===!0?0:1,c,h,p=null,u=0,d=null;function g(_){let b=_.isScene===!0?_.background:null;return b&&b.isTexture&&(b=(_.backgroundBlurriness>0?t:e).get(b)),b}function x(_){let b=!1,M=g(_);M===null?f(a,l):M&&M.isColor&&(f(M,1),b=!0);let P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(_,b){let M=g(b);M&&(M.isCubeTexture||M.mapping===Ss)?(h===void 0&&(h=new ke(new _n(1,1,1),new Dt({name:"BackgroundCubeMaterial",uniforms:Ui(en.backgroundCube.uniforms),vertexShader:en.backgroundCube.vertexShader,fragmentShader:en.backgroundCube.fragmentShader,side:Tt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,S,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),qn.copy(b.backgroundRotation),qn.x*=-1,qn.y*=-1,qn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(qn.y*=-1,qn.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Xp.makeRotationFromEuler(qn)),h.material.toneMapped=$e.getTransfer(M.colorSpace)!==it,(p!==M||u!==M.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,p=M,u=M.version,d=i.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new ke(new Gt(2,2),new Dt({name:"BackgroundMaterial",uniforms:Ui(en.background.uniforms),vertexShader:en.background.vertexShader,fragmentShader:en.background.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=$e.getTransfer(M.colorSpace)!==it,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(p!==M||u!==M.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,p=M,u=M.version,d=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function f(_,b){_.getRGB(Gr,Ul(i)),n.buffers.color.setClear(Gr.r,Gr.g,Gr.b,b,o)}return{getClearColor:function(){return a},setClearColor:function(_,b=1){a.set(_),l=b,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,f(a,l)},render:x,addToRenderList:m}}function Yp(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=u(null),s=r,o=!1;function a(y,E,L,B,F){let N=!1,R=p(B,L,E);s!==R&&(s=R,c(s.object)),N=d(y,B,L,F),N&&g(y,B,L,F),F!==null&&e.update(F,i.ELEMENT_ARRAY_BUFFER),(N||o)&&(o=!1,M(y,E,L,B),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function p(y,E,L){let B=L.wireframe===!0,F=n[y.id];F===void 0&&(F={},n[y.id]=F);let N=F[E.id];N===void 0&&(N={},F[E.id]=N);let R=N[B];return R===void 0&&(R=u(l()),N[B]=R),R}function u(y){let E=[],L=[],B=[];for(let F=0;F<t;F++)E[F]=0,L[F]=0,B[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:L,attributeDivisors:B,object:y,attributes:{},index:null}}function d(y,E,L,B){let F=s.attributes,N=E.attributes,R=0,z=L.getAttributes();for(let D in z)if(z[D].location>=0){let q=F[D],ne=N[D];if(ne===void 0&&(D==="instanceMatrix"&&y.instanceMatrix&&(ne=y.instanceMatrix),D==="instanceColor"&&y.instanceColor&&(ne=y.instanceColor)),q===void 0||q.attribute!==ne||ne&&q.data!==ne.data)return!0;R++}return s.attributesNum!==R||s.index!==B}function g(y,E,L,B){let F={},N=E.attributes,R=0,z=L.getAttributes();for(let D in z)if(z[D].location>=0){let q=N[D];q===void 0&&(D==="instanceMatrix"&&y.instanceMatrix&&(q=y.instanceMatrix),D==="instanceColor"&&y.instanceColor&&(q=y.instanceColor));let ne={};ne.attribute=q,q&&q.data&&(ne.data=q.data),F[D]=ne,R++}s.attributes=F,s.attributesNum=R,s.index=B}function x(){let y=s.newAttributes;for(let E=0,L=y.length;E<L;E++)y[E]=0}function m(y){f(y,0)}function f(y,E){let L=s.newAttributes,B=s.enabledAttributes,F=s.attributeDivisors;L[y]=1,B[y]===0&&(i.enableVertexAttribArray(y),B[y]=1),F[y]!==E&&(i.vertexAttribDivisor(y,E),F[y]=E)}function _(){let y=s.newAttributes,E=s.enabledAttributes;for(let L=0,B=E.length;L<B;L++)E[L]!==y[L]&&(i.disableVertexAttribArray(L),E[L]=0)}function b(y,E,L,B,F,N,R){R===!0?i.vertexAttribIPointer(y,E,L,F,N):i.vertexAttribPointer(y,E,L,B,F,N)}function M(y,E,L,B){x();let F=B.attributes,N=L.getAttributes(),R=E.defaultAttributeValues;for(let z in N){let D=N[z];if(D.location>=0){let k=F[z];if(k===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(k=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(k=y.instanceColor)),k!==void 0){let q=k.normalized,ne=k.itemSize,te=e.get(k);if(te===void 0)continue;let me=te.buffer,Z=te.type,ie=te.bytesPerElement,fe=Z===i.INT||Z===i.UNSIGNED_INT||k.gpuType===La;if(k.isInterleavedBufferAttribute){let ce=k.data,ue=ce.stride,pe=k.offset;if(ce.isInstancedInterleavedBuffer){for(let j=0;j<D.locationSize;j++)f(D.location+j,ce.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let j=0;j<D.locationSize;j++)m(D.location+j);i.bindBuffer(i.ARRAY_BUFFER,me);for(let j=0;j<D.locationSize;j++)b(D.location+j,ne/D.locationSize,Z,q,ue*ie,(pe+ne/D.locationSize*j)*ie,fe)}else{if(k.isInstancedBufferAttribute){for(let ce=0;ce<D.locationSize;ce++)f(D.location+ce,k.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let ce=0;ce<D.locationSize;ce++)m(D.location+ce);i.bindBuffer(i.ARRAY_BUFFER,me);for(let ce=0;ce<D.locationSize;ce++)b(D.location+ce,ne/D.locationSize,Z,q,ne*ie,ne/D.locationSize*ce*ie,fe)}}else if(R!==void 0){let q=R[z];if(q!==void 0)switch(q.length){case 2:i.vertexAttrib2fv(D.location,q);break;case 3:i.vertexAttrib3fv(D.location,q);break;case 4:i.vertexAttrib4fv(D.location,q);break;default:i.vertexAttrib1fv(D.location,q)}}}}_()}function P(){C();for(let y in n){let E=n[y];for(let L in E){let B=E[L];for(let F in B)h(B[F].object),delete B[F];delete E[L]}delete n[y]}}function S(y){if(n[y.id]===void 0)return;let E=n[y.id];for(let L in E){let B=E[L];for(let F in B)h(B[F].object),delete B[F];delete E[L]}delete n[y.id]}function T(y){for(let E in n){let L=n[E];if(L[y.id]===void 0)continue;let B=L[y.id];for(let F in B)h(B[F].object),delete B[F];delete L[y.id]}}function C(){v(),o=!0,s!==r&&(s=r,c(s.object))}function v(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:v,dispose:P,releaseStatesOfGeometry:S,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function Zp(i,e,t){let n;function r(c){n=c}function s(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,p){p!==0&&(i.drawArraysInstanced(n,c,h,p),t.update(h,n,p))}function a(c,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,p);let d=0;for(let g=0;g<p;g++)d+=h[g];t.update(d,n,1)}function l(c,h,p,u){if(p===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],h[g],u[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,p);let g=0;for(let x=0;x<p;x++)g+=h[x]*u[x];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Jp(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==Zt&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let C=T===ii&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==xn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==rn&&!C)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let p=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,S=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:p,reverseDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:_,maxVaryings:b,maxFragmentUniforms:M,vertexTextures:P,maxSamples:S}}function $p(i){let e=this,t=null,n=0,r=!1,s=!1,o=new Mt,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){let d=p.length!==0||u||n!==0||r;return r=u,n=p.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,u){t=h(p,u,0)},this.setState=function(p,u,d){let g=p.clippingPlanes,x=p.clipIntersection,m=p.clipShadows,f=i.get(p);if(!r||g===null||g.length===0||s&&!m)s?h(null):c();else{let _=s?0:n,b=_*4,M=f.clippingState||null;l.value=M,M=h(g,u,b,d);for(let P=0;P!==b;++P)M[P]=t[P];f.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(p,u,d,g){let x=p!==null?p.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let f=d+x*4,_=u.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<f)&&(m=new Float32Array(f));for(let b=0,M=d;b!==x;++b,M+=4)o.copy(p[b]).applyMatrix4(_,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function jp(i){let e=new WeakMap;function t(o,a){return a===bo?o.mapping=Pi:a===So&&(o.mapping=Ii),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===bo||a===So)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new ia(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var us=class extends cs{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ei=4,zc=[.125,.215,.35,.446,.526,.582],jn=20,ro=new us,kc=new Te,so=null,oo=0,ao=0,co=!1,Zn=(1+Math.sqrt(5))/2,Mi=1/Zn,Hc=[new O(-Zn,Mi,0),new O(Zn,Mi,0),new O(-Mi,0,Zn),new O(Mi,0,Zn),new O(0,Zn,-Mi),new O(0,Zn,Mi),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],Fi=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){so=this._renderer.getRenderTarget(),oo=this._renderer.getActiveCubeFace(),ao=this._renderer.getActiveMipmapLevel(),co=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(so,oo,ao),this._renderer.xr.enabled=co,e.scissorTest=!1,Wr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Pi||e.mapping===Ii?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),so=this._renderer.getRenderTarget(),oo=this._renderer.getActiveCubeFace(),ao=this._renderer.getActiveMipmapLevel(),co=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:ii,format:Zt,colorSpace:ki,depthBuffer:!1},r=Vc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vc(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Kp(s)),this._blurMaterial=Qp(s,e,t)}return r}_compileMaterial(e){let t=new ke(this._lodPlanes[0],e);this._renderer.compile(t,ro)}_sceneToCubeUV(e,t,n,r){let a=new xt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,u=h.toneMapping;h.getClearColor(kc),h.toneMapping=Fn,h.autoClear=!1;let d=new Vt({name:"PMREM.Background",side:Tt,depthWrite:!1,depthTest:!1}),g=new ke(new _n,d),x=!1,m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,x=!0):(d.color.copy(kc),x=!0);for(let f=0;f<6;f++){let _=f%3;_===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):_===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));let b=this._cubeSize;Wr(r,_*b,f>2?b:0,b,b),h.setRenderTarget(r),x&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=p,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===Pi||e.mapping===Ii;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gc());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new ke(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;Wr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,ro)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Hc[(r-s-1)%Hc.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,p=new ke(this._lodPlanes[r],c),u=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*jn-1),x=s/g,m=isFinite(s)?1+Math.floor(h*x):jn;m>jn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${jn}`);let f=[],_=0;for(let T=0;T<jn;++T){let C=T/x,v=Math.exp(-C*C/2);f.push(v),T===0?_+=v:T<m&&(_+=2*v)}for(let T=0;T<f.length;T++)f[T]=f[T]/_;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:b}=this;u.dTheta.value=g,u.mipInt.value=b-n;let M=this._sizeLods[r],P=3*M*(r>b-Ei?r-b+Ei:0),S=4*(this._cubeSize-M);Wr(t,P,S,3*M,2*M),l.setRenderTarget(t),l.render(p,ro)}};function Kp(i){let e=[],t=[],n=[],r=i,s=i-Ei+1+zc.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let l=1/a;o>i-Ei?l=zc[o-i+Ei-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,p=1+c,u=[h,h,p,h,p,p,h,h,p,p,h,p],d=6,g=6,x=3,m=2,f=1,_=new Float32Array(x*g*d),b=new Float32Array(m*g*d),M=new Float32Array(f*g*d);for(let S=0;S<d;S++){let T=S%3*2/3-1,C=S>2?0:-1,v=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];_.set(v,x*g*S),b.set(u,m*g*S);let y=[S,S,S,S,S,S];M.set(y,f*g*S)}let P=new Ct;P.setAttribute("position",new bt(_,x)),P.setAttribute("uv",new bt(b,m)),P.setAttribute("faceIndex",new bt(M,f)),e.push(P),r>Ei&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Vc(i,e,t){let n=new Jt(i,e,t);return n.texture.mapping=Ss,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Wr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Qp(i,e,t){let n=new Float32Array(jn),r=new O(0,1,0);return new Dt({name:"SphericalGaussianBlur",defines:{n:jn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ha(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Gc(){return new Dt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ha(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Wc(){return new Dt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ha(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Ha(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function em(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===bo||l===So,h=l===Pi||l===Ii;if(c||h){let p=e.get(a),u=p!==void 0?p.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return t===null&&(t=new Fi(i)),p=c?t.fromEquirectangular(a,p):t.fromCubemap(a,p),p.texture.pmremVersion=a.pmremVersion,e.set(a,p),p.texture;if(p!==void 0)return p.texture;{let d=a.image;return c&&d&&d.height>0||h&&d&&r(d)?(t===null&&(t=new Fi(i)),p=c?t.fromEquirectangular(a):t.fromCubemap(a),p.texture.pmremVersion=a.pmremVersion,e.set(a,p),a.addEventListener("dispose",s),p.texture):null}}}return a}function r(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function tm(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&or("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function nm(i,e,t,n){let r={},s=new WeakMap;function o(p){let u=p.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);for(let g in u.morphAttributes){let x=u.morphAttributes[g];for(let m=0,f=x.length;m<f;m++)e.remove(x[m])}u.removeEventListener("dispose",o),delete r[u.id];let d=s.get(u);d&&(e.remove(d),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(p,u){return r[u.id]===!0||(u.addEventListener("dispose",o),r[u.id]=!0,t.memory.geometries++),u}function l(p){let u=p.attributes;for(let g in u)e.update(u[g],i.ARRAY_BUFFER);let d=p.morphAttributes;for(let g in d){let x=d[g];for(let m=0,f=x.length;m<f;m++)e.update(x[m],i.ARRAY_BUFFER)}}function c(p){let u=[],d=p.index,g=p.attributes.position,x=0;if(d!==null){let _=d.array;x=d.version;for(let b=0,M=_.length;b<M;b+=3){let P=_[b+0],S=_[b+1],T=_[b+2];u.push(P,S,S,T,T,P)}}else if(g!==void 0){let _=g.array;x=g.version;for(let b=0,M=_.length/3-1;b<M;b+=3){let P=b+0,S=b+1,T=b+2;u.push(P,S,S,T,T,P)}}else return;let m=new(Ll(u)?as:os)(u,1);m.version=x;let f=s.get(p);f&&e.remove(f),s.set(p,m)}function h(p){let u=s.get(p);if(u){let d=p.index;d!==null&&u.version<d.version&&c(p)}else c(p);return s.get(p)}return{get:a,update:l,getWireframeAttribute:h}}function im(i,e,t){let n;function r(u){n=u}let s,o;function a(u){s=u.type,o=u.bytesPerElement}function l(u,d){i.drawElements(n,d,s,u*o),t.update(d,n,1)}function c(u,d,g){g!==0&&(i.drawElementsInstanced(n,d,s,u*o,g),t.update(d,n,g))}function h(u,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,u,0,g);let m=0;for(let f=0;f<g;f++)m+=d[f];t.update(m,n,1)}function p(u,d,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<u.length;f++)c(u[f]/o,d[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,u,0,x,0,g);let f=0;for(let _=0;_<g;_++)f+=d[_]*x[_];t.update(f,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function rm(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function sm(i,e,t){let n=new WeakMap,r=new je;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==p){let v=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",v)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],b=0;d===!0&&(b=1),g===!0&&(b=2),x===!0&&(b=3);let M=a.attributes.position.count*b,P=1;M>e.maxTextureSize&&(P=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let S=new Float32Array(M*P*4*p),T=new ss(S,M,P,p);T.type=rn,T.needsUpdate=!0;let C=b*4;for(let y=0;y<p;y++){let E=m[y],L=f[y],B=_[y],F=M*P*4*y;for(let N=0;N<E.count;N++){let R=N*C;d===!0&&(r.fromBufferAttribute(E,N),S[F+R+0]=r.x,S[F+R+1]=r.y,S[F+R+2]=r.z,S[F+R+3]=0),g===!0&&(r.fromBufferAttribute(L,N),S[F+R+4]=r.x,S[F+R+5]=r.y,S[F+R+6]=r.z,S[F+R+7]=0),x===!0&&(r.fromBufferAttribute(B,N),S[F+R+8]=r.x,S[F+R+9]=r.y,S[F+R+10]=r.z,S[F+R+11]=B.itemSize===4?r.w:1)}}u={count:p,texture:T,size:new Ue(M,P)},n.set(a,u),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:s}}function om(i,e,t,n){let r=new WeakMap;function s(l){let c=n.render.frame,h=l.geometry,p=e.get(l,h);if(r.get(p)!==c&&(e.update(p),r.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;r.get(u)!==c&&(u.update(),r.set(u,c))}return p}function o(){r=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}var hs=class extends Lt{constructor(e,t,n,r,s,o,a,l,c,h=Ti){if(h!==Ti&&h!==Di)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ti&&(n=ei),n===void 0&&h===Di&&(n=Li),super(null,r,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ot,this.minFilter=l!==void 0?l:Ot,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Nl=new Lt,Xc=new hs(1,1),Ol=new ss,Bl=new ta,zl=new ls,qc=[],Yc=[],Zc=new Float32Array(16),Jc=new Float32Array(9),$c=new Float32Array(4);function Vi(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=qc[r];if(s===void 0&&(s=new Float32Array(r),qc[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function ft(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function pt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ws(i,e){let t=Yc[e];t===void 0&&(t=new Int32Array(e),Yc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function am(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function cm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;i.uniform2fv(this.addr,e),pt(t,e)}}function lm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ft(t,e))return;i.uniform3fv(this.addr,e),pt(t,e)}}function um(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;i.uniform4fv(this.addr,e),pt(t,e)}}function hm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,n))return;$c.set(n),i.uniformMatrix2fv(this.addr,!1,$c),pt(t,n)}}function dm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,n))return;Jc.set(n),i.uniformMatrix3fv(this.addr,!1,Jc),pt(t,n)}}function fm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,n))return;Zc.set(n),i.uniformMatrix4fv(this.addr,!1,Zc),pt(t,n)}}function pm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function mm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;i.uniform2iv(this.addr,e),pt(t,e)}}function gm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;i.uniform3iv(this.addr,e),pt(t,e)}}function ym(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;i.uniform4iv(this.addr,e),pt(t,e)}}function xm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function vm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;i.uniform2uiv(this.addr,e),pt(t,e)}}function _m(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;i.uniform3uiv(this.addr,e),pt(t,e)}}function Mm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;i.uniform4uiv(this.addr,e),pt(t,e)}}function bm(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Xc.compareFunction=Il,s=Xc):s=Nl,t.setTexture2D(e||s,r)}function Sm(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Bl,r)}function Em(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||zl,r)}function wm(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Ol,r)}function Tm(i){switch(i){case 5126:return am;case 35664:return cm;case 35665:return lm;case 35666:return um;case 35674:return hm;case 35675:return dm;case 35676:return fm;case 5124:case 35670:return pm;case 35667:case 35671:return mm;case 35668:case 35672:return gm;case 35669:case 35673:return ym;case 5125:return xm;case 36294:return vm;case 36295:return _m;case 36296:return Mm;case 35678:case 36198:case 36298:case 36306:case 35682:return bm;case 35679:case 36299:case 36307:return Sm;case 35680:case 36300:case 36308:case 36293:return Em;case 36289:case 36303:case 36311:case 36292:return wm}}function Am(i,e){i.uniform1fv(this.addr,e)}function Rm(i,e){let t=Vi(e,this.size,2);i.uniform2fv(this.addr,t)}function Cm(i,e){let t=Vi(e,this.size,3);i.uniform3fv(this.addr,t)}function Pm(i,e){let t=Vi(e,this.size,4);i.uniform4fv(this.addr,t)}function Im(i,e){let t=Vi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Lm(i,e){let t=Vi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Dm(i,e){let t=Vi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Um(i,e){i.uniform1iv(this.addr,e)}function Fm(i,e){i.uniform2iv(this.addr,e)}function Nm(i,e){i.uniform3iv(this.addr,e)}function Om(i,e){i.uniform4iv(this.addr,e)}function Bm(i,e){i.uniform1uiv(this.addr,e)}function zm(i,e){i.uniform2uiv(this.addr,e)}function km(i,e){i.uniform3uiv(this.addr,e)}function Hm(i,e){i.uniform4uiv(this.addr,e)}function Vm(i,e,t){let n=this.cache,r=e.length,s=ws(t,r);ft(n,s)||(i.uniform1iv(this.addr,s),pt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Nl,s[o])}function Gm(i,e,t){let n=this.cache,r=e.length,s=ws(t,r);ft(n,s)||(i.uniform1iv(this.addr,s),pt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Bl,s[o])}function Wm(i,e,t){let n=this.cache,r=e.length,s=ws(t,r);ft(n,s)||(i.uniform1iv(this.addr,s),pt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||zl,s[o])}function Xm(i,e,t){let n=this.cache,r=e.length,s=ws(t,r);ft(n,s)||(i.uniform1iv(this.addr,s),pt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Ol,s[o])}function qm(i){switch(i){case 5126:return Am;case 35664:return Rm;case 35665:return Cm;case 35666:return Pm;case 35674:return Im;case 35675:return Lm;case 35676:return Dm;case 5124:case 35670:return Um;case 35667:case 35671:return Fm;case 35668:case 35672:return Nm;case 35669:case 35673:return Om;case 5125:return Bm;case 36294:return zm;case 36295:return km;case 36296:return Hm;case 35678:case 36198:case 36298:case 36306:case 35682:return Vm;case 35679:case 36299:case 36307:return Gm;case 35680:case 36300:case 36308:case 36293:return Wm;case 36289:case 36303:case 36311:case 36292:return Xm}}var ra=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Tm(t.type)}},sa=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=qm(t.type)}},oa=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],n)}}},lo=/(\w+)(\])?(\[|\.)?/g;function jc(i,e){i.seq.push(e),i.map[e.id]=e}function Ym(i,e,t){let n=i.name,r=n.length;for(lo.lastIndex=0;;){let s=lo.exec(n),o=lo.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){jc(t,c===void 0?new ra(a,i,e):new sa(a,i,e));break}else{let p=t.map[a];p===void 0&&(p=new oa(a),jc(t,p)),t=p}}}var Ri=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Ym(s,o,this)}}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&n.push(o)}return n}};function Kc(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Zm=37297,Jm=0;function $m(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Qc=new We;function jm(i){$e._getMatrix(Qc,$e.workingColorSpace,i);let e=`mat3( ${Qc.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(i)){case Es:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function el(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+$m(i.getShaderSource(e),o)}else return r}function Km(i,e){let t=jm(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Qm(i,e){let t;switch(e){case uh:t="Linear";break;case hh:t="Reinhard";break;case dh:t="Cineon";break;case fh:t="ACESFilmic";break;case mh:t="AgX";break;case Ia:t="Neutral";break;case ph:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Xr=new O;function eg(){$e.getLuminanceCoefficients(Xr);let i=Xr.x.toFixed(4),e=Xr.y.toFixed(4),t=Xr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ar).join(`
`)}function ng(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ig(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ar(i){return i!==""}function tl(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var rg=/^[ \t]*#include +<([\w\d./]+)>/gm;function aa(i){return i.replace(rg,og)}var sg=new Map;function og(i,e){let t=Ve[e];if(t===void 0){let n=sg.get(e);if(n!==void 0)t=Ve[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return aa(t)}var ag=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function il(i){return i.replace(ag,cg)}function cg(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function rl(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function lg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===xl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Gu?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===pn&&(e="SHADOWMAP_TYPE_VSM"),e}function ug(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Pi:case Ii:e="ENVMAP_TYPE_CUBE";break;case Ss:e="ENVMAP_TYPE_CUBE_UV";break}return e}function hg(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Ii&&(e="ENVMAP_MODE_REFRACTION"),e}function dg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case vl:e="ENVMAP_BLENDING_MULTIPLY";break;case ch:e="ENVMAP_BLENDING_MIX";break;case lh:e="ENVMAP_BLENDING_ADD";break}return e}function fg(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function pg(i,e,t,n){let r=i.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=lg(t),c=ug(t),h=hg(t),p=dg(t),u=fg(t),d=tg(t),g=ng(s),x=r.createProgram(),m,f,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ar).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ar).join(`
`),f.length>0&&(f+=`
`)):(m=[rl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ar).join(`
`),f=[rl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fn?"#define TONE_MAPPING":"",t.toneMapping!==Fn?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Fn?Qm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,Km("linearToOutputTexel",t.outputColorSpace),eg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ar).join(`
`)),o=aa(o),o=tl(o,t),o=nl(o,t),a=aa(a),a=tl(a,t),a=nl(a,t),o=il(o),a=il(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===yc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let b=_+m+o,M=_+f+a,P=Kc(r,r.VERTEX_SHADER,b),S=Kc(r,r.FRAGMENT_SHADER,M);r.attachShader(x,P),r.attachShader(x,S),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function T(E){if(i.debug.checkShaderErrors){let L=r.getProgramInfoLog(x).trim(),B=r.getShaderInfoLog(P).trim(),F=r.getShaderInfoLog(S).trim(),N=!0,R=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(N=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,P,S);else{let z=el(r,P,"vertex"),D=el(r,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+L+`
`+z+`
`+D)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(B===""||F==="")&&(R=!1);R&&(E.diagnostics={runnable:N,programLog:L,vertexShader:{log:B,prefix:m},fragmentShader:{log:F,prefix:f}})}r.deleteShader(P),r.deleteShader(S),C=new Ri(r,x),v=ig(r,x)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let v;this.getAttributes=function(){return v===void 0&&T(this),v};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(x,Zm)),y},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Jm++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=S,this}var mg=0,ca=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new la(e),t.set(e,n)),n}},la=class{constructor(e){this.id=mg++,this.code=e,this.usedTimes=0}};function gg(i,e,t,n,r,s,o){let a=new pr,l=new ca,c=new Set,h=[],p=r.logarithmicDepthBuffer,u=r.vertexTextures,d=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,y,E,L,B){let F=L.fog,N=B.geometry,R=v.isMeshStandardMaterial?L.environment:null,z=(v.isMeshStandardMaterial?t:e).get(v.envMap||R),D=z&&z.mapping===Ss?z.image.height:null,k=g[v.type];v.precision!==null&&(d=r.getMaxPrecision(v.precision),d!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));let q=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ne=q!==void 0?q.length:0,te=0;N.morphAttributes.position!==void 0&&(te=1),N.morphAttributes.normal!==void 0&&(te=2),N.morphAttributes.color!==void 0&&(te=3);let me,Z,ie,fe;if(k){let Je=en[k];me=Je.vertexShader,Z=Je.fragmentShader}else me=v.vertexShader,Z=v.fragmentShader,l.update(v),ie=l.getVertexShaderID(v),fe=l.getFragmentShaderID(v);let ce=i.getRenderTarget(),ue=i.state.buffers.depth.getReversed(),pe=B.isInstancedMesh===!0,j=B.isBatchedMesh===!0,ye=!!v.map,oe=!!v.matcap,Ne=!!z,H=!!v.aoMap,ut=!!v.lightMap,Ie=!!v.bumpMap,Le=!!v.normalMap,Me=!!v.displacementMap,He=!!v.emissiveMap,Ee=!!v.metalnessMap,I=!!v.roughnessMap,w=v.anisotropy>0,X=v.clearcoat>0,re=v.dispersion>0,se=v.iridescence>0,ee=v.sheen>0,we=v.transmission>0,ge=w&&!!v.anisotropyMap,xe=X&&!!v.clearcoatMap,Ze=X&&!!v.clearcoatNormalMap,le=X&&!!v.clearcoatRoughnessMap,be=se&&!!v.iridescenceMap,De=se&&!!v.iridescenceThicknessMap,Fe=ee&&!!v.sheenColorMap,Se=ee&&!!v.sheenRoughnessMap,Ye=!!v.specularMap,Be=!!v.specularColorMap,Y=!!v.specularIntensityMap,U=we&&!!v.transmissionMap,Q=we&&!!v.thicknessMap,W=!!v.gradientMap,K=!!v.alphaMap,ae=v.alphaTest>0,de=!!v.alphaHash,Oe=!!v.extensions,st=Fn;v.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(st=i.toneMapping);let nt={shaderID:k,shaderType:v.type,shaderName:v.name,vertexShader:me,fragmentShader:Z,defines:v.defines,customVertexShaderID:ie,customFragmentShaderID:fe,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:j,batchingColor:j&&B._colorsTexture!==null,instancing:pe,instancingColor:pe&&B.instanceColor!==null,instancingMorph:pe&&B.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ce===null?i.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:ki,alphaToCoverage:!!v.alphaToCoverage,map:ye,matcap:oe,envMap:Ne,envMapMode:Ne&&z.mapping,envMapCubeUVHeight:D,aoMap:H,lightMap:ut,bumpMap:Ie,normalMap:Le,displacementMap:u&&Me,emissiveMap:He,normalMapObjectSpace:Le&&v.normalMapType===vh,normalMapTangentSpace:Le&&v.normalMapType===Pl,metalnessMap:Ee,roughnessMap:I,anisotropy:w,anisotropyMap:ge,clearcoat:X,clearcoatMap:xe,clearcoatNormalMap:Ze,clearcoatRoughnessMap:le,dispersion:re,iridescence:se,iridescenceMap:be,iridescenceThicknessMap:De,sheen:ee,sheenColorMap:Fe,sheenRoughnessMap:Se,specularMap:Ye,specularColorMap:Be,specularIntensityMap:Y,transmission:we,transmissionMap:U,thicknessMap:Q,gradientMap:W,opaque:v.transparent===!1&&v.blending===wi&&v.alphaToCoverage===!1,alphaMap:K,alphaTest:ae,alphaHash:de,combine:v.combine,mapUv:ye&&x(v.map.channel),aoMapUv:H&&x(v.aoMap.channel),lightMapUv:ut&&x(v.lightMap.channel),bumpMapUv:Ie&&x(v.bumpMap.channel),normalMapUv:Le&&x(v.normalMap.channel),displacementMapUv:Me&&x(v.displacementMap.channel),emissiveMapUv:He&&x(v.emissiveMap.channel),metalnessMapUv:Ee&&x(v.metalnessMap.channel),roughnessMapUv:I&&x(v.roughnessMap.channel),anisotropyMapUv:ge&&x(v.anisotropyMap.channel),clearcoatMapUv:xe&&x(v.clearcoatMap.channel),clearcoatNormalMapUv:Ze&&x(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&x(v.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&x(v.iridescenceMap.channel),iridescenceThicknessMapUv:De&&x(v.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&x(v.sheenColorMap.channel),sheenRoughnessMapUv:Se&&x(v.sheenRoughnessMap.channel),specularMapUv:Ye&&x(v.specularMap.channel),specularColorMapUv:Be&&x(v.specularColorMap.channel),specularIntensityMapUv:Y&&x(v.specularIntensityMap.channel),transmissionMapUv:U&&x(v.transmissionMap.channel),thicknessMapUv:Q&&x(v.thicknessMap.channel),alphaMapUv:K&&x(v.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Le||w),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!N.attributes.uv&&(ye||K),fog:!!F,useFog:v.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:ue,skinning:B.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:te,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&E.length>0,shadowMapType:i.shadowMap.type,toneMapping:st,decodeVideoTexture:ye&&v.map.isVideoTexture===!0&&$e.getTransfer(v.map.colorSpace)===it,decodeVideoTextureEmissive:He&&v.emissiveMap.isVideoTexture===!0&&$e.getTransfer(v.emissiveMap.colorSpace)===it,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===mn,flipSided:v.side===Tt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Oe&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&v.extensions.multiDraw===!0||j)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return nt.vertexUv1s=c.has(1),nt.vertexUv2s=c.has(2),nt.vertexUv3s=c.has(3),c.clear(),nt}function f(v){let y=[];if(v.shaderID?y.push(v.shaderID):(y.push(v.customVertexShaderID),y.push(v.customFragmentShaderID)),v.defines!==void 0)for(let E in v.defines)y.push(E),y.push(v.defines[E]);return v.isRawShaderMaterial===!1&&(_(y,v),b(y,v),y.push(i.outputColorSpace)),y.push(v.customProgramCacheKey),y.join()}function _(v,y){v.push(y.precision),v.push(y.outputColorSpace),v.push(y.envMapMode),v.push(y.envMapCubeUVHeight),v.push(y.mapUv),v.push(y.alphaMapUv),v.push(y.lightMapUv),v.push(y.aoMapUv),v.push(y.bumpMapUv),v.push(y.normalMapUv),v.push(y.displacementMapUv),v.push(y.emissiveMapUv),v.push(y.metalnessMapUv),v.push(y.roughnessMapUv),v.push(y.anisotropyMapUv),v.push(y.clearcoatMapUv),v.push(y.clearcoatNormalMapUv),v.push(y.clearcoatRoughnessMapUv),v.push(y.iridescenceMapUv),v.push(y.iridescenceThicknessMapUv),v.push(y.sheenColorMapUv),v.push(y.sheenRoughnessMapUv),v.push(y.specularMapUv),v.push(y.specularColorMapUv),v.push(y.specularIntensityMapUv),v.push(y.transmissionMapUv),v.push(y.thicknessMapUv),v.push(y.combine),v.push(y.fogExp2),v.push(y.sizeAttenuation),v.push(y.morphTargetsCount),v.push(y.morphAttributeCount),v.push(y.numDirLights),v.push(y.numPointLights),v.push(y.numSpotLights),v.push(y.numSpotLightMaps),v.push(y.numHemiLights),v.push(y.numRectAreaLights),v.push(y.numDirLightShadows),v.push(y.numPointLightShadows),v.push(y.numSpotLightShadows),v.push(y.numSpotLightShadowsWithMaps),v.push(y.numLightProbes),v.push(y.shadowMapType),v.push(y.toneMapping),v.push(y.numClippingPlanes),v.push(y.numClipIntersection),v.push(y.depthPacking)}function b(v,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),v.push(a.mask)}function M(v){let y=g[v.type],E;if(y){let L=en[y];E=ka.clone(L.uniforms)}else E=v.uniforms;return E}function P(v,y){let E;for(let L=0,B=h.length;L<B;L++){let F=h[L];if(F.cacheKey===y){E=F,++E.usedTimes;break}}return E===void 0&&(E=new pg(i,y,v,s),h.push(E)),E}function S(v){if(--v.usedTimes===0){let y=h.indexOf(v);h[y]=h[h.length-1],h.pop(),v.destroy()}}function T(v){l.remove(v)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:M,acquireProgram:P,releaseProgram:S,releaseShaderCache:T,programs:h,dispose:C}}function yg(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function xg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function sl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ol(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(p,u,d,g,x,m){let f=i[e];return f===void 0?(f={id:p.id,object:p,geometry:u,material:d,groupOrder:g,renderOrder:p.renderOrder,z:x,group:m},i[e]=f):(f.id=p.id,f.object=p,f.geometry=u,f.material=d,f.groupOrder=g,f.renderOrder=p.renderOrder,f.z=x,f.group=m),e++,f}function a(p,u,d,g,x,m){let f=o(p,u,d,g,x,m);d.transmission>0?n.push(f):d.transparent===!0?r.push(f):t.push(f)}function l(p,u,d,g,x,m){let f=o(p,u,d,g,x,m);d.transmission>0?n.unshift(f):d.transparent===!0?r.unshift(f):t.unshift(f)}function c(p,u){t.length>1&&t.sort(p||xg),n.length>1&&n.sort(u||sl),r.length>1&&r.sort(u||sl)}function h(){for(let p=e,u=i.length;p<u;p++){let d=i[p];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function vg(){let i=new WeakMap;function e(n,r){let s=i.get(n),o;return s===void 0?(o=new ol,i.set(n,[o])):r>=s.length?(o=new ol,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function _g(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Te};break;case"SpotLight":t={position:new O,direction:new O,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function Mg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var bg=0;function Sg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Eg(i){let e=new _g,t=Mg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);let r=new O,s=new tt,o=new tt;function a(c){let h=0,p=0,u=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let d=0,g=0,x=0,m=0,f=0,_=0,b=0,M=0,P=0,S=0,T=0;c.sort(Sg);for(let v=0,y=c.length;v<y;v++){let E=c[v],L=E.color,B=E.intensity,F=E.distance,N=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=L.r*B,p+=L.g*B,u+=L.b*B;else if(E.isLightProbe){for(let R=0;R<9;R++)n.probe[R].addScaledVector(E.sh.coefficients[R],B);T++}else if(E.isDirectionalLight){let R=e.get(E);if(R.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let z=E.shadow,D=t.get(E);D.shadowIntensity=z.intensity,D.shadowBias=z.bias,D.shadowNormalBias=z.normalBias,D.shadowRadius=z.radius,D.shadowMapSize=z.mapSize,n.directionalShadow[d]=D,n.directionalShadowMap[d]=N,n.directionalShadowMatrix[d]=E.shadow.matrix,_++}n.directional[d]=R,d++}else if(E.isSpotLight){let R=e.get(E);R.position.setFromMatrixPosition(E.matrixWorld),R.color.copy(L).multiplyScalar(B),R.distance=F,R.coneCos=Math.cos(E.angle),R.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),R.decay=E.decay,n.spot[x]=R;let z=E.shadow;if(E.map&&(n.spotLightMap[P]=E.map,P++,z.updateMatrices(E),E.castShadow&&S++),n.spotLightMatrix[x]=z.matrix,E.castShadow){let D=t.get(E);D.shadowIntensity=z.intensity,D.shadowBias=z.bias,D.shadowNormalBias=z.normalBias,D.shadowRadius=z.radius,D.shadowMapSize=z.mapSize,n.spotShadow[x]=D,n.spotShadowMap[x]=N,M++}x++}else if(E.isRectAreaLight){let R=e.get(E);R.color.copy(L).multiplyScalar(B),R.halfWidth.set(E.width*.5,0,0),R.halfHeight.set(0,E.height*.5,0),n.rectArea[m]=R,m++}else if(E.isPointLight){let R=e.get(E);if(R.color.copy(E.color).multiplyScalar(E.intensity),R.distance=E.distance,R.decay=E.decay,E.castShadow){let z=E.shadow,D=t.get(E);D.shadowIntensity=z.intensity,D.shadowBias=z.bias,D.shadowNormalBias=z.normalBias,D.shadowRadius=z.radius,D.shadowMapSize=z.mapSize,D.shadowCameraNear=z.camera.near,D.shadowCameraFar=z.camera.far,n.pointShadow[g]=D,n.pointShadowMap[g]=N,n.pointShadowMatrix[g]=E.shadow.matrix,b++}n.point[g]=R,g++}else if(E.isHemisphereLight){let R=e.get(E);R.skyColor.copy(E.color).multiplyScalar(B),R.groundColor.copy(E.groundColor).multiplyScalar(B),n.hemi[f]=R,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=p,n.ambient[2]=u;let C=n.hash;(C.directionalLength!==d||C.pointLength!==g||C.spotLength!==x||C.rectAreaLength!==m||C.hemiLength!==f||C.numDirectionalShadows!==_||C.numPointShadows!==b||C.numSpotShadows!==M||C.numSpotMaps!==P||C.numLightProbes!==T)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=M+P-S,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=T,C.directionalLength=d,C.pointLength=g,C.spotLength=x,C.rectAreaLength=m,C.hemiLength=f,C.numDirectionalShadows=_,C.numPointShadows=b,C.numSpotShadows=M,C.numSpotMaps=P,C.numLightProbes=T,n.version=bg++)}function l(c,h){let p=0,u=0,d=0,g=0,x=0,m=h.matrixWorldInverse;for(let f=0,_=c.length;f<_;f++){let b=c[f];if(b.isDirectionalLight){let M=n.directional[p];M.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),p++}else if(b.isSpotLight){let M=n.spot[d];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),d++}else if(b.isRectAreaLight){let M=n.rectArea[g];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),o.identity(),s.copy(b.matrixWorld),s.premultiply(m),o.extractRotation(s),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){let M=n.point[u];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),u++}else if(b.isHemisphereLight){let M=n.hemi[x];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function al(i){let e=new Eg(i),t=[],n=[];function r(h){c.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function wg(i){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new al(i),e.set(r,[a])):s>=o.length?(a=new al(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var ua=class extends zn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=yh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ha=class extends zn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Tg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ag=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Rg(i,e,t){let n=new mr,r=new Ue,s=new Ue,o=new je,a=new ua({depthPacking:xh}),l=new ha,c={},h=t.maxTextureSize,p={[Nn]:Tt,[Tt]:Nn,[mn]:mn},u=new Dt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:Tg,fragmentShader:Ag}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let g=new Ct;g.setAttribute("position",new bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ke(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xl;let f=this.type;this.render=function(S,T,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;let v=i.getRenderTarget(),y=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),L=i.state;L.setBlending(Un),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let B=f!==pn&&this.type===pn,F=f===pn&&this.type!==pn;for(let N=0,R=S.length;N<R;N++){let z=S[N],D=z.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);let k=D.getFrameExtents();if(r.multiply(k),s.copy(D.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/k.x),r.x=s.x*k.x,D.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/k.y),r.y=s.y*k.y,D.mapSize.y=s.y)),D.map===null||B===!0||F===!0){let ne=this.type!==pn?{minFilter:Ot,magFilter:Ot}:{};D.map!==null&&D.map.dispose(),D.map=new Jt(r.x,r.y,ne),D.map.texture.name=z.name+".shadowMap",D.camera.updateProjectionMatrix()}i.setRenderTarget(D.map),i.clear();let q=D.getViewportCount();for(let ne=0;ne<q;ne++){let te=D.getViewport(ne);o.set(s.x*te.x,s.y*te.y,s.x*te.z,s.y*te.w),L.viewport(o),D.updateMatrices(z,ne),n=D.getFrustum(),M(T,C,D.camera,z,this.type)}D.isPointLightShadow!==!0&&this.type===pn&&_(D,C),D.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(v,y,E)};function _(S,T){let C=e.update(x);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Jt(r.x,r.y)),u.uniforms.shadow_pass.value=S.map.texture,u.uniforms.resolution.value=S.mapSize,u.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(T,null,C,u,x,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(T,null,C,d,x,null)}function b(S,T,C,v){let y=null,E=C.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(E!==void 0)y=E;else if(y=C.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let L=y.uuid,B=T.uuid,F=c[L];F===void 0&&(F={},c[L]=F);let N=F[B];N===void 0&&(N=y.clone(),F[B]=N,T.addEventListener("dispose",P)),y=N}if(y.visible=T.visible,y.wireframe=T.wireframe,v===pn?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:p[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,C.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let L=i.properties.get(y);L.light=C}return y}function M(S,T,C,v,y){if(S.visible===!1)return;if(S.layers.test(T.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&y===pn)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,S.matrixWorld);let B=e.update(S),F=S.material;if(Array.isArray(F)){let N=B.groups;for(let R=0,z=N.length;R<z;R++){let D=N[R],k=F[D.materialIndex];if(k&&k.visible){let q=b(S,k,v,y);S.onBeforeShadow(i,S,T,C,B,q,D),i.renderBufferDirect(C,null,B,q,S,D),S.onAfterShadow(i,S,T,C,B,q,D)}}}else if(F.visible){let N=b(S,F,v,y);S.onBeforeShadow(i,S,T,C,B,N,null),i.renderBufferDirect(C,null,B,N,S,null),S.onAfterShadow(i,S,T,C,B,N,null)}}let L=S.children;for(let B=0,F=L.length;B<F;B++)M(L[B],T,C,v,y)}function P(S){S.target.removeEventListener("dispose",P);for(let C in c){let v=c[C],y=S.target.uuid;y in v&&(v[y].dispose(),delete v[y])}}}var Cg={[mo]:go,[yo]:_o,[xo]:Mo,[Ci]:vo,[go]:mo,[_o]:yo,[Mo]:xo,[vo]:Ci};function Pg(i,e){function t(){let U=!1,Q=new je,W=null,K=new je(0,0,0,0);return{setMask:function(ae){W!==ae&&!U&&(i.colorMask(ae,ae,ae,ae),W=ae)},setLocked:function(ae){U=ae},setClear:function(ae,de,Oe,st,nt){nt===!0&&(ae*=st,de*=st,Oe*=st),Q.set(ae,de,Oe,st),K.equals(Q)===!1&&(i.clearColor(ae,de,Oe,st),K.copy(Q))},reset:function(){U=!1,W=null,K.set(-1,0,0,0)}}}function n(){let U=!1,Q=!1,W=null,K=null,ae=null;return{setReversed:function(de){if(Q!==de){let Oe=e.get("EXT_clip_control");Q?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT);let st=ae;ae=null,this.setClear(st)}Q=de},getReversed:function(){return Q},setTest:function(de){de?ce(i.DEPTH_TEST):ue(i.DEPTH_TEST)},setMask:function(de){W!==de&&!U&&(i.depthMask(de),W=de)},setFunc:function(de){if(Q&&(de=Cg[de]),K!==de){switch(de){case mo:i.depthFunc(i.NEVER);break;case go:i.depthFunc(i.ALWAYS);break;case yo:i.depthFunc(i.LESS);break;case Ci:i.depthFunc(i.LEQUAL);break;case xo:i.depthFunc(i.EQUAL);break;case vo:i.depthFunc(i.GEQUAL);break;case _o:i.depthFunc(i.GREATER);break;case Mo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=de}},setLocked:function(de){U=de},setClear:function(de){ae!==de&&(Q&&(de=1-de),i.clearDepth(de),ae=de)},reset:function(){U=!1,W=null,K=null,ae=null,Q=!1}}}function r(){let U=!1,Q=null,W=null,K=null,ae=null,de=null,Oe=null,st=null,nt=null;return{setTest:function(Je){U||(Je?ce(i.STENCIL_TEST):ue(i.STENCIL_TEST))},setMask:function(Je){Q!==Je&&!U&&(i.stencilMask(Je),Q=Je)},setFunc:function(Je,Pt,Bt){(W!==Je||K!==Pt||ae!==Bt)&&(i.stencilFunc(Je,Pt,Bt),W=Je,K=Pt,ae=Bt)},setOp:function(Je,Pt,Bt){(de!==Je||Oe!==Pt||st!==Bt)&&(i.stencilOp(Je,Pt,Bt),de=Je,Oe=Pt,st=Bt)},setLocked:function(Je){U=Je},setClear:function(Je){nt!==Je&&(i.clearStencil(Je),nt=Je)},reset:function(){U=!1,Q=null,W=null,K=null,ae=null,de=null,Oe=null,st=null,nt=null}}}let s=new t,o=new n,a=new r,l=new WeakMap,c=new WeakMap,h={},p={},u=new WeakMap,d=[],g=null,x=!1,m=null,f=null,_=null,b=null,M=null,P=null,S=null,T=new Te(0,0,0),C=0,v=!1,y=null,E=null,L=null,B=null,F=null,N=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),R=!1,z=0,D=i.getParameter(i.VERSION);D.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(D)[1]),R=z>=1):D.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),R=z>=2);let k=null,q={},ne=i.getParameter(i.SCISSOR_BOX),te=i.getParameter(i.VIEWPORT),me=new je().fromArray(ne),Z=new je().fromArray(te);function ie(U,Q,W,K){let ae=new Uint8Array(4),de=i.createTexture();i.bindTexture(U,de),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Oe=0;Oe<W;Oe++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(Q,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,ae):i.texImage2D(Q+Oe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ae);return de}let fe={};fe[i.TEXTURE_2D]=ie(i.TEXTURE_2D,i.TEXTURE_2D,1),fe[i.TEXTURE_CUBE_MAP]=ie(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[i.TEXTURE_2D_ARRAY]=ie(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),fe[i.TEXTURE_3D]=ie(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ce(i.DEPTH_TEST),o.setFunc(Ci),Ie(!1),Le(cc),ce(i.CULL_FACE),H(Un);function ce(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function ue(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function pe(U,Q){return p[U]!==Q?(i.bindFramebuffer(U,Q),p[U]=Q,U===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=Q),U===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=Q),!0):!1}function j(U,Q){let W=d,K=!1;if(U){W=u.get(Q),W===void 0&&(W=[],u.set(Q,W));let ae=U.textures;if(W.length!==ae.length||W[0]!==i.COLOR_ATTACHMENT0){for(let de=0,Oe=ae.length;de<Oe;de++)W[de]=i.COLOR_ATTACHMENT0+de;W.length=ae.length,K=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,K=!0);K&&i.drawBuffers(W)}function ye(U){return g!==U?(i.useProgram(U),g=U,!0):!1}let oe={[Jn]:i.FUNC_ADD,[Xu]:i.FUNC_SUBTRACT,[qu]:i.FUNC_REVERSE_SUBTRACT};oe[Yu]=i.MIN,oe[Zu]=i.MAX;let Ne={[Ju]:i.ZERO,[$u]:i.ONE,[ju]:i.SRC_COLOR,[fo]:i.SRC_ALPHA,[ih]:i.SRC_ALPHA_SATURATE,[th]:i.DST_COLOR,[Qu]:i.DST_ALPHA,[Ku]:i.ONE_MINUS_SRC_COLOR,[po]:i.ONE_MINUS_SRC_ALPHA,[nh]:i.ONE_MINUS_DST_COLOR,[eh]:i.ONE_MINUS_DST_ALPHA,[rh]:i.CONSTANT_COLOR,[sh]:i.ONE_MINUS_CONSTANT_COLOR,[oh]:i.CONSTANT_ALPHA,[ah]:i.ONE_MINUS_CONSTANT_ALPHA};function H(U,Q,W,K,ae,de,Oe,st,nt,Je){if(U===Un){x===!0&&(ue(i.BLEND),x=!1);return}if(x===!1&&(ce(i.BLEND),x=!0),U!==Wu){if(U!==m||Je!==v){if((f!==Jn||M!==Jn)&&(i.blendEquation(i.FUNC_ADD),f=Jn,M=Jn),Je)switch(U){case wi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case lc:i.blendFunc(i.ONE,i.ONE);break;case uc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case wi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case lc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case uc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}_=null,b=null,P=null,S=null,T.set(0,0,0),C=0,m=U,v=Je}return}ae=ae||Q,de=de||W,Oe=Oe||K,(Q!==f||ae!==M)&&(i.blendEquationSeparate(oe[Q],oe[ae]),f=Q,M=ae),(W!==_||K!==b||de!==P||Oe!==S)&&(i.blendFuncSeparate(Ne[W],Ne[K],Ne[de],Ne[Oe]),_=W,b=K,P=de,S=Oe),(st.equals(T)===!1||nt!==C)&&(i.blendColor(st.r,st.g,st.b,nt),T.copy(st),C=nt),m=U,v=!1}function ut(U,Q){U.side===mn?ue(i.CULL_FACE):ce(i.CULL_FACE);let W=U.side===Tt;Q&&(W=!W),Ie(W),U.blending===wi&&U.transparent===!1?H(Un):H(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);let K=U.stencilWrite;a.setTest(K),K&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),He(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ce(i.SAMPLE_ALPHA_TO_COVERAGE):ue(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(U){y!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),y=U)}function Le(U){U!==Hu?(ce(i.CULL_FACE),U!==E&&(U===cc?i.cullFace(i.BACK):U===Vu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ue(i.CULL_FACE),E=U}function Me(U){U!==L&&(R&&i.lineWidth(U),L=U)}function He(U,Q,W){U?(ce(i.POLYGON_OFFSET_FILL),(B!==Q||F!==W)&&(i.polygonOffset(Q,W),B=Q,F=W)):ue(i.POLYGON_OFFSET_FILL)}function Ee(U){U?ce(i.SCISSOR_TEST):ue(i.SCISSOR_TEST)}function I(U){U===void 0&&(U=i.TEXTURE0+N-1),k!==U&&(i.activeTexture(U),k=U)}function w(U,Q,W){W===void 0&&(k===null?W=i.TEXTURE0+N-1:W=k);let K=q[W];K===void 0&&(K={type:void 0,texture:void 0},q[W]=K),(K.type!==U||K.texture!==Q)&&(k!==W&&(i.activeTexture(W),k=W),i.bindTexture(U,Q||fe[U]),K.type=U,K.texture=Q)}function X(){let U=q[k];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function re(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function se(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ee(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function we(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ge(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ze(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function le(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function be(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function De(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Fe(U){me.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),me.copy(U))}function Se(U){Z.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Z.copy(U))}function Ye(U,Q){let W=c.get(Q);W===void 0&&(W=new WeakMap,c.set(Q,W));let K=W.get(U);K===void 0&&(K=i.getUniformBlockIndex(Q,U.name),W.set(U,K))}function Be(U,Q){let K=c.get(Q).get(U);l.get(Q)!==K&&(i.uniformBlockBinding(Q,K,U.__bindingPointIndex),l.set(Q,K))}function Y(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},k=null,q={},p={},u=new WeakMap,d=[],g=null,x=!1,m=null,f=null,_=null,b=null,M=null,P=null,S=null,T=new Te(0,0,0),C=0,v=!1,y=null,E=null,L=null,B=null,F=null,me.set(0,0,i.canvas.width,i.canvas.height),Z.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ce,disable:ue,bindFramebuffer:pe,drawBuffers:j,useProgram:ye,setBlending:H,setMaterial:ut,setFlipSided:Ie,setCullFace:Le,setLineWidth:Me,setPolygonOffset:He,setScissorTest:Ee,activeTexture:I,bindTexture:w,unbindTexture:X,compressedTexImage2D:re,compressedTexImage3D:se,texImage2D:be,texImage3D:De,updateUBOMapping:Ye,uniformBlockBinding:Be,texStorage2D:Ze,texStorage3D:le,texSubImage2D:ee,texSubImage3D:we,compressedTexSubImage2D:ge,compressedTexSubImage3D:xe,scissor:Fe,viewport:Se,reset:Y}}function cl(i,e,t,n){let r=Ig(n);switch(t){case El:return i*e;case Tl:return i*e;case Al:return i*e*2;case Fa:return i*e/r.components*r.byteLength;case Na:return i*e/r.components*r.byteLength;case Rl:return i*e*2/r.components*r.byteLength;case Oa:return i*e*2/r.components*r.byteLength;case wl:return i*e*3/r.components*r.byteLength;case Zt:return i*e*4/r.components*r.byteLength;case Ba:return i*e*4/r.components*r.byteLength;case $r:case jr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Kr:case Qr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ao:case Co:return Math.max(i,16)*Math.max(e,8)/4;case To:case Ro:return Math.max(i,8)*Math.max(e,8)/2;case Po:case Io:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Lo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Do:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Uo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Fo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case No:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Oo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Bo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case zo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ko:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ho:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Vo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Go:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Wo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Xo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case qo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case es:case Yo:case Zo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Cl:case Jo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case $o:case jo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ig(i){switch(i){case xn:case Ml:return{byteLength:1,components:1};case hr:case bl:case ii:return{byteLength:2,components:1};case Da:case Ua:return{byteLength:2,components:4};case ei:case La:case rn:return{byteLength:4,components:1};case Sl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Lg(i,e,t,n,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ue,h=new WeakMap,p,u=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,w){return d?new OffscreenCanvas(I,w):is("canvas")}function x(I,w,X){let re=1,se=Ee(I);if((se.width>X||se.height>X)&&(re=X/Math.max(se.width,se.height)),re<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let ee=Math.floor(re*se.width),we=Math.floor(re*se.height);p===void 0&&(p=g(ee,we));let ge=w?g(ee,we):p;return ge.width=ee,ge.height=we,ge.getContext("2d").drawImage(I,0,0,ee,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+ee+"x"+we+")."),ge}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),I;return I}function m(I){return I.generateMipmaps}function f(I){i.generateMipmap(I)}function _(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(I,w,X,re,se=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ee=w;if(w===i.RED&&(X===i.FLOAT&&(ee=i.R32F),X===i.HALF_FLOAT&&(ee=i.R16F),X===i.UNSIGNED_BYTE&&(ee=i.R8)),w===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(ee=i.R8UI),X===i.UNSIGNED_SHORT&&(ee=i.R16UI),X===i.UNSIGNED_INT&&(ee=i.R32UI),X===i.BYTE&&(ee=i.R8I),X===i.SHORT&&(ee=i.R16I),X===i.INT&&(ee=i.R32I)),w===i.RG&&(X===i.FLOAT&&(ee=i.RG32F),X===i.HALF_FLOAT&&(ee=i.RG16F),X===i.UNSIGNED_BYTE&&(ee=i.RG8)),w===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(ee=i.RG8UI),X===i.UNSIGNED_SHORT&&(ee=i.RG16UI),X===i.UNSIGNED_INT&&(ee=i.RG32UI),X===i.BYTE&&(ee=i.RG8I),X===i.SHORT&&(ee=i.RG16I),X===i.INT&&(ee=i.RG32I)),w===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(ee=i.RGB8UI),X===i.UNSIGNED_SHORT&&(ee=i.RGB16UI),X===i.UNSIGNED_INT&&(ee=i.RGB32UI),X===i.BYTE&&(ee=i.RGB8I),X===i.SHORT&&(ee=i.RGB16I),X===i.INT&&(ee=i.RGB32I)),w===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(ee=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(ee=i.RGBA16UI),X===i.UNSIGNED_INT&&(ee=i.RGBA32UI),X===i.BYTE&&(ee=i.RGBA8I),X===i.SHORT&&(ee=i.RGBA16I),X===i.INT&&(ee=i.RGBA32I)),w===i.RGB&&X===i.UNSIGNED_INT_5_9_9_9_REV&&(ee=i.RGB9_E5),w===i.RGBA){let we=se?Es:$e.getTransfer(re);X===i.FLOAT&&(ee=i.RGBA32F),X===i.HALF_FLOAT&&(ee=i.RGBA16F),X===i.UNSIGNED_BYTE&&(ee=we===it?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)}return(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function M(I,w){let X;return I?w===null||w===ei||w===Li?X=i.DEPTH24_STENCIL8:w===rn?X=i.DEPTH32F_STENCIL8:w===hr&&(X=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ei||w===Li?X=i.DEPTH_COMPONENT24:w===rn?X=i.DEPTH_COMPONENT32F:w===hr&&(X=i.DEPTH_COMPONENT16),X}function P(I,w){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==Ot&&I.minFilter!==nn?Math.log2(Math.max(w.width,w.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?w.mipmaps.length:1}function S(I){let w=I.target;w.removeEventListener("dispose",S),C(w),w.isVideoTexture&&h.delete(w)}function T(I){let w=I.target;w.removeEventListener("dispose",T),y(w)}function C(I){let w=n.get(I);if(w.__webglInit===void 0)return;let X=I.source,re=u.get(X);if(re){let se=re[w.__cacheKey];se.usedTimes--,se.usedTimes===0&&v(I),Object.keys(re).length===0&&u.delete(X)}n.remove(I)}function v(I){let w=n.get(I);i.deleteTexture(w.__webglTexture);let X=I.source,re=u.get(X);delete re[w.__cacheKey],o.memory.textures--}function y(I){let w=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(w.__webglFramebuffer[re]))for(let se=0;se<w.__webglFramebuffer[re].length;se++)i.deleteFramebuffer(w.__webglFramebuffer[re][se]);else i.deleteFramebuffer(w.__webglFramebuffer[re]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[re])}else{if(Array.isArray(w.__webglFramebuffer))for(let re=0;re<w.__webglFramebuffer.length;re++)i.deleteFramebuffer(w.__webglFramebuffer[re]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let re=0;re<w.__webglColorRenderbuffer.length;re++)w.__webglColorRenderbuffer[re]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[re]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let X=I.textures;for(let re=0,se=X.length;re<se;re++){let ee=n.get(X[re]);ee.__webglTexture&&(i.deleteTexture(ee.__webglTexture),o.memory.textures--),n.remove(X[re])}n.remove(I)}let E=0;function L(){E=0}function B(){let I=E;return I>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+r.maxTextures),E+=1,I}function F(I){let w=[];return w.push(I.wrapS),w.push(I.wrapT),w.push(I.wrapR||0),w.push(I.magFilter),w.push(I.minFilter),w.push(I.anisotropy),w.push(I.internalFormat),w.push(I.format),w.push(I.type),w.push(I.generateMipmaps),w.push(I.premultiplyAlpha),w.push(I.flipY),w.push(I.unpackAlignment),w.push(I.colorSpace),w.join()}function N(I,w){let X=n.get(I);if(I.isVideoTexture&&Me(I),I.isRenderTargetTexture===!1&&I.version>0&&X.__version!==I.version){let re=I.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(X,I,w);return}}t.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+w)}function R(I,w){let X=n.get(I);if(I.version>0&&X.__version!==I.version){Z(X,I,w);return}t.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+w)}function z(I,w){let X=n.get(I);if(I.version>0&&X.__version!==I.version){Z(X,I,w);return}t.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+w)}function D(I,w){let X=n.get(I);if(I.version>0&&X.__version!==I.version){ie(X,I,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+w)}let k={[Eo]:i.REPEAT,[Kn]:i.CLAMP_TO_EDGE,[wo]:i.MIRRORED_REPEAT},q={[Ot]:i.NEAREST,[gh]:i.NEAREST_MIPMAP_NEAREST,[wr]:i.NEAREST_MIPMAP_LINEAR,[nn]:i.LINEAR,[Ns]:i.LINEAR_MIPMAP_NEAREST,[Qn]:i.LINEAR_MIPMAP_LINEAR},ne={[_h]:i.NEVER,[Th]:i.ALWAYS,[Mh]:i.LESS,[Il]:i.LEQUAL,[bh]:i.EQUAL,[wh]:i.GEQUAL,[Sh]:i.GREATER,[Eh]:i.NOTEQUAL};function te(I,w){if(w.type===rn&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===nn||w.magFilter===Ns||w.magFilter===wr||w.magFilter===Qn||w.minFilter===nn||w.minFilter===Ns||w.minFilter===wr||w.minFilter===Qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,k[w.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,k[w.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,k[w.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,q[w.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,q[w.minFilter]),w.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,ne[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Ot||w.minFilter!==wr&&w.minFilter!==Qn||w.type===rn&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let X=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function me(I,w){let X=!1;I.__webglInit===void 0&&(I.__webglInit=!0,w.addEventListener("dispose",S));let re=w.source,se=u.get(re);se===void 0&&(se={},u.set(re,se));let ee=F(w);if(ee!==I.__cacheKey){se[ee]===void 0&&(se[ee]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,X=!0),se[ee].usedTimes++;let we=se[I.__cacheKey];we!==void 0&&(se[I.__cacheKey].usedTimes--,we.usedTimes===0&&v(w)),I.__cacheKey=ee,I.__webglTexture=se[ee].texture}return X}function Z(I,w,X){let re=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(re=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(re=i.TEXTURE_3D);let se=me(I,w),ee=w.source;t.bindTexture(re,I.__webglTexture,i.TEXTURE0+X);let we=n.get(ee);if(ee.version!==we.__version||se===!0){t.activeTexture(i.TEXTURE0+X);let ge=$e.getPrimaries($e.workingColorSpace),xe=w.colorSpace===tn?null:$e.getPrimaries(w.colorSpace),Ze=w.colorSpace===tn||ge===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let le=x(w.image,!1,r.maxTextureSize);le=He(w,le);let be=s.convert(w.format,w.colorSpace),De=s.convert(w.type),Fe=b(w.internalFormat,be,De,w.colorSpace,w.isVideoTexture);te(re,w);let Se,Ye=w.mipmaps,Be=w.isVideoTexture!==!0,Y=we.__version===void 0||se===!0,U=ee.dataReady,Q=P(w,le);if(w.isDepthTexture)Fe=M(w.format===Di,w.type),Y&&(Be?t.texStorage2D(i.TEXTURE_2D,1,Fe,le.width,le.height):t.texImage2D(i.TEXTURE_2D,0,Fe,le.width,le.height,0,be,De,null));else if(w.isDataTexture)if(Ye.length>0){Be&&Y&&t.texStorage2D(i.TEXTURE_2D,Q,Fe,Ye[0].width,Ye[0].height);for(let W=0,K=Ye.length;W<K;W++)Se=Ye[W],Be?U&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,Se.width,Se.height,be,De,Se.data):t.texImage2D(i.TEXTURE_2D,W,Fe,Se.width,Se.height,0,be,De,Se.data);w.generateMipmaps=!1}else Be?(Y&&t.texStorage2D(i.TEXTURE_2D,Q,Fe,le.width,le.height),U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,le.width,le.height,be,De,le.data)):t.texImage2D(i.TEXTURE_2D,0,Fe,le.width,le.height,0,be,De,le.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Be&&Y&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Q,Fe,Ye[0].width,Ye[0].height,le.depth);for(let W=0,K=Ye.length;W<K;W++)if(Se=Ye[W],w.format!==Zt)if(be!==null)if(Be){if(U)if(w.layerUpdates.size>0){let ae=cl(Se.width,Se.height,w.format,w.type);for(let de of w.layerUpdates){let Oe=Se.data.subarray(de*ae/Se.data.BYTES_PER_ELEMENT,(de+1)*ae/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,de,Se.width,Se.height,1,be,Oe)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,Se.width,Se.height,le.depth,be,Se.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,Fe,Se.width,Se.height,le.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?U&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,Se.width,Se.height,le.depth,be,De,Se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,W,Fe,Se.width,Se.height,le.depth,0,be,De,Se.data)}else{Be&&Y&&t.texStorage2D(i.TEXTURE_2D,Q,Fe,Ye[0].width,Ye[0].height);for(let W=0,K=Ye.length;W<K;W++)Se=Ye[W],w.format!==Zt?be!==null?Be?U&&t.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,Se.width,Se.height,be,Se.data):t.compressedTexImage2D(i.TEXTURE_2D,W,Fe,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?U&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,Se.width,Se.height,be,De,Se.data):t.texImage2D(i.TEXTURE_2D,W,Fe,Se.width,Se.height,0,be,De,Se.data)}else if(w.isDataArrayTexture)if(Be){if(Y&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Q,Fe,le.width,le.height,le.depth),U)if(w.layerUpdates.size>0){let W=cl(le.width,le.height,w.format,w.type);for(let K of w.layerUpdates){let ae=le.data.subarray(K*W/le.data.BYTES_PER_ELEMENT,(K+1)*W/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,le.width,le.height,1,be,De,ae)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,be,De,le.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Fe,le.width,le.height,le.depth,0,be,De,le.data);else if(w.isData3DTexture)Be?(Y&&t.texStorage3D(i.TEXTURE_3D,Q,Fe,le.width,le.height,le.depth),U&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,be,De,le.data)):t.texImage3D(i.TEXTURE_3D,0,Fe,le.width,le.height,le.depth,0,be,De,le.data);else if(w.isFramebufferTexture){if(Y)if(Be)t.texStorage2D(i.TEXTURE_2D,Q,Fe,le.width,le.height);else{let W=le.width,K=le.height;for(let ae=0;ae<Q;ae++)t.texImage2D(i.TEXTURE_2D,ae,Fe,W,K,0,be,De,null),W>>=1,K>>=1}}else if(Ye.length>0){if(Be&&Y){let W=Ee(Ye[0]);t.texStorage2D(i.TEXTURE_2D,Q,Fe,W.width,W.height)}for(let W=0,K=Ye.length;W<K;W++)Se=Ye[W],Be?U&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,be,De,Se):t.texImage2D(i.TEXTURE_2D,W,Fe,be,De,Se);w.generateMipmaps=!1}else if(Be){if(Y){let W=Ee(le);t.texStorage2D(i.TEXTURE_2D,Q,Fe,W.width,W.height)}U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,be,De,le)}else t.texImage2D(i.TEXTURE_2D,0,Fe,be,De,le);m(w)&&f(re),we.__version=ee.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function ie(I,w,X){if(w.image.length!==6)return;let re=me(I,w),se=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+X);let ee=n.get(se);if(se.version!==ee.__version||re===!0){t.activeTexture(i.TEXTURE0+X);let we=$e.getPrimaries($e.workingColorSpace),ge=w.colorSpace===tn?null:$e.getPrimaries(w.colorSpace),xe=w.colorSpace===tn||we===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let Ze=w.isCompressedTexture||w.image[0].isCompressedTexture,le=w.image[0]&&w.image[0].isDataTexture,be=[];for(let K=0;K<6;K++)!Ze&&!le?be[K]=x(w.image[K],!0,r.maxCubemapSize):be[K]=le?w.image[K].image:w.image[K],be[K]=He(w,be[K]);let De=be[0],Fe=s.convert(w.format,w.colorSpace),Se=s.convert(w.type),Ye=b(w.internalFormat,Fe,Se,w.colorSpace),Be=w.isVideoTexture!==!0,Y=ee.__version===void 0||re===!0,U=se.dataReady,Q=P(w,De);te(i.TEXTURE_CUBE_MAP,w);let W;if(Ze){Be&&Y&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Q,Ye,De.width,De.height);for(let K=0;K<6;K++){W=be[K].mipmaps;for(let ae=0;ae<W.length;ae++){let de=W[ae];w.format!==Zt?Fe!==null?Be?U&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae,0,0,de.width,de.height,Fe,de.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae,Ye,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae,0,0,de.width,de.height,Fe,Se,de.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae,Ye,de.width,de.height,0,Fe,Se,de.data)}}}else{if(W=w.mipmaps,Be&&Y){W.length>0&&Q++;let K=Ee(be[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Q,Ye,K.width,K.height)}for(let K=0;K<6;K++)if(le){Be?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,be[K].width,be[K].height,Fe,Se,be[K].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ye,be[K].width,be[K].height,0,Fe,Se,be[K].data);for(let ae=0;ae<W.length;ae++){let Oe=W[ae].image[K].image;Be?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae+1,0,0,Oe.width,Oe.height,Fe,Se,Oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae+1,Ye,Oe.width,Oe.height,0,Fe,Se,Oe.data)}}else{Be?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Fe,Se,be[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ye,Fe,Se,be[K]);for(let ae=0;ae<W.length;ae++){let de=W[ae];Be?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae+1,0,0,Fe,Se,de.image[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae+1,Ye,Fe,Se,de.image[K])}}}m(w)&&f(i.TEXTURE_CUBE_MAP),ee.__version=se.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function fe(I,w,X,re,se,ee){let we=s.convert(X.format,X.colorSpace),ge=s.convert(X.type),xe=b(X.internalFormat,we,ge,X.colorSpace),Ze=n.get(w),le=n.get(X);if(le.__renderTarget=w,!Ze.__hasExternalTextures){let be=Math.max(1,w.width>>ee),De=Math.max(1,w.height>>ee);se===i.TEXTURE_3D||se===i.TEXTURE_2D_ARRAY?t.texImage3D(se,ee,xe,be,De,w.depth,0,we,ge,null):t.texImage2D(se,ee,xe,be,De,0,we,ge,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),Le(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,se,le.__webglTexture,0,Ie(w)):(se===i.TEXTURE_2D||se>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,re,se,le.__webglTexture,ee),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ce(I,w,X){if(i.bindRenderbuffer(i.RENDERBUFFER,I),w.depthBuffer){let re=w.depthTexture,se=re&&re.isDepthTexture?re.type:null,ee=M(w.stencilBuffer,se),we=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=Ie(w);Le(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge,ee,w.width,w.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,ee,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,ee,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,we,i.RENDERBUFFER,I)}else{let re=w.textures;for(let se=0;se<re.length;se++){let ee=re[se],we=s.convert(ee.format,ee.colorSpace),ge=s.convert(ee.type),xe=b(ee.internalFormat,we,ge,ee.colorSpace),Ze=Ie(w);X&&Le(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ze,xe,w.width,w.height):Le(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ze,xe,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,xe,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ue(I,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let re=n.get(w.depthTexture);re.__renderTarget=w,(!re.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),N(w.depthTexture,0);let se=re.__webglTexture,ee=Ie(w);if(w.depthTexture.format===Ti)Le(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,se,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,se,0);else if(w.depthTexture.format===Di)Le(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,se,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function pe(I){let w=n.get(I),X=I.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==I.depthTexture){let re=I.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),re){let se=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,re.removeEventListener("dispose",se)};re.addEventListener("dispose",se),w.__depthDisposeCallback=se}w.__boundDepthTexture=re}if(I.depthTexture&&!w.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");ue(w.__webglFramebuffer,I)}else if(X){w.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[re]),w.__webglDepthbuffer[re]===void 0)w.__webglDepthbuffer[re]=i.createRenderbuffer(),ce(w.__webglDepthbuffer[re],I,!1);else{let se=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=w.__webglDepthbuffer[re];i.bindRenderbuffer(i.RENDERBUFFER,ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,ee)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),ce(w.__webglDepthbuffer,I,!1);else{let re=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,se)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function j(I,w,X){let re=n.get(I);w!==void 0&&fe(re.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&pe(I)}function ye(I){let w=I.texture,X=n.get(I),re=n.get(w);I.addEventListener("dispose",T);let se=I.textures,ee=I.isWebGLCubeRenderTarget===!0,we=se.length>1;if(we||(re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture()),re.__version=w.version,o.memory.textures++),ee){X.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer[ge]=[];for(let xe=0;xe<w.mipmaps.length;xe++)X.__webglFramebuffer[ge][xe]=i.createFramebuffer()}else X.__webglFramebuffer[ge]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer=[];for(let ge=0;ge<w.mipmaps.length;ge++)X.__webglFramebuffer[ge]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(we)for(let ge=0,xe=se.length;ge<xe;ge++){let Ze=n.get(se[ge]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&Le(I)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ge=0;ge<se.length;ge++){let xe=se[ge];X.__webglColorRenderbuffer[ge]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[ge]);let Ze=s.convert(xe.format,xe.colorSpace),le=s.convert(xe.type),be=b(xe.internalFormat,Ze,le,xe.colorSpace,I.isXRRenderTarget===!0),De=Ie(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,De,be,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,X.__webglColorRenderbuffer[ge])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),ce(X.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ee){t.bindTexture(i.TEXTURE_CUBE_MAP,re.__webglTexture),te(i.TEXTURE_CUBE_MAP,w);for(let ge=0;ge<6;ge++)if(w.mipmaps&&w.mipmaps.length>0)for(let xe=0;xe<w.mipmaps.length;xe++)fe(X.__webglFramebuffer[ge][xe],I,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,xe);else fe(X.__webglFramebuffer[ge],I,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);m(w)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let ge=0,xe=se.length;ge<xe;ge++){let Ze=se[ge],le=n.get(Ze);t.bindTexture(i.TEXTURE_2D,le.__webglTexture),te(i.TEXTURE_2D,Ze),fe(X.__webglFramebuffer,I,Ze,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,0),m(Ze)&&f(i.TEXTURE_2D)}t.unbindTexture()}else{let ge=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ge=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ge,re.__webglTexture),te(ge,w),w.mipmaps&&w.mipmaps.length>0)for(let xe=0;xe<w.mipmaps.length;xe++)fe(X.__webglFramebuffer[xe],I,w,i.COLOR_ATTACHMENT0,ge,xe);else fe(X.__webglFramebuffer,I,w,i.COLOR_ATTACHMENT0,ge,0);m(w)&&f(ge),t.unbindTexture()}I.depthBuffer&&pe(I)}function oe(I){let w=I.textures;for(let X=0,re=w.length;X<re;X++){let se=w[X];if(m(se)){let ee=_(I),we=n.get(se).__webglTexture;t.bindTexture(ee,we),f(ee),t.unbindTexture()}}}let Ne=[],H=[];function ut(I){if(I.samples>0){if(Le(I)===!1){let w=I.textures,X=I.width,re=I.height,se=i.COLOR_BUFFER_BIT,ee=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,we=n.get(I),ge=w.length>1;if(ge)for(let xe=0;xe<w.length;xe++)t.bindFramebuffer(i.FRAMEBUFFER,we.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,we.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let xe=0;xe<w.length;xe++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(se|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(se|=i.STENCIL_BUFFER_BIT)),ge){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,we.__webglColorRenderbuffer[xe]);let Ze=n.get(w[xe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ze,0)}i.blitFramebuffer(0,0,X,re,0,0,X,re,se,i.NEAREST),l===!0&&(Ne.length=0,H.length=0,Ne.push(i.COLOR_ATTACHMENT0+xe),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Ne.push(ee),H.push(ee),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,H)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ne))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ge)for(let xe=0;xe<w.length;xe++){t.bindFramebuffer(i.FRAMEBUFFER,we.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,we.__webglColorRenderbuffer[xe]);let Ze=n.get(w[xe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,we.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,Ze,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){let w=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function Ie(I){return Math.min(r.maxSamples,I.samples)}function Le(I){let w=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Me(I){let w=o.render.frame;h.get(I)!==w&&(h.set(I,w),I.update())}function He(I,w){let X=I.colorSpace,re=I.format,se=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||X!==ki&&X!==tn&&($e.getTransfer(X)===it?(re!==Zt||se!==xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),w}function Ee(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=L,this.setTexture2D=N,this.setTexture2DArray=R,this.setTexture3D=z,this.setTextureCube=D,this.rebindTextures=j,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=Le}function Dg(i,e){function t(n,r=tn){let s,o=$e.getTransfer(r);if(n===xn)return i.UNSIGNED_BYTE;if(n===Da)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ua)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Sl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ml)return i.BYTE;if(n===bl)return i.SHORT;if(n===hr)return i.UNSIGNED_SHORT;if(n===La)return i.INT;if(n===ei)return i.UNSIGNED_INT;if(n===rn)return i.FLOAT;if(n===ii)return i.HALF_FLOAT;if(n===El)return i.ALPHA;if(n===wl)return i.RGB;if(n===Zt)return i.RGBA;if(n===Tl)return i.LUMINANCE;if(n===Al)return i.LUMINANCE_ALPHA;if(n===Ti)return i.DEPTH_COMPONENT;if(n===Di)return i.DEPTH_STENCIL;if(n===Fa)return i.RED;if(n===Na)return i.RED_INTEGER;if(n===Rl)return i.RG;if(n===Oa)return i.RG_INTEGER;if(n===Ba)return i.RGBA_INTEGER;if(n===$r||n===jr||n===Kr||n===Qr)if(o===it)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===$r)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===jr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Kr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===$r)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===jr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Kr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===To||n===Ao||n===Ro||n===Co)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===To)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ao)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ro)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Co)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Po||n===Io||n===Lo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Po||n===Io)return o===it?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Lo)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Do||n===Uo||n===Fo||n===No||n===Oo||n===Bo||n===zo||n===ko||n===Ho||n===Vo||n===Go||n===Wo||n===Xo||n===qo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Do)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Uo)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fo)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===No)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Oo)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Bo)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===zo)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ko)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ho)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Vo)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Go)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wo)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xo)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===qo)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===es||n===Yo||n===Zo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===es)return o===it?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Yo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Zo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Cl||n===Jo||n===$o||n===jo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===es)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Jo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$o)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===jo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Li?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var da=class extends xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Ht=class extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ug={type:"move"},ur=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ht,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ht,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ht,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),f=this._getHandJoint(c,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=h.position.distanceTo(p.position),d=.02,g=.005;c.inputState.pinching&&u>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ug)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ht;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Fg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ng=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,fa=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let r=new Lt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Dt({vertexShader:Fg,fragmentShader:Ng,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ke(new Gt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},pa=class extends On{constructor(e,t){super();let n=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,p=null,u=null,d=null,g=null,x=new fa,m=t.getContextAttributes(),f=null,_=null,b=[],M=[],P=new Ue,S=null,T=new xt;T.viewport=new je;let C=new xt;C.viewport=new je;let v=[T,C],y=new da,E=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ie=b[Z];return ie===void 0&&(ie=new ur,b[Z]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(Z){let ie=b[Z];return ie===void 0&&(ie=new ur,b[Z]=ie),ie.getGripSpace()},this.getHand=function(Z){let ie=b[Z];return ie===void 0&&(ie=new ur,b[Z]=ie),ie.getHandSpace()};function B(Z){let ie=M.indexOf(Z.inputSource);if(ie===-1)return;let fe=b[ie];fe!==void 0&&(fe.update(Z.inputSource,Z.frame,c||o),fe.dispatchEvent({type:Z.type,data:Z.inputSource}))}function F(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",F),r.removeEventListener("inputsourceschange",N);for(let Z=0;Z<b.length;Z++){let ie=M[Z];ie!==null&&(M[Z]=null,b[Z].disconnect(ie))}E=null,L=null,x.reset(),e.setRenderTarget(f),d=null,u=null,p=null,r=null,_=null,me.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return p},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",F),r.addEventListener("inputsourceschange",N),m.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){let ie={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,ie),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new Jt(d.framebufferWidth,d.framebufferHeight,{format:Zt,type:xn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ie=null,fe=null,ce=null;m.depth&&(ce=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=m.stencil?Di:Ti,fe=m.stencil?Li:ei);let ue={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:s};p=new XRWebGLBinding(r,t),u=p.createProjectionLayer(ue),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),_=new Jt(u.textureWidth,u.textureHeight,{format:Zt,type:xn,depthTexture:new hs(u.textureWidth,u.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),me.setContext(r),me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function N(Z){for(let ie=0;ie<Z.removed.length;ie++){let fe=Z.removed[ie],ce=M.indexOf(fe);ce>=0&&(M[ce]=null,b[ce].disconnect(fe))}for(let ie=0;ie<Z.added.length;ie++){let fe=Z.added[ie],ce=M.indexOf(fe);if(ce===-1){for(let pe=0;pe<b.length;pe++)if(pe>=M.length){M.push(fe),ce=pe;break}else if(M[pe]===null){M[pe]=fe,ce=pe;break}if(ce===-1)break}let ue=b[ce];ue&&ue.connect(fe)}}let R=new O,z=new O;function D(Z,ie,fe){R.setFromMatrixPosition(ie.matrixWorld),z.setFromMatrixPosition(fe.matrixWorld);let ce=R.distanceTo(z),ue=ie.projectionMatrix.elements,pe=fe.projectionMatrix.elements,j=ue[14]/(ue[10]-1),ye=ue[14]/(ue[10]+1),oe=(ue[9]+1)/ue[5],Ne=(ue[9]-1)/ue[5],H=(ue[8]-1)/ue[0],ut=(pe[8]+1)/pe[0],Ie=j*H,Le=j*ut,Me=ce/(-H+ut),He=Me*-H;if(ie.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(He),Z.translateZ(Me),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),ue[10]===-1)Z.projectionMatrix.copy(ie.projectionMatrix),Z.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{let Ee=j+Me,I=ye+Me,w=Ie-He,X=Le+(ce-He),re=oe*ye/I*Ee,se=Ne*ye/I*Ee;Z.projectionMatrix.makePerspective(w,X,re,se,Ee,I),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function k(Z,ie){ie===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ie.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let ie=Z.near,fe=Z.far;x.texture!==null&&(x.depthNear>0&&(ie=x.depthNear),x.depthFar>0&&(fe=x.depthFar)),y.near=C.near=T.near=ie,y.far=C.far=T.far=fe,(E!==y.near||L!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),E=y.near,L=y.far),T.layers.mask=Z.layers.mask|2,C.layers.mask=Z.layers.mask|4,y.layers.mask=T.layers.mask|C.layers.mask;let ce=Z.parent,ue=y.cameras;k(y,ce);for(let pe=0;pe<ue.length;pe++)k(ue[pe],ce);ue.length===2?D(y,T,C):y.projectionMatrix.copy(T.projectionMatrix),q(Z,y,ce)};function q(Z,ie,fe){fe===null?Z.matrix.copy(ie.matrixWorld):(Z.matrix.copy(fe.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ie.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ie.projectionMatrix),Z.projectionMatrixInverse.copy(ie.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=dr*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let ne=null;function te(Z,ie){if(h=ie.getViewerPose(c||o),g=ie,h!==null){let fe=h.views;d!==null&&(e.setRenderTargetFramebuffer(_,d.framebuffer),e.setRenderTarget(_));let ce=!1;fe.length!==y.cameras.length&&(y.cameras.length=0,ce=!0);for(let pe=0;pe<fe.length;pe++){let j=fe[pe],ye=null;if(d!==null)ye=d.getViewport(j);else{let Ne=p.getViewSubImage(u,j);ye=Ne.viewport,pe===0&&(e.setRenderTargetTextures(_,Ne.colorTexture,u.ignoreDepthValues?void 0:Ne.depthStencilTexture),e.setRenderTarget(_))}let oe=v[pe];oe===void 0&&(oe=new xt,oe.layers.enable(pe),oe.viewport=new je,v[pe]=oe),oe.matrix.fromArray(j.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(j.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(ye.x,ye.y,ye.width,ye.height),pe===0&&(y.matrix.copy(oe.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ce===!0&&y.cameras.push(oe)}let ue=r.enabledFeatures;if(ue&&ue.includes("depth-sensing")){let pe=p.getDepthInformation(fe[0]);pe&&pe.isValid&&pe.texture&&x.init(e,pe,r.renderState)}}for(let fe=0;fe<b.length;fe++){let ce=M[fe],ue=b[fe];ce!==null&&ue!==void 0&&ue.update(ce,ie,c||o)}ne&&ne(Z,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),g=null}let me=new Fl;me.setAnimationLoop(te),this.setAnimationLoop=function(Z){ne=Z},this.dispose=function(){}}},Yn=new on,Og=new tt;function Bg(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Ul(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,_,b,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),p(m,f)):f.isMeshPhongMaterial?(s(m,f),h(m,f)):f.isMeshStandardMaterial?(s(m,f),u(m,f),f.isMeshPhysicalMaterial&&d(m,f,M)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),x(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,_,b):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Tt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Tt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let _=e.get(f),b=_.envMap,M=_.envMapRotation;b&&(m.envMap.value=b,Yn.copy(M),Yn.x*=-1,Yn.y*=-1,Yn.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Yn.y*=-1,Yn.z*=-1),m.envMapRotation.value.setFromMatrix4(Og.makeRotationFromEuler(Yn)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,_,b){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*_,m.scale.value=b*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function p(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function d(m,f,_){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Tt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){let _=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function zg(i,e,t,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,b){let M=b.program;n.uniformBlockBinding(_,M)}function c(_,b){let M=r[_.id];M===void 0&&(g(_),M=h(_),r[_.id]=M,_.addEventListener("dispose",m));let P=b.program;n.updateUBOMapping(_,P);let S=e.render.frame;s[_.id]!==S&&(u(_),s[_.id]=S)}function h(_){let b=p();_.__bindingPointIndex=b;let M=i.createBuffer(),P=_.__size,S=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,P,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,M),M}function p(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){let b=r[_.id],M=_.uniforms,P=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let S=0,T=M.length;S<T;S++){let C=Array.isArray(M[S])?M[S]:[M[S]];for(let v=0,y=C.length;v<y;v++){let E=C[v];if(d(E,S,v,P)===!0){let L=E.__offset,B=Array.isArray(E.value)?E.value:[E.value],F=0;for(let N=0;N<B.length;N++){let R=B[N],z=x(R);typeof R=="number"||typeof R=="boolean"?(E.__data[0]=R,i.bufferSubData(i.UNIFORM_BUFFER,L+F,E.__data)):R.isMatrix3?(E.__data[0]=R.elements[0],E.__data[1]=R.elements[1],E.__data[2]=R.elements[2],E.__data[3]=0,E.__data[4]=R.elements[3],E.__data[5]=R.elements[4],E.__data[6]=R.elements[5],E.__data[7]=0,E.__data[8]=R.elements[6],E.__data[9]=R.elements[7],E.__data[10]=R.elements[8],E.__data[11]=0):(R.toArray(E.__data,F),F+=z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,L,E.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(_,b,M,P){let S=_.value,T=b+"_"+M;if(P[T]===void 0)return typeof S=="number"||typeof S=="boolean"?P[T]=S:P[T]=S.clone(),!0;{let C=P[T];if(typeof S=="number"||typeof S=="boolean"){if(C!==S)return P[T]=S,!0}else if(C.equals(S)===!1)return C.copy(S),!0}return!1}function g(_){let b=_.uniforms,M=0,P=16;for(let T=0,C=b.length;T<C;T++){let v=Array.isArray(b[T])?b[T]:[b[T]];for(let y=0,E=v.length;y<E;y++){let L=v[y],B=Array.isArray(L.value)?L.value:[L.value];for(let F=0,N=B.length;F<N;F++){let R=B[F],z=x(R),D=M%P,k=D%z.boundary,q=D+k;M+=k,q!==0&&P-q<z.storage&&(M+=P-q),L.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=M,M+=z.storage}}}let S=M%P;return S>0&&(M+=P-S),_.__size=M,_.__cache={},this}function x(_){let b={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(b.boundary=4,b.storage=4):_.isVector2?(b.boundary=8,b.storage=8):_.isVector3||_.isColor?(b.boundary=16,b.storage=12):_.isVector4?(b.boundary=16,b.storage=16):_.isMatrix3?(b.boundary=48,b.storage=48):_.isMatrix4?(b.boundary=64,b.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),b}function m(_){let b=_.target;b.removeEventListener("dispose",m);let M=o.indexOf(b.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function f(){for(let _ in r)i.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}var ds=class{constructor(e={}){let{canvas:t=Gh(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,f=null,_=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=yt,this.toneMapping=Fn,this.toneMappingExposure=1;let M=this,P=!1,S=0,T=0,C=null,v=-1,y=null,E=new je,L=new je,B=null,F=new Te(0),N=0,R=t.width,z=t.height,D=1,k=null,q=null,ne=new je(0,0,R,z),te=new je(0,0,R,z),me=!1,Z=new mr,ie=!1,fe=!1,ce=new tt,ue=new tt,pe=new O,j=new je,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},oe=!1;function Ne(){return C===null?D:1}let H=n;function ut(A,V){return t.getContext(A,V)}try{let A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",K,!1),t.addEventListener("webglcontextrestored",ae,!1),t.addEventListener("webglcontextcreationerror",de,!1),H===null){let V="webgl2";if(H=ut(V,A),H===null)throw ut(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Ie,Le,Me,He,Ee,I,w,X,re,se,ee,we,ge,xe,Ze,le,be,De,Fe,Se,Ye,Be,Y,U;function Q(){Ie=new tm(H),Ie.init(),Be=new Dg(H,Ie),Le=new Jp(H,Ie,e,Be),Me=new Pg(H,Ie),Le.reverseDepthBuffer&&u&&Me.buffers.depth.setReversed(!0),He=new rm(H),Ee=new yg,I=new Lg(H,Ie,Me,Ee,Le,Be,He),w=new jp(M),X=new em(M),re=new ud(H),Y=new Yp(H,re),se=new nm(H,re,He,Y),ee=new om(H,se,re,He),Fe=new sm(H,Le,I),le=new $p(Ee),we=new gg(M,w,X,Ie,Le,Y,le),ge=new Bg(M,Ee),xe=new vg,Ze=new wg(Ie),De=new qp(M,w,X,Me,ee,d,l),be=new Rg(M,ee,Le),U=new zg(H,He,Le,Me),Se=new Zp(H,Ie,He),Ye=new im(H,Ie,He),He.programs=we.programs,M.capabilities=Le,M.extensions=Ie,M.properties=Ee,M.renderLists=xe,M.shadowMap=be,M.state=Me,M.info=He}Q();let W=new pa(M,H);this.xr=W,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let A=Ie.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Ie.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(A){A!==void 0&&(D=A,this.setSize(R,z,!1))},this.getSize=function(A){return A.set(R,z)},this.setSize=function(A,V,J=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}R=A,z=V,t.width=Math.floor(A*D),t.height=Math.floor(V*D),J===!0&&(t.style.width=A+"px",t.style.height=V+"px"),this.setViewport(0,0,A,V)},this.getDrawingBufferSize=function(A){return A.set(R*D,z*D).floor()},this.setDrawingBufferSize=function(A,V,J){R=A,z=V,D=J,t.width=Math.floor(A*J),t.height=Math.floor(V*J),this.setViewport(0,0,A,V)},this.getCurrentViewport=function(A){return A.copy(E)},this.getViewport=function(A){return A.copy(ne)},this.setViewport=function(A,V,J,$){A.isVector4?ne.set(A.x,A.y,A.z,A.w):ne.set(A,V,J,$),Me.viewport(E.copy(ne).multiplyScalar(D).round())},this.getScissor=function(A){return A.copy(te)},this.setScissor=function(A,V,J,$){A.isVector4?te.set(A.x,A.y,A.z,A.w):te.set(A,V,J,$),Me.scissor(L.copy(te).multiplyScalar(D).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(A){Me.setScissorTest(me=A)},this.setOpaqueSort=function(A){k=A},this.setTransparentSort=function(A){q=A},this.getClearColor=function(A){return A.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(A=!0,V=!0,J=!0){let $=0;if(A){let G=!1;if(C!==null){let he=C.texture.format;G=he===Ba||he===Oa||he===Na}if(G){let he=C.texture.type,_e=he===xn||he===ei||he===hr||he===Li||he===Da||he===Ua,Ae=De.getClearColor(),Re=De.getClearAlpha(),ze=Ae.r,Ge=Ae.g,Ce=Ae.b;_e?(g[0]=ze,g[1]=Ge,g[2]=Ce,g[3]=Re,H.clearBufferuiv(H.COLOR,0,g)):(x[0]=ze,x[1]=Ge,x[2]=Ce,x[3]=Re,H.clearBufferiv(H.COLOR,0,x))}else $|=H.COLOR_BUFFER_BIT}V&&($|=H.DEPTH_BUFFER_BIT),J&&($|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",K,!1),t.removeEventListener("webglcontextrestored",ae,!1),t.removeEventListener("webglcontextcreationerror",de,!1),xe.dispose(),Ze.dispose(),Ee.dispose(),w.dispose(),X.dispose(),ee.dispose(),Y.dispose(),U.dispose(),we.dispose(),W.dispose(),W.removeEventListener("sessionstart",wn),W.removeEventListener("sessionend",tc),Hn.stop()};function K(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function ae(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let A=He.autoReset,V=be.enabled,J=be.autoUpdate,$=be.needsUpdate,G=be.type;Q(),He.autoReset=A,be.enabled=V,be.autoUpdate=J,be.needsUpdate=$,be.type=G}function de(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Oe(A){let V=A.target;V.removeEventListener("dispose",Oe),st(V)}function st(A){nt(A),Ee.remove(A)}function nt(A){let V=Ee.get(A).programs;V!==void 0&&(V.forEach(function(J){we.releaseProgram(J)}),A.isShaderMaterial&&we.releaseShaderCache(A))}this.renderBufferDirect=function(A,V,J,$,G,he){V===null&&(V=ye);let _e=G.isMesh&&G.matrixWorld.determinant()<0,Ae=Bu(A,V,J,$,G);Me.setMaterial($,_e);let Re=J.index,ze=1;if($.wireframe===!0){if(Re=se.getWireframeAttribute(J),Re===void 0)return;ze=2}let Ge=J.drawRange,Ce=J.attributes.position,Ke=Ge.start*ze,rt=(Ge.start+Ge.count)*ze;he!==null&&(Ke=Math.max(Ke,he.start*ze),rt=Math.min(rt,(he.start+he.count)*ze)),Re!==null?(Ke=Math.max(Ke,0),rt=Math.min(rt,Re.count)):Ce!=null&&(Ke=Math.max(Ke,0),rt=Math.min(rt,Ce.count));let ot=rt-Ke;if(ot<0||ot===1/0)return;Y.setup(G,$,Ae,J,Re);let It,Qe=Se;if(Re!==null&&(It=re.get(Re),Qe=Ye,Qe.setIndex(It)),G.isMesh)$.wireframe===!0?(Me.setLineWidth($.wireframeLinewidth*Ne()),Qe.setMode(H.LINES)):Qe.setMode(H.TRIANGLES);else if(G.isLine){let Pe=$.linewidth;Pe===void 0&&(Pe=1),Me.setLineWidth(Pe*Ne()),G.isLineSegments?Qe.setMode(H.LINES):G.isLineLoop?Qe.setMode(H.LINE_LOOP):Qe.setMode(H.LINE_STRIP)}else G.isPoints?Qe.setMode(H.POINTS):G.isSprite&&Qe.setMode(H.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Qe.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Ie.get("WEBGL_multi_draw"))Qe.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let Pe=G._multiDrawStarts,cn=G._multiDrawCounts,et=G._multiDrawCount,Wt=Re?re.get(Re).bytesPerElement:1,ai=Ee.get($).currentProgram.getUniforms();for(let Ut=0;Ut<et;Ut++)ai.setValue(H,"_gl_DrawID",Ut),Qe.render(Pe[Ut]/Wt,cn[Ut])}else if(G.isInstancedMesh)Qe.renderInstances(Ke,ot,G.count);else if(J.isInstancedBufferGeometry){let Pe=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,cn=Math.min(J.instanceCount,Pe);Qe.renderInstances(Ke,ot,cn)}else Qe.render(Ke,ot)};function Je(A,V,J){A.transparent===!0&&A.side===mn&&A.forceSinglePass===!1?(A.side=Tt,A.needsUpdate=!0,Er(A,V,J),A.side=Nn,A.needsUpdate=!0,Er(A,V,J),A.side=mn):Er(A,V,J)}this.compile=function(A,V,J=null){J===null&&(J=A),f=Ze.get(J),f.init(V),b.push(f),J.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(f.pushLight(G),G.castShadow&&f.pushShadow(G))}),A!==J&&A.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(f.pushLight(G),G.castShadow&&f.pushShadow(G))}),f.setupLights();let $=new Set;return A.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let he=G.material;if(he)if(Array.isArray(he))for(let _e=0;_e<he.length;_e++){let Ae=he[_e];Je(Ae,J,G),$.add(Ae)}else Je(he,J,G),$.add(he)}),b.pop(),f=null,$},this.compileAsync=function(A,V,J=null){let $=this.compile(A,V,J);return new Promise(G=>{function he(){if($.forEach(function(_e){Ee.get(_e).currentProgram.isReady()&&$.delete(_e)}),$.size===0){G(A);return}setTimeout(he,10)}Ie.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let Pt=null;function Bt(A){Pt&&Pt(A)}function wn(){Hn.stop()}function tc(){Hn.start()}let Hn=new Fl;Hn.setAnimationLoop(Bt),typeof self<"u"&&Hn.setContext(self),this.setAnimationLoop=function(A){Pt=A,W.setAnimationLoop(A),A===null?Hn.stop():Hn.start()},W.addEventListener("sessionstart",wn),W.addEventListener("sessionend",tc),this.render=function(A,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(V),V=W.getCamera()),A.isScene===!0&&A.onBeforeRender(M,A,V,C),f=Ze.get(A,b.length),f.init(V),b.push(f),ue.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Z.setFromProjectionMatrix(ue),fe=this.localClippingEnabled,ie=le.init(this.clippingPlanes,fe),m=xe.get(A,_.length),m.init(),_.push(m),W.enabled===!0&&W.isPresenting===!0){let he=M.xr.getDepthSensingMesh();he!==null&&Fs(he,V,-1/0,M.sortObjects)}Fs(A,V,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(k,q),oe=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,oe&&De.addToRenderList(m,A),this.info.render.frame++,ie===!0&&le.beginShadows();let J=f.state.shadowsArray;be.render(J,A,V),ie===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();let $=m.opaque,G=m.transmissive;if(f.setupLights(),V.isArrayCamera){let he=V.cameras;if(G.length>0)for(let _e=0,Ae=he.length;_e<Ae;_e++){let Re=he[_e];ic($,G,A,Re)}oe&&De.render(A);for(let _e=0,Ae=he.length;_e<Ae;_e++){let Re=he[_e];nc(m,A,Re,Re.viewport)}}else G.length>0&&ic($,G,A,V),oe&&De.render(A),nc(m,A,V);C!==null&&(I.updateMultisampleRenderTarget(C),I.updateRenderTargetMipmap(C)),A.isScene===!0&&A.onAfterRender(M,A,V),Y.resetDefaultState(),v=-1,y=null,b.pop(),b.length>0?(f=b[b.length-1],ie===!0&&le.setGlobalState(M.clippingPlanes,f.state.camera)):f=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function Fs(A,V,J,$){if(A.visible===!1)return;if(A.layers.test(V.layers)){if(A.isGroup)J=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(V);else if(A.isLight)f.pushLight(A),A.castShadow&&f.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Z.intersectsSprite(A)){$&&j.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ue);let _e=ee.update(A),Ae=A.material;Ae.visible&&m.push(A,_e,Ae,J,j.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Z.intersectsObject(A))){let _e=ee.update(A),Ae=A.material;if($&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),j.copy(A.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),j.copy(_e.boundingSphere.center)),j.applyMatrix4(A.matrixWorld).applyMatrix4(ue)),Array.isArray(Ae)){let Re=_e.groups;for(let ze=0,Ge=Re.length;ze<Ge;ze++){let Ce=Re[ze],Ke=Ae[Ce.materialIndex];Ke&&Ke.visible&&m.push(A,_e,Ke,J,j.z,Ce)}}else Ae.visible&&m.push(A,_e,Ae,J,j.z,null)}}let he=A.children;for(let _e=0,Ae=he.length;_e<Ae;_e++)Fs(he[_e],V,J,$)}function nc(A,V,J,$){let G=A.opaque,he=A.transmissive,_e=A.transparent;f.setupLightsView(J),ie===!0&&le.setGlobalState(M.clippingPlanes,J),$&&Me.viewport(E.copy($)),G.length>0&&Sr(G,V,J),he.length>0&&Sr(he,V,J),_e.length>0&&Sr(_e,V,J),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function ic(A,V,J,$){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[$.id]===void 0&&(f.state.transmissionRenderTarget[$.id]=new Jt(1,1,{generateMipmaps:!0,type:Ie.has("EXT_color_buffer_half_float")||Ie.has("EXT_color_buffer_float")?ii:xn,minFilter:Qn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace}));let he=f.state.transmissionRenderTarget[$.id],_e=$.viewport||E;he.setSize(_e.z,_e.w);let Ae=M.getRenderTarget();M.setRenderTarget(he),M.getClearColor(F),N=M.getClearAlpha(),N<1&&M.setClearColor(16777215,.5),M.clear(),oe&&De.render(J);let Re=M.toneMapping;M.toneMapping=Fn;let ze=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),f.setupLightsView($),ie===!0&&le.setGlobalState(M.clippingPlanes,$),Sr(A,J,$),I.updateMultisampleRenderTarget(he),I.updateRenderTargetMipmap(he),Ie.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let Ce=0,Ke=V.length;Ce<Ke;Ce++){let rt=V[Ce],ot=rt.object,It=rt.geometry,Qe=rt.material,Pe=rt.group;if(Qe.side===mn&&ot.layers.test($.layers)){let cn=Qe.side;Qe.side=Tt,Qe.needsUpdate=!0,rc(ot,J,$,It,Qe,Pe),Qe.side=cn,Qe.needsUpdate=!0,Ge=!0}}Ge===!0&&(I.updateMultisampleRenderTarget(he),I.updateRenderTargetMipmap(he))}M.setRenderTarget(Ae),M.setClearColor(F,N),ze!==void 0&&($.viewport=ze),M.toneMapping=Re}function Sr(A,V,J){let $=V.isScene===!0?V.overrideMaterial:null;for(let G=0,he=A.length;G<he;G++){let _e=A[G],Ae=_e.object,Re=_e.geometry,ze=$===null?_e.material:$,Ge=_e.group;Ae.layers.test(J.layers)&&rc(Ae,V,J,Re,ze,Ge)}}function rc(A,V,J,$,G,he){A.onBeforeRender(M,V,J,$,G,he),A.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),G.onBeforeRender(M,V,J,$,A,he),G.transparent===!0&&G.side===mn&&G.forceSinglePass===!1?(G.side=Tt,G.needsUpdate=!0,M.renderBufferDirect(J,V,$,G,A,he),G.side=Nn,G.needsUpdate=!0,M.renderBufferDirect(J,V,$,G,A,he),G.side=mn):M.renderBufferDirect(J,V,$,G,A,he),A.onAfterRender(M,V,J,$,G,he)}function Er(A,V,J){V.isScene!==!0&&(V=ye);let $=Ee.get(A),G=f.state.lights,he=f.state.shadowsArray,_e=G.state.version,Ae=we.getParameters(A,G.state,he,V,J),Re=we.getProgramCacheKey(Ae),ze=$.programs;$.environment=A.isMeshStandardMaterial?V.environment:null,$.fog=V.fog,$.envMap=(A.isMeshStandardMaterial?X:w).get(A.envMap||$.environment),$.envMapRotation=$.environment!==null&&A.envMap===null?V.environmentRotation:A.envMapRotation,ze===void 0&&(A.addEventListener("dispose",Oe),ze=new Map,$.programs=ze);let Ge=ze.get(Re);if(Ge!==void 0){if($.currentProgram===Ge&&$.lightsStateVersion===_e)return oc(A,Ae),Ge}else Ae.uniforms=we.getUniforms(A),A.onBeforeCompile(Ae,M),Ge=we.acquireProgram(Ae,Re),ze.set(Re,Ge),$.uniforms=Ae.uniforms;let Ce=$.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ce.clippingPlanes=le.uniform),oc(A,Ae),$.needsLights=ku(A),$.lightsStateVersion=_e,$.needsLights&&(Ce.ambientLightColor.value=G.state.ambient,Ce.lightProbe.value=G.state.probe,Ce.directionalLights.value=G.state.directional,Ce.directionalLightShadows.value=G.state.directionalShadow,Ce.spotLights.value=G.state.spot,Ce.spotLightShadows.value=G.state.spotShadow,Ce.rectAreaLights.value=G.state.rectArea,Ce.ltc_1.value=G.state.rectAreaLTC1,Ce.ltc_2.value=G.state.rectAreaLTC2,Ce.pointLights.value=G.state.point,Ce.pointLightShadows.value=G.state.pointShadow,Ce.hemisphereLights.value=G.state.hemi,Ce.directionalShadowMap.value=G.state.directionalShadowMap,Ce.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ce.spotShadowMap.value=G.state.spotShadowMap,Ce.spotLightMatrix.value=G.state.spotLightMatrix,Ce.spotLightMap.value=G.state.spotLightMap,Ce.pointShadowMap.value=G.state.pointShadowMap,Ce.pointShadowMatrix.value=G.state.pointShadowMatrix),$.currentProgram=Ge,$.uniformsList=null,Ge}function sc(A){if(A.uniformsList===null){let V=A.currentProgram.getUniforms();A.uniformsList=Ri.seqWithValue(V.seq,A.uniforms)}return A.uniformsList}function oc(A,V){let J=Ee.get(A);J.outputColorSpace=V.outputColorSpace,J.batching=V.batching,J.batchingColor=V.batchingColor,J.instancing=V.instancing,J.instancingColor=V.instancingColor,J.instancingMorph=V.instancingMorph,J.skinning=V.skinning,J.morphTargets=V.morphTargets,J.morphNormals=V.morphNormals,J.morphColors=V.morphColors,J.morphTargetsCount=V.morphTargetsCount,J.numClippingPlanes=V.numClippingPlanes,J.numIntersection=V.numClipIntersection,J.vertexAlphas=V.vertexAlphas,J.vertexTangents=V.vertexTangents,J.toneMapping=V.toneMapping}function Bu(A,V,J,$,G){V.isScene!==!0&&(V=ye),I.resetTextureUnits();let he=V.fog,_e=$.isMeshStandardMaterial?V.environment:null,Ae=C===null?M.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:ki,Re=($.isMeshStandardMaterial?X:w).get($.envMap||_e),ze=$.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Ge=!!J.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ce=!!J.morphAttributes.position,Ke=!!J.morphAttributes.normal,rt=!!J.morphAttributes.color,ot=Fn;$.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ot=M.toneMapping);let It=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Qe=It!==void 0?It.length:0,Pe=Ee.get($),cn=f.state.lights;if(ie===!0&&(fe===!0||A!==y)){let zt=A===y&&$.id===v;le.setState($,A,zt)}let et=!1;$.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==cn.state.version||Pe.outputColorSpace!==Ae||G.isBatchedMesh&&Pe.batching===!1||!G.isBatchedMesh&&Pe.batching===!0||G.isBatchedMesh&&Pe.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Pe.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Pe.instancing===!1||!G.isInstancedMesh&&Pe.instancing===!0||G.isSkinnedMesh&&Pe.skinning===!1||!G.isSkinnedMesh&&Pe.skinning===!0||G.isInstancedMesh&&Pe.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Pe.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Pe.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Pe.instancingMorph===!1&&G.morphTexture!==null||Pe.envMap!==Re||$.fog===!0&&Pe.fog!==he||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==le.numPlanes||Pe.numIntersection!==le.numIntersection)||Pe.vertexAlphas!==ze||Pe.vertexTangents!==Ge||Pe.morphTargets!==Ce||Pe.morphNormals!==Ke||Pe.morphColors!==rt||Pe.toneMapping!==ot||Pe.morphTargetsCount!==Qe)&&(et=!0):(et=!0,Pe.__version=$.version);let Wt=Pe.currentProgram;et===!0&&(Wt=Er($,V,G));let ai=!1,Ut=!1,ji=!1,at=Wt.getUniforms(),Qt=Pe.uniforms;if(Me.useProgram(Wt.program)&&(ai=!0,Ut=!0,ji=!0),$.id!==v&&(v=$.id,Ut=!0),ai||y!==A){Me.buffers.depth.getReversed()?(ce.copy(A.projectionMatrix),Xh(ce),qh(ce),at.setValue(H,"projectionMatrix",ce)):at.setValue(H,"projectionMatrix",A.projectionMatrix),at.setValue(H,"viewMatrix",A.matrixWorldInverse);let Tn=at.map.cameraPosition;Tn!==void 0&&Tn.setValue(H,pe.setFromMatrixPosition(A.matrixWorld)),Le.logarithmicDepthBuffer&&at.setValue(H,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&at.setValue(H,"isOrthographic",A.isOrthographicCamera===!0),y!==A&&(y=A,Ut=!0,ji=!0)}if(G.isSkinnedMesh){at.setOptional(H,G,"bindMatrix"),at.setOptional(H,G,"bindMatrixInverse");let zt=G.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),at.setValue(H,"boneTexture",zt.boneTexture,I))}G.isBatchedMesh&&(at.setOptional(H,G,"batchingTexture"),at.setValue(H,"batchingTexture",G._matricesTexture,I),at.setOptional(H,G,"batchingIdTexture"),at.setValue(H,"batchingIdTexture",G._indirectTexture,I),at.setOptional(H,G,"batchingColorTexture"),G._colorsTexture!==null&&at.setValue(H,"batchingColorTexture",G._colorsTexture,I));let Ki=J.morphAttributes;if((Ki.position!==void 0||Ki.normal!==void 0||Ki.color!==void 0)&&Fe.update(G,J,Wt),(Ut||Pe.receiveShadow!==G.receiveShadow)&&(Pe.receiveShadow=G.receiveShadow,at.setValue(H,"receiveShadow",G.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Qt.envMap.value=Re,Qt.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&V.environment!==null&&(Qt.envMapIntensity.value=V.environmentIntensity),Ut&&(at.setValue(H,"toneMappingExposure",M.toneMappingExposure),Pe.needsLights&&zu(Qt,ji),he&&$.fog===!0&&ge.refreshFogUniforms(Qt,he),ge.refreshMaterialUniforms(Qt,$,D,z,f.state.transmissionRenderTarget[A.id]),Ri.upload(H,sc(Pe),Qt,I)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Ri.upload(H,sc(Pe),Qt,I),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&at.setValue(H,"center",G.center),at.setValue(H,"modelViewMatrix",G.modelViewMatrix),at.setValue(H,"normalMatrix",G.normalMatrix),at.setValue(H,"modelMatrix",G.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){let zt=$.uniformsGroups;for(let Tn=0,An=zt.length;Tn<An;Tn++){let ac=zt[Tn];U.update(ac,Wt),U.bind(ac,Wt)}}return Wt}function zu(A,V){A.ambientLightColor.needsUpdate=V,A.lightProbe.needsUpdate=V,A.directionalLights.needsUpdate=V,A.directionalLightShadows.needsUpdate=V,A.pointLights.needsUpdate=V,A.pointLightShadows.needsUpdate=V,A.spotLights.needsUpdate=V,A.spotLightShadows.needsUpdate=V,A.rectAreaLights.needsUpdate=V,A.hemisphereLights.needsUpdate=V}function ku(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(A,V,J){Ee.get(A.texture).__webglTexture=V,Ee.get(A.depthTexture).__webglTexture=J;let $=Ee.get(A);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=J===void 0,$.__autoAllocateDepthBuffer||Ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,V){let J=Ee.get(A);J.__webglFramebuffer=V,J.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(A,V=0,J=0){C=A,S=V,T=J;let $=!0,G=null,he=!1,_e=!1;if(A){let Re=Ee.get(A);if(Re.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(H.FRAMEBUFFER,null),$=!1;else if(Re.__webglFramebuffer===void 0)I.setupRenderTarget(A);else if(Re.__hasExternalTextures)I.rebindTextures(A,Ee.get(A.texture).__webglTexture,Ee.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Ce=A.depthTexture;if(Re.__boundDepthTexture!==Ce){if(Ce!==null&&Ee.has(Ce)&&(A.width!==Ce.image.width||A.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(A)}}let ze=A.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(_e=!0);let Ge=Ee.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ge[V])?G=Ge[V][J]:G=Ge[V],he=!0):A.samples>0&&I.useMultisampledRTT(A)===!1?G=Ee.get(A).__webglMultisampledFramebuffer:Array.isArray(Ge)?G=Ge[J]:G=Ge,E.copy(A.viewport),L.copy(A.scissor),B=A.scissorTest}else E.copy(ne).multiplyScalar(D).floor(),L.copy(te).multiplyScalar(D).floor(),B=me;if(Me.bindFramebuffer(H.FRAMEBUFFER,G)&&$&&Me.drawBuffers(A,G),Me.viewport(E),Me.scissor(L),Me.setScissorTest(B),he){let Re=Ee.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+V,Re.__webglTexture,J)}else if(_e){let Re=Ee.get(A.texture),ze=V||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Re.__webglTexture,J||0,ze)}v=-1},this.readRenderTargetPixels=function(A,V,J,$,G,he,_e){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=Ee.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&_e!==void 0&&(Ae=Ae[_e]),Ae){Me.bindFramebuffer(H.FRAMEBUFFER,Ae);try{let Re=A.texture,ze=Re.format,Ge=Re.type;if(!Le.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Le.textureTypeReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=A.width-$&&J>=0&&J<=A.height-G&&H.readPixels(V,J,$,G,Be.convert(ze),Be.convert(Ge),he)}finally{let Re=C!==null?Ee.get(C).__webglFramebuffer:null;Me.bindFramebuffer(H.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(A,V,J,$,G,he,_e){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=Ee.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&_e!==void 0&&(Ae=Ae[_e]),Ae){let Re=A.texture,ze=Re.format,Ge=Re.type;if(!Le.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Le.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=A.width-$&&J>=0&&J<=A.height-G){Me.bindFramebuffer(H.FRAMEBUFFER,Ae);let Ce=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Ce),H.bufferData(H.PIXEL_PACK_BUFFER,he.byteLength,H.STREAM_READ),H.readPixels(V,J,$,G,Be.convert(ze),Be.convert(Ge),0);let Ke=C!==null?Ee.get(C).__webglFramebuffer:null;Me.bindFramebuffer(H.FRAMEBUFFER,Ke);let rt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Wh(H,rt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Ce),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,he),H.deleteBuffer(Ce),H.deleteSync(rt),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,V=null,J=0){A.isTexture!==!0&&(or("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,A=arguments[1]);let $=Math.pow(2,-J),G=Math.floor(A.image.width*$),he=Math.floor(A.image.height*$),_e=V!==null?V.x:0,Ae=V!==null?V.y:0;I.setTexture2D(A,0),H.copyTexSubImage2D(H.TEXTURE_2D,J,0,0,_e,Ae,G,he),Me.unbindTexture()},this.copyTextureToTexture=function(A,V,J=null,$=null,G=0){A.isTexture!==!0&&(or("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,A=arguments[1],V=arguments[2],G=arguments[3]||0,J=null);let he,_e,Ae,Re,ze,Ge,Ce,Ke,rt,ot=A.isCompressedTexture?A.mipmaps[G]:A.image;J!==null?(he=J.max.x-J.min.x,_e=J.max.y-J.min.y,Ae=J.isBox3?J.max.z-J.min.z:1,Re=J.min.x,ze=J.min.y,Ge=J.isBox3?J.min.z:0):(he=ot.width,_e=ot.height,Ae=ot.depth||1,Re=0,ze=0,Ge=0),$!==null?(Ce=$.x,Ke=$.y,rt=$.z):(Ce=0,Ke=0,rt=0);let It=Be.convert(V.format),Qe=Be.convert(V.type),Pe;V.isData3DTexture?(I.setTexture3D(V,0),Pe=H.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(I.setTexture2DArray(V,0),Pe=H.TEXTURE_2D_ARRAY):(I.setTexture2D(V,0),Pe=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,V.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,V.unpackAlignment);let cn=H.getParameter(H.UNPACK_ROW_LENGTH),et=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Wt=H.getParameter(H.UNPACK_SKIP_PIXELS),ai=H.getParameter(H.UNPACK_SKIP_ROWS),Ut=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,ot.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,ot.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Re),H.pixelStorei(H.UNPACK_SKIP_ROWS,ze),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Ge);let ji=A.isDataArrayTexture||A.isData3DTexture,at=V.isDataArrayTexture||V.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){let Qt=Ee.get(A),Ki=Ee.get(V),zt=Ee.get(Qt.__renderTarget),Tn=Ee.get(Ki.__renderTarget);Me.bindFramebuffer(H.READ_FRAMEBUFFER,zt.__webglFramebuffer),Me.bindFramebuffer(H.DRAW_FRAMEBUFFER,Tn.__webglFramebuffer);for(let An=0;An<Ae;An++)ji&&H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ee.get(A).__webglTexture,G,Ge+An),A.isDepthTexture?(at&&H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ee.get(V).__webglTexture,G,rt+An),H.blitFramebuffer(Re,ze,he,_e,Ce,Ke,he,_e,H.DEPTH_BUFFER_BIT,H.NEAREST)):at?H.copyTexSubImage3D(Pe,G,Ce,Ke,rt+An,Re,ze,he,_e):H.copyTexSubImage2D(Pe,G,Ce,Ke,rt+An,Re,ze,he,_e);Me.bindFramebuffer(H.READ_FRAMEBUFFER,null),Me.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else at?A.isDataTexture||A.isData3DTexture?H.texSubImage3D(Pe,G,Ce,Ke,rt,he,_e,Ae,It,Qe,ot.data):V.isCompressedArrayTexture?H.compressedTexSubImage3D(Pe,G,Ce,Ke,rt,he,_e,Ae,It,ot.data):H.texSubImage3D(Pe,G,Ce,Ke,rt,he,_e,Ae,It,Qe,ot):A.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,G,Ce,Ke,he,_e,It,Qe,ot.data):A.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,G,Ce,Ke,ot.width,ot.height,It,ot.data):H.texSubImage2D(H.TEXTURE_2D,G,Ce,Ke,he,_e,It,Qe,ot);H.pixelStorei(H.UNPACK_ROW_LENGTH,cn),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,et),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Wt),H.pixelStorei(H.UNPACK_SKIP_ROWS,ai),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Ut),G===0&&V.generateMipmaps&&H.generateMipmap(Pe),Me.unbindTexture()},this.copyTextureToTexture3D=function(A,V,J=null,$=null,G=0){return A.isTexture!==!0&&(or("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,$=arguments[1]||null,A=arguments[2],V=arguments[3],G=arguments[4]||0),or('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,V,J,$,G)},this.initRenderTarget=function(A){Ee.get(A).__webglFramebuffer===void 0&&I.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?I.setTextureCube(A,0):A.isData3DTexture?I.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?I.setTexture2DArray(A,0):I.setTexture2D(A,0),Me.unbindTexture()},this.resetState=function(){S=0,T=0,C=null,Me.reset(),Y.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}};var Ni=class extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new on,this.environmentIntensity=1,this.environmentRotation=new on,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var ma=class extends Lt{constructor(e=null,t=1,n=1,r,s,o,a,l,c=Ot,h=Ot,p,u){super(null,o,a,l,c,h,r,s,p,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var fs=class extends bt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},bi=new tt,ll=new tt,qr=[],ul=new vn,kg=new tt,ir=new ke,rr=new sn,ps=class extends ke{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new fs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,kg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new vn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,bi),ul.copy(e.boundingBox).applyMatrix4(bi),this.boundingBox.union(ul)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new sn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,bi),rr.copy(e.boundingSphere).applyMatrix4(bi),this.boundingSphere.union(rr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(ir.geometry=this.geometry,ir.material=this.material,ir.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),rr.copy(this.boundingSphere),rr.applyMatrix4(n),e.ray.intersectsSphere(rr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,bi),ll.multiplyMatrices(n,bi),ir.matrixWorld=ll,ir.raycast(e,qr);for(let o=0,a=qr.length;o<a;o++){let l=qr[o];l.instanceId=s,l.object=this,t.push(l)}qr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new fs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new ma(new Float32Array(r*this.count),r,this.count,Fa,rn));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var gr=class extends zn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},hl=new tt,ga=new fr,Yr=new sn,Zr=new O,ms=class extends vt{constructor(e=new Ct,t=new gr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere),Yr.applyMatrix4(r),Yr.radius+=s,e.ray.intersectsSphere(Yr)===!1)return;hl.copy(r).invert(),ga.copy(e.ray).applyMatrix4(hl);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,p=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=u,x=d;g<x;g++){let m=c.getX(g);Zr.fromBufferAttribute(p,m),dl(Zr,m,l,r,e,t,this)}}else{let u=Math.max(0,o.start),d=Math.min(p.count,o.start+o.count);for(let g=u,x=d;g<x;g++)Zr.fromBufferAttribute(p,g),dl(Zr,g,l,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function dl(i,e,t,n,r,s,o){let a=ga.distanceSqToPoint(i);if(a<t){let l=new O;ga.closestPointToPoint(i,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var kn=class extends Lt{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var gs=class i extends Ct{constructor(e=[new Ue(0,-.5),new Ue(.5,0),new Ue(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=_t(r,0,Math.PI*2);let s=[],o=[],a=[],l=[],c=[],h=1/t,p=new O,u=new Ue,d=new O,g=new O,x=new O,m=0,f=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:m=e[_+1].x-e[_].x,f=e[_+1].y-e[_].y,d.x=f*1,d.y=-m,d.z=f*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:m=e[_+1].x-e[_].x,f=e[_+1].y-e[_].y,d.x=f*1,d.y=-m,d.z=f*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(g)}for(let _=0;_<=t;_++){let b=n+_*h*r,M=Math.sin(b),P=Math.cos(b);for(let S=0;S<=e.length-1;S++){p.x=e[S].x*M,p.y=e[S].y,p.z=e[S].x*P,o.push(p.x,p.y,p.z),u.x=_/t,u.y=S/(e.length-1),a.push(u.x,u.y);let T=l[3*S+0]*M,C=l[3*S+1],v=l[3*S+0]*P;c.push(T,C,v)}}for(let _=0;_<t;_++)for(let b=0;b<e.length-1;b++){let M=b+_*e.length,P=M,S=M+e.length,T=M+e.length+1,C=M+1;s.push(P,S,C),s.push(T,C,S)}this.setIndex(s),this.setAttribute("position",new lt(o,3)),this.setAttribute("uv",new lt(a,2)),this.setAttribute("normal",new lt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var ys=class i extends Ct{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let s=[],o=[],a=[],l=[],c=new O,h=new Ue;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let p=0,u=3;p<=t;p++,u+=3){let d=n+p/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,l.push(h.x,h.y)}for(let p=1;p<=t;p++)s.push(p,p+1,0);this.setIndex(s),this.setAttribute("position",new lt(o,3)),this.setAttribute("normal",new lt(a,3)),this.setAttribute("uv",new lt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}};var ya=class i extends Ct{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};let s=[],o=[];a(r),c(n),h(),this.setAttribute("position",new lt(s,3)),this.setAttribute("normal",new lt(s.slice(),3)),this.setAttribute("uv",new lt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let b=new O,M=new O,P=new O;for(let S=0;S<t.length;S+=3)d(t[S+0],b),d(t[S+1],M),d(t[S+2],P),l(b,M,P,_)}function l(_,b,M,P){let S=P+1,T=[];for(let C=0;C<=S;C++){T[C]=[];let v=_.clone().lerp(M,C/S),y=b.clone().lerp(M,C/S),E=S-C;for(let L=0;L<=E;L++)L===0&&C===S?T[C][L]=v:T[C][L]=v.clone().lerp(y,L/E)}for(let C=0;C<S;C++)for(let v=0;v<2*(S-C)-1;v++){let y=Math.floor(v/2);v%2===0?(u(T[C][y+1]),u(T[C+1][y]),u(T[C][y])):(u(T[C][y+1]),u(T[C+1][y+1]),u(T[C+1][y]))}}function c(_){let b=new O;for(let M=0;M<s.length;M+=3)b.x=s[M+0],b.y=s[M+1],b.z=s[M+2],b.normalize().multiplyScalar(_),s[M+0]=b.x,s[M+1]=b.y,s[M+2]=b.z}function h(){let _=new O;for(let b=0;b<s.length;b+=3){_.x=s[b+0],_.y=s[b+1],_.z=s[b+2];let M=m(_)/2/Math.PI+.5,P=f(_)/Math.PI+.5;o.push(M,1-P)}g(),p()}function p(){for(let _=0;_<o.length;_+=6){let b=o[_+0],M=o[_+2],P=o[_+4],S=Math.max(b,M,P),T=Math.min(b,M,P);S>.9&&T<.1&&(b<.2&&(o[_+0]+=1),M<.2&&(o[_+2]+=1),P<.2&&(o[_+4]+=1))}}function u(_){s.push(_.x,_.y,_.z)}function d(_,b){let M=_*3;b.x=e[M+0],b.y=e[M+1],b.z=e[M+2]}function g(){let _=new O,b=new O,M=new O,P=new O,S=new Ue,T=new Ue,C=new Ue;for(let v=0,y=0;v<s.length;v+=9,y+=6){_.set(s[v+0],s[v+1],s[v+2]),b.set(s[v+3],s[v+4],s[v+5]),M.set(s[v+6],s[v+7],s[v+8]),S.set(o[y+0],o[y+1]),T.set(o[y+2],o[y+3]),C.set(o[y+4],o[y+5]),P.copy(_).add(b).add(M).divideScalar(3);let E=m(P);x(S,y+0,_,E),x(T,y+2,b,E),x(C,y+4,M,E)}}function x(_,b,M,P){P<0&&_.x===1&&(o[b]=_.x-1),M.x===0&&M.z===0&&(o[b]=P/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function f(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var xs=class i extends ya{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Mn=class i extends Ct{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],p=new O,u=new O,d=[],g=[],x=[],m=[];for(let f=0;f<=n;f++){let _=[],b=f/n,M=0;f===0&&o===0?M=.5/t:f===n&&l===Math.PI&&(M=-.5/t);for(let P=0;P<=t;P++){let S=P/t;p.x=-e*Math.cos(r+S*s)*Math.sin(o+b*a),p.y=e*Math.cos(o+b*a),p.z=e*Math.sin(r+S*s)*Math.sin(o+b*a),g.push(p.x,p.y,p.z),u.copy(p).normalize(),x.push(u.x,u.y,u.z),m.push(S+M,1-b),_.push(c++)}h.push(_)}for(let f=0;f<n;f++)for(let _=0;_<t;_++){let b=h[f][_+1],M=h[f][_],P=h[f+1][_],S=h[f+1][_+1];(f!==0||o>0)&&d.push(b,M,S),(f!==n-1||l<Math.PI)&&d.push(M,P,S)}this.setIndex(d),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(x,3)),this.setAttribute("uv",new lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var vs=class i extends Ct{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);let o=[],a=[],l=[],c=[],h=new O,p=new O,u=new O;for(let d=0;d<=n;d++)for(let g=0;g<=r;g++){let x=g/r*s,m=d/n*Math.PI*2;p.x=(e+t*Math.cos(m))*Math.cos(x),p.y=(e+t*Math.cos(m))*Math.sin(x),p.z=t*Math.sin(m),a.push(p.x,p.y,p.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),u.subVectors(p,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/r),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=r;g++){let x=(r+1)*d+g-1,m=(r+1)*(d-1)+g-1,f=(r+1)*(d-1)+g,_=(r+1)*d+g;o.push(x,m,_),o.push(m,f,_)}this.setIndex(o),this.setAttribute("position",new lt(a,3)),this.setAttribute("normal",new lt(l,3)),this.setAttribute("uv",new lt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var $t=class extends zn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pl,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},bn=class extends $t{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return _t(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Jr(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Hg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Oi=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},xa=class extends Oi{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:dc,endingEnd:dc}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case fc:s=e,a=2*t-n;break;case pc:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case fc:o=e,l=2*n-t;break;case pc:o=1,l=n+r[1]-r[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,p=this._offsetNext,u=this._weightPrev,d=this._weightNext,g=(n-t)/(r-t),x=g*g,m=x*g,f=-u*m+2*u*x-u*g,_=(1+u)*m+(-1.5-2*u)*x+(-.5+u)*g+1,b=(-1-d)*m+(1.5+d)*x+.5*g,M=d*m-d*x;for(let P=0;P!==a;++P)s[P]=f*o[h+P]+_*o[c+P]+b*o[l+P]+M*o[p+P];return s}},va=class extends Oi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(r-t),p=1-h;for(let u=0;u!==a;++u)s[u]=o[c+u]*p+o[l+u]*h;return s}},_a=class extends Oi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},jt=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Jr(t,this.TimeBufferType),this.values=Jr(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Jr(e.times,Array),values:Jr(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new _a(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new va(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new xa(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ts:t=this.InterpolantFactoryMethodDiscrete;break;case Ko:t=this.InterpolantFactoryMethodLinear;break;case Os:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ts;case this.InterpolantFactoryMethodLinear:return Ko;case this.InterpolantFactoryMethodSmooth:return Os}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&Hg(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Os,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(r)l=!0;else{let p=a*n,u=p-n,d=p+n;for(let g=0;g!==n;++g){let x=t[p+g];if(x!==t[u+g]||x!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let p=a*n,u=o*n;for(let d=0;d!==n;++d)t[u+d]=t[p+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};jt.prototype.TimeBufferType=Float32Array;jt.prototype.ValueBufferType=Float32Array;jt.prototype.DefaultInterpolation=Ko;var ti=class extends jt{constructor(e,t,n){super(e,t,n)}};ti.prototype.ValueTypeName="bool";ti.prototype.ValueBufferType=Array;ti.prototype.DefaultInterpolation=ts;ti.prototype.InterpolantFactoryMethodLinear=void 0;ti.prototype.InterpolantFactoryMethodSmooth=void 0;var Ma=class extends jt{};Ma.prototype.ValueTypeName="color";var ba=class extends jt{};ba.prototype.ValueTypeName="number";var Sa=class extends Oi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t),c=e*a;for(let h=c+a;c!==h;c+=4)Bn.slerpFlat(s,0,o,c-a,o,c,l);return s}},_s=class extends jt{InterpolantFactoryMethodLinear(e){return new Sa(this.times,this.values,this.getValueSize(),e)}};_s.prototype.ValueTypeName="quaternion";_s.prototype.InterpolantFactoryMethodSmooth=void 0;var ni=class extends jt{constructor(e,t,n){super(e,t,n)}};ni.prototype.ValueTypeName="string";ni.prototype.ValueBufferType=Array;ni.prototype.DefaultInterpolation=ts;ni.prototype.InterpolantFactoryMethodLinear=void 0;ni.prototype.InterpolantFactoryMethodSmooth=void 0;var Ea=class extends jt{};Ea.prototype.ValueTypeName="vector";var wa=class{constructor(e,t,n){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,p){return c.push(h,p),this},this.removeHandler=function(h){let p=c.indexOf(h);return p!==-1&&c.splice(p,2),this},this.getHandler=function(h){for(let p=0,u=c.length;p<u;p+=2){let d=c[p],g=c[p+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},Vg=new wa,Ta=class{constructor(e){this.manager=e!==void 0?e:Vg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ta.DEFAULT_MATERIAL_NAME="__DEFAULT";var yr=class extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Ms=class extends yr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Te(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},uo=new tt,fl=new O,pl=new O,bs=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mr,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;fl.setFromMatrixPosition(e.matrixWorld),t.position.copy(fl),pl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(pl),t.updateMatrixWorld(),uo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(uo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var ml=new tt,sr=new O,ho=new O,Aa=class extends bs{constructor(){super(new xt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ue(4,2),this._viewportCount=6,this._viewports=[new je(2,1,1,1),new je(0,1,1,1),new je(3,1,1,1),new je(1,1,1,1),new je(3,0,1,1),new je(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),sr.setFromMatrixPosition(e.matrixWorld),n.position.copy(sr),ho.copy(n.position),ho.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ho),n.updateMatrixWorld(),r.makeTranslation(-sr.x,-sr.y,-sr.z),ml.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ml)}},Bi=class extends yr{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Aa}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Ra=class extends bs{constructor(){super(new us(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},xr=class extends yr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new Ra}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Va="\\[\\]\\.:\\/",Gg=new RegExp("["+Va+"]","g"),Ga="[^"+Va+"]",Wg="[^"+Va.replace("\\.","")+"]",Xg=/((?:WC+[\/:])*)/.source.replace("WC",Ga),qg=/(WCOD+)?/.source.replace("WCOD",Wg),Yg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ga),Zg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ga),Jg=new RegExp("^"+Xg+qg+Yg+Zg+"$"),$g=["material","materials","bones","map"],Ca=class{constructor(e,t,n){let r=n||ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ct=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Gg,"")}static parseTrackName(e){let t=Jg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);$g.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[r];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ct.Composite=Ca;ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ct.prototype.GetterByBindingType=[ct.prototype._getValue_direct,ct.prototype._getValue_array,ct.prototype._getValue_arrayElement,ct.prototype._getValue_toArray];ct.prototype.SetterByBindingTypeAndVersioning=[[ct.prototype._setValue_direct,ct.prototype._setValue_direct_setNeedsUpdate,ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_array,ct.prototype._setValue_array_setNeedsUpdate,ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_arrayElement,ct.prototype._setValue_arrayElement_setNeedsUpdate,ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_fromArray,ct.prototype._setValue_fromArray_setNeedsUpdate,ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var d0=new Float32Array(1);var gl=new tt,zi=class{constructor(e,t,n=0,r=1/0){this.ray=new fr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new pr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return gl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(gl),this}intersectObject(e,t=!0,n=[]){return Pa(e,this,n,t),n.sort(yl),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Pa(e[r],this,n,t);return n.sort(yl),n}};function yl(i,e){return i.distance-e.distance}function Pa(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let o=0,a=s.length;o<a;o++)Pa(s[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var Ts=class extends Ni{constructor(){super();let e=new _n;e.deleteAttribute("uv");let t=new $t({side:Tt}),n=new $t,r=new Bi(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);let s=new ke(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let o=new ke(e,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new ke(e,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let l=new ke(e,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new ke(e,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let h=new ke(e,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let p=new ke(e,n);p.position.set(-2.193,-.369,-5.547),p.rotation.set(0,.516,0),p.scale.set(3.875,3.487,2.986),this.add(p);let u=new ke(e,Gi(50));u.position.set(-16.116,14.37,8.208),u.scale.set(.1,2.428,2.739),this.add(u);let d=new ke(e,Gi(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);let g=new ke(e,Gi(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let x=new ke(e,Gi(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);let m=new ke(e,Gi(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);let f=new ke(e,Gi(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Gi(i){let e=new Vt;return e.color.setScalar(i),e}function kl(i){let e;try{e=new ds({canvas:i,antialias:!0,powerPreference:"high-performance"})}catch(c){throw new Error("WebGL n\xE3o est\xE1 dispon\xEDvel neste dispositivo.",{cause:c})}let t=Math.min(devicePixelRatio,2);e.setPixelRatio(t),e.outputColorSpace=yt,e.toneMapping=Ia,e.toneMappingExposure=1;let n=new Ni;n.background=new Te("#EFF0F0");let r=new xt(30,1,.1,200),s=new Fi(e),o=new Ts;n.environment=s.fromScene(o,.035).texture,o.dispose(),s.dispose();let a=new xr(16777215,2);a.position.set(4,6,3),n.add(a);let l=new xr(16777215,1);return l.position.set(-5,3,4),n.add(l),n.add(new Ms(16777215,15329250,.7)),{renderer:e,scene:n,camera:r,DPR:t}}function Hl(i,{page:e=globalThis.document,onPause:t=()=>{}}={}){let n=0,r=!1,s=null,o=null,a=c=>{n=requestAnimationFrame(a);let h=o===null?0:Math.max(0,(c-o)/1e3);o=c;try{i(h),s=null}catch(p){p!==s&&(s=p,console.error("[pururu] frame failed, continuing anyway:",p))}};function l(){e?.hidden?(cancelAnimationFrame(n),n=0,o=null,t()):r&&!n&&(o=null,n=requestAnimationFrame(a))}return{start(){r||(r=!0,e?.addEventListener("visibilitychange",l),l())},stop(){r=!1,e?.removeEventListener("visibilitychange",l),cancelAnimationFrame(n),n=0,o=null}}}var mt=[{id:"soda",body:"#A2EAFF",atten:"#3DB8F6",glow:"#A8EEFF",deep:"#1678C4",logo:"#7FD8FA",trans:1,irid:.2,rainbow:0,rough:.14,name:{ja:"\u30BD\u30FC\u30C0","pt-BR":"Soda",en:"Soda",es:"Soda",zh:"\u82CF\u6253"}},{id:"ichigo",body:"#FFA3C2",atten:"#F2508A",glow:"#FFC6DA",deep:"#D6336C",logo:"#FFA3C2",trans:1,irid:.2,rainbow:0,rough:.14,name:{ja:"\u3044\u3061\u3054","pt-BR":"Morango",en:"Strawberry",es:"Fresa",zh:"\u8349\u8393"}},{id:"melon",body:"#B6EC86",atten:"#58C45E",glow:"#DBFFB4",deep:"#2F8F3A",logo:"#B6EC86",trans:1,irid:.2,rainbow:0,rough:.14,name:{ja:"\u30E1\u30ED\u30F3","pt-BR":"Mel\xE3o",en:"Melon",es:"Mel\xF3n",zh:"\u871C\u74DC"}},{id:"lemon",body:"#FFE27E",atten:"#FFB42A",glow:"#FFF2AE",deep:"#C97800",logo:"#FFE27E",trans:1,irid:.2,rainbow:0,rough:.14,name:{ja:"\u30EC\u30E2\u30F3","pt-BR":"Lim\xE3o",en:"Lemon",es:"Lim\xF3n",zh:"\u67E0\u6AAC"}},{id:"budou",body:"#C6ADFF",atten:"#8A63F5",glow:"#E2D5FF",deep:"#6A45D6",logo:"#C6ADFF",trans:1,irid:.2,rainbow:0,rough:.14,name:{ja:"\u3076\u3069\u3046","pt-BR":"Uva",en:"Grape",es:"Uva",zh:"\u8461\u8404"}},{id:"aurora",body:"#FFFFFF",atten:"#EFEAF8",glow:"#FFFFFF",deep:"#8A6CE0",logo:"#CDBDF4",trans:1,irid:.65,rainbow:1,rough:.085,name:{ja:"\u30AA\u30FC\u30ED\u30E9","pt-BR":"Aurora",en:"Aurora",es:"Aurora",zh:"\u6781\u5149"}},{id:"coffee",body:"#D4AB8C",atten:"#845235",glow:"#F3DFC6",deep:"#764831",logo:"#BA896A",trans:.65,irid:.08,rainbow:0,rough:.2,name:{ja:"\u30B3\u30FC\u30D2\u30FC","pt-BR":"Caf\xE9",en:"Coffee",es:"Caf\xE9",zh:"\u5496\u5561"}},{id:"honey",body:"#F7CC72",atten:"#CC8825",glow:"#FFEDB8",deep:"#9A6014",logo:"#E5B653",trans:.95,irid:.12,rainbow:0,rough:.16,name:{ja:"\u306F\u3061\u307F\u3064","pt-BR":"Mel",en:"Honey",es:"Miel",zh:"\u8702\u871C"}},{id:"matcha",body:"#CAD5A5",atten:"#78974D",glow:"#E2ECCA",deep:"#516F34",logo:"#A8BD83",trans:.7,irid:.1,rainbow:0,rough:.2,name:{ja:"\u62B9\u8336","pt-BR":"Matcha",en:"Matcha",es:"Matcha",zh:"\u62B9\u8336"}},{id:"peach",body:"#FFD0B3",atten:"#EB9375",glow:"#FFE7D5",deep:"#B65A3D",logo:"#F3B194",trans:.9,irid:.15,rainbow:0,rough:.16,name:{ja:"\u3082\u3082","pt-BR":"P\xEAssego",en:"Peach",es:"Melocot\xF3n",zh:"\u6843\u5B50"}},{id:"chocolate",body:"#B58B7A",atten:"#6D4637",glow:"#E2C4B1",deep:"#694334",logo:"#AE8070",trans:.45,irid:.06,rainbow:0,rough:.24,name:{ja:"\u30C1\u30E7\u30B3","pt-BR":"Chocolate",en:"Chocolate",es:"Chocolate",zh:"\u5DE7\u514B\u529B"}},{id:"coconut",body:"#FFF6E4",atten:"#D7CDBB",glow:"#FFFFFF",deep:"#807158",logo:"#DFD3BA",trans:.5,irid:.08,rainbow:0,rough:.19,name:{ja:"\u30B3\u30B3\u30CA\u30C3\u30C4","pt-BR":"Coco",en:"Coconut",es:"Coco",zh:"\u6930\u5B50"}}];var En=[{id:"bathroom",background:"#EFF0F0",base:"#F4F3F0",vein:"#8C8F95",warm:"#DCD5CB",pattern:0,name:{ja:"\u6D17\u9762\u53F0","pt-BR":"Banheiro",en:"Bathroom",es:"Ba\xF1o",zh:"\u6D74\u5BA4"}},{id:"kitchen",background:"#EEE7DC",base:"#DEC4A0",vein:"#92704D",warm:"#EBCFA9",pattern:1,name:{ja:"\u30AD\u30C3\u30C1\u30F3","pt-BR":"Cozinha",en:"Kitchen",es:"Cocina",zh:"\u53A8\u623F"}},{id:"garden",background:"#DEE5D8",base:"#E7E5D5",vein:"#A2AB95",warm:"#F1E8D4",pattern:2,name:{ja:"\u5EAD","pt-BR":"Jardim",en:"Garden",es:"Jard\xEDn",zh:"\u82B1\u56ED"}},{id:"studio",background:"#EFE6DF",base:"#F2E7DC",vein:"#BD9984",warm:"#EBDBCC",pattern:2,name:{ja:"\u30A2\u30C8\u30EA\u30A8","pt-BR":"Ateli\xEA",en:"Studio",es:"Taller",zh:"\u5DE5\u4F5C\u5BA4"}},{id:"fire",background:"#A64E31",base:"#92543B",vein:"#713426",warm:"#F1A25B",pattern:1,name:{ja:"\u71C3\u3048\u308B\u90E8\u5C4B","pt-BR":"Sala em chamas",en:"Room on fire",es:"Sala en llamas",zh:"\u7740\u706B\u7684\u623F\u95F4"},personality:{ja:"\u52D5\u3058\u306A\u3044\u3002\u76AE\u8089\u306F\u63A7\u3048\u3081\u3002","pt-BR":"Impass\xEDvel diante do caos. Humor seco.",en:"Unbothered by chaos. Dry humor.",es:"Impasible ante el caos. Humor seco.",zh:"\u9762\u5BF9\u6DF7\u4E71\u6CF0\u7136\u81EA\u82E5\u3002\u51B7\u5E7D\u9ED8\u3002"}}];var Wi={curious:{key:"personality.curious",sleepAfter:24,pace:1,tolerance:5},affectionate:{key:"personality.affectionate",sleepAfter:22,pace:.8,tolerance:6},calm:{key:"personality.calm",sleepAfter:18,pace:.6,tolerance:5},mischievous:{key:"personality.mischievous",sleepAfter:30,pace:1.35,tolerance:3},dreamy:{key:"personality.dreamy",sleepAfter:14,pace:.5,tolerance:4},energetic:{key:"personality.energetic",sleepAfter:36,pace:1.6,tolerance:5}},As={soda:"curious",ichigo:"affectionate",melon:"calm",lemon:"mischievous",budou:"dreamy",aurora:"curious",coffee:"energetic",honey:"dreamy",matcha:"calm",peach:"affectionate",chocolate:"affectionate",coconut:"calm"},ri=[{id:"happy",key:"emotion.happy",mark:"\u25E1"},{id:"angry",key:"emotion.angry",mark:"\u2301"},{id:"surprise",key:"emotion.surprise",mark:"o"},{id:"affection",key:"emotion.affection",mark:"\u2661"},{id:"wink",key:"emotion.wink",mark:";)"},{id:"sleep",key:"emotion.sleep",mark:"z"}],Rs=[{id:"jump",key:"action.jump"},{id:"dance",key:"action.dance"},{id:"spin",key:"action.spin"},{id:"sneeze",key:"action.sneeze"},{id:"nap",key:"action.nap"},{id:"hug",key:"action.hug"}],Cs=["pick_mug","bring_mug","put_mug","toss_mug","drink"],Xi=[{id:"none",key:"toy.none"},{id:"sponge",key:"toy.sponge"},{id:"bubbles",key:"toy.bubbles"},{id:"ice",key:"toy.ice"}];var Ps="pururu-play-v1",qi={version:1,plocs:0,flavor:"soda",theme:"bathroom",companion:!1,toy:"none"},Wa=(i,e)=>i.some(t=>t.id===e),Gl=i=>Number.isSafeInteger(i)&&i>=0;function Vl(i){return!i||typeof i!="object"||i.version!==1?{...qi}:{...qi,plocs:Gl(i.plocs)?i.plocs:0,flavor:Wa(mt,i.flavor)?i.flavor:qi.flavor,theme:Wa(En,i.theme)?i.theme:qi.theme,companion:i.companion===!0,toy:Wa(Xi,i.toy)?i.toy:qi.toy}}function jg(){try{return globalThis.localStorage}catch{return null}}function Wl(i=jg()){let e=new Set;function t(){try{let o=i?.getItem(Ps);return o?Vl(JSON.parse(o)):null}catch{return null}}let n=t()??{...qi};function r(){for(let o of e)o({...n})}function s(o){let a=t()??n;n=Vl({...a,...o,plocs:Math.max(n.plocs,a.plocs,Gl(o.plocs)?o.plocs:0)});try{i?.setItem(Ps,JSON.stringify(n))}catch{}return r(),{...n}}return{get state(){return{...n}},update:s,increment(){let o=Math.max(n.plocs,(t()??n).plocs);return s({plocs:Math.min(Number.MAX_SAFE_INTEGER,o+1)}).plocs},refresh(){let o=t()??n;n={...o,plocs:Math.max(n.plocs,o.plocs)},r()},subscribe(o){return e.add(o),()=>e.delete(o)}}}var Xe=matchMedia("(prefers-reduced-motion: reduce)").matches,si=matchMedia("(pointer: coarse)").matches,Kt=document.querySelector("#gl"),Xa=document.querySelector("#fx"),oi=document.querySelector("#count"),Yi=document.querySelector("#flavors"),Xl=document.querySelector("#sound"),w0=document.querySelector("#lang"),ql=document.querySelector("#nogl");var qe=(i,e,t)=>Math.min(t,Math.max(e,i)),Zi=(i,e,t)=>{let n=Math.min(1,Math.max(0,(t-i)/(e-i)));return n*n*(3-2*n)},Yl=(i,e,t)=>{let n=Math.max(t-Math.abs(i-e),0)/t;return Math.min(i,e)-n*n*t*.25},St=(i,e,t,n)=>i+(e-i)*(1-Math.exp(-t*n));var Is=.004166666666666667,qa=10,_r=-4.6;function Zl(i,e=1e-4){e=Math.max(e,Number.EPSILON);let t={},n=i.getIndex(),r=i.getAttribute("position"),s=n?n.count:r.count,o=0,a=Object.keys(i.attributes),l={},c={},h=[],p=["getX","getY","getZ","getW"],u=["setX","setY","setZ","setW"];for(let _=0,b=a.length;_<b;_++){let M=a[_],P=i.attributes[M];l[M]=new P.constructor(new P.array.constructor(P.count*P.itemSize),P.itemSize,P.normalized);let S=i.morphAttributes[M];S&&(c[M]||(c[M]=[]),S.forEach((T,C)=>{let v=new T.array.constructor(T.count*T.itemSize);c[M][C]=new T.constructor(v,T.itemSize,T.normalized)}))}let d=e*.5,g=Math.log10(1/e),x=Math.pow(10,g),m=d*x;for(let _=0;_<s;_++){let b=n?n.getX(_):_,M="";for(let P=0,S=a.length;P<S;P++){let T=a[P],C=i.getAttribute(T),v=C.itemSize;for(let y=0;y<v;y++)M+=`${~~(C[p[y]](b)*x+m)},`}if(M in t)h.push(t[M]);else{for(let P=0,S=a.length;P<S;P++){let T=a[P],C=i.getAttribute(T),v=i.morphAttributes[T],y=C.itemSize,E=l[T],L=c[T];for(let B=0;B<y;B++){let F=p[B],N=u[B];if(E[N](o,C[F](b)),v)for(let R=0,z=v.length;R<z;R++)L[R][N](o,v[R][F](b))}}t[M]=o,h.push(o),o++}}let f=i.clone();for(let _ in i.attributes){let b=l[_];if(f.setAttribute(_,new b.constructor(b.array.slice(0,o*b.itemSize),b.itemSize,b.normalized)),_ in c)for(let M=0;M<c[_].length;M++){let P=c[_][M];f.morphAttributes[_][M]=new P.constructor(P.array.slice(0,o*P.itemSize),P.itemSize,P.normalized)}}return f.setIndex(h),f}function Jl(i,{detail:e=i?20:26,radius:t=1.16,floor:n=null}={}){let r=e,s=t,o=new xs(1,r);o.deleteAttribute("normal"),o.deleteAttribute("uv"),o=Zl(o,1e-5);let a=o.attributes.position.count,l=new Float32Array(a*3),c=new Float32Array(a*3),h=new Float32Array(a*3),p=new Float32Array(a*3),u=new Float32Array(a),d=new Float32Array(a),g=new Float32Array(a),x=new Float32Array(a);{let S=o.attributes.position.array;for(let T=0;T<a;T++){let C=T*3,v=S[C],y=S[C+1],E=S[C+2],L=Math.hypot(v,y,E);v/=L,y/=L,E/=L,l[C]=v,l[C+1]=y,l[C+2]=E;let B=y<0?y*.92:y*1.08;B=-Yl(-B,.7,.2);let F=1+.11*Zi(.75,-.55,y)-.05*Zi(.3,1,y);c[C]=v*s*1.06*F,c[C+1]=B*s,c[C+2]=E*s*.98*F;let N=Math.hypot(v,E)||1;d[T]=v/N,g[T]=E/N}}let m=1/0,f=-1/0;for(let S=0;S<a;S++)m=Math.min(m,c[S*3+1]),f=Math.max(f,c[S*3+1]);if(n!==null){let S=n-m;for(let T=0;T<a;T++)c[T*3+1]+=S;f+=S,m=n}for(let S=0;S<a;S++)u[S]=.25+.75*Zi(m,f,c[S*3+1]);o.setAttribute("aRest",new bt(l,3)),o.attributes.position.setUsage(vr),o.computeVertexNormals(),o.attributes.normal.setUsage(vr),o.boundingSphere=new sn(new O(0,.2,0),5);let _=Array.from({length:a},()=>new Set);{let S=o.index.array;for(let T=0;T<S.length;T+=3){let C=S[T],v=S[T+1],y=S[T+2];_[C].add(v),_[C].add(y),_[v].add(C),_[v].add(y),_[y].add(C),_[y].add(v)}}let b=new Uint32Array(a+1);for(let S=0;S<a;S++)b[S+1]=b[S]+_[S].size;let M=new Uint32Array(b[a]),P=new Float32Array(a);for(let S=0;S<a;S++){let T=b[S];for(let C of _[S])M[T++]=C;P[S]=1/_[S].size}return{geo:o,N:a,unit:l,rest:c,disp:h,vel:p,mob:u,outX:d,outZ:g,gw:x,nbStart:b,nbList:M,invDeg:P,FLOOR:m,TOP:f,HALFW:s*1.06*1.11,pos:o.attributes.position.array,restSqY:(S,T)=>m+(c[S*3+1]-m)*T}}function $l(i){let e={eye:new je(1,0,0,0),surprise:{value:0},speech:{value:new Ue},look:new Ue(0,0),angry:{value:0},affection:{value:0},wink:{value:0}},t=new bn({color:i.current.body,roughness:.14,metalness:0,transmission:1,thickness:1.1,ior:1.36,dispersion:.35,attenuationColor:i.current.atten,attenuationDistance:2.4,clearcoat:1,clearcoatRoughness:.04,specularIntensity:1,iridescence:.2,iridescenceIOR:1.3,iridescenceThicknessRange:[120,700],envMapIntensity:1.2});return t.onBeforeCompile=n=>{n.uniforms.uInk={value:new Te("#0A0C12")},n.uniforms.uGlow={value:i.current.glow},n.uniforms.uEye={value:e.eye},n.uniforms.uSurprise=e.surprise,n.uniforms.uSpeech=e.speech,n.uniforms.uLook={value:e.look},n.uniforms.uAngry=e.angry,n.uniforms.uAffection=e.affection,n.uniforms.uWink=e.wink,n.uniforms.uRainbow=i.shader.uRainbow,n.uniforms.uTime=i.shader.uTime,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute vec3 aRest;
varying vec3 vRest;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vRest = aRest;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
      varying vec3 vRest;
      uniform vec3 uInk; uniform vec3 uGlow;
      uniform vec4 uEye; uniform float uSurprise; uniform vec2 uLook; uniform vec2 uSpeech;
      uniform float uAngry; uniform float uAffection; uniform float uWink;
      uniform float uRainbow; uniform float uTime;
      float gFace; float gHi; float gBlush;
      float sdEllipse(vec2 p, vec2 r){ float k = length(p / r); return (k - 1.0) * min(r.x, r.y); }
      float sdSeg(vec2 p, vec2 a, vec2 b){ vec2 pa = p - a, ba = b - a; float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0); return length(pa - ba * h); }
      float sdArcUp(vec2 q, float r){ if (q.y > 0.0) return abs(length(q) - r); return length(q - vec2(sign(q.x) * r, 0.0)); }
      float fillAA(float d){ float a = fwidth(d) * 0.85 + 1e-5; return 1.0 - smoothstep(-a, a, d); }
      vec3 hue(float h){ return clamp(abs(mod(h * 6.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0); }
      float eyeSDF(vec2 p, float side){
        float open = uEye.x, happy = uEye.y, squeeze = uEye.z, sleep = uEye.w;
        vec2 r = vec2(0.052, 0.094) * (1.0 + 0.16 * uSurprise);
        r.y = max(r.y * open, 0.012);
        r.y *= mix(1.0, 0.62, uAngry);
        float dR = sdEllipse(p, r);
        float dH = sdArcUp(p + vec2(0.0, 0.026), 0.05) - 0.0135;
        vec2 q = vec2(p.x * -side, p.y);
        float dS = min(sdSeg(q, vec2(-0.04, 0.044), vec2(0.036, 0.0)), sdSeg(q, vec2(0.036, 0.0), vec2(-0.04, -0.044))) - 0.0135;
        float dZ = sdArcUp(vec2(p.x, -p.y - 0.02), 0.048) - 0.0115;
        float d = dR;
        d = mix(d, dH, happy);
        d = mix(d, dS, squeeze);
        d = mix(d, dZ, sleep);
        if (side < 0.0) d = mix(d, dZ, uWink);
        return d;
      }
      void computeFace(){
        gFace = 0.0; gHi = 0.0; gBlush = 0.0;
        vec3 n = normalize(vRest);
        if (n.z < 0.12) return;
        vec2 p = n.xy / (0.55 + 0.45 * n.z);
        vec2 look = uLook * vec2(0.036, 0.028);
        vec2 eL = vec2(-0.235, 0.05) + look, eR = vec2(0.235, 0.05) + look;
        float eyeM = fillAA(min(eyeSDF(p - eL, -1.0), eyeSDF(p - eR, 1.0)));
        float s = 1.0 + 0.16 * uSurprise;
        float round_ = (1.0 - uEye.y) * (1.0 - uEye.z) * (1.0 - uEye.w) * smoothstep(0.45, 0.85, uEye.x);
        vec2 qa = p - eL, qb = p - eR;
        float h = 0.0;
        h = max(h, fillAA(sdEllipse(qa - vec2(0.014, 0.046) * s, vec2(0.013, 0.021) * s)));
        h = max(h, fillAA(sdEllipse(qb - vec2(0.014, 0.046) * s, vec2(0.013, 0.021) * s)));
        h = max(h, fillAA(length(qa - vec2(-0.014, -0.052) * s) - 0.0065 * s));
        h = max(h, fillAA(length(qb - vec2(-0.014, -0.052) * s) - 0.0065 * s));
        gHi = h * round_ * eyeM;
        float edge = smoothstep(0.12, 0.34, n.z);
        vec2 mouth = p - vec2(0.0, -0.17);
        float smile = sdArcUp(vec2(mouth.x, -mouth.y - 0.013), 0.052) - 0.009;
        float frown = sdArcUp(mouth + vec2(0.0, 0.025), 0.05) - 0.009;
        float mouthD = mix(smile, frown, uAngry);
        mouthD = mix(mouthD, length(mouth) - 0.028, uSurprise);
        float mouthM = fillAA(mouthD) * max(max(uEye.y, uAffection), max(max(uAngry, uSurprise), uWink));
        float jaw = uSpeech.x;
        float width = mix(0.081, 0.041, uSpeech.y);
        float phoneticMouth = sdEllipse(mouth + vec2(0.0, jaw * 0.014), vec2(width, 0.006 + jaw * 0.068));
        mouthM = mix(mouthM, fillAA(phoneticMouth), smoothstep(0.025, 0.16, jaw));
        float browL = sdSeg(qa, vec2(-0.057, 0.12), vec2(0.049, 0.08)) - 0.008;
        float browR = sdSeg(qb, vec2(-0.049, 0.08), vec2(0.057, 0.12)) - 0.008;
        float brows = fillAA(min(browL, browR)) * uAngry;
        gBlush = fillAA(min(sdEllipse(p - vec2(-0.37, -0.06), vec2(0.07, 0.03)),
                            sdEllipse(p - vec2(0.37, -0.06), vec2(0.07, 0.03)))) * uAffection * edge;
        gFace = max(max(eyeM, mouthM), brows) * edge; gHi *= edge;
      }
      vec3 rainbowAt(vec3 nr, float fr){
        float h = fract(0.58 + fr * 0.8 + nr.y * 0.38 + nr.x * 0.22 + uTime * 0.025);
        return mix(vec3(1.0), hue(h), 0.88);
      }
    `).replace("#include <color_fragment>",`#include <color_fragment>
      computeFace();
      {
        vec3 nr = normalize(vRest);
        vec3 rb = rainbowAt(nr, 0.3);
        // Tint the transmitted light across the whole body, including the crown.
        diffuseColor.rgb = mix(diffuseColor.rgb, rb, uRainbow * 0.72);
      }
      diffuseColor.rgb = mix(diffuseColor.rgb, uInk, gFace);
      diffuseColor.rgb = mix(diffuseColor.rgb, vec3(1.0), gHi);
      diffuseColor.rgb = mix(diffuseColor.rgb, vec3(1.0, 0.42, 0.5), gBlush * 0.35);
    `).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
      {
        vec3 vd = normalize(vViewPosition);
        float fr = 1.0 - clamp(dot(normal, vd), 0.0, 1.0);
        vec3 nr = normalize(vRest);
        float body = (1.0 - gFace);
        totalEmissiveRadiance += uGlow * (0.05 + 0.42 * pow(fr, 2.6) + 0.3 * smoothstep(-0.15, -0.95, nr.y)) * body * (1.0 - uRainbow * 0.9);
        vec3 rb = rainbowAt(nr, fr);
        // Saturated rim light adds life while the center stays see-through.
        totalEmissiveRadiance += rb * uRainbow * (0.3 * pow(fr, 1.7) + 0.035) * body;
        totalEmissiveRadiance += vec3(1.0) * gHi * 0.95;
      }
    `).replace("#include <transmission_fragment>",Ve.transmission_fragment.replace("material.transmission = transmission;","material.transmission = transmission * (1.0 - gFace);"))},{material:t,face:e}}function jl(i,e,t,n){let r=Jl(t,n),{material:s,face:o}=$l(e),a=new Ht;i.add(a);let l=new ke(r.geo,s);l.frustumCulled=!1,a.add(l);let c=new Vt({color:16777215,toneMapped:!1}),h=[];for(let u=0;u<7;u++){let d=new ke(new Mn(1,12,8),c);d.userData={phase:Math.random(),speed:.04+Math.random()*.05,ang:Math.random()*Math.PI*2,rad:.25+Math.random()*.45,size:.016+Math.random()*.028},h.push(d),a.add(d)}function p(){i.remove(a),r.geo.dispose(),s.dispose(),c.dispose();for(let u of h)u.geometry.dispose()}return{slime:a,mesh:l,material:s,face:o,geometry:r,bubbles:h,dispose:p}}function Kl(i){return{body:{x:0,y:Xe?0:6,z:0,vx:0,vy:0,vz:0,air:!Xe},sq:0,sqv:0,sqTarget:0,pinch:{value:0,last:-10,touchStart:0,touchBase:0},bounds:{xL:-5,xR:5,zMin:-4.6+i.HALFW+.35,zMax:1.5,yMax:2.5},grab:{on:!1,list:null,weights:null,g:-1,id:-1,plane:new Mt,offset:new O,target:new O,cursor:new O,desired:new O,stretch:0,maxStretch:0,downX:0,downY:0,downT:0,samples:[]},events:[]}}function Ql(i,e,t){t.fill(0);for(let n=0;n<i.length;n+=3){let r=i[n]*3,s=i[n+1]*3,o=i[n+2]*3,a=e[o]-e[s],l=e[o+1]-e[s+1],c=e[o+2]-e[s+2],h=e[r]-e[s],p=e[r+1]-e[s+1],u=e[r+2]-e[s+2],d=l*u-c*p,g=c*h-a*u,x=a*p-l*h;t[r]+=d,t[r+1]+=g,t[r+2]+=x,t[s]+=d,t[s+1]+=g,t[s+2]+=x,t[o]+=d,t[o+1]+=g,t[o+2]+=x}for(let n=0;n<t.length;n+=3){let r=t[n],s=t[n+1],o=t[n+2],a=1/(Math.sqrt(r*r+s*s+o*o)||1);t[n]*=a,t[n+1]*=a,t[n+2]*=a}}var X0=1/240;function eu(i,e){let{body:t,grab:n,bounds:r,events:s}=i,{N:o,unit:a,rest:l,disp:c,vel:h,mob:p,outX:u,outZ:d,gw:g,nbStart:x,nbList:m,invDeg:f,geo:_,pos:b,restSqY:M,HALFW:P,FLOOR:S}=e,T=null;function C(R,z,D){let k=R*3,q=l[k],ne=l[k+1],te=l[k+2],me=1/(2*z*z),Z=9*z*z;for(let ie=0;ie<o;ie++){let fe=ie*3,ce=l[fe]-q,ue=l[fe+1]-ne,pe=l[fe+2]-te,j=ce*ce+ue*ue+pe*pe;j<Z&&D(ie,Math.exp(-j*me))}}function v(R,z=4.2){C(R,.36,(D,k)=>{let q=D*3;h[q]-=a[q]*z*k,h[q+1]-=a[q+1]*z*k,h[q+2]-=a[q+2]*z*k}),i.sqv-=1.2}function y(R,z,D){let k=Math.min(D,1);C(R,.32,(q,ne)=>{let te=q*3;h[te]+=z.x*.16*ne-a[te]*.3*ne*k,h[te+1]+=z.y*.16*ne-a[te+1]*.3*ne*k,h[te+2]+=z.z*.16*ne-a[te+2]*.3*ne*k})}function E(R,z=0,D=0){return t.air||n.on||T!==null?!1:(i.sqv-=2.2,T=setTimeout(()=>{if(T=null,!n.on){t.vy=R,t.vx+=z,t.vz+=D,t.air=!0,t.y=1e-4;for(let k=0;k<o;k++)h[k*3+1]-=R*p[k]*.55}},90),!0)}function L(R,z,D=9){t.vx=qe(t.vx+R,-D,D),t.vz=qe(t.vz+z,-D,D)}function B(R){let z=t.vx,D=t.vy,k=t.vz,q=0;if(n.on)t.vx+=(75*(n.target.x-t.x)-10*t.vx)*R,t.vy+=(75*(n.target.y-t.y)-10*t.vy)*R,t.vz+=(75*(n.target.z-t.z)-10*t.vz)*R,t.air=t.y>.02;else if(t.air)t.vy+=-26*R,q=-26*R;else{let ye=Math.exp(-2.4*R);t.vx*=ye,t.vz*=ye}if(t.x+=t.vx*R,t.y+=t.vy*R,t.z+=t.vz*R,t.y<=0&&(t.air||n.on)){let ye=-t.vy;t.y=0,!n.on&&ye>2.8?(t.vy=ye*.3,t.air=!0):(t.vy=Math.max(0,t.vy),t.air=!1),ye>.5&&(i.sqv-=ye*.62,s.push({type:"land",impact:ye}))}t.y>r.yMax&&(t.y=r.yMax,t.vy>0&&(t.vy*=-.3));let ne=r.xL+P,te=r.xR-P;t.x<ne&&(t.x=ne,t.vx<0&&(s.push({type:"wall",impact:-t.vx}),t.vx*=-.42)),t.x>te&&(t.x=te,t.vx>0&&(s.push({type:"wall",impact:t.vx}),t.vx*=-.42)),t.z<r.zMin&&(t.z=r.zMin,t.vz<0&&(s.push({type:"wall",impact:-t.vz}),t.vz*=-.42)),t.z>r.zMax&&(t.z=r.zMax,t.vz>0&&(s.push({type:"wall",impact:t.vz}),t.vz*=-.42));let me=t.vx-z,Z=t.vy-D-q,ie=t.vz-k;i.sqv+=(-300*(i.sq-i.sqTarget)-4.6*i.sqv)*R,i.sq=qe(i.sq+i.sqv*R,-.5,.95);for(let ye=0;ye<o;ye++){let oe=ye*3,Ne=0,H=0,ut=0,Ie=0,Le=0,Me=0;for(let we=x[ye],ge=x[ye+1];we<ge;we++){let xe=m[we]*3;Ne+=c[xe],H+=c[xe+1],ut+=c[xe+2],Ie+=h[xe],Le+=h[xe+1],Me+=h[xe+2]}let He=f[ye],Ee=p[ye]*1,I=c[oe],w=c[oe+1],X=c[oe+2],re=h[oe],se=h[oe+1],ee=h[oe+2];h[oe]+=(-300*I-3.2*re+900*(Ne*He-I)+8*(Ie*He-re))*R-me*Ee,h[oe+1]+=(-300*w-3.2*se+900*(H*He-w)+8*(Le*He-se))*R-Z*Ee,h[oe+2]+=(-300*X-3.2*ee+900*(ut*He-X)+8*(Me*He-ee))*R-ie*Ee}if(n.on){let ye=n.list,oe=n.weights,Ne=n.desired.x,H=n.desired.y,ut=n.desired.z;for(let Le=0;Le<ye.length;Le++){let Me=ye[Le]*3,He=oe[Le],Ee=1300*He,I=16*He;h[Me]+=(Ee*(Ne*He-c[Me])-I*h[Me])*R,h[Me+1]+=(Ee*(H*He-c[Me+1])-I*h[Me+1])*R,h[Me+2]+=(Ee*(ut*He-c[Me+2])-I*h[Me+2])*R}let Ie=26*Zi(0,.7,t.y);if(Ie>0)for(let Le=0;Le<o;Le++)h[Le*3+1]-=Ie*(1-g[Le])*p[Le]*R}let fe=1+i.sq,ce=1/Math.sqrt(fe),ue=r.xL-t.x,pe=r.xR-t.x,j=_r-t.z;for(let ye=0;ye<o;ye++){let oe=ye*3;c[oe]+=h[oe]*R,c[oe+1]+=h[oe+1]*R,c[oe+2]+=h[oe+2]*R;let Ne=t.y+M(ye,fe)+c[oe+1];if(Ne<S){let Ie=S-Ne;c[oe+1]+=Ie,h[oe+1]<0&&(h[oe+1]=0),c[oe]+=u[ye]*Ie*.65,c[oe+2]+=d[ye]*Ie*.65,h[oe]*=.94,h[oe+2]*=.94}let H=l[oe]*ce+c[oe];if(H>pe){let Ie=H-pe;h[oe]-=Ie*900*R,h[oe]>0&&(h[oe]*=.8)}else if(H<ue){let Ie=ue-H;h[oe]+=Ie*900*R,h[oe]<0&&(h[oe]*=.8)}let ut=l[oe+2]*ce+c[oe+2];if(ut<j){let Ie=j-ut;h[oe+2]+=Ie*900*R,h[oe+2]<0&&(h[oe+2]*=.8)}}}function F(){let R=1+i.sq,z=1/Math.sqrt(R);for(let D=0;D<o;D++){let k=D*3;b[k]=l[k]*z+c[k],b[k+1]=M(D,R)+c[k+1],b[k+2]=l[k+2]*z+c[k+2]}_.attributes.position.needsUpdate=!0,Ql(_.index.array,b,_.attributes.normal.array),_.attributes.normal.needsUpdate=!0}function N(){T!==null&&clearTimeout(T),T=null}return{step:B,writeGeometry:F,forEachNear:C,poke:v,stroke:y,hop:E,push:L,cancelHop:N,dispose:N,FIXED_STEP:1/240}}function tu(i,e){let{body:t,grab:n,pinch:r}=i,{face:s,physics:o,sfx:a,counter:l,fx:c,raycast:h,camera:p,slime:u}=e,d={last:performance.now()/1e3,sleeping:!1,squeezeUntil:0,happyUntil:0,surpriseUntil:0,strokeLevel:0,nextBlink:1.5,blinkT:-1,nextIdle:6,lastZ:0,lastHearts:0,mood:"",moodUntil:0,angryUntil:0,affectionUntil:0,pose:"",intensity:1,resisting:!1},g=0,x=Xe,m=!1;function f(v,{wakeHop:y=!0}={}){d.sleeping&&(d.sleeping=!1,d.surpriseUntil=v+.8,!Xe&&y&&o.hop(3.6),a.wake()),d.last=v}function _(){return e.roomMode?.()==="fire"?Wi.calm:Wi[As[e.flavorId?.()??"soda"]]??Wi.curious}function b(v,y=3,E=1){let L=performance.now()/1e3;f(L,{wakeHop:!1}),d.mood=v,d.moodUntil=L+y,d.intensity=E,v==="sleep"&&(d.sleeping=!0)}function M(v,y){let E=y-d.last,L=_();if(d.pose){i.sqTarget=0;return}if(!d.sleeping&&E>L.sleepAfter&&!n.on&&!t.air&&(d.sleeping=!0,d.lastZ=y),d.sleeping){i.sqTarget=(Xe?0:-.035+.035*Math.sin(v*1.3))+r.value,y-d.lastZ>1.5&&!Xe&&(d.lastZ=y,c.zzz());return}if(i.sqTarget=(Xe?0:.012*L.pace*Math.sin(v*2.4*L.pace))+r.value,!Xe&&v>d.nextIdle&&(d.nextIdle=v+(4+Math.random()*4)/L.pace,E>6&&!n.on&&!t.air&&x)){let B=-t.x,F=-t.z,N=Math.hypot(B,F);if(N>1.2){let R=Math.min(N,1.6),z=3.6,D=2*z/26;o.hop(z,B/N*R/D*.8,F/N*R/D*.8)}else Math.random()<.35?o.hop(2.8*Math.min(L.pace,1.25)):o.push(Math.random()<.5?-1.2:1.2,0)}}function P(v,y){let E=h.pointer;if(E.over=!1,!(E.has&&!n.on&&m&&e.touches.size<2)){n.on||(E.lastHit=!1),E.moved=!1,d.strokeLevel=Math.max(0,d.strokeLevel-v*.45);return}let L=h.hitTest();if(!L)E.lastHit&&(e.canvas.style.cursor=""),E.lastHit=!1;else{E.over=!0;let B=h.hitVertex(L),F=h.local;if(u.worldToLocal(F.copy(L.point)),E.lastHit&&E.moved){let N=e.strokeV.subVectors(F,e.prevHitLocal).divideScalar(Math.max(v,.008333333333333333)),R=N.length();R>.2&&(R>12&&N.multiplyScalar(12/R),o.stroke(B,N,R),R>2.5&&!t.air&&o.push(N.x*.06,N.z*.06,7),d.strokeLevel=Math.min(2,d.strokeLevel+Math.min(R,6)*v*.35),d.strokeLevel>.45&&(d.angryUntil=0,d.affectionUntil=y+1,d.mood==="angry"&&(d.moodUntil=0),e.onStroke?.()),d.strokeLevel>1.1&&y-d.lastHearts>3.5&&(d.lastHearts=y,c.hearts(E.x,E.y,4),l.bump()))}e.prevHitLocal.copy(F),E.lastHit=!0,e.canvas.style.cursor="grab"}E.moved=!1,d.strokeLevel=Math.max(0,d.strokeLevel-v*.45)}function S(v,y,E){let L={open:1,happy:0,squeeze:0,sleep:0,surprise:0},B=Math.hypot(t.vx,t.vz);d.sleeping?L.sleep=1:n.on?n.stretch/2.3>.5||B>7?L.squeeze=1:t.y>.25?L.surprise=1:L.happy=1:E<d.squeezeUntil?L.squeeze=1:t.air&&t.vy>0?L.happy=1:t.air||B>3?L.surprise=1:Math.abs(r.value)>.2?(L.squeeze=r.value<0?1:0,L.surprise=r.value>0?1:0):E<d.surpriseUntil?L.surprise=1:(E<d.happyUntil||d.strokeLevel>.45)&&(L.happy=1);let F=d.pose||(E<d.moodUntil?d.mood:""),N=E<d.angryUntil?1:0,R=E<d.affectionUntil?1:0,z=0;if(F?(Object.assign(L,{open:1,happy:0,squeeze:0,sleep:0,surprise:0}),N=F==="angry"?1:0,R=F==="affection"?1:0,z=F==="wink"?1:0,(F==="happy"||F==="affection")&&(L.happy=1),F==="surprise"&&(L.surprise=1),F==="sleep"&&(L.sleep=1),!d.pose&&F!=="sleep"&&(L.happy*=d.intensity,L.surprise*=d.intensity,N*=d.intensity,R*=d.intensity,z*=d.intensity)):N&&(L.happy=0),(!F||F==="neutral")&&e.roomMode?.()==="fire"&&!n.on&&!d.sleeping&&!L.surprise&&(L.open=.78,L.happy*=.28),d.resisting&&(L.happy=0,L.sleep=0,L.surprise=0,L.squeeze=Math.min(.4,n.stretch*.23),N=.94,R=0,z=0),!d.sleeping&&!d.pose&&!z&&L.happy+L.squeeze===0){y>d.nextBlink&&(d.blinkT=y,d.nextBlink=y+2+Math.random()*3.5+(Math.random()<.2?-1.6:0));let k=y-d.blinkT;k>=0&&k<.16&&(L.open=Math.abs(k-.08)/.08*.9+.1)}let D=22;s.eye.x=St(s.eye.x,L.open,L.open<s.eye.x?60:D,v),s.eye.y=St(s.eye.y,L.happy,D,v),s.eye.z=St(s.eye.z,L.squeeze,D*1.3,v),s.eye.w=St(s.eye.w,L.sleep,5,v),s.surprise.value=St(s.surprise.value,L.surprise,D,v),s.angry.value=St(s.angry.value,N,D,v),s.affection.value=St(s.affection.value,R,8,v),s.wink.value=St(s.wink.value,z,D,v)}function T(v,y){let E=h.pointer,L=0,B=0;d.sleeping||(n.on||E.has?(u.localToWorld(e.projPoint.set(0,.2,0)).project(p),L=qe((E.nx-e.projPoint.x)*1.6,-1,1),B=qe((E.ny-e.projPoint.y)*1.6,-1,1)):si||(L=Math.sin(y*.37)*.35,B=Math.sin(y*.23)*.2)),s.look.x=St(s.look.x,L,8,v),s.look.y=St(s.look.y,B,8,v),g=St(g,s.look.x*.3,4,v)}function C(v){let y;for(;y=i.events.shift();)if(y.type==="land"){if(y.impact<=2.5)continue;if(d.squeezeUntil=v+.24,d.happyUntil=v+(x?1:2.2),a.land(y.impact),y.impact>4.5&&e.splash(Math.min(7,Math.round(y.impact*.6))),!x){x=!0;let E=c.slimeScreenTop();c.hearts(E.x,E.y+30,4)}}else y.type==="wall"&&y.impact>2&&(d.squeezeUntil=v+.3,d.happyUntil=v+1,a.land(y.impact*.8),y.impact>5&&e.splash(3,.5))}return{ex:d,touch:f,feel:b,personality:_,idle:M,hover:P,updateFace:S,updateGaze:T,drainEvents:C,get yaw(){return g},set started(v){m=v},get started(){return m}}}function nu(i,{expression:e,physics:t,counter:n,sfx:r,fx:s}){let o=null,a=[],l=0,c=0;function h(){let m=s.slimeScreenTop();s.hearts(m.x,m.y+25,4)}function p(m){ri.some(f=>f.id===m)&&(e.feel(m),m==="affection"&&(a=[],e.ex.angryUntil=0,h()))}function u(){p("affection"),e.ex.strokeLevel=1.5,n.bump(),r.wobble()}function d(m){a=[...a.filter(f=>m-f<4),m],a.length>=e.personality().tolerance&&(e.ex.moodUntil=0,e.ex.angryUntil=m+4,e.ex.happyUntil=0)}function g(m){if(!Rs.some(_=>_.id===m)||m==="hug"||i.grab.on)return!1;let f=performance.now()/1e3;return e.touch(f,{wakeHop:!1}),m==="jump"?t.hop(Xe?4:6.8)?(e.feel("happy",1.2),r.jump(),n.bump(),!0):!1:m==="nap"?(o=null,e.feel("sleep"),r.wobble(),n.bump(),!0):(o={id:m,start:f,until:f+(m==="sneeze"?1.4:2.8),fired:!1},e.feel(m==="sneeze"?"surprise":"happy",3),r.wobble(),n.bump(),!0)}function x(m,f){if(l=c=0,!o||f>=o.until||i.grab.on||e.ex.pose){o=null;return}let _=f-o.start;if(o.id==="dance")i.sqTarget+=(Xe?.015:.09)*Math.sin(_*13),c=(Xe?.015:.12)*Math.sin(_*7);else if(o.id==="spin"){let b=Math.min(1,_/2.8);l=Xe?0:Math.PI*4*(b*b*(3-2*b)),i.sqTarget+=(Xe?.01:.04)*Math.sin(_*10)}else o.id==="sneeze"&&(_<.55?i.sqTarget-=.1*Math.sin(_/.55*Math.PI):o.fired||(o.fired=!0,i.sqv-=Xe?.4:2.8,e.feel("happy",.8),r.poke(),Xe||t.hop(3.5)))}return{run:g,emote:p,pet:u,onPoke:d,onStroke:()=>{a=[]},update:x,get rotationY(){return l},get rotationZ(){return c},get current(){return o?.id??null}}}function iu(){let i={},e={};for(let s of["body","atten","glow"])i[s]=new Te(mt[0][s]),e[s]=new Te(mt[0][s]);let t={trans:1,irid:.2,rainbow:0,rough:.14},n={...t};return{index:0,current:i,target:e,material:t,materialTarget:n,shader:{uRainbow:{value:0},uTime:{value:0}}}}function ru(i,e,t){let n=new zi,r=new Ue,s=new O,o=[],a={x:0,y:0,nx:0,ny:0,has:!1,moved:!1,over:!1,lastHit:!1};function l(p,u){let d=u.getBoundingClientRect();a.x=p.clientX,a.y=p.clientY,a.nx=(p.clientX-d.left)/d.width*2-1,a.ny=-((p.clientY-d.top)/d.height)*2+1,r.set(a.nx,a.ny),a.has=!0}function c(){return n.setFromCamera(r,i),o.length=0,n.intersectObject(e,!1,o),o[0]||null}function h(p){let u=p.face,d=t.worldToLocal(s.copy(p.point)),g=e.geometry.attributes.position.array,x=u.a,m=1/0;for(let f of[u.a,u.b,u.c]){let _=f*3,b=(g[_]-d.x)**2+(g[_+1]-d.y)**2+(g[_+2]-d.z)**2;b<m&&(m=b,x=f)}return x}return{ray:n,ndc:r,pointer:a,setNDC:l,hitTest:c,hitVertex:h,local:s}}function su(i,e,t){let{body:n,grab:r,bounds:s}=i,{HALFW:o}=e,{raycast:a,camera:l,canvas:c,slime:h,sfx:p,touch:u,hearts:d,onCount:g,physics:x}=t,m=new O,f=new O,_=!1;function b(T){_||!t.onGrab||Math.hypot(a.pointer.x-r.downX,a.pointer.y-r.downY)<7&&T-r.downT<.35||(_=!0,t.onGrab())}function M(T,C,v){let y=a.hitVertex(T);_=!1,r.on=!0,r.g=y,r.id=C,r.downX=a.pointer.x,r.downY=a.pointer.y,r.downT=v,r.maxStretch=0,r.stretch=0,l.getWorldDirection(f),r.plane.setFromNormalAndCoplanarPoint(f,T.point),r.offset.set(T.point.x-n.x,T.point.y-n.y,T.point.z-n.z),r.cursor.copy(T.point),r.target.set(n.x,n.y,n.z),r.desired.set(e.disp[y*3],e.disp[y*3+1],e.disp[y*3+2]),r.samples=[{t:v,x:T.point.x,y:T.point.y,z:T.point.z}],e.gw.fill(0);let E=[],L=[];x.forEachNear(y,.42,(B,F)=>{F>.02&&(E.push(B),L.push(F),e.gw[B]=F)}),r.list=Uint32Array.from(E),r.weights=Float32Array.from(L),c.style.cursor="grabbing"}function P(T){b(T),a.ray.setFromCamera(a.ndc,l);let C=a.ray.ray.intersectPlane(r.plane,m);if(!C)return;r.cursor.copy(C),r.samples.push({t:T,x:C.x,y:C.y,z:C.z}),r.samples.length>24&&r.samples.shift();let v=C.x-r.offset.x,y=C.y-r.offset.y,E=C.z-r.offset.z;y<0&&(E+=-y*1.25,y=0),r.target.set(qe(v,s.xL+o,s.xR-o),qe(y,0,s.yMax),qe(E,s.zMin,s.zMax));let L=h.worldToLocal(f.copy(C)),B=r.g,F=1+i.sq,N=1/Math.sqrt(F),{rest:R,restSqY:z}=e,D=L.x-R[B*3]*N,k=L.y-z(B,F),q=L.z-R[B*3+2]*N,ne=Math.hypot(D,k,q);if(ne>5.2){S("slip");return}let te=2.3,me=te*Math.tanh(ne/te),Z=ne>1e-6?me/ne:0;r.desired.set(D*Z,k*Z,q*Z);let ie=e.unit[B*3],fe=e.unit[B*3+1],ce=e.unit[B*3+2],ue=r.desired.x*ie+r.desired.y*fe+r.desired.z*ce;if(ue<-.3){let pe=ue+.3;r.desired.x-=ie*pe,r.desired.y-=fe*pe,r.desired.z-=ce*pe}r.stretch=me,r.maxStretch=Math.max(r.maxStretch,me)}function S(T="up"){if(!r.on)return;let C=performance.now()/1e3;T==="up"&&b(C),r.on=!1,_&&t.onRelease?.(),e.gw.fill(0);try{c.releasePointerCapture(r.id)}catch{}if(c.style.cursor=a.pointer.over?"grab":"",T==="cancel")return;let v=Math.hypot(a.pointer.x-r.downX,a.pointer.y-r.downY);if(T==="up"&&v<7&&C-r.downT<.35){x.poke(r.g),t.ex.squeezeUntil=C+.3,t.ex.happyUntil=C+1.5,d(a.pointer.x,a.pointer.y,2),p.poke(),g(),t.onPoke?.(C);return}let y=r.samples,E=y[y.length-1],L=0,B=0,F=0;if(E&&C-E.t<.12){let z=y[0];for(let k=y.length-1;k>=0;k--)if(E.t-y[k].t>=.07){z=y[k];break}let D=Math.max(E.t-z.t,1/60);L=(E.x-z.x)/D,B=(E.y-z.y)/D,F=(E.z-z.z)/D}let N=Math.hypot(L,B,F),R=16;N>R&&(L*=R/N,B*=R/N,F*=R/N),n.vx=n.vx*.3+L*.95,n.vy=n.vy*.3+B*.95,n.vz=n.vz*.3+F*.95,n.vy<0&&n.y<=.02&&(n.vy=0),n.air=n.y>.02||n.vy>.3,i.sqv+=1.4*r.maxStretch,(N>4||r.maxStretch>.6||T==="slip")&&(t.ex.squeezeUntil=C+.22,t.ex.happyUntil=C+1.4,p.boing(Math.min(1,Math.max(N/14,r.maxStretch/2))),g())}return{begin:M,update:P,release:S}}function ou(i){let{canvas:e,camera:t,world:n,geometry:r,raycast:s,grabCtl:o,physics:a,sfx:l,doJump:c,setFlavor:h,push:p,ex:u,counterPlane:d,onCount:g,touch:x,touches:m}=i,{body:f,grab:_,pinch:b}=n,{HALFW:M,FLOOR:P,N:S,unit:T}=r,C=[],v=()=>!i.isActive||i.isActive();function y(R,z,D,k){let q=ne=>{v()&&D(ne)};R.addEventListener(z,q,k),C.push(()=>R.removeEventListener(z,q,k))}let E=(R,z,D)=>y(e,R,z,D),L={t:0,x:0,y:0},B=new O;E("pointerdown",R=>{if(R.button!==0&&R.pointerType==="mouse")return;let z=performance.now()/1e3;if(l.unlock(),R.pointerType==="touch"){m.set(R.pointerId,{x:R.clientX,y:R.clientY});try{e.setPointerCapture(R.pointerId)}catch{}if(m.size===2){o.release("cancel");for(let te of m.keys())try{e.setPointerCapture(te)}catch{}let[q,ne]=[...m.values()];b.touchStart=Math.hypot(q.x-ne.x,q.y-ne.y)||1,b.touchBase=b.value;return}if(m.size>2)return}s.setNDC(R,e),x(z);let D=s.hitTest(),k=z-L.t<.33&&Math.hypot(R.clientX-L.x,R.clientY-L.y)<40;if(L={t:z,x:R.clientX,y:R.clientY},!D){s.ray.setFromCamera(s.ndc,t),d.constant=-P;let q=s.ray.ray.intersectPlane(d,B);if(u.surpriseUntil=z+.4,q&&!Xe){let ne=q.x-f.x,te=q.z-f.z,me=Math.hypot(ne,te),Z=Math.min(me,4.5);me>.01&&(ne*=Z/me,te*=Z/me);let ie=4.2+Z*.35,fe=2*ie/26;a.hop(ie,qe(ne/fe*.8,-9,9),qe(te/fe*.8,-9,9))&&l.jump()}else k&&c();return}if(k){c();return}try{e.setPointerCapture(R.pointerId)}catch{}o.begin(D,R.pointerId,z)}),E("pointermove",R=>{if(R.pointerType==="touch"&&m.has(R.pointerId)&&(m.set(R.pointerId,{x:R.clientX,y:R.clientY}),m.size===2)){let[z,D]=[...m.values()],k=Math.hypot(z.x-D.x,z.y-D.y);b.value=qe(b.touchBase+(k/b.touchStart-1)*.9,-.45,.85),b.last=performance.now()/1e3;return}s.setNDC(R,e),s.pointer.moved=!0,x(performance.now()/1e3)});let F=R=>{let z=R.type==="pointercancel";if(R.pointerType==="touch"){let D=m.size>=2;m.delete(R.pointerId),D&&(b.last=-10,b.value=0),!D&&(!_.on||_.id===R.pointerId)&&(z||s.setNDC(R,e),o.release(z?"cancel":"up")),s.pointer.has=m.size>0,s.pointer.moved=!1,s.pointer.over=!1,s.pointer.lastHit=!1,e.style.cursor="";return}if(!(_.on&&_.id!==R.pointerId)){if(z){o.release("cancel"),s.pointer.has=!1;return}s.setNDC(R,e),o.release("up")}};E("pointerup",F),E("pointercancel",F),E("lostpointercapture",R=>{_.on&&_.id===R.pointerId&&(o.release("cancel"),m.delete(R.pointerId),s.pointer.has=!1,s.pointer.lastHit=!1)}),E("pointerleave",R=>{!_.on&&R.pointerType==="mouse"&&(s.pointer.has=!1,s.pointer.over=!1,s.pointer.lastHit=!1,e.style.cursor="")}),E("contextmenu",R=>R.preventDefault()),E("wheel",R=>{R.preventDefault();let z=performance.now()/1e3;x(z);let D=R.deltaMode===1?16:R.deltaMode===2?400:1,k=R.deltaX*D,q=R.deltaY*D;if(R.ctrlKey){b.value=qe(b.value-q*.012,-.45,.85),b.last=z;return}_.on||(p(qe(-k*.022,-2.4,2.4),qe(-q*.018,-2,2)),Math.abs(k)+Math.abs(q)>6&&(n.sqv+=.12))},{passive:!1});let N=0;return E("gesturestart",R=>{R.preventDefault(),N=b.value}),E("gesturechange",R=>{R.preventDefault(),b.value=qe(N+(R.scale-1)*.9,-.45,.85),b.last=performance.now()/1e3}),E("gestureend",R=>{R.preventDefault(),b.last=-10}),y(window,"keydown",R=>{if(R.isComposing||R.keyCode===229)return;let z=R.target&&R.target.tagName||"";if(["BUTTON","A","INPUT","SELECT","TEXTAREA"].includes(z)||R.target?.closest?.("dialog[open]"))return;let D=performance.now()/1e3,k={ArrowLeft:[-4,0],ArrowRight:[4,0],ArrowUp:[0,-3.5],ArrowDown:[0,3.5]};if(R.code==="Space")R.preventDefault(),l.unlock(),x(D),c();else if(R.key==="Enter"){R.preventDefault(),l.unlock(),x(D);let q=0,ne=-1/0;for(let te=0;te<S;te++){let me=T[te*3+2]-Math.abs(T[te*3+1]+.25);me>ne&&(ne=me,q=te)}a.poke(q),u.squeezeUntil=D+.3,u.happyUntil=D+1.5,l.poke(),g(),i.onPoke?.(D)}else k[R.key]?(R.preventDefault(),x(D),p(...k[R.key]),l.wobble()):/^[1-6]$/.test(R.key)&&h(+R.key-1)}),()=>{for(let R of C)R()}}function au(i,e,t){let{FLOOR:n,TOP:r}=t,s=new O,o=()=>0,a='<svg viewBox="0 0 24 24"><path d="M12 21s-7.5-4.6-9.6-9.2C.9 8.4 3 4.5 6.7 4.5c2.2 0 3.7 1.3 4.3 2.6h2c.6-1.3 2.1-2.6 4.3-2.6 3.7 0 5.8 3.9 4.3 7.3C19.5 16.4 12 21 12 21z" fill="currentColor" stroke="#fff" stroke-width="1.6" stroke-linejoin="round"/></svg>';function l(p,u,d=4){Xe&&(d=Math.min(d,1));for(let g=0;g<d;g++){let x=document.createElement("span");x.className="fx-heart",x.innerHTML=a,x.style.color=g%2?"var(--accent-deep)":"#FF6F9E",x.style.left=p+"px",x.style.top=u+"px";let m=-Math.PI/2+(Math.random()-.5)*2.2,f=60+Math.random()*70;x.style.setProperty("--dx",(Math.cos(m)*f).toFixed(1)+"px"),x.style.setProperty("--dy",(Math.sin(m)*f).toFixed(1)+"px"),x.style.setProperty("--rot",((Math.random()-.5)*60).toFixed(1)+"deg"),x.style.setProperty("--s",(14+Math.random()*12).toFixed(0)+"px"),x.style.setProperty("--d",(.9+Math.random()*.6).toFixed(2)+"s"),Xa.appendChild(x),x.addEventListener("animationend",()=>x.remove())}}function c(){return e.localToWorld(s.set(0,n+(r-n)*(1+o()),0)),s.project(i),{x:(s.x*.5+.5)*innerWidth,y:(-s.y*.5+.5)*innerHeight}}function h(){let p=c(),u=document.createElement("span");u.className="fx-z",u.textContent="z",u.style.left=p.x+40+"px",u.style.top=p.y+10+"px",u.style.setProperty("--s",(18+Math.random()*12).toFixed(0)+"px"),Xa.appendChild(u),u.addEventListener("animationend",()=>u.remove())}return{hearts:l,zzz:h,slimeScreenTop:c,useSquash:p=>{o=p}}}function cu(i,e,t){function n(u){let d=document.createElement("canvas");d.width=d.height=256;let g=d.getContext("2d"),x=g.createRadialGradient(128,128,0,128,128,128);for(let[f,_]of u)x.addColorStop(f,`rgba(255,255,255,${_})`);g.fillStyle=x,g.fillRect(0,0,256,256);let m=new kn(d);return m.colorSpace=tn,m}let r=n([[0,1],[.45,.55],[.75,.15],[1,0]]),s=new Te("#3A414B"),o=(u,d)=>{let g=new ke(new Gt(1,1),new Vt({color:u,alphaMap:r,transparent:!0,depthWrite:!1,opacity:d,toneMapped:!1}));return g.rotation.x=-Math.PI/2,i.add(g),g},a=o(s,.1),l=o(s,.3),c=o(e,.5);function h(u,d,g){let x=1+d,m=Math.max(0,u.y),f=1/Math.sqrt(x),_=t+.004,b=1/(1+m*.8);l.position.set(u.x+.05,_,u.z-.05),l.scale.set(2.1*f*(1+m*.15),1.3*f*(1+m*.15),1),l.material.opacity=.3*b,a.position.set(u.x-.15,_-.001,u.z-.2),a.scale.set(3.4*f*(1+m*.2),2*f,1),a.material.opacity=.09*b,c.position.set(u.x+.1,_+.001,u.z+.35),c.scale.set(2.5*f,1.4*f,1),c.material.opacity=.5*b*(1-.5*g)}function p(){for(let u of[a,l,c])i.remove(u),u.geometry.dispose(),u.material.dispose();r.dispose()}return{shadowSoft:a,shadowCore:l,pool:c,update:h,dispose:p}}function Ls(i,e,t){let{canvas:n,counter:r,sfx:s,coarse:o,touches:a,isActive:l,splash:c}=t,h=iu(),p=jl(i,h,o,t),{geometry:u,slime:d,mesh:g,material:x,face:m,bubbles:f}=p,_=Kl(u),b=eu(_,u),M=ru(e,g,d),P=au(e,d,u),S=cu(i,h.current.body,u.FLOOR),T=new Mt(new O(0,1,0),-u.FLOOR),C,v=tu(_,{face:m,physics:b,sfx:s,counter:r,fx:P,raycast:M,camera:e,slime:d,canvas:n,touches:a,prevHitLocal:new O,strokeV:new O,projPoint:new O,flavorId:()=>mt[h.index].id,splash:(te,me)=>c?.(te,_.body,me),onStroke:()=>C?.onStroke(),roomMode:t.roomMode});C=nu(_,{expression:v,physics:b,counter:r,sfx:s,fx:P});let y=su(_,u,{raycast:M,camera:e,canvas:n,slime:d,sfx:s,physics:b,ex:v.ex,touch:v.touch,hearts:P.hearts,onCount:r.bump,onPoke:C.onPoke,onGrab:t.onGrab&&(()=>{v.ex.resisting=!0,v.feel("angry",1.35,.85),_.sqv-=.85,t.onGrab()}),onRelease:()=>{v.ex.resisting=!1,v.feel("angry",.8,.55)}});P.useSquash(()=>_.sq);let E=0,L=()=>{},B=0,F=new Te(1,1,1),N=(t.radius??1.16)/1.16,R=Object.keys(h.current),z=Object.keys(h.material);function D(te){if(!mt[te])return;h.index=te;let me=mt[te];for(let Z of Object.keys(h.target))h.target[Z].set(me[Z]);Object.assign(h.materialTarget,{trans:me.trans,irid:me.irid,rainbow:me.rainbow,rough:me.rough})}function k(te){L=ou({canvas:n,camera:e,world:_,geometry:u,raycast:M,grabCtl:y,physics:b,sfx:s,counterPlane:T,touches:a,ex:v.ex,touch:v.touch,onCount:r.bump,onPoke:C.onPoke,doJump:()=>C.run("jump"),setFlavor:te,push:b.push,isActive:l})}function q(te,me,Z){h.shader.uTime.value=me;let ie=1-Math.exp(-te*5);for(let ue of R)h.current[ue].lerp(h.target[ue],ie);for(let ue of z)h.material[ue]+=(h.materialTarget[ue]-h.material[ue])*ie;x.color.copy(h.current.body),x.attenuationColor.copy(h.current.atten),x.transmission=h.material.trans,x.iridescence=h.material.irid,x.roughness=h.material.rough,h.shader.uRainbow.value=h.material.rainbow,S.pool.material.color.copy(h.current.body),l()?v.hover(te,Z):(M.pointer.has=!1,M.pointer.lastHit=!1),_.grab.on&&y.update(Z),Z-_.pinch.last>.16&&(_.pinch.value=0),v.idle(me,Z),C.update(me,Z);let fe=t.voiceFrame?.(te);if(fe){m.speech.value.set(fe.open,fe.round);let ue=Xe?.22:1,pe=v.ex.resisting?.5:1;_.sqTarget-=(fe.open*.035+fe.pulse*.06)*ue*pe,v.ex.resisting&&(_.sqTarget-=(.025+.024*Math.sin(me*25))*ue);let j=_.grab.on?0:fe.open*Math.sin(me*9)*.08*ue;B+=(j-B)*(1-Math.exp(-14*te))}let ce=!1;if(v.started&&!v.ex.pose){E+=te;let ue=0;for(;E>=Is&&ue<qa;)b.step(Is),E-=Is,ue++;ue===qa&&(E=0),ce=ue>0}else E=0;v.drainEvents(Z),ce&&b.writeGeometry(),v.updateFace(te,me,Z),v.updateGaze(te,me),d.position.set(_.body.x,_.body.y,_.body.z),d.rotation.set(0,v.yaw+C.rotationY,C.rotationZ+B);for(let ue of f){let pe=ue.userData;pe.phase=(pe.phase+te*pe.speed*(Xe?.3:1))%1;let j=u.TOP-u.FLOOR,ye=u.FLOOR+j*(.12+pe.phase*.7),oe=pe.rad*N*Math.sin(Math.PI*pe.phase);ue.position.set(Math.cos(pe.ang+me*.2)*oe*.9,u.FLOOR+(ye-u.FLOOR)*(1+_.sq),-.25*N+Math.sin(pe.ang+me*.2)*oe*.5),ue.scale.setScalar(pe.size*N*(.3+.7*Math.sin(Math.PI*pe.phase)))}if(S.update(_.body,_.sq,h.material.rainbow),N!==1)for(let ue of[S.shadowSoft,S.shadowCore,S.pool])ue.scale.multiplyScalar(N)}function ne(){L(),y.release("cancel"),b.dispose(),S.dispose(),p.dispose()}return{...p,palette:h,world:_,physics:b,raycast:M,fx:P,expression:v,actions:C,grabCtl:y,bind:k,update:q,setFlavor:D,dispose:ne,attenuation:()=>h.current.atten.clone().lerp(F,.3+.7*h.material.rainbow)}}function lu(i,{scene:e,camera:t,store:n,creatureOptions:r,onCreate:s,onRemove:o,counter:a,sfx:l}){let c=null,h=0,p=0,u=0;function d(m){!!c!=!!m&&(m?(c=Ls(e,t,{...r,detail:r.coarse?10:14,radius:.78,floor:i.geometry.FLOOR,isActive:()=>r.isFriendActive(c)}),c.world.body.y=0,c.world.body.air=!1,c.world.body.x=Math.min(i.world.bounds.xR-c.geometry.HALFW,i.world.body.x+1.9),c.world.body.z=i.world.body.z,c.setFlavor(7),c.expression.started=!0,c.physics.writeGeometry(),s(c)):(o(c),c.dispose(),c=null,h=0),n.update({companion:m}))}function g(){if(!c)return!1;i.grabCtl.release("cancel"),c.grabCtl.release("cancel"),i.expression.feel("affection",3),c.expression.feel("affection",3),i.world.body.vx=c.world.body.vx=0,i.world.body.vz=c.world.body.vz=0,h=performance.now()/1e3+2.8;let m=i.fx.slimeScreenTop();return i.fx.hearts(m.x+30,m.y+35,6),a.bump(),l.flavor(),!0}function x(m,f){if(!c)return;Object.assign(c.world.bounds,i.world.bounds);let _=i.world.body,b=c.world.body;if(i.expression.ex.pose||c.expression.ex.pose)return;if(f<h&&!i.world.grab.on&&!c.world.grab.on){let C=(i.geometry.HALFW+c.geometry.HALFW)*.72,v=(_.x+b.x)/2,y=1-Math.exp(-m*4);_.x+=(v-C/2-_.x)*y,b.x+=(v+C/2-b.x)*y,b.z+=(_.z-b.z)*y,i.world.sqTarget=c.world.sqTarget=-.025;return}let M=b.x-_.x,P=b.z-_.z,S=Math.hypot(M,P),T=(i.geometry.HALFW+c.geometry.HALFW)*.82;if(S<T&&Math.abs(_.y-b.y)<1){let C=S>.001?M/S:1,v=S>.001?P/S:0,y=Math.min(.18,T-S);i.world.grab.on||(_.x-=C*y*.4,_.z-=v*y*.4),c.world.grab.on||(b.x+=C*y*.6,b.z+=v*y*.6),f-u>1.5&&(u=f,i.expression.ex.happyUntil=c.expression.ex.happyUntil=f+1,i.world.sqv-=.5,c.world.sqv-=.5)}f>p&&!Xe&&!b.air&&!c.world.grab.on&&(p=f+5+Math.random()*3,S>3?c.physics.hop(3.4,-M/S*2.8,-P/S*2.8):_.air&&(c.physics.hop(3.6),c.expression.ex.happyUntil=f+1))}return{setEnabled:d,hug:g,update:x,get friend(){return c},get enabled(){return!!c}}}var Mr=class i extends ke{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.camera=new xt;let n=this,r=t.color!==void 0?new Te(t.color):new Te(8355711),s=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,l=t.shader||i.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,h=new Mt,p=new O,u=new O,d=new O,g=new tt,x=new O(0,0,-1),m=new je,f=new O,_=new O,b=new je,M=new tt,P=this.camera,S=new Jt(s,o,{samples:c,type:ii}),T=new Dt({name:l.name!==void 0?l.name:"unspecified",uniforms:ka.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});T.uniforms.tDiffuse.value=S.texture,T.uniforms.color.value=r,T.uniforms.textureMatrix.value=M,this.material=T,this.onBeforeRender=function(C,v,y){if(u.setFromMatrixPosition(n.matrixWorld),d.setFromMatrixPosition(y.matrixWorld),g.extractRotation(n.matrixWorld),p.set(0,0,1),p.applyMatrix4(g),f.subVectors(u,d),f.dot(p)>0)return;f.reflect(p).negate(),f.add(u),g.extractRotation(y.matrixWorld),x.set(0,0,-1),x.applyMatrix4(g),x.add(d),_.subVectors(u,x),_.reflect(p).negate(),_.add(u),P.position.copy(f),P.up.set(0,1,0),P.up.applyMatrix4(g),P.up.reflect(p),P.lookAt(_),P.far=y.far,P.updateMatrixWorld(),P.projectionMatrix.copy(y.projectionMatrix),M.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),M.multiply(P.projectionMatrix),M.multiply(P.matrixWorldInverse),M.multiply(n.matrixWorld),h.setFromNormalAndCoplanarPoint(p,u),h.applyMatrix4(P.matrixWorldInverse),m.set(h.normal.x,h.normal.y,h.normal.z,h.constant);let E=P.projectionMatrix;b.x=(Math.sign(m.x)+E.elements[8])/E.elements[0],b.y=(Math.sign(m.y)+E.elements[9])/E.elements[5],b.z=-1,b.w=(1+E.elements[10])/E.elements[14],m.multiplyScalar(2/m.dot(b)),E.elements[2]=m.x,E.elements[6]=m.y,E.elements[10]=m.z+1-a,E.elements[14]=m.w,n.visible=!1;let L=C.getRenderTarget(),B=C.xr.enabled,F=C.shadowMap.autoUpdate;C.xr.enabled=!1,C.shadowMap.autoUpdate=!1,C.setRenderTarget(S),C.state.buffers.depth.setMask(!0),C.autoClear===!1&&C.clear(),C.render(v,P),C.xr.enabled=B,C.shadowMap.autoUpdate=F,C.setRenderTarget(L);let N=y.viewport;N!==void 0&&C.state.viewport(N),n.visible=!0},this.getRenderTarget=function(){return S},this.dispose=function(){S.dispose(),n.material.dispose()}}};Mr.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};function uu(i,{floorY:e,DPR:t,wallZ:n,getFrameNo:r}){let s={name:"MarbleCounter",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null},uBase:{value:new Te("#F4F3F0")},uVein:{value:new Te("#8C8F95")},uWarm:{value:new Te("#DCD5CB")},uWallZ:{value:n},uFocal:{value:10},uPattern:{value:0}},vertexShader:`
      uniform mat4 textureMatrix;
      varying vec4 vUv;
      varying vec3 vWorld;
      void main(){
        vUv = textureMatrix * vec4(position, 1.0);
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorld = wp.xyz;
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,fragmentShader:`
      uniform sampler2D tDiffuse;
      uniform vec3 uBase; uniform vec3 uVein; uniform vec3 uWarm;
      uniform float uWallZ; uniform float uFocal;
      uniform float uPattern;
      varying vec4 vUv;
      varying vec3 vWorld;
      float hash(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
      float vnoise(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(mix(hash(i), hash(i + vec2(1, 0)), u.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), u.x), u.y); }
      float fbm(vec2 p){ float s = 0.0, a = 0.5; for (int i = 0; i < 5; i++){ s += a * vnoise(p); p = p * 2.03 + vec2(1.7, 9.2); a *= 0.5; } return s; }
      void main(){
        vec2 p = vWorld.xz * 0.3 + vec2(3.1, 1.7);
        vec2 q = vec2(fbm(p * 0.9), fbm(p * 0.9 + vec2(5.2, 1.3)));
        float f = fbm(p * 1.3 + q * 1.8);
        float v1 = abs(sin((p.x * 0.9 + p.y * 0.55) * 2.0 + f * 5.5));
        float vein = pow(1.0 - v1, 16.0);
        float v2 = abs(sin((p.x * -0.5 + p.y * 1.2) * 4.2 + fbm(p * 2.4 + q) * 7.0));
        vein += pow(1.0 - v2, 34.0) * 0.5;
        float cloud = fbm(p * 3.5 + q);
        float dist = distance(vWorld, cameraPosition);
        float blur = smoothstep(2.5, 9.0, abs(dist - uFocal));
        vein *= mix(1.0, 0.3, blur);
        cloud = mix(cloud, 0.5, blur * 0.8);
        vec3 col = uBase * (0.975 + 0.05 * cloud);
        col = mix(col, uWarm, smoothstep(0.55, 0.8, cloud) * 0.12);
        col = mix(col, uVein, clamp(vein, 0.0, 1.0) * 0.5);
        if (uPattern > 0.5 && uPattern < 1.5) {
          float grain = pow(abs(sin(vWorld.x * 3.5 + fbm(vWorld.xz * 0.7) * 2.8)), 16.0);
          col = mix(uBase, uVein, grain * 0.22 + cloud * 0.09);
        } else if (uPattern > 1.5) col = mix(uBase, uWarm, cloud * 0.16);
        col *= 0.94 + 0.07 * smoothstep(-10.0, 10.0, vWorld.x);
        col *= 1.0 - 0.14 * smoothstep(uWallZ + 1.0, uWallZ, vWorld.z);
        float bl = (0.004 + 0.01 * blur) * vUv.w;
        vec3 r = texture2DProj(tDiffuse, vUv).rgb * 0.36;
        r += texture2DProj(tDiffuse, vUv + vec4( bl, 0.0, 0.0, 0.0)).rgb * 0.16;
        r += texture2DProj(tDiffuse, vUv + vec4(-bl, 0.0, 0.0, 0.0)).rgb * 0.16;
        r += texture2DProj(tDiffuse, vUv + vec4(0.0,  bl, 0.0, 0.0)).rgb * 0.16;
        r += texture2DProj(tDiffuse, vUv + vec4(0.0, -bl, 0.0, 0.0)).rgb * 0.16;
        r = min(r, vec3(1.2));
        vec3 V = normalize(cameraPosition - vWorld);
        float fres = 0.05 + 0.95 * pow(1.0 - clamp(V.y, 0.0, 1.0), 5.0);
        float k = clamp(0.1 + 0.5 * fres, 0.0, 0.5);
        col = mix(col, r, k);
        gl_FragColor = vec4(col, 1.0);
        #include <colorspace_fragment>
      }
    `},o=new Mr(new Gt(140,60),{shader:s,textureWidth:Math.round(innerWidth*t*.5),textureHeight:Math.round(innerHeight*t*.5),clipBias:.003,multisample:0});o.rotation.x=-Math.PI/2,o.position.set(0,e,n+30),i.add(o);function a(){let l=o.onBeforeRender;o.userData.lastFrame=-1,o.onBeforeRender=function(...c){this.userData.lastFrame!==r()&&(this.userData.lastFrame=r(),l.apply(this,c))}}return{counter:o,oncePerFrame:a}}function hu(i,{id:e,W:t,H:n,s:r,X:s,Y:o}){let a=(c,h,p,u,d)=>{i.fillStyle=d,i.fillRect(c,h,p,u)},l=(c,h,p)=>{i.fillStyle="#6F865F";for(let u=0;u<7;u++)i.beginPath(),i.ellipse(c+Math.sin(u*2.5)*p*.55,h-p*(.5+u*.13),p*.23,p*.55,(u-3)*.3,0,Math.PI*2),i.fill();a(c-p*.5,h,p,p*.65,"#B38368")};if(e==="fire"){let c=i.createRadialGradient(s(0),o(2),0,s(0),o(2),13*r);c.addColorStop(0,"#F8BF63"),c.addColorStop(.44,"#DB8550"),c.addColorStop(1,"#6B382F"),i.fillStyle=c,i.fillRect(0,0,t,n);for(let p=s(-14);p<t;p+=1.18*r)a(p,0,.035*r,n,"#a64d373d");a(0,o(.47),t,.36*r,"#7C4235"),a(0,o(.53),t,.06*r,"#F5A85E"),i.save(),i.translate(s(-2.25),o(4.15)),i.rotate(-.1),a(-.85*r,-1.05*r,1.7*r,2.1*r,"#653C2D"),a(-.72*r,-.92*r,1.44*r,1.84*r,"#E4A769"),a(-.56*r,-.76*r,1.12*r,1.52*r,"#845A4A"),i.fillStyle="#DA8D55",i.beginPath(),i.arc(-.1*r,-.28*r,.21*r,0,2*Math.PI),i.fill(),i.fillStyle="#4F3C35",i.beginPath(),i.moveTo(-.56*r,.65*r),i.lineTo(-.08*r,.08*r),i.lineTo(.19*r,.44*r),i.lineTo(.56*r,.14*r),i.lineTo(.56*r,.76*r),i.lineTo(-.56*r,.76*r),i.fill(),i.restore();let h=i.createLinearGradient(0,o(6.8),0,o(3.8));h.addColorStop(0,"#402931"),h.addColorStop(1,"#74504A00"),i.fillStyle=h,i.fillRect(0,0,t,o(3.8));for(let p=0;p<11;p++)i.fillStyle=p%2?"#56363944":"#4B313552",i.beginPath(),i.ellipse(s(-12+p*2.36),o(5.4+Math.sin(p*3)*.44),(2.2+p%3*.2)*r,.91*r,.12,0,Math.PI*2),i.fill()}else if(e==="kitchen"){a(0,0,t,n,"#EEE7DC"),i.strokeStyle="#D8CEBF",i.lineWidth=.025*r;for(let c=s(-10);c<t;c+=2.4*r)i.beginPath(),i.moveTo(c,0),i.lineTo(c,n),i.stroke();a(s(-5),o(7.8),6.2*r,5.7*r,"#B8B6A1"),a(s(-4.8),o(7.6),5.8*r,5.3*r,"#FAFAEE"),a(s(-2.1),o(7.6),.1*r,5.3*r,"#CCC4B6"),a(s(-4.8),o(4.9),5.8*r,.1*r,"#CCC4B6"),a(s(2.4),o(3.1),4.6*r,.14*r,"#B18E6C");for(let c=0;c<3;c++)a(s(3+c*.85),o(4.35),.5*r,1.25*r,["#D7C0A3","#ADAF92","#D8D2C4"][c]),a(s(3+c*.85),o(4.43),.5*r,.12*r,"#927960");l(s(4),o(.6),.65*r)}else if(e==="garden"){a(0,0,t,n,"#DFE7D7"),a(0,n*.04,t,n*.35,"#F0F2E6"),i.strokeStyle="#B8C5AC",i.lineWidth=.08*r;for(let c=s(-12);c<t;c+=2*r)i.beginPath(),i.moveTo(c,0),i.lineTo(c,n),i.stroke();a(0,o(2.2),t,.1*r,"#BAC7AB");for(let[c,h,p]of[[-5,.7,1.9],[4.5,.8,2.4],[-2.8,3.5,.8],[6,4.2,1.5]])l(s(c),o(h),p*r)}else{a(0,0,t,n,"#EDE3DA");let c=[[-4.7,7.4,3.2,3.9,"#F9F3E6"],[.5,6.3,2.8,3.2,"#E7C8B3"],[3.8,7.8,2.6,4.5,"#F6EFDF"]];for(let[h,p,u,d,g]of c)a(s(h),o(p),u*r,d*r,g),a(s(h+u*.4),o(p+.1),.7*r,.25*r,"#CFB89E"),i.strokeStyle="#AA8C73",i.lineWidth=.03*r,i.beginPath(),i.ellipse(s(h+u/2),o(p-d/2),u*.24*r,d*.21*r,0,0,Math.PI*2),i.stroke();l(s(-4),o(.7),.7*r),a(s(4),o(1.25),.6*r,1.25*r,"#C7B89F");for(let h=0;h<5;h++)a(s(4.08+h*.09),o(1.9+h%2*.2),.045*r,1.2*r,["#8A9B7A","#BC8C72"][h%2])}}function du(i){let e="bathroom",t=20,n=14,r=document.createElement("canvas"),s=new kn(r);s.colorSpace=yt;let o=new ke(new Gt(1,1),new Vt({map:s,toneMapped:!1}));i.add(o);function a(c,h,p,u,d,g){c.beginPath(),c.moveTo(h+g,p),c.arcTo(h+u,p,h+u,p+d,g),c.arcTo(h+u,p+d,h,p+d,g),c.arcTo(h,p+d,h,p,g),c.arcTo(h,p,h+u,p,g),c.closePath()}function l(c,h){t=c,n=h;let p=1600,u=p/c,d=Math.round(qe(h*u,300,3200)),g=D=>(D+c/2)*u,x=D=>d-D*u,m=document.createElement("canvas");m.width=p,m.height=d;let f=m.getContext("2d"),_=f.createLinearGradient(0,x(9),0,d);_.addColorStop(0,"#E3E6E9"),_.addColorStop(.6,"#EEF0F0"),_.addColorStop(1,"#F5F5F4"),f.fillStyle=_,f.fillRect(0,0,p,d),_=f.createRadialGradient(g(9),x(4),0,g(9),x(4),9*u),_.addColorStop(0,"rgba(255,255,255,1)"),_.addColorStop(1,"rgba(255,255,255,0)"),f.fillStyle=_,f.fillRect(0,0,p,d),f.strokeStyle="rgba(160,166,174,.26)",f.lineWidth=Math.max(2,.03*u);let b=2.4*u,M=1.2*u,P=0;for(let D=d;D>-M;D-=M,P++){f.beginPath(),f.moveTo(0,D),f.lineTo(p,D),f.stroke();for(let k=P%2*b*.5+g(0)%b;k<p;k+=b)f.beginPath(),f.moveTo(k,D),f.lineTo(k,D-M),f.stroke()}let S=g(-4.2),T=7.6*u,C=x(8.5),v=7.4*u,y=.7*u,E=.12*u;f.save(),f.shadowColor="rgba(0,0,0,.1)",f.shadowBlur=.5*u,f.shadowOffsetY=.12*u,a(f,S,C,T,v,y),f.fillStyle="#CFD6DC",f.fill(),f.restore(),a(f,S+E,C+E,T-2*E,v-2*E,y-E),_=f.createLinearGradient(S,C,S+T,C+v),_.addColorStop(0,"#DCE3E9"),_.addColorStop(1,"#ECF0F3"),f.fillStyle=_,f.fill(),f.save(),a(f,S+E,C+E,T-2*E,v-2*E,y-E),f.clip(),f.fillStyle="rgba(255,255,255,.95)",f.fillRect(S+T*.6,C+v*.1,T*.22,v*.6),f.fillStyle="rgba(160,170,182,.32)",f.fillRect(S+T*.14,C+v*.18,T*.045,v*.82),f.fillStyle="rgba(205,212,220,.55)",f.fillRect(S,C+v*.8,T,v*.2),f.restore();let L=g(-2.6);f.fillStyle="#C6CBD0",a(f,L-.09*u,x(.95),.18*u,.95*u,.08*u),f.fill(),f.fillStyle="#D3D7DB",a(f,L-.09*u,x(.95),.62*u,.14*u,.07*u),f.fill(),f.fillStyle="rgba(255,255,255,.85)",f.fillRect(L-.04*u,x(.9),.035*u,.85*u);let B=g(4.6),F=1.9*u,N=.62*u;_=f.createLinearGradient(B-N/2,0,B+N/2,0),_.addColorStop(0,"rgba(150,196,228,.8)"),_.addColorStop(.5,"rgba(214,234,247,.9)"),_.addColorStop(1,"rgba(140,186,220,.8)"),f.fillStyle=_,a(f,B-N/2,d-F,N,F,.12*u),f.fill(),f.fillStyle="#FFFFFF",a(f,B-N*.38,d-F*.78,N*.76,F*.36,.05*u),f.fill(),f.fillStyle="#F7F7F7",a(f,B-N*.3,d-F-.24*u,N*.6,.26*u,.06*u),f.fill();for(let D=0;D<7;D++)f.fillStyle=D%2?"#EFEFED":"#FFFFFF",f.beginPath(),f.ellipse(g(5.7),d-.06*u-D*.07*u,.42*u,.07*u,0,0,Math.PI*2),f.fill();_=f.createLinearGradient(0,x(.5),0,d),_.addColorStop(0,"rgba(0,0,0,0)"),_.addColorStop(1,"rgba(40,44,50,.12)"),f.fillStyle=_,f.fillRect(0,x(.5),p,.5*u),e!=="bathroom"&&hu(f,{id:e,W:p,H:d,s:u,X:g,Y:x});let R=e==="fire"?[.5,.24]:[.5,.25,.125,.07],z=m;for(let D of R){let k=document.createElement("canvas");k.width=Math.max(8,Math.round(p*D)),k.height=Math.max(8,Math.round(d*D));let q=k.getContext("2d");q.imageSmoothingQuality="high",q.drawImage(z,0,0,k.width,k.height),z=k}for(let D of e==="fire"?[.5]:[.14,.28,.5]){let k=document.createElement("canvas");k.width=Math.round(p*D),k.height=Math.round(d*D);let q=k.getContext("2d");q.imageSmoothingQuality="high",q.drawImage(z,0,0,k.width,k.height),z=k}r.width=z.width,r.height=z.height,r.getContext("2d").drawImage(z,0,0),s.needsUpdate=!0}return{wall:o,wallTex:s,paint:l,setTheme(c){e=c,l(t,n)}}}function fu(i,{floorY:e,HALFW:t,attenColor:n}){let r=new Mn(1,20,12),s=new bn({color:16777215,roughness:.02,metalness:0,transmission:1,thickness:.12,ior:1.33,clearcoat:1,envMapIntensity:1.5,attenuationColor:n.clone(),attenuationDistance:.35}),o=[];for(let p=0;p<30;p++){let u=new ke(r,s);u.visible=!1,u.userData={life:0,max:1,r:.05},i.add(u),o.push(u)}let a=0;function l(p,u,d,g=10+Math.random()*8){let x=o[a];a=(a+1)%o.length,x.userData={life:g,max:g,r:d},x.position.set(p,e+d*.28,u),x.visible=!0}function c(p,u,d=1){for(let g=0;g<p;g++){let x=Math.random()*Math.PI*2,m=t*(1.02+Math.random()*.45*d);l(u.x+Math.cos(x)*m,u.z+Math.sin(x)*m*.85,.025+Math.random()*.055)}}function h(p,u){for(let d of o){if(!d.visible)continue;let g=d.userData,x=Math.hypot(d.position.x-u.x,d.position.z-u.z)<t*.9&&u.y<.3;if(g.life-=p*(x?8:1),g.life<=0){d.visible=!1;continue}let m=Math.min(1,g.life/Math.min(2.5,g.max));d.scale.set(g.r*m,g.r*.45*m,g.r*m),d.position.y=e+g.r*.18*m}}return{addDrop:l,splashDrops:c,update:h,dropMat:s}}function pu(i,e,{counter:t,wall:n,paintWall:r,body:s,bounds:o,geometry:a,wallZ:l}){let{HALFW:c,FLOOR:h,TOP:p}=a,u={d:10,target:new O,base:new O,tilt:0},d=new O,g=0,x=0,m=0;function f(){let b=innerWidth,M=innerHeight,P=b/M,S=Math.min(devicePixelRatio||1,2);if(b===g&&M===x&&S===m)return;g=b,x=M,m=S,e.getPixelRatio()!==S&&e.setPixelRatio(S),e.setSize(b,M,!1),t.getRenderTarget().setSize(Math.max(1,Math.round(b*S*.5)),Math.max(1,Math.round(M*S*.5))),i.aspect=P;let T=P<.9;i.fov=T?40:30;let C=Math.tan(Sn.degToRad(i.fov/2)),v=2*c,y=p-h,E=v/((T?.5:.24)*2*C*P),L=y/(.3*2*C),B=Math.max(E,L);u.d=B,u.tilt=Sn.degToRad(T?15:12);let F=2*B*C,N=T?.54:.6,R=(h+p)/2;u.target.set(0,R+(N-.5)*F,0),u.base.set(0,u.target.y+Math.sin(u.tilt)*B,Math.cos(u.tilt)*B),i.position.copy(u.base),i.lookAt(u.target),i.updateProjectionMatrix(),i.updateMatrixWorld();let z=0;for(let te=0;te<8&&(d.set(0,h,te+c).project(i),!(d.y<(T?-.62:-.8)));te+=.05)z=te;o.zMax=z;let D=u.base.z-l,k=2*D*C*P*1.5+8,ne=u.base.y+D*(Math.tan(u.tilt)+C)*1.3+2-h;n.scale.set(k,ne,1),n.position.set(0,h+ne/2,l),r(k,ne)}function _(){d.set(0,h+.8,s.z).project(i);let b=d.x;d.set(1,h+.8,s.z).project(i);let M=d.x-b;o.xL=(-.985-b)/M,o.xR=(.985-b)/M,d.set(s.x,p,s.z).project(i);let P=d.y;d.set(s.x,p+1,s.z).project(i);let S=d.y;o.yMax=qe((.72-P)/(S-P),.4,5)}return{view:u,layout:f,updateBounds:_}}function mu(i,e,t,n){let r="bathroom";function s(o){let a=En.find(c=>c.id===o);if(!a)return!1;r=o,i.background.set(a.background);let l=e.material.uniforms;return l.uBase.value.set(a.base),l.uVein.value.set(a.vein),l.uWarm.value.set(a.warm),l.uPattern.value=a.pattern,t.setTheme(o),document.documentElement.dataset.theme=o,document.documentElement.style.setProperty("--bg",a.background),n.update({theme:o}),!0}return{setTheme:s,get current(){return r}}}function gu(i,e){let t=new Ht,n=new $t({color:16113072,roughness:.31}),r=new $t({color:3611410,roughness:.5}),s=[[0,0],[.24,0],[.29,.035],[.33,.13],[.37,.61],[.36,.65],[.32,.65],[.31,.61],[.27,.13],[.23,.075],[0,.075]],o=new ke(new gs(s.map(([v,y])=>new Ue(v,y)),32),n),a=new ke(new vs(.18,.052,10,24),n);a.position.set(.37,.33,0),a.scale.x=.85;let l=new ke(new ys(.318,32),r);l.rotation.x=-Math.PI/2,l.position.y=.59,t.add(o,a,l),i.add(t);let c=new O(-1.95,e+.006,-.35),h=new O,p=new O,u=new O,d=.14,g,x=!1;function m(){t.position.copy(c),t.rotation.set(0,d,0)}m();function f(v,y,E){c.x=qe(v,E.xL+.58,E.xR-.58),c.z=qe(y,E.zMin+.2,E.zMax-.2),g||m()}function _(){g&&((g.phase==="approach"||g.phase==="carry")&&g.actor.physics.cancelHop(),g=null,m())}function b(v,y="drink"){if(!i.visible||!Cs.includes(y)||g&&g.phase!=="held"||v.world.grab.on||v.expression.ex.pose)return!1;if(g?.phase==="held"&&y==="pick_mug"||!g&&y==="put_mug")return!0;v.expression.touch(performance.now()/1e3,{wakeHop:!1});let E=g?.phase==="held";return g={actor:v,kind:y,phase:"approach",time:0},E&&P(),!0}function M(v){g.phase=v,g.time=0,p.copy(t.position)}function P(){let{actor:v,kind:y}=g,{body:E,bounds:L}=v.world;if(y==="drink"){M("sip");return}if(y==="pick_mug"){M("held");return}if(y==="bring_mug"){M("carry");return}if(y==="put_mug"){u.copy(c),M("setdown");return}u.set(E.x<0?L.xL+.95:L.xR-.95,c.y,L.zMin+.3),M("toss")}function S(v,y,E,L){let{body:B,bounds:F}=v.world,N=v.geometry.HALFW,R=qe(y,F.xL+N,F.xR-N)-B.x,z=qe(E,F.zMin,F.zMax)-B.z,D=Math.hypot(R,z)>L;return D&&!B.air&&v.physics.hop(Xe?2.5:3.5,qe(R*2.4-B.vx,-5,5),qe(z*2.4-B.vz,-5,5)),!D&&!B.air}function T(){c.copy(u),g=null,m()}function C(v){if(!g)return;let{actor:y}=g,{body:E,bounds:L,grab:B,sq:F}=y.world;if(B.on||y.expression.ex.pose){_();return}let{HALFW:N,FLOOR:R,TOP:z}=y.geometry;g.time+=v;let{phase:D,time:k}=g;if(h.set(E.x+N*.43,R+E.y+.37,E.z+N*.72+.19),D==="approach"){if(k>6){_();return}S(y,c.x,c.z-N-.25,.67)&&M("lift")}else if(D==="lift")t.position.copy(c).lerp(h,Sn.smoothstep(k,0,.42)),k>=.42&&P();else if(D==="held"||D==="carry")t.position.copy(h),D==="carry"&&(k>4||S(y,0,L.zMax-1.05,.58))&&(u.set(qe(h.x,L.xL+.58,L.xR-.58),c.y,qe(h.z,L.zMin+.2,L.zMax-.2)),M("setdown"));else if(D==="sip"){h.set(E.x+N*.23,R+E.y+(z-R)*(.49+.38*F)-.53,E.z+N*.82+.29);let q=Sn.smoothstep(k,.25,.49)*(1-Sn.smoothstep(k,.74,1.02));t.position.copy(p).lerp(h,Sn.smoothstep(k,0,.35)),t.rotation.set(-q*.56,d,-q*.13),k>=.74&&(x=!0),k>=1.02&&(u.copy(c),M("setdown"))}else{let q=D==="toss",ne=Math.min(1,k/(q?.66:.48));t.position.copy(p).lerp(u,q?ne:Sn.smoothstep(ne,0,1)),q&&(t.position.y+=Math.sin(Math.PI*ne)*(Xe?.18:.95),t.rotation.z=Math.sin(Math.PI*ne)*(Xe?.12:.85)),ne===1&&T()}}return{mesh:t,move:f,start:b,cancel:_,update:C,fit:v=>f(c.x,c.z,v),get available(){return i.visible&&!g},get state(){return g?.phase==="held"?"held":g?"moving":"counter"},get sipped(){return x}}}function yu(i,e){let t=new Ht;t.visible=!1,i.add(t);let n=new Gt(1,1);n.translate(0,.5,0);let r={value:0},s=new Dt({uniforms:{uTime:r},vertexShader:`
      varying vec2 vUv;
      varying float vSeed;
      void main() {
        vUv = uv;
        vSeed = instanceMatrix[3].x * 1.3 + instanceMatrix[3].z * 0.6;
        gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform float uTime;
      varying vec2 vUv;
      varying float vSeed;
      void main() {
        float t = uTime * 2.0 + vSeed;
        float y = vUv.y / (0.86 + 0.10 * sin(t) + 0.04 * sin(t * 2.3));
        float lean = y * y * (0.14 + 0.11 * sin(t + y * 4.0));
        float x = vUv.x - 0.50 - lean;
        float width = 0.35 * pow(max(0.0, 1.0 - y), 0.82)
          * (0.90 + 0.10 * sin(y * 16.0 + t * 1.5));
        float edge = abs(x) - width;
        if (y >= 0.99 || edge > 0.014) discard;
        vec3 outer = mix(vec3(1.0, 0.57, 0.12), vec3(0.92, 0.23, 0.065), y);
        float inner = 1.0 - smoothstep(0.0, 0.025, abs(x + y * 0.06) - width * 0.59 + y * 0.09);
        vec3 hot = mix(vec3(1.0, 0.93, 0.57), vec3(1.0, 0.75, 0.25), y);
        vec3 flame = mix(outer, hot, inner * (1.0 - smoothstep(0.62, 0.8, y)));
        flame = mix(vec3(0.49, 0.13, 0.06), flame, 1.0 - smoothstep(-0.03, 0.01, edge));
        gl_FragColor = vec4(flame, 1.0);
      }
    `}),o=[[-5.2,-3.9,1.6,4.2],[-4.3,-3.8,1.9,3.3],[-3.4,-3.6,1.55,4.2],[-2.65,-3.5,1.9,3.1],[-1.6,-3.6,1.55,1.65],[-.65,-3.7,1.55,1.05],[.3,-3.6,1.45,1.2],[1.2,-3.7,1.65,2.05],[2.25,-3.55,1.8,3.1],[3.1,-3.5,1.7,4.4],[4.1,-3.7,1.8,3.15],[5.1,-3.8,1.85,4.3],[-5.4,.8,2.2,3.8],[-4.05,1.5,1.65,2.85],[-3.25,1.9,1.2,1.9],[3.25,1.9,1.6,2.3],[4.3,1.4,1.8,3.2],[5.3,.9,1.95,4.3]],a=new ps(n,s,o.length),l=new vt;o.forEach(([x,m,f,_],b)=>{l.position.set(x,e+.01,m),l.scale.set(f,_,1),l.updateMatrix(),a.setMatrixAt(b,l.matrix)}),t.add(a);let c=new Float32Array(108),h=new Ct;h.setAttribute("position",new bt(c,3).setUsage(vr));let p=new ms(h,new gr({color:16761189,size:.052,transparent:!0,opacity:.85,depthWrite:!1}));p.frustumCulled=!1,t.add(p);let u=gu(t,e),d=new Bi(16742715,9,14,2);d.position.set(-2.5,e+2.3,2),t.add(d);let g=-1;return{mug:u,set enabled(x){t.visible&&!x&&u.cancel(),t.visible=x},update(x){if(!t.visible)return;let m=Xe?0:x;if(r.value=m,d.intensity=9+1.4*Math.sin(m*8)+.8*Math.sin(m*13.1),!(m-g<1/30)){g=m;for(let f=0;f<c.length/3;f++){let _=(m*(.13+f%5*.026)+f*.618)%1;c[f*3]=Math.sin(f*19.73)*5.5+Math.sin(_*4+f)*.35,c[f*3+1]=e+.4+5.6*_,c[f*3+2]=-3.25+f%3*.85}h.attributes.position.needsUpdate=!0}}}}function xu({scene:i,camera:e,canvas:t,floor:n,store:r,counter:s,sfx:o,getActors:a,getActive:l,mug:c,canInteract:h=()=>!0}){let p="none",u=[],d=null,g=new zi,x=new Ue,m=new O,f=new Mt(new O(0,1,0),-n-.3),_=new WeakMap;function b(){if(d){try{t.releasePointerCapture(d.id)}catch{}d=null}t.style.cursor=""}function M(){b();let F=new Set;for(let N of u)i.remove(N),N.geometry.dispose(),F.add(N.material);for(let N of F)N.map?.dispose(),N.dispose();u=[]}function P(F,N,R){let z=new ke(F,N);return z.position.copy(R),z.userData.vx=z.userData.vz=0,u.push(z),i.add(z),z}function S(){if(p!=="bubbles")return;M();let F=new bn({color:"#EDF7F4",roughness:.08,metalness:0,transmission:.55,thickness:.08,iridescence:.65,transparent:!0,opacity:.75,depthWrite:!1}),N=l().world.bounds,R=Math.min(3.4,(N.xR-N.xL)*.7);for(let z=0;z<8;z++){let D=.14+Math.random()*.11,k=P(new Mn(D,16,12),F,new O((z/7-.5)*R,n+1+z%3*.6,-.4+z%2*.7));Object.assign(k.userData,{radius:D,baseY:k.position.y,phase:Math.random()*6,born:performance.now()/1e3})}}function T(F){if(!Xi.some(D=>D.id===F))return;M(),p=F;let N=l(),R=N.world.bounds,z=qe(N.world.body.x+1.7,R.xL+.6,R.xR-.6);if(F==="bubbles")S();else if(F==="sponge"){let D=document.createElement("canvas");D.width=D.height=128;let k=D.getContext("2d");k.fillStyle="#DCC48C",k.fillRect(0,0,128,128),k.fillStyle="#B9A66E";for(let te=0;te<75;te++)k.beginPath(),k.arc(te*37%128,te*61%128,1+te%3,0,Math.PI*2),k.fill();let q=new kn(D);q.colorSpace=yt,P(new Mn(.68,24,16),new $t({map:q,roughness:.9}),new O(z,n+.16,N.world.body.z+.4)).scale.set(1,.25,.72)}else if(F==="ice"){let D=P(new _n(.65,.6,.65),new bn({color:"#D2E8EA",transmission:.75,thickness:.7,roughness:.15,ior:1.31,clearcoat:1}),new O(z,n+.3,N.world.body.z+.55));D.rotation.y=.3}r.update({toy:F})}function C(F){let N=t.getBoundingClientRect();x.set((F.clientX-N.left)/N.width*2-1,-(F.clientY-N.top)/N.height*2+1),g.setFromCamera(x,e)}function v(F,N=l(),R=!1){F.visible&&(F.visible=!1,N.expression.feel("happy",.7),N.world.sqv+=.5,R&&s.bump(),o.poke())}function y(F){if(d||!h()||p==="none"&&!c?.available||l().expression.ex.pose||l().world.grab.on||F.pointerType==="mouse"&&F.button!==0)return;C(F);let N=g.intersectObjects(u.filter(q=>q.visible),!1)[0],R=c?.available?g.intersectObject(c.mesh,!0)[0]:null,z=!!(R&&(!N||R.distance<N.distance)),D=z?R:N,k=g.intersectObjects(a().map(q=>q.mesh),!1)[0];if(!(!D||k&&k.distance<D.distance)){if(F.stopImmediatePropagation(),o.unlock(),l().expression.touch(performance.now()/1e3,{wakeHop:!1}),!z&&p==="bubbles"){v(D.object,l(),!0);return}d={id:F.pointerId,object:z?c.mesh:D.object,mug:z,x:F.clientX,y:F.clientY,moved:!1};try{t.setPointerCapture(F.pointerId)}catch{}t.style.cursor="grabbing"}}function E(F){if(!d||d.id!==F.pointerId)return;F.stopImmediatePropagation(),C(F);let N=g.ray.intersectPlane(f,m);if(!N)return;let R=l().world.bounds;if(d.moved||(d.moved=Math.hypot(F.clientX-d.x,F.clientY-d.y)>6),d.mug){d.moved&&c.available&&c.move(N.x,N.z,R);return}let z=p==="sponge"?.72:.5;d.object.position.x=qe(N.x,R.xL+z,R.xR-z),d.object.position.z=qe(N.z,R.zMin+.2,R.zMax-.2)}function L(F){if(!(!d||d.id!==F.pointerId)){if(F.stopImmediatePropagation(),d.mug&&!d.moved&&F.type==="pointerup"&&c.start(a()[0]),!d.mug&&p==="sponge"&&!d.moved&&F.type!=="pointercancel"){let N=l(),R=N.world.body,z=d.object.position.x-R.x,D=d.object.position.z-R.z;N.expression.touch(performance.now()/1e3,{wakeHop:!1}),N.physics.hop(Xe?3:6.2,qe(z*1.7,-5,5),qe(D*1.7,-5,5))&&(s.bump(),o.jump(),N.expression.feel("happy",1.3))}try{t.releasePointerCapture(F.pointerId)}catch{}d=null,t.style.cursor=""}}t.addEventListener("pointerdown",y),t.addEventListener("pointermove",E),t.addEventListener("pointerup",L),t.addEventListener("pointercancel",L);function B(F,N){for(let R of u){if(!R.visible)continue;p==="bubbles"&&(R.position.y=R.userData.baseY+(Xe?0:Math.sin(N*.8+R.userData.phase)*.22));for(let k of a()){if(k.expression.ex.pose)continue;let q=k.world.body,ne=R.position.x-q.x,te=R.position.z-q.z,me=Math.hypot(ne,te);if(p==="bubbles"){let Z=q.y+(k.geometry.FLOOR+k.geometry.TOP)/2;Math.hypot(ne,te,R.position.y-Z)<k.geometry.HALFW*.7+R.userData.radius&&v(R,k)}else if(p==="sponge")me<k.geometry.HALFW*.45+.5&&q.air&&q.vy<-.5&&q.y<.32&&N-(_.get(k)??0)>.8&&(q.y=.25,q.vy=Xe?2:5.2,k.world.sqv-=1.4,_.set(k,N),k.expression.feel("happy",.8),o.boing(.25));else if(me<k.geometry.HALFW*.8+.34&&q.y<.8){let Z=me>.001?ne/me:1,ie=me>.001?te/me:0;d?.object===R?k.physics.push(-Z*F*3,-ie*F*3,4):(R.position.x+=Z*F*2,R.position.z+=ie*F*2,R.rotation.y+=F*.6),k.expression.ex.surpriseUntil=N+.2}}let z=l().world.bounds,D=p==="sponge"?.72:p==="ice"?.5:R.userData.radius;R.position.x=qe(R.position.x,z.xL+D,z.xR-D),R.position.z=qe(R.position.z,z.zMin+.2,z.zMax-.2)}}return{setKind:T,moreBubbles:S,update:B,cancelDrag:b,get kind(){return p},get objects(){return u},get mugDragged(){return d?.mug===!0},dispose(){M(),t.removeEventListener("pointerdown",y),t.removeEventListener("pointermove",E),t.removeEventListener("pointerup",L),t.removeEventListener("pointercancel",L)}}}function vu(i,e){let t=e.state.plocs;function n(){oi.textContent=t<1e4?t.toLocaleString():new Intl.NumberFormat(void 0,{notation:"compact",maximumFractionDigits:1}).format(t),oi.title=t.toLocaleString(),oi.setAttribute("aria-label",t.toLocaleString())}n();let r=0;e.subscribe(o=>{t=o.plocs,n()});function s(){t=e.increment(),oi.classList.remove("bump"),oi.offsetWidth,oi.classList.add("bump"),i.dimAfter(++r)}return{bump:s,get value(){return t}}}function _u(i,e){let{touch:t,push:n,hearts:r,slimeScreenTop:s,sfx:o,i18n:a}=e;function l(u){Yi.replaceChildren(),mt.forEach((d,g)=>{let x=document.createElement("button");x.type="button",x.className="flv",x.setAttribute("aria-pressed",g===u?"true":"false");let m=d.id==="aurora"?'<span class="swatch aurora"></span>':`<span class="swatch" style="--c1:${d.body};--c2:${d.atten}"></span>`;x.innerHTML=`${m}<span class="flv-name"></span>`,x.addEventListener("click",()=>p(g)),Yi.appendChild(x)}),c(),a.onChange(c)}function c(){mt.forEach((u,d)=>{let g=Yi.children[d]?.querySelector(".flv-name");g&&(g.textContent=a.pick(u.name))})}function h(u){[...Yi.children].forEach((d,g)=>d.setAttribute("aria-pressed",g===u?"true":"false"))}function p(u,{quiet:d=!1}={}){if(!Number.isInteger(u)||!mt[u])return;let g=performance.now()/1e3;if(d||e.onTap?.(),d||t(g),u===i.index&&!d){n(Math.random()<.5?-2:2,0);return}i.index=u;let x=mt[u];for(let _ of Object.keys(i.target))i.target[_].set(x[_]);Object.assign(i.materialTarget,{trans:x.trans,irid:x.irid,rainbow:x.rainbow,rough:x.rough});let m=document.documentElement;if(m.style.setProperty("--accent",x.logo),m.style.setProperty("--accent-deep",x.deep),m.dataset.flavor=x.id,h(u),Yi.children[u]?.scrollIntoView({block:"nearest",inline:"nearest"}),e.onSelect?.(x),d)return;e.sqv+=3,n(Math.random()<.5?-1.5:1.5,0),e.ex.happyUntil=g+1.4;let f=s();r(f.x,f.y+40,4),o.flavor()}return{render:l,setFlavor:p}}function Mu({i18n:i,store:e,themes:t,toys:n,company:r,getActive:s,getActors:o,selectActor:a,photo:l,canvas:c,drinkMug:h}){let p=document.querySelector("#play-panel"),u=document.querySelector("#play-open"),d=()=>{p.close(),c.focus({preventScroll:!0})},g=[...p.querySelectorAll('[role="tab"]')],x=[...p.querySelectorAll('[role="tabpanel"]')];function m(v){g.forEach((y,E)=>{y.setAttribute("aria-selected",E===v),y.tabIndex=E===v?0:-1,x[E].hidden=E!==v})}g.forEach((v,y)=>{v.addEventListener("click",()=>m(y)),v.addEventListener("keydown",E=>{let L;E.key==="ArrowRight"?L=(y+1)%g.length:E.key==="ArrowLeft"?L=(y+g.length-1)%g.length:E.key==="Home"?L=0:E.key==="End"&&(L=g.length-1),L!==void 0&&(E.preventDefault(),m(L),g[L].focus())})}),u.addEventListener("click",()=>{C(),p.showModal()}),document.querySelector("#play-close").addEventListener("click",d),p.addEventListener("click",v=>{if(v.target===p){let y=p.getBoundingClientRect();(v.clientX<y.left||v.clientX>y.right||v.clientY<y.top||v.clientY>y.bottom)&&d()}});function f(v,y,E){let L=document.createElement("button");return L.type="button",L.className="play-choice",L.dataset.id=v.id,L.dataset.i18n=v.key,L.addEventListener("click",y),E.appendChild(L),L}let _=document.querySelector("#theme-choices");for(let v of En){let y=document.createElement("button");y.type="button",y.className="theme-choice",y.dataset.id=v.id;let E=document.createElement("span");E.className="theme-chip",E.setAttribute("aria-hidden","true"),E.style.setProperty("--theme-wall",v.background),E.style.setProperty("--theme-floor",v.base);let L=document.createElement("span");L.className="theme-name",y.append(E,L),_.appendChild(y),y.addEventListener("click",()=>{t.setTheme(v.id),C(),d()})}let b=document.querySelector("#emotion-choices");for(let v of ri)f(v,()=>{s().actions.emote(v.id),d()},b);let M=document.querySelector("#action-choices");for(let v of Rs)f(v,()=>{(v.id==="hug"?r.hug():s().actions.run(v.id))?d():v.id==="hug"&&(document.querySelector("#play-message").textContent=i.t("play.hugNeedFriend"))},M);let P=f({id:"drink",key:"action.drink"},()=>{h()&&d()},M),S=document.querySelector("#toy-choices");for(let v of Xi)f(v,()=>{n.setKind(v.id),C(),d()},S);let T=document.querySelector("#play-companion");T.addEventListener("change",()=>{r.setEnabled(T.checked),C()}),document.querySelector("#more-bubbles").addEventListener("click",()=>{n.moreBubbles(),d()}),document.querySelector("#play-pet").addEventListener("click",()=>{s().actions.pet(),d()}),document.querySelector("#photo-open").addEventListener("click",()=>{p.close(),l.open()}),document.querySelector("#target-main").addEventListener("click",()=>{a(o()[0]),C()}),document.querySelector("#target-friend").addEventListener("click",()=>{r.friend&&a(r.friend),C()});function C(){let v=e.state,y=mt.find(N=>N.id===v.flavor),E=Wi[As[v.flavor]],L=En.find(N=>N.id===t.current)?.personality;document.querySelector("#personality-note").textContent=L?i.pick(L):`${i.pick(y.name)} \xB7 ${i.t(E.key)}`,_.querySelectorAll("button").forEach((N,R)=>{N.setAttribute("aria-pressed",En[R].id===t.current),N.querySelector(".theme-name").textContent=i.pick(En[R].name)}),S.querySelectorAll("button").forEach(N=>N.setAttribute("aria-pressed",N.dataset.id===n.kind)),T.checked=r.enabled,document.querySelector("#actor-choices").hidden=!r.enabled,document.querySelector("#target-main").setAttribute("aria-pressed",s()===o()[0]),document.querySelector("#target-friend").setAttribute("aria-pressed",s()===r.friend),document.querySelector("#more-bubbles").hidden=n.kind!=="bubbles",M.querySelector('[data-id="hug"]').disabled=!r.enabled,P.hidden=t.current!=="fire";let B={sponge:"play.spongeHint",bubbles:"play.bubblesHint",ice:"play.iceHint",none:"play.objectsHint"},F=document.querySelector("#toy-help");F.dataset.i18n=B[n.kind],i.apply(p)}return C(),e.subscribe(()=>{p.open&&C()}),i.onChange(C),{open:()=>u.click(),close:d,paint:C}}function bu({renderer:i,scene:e,camera:t,canvas:n,i18n:r,getActors:s,store:o}){let a=document.querySelector("#photo-controls"),l=document.querySelector("#photo-pose"),c=document.querySelector("#photo-take"),h=document.querySelector("#photo-status"),p=document.querySelector("#photo-output"),u=document.querySelector("#photo-preview"),d=document.querySelector("#photo-download"),g=!1,x=!1,m=null;for(let P of ri){let S=document.createElement("option");S.value=P.id,S.dataset.i18n=P.key,l.appendChild(S)}r.apply(a);function f(P){if(ri.some(S=>S.id===P)){l.value=P;for(let S of s())S.grabCtl.release("cancel"),S.expression.ex.pose=P,S.physics.cancelHop(),S.world.body.y=0,S.world.body.air=!1,S.world.body.vx=S.world.body.vy=S.world.body.vz=0,S.world.sq=S.world.sqv=0,S.geometry.disp.fill(0),S.geometry.vel.fill(0),S.physics.writeGeometry(),S.slime.position.set(S.world.body.x,0,S.world.body.z),S.slime.rotation.set(0,0,0),S.face.eye.set(1,P==="happy"||P==="affection"?1:0,0,P==="sleep"?1:0),S.face.surprise.value=P==="surprise"?1:0,S.face.angry.value=P==="angry"?1:0,S.face.affection.value=P==="affection"?1:0,S.face.wink.value=P==="wink"?1:0,S.face.look.set(0,0)}}function _(){g=!0,h.textContent="",p.hidden=!0;let P=s();P.forEach((S,T)=>{S.world.body.x=P.length===1?0:T===0?-.65:1.05,S.world.body.z=0}),document.querySelector("#app").classList.add("photo-mode"),a.hidden=!1,f("happy"),c.focus()}function b(){g=!1;for(let P of s())P.expression.ex.pose="",P.expression.touch(performance.now()/1e3,{wakeHop:!1});document.querySelector("#app").classList.remove("photo-mode"),a.hidden=!0,document.querySelector("#play-open").focus()}async function M(){if(!x){x=!0,c.disabled=!0,h.textContent=r.t("photo.busy");try{i.render(e,t);let P=await new Promise((T,C)=>n.toBlob(v=>v?T(v):C(new Error("Empty photo")),"image/png"));m&&URL.revokeObjectURL(m),m=URL.createObjectURL(P),u.src=m,d.href=m,d.download=`pururu-${o.state.flavor}-${o.state.theme}.png`,p.hidden=!1;let S=document.createElement("a");S.href=m,S.download=d.download,document.body.appendChild(S),S.click(),S.remove(),h.textContent=r.t("photo.done")}catch(P){console.error("[pururu] photo:",P),h.textContent=r.t("photo.error")}finally{x=!1,c.disabled=!1}}}return l.addEventListener("change",()=>f(l.value)),c.addEventListener("click",M),document.querySelector("#photo-exit").addEventListener("click",b),addEventListener("pagehide",()=>{m&&URL.revokeObjectURL(m)}),addEventListener("keydown",P=>{g&&P.key==="Escape"&&b()}),{open:_,close:b,setPose:f,get active(){return g}}}var an={"pt-BR":{"photo.preview":"Sua foto do pururu","photo.download":"Baixar foto","play.target":"Brincar com","play.main":"Pururu","play.friend":"Amigo","play.open":"Brincar","play.title":"O cantinho do pururu","play.close":"Fechar","play.room":"Cantinho","play.games":"Brincadeiras","play.friends":"Companhia","play.themes":"Onde vamos brincar?","play.personality":"Jeitinho do sabor","play.expressions":"Uma carinha","play.actions":"Uma brincadeira","play.objects":"Um objeto","play.objectsHint":"Arraste os objetos ou toque nas bolhas.","play.spongeHint":"Toque na esponja para o pururu pular. Voc\xEA tamb\xE9m pode arrast\xE1-la.","play.bubblesHint":"Toque nas bolhas para estourar. O pururu tamb\xE9m pode peg\xE1-las!","play.iceHint":"Arraste o gelo at\xE9 o pururu e veja ele empurrar.","play.companion":"Um amigo para brincar","play.companionHint":"Os dois podem ser cutucados, arrastados e abra\xE7ados.","play.moreBubbles":"Mais bolhas","play.pet":"Fazer carinho","play.hugNeedFriend":"Ative a companhia para abra\xE7ar.","play.saved":"Seus plocs e escolhas ficam salvos neste navegador.","photo.open":"Modo foto","photo.pose":"Pose","photo.take":"Salvar foto","photo.exit":"Voltar \xE0 brincadeira","photo.busy":"Preparando a foto\u2026","photo.error":"N\xE3o foi poss\xEDvel salvar. Tente novamente.","photo.done":"Foto pronta!","emotion.happy":"Feliz","emotion.angry":"Emburrado","emotion.surprise":"Surpreso","emotion.affection":"Carinhoso","emotion.wink":"Piscadinha","emotion.sleep":"Sonolento","action.jump":"Pular","action.dance":"Dan\xE7ar","action.spin":"Rodopiar","action.sneeze":"Espirrar","action.nap":"Cochilar","action.hug":"Abra\xE7ar","action.drink":"Tomar caf\xE9","toy.none":"Sem objeto","toy.sponge":"Esponja","toy.bubbles":"Bolhas","toy.ice":"Gelo","personality.curious":"Curioso: vive explorando o cantinho.","personality.affectionate":"Carinhoso: adora receber aten\xE7\xE3o.","personality.calm":"Tranquilo: brinca num ritmo mais suave.","personality.mischievous":"Travesso: faz gra\xE7a e emburra mais f\xE1cil.","personality.dreamy":"Sonhador: prefere brincar devagar e cochilar.","personality.energetic":"El\xE9trico: cheio de energia para pequenos pulos."},en:{"photo.preview":"Your pururu photo","photo.download":"Download photo","play.target":"Play with","play.main":"Pururu","play.friend":"Friend","play.open":"Play","play.title":"Pururu\u2019s little corner","play.close":"Close","play.room":"Room","play.games":"Playtime","play.friends":"Company","play.themes":"Where shall we play?","play.personality":"Flavor personality","play.expressions":"A little face","play.actions":"Something to do","play.objects":"A toy","play.objectsHint":"Drag the toys or tap the bubbles.","play.spongeHint":"Tap the sponge to make pururu hop. You can drag it, too.","play.bubblesHint":"Tap bubbles to pop them. Pururu can catch them, too!","play.iceHint":"Drag the ice towards pururu and watch it push back.","play.companion":"A friend to play with","play.companionHint":"Both friends can be poked, dragged and hugged.","play.moreBubbles":"More bubbles","play.pet":"Give a little pat","play.hugNeedFriend":"Turn on company to give a hug.","play.saved":"Your plocs and choices are saved in this browser.","photo.open":"Photo mode","photo.pose":"Pose","photo.take":"Save photo","photo.exit":"Back to play","photo.busy":"Preparing photo\u2026","photo.error":"Could not save. Please try again.","photo.done":"Photo ready!","emotion.happy":"Happy","emotion.angry":"Grumpy","emotion.surprise":"Surprised","emotion.affection":"Affectionate","emotion.wink":"Wink","emotion.sleep":"Sleepy","action.jump":"Hop","action.dance":"Dance","action.spin":"Spin","action.sneeze":"Sneeze","action.nap":"Nap","action.hug":"Hug","action.drink":"Drink coffee","toy.none":"No toy","toy.sponge":"Sponge","toy.bubbles":"Bubbles","toy.ice":"Ice","personality.curious":"Curious: always exploring the room.","personality.affectionate":"Affectionate: loves a little attention.","personality.calm":"Calm: plays at a gentler pace.","personality.mischievous":"Mischievous: playful, but gets grumpy sooner.","personality.dreamy":"Dreamy: likes slow play and little naps.","personality.energetic":"Energetic: always ready for a little hop."},es:{"photo.preview":"Tu foto de pururu","photo.download":"Descargar foto","play.target":"Jugar con","play.main":"Pururu","play.friend":"Amigo","play.open":"Jugar","play.title":"El rinconcito de pururu","play.close":"Cerrar","play.room":"Rinc\xF3n","play.games":"Juegos","play.friends":"Compa\xF1\xEDa","play.themes":"\xBFD\xF3nde jugamos?","play.personality":"Personalidad del sabor","play.expressions":"Una carita","play.actions":"Una actividad","play.objects":"Un objeto","play.objectsHint":"Arrastra los objetos o toca las burbujas.","play.spongeHint":"Toca la esponja para que pururu salte. Tambi\xE9n puedes arrastrarla.","play.bubblesHint":"Toca las burbujas para reventarlas. \xA1Pururu tambi\xE9n puede atraparlas!","play.iceHint":"Arrastra el hielo hasta pururu y mira c\xF3mo lo empuja.","play.companion":"Un amigo para jugar","play.companionHint":"Puedes tocar, arrastrar y abrazar a los dos.","play.moreBubbles":"M\xE1s burbujas","play.pet":"Acariciar","play.hugNeedFriend":"Activa la compa\xF1\xEDa para dar un abrazo.","play.saved":"Tus plocs y preferencias se guardan en este navegador.","photo.open":"Modo foto","photo.pose":"Pose","photo.take":"Guardar foto","photo.exit":"Volver al juego","photo.busy":"Preparando la foto\u2026","photo.error":"No se pudo guardar. Int\xE9ntalo de nuevo.","photo.done":"\xA1Foto lista!","emotion.happy":"Feliz","emotion.angry":"Gru\xF1\xF3n","emotion.surprise":"Sorprendido","emotion.affection":"Cari\xF1oso","emotion.wink":"Gui\xF1o","emotion.sleep":"So\xF1oliento","action.jump":"Saltar","action.dance":"Bailar","action.spin":"Girar","action.sneeze":"Estornudar","action.nap":"Dormitar","action.hug":"Abrazar","action.drink":"Tomar caf\xE9","toy.none":"Sin objeto","toy.sponge":"Esponja","toy.bubbles":"Burbujas","toy.ice":"Hielo","personality.curious":"Curioso: siempre explora su rinc\xF3n.","personality.affectionate":"Cari\xF1oso: le encanta recibir atenci\xF3n.","personality.calm":"Tranquilo: juega a un ritmo suave.","personality.mischievous":"Travieso: hace bromas y se enfada antes.","personality.dreamy":"So\xF1ador: prefiere jugar despacio y dormitar.","personality.energetic":"En\xE9rgico: siempre listo para un saltito."},ja:{"photo.preview":"\u3077\u308B\u308B\u306E\u5199\u771F","photo.download":"\u5199\u771F\u3092\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9","play.target":"\u3044\u3063\u3057\u3087\u306B\u3042\u305D\u3076\u76F8\u624B","play.main":"\u3077\u308B\u308B","play.friend":"\u3068\u3082\u3060\u3061","play.open":"\u3042\u305D\u3076","play.title":"\u3077\u308B\u308B\u306E\u5C0F\u3055\u306A\u304A\u90E8\u5C4B","play.close":"\u9589\u3058\u308B","play.room":"\u304A\u90E8\u5C4B","play.games":"\u3042\u305D\u3073","play.friends":"\u3068\u3082\u3060\u3061","play.themes":"\u3069\u3053\u3067\u3042\u305D\u3076\uFF1F","play.personality":"\u30D5\u30EC\u30FC\u30D0\u30FC\u306E\u6027\u683C","play.expressions":"\u304A\u304B\u304A","play.actions":"\u3057\u3050\u3055","play.objects":"\u304A\u3082\u3061\u3083","play.objectsHint":"\u304A\u3082\u3061\u3083\u3092\u30C9\u30E9\u30C3\u30B0\u3001\u6CE1\u3092\u30BF\u30C3\u30D7\u3002","play.spongeHint":"\u30B9\u30DD\u30F3\u30B8\u3092\u30BF\u30C3\u30D7\u3059\u308B\u3068\u30B8\u30E3\u30F3\u30D7\u3002\u30C9\u30E9\u30C3\u30B0\u3082\u3067\u304D\u307E\u3059\u3002","play.bubblesHint":"\u6CE1\u3092\u30BF\u30C3\u30D7\u3057\u3066\u5272\u308D\u3046\u3002\u3077\u308B\u308B\u3082\u3064\u304B\u307E\u3048\u307E\u3059\uFF01","play.iceHint":"\u6C37\u3092\u3077\u308B\u308B\u306E\u305D\u3070\u3078\u52D5\u304B\u3059\u3068\u62BC\u3057\u3066\u304F\u308C\u307E\u3059\u3002","play.companion":"\u3044\u3063\u3057\u3087\u306B\u3042\u305D\u3076\u3068\u3082\u3060\u3061","play.companionHint":"\u3075\u305F\u308A\u3068\u3082\u3001\u3064\u3064\u3044\u305F\u308A\u3001\u30C9\u30E9\u30C3\u30B0\u3057\u305F\u308A\u3001\u30CF\u30B0\u3067\u304D\u307E\u3059\u3002","play.moreBubbles":"\u6CE1\u3092\u3075\u3084\u3059","play.pet":"\u306A\u3067\u308B","play.hugNeedFriend":"\u3068\u3082\u3060\u3061\u3092\u547C\u3076\u3068\u30CF\u30B0\u3067\u304D\u307E\u3059\u3002","play.saved":"\u3077\u308B\u3093\u306E\u56DE\u6570\u3068\u8A2D\u5B9A\u306F\u3053\u306E\u30D6\u30E9\u30A6\u30B6\u306B\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002","photo.open":"\u5199\u771F\u30E2\u30FC\u30C9","photo.pose":"\u30DD\u30FC\u30BA","photo.take":"\u5199\u771F\u3092\u4FDD\u5B58","photo.exit":"\u3042\u305D\u3073\u306B\u3082\u3069\u308B","photo.busy":"\u5199\u771F\u3092\u6E96\u5099\u4E2D\u2026","photo.error":"\u4FDD\u5B58\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F\u3002\u3082\u3046\u4E00\u5EA6\u304A\u8A66\u3057\u304F\u3060\u3055\u3044\u3002","photo.done":"\u5199\u771F\u304C\u3067\u304D\u307E\u3057\u305F\uFF01","emotion.happy":"\u306B\u3063\u3053\u308A","emotion.angry":"\u3080\u3059\u3063","emotion.surprise":"\u3073\u3063\u304F\u308A","emotion.affection":"\u3060\u3044\u3059\u304D","emotion.wink":"\u30A6\u30A4\u30F3\u30AF","emotion.sleep":"\u306D\u3080\u306D\u3080","action.jump":"\u30B8\u30E3\u30F3\u30D7","action.dance":"\u30C0\u30F3\u30B9","action.spin":"\u304F\u308B\u308A","action.sneeze":"\u304F\u3057\u3083\u307F","action.nap":"\u304A\u3072\u308B\u306D","action.hug":"\u30CF\u30B0","action.drink":"\u30B3\u30FC\u30D2\u30FC\u3092\u98F2\u3080","toy.none":"\u306A\u3057","toy.sponge":"\u30B9\u30DD\u30F3\u30B8","toy.bubbles":"\u6CE1","toy.ice":"\u6C37","personality.curious":"\u597D\u5947\u5FC3\u3044\u3063\u3071\u3044\u3002\u304A\u90E8\u5C4B\u3092\u63A2\u691C\u3059\u308B\u306E\u304C\u3059\u304D\u3002","personality.affectionate":"\u3042\u307E\u3048\u3093\u307C\u3002\u304B\u307E\u3063\u3066\u3082\u3089\u3046\u306E\u304C\u3060\u3044\u3059\u304D\u3002","personality.calm":"\u304A\u3060\u3084\u304B\u3002\u3086\u3063\u304F\u308A\u3042\u305D\u3073\u307E\u3059\u3002","personality.mischievous":"\u3044\u305F\u305A\u3089\u3063\u3053\u3002\u3061\u3087\u3063\u3074\u308A\u3059\u306D\u3084\u3059\u3044\u3002","personality.dreamy":"\u306E\u3093\u3073\u308A\u3002\u304A\u3072\u308B\u306D\u304C\u3059\u304D\u3002","personality.energetic":"\u5143\u6C17\u3044\u3063\u3071\u3044\u3002\u5C0F\u3055\u306A\u30B8\u30E3\u30F3\u30D7\u304C\u3060\u3044\u3059\u304D\u3002"},zh:{"photo.preview":"\u4F60\u7684pururu\u7167\u7247","photo.download":"\u4E0B\u8F7D\u7167\u7247","play.target":"\u4E00\u8D77\u73A9\u7684\u4F19\u4F34","play.main":"Pururu","play.friend":"\u670B\u53CB","play.open":"\u73A9\u800D","play.title":"pururu\u7684\u5C0F\u5929\u5730","play.close":"\u5173\u95ED","play.room":"\u5C0F\u5929\u5730","play.games":"\u6E38\u620F","play.friends":"\u4F19\u4F34","play.themes":"\u53BB\u54EA\u91CC\u73A9\uFF1F","play.personality":"\u53E3\u5473\u7684\u6027\u683C","play.expressions":"\u5C0F\u8868\u60C5","play.actions":"\u5C0F\u52A8\u4F5C","play.objects":"\u73A9\u5177","play.objectsHint":"\u62D6\u52A8\u73A9\u5177\u6216\u8F7B\u70B9\u6CE1\u6CE1\u3002","play.spongeHint":"\u8F7B\u70B9\u6D77\u7EF5\u8BA9pururu\u8DF3\u8D77\u6765\uFF0C\u4E5F\u53EF\u4EE5\u62D6\u52A8\u6D77\u7EF5\u3002","play.bubblesHint":"\u8F7B\u70B9\u6CE1\u6CE1\u628A\u5B83\u6233\u7834\uFF0Cpururu\u4E5F\u4F1A\u6293\u6CE1\u6CE1\uFF01","play.iceHint":"\u628A\u51B0\u5757\u62D6\u5230pururu\u65C1\u8FB9\uFF0C\u770B\u5B83\u628A\u51B0\u5757\u63A8\u5F00\u3002","play.companion":"\u4E00\u8D77\u73A9\u7684\u670B\u53CB","play.companionHint":"\u4E24\u4E2A\u4F19\u4F34\u90FD\u53EF\u4EE5\u8F7B\u6233\u3001\u62D6\u52A8\u548C\u62E5\u62B1\u3002","play.moreBubbles":"\u66F4\u591A\u6CE1\u6CE1","play.pet":"\u6478\u6478\u5B83","play.hugNeedFriend":"\u5F00\u542F\u4F19\u4F34\u540E\u5C31\u80FD\u62E5\u62B1\u3002","play.saved":"\u6B21\u6570\u548C\u504F\u597D\u4F1A\u4FDD\u5B58\u5728\u6B64\u6D4F\u89C8\u5668\u4E2D\u3002","photo.open":"\u62CD\u7167\u6A21\u5F0F","photo.pose":"\u59FF\u52BF","photo.take":"\u4FDD\u5B58\u7167\u7247","photo.exit":"\u8FD4\u56DE\u73A9\u800D","photo.busy":"\u6B63\u5728\u51C6\u5907\u7167\u7247\u2026","photo.error":"\u65E0\u6CD5\u4FDD\u5B58\uFF0C\u8BF7\u91CD\u8BD5\u3002","photo.done":"\u7167\u7247\u5DF2\u51C6\u5907\u597D\uFF01","emotion.happy":"\u5F00\u5FC3","emotion.angry":"\u95F9\u522B\u626D","emotion.surprise":"\u60CA\u8BB6","emotion.affection":"\u4EB2\u6635","emotion.wink":"\u7728\u773C","emotion.sleep":"\u56F0\u56F0","action.jump":"\u8DF3\u8DC3","action.dance":"\u8DF3\u821E","action.spin":"\u8F6C\u5708","action.sneeze":"\u6253\u55B7\u568F","action.nap":"\u5C0F\u7761","action.hug":"\u62E5\u62B1","action.drink":"\u559D\u5496\u5561","toy.none":"\u6CA1\u6709\u73A9\u5177","toy.sponge":"\u6D77\u7EF5","toy.bubbles":"\u6CE1\u6CE1","toy.ice":"\u51B0\u5757","personality.curious":"\u597D\u5947\uFF1A\u559C\u6B22\u63A2\u7D22\u5C0F\u5929\u5730\u3002","personality.affectionate":"\u4EB2\u6635\uFF1A\u559C\u6B22\u88AB\u5173\u6CE8\u3002","personality.calm":"\u5E73\u9759\uFF1A\u559C\u6B22\u6162\u6162\u73A9\u3002","personality.mischievous":"\u8C03\u76AE\uFF1A\u7231\u9017\u8DA3\uFF0C\u4E5F\u5BB9\u6613\u95F9\u522B\u626D\u3002","personality.dreamy":"\u7231\u505A\u68A6\uFF1A\u559C\u6B22\u6162\u6162\u73A9\u548C\u5C0F\u7761\u3002","personality.energetic":"\u6D3B\u529B\u5341\u8DB3\uFF1A\u968F\u65F6\u51C6\u5907\u8DF3\u4E00\u8DF3\u3002"}};var Ds={...an.ja,"meta.title":"pururu \u2014 \u3055\u308F\u3063\u3066\u3001\u3077\u308B\u3093\u3002","meta.description":"\u3064\u307E\u3093\u3067\u3001\u306A\u3052\u3066\u3001\u3064\u3064\u3044\u3066\u3042\u305D\u3079\u308B\u3001\u30BC\u30EA\u30FC\u306E\u3068\u3082\u3060\u3061\u300C\u3077\u308B\u308B\u300D\u306E\u30D5\u30A1\u30FC\u30B9\u30C8\u30D3\u30E5\u30FC\u3002","og.title":"pururu \u2014 \u3055\u308F\u3063\u3066\u3001\u3077\u308B\u3093\u3002","og.description":"\u3064\u307E\u3093\u3067\u3001\u306A\u3052\u3066\u3001\u3064\u3064\u3044\u3066\u3002\u5927\u7406\u77F3\u306E\u6D17\u9762\u53F0\u306E\u4E0A\u3067\u3001\u900F\u660E\u306A\u30BC\u30EA\u30FC\u306E\u30B9\u30E9\u30A4\u30E0\u300C\u3077\u308B\u308B\u300D\u3068\u904A\u3079\u307E\u3059\u3002","og.imageAlt":"\u767D\u3044\u5927\u7406\u77F3\u306E\u6D17\u9762\u53F0\u306B\u306E\u3063\u305F\u3001\u9ED2\u3044\u76EE\u306E\u900F\u660E\u306A\u6C34\u8272\u30B9\u30E9\u30A4\u30E0","brand.kana":"\u3077\u308B\u308B","a11y.language":"\u8A00\u8A9E\u3092\u9078\u3076","a11y.counter":"\u3077\u308B\u3093\u3068\u3057\u305F\u56DE\u6570","a11y.sound":"\u30B5\u30A6\u30F3\u30C9","a11y.flavors":"\u30D5\u30EC\u30FC\u30D0\u30FC\u3092\u9078\u3076","a11y.canvas":"\u30BC\u30EA\u30FC\u306E\u3068\u3082\u3060\u3061\u300C\u3077\u308B\u308B\u300D\u3002\u30C9\u30E9\u30C3\u30B0\u3067\u904B\u3076\u30FB\u6295\u3052\u308B\u3001\u30AF\u30EA\u30C3\u30AF\u3067\u3064\u3064\u304F\u3001\u30C0\u30D6\u30EB\u30AF\u30EA\u30C3\u30AF\u3067\u30B8\u30E3\u30F3\u30D7\u3002\u30AD\u30FC\u30DC\u30FC\u30C9\u306F\u77E2\u5370\u30AD\u30FC\u3067\u62BC\u3059\u3001Enter\u3067\u3064\u3064\u304F\u3001\u30B9\u30DA\u30FC\u30B9\u3067\u30B8\u30E3\u30F3\u30D7\u3002","sound.label":"\u30B5\u30A6\u30F3\u30C9","sound.on":"on","sound.off":"off","counter.label":"\u3077\u308B\u3093","counter.title":"\u3077\u308B\u3093\u3068\u3057\u305F\u56DE\u6570","hint.drag":"\u30C9\u30E9\u30C3\u30B0","hint.dragDo":"\u904B\u3076\u30FB\u6295\u3052\u308B","hint.tap":"\u30AF\u30EA\u30C3\u30AF","hint.tapDo":"\u3064\u3064\u304F","hint.pinch":"2\u672C\u6307","hint.pinchDo":"\u62BC\u3059\u30FB\u30D4\u30F3\u30C1","hint.touch.tap":"\u30BF\u30C3\u30D7","hint.touch.pinch":"\u30D4\u30F3\u30C1","hint.touch.pinchDo":"\u306E\u3073\u308B","copy.eyebrow":"Tiny jelly friend \u2014 No.01","copy.h1Lead":"\u3055\u308F\u3063\u3066\u3001","copy.h1Accent":"\u3077\u308B\u3093\u3002","copy.line1":"\u3064\u307E\u3093\u3067\u3001\u306A\u3052\u3066\u3001\u3064\u3064\u3044\u3066\u3002","copy.line2":"\u3077\u308B\u308B\u306F\u3001\u3042\u306A\u305F\u306E\u6307\u5148\u304C","copy.line3":"\u3060\u3044\u3059\u304D\u306A\u30BC\u30EA\u30FC\u306E\u3068\u3082\u3060\u3061\u3067\u3059\u3002","flavors.label":"Flavor","flavors.aria":"\u30D5\u30EC\u30FC\u30D0\u30FC\u3092\u9078\u3076","nogl.line1":"\u3053\u306E\u7AEF\u672B\u3067\u306F\u3077\u308B\u308B\u3092\u8868\u793A\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F\u3002","nogl.line2":"WebGL\u306B\u5BFE\u5FDC\u3057\u305F\u30D6\u30E9\u30A6\u30B6\u3067\u3072\u3089\u3044\u3066\u304F\u3060\u3055\u3044\u3002"};var Su={...an["pt-BR"],"meta.title":"pururu \u2014 Toque, e fa\xE7a ploc.","meta.description":"Pegue, arremesse e cutuque a geleia \xABpururu\xBB neste primeiro contacto.","og.title":"pururu \u2014 Toque, e fa\xE7a ploc.","og.description":"Pegue, arremesse e cutuque. Brinque com a geleia transparente \xABpururu\xBB em cima de uma pia de m\xE1rmore.","og.imageAlt":"Uma geleia azul-claro transparente, de olhos pretos, sobre uma pia de m\xE1rmore branco","brand.kana":"\u3077\u308B\u308B","a11y.language":"Escolher o idioma","a11y.counter":"N\xFAmero de plocs","a11y.sound":"Som","a11y.flavors":"Escolher o sabor","a11y.canvas":"Uma geleia chamada pururu. Arraste para mover e arremessar, clique para cutucar, clique duas vezes para pular. No teclado: setas para empurrar, Enter para cutucar, Espa\xE7o para pular.","sound.label":"Som","sound.on":"on","sound.off":"off","counter.label":"Ploc","counter.title":"N\xFAmero de plocs","hint.drag":"Arraste","hint.dragDo":"Mover e arremessar","hint.tap":"Clique","hint.tapDo":"Cutucar","hint.pinch":"Dois dedos","hint.pinchDo":"Pressionar e espichar","hint.touch.tap":"Toque","hint.touch.pinch":"Beliscar","hint.touch.pinchDo":"Esticar","copy.eyebrow":"Pequeno amigo de geleia \u2014 N\xBA 01","copy.h1Lead":"Toque nele,","copy.h1Accent":"e fa\xE7a ploc.","copy.line1":"Pegue, jogue, cutuque.","copy.line2":"Um bichinho de geleia que","copy.line3":"ama o toque dos seus dedos.","flavors.label":"Sabor","flavors.aria":"Escolher o sabor","nogl.line1":"N\xE3o conseguimos mostrar o pururu neste aparelho.","nogl.line2":"Abra num navegador compat\xEDvel com WebGL."};var Eu={...an.en,"meta.title":"pururu \u2014 Touch it, watch it wobble.","meta.description":"Grab, throw and poke the jelly friend pururu in this first encounter.","og.title":"pururu \u2014 Touch it, watch it wobble.","og.description":"Grab, throw and poke. Play with the transparent jelly \xABpururu\xBB on a marble bathroom counter.","og.imageAlt":"A transparent pale-blue jelly with black eyes, sitting on a white marble counter","brand.kana":"\u3077\u308B\u308B","a11y.language":"Choose a language","a11y.counter":"How many times it has wobbled","a11y.sound":"Sound","a11y.flavors":"Choose a flavor","a11y.canvas":"A jelly friend called pururu. Drag to move and throw it, click to poke, double-click to jump. With the keyboard: arrow keys to nudge, Enter to poke, Space to jump.","sound.label":"Sound","sound.on":"on","sound.off":"off","counter.label":"Wobbles","counter.title":"How many times it has wobbled","hint.drag":"Drag","hint.dragDo":"Move & throw","hint.tap":"Click","hint.tapDo":"Poke","hint.pinch":"Two fingers","hint.pinchDo":"Press & pinch","hint.touch.tap":"Tap","hint.touch.pinch":"Pinch","hint.touch.pinchDo":"Stretch","copy.eyebrow":"Tiny jelly friend \u2014 No.01","copy.h1Lead":"Touch it,","copy.h1Accent":"watch it wobble.","copy.line1":"Grab it, throw it, poke it.","copy.line2":"A tiny jelly friend who","copy.line3":"loves the feel of your fingers.","flavors.label":"Flavor","flavors.aria":"Choose a flavor","nogl.line1":"We could not show pururu on this device.","nogl.line2":"Please open it in a WebGL-capable browser."};var wu={...an.es,"meta.title":"pururu \u2014 T\xF3calo y haz plof.","meta.description":"Agarra, lanza y pincha a tu amigo de gel pururu en este primer encuentro.","og.title":"pururu \u2014 T\xF3calo y haz plof.","og.description":"Agarra, lanza y pincha. Juega con el gel transparente \xABpururu\xBB sobre un lavabo de m\xE1rmol.","og.imageAlt":"Un gel azul claro transparente, con ojos negros, sobre un lavabo de m\xE1rmol blanco","brand.kana":"\u3077\u308B\u308B","a11y.language":"Elige un idioma","a11y.counter":"Veces que ha hecho plof","a11y.sound":"Sonido","a11y.flavors":"Elige un sabor","a11y.canvas":"Un amigo de gel llamado pururu. Arrastra para moverlo y lanzarlo, haz clic para pinchar, doble clic para saltar. Con el teclado: flechas para empujar, Enter para pinchar, Espacio para saltar.","sound.label":"Sonido","sound.on":"on","sound.off":"off","counter.label":"Plofs","counter.title":"Veces que ha hecho plof","hint.drag":"Arrastra","hint.dragDo":"Mover y lanzar","hint.tap":"Clic","hint.tapDo":"Pinchar","hint.pinch":"Dos dedos","hint.pinchDo":"Presionar y pellizcar","hint.touch.tap":"Toca","hint.touch.pinch":"Pellizca","hint.touch.pinchDo":"Estira","copy.eyebrow":"Peque\xF1o amigo de gel \u2014 N.\xBA 01","copy.h1Lead":"T\xF3calo,","copy.h1Accent":"y haz plof.","copy.line1":"Ag\xE1rralo, l\xE1nzalo, pinchalo.","copy.line2":"Un peque\xF1o amigo de gel que","copy.line3":"adora la caricia de tus dedos.","flavors.label":"Sabor","flavors.aria":"Elige un sabor","nogl.line1":"No pudimos mostrar a pururu en este dispositivo.","nogl.line2":"\xC1brelo en un navegador compatible con WebGL."};var Tu={...an.zh,"meta.title":"pururu \u2014 \u6233\u4E00\u6233\uFF0C\u5575\u565C\u5575\u565C\u3002","meta.description":"\u53EF\u4EE5\u6293\u3001\u53EF\u4EE5\u6254\u3001\u53EF\u4EE5\u6233\uFF0C\u4E00\u8D77\u8BA4\u8BC6\u679C\u51BB\u670B\u53CB\u300C\u3077\u308B\u308B\u300D\u3002","og.title":"pururu \u2014 \u6233\u4E00\u6233\uFF0C\u5575\u565C\u5575\u565C\u3002","og.description":"\u53EF\u4EE5\u6293\u3001\u53EF\u4EE5\u6254\u3001\u53EF\u4EE5\u6233\u3002\u5728\u5927\u7406\u77F3\u6D17\u624B\u53F0\u4E0A\uFF0C\u548C\u900F\u660E\u7684\u679C\u51BB\u300C\u3077\u308B\u308B\u300D\u4E00\u8D77\u73A9\u5427\u3002","og.imageAlt":"\u767D\u8272\u5927\u7406\u77F3\u53F0\u9762\u4E0A\uFF0C\u4E00\u53EA\u9ED1\u8272\u773C\u775B\u7684\u900F\u660E\u6D45\u84DD\u8272\u679C\u51BB","brand.kana":"\u3077\u308B\u308B","a11y.language":"\u9009\u62E9\u8BED\u8A00","a11y.counter":"\u5575\u565C\u7684\u6B21\u6570","a11y.sound":"\u58F0\u97F3","a11y.flavors":"\u9009\u62E9\u53E3\u5473","a11y.canvas":"\u4E00\u53EA\u53EB\u300C\u3077\u308B\u308B\u300D\u7684\u679C\u51BB\u670B\u53CB\u3002\u62D6\u52A8\u53EF\u4EE5\u79FB\u52A8\u548C\u6295\u63B7\uFF0C\u70B9\u51FB\u53EF\u4EE5\u6233\u4E00\u6233\uFF0C\u53CC\u51FB\u53EF\u4EE5\u8DF3\u8D77\u6765\u3002\u952E\u76D8\uFF1A\u65B9\u5411\u952E\u63A8\u52A8\uFF0C\u56DE\u8F66\u952E\u6233\u4E00\u6233\uFF0C\u7A7A\u683C\u952E\u8DF3\u8DC3\u3002","sound.label":"\u58F0\u97F3","sound.on":"\u5F00","sound.off":"\u5173","counter.label":"\u5575\u565C","counter.title":"\u5575\u565C\u7684\u6B21\u6570","hint.drag":"\u62D6\u52A8","hint.dragDo":"\u79FB\u52A8\u548C\u6295\u63B7","hint.tap":"\u70B9\u51FB","hint.tapDo":"\u6233\u4E00\u6233","hint.pinch":"\u53CC\u6307","hint.pinchDo":"\u6309\u538B\u548C\u634F\u5408","hint.touch.tap":"\u8F7B\u89E6","hint.touch.pinch":"\u634F\u5408","hint.touch.pinchDo":"\u62C9\u4F38","copy.eyebrow":"\u5C0F\u5C0F\u679C\u51BB\u670B\u53CB \u2014 \u7B2C 01 \u53F7","copy.h1Lead":"\u6233\u4E00\u6233\uFF0C","copy.h1Accent":"\u5575\u565C\u5575\u565C\u3002","copy.line1":"\u6293\u8D77\u5B83\uFF0C\u6254\u51FA\u53BB\uFF0C\u6233\u4E00\u6233\u3002","copy.line2":"\u5B83\u662F\u4E00\u53EA\u5C0F\u5C0F\u7684\u679C\u51BB\u670B\u53CB\uFF0C","copy.line3":"\u6700\u559C\u6B22\u4F60\u7684\u6307\u5C16\u3002","flavors.label":"\u53E3\u5473","flavors.aria":"\u9009\u62E9\u53E3\u5473","nogl.line1":"\u65E0\u6CD5\u5728\u6B64\u8BBE\u5907\u4E0A\u663E\u793A\u3077\u308B\u308B\u3002","nogl.line2":"\u8BF7\u4F7F\u7528\u652F\u6301 WebGL \u7684\u6D4F\u89C8\u5668\u6253\u5F00\u3002"};var Ru="pururu-lang",$i=[{code:"ja",label:"\u65E5\u672C\u8A9E",short:"JA",dict:Ds},{code:"pt-BR",label:"Portugu\xEAs (Brasil)",short:"PT",dict:Su},{code:"en",label:"English",short:"EN",dict:Eu},{code:"es",label:"Espa\xF1ol",short:"ES",dict:wu},{code:"zh",label:"\u4E2D\u6587",short:"\u4E2D\u6587",dict:Tu}],Us=new Map($i.map(i=>[i.code,i.dict])),Cu="ja";function Au(){try{return localStorage.getItem(Ru)}catch{return null}}function n0(i){try{localStorage.setItem(Ru,i)}catch{}}function i0(i=navigator.languages??[navigator.language??""]){for(let e of i.filter(Boolean)){if(Us.has(e))return e;let t=$i.find(s=>s.code.toLowerCase()===e.toLowerCase());if(t)return t.code;let n=e.split("-")[0].toLowerCase();if(n==="pt")return"pt-BR";let r=$i.find(s=>s.code.split("-")[0].toLowerCase()===n);if(r)return r.code}return Cu}function Pu(){let i=new Set,e=Us.has(Au())?Au():i0();function t(o){return(Us.get(e)??Ds)[o]??Ds[o]??o}function n(o){return o?typeof o=="string"?o:o[e]??o[Cu]??Object.values(o)[0]??"":""}function r(o=document){for(let h of o.querySelectorAll("[data-i18n]"))h.textContent=t(h.dataset.i18n);for(let h of o.querySelectorAll("[data-i18n-attr]"))for(let p of h.dataset.i18nAttr.split(",")){let[u,d]=p.split(":").map(g=>g.trim());u&&d&&h.setAttribute(u,t(d))}let a=(h,p)=>{let u=document.head.querySelector(h);u&&u.setAttribute("content",t(p))},l=document.head.querySelector("title");l&&(l.textContent=t("meta.title")),a('meta[name="description"]',"meta.description"),a('meta[property="og:title"]',"og.title"),a('meta[property="og:description"]',"og.description"),a('meta[property="og:image:alt"]',"og.imageAlt"),a('meta[property="og:locale"]',"og.locale");let c=document.documentElement;c.lang=e,c.dataset.lang=e}function s(o){if(!Us.has(o)||o===e)return!1;e=o,n0(o),r();for(let a of i)a(o,t);return!0}return{t,pick:n,apply:r,set:s,get:()=>e,onChange:o=>(i.add(o),()=>i.delete(o))}}function Iu(i){let e=document.querySelector("#lang");if(!e)return{set(){}};for(let{code:n,label:r}of $i){let s=document.createElement("option");s.value=n,s.textContent=r,e.appendChild(s)}let t=()=>{let n=$i.find(r=>r.code===i.get());n&&(e.value=n.code)};return e.addEventListener("change",()=>i.set(e.value)),t(),i.onChange(t),{select:e,set:t}}var r0=[["drag",()=>"hint.drag"],["dragDo",()=>"hint.dragDo"],["tap",i=>i?"hint.touch.tap":"hint.tap"],["tapDo",()=>"hint.tapDo"],["pinch",i=>i?"hint.touch.pinch":"hint.pinch"],["pinchDo",i=>i?"hint.touch.pinchDo":"hint.pinchDo"]];function Lu(i){let e=document.querySelector("#hint");function t(){for(let[n,r]of r0){let s=document.querySelector(`[data-hint="${n}"]`);s&&(s.textContent=i.t(r(si)))}}return t(),i.onChange(t),{apply:t,element:e,dimAfter(n){n===3&&e.classList.add("dim")}}}function Du(){let i,e,t,n,r,s,o=0,a={open:0,round:0,pulse:0};function l(){let u=window.AudioContext||window.webkitAudioContext;u&&(i||(i=new u,e=i.createAnalyser(),e.fftSize=512,e.smoothingTimeConstant=.52,t=new Float32Array(e.fftSize),n=new Uint8Array(e.frequencyBinCount),e.connect(i.destination)),i.state==="suspended"&&i.resume().catch(()=>{}))}function c(){if(!r)return;let u=r;r=null,u.onended=null,u.stop(),u.disconnect(),s?.(),s=null}async function h(u,d,g){if(l(),!i)throw new Error("O navegador n\xE3o conseguiu iniciar o \xE1udio.");let x=await i.decodeAudioData(u);if(d.aborted)return;if(i.state!=="running")throw new Error("Toque no bot\xE3o de ouvir para liberar o \xE1udio.");c();let m=i.createBufferSource();m.buffer=x,m.connect(e),r=m,await new Promise(f=>{s=f,m.onended=()=>{m.disconnect(),r===m&&(r=null,s=null),f()},m.start(),g(x.duration)})}function p(u){let d=0,g=0;if(r){e.getFloatTimeDomainData(t);let x=0;for(let f of t)x+=f*f;let m=Math.sqrt(x/t.length);if(d=Math.min(1,Math.max(0,(m-.012)*7.2)),d>.03){e.getByteFrequencyData(n);let f=i.sampleRate/e.fftSize,_=0,b=0;for(let M=1;M<Math.min(n.length,2800/f);M++){let P=Math.max(0,n[M]-45);M*f<800?_+=P:b+=P}g=Math.min(1,Math.max(0,(_/(_+b||1)-.27)*2.2))}}return o+=(d-o)*(1-Math.exp(-12*u)),a.open+=(d-a.open)*(1-Math.exp(-(d>a.open?34:19)*u)),a.round+=(g-a.round)*(1-Math.exp(-18*u)),a.pulse+=(Math.max(0,d-o)-a.pulse)*(1-Math.exp(-20*u)),a}return{unlock:l,stop:c,play:h,frame:p}}var s0=8*1024*1024,o0=6e3,Qa="Preparando a voz\u2026",Uu="/api/pururu/history",ec="/api/pururu/auth",a0="/api/pururu/turn",c0=i=>`/api/pururu/voice/${i}`,l0={laugh:"\u{1F602}",chuckle:"\u{1F604}",giggle:"\u{1F92D}",cry:"\u{1F622}",sigh:"\u{1F62E}\u200D\u{1F4A8}",breath:"\u{1F4A8}",inhale:"\u{1F4A8}",exhale:"\u{1F4A8}",tsk:"\u{1F612}","tongue-click":"\u{1F445}","lip-smack":"\u{1F444}",pause:"\u23F8\uFE0F","long-pause":"\u23F8\uFE0F","hum-tune":"\u{1F3B6}",soft:"\u{1F508}",whisper:"\u{1F92B}",loud:"\u{1F4E3}","build-intensity":"\u{1F50A}","decrease-intensity":"\u{1F509}","higher-pitch":"\u2B06\uFE0F","lower-pitch":"\u2B07\uFE0F",slow:"\u{1F422}",fast:"\u26A1","sing-song":"\u{1F3B5}",singing:"\u{1F3A4}",emphasis:"\u2757"};function u0(i){let e=i.reply?.voiceText;return typeof e!="string"?i.text:e.replace(/\[([a-z-]+)\]|<(\/?)([a-z-]+)>/g,(t,n,r,s)=>{let o=l0[n??s];return o?r?"":o+" ":t}).replace(/\s+/g," ").trim()}async function Fu(i,e){let t=await fetch(i,e),n=await t.json().catch(()=>null);if(!n||!t.ok&&!n.user)throw new Error(n?.error||"Abra o Pururu pelo servidor local para usar o chat.");return n}function h0(i){return new Promise((e,t)=>{let n=new FileReader;n.onload=()=>e({name:i.name,data:String(n.result).split(",")[1]}),n.onerror=()=>t(new Error("N\xE3o foi poss\xEDvel ler a imagem.")),n.readAsDataURL(i)})}function Nu({getContext:i,onReply:e}){let t=Y=>document.getElementById(Y),n=t("puru-chat"),r=t("chat-history-toggle"),s=t("chat-history"),o=t("chat-messages"),a=t("chat-older"),l=t("chat-compose"),c=t("chat-text"),h=t("chat-file"),p=t("chat-attachment"),u=t("chat-mic"),d=t("chat-accounts"),g=t("chat-auth-panel"),x=t("auth-google-state"),m=t("auth-grok-state"),f=t("auth-google-btn"),_=t("auth-grok-btn"),b=t("auth-refresh-btn"),M=t("auth-browser-hint"),P=t("chat-voice"),S=t("chat-live"),T=t("chat-status"),C=t("chat-pending"),v=t("chat-pending-text"),y=Du(),E=new Map,L=new Map,B=new Map,F=new Set,N=[],R=window.SpeechRecognition||window.webkitSpeechRecognition,z,D,k,q,ne,te,me,Z,ie,fe=Promise.resolve(),ce=0,ue=0,pe=!0;try{pe=localStorage.getItem("pururu-voice")!=="off"}catch{}function j(Y=""){T.textContent=Y,T.hidden=!Y}function ye(Y){s.hidden=!Y,r.setAttribute("aria-expanded",String(Y)),Y&&(s.scrollTop=s.scrollHeight)}function oe(Y){g.hidden=!Y,d.setAttribute("aria-expanded",String(Y)),!Y&&ie&&(clearInterval(ie),ie=null)}function Ne(Y){if(!Y)return;let U={connected:"Conectado \u2713",disconnected:"N\xE3o conectado",unknown:"Aguardando\u2026"},Q=Y.google||"disconnected",W=Y.grok||"disconnected";x.dataset.state=Q,x.textContent=U[Q]||U.disconnected,f.textContent=Q==="connected"?"Trocar Google":"Conectar Google",m.dataset.state=W,m.textContent=U[W]||U.disconnected,_.textContent=W==="connected"?"Trocar Grok":"Conectar Grok";let K=Q==="connected"&&W==="connected";d.dataset.ready=String(K),b.textContent=Y.browserOpen?"J\xE1 fiz login (Confirmar)":"Verificar acesso",M.textContent=Y.browserOpen?"Fa\xE7a login na janela e feche-a (ou clique em Confirmar).":K?"Contas prontas!":"",K&&ie&&!Y.browserOpen&&(clearInterval(ie),ie=null)}async function H({openIfNeeded:Y=!1,finishLogin:U=!1}={}){try{let W=await(await fetch(U?`${ec}?verify=1`:ec)).json();return Ne(W),Y&&(W.google!=="connected"||W.grok!=="connected")&&oe(!0),W}catch{return null}}async function ut(Y){let U=Y==="grok"?_:f;U.disabled=!0,M.textContent="Abrindo navegador para login\u2026";try{let Q=await fetch(ec,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({target:Y})}),W=await Q.json();if(!Q.ok)throw new Error(W?.error||"N\xE3o foi poss\xEDvel abrir o navegador.");Ne(W),M.textContent=Y==="grok"?'No navegador aberto, clique em "Continue with Google" e depois feche a janela (ou clique em Confirmar).':"Entre na sua conta Google e depois feche a janela (ou clique em Confirmar).",ie||(ie=setInterval(()=>{H()},2e3))}catch(Q){j(Q.message)}finally{U.disabled=!1}}function Ie(){P.setAttribute("aria-pressed",String(pe)),P.textContent=pe?"Voz":"Voz desligada"}Ie();function Le(){ne?.reveal?.();for(let Y of N)Y.reveal?.();N.length=0,ne?.controller.abort(),y.stop()}function Me(){pe&&y.unlock()}window.addEventListener("pointerdown",Me,{capture:!0,passive:!0}),window.addEventListener("click",Me,{capture:!0}),window.addEventListener("keydown",Me,{capture:!0});function He(){return te&&!D&&!ce&&!ne&&!N.length}function Ee(Y=150){me||!He()||(me=setTimeout(()=>{me=null,He()&&Be()},Y))}async function I(){if(!pe||D||ne||!N.length)return;let{row:Y,reveal:U}=N.shift(),Q=new AbortController;ne={controller:Q,reveal:U},T.hidden&&j(Qa);let W=!1;try{let K=await fetch(c0(Y.id),{method:"POST",signal:Q.signal});if(!K.ok){let de=await K.json().catch(()=>null);throw new Error(de?.error||"A voz do Grok est\xE1 indispon\xEDvel.")}let ae=await K.arrayBuffer();Q.signal.aborted||await y.play(ae,Q.signal,de=>{T.textContent===Qa&&j(te?"Pururu est\xE1 falando\u2026":""),U?U(de):e(Y,!1,de)})}catch(K){Q.signal.aborted||(W=!0,j(K.message))}finally{[Qa,"Pururu est\xE1 falando\u2026"].includes(T.textContent)&&j(),U?.(),ne=null,I(),Ee(W?1500:150)}}function w(Y){let U=document.createElement("li");if(U.className="chat-line "+Y.role,U.dataset.id=Y.id,Y.grab&&!Y.text&&!Y.image?(U.classList.add("event"),U.textContent="Voc\xEA agarrou o Pururu"):Y.text&&U.append(document.createTextNode(u0(Y))),Y.image){let Q=document.createElement(Y.image.url?"a":"span");if(Y.image.url){Q.href=Y.image.url,Q.target="_blank",Q.rel="noopener";let W=document.createElement("img");W.src=Y.image.url,W.alt=Y.image.name,W.loading="lazy",Q.append(W)}Q.append(document.createTextNode(Y.image.name)),U.append(Q)}if(Y.state==="sending"){let Q=document.createElement("small");Q.className="chat-sending",Q.textContent="Enviando\u2026",U.append(Q)}if(Y.role==="assistant"||Y.state==="error"||Y.state==="pending"){let Q=document.createElement("button");Q.type="button",Q.textContent=Y.role==="assistant"?"Ouvir":"Tentar de novo",Q.addEventListener("click",()=>{if(Y.role!=="assistant")return te&&Se(),ge(B.get(Y.id)??{id:Y.id,retry:!0},te);pe=!0,te||De(),y.unlock(),te&&Se(),Le(),j(),N.push({row:Y}),I()}),U.append(document.createElement("br"),Q)}return U}function X(Y,U){E.set(Y.id,Y),Y.state==="sending"?L.set(Y.id,Y):L.delete(Y.id);let Q=[...L.values()].at(-1);C.hidden=!Q,v.textContent=Q?.text||Q?.image?.name||"";let W=w(Y),K=o.querySelector(`[data-id="${Y.id}"]`),ae=U&&o.querySelector(`[data-id="${U}"]`);K?K.replaceWith(W):ae?ae.after(W):o.append(W),s.scrollTop=s.scrollHeight}async function re(Y){let U=await Fu(Y?`${Uu}?before=${Y}`:Uu),Q=s.scrollHeight,W=document.createDocumentFragment();for(let K of U.messages)E.has(K.id)||(E.set(K.id,K),W.append(w(K)));o.prepend(W),a.hidden=!U.more,Y?s.scrollTop+=s.scrollHeight-Q:(s.hidden||(s.scrollTop=s.scrollHeight),U.auth?(Ne(U.auth),(U.auth.google!=="connected"||U.auth.grok!=="connected")&&oe(!0)):U.configured.llm||oe(!0))}let se=!1;function ee(){se||(se=!0,re().catch(Y=>j(Y.message)))}setTimeout(ee,250);async function we(Y,U){j();try{let{file:Q,...W}=Y,K=i();(W.retry||W.theme===K.theme)&&Object.assign(W,{theme:K.theme,scene:K.scene}),Q&&(W.image=await h0(Q));let ae=await Fu(a0,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(W)});if(ae.user&&B.delete(Y.id),ae.error)return ae.user&&X(ae.user),j(ae.error),!1;j();let de=ae.reply;if(!de||F.has(de.id)){ae.user&&X(ae.user);return}F.add(de.id),ae.user&&X(ae.user),X(de,ae.user?.id),e(de,!0,0),pe&&(!U||U===te)&&(N.push({row:de}),I())}catch(Q){let W=E.get(Y.id);return W?.state==="sending"&&X({...W,state:"error"}),j(Q.message),!1}}function ge(Y,U){let Q=E.get(Y.id);Q?.state!=="sending"&&((Q||Y.text||Y.file)&&(Y.retry||B.set(Y.id,Y),X({...Q,id:Y.id,role:"user",state:"sending",text:Y.text??Q?.text,image:Q?.image??(Y.file?{name:Y.file.name}:null)})),ee(),ce++,fe=fe.then(async()=>{let W=await we(Y,U);ce--,Ee(W===!1?1500:150)}))}function xe(){if(clearTimeout(q),!k||D)return;let Y=k;k=null;let U=performance.now();te||U<ue||ce||ne||N.length||(ue=U+o0,ge({id:crypto.randomUUID(),grab:!0,...Y}))}function Ze(){k=i(),clearTimeout(q),q=setTimeout(xe,650)}function le(Y,U=!1){Y=Y.trim();let Q=z;if(!Y&&!Q)return;let W=!!k,K=i(),ae=te;k=null,clearTimeout(q),U||(c.value=""),be(),ae||ye(!0),ge({id:crypto.randomUUID(),text:Y,grab:W,...K,file:Q},ae)}function be(Y){z=Y,p.hidden=!Y,t("chat-filename").textContent=Y?.name??"",Y||(h.value="")}function De(){try{localStorage.setItem("pururu-voice",pe?"on":"off")}catch{}Ie()}l.addEventListener("submit",Y=>{Y.preventDefault();let U=c.value;D&&(U.trim()||z)&&Se(),le(U)}),t("chat-attach").addEventListener("click",()=>h.click()),t("chat-remove").addEventListener("click",()=>be()),h.addEventListener("change",()=>{let Y=h.files[0];if(Y){if(Y.size>s0){be(),j("Escolha uma imagem de at\xE9 8 MB.");return}be(Y),j()}}),r.addEventListener("click",()=>{ee(),ye(s.hidden)}),d.addEventListener("click",()=>{ee();let Y=g.hidden;oe(Y),Y&&H()}),f.addEventListener("click",()=>{ut("google")}),_.addEventListener("click",()=>{ut("grok")}),b.addEventListener("click",()=>{H({finishLogin:!0})}),a.addEventListener("click",()=>{let Y=E.get(o.firstElementChild?.dataset.id);Y&&re(Y.cursor).catch(U=>j(U.message))}),P.addEventListener("click",()=>{pe=!pe,De(),pe?y.unlock():Le()}),n.addEventListener("focusin",ee,{once:!0});function Fe(){let Y=D;return D=null,delete n.dataset.listening,c.readOnly=!1,Y&&(c.value=Y.draft),u.setAttribute("aria-pressed","false"),u.setAttribute("aria-label","Usar microfone"),u.title="Usar microfone",Y}function Se(){Fe()?.session.abort()}function Ye(){te=null,clearTimeout(me),me=null,S.setAttribute("aria-pressed","false"),S.title="Iniciar conversa por voz cont\xEDnua",u.disabled=!1,P.disabled=!1,pe=Z,Ie(),Se(),Le(),k=null,j()}function Be(){let Y=!!te,U=new R;U.lang="pt-BR",U.interimResults=!0,U.continuous=!1,U.maxAlternatives=1;let Q=!1,W=!1,K="",ae="";function de(){W||(W=!0,U.stop())}let Oe=c.value,st=nt=>nt?[Oe.trimEnd(),nt].filter(Boolean).join(" "):Oe;D={session:U,finalize:de,draft:Oe},n.dataset.listening="",c.readOnly=!0,Y&&(c.value=""),u.setAttribute("aria-pressed","true"),u.setAttribute("aria-label","Encerrar ditado"),u.title="Encerrar ditado",j("Abrindo microfone\u2026"),U.onaudiostart=()=>{D?.session===U&&j("Ouvindo\u2026")},U.onresult=nt=>{if(D?.session!==U)return;let Je=Array.from(nt.results),Pt=Je.map(wn=>wn[0].transcript).join(" ").trim();Pt&&(K=Pt);let Bt=Je.filter(wn=>wn.isFinal).map(wn=>wn[0].transcript).join(" ").trim();Bt&&(ae=Bt),c.value=Y?K:st(K),c.scrollLeft=c.scrollWidth},U.onerror=nt=>{if(D?.session!==U||nt.error==="no-speech"||nt.error==="aborted")return;Q=!0,te&&Ye(),j({"not-allowed":"Permita o microfone no Chrome.","service-not-allowed":"O reconhecimento de fala est\xE1 bloqueado neste navegador.","audio-capture":"O Chrome n\xE3o encontrou um microfone. Confira a entrada de \xE1udio.",network:"O Chrome perdeu a conex\xE3o com o reconhecimento de fala."}[nt.error]||"O Chrome n\xE3o conseguiu reconhecer a fala.")},U.onend=()=>{if(D?.session!==U)return;Fe();let nt=Y?ae||K:st(ae||K);nt&&!Q?le(nt,Y):(Q||j(te?"Nenhuma fala reconhecida. Tentando de novo\u2026":"Nenhuma fala reconhecida. Toque no microfone para tentar de novo."),xe()),I(),Ee(nt?150:1100)};try{U.start()}catch{Fe(),te&&Ye(),j("O Chrome n\xE3o conseguiu iniciar o microfone."),xe()}}return u.addEventListener("click",()=>{if(!R)return j("Abra no Chrome para usar o microfone.");if(D){D.finalize();return}Me(),Le(),Be()}),S.addEventListener("click",()=>{if(te)return Ye();if(!R)return j("Abra no Chrome para usar o modo Live.");ee(),te=Symbol(),S.setAttribute("aria-pressed","true"),S.title="Encerrar conversa por voz cont\xEDnua",u.disabled=!0,P.disabled=!0,Z=pe,pe=!0,Ie(),Me(),ye(!1),He()&&Be()}),{grabbed:Ze,frame:y.frame}}var br=(()=>{let i=null,e=null,t=!1;try{t=localStorage.getItem("pururu-sound")==="on"}catch{}let n=Xl,r=()=>{n.setAttribute("aria-pressed",t?"true":"false");let l=n.querySelector(".state");l.dataset.i18n=t?"sound.on":"sound.off",l.textContent=t?"on":"off"};r();function s(){if(!i){let l=window.AudioContext||window.webkitAudioContext;if(!l)return null;i=new l,e=i.createGain(),e.gain.value=.55;let c=i.createDynamicsCompressor();e.connect(c),c.connect(i.destination)}return i.state==="suspended"&&i.resume(),i}function o({f0:l,f1:c,f2:h=null,dur:p=.4,type:u="sine",vol:d=.2,vib:g=0,vibRate:x=14,delay:m=0}){if(!t||!s())return;let f=i.currentTime+m,_=i.createOscillator(),b=i.createGain();if(_.type=u,_.frequency.setValueAtTime(l,f),h?(_.frequency.exponentialRampToValueAtTime(c,f+p*.12),_.frequency.exponentialRampToValueAtTime(h,f+p)):_.frequency.exponentialRampToValueAtTime(c,f+p),g){let M=i.createOscillator(),P=i.createGain();M.frequency.value=x,P.gain.setValueAtTime(g,f),P.gain.exponentialRampToValueAtTime(.01,f+p),M.connect(P),P.connect(_.frequency),M.start(f),M.stop(f+p+.05)}b.gain.setValueAtTime(1e-4,f),b.gain.exponentialRampToValueAtTime(d,f+.008),b.gain.exponentialRampToValueAtTime(1e-4,f+p),_.connect(b),b.connect(e),_.start(f),_.stop(f+p+.05)}n.addEventListener("click",()=>{t=!t,r();try{localStorage.setItem("pururu-sound",t?"on":"off")}catch{}t&&(s(),a.poke())});let a={unlock(){t&&s()},poke(){let l=.9+Math.random()*.25;o({f0:420*l,f1:900*l,dur:.09,type:"triangle",vol:.16}),o({f0:900*l,f1:520*l,dur:.12,type:"sine",vol:.08,delay:.05})},boing(l=.6){let c=150+60*(1-l);o({f0:c,f1:c*2.6,f2:c*.8,dur:.45+l*.35,type:"sine",vol:.26,vib:40+60*l,vibRate:13}),o({f0:c*2,f1:c*4.8,f2:c*1.5,dur:.3,type:"triangle",vol:.05,vib:60,vibRate:13})},land(l=5){let c=Math.min(1,l/9);o({f0:200,f1:70,dur:.18,type:"sine",vol:.25*c+.04}),o({f0:170,f1:380,f2:140,dur:.35+.2*c,type:"sine",vol:.14*c,vib:40,vibRate:15,delay:.02})},jump(){o({f0:260,f1:820,dur:.22,type:"sine",vol:.2})},wobble(){o({f0:210,f1:300,f2:190,dur:.35,type:"sine",vol:.14,vib:50,vibRate:11})},stretch(l){o({f0:180+200*l,f1:260+320*l,dur:.12,type:"sine",vol:.05})},wake(){o({f0:500,f1:1100,dur:.12,type:"triangle",vol:.12})},flavor(){[523,659,784].forEach((l,c)=>o({f0:l,f1:l*1.01,dur:.22,type:"triangle",vol:.08,delay:c*.06}))}};return a})();function Ou(){let i=Pu();i.apply(),Iu(i);let e=Wl(),t=e.state,n=Lu(i),r=vu(n,e),s;try{s=kl(Kt)}catch(j){ql.classList.add("show"),console.error(j);return}let{renderer:o,scene:a,camera:l,DPR:c}=s,h=new Map,p,u,d,g,x,m,f=0,_=0,b=[],M=()=>b,P={canvas:Kt,counter:r,sfx:br,coarse:si,touches:h,splash:(j,ye,oe)=>g?.splashDrops(j,ye,oe),isFriendActive:j=>p===j&&!x?.active};u=Ls(a,l,{...P,isActive:()=>p===u&&!x?.active,onGrab:()=>m?.grabbed(),voiceFrame:j=>m?.frame(j),roomMode:()=>L.current}),b.push(u),p=u;let{geometry:S,world:T,palette:C}=u,v=uu(a,{floorY:S.FLOOR,DPR:c,wallZ:_r,getFrameNo:()=>f});v.oncePerFrame();let y=du(a);g=fu(a,{floorY:S.FLOOR,HALFW:S.HALFW,attenColor:C.current.atten});let E=pu(l,o,{counter:v.counter,wall:y.wall,paintWall:y.paint,wallZ:_r,body:T.body,bounds:T.bounds,geometry:S});E.layout(),E.updateBounds();let L=mu(a,v.counter,y,e),B=yu(a,S.FLOOR);B.mug.fit(T.bounds);let F,N=()=>L.current==="fire"&&!x?.active&&B.mug.start(u);function R(j,ye,oe){if(j.theme!==L.current||x?.active)return;let Ne=j.reply;ye&&Ne.action!=="none"&&(L.current==="fire"&&Cs.includes(Ne.action)?F=Ne.action:T.grab.on||u.actions.run(Ne.action));let H=Ne.action==="nap"?"sleep":Ne.emotion;u.expression.feel(H,Math.max(oe,3+Ne.intensity*4),Ne.intensity)}m=Nu({getContext:()=>({theme:L.current,flavor:e.state.flavor,scene:L.current==="fire"?{mug:q.mugDragged?"dragging":B.mug.state,sipped:B.mug.sipped}:void 0}),onReply:R});function z(j){p!==j&&(p?.grabCtl.release("cancel"),p&&(p.raycast.pointer.has=!1),p=j)}let D=_u(C,{i18n:i,sfx:br,touch:u.expression.touch,push:u.physics.push,hearts:u.fx.hearts,slimeScreenTop:u.fx.slimeScreenTop,onTap:()=>z(u),get sqv(){return T.sqv},set sqv(j){T.sqv=j},ex:u.expression.ex,onSelect:j=>{z(u),e.update({flavor:j.id})}});D.render(0),D.setFlavor(Math.max(0,mt.findIndex(j=>j.id===t.flavor)),{quiet:!0});let k=j=>D.setFlavor(j);d=lu(u,{scene:a,camera:l,store:e,creatureOptions:P,counter:r,sfx:br,onCreate:j=>{b.push(j),j.bind(k)},onRemove:j=>{p===j&&z(u),b.splice(1,1),h.clear()}});let q=xu({scene:a,camera:l,canvas:Kt,floor:S.FLOOR,store:e,counter:r,sfx:br,getActors:M,getActive:()=>p,mug:B.mug,canInteract:()=>!x?.active});Kt.addEventListener("pointerdown",j=>{if(x?.active||h.size||p.world.grab.on)return;let ye=null;for(let oe of M()){oe.raycast.setNDC(j,Kt);let Ne=oe.raycast.hitTest();Ne&&(!ye||Ne.distance<ye.distance)&&(ye={actor:oe,distance:Ne.distance})}ye&&z(ye.actor)}),u.bind(k),x=bu({renderer:o,scene:a,camera:l,canvas:Kt,i18n:i,getActors:M,store:e}),L.setTheme(t.theme),d.setEnabled(t.companion),q.setKind(t.toy),Mu({i18n:i,store:e,themes:L,toys:q,company:d,getActive:()=>p,getActors:M,selectActor:z,photo:x,canvas:Kt,drinkMug:N}),e.subscribe(j=>{let ye=mt.findIndex(oe=>oe.id===j.flavor);C.index!==ye&&D.setFlavor(ye,{quiet:!0}),L.current!==j.theme&&L.setTheme(j.theme),d.enabled!==j.companion&&d.setEnabled(j.companion),q.kind!==j.toy&&q.setKind(j.toy)}),addEventListener("storage",j=>{j.key===Ps&&e.refresh()});let ne=new Ue,te=new O,me=new Te,Z=new Te(1,1,1);function ie(j){f++,_+=j;let ye=performance.now()/1e3;E.updateBounds(),d.update(j,ye),B.enabled=L.current==="fire",B.update(_);for(let Ne of M())Ne.update(j,_,ye);q.update(j,ye),B.mug.update(j),(L.current!=="fire"||x.active)&&(F=null),F&&!q.mugDragged&&B.mug.start(u,F)&&(F=null),me.copy(C.current.atten).lerp(Z,.3+.7*C.material.rainbow),g.dropMat.attenuationColor.copy(me),g.update(j,T.body),v.counter.material.uniforms.uFocal.value=l.position.distanceTo(u.slime.position);let oe=p.raycast.pointer;!Xe&&oe.has&&!si&&!p.world.grab.on&&!x.active?ne.set(St(ne.x,oe.nx*.18,2.5,j),St(ne.y,oe.ny*.1,2.5,j)):ne.set(St(ne.x,0,2,j),St(ne.y,0,2,j)),l.position.set(E.view.base.x+ne.x,E.view.base.y+ne.y,E.view.base.z),l.lookAt(E.view.target),o.render(a,l)}function fe(){for(let j of b)j.grabCtl.release("cancel"),j.physics.cancelHop(),j.world.pinch.value=0,j.world.pinch.last=-10,j.raycast.pointer.has=!1,j.raycast.pointer.lastHit=!1;for(let j of h.keys())try{Kt.releasePointerCapture(j)}catch{}h.clear(),q.cancelDrag(),Kt.style.cursor="",B.mug.cancel(),F=null}let ce=Hl(j=>ie(Math.min(j,1/30)),{onPause:fe});addEventListener("blur",fe);let ue=0;addEventListener("resize",()=>{ue||(ue=requestAnimationFrame(()=>{ue=0,E.layout(),E.updateBounds(),B.mug.fit(T.bounds)}))});for(let j=0;j<7;j++){let ye=Math.random()*Math.PI*2,oe=S.HALFW*(1.05+Math.random()*.8);g.addDrop(Math.cos(ye)*oe,Math.sin(ye)*oe*.7,.02+Math.random()*.05,9999)}u.physics.writeGeometry(),ce.start();let pe=new Promise(j=>setTimeout(j,2500));return Promise.race([document.fonts.ready,pe]).finally(()=>{o.compile(a,l),requestAnimationFrame(()=>{Kt.classList.add("ready"),setTimeout(()=>{u.expression.started=!0},Xe?0:350)})}),window.__pururu={get state(){return{body:{...T.body},sq:T.sq,grab:T.grab.on,sleeping:u.expression.ex.sleeping,count:r.value,flavor:e.state.flavor,theme:L.current,companion:d.enabled,toy:q.kind,objects:q.objects.filter(j=>j.visible).length,action:p.actions.current,mood:p.expression.ex.mood,photo:x.active,jaw:u.face.speech.value.x,resisting:u.expression.ex.resisting,N:S.N,frames:f,bounds:{...T.bounds}}},doJump:()=>p.actions.run("jump"),setFlavor:k,push:u.physics.push,setLang:i.set,t:i.t,get lang(){return i.get()},screen(){return u.slime.localToWorld(te.set(0,.1,.4)).project(l),{x:(te.x*.5+.5)*innerWidth,y:(-te.y*.5+.5)*innerHeight}}},{loop:ce}}Ou();
