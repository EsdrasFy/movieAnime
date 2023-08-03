import Ep from '../../images/opc2.jpg';
import './index.css';
function CardEpi({ imgEp, title, episodeo, id }) {
  const cardStyle = {
    width: '130px',
    minHeight: '74px',
    background: `url(${imgEp}) no-repeat `,
    backgroundSize: 'cover',
    // Adicione outros estilos, como borda, sombra etc. conforme necessário
  };
  return (
    <div className="CardEp" id={id}>
      <div className="imageEp" style={cardStyle}>
        <div className="labelsColumn">
          <span className="language cube">LEG</span>{' '}
          <span className="resolution cube">HD</span>
        </div>
      </div>
      <h1 className="titleEp" alt={title}>
        {title}...
      </h1>
      <div className="episode">
        <b>ASSISTIR</b>
      </div>
    </div>
  );
}

export default CardEpi;
