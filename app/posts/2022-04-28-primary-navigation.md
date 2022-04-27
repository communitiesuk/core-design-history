---
title: Navigation improvements
description: Introducing a primary navigation component to surface all the main sections of the service.
date: 2022-04-28
author: Paul Lloyd
screenshots:
  items:
    - text: Signed out header with sign in link in header navigation
      src: new-primary-navigation-signed-out.png
    - text: Signed in navigation shown to data providers
      caption: A link to ‘Your account’ is shown in the header navigation alongside the ‘Sign out’ link.
      src: new-primary-navigation-provider.png
    - text: Signed in navigation shown to data coordinators
      caption: Data coordinators see an additional ‘Supported housing’ link.
      src: new-primary-navigation-coordinator.png
    - text: Organisation details
      caption: This page no longer requires any secondary navigation.
      src: new-primary-navigation-coordinator-organisation.png
    - text: Navigation shown to customer support agents
      caption: Using a different border colour for the header indicates that this is an environment with elevated privileges.
      src: new-primary-navigation-support.png
---

Previously, navigation items were shown in the header below the service name:

![Previous header navigation](old-header-navigation.png)

Navigation contained 4 items:

* Logs
* Your organisation
* Your account
* Sign out

Within ‘Your organisation’, data coordinators could see secondary navigation:

![Previous organisation page with secondary navigation](old-header-navigation-organisation.png)

This contained the following items:

* Details
* Users
* Schemes (only shown for data coordinators in a stock owning organisations)

For data providers, whose primary task is to complete a log, this navigation worked. However, when we asked data coordinators to carry out a task such as to edit or create a supported housing scheme, they were unable to find where they could do this.

Burying navigation items below ‘Your organisation’ made it difficult for those users to find management-orientated pages. These pages also required an additional click to reach them.

## The primary navigation component

The design for navigation items in the header isn’t well suited to showing primary navigation items. The text is small and blends into the overall header, which users may overlook when searching for a particular link. The currently active navigation item is also not shown very clearly.

The MOJ Pattern Library includes a [primary navigation component](https://design-patterns.service.justice.gov.uk/components/primary-navigation/). The links are larger, and visually separated from the header. The [GOV.UK Design System](https://design-system.service.gov.uk) website uses a variation of this design:

![Screenshot of primary navigation](design-system-primary-navigation.png "Primary navigation component used on the GOV.UK Design System website.")

We can keep the header navigation for utility links such as account management, but use this primary navigation component to provide links for the major sections of the service. This also allows us to gives navigation links a visual hierarchy.

## Hypotheses

We believe that a flatter information architecture and using the primary navigation component will make it easier for all user types to complete the task relevant to them because links to all areas of the service will be visible and more prominent.
