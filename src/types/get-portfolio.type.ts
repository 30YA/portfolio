interface StacksType {
  id: number;
  stackImageUrl: string | null;
  userId: number;
  user: string | null;
}
interface AboutType {
  id: number;
  story: string | null;
  bests: string | null;
  educations: string | null;
  experiences: string | null;
  user: string | null;
}
export interface GetPortfolioResType {
  id: number;
  name: string | null;
  slug: string | null;
  pageTitle: string | null;
  description: string | null;
  email: string | null;
  aboutDescription: string | null;
  servicesTitle: string | null;
  servicesDescription: string | null;
  linkedinUrl: string | null;
  instagramUrl: string | null;
  dribbleUrl: string | null;
  behanceUrl: string | null;
  spotifyUrl: string | null;
  projects: [];
  aboutId: number;
  about: AboutType;
  stacks: StacksType[];
}
