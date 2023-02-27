import "./Page404.css";

function Page404(): JSX.Element {
  return (
    <div className="Page404">
      <h1>Oops, matan did it again....</h1>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/t3otBjVZzT0?controls=0"
        title="Page not found"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}

export default Page404;
