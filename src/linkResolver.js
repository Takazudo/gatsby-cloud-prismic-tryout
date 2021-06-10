export const linkResolver = (doc) => {
  switch (doc.type) {
    // URL for a Page document
    case "page":
      return `/${doc.uid}`;

    // URL for a Blog Post document
    case "blog_post":
      return `/blog/${doc.uid}`;

    // Fallback for all other documents
    default:
      return "/";
  }
};
