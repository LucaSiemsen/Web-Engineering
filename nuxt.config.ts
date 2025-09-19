// nuxt.config.ts
export default defineNuxtConfig({
  app: {
    baseURL: '/Web-Engineering/'   // <- exakt dein Repo-Name
  },
  nitro: {
    preset: 'github-pages'          // legt u.a. .nojekyll an
  },
  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL || '',
      supabaseAnonKey: process.env.SUPABASE_ANON_KEY || ''
    },
    supabaseServiceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY || ''
  }
})
