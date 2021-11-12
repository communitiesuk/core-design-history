---
title: User and account management
description: Enabling organisations to manage users, roles and permissions.
date: 2021-11-15
related:
  items:
  - href: https://core-design-history.netlify.app/
    text: Beta Prototype
  - href: https://mhclg.sharepoint.com/:x:/r/sites/DataCollectionTeam/Shared%20Documents/Beta/CORE%20user%20permissions%20(view%20based).xlsx?d=wd2f65bed28964a92934aef8d8b2bf744&csf=1&web=1&e=y5pqlD
    text: CORE user permissions
author: Paul Lloyd
tags:
  - Beta 4
screenshots:
  - title: Account
    items:
      - text: Create an account to submit CORE data
        caption: Only users that have been invited to submit CORE will see this page. New users are asked to create a password before they can sign in.
        src: account-create.png
      - text: Sign in to your account to submit CORE data
        caption: The title of this page makes it clear that this is an account used by this service only, not an account used for other GOV.UK services.
        src: account-sign-in.png
      - text: Request password reset
        caption: Clear instructions are given about what will happen next.
        src: account-reset-password.png
      - text: Check your email
        caption: We don’t indicate if the email exists on the service to prevent this feature being used to discover active accounts.
        src: account-check-your-email.png
      - text: Reset password email
        caption: A magic link is sent to the user, that will expire after 3 hours.
        src: account-reset-password-email.png
      - text: Reset your password
        src: account-reset-your-password.png
      - text: Sign in (after password reset)
        caption: Once you have reset your password, you are redirected to the sign in page that shows a confirmation message.
        src: account-sign-in-after-reset.png
      - text: Header
        caption: A ‘Your account’ link is shown in the header for signed in users.
        src: account-header.png
      - text: Your account
        src: account-your-profile.png
      - text: Change your personal details
        src: account-change-your-personal-details.png
      - text: Change your password
        src: account-change-your-password.png
  - title: User and organisation management (for data coordinators)
    items:
      - text: Header
        caption: Data coordinators see ‘Your organisation’ and ‘Your account’ links in the header.
        src: coordinator-header.png
      - text: Your organisation
        caption: A data coordinator can see all details about their organisation, but only change certain aspects such as name, address, and telephone number.
        src: coordinator-your-organisation.png
      - text: Your organisations’ users
        caption: A data coordinator can see and manage all users in their organisation, as well as users at any managing agents (child organisations) they may work with.
        src: coordinator-your-organisation-users.png
      - text: Invite a user – Personal details
        src: coordinator-invite-personal-details.png
      - text: Invite a user – Organisation
        caption: Only a data coordinator’s own organisation, and any managing agents (child organisations) they work with are shown.
        src: coordinator-invite-organisation.png
      - text: Invite a user – Role
        caption: A data coordinator can give a new user either a data coordinator or data provider role.
        src: coordinator-invite-role.png
      - text: Deactivate user
        caption: A data coordinator can temporarily deactivate a user. This prevents a user from signing in, but maintains their account for reactivation at a later date.
        src: coordinator-deactivate-user.png
      - text: Deactivated user
        caption: A deactivated user can be reactivated (or deleted).
        src: coordinator-deactivated-user.png
      - text: Reactivate user
        src: coordinator-reactivate-user.png
      - text: Delete user
        caption: A data coordinator can delete a user. This permanently removes a user from the service.
        src: coordinator-delete-user.png
  - title: User and organisation management (for administrators)
    items:
      - text: Header
        caption: Administrators see ‘Organisations’ and ‘Users’ links in the header.
        src: administrator-header.png
      - text: Organisations
        caption: Administrators can see all organisations. Future iterations of this page may allow for managing a larger number of organisations.
        src: administrator-organisations.png
      - text: Organisation profile
        caption: Administrators can change all details relating to an organisation, or deactivate it.
        src: administrator-organisation.png
      - text: Users
        caption: Administrators can see all users across all organisations. Future iterations of this page may allow for managing a larger number of users.
        src: administrator-users.png
      - text: User profile
        caption: Administrators can change all details relating to a user, or deactivate/delete their account.
        src: administrator-user.png
