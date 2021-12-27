---
title: Design changes after testing ‘about this log’ round two (November 2021)
date: 2021-11-26
author: Kimberley Frame
---
After testing the ["about this log" section](https://core-design-history.netlify.app/beta-3/ '"about this log" section') in the first iteration of Beta user research we made some changes, and have now tested these in a second iteration.

## Hypotheses

1. If we introduce the task list at the start of the service, with an instruction to ‘skip to next incomplete section’, we will reduce the confusion of how to interact with the task list, and the user will feel more confident about how to move through the service.
  ![](/2021-11-26-before-you-start.jpg)
2. If we prevent users from making changes to the ‘about this log’ section once completed, the use of an additional guidance panel (‘Twisty’), informing the users why they can’t change their answers, will reassure them and direct them to the correct call to action if needed.
   ![](/2021-11-26-can-t-change-answers.jpg)
3. If users are shown ‘additional answers’ that have been inferred from intelligent routing, the user will know that the information required has still been submitted, without being asked unnecessary questions.
   ![](/2021-11-26-additional-answers.jpg)
4. If we re-introduce the longer list of answer options for ‘reason for vacancy’ in the ‘property information' section, when the property is a ‘re-let’, then users will be able to select the most appropriate option, reducing confusion previously created by new questions.
   ![](/beta-3/reasons-for-vacancy.png)
5. If users can type in the Local Authority they want, rather than selecting from a long list, we can reduce the burden of scrolling and therefore make this question quicker and easier to complete.
   ![](/beta-3/type-ahead.png)

## Results

Hypothesis 1: This hypothesis was proved as the instruction made it clear to users where to start on an unfamiliar task list. However, the link in the instruction did not take the user straight into the about this log section, but simply highlighted the hyperlink.

Therefore, the prototype will be amended to take the user straight into the next incomplete section when this instruction at the top is selected.

Hypothesis 2: This needs more work as the participants in this round were still concerned that they would need to change the tenant code at this point due to typos or the tenant code not available at the time of starting the log. Since tenant code does not affect the routing of future questions we will be looking at making it possible to edit the tenant code and testing it further with users.

Hypothesis 3: The additional answers section did not test well with users and created more confusion rather than reducing the burden. Therefore we are no longer going to show users what answers have been inferred but keep an eye out for any issues that may arise from testing, for example, users thinking they have chosen the wrong form as the paper form in front of them has questions that were missed in the online CORE or that they have an old version of the paper form.

Hypothesis 4: This hypothesis was proven as we saw users confidently selecting the answer option they wanted from the longer list of ‘reason for vacancy’. For future iterations we are also going to test the addition of the numerical answer codes from the paper form onto online CORE.

Hypothesis 5: This hypothesis was proven and users successfully selected their local authority from the type-ahead.

## Other findings

From this testing iteration, we saw that users are still unsure how to navigate around the prototype effectively. Therefore we will be working on allowing users to navigate back to the log list from the task list using the breadcrumbs, allowing users to bypass the task list from the check your answers page, and how a user can navigate back to the main journey after making a change.

## User Stories

Findings from user research have been turned into user stories for the design team to use as the basis for development work on the prototype.

* As a data provider, I need to edit the tenant code in the ‘about this log’ section, so that I can correct a mistake without having to create a new log (addresses hypothesis 2)
* As a data provider, I want to be able to rekey log data _from_ the paper form _to_ the online form without getting confused that the online form doesn't ask me as many questions as the paper form, so that I can quickly and easily rekey log data without spending time feeling confused (addressing hypothesis 3)
* As a Data Provider, I want to be able to navigate back to the list of logs page, so that I can continue to add information to my logs efficiently (addressing navigation issues)
* As a data provider, I want to be able to change an answer and get back to the ‘check the answers page’ in few steps, so that the burden of entering data is reduced (addressing navigation issues)
* As a data provider, I want to quickly move through the online form without having to go back to the task list, so that I can increase the speed of entry (addressing navigation issues).
