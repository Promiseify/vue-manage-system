export const columns = [
  {
    type: 'selection',
    span: 8,
    fixed: 'left',
  },
  {
    name: 'courierId',
    label: '代取员ID',
    search: true,
    valueType: 'input',
    span: 8,
    attrs: {
      placeholder: '请输入代取员ID',
    },
    width: 160,
  },
  {
    name: 'userId',
    label: '用户ID',
    width: 160,
  },
  {
    name: 'username',
    label: '用户名',
    width: 160,
  },
  {
    name: 'phone',
    label: '联系方式',
    width: 160,
  },
  {
    name: 'performanceRating',
    label: '评价分数',
    search: true,
    valueType: 'input',
    span: 8,
    attrs: {
      placeholder: '请输入评价分数',
    },
    width: 160,
  },

  {
    name: 'workSchedule',
    label: '工作时间',
    width: 200,
  },
  {
    name: 'serviceRange',
    label: '服务范围',
  },
  // {
  //   name: 'review',
  //   label: '审核状态',
  //   slot: true,
  //   width: 200,
  // },
  {
    name: 'operation',
    slot: true,
    fixed: 'right',
    label: '操作',
    width: 170,
  },
]
