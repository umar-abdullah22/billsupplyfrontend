// SimpleFaq.js

import React, { useState } from 'react';
import { Accordion } from 'react-bootstrap';
import BillsupplyAccordion from './BillsupplyAccordion';

const SimpleFaq = () => {
  const faqsData = [
    {
      title: '¿Qué hacemos en Bill Supply?',
      content:
        'Pagamos facturas recurrentes, Somos subagente bancario ,brindamos estafetas de pagos y afiliaciones a Farmacias,Supermercados, Bancas y Ferreteria. También HACEMOS alianzas estratégicas con empresasexternas, que brindan productos, Servicios, Educación y afines,las cuales nos dan la oportunidad de tener entre un 10% y un25% de margen de ganancias de cada uno de sus productos yservicios brindado en nuestra plataforma y, esas ganancias soncompartidas a través de 28 fuentes de ingresos, entre cada unode nuestros IBO, dependiendo la cartera de cliente y metas quevalla alcanzando de manera Semanal, Mensual Y Anual.',
    },
    {
      title: '¿Por qué creamos esta plataforma?',
      content:
        'Porque ha sido la manera más viable y eficiente de la empresa expandir sus servicios a nivel nacional e internacional, sin tener la necesidad de contratar empleados, pagar locales, energia eléctrica, servicios de telecomunicación, entre otros gastos operacionales. También porque al mismo tiempo brindamos la oportunidad de mitigar la falta de empleo y , darle las herramientas, habilidades y destrezas a cada persona de poder desarrollar un activo financiero de hasta 36 fuentes de ingresos fijas y variables.',
    },
    {
      title: '¿De dónde salen los ingresos que Bill Supply dice pagar?',
      content:
        'Las comisiones, Incentivos, Activo, Bonos y Premios, se producen de las ganancias de los productos y servicios que brinda BILL SUPPLY SRL, a traves de su plataforma. La cuál es compartida con cada IBO, dependiendo del nivel empresarial y, metas que vallan alcanzando en su desempeño Semanal, Quincenal, Mensual y Anual.',
    },
    {
      title: '¿Cómo puedo unirme y comenzar con Bill Supply ?',
      content:
        'SOLO tienes que descargar o acceder en linea a nuestraplataforma WWW.BILLSUPPLY.COM y seguir los siguientespasos: 1. Registrate, 2. Seleciona uno o más servicios para comenzar, 3. Invitar a otros a participar.',
    },
  ];
  const [active, setActive] = useState(`event-0`);
  return (
    <Accordion defaultActiveKey={active} className="accordion">
      {faqsData.map((faq, i) => (
        <BillsupplyAccordion
          key={i}
          active={active}
          onClick={() => setActive(`event-${i}`)}
          title={faq.title}
          eventName={`event-${i}`}
          content={faq.content}
        />
      ))}
    </Accordion>
  );
};

export default SimpleFaq;
