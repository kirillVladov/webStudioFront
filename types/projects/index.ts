export enum ProjectStackType {
  ios = "ios",
  front = "frontend",
  back = "backend",
}

export interface ProjectItemType {
  name: string;
  description: string;
  link: string;
  year: number;
  image: string;
  type: ProjectStackType;
}
