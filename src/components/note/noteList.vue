<template>
  <div class="noteList">
      <h2>notes-记事本</h2>
      <div class="btnGroup">
          <button type="button"  @click="changeActive('all')"  :class="{activeClass:show=='all'}">All notes</button>
          <button type="button"  @click="changeActive('favorite')"  :class="{activeClass:show=='favorite'}">Favorite notes</button>
      </div>
      <div class="item-list">
          <a v-for="item in notes" @click="updateActiveNote(item)" :class="{activeItem:activeNote == item}" href="#" v-bind:title='item.text'>{{item.text}}</a>
      </div>
  </div>
</template>
<script>
export default {
  computed: {
    show() {
      return this.$store.getters.currentActive;
    },
    notes() {
      if (this.show == "all") {
        return this.$store.getters.notes;
      } else if (this.show == "favorite") {
        return this.$store.getters.notes.filter(note => note.favorite);
      }
    },
    activeNote() {
      return this.$store.getters.activeNote;
    }
  },
  methods: {
    changeActive(type) {
      this.$store.dispatch("changeActive", type);
    },
    updateActiveNote(note) {
      this.$store.dispatch("updateActiveNote", note);
    }
  }
};
</script>
<style>
.noteList {
  float: left;
  width: 300px;
  background-color: #f5f5f5;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  height: 100%;
}
.noteList h2 {
  font-weight: 300;
  text-transform: uppercase;
  text-align: center;
  font-size: 22px;
  padding-bottom: 8px;
}

.noteList .btnGroup {
  height: 30px;
  line-height: 30px;
  width: 300px;
  border: none;
  box-sizing: border-box;
  padding-left: 8px;
}
.noteList .btnGroup button {
  border: 1px solid red;
  cursor: pointer;
  height: 100%;
  line-height: 100%;
  width: 140px;
  padding: 0px;
  border: none;
  cursor: pointer;
}
.noteList .activeItem {
  background: #2377ba;
  color: white;
}
.noteList .activeClass {
  background: aquamarine;
}
.noteList .item-list {
  padding: 5px 0px 0px 8px;
}
.noteList a {
  width: 100%;
  height: 35px;
  padding-left: 8px;
  line-height: 35px;
  display: block;
  text-decoration: none;
  color: black;
  /*
    超过固定宽度时,用......代替
  */
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
</style>
