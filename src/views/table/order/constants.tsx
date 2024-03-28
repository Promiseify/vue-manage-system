export const columns = [
  {
    type: 'selection',
    span: 8,
    fixed: 'left',
  },
  {
    name: 'orderId',
    label: '用户ID',
    search: true,
    valueType: 'input',
    span: 8,
    attrs: {
      placeholder: '请输入用户ID',
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
        value: 2,
        label: '快递',
      },
    ],
    valueType: 'select',
  },
  {
    name: 'orderPrice',
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
    name: 'orderPlace',
    label: '取货地址',
    // search: true,
    valueType: 'input',
    span: 8,
    attrs: {
      placeholder: '请输入',
    },
  },
  {
    name: 'orderAddress',
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
    name: 'orderTime',
    label: '派送时间',
    align: 'right',

    span: 8,
  },
  {
    name: 'orderRemark',
    label: '备注',
    sorter: true,
    valueType: 'input',
    attrs: {
      placeholder: '请输入',
    },
  },
  {
    name: 'orderStatus',
    label: '订单状态',
    span: 4,
  },
  {
    name: 'orderUserId',
    label: '用户ID',
    span: 4,
  },
  {
    name: 'orderManId',
    label: '代收员ID',
    span: 4,
  },
  // {
  //   name: 'city',
  //   label: '城市',
  // },
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
