# TestOutUpdateStudentQuestionResponseResult

Represents the result of updating the student's response to the question in the PowerPath Test Out lesson

## Example Usage

```typescript
import { TestOutUpdateStudentQuestionResponseResult } from "@superbuilders/powerpath/models/components";

let value: TestOutUpdateStudentQuestionResponseResult = {
  lessonType: "test-out",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `questionResult`                                              | *any*                                                         | :heavy_minus_sign:                                            | The assessment result object for the question (for debugging) |
| `lessonType`                                                  | *"test-out"*                                                  | :heavy_check_mark:                                            | N/A                                                           |