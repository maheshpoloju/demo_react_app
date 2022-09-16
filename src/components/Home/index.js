import "./index.css"
import doc_img from "./doc_img.jpg"
const Home = () => {
	return(
		<div className='home-container'>
				<div className='person-container'> 
					<div className='image-container'>
						<img className='profile-image' src={doc_img} />
					</div>
					<p className='description'>
						Hare Krishna, My name is Paavan Sarovar Das. I am a Board Certified  Family Medicine physician. I have been actively practicing physicianin in the field of medicine for over 22 years. During the past few years, I served as Medical Director at West Virginia University Urgent care. I witnessed the effects and outcomes of the pandemic very closely. The pandemic has recently caused people to feel the necessity of medical care in the society in general. With this website, I want to serve the very dear disciples of Srila Prabhupada. This website and this service is my offering to Srila Prabhupada and my dearest Gurumaharaj.
					</p>
				</div>
				{/* <div className='person-container'> */}
				{/* 	<img className='profile-image' src="https://scontent.fhyd5-1.fna.fbcdn.net/v/t1.18169-9/12688233_1673708176233049_8683549948292845686_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=EnmtqfmJfrEAX9zNQla&_nc_oc=AQnazLntgfeujpcbdgW_fvQofUHpzxqwjKoi5TcC-NX7n__AyRhnFGyVphb2-rM7BVs&_nc_ht=scontent.fhyd5-1.fna&oh=00_AT9RaB1xG2JksLcWLt8e4ObwVPTK0I-I6doJ0bkWpG_M5w&oe=6346CEA1" /> */}
				{/* 	<p className='description'> */}
				{/* 		His Grace Vaisesika Prabhu was born in 1956. As a teen, he was an avid spiritual seeker. Soon after receiving a Back to Godhead magazine from a friend in the spring of 1973, he moved into the ISKCON temple in San Francisco at the age of sixteen and, with the blessings of his parents, became a disciple of Srila Prabhupada and a fulltime monk dedicated to the practice of Krishna bhakti. */}
				{/* 	</p> */}
				{/* </div> */}
				{/* <div className='person-container'>  */}
				{/* 	<img className='profile-image' src="https://cms.famousbio.net/upload/peoples/36/NjMzNg-a-c-bhaktivedanta-swami-prabhupada.webp" /> */}
				{/* 	<p className='description'> */}
				{/* 		His Grace Vaisesika Prabhu was born in 1956. As a teen, he was an avid spiritual seeker. Soon after receiving a Back to Godhead magazine from a friend in the spring of 1973, he moved into the ISKCON temple in San Francisco at the age of sixteen and, with the blessings of his parents, became a disciple of Srila Prabhupada and a fulltime monk dedicated to the practice of Krishna bhakti. */}
				{/* 	</p> */}
				{/* </div> */}
		</div>
		
	)
}

export default Home