---
title: Design changes after testing round three
date: 2021-08-16T23:00:00Z
related:
  items: []
author: Jon Roobottom

---
Using the feedback we'd gained in round 3 of testing the Alpha prototype, we made some changes to the prototype.

## The dashboard

The "dashboard" (as I've been calling it) is the first page users see when they log in. In testing, we found that it was generally well understood. However, there was some confusion around some of the content. We proposed the following changes:

1. Remove the search for now - this requires more research and design, we'll tackle it later.
2. Introduce a `h1` element "Your CORE logs" to help users orientate (especially screen reader users). We're assuming that we want to retain the word _CORE_ for now.
3. Reflow the page so there's more of a visual hierarchy
4. Redesign the tables:
   1. Remove the repetitive "edit" links and link the log reference
   2. Use the table `caption` elements
   3. Update the table captions to be more active:
      1. "Logs you need to complete" not "Submissions in progress"
      2. "Logs you’ve submitted" not "Submitted"
   4. Add Postcode and Tenant code columns so users can more easily tell which logs apart
   5. Change "date completed" to "date submitted" (this becomes "Last changed" in the "Logs you need to complete" table)
   6. Remove the `#` from log references
   7. Change "Log ID" to "Log reference"

![](/app/images/2021-08-17-dashboard-with-incomplete-logs.png 'The updated "dashboard"')