export interface Coffee {
  name: string;
  description: string;
  id: string;
  ingredients: array;
  url: {
    img: string;
  };
}

export interface Different {
  coffee1: string;
  coffee2: string;
  comparisonDescription: string;
}
