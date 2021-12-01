<template>
  <div>
    <!-- form -->
    <el-form enctype="multipart/form-data" ref='ruleForm' :rules='state.rules' :model='state.ruleForm' label-width="240px" label-position="right">
      <div class='content-con flex column'>
        <!-- Offer -->
        <el-form-item label="Offer:" prop="offer">
          <div class='flex jc-start ai-center form-one'>
            <span v-text='state.ruleForm.offer'></span>
          </div>
        </el-form-item>
        <!-- Adv Offer -->
        <el-form-item label="Adv Offer:" prop="adv_offer">
          <div class='flex jc-start ai-center form-one'>
            <el-input
              v-model="state.ruleForm.adv_offer"
              placeholder="Please input"
              class="input-with-select"
            >
              <template #append>
                <el-button type="primary" icon="Search"></el-button>
              </template>
            </el-input>
          </div>
        </el-form-item>
        <!-- Channel -->
        <el-form-item label="Channel:" prop="channel">
          <el-select filterable class='form-one' v-model="state.ruleForm.channel" clearable placeholder="">
            <el-option
              v-for="item in state.options.channel"
              :key="item"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <!-- Channel Type -->
        <el-form-item label="Channel Type:" prop="channel_type">
          <el-radio-group class='form-one' v-model="state.ruleForm.channel_type">
            <el-radio :label="1">BUZZ</el-radio>
            <el-radio :label="2">SDK</el-radio>
          </el-radio-group>
        </el-form-item>
        <!-- Adv Status -->
        <el-form-item label="Adv Status:" prop="adv_status">
          <div class='flex jc-start ai-center form-one'>
            <span v-text='state.ruleForm.adv_status'></span>
          </div>
        </el-form-item>
        <!-- Status -->
        <el-form-item label="Status:" prop="status">
          <div class='flex jc-start ai-center form-one'>
            <el-switch
              v-model="state.ruleForm.status"
              :active-value="1"
              :inactive-value="2"
            />
          </div>
        </el-form-item>
        <!-- Offer Title -->
        <el-form-item label="Offer Title:" prop="title">
          <div class='flex jc-start ai-center form-one'>
            <el-input
              v-model="state.ruleForm.title"
              placeholder="Please input"
              class="input-with-select"
            />
          </div>
        </el-form-item>
        <!-- Package Name -->
        <el-form-item label="Package Name:" prop="pkg">
          <div class='flex jc-start ai-center form-one'>
            <el-input
              v-model="state.ruleForm.pkg"
              placeholder="Please input"
              class="input-with-select"
            />
          </div>
        </el-form-item>
        <!-- Attribute Provider -->
        <el-form-item label="Attribute Provider:" prop="attribute_provider">
          <el-select filterable class='form-one' v-model="state.ruleForm.attribute_provider" clearable placeholder="">
            <el-option
              v-for="item in state.options.attribute_provider"
              :key="item"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <!-- Pid -->
        <el-form-item label="Pid:" prop="pid">
          <div class='flex jc-start ai-center form-one'>
            <el-input
              v-model="state.ruleForm.pid"
              placeholder="Please input"
              class="input-with-select"
            />
          </div>
        </el-form-item>
        <!-- Platform -->
        <el-form-item label="Platform:" prop="platform">
          <el-select filterable class='form-one' v-model="state.ruleForm.platform" clearable placeholder="">
            <el-option
              v-for="item in state.options.platform"
              :key="item"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <!-- Country -->
        <el-form-item label="Country:" prop="country">
          <el-select filterable class='form-one' v-model="state.ruleForm.country" clearable placeholder="">
            <el-option
              v-for="item in state.options.country"
              :key="item"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <!-- Revenue -->
        <el-form-item label="Revenue:" prop="revenue">
          <div class='flex jc-start ai-center form-one'>
            <el-input
              v-model="state.ruleForm.revenue"
              placeholder="Please input"
              class="input-with-select"
            />
          </div>
        </el-form-item>
        <!-- Manage Traffic -->
        <el-form-item label="Manage Traffic:" prop="traffic">
          <div class='form-one'>
            <div class="flex jc-end">
              <el-button type="primary" @click="addTrafficFn">Add</el-button>
            </div>
            <el-table class="mt-10" :data="state.manage_traffic" style="width: 100%" border>
              <el-table-column label="Pub Name" align="center">
                <template #default="scope">
                  <el-select filterable v-model="scope.row.pub_name" clearable placeholder="">
                    <el-option
                      v-for="item in state.options.pub_name"
                      :key="item"
                      :label="item"
                      :value="item">
                    </el-option>
                  </el-select>
                </template>
              </el-table-column>
              <el-table-column label="Payout" align="center">
                <template #default="scope">
                  <el-input
                    v-model="scope.row.payout"
                    type="number"
                    min="0"
                    placeholder="Please input"
                    class="input-with-select"
                  />
                </template>
              </el-table-column>
              <el-table-column label="Cap Daily" align="center">
                <template #default="scope">
                  <el-input
                    v-model="scope.row.cap_daily"
                    type="number"
                    min="0"
                    placeholder="Please input"
                    class="input-with-select"
                  />
                </template>
              </el-table-column>
              <el-table-column
                label="Operation"
                align="center"
                width="60px"
              >
                <template #default="scope">
                  <el-button type="danger" icon="Delete" circle></el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-form-item>
        <!-- Adv Tracking Link -->
        <el-form-item label="Adv Tracking Link:" prop="adv_tracking_link">
          <div class='flex jc-start ai-center form-one'>
            <el-input
              :rows="2"
              type="textarea"
              v-model="state.ruleForm.adv_tracking_link"
              placeholder="Please input"
              class="input-with-select"
            />
          </div>
        </el-form-item>
        <!-- Target CVR -->
        <el-form-item label="Target CVR:" prop="target_cvr">
          <div class='flex jc-start ai-center form-one'>
            <el-input
              v-model="state.ruleForm.target_cvr"
              placeholder="Please input"
              class="input-with-select"
            />
          </div>
        </el-form-item>
        <!-- Site Type -->
        <el-form-item label="Site Type:" prop="site_type">
          <el-select filterable class='form-one' v-model="state.ruleForm.site_type" clearable placeholder="">
            <el-option
              v-for="item in state.options.site_type"
              :key="item"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <!-- Site Value -->
        <el-form-item label="Site Type:"
          prop="site_value"
          :rules="state.ruleForm.site_type === 6 ? state.rules.s2s_tracking_link : state.rules.no_required"
        >
          <div class='flex jc-start ai-center form-one'>
            <el-input
              v-model="state.ruleForm.site_value"
              placeholder="Please input"
              class="input-with-select"
            />
          </div>
        </el-form-item>
        <!-- S2S Async -->
        <el-form-item label="S2S Async:" prop="is_s2s">
          <div class='flex jc-start ai-center form-one'>
            <el-switch
              v-model="state.ruleForm.is_s2s"
              :active-value="1"
              :inactive-value="2"
            />
          </div>
        </el-form-item>
        <!-- S2S Tracking Link -->
        <el-form-item label="S2S Tracking Link:"
          prop="s2s_tracking_link"
          :rules="state.ruleForm.is_s2s === 1 ? state.rules.s2s_tracking_link : state.rules.no_required"
        >
          <div class='flex jc-start ai-center form-one'>
            <el-input
              :rows="2"
              type="textarea"
              v-model="state.ruleForm.s2s_tracking_link"
              placeholder="Please input"
              class="input-with-select"
            />
          </div>
        </el-form-item>
        <!-- Preview URL -->
        <el-form-item label="Preview URL:"
          prop="app_url"
          :rules="state.ruleForm.is_s2s === 1 ? state.rules.app_url : state.rules.no_required"
        >
          <div class='flex jc-start ai-center form-one'>
            <el-input
              :rows="2"
              type="textarea"
              v-model="state.ruleForm.app_url"
              placeholder="Please input"
              class="input-with-select"
            />
          </div>
        </el-form-item>
        <!-- Description -->
        <el-form-item label="Description:" prop="description">
          <div class='flex jc-start ai-center form-one'>
            <el-input
              :rows="2"
              type="textarea"
              v-model="state.ruleForm.description"
              placeholder="Please input"
              class="input-with-select"
            />
          </div>
        </el-form-item>
        <!-- Pub Tracking Link -->
        <el-form-item label="Pub Tracking Link:" prop="pub_tracking_link">
          <div class='flex jc-start ai-center form-one'>
            <div v-for="item in handle_pub_tracking_link">
              <span>{{item}}</span>
            </div>
          </div>
        </el-form-item>
        <!-- end -->
      </div>
    </el-form>
    <!-- form -->
    <!-- footer -->
    <div class='w100 flex'>
      <el-button type="primary" @click='saveFun'>Save</el-button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { getCurrentInstance, reactive, toRef, toRefs, watch, watchEffect, onMounted, ref, computed } from 'vue'
