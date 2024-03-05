interface ImportMetaEnv {
    readonly VITE_API_KEY: string;
    // Define other variables here
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }