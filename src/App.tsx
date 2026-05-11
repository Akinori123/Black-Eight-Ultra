import { motion } from 'motion/react';
import { useState, ReactNode, useEffect, useRef } from 'react';
import {
  Flame,
  Minus,
  BatteryCharging,
  AlertCircle,
  CheckCircle2,
  Zap,
  ChevronDown,
  ChevronUp,
  ArrowLeft,
  Lock,
  ShieldCheck,
  Play,
  Truck,
} from 'lucide-react';

// ==========================================
// LINKS DE AFILIADO - EDITE AQUI
// ==========================================
const AFFILIATE_LINKS = {
  KIT_1_POTE: 'https://app.monetizze.com.br/r/BYZ1903134',
  KIT_2_POTES: 'https://app.monetizze.com.br/r/BMH1903135',
  KIT_3_POTES: 'https://app.monetizze.com.br/r/BSK1903136',
};

// ==========================================
// COMPONENTES REUTILIZÁVEIS
// ==========================================

function VideoCard({ src, title }: { src: string; title: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div className="relative w-full aspect-[9/16] rounded-[30px] overflow-hidden shadow-[0_0_30px_rgba(234,179,8,0.1)] border border-zinc-800 bg-zinc-950 group">
      {!isPlaying && (
        <div 
          className="absolute inset-0 z-30 cursor-pointer flex flex-col items-center justify-center bg-gradient-to-br from-zinc-900 via-black to-zinc-950 transition-all"
          onClick={handlePlay}
        >
          {/* Fundo abstrato inovador */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.15)_0,transparent_70%)] group-hover:scale-125 transition-transform duration-700"></div>
          <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPg==')]"></div>
          
          <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(234,179,8,0.4)] transform group-hover:scale-110 group-hover:shadow-[0_0_60px_rgba(234,179,8,0.6)] transition-all duration-300 relative z-10 mb-8">
             <Play fill="black" className="w-8 h-8 text-black ml-1" />
          </div>
          
          <div className="relative z-10 flex flex-col items-center px-6 text-center">
            <span className="text-yellow-500 font-black text-2xl mb-3 tracking-tight uppercase drop-shadow-md">{title}</span>
            <span className="text-zinc-300 font-bold tracking-widest text-xs uppercase bg-black/60 px-5 py-2 rounded-full border border-yellow-500/20 backdrop-blur-md shadow-lg">
              Clique para assistir
            </span>
          </div>
        </div>
      )}
      <video 
        ref={videoRef}
        src={src} 
        className="w-full h-full object-cover relative z-20 bg-black"
        controls={isPlaying}
        playsInline
        preload="metadata"
        onEnded={() => setIsPlaying(false)}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      />
    </div>
  );
}

function FaqItem({ question, children }: { question: string; children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-zinc-800 rounded-2xl overflow-hidden bg-zinc-900/50 mb-4 transition-all duration-300">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
      >
        <span className="font-bold text-lg md:text-xl pr-4 text-zinc-100">{question}</span>
        {isOpen ? <ChevronUp className="flex-shrink-0 text-yellow-500 w-6 h-6" /> : <ChevronDown className="flex-shrink-0 text-zinc-500 w-6 h-6" />}
      </button>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="px-6 pb-6 text-zinc-400 leading-relaxed space-y-4"
        >
          {children}
        </motion.div>
      )}
    </div>
  );
}

function FadeIn({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function CTAButton({ href, children, className = '' }: { href: string; children: ReactNode; className?: string }) {
  return (
    <a
      href={href}
      target={href.startsWith('#') ? '_self' : '_blank'}
      rel={href.startsWith('#') ? '' : 'noopener noreferrer'}
      className={`inline-block bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-black uppercase py-4 px-8 rounded-full text-lg md:text-xl transition-all shadow-[0_0_25px_rgba(234,179,8,0.4)] hover:scale-105 hover:shadow-[0_0_35px_rgba(234,179,8,0.6)] ${className}`}
    >
      {children}
    </a>
  );
}

function LightningCTAButton({ href, children, className = '' }: { href: string; children: ReactNode; className?: string }) {
  return (
    <a
      href={href}
      target={href.startsWith('#') ? '_self' : '_blank'}
      rel={href.startsWith('#') ? '' : 'noopener noreferrer'}
      className={`group relative inline-flex p-[3px] rounded-full overflow-hidden transition-transform duration-300 hover:scale-105 shadow-[0_0_40px_rgba(234,179,8,0.4)] ${className}`}
    >
      {/* Elemento rotativo do raio border animado */}
      <div className="absolute top-1/2 left-1/2 w-[300%] aspect-square -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(from_0deg,transparent_75%,rgba(255,255,255,1)_85%,rgba(234,179,8,1)_100%)] animate-[spin_2.5s_linear_infinite]" />
      
      {/* Fundo interno sólido */}
      <div className="relative inline-flex items-center justify-center w-full h-full bg-gradient-to-r from-yellow-500 to-yellow-600 group-hover:from-yellow-400 group-hover:to-yellow-500 text-black font-black uppercase py-4 px-10 md:py-5 md:px-14 rounded-full text-lg md:text-2xl transition-colors">
        {children}
      </div>
    </a>
  );
}

function AccordionItem({ title, content }: { title: string; content: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-zinc-800 rounded-lg mb-3 bg-zinc-900/50 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-zinc-800/80 hover:bg-zinc-700/80 text-left transition-colors font-bold text-lg text-white"
      >
        {title}
        {isOpen ? <ChevronUp className="w-5 h-5 text-yellow-500" /> : <ChevronDown className="w-5 h-5 text-yellow-500" />}
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="p-4 text-zinc-300 leading-relaxed bg-zinc-900/30"
        >
          {content}
        </motion.div>
      )}
    </div>
  );
}

