import { Button } from "@/app/components/button";
import { SectionTitle } from "@/app/components/section-title";
import { TechBadge } from "@/app/components/tech-badge";
import { TbBrandGithub } from "react-icons/tb";
import { FiGlobe } from "react-icons/fi";
import { Link } from "@/app/components/linik";
import { HiArrowLeft, HiArrowNarrowLeft } from "react-icons/hi";

export function ProjectDetails() {
  return (
    <section className="w-full sm:min-h-[750px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden " >
      <div 
        className="absolute inset-0 z-[-1]"
        style={{
          background: 'url(/images/hero-bg.png) no-repeat center/cover, url(https://s.yimg.com/ny/api/res/1.2/5fmCEBHDlWgU81QugnCbmQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNg--/https://media.zenfs.com/en/hypebae_340/f985509f31692bdb6737eca4c6d82ec7) no-repeat center/cover '
        }}
      />

      <SectionTitle 
        subtitle="projetos"
        title="BookWise"
        className="text-center items-center sm:[&>h3]:text-4xl"
      />
      <p
        className="text-gray-400 text-center max-w-[640px] my-4 sm:my-6 text-sm sm:text-base"
      >
        Bookwise é uma plataforma de avaliação de livros que foi desenvolvido durante o bootcamp ignite
      </p>
      <div className="w-full max-w-[330px] flex flex-wrap gap-2 items-center justify-center" > 
        <TechBadge name="React" />
        <TechBadge name="React" />
        <TechBadge name="React" />
        <TechBadge name="React" />
        <TechBadge name="React" />
        <TechBadge name="React" />
        <TechBadge name="React" />
        <TechBadge name="React" />
      </div>
      <div className="my-6 sm:my-12 flex items-center gap-2 sm:gap-4 flex-col sm:flex-row" >
        <a href="https://github.com" target="_blank" >
          <Button className="min-w-[180px]" >
            <TbBrandGithub size={20}/>
            Repositório
          </Button>
        </a>
        <a href="https://github.com" target="_blank" >
          <Button className="min-w-[180px]" >
            <FiGlobe size={20}/>
            Projeto Online
          </Button>
        </a>
      </div>
      <Link href="/projects">
        <HiArrowNarrowLeft size={20} />
        Voltar para projetos
      </Link>
    </section>
  )
}