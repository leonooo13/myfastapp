import React from 'react';
import { Container, Typography, Avatar, Box, Chip, Grid, Link, Divider, Paper } from '@mui/material';
import { useSpring, animated, config } from 'react-spring';
import { GitHub, Twitter, Email, LocationOn } from '@mui/icons-material';
import { TypeAnimation } from 'react-type-animation';

const Profile: React.FC = () => {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: config.molasses,
  });

  const avatarAnimation = useSpring({
    from: { transform: 'scale(0) rotate(-180deg)' },
    to: { transform: 'scale(1) rotate(0deg)' },
    config: config.wobbly,
  });

  const skillAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 500,
    config: config.gentle,
  });

  return (
    <Container maxWidth="md">
      <animated.div style={fadeIn}>
        <Paper elevation={0} sx={{ p: 4, borderRadius: 4, mt: 4, bgcolor: 'background.default' }}>
          <Box sx={{ textAlign: 'center', py: 4 }}>
            <Grid container spacing={6} alignItems="center">
              <Grid item xs={12} md={4}>
                <animated.div style={avatarAnimation}>
                  <Avatar
                    alt="Devi Leo"
                    src="/personimg.png"
                    sx={{ width: 180, height: 180, mx: 'auto', boxShadow: 3, border: '3px solid #fff' }}
                  />
                </animated.div>
              </Grid>
              <Grid item xs={12} md={8} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                <Typography variant="h3" gutterBottom fontWeight="300" sx={{ mb: 2, letterSpacing: '-0.5px' }}>
                  Devi Leo
                </Typography>
                <Typography variant="h6" color="primary" gutterBottom sx={{ mb: 3, fontWeight: 400 }}>
                  <TypeAnimation
                    sequence={[
                      'Python Developer',
                      1000,
                      'FastAPI Specialist',
                      1000,
                      'Database Expert',
                      1000,
                      'Cybersecurity Professional',
                      1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </Typography>
                <Typography variant="body1" sx={{ mt: 2, mb: 3, lineHeight: 1.6, color: 'text.secondary' }}>
                  Passionate about developing secure and efficient web applications. 
                  With expertise in Python, FastAPI, and database technologies, I specialize in 
                  creating robust backend systems. My focus on cybersecurity ensures the delivery of safe and reliable solutions.
                </Typography>
                <Box sx={{ display: 'flex', gap: 3, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                  <Link href="https://github.com/leonooo13" target="_blank">
                    <GitHub sx={{ color: 'text.primary', '&:hover': { color: 'primary.main' } }} />
                  </Link>
                  <Link href="https://twitter.com/leonooo13" target="_blank">
                    <Twitter sx={{ color: 'text.primary', '&:hover': { color: 'primary.main' } }} />
                  </Link>
                </Box>
              </Grid>
            </Grid>
            
            <Divider sx={{ my: 6, opacity: 0.1 }} />
            
            <animated.div style={skillAnimation}>
              <Box sx={{ mt: 4 }}>
                <Typography variant="h5" gutterBottom fontWeight="400" sx={{ mb: 3, letterSpacing: '-0.5px' }}>
                  Skills & Expertise
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1, my: 2 }}>
                  {['Python', 'FastAPI', 'PostgreSQL', 'MySQL', 'Network Security', 'Penetration Testing', 'Security Assessment', 'API Development', 'Database Design'].map((skill) => (
                    <Chip key={skill} label={skill} sx={{ m: 0.5, bgcolor: 'background.paper', color: 'text.primary', border: '1px solid', borderColor: 'divider' }} />
                  ))}
                </Box>
              </Box>
            </animated.div>
            
            <Box sx={{ mt: 6, display: 'flex', justifyContent: 'center', gap: 4, color: 'text.secondary' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Email sx={{ mr: 1, fontSize: 20 }} />
                <Typography variant="body2">imxiaoli@outlook.com</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <LocationOn sx={{ mr: 1, fontSize: 20 }} />
                <Typography variant="body2">San Francisco, CA</Typography>
              </Box>
            </Box>
          </Box>
        </Paper>
      </animated.div>
    </Container>
  );
};

export default Profile;