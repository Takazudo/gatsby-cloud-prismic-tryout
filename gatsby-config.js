require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: "My Gatsby Site",
  },
  plugins: [
    {
      resolve: "gatsby-source-prismic",
      options: {
        // The name of your prismic.io repository. This is required.
        // Example: 'gatsby-source-prismic-test-site' if your prismic.io address
        // is 'gatsby-source-prismic-test-site.prismic.io'.
        repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,

        // An API access token to your prismic.io repository. This is optional.
        // You can generate an access token in the "API & Security" section of
        // your repository settings. Setting a "Callback URL" is not necessary.
        // The token will be listed under "Permanent access tokens".
        accessToken: process.env.PRISMIC_API_KEY,

        // A Custom Types API token for your Prismic repository that allows your
        // custom type schemas to automatically be fetched. This is optional.
        // You can provide your custom type schemas to the plugin manually using
        // the `schemas` option.
        //
        // You can generate a permanent Custom Types API token in the
        // "API & Security" section of your repository settings in the Custom
        // Types API tab.
        //
        // This is a BETA feature that must be enabled on your Prismic repository.
        //
        // See: https://prismic.io/docs/technologies/custom-types-api
        //customTypesApiToken: "xxx",

        // Provide an object of Prismic custom type JSON schemas to load into
        // Gatsby. This is required.
        schemas: {
          entry: require("./src/prismic-schemas/entry.json"),
        },

        // If you provide a release ID, the plugin will fetch data from Prismic
        // for a specific release. A Prismic release is a way to gather a
        // collection of changes for a future version of your website. Note that
        // if you add changes to a release, you'll need to rebuild your website
        // to see them.
        // See: https://user-guides.prismic.io/en/collections/22653-releases-scheduling#the-basics-of-a-release
        //releaseID: 'example-eiyaingiefahyi7z',

        // Set a link resolver function used to process links in your content.
        // Fields with rich text formatting or links to internal content use this
        // function to generate the correct link URL.
        // The document node, field key (i.e. API ID), and field value are
        // provided to the function, as seen below. This allows you to use
        // different link resolver logic for each field if necessary.
        // See: https://prismic.io/docs/javascript/query-the-api/link-resolving
        //linkResolver: (doc) => `/${doc.id}`,
        linkResolver: (doc) => {
          // Return a URL for the document.
        },

        // https://github.com/angeloashmore/gatsby-source-prismic/blob/alpha/packages/gatsby-source-prismic/docs/migrating-from-v3-to-v4.md#optional-replace-fetchlinks-plugin-option-with-graphquery
        graphQuery: `
          {
            page {
              ...pageFields
              parent {
                ...parentFields
              }
            }
          }
        `,

        // Set an HTML serializer function used to process formatted content.
        // Fields with rich text formatting use this function to generate the
        // correct HTML.
        // The document node, field key (i.e. API ID), and field value are
        // provided to the function, as seen below. This allows you to use
        // different HTML serializer logic for each field if necessary.
        // See: https://prismic.io/docs/nodejs/beyond-the-api/html-serializer
        htmlSerializer: (type, element, content, children) => {
          // Your HTML Serializer
        },

        // Set a default language when fetching documents. The default value is
        // '*' which will fetch all languages.
        // See: https://prismic.io/docs/javascript/query-the-api/query-by-language
        lang: "*",

        // Provide a default set of Imgix image transformations applied to
        // Imgix-backed gatsby-image fields. These options will override the
        // defaults set by Prismic.
        //
        // See: https://docs.imgix.com/apis/url
        imageImgixParams: {
          auto: 'compress,format',
          fit: 'max',
          q: 50,
        },

        // Provide a default set of Imgix image transformations applied to
        // the placeholder images of Imgix-backed gatsby-image fields. These
        // parameters will be applied over those provided in the above
        // `imageImgixParams` option.
        //
        // See: https://docs.imgix.com/apis/url
        imagePlaceholderImgixParams: {
          w: 100,
          blur: 15,
          q: 50,
        },

        // The API endpoint used to fetch content from Prismic. You can omit
        // this option in most cases unless you require an API proxy or need to
        // mock network responses. By default, your repository's standard
        // endpoint will be used.
        apiEndpoint: process.env.PRISMIC_API_ENDPOINT,

      },
    },
    {
      resolve: "gatsby-plugin-prismic-previews",
      options: {
        // The name of your Prismic repository. This is required.
        // Example: 'your-repository-name' if your prismic.io address
        // is 'your-repository-name.prismic.io'.
        //
        // Learn about environment variables: https://gatsby.dev/env-vars
        repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,

        // An API access token to your Prismic repository. This is optional.
        // You can generate an access token in the "API & Security" section of
        // your repository settings. Setting a "Callback URL" is not necessary.
        // The token will be listed under "Permanent access tokens".
        //
        // If you choose to keep your access token private, do not provide this
        // plugin option. Editors will be prompted to enter an access token
        // during a preview session instead, if required.
        //
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.PRISMIC_API_KEY,

        // Determines the type of Prismic Toolbar that is added to your site.
        // This defaults to "new". See the "Prismic Toolbar" section of the
        // plugin documentation for more details.
        //
        // Note: The toolbar is required for previews to function and cannot be
        // disabled.
        toolbar: "new",
      },
    },
    "gatsby-plugin-image",
  ],
};