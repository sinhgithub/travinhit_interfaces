export default interface IPointType {
  type: string | null; // dot | numerical order | bullet point | icon
  isIndentation: boolean;
  id: string | number;
}
