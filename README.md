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
  const result = await powerPath.lessonPlans.getStudentCourseProgress({
    courseId: "<id>",
    studentId: "<id>",
  });

  // Handle the result
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
  const result = await powerPath.lessonPlans.getStudentCourseProgress({
    courseId: "<id>",
    studentId: "<id>",
  });

  // Handle the result
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
* [finalizeResponse](docs/sdks/lessons/README.md#finalizeresponse) - Finalize a quiz assessment
* [getProgress](docs/sdks/lessons/README.md#getprogress) - Get assessment progress
* [getAttempts](docs/sdks/lessons/README.md#getattempts) - Get all attempts
* [getNextQuestion](docs/sdks/lessons/README.md#getnextquestion) - Get next question
* [resetAttempt](docs/sdks/lessons/README.md#resetattempt) - Reset attempt
* [updateStudentResponse](docs/sdks/lessons/README.md#updatestudentresponse) - Update student question response


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
- [`lessonsFinalizeResponse`](docs/sdks/lessons/README.md#finalizeresponse) - Finalize a quiz assessment
- [`lessonsGetAttempts`](docs/sdks/lessons/README.md#getattempts) - Get all attempts
- [`lessonsGetNextQuestion`](docs/sdks/lessons/README.md#getnextquestion) - Get next question
- [`lessonsGetProgress`](docs/sdks/lessons/README.md#getprogress) - Get assessment progress
- [`lessonsResetAttempt`](docs/sdks/lessons/README.md#resetattempt) - Reset attempt
- [`lessonsUpdateStudentResponse`](docs/sdks/lessons/README.md#updatestudentresponse) - Update student question response

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
  const result = await powerPath.lessonPlans.getStudentCourseProgress({
    courseId: "<id>",
    studentId: "<id>",
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

  // Handle the result
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
  const result = await powerPath.lessonPlans.getStudentCourseProgress({
    courseId: "<id>",
    studentId: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

Some methods specify known errors which can be thrown. All the known errors are enumerated in the `models/errors/errors.ts` module. The known errors for a method are documented under the *Errors* tables in SDK docs. For example, the `getStudentCourseProgress` method may throw the following errors:

| Error Type                               | Status Code | Content Type     |
| ---------------------------------------- | ----------- | ---------------- |
| errors.BadRequestResponseError           | 400         | application/json |
| errors.UnauthorizedRequestResponseError1 | 401         | application/json |
| errors.ForbiddenResponseError1           | 403         | application/json |
| errors.NotFoundResponseError1            | 404         | application/json |
| errors.UnprocessableEntityResponseError1 | 422         | application/json |
| errors.TooManyRequestsResponseError1     | 429         | application/json |
| errors.InternalServerErrorResponse1      | 500         | application/json |
| errors.APIError                          | 4XX, 5XX    | \*/\*            |

If the method throws an error and it is not captured by the known errors, it will default to throwing a `APIError`.

```typescript
import { PowerPath } from "@superbuilders/powerpath";
import {
  BadRequestResponseError,
  ForbiddenResponseError1,
  InternalServerErrorResponse1,
  NotFoundResponseError1,
  SDKValidationError,
  TooManyRequestsResponseError1,
  UnauthorizedRequestResponseError1,
  UnprocessableEntityResponseError1,
} from "@superbuilders/powerpath/models/errors";

const powerPath = new PowerPath({
  security: {
    clientID: process.env["POWERPATH_CLIENT_ID"] ?? "",
    clientSecret: process.env["POWERPATH_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  let result;
  try {
    result = await powerPath.lessonPlans.getStudentCourseProgress({
      courseId: "<id>",
      studentId: "<id>",
    });

    // Handle the result
    console.log(result);
  } catch (err) {
    switch (true) {
      // The server response does not match the expected SDK schema
      case (err instanceof SDKValidationError): {
        // Pretty-print will provide a human-readable multi-line error message
        console.error(err.pretty());
        // Raw value may also be inspected
        console.error(err.rawValue);
        return;
      }
      case (err instanceof BadRequestResponseError): {
        // Handle err.data$: BadRequestResponseErrorData
        console.error(err);
        return;
      }
      case (err instanceof UnauthorizedRequestResponseError1): {
        // Handle err.data$: UnauthorizedRequestResponseError1Data
        console.error(err);
        return;
      }
      case (err instanceof ForbiddenResponseError1): {
        // Handle err.data$: ForbiddenResponseError1Data
        console.error(err);
        return;
      }
      case (err instanceof NotFoundResponseError1): {
        // Handle err.data$: NotFoundResponseError1Data
        console.error(err);
        return;
      }
      case (err instanceof UnprocessableEntityResponseError1): {
        // Handle err.data$: UnprocessableEntityResponseError1Data
        console.error(err);
        return;
      }
      case (err instanceof TooManyRequestsResponseError1): {
        // Handle err.data$: TooManyRequestsResponseError1Data
        console.error(err);
        return;
      }
      case (err instanceof InternalServerErrorResponse1): {
        // Handle err.data$: InternalServerErrorResponse1Data
        console.error(err);
        return;
      }
      default: {
        // Other errors such as network errors, see HTTPClientErrors for more details
        throw err;
      }
    }
  }
}

run();

```

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted multi-line string since validation errors can list many issues and the plain error string may be difficult read when debugging.

In some rare cases, the SDK can fail to get a response from the server or even make the request due to unexpected circumstances such as network conditions. These types of errors are captured in the `models/errors/httpclienterrors.ts` module:

| HTTP Client Error                                    | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- |
| RequestAbortedError                                  | HTTP request was aborted by the client               |
| RequestTimeoutError                                  | HTTP request timed out due to an AbortSignal signal  |
| ConnectionError                                      | HTTP client was unable to make a request to a server |
| InvalidRequestError                                  | Any input used to create a request is invalid        |
| UnexpectedClientError                                | Unrecognised or unexpected error                     |
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Override Server URL Per-Client

The default server can be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { PowerPath } from "@superbuilders/powerpath";

const powerPath = new PowerPath({
  serverURL: "https://staging.alpha-1edtech.com/",
  security: {
    clientID: process.env["POWERPATH_CLIENT_ID"] ?? "",
    clientSecret: process.env["POWERPATH_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await powerPath.lessonPlans.getStudentCourseProgress({
    courseId: "<id>",
    studentId: "<id>",
  });

  // Handle the result
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
