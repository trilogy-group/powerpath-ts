# CreateLessonPlanResponse


## Supported Types

### `operations.CreateLessonPlanResponseBody1`

```typescript
const value: operations.CreateLessonPlanResponseBody1 = {
  lessonPlan: {
    lessonPlan: {
      course: {
        status: "tobedeleted",
        title: "<value>",
        org: {
          sourcedId: "<id>",
        },
      },
      subComponents: [
        {
          id: "<id>",
          sourcedId: "<id>",
          status: "tobedeleted",
          title: "<value>",
        },
      ],
    },
  },
};
```

### `operations.CreateLessonPlanResponseBody2`

```typescript
const value: operations.CreateLessonPlanResponseBody2 = {
  lessonPlan: {
    lessonPlan: {
      course: {
        status: "active",
        title: "<value>",
        org: {
          sourcedId: "<id>",
        },
      },
      subComponents: [
        {
          id: "<id>",
          sourcedId: "<id>",
          status: "tobedeleted",
          title: "<value>",
        },
      ],
    },
  },
};
```

