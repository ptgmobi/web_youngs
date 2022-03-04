<template>
  <div>
    <el-form
      ref="ruleForm"
      enctype="multipart/form-data"
      :rules="state.rules"
      :model="state.ruleForm"
      label-width="140px"
      label-position="right"
    >
      <div class="content-con flex column">
        <!-- Offer -->
        <el-form-item
          label="Offer:"
          prop="offer_id"
        >
          <div class="flex jc-start ai-center form-one">
            <span v-text="state.ruleForm.offer_id"></span>
          </div>
        </el-form-item>
        <!-- Offer -->
        <el-form-item
          label="Adv Offer:"
          prop="adv_offer"
        >
          <div class="flex jc-start ai-center form-one">
            <span v-text="state.ruleForm.adv_offer"></span>
          </div>
        </el-form-item>
        <!-- Offer -->
        <el-form-item
          label="分天优选:"
          prop="offer"
        >
          <div class="flex jc-start ai-center form-one">
            <el-switch
              :disabled="props.msg.channel_type == 2"
              v-model="state.ruleForm.status_day"
              :active-value="1"
              :inactive-value="2"
            />
          </div>
        </el-form-item>
        <el-form-item
          label="分天优选启动条件:"
          prop="offer"
        >
          <div class="flex jc-start ai-center form-one">
            <el-input
              v-model="state.ruleForm.day_limit"
              placeholder="默认值为15"
              class="input-with-select"
            />
          </div>
        </el-form-item>
        <el-form-item
          label="分天优选install限制:"
          prop="offer"
        >
          <div class="flex jc-start ai-center form-one">
            <el-radio-group class="flex" v-model="state.ruleForm.day_limit_type">
              <el-radio :label="1">默认</el-radio>
              <el-radio :label="2">自定义</el-radio>
            </el-radio-group>
            <el-input
              v-if="state.ruleForm.day_limit_type === 2"
              v-model="state.ruleForm.day_limit_value"
              placeholder=""
              class="input-with-select ml-10"
            />
          </div>
        </el-form-item>
        <el-form-item
          label="分时优选:"
          prop="offer"
        >
          <div class="flex jc-start ai-center form-one">
            <el-switch
              :disabled="props.msg.channel_type == 2"
              v-model="state.ruleForm.status_hour"
              :active-value="1"
              :inactive-value="2"
            />
          </div>
        </el-form-item>
        <el-form-item
          label="当前渠道数:"
          prop="offer"
        >
          <div class="flex jc-start ai-center form-one">
            {{state.ruleForm.site_value}}
            <site-list
              v-model:msg="state.ruleForm.site_value"
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
const emit = defineEmits(['update:visible', 'updateData'])
const props = defineProps({
  msg: {
    require: true,
    default: () => {
      return {}
    },
    type: Object
  }
})
let state = reactive({
  ruleForm: {
    offer_id: '',
    adv_offer: '',
    channel_type: 2,
    status_day: undefined,
    day_limit: 15,
    day_limit_type: 1,
    day_limit_value: '',
    status_hour: 2,
    site_value: '',
    ...props.msg
  },
  rules: {}
})
console.log(state.ruleForm.site_value)
const saveFun = () => {
  emit('updateData', state.ruleForm)
  emit('update:visible', false)
}

</script>
