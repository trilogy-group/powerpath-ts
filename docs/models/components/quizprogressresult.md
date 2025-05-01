# QuizProgressResult

Represents the progress of the student in the PowerPath Quiz lesson

## Example Usage

```typescript
import { QuizProgressResult } from "@superbuilders/powerpath/models/components";

let value: QuizProgressResult = {
  finalized: false,
  questions: [
    {
      id: "<id>",
      index: 352.18,
      title: "<value>",
      url: "https://artistic-sarong.biz",
    },
  ],
  xp: 3203.71,
  multiplier: 5237.02,
  accuracy: 6432.13,
  correctQuestions: 4186.68,
  totalQuestions: 105.83,
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