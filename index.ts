// common interface
import * as IAds from "./interfaces/commons/ads";
import * as IBackground from "./interfaces/commons/background";
import * as IContact from "./interfaces/commons/contact";
import * as IFont from "./interfaces/commons/font";
import * as INavigateLink from "./interfaces/commons/navigate_link";
import * as IPointType from "./interfaces/commons/point_type";
import * as ISeo from "./interfaces/commons/seo";
import * as IUnit from "./interfaces/commons/unit";

// big interface
import * as ICatalogue from "./interfaces/commons/catalogue";
import * as IChildCatalogue from "./interfaces/commons/catalogue/child_catalogue";
import * as IDetailCatalogue from "./interfaces/commons/catalogue/detail_catalogue";

import * as ICategory from "./interfaces/commons/category";
import * as IUser from "./interfaces/commons/user";

// page interface
import * as ICourse from "./interfaces/course";

export default {
  // common interface
  IAds,
  IBackground,
  IContact,
  IFont,
  INavigateLink,
  IPointType,
  ISeo,
  IUnit,

  // big interface
  ICatalogue,
  IChildCatalogue,
  IDetailCatalogue,
  ICategory,

  IUser,

  ICourse
}