# @superbuilders/powerpath

Developer-friendly & type-safe Typescript SDK specifically catered to leverage *@superbuilders/powerpath* API.

<div align="left">
    <a href="https://www.speakeasy.com/?utm_source=@superbuilders/powerpath&utm_campaign=typescript"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>


<br /><br />
> [!IMPORTANT]
> This SDK is not yet ready for production use. To complete setup please follow the steps outlined in your [workspace](https://app.speakeasy.com/org/emu-farm/timeback). Delete this section before > publishing to a package manager.

<!-- Start Summary [summary] -->
## Summary

PowerPath API: TimeBack PowerPath 100 API

# Authentication

All endpoints require authentication using the `Authorization: Bearer <token>` header.

The token can be obtained with:

```
curl -X POST https://alpha-auth-production-idp.auth.us-west-2.amazoncognito.com/oauth2/token \
-H "Content-Type: application/x-www-form-urlencoded" \
-d "grant_type=client_credentials&client_id=<your-client-id>&client_secret=<your-client-secret>"
```

Use the correct IDP server depending on the environment you're using:

- Production Server:

  https://alpha-auth-production-idp.auth.us-west-2.amazoncognito.com
- Staging Server:

  https://alpha-auth-development-idp.auth.us-west-2.amazoncognito.com

Reach out to the platform team to get a client/secret pair for your application.

# Pagination

Our API uses offset pagination for list endpoints. Paginated responses include the following fields:

- `offset`: Offset for the next page of results
- `limit`: Number of items per page (default: 100)

Example request:

```
GET /ims/oneroster/rostering/v1p2/users?offset=20&limit=20
```

All listing endpoints support offset pagination.

# Filtering

All listing endpoints support filtering using the `filter` query parameter, following 1EdTech's filtering specification.

The filter should be a string with the following format:

```
?filter=[field][operator][value]
```

Example request:

```
GET /ims/oneroster/rostering/v1p2/users?filter=status='active'
```

Example request with multiple filters:

```
GET /ims/oneroster/rostering/v1p2/users?filter=status='active' AND name='John'
```

**Filtering by nested relations is not supported**.

# Sorting

All listing endpoints support sorting using the `sort` and `orderBy` query parameters, following 1EdTech's sorting specification

Example request:

```
GET /ims/oneroster/rostering/v1p2/users?sort=lastName&orderBy=asc
```
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [@superbuilders/powerpath](#superbuilderspowerpath)
* [Authentication](#authentication)
* [Pagination](#pagination)
* [Filtering](#filtering)
* [Sorting](#sorting)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Authentication](#authentication-1)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add @superbuilders/powerpath
```

### PNPM

```bash
pnpm add @superbuilders/powerpath
```

### Bun

```bash
bun add @superbuilders/powerpath
```

### Yarn

```bash
yarn add @superbuilders/powerpath zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```

> [!NOTE]
> This package is published with CommonJS and ES Modules (ESM) support.


### Model Context Protocol (MCP) Server

This SDK is also an installable MCP server where the various SDK methods are
exposed as tools that can be invoked by AI applications.

> Node.js v20 or greater is required to run the MCP server from npm.

<details>
<summary>Claude installation steps</summary>

Add the following server definition to your `claude_desktop_config.json` file:

```json
{
  "mcpServers": {
    "PowerPath": {
      "command": "npx",
      "args": [
        "-y", "--package", "@superbuilders/powerpath",
        "--",
        "mcp", "start",
        "--client-id", "...",
        "--client-secret", "...",
        "--token-url", "..."
      ]
    }
  }
}
```

</details>

<details>
<summary>Cursor installation steps</summary>

Create a `.cursor/mcp.json` file in your project root with the following content:

```json
{
  "mcpServers": {
    "PowerPath": {
      "command": "npx",
      "args": [
        "-y", "--package", "@superbuilders/powerpath",
        "--",
        "mcp", "start",
        "--client-id", "...",
        "--client-secret", "...",
        "--token-url", "..."
      ]
    }
  }
}
```

</details>

You can also run MCP servers as a standalone binary with no additional dependencies. You must pull these binaries from available Github releases:

```bash
curl -L -o mcp-server \
    https://github.com/{org}/{repo}/releases/download/{tag}/mcp-server-bun-darwin-arm64 && \
chmod +x mcp-server
```

If the repo is a private repo you must add your Github PAT to download a release `-H "Authorization: Bearer {GITHUB_PAT}"`.


```json
{
  "mcpServers": {
    "Todos": {
      "command": "./DOWNLOAD/PATH/mcp-server",
      "args": [
        "start"
      ]
    }
  }
}
```

For a full list of server arguments, run:

```sh
npx -y --package @superbuilders/powerpath -- mcp start --help
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { PowerPath } from "@superbuilders/powerpath";

const powerPath = new PowerPath({
  security: {
    clientID: process.env["POWERPATH_CLIENT_ID"] ?? "",
    clientSecret: process.env["POWERPATH_CLIENT_SECRET"] ?? "",
  },
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
<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name                          | Type   | Scheme                         | Environment Variable                                                          |
| ----------------------------- | ------ | ------------------------------ | ----------------------------------------------------------------------------- |
| `clientID`<br/>`clientSecret` | oauth2 | OAuth2 Client Credentials Flow | `POWERPATH_CLIENT_ID`<br/>`POWERPATH_CLIENT_SECRET`<br/>`POWERPATH_TOKEN_URL` |

You can set the security parameters through the `security` optional parameter when initializing the SDK client instance. For example:
```typescript
import { PowerPath } from "@superbuilders/powerpath";

const powerPath = new PowerPath({
  security: {
    clientID: process.env["POWERPATH_CLIENT_ID"] ?? "",
    clientSecret: process.env["POWERPATH_CLIENT_SECRET"] ?? "",
  },
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
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [lessonPlans](docs/sdks/lessonplans/README.md)

* [getStudentCourseProgress](docs/sdks/lessonplans/README.md#getstudentcourseprogress) - Get course progress
* [updateStudentResponse](docs/sdks/lessonplans/README.md#updatestudentresponse) - Update student item response
* [getSyllabus](docs/sdks/lessonplans/README.md#getsyllabus) - Get course syllabus

### [lessons](docs/sdks/lessons/README.md)

* [createAttempt](docs/sdks/lessons/README.md#createattempt) - Create new attempt
* [finalizeResponse](docs/sdks/lessons/README.md#finalizeresponse) - Finalize a test assessments
* [getProgress](docs/sdks/lessons/README.md#getprogress) - Get assessment progress
* [getAttempts](docs/sdks/lessons/README.md#getattempts) - Get all attempts
* [getNextQuestion](docs/sdks/lessons/README.md#getnextquestion) - Get next question
* [resetAttempt](docs/sdks/lessons/README.md#resetattempt) - Reset attempt
* [updateStudentResponse](docs/sdks/lessons/README.md#updatestudentresponse) - Update student question response


### [powerPathCourseMastery](docs/sdks/powerpathcoursemastery/README.md)

* [createExternalPlacementTest](docs/sdks/powerpathcoursemastery/README.md#createexternalplacementtest) - Create an External Placement Test
* [createExternalTestOut](docs/sdks/powerpathcoursemastery/README.md#createexternaltestout) - Create an External TestOut
* [importExternalTestAssignmentResults](docs/sdks/powerpathcoursemastery/README.md#importexternaltestassignmentresults) - Import external test assignment results
* [makeExternalTestAssignment](docs/sdks/powerpathcoursemastery/README.md#makeexternaltestassignment) - Make external test assignment
* [testOut](docs/sdks/powerpathcoursemastery/README.md#testout) - Test out

### [powerPathLessonPlans](docs/sdks/powerpathlessonplans/README.md)

* [createLessonPlan](docs/sdks/powerpathlessonplans/README.md#createlessonplan) - Create a lesson plan
* [getTree](docs/sdks/powerpathlessonplans/README.md#gettree) - Returns the lesson plan tree for a course and student
* [deleteLessonPlan](docs/sdks/powerpathlessonplans/README.md#deletelessonplan) - Delete a lesson plan
* [attachComponent](docs/sdks/powerpathlessonplans/README.md#attachcomponent) - Create a lesson plan item to attach a component to a lesson plan
* [attachResource](docs/sdks/powerpathlessonplans/README.md#attachresource) - Create a lesson plan item to attach a resource to a lesson plan
* [updateLessonPlanItem](docs/sdks/powerpathlessonplans/README.md#updatelessonplanitem) - Update a lesson plan item
* [deleteLessonPlanItem](docs/sdks/powerpathlessonplans/README.md#deletelessonplanitem) - Delete a lesson plan item

### [powerPathPlacement](docs/sdks/powerpathplacement/README.md)

* [getAllPlacementTests](docs/sdks/powerpathplacement/README.md#getallplacementtests) - Get all placement tests
* [getCurrentLevel](docs/sdks/powerpathplacement/README.md#getcurrentlevel) - Get current level
* [getNextPlacementTest](docs/sdks/powerpathplacement/README.md#getnextplacementtest) - Get next placement test
* [getSubjectProgress](docs/sdks/powerpathplacement/README.md#getsubjectprogress) - Get subject progress

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`lessonPlansGetStudentCourseProgress`](docs/sdks/lessonplans/README.md#getstudentcourseprogress) - Get course progress
- [`lessonPlansGetSyllabus`](docs/sdks/lessonplans/README.md#getsyllabus) - Get course syllabus
- [`lessonPlansUpdateStudentResponse`](docs/sdks/lessonplans/README.md#updatestudentresponse) - Update student item response
- [`lessonsCreateAttempt`](docs/sdks/lessons/README.md#createattempt) - Create new attempt
- [`lessonsFinalizeResponse`](docs/sdks/lessons/README.md#finalizeresponse) - Finalize a test assessments
- [`lessonsGetAttempts`](docs/sdks/lessons/README.md#getattempts) - Get all attempts
- [`lessonsGetNextQuestion`](docs/sdks/lessons/README.md#getnextquestion) - Get next question
- [`lessonsGetProgress`](docs/sdks/lessons/README.md#getprogress) - Get assessment progress
- [`lessonsResetAttempt`](docs/sdks/lessons/README.md#resetattempt) - Reset attempt
- [`lessonsUpdateStudentResponse`](docs/sdks/lessons/README.md#updatestudentresponse) - Update student question response
- [`powerPathCourseMasteryCreateExternalPlacementTest`](docs/sdks/powerpathcoursemastery/README.md#createexternalplacementtest) - Create an External Placement Test
- [`powerPathCourseMasteryCreateExternalTestOut`](docs/sdks/powerpathcoursemastery/README.md#createexternaltestout) - Create an External TestOut
- [`powerPathCourseMasteryImportExternalTestAssignmentResults`](docs/sdks/powerpathcoursemastery/README.md#importexternaltestassignmentresults) - Import external test assignment results
- [`powerPathCourseMasteryMakeExternalTestAssignment`](docs/sdks/powerpathcoursemastery/README.md#makeexternaltestassignment) - Make external test assignment
- [`powerPathCourseMasteryTestOut`](docs/sdks/powerpathcoursemastery/README.md#testout) - Test out
- [`powerPathLessonPlansAttachComponent`](docs/sdks/powerpathlessonplans/README.md#attachcomponent) - Create a lesson plan item to attach a component to a lesson plan
- [`powerPathLessonPlansAttachResource`](docs/sdks/powerpathlessonplans/README.md#attachresource) - Create a lesson plan item to attach a resource to a lesson plan
- [`powerPathLessonPlansCreateLessonPlan`](docs/sdks/powerpathlessonplans/README.md#createlessonplan) - Create a lesson plan
- [`powerPathLessonPlansDeleteLessonPlan`](docs/sdks/powerpathlessonplans/README.md#deletelessonplan) - Delete a lesson plan
- [`powerPathLessonPlansDeleteLessonPlanItem`](docs/sdks/powerpathlessonplans/README.md#deletelessonplanitem) - Delete a lesson plan item
- [`powerPathLessonPlansGetTree`](docs/sdks/powerpathlessonplans/README.md#gettree) - Returns the lesson plan tree for a course and student
- [`powerPathLessonPlansUpdateLessonPlanItem`](docs/sdks/powerpathlessonplans/README.md#updatelessonplanitem) - Update a lesson plan item
- [`powerPathPlacementGetAllPlacementTests`](docs/sdks/powerpathplacement/README.md#getallplacementtests) - Get all placement tests
- [`powerPathPlacementGetCurrentLevel`](docs/sdks/powerpathplacement/README.md#getcurrentlevel) - Get current level
- [`powerPathPlacementGetNextPlacementTest`](docs/sdks/powerpathplacement/README.md#getnextplacementtest) - Get next placement test
- [`powerPathPlacementGetSubjectProgress`](docs/sdks/powerpathplacement/README.md#getsubjectprogress) - Get subject progress

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { PowerPath } from "@superbuilders/powerpath";

const powerPath = new PowerPath({
  security: {
    clientID: process.env["POWERPATH_CLIENT_ID"] ?? "",
    clientSecret: process.env["POWERPATH_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await powerPath.powerPathPlacement.getAllPlacementTests({
    student: "<value>",
    subject: "<value>",
  }, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { PowerPath } from "@superbuilders/powerpath";

const powerPath = new PowerPath({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  security: {
    clientID: process.env["POWERPATH_CLIENT_ID"] ?? "",
    clientSecret: process.env["POWERPATH_CLIENT_SECRET"] ?? "",
  },
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
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`PowerPathError`](./src/models/errors/powerpatherror.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                                                             |
| ------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `error.message`     | `string`   | Error message                                                                           |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                                                      |
| `error.headers`     | `Headers`  | HTTP response headers                                                                   |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned.                                  |
| `error.rawResponse` | `Response` | Raw HTTP response                                                                       |
| `error.data$`       |            | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```typescript
import { PowerPath } from "@superbuilders/powerpath";
import * as errors from "@superbuilders/powerpath/models/errors";

const powerPath = new PowerPath({
  security: {
    clientID: process.env["POWERPATH_CLIENT_ID"] ?? "",
    clientSecret: process.env["POWERPATH_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  try {
    const result = await powerPath.powerPathPlacement.getAllPlacementTests({
      student: "<value>",
      subject: "<value>",
    });

    console.log(result);
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof errors.PowerPathError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);

      // Depending on the method different errors may be thrown
      if (error instanceof errors.BadRequestResponseError) {
        console.log(error.data$.imsxCodeMajor); // string
        console.log(error.data$.imsxSeverity); // string
        console.log(error.data$.imsxDescription); // string
        console.log(error.data$.imsxCodeMinor); // errors.BadRequestResponseImsxCodeMinor
        console.log(error.data$.imsxErrorDetails); // { [k: string]: string }[]
      }
    }
  }
}

run();

```

### Error Classes
**Primary errors:**
* [`PowerPathError`](./src/models/errors/powerpatherror.ts): The base class for HTTP error responses.
  * [`UnauthorizedRequestResponseError`](./src/models/errors/unauthorizedrequestresponseerror.ts): Unauthorized. Status code `401`.
  * [`ForbiddenResponseError`](./src/models/errors/forbiddenresponseerror.ts): Forbidden. Status code `403`.

<details><summary>Less common errors (11)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.


**Inherit from [`PowerPathError`](./src/models/errors/powerpatherror.ts)**:
* [`BadRequestResponseError`](./src/models/errors/badrequestresponseerror.ts): Bad Request. Status code `400`. Applicable to 19 of 26 methods.*
* [`NotFoundResponseError`](./src/models/errors/notfoundresponseerror.ts): Not Found. Status code `404`. Applicable to 19 of 26 methods.*
* [`UnprocessableEntityResponseError`](./src/models/errors/unprocessableentityresponseerror.ts): Unprocessable Entity / Validation Error. Status code `422`. Applicable to 19 of 26 methods.*
* [`TooManyRequestsResponseError`](./src/models/errors/toomanyrequestsresponseerror.ts): Too Many Requests. Status code `429`. Applicable to 19 of 26 methods.*
* [`InternalServerErrorResponse`](./src/models/errors/internalservererrorresponse.ts): Internal Server Error. Status code `500`. Applicable to 19 of 26 methods.*
* [`ResponseValidationError`](./src/models/errors/responsevalidationerror.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>

\* Check [the method documentation](#available-resources-and-operations) to see if the error is applicable.
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Override Server URL Per-Client

The default server can be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { PowerPath } from "@superbuilders/powerpath";

const powerPath = new PowerPath({
  serverURL: "https://api.alpha-1edtech.com",
  security: {
    clientID: process.env["POWERPATH_CLIENT_ID"] ?? "",
    clientSecret: process.env["POWERPATH_CLIENT_SECRET"] ?? "",
  },
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
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { PowerPath } from "@superbuilders/powerpath";
import { HTTPClient } from "@superbuilders/powerpath/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new PowerPath({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { PowerPath } from "@superbuilders/powerpath";

const sdk = new PowerPath({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `POWERPATH_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=@superbuilders/powerpath&utm_campaign=typescript)
