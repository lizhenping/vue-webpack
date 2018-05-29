<template>
    <div class="mainpage">
        <h4>欢迎来到主页</h4>
    </div>
</template>
<script>
export default {
  mounted() {
    /**
     *var: 下面的属全局变量,函数arr[i]内部的i指向这个全局变量;
      let: 只在该块级作用域内有效,循环时,在上一次循环的数的基础上继续进行操作,不存在变量提升;
     */
    // var arr = [];
    // for (var i = 0; i < 5; i++) {
    //   arr[i] = function() {
    //     console.log(i);
    //   };
    // }
    // console.log(arr[3]());

    // var arr = [];
    // for (let i = 0; i < 5; i++) {
    //   arr[i] = function() {
    //     console.log(i);
    //   };
    // }
    // console.log(arr[3]());

    //外层i已经被破坏
    // for (var i = 0; i < 2; i++) {
    //   console.log("outer:" + i);
    //   for (var i = 0; i < 2; i++) {
    //     console.log("inner:" + i);
    //   }
    // }

    console.log(test);
    console.log(test2);
    var test = "1";
    let test2 = "2";
  }
};
</script>
<style>
</style>

