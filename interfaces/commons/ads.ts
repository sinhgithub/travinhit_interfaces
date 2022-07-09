import INavigateLink from "./navigate_link";
import ISeo from "./seo";

export default interface IAds {
  id: string;
  banner: string | null;
  avatar: string | null;
  title: string;
  link_to_id: string;
  navigate_link: INavigateLink | null;
  is_hot: boolean;
  seo: ISeo;
  order: number;
  position: string | null; // top , bottom (use for main post)
}