# ResponseBody

## Example Usage

```typescript
import { ResponseBody } from "@superbuilders/powerpath/models/operations";

let value: ResponseBody = {
  lessonType: "placement",
  finalized: true,
  questions: [
    {
      id: "<id>",
      index: 4486.02,
      title: "<value>",
      url: "https://lumpy-pliers.biz/",
    },
  ],
  toolProvider: "<value>",
  attempt: 7741,
  xp: 1654.04,
  multiplier: 9755.1,
  accuracy: 748.16,
  correctQuestions: 2713.13,
  totalQuestions: 50.13,
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `lessonType`                                                                                             | [operations.GetAssessmentProgressLessonType](../../models/operations/getassessmentprogresslessontype.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `finalized`                                                                                              | *boolean*                                                                                                | :heavy_check_mark:                                                                                       | Whether the lesson has been finalized in the current attempt                                             |
| `score`                                                                                                  | *number*                                                                                                 | :heavy_minus_sign:                                                                                       | The current score for this attempt                                                                       |
| `questions`                                                                                              | [components.PowerPathTestQuestion](../../models/components/powerpathtestquestion.md)[]                   | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `toolProvider`                                                                                           | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The tool provider of the lesson if external                                                              |
| `attempt`                                                                                                | *number*                                                                                                 | :heavy_check_mark:                                                                                       | The attempt number                                                                                       |
| `xp`                                                                                                     | *number*                                                                                                 | :heavy_check_mark:                                                                                       | The XP the student has earned in the lesson                                                              |
| `multiplier`                                                                                             | *number*                                                                                                 | :heavy_check_mark:                                                                                       | The multiplier for the student's XP                                                                      |
| `accuracy`                                                                                               | *number*                                                                                                 | :heavy_check_mark:                                                                                       | The accuracy of the student's attempted questions                                                        |
| `correctQuestions`                                                                                       | *number*                                                                                                 | :heavy_check_mark:                                                                                       | The number of correct questions the student has answered in the lesson                                   |
| `totalQuestions`                                                                                         | *number*                                                                                                 | :heavy_check_mark:                                                                                       | The total number of questions in the lesson                                                              |