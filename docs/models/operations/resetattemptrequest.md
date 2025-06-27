# ResetAttemptRequest

## Example Usage

```typescript
import { ResetAttemptRequest } from "@superbuilders/powerpath/models/operations";

let value: ResetAttemptRequest = {
  student: "<value>",
  lesson: "<value>",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `student`                                                        | *string*                                                         | :heavy_check_mark:                                               | The sourcedId of the student for who the attempt should be reset |
| `lesson`                                                         | *string*                                                         | :heavy_check_mark:                                               | The sourcedId of the lesson (ComponentResource)                  |