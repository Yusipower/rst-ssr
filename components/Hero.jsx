import Container from "@/components/Container"

const Hero = () => {
  return (
    <section className="flex w-full min-h-[16rem] bg-slate-100 items-center">
      <Container>
        <h1 className="text-6xl uppercase text-brand-1 md:text-4xl">
          <span className="block w-full font-bold">Результаты</span>
          поверок си
        </h1>
      </Container>
    </section>
  )
}

export default Hero