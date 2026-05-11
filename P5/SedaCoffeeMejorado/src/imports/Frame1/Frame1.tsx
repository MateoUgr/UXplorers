import { useState } from "react";
import svgPaths from "./svg-gzskd9lcah";
import imgImage15 from "./db608163f631396c17fb5f4d54a9b2e8088f8a98.png";
import imgImage7 from "./207074b006681d407112ec18c652aa6ad8764fd6.png";
import imgImage3 from "./53fef11abf4e7629e3e12a1010a10c761d05c2a2.png";
import imgImage6 from "./113805a59dca8ddf2a9e6fb1bf8ce2a15002ed1a.png";
import imgImage5 from "./1f4fc363b55da07e0058a9a8c3d52a7106662892.png";
import imgImage4 from "./c0826e4c27bac9dcc6205f8faedcb4bdca90fc5a.png";

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start justify-center overflow-hidden" data-name="Container">
      <img alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" src={imgImage15} />
      <div className="absolute bg-gradient-to-b from-[rgba(28,28,24,0.4)] inset-0 to-[rgba(28,28,24,0.7)] z-10" data-name="Gradient" />
    </div>
  );
}

function Heading() {
  return (
    <div className="w-full flex flex-col items-center px-4 mb-8" data-name="Heading 1">
      <h1 className="font-['Ancizar_Serif:Regular',sans-serif] font-normal text-[28px] sm:text-[40px] md:text-[48px] lg:text-[56px] text-center text-white tracking-tight max-w-[900px] leading-tight">
        Carácter en el grano, seda en tu paladar
      </h1>
    </div>
  );
}

function Button() {
  return (
    <button
      onClick={() => document.getElementById('brand-story')?.scrollIntoView({ behavior: 'smooth' })}
      className="bg-[#a45c1a] flex items-center justify-center px-[40px] py-[18px] rounded-[12px] cursor-pointer hover:bg-[#8d4f16] transition-colors whitespace-nowrap"
      data-name="Button"
    >
      <span className="font-['Ancizar_Serif:Bold',sans-serif] font-bold text-[#ffefe6] text-[14px] tracking-[0.7px]">
        Descubre la Experiencia
      </span>
    </button>
  );
}

function Button1() {
  return (
    <button
      onClick={() => window.location.href = '#tienda'}
      className="backdrop-blur-[2px] relative flex items-center justify-center px-[41px] py-[18px] rounded-[12px] cursor-pointer hover:bg-white/10 transition-colors border border-solid border-white whitespace-nowrap"
      data-name="Button"
    >
      <span className="font-['Ancizar_Serif:Bold',sans-serif] font-bold text-[14px] text-white tracking-[0.7px]">
        Nuestra Tienda
      </span>
    </button>
  );
}

function Container2() {
  return (
    <div className="w-full flex flex-col sm:flex-row gap-[16px] sm:gap-[24px] items-center justify-center px-4" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-[1000px] px-4 gap-6" data-name="Container">
      <Heading />
      <Container2 />
    </div>
  );
}

function HeaderHeroSection() {
  return (
    <div className="content-stretch flex h-screen items-center justify-center overflow-hidden relative shrink-0 w-full" data-name="Header - Hero Section">
      <Container />
      <div className="relative z-20 w-full flex justify-center">
        <Container1 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
      className="cursor-pointer hover:opacity-80 transition-opacity"
      data-name="Container"
    >
      <span className="font-['Ancizar_Serif:Italic',sans-serif] font-normal italic text-[#a45c1a] text-[20px] sm:text-[24px] whitespace-nowrap">
        Seda Coffee
      </span>
    </a>
  );
}

function Link() {
  return (
    <a
      href="#brand-story"
      onClick={(e) => {
        e.preventDefault();
        document.getElementById('brand-story')?.scrollIntoView({ behavior: 'smooth' });
      }}
      className="relative pb-1 cursor-pointer hover:opacity-70 transition-opacity border-b-2 border-[#a45c1a]"
      data-name="Link"
    >
      <span className="font-['Ancizar_Serif:Bold',sans-serif] font-bold text-[#a45c1a] text-[16px] tracking-[0.4px] whitespace-nowrap">
        Nuestra historia
      </span>
    </a>
  );
}

