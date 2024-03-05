import React from 'react'
import HeroImg from '../img/hero-img.png'
import Button from './Button'

const Hero = () => {
  return (
    <section className="hero bg-aqua">
            <div className="container max-w-1140 px-5 mx-auto flex items-center justify-between">
                <div className="left w-full max-w-[500px]">
                    <h2 className="text-white text-4xl font-bold mb-4">Tabiiy davolash usullari yordamida kasalliklardan xalos bo’ling.</h2>
                    <p className="text-white text-lg mb-12">Hijoma, manual terapiya, zuluk va turli tabiiy giyohlar eng ko’p uchraydigan kasalliklarni yengishda yordam beradi. Sog’ligingizni o’z ishining professionallariga ishonib topshiring.</p>
                    <Button/>
                </div>
                <div className="right">
                    <img src={HeroImg} alt="Bratti qattigi"/>
                </div>
            </div>
        </section>
  )
}

export default Hero