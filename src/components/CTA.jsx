import React from 'react'

const CTA = () => {
  return (
    <section className="cta pt-16 bg-aqua pb-16">
            <div className="container max-w-1140 px-5 mx-auto flex flex-col justify-center items-center">
                <h3 className="text-white text-4xl font-bold mb-10">Qabulga ro’yxatdan o’ting</h3>
                <div className="cta-links">
                    <a href="#" className="inline-block border-2 rounded-lg px-6 py-3 text-white text-15 font-bold mr-10">Qo’ng’iroq qilish</a>
                    <a href="#" className="inline-block border-2 rounded-lg px-6 py-3 text-white text-15 font-bold">Telegramdan yozish</a>
                </div>
            </div>
        </section>
  )
}

export default CTA