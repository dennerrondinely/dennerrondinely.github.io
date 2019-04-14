<template>
  <div class="icon-content">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 512 512"
      preserveAspectRatio="xMidYMid meet"
      :style="{height: responsive ? '100%' : false, width: responsive ? '100%' : false}"
      :width="width && !responsive ? width : false"
      :height="height && !responsive? height : false"
    >
      <path
        style="fill:#FFDA44;"
        d="M0,256c0,31.314,5.633,61.31,15.923,89.043L256,367.304l240.077-22.261
	C506.367,317.31,512,287.314,512,256s-5.633-61.31-15.923-89.043L256,144.696L15.923,166.957C5.633,194.69,0,224.686,0,256z"
      ></path>
      <g>
        <path
          style="fill:#D80027;"
          d="M496.077,166.957C459.906,69.473,366.071,0,256,0S52.094,69.473,15.923,166.957H496.077z"
        ></path>
        <path
          style="fill:#D80027;"
          d="M15.923,345.043C52.094,442.527,145.929,512,256,512s203.906-69.473,240.077-166.957H15.923z"
        ></path>
      </g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      default: "box"
    },
    responsive: {
      type: Boolean
    },
    width: {
      type: [Number, String],
      default: 18
    },
    height: {
      type: [Number, String],
      default: 18
    },
    iconColor: {
      type: String,
      default: "currentColor"
    }
  }
};
</script>
<style lang="scss" scoped>
.icon-content {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

