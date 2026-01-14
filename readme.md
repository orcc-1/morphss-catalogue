Build a clean and minimal 11ty website following the screenshots attached. The website is an interactive 'catalogue of open research practices in humanities and social sciences' and has the following content structure.

'practices' and 'outputs' are both collections in which content is stored as .md with YAML frontmatter. Outputs are tagged with practices.

Practices directory is like this:
/practices/
  community-based-participatory-research/
    index.md
    versions/
      2023-04-02.md
      2023-11-15.md
  applying-care-principles-to-indigenous-material/
    index.md
    versions/
      2024-01-10.md
  open-documentation-of-methods/
    index.md
    versions/
      2022-09-30.md

And each practice page:
---
title: "Community-based Participatory Research"
slug: community-based-participatory-research
img: /source/path
description: Community-Based Participatory Research is a mode of co-produced research…
layout: practice
---

Outputs directory is like this:
/outputs/
  batista-leite-2024.md
  closa-2021.md
  braun-clarke-2025.md

And each output page:
---
citation: "Batista Leite, S. et al. (2024). “Promoting Reusable and Open Methods and Protocols (PRO-MaP) Can Improve Methodological Reporting in the Life Sciences.” *PLOS Biology*, 22(9)."
doi: "10.1371/journal.pbio.3002835"
tags:
  - community-based-participatory-research
  - open-documentation-of-methods
---

All outputs appear as a running list of citations with linked DOIs.

The layout of the practice page is two-column. On the right hand column there is an image on the top and below that only the outputs that were tagged with that practice.