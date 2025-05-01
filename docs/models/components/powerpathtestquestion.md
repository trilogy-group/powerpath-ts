# PowerPathTestQuestion

A PowerPath Test Question

## Example Usage

```typescript
import { PowerPathTestQuestion } from "@superbuilders/powerpath/models/components";

let value: PowerPathTestQuestion = {
  id: "<id>",
  index: 9577.25,
  title: "<value>",
  url: "https://personal-spork.info/",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                     | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The ID that represents the question in the test                                                          |
| `index`                                                                                                  | *number*                                                                                                 | :heavy_check_mark:                                                                                       | The index of the question in the test                                                                    |
| `title`                                                                                                  | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The title of the question                                                                                |
| `url`                                                                                                    | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The URL of the QTI question                                                                              |
| `difficulty`                                                                                             | [components.PowerPathTestQuestionDifficulty](../../models/components/powerpathtestquestiondifficulty.md) | :heavy_minus_sign:                                                                                       | The difficulty of the question                                                                           |
| `content`                                                                                                | [components.PowerPathTestQuestionContent](../../models/components/powerpathtestquestioncontent.md)       | :heavy_minus_sign:                                                                                       | The QTI content of the question                                                                          |
| `response`                                                                                               | *components.PowerPathTestQuestionResponse*                                                               | :heavy_minus_sign:                                                                                       | The student's response to the question                                                                   |
| `correct`                                                                                                | *boolean*                                                                                                | :heavy_minus_sign:                                                                                       | Whether the student's response is correct                                                                |
| `result`                                                                                                 | [components.PowerPathTestQuestionResult](../../models/components/powerpathtestquestionresult.md)         | :heavy_minus_sign:                                                                                       | The result of the question                                                                               |