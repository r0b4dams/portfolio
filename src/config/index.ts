export const CONFIG = {
  EMAIL: process.env.EMAIL ?? '',
  LINKEDIN_URL: process.env.LINKEDIN ?? '',
  GITHUB_URL: process.env.GITHUB ?? '',
  RESUME_URL: process.env.RESUME ?? '',
  PILLAR_URL: process.env.PILLAR ?? '',
  FEATURE: {
    ENABLE_DEPLOYED_LINK: process.env.ENABLE_DEPLOYED_LINK === 'true',
  },
};
