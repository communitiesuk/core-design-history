---
title: Initial design for supported housing services
description: Exploring reducing the pain points around managing and choosing services.
date: 2022-05-09
authors:
- Hazel Sharpe
- Paul Lloyd
screenshots:
  - title: Managing schemes
    items:
      - text: Your organisation – Schemes
  - title: "Creating a new scheme"
    items:
      - text: Scheme details
      - text: Do you know the property’s postcode?
      - text: Do you know what local authority this scheme operates in?
      - text: What client groups is this scheme open to?
      - text: Does this scheme use a registered care home?
      - text: What level of support is given?
      - text: What is the intended length of stay?
      - text: What type of unit is the property?
      - text: How many units in this scheme?
      - text: What type of building is the property?
      - text: Is the property built or adapted to wheelchair-user standards
      - text: When does this scheme operate?
      - text: Check your answers before submitting
  - title: Selecting a scheme
    items:
      - text: What is the needs type?
      - text: Which scheme does this log relate to?
        caption: This question is shown in the single log submission journey if the data inputter selects ‘Supported housing’ for the needs type.
---

A supported housing service (or scheme) provides shared or self-contained housing for a particular client group, for example younger or vulnerable people. A single service can contain multiple units, for example bedrooms in shared houses or a bungalow with 3 bedrooms.

Logs for tenancies within a supported housing service will share a number of similar characteristics. Additional data also needs to be collected specifically for supported housing, such as the type of client groups served and type of support provided.

Asking these questions would require data inputters to re-enter the same information repeatedly and answer more questions than those asked for general needs lettings. Schemes exist in CORE to reduce this burden.

## Pain points

The current service has a number of pain points:

Approval
: Adding or changing a scheme currently required approval from DLUHC. This process is time consuming and laborious and causes delays to log submission, and customer support agents spend a lot of time dealing with queries around schemes.

Management groups
: Creating a management group feels complicated to users and causes confusion as these don’t exist in the context of schemes outside of CORE. Teams and organisations organise management groups in different ways resulting in inconsistent naming.

Finding a scheme
: Users struggle to find the correct scheme for the log they are submitting – especially because they have to find the correct management group first. This results in users selecting the wrong management group or scheme when submitting a log, which causes validation issues.

Our initial design looked at resolving these particular pain points by:

* allowing data coordinators to manage schemes without requiring an approval process.
* removing management groups and having a flat structure for organising schemes
* allowing data inputters to select the relevant scheme by typing in the name or postcode of the scheme, and presenting multiple points of data to help identify the correct scheme: client groups, scheme name and postcode.

## Key findings from the first round of usability testing

We tested the new design with 8 participants (6 who typically set up and manage schemes in CORE, and 2 who typically submit supported housing logs).

Participants who typically set up and manage schemes:

* were able to set up a scheme
* found the design “cleaner and clearer” and described it as “more responsive”
* found the list of schemes “neater” and “really helpful to see”
generally felt more confident they were answering the questions accurately
* were excited at being able to set up schemes without the consuming approval process

> “I like the summary at the end (check your answers) and the ability to go back and check and change stuff.”

We also observed some barriers:

### Where to start

Participants struggled to find where to set up and manage schemes – they didn’t expect to find it under ‘Your organisation’.

### Lack of guidance

Participants found the wording of the questions for level of support and intended length of stay unclear as they lacked specificity around duration or scale.

Participants answered the question about start and end date inconsistently – they didn’t understand what the dates referred to.

### Not enough variation within a scheme

Participants struggled to provide a single accurate answer for unit type, postcode and the mobility adaptation for the scheme. Accommodation within schemes varied, for example a scheme might include flats and bungalows, or some might be adapted for wheelchair users while others within the same scheme were not.

Similar to the current service, our initial designs required all the characteristics of the accommodation and the support to be consistent across a scheme. In reality it’s common for accommodation characteristics to vary within a scheme.

### Missing confirmation

Upon completion, participants didn’t feel confident they had set up their scheme.
