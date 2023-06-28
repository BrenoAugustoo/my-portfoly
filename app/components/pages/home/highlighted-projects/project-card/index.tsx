import { Link } from '@/app/components/linik'
import { TechBadge } from '@/app/components/tech-badge'
import Image from 'next/image'
import { HiArrowNarrowRight } from 'react-icons/hi'

export function ProjectCard () {
  return (
    <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row" >
      <div className="w-full h-full" >
        <Image 
          width={420} 
          height={304} 
          src="https://lncimg.lance.com.br/cdn-cgi/image/width=3840,quality=75,format=webp/uploads/2023/03/31/64275624de0fd.jpeg"
          alt="Thumbnail do projeto bookwise"
          className="lg:min-h-full w-full h-[200px] sm:h-[300px] lg:w-[420px] object-cover rounded-lg"
        />
      </div>

      <div>
        <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50" >
          <Image
            width={20}
            height={20}
            alt=""
            src="/images/icons/project-title-icon.svg"
          />
          BookWise
        </h3>

        <p className="text-gray=400 my-6" >
         lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
        </p>

        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-350px">
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
        </div>

        <Link href="/projects/book-wise" >
          Ver projeto
          <HiArrowNarrowRight/>
        </Link>
      </div>
    </div>
  )
} 