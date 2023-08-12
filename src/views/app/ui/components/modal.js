import React, { useState } from 'react';
import {
  Row,
  Card,
  CardBody,
  CardTitle,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Input,
  Label,
  CustomInput,
  Badge,
} from 'reactstrap';
import { ContextMenuTrigger } from 'react-contextmenu';
import classnames from 'classnames';
import { NavLink } from 'react-router-dom';
import IntlMessages from 'helpers/IntlMessages';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';

const ModalUi = ({ match }) => {
  const [modalBasic, setModalBasic] = useState(false);
  const [modalLong, setModalLong] = useState(false);
  const [modalBack, setModalBack] = useState(false);
  const [backdrop, setBackdrop] = useState(true);
  const [modalRight, setModalRight] = useState(false);
  const [modalNestedContainer, setModalNestedContainer] = useState(false);
  const [modalNested, setModalNested] = useState(false);
  const [closeAll, setCloseAll] = useState(false);
  const [modalLarge, setModalLarge] = useState(false);
  const [modalSmall, setModalSmall] = useState(false);
  const [isCheck, setIsCheck] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(1);

  const handleToggle = () => {
    setIsCheck((prevCheck) => !prevCheck);
  };

  const handleRedirect = () => {
    window.location.href = 'https://www.visanetdominicana.com';
  };

  const handleRadioClick = (itemId) => {
    setSelectedItemId(itemId);
  };

  const renderCards = () => {
    const items = [
      {
        id: 1,
        title: 'Plan Esencial',
        description:
          'Agrupamos todas tus facturas de tus servicios de pago mensual en una sola y te brindamos 30 días más para pagarnos.',
        price: 'USD$200.00',
      },
      {
        id: 2,
        title: 'Plan Pro Servicios',
        description: 'Te apoyamos por medio de nuestro seguro pro servicios.',
        price: 'USD$50.00',
      },
      {
        id: 3,
        title: 'Plan Pro Prestamo',
        description: 'Te apoyamos por medio de nuestro seguro pro servicios.',
        price: 'USD$50.00',
      },
      // Add more items as needed
    ];

    return items.map((item) => (
      <Colxx xxs="8" key={item.id} className="mb-3">
        <ContextMenuTrigger id={`menu_id_${item.id}`} data={item.id}>
          <Card
            className="d-flex flex-row"
            onClick={() => handleRadioClick(item.id)}
          >
            <div className="custom-control custom-checkbox pl-1 align-self-center pr-4 pl-4">
              <CustomInput
                className="item-check mb-0"
                type="radio"
                name="services"
                id={`check_${item.id}`}
                checked={selectedItemId === item.id}
                onChange={() => {}} // This can be an empty function, as it's controlled by the 'checked' prop
                label=""
              />
            </div>
            <div className="pl-2 d-flex flex-grow-1 min-width-zero">
              <div className="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
                <p className="mb-1 text-small w-50 w-sm-100 pl-5 ml-5">
                  <strong>{item.title}</strong>
                  <br />
                  {item.description}
                </p>
                <p className="mb-1 text-small w-15 w-sm-100">
                  Consto de inscription
                  <br />
                  <strong>{item.price}</strong>
                </p>
              </div>
            </div>
          </Card>
        </ContextMenuTrigger>
      </Colxx>
    ));
  };

  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="Panel de control" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <p className="ml-4">
          Seleciona el plan que más se ajuste a tus necesidades.
        </p>
      </Row>
      <Row>
        {renderCards()}

        <Colxx xxs="8" key={1} className="mb-5 ">
          <ContextMenuTrigger id="menu_id" data={1}>
            <Card
              onClick={handleToggle}
              className={classnames('d-flex flex-row')}
            >
              <div className="custom-control custom-checkbox pl-1 align-self-center pr-4 pl-4">
                <CustomInput
                  className="item-check mb-0"
                  type="checkbox"
                  id={`check_${1}`}
                  checked={isCheck}
                  label=""
                />
              </div>
              {/* <NavLink to={`?p=${1}`} className="d-flex">
                  <img
                    alt={'asda'}
                    src={product.img}
                    className="list-thumbnail responsive border-0 card-img-left"
                  />
                </NavLink> */}
              <div className="pl-2 d-flex flex-grow-1 min-width-zero">
                <div className="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
                  {/* <NavLink to={`?p=${1}`} className="w-40 w-sm-100">
                      <p className="list-item-heading mb-1 truncate">
                        {'asda'}
                      </p>
                    </NavLink> */}
                  <p className="mb-1  text-small w-70 w-sm-100 pl-5 ml-5">
                    <strong>Términos y condiciones</strong>
                    <br />
                    Al aceptar los términos y condiciones confirmas que has
                    leído la información sobre seguridad de tus datos, uso de
                    datos, politicas de servicios y demás.
                    <strong>
                      <a
                        href="javascript:;"
                        onClick={() => setModalBasic(true)}
                      >
                        {' '}
                        Leer aquí.
                      </a>
                    </strong>
                  </p>

                  {/* <div className="w-15 w-sm-100">
                      <Badge pill>
                        {'product.status'}
                      </Badge>
                    </div> */}
                </div>
              </div>
            </Card>
          </ContextMenuTrigger>
        </Colxx>
        <Colxx xxs="8" color="primary" key={1} className="mb-3 ">
          <Button
            disabled={!isCheck}
            size="lg"
            color="primary"
            onClick={handleRedirect}
            className="mb-2 pl-3 pr-3"
          >
            Pay
          </Button>
        </Colxx>

        <Modal isOpen={modalBasic} toggle={() => setModalBasic(!modalBasic)}>
          <ModalHeader>
            <IntlMessages id="Términos y condiciones" />
          </ModalHeader>
          <ModalBody>
            Estamos conscientes que le preocupa cómo se utiliza y comparte su
            información personal, y le agradecemos su confianza en que lo
            haremos con cuidado y prudencia . Este Aviso de Privacidad describe
            cómo WWW.BILLSUPPLY.COM. y sus filiales (colectivamente "BILL
            SUPPLY") recopilan y procesan su información personal a través de
            sitios web, dispositivos, productos, servicios, tiendas en línea y
            físicas y aplicaciones de BILL SUPPLY que hacen referencia a este
            Aviso de Privacidad. POLÍTICAS DE PRIVACIDAD Y SEGURIDAD DEL
            USUARIO.
            <p>
              Las informaciones son recibidas por BILL SUPPLY, S.R.L RNC
              1-31-97594-1 -, entidad DOMINICANA de pagos de servicios de
              consumo masivos y uso repetitivo, tales como Agua potable, Energía
              eléctrica y afine. Constituido acorde a las leyes de la República
              Dominicana, con su domicilio social en la Avenida Yapur Dumit,
              Entrando por la Villa Magisterial Plaza Langumas 1er nivel, módulo
              1A de la ciudad Santiago de los 30 caballeros, República
              Dominicana.
            </p>
            <p>DATOS QUE PUEDEN SER RECOPILADOS</p>
            <p>
              Pudiéramos recopilar, procesar y conservar datos personales que tú
              nos proporciones o que nos proporcione cualquier dispositivo que
              uses (incluidos los dispositivos móviles) cuando utilizas nuestros
              servicios y consumes cuales quiera de los productos en nuestro
              market place; cuando nos proporcionas información vía web,
              actualizas o añades información a tu cuenta, participas o te
              comunicas con nosotros de cualquier otra forma en relación con
              nuestros servicios. Al interactuar con nosotros nos puedes remitir
              las siguientes informaciones: Nombre, direcciones, números de
              teléfono o direcciones de correo electrónico, cualquier otro
              contenido que generes o que esté conectado con tu cuenta de
              usuario, puede ser personal o emprerial. Nombre, dirección, número
              de teléfono, fecha de nacimiento, ocupación, correo electrónico,
              solicitado en el proceso de registro para promociones especiales y
              ofertas. Usuario y contraseña para acceder a la página de
              WWW.BILLSUPPLY.COM.
            </p>
            <p>
              Podemos recopilar información sobre tu interacción con nuestros
              servicios y productos, tus preferencias en cuanto a anuncios y tus
              comunicaciones con nosotros. Esta información incluye lo
              siguiente: ID de dispositivo o identificador único, tipo de
              dispositivo, ID para publicidad y código único de dispositivo.
              Datos de navegación en el sitio web, incluyendo páginas visitadas,
              tiempo de duración, historial y flujo de navegación en el sitio
              web, entre otros.
            </p>
            <p>
              Pudiera obtenerse información de geolocalización, incluida
              información de ubicación de tu dispositivo móvil. Datos sobre el
              equipo y sobre la conexión, URL de origen, datos del dispositivo,
              dirección IP, entre otras informaciones. Información personal que
              recopilamos mediante cookies, balizas web y tecnologías similares.
              Utilizamos cookies propias y de terceros, a fin de recopilar
              información sobre las páginas que visitas, los vínculos en los que
              pulsas y otras acciones que puedas realizar en en el sitio web, en
              nuestros anuncios o en el contenido de nuestros mensajes de correo
              electrónico, con la finalidad de ofrecerte la información más
              apropiada a tu perfil de usuario. Datos financieros como pueden
              ser tus números de cuenta bancaria o de tarjeta de crédito en el
              marco de una transacción,consulta y pagos de cualquier servicios o
              productos dentro del market place de BILL SUPPLY. Algunas veces es
              posible que proporciones tu edad, sexo, intereses y favoritos.
              Informaciones adicionales que estemos obligados o autorizados a
              recopilar y procesar en virtud de la legislación nacional
              aplicable para autenticar, identificarte o verificar la
              información que hemos recopilado. Datos personales que obtenemos
              automáticamente cuando utilizas nuestros servicios o registras una
              cuenta con nosotros.
            </p>
            <p>USOS DE LOS DATOS OBTENIDOS</p>
            <p>
              Ofrecerte contenido personalizado, incluidos artículos y servicios
              que puedan gustarte. Contactarte para tratar temas relacionados
              con tus servicios y proporcionarte atención al cliente, avisarte
              de cuestiones relativas a tus servicios, para solucionar problemas
              con tu cuenta, para resolver una reclamación, para recaudar tasas
              o importes debidos, para sondear tus opiniones a través de
              cuestionarios de encuestas o para proporcionarte atención al
              cliente de cualquier otra forma necesaria Mejorar y personalizar
              los servicios ofrecidos en el sitio web. Facilitar la navegación
              de los usuarios y proporcionar una mejor experiencia de usuario
              mediante el análisis de estadísticas de uso del sitio web. Ofrecer
              acceso a nuestros servicios y permitir su uso. Personalizar
              nuestra publicidad y las comunicaciones de marketing Evitar,
              detectar, paliar e investigar actividades fraudulentas o ilegales
              Ofrecer seguimiento sobre promociones y ofertas en las que el
              usuario haya participado o solicitado más información.
            </p>
            <p>CESIÓN DE DATOS</p>
            <p>
              Los datos a los que el BILL SUPPLY tenga acceso como consecuencia
              de consultas, transacciones, operaciones, solicitud de contrato,
              contratación de productos y servicios que tengan lugar por
              cualquier medio, o de procesos informáticos respecto de datos ya
              registrados, se incorporan al correspondiente fichero de BILL
              SUPPLY , autorizando a BILL SUPPLY DOMINICANA al tratamiento de
              los mismos para su utilización en relación con el desenvolvimiento
              de este formulario o solicitud, el desarrollo de acciones
              comerciales, sean de carácter general o adaptadas a sus
              características personales, para la oferta y contratación con el
              usuario de los productos y servicios del propio BILL SUPPLY,
              perdurando su autorización, en relación con este último supuesto,
              incluso una vez concluida su relación con BILL SUPPLY, en tanto no
              sea revocada. Igualmente, el interesado autoriza la comunicación o
              cesión de los mencionados datos a las sociedades pertenecientes a
              BILL SUPPLY DOMINICANA.
            </p>
            <p>
              Al igual el usuario puede manifestar su negativa a la comunicación
              de sus datos y al tratamiento de los mismos para fines distintos
              de los directamente relacionados con el mantenimiento, desarrollo
              o control de la relación contractual, incluyendo tanto que los
              datos personales del usuario no sean objeto de cesión a sociedades
              de BILL SUPPLY DOMINICANA, como que los datos personales del
              usuario no sean utilizados para la oferta y contratación de otros
              productos y servicios de BILL SUPPLY DOMINICANA.
            </p>
            <p>
              El sitio Web no compartirá ni revelará la información confidencial
              con terceros, excepto que tenga expresa autorización de quienes se
              suscribieron, o cuando sea requerido por orden judicial o legal.
              Nos apegamos al marco legal establecido en la Ley No. 172-13 que
              tiene por objeto la protección integral de los datos personales
              asentados en archivos, registros públicos, bancos de datos u otros
              medios técnicos de tratamiento de datos destinados a dar informes,
              sean estos públicos o privados, del 15 de diciembre de 2013. Se
              conservaran los datos personales el tiempo que sea necesario y
              pertinente para nuestras operaciones. Además, podemos conservar
              datos personales de cuentas cerradas para cumplir con la
              legislación nacional, evitar el fraude, recaudar tasas debidas,
              resolver reclamaciones, solucionar problemas, ayudar a posibles
              investigaciones, hacer cumplir nuestras Condiciones de uso y
              llevar a cabo otras acciones permitidas o exigidas por la
              legislación nacional aplicable. Cuando ya no sea necesario que
              conservemos tus datos personales, los eliminaremos de forma
              segura.
            </p>
            <p>
              ¿Qué información personal acerca de los clientes recopila BILL
              SUPPLY?
            </p>
            <p>
              Recopilamos su información personal con el fin de proporcionar y
              mejorar continuamente nuestros productos y servicios. Estos son
              los tipos de información personal que recopilamos:
            </p>
            <p>
              Información que usted nos da: Recibimos y almacenamos cualquier
              información que nos proporcione en relación con BILL SUPPLY.
              Recopilamos y almacenamos automáticamente determinados tipos de
              información acerca de su uso de BILL SUPPLY, que incluye la
              información sobre su interacción con productos, el contenido y los
              servicios disponibles a través de BILL SUPPLY. Al igual que muchos
              sitios web, utilizamos "cookies" y otros identificadores únicos, y
              obtenemos ciertos tipos de información cuando su navegador web o
              dispositivo accede a BILL SUPPLY y a otro contenido servido por
              BILL SUPPLY o en su nombre en otros sitios web.
            </p>
            <p>¿Con qué fines utiliza BILL SUPPLY su información personal?</p>
            <p>
              Utilizamos su información personal para operar, proporcionar,
              desarrollar y mejorar los productos y servicios que ofrecemos a
              nuestros clientes. Estos fines incluyen: Compra y entrega de
              productos y servicios. Usamos su información personal para tomar y
              manejar pedidos, entregar productos y servicios, procesar pagos y
              comunicarnos con usted acerca de pedidos, productos y servicios, y
              ofertas promocionales. Proporcionar, solucionar problemas y
              mejorar.
            </p>
            <p>
              BILL SUPPLY. Utilizamos su información personal para proporcionar
              funcionalidad, analizar el rendimiento, corregir errores y mejorar
              la usabilidad y eficacia de los Servicios de BILL SUPPLY.
              Recomendaciones y personalización. Utilizamos su información
              personal para recomendar funciones, productos y servicios que
              puedan ser de su interés, identificar sus preferencias y
              personalizar su experiencia con BILL SUPPLY. Proporcionar
              servicios de voz, imagen y cámara. Cuando utiliza nuestros
              servicios de voz, imagen y cámara, utilizamos su entrada de voz,
              imágenes, vídeos y otra información personal para responder a sus
              solicitudes, proporcionarle el servicio solicitado y mejorar
              nuestros servicios.
            </p>
            <p>
              Cumplir con las obligaciones legales. En algunos casos,
              recopilamos y utilizamos su información personal para cumplir con
              las leyes. Por ejemplo, recopilamos información de los vendedores
              sobre el lugar de establecimiento y la información de la cuenta
              bancaria para verificar la identidad y otros fines.
            </p>
            <p>
              Comunicarnos con usted. Utilizamos su información personal para
              comunicarnos con usted en relación con BILL SUPPLY a través de
              diferentes canales (por ejemplo, por teléfono, correo electrónico
              o chat).
            </p>
            <p>
              Publicidad. Utilizamos su información personal para mostrar
              anuncios basados en intereses de características, productos y
              servicios que puedan ser de su interés. No utilizamos información
              que lo identifique personalmente para mostrar anuncios basados en
              intereses.
            </p>
            <p>
              Prevención de Fraude y Riesgos de Crédito. Utilizamos información
              personal para prevenir y detectar fraudes y abusos con el fin de
              proteger la seguridad de nuestros clientes, BILL SUPPLY y
              terceros. También podemos utilizar métodos de puntuación para
              evaluar y gestionar los riesgos crediticios.
            </p>
            <p>¿Qué pasa con las cookies y otros identificadores?</p>
            <p>
              Para permitir que nuestros sistemas reconozcan su navegador o
              dispositivo a fin de proporcionar y mejora los Servicios de BILL
              SUPPLY, utilizamos cookies y otros identificadores.
            </p>
            <p>¿Comparte BILL SUPPLY su información personal?</p>
            <p>
              La información sobre nuestros clientes es una parte importante de
              nuestro negocio, y no estamos en el negocio de vender la
              información personal de nuestros clientes a otros. Compartimos la
              información de los clientes únicamente en el modo descrito a
              continuación y con filiales bajo el control de BILL SUPPLY.com,
              las cuales están sujetas al presente Aviso de Privacidad o bien,
              siguen unas prácticas al menos tan protectoras como las descritas
              en el presente Aviso de Privacidad.
            </p>
            <p>
              Operaciones con terceros: Le ponemos a su disposición los
              servicios, productos, aplicaciones o conocimientos proporcionados
              por terceros para su uso en o a través de BILL SUPPLY. Por
              ejemplo, puede pedir productos a terceros a través de nuestras
              tiendas, descargar aplicaciones de terceros proveedores de
              aplicaciones desde nuestra App Store y habilitar habilidades de
              tercero. También ofrecemos servicios o vendemos líneas de
              productos conjuntamente con empresas de terceros, como tarjetas de
              crédito de marca compartida. Puede percatarse cuando un tercero
              está relacionado con sus transacciones y compartimos información
              del cliente relacionada con dichas transacciones con ese tercero.
            </p>
            <p>
              Proveedores de servicios externos: Empleamos a otras empresas e
              individuos para realizar funciones en nuestro nombre. Por ejemplo,
              como despachar pedidos de productos o servicios, entregar
              paquetes, enviar correo postal y correo electrónico, eliminar
              información repetitiva de las listas de clientes, analizar datos,
              brindar asistencia de marketing, proporcionar resultados de
              búsqueda y enlaces, procesar pagos, transmitir contenido, puntuar
              el riesgo de crédito y proporcionar servicio al cliente. Estos
              proveedores de servicios de terceros tienen acceso a cierta
              información personal necesaria para realizar sus funciones, pero
              no pueden utilizarla para otros propósitos.
            </p>
            <p>
              Transferencias de negocios: A medida que continuamos desarrollando
              nuestro negocio, podríamos vender o comprar otros negocios o
              servicios. En dichas transacciones, la información de los clientes
              suele ser uno de los activos de los negocios transferidos. Sin
              embargo, dicha información estará en todo caso sujeta a los
              compromisos adquiridos en cualquier Aviso de Privacidad
              preexistente (a menos, claro, que el cliente lo autorice de otro
              modo). También, en el improbable caso de que BILL SUPPLY.com., o
              la mayor parte de sus activos sean adquiridos por un tercero, la
              información relativa a los clientes sería uno de los activos
              transferidos.
            </p>
            <p>
              Protección de BILL SUPPLY y otros: Liberamos información de cuenta
              y otra información personal cuando creemos que la liberación es
              apropiada para cumplir con la ley; hacer cumplir o aplicar
              nuestras condiciones de uso y otros acuerdos, así como proteger
              los derechos, propiedad o seguridad de BILL SUPPLY, nuestros
              usuarios y terceros. Esto incluye el intercambio de información
              con otras compañías y organizaciones para la protección contra el
              fraude y la reducción del riesgo crediticio.
            </p>
            <p>
              Aparte de lo establecido anteriormente, se le informará en el caso
              de que cualquier información sobre usted sea compartida con
              terceros, con el objeto de que tenga la oportunidad de decidir si
              no desea compartir dicha información.
            </p>
            <p>¿Qué tan segura es la información sobre mí?</p>
            <p>
              Diseñamos nuestros sistemas y dispositivos teniendo en cuenta su
              seguridad y privacidad. Trabajamos para proteger la seguridad de
              su información personal durante la transmisión mediante el uso de
              protocolos de cifrado y software. Seguimos el estándar de
              seguridad de datos de la industria de tarjetas de pago (PCI DSS)
              cuando manejamos datos de tarjetas de crédito.
            </p>
            <p>
              Mantenemos medidas de seguridad físicas, electrónicas y de
              procedimiento en relación con la recopilación, almacenamiento y
              divulgación de información personal del cliente. Nuestros
              procedimientos de seguridad implican que, solicitamos verificar su
              identidad antes de que te revelemos información personal para
              asegurarnos de confirmar su identidad. Nuestros dispositivos
              ofrecen funciones de seguridad para protegerlos contra el acceso
              no autorizado y la pérdida de datos. Puede controlar estas
              características y configurarlas según sus necesidades.
            </p>
            <p>
              Es importante que usted se proteja contra el acceso no autorizado
              a su contraseña y a sus equipos, dispositivos y aplicaciones.
              Recomendamos usar una contraseña única para su cuenta de BILL
              SUPPLY que no sea utilizada para otras cuentas en línea. Asegúrese
              de cerrar la sesión cuando termine de usar un equipo compartido.
            </p>
            <p>¿Qué pasa con la publicidad?</p>
            <p>
              Anunciantes de terceros y enlaces a otros sitios web: BILL SUPPLY
              puede incluir publicidad de terceros y enlaces a otros sitios web
              y aplicaciones. Los socios publicitarios de terceros pueden
              recopilar información sobre usted cuando interactúa con su
              contenido, publicidad y servicios. Para obtener más información
              sobre la publicidad de terceros en BILL SUPPLY, incluidos los
              anuncios basados en intereses. A veces, los anuncios basados en
              intereses se denominan anuncios personalizados o segmentados.
              Mostramos anuncios basados en intereses para mostrar
              características, productos y servicios que puedan ser de su
              interés. Al proporcionar anuncios basados en intereses, seguimos
              los Principios de Autorregulación para la Publicidad Conductual En
              Línea (“Self-Regulatory Principles for Online Behavioral
              Advertising”) desarrollados por la Digital Advertising Alliance
              (una coalición de organizaciones de marketing, publicidad en línea
              y defensa del consumidor).
            </p>
            <p>
              ¿Qué tipo de información utilizamos para mostrar anuncios basados
              en intereses?
            </p>
            <p>
              Para publicar anuncios basados en intereses, utilizamos
              información como sus interacciones con los sitios web, el
              contenido o los servicios de Bill Supply. No utilizamos
              información que por sí sola lo identifique, como nombre o
              dirección de correo electrónico, para publicar anuncios basados en
              intereses.
            </p>
            <p>
              Como es común en el sector de la publicidad, utilizamos cookies,
              píxeles y otras tecnologías (colectivamente, "cookies"), que nos
              permiten comprender la eficacia de los anuncios basados en
              intereses que le mostramos midiendo qué anuncios se hacen clic o
              se ven, y para proporcionarle más útiles y anuncios relevantes.
              Por ejemplo, si sabemos qué anuncios se muestran en su navegador,
              podemos tener cuidado de no mostrar los mismos anuncios
              repetidamente.
            </p>
            <p>Uso de Servicios de Publicidad de Terceros:</p>
            <p>
              Proporcionamos a las empresas publicitarias información que les
              permite ofrecerles anuncios de BILL SUPPLY más útiles y relevantes
              y medir su eficacia. Nunca compartimos su nombre u otra
              información que lo identifique directamente cuando hacemos esto.
            </p>
            <p>
              En su lugar, utilizamos un identificador publicitario como una
              cookie, un identificador de dispositivo, o un código derivado de
              la aplicación de criptografía irreversible a otra información como
              una dirección de correo electrónico.
            </p>
            <p>
              Por ejemplo, si ya ha descargado una de nuestras aplicaciones,
              compartiremos su identificador de publicidad y los datos sobre ese
              evento para que no se le publique un anuncio para volver a
              descargar la aplicación. Algunas empresas publicitarias también
              utilizan esta información para mostrarle anuncios relevantes de
              otros anunciantes.
            </p>
            <p>¿A qué información puedo acceder?</p>
            <p>
              Puede acceder a su información, incluyendo su nombre, dirección,
              opciones de pago, información de perfil, membresía, configuración
              e historial de compras en la sección "Mi cuenta" del sitio web.
            </p>
            <p>¿Qué opciones tengo?</p>
            <p>
              Si tiene alguna pregunta sobre cómo recopilamos y utilizamos su
              información personal, póngase en contacto con nuestro servicio al
              cliente. Muchos de nuestros Servicios de BILL SUPPLY también
              incluyen opciones de configuración que le proporcionan opciones
              sobre cómo se está utilizando su información.
            </p>
            <p>
              Como se ha descrito anteriormente, puede optar por no proporcionar
              cierta información, pero es posible que no pueda aprovechar muchos
              de los servicios de BILL SUPPLY.
            </p>
            <p>
              Puede agregar o actualizar cierta información en páginas como las
              referenciadas en ¿A qué información puedo acceder?. Normalmente,
              cada vez que usted actualiza sus datos, guardamos una copia de la
              versión previa para nuestros archivos.
            </p>
            <p>
              Si no desea recibir correos electrónicos u otras comunicaciones de
              nuestra parte, ajuste sus Preferencias de comunicación del cliente
              www.billsupply.com. Si no quiere recibir notificaciones dentro
              denuestra aplicación, ajuste la configuración de notificaciones en
              la aplicación o dispositivo.
            </p>
            <p>
              Si no desea ver anuncios basados en intereses, ajuste
              sus preferencias de publicidad.
            </p>
            <p>
              La función "Ayuda" en la mayoría de los navegadores y dispositivos
              le indicará cómo evitar que su navegador o dispositivo acepte
              nuevas cookies u otros identificadores, cómo hacer que el
              navegador le notifique cuando reciba una nueva cookie o cómo
              bloquear las cookies por completo.
            </p>
            <p>
              Dado que las cookies y los identificadores le permiten aprovechar
              algunas funciones esenciales de BILL SUPPLY, le recomendamos que
              las deje activadas. Por ejemplo, si rechaza o bloquea nuestras
              cookies, no podrá añadir productos a su Carrito, ni proceder al
              pago, ni usar ninguno de los productos o servicios de BILL
              SUPPLY.com que requieren que inicie su sesión.
            </p>
            <p>
              Si desea navegar por nuestros sitios web sin vincular el historial
              de navegación a su cuenta, puede hacerlo cerrando la sesión de su
              cuenta aquí y bloqueo de cookies en su navegador.
            </p>
            <p>
              Puede administrar las recomendaciones que recibe de nuestro market
              place y eliminar las recomendaciones que no desea ver aquí
              seleccionando la opción "Ver todo" y administrar la selección en
              la opción "Eliminar elementos" que aparece en la parte superior de
              la página, y editar su historial de búsqueda.
            </p>
            <p>
              También podrá optar por no utilizar otro tipos de datos
              actualizando su configuración en el sitio web de BILL SUPPLY
              correspondiente (por ejemplo, en "Gestionar contenido y
              dispositivos"), dispositivo o aplicación.
            </p>
            <p>
              La mayoría de los dispositivos que no son de BILL SUPPLY también
              ofrecen a los usuarios la posibilidad de cambiar los permisos de
              los dispositivos (por ejemplo, servicios de ubicación para
              deshabilitar/acceder, contactos). Lo más probable es que dicha
              posibilidad se encuentre en el menú de configuración del
              dispositivo. Si tiene alguna pregunta sobre cómo cambiar los
              permisos de su dispositivo en dispositivos fabricados por
              terceros, le recomendamos que se ponga en contacto con su
              proveedor de servicios móviles o con el fabricante del
              dispositivo. Si usted es vendedor, puede añadir o actualizar
              cierta información en VENDEDOR CENTRAR Actualizar la información
              de su cuenta accediendo a tu información de la cuenta del vendedor
              y ajuste su correo electrónico u otras comunicaciones que reciba
              de nosotros en preferencias de notificaciones.
            </p>
            <p>
              Si es autor, puede agregar o actualizar la información que ha
              proporcionado en portal autor y AUTOR CENTRAL accediendo a sus
              cuentas en el Portal de Autor y Author Central, respectivamente.
            </p>
            <p>
              Además, en la medida en que lo exija la legislación aplicable,
              puede tener derecho a solicitar acceso a su información personal o
              eliminarla. Si desea hacer alguna de estas cosas, póngase en
              contacto con SERVICIO AL CLIENTE DE BILL SUPPLY Dependiendo de sus
              opciones de datos, algunos servicios pueden estar limitados o no
              estar disponibles.
            </p>
            <p>¿Se permite que menores de edad utilicen BILL SUPPLY?</p>
            <p>
              BILL SUPPLY.com no comercializa productos y servicios para ser
              adquiridos por menores de edad. Comercializamos productos y
              servicios para menores de edad para ser adquiridos por personas
              mayores de edad. Si usted es menor de 18 años, puede utilizar los
              Servicios de BILL SUPPLY solo con la supervisión de un padre o
              tutor. No recabamos conscientemente información personal de niños
              menores de 13 años de edad sin el consentimiento del padre o tutor
              del menor.
            </p>
            <p>Condiciones de Uso, Avisos y Revisiones:</p>
            <p>
              Si decide utilizar BILL SUPPLY, su uso y cualquier disputa sobre
              privacidad están sujetos a este Aviso y nuestras condiciones de
              uso, incluyendo limitaciones de daños, resolución de disputas y
              aplicación de la ley. Si tiene cualquier inquietud en relación con
              la privacidad en BILL SUPPLY.com, le pedimos que nos contacte con
              una descripción detallada y nosotros trataremos de resolverla.
              Nuestro negocio cambia constantemente y nuestro Aviso de
              Privacidad también cambiará. Debe consultar nuestros sitios web
              con frecuencia para ver los cambios recientes. A menos que se
              indique lo contrario, nuestro Aviso de Privacidad actual será
              aplicable a toda la información que tenemos referente a usted y a
              su cuenta. No obstante, somos fieles a nuestra palabra y en ningún
              caso modificaremos sustancialmente nuestras políticas ni prácticas
              para hacerlas menos eficaces en la protección de los datos
              personales de nuestros clientes recabados en el pasado sin el
              consentimiento previo de los clientes afectados.
            </p>
            <p>
              Ejemplos de información recopilada: Información que usted nos
              proporciona cuando utiliza BILL SUPPLY.
            </p>
            <p>
              Usted nos proporciona información cuando realiza alguna de las
              siguientes acciones:
            </p>
            <p>
              buscar o comprar productos o servicios en nuestras tiendas; añadir
              o eliminar un artículo de su carrito, o realizar un pedido a
              través de BILL SUPPLY; descargar, transmitir, ver o utilizar
              contenido en un dispositivo o a través de un servicio o aplicación
              en un dispositivo; proporcionar información en su cuenta (y es
              posible que tenga más de una si ha utilizado más de una dirección
              de correo electrónico o un número móvil al comprar con nosotros)
              o su perfil; cargar sus contactos; cambiar la configuración de,
              proporcionar permisos de acceso a datos o interactuar con un
              dispositivo o servicio de BILL SUPPLY; proporcionar información en
              su cuenta de vendedor, o cualquier otra cuenta que ponemos a su
              disposición que le permita desarrollar u ofrecer software, bienes
              o servicios a los clientes de BILL SUPPLY; ofrecer sus productos o
              servicios a través de BILL SUPPLY; comunicarse con nosotros por
              teléfono, correo electrónico o de otra manera; completar un
              cuestionario, un ticket de apoyo o un formulario de inscripción a
              concurso; subir o transmitir imágenes, vídeos u otros archivos u
              otros servicios de BILL SUPPLY; recompilar listas de reproducción,
              listas de visualización, lista de deseos u otros registros de
              regalos; participar en foros de discusión u otras funciones de la
              comunidad; proporcionar y calificar opiniones especificar un
              recordatorio de ocasión especial; emplear Alerta de disponibilidad
              de productos, como Notificaciones disponibles para pedidos.
            </p>
            <p>
              Como resultado de estas acciones, podría proporcionarnos
              información como: información identificativa como su nombre,
              dirección y números de teléfono; información de pago; su edad; su
              información de ubicación; su dirección IP; personas, direcciones y
              números de teléfono enumerados en sus direcciones; direcciones de
              correo electrónico de sus amigos y otras personas; contenido de
              reseñas y correos electrónicos enviados a nosotros; descripción
              personal y fotografía en Su perfil; grabaciones de voz; imágenes y
              vídeos recopilados o almacenados en relación con algún servicio de
              BILL SUPPLY; información y documentos relativos a la identidad,
              incluidos la seguridad social y los números de licencia de
              conducir; información empresarial y financiera; información del
              historial crediticio, y archivos de registro de dispositivos y
              configuraciones, incluidas las credenciales de Wi-Fi. Información
              Automática Algunos ejemplos de la información que recopilamos y
              analizamos son: la dirección de protocolo de Internet (IP)
              utilizada para conectar su computadora a Internet; inicio de
              sesión, dirección de correo electrónico y contraseña; la ubicación
              de su dispositivo o computadora; información de interacción de
              contenido, como descargas de contenido, transmisiones y detalles
              de reproducción, incluida la duración, el número de transmisiones
              y descargas simultáneas así como detalles de red para la calidad
              de transmisión y descarga, incluida información sobre su proveedor
              de Servicio de Internet; métricas de dispositivos, como cuando un
              dispositivo está en uso, uso de aplicaciones, datos de
              conectividad y cualquier error o fallo de evento; métricas de BILL
              SUPPLY (por ejemplo, la aparición de errores técnicos, las
              interacciones con las funciones y el contenido del servicio, las
              preferencias de configuración y la información de copia de
              seguridad, la ubicación del dispositivo en el que se ejecuta una
              aplicación, información sobre imágenes y archivos subidos, como el
              nombre del archivo, las fechas, las horas y la ubicación de sus
              imágenes); configuración de versión y zona horaria; historial de
              compra y uso de contenido, que a veces agregamos con información
              similar de otros clientes para crear características como Lo más
              vendidos; el flujo de clics completo del Localizador Uniforme de
              Recursos (URL) hacia, a través y desde nuestros sitios web,
              incluyendo fecha y hora; productos y contenido que ha visto o
              buscado; tiempos de respuesta de la página, errores de descarga,
              duración de las visitas a determinadas páginas e información de
              interacción de la página (tales como desplazamiento, clics y ratón
              por encima); números de teléfono utilizados para llamar a nuestro
              número de servicio al cliente; e imágenes o vídeos cuando compras
              en nuestro market place. También podemos usar identificadores de
              dispositivos, cookies y otras tecnologías dispositivos,
              aplicaciones y nuestras páginas web para recopilar información de
              navegación, uso u otra información técnica.
            </p>
            <p>Información de otras fuentes</p>
            <p>
              Ejemplos de información que recibimos de otras fuentes incluyen:
              información actualizada de entrega y dirección de nuestros
              transportistas u otros terceros, que usamos para corregir nuestros
              registros y entregar su próxima compra o comunicación más
              fácilmente; información de cuenta, información de compra o
              redención, información de vista de página de algunos comerciantes
              con los que operamos empresas de marca compartida o para los que
              proporcionamos servicios técnicos, de cumplimiento, publicidad u
              otros servicios; información sobre sus interacciones con los
              productos y servicios ofrecidos por nuestras filiales; resultados
              de búsqueda y enlaces, incluidos listados de pago (como enlaces
              patrocinados); información sobre dispositivos y servicios
              conectados a Internet; información del historial crediticio de las
              agencias de crédito, que utilizamos para ayudar a prevenir y
              detectar fraudes y para ofrecer ciertos servicios crediticios o
              financieros a algunos clientes.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={() => setModalBasic(false)}>
              Accept
            </Button>
          </ModalFooter>
        </Modal>
      </Row>
    </>
  );
};

export default ModalUi;
