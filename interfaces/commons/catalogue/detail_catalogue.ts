import INavigateLink from "../navigate_link";
import IPointType from "../point_type";

export default interface IDetailCatalogue {
  id: number;
  name: string;
  id_link: string | null;
  nav_link: INavigateLink | null;
  point_type: IPointType | null;
  is_important: boolean | null;
}