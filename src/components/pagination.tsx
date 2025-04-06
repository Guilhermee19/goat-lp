'use client';

import {
  PaginationContent,
  Pagination as PaginationUI,
} from '@/components/ui/pagination';
import { Button } from './ui/button';
import { Table } from '@tanstack/react-table'; // Importando a tipagem correta

interface PaginationProps<TData> {
  table: Table<TData>; // Tipagem do TanStack Table
  page: number;
}

export const Pagination = <TData,>({ page, table }: PaginationProps<TData>) => {
  return (
    <PaginationUI>
      <PaginationContent>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.setPageIndex(0)}
          disabled={page === 0}
        >
          ⇤ Primeira
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Anterior
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Próximo
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={page === table.getPageCount() - 1}
        >
          Última ⇥
        </Button>
      </PaginationContent>
    </PaginationUI>
  );
};
