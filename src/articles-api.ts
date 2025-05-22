import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export type Image = {
  urls: {
    regular: string;
    full: string;
  };
  description?: string | null;
  user: {
    name: string;
    username: string;
  };
  likes: number;
  id: string;
};

export const fetchArticlesWithTopic = async ( search: string ): Promise<Image[]> => {
  const response = await axios.get<{ results: Image[] }>(`/search/photos?page=1&query=${search}&client_id=k3z-xk5zphxEXmssAOaWbZk3cl4yrk3_Pn8Ws17Kn-U`);
  return response.data.results;
};