function Link1() {
  return (
    <a
      href="#tienda"
      className="cursor-pointer hover:text-[#a45c1a] transition-colors"
      data-name="Link"
    >
      <span className="font-['Ancizar_Serif:Regular',sans-serif] font-normal text-[#1c1c18] text-[16px] tracking-[0.4px] whitespace-nowrap">
        Tienda
      </span>
    </a>
  );
}

function Link2() {
  return (
    <a
      href="#eventos"
      className="cursor-pointer hover:text-[#a45c1a] transition-colors"
      data-name="Link"
    >
      <span className="font-['Ancizar_Serif:Regular',sans-serif] font-normal text-[#1c1c18] text-[16px] tracking-[0.4px] whitespace-nowrap">
        Eventos
      </span>
    </a>
  );
}

function Link3() {
  return (
    <a
      href="#login"
      className="cursor-pointer hover:text-[#a45c1a] transition-colors"
      data-name="Link"
    >
      <span className="font-['Ancizar_Serif:Regular',sans-serif] font-normal text-[#1c1c18] text-[16px] tracking-[0.4px] whitespace-nowrap">
        Iniciar sesión
      </span>
    </a>
  );
}

function Container5() {
  return (
    <div className="content-stretch hidden md:flex gap-[40px] items-center relative shrink-0" data-name="Container">
      <Link />
      <Link1 />
      <Link2 />
      <Link3 />
    </div>
  );
}

function MobileMenuButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="md:hidden flex flex-col gap-[5px] p-2 cursor-pointer hover:opacity-80 transition-opacity bg-[#a45c1a] rounded-md"
      aria-label="Menu"
    >
      <div className="w-5 h-0.5 bg-white" />
      <div className="w-5 h-0.5 bg-white" />
      <div className="w-5 h-0.5 bg-white" />
    </button>
  );
}

function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] md:hidden">
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />
      <div className="absolute right-0 top-0 bottom-0 w-[280px] bg-[#fdfbf7] shadow-2xl">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-[#e7e5e4]">
            <span className="font-['Ancizar_Serif:Italic',sans-serif] text-[#a45c1a] text-lg italic">Menú</span>
            <button
              onClick={onClose}
              className="text-3xl text-[#a45c1a] hover:opacity-70 transition-opacity leading-none w-10 h-10 flex items-center justify-center"
              aria-label="Cerrar menú"
            >
              ×
            </button>
          </div>
          <div className="flex flex-col gap-1 p-6">
            <a
              href="#brand-story"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('brand-story')?.scrollIntoView({ behavior: 'smooth' });
                onClose();
              }}
              className="text-[#a45c1a] text-lg font-['Ancizar_Serif:Bold',sans-serif] hover:bg-[#a45c1a]/10 transition-colors py-3 px-4 rounded-lg"
            >
              Nuestra historia
            </a>
            <a
              href="#tienda"
              onClick={onClose}
              className="text-[#1c1c18] text-lg font-['Ancizar_Serif:Regular',sans-serif] hover:bg-[#a45c1a]/10 hover:text-[#a45c1a] transition-colors py-3 px-4 rounded-lg"
            >
              Tienda
            </a>
            <a
              href="#eventos"
              onClick={onClose}
              className="text-[#1c1c18] text-lg font-['Ancizar_Serif:Regular',sans-serif] hover:bg-[#a45c1a]/10 hover:text-[#a45c1a] transition-colors py-3 px-4 rounded-lg"
            >
              Eventos
            </a>
            <a
              href="#login"
              onClick={onClose}
              className="text-[#1c1c18] text-lg font-['Ancizar_Serif:Regular',sans-serif] hover:bg-[#a45c1a]/10 hover:text-[#a45c1a] transition-colors py-3 px-4 rounded-lg"
            >
              Iniciar sesión
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-[#a45c1a] content-stretch flex items-center justify-center right-[-4.02px] rounded-[12px] size-[16px] top-[-4px]" data-name="Background">
      <div className="flex flex-col font-['Be_Vietnam_Pro:SemiBold',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#ffefe6] text-[10px] text-center w-[6.61px]">
        <p className="leading-[15px]">2</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <button
      onClick={() => window.location.href = '#carrito'}
      className="content-stretch flex flex-col items-start relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
      data-name="Container"
    >
      <div className="h-[19px] relative shrink-0 w-[15px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.9999 18.9999">
          <path d={svgPaths.p17d45480} fill="var(--fill-0, #A45C1A)" id="Icon" />
        </svg>
      </div>
      <Background />
    </button>
  );
}

