---
title: Post
---

Posts are the primary resource in a LogChimp site. Using the posts endpoint it is possible to get lists of posts filtered by various criteria.

### Endpoints

| method   | resolver         | route                                                  |
| -------- | ---------------- | ------------------------------------------------------ |
| `GET`    | `filterPost`     | [`/posts`](/api/post/filter-post)                      |
| `GET`    | `getPostBySlug`  | [`/post/{slug}`](/api/post/get-post-by-slug)           |
| `POST`   | `createPost`     | [`/post/create`](/api/post/create-post)                |
| `PATCH`  | `updatePostById` | [`/post/update/{postId}`](/api/post/update-post-by-id) |
| `DELETE` | `deletePostById` | [`/post/delete`](/api/post/delete-post-by-id)          |

## Post

```json
{
  "post_id": "0LLM8tGxnn5d1Dg9cr94p",
  "title": "Electron wrapper APIs around main window SHELL",
  "slug": "electron-wrapper-apis-around-main-window-shell-0k6KKDgUw0PvrpWhMf-IS",
  "body_markdown": "Add a electron wrapper APIs around the main window SHELL using the ways as provided in the documentation.",
  "member_id": "4d264270-8d29-11ea-bab9-757c778c43d0",
  "category_id": "66b14830-a0c4-11ea-bbc5-23d3dc410692",
  "status_id": "eee76f00-8d31-11ea-8157-03b7fc966c0f",
  "voters": [
    "eee76f00-8d31-11ea-8157-03b7fc966c0f",
    "eee76f00-8d29-11ea-a0c4-757c778c43d0"
    //...
  ],
  "created_at": "2020-05-19 19:49:38.908966",
  "updated_at": "2020-05-03 17:03:57.875783"
}
```
