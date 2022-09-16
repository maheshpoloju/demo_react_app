import { useState } from "react";
import doc1 from "./doc1.jpg"
import doc2 from "./doc2.png"
import doc3 from "./doc3.jpg"
import "./index.css"
const teamData = [
	{
		id:1,
		imageUrl: doc2,
		description: "Srila Prabhupada was born Abhay Charan De on September 1, 1896 to a practicing Hindu family in Kolkata.  As a youth growing up in British-controlled India, Abhay became involved with Mahatma Gandhi’s civil disobedience movement to secure independence for his nation. A 1922 meeting with a prominent scholar and religious leader, Srila Bhaktisiddhanta Sarasvati, proved most influential on Abhay’s future calling. Srila Bhaktisiddhanta was a leader in the Gaudiya Vaishnava denomination, a monotheistic tradition within the broad Hindu culture. He asked Abhay to bring the teachings of Lord Krishna to the English-speaking world. Srila Prabhupada’s most significant contributions, perhaps, are his books. He authored over 70 volumes on the Krishna tradition, which are highly respected by scholars for their authority, depth, fidelity to the tradition and clarity. Several of his works are used as textbooks in university courses. His writings have been translated into 76 languages. His most prominent works include: Bhagavad-gita As It Is, the multi-volume Srimad-Bhagavatam and the set of Sri Caitanya-caritamrita books."
	},
	{
		id:2,
		imageUrl: doc3,
		description: "His Grace Vaisesika Prabhu was born in 1956. As a teen, he was an avid spiritual seeker. Soon after receiving a Back to Godhead magazine from a friend in the spring of 1973, he moved into the ISKCON temple in San Francisco at the age of sixteen and, with the blessings of his parents, became a disciple of Srila Prabhupada and a fulltime monk dedicated to the practice of Krishna bhakti."
	},
	{
		id:3,
		imageUrl: doc1,
		description: "Hare Krishna, My name is Paavan Sarovar Das. I am a Board Certified  Family Medicine physician. I have been actively practicing physicianin in the field of medicine for over 22 years. During the past few years, I served as Medical Director at West Virginia University Urgent care. I witnessed the effects and outcomes of the pandemic very closely. The pandemic has recently caused people to feel the necessity of medical care in the society in general. With this website, I want to serve the very dear disciples of Srila Prabhupada. This website and this service is my offering to Srila Prabhupada and my dearest Gurumaharaj."
	}
]

const Home = () => {
	return(
		<div className='home-container'>
			<div className='d-flex justify-content-center flex-wrap'>
				{
					teamData.map(each => {
						
						return(
							<div className='person-container' key={each.id}>
								<div className='image-container'> 
									<img className='profile-image' src={each.imageUrl} />
								</div>
								<p className='description'>
									{each.description}
								</p>
								
							</div>
						)
					})
				}
				
			</div>
		</div>
		
	)
}

export default Home