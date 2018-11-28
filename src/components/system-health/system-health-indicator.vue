<template>
  <div :style="indicatorStyles" class="system-health-indicator">
    <v-icon v-if="icon" class="system-health-indicator__icon">{{
      icon
    }}</v-icon>
    <div v-if="label" class="system-health-indicator__label hidden-xs-only">
      {{ label }}
    </div>
    <div class="system-health-indicator__value">{{ value }}</div>
  </div>
</template>

<script>
export default {
  name: 'SystemHealthIndicator',
  props: {
    value: {
      type: Number,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: 'transparent',
    },
  },
  data() {
    return {
      indicatorStyles: {
        backgroundColor: this.color,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.system-health-indicator {
  display: flex;
  align-items: center;
  height: 2.5rem;
  padding: 0.25rem 0.4rem;
  border-radius: 0.1rem;
}

.system-health-indicator__icon {
  margin-right: 0.25rem;
}

.system-health-indicator__label {
  margin-right: 0.25rem;
}

.system-health-indicator__value {
  margin-right: 0.25rem;
}
</style>
