<template>
  <div>
    <!-- form -->
    <el-form
      ref="ruleForm"
      enctype="multipart/form-data"
      :rules="state.rules"
      :model="state.ruleForm"
      label-width="150px"
      label-position="right"
      class="flex column"
      :disabled="type === 'edit' && state.ruleForm.is_del === 2"
    >
      <split-button title="基础信息"></split-button>
      <div class="content-con form-one flex column">
        <!-- 广告组名称 -->
        <el-form-item
          class="self-el-form-item"
          label="广告组名称:"
          prop="adv_group_name"
        >
          <el-input
            v-model.trim="state.ruleForm.adv_group_name"
            class="form-one"
            placeholder=""
          >
          </el-input>
        </el-form-item>
        <!-- RTA推广ID -->
        <el-form-item
          class="self-el-form-item"
          label="RTA推广ID:"
          prop="rta_id"
        >
          <el-input
            v-model.trim="state.ruleForm.rta_id"
            class="form-one"
            placeholder=""
          >
          </el-input>
        </el-form-item>
        <!-- 所属广告系列 -->
        <el-form-item
          class="self-el-form-item"
          label="所属广告系列:"
          prop="adv_series_id"
        >
          <el-select
            v-model="state.ruleForm.adv_series_id"
            filterable
            placeholder="请选择"
            class="form-one"
          >
            <el-option
              v-for="item in state.options.adv_series"
              :key="item.id"
              :label="item.adv_series_name"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <!-- 描述 -->
        <el-form-item
          class="self-el-form-item"
          label="描述:"
          prop="desc"
        >
          <el-input
            v-model.trim="state.ruleForm.desc"
            class="form-one"
            placeholder=""
            type="textarea"
          >
          </el-input>
        </el-form-item>
      </div>
      <split-button title="选择受众"></split-button>
      <div class="content-con form-one flex column">
        <!-- 受众包 -->
        <el-form-item
          class="self-el-form-item"
          label="受众包:"
          prop="adv_series_id"
        >
          <el-select
            v-model="state.ruleForm.target_pkg_ids"
            filterable
            placeholder="请选择"
            class="form-one"
          >
            <el-option
              v-for="item in state.options.target_pkg_ids"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <!-- 国家/地区 -->
        <div class="flex">
          <el-form-item
            label="国家/地区:"
            prop="country_type"
          >
            <el-select
              class="form-one-left"
              v-model="state.ruleForm.country_type"
              filterable
              placeholder=""
            >
              <el-option
                v-for="item in state.options.choice_type"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item
            label=""
            prop="country"
            class="self-el-form-item-no-label"
          >
            <el-select
              class="form-one-right"
              v-model="state.ruleForm.country"
              filterable
              clearable
              placeholder=""
              multiple
            >
              <el-option
                v-for="item in state.options.country"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
        </div>
        <!-- 操作系统 -->
        <el-form-item
          class="self-el-form-item"
          label="操作系统:"
          prop="system"
        >
          <el-checkbox-group v-model="state.ruleForm.system">
            <template v-for="item in state.options.system">
              <el-checkbox :label="item.value">{{item.label}}</el-checkbox>
            </template>
          </el-checkbox-group>
        </el-form-item>
        <!-- 终端类型 -->
        <el-form-item
          class="self-el-form-item"
          label="终端类型:"
          prop="terminal_type"
        >
          <el-checkbox-group v-model="state.ruleForm.terminal_type">
            <template v-for="item in state.options.terminal_type">
              <el-checkbox :label="item.value">{{item.label}}</el-checkbox>
            </template>
          </el-checkbox-group>
        </el-form-item>
        <!-- 网络连接 -->
        <el-form-item
          class="self-el-form-item"
          label="网络连接:"
          prop="network_type"
        >
          <el-checkbox-group v-model="state.ruleForm.network_type">
            <template v-for="item in state.options.network_type">
              <el-checkbox :label="item.value">{{item.label}}</el-checkbox>
            </template>
          </el-checkbox-group>
        </el-form-item>
      </div>
      <split-button title="选择媒体"></split-button>
      <div class="content-con form-one flex column">
        <!-- 流量类型 -->
        <el-form-item
          class="self-el-form-item" 
          label="流量类型:"
          prop="flow_type"
        >
          <el-checkbox-group v-model="state.ruleForm.flow_type">
            <template v-for="item in state.options.flow_type">
              <el-checkbox :label="item.value">{{item.label}}</el-checkbox>
            </template>
          </el-checkbox-group>
        </el-form-item>
        <!-- Adx -->
        <el-form-item
          class="self-el-form-item" 
          label="Adx:"
          prop="adx"
        >
          <el-select
            v-model="state.ruleForm.adx_type"
            filterable
            placeholder="请选择"
            class="form-one-left"
          >
            <el-option
              v-for="item in state.options.choice_type"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-select
            v-model="state.ruleForm.adx"
            filterable
            clearable
            placeholder=""
            multiple
            class="form-one-right"
          >
            <el-option
              v-for="item in state.options.adx"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <!-- 媒体分类 -->
        <el-form-item
          class="self-el-form-item" 
          label="媒体分类:"
          prop="media"
        >
          <el-select
            v-model="state.ruleForm.media_type"
            filterable
            placeholder="请选择"
            class="form-one-left"
          >
            <el-option
              v-for="item in state.options.choice_type"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-select
            v-model="state.ruleForm.media"
            filterable
            clearable
            placeholder=""
            multiple
            class="form-one-right"
          >
            <el-option
              v-for="item in state.options.media"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <!-- 自定义媒体列表 -->
        <el-form-item
          class="self-el-form-item" 
          label="自定义媒体列表:"
          prop="custem_media"
        >
          <el-select
            v-model="state.ruleForm.custem_media_type"
            filterable
            placeholder="请选择"
            class="form-one-left"
          >
            <el-option
              v-for="item in state.options.choice_type"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-select
            v-model="state.ruleForm.custem_media"
            filterable
            clearable
            placeholder=""
            multiple
            class="form-one-right"
          >
            <el-option
              v-for="item in state.options.custem_media"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <!-- PMP ID -->
        <el-form-item
          class="self-el-form-item"
          label="PMP ID:"
          prop="pmp_id"
        >
          <el-input
            v-model.trim="state.ruleForm.pmp_id"
            class="form-one"
            placeholder=""
            type="textarea"
          >
          </el-input>
        </el-form-item>
      </div>
      <split-button title="投放设置"></split-button>
      <div class="content-con form-one flex column">
        <!-- 推广周期 -->
        <el-form-item
          class="self-el-form-item"
          label="推广周期:"
          prop="promotion_cycle"
        >
          <el-radio-group class="form-one" v-model="state.ruleForm.promotion_cycle">
            <template v-for="item in state.options.promotion_cycle">
              <el-radio :label="item.value">{{item.label}}</el-radio>
            </template>
          </el-radio-group>
        </el-form-item>
        <el-form-item
          class="self-el-form-item"
          label=""
          prop="promotion_cycle_arr"
        >
          <!-- 日期组件 -->
          <el-date-picker
            v-model="state.ruleForm.promotion_cycle_arr"
            class="w100-super"
            type="daterange"
            unlink-panels
            format="YYYY-MM-DD"
            value-format="YYYY-MM-DD"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :clearable="false"
          ></el-date-picker>
        </el-form-item>
        
        <!-- 投放时段 -->
        <el-form-item
          class="self-el-form-item" 
          label="投放时段:"
          prop="launch_period_type"
        >
          <el-radio-group class="form-one" v-model="state.ruleForm.launch_period_type">
            <template v-for="item in state.options.launch_period_type">
              <el-radio :label="item.value">{{item.label}}</el-radio>
            </template>
          </el-radio-group>
        </el-form-item>
        <!-- 投放时段--天 -->
        <el-form-item
          class="self-el-form-item"
          label=""
          prop="launch_period_day"
        >
          <!-- 周 -->
          <el-checkbox-group class="w100-super" v-model="state.ruleForm.launch_period_day">
            <template v-for="item in state.options.launch_period_day">
              <el-checkbox :label="item.value">{{item.label}}</el-checkbox>
            </template>
          </el-checkbox-group>

        </el-form-item>
        <!-- 投放时段--小时 -->
        <el-form-item
          class="self-el-form-item"
          label=""
          prop="launch_period_hour"
        >
          <!-- 小时 -->
          <el-time-picker
            class="w100-super"
            v-model="state.ruleForm.launch_period_hour"
            is-range
            format="HH:mm"
            value-format="HH:mm"
            range-separator="至"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
          />
        </el-form-item>
        <!-- 频次控制 -->
        <el-form-item
          class="self-el-form-item" 
          label="频次控制:"
          prop="frequency_control_type"
        >
          <el-radio-group class="form-one" v-model="state.ruleForm.frequency_control_type">
            <template v-for="item in state.options.frequency_control_type">
              <el-radio :label="item.value">{{item.label}}</el-radio>
            </template>
          </el-radio-group>
        </el-form-item>
        <div class="flex">
          <el-form-item
            class="self-el-form-item" 
            label=""
            prop="frequency_control_type"
          >
            <el-select
              v-model="state.ruleForm.frequency_control_people_type"
              filterable
              clearable
              placeholder=""
              class="form-one-left"
            >
              <el-option
                v-for="item in state.options.frequency_control_people_type"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item
            class="self-el-form-item-no-label" 
            label=""
            prop="frequency_control_num"
          >
            <div class="form-one-right flex jc-between">
              <el-input
                v-model.trim="state.ruleForm.frequency_control_num"
                placeholder=""
                type="number"
              ></el-input>
              <span class="center" style="width:50px;">次/日</span>
            </div>
          </el-form-item>
        </div>
        <!-- 投放速度 -->
        <el-form-item
          class="self-el-form-item" 
          label="投放速度:"
          prop="release_speed"
        >
          <el-radio-group class="form-one" v-model="state.ruleForm.release_speed">
            <template v-for="item in state.options.release_speed">
              <el-radio :label="item.value">{{item.label}}</el-radio>
            </template>
          </el-radio-group>
        </el-form-item>
      </div>
      <split-button title="预算与出价"></split-button>
      <div class="content-con form-one flex column">
        <!-- 广告预算 -->
        <el-form-item
          class="self-el-form-item"
          label="广告日预算($):"
          prop="speed_limit_day"
        >
          <el-input
            v-model.trim="state.ruleForm.speed_limit_day"
            class="form-one"
            placeholder=""
          >
          </el-input>
        </el-form-item>
        <!-- 付费方式  -->
        <el-form-item
          class="self-el-form-item" 
          label="付费方式"
          prop="payment_method"
        >
          <el-select
            v-model="state.ruleForm.payment_method"
            filterable
            placeholder=""
            class="form-one"
          >
            <el-option
              v-for="item in state.options.payment_method"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <!-- 单价类型 -->
        <el-form-item
          class="self-el-form-item" 
          label="单价类型:"
          prop="price_method"
        >
          <el-radio-group class="form-one" v-model="state.ruleForm.price_method">
            <template v-for="item in state.options.price_method">
              <el-radio :label="item.value">{{item.label}}</el-radio>
            </template>
          </el-radio-group>
        </el-form-item>
        <!-- 出价方式为分adx出价时 -->
        <el-form-item
          class="self-el-form-item" 
          label=""
          prop="adx_price"
        >
          <Adx
            class="w100"
            ref="traffic"
            v-model:list="handleChoiceAdx"
            @kk="saveAdxPrice"
          ></Adx>
        </el-form-item>
        <!-- 出价方式 -->
        <el-form-item
          class="self-el-form-item" 
          label="出价方式:"
          prop="price_type"
        >
          <el-radio-group class="form-one" v-model="state.ruleForm.price_type">
            <template v-for="item in state.options.price_type">
              <el-radio :label="item.value">{{item.label}}</el-radio>
            </template>
          </el-radio-group>
        </el-form-item>
      </div>
    </el-form>
    <!-- form -->
    <!-- footer -->
    <div class="w100 flex">
      <el-button
        type="primary"
        @click="saveFun"
      >
        确认
      </el-button>
      <el-button
        type="primary"
        @click="cancelFn"
      >
        取消
      </el-button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import optionsSetting from '@/self-options-setting'
