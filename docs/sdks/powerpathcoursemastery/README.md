# PowerPathCourseMastery
(*powerPathCourseMastery*)

## Overview

### Available Operations

* [createExternalPlacementTest](#createexternalplacementtest) - Create an External Placement Test
* [createExternalTestOut](#createexternaltestout) - Create an External TestOut
* [importExternalTestAssignmentResults](#importexternaltestassignmentresults) - Import external test assignment results
* [makeExternalTestAssignment](#makeexternaltestassignment) - Make external test assignment
* [testOut](#testout) - Test out

## createExternalPlacementTest

Creates or updates a ComponentResource to act as a Placement Test lesson in a course.
This allows integrating with external test-taking platforms (like Edulastic) for content delivery.

The endpoint creates or updates (if they already exist) the following entities:
- A CourseComponent for the course to hold the Placement Test lesson
- A Resource with lessonType = "placement" and the external service details as metadata
- A ComponentResource acting as the Placement Test lesson

A test assignment is mandatory in order to obtain access credentials for this test on the external platform, as well as to obtain the IDs necessary for fetching test results later on:
- For test assignments, use the "makeExternalTestAssignment" endpoint.
- For test results retrieval, use the "importExternalTestAssignmentResults" endpoint.

If a 'courseIdOnFail' parameter is supplied, its Course's sourcedId will be used to automatically enroll the student when the placement test is completed with a score below 90 %. When the parameter is omitted (or set to null), no automatic enrollment will happen.

This request fails if:
- The 'course' provided does not exist, or a non-null 'courseIdOnFail' references a non-existent course
- An existing Placement Test lesson in the course, targeting the same grade, has a different toolProvider than the one provided (need to perform an update to the Resource first, altering the "toolProvider", before trying again)

A 'Lesson' in this context is a ComponentResource object which has a Resource object with lessonType = "placement" associated with it.


### Example Usage

```typescript
import { PowerPath } from "@superbuilders/powerpath";

const powerPath = new PowerPath({
  oAuth2: process.env["POWERPATH_O_AUTH2"] ?? "",
});

async function run() {
  const result = await powerPath.powerPathCourseMastery.createExternalPlacementTest();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PowerPathCore } from "@superbuilders/powerpath/core.js";
import { powerPathCourseMasteryCreateExternalPlacementTest } from "@superbuilders/powerpath/funcs/powerPathCourseMasteryCreateExternalPlacementTest.js";

// Use `PowerPathCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const powerPath = new PowerPathCore({
  oAuth2: process.env["POWERPATH_O_AUTH2"] ?? "",
});

async function run() {
  const res = await powerPathCourseMasteryCreateExternalPlacementTest(powerPath);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("powerPathCourseMasteryCreateExternalPlacementTest failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateExternalPlacementTestRequest](../../models/operations/createexternalplacementtestrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateExternalPlacementTestResponse](../../models/operations/createexternalplacementtestresponse.md)\>**

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

## createExternalTestOut

Creates or updates a ComponentResource to act as a TestOut lesson in a course.
This allows integrating with external test-taking platforms (like Edulastic) for content delivery.

The endpoint creates or updates (if they already exist) the following entities:
- A CourseComponent for the course to hold the TestOut lesson
- A Resource with lessonType = "test-out" and the external service details as metadata
- A ComponentResource acting as the TestOut lesson

A test assignment is mandatory in order to obtain access credentials for this test on the external platform, as well as to obtain the IDs necessary for fetching test results later on:
- For test assignments, use the "makeExternalTestAssignment" endpoint.
- For test results retrieval, use the "importExternalTestAssignmentResults" endpoint.

This request fails if:
- The course provided does not exist
- An existing TestOut lesson in the course has a different toolProvider than the one provided (need to perform an update to the Resource first, altering the "toolProvider", before trying again)

A 'Lesson' in this context is a ComponentResource object which has a Resource object with lessonType = "test-out" associated with it.


### Example Usage

```typescript
import { PowerPath } from "@superbuilders/powerpath";

const powerPath = new PowerPath({
  oAuth2: process.env["POWERPATH_O_AUTH2"] ?? "",
});

async function run() {
  const result = await powerPath.powerPathCourseMastery.createExternalTestOut();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PowerPathCore } from "@superbuilders/powerpath/core.js";
import { powerPathCourseMasteryCreateExternalTestOut } from "@superbuilders/powerpath/funcs/powerPathCourseMasteryCreateExternalTestOut.js";

// Use `PowerPathCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const powerPath = new PowerPathCore({
  oAuth2: process.env["POWERPATH_O_AUTH2"] ?? "",
});

async function run() {
  const res = await powerPathCourseMasteryCreateExternalTestOut(powerPath);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("powerPathCourseMasteryCreateExternalTestOut failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateExternalTestOutRequest](../../models/operations/createexternaltestoutrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateExternalTestOutResponse](../../models/operations/createexternaltestoutresponse.md)\>**

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

## importExternalTestAssignmentResults

Retrieves and stores the results of the external test assignment:
- Applies to both 'test-out' and 'placement' lessons.

This logic changes depending on the stored "toolProvider" of the lesson:
- For "edulastic" (currently the only one supported):

  - If the lesson is already finalized, no data import is performed.
  - If the lesson is not finalized, this will start populating the test and question results with available data, including question scores and feedback. The test will then be deemed finalized when all questions have been answered and the test grade is "GRADED".

Will fail if:
- The lesson is not an external "test-out" or "placement", or the student does not exist
- Credentials for data consumption are not available in the test result of this student (meaning a previous test assignment was not made)
- Any other problem on the Edulastic API being used that may happen

The actual test results can be retrieved by using the "getAssessmentProgress" endpoint.

A 'Lesson' in this context is a ComponentResource object which has a Resource object with lessonType = "test-out" or "placement" associated with it.


### Example Usage

```typescript
import { PowerPath } from "@superbuilders/powerpath";

const powerPath = new PowerPath({
  oAuth2: process.env["POWERPATH_O_AUTH2"] ?? "",
});

async function run() {
  const result = await powerPath.powerPathCourseMastery.importExternalTestAssignmentResults({
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
import { powerPathCourseMasteryImportExternalTestAssignmentResults } from "@superbuilders/powerpath/funcs/powerPathCourseMasteryImportExternalTestAssignmentResults.js";

// Use `PowerPathCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const powerPath = new PowerPathCore({
  oAuth2: process.env["POWERPATH_O_AUTH2"] ?? "",
});

async function run() {
  const res = await powerPathCourseMasteryImportExternalTestAssignmentResults(powerPath, {
    student: "<value>",
    lesson: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("powerPathCourseMasteryImportExternalTestAssignmentResults failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ImportExternalTestAssignmentResultsRequest](../../models/operations/importexternaltestassignmentresultsrequest.md)                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ImportExternalTestAssignmentResultsResponse](../../models/operations/importexternaltestassignmentresultsresponse.md)\>**

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

## makeExternalTestAssignment

Makes an external test assignment for the given student:
- Applies to both 'test-out' and 'placement' lessons.

This logic changes depending on the provided "toolProvider" value:
- For "edulastic" (currently the only one supported):

  - Authenticates the student with their email on Edulastic
  - Assigns the test to the student in Edulastic
  - Stores the received "assignmentId" and "classId" in the lesson's AssessmentResult
  - Returns the test link, credentials, and IDs of the test for later results consumption

Will fail if:
- The lesson is not an external "test-out" or "placement", or the student does not exist
- External tool (described in the resource.metadata.toolProvider) is not "edulastic"
- Any other problem on the Edulastic API being used that may happen

A 'Lesson' in this context is a ComponentResource object which has a Resource object with lessonType = "test-out" or "placement" associated with it.


### Example Usage

```typescript
import { PowerPath } from "@superbuilders/powerpath";

const powerPath = new PowerPath({
  oAuth2: process.env["POWERPATH_O_AUTH2"] ?? "",
});

async function run() {
  const result = await powerPath.powerPathCourseMastery.makeExternalTestAssignment();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PowerPathCore } from "@superbuilders/powerpath/core.js";
import { powerPathCourseMasteryMakeExternalTestAssignment } from "@superbuilders/powerpath/funcs/powerPathCourseMasteryMakeExternalTestAssignment.js";

// Use `PowerPathCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const powerPath = new PowerPathCore({
  oAuth2: process.env["POWERPATH_O_AUTH2"] ?? "",
});

async function run() {
  const res = await powerPathCourseMasteryMakeExternalTestAssignment(powerPath);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("powerPathCourseMasteryMakeExternalTestAssignment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.MakeExternalTestAssignmentRequest](../../models/operations/makeexternaltestassignmentrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.MakeExternalTestAssignmentResponse](../../models/operations/makeexternaltestassignmentresponse.md)\>**

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

## testOut

Returns the testOut lesson reference for the given student and course.

- TestOut is a lesson that represents the end-of-course test, covering the entire course content.
- The testOut should be specified by a Resource with metadata.lessonType = "test-out".

Details:
- Returns a null lessonId in case no Resource with metadata.lessonType = "test-out" is found in the course.
- In case student has already taken the TestOut, this will return the "finalized" flag set to true.
- In case this is an external TestOut, also return external access credentials, if available (i.e. test was previously assigned to student).

A 'Lesson' in this context is a ComponentResource object which has a Resource object with metadata.lessonType = "test-out" associated with it.


### Example Usage

```typescript
import { PowerPath } from "@superbuilders/powerpath";

const powerPath = new PowerPath({
  oAuth2: process.env["POWERPATH_O_AUTH2"] ?? "",
});

async function run() {
  const result = await powerPath.powerPathCourseMastery.testOut({
    student: "<value>",
    course: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PowerPathCore } from "@superbuilders/powerpath/core.js";
import { powerPathCourseMasteryTestOut } from "@superbuilders/powerpath/funcs/powerPathCourseMasteryTestOut.js";

// Use `PowerPathCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const powerPath = new PowerPathCore({
  oAuth2: process.env["POWERPATH_O_AUTH2"] ?? "",
});

async function run() {
  const res = await powerPathCourseMasteryTestOut(powerPath, {
    student: "<value>",
    course: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("powerPathCourseMasteryTestOut failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.TestOutRequest](../../models/operations/testoutrequest.md)                                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.TestOutResult](../../models/components/testoutresult.md)\>**

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