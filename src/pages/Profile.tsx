import React from 'react';
import { Container, Typography, Avatar, Box } from '@mui/material';
import { useSpring, animated } from 'react-spring';

const Profile: React.FC = () => {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 1000 },
  });

  const avatarAnimation = useSpring({
    from: { transform: 'scale(0)' },
    to: { transform: 'scale(1)' },
    config: { tension: 200, friction: 12 },
  });

  return (
    <Container maxWidth="sm">
      <animated.div style={fadeIn}>
        <Box sx={{ textAlign: 'center', py: 4 }}>
          <animated.div style={avatarAnimation}>
            <Avatar
              alt="User Name"
              src="/path-to-your-profile-picture.jpg"
              sx={{ width: 120, height: 120, mx: 'auto', mb: 2, boxShadow: 3 }}
            />
          </animated.div>
          <Typography variant="h4" gutterBottom>
            User Name
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            @username
          </Typography>
          <Typography variant="body1" sx={{ mt: 2, mb: 3 }}>
            A brief bio about yourself. Describe your interests and passions here.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 2 }}>
            <Typography variant="body2">📧 user@example.com</Typography>
            <Typography variant="body2">📍 City, Country</Typography>
          </Box>
          <Typography variant="body2">
            Skills: React, TypeScript, UI/UX Design
          </Typography>
        </Box>
      </animated.div>
    </Container>
  );
};

export default Profile;