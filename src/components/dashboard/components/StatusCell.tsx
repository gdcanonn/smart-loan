interface StatusCellProps {
  status: "Active" | "Pending"
}

export default function StatusCell({ status }: StatusCellProps) {
  return (
    <td className="px-6 py-4 whitespace-nowrap">
      <span
        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
          status === "Active"
            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
            : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
        }`}
      >
        {status}
      </span>
    </td>
  )
}
