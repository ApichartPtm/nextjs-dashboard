'use client';

import { useEffect } from 'react';

const Error = ({ error, reset }: {
  error: Error & { digset?: string },
  reset: () => void
}) => {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className='flex h-full flex-col items-cnter justify-center'>
      <h2 className='text-center'>Somting went wrong!</h2>
      <button
        className='mt-4 rouned-mf bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400'
        onClick={() => reset()}
      >
        Try again
      </button>
    </main>
  )
}

export default Error