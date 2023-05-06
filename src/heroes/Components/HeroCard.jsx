import { Link } from "react-router-dom";

export const HeroCard = ({
  //PROP
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
  id,
}) => {
  const imgUrl = `/assets/img/${id}.jpg`;

  return (
    <div className="col-12 col-md-6 col-lg-4 col-xl-3 animate__animated animate__fadeIn">
      <div className="card">
        <div className="row">
          <div className="col-5">
            <img className="img-fluid" src={imgUrl} alt="" />
          </div>
          <div className="col-7">
            <p className="card-title fw-bold "> {superhero} </p>
            <p className="card-text"> {alter_ego} </p>

            {alter_ego !== characters && <p> {characters}</p>}

            <p> {first_appearance} </p>

            <Link to={`/hero/${id}`}>Más...</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
