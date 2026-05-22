import React from 'react';

export default function Terms() {
  return (
    <div className="min-h-screen bg-bg-base py-24 px-8 max-w-4xl mx-auto">
      <h1 className="font-serif text-4xl mb-8">Termos de Uso</h1>
      <div className="prose prose-stone max-w-none text-mute-text space-y-6">
        <p>Estes Termos de Uso regem a utilização do programa Queima Turbo Max 2.0 e dos serviços oferecidos por Fabiola Feliciano.</p>
        
        <h2 className="text-2xl font-serif text-black-text">1. Aceitação dos Termos</h2>
        <p>Ao acessar ou utilizar nossos serviços, você concorda em cumprir estes termos. Se você não concordar com qualquer parte dos termos, não poderá acessar o serviço.</p>

        <h2 className="text-2xl font-serif text-black-text">2. Natureza do Serviço</h2>
        <p>O Queima Turbo Max 2.0 é um programa de condicionamento físico online. Os resultados podem variar de pessoa para pessoa e dependem da dedicação, genética e estilo de vida de cada usuário.</p>

        <h2 className="text-2xl font-serif text-black-text">3. Requisitos de Saúde</h2>
        <p>Antes de iniciar qualquer programa de exercícios, recomendamos fortemente a consulta com um médico. Ao utilizar este programa, você assume total responsabilidade por sua saúde e segurança física.</p>

        <h2 className="text-2xl font-serif text-black-text">4. Propriedade Intelectual</h2>
        <p>Todo o conteúdo, vídeos, textos e materiais do programa são protegidos por direitos autorais e pertencem exclusivamente a Fabiola Feliciano. É proibida a cópia, distribuição ou revenda do material sem autorização prévia.</p>

        <h2 className="text-2xl font-serif text-black-text">5. Pagamentos e Reembolsos</h2>
        <p>Os pagamentos são processados via Kiwify. O usuário tem direito ao prazo legal estipulado nas condições de compra para solicitar reembolso, caso não esteja satisfeito.</p>
      </div>
      <div className="mt-12">
        <a href="/" className="text-gold font-bold hover:underline">← Voltar para a página inicial</a>
      </div>
    </div>
  );
}