import { ApiAdGroupCreate, ApiGetAdGroupOne, ApiAdGroupEdit, ApiGetAdGroupList, ApiGetAdxList, ApiGetAdSeriesList } from '@/api/dsp-adcontrol'
import { ApiGetAdvertiserList } from '@/api/dsp-advertiser'
import { messageFun } from '@/utils/message'
import splitButton from '@/components/Self/SplitButton'
import useUtils from '@/hooks/self/useUtils'
import {
  handleAjaxDataDelNo2KeyFn,
  handleAjaxNumberKeyFn,
  handleAjaxArrayKeyFn,
  handleOneDataArrayFn,
  handleAjaxEmptyKeyFn
} from '@/utils/new-format'
import { selfJudgeStringLength, selfValidatorIsInteger } from '@/utils/validate.ts'
import validator from 'validator';
import _, { isArguments } from 'lodash'
import { getSectionTime, getSectionAnyTime, choiceDefaultProduct } from '@/utils/format'
import Adx from './components/adx.vue'
import { Console } from 'console'
const {
  choice_type,
  system,
  terminal_type,
  network_type,
  flow_type,
  week
} = optionsSetting

const { getRouterData, getCommonCountryList, goNewUrl } = useUtils()
let { proxy }: any = getCurrentInstance()

