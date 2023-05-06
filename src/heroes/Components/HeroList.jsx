import { useMemo } from "react"
import { getHeroesByPublisher } from "../helpers"
import { HeroCard } from "./HeroCard"

export const HeroList = ({ publisher }) => {

    const hero = useMemo( () => getHeroesByPublisher(publisher));
    
    return (

        <>

            <div className="row row-gap-3 ">
                {hero.map(
                    (hero) => (

                        <HeroCard
                            key={hero.id}
                            {...hero}
                        />

                    ))}
            </div>

        </>
    )
}
