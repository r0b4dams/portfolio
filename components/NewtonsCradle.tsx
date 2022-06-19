const NewtonsCradle = () => {
  return (
    <div className='flex flex-col items-center justify-evenly'>
      <div className='cradle'>
        <div className='bg-[#ff0000] h-5 rounded w-full'></div>
        <div className='w-[200px] flex justify-evenly border-top md:w-[300px]'>
          <div className='w-1/5 flex flex-col justify-center items-center animate-left-swing origin-top'>
            <div className='bg-[#ffff00] w-1 h-20 md:h-32'></div>
            <div className='bg-[#0000ff] w-full aspect-square rounded-full'></div>
          </div>
          <div className='w-1/5 flex flex-col justify-center items-center'>
            <div className='bg-[#ffff00] w-1 h-20 md:h-32'></div>
            <div className='bg-[#0000ff] w-full aspect-square rounded-full'></div>
          </div>
          <div className='w-1/5 flex flex-col justify-center items-center'>
            <div className='bg-[#ffff00] w-1 h-20 md:h-32'></div>
            <div className='bg-[#0000ff] w-full aspect-square rounded-full'></div>
          </div>
          <div className='w-1/5 flex flex-col justify-center items-center'>
            <div className='bg-[#ffff00] w-1 h-20 md:h-32'></div>
            <div className='bg-[#0000ff] w-full aspect-square rounded-full'></div>
          </div>
          <div className='w-1/5 flex flex-col justify-center items-center animate-right-swing origin-top'>
            <div className='bg-[#ffff00] w-1 h-20 md:h-32'></div>
            <div className='bg-[#0000ff] w-full aspect-square rounded-full'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewtonsCradle;
