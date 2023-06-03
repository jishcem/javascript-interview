import { useState } from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function UserAddStep2({userInitial, onSubmit}) {
  const [password, setPassword] = useState(userInitial.password);

  return (
    <Container maxWidth="sm">
      <TextField
        type="password"
        id="outlined-basic"
        label="Name"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <Button
        onClick={(e) => {
          onSubmit(password);
        }}
        variant="contained"
      >
        Submit
      </Button>
    </Container>
  );
}
