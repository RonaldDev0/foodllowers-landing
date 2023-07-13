export function Footer () {
  return (
    <footer className='[@media(max-width:800px)]:w-[100VW] w-[99.5vw] h-96 [@media(max-width:800px)]:h-32 bg-[#333333] flex flex-col justify-center items-center'>
      <div className='flex items-center gap-2'>
        <p>Copyright</p>
        <p className='text-2xl text-red-600'>©</p>
        <p>2023</p>
        <p className='text-2xl text-red-600'>Foodllowers</p>
      </div>
    </footer>
  )
}
