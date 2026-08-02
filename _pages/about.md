---
permalink: /
title: "Xinye Zhao (Jasper)"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<style>
.homepage-contact-inline {
  margin: 0.2rem 0 1.1rem;
  font-size: 0.96rem;
  line-height: 1.55;
  color: #374151;
}

.homepage-contact-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.3rem 0.78rem;
  border-radius: 999px;
  border: 1px solid #ddd6c8;
  background: #fffdfa;
  color: #2f2a24 !important;
  text-decoration: none !important;
  font-size: 0.9rem;
  font-weight: 600;
  box-shadow: 0 6px 18px rgba(15, 23, 42, 0.06);
  transition: transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease;
  vertical-align: middle;
}

button.homepage-contact-button {
  font-family: inherit;
  cursor: pointer;
}

.homepage-contact-button:hover {
  transform: translateY(-1px);
  border-color: #cbbba0;
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.1);
}

.homepage-contact-button--email {
  background: #f8f4ec;
  border-color: #d9c7a4;
}

.homepage-contact-button--linkedin {
  background: #eef5fb;
  border-color: #b8d0e5;
}

.homepage-contact-button.is-copied {
  background: #edf5ef;
  border-color: #0c7c59;
  color: #14532d !important;
}

.homepage-news-badge {
  display: inline-block;
  margin-right: 0.38rem;
  padding: 0.08rem 0.5rem;
  border-radius: 999px;
  background: #f7ecef;
  border: 1px solid #8b2332;
  color: #7a1f2b;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  vertical-align: baseline;
}

.homepage-news-title {
  color: #0c2340;
  font-weight: 700;
}

.homepage-section-title {
  margin: 0.75rem 0 0.4rem;
  font-size: 1.1rem;
  line-height: 1.2;
}

.homepage-interest-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  margin: 0.2rem 0 0.9rem;
}

.homepage-interest-tag {
  display: inline-flex;
  align-items: center;
  padding: 0.28rem 0.72rem;
  border-radius: 999px;
  background: #f3f8fd;
  border: 1px solid #b9cee7;
  color: #0c2340;
  font-size: 0.86rem;
  font-weight: 600;
  line-height: 1.2;
}

.homepage-timeline {
  position: relative;
  margin: 0.2rem 0 0.2rem;
  padding-left: 1rem;
}

.homepage-timeline::before {
  content: "";
  position: absolute;
  left: 0.26rem;
  top: 0.25rem;
  bottom: 0.25rem;
  width: 1.5px;
  background: #d6dbe3;
}

.homepage-timeline-item {
  position: relative;
  margin-bottom: 0.62rem;
  padding-left: 0.85rem;
}

.homepage-timeline-item:last-child {
  margin-bottom: 0;
}

.homepage-timeline-item::before {
  content: "";
  position: absolute;
  left: -0.02rem;
  top: 0.35rem;
  width: 0.48rem;
  height: 0.48rem;
  border-radius: 50%;
  background: #c99700;
  box-shadow: 0 0 0 3px #f8fafc;
}

.homepage-timeline-date {
  display: block;
  margin-bottom: 0.12rem;
  color: #6b7280;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}

.homepage-timeline-text {
  margin: 0;
  font-size: 0.92rem;
  line-height: 1.38;
}
</style>

I am a Ph.D. student in Computer Science and Engineering at the University of Notre Dame, advised by Prof. Joanna C.S. Santos. My current work focuses on AI4SE (AI for Software Engineering) and software engineering security.

My recent research centers on AI for software engineering security, especially agentic and reasoning-based methods that help developers analyze, validate, and improve the security of software systems. I am particularly interested in how multi-agent architectures and LLM-based reasoning can support security-critical engineering workflows such as secure code analysis, vulnerability assessment, and assurance for real-world domains including medical device software. My previous work spans systems for machine learning, including LLM KV cache optimization; AI for Science, including computational biology research on single-cell learning systems; and IoT network traffic analysis.

<p class="homepage-contact-inline">
  Before joining Notre Dame, I completed an M.S. in Electrical and Computer Engineering at Georgia Tech. <strong>Contact:</strong>
  <button type="button" class="homepage-contact-button homepage-contact-button--email js-copy-email" data-email="xzhao24@nd.edu" aria-label="Copy email address">
    <i class="fas fa-envelope" aria-hidden="true"></i>
    <span class="js-copy-email-label">xzhao24@nd.edu</span>
  </button>
  or
  <a class="homepage-contact-button homepage-contact-button--linkedin" href="https://linkedin.com/in/xinye-zhao" target="_blank" rel="noopener noreferrer">
    <i class="fab fa-linkedin" aria-hidden="true"></i>
    <span>LinkedIn</span>
  </a>.
</p>

<script>
document.addEventListener('DOMContentLoaded', function () {
  var copyButton = document.querySelector('.js-copy-email');
  if (!copyButton) return;

  var defaultLabel = copyButton.querySelector('.js-copy-email-label');
  var defaultText = defaultLabel ? defaultLabel.textContent : 'xzhao24@nd.edu';
  var email = copyButton.getAttribute('data-email');

  copyButton.addEventListener('click', function () {
    if (!email) return;

    var setCopiedState = function () {
      copyButton.classList.add('is-copied');
      if (defaultLabel) defaultLabel.textContent = 'Copied!';
      window.setTimeout(function () {
        copyButton.classList.remove('is-copied');
        if (defaultLabel) defaultLabel.textContent = defaultText;
      }, 1800);
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email).then(setCopiedState);
      return;
    }

    var tempInput = document.createElement('input');
    tempInput.value = email;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    setCopiedState();
  });
});
</script>

<h2 class="homepage-section-title">Research Interests</h2>
<div class="homepage-interest-tags">
  <span class="homepage-interest-tag">AI4SE</span>
  <span class="homepage-interest-tag">Software Engineering Security</span>
  <span class="homepage-interest-tag">Systems for ML/LLMs</span>
</div>

<h2 class="homepage-section-title">Recent Highlights</h2>
<div class="homepage-timeline">
  <div class="homepage-timeline-item">
    <span class="homepage-timeline-date">August 2026</span>
    <p class="homepage-timeline-text"><span class="homepage-news-badge">News</span><span class="homepage-news-title">“Towards Budget-Aware Early Candidate Selection for Vulnerability Analysis”</span> accepted to EXPRESS 2026.</p>
  </div>
  <div class="homepage-timeline-item">
    <span class="homepage-timeline-date">July 2026</span>
    <p class="homepage-timeline-text"><span class="homepage-news-badge">News</span><span class="homepage-news-title">“TriVul: Improving Precision of Static Vulnerability Detection through Multi-Agent Reasoning”</span> accepted to the Static Analysis Symposium (SAS 2026).</p>
  </div>
  <div class="homepage-timeline-item">
    <span class="homepage-timeline-date">2025</span>
    <p class="homepage-timeline-text">Published in IJCNLP 2025: <em>SemShareKV: Efficient KVCache Sharing for Semantically Similar Prompts via Fuzzy Token Matching</em>.</p>
  </div>
  <div class="homepage-timeline-item">
    <span class="homepage-timeline-date">August 2024</span>
    <p class="homepage-timeline-text">Joined the University of Notre Dame as a Graduate Research Assistant.</p>
  </div>
  <div class="homepage-timeline-item">
    <span class="homepage-timeline-date">July 2024</span>
    <p class="homepage-timeline-text">Graduated from Georgia Tech with an M.S. in Electrical and Computer Engineering.</p>
  </div>
</div>
