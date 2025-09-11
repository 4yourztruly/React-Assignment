import {Box, Grid, Typography, Link} from "@mui/material"
export default function Footer() {
    return (
     <Box
      sx={{
        bgcolor: "primary.main",
        color: "white",
        height: "200px",
        p: 4,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid container spacing={7}>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6">Contact Us</Typography>
          <Link href="#" color="inherit" display="block" underline="hover">Support</Link>
          <Link href="#" color="inherit" display="block" underline="hover">FAQ</Link>
          <Link href="#" color="inherit" display="block" underline="hover">Whisleblow</Link>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6">Company</Typography>
          <Link href="#" color="inherit" display="block" underline="hover">About Us</Link>
          <Link href="#" color="inherit" display="block" underline="hover">Careers</Link>
          <Link href="#" color="inherit" display="block" underline="hover">Blog</Link>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6">Products</Typography>
          <Link href="#" color="inherit" display="block" underline="hover">Pricing</Link>
          <Link href="#" color="inherit" display="block" underline="hover">Features</Link>
          <Link href="#" color="inherit" display="block" underline="hover">Integrations</Link>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6">Affiliates</Typography>
          <Link href="#" color="inherit" display="block" underline="hover">Partners</Link>
          <Link href="#" color="inherit" display="block" underline="hover">LinkedIn</Link>
          <Link href="#" color="inherit" display="block" underline="hover">Press</Link>
        </Grid>
      </Grid>
    </Box>
    )}