import React, { useState } from "react";
import {
  Snackbar,
  Alert,
  Button,
  TextField,
  Box,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export const UserDashboard: React.FC = () => {
  const [name, setName] = useState("");
  const [variants, setVariants] = useState([{ name: "", amount: "" }]);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleVariantChange = (index: number, field: string, value: string) => {
    const newVariants = [...variants];
    (newVariants as any)[index][field] = value;
    setVariants(newVariants);
  };

  const handleAddVariant = () => {
    setVariants([...variants, { name: "", amount: "" }]);
  };

  const handleRemoveVariant = (index: number) => {
    const newVariants = variants.filter((_, i) => i !== index);
    setVariants(newVariants);
  };

  const handleSubmit = () => {
    console.log("Product:", name);
    console.log("Variants:", variants);
    setOpenSnackbar(true);
  };

  return (
    <Box p={4} className="max-w-4xl mx-auto">
      <Typography variant="h6" gutterBottom>
        Product Information
      </Typography>
      <TextField
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        margin="normal"
      />

      <Typography variant="subtitle1" sx={{ mt: 2, fontWeight: "bold" }}>
        Variants:
      </Typography>
      {variants.map((variant, index) => (
        <Box key={index} display="flex" alignItems="center" gap={2} mt={1}>
          <TextField
            placeholder="Name"
            value={variant.name}
            onChange={(e) => handleVariantChange(index, "name", e.target.value)}
            fullWidth
          />
          <TextField
            placeholder="Amount"
            type="number"
            value={variant.amount}
            onChange={(e) =>
              handleVariantChange(index, "amount", e.target.value)
            }
            slotProps={{
              input: {
                startAdornment: <span style={{ marginRight: 4 }}>₹</span>,
                endAdornment: <span style={{ marginLeft: 4 }}>INR</span>,
              },
            }}
            sx={{ width: 200 }}
          />
          <IconButton onClick={() => handleRemoveVariant(index)}>
            <CloseIcon />
          </IconButton>
        </Box>
      ))}

      <Button variant="text" sx={{ mt: 1 }} onClick={handleAddVariant}>
        Add Variant
      </Button>

      <Box mt={3}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert severity="success" onClose={() => setOpenSnackbar(false)}>
          Product added successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};
