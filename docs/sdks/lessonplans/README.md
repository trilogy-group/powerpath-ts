# LessonPlans
(*lessonPlans*)

## Overview

### Available Operations

* [getStudentCourseProgress](#getstudentcourseprogress) - Get course progress
* [updateStudentResponse](#updatestudentresponse) - Update student item response
* [getSyllabus](#getsyllabus) - Get course syllabus

## getStudentCourseProgress

Get the course progress for a student in a course.

---

Returns a list of **assessment line items** for the **course** and **student**.

A type "**component**" indicates a component of the lesson plan such as a unit or lesson.

A type "**resource**" indicates a resource such as a video, audio,
or document file as well as a quiz or question.

Each **line item** contains a list of assessment results in the **results** attribute, related to student and course.

### Example Usage

```typescript
import { PowerPath } from "@superbuilders/powerpath";

const powerPath = new PowerPath({
  oAuth2: process.env["POWERPATH_O_AUTH2"] ?? "",
});

async function run() {
  const result = await powerPath.lessonPlans.getStudentCourseProgress({
    courseId: "<id>",
    studentId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PowerPathCore } from "@superbuilders/powerpath/core.js";
import { lessonPlansGetStudentCourseProgress } from "@superbuilders/powerpath/funcs/lessonPlansGetStudentCourseProgress.js";

// Use `PowerPathCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const powerPath = new PowerPathCore({
  oAuth2: process.env["POWERPATH_O_AUTH2"] ?? "",
});

async function run() {
  const res = await lessonPlansGetStudentCourseProgress(powerPath, {
    courseId: "<id>",
    studentId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lessonPlansGetStudentCourseProgress failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCourseProgressRequest](../../models/operations/getcourseprogressrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetCourseProgressResponse](../../models/operations/getcourseprogressresponse.md)\>**

### Errors

| Error Type                              | Status Code                             | Content Type                            |
| --------------------------------------- | --------------------------------------- | --------------------------------------- |
| errors.BadRequestResponseError          | 400                                     | application/json                        |
| errors.UnauthorizedRequestResponseError | 401                                     | application/json                        |
| errors.ForbiddenResponseError           | 403                                     | application/json                        |
| errors.NotFoundResponseError            | 404                                     | application/json                        |
| errors.UnprocessableEntityResponseError | 422                                     | application/json                        |
| errors.TooManyRequestsResponseError     | 429                                     | application/json                        |
| errors.InternalServerErrorResponse      | 500                                     | application/json                        |
| errors.APIError                         | 4XX, 5XX                                | \*/\*                                   |

## updateStudentResponse

Update the student item response for a student in a course.

---

The item may be a **component** or **componentResource**.

You should provide either the **componentId** or the **componentResourceId**.

If you provide the **componentId**, the data in the response payload should be in relation to the student's response to the entire component.

If you provide the **componentResourceId**, the data in the response payload should be in relation to the student's response to the specific resource.

### Example Usage

```typescript
import { PowerPath } from "@superbuilders/powerpath";

const powerPath = new PowerPath({
  oAuth2: process.env["POWERPATH_O_AUTH2"] ?? "",
});

async function run() {
  const result = await powerPath.lessonPlans.updateStudentResponse();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PowerPathCore } from "@superbuilders/powerpath/core.js";
import { lessonPlansUpdateStudentResponse } from "@superbuilders/powerpath/funcs/lessonPlansUpdateStudentResponse.js";

// Use `PowerPathCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const powerPath = new PowerPathCore({
  oAuth2: process.env["POWERPATH_O_AUTH2"] ?? "",
});

async function run() {
  const res = await lessonPlansUpdateStudentResponse(powerPath);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lessonPlansUpdateStudentResponse failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateStudentItemResponseRequest](../../models/operations/updatestudentitemresponserequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateStudentItemResponseResponse](../../models/operations/updatestudentitemresponseresponse.md)\>**

### Errors

| Error Type                              | Status Code                             | Content Type                            |
| --------------------------------------- | --------------------------------------- | --------------------------------------- |
| errors.BadRequestResponseError          | 400                                     | application/json                        |
| errors.UnauthorizedRequestResponseError | 401                                     | application/json                        |
| errors.ForbiddenResponseError           | 403                                     | application/json                        |
| errors.NotFoundResponseError            | 404                                     | application/json                        |
| errors.UnprocessableEntityResponseError | 422                                     | application/json                        |
| errors.TooManyRequestsResponseError     | 429                                     | application/json                        |
| errors.InternalServerErrorResponse      | 500                                     | application/json                        |
| errors.APIError                         | 4XX, 5XX                                | \*/\*                                   |

## getSyllabus

Get course syllabus

### Example Usage

```typescript
import { PowerPath } from "@superbuilders/powerpath";

const powerPath = new PowerPath({
  oAuth2: process.env["POWERPATH_O_AUTH2"] ?? "",
});

async function run() {
  const result = await powerPath.lessonPlans.getSyllabus({
    courseSourcedId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PowerPathCore } from "@superbuilders/powerpath/core.js";
import { lessonPlansGetSyllabus } from "@superbuilders/powerpath/funcs/lessonPlansGetSyllabus.js";

// Use `PowerPathCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const powerPath = new PowerPathCore({
  oAuth2: process.env["POWERPATH_O_AUTH2"] ?? "",
});

async function run() {
  const res = await lessonPlansGetSyllabus(powerPath, {
    courseSourcedId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lessonPlansGetSyllabus failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCourseSyllabusRequest](../../models/operations/getcoursesyllabusrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetCourseSyllabusResponse](../../models/operations/getcoursesyllabusresponse.md)\>**

### Errors

| Error Type                              | Status Code                             | Content Type                            |
| --------------------------------------- | --------------------------------------- | --------------------------------------- |
| errors.BadRequestResponseError          | 400                                     | application/json                        |
| errors.UnauthorizedRequestResponseError | 401                                     | application/json                        |
| errors.ForbiddenResponseError           | 403                                     | application/json                        |
| errors.NotFoundResponseError            | 404                                     | application/json                        |
| errors.UnprocessableEntityResponseError | 422                                     | application/json                        |
| errors.TooManyRequestsResponseError     | 429                                     | application/json                        |
| errors.InternalServerErrorResponse      | 500                                     | application/json                        |
| errors.APIError                         | 4XX, 5XX                                | \*/\*                                   |