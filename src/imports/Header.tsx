import svgPaths from "./svg-hbw3ato5n6";
import imgImage1 from "figma:asset/8d0229393588a1c0479f6fe51679fc34d2f82c48.png";
import { imgGroup } from "./svg-7sevy";

function Heading() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 text-white" data-name="Heading">
      <div className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[72px] max-w-[600px] whitespace-pre-wrap">
        <p className="leading-[1.2]">Everything you need to start your new life abroad. <span className="text-[#4ea62f]">Sorted.</span></p>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0" data-name="Content">
      <Heading />
      <div className="font-['Outfit:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[18px] text-[rgba(255,255,255,0.6)] max-w-[550px]">
        <p className="leading-[1.6]">From visas, banking and housing to jobs, events and community - everything you need, in one place. Done right.</p>
      </div>
    </div>
  );
}

function CtaButton() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Cta button">
      <div className="h-[48px] relative rounded-[40px] shrink-0" data-name="Find out more">
        <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[24px] py-[12px] relative rounded-[inherit]">
          <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[18px] text-right text-white whitespace-nowrap">Find out more</p>
        </div>
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none rounded-[40px]" />
      </div>
      <div className="bg-[#4ea62f] content-stretch flex h-[48px] items-center justify-center overflow-clip px-[24px] py-[12px] relative rounded-[40px] shrink-0" data-name="Button">
        <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[18px] text-white whitespace-nowrap">Get Started</p>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[438px]" data-name="Content">
      <Content3 />
      <CtaButton />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[40px_40px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group">
          <g id="Vector" />
          <path d={svgPaths.p2ec65e00} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group />
    </div>
  );
}

function SocialMedia() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0" data-name="Social media">
      <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Twitter">
        <ClipPathGroup />
      </div>
      <div className="relative shrink-0 size-[32px]" data-name="Facebook">
        <div className="absolute inset-[8.33%_8.27%_8.5%_8.39%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.6667 26.616">
            <path d={svgPaths.p3e582900} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Instagram">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Group">
            <g id="Vector" />
            <path d={svgPaths.p3683e940} fill="var(--fill-0, white)" id="Vector_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-start relative shrink-0 w-[438px]" data-name="Content">
      <Content2 />
      <SocialMedia />
    </div>
  );
}

