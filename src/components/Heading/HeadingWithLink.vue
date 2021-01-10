<template>
  <div class="d-flex flex-wrap justify-content-between align-items-center heading-section">
      <h2 class="text-info font-weight-bold font-size-lg mb-5">{{title}}</h2>
      <div :v-if="link">
      <routerLink  class="btn btn-info btn-lg mb-5" :to="to">{{link}}</routerLink>
      </div>
    </div>
</template>

<script>
export default {
    props: {
        title:{
            type: String,
        },
        link: {
            type: [String, Boolean],
            default: () => false
        },
        to: {
            type: [Object, String],
        }
    }
}
</script>
