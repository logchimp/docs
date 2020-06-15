<template>
  <div>
		<Header />
    <slot/>
  </div>
</template>

<script>
// components
import Header from "../layouts/partials/Header";

export default {
	name: "Default",
	components: {
		Header
	}
}
</script>
