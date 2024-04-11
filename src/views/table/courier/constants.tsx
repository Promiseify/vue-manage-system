export const columns = [
  {
    type: 'selection',
    span: 8,
    fixed: 'left',
  },
  {
    name: 'courierId',
    label: '代收员ID',
    search: true,
    valueType: 'input',
    span: 8,
    attrs: {
      placeholder: '请输入代收员ID',
    },
    width: 160,
  },
  {
    name: 'userId',
    label: '用户ID',
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
    width: 400,
  },
  {
    name: 'serviceRange',
    label: '服务范围',
  },
  {
    name: 'operation',
    slot: true,
    fixed: 'right',
    label: '操作',
    width: 170,
  },
]