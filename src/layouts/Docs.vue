<template>
	<div class="container">
		<div class="docs">
			<div class="docs__sidebar">
				<docs-sidebar :menu="menu" :route="route" />
			</div>
			<div class="docs__content">
				<div class="docs__meta">
					<div
						v-if="method"
						:style="{ color: methodColor }"
						class="docs__meta-method"
					>
						{{ method }}
					</div>
					<div class="docs__meta-heading">
						{{ title }}
					</div>
				</div>
				<div class="markdown">
					<slot />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// components
import DocsSidebar from "../components/DocsSidebar";

export default {
	name: "DocsLayout",
	props: {
		menu: {
			type: Array,
			default: () => {
				return [];
			}
		},
		route: {
			type: String,
			required: true
		},
		title: {
			type: String,
			required: true
		},
		method: {
			type: String
		}
	},
	components: {
		DocsSidebar
	},
	computed: {
		methodColor() {
			switch (this.method) {
				case "GET":
					return "#4C9951";
				case "POST":
					return "#F5B63F";
				case "PATCH":
					return "#808080";
				case "DELETE":
					return "#DA3F2E";
				default:
					break;
			}
		}
	}
};
</script>
