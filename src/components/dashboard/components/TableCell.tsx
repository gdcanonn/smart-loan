interface TableCellProps {
  content: string | number
  isName?: boolean
}

export default function TableCell({ content, isName = false }: TableCellProps) {
  return (
    <td
      className={`px-6 py-4 whitespace-nowrap text-sm ${
        isName
          ? "font-medium text-gray-900 dark:text-white"
          : "text-gray-500 dark:text-gray-300"
      }`}
    >
      {content}
    </td>
  )
}
