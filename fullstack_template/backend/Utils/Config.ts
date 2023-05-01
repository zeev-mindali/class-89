class Config {
  //todo: change the information....
  public WebPort = 4000; //backend port
  public mySQLhost = "ip address of mysql(localhost)";
  public mySQLuser = "your mysql user (root)";
  public mySQLpass = "your mysql password (12345678)";
  public mySQLdatabase = "your database name";
}

const config = new Config();
export default config;
