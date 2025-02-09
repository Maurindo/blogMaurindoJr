import "./crud.css"

function Crud() {
  return (
    <div class="corpoCrud">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Titulo
        </label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Seu titulo"
        />
        <label for="exampleFormControlInput1" class="form-label">
          Categoria
        </label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Categoria"
        />

      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          Conteudo blog
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="Digite aqui seu conteudo"
        ></textarea>
      </div>
      <label for="exampleFormControlInput1" class="form-label">
          Autor
        </label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Escrito por"
        />
        <div class="d-grid col-6 mx-auto">
        <button type="button" class="btn btn-light">Light</button>
  
</div>
    </div>
  );
}

export default Crud;
