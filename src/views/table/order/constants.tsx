export const columns = [
  {
    type: 'selection',
    span: 8,
    fixed: 'left',
  },
  {
    name: 'orderId',
    label: '订单ID',
    search: true,
    valueType: 'input',
    span: 8,
    attrs: {
      placeholder: '请输入订单ID',
    },
  },
  {
    name: 'imageUrl',
    label: '订单截图',
    slot: true,
    width: 120,
  },
  {
    name: 'orderType',
    label: '订单类型',
    slot: true,
    search: true,
    span: 8,
    width: 100,
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
  },

  {
    name: 'orderPlace',
    label: '取货地址',
    width: 160,
  },
  {
    name: 'orderAddress',
    label: '收货地址',
    width: 160,
  },
  {
    name: 'orderTime',
    label: '派送时间',
    align: 'left',
    width: 160,
  },
  {
    name: 'orderRemark',
    label: '备注(大小、重量)',
    width: 150,
  },
  {
    name: 'orderStatus',
    label: '订单状态',
    width: 100,
    slot: true,
  },
  // {
  //   name: 'orderUserId',
  //   label: '用户ID',
  //   width: 80,
  // },
  {
    name: 'username',
    label: '用户名称',
    width: 100,
  },
  // {
  //   name: 'orderManId',
  //   label: '代取员ID',
  //   width: 100,
  //   search: true,
  //   valueType: 'input',
  //   span: 8,
  //   attrs: {
  //     placeholder: '请输入代取员ID',
  //   },
  // },
  {
    name: 'courierName',
    label: '代取员名称',
    width: 110,
  },
  {
    name: 'review',
    label: '审核状态',
    slot: true,
    width: 200,
  },
  {
    name: 'operation',
    slot: true,
    fixed: 'right',
    label: '操作',
    width: 170,
  },
]
