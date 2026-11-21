/* =============================================================================
   DeshiDokan — Animated Gram Banglar Haat Bazar background (shared)
   Usage:
     index.html   : <script src="haat-bg.js" data-target=".hero-bg"></script>
     login/register: <script src="../haat-bg.js"></script>   (fixed, full window)
   Pure SVG + CSS animation. No images, no libraries.
   ============================================================================= */
(function () {
  'use strict';
  if (document.getElementById('haatBg')) return;
  var sc = document.currentScript, sel = sc && sc.getAttribute('data-target');
  var host = sel ? document.querySelector(sel) : null;

  var C = { terra: '#C2693F', forest: '#1F4D36', deep: '#153827', cream: '#F6F0E3', gold: '#E9C46A', wood: '#8A5A36', wood2: '#5B3A22' };
  var VEG = ['#E06A2B', '#4E8F4A', '#B8312F', '#8DB66A', '#E9C46A'];
  var CLOTH = [C.terra, C.forest, C.gold, '#C94F6D', '#3E7A8C'];
  var i;

  /* ---------- people ---------- */
  function person(c, h, b) {
    return '<g class="hstep"><ellipse cx="0" cy="2" rx="18" ry="4" fill="#000" opacity=".15"/>' +
      '<rect class="hleg" x="-5" y="-46" width="10" height="46" rx="4" fill="#2D3A4A"/>' +
      '<rect class="hleg b" x="-5" y="-46" width="10" height="46" rx="4" fill="#3A4A5E"/>' +
      '<rect x="-13" y="-92" width="26" height="50" rx="11" fill="' + c + '"/>' +
      '<circle cx="2" cy="-106" r="12" fill="#C98F66"/>' +
      '<path d="M-10 -108Q-8 -122 4 -119Q15 -117 14 -106Q8 -112 -2 -111Z" fill="' + h + '"/>' +
      (b ? '<path d="M10 -80Q22 -66 20 -58" stroke="#C98F66" stroke-width="6" fill="none" stroke-linecap="round"/><ellipse cx="20" cy="-50" rx="14" ry="9" fill="#B8803A"/><path d="M8 -52h24" stroke="#8A5A36" stroke-width="2"/>' : '') +
      '</g>';
  }

  /* ---------- stall goods ---------- */
  function goods(t) {
    var g = '', k;
    if (t === 'veg') {
      for (k = 0; k < 5; k++) g += '<ellipse cx="' + (-84 + k * 42) + '" cy="-68" rx="21" ry="15" fill="' + VEG[k] + '"/><ellipse cx="' + (-84 + k * 42) + '" cy="-74" rx="12" ry="6" fill="#fff" opacity=".18"/>';
    } else if (t === 'pots') {
      for (k = 0; k < 4; k++) g += '<g transform="translate(' + (-78 + k * 52) + ' -62)"><path d="M-15 0h30q10-22-2-36h-26q-12 14-2 36z" fill="#B8603A"/><rect x="-12" y="-40" width="24" height="7" rx="3" fill="#8E4526"/><path d="M-12 -18h24" stroke="#F6E3D8" stroke-width="3" stroke-dasharray="2 5"/></g>';
    } else if (t === 'fabric') {
      for (k = 0; k < 5; k++) g += '<g class="hhang" style="animation-delay:-' + k + 's"><rect x="' + (-92 + k * 46) + '" y="-125" width="36" height="' + (70 + (k % 2) * 16) + '" fill="' + CLOTH[k] + '"/><path d="M' + (-74 + k * 46) + ' -92l7 10-7 10-7-10z" fill="#F6F0E3" opacity=".85"/><rect x="' + (-92 + k * 46) + '" y="-125" width="36" height="5" fill="#fff" opacity=".35"/></g>';
    } else if (t === 'sweets') {
      for (k = 0; k < 3; k++) {
        g += '<ellipse cx="' + (-60 + k * 60) + '" cy="-64" rx="25" ry="7" fill="#fff"/>';
        for (var m = 0; m < 4; m++) g += '<circle cx="' + (-72 + k * 60 + m * 8) + '" cy="' + (-72 - (m % 2) * 5) + '" r="6" fill="' + (m % 2 ? '#E9C46A' : '#F6F0E3') + '"/>';
      }
    } else if (t === 'tea') {
      g += '<path d="M-72 -62h28l-4-26h-20z" fill="#9AA5A0"/><path d="M-44 -80l14-8" stroke="#9AA5A0" stroke-width="5"/>' +
        '<path class="hsteam" d="M-30 -92q-6-10 0-18t0-16" stroke="#fff" stroke-width="3" fill="none"/>' +
        '<path class="hsteam d2" d="M-36 -92q-6-10 0-18t0-16" stroke="#fff" stroke-width="3" fill="none"/>';
      for (k = 0; k < 3; k++) g += '<rect x="' + (0 + k * 24) + '" y="-76" width="13" height="14" rx="3" fill="#F3C7AE"/>';
    }
    return g;
  }

  /* ---------- a bamboo stall (chala) ---------- */
  function stall(x, y, s, o) {
    var can = '<g class="hsway">', k, a, b, c;
    for (k = 0; k < 6; k++) {
      a = -125 + k * 41.67; b = a + 41.67; c = k % 2 ? o.c2 : o.c1;
      can += '<path d="M' + a + ' -170L' + b + ' -170L' + (b * 1.12) + ' -125L' + (a * 1.12) + ' -125Z" fill="' + c + '"/>' +
        '<path d="M' + (a * 1.12) + ' -125Q' + ((a + b) * .56) + ' -105 ' + (b * 1.12) + ' -125Z" fill="' + c + '"/>';
    }
    can += '<path d="M-125 -170Q0 -196 125 -170Z" fill="' + o.c1 + '"/></g>';
    var board = o.t === 'tea' ? '<rect x="-52" y="-158" width="104" height="26" rx="6" fill="' + C.deep + '"/><text x="0" y="-140" text-anchor="middle" font-size="16" font-weight="600" fill="#F6F0E3" font-family="Hind Siliguri,Inter,sans-serif">চায়ের দোকান</text>' : '';
    return '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')">' +
      '<rect x="-109" y="-170" width="9" height="170" fill="' + C.wood2 + '"/><rect x="100" y="-170" width="9" height="170" fill="' + C.wood2 + '"/>' +
      '<circle cx="0" cy="-98" r="12" fill="#C98F66"/><rect x="-16" y="-88" width="32" height="30" rx="10" fill="' + o.shirt + '"/>' +
      '<rect x="-112" y="-62" width="224" height="62" rx="4" fill="' + C.wood + '"/><rect x="-112" y="-62" width="224" height="10" fill="#A5693E"/>' +
      '<rect x="-100" y="-48" width="200" height="48" fill="' + o.cloth + '" opacity=".9"/><path d="M-100 -30h200" stroke="#F6E3D8" stroke-width="3" stroke-dasharray="3 9" opacity=".7"/>' +
      goods(o.t) + can + board + '</g>';
  }

  /* ---------- scenery ---------- */
  function palm(x, y, h, sc, dl) {
    var o = '<g transform="translate(' + x + ' ' + y + ') scale(' + sc + ')"><g class="hpalm" style="animation-delay:-' + dl + 's"><path d="M0 0Q' + (h * .12) + ' ' + (-h * .5) + ' ' + (h * .05) + ' ' + (-h) + '" stroke="#6B4A2E" stroke-width="7" fill="none" stroke-linecap="round"/><g transform="translate(' + (h * .05) + ' ' + (-h) + ')" fill="#2F6A3C">';
    [-70, -35, 0, 35, 70, 110, -110].forEach(function (a) { o += '<ellipse cx="0" cy="-22" rx="7" ry="30" transform="rotate(' + a + ')" opacity=".92"/>'; });
    return o + '</g></g></g>';
  }
  function tree(x, y, s) {
    return '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><path d="M-14 0Q-10 -90 -4 -150L10 -150Q14 -80 22 0Z" fill="#5B3A22"/><g class="htree" fill="#2F6A3C"><circle cx="0" cy="-190" r="70"/><circle cx="-60" cy="-160" r="50"/><circle cx="60" cy="-165" r="52"/><circle cx="10" cy="-240" r="48" fill="#3E7A4A"/><circle cx="-30" cy="-215" r="30" fill="#4E8F5A" opacity=".7"/></g></g>';
  }
  function hut(x) {
    return '<g transform="translate(' + x + ' 562)"><rect x="-22" y="-24" width="44" height="24" fill="#D8B68C"/><path d="M-30 -22L0 -50 30 -22Z" fill="#9A6B3E"/><rect x="-5" y="-16" width="10" height="16" fill="#5B3A22"/></g>';
  }
  function cloud(y, dur, dl, sc) {
    return '<g transform="translate(0 ' + y + ') scale(' + sc + ')"><g class="hcloud" style="animation-duration:' + dur + 's;animation-delay:-' + dl + 's" fill="#fff" opacity=".75"><ellipse cx="0" cy="0" rx="80" ry="18"/><ellipse cx="50" cy="-12" rx="52" ry="20"/><ellipse cx="100" cy="2" rx="60" ry="15"/></g></g>';
  }
  function bird(y, dur, dl) {
    return '<g transform="translate(0 ' + y + ')"><g class="hfly" style="animation-duration:' + dur + 's;animation-delay:-' + dl + 's"><path class="hflap" d="M0 0q8-10 16 0q8-10 16 0" stroke="#3C4A40" stroke-width="2.4" fill="none" stroke-linecap="round"/></g></g>';
  }

  /* ---------- bunting ---------- */
  var bunt = '<g class="hbunt"><path d="M-20 440Q800 520 1620 440" stroke="#5B3A22" stroke-width="2" fill="none"/>';
  for (i = 0; i < 28; i++) {
    var t = i / 27, bx = -20 + t * 1640, by = 440 + 160 * t * (1 - t);
    bunt += '<path d="M' + (bx - 9) + ' ' + by + 'L' + (bx + 9) + ' ' + by + 'L' + bx + ' ' + (by + 22) + 'Z" fill="' + [C.terra, C.gold, C.forest, '#F6F0E3', '#C94F6D'][i % 5] + '"/>';
  }
  bunt += '</g>';

  /* ---------- walkers ---------- */
  var W = [
    ['#C2693F', '#2A1A12', 1, 'r', 62, -5, 820, 1.1], ['#1F4D36', '#1E140F', 0, 'l', 70, -22, 850, 1.2],
    ['#E9C46A', '#3A2A20', 1, 'r', 80, -40, 800, 1.0], ['#F6F0E3', '#2A1A12', 0, 'l', 58, -12, 835, 1.15],
    ['#C94F6D', '#1E140F', 1, 'l', 90, -55, 870, 1.28], ['#3E7A8C', '#3A2A20', 0, 'r', 75, -30, 860, 1.25],
    ['#8DB66A', '#2A1A12', 1, 'r', 66, -48, 810, 1.05]
  ];
  var walkers = W.map(function (w) {
    var r = w[3] === 'r';
    return '<g transform="translate(0 ' + w[6] + ') scale(' + w[7] + ')"><g class="' + (r ? 'hwalk' : 'hwalkL') + '" style="animation-duration:' + w[4] + 's;animation-delay:' + w[5] + 's"><g transform="scale(' + (r ? 1 : -1) + ' 1)">' + person(w[0], w[1], w[2]) + '</g></g></g>';
  }).join('');

  /* ---------- rickshaw ---------- */
  function wheel(cx, cy, r) {
    return '<g transform="translate(' + cx + ' ' + cy + ')"><g class="hspin"><circle r="' + r + '" fill="none" stroke="#16201A" stroke-width="3.5"/><path d="M' + (-r) + ' 0H' + r + 'M0 ' + (-r) + 'V' + r + 'M' + (-r * .7) + ' ' + (-r * .7) + 'L' + (r * .7) + ' ' + (r * .7) + 'M' + (-r * .7) + ' ' + (r * .7) + 'L' + (r * .7) + ' ' + (-r * .7) + '" stroke="#16201A" stroke-width="1.5"/></g></g>';
  }
  var rick = '<g transform="translate(0 800)"><g class="hride" style="animation-duration:40s;animation-delay:-16s">' +
    '<ellipse cx="90" cy="30" rx="130" ry="6" fill="#000" opacity=".15"/>' +
    '<path d="M-30 -78Q30 -138 90 -78V-34H-30Z" fill="' + C.terra + '"/><path d="M-30 -78Q30 -138 90 -78" stroke="' + C.gold + '" stroke-width="5" fill="none"/>' +
    '<circle cx="10" cy="-66" r="7" fill="' + C.gold + '"/><circle cx="40" cy="-70" r="7" fill="' + C.cream + '"/><circle cx="70" cy="-62" r="7" fill="' + C.gold + '"/>' +
    '<rect x="-30" y="-34" width="130" height="14" rx="4" fill="' + C.forest + '"/>' +
    '<path d="M100 -26L150 -22M150 -22L170 -70M170 -70L190 -74" stroke="#16201A" stroke-width="5" fill="none" stroke-linecap="round"/>' +
    '<rect x="132" y="-34" width="28" height="8" rx="3" fill="#16201A"/>' +
    '<g transform="translate(148 -36) scale(.8)">' + person('#1F4D36', '#1E140F', 0) + '</g>' +
    wheel(10, -2, 28) + wheel(178, 4, 22) + '</g></g>';

  /* ---------- assemble ---------- */
  var back = [[55, 'tea', '#C94F6D', '#F6F0E3', '#7A4A2A', '#3E7A8C'], [445, 'sweets', '#1F4D36', '#E9C46A', '#8E4526', '#C2693F'], [835, 'veg', '#E9C46A', '#C2693F', '#3A5F4A', '#F6F0E3'], [1225, 'pots', '#3E7A8C', '#F6F0E3', '#C2693F', '#1F4D36'], [1615, 'fabric', '#C2693F', '#F6F0E3', '#1F4D36', '#E9C46A']]
    .map(function (b) { return stall(b[0], 612, .62, { t: b[1], c1: b[2], c2: b[3], cloth: b[4], shirt: b[5] }); }).join('');
  var front = [[250, 'veg', '#C2693F', '#F6F0E3', '#1F4D36', '#E9C46A'], [640, 'pots', '#1F4D36', '#F6F0E3', '#C2693F', '#C2693F'], [1030, 'fabric', '#E9C46A', '#C2693F', '#153827', '#1F4D36'], [1420, 'tea', '#C2693F', '#E9C46A', '#8A5A36', '#F6F0E3']]
    .map(function (b) { return stall(b[0], 705, 1, { t: b[1], c1: b[2], c2: b[3], cloth: b[4], shirt: b[5] }); }).join('');

  var far = '<path d="M0 560V520Q200 470 420 515T860 500T1280 512T1600 495V560Z" fill="#A9C9A4" opacity=".85"/>' +
    '<path d="M0 565V535Q260 505 520 532T1040 522T1600 530V565Z" fill="#8DB58C"/>';
  var huts = hut(120) + hut(380) + hut(720) + hut(1040) + hut(1330) + hut(1530);
  var palms = '';
  [60, 230, 470, 700, 930, 1150, 1390, 1560].forEach(function (x, n) { palms += palm(x, 566, 80 + (n * 23) % 50, .8 + (n % 3) * .12, n); });

  var svg = '<svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMax slice" aria-hidden="true">' +
    '<defs>' +
    '<linearGradient id="hSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F7D9B0"/><stop offset=".5" stop-color="#FBEBD0"/><stop offset="1" stop-color="#F6F0E3"/></linearGradient>' +
    '<radialGradient id="hSun"><stop offset="0" stop-color="#FFE2A8" stop-opacity=".9"/><stop offset="1" stop-color="#FFE2A8" stop-opacity="0"/></radialGradient>' +
    '<linearGradient id="hGround" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#D9C29B"/><stop offset="1" stop-color="#C4A878"/></linearGradient>' +
    '<linearGradient id="hFade" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F6F0E3" stop-opacity="0"/><stop offset="1" stop-color="#153827" stop-opacity=".35"/></linearGradient>' +
    '</defs>' +
    '<rect width="1600" height="900" fill="url(#hSky)"/>' +
    '<circle cx="1180" cy="230" r="170" fill="url(#hSun)"/><circle cx="1180" cy="230" r="54" fill="#F3A768"/>' +
    cloud(110, 150, 30, 1) + cloud(200, 200, 120, .7) + cloud(70, 240, 190, 1.2) +
    bird(150, 34, 8) + bird(210, 46, 20) + bird(110, 40, 30) +
    far + huts + palms +
    tree(40, 600, 1.05) + tree(1560, 604, 1.15) +
    '<rect y="560" width="1600" height="340" fill="url(#hGround)"/>' +
    '<rect y="556" width="1600" height="12" fill="#6FA06A" opacity=".7"/>' +
    '<ellipse cx="520" cy="860" rx="90" ry="9" fill="#9CC7C0" opacity=".45"/><ellipse cx="1220" cy="880" rx="120" ry="10" fill="#9CC7C0" opacity=".4"/>' +
    '<g stroke="#B89C6C" stroke-width="2" opacity=".5"><path d="M100 790h40M900 830h60M1400 800h50M300 870h50"/></g>' +
    back +
    '<rect y="440" width="1600" height="190" fill="#F6F0E3" opacity=".22"/>' +
    front + bunt + walkers + rick +
    '<rect y="600" width="1600" height="300" fill="url(#hFade)"/>' +
    '</svg>';

  /* ---------- styles ---------- */
  var css =
    '.haat{position:absolute;inset:0;overflow:hidden;pointer-events:none;z-index:0}' +
    '.haat.haat-fixed{position:fixed}' +
    '.haat svg{width:100%;height:100%;display:block}' +
    '.haat .veil{position:absolute;inset:0}' +
    '.haat.haat-host .veil{background:linear-gradient(90deg,rgba(248,243,231,.93) 0%,rgba(248,243,231,.78) 34%,rgba(248,243,231,.1) 66%,rgba(248,243,231,0) 100%)}' +
    '@media(max-width:1023px){.haat.haat-host .veil{background:rgba(248,243,231,.72)}}' +
    '.hero-bg .grid-bg,.hero-bg .blob{display:none}' +
    '.haat .hcloud{animation:hcloud linear infinite}@keyframes hcloud{from{transform:translateX(-320px)}to{transform:translateX(1900px)}}' +
    '.haat .hfly{animation:hfly linear infinite}@keyframes hfly{from{transform:translateX(-100px)}to{transform:translateX(1800px)}}' +
    '.haat .hflap{transform-box:fill-box;transform-origin:50% 100%;animation:hflap .5s ease-in-out infinite alternate}@keyframes hflap{to{transform:scaleY(.4)}}' +
    '.haat .hwalk{animation:hwalk linear infinite}@keyframes hwalk{from{transform:translateX(-150px)}to{transform:translateX(1750px)}}' +
    '.haat .hwalkL{animation:hwalkL linear infinite}@keyframes hwalkL{from{transform:translateX(1750px)}to{transform:translateX(-150px)}}' +
    '.haat .hride{animation:hride linear infinite}@keyframes hride{from{transform:translateX(-380px)}to{transform:translateX(1950px)}}' +
    '.haat .hspin{transform-box:fill-box;transform-origin:50% 50%;animation:hspin .9s linear infinite}@keyframes hspin{to{transform:rotate(360deg)}}' +
    '.haat .hstep{animation:hstep .6s ease-in-out infinite alternate}@keyframes hstep{to{transform:translateY(-3px)}}' +
    '.haat .hleg{transform-box:fill-box;transform-origin:50% 0;animation:hleg .6s ease-in-out infinite alternate}' +
    '.haat .hleg.b{animation-direction:alternate-reverse}@keyframes hleg{from{transform:rotate(-16deg)}to{transform:rotate(16deg)}}' +
    '.haat .hsway{transform-box:fill-box;transform-origin:50% 0;animation:hsway 5s ease-in-out infinite alternate}@keyframes hsway{from{transform:rotate(-.8deg)}to{transform:rotate(1deg)}}' +
    '.haat .hhang{transform-box:fill-box;transform-origin:50% 0;animation:hhang 3.6s ease-in-out infinite alternate}@keyframes hhang{from{transform:rotate(-3deg)}to{transform:rotate(3deg)}}' +
    '.haat .hpalm{transform-box:fill-box;transform-origin:50% 100%;animation:hpalm 6s ease-in-out infinite alternate}@keyframes hpalm{from{transform:rotate(-1.8deg)}to{transform:rotate(2deg)}}' +
    '.haat .htree{transform-box:fill-box;transform-origin:50% 100%;animation:hpalm 8s ease-in-out infinite alternate}' +
    '.haat .hbunt{animation:hbunt 4s ease-in-out infinite alternate}@keyframes hbunt{to{transform:translateY(3px)}}' +
    '.haat .hsteam{animation:hsteam 3s ease-out infinite;opacity:0}.haat .hsteam.d2{animation-delay:-1.5s}' +
    '@keyframes hsteam{0%{opacity:0;transform:translateY(0)}30%{opacity:.7}100%{opacity:0;transform:translateY(-34px)}}' +
    '@media(prefers-reduced-motion:reduce){.haat *{animation:none!important}}';

  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  var el = document.createElement('div');
  el.id = 'haatBg';
  el.className = 'haat ' + (host ? 'haat-host' : 'haat-fixed');
  el.setAttribute('aria-hidden', 'true');
  el.innerHTML = svg + '<div class="veil"></div>';
  var parent = host || document.body;
  parent.insertBefore(el, parent.firstChild);
})();
