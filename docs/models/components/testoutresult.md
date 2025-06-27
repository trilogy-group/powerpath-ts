# TestOutResult

Holds the id of the TestOut lesson (ComponentResource), or its results in case it was previously attempted

## Example Usage

```typescript
import { TestOutResult } from "@superbuilders/powerpath/models/components";

let value: TestOutResult = {
  lessonId: "<id>",
  finalized: false,
  toolProvider: "<value>",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `lessonType`                                                     | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `lessonId`                                                       | *string*                                                         | :heavy_check_mark:                                               | The id of the testOut lesson                                     |
| `finalized`                                                      | *boolean*                                                        | :heavy_check_mark:                                               | Whether the Test Out has been finalized in the current attempt   |
| `toolProvider`                                                   | *string*                                                         | :heavy_check_mark:                                               | The tool provider for the testOut lesson                         |
| `attempt`                                                        | *number*                                                         | :heavy_minus_sign:                                               | The attempt number                                               |
| `credentials`                                                    | [components.Credentials](../../models/components/credentials.md) | :heavy_minus_sign:                                               | The credentials for accessing the assigned test on Edulastic     |
| `assignmentId`                                                   | *string*                                                         | :heavy_minus_sign:                                               | The id of the assignment on Edulastic for results retrieval      |
| `classId`                                                        | *string*                                                         | :heavy_minus_sign:                                               | The id of the class on Edulastic for results retrieval           |
| `testUrl`                                                        | *string*                                                         | :heavy_minus_sign:                                               | The URL of the test on Edulastic                                 |
| `testId`                                                         | *string*                                                         | :heavy_minus_sign:                                               | The id of the test on Edulastic                                  |