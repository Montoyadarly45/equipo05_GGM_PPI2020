import React, {Component} from 'react';

class Anticonceptivos extends React.Component{
  render(){
    return(
      <React.Fragment>
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
          <div className="menu">
          <div className="collapse-navar">
            <ul className="nav navbar-nav navbar-right">
              <li className="scroll active"><a href="#home">Inicio</a></li>
              <li className="scroll"><a href="#about-us">Quienes   somos</a></li>
              <li className="scroll"><a href="#quedicen">Grupo   de   trabajo</a></li>
              <li className="scroll"><a href="#services">Servicios</a></li>
              <li className={"scroll"} onClick={()=>"http://localhost/"}><a href="http://localhost/">Productos</a></li>
              <li className="scroll"><a href="#portfolio">Galeria</a></li>
              <li className="scroll"><a href="#team">Que   dicen   nuestros   clientes</a></li>
              <li className="scroll"><a href="#contact">Contacto</a></li>
            </ul>
          </div>
          </div>
          <section id="Anti">
          <header>
            <h1 className="H1">METODOS ANTICONCEPTIVOS</h1>
            <p className="Parrafo">Los metodos de planificación o anticonceptivos son aquellos elementos, productos o procedimientos que pueden ser usados tanto por hombres como por mujeres con el fin de impedir o reducir la posibilidad de embarazo. Según la organización mundial de la salud, en los países en desarrollo, apoximadamente 214 millones de mujeres en edad fértil desean posponer o detener la concepción, pero no utilizan ningun metodo moderno. Hay que tener en cuenta que cada cuerpo funciona diferent, por lo que no hay un metodo que sea el mejor para todos. Se deben considerarlas características de los metodos y las circunstancias del consultante para así poder elegir el más adecuado.</p>
            <h2 classsName="Titi">Tipos de metodos anticonceptivos</h2>
            <ul className="LeftLista">
              <li className="Left"> •Los metodos de barrera:  se encuentran en el diafragma, los espermicidas y los conocidos condones de látex (si se usan de manera correcta, pueden tener una eficacia, en el caso del condón masculino, de hasta el 98% mientras que el femenino del 90%. De igual manera son los unicos que protegen contra enfermedades de transmisión sexual particularmente en VIH)</li>
              <li className="Left"> •Los metodos hormonales:  funcionan por medio de hormonas que impiden que se produzca el embarazo. Esos tienen eficacia entre el 98% al 99% si se usan de manera correcta. Entre ellos se encuentran:</li>
                <ul className="Listita">
                  <li className="LitList">- Las pildoras anticonceptivas</li>
                  <li className="LitList">- Los inyectables</li>
                  <li className="LitList">- Los implantes subdérmicos</li>
                  <li className="LitList">- El parche transdermico</li>
                  <li className="LitList">- El anillo vaginal</li>
                  <li className="LitList">- La anticoncepcion de emergencia (Postday)</li>
                </ul>
              <li className="Left">•El dispositivo intrauterino:  es un pequeño dispositivo que se coloca y tiene una eficacia del 99%</li>
              <li className="Left">•La esterilizacion masculina o femenina:  consiste en la ligadura de trompas para la mujer y la vasectomia para los hombres</li>
            </ul>
            <p className="Parrafo">En Colombia, la norma vigente sobre anticoncepción para hombres y mujeres indica la obligatoriedad de los servicios de salud de ofrecer información de anticoncepción, suministrar el metodo anticonceptivo que más se ajuste a las necesidades y brindar el seguimiento de su uso, para que las personas o parejas puedan ejercer el derecho a decidir libre y responsablemente si quieren o no tener hijos, asi como su numero y el espaciamiento ente ellos.</p>
            <p className="Parrafo">La posibilidad de de cotrolar lafertilidad a través del uso de metodos anticonceptivos modernos brinda una serie de beneficios entre los que se cuentan:</p>
            <ul className="LeftLista">
              <li className="Left">•Proteccion de la vida de las mujeres: al evitar embarazos no deseados y abortos practicados en condiciones de riesgo</li>
              <li className="Left">•Espaciamiento entre uno y otro embarazo de por lo menos dos años, que ayuda a las mujeres a recuperarse del embarazo anterior, a disminuir la mortalidad materna, a tener hijos mas sanos y aumenta la probabilida de sobrevivencia infantil</li>
              <li className="Left">•Proteccion contra las infecciones de transmisión sexual (ITS), incluido el VIH/SIDA, utilizando la doble protección (uso simultáneo de condón y otro método moderno de anticoncepción)</li>
              <li className="Left">•Promueve una cultura preventiva en aspectos relacionados con la salud reproductiva</li>
            </ul>
            <div className="cuadri">
            </div>
          </header>
        </section>
        </React.Fragment>
    );
  }
}
export default Anticonceptivos;
