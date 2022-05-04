---
title: Completing, reviewing and submitting a single log
description: Helping users understand the status of a single log.
date: 2022-05-04
author: Paul Lloyd
---

In larger organisations different users may be responsible for collecting and entering different bits of information about a log.

For example, administrators may enter information about the tenancy using information available in the organisation’s housing management system, while housing officers may enter information they have collected after interviewing a tenant.

Splitting a log into thematically related sections makes it easier for different users to complete the parts of the log they are responsible for.

[The task list pattern](https://design-system.service.gov.uk/patterns/task-list-pages/) helps users find and complete the sections they are responsible for and quickly see which sections still need completing.

***

## First design iteration

Our original design for the task list included a final declaration section as a way of providing a conclusive end to the log submission journey.

![](/2021-08-19-task-list-new.png)

We briefly looked at using this final declaration step to ask data inputters to confirm that the tenant or buyer had seen the privacy notice, but [that question was moved so that it would appear earlier in the user journey](https://core-design-history.netlify.app/privacy-notice/).

***

## Second design iteration

There is a need for some users, in particular data coordinators, to be able to review an entire log.

We considered making the final step an opportunity for users to review all the answers given before submitting a log:

![Screenshot of review button.](review-call-to-action.png "Review button shown at the foot of the task list.")

After reviewing a log, clicking the submit button would validate answers, with any issues highlighted using the [error summary component](https://design-system.service.gov.uk/components/error-summary/), and error messages in summary lists:

![Screenshot of error summary.](review-error-summary.png "Error summary shown on the review page lists all missing or invalid answers.")

![Screenshot of error message.](review-error-message.png "Error messages shown in a summary list containing missing answers.")

***

## Final design iteration

We envisaged logs having 5 statuses:

![Original statuses.](statuses-original.png)

Not started
: A log has been created but is still being set up.

In progress
: A log has been created, but questions still need to be answered.

Completed​
: All questions have been answered and validated. This state requires no action from a user; a log is either completed or it isn’t.​

Submitted​
: All answers have been reviewed, and the log has been submitted. This state does require action from the user; a ‘submit’ button has to be clicked.​

Archived
: The log can no longer be edited as the collection window has now closed.

While ‘submit’ might appear to be a one-time action per log, in reality it’s an event that occurs once a year across all logs.​ ‘Submitted’ logs can in fact be edited until three months after the current collection period has closed.​

This raised a number of questions:

* What should we do with logs that have been submitted and then edited?
* What about logs that were submitted, but have unsubmitted edits when the collection window closes?
* Would we need to manage multiple versions of a log (edited and submitted)?​

Having users need to click a submit button not only introduces an additional step, but reinforces the idea that logs cannot be changed once they’ve been submitted, which is not correct.

### Reduced number of statuses

![Revised statuses.](statuses-revised.png)

We decided to reserve the ‘submitted’ status to the point when a log can no longer be edited, which is once a collection window has closed.

Until that point, a log can either be ‘in progress’ or ‘completed’. Any change to a completed log resulting in another question becoming unanswered would return it to the ‘In progress’ state.

### Made reviewing a log optional

Instead of having a review step shown before submitting, we can instead provide a link to the review page for users who want to see an entire log:

![Screenshot of completed log showing link to review page.](log-status.png "Completed logs show a link to review the completed log.")

![Screenshot of review log page.](review-log.png "Review log page.")
