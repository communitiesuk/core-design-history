---
title: The number output component
description: Display the results of a calculation or the outcome of a user action.
date: 2022-02-08
related:
  items:
    - href: https://govuk-output.glitch.me/
      text: Preview this component on Glitch
    - href: https://glitch.com/edit/#!/govuk-output
      text: Edit this component on Glitch
author: Paul Lloyd
---

## What

Display the results of a calculation or the outcome of a user action.

![Screenshot of this component](output.png)

## Why

On the Submit social housing lettings and sales data (CORE) service, we ask users to enter values for rent and other charges tenants pay.

We only need to collect the total amount, but users may be more familiar with individual values. Rather than ask them to calculate the total value themselves, we display a live calculation, which they can check before submitting the form.

![Screenshot of the rent and charges form](rent-and-charges.png)

### Proposed solution

This component is similar to the existing text input component, but uses [the `output` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/output). This element is read-only and can’t be interacted with or gain focus, but instead provides semantics and accessibility features that enable user agents to announce a newly calculated value whenever it has been updated.

### Results of usability testing

We initially tested this design in December 2021 and January 2022 with 10 participants. All but 1 had JavaScript enabled and were able to see the total box, but only those with JavaScript enabled would get a live calculation. They all clearly understood that the box represented a total of all values on the page, and were reassured when this value was played back on a ‘Check your answers’ screen.

However, given the possibility of a user entering the wrong total amount, and the system calculating its own value anyway, to save any confusion, we decided not to show the total amount part of the page if JavaScript is disabled.

## When to use this component

Use this component when you want to give users a calculation of 2 or more numbers. While not required by the component, these should be of the same type (don’t mix currency with weights, for example). Use the prefix and suffix options to indicate what type of output is expected.

## When not to use this component

You should not use this component to display alerts or other information you might place inside a live region.

## How it works

This component is designed to act as a progressive enhancement, falling back to an `input` element if JavaScript is not available. If JavaScript is available, an `input` element is replaced by an `output` element which listens for changes on the inputs listed in its `for` attribute.

## Outstanding issues and questions

* This component has not been audited for its accessibility yet, and is yet to be used in a live production environment.
* The `output` element is [not supported in Internet Explorer 11](https://caniuse.com/mdn-html_elements_output). The component currently displays correctly, but doesn’t function.
* Only supports addition at the moment; should it do more?
* Should it be the responsibility of this component to provide a set of calculation behaviours, or should this be left to individual developers who may have specific requirements?
* Does there need to be an option for formatting the output, for example the number of decimal places to display?
* How should invalid values be handled? Right now, if you don’t enter a number into one of the inputs, the calculated value isn’t updated.
