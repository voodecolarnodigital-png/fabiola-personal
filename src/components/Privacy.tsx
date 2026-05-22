import React from 'react';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-bg-base py-24 px-8 max-w-4xl mx-auto">
      <h1 className="font-serif text-4xl mb-8">Política de Privacidade</h1>
      <div className="prose prose-stone max-w-none text-mute-text space-y-6">
        <p>Sua privacidade é muito importante para nós. Esta política explica como coletamos e utilizamos suas informações no Queima Turbo Max 2.0.</p>
        
        <h2 className="text-2xl font-serif text-black-text">1. Coleta de Informações</h2>
        <p>Coletamos informações básicas como nome e e-mail no momento da inscrição para que possamos fornecer acesso ao programa e enviar comunicações importantes.</p>

        <h2 className="text-2xl font-serif text-black-text">2. Uso de Dados</h2>
        <p>Seus dados são utilizados exclusivamente para personalizar sua experiência, processar transações e enviar atualizações sobre o programa.</p>

        <h2 className="text-2xl font-serif text-black-text">3. Proteção de Dados</h2>
        <p>Implementamos uma variedade de medidas de segurança para manter a segurança de suas informações pessoais.</p>

        <h2 className="text-2xl font-serif text-black-text">4. Compartilhamento com Terceiros</h2>
        <p>Não vendemos, trocamos ou transferimos suas informações para terceiros. Isso não inclui parceiros de confiança que nos auxiliam na operação de nosso site (como a plataforma Kiwify).</p>

        <h2 className="text-2xl font-serif text-black-text">5. Cookies</h2>
        <p>Podemos utilizar cookies para melhorar a navegação e entender a preferência do usuário em futuras visitas.</p>
      </div>
      <div className="mt-12">
        <a href="/" className="text-gold font-bold hover:underline">← Voltar para a página inicial</a>
      </div>
    </div>
  );
}
