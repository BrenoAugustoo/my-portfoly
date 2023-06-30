import Image from "next/image"

const sections = [
  {
    title: 'Login',
    image: 'https://s.yimg.com/ny/api/res/1.2/5fmCEBHDlWgU81QugnCbmQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNg--/https://media.zenfs.com/en/hypebae_340/f985509f31692bdb6737eca4c6d82ec7'
  },
  {
    title: 'Home',
    image: 'https://s.yimg.com/ny/api/res/1.2/5fmCEBHDlWgU81QugnCbmQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNg--/https://media.zenfs.com/en/hypebae_340/f985509f31692bdb6737eca4c6d82ec7'
  },
]

export function ProjectSections() {
  return (
    <section className="container my-12 md:my-32 flex flex-col gap-8 md:gap-32" >
      {sections.map(section => (
        <div key={section.title} className="flex flex-col items-center gap-6 md:gap-12" >
          <h2 className="text-2xl md:text-3xl font-medium text-gray-300" >
            {section.title}
          </h2>
          <Image
            src={section.image}
            width={1080}
            height={672}
            alt={`Imagem da sessão ${section.title}`} 
            className="w-full aspect-auto rounded-lg object-cover"
            unoptimized
          />
        </div>
      ))}
    </section>
  )
}