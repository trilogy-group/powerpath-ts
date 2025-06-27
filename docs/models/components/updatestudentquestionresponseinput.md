# UpdateStudentQuestionResponseInput

The input for the updateStudentQuestionResponse endpoint

## Example Usage

```typescript
import { UpdateStudentQuestionResponseInput } from "@superbuilders/powerpath/models/components";

let value: UpdateStudentQuestionResponseInput = {
  student: "<value>",
  question: "<value>",
  response: "<value>",
  lesson: "<value>",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `student`                                                                                                    | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The sourcedId of the student who is answering the question                                                   |
| `question`                                                                                                   | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The sourcedId of the ComponentResource that represents the question within the course                        |
| `response`                                                                                                   | *components.UpdateStudentQuestionResponseInputResponse*                                                      | :heavy_check_mark:                                                                                           | The student's response to the question. Might be the reference to the choice specified in the QTI structure. |
| `lesson`                                                                                                     | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The sourcedId of the lesson (ComponentResource)                                                              |