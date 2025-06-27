# MakeExternalTestAssignmentRequest

## Example Usage

```typescript
import { MakeExternalTestAssignmentRequest } from "@superbuilders/powerpath/models/operations";

let value: MakeExternalTestAssignmentRequest = {
  student: "<value>",
  lesson: "<value>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `student`                                                                  | *string*                                                                   | :heavy_check_mark:                                                         | The sourcedId of the student                                               |
| `lesson`                                                                   | *string*                                                                   | :heavy_check_mark:                                                         | The sourcedId of the lesson (ComponentResource)                            |
| `applicationName`                                                          | *string*                                                                   | :heavy_minus_sign:                                                         | The name of the application to use for authenticating on the external tool |