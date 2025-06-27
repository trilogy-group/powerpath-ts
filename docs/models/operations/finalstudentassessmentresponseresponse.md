# FinalStudentAssessmentResponseResponse

Success

## Example Usage

```typescript
import { FinalStudentAssessmentResponseResponse } from "@superbuilders/powerpath/models/operations";

let value: FinalStudentAssessmentResponseResponse = {
  finalized: true,
  questions: [],
  score: 2322.81,
  accuracy: 8044.78,
  correctQuestions: 9696.24,
  totalQuestions: 3900.26,
  xp: 7693.49,
  multiplier: 8987.09,
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `lessonType`                                                                           | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `finalized`                                                                            | *boolean*                                                                              | :heavy_check_mark:                                                                     | Whether the lesson has been finalized in the current attempt                           |
| `questions`                                                                            | [components.PowerPathTestQuestion](../../models/components/powerpathtestquestion.md)[] | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `score`                                                                                | *number*                                                                               | :heavy_check_mark:                                                                     | The final score for the student                                                        |
| `accuracy`                                                                             | *number*                                                                               | :heavy_check_mark:                                                                     | The accuracy of the student's attempted questions                                      |
| `correctQuestions`                                                                     | *number*                                                                               | :heavy_check_mark:                                                                     | The number of correct questions the student has answered in the lesson                 |
| `totalQuestions`                                                                       | *number*                                                                               | :heavy_check_mark:                                                                     | The total number of questions in the lesson                                            |
| `xp`                                                                                   | *number*                                                                               | :heavy_check_mark:                                                                     | The XP the student has earned in the lesson                                            |
| `multiplier`                                                                           | *number*                                                                               | :heavy_check_mark:                                                                     | The multiplier for the student's XP                                                    |