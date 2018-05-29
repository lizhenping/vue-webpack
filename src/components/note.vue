<template>
  <div id="vue-note">
     <toobar></toobar>
     <note-list></note-list>
     <editor></editor>
  </div>
</template>
<script>
import toobar from "./note/toobar";
import noteList from "./note/noteList";
import editor from "./note/editor";

export default {
  components: {
    toobar,
    noteList,
    editor
  }
};
</script>
<style>
#vue-note {
  height: 520px;
  width: 100%;
}
</style>

