 import picture from '../images/picture.png'
 
 const Home = () => {
    return ( 
        <div>
            <section className='about'>I'm an aspiring software developer and current student of CodeClan's Professional Software Development bootcamp in Glasgow. It's a project based course, and I've been working with Python & Javascript so far, but we'll be learning Java in the next couple of weeks.
            </section>
                <img src={picture} alt={picture}></img>
        </div>
     );
 }
  
 export default Home;