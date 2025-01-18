import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export default function PrivacyPolicy() {
  const data = {
    companyName: "Gaia Future Lab",
    email: "contato@gaiafuture.com.br",
    date: "16/01/2025",
  };

  return (
    <main className="w-full min-h-[calc(100vh-4rem)] pt-[6.875rem] mx-auto py-10 px-4 max-w-2xl">
      <article className="py-8">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2">Política de Privacidade</h1>
          <p className="text-muted-foreground">
            Última atualização: {data.date}
          </p>
        </header>

        <div className="prose dark:prose-invert max-w-none">
          <p className="lead">
            Na {data.companyName}, acreditamos na transparência sobre como
            coletamos, usamos e compartilhamos suas informações. Esta política
            de privacidade foi criada para ajudá-lo a entender exatamente isso.
          </p>

          <Separator className="my-8" />

          <section>
            <h2>1. Quais Informações Coletamos?</h2>
            <p>
              Coletamos informações que você nos fornece diretamente, como
              quando você cria uma conta ou utiliza nossos serviços. Isso pode
              incluir:
            </p>
            <ul>
              <li>Seu nome e informações de contato</li>
              <li>Credenciais da conta</li>
              <li>Informações de pagamento</li>
              <li>Qualquer outra informação que você escolha fornecer</li>
            </ul>
            <p>
              Também coletamos automaticamente certas informações quando você
              usa nosso site, incluindo seu endereço IP, tipo de navegador e
              dados de uso.
            </p>
          </section>

          <Separator className="my-8" />

          <section>
            <h2>2. Como Usamos Suas Informações?</h2>
            <p>Utilizamos suas informações para:</p>
            <ul>
              <li>Fornecer, manter e melhorar nossos serviços</li>
              <li>Processar transações e enviar informações relacionadas</li>
              <li>
                Enviar notificações técnicas, atualizações e mensagens de
                suporte
              </li>
              <li>
                Responder a comentários e solicitações de suporte ao cliente
              </li>
              <li>Comunicar-se sobre produtos, serviços e eventos</li>
            </ul>
            <p>
              Estamos comprometidos em usar suas informações de maneira
              responsável e apenas para os fins que você concordou.
            </p>
          </section>

          <Separator className="my-8" />

          <section>
            <h2>3. Como Compartilhamos Suas Informações?</h2>
            <p>Podemos compartilhar suas informações com:</p>
            <ul>
              <li>Prestadores de serviços que atuam em nosso nome</li>
              <li>Consultores profissionais, como advogados e contadores</li>
              <li>
                Autoridades legais ou governamentais, quando exigido por lei
              </li>
            </ul>
            <p>Não vendemos suas informações pessoais a terceiros.</p>
          </section>

          <Separator className="my-8" />

          <section>
            <h2>4. Como Mantemos Suas Informações Seguras?</h2>
            <p>
              Implementamos medidas técnicas e organizacionais padrão do setor
              para proteger a segurança de suas informações pessoais. Isso
              inclui criptografia de dados em trânsito e em repouso, auditorias
              regulares de segurança e controles de acesso rigorosos.
            </p>
            <p>
              No entanto, nenhum método de transmissão pela Internet ou
              armazenamento eletrônico é 100% seguro, por isso não podemos
              garantir segurança absoluta.
            </p>
          </section>

          <Separator className="my-8" />

          <section>
            <h2>5. Quais São Seus Direitos?</h2>
            <p>
              Dependendo de sua localização, você pode ter certos direitos em
              relação às suas informações pessoais, como:
            </p>
            <ul>
              <li>O direito de acessar seus dados</li>
              <li>O direito de corrigir dados incorretos</li>
              <li>O direito de excluir seus dados</li>
              <li>O direito de restringir o processamento de seus dados</li>
              <li>O direito à portabilidade dos dados</li>
            </ul>
            <p>
              Para exercer qualquer um desses direitos, entre em contato conosco
              usando as informações fornecidas no final desta política.
            </p>
          </section>

          <Separator className="my-8" />

          <section>
            <h2>6. Alterações Nesta Política de Privacidade</h2>
            <p>
              Podemos atualizar esta política de privacidade de tempos em
              tempos. Notificaremos você sobre quaisquer alterações publicando a
              nova política nesta página e atualizando a data de &quot;Última
              atualização&quot; no topo desta política.
            </p>
            <p>
              Recomendamos que você revise esta política periodicamente para se
              manter informado sobre quaisquer alterações.
            </p>
          </section>

          <Separator className="my-8" />

          <section>
            <h2>7. Como Entrar em Contato Conosco?</h2>
            <p>
              Se você tiver dúvidas sobre esta política de privacidade ou nossas
              práticas de privacidade, entre em contato conosco:
            </p>
            <address>
              <strong>{data.companyName}</strong>
              <br />
              Email: {data.email}
              <br />
            </address>
            <p>
              Estamos aqui para ajudar e responderemos às suas dúvidas o mais
              rápido possível.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}

export const Separator = ({ className }: ComponentProps<"hr">) => {
  return (
    <hr
      className={twMerge(
        "border-t border-gray-300 dark:border-gray-700",
        className
      )}
    />
  );
};
