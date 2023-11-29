import {
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  ThemeProvider
} from "@mui/material";

interface FilterBarProps {}
export function FilterBar(props: FilterBarProps) {
    return (
    <div className="mt-4">
      <div className="flex items-center justify-between">
        <div>teste</div>
        <div>
            <FormControl
              variant="standard"
              sx={{ m: 1, minWidth: 208 }}
              size="small"
            >
              <InputLabel
                className="text-slate-800 dark:text-gray-100"
                id="order-select-label"
              >
                Organizar por
              </InputLabel>
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
      </div>
      <div className="mt-5 flex justify-end">
        <Pagination
          color="primary"
          className="dark:text-gray-100"
          count={26}
          shape="rounded"
          size="small"
        />
      </div>
    </div>
  );
}
