export default defineNuxtPlugin(() => {
  const sanitizeImagePath = (imagePath) => {
    if (!imagePath) return '';
    return imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  };

  return {
    provide: {
      sanitizeImagePath
    }
  };
});
