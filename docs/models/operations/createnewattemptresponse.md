# CreateNewAttemptResponse

Success

## Example Usage

```typescript
import { CreateNewAttemptResponse } from "@superbuilders/powerpath/models/operations";

let value: CreateNewAttemptResponse = {
  attempt: 231.88,
  score: 1011.05,
  scoreStatus: "partially graded",
  startedAt: new Date("2023-05-12T18:37:59.771Z"),
  completedAt: new Date("2024-10-26T04:51:22.006Z"),
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `attempt`                                                                                        | *number*                                                                                         | :heavy_check_mark:                                                                               | The attempt number                                                                               |
| `score`                                                                                          | *number*                                                                                         | :heavy_check_mark:                                                                               | The current score for this attempt                                                               |
| `scoreStatus`                                                                                    | [operations.CreateNewAttemptScoreStatus](../../models/operations/createnewattemptscorestatus.md) | :heavy_check_mark:                                                                               | The status of this attempt                                                                       |
| `startedAt`                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)    | :heavy_check_mark:                                                                               | When this attempt was started                                                                    |
| `completedAt`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)    | :heavy_check_mark:                                                                               | When this attempt was completed                                                                  |