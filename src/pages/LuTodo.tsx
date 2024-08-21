import React, { useState, useEffect } from 'react';
import { Button, Typography, Box, Container, Paper } from '@mui/material';
import { useSpring, animated } from 'react-spring';

const LuTodo: React.FC = () => {
  const [minutes, setMinutes] = useState(() => {
    const savedMinutes = localStorage.getItem('minutes');
    return savedMinutes ? parseInt(savedMinutes, 10) : 0;
  });

  useEffect(() => {
    localStorage.setItem('minutes', minutes.toString());
  }, [minutes]);

  const { number } = useSpring({
    from: { number: 0 },
    number: minutes,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  const incrementMinutes = () => setMinutes(minutes + 1);
  const decrementMinutes = () => setMinutes(Math.max(0, minutes - 1));
  const resetMinutes = () => setMinutes(0);

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 4, borderRadius: 2, backgroundColor: '#f5f5f5' }}>
        <Typography variant="h4" component="h1" gutterBottom align="center" color="primary">
          分钟计时器
        </Typography>
        <Box display="flex" justifyContent="center" alignItems="center" my={4}>
          <animated.div style={{ fontSize: 80, fontWeight: 'bold', color: '#3f51b5' }}>
            {number.to(n => `${n.toFixed(0)} 分钟`)}
          </animated.div>
        </Box>
        <Box display="flex" justifyContent="center" gap={2}>
          <Button variant="contained" color="primary" onClick={decrementMinutes}>
            减少
          </Button>
          <Button variant="contained" color="secondary" onClick={resetMinutes}>
            重置
          </Button>
          <Button variant="contained" color="primary" onClick={incrementMinutes}>
            增加
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default LuTodo;