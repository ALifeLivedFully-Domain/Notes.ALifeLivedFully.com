import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    Component.Comments({
      // <script src="https://giscus.app/client.js"
      //   data-repo="ALifeLivedFully-Domain/Notes.ALifeLivedFully.com"
      //   data-repo-id="R_kgDONKeHbg"
      //   data-category="Announcements"
      //   data-category-id="DIC_kwDONKeHbs4CkBDe"
      //   data-mapping="url"
      //   data-strict="0"
      //   data-reactions-enabled="1"
      //   data-emit-metadata="0"
      //   data-input-position="top"
      //   data-theme="preferred_color_scheme"
      //   data-lang="en"
      //   crossorigin="anonymous"
      //   async>
      // </script>
      provider: 'giscus',
      options: {
        // from data-repo
        repo: 'ALifeLivedFully-Domain/Notes.ALifeLivedFully.com',
        // from data-repo-id
        repoId: 'R_kgDONKeHbg',
        // from data-category
        category: 'Announcements',
        // from data-category-id
        categoryId: 'DIC_kwDONKeHbs4CkBDe',
      }
    }),

    // Customized to include explorer and table of contents on mobile
    Component.MobileOnly(Component.Explorer()),
    Component.MobileOnly(Component.TableOfContents()),
  ],
  footer: Component.Footer({
    links: {
      "ALifeLivedFully.com": "https://alifelivedfully.com",
      "My Links": "https://links.alifelivedfully.com",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    // Component.Explorer(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    // Component.Explorer(),
    // Component.DesktopOnly(Component.Explorer()),
    Component.TagList(),
  ],
  right: [],
}
