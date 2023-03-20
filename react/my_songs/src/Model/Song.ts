import Cat from "./Cat";

class Song {
  public url: string;
  public artist: string;
  public songName: string;
  public songImg: string;
  public category: string;

  constructor(
    url: string,
    artist: string,
    songName: string,
    songImg: string,
    category: string
  ) {
    this.url = url;
    this.artist = artist;
    this.songName = songName;
    this.songImg = songImg;
    this.category = category;
  }
}

export default Song;
