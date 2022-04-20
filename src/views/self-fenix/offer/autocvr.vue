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
          class="self-el-form-item"
          label="Offer:"
          prop="offer_id"
        >
          <div class="flex jc-start ai-center form-dialog">
            <span v-text="state.ruleForm.offer_id"></span>
          </div>
        </el-form-item>
        <!-- Offer -->
        <el-form-item
          class="self-el-form-item"
          label="Adv Offer:"
          prop="adv_offer"
        >
          <div class="flex jc-start ai-center form-dialog">
            <span v-text="state.ruleForm.adv_offer"></span>
          </div>
        </el-form-item>
        <!-- Offer -->
        <el-form-item
          class="self-el-form-item"
          label="Status:"
          prop="auto_cvr_status"
        >
          <el-switch
            v-model="state.ruleForm.auto_cvr_status"
            :active-value="1"
            :inactive-value="2"
          />
        </el-form-item>
        <el-form-item
          class="self-el-form-item"
          label="Start Hour:"
          prop="start_hour"
        >
          <el-time-select
            v-model="state.ruleForm.auto_start_hour"
            placeholder="Start time"
            start="00:00"
            step="01:00"
            end="23:00"
            format='H'
            class="form-dialog"
          />
        </el-form-item>
        <el-form-item
          class="self-el-form-item"
          label="End Hour:"
          prop="end_hour"
        >
          <el-time-select
            v-model="state.ruleForm.auto_end_hour"
            placeholder="End time"
            start="00:00"
            step="01:00"
            end="23:00"
            format='H'
            class="form-dialog"
          />
        </el-form-item>
        <el-form-item
          class="self-el-form-item"
          label="CVR Max:"
          prop="auto_cvr_max"
        >
          <el-input
            v-model="state.ruleForm.auto_cvr_max"
            type="number"
            placeholder="Please input"
            class="input-with-select form-dialog"
          />
        </el-form-item>
        <el-form-item
          class="self-el-form-item"
          label="CVR Min:"
          prop="auto_cvr_min"
        >
          <el-input
            v-model="state.ruleForm.auto_cvr_min"
            type="number"
            placeholder="Please input"
            class="input-with-select form-dialog"
          />
        </el-form-item>
        <el-form-item
          class="self-el-form-item"
          label="Target Buzz Rate:"
          prop="target_buzz_rate"
        >
          <el-input
            v-model="state.ruleForm.target_buzz_rate"
            type="number"
            placeholder="Please input"
            class="input-with-select form-dialog"
          />
        </el-form-item>
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
import type { FormInstance, FormRules, ElForm } from 'element-plus'
import useUtils from '@/hooks/self/useUtils'
const { handleAjaxNumberKeyFn, handleAjaxArrayKeyFn } = useUtils()
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

const validatorSiteValue = (rule: any, value: number, callback: (arg0: Error | undefined) => void) => {
  if (value) {
    if (value > 1000) {
      callback(new Error('值不可大于1000'))
    } else {
      callback(undefined)
    }
  } else {
    callback(undefined)
  }
}

const rules = reactive<FormRules>({
  offer_id: [{ required: true, message: message.required, trigger: ['blur', 'change'] }],
  adv_offer: [{ required: true, message: message.required, trigger: ['blur', 'change'] }],
  auto_cvr_status: [{ required: true, message: message.required, trigger: ['blur', 'change'] }],
  auto_cvr_max: [
    { required: true, message: message.required, trigger: ['blur', 'change'] },
    // 限制3位长
    { min: 0, max: 3, message: '123', trigger: ['blur', 'change'] }
  ],
  auto_cvr_min: [
    { required: true, message: message.required, trigger: ['blur', 'change'] },
    { min: 0, max: 3, message: '123', trigger: ['blur', 'change'] }
  ],
  target_buzz_rate: [
    { required: true, message: message.required, trigger: ['blur', 'change'] },
    { min: 0, max: 3, message: '123', trigger: ['blur', 'change'] }
  ],
})

const choiceRules = reactive<FormRules>({
})

let state = reactive({
  ruleForm: {
    offer_id: '',
    adv_offer: '',
    auto_cvr_status: 2,
    auto_start_hour: '0',
    auto_end_hour: '23',
    auto_cvr_max: '',
    auto_cvr_min: '',
    target_buzz_rate: '',
  }
})

watch(() => {
  return props.msg
}, (newVal, oldVal) => {
  // console.log(newVal)
  let msg = props.msg
  state.ruleForm.offer_id = msg.offer_id
  state.ruleForm.adv_offer = msg.adv_offer
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

const handleShow = computed(() => {
  let {
    auto_cvr_status,
    auto_cvr_max,
    auto_cvr_min,
    target_buzz_rate
  } = state.ruleForm
  return `${auto_cvr_status === 1 ? '开' : '关'}_${auto_cvr_max}_${auto_cvr_min}_${target_buzz_rate}`
})


const numberArr = ['auto_cvr_max', 'auto_cvr_min', 'target_buzz_rate']
const arrayArr = []

const submitFn = () => {
  let finalData = handleAjaxArrayKeyFn(handleAjaxNumberKeyFn(state.ruleForm, numberArr), arrayArr)
  emit('updateData', finalData)
  emit('update:visible', false)
  // handleAjaxNumberKeyFn
  // handleAjaxArrayKeyFn
}

</script>
