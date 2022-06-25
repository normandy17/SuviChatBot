exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;
  // Only update the `/claims` page.
  if (page.path.match(/digital-journey/)) {
    const ModifiedPage = page;
    // page.matchPath is a special key that's used for matching pages
    // with corresponding routes only on the client.
    ModifiedPage.matchPath = `/digital-journey/*`;
    // Update the page.
    createPage(ModifiedPage);
  }
};

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pag