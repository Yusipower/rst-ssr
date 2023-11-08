import Container from '@/components/Container'

const Footer = () => {
  return (
    <footer className="flex items-center py-4 text-xl text-center text-white bg-brand-1">
      <Container>
        <div>Федеральное агентство по техническому регулированию и метрологии
          <br />
          <a href="mailto:fgis2@rst.gov.ru">fgis2@rst.gov.ru</a>
        </div>
      </Container>
    </footer>
  )
}

export default Footer