export interface IPhoto {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
  description: string;
  user: { name: string };
  likes: number;
}

export interface IModal {
  image: string;
  author: string;
  description: string;
  likes: number;
}