const message = {
  required: '此项必填'
}

let type: any = ref('create')

type ruleFormType =  {
  id: number | undefined
  // 广告组名称
  adv_group_name: string
  // RTA推广ID
  rta_id: string
  // 所属广告系列
  adv_series_id: number | undefined
  desc: string
  // 受众包
  target_pkg_ids: string
  // 国家/地区类型：1包含，2排除
  country_type: number | undefined
  country: string
  // 操作系统：1：android,2:ios, 3: windows, 4:macOS, 5:其他， 6:未知
  system: Array<number>
  // 终端类型：1手机，2平板，3pc,4其他，5未知
  terminal_type: Array<number>
  // 网络链接：1:wifi, 2: 移动网络，3： 其他，4： 未知
  network_type: Array<number>
  // 流量类型： 1： in-APP, 2: web
  flow_type: Array<number>
  // adx类型： 1： 包含，2： 排除
  adx_type: number | undefined
  // adx
  adx: Array<string>
  // 媒体分类
  media_type: number | undefined
  // 媒体
  media: Array<string>
  // 自定义媒体类型： 1： 包含，2： 排除
  custem_media_type: number | undefined
  // 自定义媒体
  custem_media: Array<string>
  pmp_id: string
  // 推广周期： 1：从现在开始长期有效，2：限定周期
  promotion_cycle: number | undefined
  promotion_cycle_arr: Array<string>
  // 推广周期--开始时间
  promotion_cycle_st: string
  // 推广周期--结束时间
  promotion_cycle_et: string
  // 投放时段: 1:全天；2：限时
  launch_period_type: number | undefined
  // 投放时段--天
  launch_period_day: Array<number>
  // 投放时段--小时
  launch_period_hour: Array<string>
  // 频次控制类型： 1：不限频次，2：限定频次
  frequency_control_type: number | undefined
  // 频次控制--行为类型： 1： 单人曝光频次，2：单人点击频次
  frequency_control_people_type: number | undefined
  // 频次控制--每日次数
  frequency_control_num: number | undefined
  // 投放速度： 1: 匀速，2： 加速
  release_speed: number | undefined
  // 日预算
  speed_limit_day: number | undefined
  // 付费方式： 1： CPM
  payment_method: number | undefined
  // 出价方式： 1：统一出价，2：adx出价
  price_method: number | undefined
  // 分adx出价；json数据
  adx_price: Array<any>
  // 出价方式: 1: 自动出价，2：手动出价
  price_type: number | undefined
  is_del: number | undefined
}

