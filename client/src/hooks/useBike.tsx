import React from 'react';
import ApiService from 'services/api-service';

const useBike = (id: string | undefined) => {
  const [bike, getBike] = React.useState<BikeModel | undefined>(undefined);

  React.useEffect(() => {
    if (id !== undefined) {
      (async () => {
        const fetchedBike = await ApiService.fetchBike(id);
        getBike(fetchedBike);
      })();
    }
  }, [id]);

  return bike;
};

export default useBike;
