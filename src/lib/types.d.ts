// import { Metadata, Sharp } from 'sharp/lib/types.d';

type Project = {
  slug: string;
  title: string;
  year: string;
  subtitle: string;
  coverImage: ImageWithColor;
  introImage: ImageWithColor;
  advisors: string;
  description: string[];
};

type ImageWithColor = {
  src: string;
  width: number;
  height: number;
  format: string;
  hasAlpha: boolean;
  color: string;
};
declare module '*?as=withColor' {
  var img: ImageWithColor;
  export default img;
}
