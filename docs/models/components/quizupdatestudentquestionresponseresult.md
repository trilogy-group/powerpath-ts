# QuizUpdateStudentQuestionResponseResult

Represents the result of updating the student's response to the question in the PowerPath Quiz lesson

## Example Usage

```typescript
import { QuizUpdateStudentQuestionResponseResult } from "@superbuilders/powerpath/models/components";

let value: QuizUpdateStudentQuestionResponseResult = {
  lessonType: "quiz",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `questionResult`                                              | *any*                                                         | :heavy_minus_sign:                                            | The assessment result object for the question (for debugging) |
| `lessonType`                                                  | *"quiz"*                                                      | :heavy_check_mark:                                            | N/A                                                           |