
export type Category = 
  | 'ALL'
  | 'Brand & Identity'
  | 'Graphic'
  | 'Product'
  | 'Communication'
  | 'Film'
  | 'Editorial'
  | 'Art Direction';

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
