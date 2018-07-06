export function LikeMedia(idNift) {
  return ({
    type: 'USER_LIKE_ACTION',
    idNift,
  });
}

export function RepostMedia(idNift) {
  return ({
    type: 'USER_REPOST_ACTION',
    idNift,
  });
}
