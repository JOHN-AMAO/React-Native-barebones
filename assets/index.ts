// assets/index.ts
export const IMAGES = {
    onboarding: require('./onboarding.PNG'),
    logo: require('./logo.PNG'),
  } as const;
  
  // Optional: Create type for autocomplete
  export type ImageKeys = keyof typeof IMAGES;