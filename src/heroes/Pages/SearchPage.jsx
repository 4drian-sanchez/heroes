import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string'
import { useForm } from "../../Hooks/useForm"
import { getHeroesByName } from "../helpers/getHeroesByName";
import { HeroCard } from "../Components/HeroCard";

export const SearchPage = () => {

  const { search, onInputChange, onResetForm } = useForm({ search: '' });

  const navigate = useNavigate();
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);
  const heroes = getHeroesByName(q);



  const hundleSubmit = (e) => {
    e.preventDefault();
    navigate(`?q=${search}`);
    onResetForm('');
  }


  return (
    <header className="container-xl">
      <h1 className="mt-4 mb-5 fs-4 text-center">Busca tu heroe favorito</h1>

      <div className="row">
        <div className="col-12 col-md-5">
          <form
            autoComplete="off"
            noValidate
            onSubmit={hundleSubmit}
          >
            <div className="form-floating">
              <input
                type="text"
                name="search"
                className="form-control"
                id="hero"
                placeholder="Busca un heroe"
                value={search}
                onChange={onInputChange}
              />
              <label htmlFor="hero">Busca un heroe</label>

            </div>

            <button
              className="btn btn-outline-success mt-3"
            >Buscar</button>
          </form>
        </div>

        <div className="col-12 col-md-7">

          {
            (q === '')
              ? <p className="alert alert-info text-center">Busca un heroe</p>
              : (heroes.length === 0)
                && <p className="alert alert-danger text-center">{`El heroes ${q} no existe`}</p>
          }


          {
            heroes.map(hero => (
              <HeroCard {...hero} key={hero.id} />
            ))
          }

        </div>
      </div>

    </header>
  )
}
