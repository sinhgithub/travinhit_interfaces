import IAds from "../ads";
import INavigateLink from "../navigate_link";
import ISeo from "../seo";
import IDetailCatalogue from "./detail_catalogue";

export default interface ICatalogue {
  id: number | string;
  code: string | number | null;
  createdAt: string;
  updatedAt: string;
  order: number;
  name: string;
  link_to_id: string | null;
  navigate_link: INavigateLink;
  is_hot: boolean;
  seo: ISeo;
  ads: IAds[] | null
  detail: IDetailCatalogue[];
}