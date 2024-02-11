<template>
  <div id="app">
    <!-- <Tiptap /> -->
    <ModalVue />
  </div>
</template>

<script>
import ModalVue from "../components/Modal.vue";
import Tiptap from "../components/Tiptap.vue";
export default {
  components: {
    Tiptap,
    ModalVue,
  },
};
</script>
