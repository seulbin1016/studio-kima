
export type Category = 
  | 'ALL'
  | 'Brand & Identity'
  | 'Graphic'
  | 'Product'
  | 'Communication'
  | 'Advertising'
  | 'Film'
  | 'Web Production'
  | 'Art Direction & Production';

export interface Project {
  id: string;
  title: string;
  category: Category;
  subTitle: string;
  year: string;
  imageUrl: string;
  detailImages: string[];
  description: string;
}
