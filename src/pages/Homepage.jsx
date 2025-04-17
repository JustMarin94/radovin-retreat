import React, { useState, useEffect } from "react";
import Calendar from "./Calendar"; // Assuming Calendar.js is in the same directory
import { ref, onValue, push } from "firebase/database";
import { database } from "../utils/firebase"; // Adjust path if necessary
import AppAppBar from "../onepirate/modules/views/AppAppBar"; // Adjust path if necessary
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Typography,
  Button,
  Box,
  TextField,
  FormControl,
  FormLabel,
  IconButton, // Import IconButton for navigation
  Grid,
  Snackbar,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew"; // Import icons
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Container } from "@mui/system";
import AppFooter from "../onepirate/modules/views/AppFooter";

const UserSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  phone: z.string().min(1, "Phone number is required"),
  guests: z
    .string()
    .min(1, "Number of guests is required")
    .refine((val) => parseInt(val) >= 1, "Guests must be at least 1"),
});

export default function Homepage() {
  const [dateRanges, setDateRanges] = useState([]);
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [error, setError] = useState(null);
  const [currentMonthIndex, setCurrentMonthIndex] = useState(
    new Date().getMonth()
  );
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(UserSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      guests: "1",
    },
  });

  const year = new Date().getFullYear();

  useEffect(() => {
    let isMounted = true; // track if the component is mounted

    const bookingsRef = ref(database, "bookings");
    const unsubscribe = onValue(bookingsRef, (snapshot) => {
      if (!isMounted) return; // prevent updating state if the component is unmounted

      const data = snapshot.val();
      if (data) {
        const bookingsArray = Object.values(data).map((booking) => ({
          start: new Date(booking.start),
          end: new Date(booking.end),
        }));
        setDateRanges(bookingsArray);
      } else {
        setDateRanges([]); // Handle case where there are no bookings
      }
    });

    return () => {
      isMounted = false; // Set to false when component unmounts
      unsubscribe();
    };
  }, []);

  const handleDateClick = (date) => {
    // Clear error when a new date selection starts
    setError(null);
    const clickedDate = new Date(date); // Ensure we're working with Date objects

    if (!selectedStartDate) {
      setSelectedStartDate(date);
      setSelectedEndDate(null); // Reset end date when selecting a new start date
    } else if (!selectedEndDate) {
      const startDateObj = new Date(selectedStartDate);
      if (clickedDate >= startDateObj) {
        // Check for overlap *before* setting the end date
        if (checkOverlap(selectedStartDate, date)) {
          setError(
            "Selected range overlaps with an existing booking. Please choose different dates."
          );
          setSelectedStartDate(null); // Reset selection on overlap
          setSelectedEndDate(null);
        } else {
          setSelectedEndDate(date);
        }
      } else {
        // If the new date is before the start date, start a new selection
        setSelectedStartDate(date);
        setSelectedEndDate(null);
      }
    } else {
      // If both dates are selected, clicking again starts a new selection
      setSelectedStartDate(date);
      setSelectedEndDate(null);
    }
  };

  const checkOverlap = (start, end) => {
    if (!start || !end) return false; // Don't check if selection is incomplete
    const newStart = new Date(start);
    const newEnd = new Date(end);
    // Make sure end date is inclusive for the check
    newEnd.setHours(23, 59, 59, 999); // Consider the whole day for the end date

    return dateRanges.some((range) => {
      const rangeStart = new Date(range.start);
      const rangeEnd = new Date(range.end);
      rangeStart.setHours(0, 0, 0, 0); // Normalize start times
      rangeEnd.setHours(23, 59, 59, 999); // Normalize end times

      // Overlap conditions:
      // 1. New start is within an existing range
      // 2. New end is within an existing range
      // 3. Existing range is entirely within the new range
      return (
        (newStart >= rangeStart && newStart <= rangeEnd) ||
        (newEnd >= rangeStart && newEnd <= rangeEnd) ||
        (newStart <= rangeStart && newEnd >= rangeEnd)
      );
    });
  };

  const onSubmit = (data) => {
    if (!selectedStartDate || !selectedEndDate) {
      setError("Please select a start and end date.");
      return;
    }

    // Double-check overlap on submit
    if (checkOverlap(selectedStartDate, selectedEndDate)) {
      setError("Selected dates overlap with an existing booking.");
      // Optionally reset dates here if desired
      // setSelectedStartDate(null);
      // setSelectedEndDate(null);
      return;
    }

    const newBooking = {
      // Store dates in a consistent format, ISO string is good for Firebase
      start: new Date(selectedStartDate).toISOString(),
      end: new Date(selectedEndDate).toISOString(),
      name: data.name,
      email: data.email,
      phone: data.phone,
      guests: parseInt(data.guests),
    };

    const bookingsRef = ref(database, "bookings");
    push(bookingsRef, newBooking)
      .then(() => {
        // No need to manually update dateRanges state here if using onValue
        // It will update automatically when Firebase data changes.
        setSelectedStartDate(null);
        setSelectedEndDate(null);
        reset(); // Reset form fields
        setError(null); // Clear any previous errors
        console.log("Reservation Confirmed");
        setOpen(true); // Show success message or toast
        // Consider adding user feedback like a success message/toast
      })
      .catch((err) => {
        setError("Failed to save booking: " + err.message);
        console.error("Booking Error:", err); // Log detailed error
      });
  };

  // Function to check if a *specific day* falls within any *booked* range
  // Used by Calendar component to disable booked dates
  const isDateBooked = (date) => {
    const checkDate = new Date(date);
    checkDate.setHours(0, 0, 0, 0); // Normalize time for comparison

    return dateRanges.some((range) => {
      const startDate = new Date(range.start);
      const endDate = new Date(range.end);
      startDate.setHours(0, 0, 0, 0);
      endDate.setHours(23, 59, 59, 999); // Cover the entire end day
      return checkDate >= startDate && checkDate <= endDate;
    });
  };

  // --- Navigation Handlers ---
  const handlePreviousMonths = () => {
    setCurrentMonthIndex((prevIndex) => Math.max(0, prevIndex - 2));
  };

  const handleNextMonths = () => {
    // We display 2 months, so the last possible start index is 10 (Nov) to show Nov/Dec.
    setCurrentMonthIndex((prevIndex) => Math.min(10, prevIndex + 2));
  };
  const formBoxStyle = {
    padding: "20px",
    maxWidth: "500px",
    margin: "20px auto",
    border: "1px solid #e0e0e0", // Optional border
    borderRadius: "20px", // Optional rounded corners
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)", // Optional shadow
  };

  const calendarSectionStyle = {
    maxWidth: "900px", // Adjust max-width to fit two calendars comfortably
    margin: "20px auto",
    padding: "10px",
  };

  const calendarContainerStyle = {
    display: "flex",
    flexWrap: "wrap", // Allows wrapping on smaller screens if needed
    justifyContent: "center", // Center calendars horizontally
    gap: "20px", // Add space between calendars
  };

  const navigationStyle = {
    display: "flex",
    justifyContent: "flex-end", // Position buttons to the right
    alignItems: "center",
    marginBottom: "10px", // Space below navigation
    paddingRight: "10px", // Align with calendar padding if needed
  };

  const monthsToDisplayIndices = [currentMonthIndex, currentMonthIndex + 1];

  return (
    <Container maxWidth="xl" sx={{ padding: 1 }}>
      <AppAppBar />
      <Grid container spacing={1}>
        <Grid>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={formBoxStyle}>
              <Typography variant="h6" component="h2" gutterBottom>
                Add New Booking
              </Typography>
              {/* FormControls remain the same */}
              <FormControl fullWidth sx={{ mb: 2 }}>
                <FormLabel>Name</FormLabel>
                <TextField
                  {...register("name")}
                  error={!!errors.name}
                  helperText={errors.name?.message}
                />
              </FormControl>
              <FormControl fullWidth sx={{ mb: 2 }}>
                <FormLabel>Email</FormLabel>
                <TextField
                  {...register("email")}
                  type="email"
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
              </FormControl>
              <FormControl fullWidth sx={{ mb: 2 }}>
                <FormLabel>Phone</FormLabel>
                <TextField
                  {...register("phone")}
                  type="tel"
                  error={!!errors.phone}
                  helperText={errors.phone?.message}
                />
              </FormControl>
              <FormControl fullWidth sx={{ mb: 2 }}>
                <FormLabel>Number of Guests</FormLabel>
                <TextField
                  {...register("guests")}
                  type="number"
                  defaultValue="1"
                  error={!!errors.guests}
                  helperText={errors.guests?.message}
                />
              </FormControl>

              {/* Display selected dates */}
              <Typography sx={{ mt: 1, mb: 1, minHeight: "1.5em" }}>
                {" "}
                {/* Add minHeight to prevent layout jump */}
                Selected:{" "}
                {selectedStartDate
                  ? new Date(selectedStartDate).toLocaleDateString()
                  : "..."}{" "}
                -{" "}
                {selectedEndDate
                  ? new Date(selectedEndDate).toLocaleDateString()
                  : "..."}
              </Typography>

              {/* Display Error Message */}
              {error && (
                <Typography color="error" sx={{ mb: 2 }}>
                  {error}
                </Typography>
              )}
              <Button
                type="submit"
                variant="contained"
                disabled={
                  isSubmitting || !selectedStartDate || !selectedEndDate
                } // Disable if submitting or dates not selected
                sx={{ mt: 2 }}
              >
                {isSubmitting ? "Booking..." : "Confirm Booking"}
              </Button>
            </Box>
          </form>
          <Snackbar
            open={open}
            closeFunc={handleClose}
            message="Request confirmend. You will recive an email soon."
          />
        </Grid>

        <Grid>
          {/* --- Calendar Section --- */}
          <Box sx={calendarSectionStyle}>
            {/* Month Navigation */}
            <Box sx={navigationStyle}>
              <IconButton
                onClick={handlePreviousMonths}
                disabled={currentMonthIndex === 0} // Disable if showing Jan/Feb
                aria-label="Previous months"
              >
                <ArrowBackIosNewIcon />
              </IconButton>
              <IconButton
                onClick={handleNextMonths}
                disabled={currentMonthIndex >= 10} // Disable if showing Nov/Dec
                aria-label="Next months"
              >
                <ArrowForwardIosIcon />
              </IconButton>
            </Box>

            {/* Calendar Display */}
            <Box sx={calendarContainerStyle}>
              {monthsToDisplayIndices.map((monthIndex) => (
                // The key should be stable, monthIndex is fine here
                <div
                  key={monthIndex}
                  style={{ flex: "1 1 400px", maxWidth: "450px" }}
                >
                  {" "}
                  {/* Adjust flex basis and max-width */}
                  <Calendar
                    dateRanges={dateRanges}
                    onDateClick={handleDateClick}
                    selectedStartDate={selectedStartDate}
                    selectedEndDate={selectedEndDate}
                    isDateBooked={isDateBooked} // Pass the booking check function
                    year={year}
                    month={monthIndex} // Pass the calculated month index
                  />
                </div>
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
      <AppFooter />
    </Container>
  );
}
