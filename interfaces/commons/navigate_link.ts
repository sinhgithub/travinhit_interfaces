export default interface INavigateLink {
  type: string; // blank | not blank
  link: string;
  id: string | number;
  name: string;
  slug: string | null
  avatar?: string | null;
}