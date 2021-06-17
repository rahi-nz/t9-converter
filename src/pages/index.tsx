import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    const requestBody = {
      onlyRealWords: true,
      numbers: '3278',
    };
    (async () => {
      const response = await fetch('/api/converter', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody),
      });
      const data = await response.json();
      console.log('data', data);
    })();
  });
  return (
    <div>
      <h1>t9 converter</h1>
    </div>
  );
};

export default Index;
