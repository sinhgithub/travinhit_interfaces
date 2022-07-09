import INavigateLink from "../navigate_link";

export default interface ICategory {
  id: string | number;
  code: string | number | null;
  name: string;
  banner: string | null;
  avatar: string | null;
  slug: string | null;
  link_to_id: string | null;
  navigate_link: INavigateLink;
}