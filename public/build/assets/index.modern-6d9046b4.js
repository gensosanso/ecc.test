var l=new Map;function u(t){if(l.has(t))return l.get(t);var a=v(t);return l.set(t,a),a}var v=function(){var t=null;try{t=document.createElement("canvas").getContext("2d")}catch{}if(!t)return function(){return!1};var a=25,e=20,s=Math.floor(a/2);return t.font=s+"px Arial, Sans-Serif",t.textBaseline="top",t.canvas.width=e*2,t.canvas.height=a,function(n){t.clearRect(0,0,e*2,a),t.fillStyle="#FF0000",t.fillText(n,0,22),t.fillStyle="#0000FF",t.fillText(n,e,22);for(var f=t.getImageData(0,0,e,a).data,o=f.length,r=0;r<o&&!f[r+3];r+=4);if(r>=o)return!1;var c=e+r/4%e,p=Math.floor(r/4/e),i=t.getImageData(c,p,1,1).data;return!(f[r]!==i[0]||f[r+2]!==i[2]||t.measureText(n).width>=e)}}();function E(t="Twemoji Country Flags",a="https://cdn.jsdelivr.net/npm/country-flag-emoji-polyfill@0.1/dist/TwemojiCountryFlags.woff2"){if(u("😊")&&!u("🇨🇭")){const e=document.createElement("style");return e.textContent=`@font-face {
      font-family: "${t}";
      unicode-range: U+1F1E6-1F1FF, U+1F3F4, U+E0062-E0063, U+E0065, U+E0067,
        U+E006C, U+E006E, U+E0073-E0074, U+E0077, U+E007F;
      src: url('${a}') format('woff2');
      font-display: swap;
    }`,document.head.appendChild(e),!0}return!1}export{E as t};
