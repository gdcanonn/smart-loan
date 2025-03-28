interface TableHeaderProps {
  text: string
}

export default function TableHeader({ text }: TableHeaderProps) {
  return (
    <th
      scope="col"
      className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
    >
      {text}
    </th>
  )
}
