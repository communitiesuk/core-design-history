---
title: Owning organisations and managing agents
date: 2022-06-07
author: Jon Roobottom
description: Allowing for complex organisation relationships
---
So far, in this private beta phase, we've moved two organisations over to our new service. They're "simple" organisations in that they own housing stock and don't subcontract the management of that stock to anyone else.

However, most providers who own stock will often engage other organisations to manage stock on their behalf. We've been calling these organisations "managers" or "owner/managers", and the relations between them and the stock owners "parent" and "child"[^1]. 

These relationships can get quite complex. Here's an example of how several organisations might be connected:

* Organisation A owns stock X and can submit logs for their stock.
* Organisation B owns stock Y and can submit logs of their stock.
* Organisation C doesn't own stock but can submit logs on behalf of organisations A or B.
* Organisation D owns stock Z and can submit logs for their stock and on behalf of organisation B.
* Organisation E doesn't own stock but can submit logs on behalf of organisation D.

To enable more organisations to submit logs, we need to change the service. 

![A diagram showing the complex relationships between different organisations in CORE](organisational-relationships.png "The complex relationships between organisations A, B, C, D, and E")

## Asking users about who owns and manages the property
The two organisations using our service in private beta own and manage their stock. We, therefore, don't have to ask them about this in the "set up your lettings log" section of the service. We can *infer* the owner and manager as it's always the organisation that the user is attached to.

![A four step process showing how we infer the owner and manager based on the user’s login](infer-flow.jpg "Based on the user’s login, we can always assume the owner and manager as we've only served simple type organisations, so far in private beta.")

Now we're opening the doors to organisations with parent and child relationships; we need to ask users who owns and who manages the property for which they're creating a log. 

We had intended to do this with three different versions of an "organisation details" page:

1. When we only need to ask about ownership, A radio list of organisations.
2. When we only need to ask about management, A radio list of organisations.
3. When we need to know both, two dropdowns on the same page.

![A screenshot from the service](which-org-owns.png "We proposed using radios to ask “Which organisation owns this property?”") 

![A screenshot from the service](which-org-manages.png "We proposed using radios to ask “Which organisation manages this property?”") 

![A screenshot from the service](organisation-details.png "We proposed using dropdowns to ask both “Which organisation owns this property?” and “Which organisation manages this property?”")

The current thinking is that we need to ask about ownership *and* management. We should do this as separate questions. This better fits the GDS guideline of one thing per page, but it also simplifies the logic and reduces the risk of bugs.

![A process flow showing the logic of showing the questions “Which organisation owns this property?” and “Which organisation manages this property?”](setup-own-manage.jpg "The proposed logic of how we route users through or around the questions “Which organisation owns this property?” and “Which organisation manages this property?” in set up your lettings log.")

## What's next
We plan to:

* Design the flow to allow data coordinators to tell us about the relationships between their organisation and others.
* Work with our developer friends to ship the changes to "set up your lettings log." 

[^1]: Paul's written about [types of users and organisations](/user-and-account-management/#types-of-user-and-organisation). See also: [the glossary](/glossary/).


