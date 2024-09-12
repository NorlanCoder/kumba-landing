import React from 'react'
import { FaRegFlag } from 'react-icons/fa6'
import { FiUsers } from 'react-icons/fi'
import { MdOutlineHomeRepairService } from 'react-icons/md'
import Drapeau from '../assets/img/drapeau.svg';
import Service from '../assets/img/service-client.svg';
import Utilisateur from '../assets/img/utilisateurs.svg';
import Forme7 from '../assets/img/forme7.png';

const Statistical = () => {

  const stats = [
    {
      logo: <img src={Utilisateur} width={30} />,
      data: "30+",
      title: "Users",
    },
    {
      logo: <img src={Drapeau} width={30} />,
      data: "40+",
      title: "Pays",
    },
    {
      logo: <img src={Service} width={30} />,
      data: "30+",
      title: "Services",
    },
  ]
  return (
    <section className="py-14" id="statistical">
      <div className="max-w-6xl mx-auto px-4 md:px-8 select-none">
        <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-gray-800 text-3xl text-center font-semibold sm:text-5xl sonia">Nos clients sont toujours satisfaits</h3>
            <p className="mt-3 text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis sollicitudin quam ut tincidunt.
            </p>
        </div>
        <div className="mt-12">
            <ul className="max-w-sm sm:max-w-2xl mx-auto grid gap-y-8 gap-x-8 sm:grid-cols-3 px-2">
                {stats.map((item, idx) => (
                  <li key={idx} className=" text-center border hover:border-terre hover:scale-105 hover:shadow-md hover:shadow-terre transition-all duration-300 px-4 py-4 rounded-lg">
                    <div className="flex items-center justify-center text-red-600">
                      {item.logo}
                    </div>
                    <h4 className="text-3xl text-gray-700 font-semibold mt-2">{item.data}</h4>
                    <p className="mt-1 text-gray-700 text-md font-semibold">{item.title}</p>
                  </li>
                ))}
            </ul>
        </div>

        <section className="hidden sm:block opacity-50 absolute left-10 -bottom-72 -z-20 transform -rotate-6">
          <img src={Forme7} className="w-[13rem]" alt="Bilan Image" title='Bilan Image' />
        </section>
      </div>
  </section>
  )
}

export default Statistical