function Container3() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="max-w-[1440px] relative shrink-0 w-full mx-auto" data-name="Container">
        <div className="flex flex-row items-center max-w-[inherit] size-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] px-4 md:pl-[64px] md:pr-[64.01px] py-[24px] relative size-full">
            <Container4 />
            <Container5 />
            <div className="flex items-center gap-4">
              <Container6 />
              <MobileMenuButton onClick={() => setMobileMenuOpen(true)} />
            </div>
          </div>
        </div>
      </div>
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}

function TopNavBar() {
  return (
    <div className="fixed bg-white content-stretch flex flex-col items-center left-0 top-0 w-full z-50 shadow-md" data-name="TopNavBar">
      <div aria-hidden="true" className="absolute border-[#e7e5e4] border-b border-solid inset-0 pointer-events-none" />
      <Container3 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Ancizar_Serif:Bold',sans-serif] font-bold text-[#a45c1a] text-[12px] sm:text-[14px] tracking-widest uppercase m-0">
        EL ARTE DE LA SUAVIDAD
      </p>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <h2 className="font-['Ancizar_Serif:Regular',sans-serif] font-normal text-[#1c1c18] text-[28px] sm:text-[32px] md:text-[40px] leading-tight">
        Nuestra Estrategia
      </h2>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Ancizar_Serif:Regular',sans-serif] font-normal text-[#534439] text-[16px] sm:text-[18px] leading-relaxed m-0">
        En Seda Coffee, entendemos que el café no es solo una bebida, sino una experiencia táctil. Nuestra filosofía se basa en el concepto de "Seda": una búsqueda incansable por la refinación y el equilibrio orgánico.
      </p>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Ancizar_Serif:Regular',sans-serif] font-normal text-[#534439] text-[16px] sm:text-[18px] leading-relaxed m-0">
        Seleccionamos granos de origen único, tostados artesanalmente para resaltar notas complejas sin sacrificar la suavidad característica que define nuestra casa. Cada taza es un testimonio de respeto por la tierra y maestría en la preparación.
      </p>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col gap-[23.375px] items-start pt-[15.25px] relative shrink-0 w-full" data-name="Container">
      <Container11 />
      <Container12 />
    </div>
  );
}

function Container13() {
  return (
    <a
      href="#proceso"
      className="content-stretch flex flex-col items-start pt-[31px] relative shrink-0 w-full cursor-pointer hover:opacity-80 transition-opacity"
      data-name="Container"
    >
      <p className="font-['Ancizar_Serif:Regular','Noto_Sans:Regular',sans-serif] font-normal text-[#864500] text-[20px] sm:text-[24px] md:text-[28px] leading-snug m-0">
        Conoce nuestro proceso →
      </p>
    </a>
  );
}

function Container8() {
  return (
    <div className="lg:col-1 content-stretch flex flex-col gap-[16px] items-start justify-self-stretch relative lg:row-1 self-center shrink-0" data-name="Container">
      <Container9 />
      <Heading1 />
      <Container10 />
      <Container13 />
    </div>
  );
}

function Container7() {
  return (
    <div className="gap-x-[40px] lg:gap-x-[80px] gap-y-[40px] lg:gap-y-[80px] grid grid-cols-1 lg:grid-cols-[repeat(2,minmax(0,1fr))] relative shrink-0 w-full" data-name="Container">
      <Container8 />
      <div className="lg:col-2 justify-self-stretch pointer-events-none relative rounded-[4px] lg:row-1 shrink-0 overflow-hidden" data-name="image 7">
        <div className="w-full aspect-square bg-white rounded-[4px] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.2),0px_0px_2px_0px_rgba(0,0,0,0.08),0px_2px_6px_0px_rgba(0,0,0,0.1)]">
          <img alt="" className="w-full h-full object-cover rounded-[4px]" src={imgImage7} />
        </div>
      </div>
    </div>
  );
}

