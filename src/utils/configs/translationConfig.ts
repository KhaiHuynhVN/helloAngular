import { Provider } from "@angular/core";
import { provideTranslateService } from "@ngx-translate/core";
import { provideTranslateHttpLoader } from "@ngx-translate/http-loader";

// Providers cho translation - HTTP Loader
const provideTranslation = (): Provider[] => [
   ...provideTranslateService({
      fallbackLang: "vi",
      lang: "vi",
   }),
   ...provideTranslateHttpLoader({
      prefix: "/assets/translations/",
      suffix: ".json",
   }),
];

export { provideTranslation };
