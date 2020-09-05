---
title: Create posts
description: 
method: POST
---

```
https://yourdomain.com/api/v1/post/create
```

## Headers

| Key           | Value                  | Description         |
| ------------- | ---------------------- | ------------------- |
| Authorization | `Bearer {{AuthToken}}` | Authorization token |
| Content-Type  | `application/json`     |                     |

## Body

| Fields       | Type     | Description                         | Required |
| ------------ | -------- | ----------------------------------- | -------- |
| title        | `String` | Title of the post                   | `true`   |
| bodyMarkdown | `String` | Post description in markdown format | `true`   |
| memberId     | `String` | Member unique ID                    | `true`   |

**Example**

```json
{
  "title": "Title of the post",
  "bodyMarkdown": "A description to explain the feedback.",
  "memberId": "22ebabd0-44ae-11ea-b072-d34806b8641b"
}
```

## Response

| Fields      | Type      | Description                         |
| ----------- | --------- | ----------------------------------- |
| status.code | `Integer` | Response code from server           |
| status.type | `String`  | Response status type (success/fail) |
| post.postId | `String`  | Auto generated post ID              |
| post.slug   | `String`  | Post slug generated from post title |

```json
"status": {
  "code": 200,
  "type": "success"
},
"post": {
  "postId": "abd0-44ae-11ea-b072-d34806b864",
  "slug": "title-of-the-post-45645ewrft"
}
```
