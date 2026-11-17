// ==UserScript==
// @name         SyNNeR Violentmonkey Update Canary
// @namespace    https://github.com/SyNNeR6x3/violentmonkey-update-canary
// @version      0.2.0
// @description  Harmless automatic update test. Runs only on example.com.
// @author       SyNNeR
// @match        https://example.com/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/SyNNeR6x3/violentmonkey-update-canary/main/canary.user.js
// @downloadURL  https://raw.githubusercontent.com/SyNNeR6x3/violentmonkey-update-canary/main/canary.user.js
// ==/UserScript==

(() => {
  'use strict';
  const show = () => {
    if (document.getElementById('synner-update-canary')) return;
    const badge = document.createElement('div');
    badge.id = 'synner-update-canary';
    badge.textContent = 'SyNNeR Canary UPDATED | v0.2.0';
    Object.assign(badge.style, { position: 'fixed', top: '12px', right: '12px', zIndex: '2147483647', padding: '12px 16px', background: '#17324d', color: '#fff', font: 'bold 14px system-ui', borderRadius: '9px', boxShadow: '0 2px 12px #0005' });
    document.body.appendChild(badge);
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', show, {once:true});
  else show();
})();
