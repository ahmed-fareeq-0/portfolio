import  './styleProjects.scss';

const Projects = () => {
  return (
    <div className='projects'>
        <h2 className='title'>3 best projects</h2>

        <div className='cards'>
                <div class="card">
                    <div class="profile-image">
                        <img src="https://thumbs.dreamstime.com/b/shopping-cart-icon-vector-eps-trolley-logo-web-icons-shop-button-trendy-design-style-fla-192646087.jpg" alt="profile-sample2" />
                    </div>
                        <figcaption className='info'>
                            <h3 className='nameProject'>ice-social</h3>
                            <p className='infoProject'>Which is worse, that everyone has his price, or that the price is always so low.</p>
                            <button>show website</button>
                        </figcaption>
                </div>

                <div class="card">
                    <div class="profile-image">
                        <img src="https://thumbs.dreamstime.com/b/shopping-cart-icon-vector-eps-trolley-logo-web-icons-shop-button-trendy-design-style-fla-192646087.jpg" alt="profile-sample2" />
                    </div>
                        <figcaption className='info'>
                            <h3 className='nameProject'>ice-social</h3>
                            <p className='infoProject'>Which is worse, that everyone has his price, or that the price is always so low.</p>
                            <button>show website</button>
                        </figcaption>
                </div>

                <div class="card">
                    <div class="profile-image">
                        <img src="https://thumbs.dreamstime.com/b/shopping-cart-icon-vector-eps-trolley-logo-web-icons-shop-button-trendy-design-style-fla-192646087.jpg" alt="profile-sample2" />
                    </div>
                        <figcaption className='info'>
                            <h3 className='nameProject'>ice-social</h3>
                            <p className='infoProject'>Which is worse, that everyone has his price, or that the price is always so low.</p>
                            <button>show website</button>
                        </figcaption>
                </div>

        </div>

    </div>
  );
}

export default Projects;