function BrandStorySection() {
  return (
    <div id="brand-story" className="bg-[#f7f3ed] relative shrink-0 w-full flex justify-center" data-name="Brand Story Section">
      <div className="content-stretch flex flex-col items-start px-4 md:px-[64px] py-[60px] md:py-[80px] relative max-w-[1440px] w-full">
        <Container7 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <h2 className="font-['Ancizar_Serif:Regular',sans-serif] font-normal text-[#1c1c18] text-[28px] sm:text-[32px] md:text-[40px] text-center leading-tight px-4">
        La Esencia en Imágenes
      </h2>
    </div>
  );
}

function Container16() {
  return <div className="hidden lg:block lg:col-[5/span_4] justify-self-stretch relative rounded-[8px] lg:row-3 self-stretch shrink-0" data-name="Container" />;
}

function Container17() {
  return <div className="hidden lg:block lg:col-[9/span_4] justify-self-stretch relative rounded-[8px] lg:row-3 self-stretch shrink-0" data-name="Container" />;
}

function Container15() {
  return (
    <div className="gap-x-[16px] md:gap-x-[24px] gap-y-[16px] md:gap-y-[24px] grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 auto-rows-auto relative shrink-0 w-full" data-name="Container">
      <Container16 />
      <Container17 />
      <div className="md:col-span-6 lg:col-[1/span_6] justify-self-stretch pointer-events-none relative rounded-[4px] lg:row-1 self-start shrink-0 overflow-hidden" data-name="image 3">
        <div className="w-full h-full relative bg-white rounded-[4px] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.2),0px_0px_2px_0px_rgba(0,0,0,0.08),0px_2px_6px_0px_rgba(0,0,0,0.1)]">
          <img alt="" className="w-full h-full object-cover rounded-[4px]" src={imgImage3} />
        </div>
      </div>
      <div className="md:col-span-3 lg:col-[8/span_4] justify-self-start pointer-events-none relative rounded-[4px] lg:row-1 self-start shrink-0 w-full overflow-hidden" data-name="image 6">
        <div className="w-full aspect-square bg-white rounded-[4px] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.2),0px_0px_2px_0px_rgba(0,0,0,0.08),0px_2px_6px_0px_rgba(0,0,0,0.1)]">
          <img alt="" className="w-full h-full object-cover rounded-[4px]" src={imgImage6} />
        </div>
      </div>
      <div className="md:col-span-6 lg:col-[7/span_6] justify-self-stretch pointer-events-none relative rounded-[4px] lg:row-2 self-start shrink-0 overflow-hidden" data-name="image 5">
        <div className="w-full h-full bg-white rounded-[4px] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.2),0px_0px_2px_0px_rgba(0,0,0,0.08),0px_2px_6px_0px_rgba(0,0,0,0.1)]">
          <img alt="" className="w-full h-full object-cover rounded-[4px]" src={imgImage5} />
        </div>
      </div>
      <div className="md:col-span-3 lg:col-[2/span_4] justify-self-stretch pointer-events-none relative rounded-[4px] lg:row-2 self-start shrink-0 overflow-hidden" data-name="image 4">
        <div className="w-full h-full bg-white rounded-[4px] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.2),0px_0px_2px_0px_rgba(0,0,0,0.08),0px_2px_6px_0px_rgba(0,0,0,0.1)]">
          <img alt="" className="w-full h-full object-cover rounded-[4px]" src={imgImage4} />
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="max-w-[1200px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[64px] items-start max-w-[inherit] px-[24px] relative w-full">
        <Heading2 />
        <Container15 />
      </div>
    </div>
  );
}

