# PowerPath100UpdateStudentQuestionResponseResult

Represents the result of updating the student's response to the question in the PowerPath100 lesson (ComponentResource)

## Example Usage

```typescript
import { PowerPath100UpdateStudentQuestionResponseResult } from "@superbuilders/powerpath/models/components";

let value: PowerPath100UpdateStudentQuestionResponseResult = {
  powerpathScore: 7701.48,
  responseResult: {
    score: 3665.39,
  },
  accuracy: 7975.48,
  correctQuestions: 1567.73,
  totalQuestions: 489.68,
  xp: 1745.52,
  multiplier: null,
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `lessonType`                                                           | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `powerpathScore`                                                       | *number*                                                               | :heavy_check_mark:                                                     | The updated PowerPath score of the student in this lesson              |
| `responseResult`                                                       | [components.ResponseResult](../../models/components/responseresult.md) | :heavy_check_mark:                                                     | The result of processing the student's response                        |
| `questionResult`                                                       | *any*                                                                  | :heavy_minus_sign:                                                     | The assessment result object for the question (for debugging)          |
| `testResult`                                                           | *any*                                                                  | :heavy_minus_sign:                                                     | The assessment result object for the test (for debugging)              |
| `accuracy`                                                             | *number*                                                               | :heavy_check_mark:                                                     | The accuracy of the student's attempted questions                      |
| `correctQuestions`                                                     | *number*                                                               | :heavy_check_mark:                                                     | The number of correct questions the student has answered in the lesson |
| `totalQuestions`                                                       | *number*                                                               | :heavy_check_mark:                                                     | The total number of questions in the lesson                            |
| `xp`                                                                   | *number*                                                               | :heavy_check_mark:                                                     | The XP the student has earned in the lesson                            |
| `multiplier`                                                           | *number*                                                               | :heavy_check_mark:                                                     | The multiplier for the student's XP                                    |