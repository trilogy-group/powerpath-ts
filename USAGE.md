<!-- Start SDK Example Usage [usage] -->
```typescript
import { PowerPath } from "@superbuilders/powerpath";

const powerPath = new PowerPath({
  security: {
    clientID: process.env["POWERPATH_CLIENT_ID"] ?? "",
    clientSecret: process.env["POWERPATH_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await powerPath.lessonPlans.getStudentCourseProgress({
    courseId: "<id>",
    studentId: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->