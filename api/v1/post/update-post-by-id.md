---
title: updatePostById
method: PATCH
description:
---

```
https://yourdomain.com/api/v1/post/update/:postId
```

## Headers

| Key           | Value                  | Description         |
| ------------- | ---------------------- | ------------------- |
| Authorization | `Bearer {{AuthToken}}` | Authorization token |
| Content-Type  | `application/json`     |                     |

## Body

| Fields       | Type     | Description             | Required |
| ------------ | -------- | ----------------------- | -------- |
| title        | `String` | Title of the post       | `true`   |
| bodyMarkdown | `String` | Description of the post | `true`   |

## Params

| Fields | Type     | Description | Required |
| ------ | -------- | ----------- | -------- |
| postId | `String` | Post ID     | `true`   |

**Example**

```
https://yourdomain.com/api/v1/post/update/1
```

```json
{
  "title": "New title",
  "description": "Update description"
}
```

## Response

| Fields      | Type      | Description                         |
| ----------- | --------- | ----------------------------------- |
| status.code | `Integer` | Response code from server           |
| status.type | `String`  | Response status type (success/fail) |
| posts       | `Object`  | Post data                           |

> You can see post data object in [createPost](/api/v1/post/create-post).

**Example**

```json
{
  "status": {
    "code": 200,
    "type": "success"
  },
  "post": {
    // post data oboject
  }
}
```
