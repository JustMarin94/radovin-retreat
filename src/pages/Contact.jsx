import AppAppBar from "../onepirate/modules/views/AppAppBar";
import AppFooter from "../onepirate/modules/views/AppFooter";
import { Container, Typography, Box } from "@mui/material";

export default function Contact() {
  return (
    <>
      <AppAppBar />
      <Container maxWidth="md" sx={{ py: 12 }}>
        <Typography variant="h3" gutterBottom>
          Contact Information
        </Typography>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h4">Owner Details</Typography>
          <Typography variant="h5">
            <strong>Name:</strong> Zlatko Dundović
          </Typography>
          <Typography variant="h5">
            <strong>Phone / WhatsApp / Viber:</strong> +385 99 579 5954
          </Typography>
          <Typography variant="h5">
            <strong>Email:</strong> 58628394du@gmail.com
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h4">Property Address</Typography>
          <Typography variant="h5">
            Hrvatskih Branitelja Stipana Dundovića, 23248 Ražanac, Croatia
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h4">Check-in & Check-out</Typography>
          <Typography variant="h5">
            <strong>Check-in:</strong> From 15:00
          </Typography>
          <Typography variant="h5">
            <strong>Check-out:</strong> By 10:00
          </Typography>
        </Box>
      </Container>
      <AppFooter />
    </>
  );
}
