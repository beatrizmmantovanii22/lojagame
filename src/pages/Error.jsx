import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <main className="px-[5%] my-20 grow text-center
     flex flex-col items-center justify-center">
      <h2 className="text-6xl font-bold text-[#95ff00]">404</h2>
      <p className="text-2xl text-cyan-100 font-semibold mb-2">Ops! Página não encontrada</p>
      <p className="text-gray-400 mb-8 max-w-md">
        Parece que você se perdeu no mapa do Jogo. A página que
        você está procurando não existe ou foi removida
      </p>
      <Link to="/"
        className="text-white py-3 px-20 rounded-2xl font-bold
      text-lg transition-transform duration-300 
      hover:scale-110 hover:text-cyan-400"

      >Voltar para a Home</Link>
    </main>
  )
}

export default Error