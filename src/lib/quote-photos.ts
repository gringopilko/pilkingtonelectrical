/** Shared rules for photos attached to quote requests. */
export const PHOTO_TYPES: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
  "image/heic": "heic",
  "image/heif": "heif",
};
export const MAX_PHOTO_BYTES = 10 * 1024 * 1024; // 10 MB
export const MAX_PHOTOS = 5;
export const PHOTO_KEEP_DAYS = 90;
export const PHOTO_ID_PATTERN = /^\d{4}-\d{2}-\d{2}-[0-9a-f-]{36}\.(jpg|png|webp|heic|heif)$/;
