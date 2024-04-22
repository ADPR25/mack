<template>
  <div class="template">
    <nav>
      <ul>
        <li class="li1"></li>
        <li class="li2"><a href="#">REGISTRATE</a></li>
        <li class="li3">
          <img class="redes" src="./assets/img/facebook.png" alt="" />
          <img class="redes" src="./assets/img/instagram.png" alt="" />
          <img class="redes" src="./assets/img/youtube.png" alt="" />
        </li>
      </ul>
    </nav>
    <div class="container">
      <div class="fondo-con-degradado">
        <img class="fondo" src="./assets/img/fondo.jpg" alt="" />
        <div class="contenedor">
          <img src="./assets/textos/texto_1.png" alt="" class="txt" />
          <div class="textos">
            <section class="seccion1">
              <p class="texto1">
                Este año estamos rindiendo tributo a nuestra marca Mack la cual lleva 100 años rodando por las
                carreteras de Colombia y queremos hacerte parte de esta celebración.
                <br /><br />
                Si eres dueño de un camión Mack
              <p class="lar">
                ¡YA GANASTE!, SOLO REGÍSTRATE Y RECLAMA TUS PREMIOS.
              </p>
              </p>
            </section>
            <section class="seccion2">
              <img class="gorra" src="./assets/img/gorra.png" alt="" />
            </section>
          </div>
        </div>
      </div>
    </div>
    <div class="template2">
      <div>
        <h1>
          <center>REGISTRATE Y GANA</center>
        </h1>
        <p class="description">
          <center>
            Los datos registrados deben pertenecer a la persona que figura en la tarjeta de propiedad del vehículo
            MACK;
            <br />
            si una persona tiene más de un (1) camión MACK a su nombre sólo se puede inscribir una vez.
          </center>
        </p>
      </div>
      <br /><br />
      <div class="secciones">
        <section class="info_seccion_1">
          <div class="info">
            <img src="./assets/textos/info.png" class="info_img" />
          </div>
          <div class="info_txt">
            <p class="p_info_1">
              <img src="./assets/img/regalo.png" />
              *Una gorra emblemática Mack.
            </p>
            <p class="p_info_2">
              <img src="./assets/img/engranaje.png" />
              <span>
                <b>25% de descuento en repuestos</b> instalados en taller el día que reclames tu premio o
                <b>15% de descuento en repuestos</b> comprados por mostrador el día que reclames tu premio.
              </span>
            </p>
            <p class="p_info_3">
              <img src="./assets/img/tarjeta.png" />
              <span>
                ***Una tarjeta de miembro Jauría Mack para acceder a descuentos especiales. (Aplica para el año 2023)
              </span>
            </p>
          </div>
          <img src="./assets/textos/felicitaciones.png" class="celebracion" />
          <p class="valid">
            <b>Válido solo para Colombia.</b> <br />
            Los premios no aplican para convenios de flotas.
          </p>
        </section>
        <section class="formulario">
          <v-row no-gutters>
            <v-col sm="4" cols="5">
              <label>Nombres *</label>
              <input type="text" />
            </v-col>
            <v-col sm="1" cols="2"></v-col>
            <v-col sm="4" cols="5">
              <label>Apellidos *</label>
              <input type="text" />
            </v-col>
          </v-row>

          <div style="margin-bottom: 10px;"></div>

          <v-row no-gutters>
            <v-col sm="4" cols="5">
              <label>Num. de Celular *</label>
              <input type="text" />
            </v-col>
            <v-col sm="1" cols="2"></v-col>
            <v-col sm="4" cols="5">
              <label>Cedula *</label>
              <input type="text" />
            </v-col>
          </v-row>

          <div style="margin-bottom: 10px;"></div>

          <v-row no-gutters>
            <v-col cols="12" sm="9">
              <label>Placa del Camion *</label>
              <input type="text" />
            </v-col>
          </v-row>

          <div style="margin-bottom: 10px;"></div>

          <v-row no-gutters>
            <v-col cols="12" sm="9">
              <label>Correo electronico *</label>
              <input type="text" />
            </v-col>
          </v-row>

          <div style="margin-bottom: 10px;"></div>

          <v-row no-gutters>
            <v-col cols="12" sm="9">
              <label for="opcion">En que taller deseas reclamar tu premio *</label>
              <select id="opcion" name="opcion">
                <option value="opcion1">
                  -----seleccione----
                </option>n
                <option value="opcion2">Opción 1</option>
                <option value="opcion3">Opción 2</option>
                <option value="opcion4">Opción 3</option>
              </select>
            </v-col>
          </v-row>

          <b style="font-size: 13px;">
            Autorización para el uso y tratamiento de datos e información
            <br>
            personal
          </b>

          <div class="concentimiento">
            Declaro que he sido informado por el grupo empresarial compuesto por las sociedades Praco Didacol S.A.S,
            Distribuidora Hino de Colombia S.A.S, Inmobiliaria Inchcape Colombia S.A.S y Matrase S.A.S,; en adelante
            Las Compañías, que serán el Responsable del Tratamiento de mis Datos Personales, por lo que autorizo de
            manera previa,
          </div>


          <v-row no-gutters>
            <v-col cols="4" sm="5">
                <v-checkbox label="Acepto" required></v-checkbox>
            </v-col>
            <v-col cols="8" sm="5">
                <v-checkbox label="No acepto" required></v-checkbox>
            </v-col>
        </v-row>
        

          <v-row no-gutters>
            <v-col cols="10" sm="9">
              <v-btn style="width: 100%;">
                Enviar
              </v-btn>
            </v-col>
          </v-row>
        </section>
      </div>
    </div>
  </div>
  <footer>
    <v-row no-gutters>
      <v-col sm="8" cols="9" class="footertext">
        <br>
        Inscripciones abiertas del jueves 9 de marzo del 2023 al martes 9 de mayo del 2023 o hasta que se inscriban
        100 personas, lo primero que ocurra. Para ser un ganador la persona debe 1). Ser dueño de un camión MACK. 2).
        Inscribirse en el formulario de la página www.soyjauriamack.com, y diligenciar la totalidad de los datos, los
        cuales deben ser los mismos de la tarjeta de propiedad del camión MACK, si la persona que diligencia el
        formulario no es la misma que figura como propietario del camión MACK entonces debe diligenciar los datos del
        propietario 3). Presentar al momento de reclamar el premio, la tarjeta de propiedad del camión. Si una persona
        es dueño de más de un camión MACK, sólo se puede inscribir una vez. El ganador dueño del camión MACK debe ser
        la persona que reclame el premio. El ganador tiene hasta el 31 de mayo para reclamar su premio (gorra
        MACK+tarjeta de miembro+ 15% o 25% de descuento) en el taller de Inchcape Colombia S.A.S (antes PracoDidacol)
        seleccionado. Esta campaña aplica únicamente para los siguientes talleres de Inchcape Colombia S.A.S (antes
        PracoDidacol) a nivel nacional: BOGOTÁ: FONTIBÓN Diagonal 16 Cra 96i - 15 Tel: (1) 3808959, SIBERIA - COTA:
        Calle 80 Autopista Medellin, Km 1.2 vía Siberia costado Sur Tel: (1) 3808920, ANTIOQUIA - ITAGÜÍ: Cra 42 No.
        46-130 Autopista Sur Tel: (4) 2040210, CALI-YUMBO: Sede Norte Cra. 36 No.15-95 Acopi-Yumbo Tel: (2) 3692100,
        BUCARAMANGA: Calle 70 # 32W-92 Km 4 Vía Girón, Tel: (7) 6910200, BARRANQUILLA: Parque Logístico BAQ: Calle 110
        (Avenida Circunvalar) # 9G-600- Bodega2, Tel: (605) 3160300. *La gorra emblemática Mack corresponde a una
        gorra gris referencia M3391, 100% algodón, logotipo de MACK en 3D, cierre a presión - ajustable; este artículo
        es mercancía con licencia oficial de Mack Trucks, Inc, país de origen: EEUU. El participante debe seleccionar
        el taller de Inchcape Colombia S.A.S (antes PracoDidacol) donde desea reclamar su gorra y sólo podrá
        reclamarla en el punto seleccionado (no se harán envíos de premios). **El 15% de descuento en repuestos MACK
        es válido del 9 de marzo hasta el 31 de mayo del 2023 o hasta agotar unides existentes, lo primero que ocurra.
        El 15% de descuento en repuestos MACK aplica únicamente para repuestos comprados por mostrador el día que el
        ganador reclame su premio (Gorra + Tarjeta de miembro) en el taller seleccionado. El 25% de descuento es
        válido del 9 de marzo hasta el 31 de mayo del 2023 o hasta agotar unides existentes, lo primero que ocurra. El
        25% de descuento aplica sólo para repuestos MACK instalados en taller el día que el ganador reclame su premio
        (gorra MACK + tarjeta) en el taller seleccionado. ***La TARJETA DE MIEMBRO JAURÍA MACK válida del 1 de febrero
        hasta el 30 de diciembre del 2023 o hasta agotar existencias, lo que primero ocurra, es una tarjeta que le
        permitirá al ganador acceder a descuentos exclusivos durante el año 2023, los cuales serán comunicados por
        medio de los canales oficiales de Inchcape Colombia S.A.S (antes Praco Didacol). El participante debe
        seleccionar el taller de Inchcape Colombia S.A.S (antes PracoDidacol) donde desea reclamar su tarjeta y sólo
        podrá reclamarla en el punto seleccionado (no se harán envíos de premios). El ganador que se inscriba sólo
        puede acceder a los descuentos el mismo día que reclame la gorra + tarjeta de miembro en el taller de Inchcape
        Colombia S.A.S (antes PracoDidacol) previamente seleccionado, los descuentos únicamente se otorgarán en
        facturas realizadas a nombre del propietario registrado de la tarjeta (tarjeta de miembro). Cualquier pago o
        transferencia deberá realizarse única y exclusivamente a las cuentas bancarias de Inchcape Colombia S.A.S
        (antes PRACO DIDACOL S.A.S), Identificadas con el NIT 860.047.657-1. Absténgase de realizar pagos a cuentas no
        autorizadas o que no sean de propiedad de Inchcape Colombia S.A.S (antes PRACO DIDACOL S.A.S). Cualquier
        irregularidad por favor no dude en reportarla haciendo uso de los mecanismos institucionales. Tras el cierre
        de publicación, pueden haberse producido cambios en el precio que sugerimos verificar con su asesor de
        preferencia al momento de realizar el cambio de aceite. Esta oferta, no es acumulable, canjeable ni
        transferible con otras ofertas y/o promociones de la marca. Esta campaña NO aplica para convenios de flotas.
      </v-col>
      <v-col sm="2" cols="2" class="icons_footer">
        <img class="footer_img" src="./assets/img/facebook-removebg-preview.png" alt="">
        <img src="./assets/img/instafram-removebg-preview.png" alt="" class="footer_img">
        <img src="./assets/img/youtube-removebg-preview.png" alt="" class="footer_img">
      </v-col>
    </v-row>
  </footer>
