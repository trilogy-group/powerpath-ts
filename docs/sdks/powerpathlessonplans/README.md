# PowerPathLessonPlans
(*powerPathLessonPlans*)

## Overview

Manage lesson plans and instructional content

### Available Operations

* [createLessonPlan](#createlessonplan) - Create a lesson plan
* [getTree](#gettree) - Returns the lesson plan tree for a course and student
* [deleteLessonPlan](#deletelessonplan) - Delete a lesson plan
* [attachComponent](#attachcomponent) - Create a lesson plan item to attach a component to a lesson plan
* [attachResource](#attachresource) - Create a lesson plan item to attach a resource to a lesson plan
* [updateLessonPlanItem](#updatelessonplanitem) - Update a lesson plan item
* [deleteLessonPlanItem](#deletelessonplanitem) - Delete a lesson plan item

## createLessonPlan


    Creates a new lesson plan for a course and student.

    The lesson plan is created by specifying a course sourced ID and a student sourced ID and, optionally, a class sourced ID.
    The student must be enrolled in the class to create a lesson plan for them.

    If no class sourced ID is provided, the course's default class will be used if available.
    

### Example Usage

```typescript
import { PowerPath } from "@superbuilders/powerpath";

const powerPath = new PowerPath({
  oAuth2: process.env["POWERPATH_O_AUTH2"] ?? "",
});

async function run() {
  const result = await powerPath.powerPathLessonPlans.createLessonPlan();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PowerPathCore } from "@superbuilders/powerpath/core.js";
import { powerPathLessonPlansCreateLessonPlan } from "@superbuilders/powerpath/funcs/powerPathLessonPlansCreateLessonPlan.js";

// Use `PowerPathCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const powerPath = new PowerPathCore({
  oAuth2: process.env["POWERPATH_O_AUTH2"] ?? "",
});

async function run() {
  const res = await powerPathLessonPlansCreateLessonPlan(powerPath);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("powerPathLessonPlansCreateLessonPlan failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateLessonPlanRequest](../../models/operations/createlessonplanrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateLessonPlanResponse](../../models/operations/createlessonplanresponse.md)\>**

### Errors

| Error Type                              | Status Code                             | Content Type                            |
| --------------------------------------- | --------------------------------------- | --------------------------------------- |
| errors.UnauthorizedRequestResponseError | 401                                     | application/json                        |
| errors.ForbiddenResponseError           | 403                                     | application/json                        |
| errors.APIError                         | 4XX, 5XX                                | \*/\*                                   |

## getTree


    Given a course sourced ID and a user sourced ID, returns the lesson plan tree.

    The lesson plan tree is nested object comprised of several lessonPlanItems, 
    which are nodes that contain information about the lesson plan - including which component or component resource is associated with that node, 
    as well as which node is its parent.

    A node may reference a component or a componentResource.
    A node with no parent is considered at the root level of the lesson plan tree.

    A student's lesson plan has a unique ID that can be used instead of the parameters to retrieve it.
    

### Example Usage

```typescript
import { PowerPath } from "@superbuilders/powerpath";

const powerPath = new PowerPath({
  oAuth2: process.env["POWERPATH_O_AUTH2"] ?? "",
});

async function run() {
  const result = await powerPath.powerPathLessonPlans.getTree({
    courseId: "<id>",
    userId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PowerPathCore } from "@superbuilders/powerpath/core.js";
import { powerPathLessonPlansGetTree } from "@superbuilders/powerpath/funcs/powerPathLessonPlansGetTree.js";

// Use `PowerPathCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const powerPath = new PowerPathCore({
  oAuth2: process.env["POWERPATH_O_AUTH2"] ?? "",
});

async function run() {
  const res = await powerPathLessonPlansGetTree(powerPath, {
    courseId: "<id>",
    userId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("powerPathLessonPlansGetTree failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetTreeRequest](../../models/operations/gettreerequest.md)                                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetTreeResponse](../../models/operations/gettreeresponse.md)\>**

### Errors

| Error Type                              | Status Code                             | Content Type                            |
| --------------------------------------- | --------------------------------------- | --------------------------------------- |
| errors.UnauthorizedRequestResponseError | 401                                     | application/json                        |
| errors.ForbiddenResponseError           | 403                                     | application/json                        |
| errors.APIError                         | 4XX, 5XX                                | \*/\*                                   |

## deleteLessonPlan


    Deletes a lesson plan by its ID.
    This will delete the lesson plan and all of its associated lesson plan items.
    

### Example Usage

```typescript
import { PowerPath } from "@superbuilders/powerpath";

const powerPath = new PowerPath({
  oAuth2: process.env["POWERPATH_O_AUTH2"] ?? "",
});

async function run() {
  await powerPath.powerPathLessonPlans.deleteLessonPlan({
    lessonPlanId: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PowerPathCore } from "@superbuilders/powerpath/core.js";
import { powerPathLessonPlansDeleteLessonPlan } from "@superbuilders/powerpath/funcs/powerPathLessonPlansDeleteLessonPlan.js";

// Use `PowerPathCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const powerPath = new PowerPathCore({
  oAuth2: process.env["POWERPATH_O_AUTH2"] ?? "",
});

async function run() {
  const res = await powerPathLessonPlansDeleteLessonPlan(powerPath, {
    lessonPlanId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("powerPathLessonPlansDeleteLessonPlan failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteLessonPlanRequest](../../models/operations/deletelessonplanrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                              | Status Code                             | Content Type                            |
| --------------------------------------- | --------------------------------------- | --------------------------------------- |
| errors.UnauthorizedRequestResponseError | 401                                     | application/json                        |
| errors.ForbiddenResponseError           | 403                                     | application/json                        |
| errors.APIError                         | 4XX, 5XX                                | \*/\*                                   |

## attachComponent


    Creates a lessonPlanItem of type "component" and attaches it to lesson plan with the given ID.
    The lessonPlanItem *must* reference a course component for the course associated with the lesson plan.
    The parent lessonPlanItem, if any, must be of type "component" as well.

    

### Example Usage

```typescript
import { PowerPath } from "@superbuilders/powerpath";

const powerPath = new PowerPath({
  oAuth2: process.env["POWERPATH_O_AUTH2"] ?? "",
});

async function run() {
  const result = await powerPath.powerPathLessonPlans.attachComponent({
    lessonPlanId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PowerPathCore } from "@superbuilders/powerpath/core.js";
import { powerPathLessonPlansAttachComponent } from "@superbuilders/powerpath/funcs/powerPathLessonPlansAttachComponent.js";

// Use `PowerPathCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const powerPath = new PowerPathCore({
  oAuth2: process.env["POWERPATH_O_AUTH2"] ?? "",
});

async function run() {
  const res = await powerPathLessonPlansAttachComponent(powerPath, {
    lessonPlanId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("powerPathLessonPlansAttachComponent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AttachComponentRequest](../../models/operations/attachcomponentrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AttachComponentResponse](../../models/operations/attachcomponentresponse.md)\>**

### Errors

| Error Type                              | Status Code                             | Content Type                            |
| --------------------------------------- | --------------------------------------- | --------------------------------------- |
| errors.UnauthorizedRequestResponseError | 401                                     | application/json                        |
| errors.ForbiddenResponseError           | 403                                     | application/json                        |
| errors.APIError                         | 4XX, 5XX                                | \*/\*                                   |

## attachResource


    Creates a lessonPlanItem of type "resource" and attaches it to lesson plan with the given ID.
    The lessonPlanItem *must* reference a course component resource for the course associated with the lesson plan.

    The parent lessonPlanItem, if any, must be of type "component".
    

### Example Usage

```typescript
import { PowerPath } from "@superbuilders/powerpath";

const powerPath = new PowerPath({
  oAuth2: process.env["POWERPATH_O_AUTH2"] ?? "",
});

async function run() {
  const result = await powerPath.powerPathLessonPlans.attachResource({
    lessonPlanId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PowerPathCore } from "@superbuilders/powerpath/core.js";
import { powerPathLessonPlansAttachResource } from "@superbuilders/powerpath/funcs/powerPathLessonPlansAttachResource.js";

// Use `PowerPathCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const powerPath = new PowerPathCore({
  oAuth2: process.env["POWERPATH_O_AUTH2"] ?? "",
});

async function run() {
  const res = await powerPathLessonPlansAttachResource(powerPath, {
    lessonPlanId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("powerPathLessonPlansAttachResource failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AttachResourceRequest](../../models/operations/attachresourcerequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AttachResourceResponse](../../models/operations/attachresourceresponse.md)\>**

### Errors

| Error Type                              | Status Code                             | Content Type                            |
| --------------------------------------- | --------------------------------------- | --------------------------------------- |
| errors.UnauthorizedRequestResponseError | 401                                     | application/json                        |
| errors.ForbiddenResponseError           | 403                                     | application/json                        |
| errors.APIError                         | 4XX, 5XX                                | \*/\*                                   |

## updateLessonPlanItem


    Updates a lesson plan item by its ID.

    While many parameters of a lesson plan item can be updated, 
    the main use case for this feature is to re-parent a lesson plan item.
    

### Example Usage

```typescript
import { PowerPath } from "@superbuilders/powerpath";

const powerPath = new PowerPath({
  oAuth2: process.env["POWERPATH_O_AUTH2"] ?? "",
});

async function run() {
  await powerPath.powerPathLessonPlans.updateLessonPlanItem({
    lessonPlanItemId: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PowerPathCore } from "@superbuilders/powerpath/core.js";
import { powerPathLessonPlansUpdateLessonPlanItem } from "@superbuilders/powerpath/funcs/powerPathLessonPlansUpdateLessonPlanItem.js";

// Use `PowerPathCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const powerPath = new PowerPathCore({
  oAuth2: process.env["POWERPATH_O_AUTH2"] ?? "",
});

async function run() {
  const res = await powerPathLessonPlansUpdateLessonPlanItem(powerPath, {
    lessonPlanItemId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("powerPathLessonPlansUpdateLessonPlanItem failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateLessonPlanItemRequest](../../models/operations/updatelessonplanitemrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                              | Status Code                             | Content Type                            |
| --------------------------------------- | --------------------------------------- | --------------------------------------- |
| errors.UnauthorizedRequestResponseError | 401                                     | application/json                        |
| errors.ForbiddenResponseError           | 403                                     | application/json                        |
| errors.APIError                         | 4XX, 5XX                                | \*/\*                                   |

## deleteLessonPlanItem


    Deletes a lesson plan item by its ID.

    This will delete the lesson plan item and all of its associated lesson plan items.
    WARNING: This operation is irreversible.
    

### Example Usage

```typescript
import { PowerPath } from "@superbuilders/powerpath";

const powerPath = new PowerPath({
  oAuth2: process.env["POWERPATH_O_AUTH2"] ?? "",
});

async function run() {
  await powerPath.powerPathLessonPlans.deleteLessonPlanItem({
    lessonPlanItemId: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PowerPathCore } from "@superbuilders/powerpath/core.js";
import { powerPathLessonPlansDeleteLessonPlanItem } from "@superbuilders/powerpath/funcs/powerPathLessonPlansDeleteLessonPlanItem.js";

// Use `PowerPathCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const powerPath = new PowerPathCore({
  oAuth2: process.env["POWERPATH_O_AUTH2"] ?? "",
});

async function run() {
  const res = await powerPathLessonPlansDeleteLessonPlanItem(powerPath, {
    lessonPlanItemId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("powerPathLessonPlansDeleteLessonPlanItem failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteLessonPlanItemRequest](../../models/operations/deletelessonplanitemrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                              | Status Code                             | Content Type                            |
| --------------------------------------- | --------------------------------------- | --------------------------------------- |
| errors.UnauthorizedRequestResponseError | 401                                     | application/json                        |
| errors.ForbiddenResponseError           | 403                                     | application/json                        |
| errors.APIError                         | 4XX, 5XX                                | \*/\*                                   |