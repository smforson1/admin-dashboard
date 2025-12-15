# Firebase Studio

This is a NextJS starter in Firebase Studio.

To get started, take a look at src/app/page.tsx.

## Backend Integration Guide

This frontend application has been structured to make backend integration as smooth as possible. Here are the key points for a backend developer:

### 1. API Abstraction Layer

All data fetching on the frontend is routed through a simulated API endpoint located at:
`src/app/api/mock/route.ts`

Currently, this file returns static mock data. To connect your live backend, you should:
1.  Update the `GET` function in this file.
2.  Replace the mock data logic with `fetch` calls to your actual backend API endpoints.

The UI components will automatically display the data returned from this route, along with handling loading and error states.

### 2. Data Models (Types)

The expected data structures for entities like `Student`, `Teacher`, `Class`, and `Payment` are defined in:
`src/lib/types.ts`

Please ensure that your API endpoints return data that conforms to these TypeScript types. This will prevent any data-related errors on the frontend.

### 3. Environment Variables

The base URL for your backend API should be configured in the environment variables. A template is provided in `.env.example`.

Create a `.env.local` file and add the following, pointing to your running backend server:
```
NEXT_PUBLIC_API_BASE_URL=http://localhost:8080/api
```
The frontend will use this base URL to make its requests.

By following these steps, the frontend will seamlessly integrate with your backend services.
