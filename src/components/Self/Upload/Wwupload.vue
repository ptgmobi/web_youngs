<template>
  <div class="upload-container">
    <el-upload
      v-loading="loading"
      class="w100"
      action=""
      :file-list="fileList"
      :http-request="uploadFileFun"
      :on-progress="handleProgress"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :on-success="handleSuccess"
      :on-error="handleError"
      :on-exceed="handleExceed"
      :limit="limit"
      :multiple="multiple"
      :accept="accept"
      drag
      list-type=""
    >
      <i class="el-icon-upload" />
      <div class="el-upload__text">
        将文件拖到此处，或
        <em>点击上传</em>
      </div>
      <div
        slot="tip"
        class="el-upload__tip"
      >
        <slot name="content" />
      </div>
    </el-upload>
  </div>
</template>

<script>
export default {
  name: 'WwUpload',
  props: {
    // 上传地址接口函数
    uploadFn: {
      default() {
        return () => {}
      },
      require: true,
      type: Function
    },
    // 上传文件名称
    fileName: {
      default: 'image',
      require: true,
      type: String
    },
    // 接受上传的文件类型
    accept: {
      default: 'image',
      require: true,
      type: String
    },
    // 最大允许上传个数
    limit: {
      default: 1,
      require: false,
      type: Number
    },
    // 文件列表
    fileList: {
      default() {
        return []
      },
      require: false,
      type: Array
    },
    // 是否支持多选文件
    multiple: {
      default: false,
      require: false,
      type: Boolean
    },
    // 上传文件限制大小
    size: {
      default: 1024,
      require: false,
      type: Number
    }
  },
  data() {
    return {
      loading: false,
      list: []
    }
  },
  methods: {
    // 覆盖默认的上传行为，可以自定义上传的实现
    async uploadFileFun(fileData) {
      const size = fileData?.file?.size
      const sizeM = this.size * 1024 ** 2
      if (size < sizeM) {
        const fd = new FormData()
        fd.append(this.fileName, fileData.file)
        fileData.onProgress(this)
        try {
          const data = await this.uploadFn(fd)
          fileData.onSuccess(data)
        } catch (e) {
          fileData.onError(e)
        }
      } else {
        this.$message({
          message: '上传文件超出限制大小',
          type: 'error'
        })
      }
    },
    // 上传文件时的钩子
    handleProgress(event, file, fileList) {
      this.loading = true
      return event
    },
    // 点击文件列表中已上传的文件时的钩子
    handlePreview(file) {
      // console.log(file)
    },
    // 文件列表移除文件时的钩子
    handleRemove(file, fileList) {
      this.$emit('update:fileList', fileList)
      this.$emit('updateEventState', 'remove', fileList)
    },
    // 文件上传成功时的钩子
    handleSuccess(response, file, fileList) {
      this.loading = false
      this.$emit('update:fileList', fileList)
      this.$emit('updateEventState', 'success', fileList)
    },
    // 上传失败
    handleError(err, file, fileList) {
      console.log(err)
      this.loading = false
      this.$emit('updateEventState', 'error', fileList)
    },
    // 文件超出个数限制时的钩子
    handleExceed(files, fileList) {
      // console.log(files)
      // console.log(fileList)
      this.$message({
        message: '请删除后重新上传',
        type: 'error'
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
