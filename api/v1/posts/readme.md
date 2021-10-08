---
title: Posts
---

The Posts API enables you to do more than just CRUD operations.

Posts is the primary resource in a LogChimp. Using the posts endpoint it is possible to get lists of posts filtered by various criteria.

- [Filter posts](#filter-post)

<!-- | `GET`    | [`/post/{slug}`](/api/v1/post/get-post-by-slug)           |
| `POST`   | [`/post/create`](/api/v1/post/create-post)                |
| `PATCH`  | [`/post/update/{postId}`](/api/v1/post/update-post-by-id) |
| `DELETE` | [`/post/delete`](/api/v1/post/delete-post-by-id)          | -->

#### Filter posts

This is one of them endpoints used to access posts in different parts of the application.

```
GET: /posts
```

**Parameters**

| Name        | Type            | In   | Description                                                                        |
| ----------- | --------------- | ---- | ---------------------------------------------------------------------------------- |
| `userId`    | string          | body | Used to get vote info for the user                                                 |
| `boardId`   | array of string | body | Search posts from selected boards. Will search all the boards if not provided.     |
| `roadmapId` | array of string | body | Search posts from selected roadmaps. Will search all the roadmaps if not provided. |
| `created`   | string          | body |                                                                                    |
| `page`      | number          | body | Page number of the results to fetch.                                               |
| `limit`     | number          | body | Number of results to fetch in single page.                                         |

**Response**

```
Status: 200 OK
```

Returns an array of posts.
