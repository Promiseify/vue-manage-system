<template>
  <div ref="appContainer" class="app-container">
    <PropTable :loading="loading" :columns="baseColumns" :data="list" @selection-change="selectionChange" @reset="reset"
      @on-submit="onSubmit">
      <template #btn>
        <div style="display: flex; justify-content: flex-end">
          <el-button type="primary" @click="add">
            <el-icon>
              <plus />
            </el-icon> 添加
          </el-button>
          <el-button type="danger" @click="batchDelete">
            <el-icon>
              <delete />
            </el-icon> 删除
          </el-button>
        </div>
      </template>
      <template #roleId="scope">{{ roleDict(scope.row.roleId) }}</template>
      <template #operation="scope">
        <el-button type="primary" size="small" icon="Edit" @click="edit(scope.row)"> 编辑 </el-button>
        <el-button type="danger" size="small" icon="Delete" @click="del(scope.row)"> 删除 </el-button>
      </template>
    </PropTable>

    <el-dialog v-model="dialogVisible" :title="title" width="50%">
      <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm"
        :size="formSize">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username" />
        </el-form-item>
        <el-form-item label="用户密码" prop="password">
          <el-input v-model="ruleForm.password" />
        </el-form-item>
        <el-form-item label="联系电话" prop="phone">
          <el-input v-model="ruleForm.phone" />
        </el-form-item>
        <el-form-item label="角色信息" prop="roleId">
          <el-radio-group v-model="ruleForm.roleId">
            <el-radio :value="1">用户</el-radio>
            <el-radio :value="2">代取员</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleClose()">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script lang="ts" setup name="user">
import { ref, reactive, onMounted, nextTick } from 'vue'
// import dayjs from 'dayjs'
import axios from 'axios'

import { ElMessage, ElMessageBox } from 'element-plus'
import type { FormInstance } from 'element-plus'
import PropTable from '@/components/Table/PropTable/index.vue'
import { columns } from './constants'

const loading = ref(true)
const appContainer = ref(null)
let list = ref([])
let baseColumns = reactive(columns)

axios("http://localhost:10081/user/match").then(res => {
  if (res.data.code == 200) {
    list = res.data.data
  }
})

const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
  userId: null,
  username: null,
  password: null,
  phone: null,
  roleId: null
})

const rules = reactive({
  
})

const dialogVisible = ref(false)
const title = ref('新增')
const rowObj = ref({})
const selectObj = ref([])

// 判断订单类型
const roleDict = (roleId) => {
  switch (roleId) {
    case 1:
      return "用户"
    case 2:
      return "代取员"
  }
}

const handleClose = async () => {
  await ruleFormRef.value.validate((valid, fields) => {
    if (valid) {
      let obj = {
        ...ruleForm,
      }
      if (title.value === '新增') {
        axios({
          method: 'post',
          url: 'http://localhost:10081/user/',
          data: obj
        }).then(res => {
          if (res.data.code == 200) {
            ElMessage.success('添加成功!')
            onSubmit({});
          }
        })
      } else {
        axios({
          method: 'put',
          url: 'http://localhost:10081/user/' + obj.userId,
          data: obj
        }).then(res => {
          if (res.data.code == 200) {
            ElMessage.success('修改成功!')
            onSubmit({});
          }
        })
      }
      dialogVisible.value = false
    } else {
      console.log('error submit!', fields)
    }
  })
}

const add = () => {
  title.value = '新增'
  dialogVisible.value = true

  Object.keys(ruleForm).forEach(key => {
    ruleForm[key] = null;
  });
}

const batchDelete = () => {
  if (!selectObj.value.length) {
    return ElMessage.error('未选中任何行')
  }
  ElMessageBox.confirm('你确定要删除选中项吗?', '温馨提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
    draggable: true,
  })
    .then(() => {
      const userIds = selectObj.value.map(item => item.userId)
      axios({
        method: 'delete',
        url: 'http://localhost:10081/user/deleteUsers',
        data: userIds
      }).then(res => {
        if (res.data.code == 200) {
          ElMessage.success(res.data.msg)
          onSubmit({});
        }
      })
    })
    .catch(() => { })
}
const selectionChange = (val) => {
  selectObj.value = val
}

const edit = (row) => {
  title.value = '编辑'
  rowObj.value = row
  dialogVisible.value = true
  ruleForm.userId = row.userId
  ruleForm.username = row.username
  ruleForm.password = row.password
  ruleForm.phone = row.phone
  ruleForm.roleId = row.roleId
}

const del = (row) => {
  ElMessageBox.confirm('你确定要删除当前项吗?', '温馨提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
    draggable: true,
  })
    .then(() => {
      axios({
        method: 'delete',
        url: 'http://localhost:10081/user/' + row.userId,
      }).then(res => {
        const { data } = res
        if (data.code == 200) {
          ElMessage.success('删除成功')
          onSubmit({});
        }
      })
    })
    .catch(() => { })
}

const reset = () => {
  onSubmit({})
  ElMessage.success('重置成功')
}

const onSubmit = (val) => {
  loading.value = true

  axios.get("http://localhost:10081/user/match", {
    params: val
  }).then(res => {
    if (res.data.code == 200) {
      list = res.data.data
    }
  })
  setTimeout(() => {
    loading.value = false
  }, 500);
}

onMounted(() => {
  nextTick(() => {
    // let data = appContainer.value.
  })
  setTimeout(() => {
    loading.value = false
  }, 500)
})
</script>

<style scoped>
.edit-input {
  padding-right: 100px;
}

.app-container {
  flex: 1;
  display: flex;
  width: 100%;
  height: 100%;
  padding: 16px;
  box-sizing: border-box;
}

.cancel-btn {
  position: absolute;
  right: 15px;
  top: 10px;
}
</style>
