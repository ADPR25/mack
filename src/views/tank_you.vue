<template>
    <div class="fine">
        <div>
            <div>
                <nav>
                    <ul>
                        <li class="li1"> <img src="../assets/img/img_nav.png" alt="" class="nav_img"> </li>
                        <li class="li2"><a href="#">REGISTRATE</a></li>
                        <li class="li3"> <img class="redes" src="../assets/img/facebook.png" alt="" /> <img class="redes"
                                src="../assets/img/instagram.png" alt="" /> <img class="redes"
                                src="../assets/img/youtube.png" alt="" /> </li>
                    </ul>
                </nav>
            </div>
            <div class="fondo_degradado">
                <img src="../assets/fondo1.png" class="fondo_fel">
    
                <div class="titulo">
                    <b>
                        ¡Gracias por registrarte!
                    </b>
                </div>
    
                <div class="texto_descripcion">
                    <p>
                    <h4>
                        Puedes reclamar tu premio en Bogotá PracoDidacol sede Calle 80.
                        Dirección: Calle 80 Autopista Medellín, Km 1.2 vía Siberia Costado Sur.
                    </h4>
                    </p>
                </div>
    
                <div class="img_f">
                    <img src="../assets/textos/texto2.png" alt="" class="img_f_intro">
                </div>
    
                <div class="red">
                    <p>
                        No olvides que para reclamar tu premio debes ser el dueño del camión MACK y debes presentar la
                        tarjeta
                        de
                        propiedad de tu vehículo MACK. Si por algún motivo no puedes reclamar el premio personalmente, debes
                        enviar
                        un correo autorizando a la persona que va a reclamarlo.
                    </p>
                </div>
    
                <div class="img_g">
                    <img src="../assets/textos/tesxto3.png" alt="" class="img_g_intro">
                </div>
            </div>
        </div>
        <footer>
            <v-row no-gutters>
                <v-col sm="8" cols="9" class="footertext">
                </v-col>
                <v-col sm="2" cols="2" class="icons_footer">
                    <img class="footer_img" src="../assets/img/facebook-removebg-preview.png" alt="">
                    <img src="../assets/img/instafram-removebg-preview.png" alt="" class="footer_img">
                    <img src="../assets/img/youtube-removebg-preview.png" alt="" class="footer_img">
                </v-col>
            </v-row>
        </footer>
    </div>
</template>
<style>
.nav_img {
    margin-left: 20%;
    height: 60%;
}

.fondo_fel {
    width: 100%;
    height: 90%;
    position: relative;
    z-index: -1;
}

.fine{
    columns: 1;
    text-align: center;
    flex-direction: column;
    display: flex;
}

.titulo {
    margin-left: 30%;
    font-size: 55px;
    margin-top: -47%;
    position: absolute;
}

.texto_descripcion {
    position: absolute;
    margin-top: -41%;
    width: 37%;
    align-items: center;
    text-align: center;
    left: 31%;
}
.fondo_degradado{
    background: linear-gradient(to bottom, black, rgba(128, 128, 128, 0.5));
}
.img_f {
    position: absolute;
    margin-top: -36%;
    width: 37%;
    align-items: center;
    text-align: center;
    left: 31%;
    border-top: 3px solid #ccc;
    border-bottom: 3px solid #ccc;
}

.img_g {
    position: absolute;
    margin-top: -16%;
    width: 37%;
    align-items: center;
    text-align: center;
    left: 31%;
}

.red {
    position: absolute;
    margin-top: -28%;
    width: 60%;
    align-items: center;
    text-align: center;
    left: 21%;
    background-color: red;
}

footer {
    padding: 0%;
}


@media screen and (max-width: 768px) {

    .nav_img {
        margin-left: 5%;
        margin-top: 3%;
    }

    .titulo {
        font-size: 30px;
        margin-top: -55%; 
    }

    .texto_descripcion {
        font-size: 15px; 
        left: 35%;
        margin-top: -48%;
    }

    .img_f {
        margin-top: -35%; 
        width: 50%;
        left: 28%;
    }

    .red {
        font-size: 15px;
        margin-top: -25%; 
    }

    .img_g {
        display: flex;
        margin-top: -8%;
    }
}

@media screen and (max-width: 480px) {

    .nav_img {
        height: 40%;
    }

    .titulo {
        font-size: 18px;
        margin-left: 15%; 
        margin-top: -55%; 
    }

    .texto_descripcion {
        font-size: 7px; 
        left: 13%;
        width: 60%;
        margin-top: -47%;
    }

    .img_f {
        margin-top: -37%;
        margin-left: -10%;
    }

    .img_f_intro {
        width: 50%; 
    }

    .red {
        font-size: 10px; 
        margin-top: -25%; 
        width: 90%; 
        left: 5%;
    }

    .img_g {
        width: 20%; 
        left: 60%; 
        margin-top: -48%;
    }

    .img_g_intro {
        width: 200%;
        transform: rotate(45deg);
    }
    .redes{
        width: 20%;
        margin-top: 5%;
    }
}

@media screen and (max-width: 1024px) {
    .titulo{
        font-size: 40px;
    }
    .img_f{
        display: flex;
        margin-top: -31%;
    }
    .red{
        font-size: 15px;
        margin-top: -25%; 
        width: 90%; 
        left: 5%;
    }
}

</style>
