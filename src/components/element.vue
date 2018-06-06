<template>
    <div class="element">
        <h2>ElementUI组件库</h2>
        <h4>Form表单</h4>
        <div class="itemBox">
             <input  type="color" id="colorInput"/>
             <el-color-picker v-model="colorPicker_color" show-alpha :predefine='predefineColors' popper-class='colorPicker'></el-color-picker>
        </div>
        <div class="itemBox">
            <el-radio-group v-model="radioVal1"  @change="getRadioVal1">
                <el-radio label='男' name='male'>男</el-radio>
                <el-radio label='女' name='female'>女</el-radio>
            </el-radio-group>
        </div>
        <div class="itemBox">
            <el-checkbox @change='depStatus' v-model="containsChilld" name='indeterminate'>是否包含子部门</el-checkbox>
        </div>
        <div class="itemBox">
          <!-- 
            v-model指令,实现表单输入和应用状态的双向数据绑定;
            v-bind:绑定属性->简写: :key
            v-on:绑定事件  ->简写: @click
           -->
              <el-checkbox :indeterminate='isIndeterminate' v-model="checkAlled" @change='checkAll'>全选</el-checkbox>
                <div style="margin:15px 0px"></div>
                <el-checkbox-group v-model='checkedArr' @change="checkEvt">
                    <el-checkbox v-for='city in cities' :label='city' :key='city'>{{city}}</el-checkbox>
              </el-checkbox-group>
        </div>
        <div class="itemBox">
             <el-select v-model="timeType" palceholder='请选择' clearable @change='getTimetype' @visible-change='visibleChange'>
                <el-option v-for="item in timeTypeOptions"  :value='item.value'  :label='item.label' :key="item.value" :disabled='item.disabled'></el-option>
            </el-select>
            <div class="dateShow" v-if="dateShow">
                <label>开始时间:</label>
                <el-date-picker v-model="beginTime" type="date" placeholder="请选择开始时间"> </el-date-picker>
                <label>结束时间:</label>
                <el-date-picker v-model="endTime" type="date" placeholder="请选择结束时间"> </el-date-picker>
            </div>
        </div>
        <div class="itemBox">
            <el-select v-model="selectVal1" palceholder='请选择' clearable multiple collapse-tags>
                <el-option v-for="item in timeTypeOptions"  :value='item.value'  :label='item.label' :key="item.value" :disabled='item.disabled'></el-option>
            </el-select>
        </div>
        <div class="itemBox">
            <el-select v-model="groupCity" palceholder='请选择城市' clearable >
                <el-option-group v-for="group in citiesGroup"  :label='group.label' :key="group.value">
                <el-option v-for="item in group.options"  :value='item.value'  :label='item.label' :key="item.value">
                </el-option>
                </el-option-group>
            </el-select>
        </div>
        <div class="itemBox">
            <el-input-number v-model="input_number2" :max='10' :min='0' :step='2' name='input_number2'></el-input-number>
        </div>
        <div class="itemBox">
            <el-input placeholder='请输入内容' suffix-icon='el-icon-search' v-model="inputIcon"></el-input>
        </div>
         <div class="itemBox">
              <el-input type='textarea' :autosize="{minRows:5,maxRows:5}" placeholder='请输入留言内容' v-model='textarea1'></el-input>
          </div>
         <div class="highInput">
             <el-input placeholder='请输入具体的网址' v-model="address">
                  <el-select  v-model='selectVal' slot="prepend" placeholder='请选择' name='selOptions'>  
                      <el-option label='http://' value='http://'></el-option>
                      <el-option label='https://' value='https://'></el-option>
                  </el-select>
                  <template slot="append">.com</template>
              </el-input>
         </div>
        <el-tooltip class="item" effect="light" content="tooltip提示文字" placement='top'>
            <el-button>tooltip弹框</el-button>
        </el-tooltip>
    </div>
</template>
<script>
var citiesOptions = ["广州", "梅州", "惠州", "高州"];
export default {
  data() {
    return {
      radioVal1: "男",
      containsChilld: false,
      isIndeterminate: true,
      cities: citiesOptions,
      checkAlled: false,
      checkedArr: ["梅州", "惠州"],
      timeType: "01",
      timeTypeOptions: [
        { label: "本周", value: "01" },
        { label: "本月", value: "02" },
        { label: "本季度", value: "03", disabled: false },
        { label: "自定义时间", value: "04" }
      ],
      dateShow: false,
      beginTime: "",
      endTime: "",
      selectVal1: ["01"],
      groupCity: "",
      citiesGroup: [
        {
          label: "热门城市",
          value: "热门城市",
          options: [
            { label: "广州", value: "guangzhou" },
            { label: "深圳", value: "shenzhen" }
          ]
        },
        {
          label: "城市",
          value: "城市",
          options: [
            { label: "惠州", value: "huizhou" },
            { label: "梅州", value: "meizhou" },
            { label: "河源", value: "heyuan" }
          ]
        }
      ],
      input_number2: 2,
      inputIcon: "",
      textarea1: "",
      address: "",
      selectVal: "",
      colorPicker_color: "#f00",
      predefineColors: [
        "#ff4500",
        "#ff8c00",
        "#ffd700",
        "#90ee90",
        "#00ced1",
        "#1e90ff",
        "#c71585",
        "rgba(255, 69, 0, 0.68)",
        "rgb(255, 120, 0)",
        "hsv(51, 100, 98)",
        "hsva(120, 40, 94, 0.5)",
        "hsl(181, 100%, 37%)",
        "hsla(209, 100%, 56%, 0.73)",
        "#c7158577"
      ]
    };
  },
  methods: {
    getRadioVal1(value) {
      console.log("单选框:" + value);
    },
    depStatus(val) {
      this.containsChilld = val;
    },
    checkAll(value) {
      this.checkedArr = value ? citiesOptions : [];
      this.isIndeterminate = false;
    },
    checkEvt(val) {
      var checkedLen = val.length;
      this.checkAlled = checkedLen == citiesOptions.length ? true : false;
      this.isIndeterminate =
        checkedLen > 0 && checkedLen < citiesOptions.length;
    },
    getTimetype(val) {
      if ("04" == val) {
        this.dateShow = true;
      } else {
        this.dateShow = false;
      }
    },
    //判断下拉选项框是放开/缩起
    visibleChange(status) {
      console.log("时间下拉框状态:" + status);
    }
  }
};
</script>
<style>
.itemBox {
  margin-bottom: 10px;
}
.itemBox .dateShow {
  display: inline-block;
  margin-left: 10px;
}
.itemBox .el-textarea {
  width: 600px;
}
.itemBox .el-input {
  width: 200px;
}

.highInput {
  width: 500px;
}
.highInput .el-select input[name="selOptions"] {
  width: 90px;
}
#colorInput {
  display: block;
  margin-bottom: 10px;
}
</style>

