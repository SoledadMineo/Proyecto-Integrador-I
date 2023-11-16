
import logo from '../assets/logo1-removebg-preview.png';

export const HeaderComponent = () => {
  return (
    <div>
        <header>
          <nav>
          <div class="container-fluid">
            <a class="navbar-brand" href='/'>
              <img src={logo} alt="Logo Vajilla"/>
            </a>
            
          </div>
        </nav>
        </header>
    </div>
  )
}

export default HeaderComponent;
