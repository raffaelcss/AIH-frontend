"use client";

import { Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import { FilterByType } from "../filter-by-type";
import { FilterByOrder } from "../filter-by-order";

interface FilterBarProps {}
export function FilterBar(props: FilterBarProps) {
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="h-28 px-12">
      <div className="flex h-16 items-end justify-between">
        <FilterByType />
        <FilterByOrder />
      </div>
      <div className="mt-5 flex justify-end">
        {mounted && (
          <Pagination color="primary" count={26} shape="rounded" size="small" />
        )}
      </div>
    </div>
  );
}
