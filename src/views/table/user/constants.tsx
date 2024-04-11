
export const columns = [
  {
    type: 'selection',
    span: 8,
    fixed: 'left',
  },
  {
    name: 'userId',
    label: '用户ID',
    search: true,
    valueType: 'input',
    span: 8,
    attrs: {
      placeholder: '请输入用户ID',
    },
    width: 150,
  },
  {
    name: 'username',
    label: '用户名',
  },

  {
    name: 'password',
    label: '用户密码',
    width: 160,
  },
  {
    name: 'phone',
    label: '联系电话',
  },
  {
    name: 'roleId',
    label: '角色信息',
    slot: true,
    search: true,
    span: 8,
    options: [],
    valueType: 'select',
  },
  {
    name: 'operation',
    slot: true,
    fixed: 'right',
    label: '操作',
    width: 170,
  },
]
