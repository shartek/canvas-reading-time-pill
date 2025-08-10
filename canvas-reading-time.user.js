// ==UserScript==
// @name         Canvas RCE Reading Time Range (MM:SS Format)
// @namespace    Sharscapes - Canvas Tools
// @version      1.9
// @description  Show and update reading time range next to word count in Canvas Rich Content Editor
// @match        https://*.instructure.com/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  const WPM_FAST = 200;
  const WPM_SLOW = 150;
  const UPDATE_INTERVAL_MS = 15000; // 15 seconds

  const formatTime = (words, wpm) => {
    const totalSeconds = Math.round((words / wpm) * 60);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const updatePill = () => {
    const wordCountBtn = document.querySelector('button[data-btn-id="rce-wordcount-btn"]');
    if (!wordCountBtn) return;

    const wordText = wordCountBtn.textContent;
    const wordMatch = wordText.match(/(\d+)\s+words/);
    if (!wordMatch || parseInt(wordMatch[1], 10) === 0) return;

    const wordCount = parseInt(wordMatch[1], 10);
    const fastTime = formatTime(wordCount, WPM_FAST);
    const slowTime = formatTime(wordCount, WPM_SLOW);

    console.log(`[Sharscapes] Word count: ${wordCount}, Reading time: ${fastTime} – ${slowTime}`);

    let pill = wordCountBtn.parentElement.querySelector('.reading-time-pill');
    if (!pill) {
      pill = document.createElement('span');
      pill.className = 'reading-time-pill';
      pill.style.marginLeft = '1em';
      pill.style.background = '#ddf1fd';
      pill.style.color = '#085586';
      pill.style.padding = '0.25em 0.75em';
      pill.style.borderRadius = '1em';
      pill.style.fontSize = '80%';
      pill.style.whiteSpace = 'nowrap';
      pill.title = 'Estimated reading time (150–200 WPM). Updates every 15 seconds.';
      wordCountBtn.parentElement.appendChild(pill);
    }

    pill.textContent = `${fastTime} – ${slowTime}`;
  };

  // Initial injection after short delay
  setTimeout(updatePill, 1000);

  // Update every 15 seconds
  setInterval(updatePill, UPDATE_INTERVAL_MS);
})();
