'use client'
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'
import React, { useState } from 'react'
import { useSession } from 'next-auth/react';

type Props = {
  chatId: string
}
function ChatInput({ chatId }: Props) {
  const [prompt, setPrompt] = useState("")
  const { data: session } = useSession()

  return (
    <div className='bg-gray-700/50 text-gray-400 rounded-lg text-sm '>
      <form className='p-5 space-x-5 flex-1'>
        <input
          value={prompt}
          disabled={!session}
          onChange={(e) => setPrompt(e.target.value)}
          type='text'
          placeholder='type your message here...'
          className='bg-transparent focus:outline-none flex-1
         disabled:cursor-not-allowed disabled:text-gray-300'
        />
        <button 
        type='submit'
        disabled= {!prompt || !session}
        className='bg-[#11A37f] hover:opacity-50 text-white font-bold px-4 py-2 rounded
        disabled:bg-gray-300 disabled:cursor-not-allowed'
        >
          <PaperAirplaneIcon />
        </button>
      </form>
      <div>

      </div>
    </div>
  )
}

export default ChatInput