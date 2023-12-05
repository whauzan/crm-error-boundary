import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Table } from "@tanstack/react-table";

interface NumberPaginationProps<TData> {
  table: Table<TData>;
}

const NumberPagination = <TData,>({ table }: NumberPaginationProps<TData>) => {
  const currentPage = table.getState().pagination.pageIndex;
  const totalPage = table.getPageCount();

  const renderPagination = () => {
    const pages = [];
    const visiblePages = 6;

    let start = Math.max(0, currentPage - Math.floor(visiblePages / 2));
    const end = Math.min(totalPage, start + visiblePages - 1);

    start = Math.max(0, end - visiblePages + 1);

    if (totalPage <= visiblePages) {
      for (let i = start; i < end; i++) {
        pages.push(
          <Button
            variant={"ghost"}
            size={"sm"}
            key={i}
            onClick={() => table.setPageIndex(i)}
            className={cn(
              "w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-200",
              i === currentPage && "bg-gray-100",
            )}
          >
            {i + 1}
          </Button>,
        );
      }
    } else {
      const leftEllipsis = currentPage > Math.floor(visiblePages / 2) + 1;
      const rightEllipsis =
        currentPage < totalPage - Math.floor(visiblePages / 2);

      let start;
      let end;

      if (leftEllipsis && rightEllipsis) {
        start = currentPage - Math.floor(visiblePages / 2) + 1;
        end = currentPage + Math.floor(visiblePages / 2) - 1;
        pages.push(<span key="start-ellipsis">...</span>);
      } else if (leftEllipsis) {
        start = totalPage - visiblePages + 2;
        end = totalPage;
      } else {
        start = 1;
        end = visiblePages - 1;
      }

      for (let i = start; i <= end; i++) {
        pages.push(
          <Button
            variant={"ghost"}
            size={"sm"}
            key={i}
            onClick={() => table.setPageIndex(i)}
            className={cn(
              "w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-200",
              i === currentPage && "bg-gray-100",
            )}
          >
            {i}
          </Button>,
        );
      }

      if (
        rightEllipsis &&
        currentPage < totalPage - Math.floor(visiblePages / 2)
      ) {
        pages.push(<span key="end-ellipsis">...</span>);
      }
    }

    return pages;
  };

  return <>{renderPagination()}</>;
};

export default NumberPagination;
