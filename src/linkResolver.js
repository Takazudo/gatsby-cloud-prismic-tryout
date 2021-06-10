export const linkResolver = (doc) => {
  switch (doc.type) {
    // URL for a Page document
    case "entry":
      return `/entry/${doc.uid}/`;
    // Fallback for all other documents
    default:
      return "/";
  }
};
