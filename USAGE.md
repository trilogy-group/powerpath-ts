<!-- Start SDK Example Usage [usage] -->
```typescript
import { PowerPath } from "@superbuilders/powerpath";

const powerPath = new PowerPath({
  oAuth2: process.env["POWERPATH_O_AUTH2"] ?? "",
});

async function run() {
  const result = await powerPath.powerPathPlacement.getAllPlacementTests({
    student: "<value>",
    subject: "<value>",
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->