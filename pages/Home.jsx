import NavProjeto from '../components/NavProjeto'
import Carrosel from '../components/Carrosel'
import Cards from '../components/Cards'
import Cards3 from '../components/Cards3'
import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'
import Espacamento from '../components/Espacamento'
import Texto from '../components/Texto'

function Home() {
  return (
    <div>
     <Cabecalho/>
     <NavProjeto />
     <Carrosel />
     <Espacamento />
     <Texto/>
     <Cards3/>
     <Texto/>
     <Espacamento />
     <Cards />
     <Espacamento />
     <Rodape />

    </div>
  )
} 
 export default Home
