// Bindings used by the reviews integration; values are configured in Cloudflare.
declare module "cloudflare:workers" {
  export const env: {
    REVIEWS_CACHE: {
      get(key: string, type: "json"): Promise<unknown | null>;
      put(key: string, value: string, options?: { expirationTtl?: number }): Promise<void>;
    };
    GOOGLE_PLACE_ID: string;
    GOOGLE_PLACES_API_KEY: string;
  };
}
