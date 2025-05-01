# Lessons
(*lessons*)

## Overview

### Available Operations

* [createAttempt](#createattempt) - Create new attempt
* [finalizeResponse](#finalizeresponse) - Finalize a quiz assessment
* [getProgress](#getprogress) - Get assessment progress
* [getAttempts](#getattempts) - Get all attempts
* [getNextQuestion](#getnextquestion) - Get next question
* [resetAttempt](#resetattempt) - Reset attempt
* [updateStudentResponse](#updatestudentresponse) - Update student question response

## createAttempt

Creates a new attempt for a student in a lesson if current attempt is completed

### Example Usage

```typescript
import { PowerPath } from "@superbuilders/powerpath";

const powerPath = new PowerPath({
  security: {
    clientID: process.env["POWERPATH_CLIENT_ID"] ?? "",
    clientSecret: process.env["POWERPATH_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await powerPath.lessons.createAttempt();

  // Handle the result
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
  security: {
    clientID: process.env["POWERPATH_CLIENT_ID"] ?? "",
    clientSecret: process.env["POWERPATH_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await lessonsCreateAttempt(powerPath);

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
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

| Error Type                               | Status Code                              | Content Type                             |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| errors.BadRequestResponseError           | 400                                      | application/json                         |
| errors.UnauthorizedRequestResponseError1 | 401                                      | application/json                         |
| errors.ForbiddenResponseError2           | 403                                      | application/json                         |
| errors.NotFoundResponseError1            | 404                                      | application/json                         |
| errors.UnprocessableEntityResponseError1 | 422                                      | application/json                         |
| errors.TooManyRequestsResponseError1     | 429                                      | application/json                         |
| errors.InternalServerErrorResponse1      | 500                                      | application/json                         |
| errors.APIError                          | 4XX, 5XX                                 | \*/\*                                    |

## finalizeResponse

Finalize a lesson/assessment of 'quiz' type after all questions have been answered.

Evaluates answered questions, attribute scores for each question, and overall lesson score.

PowerPath will check the correctness of the response using the QTI question `<qti-response-declaration>` element and update the score accordingly.

PowerPath will create/update the required AssessmentLineItem and AssessmentResult objects for the student/question pair if it doesn't exist yet.

Returns the final assessment result for the student.


### Example Usage

```typescript
import { PowerPath } from "@superbuilders/powerpath";

const powerPath = new PowerPath({
  security: {
    clientID: process.env["POWERPATH_CLIENT_ID"] ?? "",
    clientSecret: process.env["POWERPATH_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await powerPath.lessons.finalizeResponse();

  // Handle the result
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
  security: {
    clientID: process.env["POWERPATH_CLIENT_ID"] ?? "",
    clientSecret: process.env["POWERPATH_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await lessonsFinalizeResponse(powerPath);

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
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

| Error Type                               | Status Code                              | Content Type                             |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| errors.BadRequestResponseError           | 400                                      | application/json                         |
| errors.UnauthorizedRequestResponseError1 | 401                                      | application/json                         |
| errors.ForbiddenResponseError1           | 403                                      | application/json                         |
| errors.NotFoundResponseError1            | 404                                      | application/json                         |
| errors.UnprocessableEntityResponseError1 | 422                                      | application/json                         |
| errors.TooManyRequestsResponseError1     | 429                                      | application/json                         |
| errors.InternalServerErrorResponse1      | 500                                      | application/json                         |
| errors.APIError                          | 4XX, 5XX                                 | \*/\*                                    |

## getProgress

Returns the progress the student has made in the given PowerPath lesson

### Example Usage

```typescript
import { PowerPath } from "@superbuilders/powerpath";

const powerPath = new PowerPath({
  security: {
    clientID: process.env["POWERPATH_CLIENT_ID"] ?? "",
    clientSecret: process.env["POWERPATH_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await powerPath.lessons.getProgress({
    student: "<value>",
    lesson: "<value>",
  });

  // Handle the result
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
  security: {
    clientID: process.env["POWERPATH_CLIENT_ID"] ?? "",
    clientSecret: process.env["POWERPATH_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await lessonsGetProgress(powerPath, {
    student: "<value>",
    lesson: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
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

| Error Type                               | Status Code                              | Content Type                             |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| errors.BadRequestResponseError           | 400                                      | application/json                         |
| errors.UnauthorizedRequestResponseError1 | 401                                      | application/json                         |
| errors.ForbiddenResponseError1           | 403                                      | application/json                         |
| errors.NotFoundResponseError1            | 404                                      | application/json                         |
| errors.UnprocessableEntityResponseError1 | 422                                      | application/json                         |
| errors.TooManyRequestsResponseError1     | 429                                      | application/json                         |
| errors.InternalServerErrorResponse1      | 500                                      | application/json                         |
| errors.APIError                          | 4XX, 5XX                                 | \*/\*                                    |

## getAttempts

Returns a list of all attempts for a student in a lesson

### Example Usage

```typescript
import { PowerPath } from "@superbuilders/powerpath";

const powerPath = new PowerPath({
  security: {
    clientID: process.env["POWERPATH_CLIENT_ID"] ?? "",
    clientSecret: process.env["POWERPATH_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await powerPath.lessons.getAttempts({
    student: "<value>",
    lesson: "<value>",
  });

  // Handle the result
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
  security: {
    clientID: process.env["POWERPATH_CLIENT_ID"] ?? "",
    clientSecret: process.env["POWERPATH_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await lessonsGetAttempts(powerPath, {
    student: "<value>",
    lesson: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
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

| Error Type                               | Status Code                              | Content Type                             |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| errors.BadRequestResponseError           | 400                                      | application/json                         |
| errors.UnauthorizedRequestResponseError1 | 401                                      | application/json                         |
| errors.ForbiddenResponseError1           | 403                                      | application/json                         |
| errors.NotFoundResponseError1            | 404                                      | application/json                         |
| errors.UnprocessableEntityResponseError1 | 422                                      | application/json                         |
| errors.TooManyRequestsResponseError1     | 429                                      | application/json                         |
| errors.InternalServerErrorResponse1      | 500                                      | application/json                         |
| errors.APIError                          | 4XX, 5XX                                 | \*/\*                                    |

## getNextQuestion

Returns the next question in the given PowerPath lesson

### Example Usage

```typescript
import { PowerPath } from "@superbuilders/powerpath";

const powerPath = new PowerPath({
  security: {
    clientID: process.env["POWERPATH_CLIENT_ID"] ?? "",
    clientSecret: process.env["POWERPATH_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await powerPath.lessons.getNextQuestion({
    student: "<value>",
    lesson: "<value>",
  });

  // Handle the result
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
  security: {
    clientID: process.env["POWERPATH_CLIENT_ID"] ?? "",
    clientSecret: process.env["POWERPATH_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await lessonsGetNextQuestion(powerPath, {
    student: "<value>",
    lesson: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
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

| Error Type                               | Status Code                              | Content Type                             |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| errors.BadRequestResponseError           | 400                                      | application/json                         |
| errors.UnauthorizedRequestResponseError1 | 401                                      | application/json                         |
| errors.ForbiddenResponseError1           | 403                                      | application/json                         |
| errors.NotFoundResponseError1            | 404                                      | application/json                         |
| errors.UnprocessableEntityResponseError1 | 422                                      | application/json                         |
| errors.TooManyRequestsResponseError1     | 429                                      | application/json                         |
| errors.InternalServerErrorResponse1      | 500                                      | application/json                         |
| errors.APIError                          | 4XX, 5XX                                 | \*/\*                                    |

## resetAttempt

Resets the attempt for the given PowerPath lesson of a student, removing all previous responses and resetting the score to 0

### Example Usage

```typescript
import { PowerPath } from "@superbuilders/powerpath";

const powerPath = new PowerPath({
  security: {
    clientID: process.env["POWERPATH_CLIENT_ID"] ?? "",
    clientSecret: process.env["POWERPATH_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await powerPath.lessons.resetAttempt();

  // Handle the result
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
  security: {
    clientID: process.env["POWERPATH_CLIENT_ID"] ?? "",
    clientSecret: process.env["POWERPATH_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await lessonsResetAttempt(powerPath);

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
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

| Error Type                               | Status Code                              | Content Type                             |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| errors.BadRequestResponseError           | 400                                      | application/json                         |
| errors.UnauthorizedRequestResponseError1 | 401                                      | application/json                         |
| errors.ForbiddenResponseError1           | 403                                      | application/json                         |
| errors.NotFoundResponseError1            | 404                                      | application/json                         |
| errors.UnprocessableEntityResponseError1 | 422                                      | application/json                         |
| errors.TooManyRequestsResponseError1     | 429                                      | application/json                         |
| errors.InternalServerErrorResponse1      | 500                                      | application/json                         |
| errors.APIError                          | 4XX, 5XX                                 | \*/\*                                    |

## updateStudentResponse

Updates the student's response to a question and returns the updated PowerPath score.

PowerPath will check the correctness of the response using the QTI question `<qti-response-declaration>` element and update the score accordingly.

PowerPath will create/update the required AssessmentLineItem and AssessmentResult objects for the student/question pair if it doesn't exist yet.


### Example Usage

```typescript
import { PowerPath } from "@superbuilders/powerpath";

const powerPath = new PowerPath({
  security: {
    clientID: process.env["POWERPATH_CLIENT_ID"] ?? "",
    clientSecret: process.env["POWERPATH_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await powerPath.lessons.updateStudentResponse();

  // Handle the result
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
  security: {
    clientID: process.env["POWERPATH_CLIENT_ID"] ?? "",
    clientSecret: process.env["POWERPATH_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await lessonsUpdateStudentResponse(powerPath);

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
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

| Error Type                               | Status Code                              | Content Type                             |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| errors.BadRequestResponseError           | 400                                      | application/json                         |
| errors.UnauthorizedRequestResponseError2 | 401                                      | application/json                         |
| errors.ForbiddenResponseError1           | 403                                      | application/json                         |
| errors.NotFoundResponseError1            | 404                                      | application/json                         |
| errors.UnprocessableEntityResponseError1 | 422                                      | application/json                         |
| errors.TooManyRequestsResponseError1     | 429                                      | application/json                         |
| errors.InternalServerErrorResponse2      | 500                                      | application/json                         |
| errors.APIError                          | 4XX, 5XX                                 | \*/\*                                    |