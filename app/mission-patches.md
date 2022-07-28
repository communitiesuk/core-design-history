---
layout: page
title: Mission patches
description: Archive of patches created to celebrate milestones in the development of our service.
---

{% from "gallery/macro.njk" import appGallery with context %}

The mascot for CORE is a hermit crab named Shelly.

{{ appGallery({
  items: [{
    text: "Alpha",
    caption: "Shelly’s home is that of the Department for Levelling Up, Housing & Communities, dark blue. December 2021"
  }, {
    text: "Private beta",
    caption: "Shelly’s home now wears the branding of our first data provider (Believe Housing) and is seen drinking a Margarita, the team’s celebratory drink of choice. July 2022"
  }]
}) }}

## Print specifications

We use [Diginate](https://diginate.com) to print our stickers using the following specifications:

{% from "govuk/components/summary-list/macro.njk" import govukSummaryList %}

{{ govukSummaryList({
  classes: "govuk-!-width-two-thirds",
  rows: [{
    key: {
      text: "Product"
    },
    value: {
      text: "Vinyl stickers"
    }
  }, {
    key: {
      text: "Material"
    },
    value: {
      text: "Gloss"
    }
  }, {
    key: {
      text: "Shape"
    },
    value: {
      text: "Circular"
    }
  }, {
    key: {
      text: "Supply"
    },
    value: {
      text: "Individuals on a square backing"
    }
  }, {
    key: {
      text: "Diameter"
    },
    value: {
      text: "50mm"
    }
  }]
}) }}
