import "./styles.css";
import foto from '../../imagens/te.jpeg'

function ExtruturaCorpo() {
  return (
    <div className="corpo">
      <div className="corpo1">
        <h1 className="corpoTitulo">Título Qualquer</h1>
        <p className="corpoData">14/01/1897</p>
        <p className="corpoTexto">
          Lorem Ipsum "Neque porro quisquam est qui dolorem ipsum quia dolor sit
          amet, consectetur, adipisci velit..." "Não há ninguém que ame a dor por
          si só, que a busque e queira tê-la, simplesmente por ser dor..." Duis
          posuere tortor ut purus iaculis, in tincidunt tortor congue. Phasellus
          ligula metus, mollis nec enim tristique, hendrerit congue risus. Fusce
          efficitur mauris eget dignissim efficitur. Sed eget enim massa.
          Suspendisse vehicula dignissim viverra. Duis ut nisl in ipsum aliquet
          faucibus. Mauris at gravida augue. Donec ultricies tempor ipsum non
          pulvinar. Nunc sagittis nunc quam, eu blandit nibh sodales in. Vivamus
          vitae hendrerit ex. Nulla vitae magna eget felis pharetra efficitur sit
          amet at magna. Nullam elementum consequat diam id mollis. Aenean
          molestie tincidunt imperdiet. Proin porttitor, nibh et vehicula tempus,
          risus odio ullamcorper arcu, nec scelerisque velit felis vel augue.
          Nulla iaculis varius velit sed suscipit. Mauris fringilla ultrices
          metus. Suspendisse fermentum, metus ac ultrices rhoncus, urna risus
          cursus ligula, a congue enim mi in urna. Nam ultricies nunc nec
          scelerisque auctor. Proin venenatis fringilla tincidunt. In sit amet
          nisi condimentum, commodo nibh vel, convallis turpis. Aliquam efficitur
          justo massa, eu sagittis elit ullamcorper vel.
        </p>
      <div className="corpoAutor">
        <img className="foto" src={foto}/><p>nome autor</p>
      </div>
      </div>
      <div className="corpo2">
        r
      </div>
    </div>
  );
}

export default ExtruturaCorpo;
