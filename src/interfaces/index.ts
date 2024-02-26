export interface INews {
  author: string;
  category: CategoriesType[];
  description: string;
  id: NewsId;
  image: string;
  language: string;
  published: string;
  title: string;
  url: UrlType;
}

interface IBanner extends INews {
  bannerId: string;
}

export interface IFilters {
  page_number: number;
  page_size: number;
  category: CategoriesType | null;
  keywords: string;
}
//const news = {
//  author: "Evgeniy",
//  category: ["all"],
//  description: "TypeScript",
//  id: 1,
//  image: null,
//  language: "ru",
//  published: "yes",
//  title: "TS",
//  url: "",
//};

//type NewsType = typeof news;

export type ItemType = INews & IBanner;

//type CategoryType = string;
type UrlType = string | null | undefined;
type NewsId = string;

export type CategoriesType =
  | "regional"
  | "technology"
  | "lifestyle"
  | "business"
  | "general"
  | "programming"
  | "science"
  | "entertainment"
  | "world"
  | "sports"
  | "finance"
  | "academia"
  | "politics"
  | "health"
  | "opinion"
  | "food"
  | "game"
  | "fashion"
  | "academic"
  | "crap"
  | "travel"
  | "culture"
  | "economy"
  | "environment"
  | "art"
  | "music"
  | "notsure"
  | "CS"
  | "education"
  | "redundant"
  | "television"
  | "commodity"
  | "movie"
  | "entrepreneur"
  | "review"
  | "auto"
  | "energy"
  | "celebrity"
  | "medical"
  | "gadgets"
  | "design"
  | "EE"
  | "security"
  | "mobile"
  | "estate"
  | "funny";
