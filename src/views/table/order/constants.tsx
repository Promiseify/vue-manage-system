export const columns = [
  {
    type: 'selection',
    span: 8,
    fixed: 'left',
  },
  {
    name: 'name',
    label: '用户名称',
    search: true,
    valueType: 'input',
    span: 8,
    attrs: {
      placeholder: '请输入用户名称',
    },
  },
  {
    name: 'orderType',
    label: '订单类型',
    slot: true,
    search: true,
    span: 8,
    options: [
      {
        value: 1,
        label: '外卖',
      },
      {
        value: 0,
        label: '快递',
      },
    ],
    valueType: 'select',
  },
  {
    name: 'price',
    label: '单价',
    search: true,
    sortable: true,
    valueType: 'input',
    span: 8,
    attrs: {
      placeholder: '请输入价格',
    },
  },
  
  {
    name: 'admin',
    label: '账号',
    // search: true,
    valueType: 'input',
    span: 8,
    attrs: {
      placeholder: '请输入',
    },
  },
  {
    name: 'address',
    label: '地址',
    search: true,
    valueType: 'input',
    width: 180,
    span: 8,
    attrs: {
      placeholder: '请输入',
    },
  },
  {
    name: 'time',
    label: '派送时间',
    align: 'right',

    span: 8,
  },
  {
    name: 'date',
    label: '日期',
    sorter: true,
    search: true,
    valueType: 'input',
    span: 8,
    attrs: {
      placeholder: '请输入',
    },
  },
  // {
  //   name: 'province',
  //   label: '省份',
  // },
  {
    name: 'city',
    label: '城市',
  },
  // {
  //   name: 'zip',
  //   label: '邮编',
  // },
  {
    name: 'operation',
    slot: true,
    fixed: 'right',
    label: '操作',
    width: 120,
  },
]
