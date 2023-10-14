'use client'
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'
import React, { FormEvent, useState } from 'react'
import { useSession } from 'next-auth/react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '@/firebase';
import toast from 'react-hot-toast';
import ModelSelection from './ModelSelection';
import useSWR from "swr"

type Props = {
  chatId: string
}
function ChatInput({ chatId }: Props) {
  const [prompt, setPrompt] = useState("")
  const { data: session } = useSession()

  const {data: model, mutate: setModel} = useSWR("model", {
    fallbackData: "text-davinci-003"
  })

  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!prompt) { return }
 
    const input = prompt.trim()

    const message: Message = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        avatar: session?.user?.image! || `https://ui-avatars.com/api/?name=${session?.user?.name}`
      }
    }
    setPrompt("")

    await addDoc(
      collection(db, 'users', session?.user?.email!, 'chats', chatId, 'messages'),
      message
    )

    const notification = toast.loading('ChatGPT is thinking...')

    await fetch('/api/askQuestion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        prompt: input, chatId, model, session
      }),
    }).then(()=>{
        toast.success("ChatGPT has responded!", {
          id: notification
        })
    })
  }

  return (
    <div className='bg-gray-700/50 text-gray-400 rounded-lg text-xs m-12 mx-24 rounded-lg'>
      <form onSubmit={sendMessage} className='flex p-3 justify-between flex-1 '>
          <input
            value={prompt}
            disabled={!session}
            onChange={(e) => setPrompt(e.target.value)}
            type='text'
            placeholder='Send a message'
            className='bg-transparent focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-300  pl-2'
            
          />
          <button
            type='submit'
            disabled={!prompt || !session}
            className='bg-[#11A37f] hover:opacity-50 text-white font-bold px-4 py-2 rounded disabled:bg-gray-300 disabled:cursor-not-allowed'
          >
            <PaperAirplaneIcon className='w-4 h-4'/>
          </button>
      </form>
      <div className='md:hidden'>
        <ModelSelection />
      </div>
    </div>
  )
}


export default ChatInput