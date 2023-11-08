import Image from 'next/image'
import Container from '@/components/Container'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="py-4 bg-brand-1">
      <Container container="flex">
        <Link href="/">
          <Image
            src="/rst.svg"
            alt="РСТ МЕТРОЛОГИИ" 
            title="РСТ МЕТРОЛОГИИ"
            className="w-[5rem]"
            width={177}
            height={122}
            priority
          />
        </Link>
      </Container>
    </nav>
  )
}

export default Navbar