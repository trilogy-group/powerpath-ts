# ResetAttemptResponse

Success

## Example Usage

```typescript
import { ResetAttemptResponse } from "@superbuilders/powerpath/models/operations";

let value: ResetAttemptResponse = {
  success: false,
  score: 4090.13,
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `success`                        | *boolean*                        | :heavy_check_mark:               | Whether the reset was successful |
| `score`                          | *number*                         | :heavy_check_mark:               | The reset score (always 0)       |