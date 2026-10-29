// Bindings used by the reviews integration; values are configured in Cloudflare.
declare module "cloudflare:workers" {
  export const env: {
    REVIEWS_CACHE: {
      get(key: string, type: "json"): Promise<unknown | null>;
      put(key: string, value: string, options?: { expirationTtl?: number }): Promise<void>;
    };
    QUOTE_PHOTOS: {
      put(key: string, value: ArrayBuffer, options?: { expirationTtl?: number; metadata?: Record<string, string> }): Promise<void>;
      getWithMetadata<M>(key: string, type: "arrayBuffer"): Promise<{ value: ArrayBuffer | null; metadata: M | null }>;
    };
    GOOGLE_PLACE_ID: string;
    GOOGLE_PLACES_API_KEY: string;
  };
}