// ==========================================
// PÁGINA DE TERMOS
// ==========================================
function TermosDeGarantia({ onBack }: { onBack: () => void }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-zinc-300 font-sans py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto bg-zinc-950 border border-zinc-900 p-8 md:p-12 rounded-3xl">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-yellow-500 hover:text-yellow-400 font-bold mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          VOLTAR PARA A ÚLTIMA PÁGINA
        </button>

        <h1 className="text-3xl md:text-4xl font-black text-white mb-8 border-b border-zinc-800 pb-6 uppercase">
          Termos de Garantia de 30 Dias – Black Ultra
        </h1>

        <div className="space-y-8 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-yellow-500 mb-4">1. CONDIÇÕES PARA ATIVAÇÃO DA GARANTIA</h2>
            <p className="mb-4">Para que a garantia seja válida, o cliente deverá seguir corretamente o protocolo de acompanhamento durante o uso do produto, conforme descrito abaixo:</p>
            <ul className="space-y-2 list-none pl-4">
              <li><strong>1.1</strong> No início do tratamento, envie uma foto nítida da balança mostrando o peso atual (com data visível ou acompanhada de comprovante de data, como relógio, celular, etc.).</li>
              <li><strong>1.2</strong> Após 7 dias de uso, repita o processo, enviando nova foto com o peso atualizado.</li>
              <li><strong>1.3</strong> Após 15 dias de uso, envie novamente uma foto com o peso atual.</li>
              <li><strong>1.4</strong> Caso ao final de 30 dias o cliente não obtenha resultados satisfatórios, e tenha enviado corretamente as fotos nos períodos indicados, poderá solicitar o reembolso integral do valor investido.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-yellow-500 mb-4">2. PRAZOS E LIMITAÇÕES</h2>
            <ul className="space-y-2 list-none pl-4">
              <li><strong>2.1</strong> O período máximo de solicitação da garantia é de 30 dias corridos a partir da data de entrega do produto.</li>
              <li><strong>2.2</strong> Solicitações fora desse prazo não serão aceitas.</li>
              <li><strong>2.3</strong> A garantia é válida apenas para a primeira compra do cliente. Recompras ou pedidos posteriores não serão reembolsados.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-yellow-500 mb-4">3. CONDIÇÕES DO PRODUTO</h2>
            <ul className="space-y-2 list-none pl-4">
              <li><strong>3.1</strong> Caso o pedido tenha sido feito com mais de um pote, apenas um pode ser utilizado.</li>
              <li><strong>3.2</strong> Os demais potes devem estar lacrados e inviolados para que o reembolso seja autorizado.</li>
              <li><strong>3.3</strong> Em casos de reações adversas ou problemas de saúde relacionados ao uso do produto, o cliente deverá entrar em contato imediatamente e terá direito à devolução conforme análise individual.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-yellow-500 mb-4">4. PROCEDIMENTO PARA REEMBOLSO</h2>
            <ul className="space-y-2 list-none pl-4">
              <li><strong>4.1</strong> Após a validação da garantia, será gerado um código de postagem dos Correios para devolução do produto sem custos ao cliente.</li>
              <li><strong>4.2</strong> O reembolso será processado em até 10 dias úteis após o recebimento do produto em nosso centro de distribuição, respeitando o mesmo meio de pagamento utilizado na compra.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-yellow-500 mb-4">5. OBSERVAÇÕES FINAIS</h2>
            <p className="mb-4"><strong>5.1</strong> A BLACK ULTRA Suplementos se reserva o direito de negar a garantia em casos de:</p>
            <ul className="list-disc pl-8 mb-4 text-zinc-400">
              <li>Falta de envio das fotos nos períodos estipulados;</li>
              <li>Uso incorreto do produto;</li>
              <li>Tentativas de fraude ou devolução parcial;</li>
              <li>Solicitação após o prazo de 30 dias.</li>
            </ul>
            <ul className="space-y-2 list-none pl-4">
              <li><strong>5.2</strong> Em casos de reações adversas ou problemas de saúde relacionados ao uso do produto, o cliente deverá entrar em contato imediatamente e terá direito à devolução conforme análise individual.</li>
              <li><strong>5.3</strong> Em caso de dúvidas sobre o procedimento ou documentação necessária para validar a garantia, entre em contato com o atendimento da BLACK ULTRA Suplementos.</li>
            </ul>
          </section>

          <div className="mt-12 pt-6 border-t border-zinc-800 text-sm text-zinc-500 italic">
            Documento: Termos de Garantia de 30 dias – Black Ultra Suplementos. Revisado em: 05/01/2026
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// PÁGINA PRINCIPAL
// ==========================================

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'termos'>('home');

  if (currentPage === 'termos') {
    return <TermosDeGarantia onBack={() => setCurrentPage('home')} />;
  }

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-yellow-500/30">
      
      {/* TOP ANNOUNCEMENT BAR */}
      <div className="bg-yellow-500 text-black py-2 px-4 relative z-50">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-2 text-sm md:text-base font-bold">
          <span className="flex items-center gap-2">
            <Truck className="w-5 h-5" /> 
            COMPROU E QUER SABER ONDE ESTÁ SEU PEDIDO?
          </span>
          <a 
            href="https://rastreamento.correios.com.br/app/index.php" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-black text-yellow-500 px-4 py-1 rounded-full text-xs hover:bg-zinc-900 transition-colors uppercase tracking-wider flex items-center gap-1"
          >
            Rastrear Agora
          </a>
        </div>
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative pt-16 pb-32 px-4 md:px-8 overflow-hidden bg-black">
        {/* Background gradient flares */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[600px] opacity-40 bg-gradient-to-b from-yellow-700/30 to-transparent blur-[120px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">
          <FadeIn>
            <img
              src="https://blackultrabrasil.com.br/wp-content/uploads/2026/05/lg.webp"
              alt="Semana das Mães Black Ultra"
              className="w-full max-w-[500px] mb-8 drop-shadow-2xl relative z-10"
              referrerPolicy="no-referrer"
            />
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight tracking-tight drop-shadow-lg">
              Na <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600">Semana das Mães</span> você desbloqueia <br className="hidden md:block"/>
              a queima de gordura profunda pagando pouco!
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-xl md:text-2xl text-zinc-300 mb-10 max-w-3xl leading-relaxed">
              Com <strong className="text-white">fórmula ultra concentrada</strong> para quem não tem tempo a perder e já tentou de tudo sem sucesso.
            </p>
          </FadeIn>

          <FadeIn delay={0.3} className="w-full max-w-[600px] flex justify-center mb-12 relative group">
            {/* Spotlight glow behind the image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-tr from-yellow-700/40 to-yellow-500/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none transition-all duration-1000 group-hover:from-yellow-600/50 group-hover:to-yellow-400/30"></div>
            
            <img
              src="https://blackultrabrasil.com.br/wp-content/uploads/2025/12/foto.webp"
              alt="Potes Black Ultra"
              className="w-full relative z-10 hover:scale-[1.05] transition-transform duration-1000"
              referrerPolicy="no-referrer"
              style={{
                WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black 40%, rgba(0,0,0,0.8) 55%, transparent 75%)',
                maskImage: 'radial-gradient(circle at 50% 50%, black 40%, rgba(0,0,0,0.8) 55%, transparent 75%)'
              }}
            />
          </FadeIn>

          <FadeIn delay={0.4} className="relative z-30">
            <LightningCTAButton href="#ofertas">QUERO COMPRAR AGORA</LightningCTAButton>
          </FadeIn>
        </div>
      </section>

      {/* 2. THE PROBLEM/SOLUTION SECTION */}
      <section className="py-20 px-4 md:px-8 bg-zinc-950 border-t border-b border-zinc-900 overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <FadeIn className="order-2 md:order-1 flex justify-center">
             <img 
               src="https://blackultrabrasil.com.br/wp-content/uploads/2026/01/fdg.webp" 
               alt="Corpo em chamas metabolismo" 
               className="w-full max-w-[500px]"
               referrerPolicy="no-referrer"
             />
          </FadeIn>
          <FadeIn className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-white tracking-tight">
              O fim da <span className="text-yellow-500">guerra</span> contra a balança!
            </h2>
            <div className="space-y-4 text-lg text-zinc-300 leading-relaxed">
              <p>
                <strong className="text-white">Black Eight Ultra não é apenas um suplemento!</strong>
              </p>
              <p>
                É um complexo emagrecedor de alta performance, desenvolvido especificamente para destravar organismos lentos e queimar a gordura visceral, aquela mais difícil de perder.
              </p>
              <p>
                Esqueça os métodos lentos. Nossa fórmula atua como um maçarico metabólico, forçando seu corpo a usar a gordura estocada como fonte primária de energia, 24 horas por dia.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 3. HOW IT WORKS GRID */}
      <section className="py-24 px-4 md:px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-black text-center mb-16">
              O que nossas cápsulas <span className="text-yellow-500">farão por você:</span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { img: "01.webp", title: "Regula o intestino", desc: "Por ser composto por diversas fibras inteligentes, seu intestino começará a trabalhar de forma correta." },
              { img: "03.webp", title: "Diminui o apetite", desc: "Os compostos diminuem o apetite e reduzem a absorção de açúcares e gorduras no organismo." },
              { img: "02.webp", title: "Acelera o metabolismo", desc: "O metabolismo acelerado faz com que a pessoa queime as calorias mais rapidamente." },
              { img: "04.webp", title: "Efeito bariátrica", desc: "Por acelerar o metabolismo e queimar a gordura localizada, reduz drasticamente a gordura abdominal." }
            ].map((item, i) => (
              <FadeIn key={i} delay={0.1 * i} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-center hover:border-yellow-500/50 transition-colors group">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-zinc-800 group-hover:border-yellow-500/50 transition-colors bg-black flex items-center justify-center p-2">
                  <img 
                    src={`https://blackultrabrasil.com.br/wp-content/uploads/2026/01/${item.img}`} 
                    alt={item.title} 
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-xl font-black uppercase text-yellow-500 mb-3">{item.title}</h3>
                <p className="text-zinc-400">{item.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BENEFITS CHECKLIST */}
      <section className="py-24 px-4 md:px-8 bg-zinc-950 border-t border-zinc-900 relative">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-black mb-10 leading-tight">
                Benefícios <span className="text-yellow-500">reais</span> e imediatos:
              </h2>
            </FadeIn>

            <ul className="space-y-6">
              {[
                { icon: Flame, text: <>Emagrecimento até <strong className="text-white">3x mais rápido</strong></> },
                { icon: Minus, text: <><strong className="text-white">Reduz medidas</strong> na cintura e quadril</> },
                { icon: BatteryCharging, text: <><strong className="text-white">Energia e foco mental</strong> para o dia todo</> },
                { icon: AlertCircle, text: <>Sem efeito sanfona: <strong className="text-white">reeduca seu organismo</strong></> },
                { icon: CheckCircle2, text: <>Melhora a circulação <strong className="text-white">acabando com celulite</strong></> },
                { icon: Zap, text: <>Efeito termogênico <strong className="text-white">avançado</strong></> },
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 0.1} className="flex items-start gap-4 p-4 bg-zinc-900/50 rounded-xl border border-zinc-900">
                  <div className="bg-yellow-500/20 p-2 rounded-lg">
                    <item.icon className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                  </div>
                  <span className="text-lg md:text-xl text-zinc-300 pt-1.5">{item.text}</span>
                </FadeIn>
              ))}
            </ul>
          </div>
          
          <FadeIn className="flex justify-center relative">
            <div className="absolute inset-0 bg-yellow-500/5 blur-[120px] rounded-full aspect-square"></div>
            <img 
              src="https://blackultrabrasil.com.br/wp-content/uploads/2026/01/fig.webp" 
              alt="Resultados" 
              className="w-full max-w-[500px] relative z-10 drop-shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </FadeIn>
        </div>
      </section>

      {/* 5. RECOMMENDED FOR */}
      <section className="py-24 px-4 md:px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-black text-center mb-16">
              O Black Ultra é <span className="text-yellow-500">recomendado</span> para:
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               { img: '/images/i2.webp', text: 'Mulheres tristes com o seu corpo atual que não sabem como emagrecer.' },
               { img: '/images/i3.webp', text: 'Pessoas que buscam qualidade de vida com um corpo mais natural e bonito.' },
               { img: '/images/i1.webp', text: 'Pessoas que buscam encontrar a melhor versão de si mesmas.' }
             ].map((item, i) => (
               <FadeIn key={i} delay={i * 0.15} className="flex flex-col items-center text-center group">
                  <div className="overflow-hidden rounded-2xl mb-6 relative">
                    <div className="absolute inset-0 bg-yellow-500/20 mix-blend-overlay group-hover:bg-transparent transition-all z-10"></div>
                    <img 
                      src={item.img} 
                      alt="Recomendado" 
                      className="w-full max-w-[350px] transform group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <p className="text-lg text-zinc-300 px-4">{item.text}</p>
               </FadeIn>
             ))}
          </div>
        </div>
      </section>

      {/* 6. FORMULA INGREDIENTS */}
      <section className="py-24 px-4 md:px-8 bg-black border-y border-zinc-900 relative">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
           <FadeIn className="order-2 md:order-1">
             <h2 className="text-3xl md:text-4xl font-black mb-10">
               Conheça a <span className="text-yellow-500">incrível fórmula:</span>
             </h2>

              <div className="w-full max-w-md hidden md:block mb-8">
                <img 
                  src="https://blackultrabrasil.com.br/wp-content/uploads/2026/01/formula.webp" 
                  alt="Fórmula" 
                  className="w-full rounded-[30px] object-cover shadow-2xl border border-zinc-900"
                  referrerPolicy="no-referrer"
                />
              </div>

           </FadeIn>
           <FadeIn className="order-1 md:order-2">
              <AccordionItem 
                title="Espirulina" 
                content="Ajuda no emagrecimento porque aumenta a saciedade devido à sua alta concentração de proteínas e nutrientes, fazendo com que o corpo funcione de uma maneira melhor e a pessoa não tenha vontade de comer de forma impulsiva."
              />
              <AccordionItem 
                title="Psyllium" 
                content="Psyllium é um auxiliador no emagrecimento, suas fibras aumentam a saciedade e a diminuem a fome, favorecendo a aceleração dos processos de emagrecimento."
              />
              <AccordionItem 
                title="Cromo Quelato" 
                content="Devido a sua fórmula que contém substâncias ligadas ao ácido nicotino e a glicina, o Cromo Quelato auxilia no emagrecimento, controlando o nível de insulina, assim, a pessoa emagrece sem ter a obrigatoriedade de se cansar com exercícios."
              />
              <AccordionItem 
                title="Frutooligossacarídeos (FOS)" 
                content="Possuindo valor calórico quase nulo, os frutooligossacarídeos são compostos capazes de reduzir tanto o peso quanto os níveis de colesterol."
              />
              <AccordionItem 
                title="Feno grego" 
                content="É uma planta medicinal antiga, cujas sementes são ricas em fibras, proteínas e minerais, usadas para auxiliar no controle do açúcar no sangue."
              />
              <AccordionItem 
                title="Quitosana" 
                content="Suas fibras formam um gel no estômago, que diminui a absorção de gordura, fazendo com que sejam eliminadas pelas fezes, o que contribui para a perda de peso. Suas fibras também ajudam a prolongar a saciedade, o que pode auxilia no emagrecimento."
              />
              <AccordionItem 
                title="Ágar-ágar" 
                content="Suas fibras auxiliam quem busca pelo objetivo de secar a gordura, pois elas diminuem a absorção de gordura pelo corpo."
              />
           </FadeIn>
        </div>
      </section>

      {/* 6.1 AVALIAÇÕES EM VÍDEO */}
      <section className="py-24 px-4 md:px-8 bg-zinc-950 border-t border-zinc-900 relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-black mb-4 text-center">
              Quem Usou, <span className="text-yellow-500">Aprovou</span>
            </h2>
            <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-16 text-lg md:text-xl">
              Veja o que nossas clientes estão dizendo sobre os resultados reais que tiveram com o <strong className="text-yellow-500 font-bold">Black Ultra</strong>.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
            {[
              { src: '/4.mp4', title: 'Avaliação 1' },
              { src: '/10.mp4', title: 'Avaliação 2' },
              { src: '/14.mp4', title: 'Avaliação 3' }
            ].map((video, i) => (
              <FadeIn key={i} delay={i * 0.15} className="flex flex-col items-center">
                <VideoCard src={video.src} title={video.title} />
              </FadeIn>
            ))}
          </div>
          
          <FadeIn delay={0.4} className="mt-16 text-center z-30 relative">
            <LightningCTAButton href="#ofertas">
              QUERO TER RESULTADOS ASSIM
            </LightningCTAButton>
          </FadeIn>
        </div>
      </section>

      {/* 6.5 COMO USAR */}
      <section className="py-24 px-4 md:px-8 bg-black relative border-b border-zinc-900">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-black mb-1 text-yellow-500 uppercase tracking-tight text-center">
              Como Usar
            </h2>
            <h3 className="text-xl md:text-3xl font-medium tracking-tight mb-16 text-white text-center uppercase">
              Seu <span className="font-black">Black Ultra</span> Corretamente
            </h3>
          </FadeIn>

          <div className="space-y-12 w-full max-w-3xl mb-16">
            <FadeIn delay={0.1}>
              <div className="flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-yellow-500 text-black font-black text-xl w-12 h-12 flex items-center justify-center rounded-full flex-shrink-0">
                    1
                  </div>
                  <div className="h-[2px] w-full max-w-[200px] bg-gradient-to-r from-yellow-500 to-transparent"></div>
                </div>
                <p className="text-xl text-zinc-300 leading-relaxed font-medium">
                  Use <strong className="text-yellow-500">1 cápsula por dia</strong>, de preferência antes do almoço em jejum, para potencializar os resultados.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-yellow-500 text-black font-black text-xl w-12 h-12 flex items-center justify-center rounded-full flex-shrink-0">
                    2
                  </div>
                  <div className="h-[2px] w-full max-w-[200px] bg-gradient-to-r from-yellow-500 to-transparent"></div>
                </div>
                <p className="text-xl text-zinc-300 leading-relaxed font-medium">
                  <strong className="text-yellow-500">Tome 2,5L de água</strong> todos os dias, dividindo essa quantidade ao longo do dia; a hidratação é fundamental durante o tratamento.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-yellow-500 text-black font-black text-xl w-12 h-12 flex items-center justify-center rounded-full flex-shrink-0">
                    3
                  </div>
                  <div className="h-[2px] w-full max-w-[200px] bg-gradient-to-r from-yellow-500 to-transparent"></div>
                </div>
                <p className="text-xl text-zinc-300 leading-relaxed font-medium">
                  Mantenha uma alimentação balanceada, comendo de 3 a 4 vezes por dia, e evite pular refeições ou deixar de comer.
                </p>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.4} className="w-full max-w-2xl">
            <a 
              href="https://wa.me/553733515181?text=Ol%C3%A1%2C%20tenho%20d%C3%BAvidas%20sobre%20o%20Black%20Ultra"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-900 hover:bg-zinc-800 transition-colors border border-zinc-800 rounded-3xl p-6 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 shadow-xl group"
            >
              <h4 className="text-yellow-500 font-black text-3xl md:text-4xl uppercase tracking-tight">Dúvidas?</h4>
              <div className="h-px w-16 md:w-px md:h-12 bg-zinc-700"></div>
              <p className="text-white text-lg md:text-xl font-medium text-center md:text-left leading-tight group-hover:text-yellow-400 transition-colors">
                ME CHAME POR AQUI<br />QUE VOU AJUDAR!
              </p>
            </a>
          </FadeIn>
        </div>
      </section>

      {/* 7. PRICING / OFFERS */}
      <section id="ofertas" className="py-24 px-4 md:px-8 bg-black relative">
        <div className="absolute inset-x-0 top-0 h-[500px] bg-yellow-500/5 blur-[150px] pointer-events-none"></div>
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight">
              Escolha agora seu <span className="text-yellow-500">kit!</span>
            </h2>
            <p className="text-xl mb-16">
              Escolhendo qualquer plano da promoção você ganha <strong className="text-green-500 bg-green-500/10 px-3 py-1 rounded-full uppercase">Frete Grátis</strong> por nossa conta!
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8 items-center">
            
            {/* KIT 1 POTE */}
            <FadeIn delay={0.2} className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl flex flex-col items-center shadow-xl hover:border-yellow-500/30 transition-colors">
               <h3 className="text-yellow-500 font-black text-2xl mb-1">10% DE DESCONTO</h3>
               <h4 className="text-white font-bold text-3xl mb-6">1 Pote</h4>
               <img 
                  src="https://blackultrabrasil.com.br/wp-content/uploads/2026/01/1.webp" 
                  alt="1 Pote" 
                  className="w-full max-w-[250px] mb-6 drop-shadow-xl hover:scale-105 transition-transform" 
                  referrerPolicy="no-referrer"
                />
               <p className="text-yellow-500/80 font-bold tracking-widest text-sm mb-4">1 MÊS DE USO</p>
               
               <div className="mb-6 w-full">
                  <p className="text-zinc-500 text-sm line-through mb-1">De R$ 187,00 por:</p>
                  <p className="text-zinc-400 text-lg">12x</p>
                  <p className="text-5xl font-black tracking-tighter text-white mb-2">
                    <span className="text-3xl font-bold align-top mr-1">R$</span>
                    17<span className="text-3xl">,77</span>
                  </p>
                  <p className="text-green-400 font-medium text-sm">ou R$ 177 à vista</p>
               </div>
               
               <CTAButton href={AFFILIATE_LINKS.KIT_1_POTE} className="w-full !px-4 !py-4 text-sm md:text-base">
                 Comprar 1 Pote
               </CTAButton>
            </FadeIn>

            {/* KIT 3 POTES (CENTER HIGHLIGHT) */}
            <FadeIn delay={0} className="relative scale-100 md:scale-105 z-10">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-500 text-black font-black uppercase tracking-wider py-1.5 px-6 rounded-full text-sm max-w-[250px] whitespace-nowrap shadow-lg outline outline-4 outline-black text-center z-20">
                 O Mais Vendido
               </div>
               
               <div className="relative p-[3px] rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(234,179,8,0.4)] h-full w-full flex flex-col">
                 {/* Lightning Effect Background */}
                 <div className="absolute top-1/2 left-1/2 w-[300%] aspect-[1/1] -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(from_0deg,transparent_75%,rgba(255,255,255,1)_85%,rgba(234,179,8,1)_100%)] animate-[spin_2.5s_linear_infinite]" />
                 
                 {/* Inner Card Content */}
                 <div className="relative bg-gradient-to-b from-zinc-800 to-zinc-900 w-full h-full p-10 rounded-[calc(1.5rem-2px)] flex flex-col items-center">
                   <h3 className="text-yellow-400 font-black text-2xl mb-1 mt-4">30% DE DESCONTO</h3>
                   <h4 className="text-white font-black text-4xl mb-6">3 Potes</h4>
                   <img 
                      src="https://blackultrabrasil.com.br/wp-content/uploads/2026/01/3.webp" 
                      alt="3 Potes" 
                      className="w-full max-w-[280px] mb-6 drop-shadow-2xl hover:scale-105 transition-transform" 
                      referrerPolicy="no-referrer"
                    />
                   <p className="text-yellow-500/80 font-bold tracking-widest text-sm mb-4">3 MESES DE USO</p>
                   
                   <div className="mb-8 w-full border-b border-zinc-700/50 pb-6 text-center">
                      <p className="text-zinc-400 text-sm line-through mb-1">De R$ 561,00 por:</p>
                      <p className="text-zinc-300 text-lg">12x</p>
                      <p className="text-6xl font-black tracking-tighter text-white mb-2">
                        <span className="text-3xl font-bold align-top mr-1">R$</span>
                        40<span className="text-4xl">,86</span>
                      </p>
                      <p className="text-green-400 font-bold">ou R$ 407 à vista</p>
                   </div>
                   
                   <CTAButton href={AFFILIATE_LINKS.KIT_3_POTES} className="w-full !py-5">
                     Comprar 3 Potes
                   </CTAButton>
                 </div>
               </div>
            </FadeIn>

            {/* KIT 2 POTES */}
            <FadeIn delay={0.2} className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl flex flex-col items-center shadow-xl hover:border-yellow-500/30 transition-colors">
               <h3 className="text-yellow-500 font-black text-2xl mb-1">22% DE DESCONTO</h3>
               <h4 className="text-white font-bold text-3xl mb-6">2 Potes</h4>
               <img 
                  src="https://blackultrabrasil.com.br/wp-content/uploads/2026/01/2.webp" 
                  alt="2 Potes" 
                  className="w-full max-w-[250px] mb-6 drop-shadow-xl hover:scale-105 transition-transform" 
                  referrerPolicy="no-referrer"
                />
               <p className="text-yellow-500/80 font-bold tracking-widest text-sm mb-4">2 MESES DE USO</p>
               
               <div className="mb-6 w-full">
                  <p className="text-zinc-500 text-sm line-through mb-1">De R$ 374,00 por:</p>
                  <p className="text-zinc-400 text-lg">12x</p>
                  <p className="text-5xl font-black tracking-tighter text-white mb-2">
                    <span className="text-3xl font-bold align-top mr-1">R$</span>
                    30<span className="text-3xl">,82</span>
                  </p>
                  <p className="text-green-400 font-medium text-sm">ou R$ 307 à vista</p>
               </div>
               
               <CTAButton href={AFFILIATE_LINKS.KIT_2_POTES} className="w-full !px-4 !py-4 text-sm md:text-base">
                 Comprar 2 Potes
               </CTAButton>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* 8. GUARANTEE SECTION */}
      <section className="py-24 px-4 md:px-8 bg-zinc-950 border-t border-zinc-900 border-b border-b-zinc-800">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
           <FadeIn className="flex-shrink-0">
             <img 
               src="https://blackultrabrasil.com.br/wp-content/uploads/2026/01/garantia.webp" 
               alt="Garantia 30 Dias" 
               className="w-full max-w-[250px] drop-shadow-xl" 
               referrerPolicy="no-referrer"
             />
           </FadeIn>
           <FadeIn>
             <h2 className="text-4xl font-black mb-6">Garantia de 30 dias</h2>
             <div className="space-y-4 text-zinc-300 text-lg leading-relaxed">
                <p>É sério! Você fica satisfeito, ou compramos o Black Ultra de volta de você!</p>
                <p>Se por qualquer motivo achar que o Black Ultra não ajudou, nós nos comprometemos em devolver a quantia paga pelo seu kit de potes!</p>
                <p>Temos certeza que vamos cumprir com o prometido, por isso nosso compromisso é uma <strong className="text-white">garantia incondicional de 30 DIAS</strong>.</p>
                <p className="mt-4">
                  <span className="bg-yellow-500/10 text-yellow-500 px-4 py-2 rounded-lg text-sm font-bold inline-block border border-yellow-500/20">
                    Você terá até 30 dias após a compra para solicitar a devolução.
                  </span>
                </p>
                <div className="pt-2">
                  <button 
                    onClick={() => setCurrentPage('termos')}
                    className="bg-white/10 hover:bg-white/20 transition-colors text-white text-sm font-bold py-2 px-5 rounded-[10px] underline"
                  >
                    Confira aqui os Termos de Garantia
                  </button>
                </div>
             </div>
           </FadeIn>
        </div>
      </section>

      {/* 8.5 FAQ */}
      <section className="py-24 px-4 md:px-8 bg-zinc-950 border-t border-zinc-900 relative">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-black mb-12 text-center">
              Perguntas <span className="text-yellow-500">Frequentes</span>
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.2} className="space-y-4">
            <FaqItem question="Qual o prazo de entrega?">
              <p>O prazo de entrega é de 10 dias úteis, mas pedimos compreensão pois podemos ter pequenos atrasos na entrega dependendo da região e logística dos Correios.</p>
            </FaqItem>

            <FaqItem question="Como recebo meu código de rastreamento?">
              <p>O código de rastreamento é enviado em até 3 dias úteis após a compra diretamente para o e-mail cadastrado no momento do pedido. Fique de olho também na sua caixa de spam.</p>
            </FaqItem>

            <FaqItem question="O Black Ultra possui alguma contraindicação?">
              <p>Por ser um produto potente voltado para acelerar o metabolismo de carboidratos e gorduras, ele possui algumas restrições de uso. O produto não é indicado para:</p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>Gestantes, lactantes (até 6 meses) e crianças.</li>
                <li>Pessoas alérgicas a crustáceos (camarão e frutos do mar), pois a fórmula contém Quitosana.</li>
                <li>Indivíduos com problemas renais (devido à presença de Cromo).</li>
                <li>Pessoas com sensibilidade gastrointestinal, pois a fibra Psyllium pode causar desconforto temporário em organismos mais sensíveis.</li>
              </ul>
            </FaqItem>

            <div className="mt-12 bg-zinc-900 p-6 rounded-2xl border border-zinc-800 text-center">
               <p className="text-zinc-300">
                 <strong>Dúvidas sobre Rastreio e Postagens:</strong> fale com THAMIRIS no WhatsApp <a href="https://wa.me/5531994202157" target="_blank" rel="noopener noreferrer" className="text-yellow-500 font-bold hover:underline">(31) 99420-2157</a>
               </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="bg-black py-16 px-4 md:px-8 text-center md:text-left">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 items-start justify-items-center md:justify-items-start">
           
           <div className="flex flex-col items-center md:items-start col-span-1">
             <img 
               src="https://blackultrabrasil.com.br/wp-content/uploads/2026/01/logo.webp" 
               alt="Black Ultra" 
               className="w-[180px] opacity-80 hover:opacity-100 transition-opacity mb-6" 
               referrerPolicy="no-referrer"
             />
             <img 
               src="https://blackultrabrasil.com.br/wp-content/uploads/2025/12/compra.png" 
               alt="Compra Segura" 
               className="w-full max-w-[200px]" 
               referrerPolicy="no-referrer"
             />
           </div>

           <div className="col-span-1">
             <h4 className="text-yellow-500 font-black mb-4 uppercase tracking-wider text-sm">Fabricação e Distribuição</h4>
             <p className="text-zinc-500 text-sm leading-relaxed">
                Capsul Brasil Ltda ME<br/>
                Rua Avenida Progresso nº 1397<br/>
                Bairro – São Bento<br/>
                Arcos – Minas Gerais<br/>
                CNPJ: 29.822.523/0001-03
             </p>
           </div>

           <div className="col-span-1">
             <h4 className="text-yellow-500 font-black mb-4 uppercase tracking-wider text-sm">Fale Conosco</h4>
             <p className="text-zinc-500 text-sm leading-relaxed mb-2">
                Atendimento das 09h às 18h.
             </p>
             <p className="text-zinc-300 font-bold">
               Telefone: (37) 3351-5181
             </p>
           </div>
           
           <div className="col-span-1">
             <h4 className="text-yellow-500 font-black mb-4 uppercase tracking-wider text-sm">Links Rápidos</h4>
             <ul className="space-y-2 text-zinc-400 text-sm font-medium">
               <li><a href="#ofertas" className="hover:text-yellow-500 transition-colors">Comprar Black Ultra</a></li>
               <li><button onClick={() => setCurrentPage('termos')} className="hover:text-yellow-500 transition-colors">Termos de Garantia</button></li>
             </ul>
           </div>

           <div className="col-span-1">
             <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Site Seguro</h4>
             
             <div className="flex flex-row md:flex-col lg:flex-row items-center gap-4">
               <div className="flex flex-col gap-2">
                 <div className="bg-white text-black flex items-center justify-center gap-2 px-3 py-1.5 rounded-[4px] text-[10px] font-black tracking-wide w-full max-w-[140px]">
                   <Lock className="w-3.5 h-3.5" />
                   AMBIENTE SEGURO
                 </div>
                 <div className="bg-white text-black flex items-center justify-center gap-2 px-3 py-1.5 rounded-[4px] text-[10px] font-black tracking-wide w-full max-w-[140px]">
                   <ShieldCheck className="w-3.5 h-3.5" />
                   SSL CERTIFICADO
                 </div>
               </div>
               
               <div className="flex items-center -ml-1 md:ml-0 lg:-ml-1 pb-1">
                 <div className="bg-[#ff0000] text-white rounded-full w-[42px] h-[42px] flex items-center justify-center font-bold text-[28px] drop-shadow-md z-10 font-sans tracking-tighter">e</div>
                 <span className="text-white text-[32px] font-serif italic ml-1 tracking-tight">bit</span>
               </div>
             </div>
           </div>

        </div>
        
        <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-zinc-900 text-center text-zinc-600 pl-4 text-xs">
          <p>© {new Date().getFullYear()} Black Ultra. Todos os direitos reservados. Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site.</p>
        </div>
      </footer>
      
      {/* FLOATING STICKY CTA (Always Visible) */}
      <motion.div 
         initial={{ y: 100 }}
         animate={{ y: 0 }}
         transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 25 }}
         className="fixed bottom-0 left-0 right-0 py-3 px-4 md:px-6 bg-[#0a0a0a]/60 backdrop-blur-md border-t border-zinc-800/50 z-50 flex justify-center shadow-[0_-10px_40px_rgba(0,0,0,0.5)]"
      >
        <div className="max-w-5xl mx-auto flex items-center justify-center md:justify-between w-full gap-6">
           {/* Desktop Logo */}
           <div className="hidden md:flex flex-col uppercase font-black text-2xl leading-[0.85] tracking-tighter">
              <span className="text-[#e2d5b6] drop-shadow-md">BLACK</span>
              <span className="text-[#ae8f45] drop-shadow-md">ULTRA</span>
           </div>
           
           {/* Action Button */}
           <a 
             href="#ofertas" 
             className="w-full md:w-auto flex-1 md:flex-none text-center bg-gradient-to-b from-[#493a1c] to-[#251b08] border border-[#695427] text-white font-bold tracking-wide uppercase py-3.5 px-8 rounded-lg shadow-lg hover:brightness-110 active:scale-95 text-[15px] md:text-base relative overflow-hidden group transition-all"
           >
             <span className="relative z-10">NÃO QUERO PERDER O BLACK</span>
             {/* Subtle bottom glow line seen in reference */}
             <div className="absolute bottom-0 left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-[#ffd770] to-transparent opacity-80" />
           </a>
        </div>
      </motion.div>

    </div>
  );
}

