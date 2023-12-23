import Acerca from './acerca/page'
import Inicio from './inicio/page'
import Menu from './menu/page'

export default function Home() {
	return (
		<>
			<section id='inicio'>
				<Inicio />
			</section>
			<section id='acerca' className='about section container full-lg-screen'>
                <Acerca />
            </section>
			<section id='menu' className='container section full-lg-screen' >
                <Menu />
            </section>
			<section></section>
			<section></section>
			<section></section>
		</>
	)
}