</template>
<style>
.template {
  width: 100%;
}

#app {
  color: white;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}

a {
  text-decoration: none;
  color: white;
}

.redes {
  width: 35px;
}

nav {
  padding-top: 5%;
  display: flex;
  background-color: black;
  width: 100%;
}

nav ul {
  display: flex;
  width: 100%;
  list-style-type: none;
}
.checkbox{
  position: relative;
  width: 100%;
}
li{
  margin-top: -50px;
}
.li1 {
  width: 60%;
  position: relative;
}

.li2 {
  width: 20%;
}

.li3 {
  width: 20%;
}

.fondo {
  width: 100%;
  height: 100%;
  z-index: -1;
}

.fondo-con-degradado {
  position: relative;
}

.fondo-con-degradado::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, transparent, transparent, black, black);
  z-index: 1;
}

.container {
  position: relative;
}

.txt {
  padding-top: 40%;
  position: absolute;
  top: 0;
  left: 10%;
  z-index: 1;
}

.seccion1 {
  font-size: 25px;
  width: 50%;
}

.seccion2 {
  width: 40%;
}

.textos {
  left: 10%;
  width: 90%;
  position: relative;
  display: flex;
  margin-top: -10%;
  z-index: 2;
}

.gorra {
  position: relative;
  width: 50%;
  margin-top: -20%;
  height: auto;
  left: 110px;
}

