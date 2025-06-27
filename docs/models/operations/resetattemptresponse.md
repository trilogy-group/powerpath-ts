# ResetAttemptResponse

Success

## Example Usage

```typescript
import { ResetAttemptResponse } from "@superbuilders/powerpath/models/operations";

let value: ResetAttemptResponse = {
  success: true,
  score: 4820.8,
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `success`                        | *boolean*                        | :heavy_check_mark:               | Whether the reset was successful |
| `score`                          | *number*                         | :heavy_check_mark:               | The reset score (always 0)       |