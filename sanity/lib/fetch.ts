import { createClient } from "next-sanity";

const client = createClient({
    projectId: 'e8vmcm60',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2025-01-13',
    token: 'skonOiMd1PR4JaEiqjxIR1xU47HQno76lHQtN71VpenUD30WMFxsmqYS1DuGw2AKcGMPxQHeJaWc5VrK9jysdtRc60NptukiHMrdjcSo9rZBkDjhQ0ihwIFdncfd6nCfy151bnmnRVbK2AR0hjHpMAEvdEdy3jUVhDVmFqDFvfwDJae872IW',
  });

  export async function sanityFetch ({query,params = {}}:{query:string,params?: any}){
    return await client.fetch(query,params)
  }