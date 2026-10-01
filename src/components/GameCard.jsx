// destruct  
const GameCard = ({ titulo, preco, imagem }) => {
    return (
        <div className="bg-black rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-4 hover:border-[#95ff00]">
            <img src={imagem} alt={titulo} className="w-full h-[250px] object-cover" />

            <article className="p-4 text-center">
                <h2 className="text-xl text-[#95ff00] font-bold mb-3 uppercase">{titulo}</h2>
                <p className="text-white text-2xl font-bold mb-4">{preco}</p>

                <button className="bg-gradient-to-r from-cyan-400
        to-purple-600 w-[50%] py-4 px-4 rounded-[20px]
        border-none cursor-pointer font-semibold transition-transform
        duration-300 hover:bg-green-600 hover:text-white 
        hover:scale-105">
                    Comprar
                </button>
            </article>

        </div>
    )
}

export default GameCard