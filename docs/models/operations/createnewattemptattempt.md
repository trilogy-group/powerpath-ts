# CreateNewAttemptAttempt

## Example Usage

```typescript
import { CreateNewAttemptAttempt } from "@superbuilders/powerpath/models/operations";

let value: CreateNewAttemptAttempt = {
  attempt: 7757.1,
  score: 9222.66,
  scoreStatus: "exempt",
  startedAt: new Date("2025-05-23T23:56:16.532Z"),
  completedAt: new Date("2025-04-07T02:07:47.770Z"),
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