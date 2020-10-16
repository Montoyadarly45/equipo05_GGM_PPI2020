import React, {Component} from 'react';

class Enfermedades extends React.Component{
  render(){
    return (
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
    <section id="ETS">
    <header id="intro">
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
      <h1 className="H1">ENFERMEDADES DE TRANSMISIÓN SEXUAL</h1>
      <p className="Parrafo">Las enfermedades de transmisión sexual (ETS) son infecciones que transmiten de una persona a otra a través del contacto sexual. Las causas de las ETS son las bacterias, parásitos y virus. Existen más de 20 tipos de ETS, que incluyen:</p>
      <ul className="Lista">
        <li className="Elementos"><a href="#Clamidia">Clamidia</a></li>
        <li className="Elementos"><a href="#Gonorrea">Gonorrea</a></li>
        <li className="Elementos"><a href="#Tricomoniasis">Tricomoniasis</a></li>
        <li className="Elementos"><a href="#Sida">VIH/SIDA</a></li>
        <li className="Elementos"><a href="#Herpes">Herpes Genital</a></li>
        <li className="Elementos"><a href="#Hepatitis"> Hepatitis</a></li>
        <li className="Elementos"><a href="#Sifilis">Sifilis</a></li>
      </ul>
      <p className="Parrafo">La mayoría de las ETS afectan tanto a hombres como a mujeres, pero en muchos casos los problemas de salud que provocan pueden ser más graves en las mujeres. Si una mujer embarazada padece de ETS, puede causarle graves problemas de salud al bebé. Los antibióticos pueden tratar las ETS causadas por bacterias o parásitos. No hay cura para ETS causada por un virus, pero los medicamentos pueden ayudar con los síntomas y mantener la enfermedad bajo control. El uso correcto de preservativos de látex reduce enormemente, aunque no elimina, el riesgo de adquirir y contagiarse con ETS. La forma más confiable de evitar la infección es no tener sexo anal, vaginal u oral.</p>
      <p className="Parrafo">Si tienes relaciones sexuales, sexo oral, anal o vaginal y contacto genital, puedes contraer una ETS (enfermedad de transmisión sexual), también denominadas infecciones de transmisión sexual (ITS). Aunque seas una persona homosexual o heterosexual, casada o soltera, eres vulnerable a padecer los síntomas de enfermedades de transmisión sexual. Creer o esperar que tu pareja no tenga una enfermedad de transmisión sexual no sirve de protección, necesitas saberlo. Aunque lospreservativos son altamente efectivos (cuando se utilizan de forma correcta) para reducir la trasmisión de algunas enfermedades de transmisión sexual, ningún método es infalible.</p>
      <p className="Parrafo">Los síntomas de las enfermedades de transmisión sexual no siempre son obvios. Si crees que presentas síntomas de enfermedades de transmisión sexual o has estado expuesto a una ETS, consulta con un médico. Algunas ITS son fáciles de tratar y curar, otras requieren un tratamiento más complicado para controlarlas.</p>
      <p className="Parrafo">Es fundamental someterse a una evaluación y, si se diagnostica una ETS, tratarse. También es fundamental informar a tu pareja o parejas para que puedan evaluarse y tratarse.</p>
        </header>
    <section id="Clamidia">
      <h2 className="TituloRight">Clamidia</h2>
      <p className="Parrafo">Es fundamental someterse a una evaluación y, si se diagnostica una ETS, tratarse. También es fundamental informar a tu pareja o parejas para que puedan evaluarse y tratarse.</p>
      <p className="Parrafo">La clamidia es una infección bacteriana del aparato genital. La clamidia puede ser difícil de detectar porque las infecciones en los primeros estadios suelen causar pocos signos y síntomas o no presentar ninguno. Cuando aparecen, en general, comienzan de una a tres semanas después de haber estado expuesto a la clamidia. Incluso cuando se manifiestan, estos signos y síntomas en general son moderados y desaparecen, lo que hace más fácil que pasen desapercibidos.</p>
      <p className="Parrafo">Estos son algunos de los signos y síntomas:</p>
      <ul className="RightLista">
        <li className="Right">Micción dolorosa</li>
        <li className="Right">Dolor en la parte baja del abdomen</li>
        <li className="Right">Flujo vaginal en mujeres</li>
        <li className="Right">Secreción del pene en hombres</li>
        <li className="Right">Dolor durante las relaciones sexuales en las mujeres</li>
        <li className="Right">Sangrado entre períodos menstruales</li>
        <li className="Right">Dolor testicular en hombres</li>
      </ul>
    </section>
    <section id="Gonorrea">
      <h2 className="TituloLeft">Gonorrea</h2>
      <p className="Parrafo">La gonorrea es una infección bacteriana del aparato genital. También puede afectar la boca, la garganta, los ojos y el ano. Por lo general, los primeros síntomas de la gonorrea aparecen en un plazo de 10 días después de la exposición. Sin embargo, algunas personas pueden haber estado infectadas durante meses antes de presentar signos o síntomas.</p>
      <p className="Parrafo">Los signos y síntomas de la gonorrea son los siguientes:</p>
      <ul className="LeftLista">
        <li className="Left">Secreción espesa, turbia o con sangre del pene o de la vagina</li>
        <li className="Left">Dolor o sensación de ardor al orinar</li>
        <li className="Left">Sangrado menstrual intenso o sangrado entre períodos menstruales</li>
        <li className="Left">Dolor o hinchazón de los testículos</li>
        <li className="Left">Evacuaciones intestinales dolorosas</li>
        <li className="Left">Picazón anal</li>
      </ul>
    </section>
    <section id="Tricomoniasis">
      <h2 className="TituloRight">Tricomoniasis</h2>
      <p className="Parrafo">La tricomoniasis es una infección de transmisión sexual frecuente causada por un parásito unicelular microscópico denominado «Trichomonas vaginalis». Este organismo se propaga durante el acto sexual con una persona que ya tiene la infección.</p>
      <p className="Parrafo">En los hombres, el microorganismo generalmente infecta las vías urinarias, pero a menudo no causa síntomas. En las mujeres, la tricomoniasis generalmente infecta la vagina. Cuando la tricomoniasis causa síntomas, estos pueden aparecer en el plazo de 5 a 28 días de exposición y comprenden de irritación leve a inflamación intensa.</p>
      <p className="Parrafo">Estos son algunos de los signos y síntomas:</p>
      <ul className="RightLista">
        <li className="Right">Secreción vaginal transparente, blanca, verdosa o amarillenta</li>
        <li className="Right">Secreción del pene</li>
        <li className="Right">Fuerte olor vaginal</li>
        <li className="Right">Picazón o irritación vaginal</li>
        <li className="Right">Picazón o irritación dentro del pene</li>
        <li className="Right">Dolor durante las relaciones sexuales</li>
        <li className="Right">Micción dolorosa</li>
      </ul>
    </section>
    <section id="Sida">
      <h2 className="TituloLeft">VIH/SIDA</h2>
      <p className="Parrafo">El VIH es una infección con el virus de la inmunodeficiencia humana. El VIH interfiere en la habilidad del cuerpo de combatir virus, bacterias y hongos que provocan enfermedades, y puede provocar SIDA, una enfermedad crónica que pone en riesgo la vida.</p>
      <p className="Parrafo">Al contagiarte el virus de inmunodeficiencia humana, es posible que no tengas ningún síntoma. Algunas personas presentan una enfermedad similar a la gripe, generalmente de dos a seis semanas después de contraer el virus. De todas formas, la única manera de corroborar si tienes VIH es mediante análisis.</p>
      <p className="Parrafo">Algunos de los signos y síntomas iniciales del VIH son:</p>
      <ul className="LeftLista">
        <li className="Left">Fiebre</li>
        <li className="Left">Dolor de cabeza</li>
        <li className="Left">Dolor de garganta</li>
        <li className="Left">Erupción cutánea</li>
        <li className="Left">Ganglios linfáticos inflamados</li>
        <li className="Left">Fatiga</li>
      </ul>
      <p className="Parrafo">Estos signos y síntomas tempranos suelen desaparecer en una semana a un mes y, a menudo, se los confunde con los de otra infección vírica. Durante este período, el nivel de contagio es muy alto. Los síntomas más persistentes o más graves de la infección por el VIH quizá no se manifiesten durante 10 años o más después de la infección inicial.</p>
      <p className="Parrafo">A medida que el virus continúa multiplicándose y destruyendo células inmunes, puedes manifestar infecciones leves o signos y síntomas crónicos como los siguientes:</p>
      <ul className="LeftLista">
        <li className="Left">Ganglios linfáticos inflamados —a menudo, uno de los primeros signos de la infección por el VIH</li>
        <li className="Left">Diarrea</li>
        <li className="Left">Fiebre</li>
        <li className="Left">Adelgazamiento</li>
        <li className="Left">Tos y falta de aire</li>
        <li className="Left">Infección por el VIH en estadio avanzado</li>
      </ul>
      <p className="Parrafo">Estos son algunos signos y síntomas de una infección por el VIH en estadio avanzado:</p>
      <ul className="LeftLista">
        <li className="Left">Fatiga persistente inexplicable</li>
        <li className="Left">Sudoraciones nocturnas con empapamiento</li>
        <li className="Left">Escalofríos con temblor o fiebre superior a 100,4 °F (38 °C) durante varias semanas</li>
        <li className="Left">Hinchazón de los ganglios linfáticos durante más de tres meses</li>
        <li className="Left">Dolores de cabeza persistentes</li>
        <li className="Left">Diarrea crónica</li>
        <li className="Left">Infecciones oportunistas e inusuales</li>
      </ul>
    </section>
    <section id="Herpes">
      <h2 ClassName="TituloRight">Herpes Genital</h2>
      <p className="Parrafo">El herpes genital sumamente contagioso es producido por un tipo de virus del herpes simple (herpes simplex virus, HSV) que ingresa en el cuerpo a través de pequeñas lesiones en la piel o las membranas mucosas. La mayoría de las personas con HSV nunca sabe que tiene el virus debido a que no hay signos ni síntomas, o bien estos son tan leves que pasan desapercibidos.</p>
      <p className="Parrafo">Cuando sí se observan signos y síntomas, el primer episodio en general es el peor. Algunas personas nunca tienen un segundo episodio. Sin embargo, otras pueden tener episodios recurrentes durante décadas.</p>
          <ul className="RightLista">
        <li className="Right">Pequeñas protuberancias rojas, ampollas (vesículas) o llagas abiertas (úlceras) en las áreas genital, anal y áreas circundantes.</li>
        <li className="Right">Dolor o picazón alrededor del área genital, las nalgas y la parte interior de los muslos.</li>
      </ul>
      <p className="Parrafo">El síntoma inicial del herpes genital normalmente es dolor o picazón, que comienza algunas semanas después de haber mantenido relaciones sexuales con una pareja infectada. Después de varios días, pueden aparecer pequeñas protuberancias rojas, que luego se rompen y se transforman en úlceras que supuran o sangran. Eventualmente, se forman costras y las úlceras sanan.</p>
      <p className="Parrafo">En las mujeres, las llagas pueden aparecen en el área vaginal, los genitales externos, las nalgas, el ano o el cuello del útero. En los hombres, las llagas pueden aparecer en el pene, el escroto, las nalgas, el ano o los muslos, o dentro del conducto que se extiende desde la vejiga hasta el pene (uretra).</p>
      <p className="Parrafo">Las úlceras pueden causar dolor al orinar. También es posible que tengas dolor y sensibilidad en el área genital hasta que desaparezca la infección. Durante el episodio inicial, es posible que presentes signos y síntomas similares a los de la influenza, como dolor de cabeza, dolores musculares y fiebre, y también ganglios linfáticos inflamados en la ingle. En algunos casos, la infección puede ser activa y contagiosa, incluso cuando no haya llagas.</p>
      <ul className="RightLista">
        <li className="Right">Inflamaciones pequeñas, de color carne o gris en la zona genital</li>
        <li className="Right">Varias verrugas juntas que toman la forma de una coliflor</li>
        <li className="Right">Picazón o incomodidad en la zona genital</li>
        <li className="Right">Sangrado durante el coito</li>
          </ul>
      <p className="Parrafo">En las mujeres, las verrugas genitales pueden crecer en la vulva, en las paredes de la vagina, en la zona situada entre los genitales externos y el ano, y en el cuello uterino. En los hombres, pueden aparecer en la punta o en el cuerpo del pene, en el escroto o en el ano. Las verrugas genitales también pueden presentarse en la boca o en la garganta de una persona que mantuvo sexo oral con una persona infectada.</p>
    </section>
    <section id="Hepatitis">
      <h2 className="TituloLeft">Hepatitis</h2>
      <p className="Parrafo">La hepatitis A, la hepatitis B y la hepatitis C son infecciones virales contagiosas que afectan el hígado. De las tres, las hepatitis B y C son las más graves, pero todas pueden hacer que el hígado se inflame.</p>
      <p className="Parrafo">Algunas personas nunca manifiestan signos ni síntomas. Pero en aquellas que sí los manifiestan, los signos y síntomas pueden aparecer varias semanas después de la exposición y pueden incluir los siguientes:</p>
      <ul className="LeftLista">
        <li className="Left">Fatiga</li>
        <li className="Left">Náuseas y vómitos</li>
        <li className="Left">Pérdida de apetito</li>
        <li className="Left">Dolor o molestias en el abdomen, especialmente en la zona del hígado o en el lado derecho del cuerpo debajo de las costillas inferiores</li>
        <li className="Left">Orina de color oscuro</li>
        <li className="Left">Fiebre</li>
        <li className="Left">Dolor muscular o articular</li>
        <li className="Left">Picazón</li>
        <li className="Left">Color amarillento en la piel o en la parte blanca de los ojos (ictericia)</li>
      </ul>
    </section>
    <section id="Sifilis">
      <h2 className="TituloRight">Sifilis</h2>
      <p className="Parrafo">La sífilis es una infección bacteriana. La enfermedad afecta los genitales, la piel y las membranas mucosas, pero también puede actuar en muchas otras partes del cuerpo, incluso en el cerebro y el corazón.Los signos y síntomas de la sífilis pueden ocurrir en cuatro etapas: primaria, secundaria, latente y terciaria. También existe una afección denominada «sífilis congénita», que ocurre cuando una mujer embarazada con sífilis le transmite la enfermedad al bebé no nacido aún. La sífilis congénita puede ser incapacitante, e incluso puede poner en riesgo la vida, por lo tanto, es importante que las mujeres embarazadas con sífilis reciban tratamiento.</p>
      <h3 className="Sif">Sífilis primaria</h3>
      <p className="Parrafo">El primer signo de sífilis, que puede presentarse entre 10 días y 3 meses después de la exposición, puede ser una úlcera pequeña e indolora (chancro) en la parte del cuerpo en donde se transmitió la infección, en general, en los genitales, el recto, la lengua o los labios. Lo típico es presentar un solo chancro, pero también se pueden tener varias úlceras. La úlcera se suele curar sin tratamiento, pero la enfermedad de fondo permanece y puede volver a aparecer en la segunda (secundaria) o tercera (terciaria) etapa.</p>
      <h3 className="Sif">Sífilis secundaria</h3>
      <p className="Parrafo">Los signos y síntomas de la sífilis secundaria pueden comenzar de 3 a 6 semanas después de la aparición del chancro, y pueden comprender los siguientes:</p>
      <ul>
        <li className="Right">Sarpullido caracterizado por úlceras del tamaño de una moneda de un centavo de dólar y de color marrón rojizo en cualquier</li>
        <li className="Right">zona del cuerpo, incluso en las palmas de las manos y las plantas de los pies</li>
        <li className="Right">Fiebre</li>
        <li className="Right">Agrandamiento de los ganglios linfáticos</li>
        <li className="Right">Fatiga y una leve sensación de malestar</li>
        <li className="Right">Inflamación y dolor</li>
      </ul>
      <p className="Parrafo">Estos signos y síntomas pueden desaparecer sin tratamiento en unas pocas semanas o pueden aparecer y desaparecer de forma repetida durante hasta un año.</p>
      <h3 className="Sif">Sífilis latente</h3>
      <p className="Parrafo">Algunas personas pueden tener un período que se denomina «sífilis latente», en el cual no se presentan síntomas, después de la etapa secundaria. Es posible que los signos y síntomas no vuelvan a presentarse nunca, o bien la enfermedad puede avanzar a la etapa terciaria.</p>
      <h3 className="Sif">Sífilis terciaria</h3>
      <p className="Parrafo">Sin tratamiento, las bacterias de la sífilis pueden propagarse y provocar daños graves a los órganos internos, e incluso la muerte, años después de la infección original.</p>
      <p className="Parrafo">Algunos de los signos y síntomas de la sífilis terciaria comprenden los siguientes:</p>
      <ul>
        <li className="Right">Falta de coordinación</li>
        <li className="Right">Entumecimiento</li>
        <li className="Right">Parálisis</li>
        <li className="Right">Pérdida de la visión</li>
        <li className="Right">Demencia</li>
        <li className="Right">Neurosífilis</li>
      </ul>
      <p className="Parrafo">En todas las etapas, la sífilis puede afectar el sistema nervioso. La neurosífilis puede no provocar síntomas o causar los siguientes:</p>
      <ul>
        <li className="Right">Dolor de cabeza</li>
        <li className="Right">Cambios en el comportamiento</li>
        <li className="Right">Problemas de movimiento</li>
      </ul>
    </section>
  </section>
    </React.Fragment>
    );
  }
}
export default Enfermedades;
