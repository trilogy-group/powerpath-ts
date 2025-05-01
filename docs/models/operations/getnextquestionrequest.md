# GetNextQuestionRequest

## Example Usage

```typescript
import { GetNextQuestionRequest } from "@superbuilders/powerpath/models/operations";

let value: GetNextQuestionRequest = {
  student: "<value>",
  lesson: "<value>",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `student`                                                                   | *string*                                                                    | :heavy_check_mark:                                                          | The sourcedId of the student who is answering the question                  |
| `lesson`                                                                    | *string*                                                                    | :heavy_check_mark:                                                          | The sourcedId of the ComponentResource that represents the PowerPath lesson |