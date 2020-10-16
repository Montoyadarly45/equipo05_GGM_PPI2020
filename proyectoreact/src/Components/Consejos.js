import React, {Component} from 'react';

class Consejos extends React.Component{
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
          <ul className="nav navbar-nav navbar-right fofo">
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
        <section id="Consejos">
          <header>
            <h1 className="H1">COMO ACONSEJAR A TUS HIJOS SOBRE SEXO</h1>
            <p className="Parrafo">la sexualidad es parte de la vida de todas las personas, sin importar la edad. A medida que sus hijos crecen y se desarrollan, es probable que comiencen a reírse sobre "las partes privadas", que se cuenten chistes "verdes u obscenos" y que busquen palabras "tabú" en el diccionario. Esta curiosidad es natural. Además, es usual que un niño tenga preguntas a cualquier edad. Cuanod su hija esté lista para hacer preguntas, usted, debe estar listo para contestar.</p>
            <h2>¿Qué hacer cuando los niños empiecen a hacer preguntas?</h2>
            <ul className="LeftLista">
              <li className="Left">•No se burle ni se ría, aunque la pregunta sea cómica. Si usted se ríe, el niño podrá sentirse avergonzado</li>
              <li className="Left">•Procure no parecer avergonzado ni asuma una actitud demasiado seria frente al tema</li>
              <li className="Left">•Sea honesto. Use el nombre propio de cada parte del cuerpo</li>
              <li className="Left">•Note si el niño requiere o necesita saber mas. Despues de responder, pregunte "¿Resolví tus dudas?"</li>
              <li className="Left">•Perciba las respuestas y reacciones del niño</li>
              <li className="Left">•Prepárese para repetir las cosas</li>
            </ul>
            <p className="Parrafo">Si le incomoda hablar o contestar ciertas preguntas sobre sexi, manifiestelo con sinceridad. Tal vez pueda pedirle ayuda a un pariente, amigo cercano o al medico de su hijo para explicarle ciertas cosas</p>
            <h2>Las preguntas que puede anticipar</h2>
            <p className="Parrafo">Las preguntas y las respuestas apropiadas dependerás de la edad del niño y su capacidad de comprension. La siguientes son preguntas y temas comunes según grupos de edad:</p>
            <h3>Niños de edad preescolar</h3>
              <ul className="LeftLista">
                <li className="Left">•¿Cómo llegué a tu barriga?</li>
                <li className="Left">•¿Dónde estaba yo antes de llegar a tu barriga?</li>
                <li className="Left">•¿Cómo salí?</li>
                <li className="Left">•¿De dónde viene los bebés?</li>
                <li className="Left">•¿Por qué las niñas no tienen pene? o ¿Por qué los niños no tienen vagina?</li>
              </ul>
              <h4>18 a 3 meses de edad</h4>
              <p className="Parrafo">Los niños en este grupo de edad comienzan a aprender acerca de su propio cuerpo. Es importante en señarles los nombres apropiados para cada parte de su cuerpo. Inventar un nombre para ciertas partes del cuerpo podría dar la idea de que el nombre propio tiene algo malo. Además, enseñe a sus hijos que son partes privadas (las partes privadas cbiertas por un rtaje de baño).</p>
              <h4>4 a 5 años de edad</h4>
              <p className="Parrafo">Los niños a esta edad comienzan a mostrar interés hacia la sexualidad básica, tanto la propia como la del sexo opuesto. También es posible que se toquen los genitales, e incluso que muestren interés hacia los genitales de otros niños. Estas son señales de un interés normal. Sin embargo, es importante que los niños aprendan qué es correcto y qué no. La familia debe establecer limites a la exploración. Estas son algunas cosas que podría enseñarle a sus hijos:</p>
              <ul className="LeftLista">
                <li className="Left">•El interés en los organos genitales es saludable y natural</li>
                <li className="Left">•El desnudarse y hacer juegos sexuales en publico no es correcto</li>
                <li className="Left">•Ninguna otra perona, ni siquiera los amigos cercanos y los parientes, pueden tocar "las partes privadas" de su hijo p hija. La excepción son los medicos y enfermeros durante los examenes fisicos con permiso de los padres y los padren mismo cuando traten de hallar la causa de un dolor en la zoma genital</li>
              </ul>
            <h3>Niños en edad escolar</h3>
              <ul className="LeftLista">
                <li className="Left">•¿A qué edad una niña puede tener un bebé?</li>
                <li className="Left">•¿Por qué un niño tiene erecciones?</li>
                <li className="Left">•¿Qué es la menstruación?</li>
                <li className="Left">•¿Cómo tienen relaciones sexuales dos personas?</li>
                <li className="Left">•¿Por qué a algunas personas lesgsta la gente de su mismo genero?</li>
              </ul>
              <h4>5 a 7 años de edad</h4>
              <p className="Parrafo">Los niños en este grupo de eda aprenden más cerca de las relaciones interpersonales y pueden interesarse en lo que pasa sexualmente entre los adultos. Sus preguntas se harán más complejas a medida que tratan de entender la conexion entre la sexualidad y la gestación de un bebé. Es posible que lleguen a sus propias conclusiones sobre el funcionamiento del cuerpo o el origen de los bebés. También pueden recurrir a los amigos para hallar respuestas. Es importante recordar que lo que aprendan en esta edad los acompañara el resto de sus vidas</p>
              <h4>8 a 9 años de edad</h4>
              <p className="Parrafo">En este grupo de edad los niños probablemtente ya tengan una nocion de lo que es correcto e incorrecto. Son capaces de entender que el sexo es algo que ocurre entre dos personas que se aman. Pueden mostrar interés hacia el modo en que papás y mamá de enamoraron. A medida que surgen preguntas sobre romance, amor y matrimonio, tambien podrian sentir curiosidad sobre las relaciones homosexuales. Use estas ocaciones para comentar las ideas de la familia sobre la homosexualidad. Explique que amar a alguine no depende del genero de la persona, y que es algo distinto a sentirse atraido por alguien sexualmente. Despues de esta edad comienzan ls cambios por la pubertad.</p>
            <h2>Recuerde</h2>
            <p className="Parrafo">El hablar sobre sexo y sexualidad de brinda la oportunidad de compartir sus valores y creencias con sus hijos. Tal vez el tema o las preguntas le generen verguenza, pero sus hijos necesitan saber que en todo momento pueden recurrir a una fuente confiable y honesta para resolver sus dudas: sus padres.</p>
          </header>
        </section>
      </React.Fragment>
    );
  }
}
export default Consejos;
