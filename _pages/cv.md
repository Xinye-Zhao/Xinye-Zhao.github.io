---
layout: archive
title: "CV"
permalink: /cv/
published: false
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Education
======
* Ph.D. in Computer Science and Engineering, University of Notre Dame, Expected May 2029
* M.S. in Electrical and Computer Engineering, Georgia Institute of Technology, August 2021 - July 2024, GPA: 4.0
* B.E. in Electrical Engineering, Dalian Maritime University, September 2016 - July 2020, GPA: 3.95

Work experience
======
* September 2025 - Present: Graduate Research Assistant, Computer Science and Engineering
  * University of Notre Dame, South Bend, IN
  * Designed a KV-cache sharing framework for semantically similar prompts to minimize recomputation.
  * Developing a multi-agent system that simulates human hacker behavior to detect vulnerabilities in C/C++.

* August 2024 - September 2025: Graduate Research Assistant, Computer Science and Engineering
  * University of Notre Dame, South Bend, IN
  * Designed a KV-cache sharing framework for semantically similar prompts to minimize recomputation.
  * Integrated RoPE into vector embeddings to preserve positional information during fuzzy token matching.
  * Achieved a 6.25x speedup and a 42% reduction in memory usage during LLM inference.

* September 2023 - August 2024: Graduate Research Assistant, Electrical and Computer Engineering
  * Georgia Institute of Technology, Atlanta, GA
  * Studied smart-speaker network behavior with a focus on eavesdropping and targeted advertising.
  * Built an automated testing setup with tablets and smart speakers to analyze behavior.
  * Used FFT-based temporal features to analyze traffic from pcap files.

* June 2022 - June 2024: Graduate Research Assistant, Computer Science
  * Georgia Institute of Technology, Atlanta, GA
  * Contributed to scDisInFact for batch effect removal, key gene detection, and perturbation prediction.
  * Used multiple encoders to disentangle shared and unshared biological factors.

* June 2022 - June 2023: Graduate Research Assistant, Biomedical Engineering
  * Georgia Institute of Technology, Atlanta, GA
  * Developed scMODD for doublet detection in scRNA-seq data.
  * Modeled gene expression with Negative Binomial and Zero-Inflated Negative Binomial distributions.

* December 2020 - June 2021: Frontend Engineer, Lark Document
  * Bytedance, Shenzhen, China
  * Developed the Popover Toolbar for the Table component.
  * Implemented end-to-end tests using Mocha, Puppeteer, and Chai.
  * Designed UI styles and buttons with Styled-Components.
  
Skills
======
* Programming Languages: Python, JavaScript, Assembly, C++
* Libraries and Tools: PyTorch, Wireshark, IDA Pro, React, Pandas, OpenCV, Docker
* ML Architectures: LLM, SSD, Transformers

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Honors & Awards
======
* National Scholarship (B.S.), awarded three consecutive years
* Top Graduate (Rank 1/120), Dalian Maritime University
* Outstanding Undergraduate Thesis Award
* Striving for Excellence in College and University Teaching, Certificate of Completion

Academic Service
======
* ICDM 2025 Demo Track, Program Committee Member
* HPDC 2025, Reviewer

Leadership & Service
======
* Software Mentor, StarkHacks, Purdue University campus
* VP of Membership, Techmasters, Georgia Tech Toastmasters
* Volunteer, Georgia Aquarium
