// class Config {
//   public WebPort = 4000;
//   public mySQLhost = "localhost";
//   public mySQLuser = "root";
//   public mySQLpass = "12345678";
//   public mySQLdatabase = "youtube";
// }

// const config = new Config();
// export default config;

class Config {}

class DevelopmentConfig extends Config {
  //mongo db configuration
  public isDevelopment = true;
  public connectionString = "mongodb://localhost:27017/local";

  //mysql db configuration
  public WebPort = 4000;
  public mySQLhost = "localhost";
  public mySQLuser = "root";
  public mySQLpass = "12345678";
  public mySQLdatabase = "youtube";
}

class ProductionConfig extends Config {
  public isDevelopment = true;
  public connectionString = "mongodb://81.25.33.89:27017/local"; //סתם כתובת איי פי
  //   public WebPort = 4000;
  //   public mySQLhost = "localhost";
  //   public mySQLuser = "root";
  //   public mySQLpass = "12345678";
  //   public mySQLdatabase = "youtube";
}

//const config = process.env.MODE_ENV === "production" ? new ProductionConfig() : new DevelopmentConfig();
const config = new DevelopmentConfig();

export default config;
