
export function LikeMedia() {
  return ({
    type: 'USER_LIKE_ACTION',
    likes: 1,
  });
}

export function RepostMedia() {
  return ({
    type: 'USER_REPOST_ACTION',
    reposts: 1,
  });
}
