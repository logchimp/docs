---
title: Posts
---

The Posts API enables you to do more than just CRUD operations.

Posts is the primary resource in a LogChimp. Using the posts endpoint it is possible to get lists of posts filtered by various criteria. Below you can see full list of endpoints avaiable.

| method   | route                                                     |
| -------- | --------------------------------------------------------- |
| `GET`    | [`/posts`](#filter-post)                                  |

<!-- | `GET`    | [`/post/{slug}`](/api/v1/post/get-post-by-slug)           |
| `POST`   | [`/post/create`](/api/v1/post/create-post)                |
| `PATCH`  | [`/post/update/{postId}`](/api/v1/post/update-post-by-id) |
| `DELETE` | [`/post/delete`](/api/v1/post/delete-post-by-id)          | -->

#### Filter posts

This is one of them endpoints used to access posts in different parts of the application.

```
GET: /posts
```

| Name      | Type   | In   | Description                                |
| --------- | ------ | ---- | ------------------------------------------ |
| `created` | string | body |                                            |
| `page`    | number | body | Page number of the results to fetch.       |
| `limit`   | number | body | Number of results to fetch in single page. |

**Response**

```
Status: 200 OK
```

Returns an array of posts.
