# PowerPathPlacement
(*powerPathPlacement*)

## Overview

### Available Operations

* [getAllPlacementTests](#getallplacementtests) - Get all placement tests
* [getCurrentLevel](#getcurrentlevel) - Get current level
* [getNextPlacementTest](#getnextplacementtest) - Get next placement test
* [getSubjectProgress](#getsubjectprogress) - Get subject progress

## getAllPlacementTests

Returns all placement tests for a subject, including available results for each.

A 'Lesson' (placement test) in this context is a ComponentResource object which has a Resource object with metadata.lessonType = "placement" associated with it.


### Example Usage

```typescript
import { PowerPath } from "@superbuilders/powerpath";

const powerPath = new PowerPath({
  oAuth2: process.env["POWERPATH_O_AUTH2"] ?? "",
});

async function run() {
  const result = await powerPath.powerPathPlacement.getAllPlacementTests({
    student: "<value>",
    subject: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PowerPathCore } from "@superbuilders/powerpath/core.js";
import { powerPathPlacementGetAllPlacementTests } from "@superbuilders/powerpath/funcs/powerPathPlacementGetAllPlacementTests.js";

// Use `PowerPathCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const powerPath = new PowerPathCore({
  oAuth2: process.env["POWERPATH_O_AUTH2"] ?? "",
});

async function run() {
  const res = await powerPathPlacementGetAllPlacementTests(powerPath, {
    student: "<value>",
    subject: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("powerPathPlacementGetAllPlacementTests failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAllPlacementTestsRequest](../../models/operations/getallplacementtestsrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetAllPlacementTestsResponse](../../models/operations/getallplacementtestsresponse.md)\>**

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

## getCurrentLevel

Returns the current level of the student in a placement process:
- The level is determined by the last completed placement test's grade level, starting from the lowest grade level available for the subject's placement tests.
- As the student completes placement tests and attains scores of 90 or greater, their level updates to the next level available for the subject.

Also returns the 'onboarded' boolean that indicates if the student completed the onboarding process for the subject:
- A 'onboarded = true' means they either completed and passed all placement tests or they have gotten a score smaller than 90 in the last completed placement test.
- A 'onboarded = false' means they haven't completed placement tests yet or have achieved a score of 90 or greater in the last completed placement test and there are more tests to take.


### Example Usage

```typescript
import { PowerPath } from "@superbuilders/powerpath";

const powerPath = new PowerPath({
  oAuth2: process.env["POWERPATH_O_AUTH2"] ?? "",
});

async function run() {
  const result = await powerPath.powerPathPlacement.getCurrentLevel({
    student: "<value>",
    subject: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PowerPathCore } from "@superbuilders/powerpath/core.js";
import { powerPathPlacementGetCurrentLevel } from "@superbuilders/powerpath/funcs/powerPathPlacementGetCurrentLevel.js";

// Use `PowerPathCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const powerPath = new PowerPathCore({
  oAuth2: process.env["POWERPATH_O_AUTH2"] ?? "",
});

async function run() {
  const res = await powerPathPlacementGetCurrentLevel(powerPath, {
    student: "<value>",
    subject: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("powerPathPlacementGetCurrentLevel failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCurrentLevelRequest](../../models/operations/getcurrentlevelrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetCurrentLevelResponse](../../models/operations/getcurrentlevelresponse.md)\>**

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

## getNextPlacementTest

Returns the next placement test for the student in a subject:
- If the student has completed all placement tests for the subject, the next test's lesson ID will be null. Tests will also be marked as exhausted.
- If the student hasn't completed a single placement test, returns the first placement test's lesson ID for the subject.
- If the student has completed some placement tests, it will return null for the next test's lesson ID if the last completed test had a score smaller than 90.
- Alternatively, it will return the next available placement test's lesson ID if the score was greater than or equal to 90.

Also returns the 'onboarded' boolean that indicates if the student completed the onboarding process for the subject:
- A 'onboarded = true' means they either completed and passed all placement tests or they have gotten a score smaller than 90 in the last completed placement test.
- A 'onboarded = false' means they haven't completed placement tests yet or have achieved a score of 90 or greater in the last completed placement test and there are more tests to take.

A 'Lesson' in this context is a ComponentResource object which has a Resource object with metadata.lessonType = "placement" associated with it.


### Example Usage

```typescript
import { PowerPath } from "@superbuilders/powerpath";

const powerPath = new PowerPath({
  oAuth2: process.env["POWERPATH_O_AUTH2"] ?? "",
});

async function run() {
  const result = await powerPath.powerPathPlacement.getNextPlacementTest({
    student: "<value>",
    subject: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PowerPathCore } from "@superbuilders/powerpath/core.js";
import { powerPathPlacementGetNextPlacementTest } from "@superbuilders/powerpath/funcs/powerPathPlacementGetNextPlacementTest.js";

// Use `PowerPathCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const powerPath = new PowerPathCore({
  oAuth2: process.env["POWERPATH_O_AUTH2"] ?? "",
});

async function run() {
  const res = await powerPathPlacementGetNextPlacementTest(powerPath, {
    student: "<value>",
    subject: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("powerPathPlacementGetNextPlacementTest failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetNextPlacementTestRequest](../../models/operations/getnextplacementtestrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetNextPlacementTestResponse](../../models/operations/getnextplacementtestresponse.md)\>**

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

## getSubjectProgress

Returns the progress the student has made in the given subject


### Example Usage

```typescript
import { PowerPath } from "@superbuilders/powerpath";

const powerPath = new PowerPath({
  oAuth2: process.env["POWERPATH_O_AUTH2"] ?? "",
});

async function run() {
  const result = await powerPath.powerPathPlacement.getSubjectProgress({
    student: "<value>",
    subject: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PowerPathCore } from "@superbuilders/powerpath/core.js";
import { powerPathPlacementGetSubjectProgress } from "@superbuilders/powerpath/funcs/powerPathPlacementGetSubjectProgress.js";

// Use `PowerPathCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const powerPath = new PowerPathCore({
  oAuth2: process.env["POWERPATH_O_AUTH2"] ?? "",
});

async function run() {
  const res = await powerPathPlacementGetSubjectProgress(powerPath, {
    student: "<value>",
    subject: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("powerPathPlacementGetSubjectProgress failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSubjectProgressRequest](../../models/operations/getsubjectprogressrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetSubjectProgressResponse](../../models/operations/getsubjectprogressresponse.md)\>**

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