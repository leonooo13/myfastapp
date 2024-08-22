import React, { useState, useEffect } from 'react';
import { Button, Typography, Box, Container, Paper } from '@mui/material';
import { useSpring, animated } from 'react-spring';

const LuTodo: React.FC = () => {
  const [seconds, setSeconds] = useState(() => {
    const savedSeconds = localStorage.getItem('seconds');
    return savedSeconds ? parseInt(savedSeconds, 10) : 0;
  });
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    localStorage.setItem('seconds', seconds.toString());
  }, [seconds]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning && seconds > 0) {
      interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(interval);
  }, [isRunning, seconds]);

  const { number } = useSpring({
    from: { number: 0 },
    number: seconds,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  const addTime = (amount: number) => setSeconds(prevSeconds => Math.max(0, prevSeconds + amount));
  const resetTimer = () => {
    setSeconds(0);
    setIsRunning(false);
  };
  const toggleTimer = () => setIsRunning(!isRunning);

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 4, borderRadius: 2, backgroundColor: '#f5f5f5' }}>
        <Typography variant="h4" component="h1" gutterBottom align="center" color="primary">
          倒计时器
        </Typography>
        <Box display="flex" justifyContent="center" alignItems="center" my={4}>
          <animated.div style={{ fontSize: 80, fontWeight: 'bold', color: '#3f51b5' }}>
            {number.to(n => {
              const minutes = Math.floor(n / 60);
              const remainingSeconds = Math.floor(n % 60);
              return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
            })}
          </animated.div>
        </Box>
        <Box display="flex" justifyContent="center" gap={2}>
          <Button variant="contained" color="primary" onClick={() => addTime(-60)}>
            -1分钟
          </Button>
          <Button variant="contained" color="secondary" onClick={resetTimer}>
            重置
          </Button>
          <Button variant="contained" color="primary" onClick={() => addTime(60)}>
            +1分钟
          </Button>
        </Box>
        <Box display="flex" justifyContent="center" mt={2}>
          <Button variant="contained" color="primary" onClick={toggleTimer}>
            {isRunning ? '暂停' : '开始'}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default LuTodo;