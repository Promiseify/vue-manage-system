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
  },

  {
    name: 'orderPlace',
    label: '取货地址',
    width: 160,
  },
  {
    name: 'orderAddress',
    label: '地址',
  },
  {
    name: 'orderTime',
    label: '派送时间',
    align: 'right',
    width: 160,
  },
  {
    name: 'orderRemark',
    label: '备注',
    width: 160,
  },
  {
    name: 'orderStatus',
    label: '订单状态',
    width: 80,
  },
  {
    name: 'orderUserId',
    label: '用户ID',
    width: 80,
  },
  {
    name: 'orderManId',
    label: '代收员ID',
    width: 100,
    search: true,
    valueType: 'input',
    span: 8,
    attrs: {
      placeholder: '请输入代收员ID',
    },
  },
  {
    name: 'operation',
    slot: true,
    fixed: 'right',
    label: '操作',
    width: 170,
  },
]
