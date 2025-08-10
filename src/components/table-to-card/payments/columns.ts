import type { CellContext, ColumnDef, HeaderContext, SortingColumn } from '@tanstack/vue-table'
import type { Payment } from '../dummy-data'
import Button from 'components/ui/button/Button.vue'
import { Checkbox } from 'components/ui/checkbox'
import { ArrowDown, ArrowUp, ArrowUpDown } from 'lucide-vue-next'
import { formatPhoneNumber } from 'utils/formatPhoneNumber'
import { h } from 'vue'
import DropdownAction from './data-table-dropdown.vue'

const formatActionsColumn = (props: CellContext<Payment, unknown>) => {
  const payment = props.row.original

  return h('div', { class: 'relative' }, h(DropdownAction, {
    payment,
    onExpand: props.row.toggleExpanded,
  }))
}

const getIconBasedOnSortingState = (val: ReturnType<SortingColumn<Payment>['getIsSorted']>) => {
  if (val === 'asc')
    return ArrowUp
  if (val === 'desc')
    return ArrowDown
  return ArrowUpDown
}

const formatHeader = (props: HeaderContext<Payment, unknown>, label: string) => {
  const { column } = props

  return h(Button, {
    variant: 'ghost',
    onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
  }, () => [label, h(getIconBasedOnSortingState(column.getIsSorted()), { class: 'ml-2 h-4 w-4' })])
}

const formatEmailColumn = (props: CellContext<Payment, unknown>) => {
  const { email } = props?.row?.original

  return h('a', { href: `mailto:${email}`, class: 'text-emerald-500' }, email)
}

const formatPhoneColumn = (props: CellContext<Payment, unknown>) => {
  const { row } = props
  const phone = row.original.phone

  const value = formatPhoneNumber(phone)

  return h('a', { href: `tel:${phone}`, class: 'text-emerald-500' }, value)
}

export const columns: ColumnDef<Payment>[] = [
  {
    id: 'select',
    header: ({ table }) => h(Checkbox, {
      'modelValue': table.getIsAllPageRowsSelected(),
      'onUpdate:modelValue': value => table.toggleAllPageRowsSelected(!!value),
      'ariaLabel': 'Select all',
    }),
    cell: ({ row }) => h(Checkbox, {
      'modelValue': row.getIsSelected(),
      'onUpdate:modelValue': value => row.toggleSelected(!!value),
      'ariaLabel': 'Select row',
    }),
    enableSorting: false, // Never sort the checkbox column.
    enableHiding: false, // Never hide the checkbox column.
  },
  { accessorKey: 'name', header: 'Name' },
  {
    accessorKey: 'position',
    header: 'Position',
  },
  {
    accessorKey: 'location',
    header: 'Location',
  },
  {
    accessorKey: 'email',
    header: props => formatHeader(props, 'Email'),
    cell: formatEmailColumn,
  },
  {
    accessorKey: 'phone',
    header: 'Number',
    cell: formatPhoneColumn,
  },
  {
    id: 'actions',
    header: 'Action',
    enableHiding: false,
    cell: formatActionsColumn,
  },
]
