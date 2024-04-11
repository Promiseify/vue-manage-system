
export const columns = [
  {
    type: 'selection',
    span: 8,
    fixed: 'left',
  },
  {
    name: 'walletId',
    label: '钱包ID',
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
    name: 'balance',
    label: '余额',
  },

  {
    name: 'currency',
    label: '货币单位',
    search: true,
    valueType: 'select',
    span: 8,
    options: [
      {
        value: 'CNY',
        label: 'CNY',
      },
      {
        value: 'HKD',
        label: 'HKD',
      },
      {
        value: 'USD',
        label: 'USD',
      },
      {
        value: 'EUR',
        label: 'EUR',
      },
    ],
  },
  {
    name: 'operation',
    slot: true,
    fixed: 'right',
    label: '操作',
    width: 170,
  },
]
