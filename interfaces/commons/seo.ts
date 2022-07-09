import IUnit from "./unit";

export default interface ISeo {
  is_seo: boolean;
  seo_val: number | null;
  unit: IUnit | null;
}