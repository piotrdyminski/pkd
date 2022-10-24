import { Loader, Stack, Text, Title } from '@mantine/core';
import { useEffect, useState } from 'react';
import { formatNumber } from '../lib/utils';

const ONE_HOUR = 60 * 60 * 1000;

export default function ViewCounter() {
  const [viewCount, setViewCount] = useState<string>('');
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchViewCount = async (shouldIncrementViewCounter: boolean): Promise<number> => {
      const method = shouldIncrementViewCounter ? 'POST' : 'GET';
      const viewCountResponse = await fetch('/api/view-counter', { method });
      return await viewCountResponse.json();
    };

    const onInit = async () => {
      const currentVisit = new Date();
      const lastVisit = new Date(localStorage.getItem('lastVisit') ?? 0);
      const hasOneHourPassedSinceLastVisit = currentVisit.getTime() - lastVisit.getTime() > ONE_HOUR;
      try {
        const viewCount = await fetchViewCount(hasOneHourPassedSinceLastVisit);
        setViewCount(formatNumber(viewCount));
        if (hasOneHourPassedSinceLastVisit) {
          localStorage.setItem('lastVisit', currentVisit.toISOString());
        }
      } catch {
        setViewCount('-');
      } finally {
        setLoading(false);
      }
    };

    onInit();
  }, []);

  return (
    <Stack align="center" mt="50px" spacing={0}>
      <Title order={4} align="center">
        Liczba odwiedzin
      </Title>
      <Stack sx={{ height: '2em' }} align="center" justify="center">
        {!isLoading ? <Text>{viewCount}</Text> : <Loader variant="dots" />}
      </Stack>
    </Stack>
  );
}
