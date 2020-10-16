import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import ReactDOM from 'react-dom';

class Head extends React.Component{
  render(){
    return(
      <React.Fragment>
      <script type="style/css" src="css/animate.min.css"></script>
      <script type="text/javascript" src="js/jquery.js"></script>
      <script type="text/javascript" src="js/bootstrap.min.js"></script>
      <script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=true"></script>
      <script type="text/javascript" src="js/jquery.inview.min.js"></script>
      <script type="text/javascript" src="js/wow.min.js"></script>
      <script type="text/javascript" src="js/mousescroll.js"></script>
      <script type="text/javascript" src="js/smoothscroll.js"></script>
      <script type="text/javascript" src="js/jquery.countTo.js"></script>
      <script type="text/javascript" src="js/lightbox.min.js"></script>
      <script type="text/javascript" src="js/main.js"></script>
    <header>
    <div className="menu">
    <div className="collapse-navar">
      <ul className="nav navbar-nav navbar-right">
        <li className="scroll active"><a href="#home">Inicio</a></li>
        <li className="scroll"><a href="#about-us">Quienes somos</a></li>
        <li className="scroll"><a href="#quedicen">Grupo de trabajo</a></li>
        <li className="scroll"><a href="#services">Servicios</a></li>
        <li className={"scroll"} onClick={()=>"http://localhost/"}><a href="http://localhost/">Productos</a></li>
          <li className="scroll"><a href="#portfolio">Galeria</a></li>
        <li className="scroll"><a href="#team">Que dicen nuestros clientes</a></li>
        <li className="scroll"><a href="#contact">Contacto</a></li>
      </ul>
    </div>
    </div>
    <section id={"home"}>
    <div className="letra">
        <div className={"tem-active"}>
          <div className="caption">
            <h1 className="animated fadeInLeftBig espacio">BIENVENIDOS A SEXO SANO, VIDA SANA </h1>

          </div>
        </div>
        <div className={"item"}>
          <div className="caption">
            <h1 className="animated fadeInLeftBig espacio colores">Hablamos sin tapujos y enseñamos con el corazón</h1>
            <a data-scroll class="btn btn-submit animated fadeInUpBig espacio" href="#services">Comenzar</a>
          </div>
        </div>
    </div>
      <a className="left-control" href="#home-slider" data-slide="prev"><i className="fa fa-angle-left"></i></a>
      <a className="right-control" href="#home-slider" data-slide="next"><i className="fa fa-angle-right"></i></a>
      <a id="tohash" href="#services"><i className="fa fa-angle-down"></i></a>

    <div className="main-nav">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
      </div>
    </div>
    </section>
  </header>
      <section id="about-us" className="parallax">
      <div className="container">
      <div className="row">
       <div className="col-sm-6">
         <div className="about-info wow fadeInUp" data-wow-duration="100000ms" data-wow-delay="3000000ms">
           <h3>¿Quienes somos?</h3>
           <p className="pabout-us">Somos un grupo de desarroladores, diseñados para ofrecer una mejor información sobre productos, enfermedades de transmición sexual, metodos de planificación, embarazos a temprana edad y como tener una mejor experiencia a la hora de tener relaciones sexuales con tú pareja, manejamos otro tipo de sesión donde ayudaremos a todas aquellas parejas que tienen problemas y así salvar aquello que crean perdido, como el matrimonio o quizas una relación conyugal. todo esto es basado mediante tips, cómo lo son las zonas más sensibles,cuales son los productos más efectivos y como utilizarlos,como controlar la eyaculación precoz, como prodias durar más tiempo en la cama, entre muchas más cosas y como ejecutarlas, solo es que agendes una cita con nostros o visita nuestro aplicativo y aprenderas muchas cosas.
           </p>
         </div>
       </div>
       <div className="col-sm-6">
         <div className="our-skills wow fadeInDown" data-wow-duration="100000ms" data-wow-delay="300000ms">
           <div className="single-skill wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
             <p className="lead">Experiencia de los usuarios</p>
             <div className="progress">
               <div className="progress-bar progress-bar-primary six-sec-ease-in-out" role="progressbar"  aria-valuetransitiongoal="95">95%</div>
             </div>
           </div>
           <div className="single-skill wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="400ms">
             <p className="lead">Información</p>
             <div className="progress">
               <div className="progress-bar progress-bar-primary six-sec-ease-in-out" role="progressbar"  aria-valuetransitiongoal="90">75%</div>
             </div>
           </div>
           <div className="single-skill wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="500ms">
             <p className="lead">Atención</p>
             <div className="progress">
               <div className="progress-bar progress-bar-primary six-sec-ease-in-out" role="progressbar"  aria-valuetransitiongoal="85">60%</div>
             </div>
           </div>
           <div className="single-skill wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
             <p className="lead">Clases</p>
             <div className="progress">
               <div className="progress-bar progress-bar-primary six-sec-ease-in-out" role="progressbar"  aria-valuetransitiongoal="90">85%</div>
             </div>
           </div>
         </div>
       </div>
      </div>
      </div>
      </section>

      <section id="quedicen">
      <div className="container">
      <div className="row">
       <div className="heading text-center col-sm-8 col-sm-offset-2 wow fadeInUp" data-wow-duration="1200ms" data-wow-delay="300ms">
         <h2 className="pgrupo-trabajo">Grupo de trabajo</h2>
         <p className="pgrupo-trabajo">Somos un grupo comprometido con nuestros clientes brindando la mejor información sobre enfermedades de transmición sexual, embarazos a temprana edad, metodos de planificación y como tener un mejor desempeño a la hora de tener sexo con tú pareja, más aya de esto somos responsables y comprometidos con lo que hacemos.</p>
       </div>
      </div>
      <div className="team-members">
       <div className="row">
         <div className="col-sm-5">
           <div className="team-member wow flipInY" data-wow-duration="1000ms" data-wow-delay="300ms">
             <div className="member-info">
             <div className="member-image">
               <img className="img-responsive" src="./santiago.jpeg" alt=""></img>
             </div>
             <div className="cuadro1">
             <img className="img-responsive" src="./s.jpg" alt=""></img>
               <h3>Santiago Ruiz</h3>
               <h4>Programador Diseñador</h4>
               <p className="p_trabajo">Persona comprometida con su trabajo, responsable y siempre dispuesto a colaborar</p>
               <div className="social-icons">
                 <ul>
                   <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                   <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                 </ul>
               </div>
             </div>
           </div>
           </div>
           </div>
           <div className="col-sm-2">
             <div className="team-member wow flipInY" data-wow-duration="1000ms" data-wow-delay="500ms">
               <div className="member-image">
                 <img className="img-responsive" src="./darly.jpeg" alt=""></img>
               </div>
               <div className="cuadro2">
               <div className="member-info">
                 <h3>Darly ospina</h3>
                 <h4>Programadora</h4>
                 <p className="p_trabajo">Con un temperamento muy fuerte pero siempre dispuesta a colaborarles, es muy responsable y respetuosa</p>
               </div>
               <div className="social-icons">
                 <ul>
                   <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                   <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                 </ul>
               </div>
             </div>
             </div>
           </div>
           </div>
          </div>
          </div>
          </section>
          <section id="services">
          <div className="container">
          <div className="heading wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="300ms">
           <div className="row">
             <div className="text-center col-sm-8 col-sm-offset-2">
               <h2 className="p-servicios">Servicios</h2>
               <p className="p-servicios">Brindamos servicios con una muy buena calidad de atención, donde usted es lo primordial ejecuntadole una solución a todos sus problemas sexuales, así podras tener una mejor calidad de vida sexual y podras ser apetecido o apetecida por todas aquellas personidas que te den esa oportunidad de demostrar lo que aprenderas acá.</p><p class="p-servicios">¡No te arrepentiras!</p>
             </div>
           </div>
          </div>
          <div className="text-center our-services">
           <div className="row">
             <div className="col-sm-4 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
               <div className="service-icon">
                 <Link className="fa fa-flask" to="/Enfermedades"></Link>
               </div>
               <div className="service-info">
                 <h3>Enfermedades de transmisión sexual</h3>
                 <p className="p-servicios">Acá podras encontrar toda la información necesaria y concreta para instruirte más sobre las enfermedades de transmisión sexual</p>
               </div>
             </div>
          <div className="col-sm-4 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="450ms">
           <div  class="service-icon">
             <Link className="fa fa-umbrella" to="/Embarazos"></Link>
           </div>
           <div className="service-info">
            <h3>Embarazos a temprana edad.</h3>
           <p className="p-servicios">Encontraras información sobre los embarazos a temprana edad como, por que se da, como evitar y como llegar a controlarlos</p>
           </div>
         </div>

         <div className="col-sm-4 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="550ms">
           <div className="service-icon">
             <Link className="fa fa-cloud" to="/Consejos"></Link>
           </div>
           <div className="service-info">
             <h3>Como aconsejar a su hijo o hija.</h3>
             <p className="p-servicios">Se te dara información y consejos donde como podras instruir a tu hija o hijo sobre el sexo, y porque es buena idea hacerlo.</p>
           </div>
         </div>
         <div className="col-sm-4 wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="650ms">
           <div className="service-icon">
           <Link className="fa fa-coffee" to="/ConsejosSexo"></Link>
         </div>
         <div className="service-info">
           <h3>Consejos para tener un mejor encuentro sexual.</h3>
           <p className="p-servicios">Se te dara consejos de cómo tener mayor seguridad, que cosas puedes hacer para encantar a tú hombre o a tú mujer.</p>
         </div>
       </div>
       <div className="col-sm-4 wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="750ms">
         <div className="service-icon">
           <Link className="fa fa-bitbucket" to="/Anticonceptivos"></Link>
         </div>
         <div className="service-info">
           <h3>Cuales son los metodos anticonceptivos</h3>
           <p className="p-servicios">Se te dará información acerca de los metodos anticonceptivos y su tasa de efectividad, además del metodo de aplicación.</p>
         </div>
       </div>
       <div className="col-sm-4 wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="850ms">
         <div className="service-icon">
           <i className="fa fa-gift"></i>
         </div>
         <div className="service-info">
           <h3>Agenda una cita de una manera rapida con alguno de nosotros</h3>
           <p className="p-servicios">Podras agendar una cita con alguno de nosotros, para una ayuda especial ya sea para un problema un poco más complicado o una consulta.</p>
         </div>
       </div>
     </div>
    </div>
    </div>
    </section>

    <section id="portfolio">
    <div className="container">
    <div className="row">
     <div className="heading text-center col-sm-8 col-sm-offset-2 wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="300ms">
       <h2>Galeria de imagenes</h2>
       <p>Podras ver un poco de imagenes sobre el sexo, y que productos hay que nosotros no comercializemos pero que recomendamos plenamente.</p>
     </div>
    </div>
    </div>
    <div className="container-fluid">
    <div className="row">
     <div className="col-sm-3">
       <div className="folio-item wow fadeInRightBig" data-wow-duration="1000ms" data-wow-delay="300ms">
         <div className="folio-image">
           <img className="img-responsive" src="src/portfolio/1.jpg" alt=""></img>
         </div>
         <div className="overlay">
           <div className="overlay-content">
             <div className="overlay-text">
               <div className="folio-info">
                 <h3>Time Hours</h3>
                 <p>Design, Photography</p>
               </div>
               <div className="folio-overview">
             <span className="folio-link"><a className="folio-read-more" href="#" data-single_url="portfolio-single.html" ><i className="fa fa-link"></i></a></span>
             <span className="folio-expand"><a href="src/portfolio/portfolio-details.jpg" data-lightbox="portfolio"><i className="fa fa-search-plus"></i></a></span>
           </div>
         </div>
       </div>
     </div>
   </div>
 </div>
 <div className="col-sm-3">
   <div className="folio-item wow fadeInLeftBig" data-wow-duration="1000ms" data-wow-delay="400ms">
     <div className="folio-image">
       <img className="img-responsive" src="src/portfolio/2.jpg" alt=""></img>
     </div>
     <div className="overlay">
       <div className="overlay-content">
         <div className="overlay-text">
           <div className="folio-info">
             <h3>Time Hours</h3>
             <p>Design, Photography</p>
           </div>
           <div className="folio-overview">
             <span className="folio-link"><a className="folio-read-more" href="#" data-single_url="portfolio-single.html" ><i className="fa fa-link"></i></a></span>
             <span className="folio-expand"><a href="src/portfolio/portfolio-details.jpg" data-lightbox="portfolio"><i className="fa fa-search-plus"></i></a></span>
           </div>
         </div>
       </div>
     </div>
   </div>
 </div>
 <div className="col-sm-3">
   <div className="folio-item wow fadeInRightBig" data-wow-duration="1000ms" data-wow-delay="500ms">
     <div className="folio-image">
       <img className="img-responsive" src="src/portfolio/3.jpg" alt=""></img>
     </div>
     <div className="overlay">
       <div className="overlay-content">
         <div className="overlay-text">
           <div className="folio-info">
             <h3>Time Hours</h3>
             <p>Design, Photography</p>
           </div>
           <div className="folio-overview">
             <span className="folio-link"><a className="folio-read-more" href="#" data-single_url="portfolio-single.html" ><i className="fa fa-link"></i></a></span>
             <span className="folio-expand"><a href="src/portfolio/portfolio-details.jpg" data-lightbox="portfolio"><i className="fa fa-search-plus"></i></a></span>
           </div>
         </div>
       </div>
     </div>
   </div>
 </div>
 <div className="col-sm-3">
   <div className="folio-item wow fadeInLeftBig" data-wow-duration="1000ms" data-wow-delay="600ms">
     <div className="folio-image">
       <img className="img-responsive" src="src/portfolio/4.jpg" alt=""></img>
     </div>
     <div className="overlay">
       <div className="overlay-content">
         <div className="overlay-text">
           <div className="folio-info">
             <h3>Time Hours</h3>
             <p>Design, Photography</p>
           </div>
           <div className="folio-overview">
             <span className="folio-link"><a className="folio-read-more" href="#" data-single_url="portfolio-single.html" ><i className="fa fa-link"></i></a></span>
             <span className="folio-expand"><a href="src/portfolio/portfolio-details.jpg" data-lightbox="portfolio"><i className="fa fa-search-plus"></i></a></span>
           </div>
         </div>
       </div>
     </div>
   </div>
 </div>
 <div className="col-sm-3">
   <div className="folio-item wow fadeInRightBig" data-wow-duration="1000ms" data-wow-delay="700ms">
     <div className="folio-image">
       <img className="img-responsive" src="src/portfolio/5.jpg" alt=""></img>
     </div>
     <div className="overlay">
       <div className="overlay-content">
         <div className="overlay-text">
           <div className="folio-info">
             <h3>Time Hours</h3>
             <p>Design, Photography</p>
           </div>
           <div className="folio-overview">
             <span className="folio-link"><a className="folio-read-more" href="#" data-single_url="portfolio-single.html" ><i className="fa fa-link"></i></a></span>
             <span className="folio-expand"><a href="src/portfolio/portfolio-details.jpg" data-lightbox="portfolio"><i className="fa fa-search-plus"></i></a></span>
           </div>
         </div>
       </div>
     </div>
   </div>
 </div>
 <div className="col-sm-3">
   <div className="folio-item wow fadeInLeftBig" data-wow-duration="1000ms" data-wow-delay="800ms">
     <div className="folio-image">
       <img className="img-responsive" src="src/portfolio/6.jpg" alt=""></img>
     </div>
     <div className="overlay">
       <div className="overlay-content">
         <div className="overlay-text">
           <div className="folio-info">
             <h3>Time Hours</h3>
             <p>Design, Photography</p>
           </div>
           <div className="folio-overview">
             <span className="folio-link"><a className="folio-read-more" href="#" data-single_url="portfolio-single.html" ><i className="fa fa-link"></i></a></span>
             <span className="folio-expand"><a href="src/portfolio/portfolio-details.jpg" data-lightbox="portfolio"><i className="fa fa-search-plus"></i></a></span>
           </div>
         </div>
       </div>
     </div>
   </div>
 </div>
 <div className="col-sm-3">
   <div className="folio-item wow fadeInRightBig" data-wow-duration="1000ms" data-wow-delay="900ms">
     <div className="folio-image">
       <img className="img-responsive" src="src/portfolio/7.jpg" alt=""></img>
     </div>
     <div className="overlay">
       <div className="overlay-content">
         <div className="overlay-text">
           <div className="folio-info">
             <h3>Time Hours</h3>
             <p>Design, Photography</p>
           </div>
           <div className="folio-overview">
             <span className="folio-link"><a className="folio-read-more" href="#" data-single_url="portfolio-single.html" ><i className="fa fa-link"></i></a></span>
             <span className="folio-expand"><a href="src/portfolio/portfolio-details.jpg" data-lightbox="portfolio"><i className="fa fa-search-plus"></i></a></span>
           </div>
         </div>
       </div>
     </div>
   </div>
 </div>
 <div className="col-sm-3">
   <div className="folio-item wow fadeInLeftBig" data-wow-duration="1000ms" data-wow-delay="1000ms">
     <div className="folio-image">
       <img className="img-responsive" src="src/portfolio/8.jpg" alt=""></img>
     </div>
     <div className="overlay">
       <div className="overlay-content">
         <div className="overlay-text">
           <div className="folio-info">
             <h3>Time Hours</h3>
             <p>Design, Photography</p>
           </div>
           <div class="folio-overview">
             <span className="folio-link"><a className="folio-read-more" href="#" data-single_url="portfolio-single.html" ><i className="fa fa-link"></i></a></span>
             <span className="folio-expand"><a href="src/portfolio/portfolio-details.jpg" data-lightbox="portfolio"><i className="fa fa-search-plus"></i></a></span>
           </div>
         </div>
       </div>
     </div>
   </div>
 </div>
</div>
</div>
<div id="portfolio-single-wrap">
<div id="portfolio-single">
</div>
</div>
    </section>
    <section id="team">
    <div className="container">
    <div className="row">
     <div className="heading text-center col-sm-8 col-sm-offset-2 wow fadeInUp" data-wow-duration="1200ms" data-wow-delay="300ms">
       <h2 className="p_quedicen">¿Qué dicen nuestros clientes?</h2>
     </div>
    </div>
    <div className="team-members">
     <div className="row">
       <div className="col-sm-5">
         <div className="team-member wow flipInY" data-wow-duration="1000ms" data-wow-delay="300ms">
           <div className="member-image">
             <img className="img-responsive" src="src/team/1.jpg" alt=""></img>
           </div>
           <div className="member-info">
             <h3>Mary lance</h3>
             <p className="p_quedicen">Son los mejores para dar consejos, pudieron salvar mi matrimonio no se que hubiera echo sin ustedes. muchas gracias enserio, son super efectivos</p>
           </div>
         </div>
       </div>
       <div className="col-sm-3">
         <div className="team-member wow flipInY" data-wow-duration="1000ms" data-wow-delay="500ms">
           <div className="member-image">
             <img className="img-responsive" src="src/team/2.jpg" alt=""></img>
           </div>
           <div className="member-info">
             <h3>Camilo5</h3>
             <p className="p_quedicen">Son super rapido para llegar los productos y son de muy buena calidad, los recomiendo siempre por sus productos y consejos. muy responsables</p>
           </div>
         </div>
       </div>
       <div className="col-sm-3">
         <div className="team-member wow flipInY" data-wow-duration="1000ms" data-wow-delay="800ms">
           <div className="member-image">
             <img className="img-responsive" src="src/team/3.jpg" alt=""></img>
           </div>
           <div className="member-info">
           </div>
         </div>
       </div>
       <div className="col-sm-3">
         <div className="team-member wow flipInY" data-wow-duration="1000ms" data-wow-delay="1100ms">
           <div className="member-image">
             <img className="img-responsive" src="src/team/4.jpg" alt=""></img>
           </div>
           <div className="member-info">
           </div>
         </div>
       </div>
     </div>
    </div>
    </div>
    </section>
    <section id="features" className="parallax">
    <div className="container">
    <div className="row count">
     <div className="col-sm-3 col-xs-6 wow fadeInLeft" data-wow-duration="1000ms" data-wow-delay="300ms">
       <i className="fa fa-user"></i>
       <h3 className="timer">4000</h3>
       <p>Clientes</p>
     </div>
     <div className="col-sm-3 col-xs-6 wow fadeInLeft" data-wow-duration="1000ms" data-wow-delay="500ms">
       <i className="fa fa-desktop"></i>
       <h3 className="timer">200</h3>
       <p>Clases</p>
     </div>
     <div className="col-sm-3 col-xs-6 wow fadeInLeft" data-wow-duration="1000ms" data-wow-delay="700ms">
       <i className="fa fa-trophy"></i>
       <h3 className="timer">10</h3>
       <p>Relaciones salvadas</p>
     </div>
     <div className="col-sm-3 col-xs-6 wow fadeInLeft" data-wow-duration="1000ms" data-wow-delay="900ms">
       <i className="fa fa-comment-o"></i>
       <h3>24/7</h3>
       <p>Frecuencia que respondemos</p>
     </div>
    </div>
    </div>
    </section>
    <section id="contact">
    <div id="contact-us" className="parallax">
    <div className="container">
     <div className="row">
       <div className="heading text-center col-sm-8 col-sm-offset-2 wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="300ms">
         <h2>Contacta con nostros</h2>
         <p>Contacta con nosotros para resolver una pequeña duda, o en caso de que no hayas recibido tú pedido durante las últimas 48 horas, te atenderemos lo más rapido posible estes pendiente a tu correo electronico.</p>
       </div>
     </div>
     <div className="contact-form wow fadeIn" data-wow-duration="1000ms" data-wow-delay="600ms">
       <div className="row">
         <div className="col-sm-6">
        <form id="main-contact-form" name="contact-form" method="post" action="#">   </form>
             <div className="row  wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="300ms">
               <div className="col-sm-6">
                 <div className="form-group">
                   <input type="text" name="name" className="form-control" placeholder="Nombre" required="required"></input>
                 </div>
               </div>
               <div className="col-sm-6">
                 <div className="form-group">
                   <input type="email" name="email" className="form-control" placeholder="Email" required="required"></input>
                   </div>
                 </div>
               </div>
             </div>
             <div className="form-group">
               <input type="text" name="subject" className="form-control" placeholder="Objetivo" required="required"></input>
             </div>
             <div className="form-group">
               <textarea name="message" id="message" className="form-control" rows="4" placeholder="Cual es su inquietud" required="required"></textarea>
             </div>
             <div className="form-group">
               <button type="submit" className="btn-submit ">Enviar</button>
             </div>
         <div className="col-sm-6">
           <div className="contact-info wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="300ms">
             <p>Si no deseas contactarte atraves del formulario, puedes hacerlo mediante el correo electronico o puedes hacerlo mediante el número de whatsapp.</p>
             <ul className="address">
               <li><i className="fa fa-phone"></i> <span> Telefono:</span> +57 317 251 8072  </li>
               <li><i className ="fa fa-envelope"></i> <span> Email:</span><a href="mailto:someone@yoursite.com"> sratxr@gmail.com</a></li>
             </ul>
           </div>
         </div>
       </div>
     </div>
    </div>
    </div>
    </section>
      </React.Fragment>
    );
      }
    }

export default Head;
