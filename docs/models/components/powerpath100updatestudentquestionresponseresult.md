# PowerPath100UpdateStudentQuestionResponseResult

Represents the result of updating the student's response to the question in the PowerPath 100 lesson

## Example Usage

```typescript
import { PowerPath100UpdateStudentQuestionResponseResult } from "@superbuilders/powerpath/models/components";

let value: PowerPath100UpdateStudentQuestionResponseResult = {
  powerpathScore: 622.28,
  responseResult: {
    score: 6422.56,
  },
  accuracy: 7066.27,
  correctQuestions: 624.72,
  totalQuestions: 60.72,
  xp: 8010.23,
  multiplier: 574.38,
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