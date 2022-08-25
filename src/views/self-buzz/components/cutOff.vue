<template>
<div class="w100">
  <div class="flex jc-start">
    <span v-text="(ruleForm.cutoff_start * 100).toFixed(0)"></span>
    %
    <span>-</span>
    <span v-text="(ruleForm.cutoff_end * 100).toFixed(0)"></span>
    % （
    <span>总设备数:</span>
    <span v-text="handleDeviceNum.all"></span>
    ） （
    <span>选中设备数:</span>
    <span v-text="handleDeviceNum.judge"></span>
    ）
  </div>
  <div class="p0-10">
    <el-slider
      v-model="cutoff"
      class="device-cutoff"
      range
      :step="5"
      :show-stops="true"
      show-input
      :min="0"
      :max="100"
      @change="changeFn"
    ></el-slider>
  </div>
</div>
</template>
<script lang="ts" setup>
import { ApiGetDeviceCount } from '@/api/buzz'
const props = defineProps({
  query: {
    require: true,
    default: () => {
      return {}
    },
    type: Object
  }
})


const emit = defineEmits(['up'])

// 设备数
let deviceNum = ref(0)
let ruleForm = reactive({
  cutoff_start: props.query.cutoff_start,
  cutoff_end: props.query.cutoff_end,
})

let cutoff_start = ruleForm.cutoff_start ? Number(ruleForm.cutoff_start) * 100 : 0
let cutoff_end = ruleForm.cutoff_end ? Number(ruleForm.cutoff_end) * 100 : 100
let cutoff = ref([cutoff_start, cutoff_end])

const getDeviceCount = async (ajaxData: any) => {
  const res = await ApiGetDeviceCount(ajaxData)
  const { data: result } = res
  if (result.length !== 0) {
    return result.findLast(ele => ele).device_num
  } else {
    return 0
  }
}

const handleDeviceCount = async (): Promise<void> => {
  const {pkg_name, country, platform} = props.query
  if (pkg_name && country && platform) {
    console.log('获取设备数')
    const ajaxData = {
      pkg_name, country, platform
    }
    const num = await getDeviceCount(ajaxData)
    deviceNum.value = num
  }
}

const handleDeviceNum = computed(() => {
  const num = deviceNum.value
  const cutoff_start = ruleForm.cutoff_start ? Number(ruleForm.cutoff_start) : 0
  const cutoff_end = ruleForm.cutoff_end ? Number(ruleForm.cutoff_end) : 1
  let res = {
    judge: ((cutoff_end - cutoff_start) * num).toFixed(0),
    all: num.toFixed(0)
  }
  return res
})

const setCutoff = (newVal: Array<number>) => {
  ruleForm.cutoff_start = newVal[0] / 100
  ruleForm.cutoff_end = newVal[1] / 100
  emit('up', ruleForm)
}

watchEffect(() => {
  handleDeviceCount()
})

watch(() => props.query, (newVal, oldVal) => {
  if (newVal.cutoff_start !== void 0 && newVal.cutoff_end !== void 0) {
    ruleForm.cutoff_start = newVal.cutoff_start
    ruleForm.cutoff_end = newVal.cutoff_end
  }
}, {
  immediate: true,
  deep: true,
})

const changeFn = (data) => {
  setCutoff(data)
}

</script>