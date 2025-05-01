# CreateNewAttemptResponse

Success

## Example Usage

```typescript
import { CreateNewAttemptResponse } from "@superbuilders/powerpath/models/operations";

let value: CreateNewAttemptResponse = {
  attempt: 4579.22,
  score: 231.88,
  scoreStatus: "exempt",
  startedAt: new Date("2024-11-07T09:01:04.382Z"),
  completedAt: new Date("2024-02-05T07:07:27.162Z"),
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