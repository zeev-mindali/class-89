import Cat from "./Cat";

//description,img,title,url,video_file,category

class Song {
  public id: number;
  public description: string;
  public img: string;
  public title: string;
  public url: string;
  public video_file: string;
  public category: number;
  public category_name: string;

  constructor(
    description: string,
    img: string,
    title: string,
    url: string,
    video_file: string,
    category: number,
    category_name: string
  ) {
    this.url = url;
    this.description = description;
    this.img = img;
    this.title = title;
    this.url = url;
    this.video_file = video_file;
    this.category = category;
    this.category_name = category_name;
  }
}

export default Song;
