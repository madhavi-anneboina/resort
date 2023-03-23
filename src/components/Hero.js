import React from 'react'

const Hero = ({childern,hero}) => {
  return (
    <div>
     <header className={hero}>
         {childern}
     </header>
    </div>
  )
}

Hero.defaultProps = {
    hero:'defaultHero'
}

export default Hero
