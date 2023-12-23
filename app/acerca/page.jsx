import './style.css'
import Image from 'next/image'
import Quienes from '@/public/somos.jpg'

export default function Acerca() {
	return (
		<>
			<article className='text-lg-right'>
				<aside className='text-center'>
					<h2 className='section-title'>¿Quienes somos?</h2>
					<p>
						Somos un lugar donde la calidez y la autenticidad se
						fusionan para crear una experiencia única. En nuestra
						cocina, cada plato cuenta una historia de tradición y
						sabor, desde las arepas más tiernas hasta las empanadas
						más crujientes.
					</p>
					<p>
						Nuestra historia se remonta al año 2010, donde decidimos
						compartir nuestras recertas familiares, y a lo largo de
						los años, hemos mantenido nuestros valores de tradición,
						autenticidad y compromiso con la calidad. Cada bocado es
						una celebración de la cocina Colombiana en su forma más
						auténtica.
					</p>
				</aside>
			</article>
			<article>
				<Image
					src={Quienes}
					className='foto-perfil box-shadow-1'
                    style={{borderRadius: '15px'}}
					alt='logo'
					width='400'
					priority={true}
					as='Quienes Somos'
				/>
				<p style={{font:'var(--dancing-script)', color:'var(--first-color)'}}>
					"Los invitamos a que vengan y experimenten la riqueza de la
					gastronomía colombiana en un ambiente acogedor y familiar.
					En <strong>La Cuchara</strong> , siempre seran recibido con
					una sonrisa y un plato lleno de sabores inolvidables".
				</p>
				<p>¡Los esperamos...!</p>
			</article>
			<article>
				<aside className='text-center'>
					<h2 className='section-title'>Nuestros Valores</h2>
					<p>
						Se centran en la calidad de los ingredientes, siempre
						buscando resaltar los sabores auténticos que hacen única
						a la comida colombiana. Cada receta es preparada con
						esmero y pasión, utilizando productos frescos y locales
						para ofrecer lo mejor a nuestros clientes.
					</p>
				</aside>
				<aside className='text-center'>
					<h2 className='section-title'>Nuestra Visión</h2>
					<p>
						Es convertirme en el destino preferido de aquellos que
						buscan no solo llenar su estómago, sino también vivir
						una experiencia culinaria auténtica. Quiero ser el lugar
						donde las familias se reúnen para disfrutar de momentos
						especiales alrededor de platos deliciosos que evocan la
						esencia misma de Colombia.
					</p>
				</aside>
			</article>
		</>
	)
}
