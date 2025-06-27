# PowerPath100ProgressResult

Represents the progress of the student in the PowerPath lesson

## Example Usage

```typescript
import { PowerPath100ProgressResult } from "@superbuilders/powerpath/models/components";

let value: PowerPath100ProgressResult = {
  remainingQuestionsPerDifficulty: {
    easy: 1206.47,
    medium: 2422.78,
    hard: 3490.99,
  },
  score: 4632.65,
  seenQuestions: [
    {
      id: "<id>",
      index: 1693.13,
      title: "<value>",
      url: "https://limp-orchid.net/",
      response: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
    },
  ],
  xp: 3299.85,
  multiplier: 4630,
  accuracy: 268.13,
  correctQuestions: 4568.47,
  totalQuestions: 9735.68,
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