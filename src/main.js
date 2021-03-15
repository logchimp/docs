import VueGtag from "vue-gtag";

import "prismjs/themes/prism.css";
import "~/styles/main.sass";

import DefaultLayout from "~/layouts/Default.vue";

export default function(Vue, { router, head, isClient }) {
	Vue.component("Layout", DefaultLayout);

	Vue.use(VueGtag, {
		config: {
			id: "G-VWDTQGN6J4"
		}
	});
}
