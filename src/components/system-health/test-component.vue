<template>
  <div><p>{{ text }}</p></div>
</template>

<script>
export default {
  name: 'TestComponent',
  props: {
    text: {
      type: String,
      default: 'peter',
    },
  },
}
</script>
