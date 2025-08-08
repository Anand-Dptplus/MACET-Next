import React from 'react'
import styles from '@/app/(main)/(pages)/(about)/about-millat-education-society/page.module.css'

const founders = [
	{
		img: '/images/about/AkhlaqUrRehman.jpg',
		name: 'Late Hon’ble Dr. Akhlaq Ur Rehman Kidwai',
		role: 'Patron',
	},
	{
		img: '/images/about/aliahmad.jpg',
		name: 'Late Justice Sarwar Ali',
		role: 'Founder President',
	},
	{
		img: '/images/about/JusticeSarwarAli.jpg',
		name: 'Late Justice Ali Ahmad',
		role: 'President( 1996-2016)',
	},
	{
		img: '/images/about/AhmadAbdulHai.jpg',
		name: 'Dr. Ahmad Abdul Hai',
		role: 'Founder Treasurer',
	},
	{
		img: '/images/about/MrFahimuddin.jpg',
		name: 'Late Mr. Fahimuddin',
		role: 'Secretary(1987 - 2000)',
	},
	{
		img: '/images/about/FounderPresident.jpg',
		name: 'Discussion with Founder President',
		role: '',
	},
]

const AboutMillatContent = () => {
	return (
		<div className="Css-space">
			<div className="container">
				<div className="row">
					<div className="col-lg-12 mb-4">
                        <p className={styles.millatDescription}>Maulana Azad College of Engineering & Technology, was established in 1987 by Millat Education Society, registered under Society Registration Act 21, 1860 vide Registration No. 277 dated 19/10/1987.</p>
                        <p className={styles.millatDescription}>The main mission of the Society is to promote establishment of Scientific/Professional Tech. Institution among the Minorities particularly so that their educational and economical levels are enhanced. Our Founder President was (Late) Mr. Justice Sarwar Ali and Secretary (Late) Mr. Fahimuddin Ahmad.
						</p>
					</div>
				</div>
				<div
					className={`row justify-content-between ${styles.millatFounderRow}`}
				>
					{founders.map((f, idx) => (
						<div
							key={f.name + idx}
							className={`col-lg-4 ${styles.millatFounderCol}`}
						>
							<div className={styles.millatMessageCard}>
								<div className={styles.millatMessageImg}>
									<img
										src={f.img}
										alt={f.name}
										title={f.name}
										loading="lazy"
									/>
								</div>
								<h3>{f.name}</h3>
								{f.role && <p>{f.role}</p>}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default AboutMillatContent
