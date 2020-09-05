---
title: GET posts
description:
method: GET
---

```
https://yourdomain.com/api/v1/posts
```

## Headers

| Key          | Value              | Description |
| ------------ | ------------------ | ----------- |
| Content-Type | `application/json` |             |

## Query

| Fields | Type     | Description                                            | Required |
| ------ | -------- | ------------------------------------------------------ | -------- |
| status | `Array`  | Status of the post (planned / in progress / completed) | `false`  |
| sort   | `String` | Sort type (latest / oldest / top / trending)           | `false`  |

**Example**

```
https://yourdomain.com/api/v1/posts?status=planned&sort=oldest
```

## Response

| Fields      | Type      | Description                         |
| ----------- | --------- | ----------------------------------- |
| status.code | `Integer` | Response code from server           |
| status.type | `String`  | Response status type (success/fail) |
| posts       | `Array`   | Array of object with filtered posts |

> You can see post data object in [createPost](/api/post/create-post).

**Example**

```json
{
  "status": {
    "code": 200,
    "type": "success"
  },
  "posts": [
    {
      // post data oboject
    },
    {
      // post data oboject
    }
  ]
}
```
