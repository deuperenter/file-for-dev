import { StringObjectArray } from "./utils";

export type Reviews = {
  content: {
    rId: string;
    uProfile: string;
    uName: string;
    uCtry: string;
    rTitle: string;
    rText: string;
    rating: number;
    rImgs?: string[];
    rvideo?: string[];
    rDate: string;
    rOptions?: StringObjectArray;
    totalUseful: number;
    useful: boolean;
  }[];
};

export type Options = {
  type: { [k: string]: string[] | StringObjectArray };
  able: string[];
};

export type Rating = {
  totalRating: number;
  ratingScore: number;
  score5: number;
  score4: number;
  score3: number;
  score2: number;
  score1: number;
};

export type Detail = {
  pId: string;
  category: string[];
  seller: string;
  options?: Options;
  rating: Rating;
  fromSelImg?: string[];
  pDesc: string;
  reviews: Reviews;
};

export type SubDetails = {
  pSubId: string;
  pImgs: string[];
  pVideo?: string[];
  pVideoThumb?: string[];
  pName: string;
  pPrice: number;
  pCtry: string;
  discount?: number;
  stock: number;
  feature: string;
  pInfo: string;
};

export type Delivery = {
  dFee: number;
  dDate: string;
  dImpCharge: number;
  ableCtry: string[];
};
