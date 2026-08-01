---
permalink: /
title: "Xinye Zhao (Jasper)"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<style>
.homepage-contact-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
  margin: 1rem 0 1.25rem;
}

.homepage-contact-label {
  font-size: 0.98rem;
  font-style: italic;
  font-weight: 700;
  letter-spacing: 0.01em;
  color: #6b7280;
  margin-right: 0.15rem;
}

.homepage-contact-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.48rem 0.95rem;
  border-radius: 999px;
  border: 1px solid #ddd6c8;
  background: #fffdfa;
  color: #2f2a24 !important;
  text-decoration: none !important;
  font-size: 0.96rem;
  font-weight: 600;
  box-shadow: 0 6px 18px rgba(15, 23, 42, 0.06);
  transition: transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease;
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

.homepage-last-updated {
  display: inline-block;
  margin-top: -0.35rem;
  margin-bottom: 1.15rem;
  padding: 0.22rem 0.65rem;
  border-radius: 999px;
  background: #f3f4f6;
  border: 1px solid #e5e7eb;
  color: #6b7280;
  font-size: 0.82rem;
  font-style: italic;
  letter-spacing: 0.01em;
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
</style>

I am a Ph.D. student in Computer Science and Engineering at the University of Notre Dame, advised by Prof. Joanna C.S. Santos. My current work focuses on AI4SE (AI for Software Engineering) and software engineering security.

My recent research centers on AI for software engineering security, especially agentic and reasoning-based methods that help developers analyze, validate, and improve the security of software systems. I am particularly interested in how multi-agent architectures and LLM-based reasoning can support security-critical engineering workflows such as secure code analysis, vulnerability assessment, and assurance for real-world domains including medical device software. My previous work spans systems for machine learning, including LLM KV cache optimization; AI for Science, including computational biology research on single-cell learning systems; and IoT network traffic analysis.

Before joining Notre Dame, I completed an M.S. in Electrical and Computer Engineering at Georgia Tech and a B.E. in Electrical Engineering at Dalian Maritime University.

<div class="homepage-contact-row">
  <span class="homepage-contact-label">Contact Me:</span>
  <button type="button" class="homepage-contact-button homepage-contact-button--email js-copy-email" data-email="xzhao24@nd.edu" aria-label="Copy email address">
    <i class="fas fa-envelope" aria-hidden="true"></i>
    <span class="js-copy-email-label">xzhao24@nd.edu</span>
  </button>
  <a class="homepage-contact-button homepage-contact-button--linkedin" href="https://linkedin.com/in/xinye-zhao" target="_blank" rel="noopener noreferrer">
    <i class="fab fa-linkedin" aria-hidden="true"></i>
    <span>LinkedIn</span>
  </a>
</div>

<div class="homepage-last-updated">
  Last updated: {{ site.time | date: "%B %Y" }}
</div>

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

## Research Interests

- AI4SE (AI for Software Engineering)
- Software engineering security
- LLM systems and efficient inference
- AI agents for vulnerability detection

## Recent Highlights

- <span class="homepage-news-badge">News</span> August 2026: <span class="homepage-news-title">“Towards Budget-Aware Early Candidate Selection for Vulnerability Analysis”</span> accepted to EXPRESS 2026.
- <span class="homepage-news-badge">News</span> July 2026: <span class="homepage-news-title">“TriVul: Improving Precision of Static Vulnerability Detection through Multi-Agent Reasoning”</span> accepted to the Static Analysis Symposium (SAS 2026).
- Accepted paper: *SemShareKV: Efficient KVCache Sharing for Semantically Similar Prompts via Fuzzy Token Matching* (IJCNLP 2025)
- Graduate Research Assistant, University of Notre Dame
- Program committee member for ICDM 2025 Demo Track and reviewer for HPDC 2025
- Served as a software mentor at StarkHacks on the Purdue University campus

<!-- Template for future news items:
- <span class="homepage-news-badge">News</span> Month Year: <span class="homepage-news-title">“Paper or event title”</span> short update text.
-->
