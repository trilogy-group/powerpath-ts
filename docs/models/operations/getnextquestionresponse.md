# GetNextQuestionResponse

Success

## Example Usage

```typescript
import { GetNextQuestionResponse } from "@superbuilders/powerpath/models/operations";

let value: GetNextQuestionResponse = {
  score: 2752.47,
  question: {
    id: "<id>",
    index: 3994.01,
    title: "<value>",
    url: "https://rosy-festival.com/",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `score`                                                                              | *number*                                                                             | :heavy_check_mark:                                                                   | The current PowerPath score of the student in this lesson                            |
| `question`                                                                           | [components.PowerPathTestQuestion](../../models/components/powerpathtestquestion.md) | :heavy_check_mark:                                                                   | A PowerPath Test Question                                                            |