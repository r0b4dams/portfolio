export const CONFIG = {
  EMAIL: process.env.EMAIL,
  LINKEDIN: process.env.LINKEDIN,
  GITHUB: process.env.GITHUB,
  RESUME: process.env.RESUME,
  PILLAR: process.env.PILLAR,
  FEATURE: {
    ENABLE_DEPLOYED_LINK: process.env.ENABLE_DEPLOYED_LINK === 'true',
  },
};
