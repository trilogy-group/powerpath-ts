# GetAssessmentProgressRequest

## Example Usage

```typescript
import { GetAssessmentProgressRequest } from "@superbuilders/powerpath/models/operations";

let value: GetAssessmentProgressRequest = {
  student: "<value>",
  lesson: "<value>",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `student`                                                      | *string*                                                       | :heavy_check_mark:                                             | The sourcedId of the student who is answering the question     |
| `lesson`                                                       | *string*                                                       | :heavy_check_mark:                                             | The sourcedId of the lesson (ComponentResource)                |
| `attempt`                                                      | *string*                                                       | :heavy_minus_sign:                                             | The attempt number of the lesson that the student is answering |