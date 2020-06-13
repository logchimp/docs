---
title: Delete post by ID
method: DELETE
---

```
https://yourdomain.com/api/v1/post/delete
```

## Headers

| Key           | Value                  | Description         |
| ------------- | ---------------------- | ------------------- |
| Authorization | `Bearer {{AuthToken}}` | Authorization token |
| Content-Type  | `application/json`     |                     |

## Body

| Fields | Type     | Description | Required |
| ------ | -------- | ----------- | -------- |
| postId | `String` | Post ID     | `true`   |

**Example**

```json
{
  "postId": "1"
}
```

## Response

| Fields      | Type      | Description                         |
| ----------- | --------- | ----------------------------------- |
| status.code | `Integer` | Response code from server           |
| status.type | `String`  | Response status type (success/fail) |

**Example**

```json
{
  "status": {
    "code": 200,
    "type": "success"
  }
}
```
