//import sanityClint from '@sanity/client';
import { createClient } from '@sanity/client';

import imageUrlBuilder from '@sanity/image-url';

//const client = sanityClint({
    const client = createClient({
    projectId: "5u8koaz3",
    dataset:"production",
    useCdn:true,
    apiVersion :"2021-10-21",
});
const builder = imageUrlBuilder(client);
export const urlFor=(source)=> builder.image(source);

export default client;