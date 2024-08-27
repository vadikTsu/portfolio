export interface ArticleCategory {
  name: string;
  identifier: string;
  imgUrl: string;
}

export interface Article{
  id: number;
  imgUrl: string;
  header: string;
  preview: string[];
  categoryIdentifier: string;
  htmlContent: string;
}

export enum ProjectType{
  COMPLETE,
  DEMO,
  ALGORITHMS
}

export interface Project{
  id:number;
  imgUrl: string;
  type:ProjectType;
  title: string;
  agenda: string;
  htmlContent: string;
}
