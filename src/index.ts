export interface PostVote {
  owner_username: string;
  post_id: number;
  is_upvote: boolean;
  created_at: Date | null;
}

export interface CommentVote {
  owner_username: string;
  comment_id: number;
  is_upvote: boolean;
  created_at: Date | null;
}

export interface User {
  username: string;
  email: string;
  password?: string;
  karma: number | null;
  created_at: Date | null;
  pfp_url: string | null;
  privacy_settings: "public" | "friends" | "private";
  comment_votes: CommentVote[];
  comments: Comment[];
  following: Array<{
    follower: string;
    followed: string;
    created_at: Date | null;
  }>;
  followers: Array<{
    follower: string;
    followed: string;
    created_at: Date | null;
  }>;
  post_votes: PostVote[];
  posts: Post[];
  subreddits: Subreddit[];
  _count: {
    comment_votes: number;
    comments: number;
    following: number;
    followers: number;
    post_votes: number;
    posts: number;
    subreddits: number;
  };
}

export interface Subreddit {
  id: number;
  name: string;
  description: string | null;
  icon_url: string | null;
  created_at: Date | null;
  owner_username: string;
  _count: {
    posts: number;
    subscribers: number;
  };
  posts: Post[];
  followers: User[];
  owner: User;
  moderators: User[];
}

export interface Post {
  id: number;
  title: string;
  content: string | null;
  media_urls: string[];
  created_at: Date | null;
  owner_username: string;
  subreddit_name: string;
  subreddit?: Subreddit;
}

export interface Comment {
  id: number;
  content: string | null;
  media_urls: string[];
  created_at: Date | null;
  owner_username: string;
  post_id: number;
  parent_id: number | null;
}

export const FileUploadFieldNamesEnum = Object.freeze({
  SINGLE: "single",
  MULTIPLE: "multiple",
});
