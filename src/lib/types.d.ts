type Project = {
  slug: string;
  title: string;
  coverImage: ImageMetadata;
  introImage: ImageMetadata;
  subtitle: string[];
  description: string[];
};

type ImageMetadata = {
  src: string;
  width: number;
  height: number;
};

declare module '*?intro' {
  var img: ImageWithMetadata;
  export default img;
}

declare module '*?cover' {
  var img: ImageWithMetadata;
  export default img;
}
