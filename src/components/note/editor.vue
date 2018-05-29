<template>
  <div id="note-editor">
    <textarea v-bind:value="activeNoteText" v-on:input="editNote" class="form-control"></textarea>
  </div>
</template>

<script>
export default {
  computed: {
    activeNoteText() {
      return this.$store.getters.activeNote.text;
    }
  },
  methods: {
    editNote(e) {
      this.$store.dispatch("editNote", e.target.value);
    }
  }
};
</script>
<style type="text/css">
#note-editor {
  height: 100%;
  width: 520px;
  float: left;
  border: 1px solid #cccccc;
}

#note-editor textarea {
  width: 100%;
  height: 100%;
  resize: none;
  padding: 0px;
  border: none;
  font-size: 16px;
}
</style>