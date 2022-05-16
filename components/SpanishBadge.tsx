import Image from 'next/image';

export default function SpanishBadge() {
  return (
    <div className='flex items-center border p-1 rounded m-1'>
      <Image src='/icons/es.svg' alt='Spanish flag' height={22} width={33}/>
      <span className='pl-1 font-light'>Spanish</span>
    </div>
  )
}
