# ResponseResult

The result of processing the student's response

## Example Usage

```typescript
import { ResponseResult } from "@superbuilders/powerpath/models/components";

let value: ResponseResult = {
  score: 8920.15,
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `score`                                       | *number*                                      | :heavy_check_mark:                            | The score for this specific response (0 or 1) |
| `feedback`                                    | *any*                                         | :heavy_minus_sign:                            | Optional feedback for the student's response  |