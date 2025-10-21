// Centralized asset paths for the application
// For public folder assets, we need to use import.meta.env.BASE_URL at runtime
export const getAssetPath = (filename) => {
  // In production, BASE_URL will be '/personal-portfolio/'
  // In dev, it will be '/'
  const base = import.meta.env.BASE_URL || '/';
  return `${base}${filename}`;
};

export const ASSETS = {
  resume: 'resume.pdf',
  profileImage: 'picofme.jpeg',
  icon: 'dc.svg',
};

export default ASSETS;
