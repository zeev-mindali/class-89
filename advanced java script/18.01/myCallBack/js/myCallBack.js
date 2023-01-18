fs.readdir(source, function (err, files) {
  if (err) {
    console.log("error finding files:" + err);
    return;
  }
  files.foreach(function (fileName, fileIndex) {
    console.log(fileName);
    gm(source + fileName).size(function (err, values) {
      if (err) {
        return;
      }
      // .
      // .
      // .
      // .
      // .
      // .
      // .
    });
  });
});
