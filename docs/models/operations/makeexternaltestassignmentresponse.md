# MakeExternalTestAssignmentResponse

Success

## Example Usage

```typescript
import { MakeExternalTestAssignmentResponse } from "@superbuilders/powerpath/models/operations";

let value: MakeExternalTestAssignmentResponse = {
  toolProvider: "edulastic",
  lessonType: "placement",
  attempt: 6597.61,
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `toolProvider`                                                                                                       | [operations.ToolProvider](../../models/operations/toolprovider.md)                                                   | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `lessonType`                                                                                                         | [operations.MakeExternalTestAssignmentLessonType](../../models/operations/makeexternaltestassignmentlessontype.md)   | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `attempt`                                                                                                            | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | The attempt number                                                                                                   |
| `credentials`                                                                                                        | [operations.MakeExternalTestAssignmentCredentials](../../models/operations/makeexternaltestassignmentcredentials.md) | :heavy_minus_sign:                                                                                                   | The credentials for accessing the assigned test on Edulastic                                                         |
| `assignmentId`                                                                                                       | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | The id of the assignment on Edulastic for results retrieval                                                          |
| `classId`                                                                                                            | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | The id of the class on Edulastic for results retrieval                                                               |
| `testUrl`                                                                                                            | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | The URL of the test on Edulastic                                                                                     |
| `testId`                                                                                                             | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | The id of the test on Edulastic                                                                                      |