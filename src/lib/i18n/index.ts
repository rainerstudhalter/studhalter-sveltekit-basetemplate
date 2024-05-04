import { createI18n } from "@inlang/paraglide-sveltekit";
import * as runtime from "$paraglide/runtime";
import * as m from "$paraglide/messages";

export const i18n = createI18n(runtime, {
    prefixDefaultLanguage: 'always',
    pathnames: {
        // '/blah': m.route_blah_path,
    },
});