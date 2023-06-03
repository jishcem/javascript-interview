import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function UserAddStep1({ userInitial, onSubmit }) {
  const [username, setUsername] = useState(userInitial.username);
  const [email, setEmail] = useState(userInitial.email);

  return (
    <Container maxWidth="sm">
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        value={username}
        onChange={(e) => setUsername(e.target.value) }
      />
      <br />
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        value={email}
        onChange={(e) => e.target.value ? setEmail(e.target.value) : '' }
      />
      <br />
      <Button
        onClick={(e) => {
          onSubmit({username, email});
        }}
        variant="contained"
      >
        Submit
      </Button>
    </Container>
  );
}
