module.exports = {
  someSidebar: {
    Intoduction: ["introduction/what-is", "introduction/how-it-works"],
    Designing: ["designing/design-kits"],
    Developing: [
      "developing/installing-from-npm",
      "developing/installing-from-dist",
      "developing/updating",
      "developing/browser-support",
      "developing/react",
      "developing/supporting-ie8",
      {
        type: "link",
        label: "Sass reference",
        href: "pathname:///sassdoc/index.html",
      },
    ],
    Components: [
      {
        type: "category",
        label: "For residents",
        items: [
          "components/accordion",
          "components/input",
          "components/announcement",
          "components/back-link",
          "components/back-to-top",
          "components/breadcrumbs",
          "components/button",
          "components/contacts-block",
          "components/character-count",
          "components/cookie-banner",
          "components/summary-list",
          "components/table",
          "components/tag",
          "components/tabs",
          "components/textarea",
          "components/warning-text",
        ],
      },
      {
        type: "category",
        label: "For staff",
        items: ["components/input"],
      },
    ],
    Patterns: [
      {
        type: "category",
        label: "Help staff to...",
        items: ["patterns/manage-a-caseload", "patterns/find-a-client"],
      },
    ],
    "Starter kits": ["tutorials/prototype", "tutorials/production"],
    Contributing: ["contributing/introduction"],
  },
};
