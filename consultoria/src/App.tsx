import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import './css/styles.css';
import ContactForm from "./components/ContactForm";
import { useNavigate } from 'react-router-dom';
import GoogleCalendarButton from "./components/GoogleCalendarButton"
/*import VideoPlayer from "./components/VideoPlayer.tsx";*/

const App: React.FC = () => {
    const navigate = useNavigate();

    const handleScroll = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };



    return (
        <Box
            display="flex"
            flexDirection="column"
            height="100vh"
            sx={{ backgroundColor: "#f9f6f1" }}
        >
            {/* Menú en la parte superior */}
            <AppBar position="static" elevation={2}>
                <Toolbar sx={{
                    justifyContent: 'space-between',
                    backgroundColor: '#00594f',
                    px: { xs: 2, md: 4 },
                    py: 1.5
                }}>
                    {/* Logo en la parte izquierda */}
                    <Box
                        component="img"
                        src="/LogoCompleto.jpg"
                        alt="Mi logo"
                        sx={{
                            height: 48,
                            width: 'auto',
                            transition: 'transform 0.2s',
                            '&:hover': {
                                transform: 'scale(1.05)'
                            }
                        }}
                    />


                    {/* Enlaces en la parte derecha */}
                    <Box display="flex" gap={2}>
                        <Button
                            color="inherit"
                            onClick={() => handleScroll('inicio')}
                            sx={{
                                fontSize: '1rem',
                                fontWeight: 500,
                                transition: 'all 0.3s',
                                '&:hover': {
                                    backgroundColor: 'rgba(255,255,255,0.1)',
                                    transform: 'translateY(-2px)'
                                }
                            }}
                        >
                            Inicio
                        </Button>
                        <Button
                            color="inherit"
                            onClick={() => handleScroll('consulta')}
                            sx={{
                                fontSize: '1rem',
                                fontWeight: 500,
                                transition: 'all 0.3s',
                                '&:hover': {
                                    backgroundColor: 'rgba(255,255,255,0.1)',
                                    transform: 'translateY(-2px)'
                                }
                            }}
                        >
                            Consultas
                        </Button>
                        <Button
                            color="inherit"
                            onClick={() => handleScroll('contacto')}
                            sx={{
                                fontSize: '1rem',
                                fontWeight: 500,
                                transition: 'all 0.3s',
                                '&:hover': {
                                    backgroundColor: 'rgba(255,255,255,0.1)',
                                    transform: 'translateY(-2px)'
                                }
                            }}
                        >
                            Contacto
                        </Button>
                        <Button
                            color="inherit"
                            sx={{
                                fontSize: '1rem',
                                fontWeight: 500,
                                transition: 'all 0.3s',
                                '&:hover': {
                                    backgroundColor: 'rgba(255,255,255,0.1)',
                                    transform: 'translateY(-2px)'
                                }
                            }}
                            onClick={() => navigate('/blog')}
                        >
                            Blog
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Cuerpo en el medio */}
            <Box component="main" flex={1} overflow="auto">
                {/* Sección Inicio */}
                <Box
                    id="inicio"
                    height="100%"
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    px={{ xs: 3, md: 6 }}
                    py={4}
                    sx={{ backgroundColor: "#f9f6f1" }}
                >
                    {/* Texto descriptivo a la izquierda */}
                    <Box width="25%" height="90%" minWidth={0} display="flex" flexDirection="column" alignItems="center">
                        <Typography variant="h4" gutterBottom sx={{
                            marginBottom: 5,
                            textAlign: 'center',
                            fontWeight: 700,
                            color: '#00594f',
                            fontSize: { xs: '1.75rem', md: '2rem' }
                        }}>
                            Especialistas en incapacidad permanente
                        </Typography>
                        <Typography variant="body1" sx={{
                            textAlign: 'center',
                            marginLeft: 2,
                            marginRight: 2,
                            marginBottom: 5,
                            lineHeight: 1.8,
                            color: '#333',
                            fontSize: '1.05rem'
                        }}>
                            Solo trabajamos casos de incapacidades permanentes, lo que nos permite darle un trato 100% personalizado,
                            con explicaciones claras, soluciones concretas y una hoja de ruta desde el primer momento.
                            <li>Trato cercano y humano</li>
                            <li>Primer análisis gratuito</li>
                            <li>Explicación clara de las fases del proceso</li>
                            <li>Pago por fases- facilidades de pago.</li>
                        </Typography>
                        <GoogleCalendarButton />
                    </Box>

                    {/* Carrusel de imágenes a la derecha */}
                    <Box
                        width="75%"
                        height="100%"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        minWidth={0}
                    >
                        <Box
                            component="img"
                            src="/FotoOficial.jpg"
                            alt="Imagen principal"
                            sx={{
                                width: '100%',
                                height: {
                                    xs: 'auto',
                                    md: '90%',
                                },
                                maxHeight: '100%',
                                objectFit: 'cover',
                                borderRadius: 3,
                                boxShadow: '0 15px 40px rgba(0,89,79,0.15)',
                                transition: 'transform 0.3s, box-shadow 0.3s',
                            }}
                        />
                    </Box>
                </Box>

                {/* Sección Consulta */}
                <Box
                    id="consulta"
                    height="100%"
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    px={{ xs: 3, md: 6 }}
                    py={4}
                    sx={{ backgroundColor: "#ffffff" }}
                >
                    {/* Carrusel de imágenes a la izquierda */}
                    <Box
                        width="75%"
                        height="100%"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        minWidth={0}
                    >
                        <Box
                            component="img"
                            src="/Papeleo.jpg"
                            alt="Imagen principal"
                            sx={{
                                width: '100%',
                                height: {
                                    xs: 'auto',
                                    md: '90%',
                                },
                                maxHeight: '100%',
                                objectFit: 'cover',
                                borderRadius: 3,
                                boxShadow: '0 15px 40px rgba(0,89,79,0.15)',
                                transition: 'transform 0.3s, box-shadow 0.3s',
                            }}
                        />
                    </Box>


                    {/* Texto descriptivo a la derecha */}
                    <Box width="25%" height="90%" minWidth={0} display="flex" flexDirection="column" alignItems="center">
                        <Typography variant="h4" gutterBottom sx={{
                            marginBottom: 13,
                            textAlign: 'center',
                            fontWeight: 700,
                            color: '#00594f',
                            fontSize: { xs: '1.75rem', md: '2rem' }
                        }}>
                            ¿Tiene alguna condición incapacitante que le condicione laboralmente?
                        </Typography>
                        <Box sx={{ textAlign: 'left', mb: 2 }}>
                            <ul style={{
                                paddingLeft: 20,
                                margin: 0,
                                fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                                fontSize: '1.05rem',
                                color: '#555',
                                lineHeight: 2.5
                            }}>
                                <li>Descubra si puede optar a una incapacidad permanente y qué opciones legales tiene.</li>
                                <li>Atención personalizada, claridad desde el primer momento.</li>
                            </ul>
                        </Box>

                    </Box>
                </Box>

                {/* Sección Servicios */}
                <Box
                    id="servicios"
                    minHeight="100vh"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    px={{ xs: 3, md: 6 }}
                    py={4}
                    sx={{ backgroundColor: "#f9f6f1" }}
                >
                    {/* Título */}
                    <Typography
                        variant="h4"
                        gutterBottom
                        sx={{
                            textAlign: { xs: 'center', md: 'left' },
                            mt: 4,
                            mb: 6,
                            letterSpacing: 1,
                            fontWeight: 700,
                            color: '#00594f',
                            fontSize: { xs: '1.75rem', md: '2rem' }
                        }}
                    >
                        ¿Le son familiares alguna de estas situaciones?
                    </Typography>

                    {/* Contenido principal */}
                    <Box
                        display="flex"
                        flexDirection={{ xs: 'column', md: 'row' }}
                        width="100%"
                        alignItems="center"
                        gap={6}
                        mb={6}
                    >
                        {/* Texto izquierda */}
                        <Box
                            width={{ xs: '100%', md: '50%' }}
                            display="flex"
                            flexDirection="column"
                            justifyContent="center"
                            gap={3}
                        >
                            <Box
                                component="ul"
                                sx={{
                                    listStyle: 'disc',
                                    pl: 3,
                                    m: 0,
                                    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                                    fontSize: '1.08rem',
                                    lineHeight: 2,
                                    color: '#555'
                                }}
                            >
                                <li>Está de baja médica y el INSS no le informa de forma clara
                                    sobre el proceso de incapacidad temporal/permanente.</li>
                                <li>No sabe si reúne las condiciones para poder pedir una incapacidad permanente.</li>
                                <li>Se siente perdido entre trámites y plazos.</li>
                            </Box>
                        </Box>

                        {/* Vídeo derecha */}
                        <Box
                            width={{ xs: '100%', md: '50%' }}
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Box
                                component="video"
                                src="/videos/VideoExplicacion.mp4"
                                controls
                                preload="metadata"
                                playsInline
                                sx={{
                                    width: '100%',
                                    height: { xs: 'auto', md: '90%' },
                                    maxHeight: 420,
                                    objectFit: 'cover',
                                    borderRadius: 3,
                                    boxShadow: '0 15px 40px rgba(0,89,79,0.15)',
                                }}
                            />
                        </Box>



                    </Box>
                </Box>


                {/* Sección Equipo */}
                <Box
                    id="equipo"
                    height="100%"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    px={{ xs: 3, md: 6 }}
                    py={8}
                    sx={{ backgroundColor: "#ffffff" }}
                >
                    {/* Título centrado */}
                    <Typography variant="h4" gutterBottom sx={{
                        textAlign: 'center',
                        mb: 25,
                        fontWeight: 700,
                        color: '#00594f',
                        fontSize: { xs: '1.75rem', md: '2rem' }
                    }}>
                        Testimonios de clientes
                    </Typography>
                    {/* Testimonios en dos columnas */}
                    <Box
                        display="flex"
                        flexDirection="row"
                        width="100%"
                        justifyContent="center"
                        alignItems="stretch"
                        gap={4}
                    >
                        {/* Testimonio 1 a la izquierda */}
                        <Box
                            width={{ xs: "100%", md: "45%" }}
                            display="flex"
                            flexDirection="column"
                            justifyContent="center"
                            alignItems="flex-end"
                            px={2}
                        >
                            <Typography variant="body1" sx={{
                                textAlign: 'left',
                                fontStyle: 'italic',
                                mb: 2,
                                fontSize: '1.05rem',
                                lineHeight: 1.8,
                                color: '#555'
                            }}>
                                «Mi esposo sufre una lesión degenerativa y no sabíamos cómo iniciar el trámite.
                                JM Incapacidades nos orientó desde cero, preparó toda la documentación y nos acompañó
                                hasta la resolución final.
                                Conseguimos la incapacidad permanente absoluta.
                                Su empatía y claridad lo hicieron todo más fácil.»<br />
                                <span style={{ fontStyle: 'normal', fontWeight: 600, color: '#00594f' }}>— Elena G., Barcelona</span>
                            </Typography>
                        </Box>
                        {/* Testimonio 2 a la derecha */}
                        <Box
                            width={{ xs: "100%", md: "45%" }}
                            display="flex"
                            flexDirection="column"
                            justifyContent="center"
                            alignItems="flex-start"
                            px={2}
                        >
                            <Typography variant="body1" sx={{
                                textAlign: 'left',
                                fontStyle: 'italic',
                                mb: 2,
                                fontSize: '1.05rem',
                                lineHeight: 1.8,
                                color: '#555'
                            }}>
                                "Me explicaron todo el proceso con total claridad.
                                Me sentí muy acompañada durante todo el proceso,
                                y hoy tengo mi incapacidad reconocida."
                                <br />
                                <span style={{ fontStyle: 'normal', fontWeight: 600, color: '#00594f' }}>– Laura L., Barcelona</span>
                            </Typography>
                        </Box>
                        {/* Testimonio 3 a la izquierda */}
                        <Box
                            width={{ xs: "100%", md: "45%" }}
                            display="flex"
                            flexDirection="column"
                            justifyContent="center"
                            alignItems="flex-end"
                            px={2}
                        >
                            <Typography variant="body1" sx={{
                                textAlign: 'left',
                                fontStyle: 'italic',
                                mb: 2,
                                fontSize: '1.05rem',
                                lineHeight: 1.8,
                                color: '#555'
                            }}>
                                «Acudí a JM Incapacidades porque no entendía por qué mi solicitud
                                había sido rechazada. Me explicaron mi situación con claridad,
                                recopilaron todos los informes que necesitaba y prepararon
                                la reclamación previa. Hoy tengo reconocida mi incapacidad permanente absoluta.
                                Solo tengo palabras de agradecimiento.»
                                <br />
                                <span style={{ fontStyle: 'normal', fontWeight: 600, color: '#00594f' }}>— María del Carmen S., Tarragona</span>
                            </Typography>
                        </Box>
                        {/* Testimonio 4 a la derecha */}
                        <Box
                            width={{ xs: "100%", md: "45%" }}
                            display="flex"
                            flexDirection="column"
                            justifyContent="center"
                            alignItems="flex-start"
                            px={2}
                        >
                            <Typography variant="body1" sx={{
                                textAlign: 'left',
                                fontStyle: 'italic',
                                mb: 2,
                                fontSize: '1.05rem',
                                lineHeight: 1.8,
                                color: '#555'
                            }}>
                                «Después de dos denegaciones, estaba agotado y sin fuerzas para seguir.
                                JM Incapacidades revisó mi expediente, detectó los errores y me acompañó en todo el proceso.
                                Gracias a su trabajo conseguí finalmente la incapacidad permanente total.
                                Lo que más valoro es la tranquilidad que me dieron en cada paso.»
                                <br />
                                <span style={{ fontStyle: 'normal', fontWeight: 600, color: '#00594f' }}>— Antonio M., Figueres</span>
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                {/* Sección Cómo funciona */}
                <Box
                    id="como-funciona"
                    minHeight="100vh"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    px={{ xs: 3, md: 6 }}
                    py={4}
                    sx={{ backgroundColor: "#f9f6f1" }}
                >
                    {/* Contenido principal */}
                    <Box
                        display="flex"
                        flexDirection={{ xs: 'column', md: 'row' }}
                        width="100%"
                        alignItems="center"
                        gap={6}
                    >
                        {/* Texto izquierda */}
                        <Box
                            width={{ xs: '100%', md: '50%' }}
                            display="flex"
                            flexDirection="column"
                            justifyContent="center"
                            gap={3}
                        >
                            <Typography
                                variant="h4"
                                gutterBottom
                                sx={{
                                    textAlign: { xs: 'center', md: 'left' },
                                    mt: 4,
                                    fontWeight: 700,
                                    color: '#00594f',
                                    fontSize: { xs: '1.75rem', md: '2rem' }
                                }}
                            >
                                ¿Cómo funciona?
                            </Typography>

                            <Typography
                                variant="h6"
                                gutterBottom
                                sx={{
                                    textAlign: { xs: 'center', md: 'left' },
                                    fontWeight: 600,
                                    color: '#333'
                                }}
                            >
                                Proceso simple en 3 pasos
                            </Typography>

                            <Box
                                component="ol"
                                sx={{
                                    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                                    fontSize: '1.08rem',
                                    lineHeight: 2,
                                    pl: 3,
                                    m: 0,
                                    color: '#555'
                                }}
                            >
                                <li>Solicitas tu análisis gratuito</li>
                                <li>Le explicamos su situación y opciones reales</li>
                                <li>Le acompañamos paso a paso en todo el proceso, sin sorpresas</li>
                            </Box>
                        </Box>

                        {/* Imagen derecha */}
                        <Box
                            width={{ xs: '100%', md: '50%' }}
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Box
                                component="img"
                                src="/Reunion.jpg"
                                alt="Proceso de trabajo"
                                sx={{
                                    width: '100%',
                                    height: { xs: 'auto', md: '90%' },
                                    maxHeight: 420,
                                    objectFit: 'cover',
                                    borderRadius: 3,
                                    boxShadow: '0 15px 40px rgba(0,89,79,0.15)',
                                    transition: 'transform 0.3s, box-shadow 0.3s',
                                }}
                            />
                        </Box>
                    </Box>
                </Box>


                {/* Sección Sobre mí */}
                <Box
                    id="sobre-mi"
                    minHeight="100vh"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    px={{ xs: 3, md: 6 }}
                    py={4}
                    sx={{ backgroundColor: "#ffffff" }}
                >
                    <Box
                        display="flex"
                        flexDirection={{ xs: 'column', md: 'row' }}
                        width="100%"
                        alignItems="center"
                        gap={6}
                    >
                        {/* Texto izquierda */}
                        <Box
                            width={{ xs: '100%', md: '50%' }}
                            display="flex"
                            flexDirection="column"
                            justifyContent="center"
                            gap={3}
                        >
                            <Typography
                                variant="h4"
                                gutterBottom
                                sx={{
                                    textAlign: { xs: 'center', md: 'left' },
                                    fontWeight: 700,
                                    color: '#00594f',
                                    fontSize: { xs: '1.75rem', md: '2rem' }
                                }}
                            >
                                Sobre nosotros
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{
                                    textAlign: { xs: 'center', md: 'left' },
                                    fontSize: '1.05rem',
                                    lineHeight: 1.8,
                                    color: '#333'
                                }}
                            >
                                10 años de experiencia trabajando exclusivamente en casos de incapacidad permanente
                                respaldan nuestro trabajo. Nos distingue nuestro enfoque humano, cercano y realista con el cliente.
                                Absoluta honestidad frente a su caso: le explicamos lo que se puede hacer, cuándo y cómo.
                            </Typography>
                        </Box>

                        {/* Imagen derecha */}
                        <Box
                            width={{ xs: '100%', md: '50%' }}
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Box
                                component="img"
                                src="/VideoLlamada.jpg"
                                alt="Equipo especializado en incapacidad permanente"
                                sx={{
                                    width: '100%',
                                    height: { xs: 'auto', md: '90%' },
                                    maxHeight: 420,
                                    objectFit: 'cover',
                                    borderRadius: 3,
                                    boxShadow: '0 15px 40px rgba(0,89,79,0.15)',
                                    transition: 'transform 0.3s, box-shadow 0.3s',
                                }}
                            />
                        </Box>
                    </Box>
                </Box>


                {/* Sección Preguntas Frecuentes */}
                <Box
                    id="faq"
                    height="100%"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    px={{ xs: 3, md: 6 }}
                    py={8}
                    sx={{ backgroundColor: "#f9f6f1" }}
                >
                    <Box width="100%" maxWidth={700} display="flex" flexDirection="column" alignItems="center">
                        <Typography variant="h4" gutterBottom sx={{
                            textAlign: 'center',
                            mb: 4,
                            fontWeight: 700,
                            color: '#00594f',
                            fontSize: { xs: '1.75rem', md: '2rem' }
                        }}>
                            Preguntas Frecuentes
                        </Typography>
                        <Box sx={{ width: '100%' }}>
                            <Typography variant="subtitle1" sx={{
                                fontWeight: 600,
                                mt: 2,
                                color: '#00594f',
                                fontSize: '1.1rem'
                            }}>
                                ¿Y si no me conceden la incapacidad?
                            </Typography>
                            <Typography variant="body1" sx={{
                                mb: 2,
                                lineHeight: 1.8,
                                color: '#555',
                                fontSize: '1.05rem'
                            }}>
                                Le explicamos desde el principio las probabilidades reales.
                                No todos los casos se ganan, pero siempre tendrá claridad.              </Typography>
                            <Typography variant="subtitle1" sx={{
                                fontWeight: 600,
                                mt: 2,
                                color: '#00594f',
                                fontSize: '1.1rem'
                            }}>
                                ¿Cuáles son nuestros honorarios?
                            </Typography>
                            <Typography variant="body1" sx={{
                                mb: 2,
                                lineHeight: 1.8,
                                color: '#555',
                                fontSize: '1.05rem'
                            }}>
                                Trabajamos por fases, y los pagos se realizan después de cada fase.
                                Solo se paga por trabajo efectivamente realizado, no hay pagos por adelantado.
                                Sin sorpresas ni tarifas ocultas.
                            </Typography>
                            <Typography variant="subtitle1" sx={{
                                fontWeight: 600,
                                mt: 2,
                                color: '#00594f',
                                fontSize: '1.1rem'
                            }}>
                                ¿Cuánto tarda el proceso?
                            </Typography>
                            <Typography variant="body1" sx={{
                                lineHeight: 1.8,
                                color: '#555',
                                fontSize: '1.05rem'
                            }}>
                                Cada caso es distinto,
                                pero le detallamos los plazos desde el primer momento para que sepa qué esperar.
                            </Typography>
                            <Typography variant="subtitle1" sx={{
                                fontWeight: 600,
                                mt: 2,
                                color: '#00594f',
                                fontSize: '1.1rem'
                            }}>
                                ¿Se puede tramitar todo el proceso de forma online?
                            </Typography>
                            <Typography variant="body1" sx={{
                                lineHeight: 1.8,
                                color: '#555',
                                fontSize: '1.05rem'
                            }}>
                                Sí. No se tiene que desplazar.
                                Nos adaptamos a las circunstancias de cada cliente.
                            </Typography>
                        </Box>
                        <Button
                            color="inherit"
                            sx={{
                                mt: 4,
                                backgroundColor: "#00594f",
                                color: "#fff",
                                borderRadius: "8px",
                                fontSize: "15px",
                                fontWeight: 500,
                                padding: "10px 24px",
                                transition: "all 0.3s",
                                '&:hover': {
                                    backgroundColor: "#00413a",
                                    transform: 'translateY(-2px)',
                                    boxShadow: '0 8px 20px rgba(0,89,79,0.25)'
                                },
                                boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                            }}
                            onClick={() => navigate('/consultas')}
                        >
                            Saber más
                        </Button>
                    </Box>
                </Box>


                {/* Sección Contacto */}
                <Box
                    id="contacto"
                    height="100%"
                    sx={{ backgroundColor: "#ffffff" }}
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    px={{ xs: 3, md: 6 }}
                    py={4}

                >
                    {/* Texto descriptivo a la izquierda */}
                    <Box width="25%" height="90%" minWidth={0} display="flex" flexDirection="column" alignItems="center">
                        <Typography variant="h4" gutterBottom sx={{
                            textAlign: 'center',
                            fontWeight: 700,
                            color: '#00594f',
                            fontSize: { xs: '1.75rem', md: '2rem' }
                        }}>
                            Contacto
                        </Typography>
                        <Typography variant="body1" sx={{
                            textAlign: 'center',
                            lineHeight: 1.8,
                            color: '#333',
                            fontSize: '1.05rem',
                            mb: 2
                        }}>
                            Ponte en contacto con nosotros para más información.
                            Estamos disponibles para atender tus consultas
                            y ayudarte a encontrar la mejor solución para tus necesidades.
                            <li>info@jmincapacidades.com </li>
                        </Typography>
                        <ContactForm />
                    </Box>

                    {/* Carrusel de imágenes a la derecha */}
                    <Box
                        width="75%"
                        height="100%"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        minWidth={0}
                    >
                        <Box
                            component="img"
                            src="/ConversacionTelefonica.jpg"
                            alt="Imagen principal"
                            sx={{
                                width: '95%',
                                height: {
                                    xs: 'auto',
                                    md: '90%',
                                },
                                maxHeight: '95%',
                                objectFit: 'cover',
                                borderRadius: 3,
                                boxShadow: '0 15px 40px rgba(0,89,79,0.15)',
                                transition: 'transform 0.3s, box-shadow 0.3s',
                            }}
                        />
                    </Box>

                </Box>
            </Box>


            {/* Footer en la parte inferior */}
            <Box component="footer" bgcolor="#00594f" color="white" p={2} textAlign="center" sx={{
                boxShadow: '0 -4px 20px rgba(0,0,0,0.1)'
            }}>
                <Typography variant="body2" sx={{
                    fontSize: '0.95rem',
                    fontWeight: 500
                }}>
                    © 2025 JM Incapacidades
                </Typography>
            </Box>
        </Box>
    );
};

export default App;