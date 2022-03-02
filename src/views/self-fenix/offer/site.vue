<template>
  <div>
    <el-form
      ref="ruleForm"
      enctype="multipart/form-data"
      :rules="state.rules"
      :model="state.ruleForm"
      label-width="240px"
      label-position="right"
    >
      <div class="content-con flex column">
        <!-- Offer -->
        <el-form-item
          label="Offer:"
          prop="offer"
        >
          <div class="flex jc-start ai-center form-one">
            <span v-text="state.ruleForm.offer_id"></span>
          </div>
        </el-form-item>
        <!-- Offer -->
        <el-form-item
          label="Offer:"
          prop="offer"
        >
          <div class="flex jc-start ai-center form-one">
            <span v-text="state.ruleForm.offer_id"></span>
          </div>
        </el-form-item>
        <!-- Offer -->
        <el-form-item
          label="分天优选:"
          prop="offer"
        >
          <div class="flex jc-start ai-center form-one">
            <span v-text="state.ruleForm.offer_id"></span>
          </div>
        </el-form-item>
        <el-form-item
          label="分天优选启动条件:"
          prop="offer"
        >
          <div class="flex jc-start ai-center form-one">
            <span v-text="state.ruleForm.offer_id"></span>
          </div>
        </el-form-item>
        <el-form-item
          label="分天优选install限制:"
          prop="offer"
        >
          <div class="flex jc-start ai-center form-one">
            <span v-text="state.ruleForm.offer_id"></span>
          </div>
        </el-form-item>
        <el-form-item
          label="分时优选:"
          prop="offer"
        >
          <div class="flex jc-start ai-center form-one">
            <span v-text="state.ruleForm.offer_id"></span>
          </div>
        </el-form-item>
        <el-form-item
          label="当前渠道数:"
          prop="offer"
        >
          <div class="flex jc-start ai-center form-one">
            <site-list
              :msg="state.ruleForm"
            ></site-list>
          </div>
        </el-form-item>
        <!-- end -->
      </div>
    </el-form>
    <!-- form -->
    <!-- footer -->
    <div class="w100 flex">
      <el-button
        type="primary"
        @click.prevent="saveFun"
      >
        Save
      </el-button>
    </div>
  </div>
</template>
<script setup lang="ts">
import siteList from './siteList.vue'
const props = defineProps({
  msg: {
    require: true,
    default: () => {
      return {}
    },
    type: Object
  }
})
console.log(props.msg)
let state = reactive({
  rules: {},
  ruleForm: {
    offer_id: 0
  }
})
const saveFun = () => {

}
let dialogVisibleSite = ref(false)

</script>
