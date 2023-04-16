export const CONFIG = {
  EMAIL: process.env.EMAIL,
  LINKEDIN: process.env.LINKEDIN,
  GITHUB: process.env.GITHUB,

  FEATURE: {
    ENABLE_DEPLOYED_LINK: process.env.ENABLE_DEPLOYED_LINK === "true",
  },
};
