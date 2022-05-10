---
title: Iterating the design for supported housing services
description: Rethinking how supported housing services should be organised and managed within the service.
date: 2022-05-10
authors:
- Hazel Sharpe
- Paul Lloyd
screenshots:
  - title: "Managing services"
    items:
      - text: Supported housing services
      - text: Service details
      - text: Service locations
      - text: What is the status of this service?
        caption: We now ask for an explicit status rather than the dates in which a service is visible on the service.
      - text: Check your answers before updating this service
        caption: Before confirming any changes to a service, the user is asked how the change should be applied.
  - title: "Creating a new service"
    items:
      - text: Create a new supported housing service
      - text: What client group is this service open to?
      - text: Does this service provide for another client group?
      - text: What support does this service provide?
      - text: Add a location to this service
        caption: A separate question prompts users to confirm if they want to create another location.
      - text: Check your answers before creating this service
      - text: Confirmation banner
        caption: We now show a confirmation banner once a service has been created.
  - title: "Selecting a service"
    items:
      - text: What is the needs type?
        caption: We added guidance about what the different needs types mean.
      - text: What service is this log for? (for a data provider)
        caption: Data providers are encouraged to contact a data coordinator at the owning organisation if they can’t find a service.
      - text: What service is this log for? (for a data coordinator)
        caption: Data coordinators can create a new service if the one they need has not yet been created.
      - text: Which location used by [service name] is this log for?
        caption: If a service operates at a number of locations, data inputters are asked which location a log relates to.
---

Following on from [our initial design](/supported-housing-services/), we made the following changes:

* Reintroduced a 2-tier model for organising schemes (a scheme can now include multiple properties)
* Renamed ‘schemes’ to ‘services’
* [Revised the navigation to support different user roles and responsibilities](/primary-navigation)
* Reduced the number of steps in the scheme creation flow
* Added a confirmation message when a new scheme has been created
* Added guidance to clarify the different durations of stay and levels of support
* Added the ability to search and filter services

## Key findings from the second round of usability testing

We tested the new design with 9 participants (4 who typically set up and manage schemes in CORE, and 5 who typically submit supported housing logs).

For those who typically setup and manage schemes, they:

* were able to easily set up a scheme
* were able to find a scheme they had previously set up and were able to easily make changes to a scheme
* found it useful to add another property as part of the same scheme.

For those who submit logs:

* some were able to select the correct scheme in the context of submitting a supported housing log. Seeing the client group in addition to the name of the scheme helped to confirm they had selected the correct scheme.

We also observed a few outstanding barriers:

### Client group terminology

One participant confused rough sleepers with homeless people – they weren’t clear there was a distinction between these client groups.

### Audit trails

When editing a scheme, participants wanted a history of changes to be visible.

### Adding multiple properties

Participants didn’t initially understand that a service could contain multiple properties.

### Missed the autocomplete

When selecting a scheme as part of submitting a supported housing log, participants didn’t always notice the autocomplete functionality, they simply clicked enter after entering the name of a scheme.

## Final design iteration

Based on the above findings, and prior to implementing and iterating the design during private beta:

* Added guidance about what a supported housing service is, as well as suggestions for how to name a service.
* Selecting a managing agent now uses the autocomplete component (as an organisation may work with a number of managing organisations)
* Replaced start and end dates with a status that can toggle a scheme between inactive and active – dates appeared to be used primarily to control when schemes would be visible on the service
* Added an explicit question with radio options about adding another property in place of a secondary button
* Renamed ‘properties’ to ‘locations’ as postcodes can encompass multiple properties.
* Added group and scheme codes (these are required when completing the bulk upload template or when completing the paper form)
* Added guidance for data providers about contacting a data coordinator if they can’t see the scheme they are looking for.

We also learnt that client groups have a priority, so now we ask for a primary client group and an optional secondary client group.
