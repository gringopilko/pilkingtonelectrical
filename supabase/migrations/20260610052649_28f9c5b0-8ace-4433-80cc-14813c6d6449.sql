
DROP POLICY IF EXISTS "Anyone can upload quote photos" ON storage.objects;

CREATE POLICY "Anonymous quote photo uploads, scoped and limited"
ON storage.objects
FOR INSERT
TO anon, authenticated
WITH CHECK (
  bucket_id = 'quote-photos'
  AND (storage.foldername(name))[1] ~ '^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$'
  AND lower((storage.extension(name))) IN ('jpg','jpeg','png','webp','heic','heif','gif')
  AND COALESCE((metadata->>'size')::bigint, 0) <= 10485760
  AND (metadata->>'mimetype') LIKE 'image/%'
);
