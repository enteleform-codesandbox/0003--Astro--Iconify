import Icons         from "unplugin-icons/vite"
import AutoImport    from "unplugin-auto-import/vite"
import IconsResolver from "unplugin-icons/resolver"


const IconAliases = {
	"awesome_":         "fa-solid",
	"awesome-brands_":  "fa-brands",
	"awesome-outline_": "fa-regular",
}


// @ts-check
export default /** @type {import("astro").AstroUserConfig} */ ({
	renderers: ["@astrojs/renderer-solid"],

	vite: {
		plugins: [

			AutoImport({
				resolvers: [
					IconsResolver({prefix:"Icon_", extension:"tsx", alias:IconAliases}),
				],
			}),

			Icons({
				compiler:     "solid",
				defaultClass: "Icon",
			}),

		],
	},
});
