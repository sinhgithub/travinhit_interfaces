import IAds from "../commons/ads";
import IBackground from "../commons/background";
import ICatalogue from "../commons/catalogue";
import IFont from "../commons/font";
import INavigateLink from "../commons/navigate_link";
import IUser from "../commons/user";

export default interface ICourse {
  id: number;
  createdAt: string;
  updatedAt: string;
  theme: string | null;
  name: string;
  catalogues: ICatalogue[];
  is_hot: boolean;
  link_to_post: string | number; //=> get by id form iCategory;
  navigate_link: INavigateLink;// link phía cource
  introduce: string; // html
  banner: string | null;
  title: string;
  share_link: INavigateLink[] | [];
  author: IUser; // get by id user
  ads: IAds[] | [];
  link_down_load: string | null;
  relate_post_ids: (string | number)[] | [];
  background: IBackground | null;
  font: IFont | null;
}