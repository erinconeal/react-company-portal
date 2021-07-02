export interface RandomUserAPIResponse {
  results: CurrentUser[];
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
}

export interface CurrentUser {
  name: {
    first: string;
    last: string;
    title: string;
  };
  picture: {
    thumbnail: string;
    medium: string;
    large: string;
  };
  dob: {
    date: string;
    age: string;
  };
  location: {
    street: {
      number: string;
      name: string;
    };
    city: string;
    state: string;
    postcode: string;
    country: string;
  };
  registered: {
    age: number;
  };
  email: string;
  phone: string;
  cell: string;
}

export interface PostsAPIResponse {
  id: string;
  title: string;
  body: string;
}

export interface PicsumPhotosAPIResponse {
  id: string;
  download_url: string;
}

export interface ClientsAPIResponse {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  phone: string;
  website: string;
  company: {
    name: string;
  };
}
