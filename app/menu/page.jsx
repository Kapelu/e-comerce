import './style.css'
import dataMenu from '@/json/menu.json'

export default function Menu() {
	const renderList = (category) => {
		return category.map((item) => (
			<tr key={item.id} className='lista'>
				<td>{item.nombre}</td>
				<td>$ {item.precio}</td>
			</tr>
		))
	}

	const renderCategory = (categoryName, category) => {
		return (
			<aside key={categoryName} className='category'>
				<h3>{categoryName}</h3>
				<table>
					<tbody>{renderList(category)}</tbody>
				</table>
			</aside>
		)
	}

	return (
		<div className='section'>
			<h2 className='section-title'>Menú</h2>
			<article className='menu-container'>
				{Object.entries(dataMenu.comidas[0]).map(
					([categoryName, category]) =>
						renderCategory(categoryName, category)
				)}
			</article>
		</div>
	)
}