.texto1 {
  width: 70%;
}

.lar {
  font-size: 20px;
  width: 70%;
  font-weight: bold;
}

.template2 {
  justify-content: center;
  padding-top: 60px;
  color: black;
  background-color: #E6E7E8;
}

.formulario {
  left: 20%;
  width: 50%;
  position: relative;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
}

.secciones {
  display: flex;
  position: relative;
}

.info_seccion_1 {
  width: 32%;
  position: relative;
  display: block;
  left: 10%;
  padding: 20px;
  box-sizing: border-box;
}

.p_info_2,
.p_info_3 {
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
}

.p_info_2 span,
.p_info_3 img {
  margin-right: 10px;
}

.p_info_2 span,
.p_info_3 span {
  flex-grow: 1;
}

.celebracion {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  margin-top: 60px;
}

.valid {
  font-size: 15px;
  margin-top: 20px;
}

input,
select,
v-checkbox {
  width: 100%;
  height: 30px;
  margin-bottom: -10px;
  border: 1px solid black;
  border-radius: 3px;
  color: black;
  background-color: #EAEAEA;
  background-color: #d5d3d3;
}

v-row {
  padding: 10px;
  position: absolute;
}

.concentimiento {
  font-size: 12px;
  width: 75%;
  background-color: #d5d3d3;
  border: 2px solid #84754E;
}

