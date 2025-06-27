# SeenQuestion

A PowerPath Test Question

## Example Usage

```typescript
import { SeenQuestion } from "@superbuilders/powerpath/models/components";

let value: SeenQuestion = {
  id: "<id>",
  index: 6862.26,
  title: "<value>",
  url: "https://winding-brook.biz/",
  response: "<value>",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                               | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The ID that represents the question in the test                                                                    |
| `index`                                                                                                            | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | The index of the question in the test                                                                              |
| `title`                                                                                                            | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The title of the question                                                                                          |
| `url`                                                                                                              | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The URL of the QTI question                                                                                        |
| `difficulty`                                                                                                       | [components.PowerPath100ProgressResultDifficulty](../../models/components/powerpath100progressresultdifficulty.md) | :heavy_minus_sign:                                                                                                 | The difficulty of the question                                                                                     |
| `content`                                                                                                          | [components.PowerPath100ProgressResultContent](../../models/components/powerpath100progressresultcontent.md)       | :heavy_minus_sign:                                                                                                 | The QTI content of the question                                                                                    |
| `response`                                                                                                         | *components.PowerPath100ProgressResultResponse*                                                                    | :heavy_check_mark:                                                                                                 | The student's response to the question                                                                             |
| `correct`                                                                                                          | *boolean*                                                                                                          | :heavy_minus_sign:                                                                                                 | Whether the student's response is correct                                                                          |
| `result`                                                                                                           | [components.PowerPath100ProgressResultResult](../../models/components/powerpath100progressresultresult.md)         | :heavy_minus_sign:                                                                                                 | The result of the question                                                                                         |