---
Organisations required to submit CORE data often comprise many people in different roles and responsibilities. Like the existing system, the new service needs to allow people to sign in with their own account, and have access to the information needed to perform their role.

## Types of user and organisation

Beyond consumers of CORE data, users can be split into 3 distinct groups:

* ### Administrators

  Civil servants within the Analysis and Data Directorate of DLUHC, or support agents working for external companies which operate the help desk. These users need access to information across all organisations so they can resolve issues reported by users of the service, perform complex tasks like merging organisations and authorise other changes.

* ### Data coordinators

  Within larger housing providers, there may be people responsible for supporting a staff across various systems. Their tasks may include creating and managing user accounts, as well as updating organisational information.

* ### Data providers

  Within larger housing providers, there may be people whose role is to complete case logs and submit them to CORE.

In smaller organisations these last 2 roles may be performed by the same person.

Data coordinators and data providers can belong to one of 2 different organisation types:

* ### Owning (or parent) organisation

  An organisation that holds its own housing stock. These organisations may contract the management of their housing out to another organisation (or organisations), but are ultimately responsible for CORE data submissions (even if they don’t submit these themselves). A parent organisation can also be the child of another organisation.

* ### Managing (or child) organisation

  An organisation that manages the sales and/or lettings of housing stock. Often it is these organisations that are in contact with tenants, and whose staff submit logs to CORE. A child organisation can also be the parent of another organisation.

![Diagram of the different relationships between organisations.](organisational-relationships.png 'Diagram of the different relationships between organisations. Organisation B is the child of organisation A, but is also the parent of organisation D.')

Tasks a user can perform and their access permissions are determined by a combination of their role and the parent/child relationships the organisation they belong to has.

## Other types of user

The current system has 2 additional roles which we have not covered in this work:

* ### Data protection officer

  A user who can confirm that GDPR guidelines have been read and followed. As this happens only when an organisation is being set up, we can review the need for this role when we look in more detail at setting up organisations.

* ### Private data downloader

  This role is currently being used by at least 2 organisations, including Homes England. One of the existing roles may cover this use case, or this need could be addressed by the provision of the new API.

More research is required before deciding if we need to include these 2 roles in the new service.

## Issues with the current system

The current system has a number of issues that make it difficult to use and make roles and relationships unintuitive.

We spoke with 7 users at 7 registered housing providers including 2 local authorities, and uncovered the following pain points:

* Deleting a user removes any logs and audit trails associated with that user
* Logs submitted by data coordinators can’t be seen by any other users in the same organisation (or in related organisations)
* Creating new users or deactivating existing users was confusing and time consuming.
* Participants weren't aware of the different types of CORE accounts available.
* Changing passwords is difficult and confusing, and the current service asks users to reset their password every 3 months
* Dealing with managing/managed institutions can also be time consuming and frustrating

Given the complexity of the system, administrators spend a lot of time supporting customers with self-serving tasks, advising them on how to use the system, setting up accounts, helping reset passwords, etc.

Some organisations have created shared team accounts to get around these issues. Having several users log in with the same password makes the system less secure and harder to audit.

Finally, there’s a lack of clarity resulting from terminology used in the system. A managing institution sounds similar to a managing agent. The term provider is overloaded too, as this could refer to a housing provider, or a data provider.

## Design hypotheses

* We believe that making it easier for a user to change their own password
Will reduce the number of help desk tickets around password resets
Because users are more successfully able to access CORE .

* We believe that decoupling case log data from users
Will reduce the number of inactive users in the system
Because there will no longer be a dependency between a log and user.

* We believe that allowing all users in an organisation to see logs submitted by other users in the same (or related) organisation
Will increase the overall number of active accounts
Because organisations will no longer create shared accounts.

* We believe that renaming ‘managing institutions’ to ‘stock owning organisations’, and ‘managed institutions’ to ‘managing agents’
Will reduce the number of support requests
Because the terms used in the service will better reflect the terms used by housing providers.
