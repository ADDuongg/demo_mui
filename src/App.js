import React from "react";
import { Container, Grid, TextField, Button, Box, Stack, Typography } from "@mui/material";
import Header from "./component/header.jsx";
import Footer from "./component/footer.jsx";
import backgroundContact from "./images/bgContact.png";
import picContact from "./images/img-contact.png";
import useForm from "./hook/useForm.jsx";
import map from './images/mapContact.png';

import "./App.css";
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  subject: "",
  inquiry: "",
};

function App() {
  const submitForm = (data) => {
    console.log("Form data:", data);
  };

  const { formData, handleChange, handleSubmit, errors } = useForm(
    initialValues,
    submitForm
  );

  return (
    <div>
      <Header />


      <Box sx={{ mt: '12rem' }}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          width={'100%'}
          sx={{
            backgroundImage: `url(${backgroundContact})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: '20rem left',

          }}
        >
          <Grid item sm={12} >
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
              <div className="text-colorPink font-bold text-center w-full">Contact Us</div>
              <div className="text-colorPurple my-2 font-bold text-4xl  w-full mr-auto text-center">
                Send your inquiry to our expert team
              </div>
              <div className="text-colorGray text-lg text-center w-full">Lorem ipsum dolor sit amet nulla turapis tellus.</div>
            </Box>
          </Grid>
          <Grid item lg={6} xs={12}>

            <Box sx={{ display: 'flex', justifyContent: 'end' }}>
              <img src={picContact} alt="" style={{ width: "80%", marginRight: '5rem' }} />
            </Box>
          </Grid>
          <Grid item lg={6} xs={12}>
            <Box sx={{ padding: '5rem' }}>
              <form className="formContact mt-4 flex flex-col items-start justify-start gap-10 h-auto w-full" onSubmit={handleSubmit}>
                <div className="nameInput w-full flex">
                  <TextField sx={{ marginRight: '20px' }} type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-2/4 h-16 mr-5 custom-input" placeholder="First Name" required />
                  <TextField type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-2/4 h-16 custom-input" placeholder="Last Name" required />
                </div>
                <TextField type="email" name="email" value={formData.email} onChange={handleChange} className="w-full h-16 custom-input" placeholder="Email address" required />
                <TextField type="text" name="subject" value={formData.subject} onChange={handleChange} className="w-full h-16 custom-input" placeholder="Subject message" required />
                <TextField sx={{ height: '10rem' }} type="text" name="inquiry" value={formData.inquiry} onChange={handleChange} className="w-full custom-input" placeholder="Inquiry" required />
                <Button sx={{ marginTop: '20px' }} variant="contained" className="custom-btn" type="submit">
                  Send Message
                </Button>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ width: '100%', height: 'auto', }}>
        <img src={map} alt="..." width={'100%'}></img>
      </Box>


      <Stack mt={8}>
        <Typography sx={{ color: '#FF64AE', fontWeight: 'bold', textAlign: 'center' }}>
          Get in Touch
        </Typography>
        <Typography my={1} sx={{ color: '#091156', fontWeight: 'bold', fontSize: '2rem', textAlign: 'center' }}>
          Get direct handling by us
        </Typography>
        <Typography sx={{ color: '#8B8B8B', textAlign: 'center' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
        </Typography>
      </Stack>

      <Box my={10}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{width: 'auto'}}
          spacing={8}
        >
          <Grid item md={4} sm={12}>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <i class="fa-solid fa-location-dot" style={{ fontSize: '4rem', color: '#091156' }}></i>
              <Stack mt={8}>
                <Typography sx={{ color: '#FF64AE', fontWeight: 'bold', textAlign: 'center' }}>
                  Get in Touch
                </Typography>
                <Typography my={1} sx={{ color: '#091156', fontWeight: 'bold', fontSize: '1.5rem', textAlign: 'center' }}>
                  Get direct handling by us
                </Typography>
                <Typography mx={'auto'} sx={{ color: '#8B8B8B', textAlign: 'center', width: '60%' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
                </Typography>
              </Stack>
            </Box>
          </Grid>
          <Grid item md={4} sm={12} >
            <Box sx={{ height: '25rem ', display: 'flex', borderRadius: '3rem', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', boxShadow: '0px 25px 50px 25px #F6F7FF' }}>
              <i class="fa-solid fa-phone" style={{ fontSize: '4rem', color: '#091156' }}></i>
              <Stack mt={8}>
                <Typography sx={{ color: '#FF64AE', fontWeight: 'bold', textAlign: 'center' }}>
                  Get in Touch
                </Typography>
                <Typography my={1} sx={{ color: '#091156', fontWeight: 'bold', fontSize: '1.5rem', textAlign: 'center' }}>
                  Get direct handling by us
                </Typography>
                <Typography mx={'auto'} sx={{ color: '#8B8B8B', textAlign: 'center', width: '60%' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
                </Typography>
              </Stack>
            </Box>
          </Grid>
          <Grid item md={4} sm={12}>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <i class="fa-solid fa-envelopes-bulk" style={{ fontSize: '4rem', color: '#091156' }}></i>
              <Stack mt={8}>
                <Typography sx={{ color: '#FF64AE', fontWeight: 'bold', textAlign: 'center' }}>
                  Get in Touch
                </Typography>
                <Typography my={1} sx={{ color: '#091156', fontWeight: 'bold', fontSize: '1.5rem', textAlign: 'center' }}>
                  Get direct handling by us
                </Typography>
                <Typography mx={'auto'} sx={{ color: '#8B8B8B', textAlign: 'center', width: '60%' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
                </Typography>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Box>


      <Footer />
    </div>
  );
}

export default App;
