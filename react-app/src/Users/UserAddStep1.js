import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function UserAddStep1({ userInitial, onSubmit }) {
  const [name, setName] = useState(userInitial.name);
  const [email, setEmail] = useState(userInitial.email);

  return (
    <Container maxWidth="sm">
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value) }
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
          onSubmit({name, email});
        }}
        variant="contained"
      >
        Submit
      </Button>
    </Container>
  );
}
