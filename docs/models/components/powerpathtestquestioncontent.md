# PowerPathTestQuestionContent

The QTI content of the question

## Example Usage

```typescript
import { PowerPathTestQuestionContent } from "@superbuilders/powerpath/models/components";

let value: PowerPathTestQuestionContent = {
  rawXml: "<value>",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `type`                             | *string*                           | :heavy_minus_sign:                 | The type of the question           |
| `rawXml`                           | *string*                           | :heavy_check_mark:                 | The raw XML question in QTI format |