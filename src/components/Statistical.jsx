import React from 'react'
import { FaRegFlag } from 'react-icons/fa6'
import { FiUsers } from 'react-icons/fi'
import { MdOutlineHomeRepairService } from 'react-icons/md'
import Drapeau from '../assets/img/drapeau.svg';
import Service from '../assets/img/service-client.svg';
import Utilisateur from '../assets/img/utilisateurs.svg';

const Statistical = () => {

  const stats = [
    {
      logo: <img src={Utilisateur} width={30} />,
      data: "3.000+",
      title: "Utilisateurs"
    },
    {
      logo: <img src={Drapeau} width={30} />,
      data: "40+",
      title: "Pays"
    },
    {
      logo: <img src={Service} width={30} />,
      data: "30+",
      title: "Services"
    },
  ]
  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-gray-800 text-3xl text-center font-semibold sm:text-4xl">Nos clients sont toujours satisfaits</h3>
            <p className="mt-3 text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis sollicitudin quam ut tincidunt.
            </p>
        </div>
        <div className="mt-12">
            <ul className="flex flex-col gap-4 items-center justify-center sm:flex-row">
                {stats.map((item, idx) => (
                  <li key={idx} className="w-full text-center border border-gray-300 hover:scale-110 hover:shadow-md transition-all duration-300 px-12 py-4 rounded-lg sm:w-auto">
                    <div className="flex items-center justify-center text-red-600">
                      {item.logo}
                    </div>
                    <h4 className="text-4xl text-gray-700 font-semibold mt-2">{item.data}</h4>
                    <p className="mt-1 text-gray-700 font-medium">{item.title}</p>
                  </li>
                ))}
            </ul>
        </div>
      </div>
  </section>
  )
}

export default Statistical