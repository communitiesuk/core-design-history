---
title: Design changes after third round of Beta testing (December 2021)
date: '2021-12-20'
related:
  items: []
author: Kimberley Frame
tags: []

---
# Beta Round 3 - Design changes after testing (December 2021)

Following team design ideation informed from 2 rounds of user research, the third round of Beta user research, focused on testing these new ideations in two previously untested CORE sections - Household Characteristics and Finance.

## Hypotheses

1. If we prevent users from making changes to the ‘about this log’ section once completed, but allow them to change the 'tenant code' and 'property reference', then users can correct a mistake without having to create a new log.
2. If we introduce new breadcrumbs and new navigation buttons, then users can navigate to different sections of the log.
3. If we display only one question per page when answering about multiple tenants in the Household Characteristics section, rather than as a grid for all tenants, then users are still able to complete without additional burden.
4. If we combine all the finance sections into one section then a user can complete the finance section without any obstacles .
5. If we present the user with a 'soft validation' message on the 'Household rent and charges’ question (in the finance section), then the user knows how to correct it.
6. If we introduce a new name for CORE, our current data providing users will relate it to what they do in CORE.
7. If we include guidance/instructional content on the Start page, users will know what to do in the service.

## Results

Hypothesis 1: This hypothesis was proved as users were able to make a change to the 'tenant code' when tasked to do so during the testing. However, some users were unable to locate the tenant code from the task list page, expecting to find it in the 'tenancy information' section rather than the 'about this log' section. Therefore, we plan to conduct research work around the naming conventions of the sections.

Hypothesis 2: This hypothesis was proven when all users were able to navigate to different sections of the log using the breadcrumbs and/or navigation buttons. However, they all used different routes to do so when trying to get back to the task list in order to complete the finance section. None of these routes were incorrect, but it means that the current navigation is not straightforward to users. Consequently, we are going to re-instate the current section as the heading, a back link on all question pages and only use breadcrumbs on the 'check your answers' page. Testing of the new buttons on the 'check your answers' page ('save and return to log', 'save and go to next incomplete section') was also successful with the majority of users favouring to use 'save and go to next incomplete section' to complete the sections of the log in order. 

![](/2021-12-20-new-check-answers-buttons.jpg)

Hypothesis 3: This was another success during testing because all participants easily completed the Household Characteristics section for at least 2 tenants, without feeling it was taking longer to complete than the current grid format. However, participants were confused by the terminology of the word 'tenant' when asked for the details of the people living there, expecting only 1 or 2 tenants and then occupiers (for example children of the tenant). To address this pain point, we will be working on new flows to allow users to state how many household members are tenants and how many are occupiers.

![](/2021-12-20-occupier-journey.jpg)

Hypothesis 4: Testing of this hypothesis proved unsuccessful because there are still pain points within the finance section making it difficult for the users to complete. These are all related to the 'household rent and charges' question - users were not clear what time period they are reporting on, participants were confused about the term 'basic rent' ("should it be net rent or other"), and if they didn't charge something they didn't know how to fill it in.

To address these, we will be looking at: an additional routing question for the supported housing journey, reviewing how we ask about the rent amount and any hint text requirements, and a suffix to number inputs e.g. 'per week' or 'per month'. 

![](/2021-12-20-household-rent-and-charges.jpg)

Hypothesis 5: was not true for these participants, as they did not notice the rent range warning, and when they did they didn't respond. Therefore, we need to help users acknowledge that a rent value is outside of an acceptable range, and we need to direct them to verify that it's right for them (and not an error) so that they can submit their log without future follow up.

One alternative solution might be to show an interruption screen if they enter a value that is outside the accepted range:

![](/2021-12-20-soft-validation-interruption.png)

Hypothesis 6: This hypothesis was proven because participants understood the service name to describe what they do in CORE. The new name has now been added to the prototype on the start page and banner.

![](/2021-12-20-service-name.jpg)

Hypothesis 7: The start page tested well with participants using it to start a new log and find out why they need to complete CORE. The start page served the purpose of getting participants to where they need to be as easily as possible.

### Other findings

From this testing iteration, we saw that users are still unsure about the call to action and content in the GDPR/privacy notice acceptance flow. We are going to make small content changes to this and then test it again.

When adding another tenant to the log, participants didn't notice that they needed to fill in the details of the additional person. This means that they may submit an incomplete log without the extra person's details. Therefore, we will be looking at how we might help users complete follow up questions when they have changed an answer.

For participants who typically complete logs that are pre-filled (rather than starting a log), they struggled to find where to start when we asked them to "Please use this website to complete a new lettings log for 2 tenants". Since they never start a new log from scratch, they were unsure about how to go about this task. We will consider this journey in future research. 

### 'How Might We' statements for design

Findings from user research have been turned into 'How Might We' statements for the design team to use as the basis for development work on the prototype.

* How might we help users understand what the section names mean and what questions each will include?
* How might we enable users to easily start a new section when they're mid-way through another section?
* How might we help users differentiate between tenants and occupiers, and their relationships?
* How might we make it easier for them to complete the rents and charges section if some elements don't apply to them?
* How might we help users understand what rent amount we require from them - e.g net rent or other?
* How might we make the user aware of what period they are reporting on when completing the household rent and charges?
* How might we help users acknowledge their rent range is outside of policy but can verify that it's right for them (and not an error)?
* How might we help users understand what the privacy notice is and why it needs to be signed?
* How might we help users complete follow up questions when they have changed an answer?