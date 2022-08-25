import * as React from "react";
import Alert from "@mui/material/Alert";
import { Stack } from "@mui/material";

export default function BasicAlerts() {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      width="100%"
      spacing={2}
    >
      <Alert variant="filled" severity="warning">
        This term doesn't exists, Please try searching for some other exercise,
        equipment or target muscle !
      </Alert>
    </Stack>
  );
}
