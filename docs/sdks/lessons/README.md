# Lessons
(*lessons*)

## Overview

### Available Operations

* [createAttempt](#createattempt) - Create new attempt
* [finalizeResponse](#finalizeresponse) - Finalize a test assessments
* [getProgress](#getprogress) - Get assessment progress
* [getAttempts](#getattempts) - Get all attempts
* [getNextQuestion](#getnextquestion) - Get next question
* [resetAttempt](#resetattempt) - Reset attempt
* [updateStudentResponse](#updatestudentresponse) - Update student question response

## createAttempt

Creates a new attempt for a student in a lesson if the current attempt is completed.

For Assessment Bank lessons:
- This will also update the state for the student, creating a new entry to associate the new attempt number with a different sub-resource of the test bank.
- If the lesson is taken again by the student, a different test may be served, considering the new resource it points to configures a different test.
- The sub-test is determined using round-robin logic over the sub-resources of the lesson's Assessment Bank Resource object.

  - So for example, if a lesson configures 2 sub-tests, the first attempt serves test 1, the second attempt serves test 2, the third attempt serves test 1 again, and so on.

A 'Lesson' in this context is a ComponentResource object which has a Resource object associated with it.


### Example Usage

```typescript
import { PowerPath } from "@superbuilders/powerpath";

const powerPath = new PowerPath({
  oAuth2: process.env["POWERPATH_O_AUTH2"] ?? "",
});

async function run() {
  const result = await powerPath.lessons.createAttempt();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PowerPathCore } from "@superbuilders/powerpath/core.js";
import { lessonsCreateAttempt } from "@superbuilders/powerpath/funcs/lessonsCreateAttempt.js";

// Use `PowerPathCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const powerPath = new PowerPathCore({
  oAuth2: process.env["POWERPATH_O_AUTH2"] ?? "",
});

async function run() {
  const res = await lessonsCreateAttempt(powerPath);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lessonsCreateAttempt failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateNewAttemptRequest](../../models/operations/createnewattemptrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateNewAttemptResponse](../../models/operations/createnewattemptresponse.md)\>**

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

## finalizeResponse

Finalize a lesson of type `quiz`, `test-out`, or `placement` after all questions have been answered:
- Evaluates answered questions, attribute scores for each question, and overall lesson score.
- Checks the correctness of the response using the QTI question's `<qti-response-declaration>` element and update the score accordingly.
- Creates/updates the AssessmentLineItem and AssessmentResult objects for the student/question pair if it doesn't exist yet.

Not supported for external test lessons as the 3rd party tool is responsible for finalizing the test. Use the **importExternalTestAssignmentResults** endpoint instead.

A 'Lesson' in this context is a ComponentResource object which has a Resource object with metadata.lessonType = "quiz", "test-out", or "placement" associated with it.


### Example Usage

```typescript
import { PowerPath } from "@superbuilders/powerpath";

const powerPath = new PowerPath({
  oAuth2: process.env["POWERPATH_O_AUTH2"] ?? "",
});

async function run() {
  const result = await powerPath.lessons.finalizeResponse();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PowerPathCore } from "@superbuilders/powerpath/core.js";
import { lessonsFinalizeResponse } from "@superbuilders/powerpath/funcs/lessonsFinalizeResponse.js";

// Use `PowerPathCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const powerPath = new PowerPathCore({
  oAuth2: process.env["POWERPATH_O_AUTH2"] ?? "",
});

async function run() {
  const res = await lessonsFinalizeResponse(powerPath);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lessonsFinalizeResponse failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.FinalStudentAssessmentResponseRequest](../../models/operations/finalstudentassessmentresponserequest.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.FinalStudentAssessmentResponseResponse](../../models/operations/finalstudentassessmentresponseresponse.md)\>**

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

## getProgress

Returns the progress the student has made in the given PowerPath lesson.

A 'Lesson' in this context is a ComponentResource object paired with a Resource object representing an activity.


### Example Usage

```typescript
import { PowerPath } from "@superbuilders/powerpath";

const powerPath = new PowerPath({
  oAuth2: process.env["POWERPATH_O_AUTH2"] ?? "",
});

async function run() {
  const result = await powerPath.lessons.getProgress({
    student: "<value>",
    lesson: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PowerPathCore } from "@superbuilders/powerpath/core.js";
import { lessonsGetProgress } from "@superbuilders/powerpath/funcs/lessonsGetProgress.js";

// Use `PowerPathCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const powerPath = new PowerPathCore({
  oAuth2: process.env["POWERPATH_O_AUTH2"] ?? "",
});

async function run() {
  const res = await lessonsGetProgress(powerPath, {
    student: "<value>",
    lesson: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lessonsGetProgress failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAssessmentProgressRequest](../../models/operations/getassessmentprogressrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetAssessmentProgressResponse](../../models/operations/getassessmentprogressresponse.md)\>**

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

## getAttempts

Returns a list of all attempts for a student in a lesson

For Assessment Bank lessons, each attempt may represent a different sub test of the bank. Review results with care.

A 'Lesson' in this context is a ComponentResource object which has a Resource object associated with it.


### Example Usage

```typescript
import { PowerPath } from "@superbuilders/powerpath";

const powerPath = new PowerPath({
  oAuth2: process.env["POWERPATH_O_AUTH2"] ?? "",
});

async function run() {
  const result = await powerPath.lessons.getAttempts({
    student: "<value>",
    lesson: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PowerPathCore } from "@superbuilders/powerpath/core.js";
import { lessonsGetAttempts } from "@superbuilders/powerpath/funcs/lessonsGetAttempts.js";

// Use `PowerPathCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const powerPath = new PowerPathCore({
  oAuth2: process.env["POWERPATH_O_AUTH2"] ?? "",
});

async function run() {
  const res = await lessonsGetAttempts(powerPath, {
    student: "<value>",
    lesson: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lessonsGetAttempts failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAttemptsRequest](../../models/operations/getattemptsrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetAttemptsResponse](../../models/operations/getattemptsresponse.md)\>**

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

## getNextQuestion

Returns the next question in the given PowerPath component resource.

Works only with lessons of type 'powerpath-100'.

A 'Lesson' in this context is a ComponentResource object which has a Resource object associated with it.


### Example Usage

```typescript
import { PowerPath } from "@superbuilders/powerpath";

const powerPath = new PowerPath({
  oAuth2: process.env["POWERPATH_O_AUTH2"] ?? "",
});

async function run() {
  const result = await powerPath.lessons.getNextQuestion({
    student: "<value>",
    lesson: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PowerPathCore } from "@superbuilders/powerpath/core.js";
import { lessonsGetNextQuestion } from "@superbuilders/powerpath/funcs/lessonsGetNextQuestion.js";

// Use `PowerPathCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const powerPath = new PowerPathCore({
  oAuth2: process.env["POWERPATH_O_AUTH2"] ?? "",
});

async function run() {
  const res = await lessonsGetNextQuestion(powerPath, {
    student: "<value>",
    lesson: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lessonsGetNextQuestion failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetNextQuestionRequest](../../models/operations/getnextquestionrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetNextQuestionResponse](../../models/operations/getnextquestionresponse.md)\>**

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

## resetAttempt

Resets the attempt for the given PowerPath lesson of a student:
- Soft-deletes all previous question responses, resets the test score to 0, and updates its 'scoreStatus' to "not submitted".
- If the lesson is an external test, only resets the test score to 0.

For Assessment Bank lessons, this will keep the user state in the same bank test for the current attempt.

A 'Lesson' in this context is a ComponentResource object which has a Resource object associated with it.


### Example Usage

```typescript
import { PowerPath } from "@superbuilders/powerpath";

const powerPath = new PowerPath({
  oAuth2: process.env["POWERPATH_O_AUTH2"] ?? "",
});

async function run() {
  const result = await powerPath.lessons.resetAttempt();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PowerPathCore } from "@superbuilders/powerpath/core.js";
import { lessonsResetAttempt } from "@superbuilders/powerpath/funcs/lessonsResetAttempt.js";

// Use `PowerPathCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const powerPath = new PowerPathCore({
  oAuth2: process.env["POWERPATH_O_AUTH2"] ?? "",
});

async function run() {
  const res = await lessonsResetAttempt(powerPath);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lessonsResetAttempt failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ResetAttemptRequest](../../models/operations/resetattemptrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ResetAttemptResponse](../../models/operations/resetattemptresponse.md)\>**

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

Updates the student's response to a question and returns the updated PowerPath score:
- Checks the correctness of the response using the QTI question `<qti-response-declaration>` element and update the score accordingly.
- Creates/updates the AssessmentLineItem and AssessmentResult objects for the student/question pair if it doesn't exist yet.

A 'Lesson' in this context is a ComponentResource object which has a Resource object associated with it.


### Example Usage

```typescript
import { PowerPath } from "@superbuilders/powerpath";

const powerPath = new PowerPath({
  oAuth2: process.env["POWERPATH_O_AUTH2"] ?? "",
});

async function run() {
  const result = await powerPath.lessons.updateStudentResponse();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PowerPathCore } from "@superbuilders/powerpath/core.js";
import { lessonsUpdateStudentResponse } from "@superbuilders/powerpath/funcs/lessonsUpdateStudentResponse.js";

// Use `PowerPathCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const powerPath = new PowerPathCore({
  oAuth2: process.env["POWERPATH_O_AUTH2"] ?? "",
});

async function run() {
  const res = await lessonsUpdateStudentResponse(powerPath);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lessonsUpdateStudentResponse failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.UpdateStudentQuestionResponseInput](../../models/components/updatestudentquestionresponseinput.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateStudentQuestionResponseResponse](../../models/operations/updatestudentquestionresponseresponse.md)\>**

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