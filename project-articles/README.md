# Project articles

Long-form case studies live in **React** (see `src/pages/`, `src/content/`). They are linked from `ProductsOverviewPage` (`/products`).

**Temperature & humidity monitoring**:

- **URL:** `/projects/temperature-humidity-monitoring`
- **Source:** `src/pages/ProjectArticleTemperatureHumidityMonitoringPage.tsx`, `src/content/projectArticleTemperatureHumidityMonitoring.ts`

**Livestock monitoring and control**:

- **URL:** `/projects/livestock-monitoring-control`
- **Source:** `src/pages/ProjectArticleLivestockMonitoringControlPage.tsx`, `src/content/projectArticleLivestockMonitoringControl.ts`

**Smart agriculture system using IoT**:

- **URL:** `/projects/smart-agriculture-iot`
- **Source:** `src/pages/ProjectArticleSmartAgricultureIotPage.tsx`, `src/content/projectArticleSmartAgricultureIot.ts`

`public/project-articles/example-1/index.html` is a **redirect** only so old URLs keep working after deploy.

Add more case studies: new route + content module, then link from `ProductsOverviewPage`.
