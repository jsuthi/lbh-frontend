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
      "developing/page-template",
      "developing/typography",
      "developing/colours",
      {
        type: "link",
        label: "Sass reference",
        href: "pathname:///sassdoc/index.html",
      },
    ],
    Components: [
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
      "components/date-input",
      "components/details",
      "components/error-message",
      "components/error-summary",
      "components/fieldset",
      "components/file-upload",
      "components/radios",
      "components/select",
      "components/skip-link",
      "components/summary-list",
      "components/table",
      "components/tag",
      "components/tabs",
      "components/textarea",
      "components/warning-text",
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
