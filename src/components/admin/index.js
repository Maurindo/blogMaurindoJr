import './adminCss.css'

//função de página admin com export.

function AdminLogin() {
  return (
    <div className='corpoAdmin'>
      <div class="form-floating mb-3">
        <input
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating">
        <input
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="Password"
        />
        <label for="floatingPassword">Password</label>
        <button class="btn btn-light" type="submit">
              Search
            </button>
      </div>
    </div>
  );
}

export default AdminLogin;