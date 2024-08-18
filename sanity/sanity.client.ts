import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "wect359l",  // Your actual projectId
  dataset: "production",
  apiVersion: "2024-08-16", // Use the current date
  useCdn: false,
};

const client = createClient(config);

export default client;
