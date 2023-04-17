class Song {
  public description: string;
  public img: string;
  public title: string;
  public url: string;

  constructor(description: string, img: string, title: string, url: string) {
    this.description = description;
    this.img = img;
    this.title = title;
    this.url = url;
  }
}

export default Song;