function SectionVisualGalleryBentoGrid() {
  return (
    <div className="bg-[#fdf9f3] relative shrink-0 w-full flex justify-center" data-name="Section - Visual Gallery (Bento Grid)">
      <div className="content-stretch flex flex-col items-center px-4 md:px-[40px] py-[60px] md:py-[80px] relative w-full">
        <Container14 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <h2 className="font-['Ancizar_Serif:Regular',sans-serif] font-normal text-[#1c1c18] text-[28px] sm:text-[32px] md:text-[40px] leading-tight">
        Lo que dicen nuestros visitantes
      </h2>
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <p className="font-['Ancizar_Serif:Italic',sans-serif] font-normal italic text-[#534439] text-[16px] sm:text-[18px] leading-relaxed m-0">
        "La atmósfera es inigualable. El diseño del local y la calidez de su atmosfera son únicas. Es, sin duda, el mejor café de la ciudad."
      </p>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#ffac61] content-stretch flex items-center justify-center pb-[12.5px] pt-[11.5px] relative rounded-[12px] shrink-0 size-[48px]" data-name="Background">
      <div className="flex flex-col font-['Ancizar_Serif:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#753f00] text-[16px] text-center w-[11.56px]">
        <p className="leading-[24px]">C</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[0.8px] right-0 top-[-1px]" data-name="Container">
      <div className="flex flex-col font-['Ancizar_Serif:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] relative shrink-0 text-[#1c1c18] text-[14px] tracking-[0.7px] w-[54.61px]">
        <p className="leading-[16.8px]">Cristina</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[16.8px]" data-name="Container">
      <div className="flex flex-col font-['Ancizar_Serif:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#867367] text-[12px] tracking-[0.6px] uppercase w-[81.7px]">
        <p className="leading-[16px]">Estudiante</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[32.8px] relative shrink-0 w-[81.7px]" data-name="Container">
      <Container23 />
      <Container24 />
    </div>
  );
}

function Container21() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center pt-[8.8px] relative size-full">
        <Background1 />
        <Container22 />
      </div>
    </div>
  );
}

function Testimonial() {
  return (
    <div className="bg-[#fdf9f3] content-stretch flex flex-col gap-[23.2px] items-start p-[24px] md:p-[41px] relative rounded-[8px] self-start shrink-0 w-full" data-name="Testimonial 1">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="absolute inset-[0_0_-0.19px_0]" data-name="Testimonial 1:shadow">
        <div className="absolute inset-[-7.19%_-11.03%_-21.57%_-11.03%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 442.66 358.19">
            <g filter="url(#filter0_d_1_143)" id="Testimonial 1:shadow">
              <path d={svgPaths.p23964100} fill="var(--fill-0, white)" fillOpacity="0.01" shapeRendering="crispEdges" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="358.19" id="filter0_d_1_143" width="442.66" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="20" />
                <feGaussianBlur stdDeviation="20" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.52549 0 0 0 0 0.270588 0 0 0 0 0 0 0 0 0.08 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_143" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_143" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Container20 />
      <Container21 />
    </div>
  );
}

function Container25() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <p className="font-['Ancizar_Serif:Italic',sans-serif] font-normal italic text-[#534439] text-[16px] sm:text-[18px] leading-relaxed m-0">
        "Busco calidad en el grano y aquí he encontrado matices que no veía en años. La atención es tan fluida como su nombre indica."
      </p>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#80695d] content-stretch flex items-center justify-center pb-[12.5px] pt-[11.5px] relative rounded-[12px] shrink-0 size-[48px]" data-name="Background">
      <div className="flex flex-col font-['Ancizar_Serif:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#ffeee7] text-[16px] text-center w-[8px]">
        <p className="leading-[24px]">J</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[0.8px] right-0 top-[-1px]" data-name="Container">
      <div className="flex flex-col font-['Ancizar_Serif:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] relative shrink-0 text-[#1c1c18] text-[14px] tracking-[0.7px] w-[32.38px]">
        <p className="leading-[16.8px]">Juan</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[16.8px]" data-name="Container">
      <div className="flex flex-col font-['Ancizar_Serif:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#867367] text-[12px] tracking-[0.6px] uppercase w-[76.08px]">
        <p className="leading-[16px]">SOMMELIER</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[32.8px] relative shrink-0 w-[76.08px]" data-name="Container">
      <Container28 />
      <Container29 />
    </div>
  );
}

function Container26() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center pt-[8.8px] relative size-full">
        <Background2 />
        <Container27 />
      </div>
    </div>
  );
}

function Testimonial1() {
  return (
    <div className="bg-[#fdf9f3] content-stretch flex flex-col gap-[23.2px] items-start p-[24px] md:p-[41px] relative rounded-[8px] self-start shrink-0 w-full" data-name="Testimonial 2">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0_-0.19px_0] rounded-[8px] shadow-[0px_20px_40px_-10px_rgba(134,69,0,0.08)]" data-name="Testimonial 2:shadow" />
      <Container25 />
      <Container26 />
    </div>
  );
}