footer {
  background-color: #84754E;
}

.description{
  width: 90%;
}

.footertext {
  color: white;
  font-size: 7px;
  padding: 10px;
  left: 10%;
  position: relative;
}

.icons_footer {
  display: flex;
  width: 50px;
  height: 50px;
  position: relative;
  left: 13%;
  margin-top: 2%;
}


@media screen and (max-width: 480px) {
  .template {
    width: 100%;
  }

  nav {
    padding-top: 5%;
    display: flex;
    background-color: black;
    width: 100%;
  }

  .redes{
    width: 33%;
  }
  nav ul {
    display: flex;
    width: 100%;
    list-style-type: none;
  }

  li{
    margin-top: -5px;
  }
  .li1 {
    width: 50%;
    position: relative;
  }

  .li2 {
    width: 30%;
  }

  .li3 {
    width: 20%;
  }

  .contenedor {
    width: 90%;
    height: auto;
  }

  .txt {
    width: 30%;
  }

  .gorra {
    width: 70%;
    height: auto;
    left: -10%;
    margin-top: -10%;
  }

  .texto1 {
    font-size: 9px;
  }

  .seccion1{
    width: 100%;
  }

  .lar {
    font-size: 8px;
  }

  .fondo-con-degradado {
    position: relative;
  }

  .fondo-con-degradado::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, transparent, black, black);
    z-index: 1;
  }

  .secciones{
    columns: 1;
    display: block;
    flex-direction: column;
    align-items: center;
  }

  .info_seccion_1{
    width: 100%;
    margin-bottom: 20px;
    left: 5px;
    width: 100%;
    position: relative;
  }
  
  .info_img{
    width: 100%;
  }

  .formulario {
    width: 90%;
    left: 5%;
  }
  
  .concentimiento{
    width: 100%;
    margin-top: 20px;
  }
  
  footer{
    flex-direction: column;
    align-items: center;
  }

  .footertext {
    margin-top: 20%;
    width: 100%;
    text-align: center;
    font-size: 10px;
    position: relative; 
  }

  .icons_footer{
    width: 100%;
    left: -45%;
    margin-top: 20px;
  }
  
}

@media screen and (max-width: 1050px) {
  .template {
    width: 100%;
  }
  .info_img{
    width: 110%;
  }
  li{
    margin-top: -3%;
  }
  nav{
    height: 70px;
  }
  .li2{
    width: 20%
  }
  .li3{
    width: 20%
  }
  .texto1{
    font-size: 20px;
  }
  .lar{
    font-size:18px;
  }
  .seccion1{
    width: 100%;
    margin-top: 10%;
  }
  .gorra{
    left: 10px;
  }
  .txt{
    width: 50%;
  }
  .formulario{
    left: 20%;
  }
  footer{
    flex-direction: column;
    align-items: center;
  }

  .footertext {
    margin-top: 20%;
    width: 100%;
    text-align: center;
    font-size: 10px;
    position: relative; 
  }

  .icons_footer{
    width: 100%;
    left: -45%;
    margin-top: 20px;
  }
}

@media screen and (max-width: 430px) {
  .template {
    width: 100%;
  }
  .info_img{
    width: 100%;
  }
  li{
    margin-top: -3%;
  }
  nav{
    height: 70px;
  }
  .li2{
    width: 20%
  }
  .li3{
    width: 20%
  }
  .texto1{
    font-size: 20px;
  }
  .lar{
    font-size:18px;
  }
  .seccion1{
    width: 100%;
  }
  .gorra{
    left: 10px;
  }
  .txt{
    width: 50%;
  }
  .formulario{
    left: 2%;
  }
  footer{
    flex-direction: column;
    align-items: center;
  }

  .footertext {
    margin-top: 20%;
    width: 100%;
    text-align: center;
    font-size: 10px;
    position: relative; 
  }

  .icons_footer{
    width: 100%;
    left: -45%;
    margin-top: 20px;
  }
  .texto1{
    width: 90%;
    font-size: 15px;
  }
}

@media screen and (max-width: 810px) {

}
</style>