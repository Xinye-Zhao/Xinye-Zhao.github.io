---
layout: archive
title: "CV"
permalink: /cv/
published: true
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<style>
.cv-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin: 0.3rem 0 1.1rem;
}

.cv-action-link {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.42rem 0.95rem;
  border-radius: 999px;
  border: 1px solid #d7ccb8;
  background: #fffdfa;
  color: #2f2a24 !important;
  text-decoration: none !important;
  font-weight: 600;
  box-shadow: 0 6px 18px rgba(15, 23, 42, 0.06);
  transition: transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease;
}

.cv-action-link:hover {
  transform: translateY(-1px);
  border-color: #cbbba0;
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.1);
}

.cv-action-link--download {
  background: #f8f4ec;
  border-color: #d9c7a4;
}

.cv-preview-frame {
  width: 100%;
  min-height: 980px;
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  box-shadow: 0 14px 34px rgba(15, 23, 42, 0.08);
  background: #ffffff;
}
</style>

You can view or download my current research CV below.

<div class="cv-actions">
  <a class="cv-action-link cv-action-link--download" href="{{ base_path }}/files/main_research.pdf" target="_blank" rel="noopener noreferrer">
    <i class="fas fa-file-pdf" aria-hidden="true"></i>
    <span>Open PDF</span>
  </a>
  <a class="cv-action-link" href="{{ base_path }}/files/main_research.pdf" download>
    <i class="fas fa-download" aria-hidden="true"></i>
    <span>Download CV</span>
  </a>
</div>

<iframe
  class="cv-preview-frame"
  src="{{ base_path }}/files/main_research.pdf"
  title="Xinye Zhao research CV"
></iframe>
