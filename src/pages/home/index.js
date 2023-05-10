import '../../App.css';
import quadrado  from '../../assets/imagens/Quadrado-Formas-PNG.png'
import retangulo  from '../../assets/imagens/retangulo.png'
import circulo  from '../../assets/imagens/icone-cercle-noir.png'
import trapesio  from '../../assets/imagens/trapesio.png'
import triangulo  from '../../assets/imagens/triangulo-equilatero-8.png'
import {useNavigate} from 'react-router-dom';

function Home() {

    const navigate = useNavigate();

    const handleOnClickQuadrado = () => navigate('/quadrado');
    const handleOnClickRetangulo = () => navigate('/retangulo');
    const handleOnClickCirculo = () => navigate('/circulo');
    const handleOnClickTrapesio = () => navigate('/trapesio');
    const handleOnClickTriangulo = () => navigate('/triangulo');

  return (
    <div className="App">
      <h1 className='title'>C.A.P.F-(Calculadora de Área e Preço por Figura.)</h1>
      <div className='container'>
        <div>
          <img onClick={handleOnClickQuadrado} src={quadrado} alt="error1" title="Quadrado" className= "quadradoHome" />
          <img onClick={handleOnClickRetangulo} src={retangulo} alt="error" title="Retangulo" className= "Retangulo" />
        </div>
        <div>
          <img onClick={handleOnClickCirculo} src={circulo} alt="error" title="circulo" className= "circuloHome" />
          <img onClick={handleOnClickTrapesio} src={trapesio} alt="error" title="trapesio" className= "trapesioHome" />
        </div>
        <img onClick={handleOnClickTriangulo} src={triangulo} alt="error" title="triangulo" className= "Triangulo" />
      </div>
    </div>
  );
}

export default Home;