function Container30() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <p className="font-['Ancizar_Serif:Italic',sans-serif] font-normal italic text-[#534439] text-[16px] sm:text-[18px] leading-relaxed m-0">
        "Un refugio de paz en medio del ajetreo. El Flat White es sencillamente espectacular, con esa textura sedosa prometida."
      </p>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#ffdcc4] content-stretch flex items-center justify-center pb-[12.5px] pt-[11.5px] relative rounded-[12px] shrink-0 size-[48px]" data-name="Background">
      <div className="flex flex-col font-['Ancizar_Serif:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#2f1400] text-[16px] text-center w-[8px]">
        <p className="leading-[24px]">J</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[0.8px] right-0 top-[-1px]" data-name="Container">
      <div className="flex flex-col font-['Ancizar_Serif:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] relative shrink-0 text-[#1c1c18] text-[14px] tracking-[0.7px] w-[28.47px]">
        <p className="leading-[16.8px]">José</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[16.8px]" data-name="Container">
      <div className="flex flex-col font-['Ancizar_Serif:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#867367] text-[12px] tracking-[0.6px] uppercase w-[96.61px]">
        <p className="leading-[16px]">Escritor</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[32.8px] relative shrink-0 w-[96.61px]" data-name="Container">
      <Container33 />
      <Container34 />
    </div>
  );
}

function Container31() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center pt-[8.8px] relative size-full">
        <Background3 />
        <Container32 />
      </div>
    </div>
  );
}

function Testimonial2() {
  return (
    <div className="bg-[#fdf9f3] content-stretch flex flex-col gap-[23.2px] items-start p-[24px] md:p-[41px] relative rounded-[8px] self-start shrink-0 w-full" data-name="Testimonial 3">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0_-0.19px_0] rounded-[8px] shadow-[0px_20px_40px_-10px_rgba(134,69,0,0.08)]" data-name="Testimonial 3:shadow" />
      <Container30 />
      <Container31 />
    </div>
  );
}

function Container19() {
  return (
    <div className="gap-x-[16px] md:gap-x-[32px] gap-y-[16px] md:gap-y-[32px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative shrink-0 w-full" data-name="Container">
      <Testimonial />
      <Testimonial1 />
      <Testimonial2 />
    </div>
  );
}

function Container18() {
  return (
    <div className="max-w-[1200px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[64px] items-start max-w-[inherit] px-[24px] relative size-full">
        <Heading3 />
        <Container19 />
      </div>
    </div>
  );
}

function TestimonialsSection() {
  return (
    <div className="bg-[#ebe8e2] relative shrink-0 w-full flex justify-center" data-name="Testimonials Section">
      <div className="overflow-clip rounded-[inherit] w-full">
        <div className="content-stretch flex flex-col items-center px-4 md:px-[40px] py-[60px] md:py-[80px] relative w-full">
          <Container18 />
        </div>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
      className="content-stretch flex flex-col items-start relative shrink-0 w-full cursor-pointer hover:opacity-80 transition-opacity"
      data-name="Container"
    >
      <div className="flex flex-col font-['Ancizar_Serif:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#a45c1a] text-[20px] w-full">
        <p className="leading-[28px]">Seda Coffee</p>
      </div>
    </a>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="Margin">
      <Container37 />
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[320px] relative shrink-0 w-full" data-name="Container">
      <p className="font-['Ancizar_Serif:Regular',sans-serif] font-normal text-[#78716c] text-[13px] sm:text-[14px] leading-relaxed m-0">
        © 2024 Seda Coffee. Handcrafted Excellence. Elevando el ritual diario a través de la artesanía y la elegancia orgánica.
      </p>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[315.14px]" data-name="Container">
      <Margin />
      <Container38 />
    </div>
  );
}

