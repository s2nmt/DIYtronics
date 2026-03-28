# Project articles

Long-form case studies live in **React** (see `src/pages/`, `src/content/`). The blog lists them from `ProjectsPage`.

**Example-1** (temperature / humidity monitoring):

- **URL:** `/projects/example-1`
- **Source:** `src/pages/ProjectArticleExample1Page.tsx`, `src/content/projectArticleExample1.ts`

`public/project-articles/example-1/index.html` is a **redirect** only so old URLs keep working after deploy.

Add more case studies: new route + content module, then link from `ProjectsPage`.