import _ from 'lodash'
import {useRouter } from 'vue-router'
const router = useRouter()
const { proxy }: any = getCurrentInstance()
const message = {
  required: '此项必填'
}
interface dataType {
  offer: number
  adv_offer: string
  create_type: number
  channel: string
  channel_type: number
  adv_status: number
  status: number
  title: string
  pkg: string
  attribute_provider: string
  pid: string
  platform: number
  country: string
  revenue: number
  traffic: string
  pub: string
  payout: number
  cap_daily: number
  adtype: number
  update_date: string
  adv_tracking_link: string
  target_cvr: string
  cvr_status: number
  is_s2s: number
  s2s_tracking_link: string,
  app_url: string,
  site_type: number,
  site_value: string,
  api_status: number,
  description: string,
  pub_tracking_link: Array<string>,
}
const defaultRuleForm: dataType = {
  offer: 0,
  adv_offer: '',
  create_type: 1,
  channel: '',
  channel_type: 1,
  adv_status: 1,
  status: 1,
  title: '',
  pkg: '',
  attribute_provider: '',
  pid: '',
  platform: 1,
  country: '',
  revenue: 0,
  traffic: '',
  pub: '',
  payout: 0,
  cap_daily: 1,
  adtype: 38,
  update_date: '',
  adv_tracking_link: '',
  target_cvr: '',
  cvr_status: 2,
  is_s2s: 2,
  s2s_tracking_link: '',
  app_url: '',
  site_type: 0,
  site_value: '',
  api_status: 2,
  description: '',
  pub_tracking_link: [],
}
interface trafficObjType {

}
const trafficObj: trafficObjType = {
  id: 88
}
const trafficArr: Array<trafficObjType> = []
const state = reactive({
  options: {
    channel: [],
    platform: [],
    country: [],
    pub_name: [],
    site_type: [],
    attribute_provider: []
  },
  rules: {
    no_required: [
      { required: false}
    ],
    channel: [
      { required: true, message: message.required, trigger: ['blur', 'change'] }
    ],
    channel_type: [
      { required: true, message: message.required, trigger: ['blur', 'change'] }
    ],
    status: [
      { required: true, message: message.required, trigger: ['blur', 'change'] }
    ],
    title: [
      { required: true, message: message.required, trigger: ['blur', 'change'] }
    ],
    pkg: [
      { required: true, message: message.required, trigger: ['blur', 'change'] }
    ],
    platform: [
      { required: true, message: message.required, trigger: ['blur', 'change'] }
    ],
    country: [
      { required: true, message: message.required, trigger: ['blur', 'change'] }
    ],
    revenue: [
      { required: true, message: message.required, trigger: ['blur', 'change'] }
    ],
    adv_tracking_link: [
      { required: true, message: message.required, trigger: ['blur', 'change'] }
    ],
    site_type: [
      { required: true, message: message.required, trigger: ['blur', 'change'] }
    ],
    site_value: [
      { required: true, message: message.required, trigger: ['blur', 'change'] }
    ],
    is_s2s: [
      { required: true, message: message.required, trigger: ['blur', 'change'] }
    ],
    s2s_tracking_link: [
      { required: true, message: message.required, trigger: ['blur', 'change'] }
    ],
    app_url: [
      { required: true, message: message.required, trigger: ['blur', 'change'] }
    ],
  },
  ruleForm: defaultRuleForm,
  manage_traffic: trafficArr
})
let name: any = ref('')
let id: any = ref('')
const handle_pub_tracking_link = computed(() => {
  return state.ruleForm.pub_tracking_link
})
const addTrafficFn = () => {
  state.manage_traffic.push(trafficObj)
}
const saveFun = () => {
  proxy.$refs['ruleForm'].validate((valid: any) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!!')
      return false
    }
  })
}
onMounted(() => {
  id.value = router.currentRoute.value.params.id
  name.value = router.currentRoute.value.name
})
</script>