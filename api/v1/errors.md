---
title: Errors
description: Learn more about common error codes and how to resolve them.
---

LogChimp uses conventional HTTP response codes to indicate the success or failure of an API request. In general: Codes in the **`2xx`** range indicate success. Codes in the **`4xx`** range indicate an error that failed given the information provided _(e.g., a required parameter was omitted, a post not found, etc.)_. Codes in the **`5xx`** range indicate an error with your LogChimp site hosted server.

#### HTTP status code summary

| Status code                        | Description                                                                                      |
| ---------------------------------- | ------------------------------------------------------------------------------------------------ |
| 200 - OK                           | Everything worked as expected.                                                                   |
| 400 - Bad Request                  | The request was unacceptable, often due to missing a required parameter.                         |
| 401 - Unauthorized                 | No valid API key provided.                                                                       |
| 402 - Request Failed               | The parameters were valid but the request failed.                                                |
| 403 - Forbidden                    | The API key doesn't have permissions to perform the request.                                     |
| 404 - Not Found                    | The requested resource doesn't exist.                                                            |
| 409 - Conflict                     | The request conflicts with another request _(perhaps due to using the same idempotent key)_.     |
| 429 - Too Many Requests            | Too many requests hit the API too quickly. We recommend an exponential backoff of your requests. |
| 500, 502, 503, 504 - Server Errors | Something went wrong on your LogChimp site hosted server.                                        |

### Attributes

#### code `(string)`

For some errors that could be handled programmatically, a short string indicating the error code reported, see the list of error code below.

#### message `(string)`

A human-readable message providing more details about the error.
