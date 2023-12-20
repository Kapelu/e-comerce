import Link from 'next/link'
//import './style.css'

export default function Inicio() {
	const background = '/image104.jpg'
	const attachmentValue = 'fixed'
	const opacityColor = 'var(--black-alpha-color)'
    const fontTitle =''
	const colorTitle = 'var(--text-title-color)'
    const fontSubtitle ='Roboto Slab'
    const colorSubtitle = 'var(--text-subtitle-color)'

	return (
		<article
			class='hero-image'
			style={{
				backgroundImage: `url(${background})`,
				backgroundAttachment: attachmentValue,
			}}
		>
			<aside
				class='hero-image-opacity'
				style={{backgroundColor: opacityColor}}
			>
				<div class='hero-image-content'>
                <h1 class='hero-image-title' style={{color: colorTitle, fontFamily: fontTitle}}>
						La Cuchara
					</h1><h2 class='hero-image-subtitle' style={{color: colorSubtitle, fontFamily: fontSubtitle}}>
						Restaurant
					</h2>
                    <br />
					<Link href='/contacto' class='second-btn'>
						Menú
					</Link>
				</div>
			</aside>
		</article>
	)
}