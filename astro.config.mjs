import Icons         from "unplugin-icons/vite"
import AutoImport    from "unplugin-auto-import/vite"
import IconsResolver from "unplugin-icons/resolver"


const IconAliases = {
	"awesome_":         "fa-solid",
	"awesome-outline_": "fa-regular",
	"logos_":           "logos",
}


// @ts-check
export default /** @type {import("astro").AstroUserConfig} */ ({
	renderers: ["@astrojs/renderer-solid"],

	vite: {
		plugins: [

			AutoImport({
				resolvers: [
					IconsResolver({prefix:"Icon_", extension:"tsx",   alias:IconAliases}),
				],
			}),

			/** [Config 1] Preferred, currently doesn't work @ .astro */
			//Icons({
			//	compiler:     "solid",
			//	defaultClass: "Icon",
			//}),

			/** [Config 2] modified for .astro compat */
			Icons({
				compiler: "solid",
				iconCustomizer(collection, icon, props){
					props["data-iconify"] = true
				},
			}),

		],
	},
});
