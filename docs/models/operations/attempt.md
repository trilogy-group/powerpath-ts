# Attempt

## Example Usage

```typescript
import { Attempt } from "@superbuilders/powerpath/models/operations";

let value: Attempt = {
  attempt: 3667.05,
  score: 9580.01,
  scoreStatus: "partially graded",
  startedAt: new Date("2023-08-01T01:18:40.660Z"),
  completedAt: new Date("2023-06-04T22:35:01.962Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `attempt`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | The attempt number                                                                            |
| `score`                                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | The current score for this attempt                                                            |
| `scoreStatus`                                                                                 | [operations.GetAttemptsScoreStatus](../../models/operations/getattemptsscorestatus.md)        | :heavy_check_mark:                                                                            | The status of this attempt                                                                    |
| `startedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When this attempt was started                                                                 |
| `completedAt`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When this attempt was completed                                                               |