export const CONFIG = {
  EMAIL: process.env.NEXT_PUBLIC_EMAIL ?? '',
  LINKEDIN_URL: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? '',
  GITHUB_URL: process.env.NEXT_PUBLIC_GITHUB_URL ?? '',

  RESUME_URL: process.env.RESUME ?? '',
  PILLAR_URL: process.env.PILLAR ?? '',

  FEATURE: {
    ENABLE_DEPLOYED_LINK: process.env.ENABLE_DEPLOYED_LINK === 'true',
  },
};
