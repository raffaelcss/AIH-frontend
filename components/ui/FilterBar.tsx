"use client";

import {
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  ThemeProvider,
} from "@mui/material";
import { useEffect, useState } from "react";

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
        <div className="text-base text-slate-800 dark:text-gray-100">
          <ul className="flex gap-5">
            <li className="cursor-pointer border-b-4 border-sky-400 dark:border-sky-600">
              Todos
            </li>
            <li className="cursor-pointer">Planetárias</li>
            <li className="cursor-pointer">Deep Sky</li>
          </ul>
        </div>
        {mounted && (
          <div>
            <FormControl
              variant="standard"
              sx={{ m: 1, minWidth: 208 }}
              size="small"
            >
              <InputLabel id="order-select-label">Organizar por</InputLabel>
              <Select
                className="text-slate-800 dark:text-gray-100"
                labelId="order-select-label"
                id="order-select"
                label="Organizar por"
              >
                <MenuItem value="">
                  <em className="text-transparent">a</em>
                </MenuItem>
                <MenuItem value={10}>Populares</MenuItem>
                <MenuItem value={20}>Novidades</MenuItem>
                <MenuItem value={30}>Moedas: Menor - maior</MenuItem>
                <MenuItem value={40}>Moedas: Maior - menor</MenuItem>
              </Select>
            </FormControl>
          </div>
        )}
      </div>
      <div className="mt-5 flex justify-end">
        {mounted && (
          <Pagination
            color="primary"
            count={26}
            shape="rounded"
            size="small"
          />
        )}
      </div>
    </div>
  );
}
