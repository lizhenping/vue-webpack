<template>
   <div id="toolbar">
    <i @click="addOne" class="el-icon-plus"></i>
    <i @click="toggleFavorite" v-bind:class="[activeNoteFavorite ? 'el-icon-star-on':'el-icon-star-off']"></i>
    <i @click="deleteNote" class="el-icon-close"></i>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: mapState({
    activeNode: state => state.activeNode,
    activeNoteFavorite: state => state.activeNote.favorite
  }),
  methods: {
    addOne() {
      this.$store.dispatch("changeActive", "all");
      this.$store.dispatch("addNote");
    },
    toggleFavorite() {
      if (this.$store.getters.notes.length == 0) {
        this.$message({
          type: "info",
          message: "暂无笔记列表,无法更改收藏状态~",
          customClass: "messageBox"
        });
        return;
      }
      this.$store.dispatch("toggleFavorite");
    },
    deleteNote() {
      this.$store.dispatch("changeActive", "all");
      if (this.$store.getters.notes.length == 0) {
        this.$message({
          type: "info",
          message: "暂无笔记列表,无法删除~",
          showClose: true,
          center: true
        });
        return;
      }
      this.$store.dispatch("deleteNote");
    }
  }
};
</script>
<style type="text/css">
#toolbar {
  float: left;
  width: 52px;
  text-align: center;
  background: #cccccc;
  height: 100%;
}
#toolbar .el-icon-plus {
  padding-top: 10px;
}
#toolbar i {
  font-size: 30px;
  margin-bottom: 13px;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.5s ease;
  display: block;
}
#toolbar i:hover {
  opacity: 1;
}
.starred {
  color: #f7ae4f;
}
.messageBox .el-message__content {
  color: red;
}
</style>