interface StacksType {
  id: number;
  stackImageUrl: string | null;
  userId: number;
  user: string | null;
}

interface AboutBests {
  about: string | null;
  aboutId: number | null;
  id: number | null;
  title: string | null;
  description: string | null;
}
interface AboutEducation {
  about: string | null;
  aboutId: number | null;
  id: number | null;
  title: string | null;
  timeline: string | null;
}
interface AboutExperiance {
  about: string | null;
  aboutId: number | null;
  id: number | null;
  title: string | null;
  timeLine: string | null;
}
interface AboutType {
  id: number;
  story: string | null;
  bests: AboutBests[] | null;
  educations: AboutEducation[] | null;
  experiences: AboutExperiance[] | null;
  user: string | null;
}
interface Services {
  id: number | null;
  servicesDescription: string | null;
  servicesTitle: string | null;
  user: number | null;
  userId: number | null;
}

export interface Projects {
  companyName: string | null;
  context: string | null;
  description: string | null;
  images: ProjectImages[] | null;
  id: number | null;
  mainImageUrl: string | null;
  name: string | null;
  projectType: string | null;
  role: string | null;
  timeLine: string | null;
  tools: string | null;
  url: string | null;
  user: string | null;
  userId: number | null;
}

export interface ProjectImages {
  id: number | null;
  project: string | null;
  projectId: number | null;
  url: string | null;
}
export interface GetPortfolioResType {
  id: number;
  name: string | null;
  slug: string | null;
  pageTitle: string | null;
  description: string | null;
  email: string | null;
  aboutDescription: string | null;
  linkedinUrl: string | null;
  instagramUrl: string | null;
  dribbleUrl: string | null;
  behanceUrl: string | null;
  spotifyUrl: string | null;
  profileUrl: string;
  projects: Projects[];
  aboutId: number;
  about: AboutType;
  stacks: StacksType[];
  services: Services[] | [];
}
