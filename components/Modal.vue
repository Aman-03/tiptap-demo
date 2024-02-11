<template>
  <v-app>
    <v-row justify="center">
      <v-dialog v-model="dialog" scrollable max-width="300px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on">
            Open Dialog
          </v-btn>
        </template>
        <v-card>
          <Tiptap />
        </v-card>
      </v-dialog>
    </v-row>
  </v-app>
</template>
<script>
import Tiptap from "./Tiptap.vue";
export default {
  components: {
    Tiptap,
  },
  data() {
    return {
      dialogm1: "",
      dialog: false,
    };
  },
};
</script>
