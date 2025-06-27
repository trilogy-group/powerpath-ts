# TestOutRequest

## Example Usage

```typescript
import { TestOutRequest } from "@superbuilders/powerpath/models/operations";

let value: TestOutRequest = {
  student: "<value>",
  course: "<value>",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `student`                                                | *string*                                                 | :heavy_check_mark:                                       | The sourcedId of the student to retrieve the testOut for |
| `course`                                                 | *string*                                                 | :heavy_check_mark:                                       | The sourcedId of the Course to retrieve the testOut from |