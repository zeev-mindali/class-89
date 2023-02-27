class CarInfo {
  private baalut: string;
  private kinuy_mishari: string;
  private kvutzat_zihum: string;
  private mispar_rechev: number;
  private ramat_eivzur_betihuty: string;
  private ramat_gimur: string;
  private shnat_yitzur: string;
  private sug_delek_nm: string;
  private tokef_dt: string;
  private tozeret_nm: string;
  private tzeva_rechev: string;
  private zmig_ahori: string;
  private zmig_kidmi: string;

  constructor(
    $baalut: string,
    $kinuy_mishari: string,
    $kvutzat_zihum: string,
    $mispar_rechev: number,
    $ramat_eivzur_betihuty: string,
    $ramat_gimur: string,
    $shnat_yitzur: string,
    $sug_delek_nm: string,
    $tokef_dt: string,
    $tozeret_nm: string,
    $tzeva_rechev: string,
    $zmig_ahori: string,
    $zmig_kidmi: string
  ) {
    this.baalut = $baalut;
    this.kinuy_mishari = $kinuy_mishari;
    this.kvutzat_zihum = $kvutzat_zihum;
    this.mispar_rechev = $mispar_rechev;
    this.ramat_eivzur_betihuty = $ramat_eivzur_betihuty;
    this.ramat_gimur = $ramat_gimur;
    this.shnat_yitzur = $shnat_yitzur;
    this.sug_delek_nm = $sug_delek_nm;
    this.tokef_dt = $tokef_dt;
    this.tozeret_nm = $tozeret_nm;
    this.tzeva_rechev = $tzeva_rechev;
    this.zmig_ahori = $zmig_ahori;
    this.zmig_kidmi = $zmig_kidmi;
  }
}

export default CarInfo;
