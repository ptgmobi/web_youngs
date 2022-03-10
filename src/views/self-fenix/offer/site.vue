<template>
  <div>
    <el-form
      ref="ruleFormRef"
      enctype="multipart/form-data"
      :rules="rules"
      :model="state.ruleForm"
      label-width="150px"
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
          prop="status_day"
        >
          <div class="flex jc-start ai-center form-one">
            <el-switch
              :disabled="props.msg.channel_type == 2"
              v-model="state.ruleForm.status_day"
              :active-value="1"
              :inactive-value="2"
            />
            <span class="ml-10">
              <el-tooltip
                content="根据昨天数据筛选符合条件的site_id使用"
                placement="right-start"
              >
                <el-icon><info-filled /></el-icon>
              </el-tooltip>
            </span>
          </div>
        </el-form-item>
        <el-form-item
          label="分天优选启动条件:"
          prop="day_limit"
        >
          <div class="flex jc-start ai-center form-one">
            <el-input
              v-model="state.ruleForm.day_limit"
              placeholder="默认值为15"
              min="5"
              step="1"
              class="input-with-select"
              type="number"
            />
            <span class="ml-10">
              <el-tooltip
                content="当昨天site_id的平均install数大于等于设定值时才启动自动优选，默认设置为15"
                placement="bottom"
              >
                <el-icon><info-filled /></el-icon>
              </el-tooltip>
            </span>
          </div>
        </el-form-item>
        <el-form-item
          label="分天优选install限制:"
          prop="day_limit_type"
        >
          <div class="flex jc-start ai-center form-one">
            <el-radio-group class="flex" v-model="state.ruleForm.day_limit_type">
              <el-radio :label="1">默认</el-radio>
              <el-radio :label="2">自定义</el-radio>
            </el-radio-group>
            <span class="ml-10">
              <el-tooltip
                content="根据site_id的install数筛选，仅使用大于等于设定值的site_id，默认值为昨天均值除以5"
                placement="right-start"
              >
                <el-icon><info-filled /></el-icon>
              </el-tooltip>
            </span>
          </div>
        </el-form-item>
        <el-form-item
          v-if="state.ruleForm.day_limit_type === 2"
          label="分天优选install限制值:"
          prop="day_limit_value"
        >
          <div class="flex jc-start ai-center form-one">
            <el-input
              type="number"
              v-model="state.ruleForm.day_limit_value"
              placeholder=""
              class="input-with-select"
            />
          </div>
        </el-form-item>
        <el-form-item
          label="分时优选:"
          prop="status_hour"
        >
          <div class="flex jc-start ai-center form-one">
            <el-switch
              :disabled="props.msg.channel_type == 2"
              v-model="state.ruleForm.status_hour"
              :active-value="1"
              :inactive-value="2"
            />
            <span class="ml-10">
              <el-tooltip
                content="根据前6小时和前2小时数据筛选符合条件的site_id使用，暂不支持自定义"
                placement="right-start"
              >
                <el-icon><info-filled /></el-icon>
              </el-tooltip>
            </span>
          </div>
        </el-form-item>
        <el-form-item
          label="当前渠道数:"
          prop="site_value"
          :rules="judgeSiteType ? rules.site_value_required : rules.site_value_no_required"
        >
          <div class="flex jc-start ai-center form-one">
            <el-input type="hidden" v-model="siteLen" disabled></el-input>
            {{siteLen}}
          </div>
        </el-form-item>
        <el-form-item
          label=""
        >
          <div class="flex jc-start ai-center form-one">
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
        @click.prevent="saveFun(ruleFormRef)"
      >
        提交
      </el-button>
    </div>
  </div>
</template>
<script setup lang="ts">
import siteList from './siteList.vue'
import type { ElForm } from 'element-plus'
const emit = defineEmits(['update:visible', 'updateData'])
type FormInstance = InstanceType<typeof ElForm>
const ruleFormRef = ref<FormInstance>()
const props = defineProps({
  msg: {
    require: true,
    default: () => {
      return {}
    },
    type: Object
  }
})
let message = {
  required: '必填项'
}
const validatorSiteValue = (rule: any, value: string, callback: (arg0: Error | undefined) => void) => {
  if (value) {
    let len = value.split(',').length
    
    if (len > 1000) {
      callback(new Error('site value 的值不可大于1000个'))
    } else {
      callback(undefined)
    }
  } else {
    callback(undefined)
  }
}
const validatorDayLimit = (rule: any, value: string, callback: (arg0: Error | undefined) => void) => {
  if (value) {
    let num = Number(value)
    if (Number.isInteger(num) && Number.isSafeInteger(num)) {
      if (num > 5) {
        callback(undefined)
      } else {
        callback(new Error('必须为大于5的整数'))
      }
    } else {
      callback(new Error('必须为整数'))
    }
  } else {
    callback(undefined)
  }
}
const rules = reactive({
  offer_id: [{ required: true, message: message.required, trigger: ['blur', 'change'] }],
  adv_offer: [{ required: true, message: message.required, trigger: ['blur', 'change'] }],
  status_day: [{ required: true, message: message.required, trigger: ['blur', 'change'] }],
  day_limit: [
    { required: true, message: message.required, trigger: ['blur', 'change'] },
    { validator: validatorDayLimit, trigger: ['blur', 'change'] }
  ],
  day_limit_type: [{ required: true, message: message.required, trigger: ['blur', 'change'] }],
  day_limit_value: [{ required: true, message: message.required, trigger: ['blur', 'change'] }],
  status_hour: [{ required: true, message: message.required, trigger: ['blur', 'change'] }],
  site_value_required: [
    { required: true, message: message.required, trigger: ['blur', 'change'] },
    { validator: validatorSiteValue, trigger: ['blur', 'change'] },
  ],
  site_value_no_required: [
    { required: false, message: message.required, trigger: ['blur', 'change'] },
    { validator: validatorSiteValue, trigger: ['blur', 'change'] },
  ],
})
let state = reactive({
  ruleForm: {
    offer_id: '',
    adv_offer: '',
    channel_type: 2,
    status_day: 2,
    day_limit: 15,
    day_limit_type: 1,
    day_limit_value: '',
    status_hour: 2,
    site_value: '',
  }
})

const siteLen = computed(() => {
  return state.ruleForm.site_value ? state.ruleForm.site_value.split(',').length : 0
})

const judgeSiteType = computed(() => {
  if (props.msg.site_type === 'rule_value') {
    return true
  }
  return false
})

watch(() => {
  return props.msg
}, (newVal, oldVal) => {
  // console.log(newVal)
  let fenixSiteData = props.msg.fenix_site
  let status_day = fenixSiteData.status_day || 2
  let status_hour = fenixSiteData.status_hour || 2
  // !
  if (props.msg.channel_type === 2) {
    status_day = 2
    status_hour = 2
  }
  state.ruleForm = {
    offer_id: fenixSiteData.offer_id || props.msg.offer_id,
    adv_offer: fenixSiteData.adv_offer || props.msg.adv_offer,
    channel_type: props.msg.channel_type,
    status_day: status_day,
    day_limit: fenixSiteData.day_limit || 15,
    day_limit_type: fenixSiteData.day_limit_type || 1,
    day_limit_value: fenixSiteData.day_limit_value || '',
    status_hour: status_hour,
    site_value: props.msg.site_value,
  }
}, {
  deep: true,
  immediate: true
})

const saveFun = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
      submitFn()
    } else {
      console.log('error submit!')
      return false
    }
  })
  
}

const submitFn = () => {
  emit('updateData', state.ruleForm)
  emit('update:visible', false)
}

</script>
