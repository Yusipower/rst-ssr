const Container = ({ children, container }) => {
  return (
    <div className={`w-[90%] max-w-[2000px] mx-auto ${container}`}>{children}</div>
  )
}

export default Container