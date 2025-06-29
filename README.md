# Reddit Types

TypeScript type definitions for Reddit API.

## Installation

```bash
npm install reddit-types
```

## Usage

```typescript
import { RedditPost, RedditComment } from "reddit-types";

// Example usage
const post: RedditPost = {
  id: "123",
  title: "Example Post",
  author: "user123",
  subreddit: "example",
  score: 100,
  created_utc: Date.now(),
  permalink: "/r/example/comments/123/example_post/",
  url: "https://example.com",
};

const comment: RedditComment = {
  id: "456",
  author: "user456",
  body: "This is a comment",
  score: 10,
  created_utc: Date.now(),
  permalink: "/r/example/comments/123/example_post/456/",
};
```

## Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Build the package:
   ```bash
   npm run build
   ```
4. Publish the package:

```bash
 npm publish --access public
```

## License

ISC