const defaultRuleForm: ruleFormType = {
  id: void 0,
  // 广告组名称
  adv_group_name: '',
  // RTA推广ID
  rta_id: '',
  // 所属广告系列
  adv_series_id: void 0,
  desc: '',
  // 受众包
  target_pkg_ids: '',
  // 国家/地区类型：1包含，2排除
  country_type: 1,
  country: '',
  // 操作系统：1：android,2:ios, 3: windows, 4:macOS, 5:其他， 6:未知
  system: [1],
  // 终端类型：1手机，2平板，3pc,4其他，5未知
  terminal_type: [1, 2],
  // 网络链接：1:wifi, 2: 移动网络，3： 其他，4： 未知
  network_type: [1,2,3],
  // 流量类型： 1： in-APP, 2: web
  flow_type: [1],
  // adx类型： 1： 包含，2： 排除
  adx_type: 1,
  adx: [],
  // 媒体分类类型： 1： 包含，2： 排除
  media_type: 1,
  // 媒体分类
  media: [],
  // 自定义媒体类型： 1： 包含，2： 排除
  custem_media_type: 1,
  // 自定义媒体
  custem_media: [],
  pmp_id: '',
  // 推广周期： 1：从现在开始长期有效，2：限定周期
  promotion_cycle: 2,
  promotion_cycle_arr: [],
  // 推广周期--开始时间
  promotion_cycle_st: '',
  // 推广周期--结束时间
  promotion_cycle_et: '',
  // 投放时段: 1:全天；2：限时
  launch_period_type: 2,
  // 投放时段--天
  launch_period_day: [],
  // 投放时段--小时
  launch_period_hour: [],
  // 频次控制类型： 1：不限频次，2：限定频次
  frequency_control_type: 2,
  // 频次控制--行为类型： 1： 单人曝光频次，2：单人点击频次
  frequency_control_people_type: 2,
  // 频次控制--每日次数
  frequency_control_num: 6,
  // 投放速度： 1: 匀速，2： 加速
  release_speed: 1,
  // 日预算
  speed_limit_day: void 0,
  // 付费方式： 1： CPM
  payment_method: 1,
  // 出价方式： 1：统一出价，2：adx出价
  price_method: 2,
  // 分adx出价；json数据
  adx_price: [],
  // 出价方式: 1: 自动出价，2：手动出价
  price_type: 1,
  is_del: void 0,
}

