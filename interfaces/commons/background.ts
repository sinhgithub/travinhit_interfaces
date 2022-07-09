export default interface IBackground {
  id: string | number;
  code: string | number;
  type: 'color' | 'image';
  value: string;
}