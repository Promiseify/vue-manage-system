
export const columns = [
  {
    type: 'selection',
    span: 8,
    fixed: 'left',
  },
  {
    name: 'feedbackId',
    label: '反馈ID',
    width: 150,
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
    name: 'feedbackContent',
    label: '反馈内容',
  },

  {
    name: 'feedbackStatus',
    label: '反馈状态',
    search: true,
    slot: true,
    valueType: 'select',
    span: 8,
    options: [
      {
        value: '已处理',
        label: '已处理',
      },
      {
        value: '待处理',
        label: '待处理',
      },
    ],
  },
  {
    name: 'feedbackTime',
    label: '反馈时间',
  },
  {
    name: 'operation',
    slot: true,
    fixed: 'right',
    label: '操作',
    width: 170,
  },
]
