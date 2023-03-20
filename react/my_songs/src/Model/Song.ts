import Cat from "./Cat";

class Song {
  public url: string;
  public songName: string;
  public songImg: string;
  public category: string;

  constructor(
    url: string,
    songName: string,
    songImg: string,
    category: string
  ) {
    this.url = url;
    this.songName = songName;
    this.songImg = songImg;
    this.category = category;
  }
}

export default Song;
