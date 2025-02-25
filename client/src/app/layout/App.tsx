import { Box, Container, CssBaseline } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react"
import { Navbar } from "./Navbar";
import { ActivityDashboard } from "../../features/activities/dashboard/ActivityDashboard";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get<Activity[]>('https://localhost:5001/api/activities')
      .then(({ data }) => setActivities(data));
  }, []);

  return (
    <Box sx={{ bgCOlor: "#eee" }}>
      <CssBaseline />
      <Navbar />

      <Container maxWidth="xl" sx={{ mt: 3 }}>
          <ActivityDashboard activities={activities}/>
      </Container>
    </Box>
  )
}

export default App
