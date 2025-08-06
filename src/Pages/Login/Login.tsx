import React, { useCallback, useState } from "react";
import { TextField, Button, Box } from "@mui/material";

export const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = useCallback(() => {
    console.log("Email:", email);
    console.log("Password:", password);
  }, [email, password]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Box p={3} className="bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <TextField
          label="Email"
          fullWidth
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ mt: 2 }}
        />
        <Button
          variant="contained"
          sx={{ mt: 2 }}
          fullWidth
          onClick={handleLogin}
        >
          Login
        </Button>
      </Box>
    </div>
  );
};
