---
title: Get post by slug
method: GET
slug: /api/v1/posts/get-post-by-slug
---

Fetch all posts

```
https://yourdomain.com/api/v1/post/:slug
```

## Headers

| Key          | Value              | Description |
| ------------ | ------------------ | ----------- |
| Content-Type | `application/json` |             |

## Params

| Fields | Type     | Description | Required |
| ------ | -------- | ----------- | -------- |
| slug   | `String` | Post slug   | `true`   |

**Example**

```
https://yourdomain.com/api/v1/post/allow-user-to-upload-image-from-cloud
```

## Response

| Fields      | Type      | Description                         |
| ----------- | --------- | ----------------------------------- |
| status.code | `Integer` | Response code from server           |
| status.type | `String`  | Response status type (success/fail) |
| posts       | `Object`  | Post data                           |

> You can see post data object in [createPost](/content/api/v1/post/create-post).

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
