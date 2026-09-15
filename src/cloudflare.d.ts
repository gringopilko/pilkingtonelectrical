declare module "cloudflare:workers" {
  export const env: {
    GOOGLE_PLACE_ID: string;
    GOOGLE_PLACES_API_KEY: string;
    REVIEWS_CACHE: {
      get(key: string, type: "json"): Promise<unknown>;
      put(key: string, value: string, options: { expirationTtl: number }): Promise<void>;
    };
  };
}
