---
title: Login
method: POST
slug: /api/v1/auth/login
---

```
https://yourdomain.com/api/v1/auth/login
```

## Headers

| Key          | Value              | Description |
| ------------ | ------------------ | ----------- |
| Content-Type | `application/json` |             |

## Body

| Fields   | Type     | Description   | Required |
| -------- | -------- | ------------- | -------- |
| email    | `String` | Email address | `true`   |
| password | `String` | Password      | `true`   |

**Example**

```json
{
  "emailAddress": "email@example.com",
  "password": "password"
}
```

## Response

| Fields                 | Type      | Description                                      |
| ---------------------- | --------- | ------------------------------------------------ |
| status.code            | `Integer` | Response code from server                        |
| status.type            | `String`  | Response status type (success/fail)              |
| member.member_id       | `String`  | Auto-generated member unique ID                  |
| member.fist_name       | `String`  | First name of the member                         |
| member.last_name       | `String`  | Last name of the member                          |
| member.email_address   | `String`  | Email address of the member                      |
| member.profile_picture | `String`  | Profile picture of the member                    |
| member.is_owner        | `Boolean` | Is the member is owner or not?                   |
| member.is_moderator    | `Boolean` | Is the member a moderator or not?                |
| member.is_blocked      | `Boolean` | Is member account blocked status?                |
| member.created_at      | `String`  | Auto generated time and date on account creation |
| token                  | `String`  | Member auth token                                |

**Example**

```json
{
  "status": {
    "code": 200,
    "type": "success"
  },
  "member": {
    // Unique identifier for the object
    "member_id": 1,
    "first_name": "Mike",
    "last_name": "Hunt",
    "email_address": "email@example.com",
    "profile_picture": "https://www.example.com/image.jpg",
    "is_owner": true,
    "is_moderator": true,
    "is_blocked": false,
    "created_at": "2020-02-01T04:48:48.909Z"
  },
  "token": "token"
}
```
