'use client';

// import TextAnimationDegrade from '@/app/_components/title-animation';
import Footer from '@/components/footer';
import { TextDegrade } from '@/components/text-degrade';

const PrivacyPolicy = () => {
  return (
    <>
      <div className="w-11/12 max-w-7xl mx-auto flex lg:p-4 flex-col lg:flex-row justify-between items-center my-10 gap-4">
        <div className="w-full flex flex-col items-center gap-4 mt-20">
          <TextDegrade
            text="Políticas de Privacidade"
            className="  from-[#ffffff] from-20% via-[#FF7F00] via-50% to-[#508FF4] to-100%"
            position="left"
          ></TextDegrade>

          <div className="w-full max-w-3xl mx-auto flex flex-col gap-6 my-10 text-white text-base lg:text-xl font-sourceSans3 font-light">
            <p>1. INTRODUÇÃO</p>
            <p>
              Bem-vindo à [Nome da Empresa] (&quot;Empresa&quot;,
              &quot;nós&quot;, &quot;nosso&quot; ou &quot;nossa&quot;). Esta
              Política de Privacidade descreve como coletamos, usamos,
              armazenamos e protegemos suas informações quando você utiliza
              nossos produtos e serviços, incluindo Checkout, Temas, Landing
              Pages e Lojas Virtuais (coletivamente, &quot;Serviços&quot;).
            </p>
            <p>
              Ao acessar ou utilizar nossos Serviços, você concorda com os
              termos desta Política de Privacidade. Se não concordar, não
              utilize nossos Serviços.
            </p>
            <p>2. INFORMAÇÕES COLETADASO</p>

            <p>
              Coletamos informações pessoais e não pessoais para fornecer e
              aprimorar nossos Serviços. Essas informações incluem:
            </p>

            <p>2.1. Informações fornecidas por você:</p>

            <ul>
              <li>Nome, e-mail, telefone e endereço.</li>
              <li>Informações de pagamento para processar transações.</li>
              <li>
                Dados inseridos ao personalizar Temas, Landing Pages e Lojas
                Virtuais.
              </li>
            </ul>

            <p>2.2. Informações coletadas automaticamente:</p>

            <ul>
              <li>
                Endereço IP, tipo de dispositivo, navegador e sistema
                operacional.
              </li>

              <li>
                Dados de navegação, incluindo páginas visitadas e tempo de
                permanência.
              </li>

              <li>
                Cookies e tecnologias semelhantes para melhorar a experiência do
                usuário.
              </li>
            </ul>

            <p>2.3. Informações de terceiros:</p>

            <p>
              Podemos coletar dados de terceiros, como gateways de pagamento,
              provedores de identidade e redes sociais, conforme necessário para
              a prestação dos Serviços.
            </p>

            <p>3. USO DAS INFORMAÇÕES</p>

            <p>Utilizamos suas informações para:</p>

            <ul>
              <li>Fornecer, operar e melhorar nossos Serviços.</li>

              <li>Processar pagamentos e transações.</li>

              <li>Personalizar a experiência do usuário.</li>

              <li>Fornecer suporte ao cliente.</li>

              <li>
                Enviar comunicações sobre atualizações, ofertas e novos
                recursos.
              </li>

              <li>Cumprir obrigações legais e regulatórias.</li>
            </ul>

            <p>4. COMPARTILHAMENTO DE DADOS</p>

            <p>Podemos compartilhar suas informações com:</p>

            <ul>
              <li>
                Prestadores de serviço terceirizados que auxiliam na operação
                dos Serviços.
              </li>
              <li>Autoridades legais quando exigido por lei.</li>
              <li>
                Parceiros comerciais para aprimorar funcionalidades e ofertas.
              </li>
            </ul>

            <p>Não vendemos ou alugamos suas informações a terceiros.</p>

            <p>5. SEGURANÇA DOS DADOS</p>

            <p>
              Adotamos medidas de segurança para proteger suas informações
              contra acesso não autorizado, uso indevido ou divulgação. No
              entanto, nenhum sistema é 100% seguro e não podemos garantir a
              segurança absoluta dos dados.
            </p>

            <p>6. COOKIES E TECNOLOGIAS SEMELHANTES</p>

            <p>Utilizamos cookies e tecnologias similares para:</p>

            <ul>
              <li>Melhorar a experiência do usuário.</li>
              <li>Analisar o uso dos Serviços.</li>
              <li>Personalizar conteúdos e anúncios.</li>
            </ul>

            <p>
              Você pode gerenciar suas preferências de cookies no navegador.
            </p>

            <p>7. DIREITOS DO USUÁRIO</p>

            <p>Você pode:</p>

            <ul>
              <li>Acessar, corrigir ou excluir suas informações.</li>
              <li>Solicitar a portabilidade de dados.</li>
              <li>Revogar o consentimento para o processamento de dados.</li>
              <li>Solicitar mais informações sobre o uso dos seus dados.</li>
            </ul>

            <p>
              Para exercer seus direitos, entre em contato conosco pelo e-mail
              [seu e-mail de contato].
            </p>

            <p>8. RETENÇÃO DE DADOS</p>

            <p>
              Mantemos suas informações pelo tempo necessário para fornecer
              nossos Serviços e cumprir obrigações legais. Quando não forem mais
              necessárias, seus dados serão excluídos ou anonimizados.
            </p>

            <p>9. SERVIÇOS DE TERCEIROS</p>

            <p>
              Nossos Serviços podem conter links para sites e serviços de
              terceiros. Não somos responsáveis pelas práticas de privacidade
              desses terceiros, e recomendamos que você revise suas políticas.
            </p>

            <p>10. ALTERAÇÕES NESTA POLÍTICA</p>

            <p>
              Podemos atualizar esta Política de Privacidade periodicamente.
              Notificaremos sobre mudanças significativas através do nosso site
              ou outros canais de comunicação. O uso contínuo dos Serviços após
              alterações implica a aceitação da nova versão.
            </p>

            <p>11. CONTATO</p>

            <p>
              Se tiver dúvidas sobre esta Política de Privacidade, entre em
              contato conosco:
            </p>

            <ul>
              <li>E-mail: [seu e-mail de contato]</li>
              <li>Endereço: [seu endereço comercial]</li>
            </ul>

            <p>Última atualização: [Data]</p>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};

export default PrivacyPolicy;
