# PowerPath100ProgressResult

Represents the progress of the student in the PowerPath lesson

## Example Usage

```typescript
import { PowerPath100ProgressResult } from "@superbuilders/powerpath/models/components";

let value: PowerPath100ProgressResult = {
  remainingQuestionsPerDifficulty: {
    easy: 2427.62,
    medium: 3304.78,
    hard: 8925.41,
  },
  score: 7076.05,
  seenQuestions: [
    {
      id: "<id>",
      index: 1439.73,
      title: "<value>",
      url: "https://sudden-euphonium.com/",
      response: "<value>",
    },
  ],
  xp: 1044.67,
  multiplier: 2188.65,
  accuracy: 5048.02,
  correctQuestions: 5422.15,
  totalQuestions: 7401.15,
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `lessonType`                                                                                             | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `remainingQuestionsPerDifficulty`                                                                        | [components.RemainingQuestionsPerDifficulty](../../models/components/remainingquestionsperdifficulty.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `score`                                                                                                  | *number*                                                                                                 | :heavy_check_mark:                                                                                       | The current score for this attempt                                                                       |
| `seenQuestions`                                                                                          | [components.SeenQuestion](../../models/components/seenquestion.md)[]                                     | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `xp`                                                                                                     | *number*                                                                                                 | :heavy_check_mark:                                                                                       | The XP the student has earned in the lesson                                                              |
| `multiplier`                                                                                             | *number*                                                                                                 | :heavy_check_mark:                                                                                       | The multiplier for the student's XP                                                                      |
| `accuracy`                                                                                               | *number*                                                                                                 | :heavy_check_mark:                                                                                       | The accuracy of the student's attempted questions                                                        |
| `correctQuestions`                                                                                       | *number*                                                                                                 | :heavy_check_mark:                                                                                       | The number of correct questions the student has answered in the lesson                                   |
| `totalQuestions`                                                                                         | *number*                                                                                                 | :heavy_check_mark:                                                                                       | The total number of questions in the lesson                                                              |