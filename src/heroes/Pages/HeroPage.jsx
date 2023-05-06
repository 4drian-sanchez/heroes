import { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom"
import { getHeroById } from '../helpers'

export const HeroPage = () => {

  const { id } = useParams();

  const hero = useMemo(() => getHeroById(id), [id]);

  const navigate = useNavigate();
  
  const onReturn = () => (
    navigate(-1)
  )
   
  

  if (!hero) return <Navigate to='/marvel' />

  return (
    <div className='row mt-5 px-4 animate__animated animate__fadeInLeft'>
      <div className="col-12 col-sm-6 col-md-5">
        <img
          className="img-fluid img-height"
          src={`/assets/img/${ id }.jpg`}
          alt=""/>
      </div>
      <div className="col-12 col-sm-6 col-md-7 mt-2 mt-sm-0 py-5 py-sm-0">
        <h1 className="fs-2">{ hero.superhero} </h1>
        <p className="fs-5 mt-4 mb-0"><b>Alter ego:</b> { hero.alter_ego } </p>
        <p className="fs-5 mt-2 mb-0"><b>Publisher:</b> { hero.publisher } </p>
        <p className="fs-5 mt-2 mb-4"><b>First appearance:</b> { hero.first_appearance } </p>
        
        <h3 className="fs-4">Characters:</h3>
        <p className="fs-5">{ hero.characters}</p>
        <button 
            className="btn btn-primary"
            onClick={ onReturn}
            >Regresar</button>
      </div>
    </div>
  )
}
