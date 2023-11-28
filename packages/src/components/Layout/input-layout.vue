<template>
  <div class="InputAddOn">
    <span class="InputAddOn-item">...</span>
    <input class="InputAddOn-field" />
    <button class="InputAddOn-item">...</button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.InputAddOn {
  display: flex;
  width: 200px;
}

.InputAddOn-field {
  flex: 1;
}
</style>