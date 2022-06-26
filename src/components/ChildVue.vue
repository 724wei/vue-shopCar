<template>
  <div class="content">
    <p>{{ title }}</p>
    <div>
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style>
.content {
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
}
</style>