function AspectRatioLock() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock1() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock2() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock3() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock4() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock5() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock6() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock7() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock8() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock9() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock10() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock11() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock12() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock13() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock14() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock15() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock16() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock17() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock18() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock19() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock20() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock21() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock22() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock23() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock24() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock25() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock26() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock27() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock28() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock29() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock30() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock31() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock32() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock33() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock34() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock35() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock36() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock37() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock38() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock39() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock40() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock41() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function Component() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="21:1">
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock1 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock2 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock3 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock4 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock5 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock6 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock7 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock8 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock9 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock10 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock11 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock12 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock13 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock14 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock15 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock16 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock17 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock18 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock19 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock20 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock21 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock22 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock23 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock24 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock25 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock26 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock27 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock28 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock29 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock30 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock31 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock32 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock33 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock34 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock35 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock36 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock37 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock38 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock39 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock40 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock41 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AspectRatioLock42() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock43() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock44() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock45() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock46() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock47() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock48() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock49() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock50() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock51() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock52() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock53() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock54() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock55() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock56() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock57() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock58() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock59() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock60() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock61() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock62() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock63() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock64() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock65() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock66() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock67() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock68() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock69() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock70() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock71() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock72() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock73() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock74() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock75() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock76() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock77() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock78() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock79() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock80() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock81() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock82() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock83() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function Component1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="21:1">
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock42 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock43 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock44 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock45 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock46 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock47 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock48 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock49 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock50 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock51 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock52 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock53 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock54 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock55 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock56 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock57 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock58 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock59 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock60 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock61 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock62 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock63 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock64 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock65 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock66 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock67 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock68 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock69 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock70 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock71 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock72 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock73 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock74 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock75 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock76 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock77 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock78 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock79 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock80 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock81 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock82 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock83 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AspectRatioLock84() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock85() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock86() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock87() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock88() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock89() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock90() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock91() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock92() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock93() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock94() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock95() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock96() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock97() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock98() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock99() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock100() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock101() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock102() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock103() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock104() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock105() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock106() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock107() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock108() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock109() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock110() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock111() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock112() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock113() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock114() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock115() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock116() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock117() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock118() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock119() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock120() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock121() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock122() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock123() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock124() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock125() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function Component2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="21:1">
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock84 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock85 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock86 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock87 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock88 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock89 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock90 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock91 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock92 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock93 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock94 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock95 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock96 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock97 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock98 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock99 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock100 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock101 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock102 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock103 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock104 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock105 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock106 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock107 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock108 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock109 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock110 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock111 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock112 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock113 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock114 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock115 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock116 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock117 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock118 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock119 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock120 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock121 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock122 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock123 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock124 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock125 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AspectRatioLock126() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock127() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock128() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock129() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock130() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock131() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock132() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock133() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock134() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock135() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock136() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock137() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock138() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock139() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock140() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock141() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock142() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock143() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock144() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock145() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock146() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock147() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock148() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock149() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock150() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock151() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock152() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock153() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock154() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock155() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock156() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock157() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock158() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock159() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock160() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock161() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock162() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock163() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock164() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock165() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock166() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock167() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function Component3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="21:1">
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock126 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock127 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock128 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock129 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock130 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock131 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock132 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock133 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock134 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock135 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock136 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock137 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock138 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock139 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock140 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock141 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock142 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock143 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock144 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock145 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock146 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock147 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock148 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock149 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock150 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock151 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock152 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock153 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock154 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock155 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock156 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock157 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock158 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock159 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock160 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock161 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock162 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock163 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock164 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock165 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock166 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock167 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AspectRatioLock168() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock169() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock170() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock171() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock172() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock173() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock174() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock175() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock176() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock177() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock178() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock179() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock180() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock181() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock182() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock183() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock184() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock185() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock186() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock187() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock188() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock189() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock190() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock191() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock192() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock193() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock194() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock195() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock196() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock197() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock198() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock199() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock200() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock201() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock202() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock203() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock204() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock205() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock206() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock207() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock208() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock209() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function Component4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="21:1">
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock168 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock169 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock170 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock171 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock172 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock173 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock174 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock175 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock176 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock177 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock178 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock179 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock180 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock181 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock182 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock183 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock184 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock185 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock186 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock187 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock188 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock189 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock190 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock191 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock192 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock193 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock194 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock195 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock196 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock197 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock198 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock199 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock200 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock201 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock202 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock203 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock204 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock205 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock206 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock207 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock208 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock209 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AspectRatioLock210() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock211() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock212() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock213() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock214() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock215() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock216() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock217() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock218() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock219() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock220() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock221() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock222() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock223() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock224() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock225() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock226() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock227() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock228() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock229() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock230() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock231() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock232() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock233() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock234() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock235() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock236() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock237() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock238() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock239() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock240() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock241() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock242() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock243() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock244() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock245() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock246() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock247() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock248() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock249() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock250() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock251() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function Component5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="21:1">
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock210 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock211 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock212 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock213 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock214 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock215 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock216 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock217 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock218 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock219 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock220 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock221 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock222 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock223 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock224 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock225 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock226 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock227 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock228 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock229 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock230 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock231 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock232 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock233 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock234 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock235 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock236 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock237 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock238 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock239 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock240 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock241 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock242 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock243 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock244 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock245 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock246 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock247 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock248 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock249 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock250 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock251 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AspectRatioLock252() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock253() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock254() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock255() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock256() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock257() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock258() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock259() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock260() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock261() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock262() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock263() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock264() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock265() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock266() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock267() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock268() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock269() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock270() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock271() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock272() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock273() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock274() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock275() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock276() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock277() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock278() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock279() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock280() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock281() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock282() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock283() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock284() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock285() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock286() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock287() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock288() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock289() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock290() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock291() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock292() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock293() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function Component6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="21:1">
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock252 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock253 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock254 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock255 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock256 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock257 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock258 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock259 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock260 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock261 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock262 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock263 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock264 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock265 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock266 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock267 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock268 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock269 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock270 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock271 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock272 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock273 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock274 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock275 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock276 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock277 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock278 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock279 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock280 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock281 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock282 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock283 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock284 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock285 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock286 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock287 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock288 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock289 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock290 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock291 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock292 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock293 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AspectRatioLock294() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock295() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock296() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock297() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock298() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock299() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock300() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock301() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock302() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock303() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock304() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock305() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock306() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock307() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock308() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock309() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock310() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock311() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock312() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock313() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock314() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock315() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock316() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock317() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock318() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock319() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock320() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock321() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock322() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock323() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock324() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock325() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock326() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock327() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock328() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock329() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock330() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock331() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock332() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock333() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock334() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock335() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function Component7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="21:1">
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock294 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock295 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock296 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock297 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock298 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock299 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock300 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock301 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock302 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock303 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock304 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock305 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock306 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock307 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock308 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock309 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock310 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock311 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock312 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock313 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock314 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock315 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock316 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock317 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock318 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock319 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock320 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock321 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock322 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock323 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock324 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock325 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock326 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock327 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock328 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock329 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock330 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock331 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock332 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock333 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock334 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock335 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AspectRatioLock336() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock337() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock338() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock339() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock340() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock341() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock342() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock343() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock344() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock345() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock346() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock347() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock348() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock349() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock350() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock351() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock352() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock353() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock354() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock355() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock356() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock357() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock358() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock359() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock360() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock361() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock362() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock363() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock364() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock365() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock366() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock367() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock368() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock369() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock370() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock371() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock372() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock373() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock374() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock375() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock376() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock377() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function Component8() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="21:1">
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock336 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock337 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock338 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock339 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock340 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock341 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock342 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock343 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock344 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock345 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock346 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock347 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock348 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock349 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock350 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock351 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock352 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock353 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock354 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock355 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock356 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock357 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock358 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock359 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock360 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock361 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock362 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock363 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock364 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock365 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock366 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock367 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock368 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock369 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock370 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock371 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock372 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock373 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock374 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock375 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock376 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock377 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AspectRatioLock378() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock379() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock380() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock381() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock382() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock383() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock384() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock385() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock386() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock387() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock388() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock389() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock390() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock391() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock392() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock393() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock394() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock395() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock396() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock397() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock398() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock399() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock400() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock401() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock402() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock403() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock404() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock405() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock406() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock407() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock408() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock409() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock410() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock411() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock412() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock413() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock414() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock415() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock416() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock417() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock418() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function AspectRatioLock419() {
  return <div className="h-0 w-full" data-name="Aspect Ratio Lock - 30°" />;
}

