import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  CardActionArea,
  Divider,
} from "@mui/material";

interface Variant {
  name: string;
  amount: number;
}

interface Product {
  id: number;
  productName: string;
  description: string;
  variants: Variant[];
}

const products: Product[] = [
  {
    id: 1,
    productName: "Product 1",
    description: "This is product 1 description.",
    variants: [
      { name: "Small", amount: 100 },
      { name: "Large", amount: 200 },
    ],
  },
  {
    id: 2,
    productName: "Product 2",
    description: "Short description.",
    variants: [{ name: "Default", amount: 150 }],
  },
  {
    id: 3,
    productName: "Product 3",
    description: "Another product description.",
    variants: [],
  },
];

export const AdminDashboard: React.FC = () => {
  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>

      <Grid container spacing={3} alignItems="stretch">
        {products.map((product) => (
          <Grid columns={{ xs: 12, sm: 6, md: 4 }} key={product.id}>
            <Card
              sx={{
                height: "100%",
                minHeight: 220,
                width: 200,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: 3,
                borderRadius: 2,
                transition: "0.3s",
                "&:hover": { boxShadow: 6, transform: "translateY(-4px)" },
              }}
            >
              <CardActionArea sx={{ height: "100%" }}>
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                    {product.productName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>

                  <Divider sx={{ my: 1 }} />

                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    Variants:
                  </Typography>
                  {product.variants.length > 0 ? (
                    product.variants.map((variant, index) => (
                      <Typography variant="body2" key={index}>
                        • {variant.name}: ₹{variant.amount}
                      </Typography>
                    ))
                  ) : (
                    <Typography variant="body2" color="text.secondary">
                      No variants
                    </Typography>
                  )}
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
