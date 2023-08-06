import './index.css';
function GridAnimeInfo({
  logo,
  title,
  synopse,
  fav,
  country,
  ano,
  status,
  next,
}) {
  const backStyle = {
    background: `url(${logo}) no-repeat`,
  };
  return (
    <>
      <div className="dispFlex1">
        <div className="dispFlex">
          <div className="leftSide">
            <div className="logoLeftSide" style={backStyle}></div>
            <div className="titleLeftSide">
              <h1>{title}</h1>
            </div>
          </div>
          <div className="rigthSide">
            <div className="informationBlock">
              <div>
                <p>
                  Popularidade: # <b>{fav}</b>
                </p>
                <p>
                  Lançamento: <b>{ano}</b>
                </p>
                <p>
                  status: <b>{status}</b>
                </p>
              </div>
              <div className="moreInfos">
                {country ? (
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${country}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <p>
                    Infelizmente ainda não há trailler disponivel para {title}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
          <div className="allInfos">{synopse}</div>
      </div>
    </>
  );
}

export default GridAnimeInfo;
