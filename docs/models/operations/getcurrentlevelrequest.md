# GetCurrentLevelRequest

## Example Usage

```typescript
import { GetCurrentLevelRequest } from "@superbuilders/powerpath/models/operations";

let value: GetCurrentLevelRequest = {
  student: "<value>",
  subject: "<value>",
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `student`                    | *string*                     | :heavy_check_mark:           | The sourcedId of the student |
| `subject`                    | *string*                     | :heavy_check_mark:           | The subject name             |