function Component9() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="21:1">
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock378 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock379 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock380 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock381 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock382 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock383 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock384 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock385 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock386 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock387 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock388 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock389 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock390 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock391 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock392 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock393 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock394 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock395 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock396 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock397 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock398 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock399 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock400 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock401 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock402 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock403 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock404 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock405 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock406 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock407 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock408 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock409 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock410 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock411 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock412 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock413 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock414 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock415 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock416 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock417 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock418 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="2:1 Fixed Aspect Ratio Spacer">
          <div className="flex h-[54.857px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none w-full">
              <AspectRatioLock419 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PhotoLandscape() {
  return (
    <div className="bg-[rgba(255,255,255,0.08)] col-1 content-stretch flex flex-col h-[284.807px] items-start ml-0 mt-[342.91px] overflow-clip relative rounded-tl-[24px] rounded-tr-[24px] row-1 w-[600px]" data-name="Photo Landscape">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[600px]" data-name="🎛 Fixed Aspect Ratio Spacer (Variants)">
        <Component />
        <Component1 />
        <Component2 />
        <Component3 />
        <Component4 />
        <Component5 />
        <Component6 />
        <Component7 />
        <Component8 />
        <Component9 />
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[46px] mt-0 place-items-start relative row-1" data-name="Image">
      <div className="col-1 h-[628px] ml-0 mt-0 relative row-1 w-[508px]" data-name="image 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[103.17%] left-[-44.1%] max-w-none top-[-3.17%] w-[192.15%]" src={imgImage1} />
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <PhotoLandscape />
      <Image />
    </div>
  );
}

function Photo() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Photo">
      <Group1 />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[82px] items-center justify-center relative shrink-0" data-name="Content">
      <Content1 />
      <Photo />
    </div>
  );
}

export default function Header() {
  return (
    <div className="bg-[#191818] content-stretch flex flex-col items-center justify-center px-[160px] py-[136px] relative size-full" data-name="Header">
      <Content />
    </div>
  );
}