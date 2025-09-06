'use client'
import AnimatedCharacter from './play/SkinMenu/AnimatedCharacter'
import Link from 'next/link'
import BasicButton from '@/components/BasicButton'

export default function Index() {
  return (
    <div className='w-full grid place-items-center h-screen gradient p-4 relative'>
      <div className='max-w-[600px] flex flex-col items-center'>
        <div>
          <h1 className='font-semibold text-3xl'>Welcome to My Gather Clone!</h1>   
          <p className='w-full text-xl my-6'>
            This project is a functional recreation of the core features of Gather, 
            built as a portfolio piece to demonstrate my technical skills and passion for virtual spaces.
          </p>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <Link href='/app'>
            <BasicButton>
              Get Started
            </BasicButton>
          </Link>
        </div>
        <AnimatedCharacter src='/sprites/characters/Character_009.png'/>
      </div>
    </div>
  )
}
