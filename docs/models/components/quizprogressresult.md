# QuizProgressResult

Represents the progress of the student in the PowerPath Quiz lesson

## Example Usage

```typescript
import { QuizProgressResult } from "@superbuilders/powerpath/models/components";

let value: QuizProgressResult = {
  finalized: false,
  questions: [],
  xp: 5228.28,
  multiplier: 4835.15,
  accuracy: 8649.17,
  correctQuestions: 2905.25,
  totalQuestions: 9319.55,
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `lessonType`                                                                           | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `finalized`                                                                            | *boolean*                                                                              | :heavy_check_mark:                                                                     | Whether the lesson has been finalized in the current attempt                           |
| `score`                                                                                | *number*                                                                               | :heavy_minus_sign:                                                                     | The current score for this attempt                                                     |
| `questions`                                                                            | [components.PowerPathTestQuestion](../../models/components/powerpathtestquestion.md)[] | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `xp`                                                                                   | *number*                                                                               | :heavy_check_mark:                                                                     | The XP the student has earned in the lesson                                            |
| `multiplier`                                                                           | *number*                                                                               | :heavy_check_mark:                                                                     | The multiplier for the student's XP                                                    |
| `accuracy`                                                                             | *number*                                                                               | :heavy_check_mark:                                                                     | The accuracy of the student's attempted questions                                      |
| `correctQuestions`                                                                     | *number*                                                                               | :heavy_check_mark:                                                                     | The number of correct questions the student has answered in the lesson                 |
| `totalQuestions`                                                                       | *number*                                                                               | :heavy_check_mark:                                                                     | The total number of questions in the lesson                                            |