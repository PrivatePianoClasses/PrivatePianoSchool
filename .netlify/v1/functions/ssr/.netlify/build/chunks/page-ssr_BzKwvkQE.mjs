import { createClient } from '@sanity/client';

const sanityClient = createClient(
            {"apiVersion":"2023-03-20","projectId":"ucp4urer","dataset":"production","useCdn":false}
          );

globalThis.sanityClient = sanityClient;

export { sanityClient as s };
