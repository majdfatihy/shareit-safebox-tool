/* sbx-k.js — مفاتيح مشفرة | لا تعدل هذا الملف يدوياً */
(function(g){
  var _k='SBX_TOOL_2026_K';
  function _d(s){
    var r=atob(s),b=[];
    for(var i=0;i<r.length;i++) b.push(r.charCodeAt(i)^_k.charCodeAt(i%_k.length));
    return new TextDecoder().decode(new Uint8Array(b));
  }
  g.__SBX__={
    p:  _d('GW0eKHs4Bzk4Bl1BBggMHyw0FmYtOHFi'),
    pp: _d('FHNoNH8mDTsPQlxHBTx8AAUfdC0kOHFi'),
    q:  _d('PCwsFi0BDAA2ZGN3HRlgNikdKSMsFQIpeXlGc2wlPDIuByYoPB5nYFVYVBoeNHMdEz97PTkZAmpfVDVgMgAcNg=='),
    a:  _d('JAsOGmQFAHwwVGdwQzEzOTIZJW19OHFi')
  };
})(window);