function Link4() {
  return (
    <a
      href="#sostenibilidad"
      className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[77px] cursor-pointer hover:text-[#a45c1a] transition-colors"
      data-name="Link"
    >
      <div className="flex flex-col font-['Ancizar_Serif:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#78716c] text-[14px] w-[85px]">
        <p className="[text-decoration-skip-ink:none] decoration-solid leading-[20px] underline">Sostenibilidad</p>
      </div>
    </a>
  );
}

function Link5() {
  return (
    <a
      href="https://instagram.com"
      target="_blank"
      rel="noopener noreferrer"
      className="content-stretch flex flex-col items-start relative self-stretch shrink-0 cursor-pointer hover:text-[#a45c1a] transition-colors"
      data-name="Link"
    >
      <div className="flex flex-col font-['Ancizar_Serif:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#78716c] text-[14px] w-[72px]">
        <p className="[text-decoration-skip-ink:none] decoration-solid leading-[20px] underline">Instagram</p>
      </div>
    </a>
  );
}

function Link6() {
  return (
    <a
      href="#contacto"
      className="content-stretch flex flex-col items-start relative self-stretch shrink-0 cursor-pointer hover:text-[#a45c1a] transition-colors"
      data-name="Link"
    >
      <div className="flex flex-col font-['Ancizar_Serif:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#78716c] text-[14px] w-[53px]">
        <p className="[text-decoration-skip-ink:none] decoration-solid leading-[20px] underline">Contacto</p>
      </div>
    </a>
  );
}

function Link7() {
  return (
    <a
      href="https://twitter.com"
      target="_blank"
      rel="noopener noreferrer"
      className="content-stretch flex flex-col items-start relative self-stretch shrink-0 cursor-pointer hover:text-[#a45c1a] transition-colors"
      data-name="Link"
    >
      <div className="flex flex-col font-['Ancizar_Serif:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#78716c] text-[14px] w-[54px]">
        <p className="[text-decoration-skip-ink:none] decoration-solid leading-[20px] underline">Twitter</p>
      </div>
    </a>
  );
}

function Container39() {
  return (
    <div className="content-stretch hidden md:flex gap-[24px] lg:gap-[48px] items-start relative shrink-0" data-name="Container">
      <Link4 />
      <Link5 />
      <Link6 />
      <Link7 />
    </div>
  );
}

function Link8() {
  return (
    <a
      href="https://facebook.com"
      target="_blank"
      rel="noopener noreferrer"
      className="content-stretch flex flex-col items-start relative self-stretch shrink-0 cursor-pointer hover:opacity-70 transition-opacity"
      data-name="Link"
    >
      <div className="relative shrink-0 size-[19px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.9999 18.9999">
          <path d={svgPaths.p17b01c80} fill="var(--fill-0, #78716C)" id="Icon" />
        </svg>
      </div>
    </a>
  );
}

function Link9() {
  return (
    <a
      href="https://pinterest.com"
      target="_blank"
      rel="noopener noreferrer"
      className="content-stretch flex flex-col items-start relative self-stretch shrink-0 cursor-pointer hover:opacity-70 transition-opacity"
      data-name="Link"
    >
      <div className="h-[19px] relative shrink-0 w-[17px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.9999 18.9999">
          <path d={svgPaths.p9aabd00} fill="var(--fill-0, #78716C)" id="Icon" />
        </svg>
      </div>
    </a>
  );
}

function Link10() {
  return (
    <a
      href="mailto:hola@sedacoffee.com"
      className="content-stretch flex flex-col items-start relative self-stretch shrink-0 cursor-pointer hover:opacity-70 transition-opacity"
      data-name="Link"
    >
      <div className="h-[15px] relative shrink-0 w-[19px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.9999 14.9999">
          <path d={svgPaths.p3f52f0c0} fill="var(--fill-0, #78716C)" id="Icon" />
        </svg>
      </div>
    </a>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex gap-[24px] h-[19px] items-start relative shrink-0" data-name="Container">
      <Link8 />
      <Link9 />
      <Link10 />
    </div>
  );
}

function Container35() {
  return (
    <div className="max-w-[1440px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col md:flex-row items-start md:items-center justify-between gap-8 max-w-[inherit] relative w-full">
        <Container36 />
        <Container39 />
        <Container40 />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#f5f5f4] relative shrink-0 w-full flex justify-center" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[#e7e5e4] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-center pb-[60px] md:pb-[80px] pt-[61px] md:pt-[81px] px-4 md:px-[32px] relative w-full">
        <Container35 />
      </div>
    </div>
  );
}

function HtmlBody() {
  return (
    <div className="flex flex-col items-center min-h-screen w-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(253, 249, 243) 0%, rgb(253, 249, 243) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Html → Body">
      <HeaderHeroSection />
      <TopNavBar />
      <BrandStorySection />
      <SectionVisualGalleryBentoGrid />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative min-h-screen w-full">
      <HtmlBody />
    </div>
  );
}