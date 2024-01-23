// import { Metadata, Sharp } from 'sharp/lib/types.d';

type Project = {
  slug: string;
  title: string;
  coverImage: ImageWithLqip;
  introImage: ImageWithLqip;
  subtitle: string[];
  description: string[];
};

type ImageWithLqip = {
  src: string;
  width: number;
  height: number;
  format: string;
  hasAlpha: boolean;
  lqip: string;
};
declare module '*?as=lqip' {
  var img: ImageWithLqip;
  export default img;
}
