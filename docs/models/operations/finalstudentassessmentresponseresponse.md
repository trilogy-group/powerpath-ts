# FinalStudentAssessmentResponseResponse

Success

## Example Usage

```typescript
import { FinalStudentAssessmentResponseResponse } from "@superbuilders/powerpath/models/operations";

let value: FinalStudentAssessmentResponseResponse = {
  lessonType: "test-out",
  finalized: true,
  attempt: 2322.81,
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `lessonType`                                                                                                               | [operations.FinalStudentAssessmentResponseLessonType](../../models/operations/finalstudentassessmentresponselessontype.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `finalized`                                                                                                                | *boolean*                                                                                                                  | :heavy_check_mark:                                                                                                         | Whether the lesson has been finalized in the current attempt                                                               |
| `attempt`                                                                                                                  | *number*                                                                                                                   | :heavy_check_mark:                                                                                                         | The attempt number                                                                                                         |