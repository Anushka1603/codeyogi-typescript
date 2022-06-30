export type User = {
  name: {
    title: string;
    first: string;
    last: string;
  };
  picture: {
    large: string;
  };
  location: {
    city: string;
    country: string;
  };
};
