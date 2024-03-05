import React from 'react'
import img1 from '../img/image-1.jpg'
import img2 from '../img/image-2.jpg'
import img3 from '../img/image-3.jpg'
import img4 from '../img/image-4.jpg'
import Button from './Button'

const services = () => {
  return (
    <section className="services py-120">
            <div className="">
               <h2 className="text-center text-4xl font-bold mb-14">Xizmatlar</h2>
               <ul className="flex flex-col justify-center items-center">
                <li className="flex items-start">
                    <img src={img1} alt="Hijoma" className="mr-16 mb-80"/>
                    <div className="w-full max-w-xl">
                        <h3 className="text-2xl font-bold mb-6">Hijoma</h3>
                        <p >Imom Termiziy Abdulloh ibn Abbos raziyallohu anhumodan rivoyat qilgan hadisda rasululloh sallallohu alayhi va sallam dedilar: «Sizlar hijoma qiladigan kunlaringizning eng yaxshisi 17, 19 va 21-kunlardir» (bu kunlar hijrij-kamariy hisobdagi oylar kunlaridir).</p>
                    </div>
                </li>
                <li className="flex items-start">
                    <img src={img2} alt="Manual terapiya" className="mr-16 mb-80"/>
                    <div className="w-full max-w-xl">
                        <h3 className="text-2xl font-bold mb-6">Manual terapiya</h3>
                        <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac metus placerat, pellentesque enim ac, rhoncus lectus. Maecenas et posuere lorem. Fusce sed massa sit amet elit viverra hendrerit.</p>
                    </div>
                </li>
                <li className="flex items-start">
                    <img src={img3} alt="Zuluk bilan davolash" className="mr-16 mb-80"/>
                    <div className="w-full max-w-xl">
                        <h3 className="text-2xl font-bold mb-6">Zuluk bilan davolash</h3>
                        <p >Girudoterapiya (lot. hirūdō — «zuluk» va qad. yun. θεραπεία — «davolash») — ma’lum kasalliklarni dorivor zuluklar (Hirudo medicinalis) yordamida davolash usuli. Fizioterapevtik muolaja, muqobil tibbiyotga oid sanaladi. Bunday zuluklar ushbu kichik sinf chuvchalchanglariga oid yagona tur hisoblanadi, qolganlari shifobaxsh ta’sir ko’rsatmaydi.</p>
                    </div>
                </li>
                <li className="flex items-start mb-14">
                    <img src={img4} alt="Tabiiy dori vositalari" className="mr-16 mb-80"/>
                    <div className="w-full max-w-xl">
                        <h3 className="text-2xl font-bold mb-6">Tabiiy dori vositalari</h3>
                        <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac metus placerat, pellentesque enim ac, rhoncus lectus. Maecenas et posuere lorem. Fusce sed massa sit amet elit viverra hendrerit.</p>
                    </div>
                </li>
               </ul>
               <div className="btn-wrapper flex flex-col items-center justify-center">
                <Button/>
               </div>
            </div>
        </section>
  )
}

export default services