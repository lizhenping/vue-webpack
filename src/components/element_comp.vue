<template>
    <div class="element_comp">
        <h5>中英文选词完成后,触发input事件.</h5>
        <input type="text" value="" placeholder="请输入用户名" id="username">
        
        <el-tag v-for='item in tags' :key="item.name" closable :type="item.type"  @close='handleClose(item)'>{{item.name}}</el-tag>
        <el-button @click="addTag()">addTags</el-button>

        <el-progress status='success' :percentage='100'></el-progress>
        <el-progress color='#cccccc' :percentage='60'></el-progress>
        <el-progress color='#dddddd' :percentage='60' type='circle'></el-progress>

        <h4>测试display:none跟visibility:hidden还有opacity:0的区别.</h4>
        <h6>1:控件占据问题</h6>
        <ul>
          <li>display:none ->彻底消失,不在文档流中占位,浏览器也不会解析该元素,visibility:hidden是视觉上消失了,在文档流中占位,浏览器会解析该元素</li>
          <li>visibility:hidden在性能上高于display:none,是因为display切换时,页面产生回流[当页面中的一部分元素需要改变尺寸,布局,显示隐藏等,页面重新构建等,属于回流]</li>
          <li>display会引起回流跟重绘,而visibility跟opacity只进行重绘.</li>
        </ul>
        <div class="div1" @click='btnEvent()'>  
          <p>display:none</p>  
        </div>  
        <div class="div2" @click='btnEvent()'>  
            <p>visibility:visible</p>  
        </div>  
        <div class="div3" @click='btnEvent()'>  
            <p>opacity:0</p>  
        </div>  
        <div>测试display,visibility,opacity是否占据文档流</div>
        <h6>2: 子继承问题</h6>
        <ul>
          <li>display:none:不会被子元素继承,但是父亲不在了,子自然就不会显示了.皮之不存,毛之安附</li>
          <li>visibility: hidden,会被子继承,可通过visibility:visible使子元素显示出来.</li>
          <li>opacity:0,也会被子元素继承,但是不能通过opacity:0使其子元素重新显示.</li>
        </ul>
        <h6>3.事件绑定的问题,本文的例子还涉及到事件冒泡</h6>
        <ul>
          <li>display:none 的元素都已经不再页面存在了,因此肯定也无法触发它上面绑定的事件</li>
          <li>visibility:hidden 元素上绑定的事件也无法触发</li>
          <li>opacity: 0元素上面绑定的事件是可以触发的</li>
        </ul>


       <h4>jquery的几种事件绑定方法</h4>
       <ul>
         <li>bind()方法:jq1.7+已经废弃</li>
         <li>live()方法,也已经废弃</li>
         <li>delegate()方法,处理未渲染节点</li>
       </ul>
       </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      tags: [
        { name: "success", type: "success" },
        { name: "info", type: "info" },
        { name: "warning", type: "warning" },
        { name: "danger", type: "danger" }
      ]
    };
  },
  methods: {
    handleClose(item) {
      this.tags.splice(this.tags.indexOf(item), 1);
    },
    addTag() {
      //实现标签的追加
    },
    btnEvent() {
      alert("事件绑定");
    }
  },
  created: function() {},
  mounted: function() {
    /**
     * 问题发现: 监听文本输入框的input事件,在拼写汉字输入法但汉字并未实际填充到文本框中(选词)时会触发input事件.
     * 需求: 选词完成之后触发input事件,只触发一次.
     * 解决方案:设置flag标志位,选词完毕后再打印,settimeout的目的在于,选词完毕后,input的执行会先于compositionend,而此时flag还未为真,无法console.
     * 注意: flag标志位初始时,必须为真,否则刚开始输入非中文时,无法console.log;
     */
    var flag = true;
    $("#username").on("compositionstart", function() {
      flag = false;
    });
    $("#username").on("compositionend", function() {
      flag = true;
    });
    $("#username").on("input", function() {
      var _this = this;
      setTimeout(function() {
        if (flag == true) {
          console.log($(_this).val());
        }
      }, 0);

      /**
       * vue.js语法说明:
       * 通过直接改变某一数组的下标值,亦或者修改数组长度的办法,并无法重新渲染页面;
       * 需要通过splice,或者是set()方法[vue中将这些以观察函数包裹起来了]以达到目的;
       * 在vue-cli框架中,下面setTimeout不会被执行.
       * nextTick就是为了解决dom渲染的问题;
       */
      this.$nextTick(() => {
        this.tags[2].name = "lzp";
        this.tags.length = 10;
        console.log(this.tags[2]);
      });
      // setTimeout(function() {
      //   this.tags[2].name = "lzp";
      //   this.tags.length = 10;
      //   console.log(this.tags[2]);
      // }, 2000);
    });
  }
};
</script>
<style>
.element_comp .el-tag {
  margin-right: 15px;
}
.element_comp .el-progress {
  width: 400px;
  height: 20px;
  padding-top: 5px;
}
.element_comp .div1,
.element_comp .div2,
.element_comp .div3 {
  width: 200px;
  height: 200px;
  background: #ccc;
  margin-top: 10px;
}
.element_comp .div1 {
  display: none;
}
.element_comp .div1 p {
  display: block;
}
.element_comp .div2 {
  visibility: hidden;
}
.element_comp .div2 p {
  visibility: visible;
}
.element_comp .div3 {
  opacity: 0;
}
.element_comp .div3 p {
  opacity: 1;
}
</style>