// selfJudgeStringLength
const validatorStrLenValue = (rule: any, value: string, callback: (arg0: Error | undefined) => void) => {
  const { max } = rule
  if (!selfJudgeStringLength(value, max)) {
    callback(new Error('值的长度不能大于${}'))
  } else {
    callback(undefined)
  }
}
const validatorEmail = (rule: any, value: string, callback: (arg0: Error | undefined) => void) => {
  if (!validator.isEmail(value)) {
    callback(new Error('必须为邮箱格式'))
  } else {
    callback(undefined)
  }
}

const validatorUrl = (rule: any, value: string, callback: (arg0: Error | undefined) => void) => {
  if (value && !validator.isURL(value)) {
    callback(new Error('必须为网址格式'))
  } else {
    callback(undefined)
  }
}

const validatorMaxQps = (rule: any, value: string, callback: (arg0: Error | undefined) => void) => {
  if (value && !selfValidatorIsInteger(value)) {
    callback(new Error('必须为整数'))
  } else {
    callback(undefined)
  }
}

const state = reactive({
  ruleForm: defaultRuleForm,
  rules: {
    adv_group_name: [
      {required: true, message: message.required, trigger: ['blur', 'change']},
    ],
    
  },
  options: {
    choice_type,
    system,
    terminal_type,
    network_type,
    flow_type,
    country: [
      {value: '', label: ''}
    ],
    // 所属广告系列
    adv_series: [
      {
        id: '',
        adv_series_name: ''
      }
    ],
    // 受众包
    target_pkg_ids: [
      {value: '', label: ''}
    ],
    // adx
    adx: [
      {id: '', name: '', price: '', rate: ''}
    ],
    // 媒体分类
    media: [
      {value: '', label: ''}
    ],
    // 自定义媒体列表
    custem_media: [
      {value: '', label: ''}
    ],
    // 推广周期
    promotion_cycle: [
      {value: 1, label: '从现在开始长期有效'},
      {value: 2, label: '限定周期'}
    ],
    // 投放时段
    launch_period_type: [
      {value: 1, label: '全天投放'},
      {value: 2, label: '限定时间段'}
    ],
    // 频次控制类型
    frequency_control_type: [
      {value: 1, label: '不限频次'},
      {value: 2, label: '限定频次'}
    ],
    // 频次控制--行为类型
    frequency_control_people_type: [
      {value: 1, label: '单人曝光频次'},
      {value: 2, label: '单人点击频次'}
    ],
    // 投放速度
    release_speed: [
      {value: 1, label: '匀速投放-排期内匀速展示广告（推荐）'},
      {value: 2, label: '加速投放-尽快展示广告'}
    ],
    // 付费方式
    payment_method: [
      {value: 1, label: 'CPM'},
    ],
    // 单价
    price_method: [
      {value: 1, label: '统一出价'},
      {value: 2, label: '分adx出价'}
    ],
    // 出价方式
    price_type: [
      {value: 1, label: '自动出价'},
      {value: 2, label: '手动出价'}
    ],
    // 周
    launch_period_day: week,
    advertiser: [
      {value: '', label: ''}
    ]
    
  }
})

