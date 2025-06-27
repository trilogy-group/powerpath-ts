# GetAttemptsRequest

## Example Usage

```typescript
import { GetAttemptsRequest } from "@superbuilders/powerpath/models/operations";

let value: GetAttemptsRequest = {
  student: "<value>",
  lesson: "<value>",
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `student`                                       | *string*                                        | :heavy_check_mark:                              | The sourcedId of the student                    |
| `lesson`                                        | *string*                                        | :heavy_check_mark:                              | The sourcedId of the lesson (ComponentResource) |