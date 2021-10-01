---
title: Design changes after testing round three (Sprint 8)
date: 2021-08-16T23:00:00Z
related:
  items:
  - href: http://ec2-18-168-105-184.eu-west-2.compute.amazonaws.com/sprint8/
    text: Sprint 8 prototype
author: Jon Roobottom
---
Here are the changes we made after the user testing

## Dashboard

Jira ticket: CLDC-210

What I've been calling the dashboard (the list of logs) tested well. There was just a couple of bits of information missing.

### User story

As a Housing Officer, I want to be able to identify a log easily so that I can view and/or complete a partially filled log

### The changes

We redesigned the "Dashboard" page.

* Added in more information (Postcode and Tenancy code)
* Reduced visual noise
* Removed the "edit" link and made the Log reference active
* Updated labels

![](/2021-08-19-dashboard-with-incomplete-logs.png)

## Tasklist

Jira ticket CLDC-220

The Tasklist tested incredibly well. We heard users say things like "This is so much easier, you can see right away what you need to do".

The ordering of sections also worked well.

The feedback led to some new user stories:

### User stories

1. As a housing officer, I want to understand that I can complete sections in any order so that I can complete a valid log in the way that suits me and my organisation.
2. As a housing officer, I want questions to be grouped and ordered logically and intuitively so that I can complete a valid log quickly and easily.
3. As a housing officer, I want section labels to make sense to me so that I can quickly recognise what kind of questions will be in each.

### The changes

* Removed numbers to make it more obvious you can complete sections in any order
* Added a "Skip to" component to combat the "tab tab tab" problem for keyboard and screen reader users
* Added a "Declaration" section at the end, as the old "submit" button was off-pattern

![](/2021-08-19-task-list-new.png)

![](/2021-08-19-task-list-rules-for-skip-link.png)

## Check your answers

Jira tickets: CLDC-224 and CLDC-225

The natural partner of the Tasklist is the check your answers page. We found that users liked being able to check their answers after each section and weren't bothered if they could do this again right at the end.

Testing led to some new user stories.

### User stories

1. As a housing officer, when checking my answers, I want to scan the questions easily so that I can submit the log quickly.
2. As a housing officer, when I return to a log after some time and land on a check your answers page, I want to know what I should do first so that I can finish creating a log quickly and easily.
3. As a housing officer, when checking my answers I want the page to recognise that I've skipped questions so that I can either go back and complete or submit the log.
4. As a Housing Officer, I want the service to work intuitively when I have to leave a log halfway and return so that I can submit logs easily while managing other priorities

### The changes

* Added an "answer the missing questions" link
* "Change" CTA is now "Answer" when there's no answer
* Added some information about how many questions the user has answered

![](/2021-08-19-map-for-check-answers.png)

![](/2021-08-19-check-answers-at-the-end-of-a-section.png)

![](/2021-08-19-check-answers-given-up-half-way-though.png)

## Accessibility challenges

One thing we need to address as a matter of urgency is accessibility. We've started to design around some of the known problems, ie:

* Adding a "skip to next" in the task list to help users who navigate by keyboard or who listen to the page being read aloud
* Using the task list to break the form down into smaller chunks that are easier to reason about

In the next phase, we will concentrate our efforts on:

1. Questions:
   1. Layout and interaction; is it better to have one question per page? If so, how would we make this accessible to all?
   2. Wording; how do users and their clients describe the topic areas? This will help lower cognitive load
2. A full accessibility review using both automated code tools and manual testing (using tools like [Funkify](https://www.funkify.org/)
3. Testing with users with access needs