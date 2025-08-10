/// <reference types="vite/client" />

interface ViteTypeOptions {
  // Disallow unknown ENV keys
  strictImportMetaEnv: unknown
}

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string
  readonly VITE_SHOW_EXAMPLE_ROUTES: boolean
  readonly VITE_SUPABASE_URL: string
  readonly VITE_SUPABASE_ANON_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