const saveFun = () => {
  proxy.$refs['ruleForm'].validate((valid: boolean) => {
    console.log(valid)
    if (valid) {
      console.log('submit!')
      submitFn()
    } else {
      console.log('error submit!!')
      return false
    }
  })
}

// 为数字的字段
const numberKeyArr = ['id', 'adv_id', 'adv_series_type', 'adv_series_budget', 'speed_limit_day']

// 数组转换为字符串
const arrayKeyArr = ['adx', 'system', 'terminal_type', 'network_type', 'flow_type', 'launch_period_day', 'launch_period_hour', 'country', 'media', 'custem_media']

const setDataFn = async (id) => {
  // 获取单个
  const res = await ApiGetAdGroupOne(id)
  const {data: result} = res
  result.country = result.country ? result.country.toString() : ''
  result.promotion_cycle_arr = [result.promotion_cycle_st, result.promotion_cycle_et]
  result.adx_price = JSON.parse(result.adx_price)
  handleAdxDataFn(result.adx_price)
  let finalResult = handleOneDataArrayFn(result, arrayKeyArr)
  state.ruleForm = {
    ...state.ruleForm,
    ...finalResult
  }
}

const handleAdxDataFn = (data) => {
  state.options.adx = state.options.adx.map(ele => {
    let obj = data.find(o => {
      return o.id == ele.id
    })
    if (obj) {
      ele = {
        ...ele,
        ...obj
      }
    } else {
      ele.price = ''
      ele.rate = ''
    }
    return ele
  })
}

const submitFn = async () => {
  let baseData = toRaw(state.ruleForm)
  let ajaxData: any = _.cloneDeep(baseData)
  if (ajaxData.promotion_cycle_arr && ajaxData.promotion_cycle_arr.length !== 0) {
    ajaxData.promotion_cycle_st = ajaxData.promotion_cycle_arr[0]
    ajaxData.promotion_cycle_et = ajaxData.promotion_cycle_arr[1]
    delete ajaxData.promotion_cycle_arr
  }
  let adx_json = _.cloneDeep(ajaxData.adx_price)
  ajaxData.adx_price = JSON.stringify(adx_json)
  // 先删除为空的字段
  ajaxData = handleAjaxDataDelNo2KeyFn(ajaxData)
  ajaxData = handleAjaxNumberKeyFn(ajaxData, numberKeyArr)
  ajaxData = handleAjaxArrayKeyFn(ajaxData, arrayKeyArr)
  console.log(ajaxData)
  // return false
  if (type.value === 'create') {
    delete ajaxData.id
    const res = await ApiAdGroupCreate(ajaxData)
    if(messageFun(res)) {
      cancelFn()
    }
  }
  if (type.value === 'edit') {
    const res = await ApiAdGroupEdit(ajaxData)
    if(messageFun(res)) {
      cancelFn()
    }
  }
}

const saveAdxPrice = (data) => {
  state.ruleForm.adx_price = data
}

const cancelFn = () => {
  let url = '/adcontrol/adgroup/list'
  goNewUrl({
    url: url
  })
}

const getConfig = () => {
  let ajaxData = {
    limit: 10000,
    page: 1
  }
  return Promise.all([getCommonCountryList(), ApiGetAdvertiserList(ajaxData), ApiGetAdSeriesList(ajaxData), ApiGetAdxList()]).then(data => {
    let countryData = data[0]
    let advertiserData = data[1]
    let advSeriesData = data[2]
    let adxData = data[3]
    state.options.country = countryData
    state.options.advertiser = advertiserData.data.data
    state.options.adv_series = advSeriesData.data.data
    state.options.adx = adxData.data.data
  })

}

const handleChoiceAdx = computed(() => {
  let choice = state.ruleForm.adx
  let arr: any = state.options.adx.filter(ele => {
    return choice.includes(ele.id)
  })
  return arr
})

const init = async () => {
  console.info('init')
  let { query, params } = getRouterData()
  type.value = query.type?.toString() ?? ''
  console.log(type.value)
  await getConfig()
  if (type.value === 'create') {
    state.ruleForm = _.cloneDeep(defaultRuleForm)
  }
  if (type.value === 'edit') {
    const { id } = params
    setDataFn(id)
  }
}

onMounted(() => {
  init()
})

</script>
<style scoped>
.avatar-uploader .avatar {
  width: 50px;
  height: 50px;
  display: block;
}
</style>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 50px;
  height: 50px;
  text-align: center;
}
</style>
