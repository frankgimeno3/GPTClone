import { SunIcon, BoltIcon, ExclamationTriangleIcon } from "@heroicons/react/20/solid"


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white ">
      <h1 className='text-5xl font-fold mb-20'>ChatGPT </h1>
      <div className="flex flex-row space-x-2 text-center">
        <div>
          <div className='flex flex-col items-center justify-center mb-5'>
            <SunIcon className="h-8 w-8" />

            <h2>Examples</h2>
          </div>
          <div className='space-y-2'>
            <p className='infoText'> "Explain something to me"</p>
            <p className='infoText'> "What is the size of the sun?"</p>
            <p className='infoText'> "What is a nuclear bomb?"</p>
          </div>
        </div>
        <div>
          <div className='flex flex-col items-center justify-center mb-5'>
            <BoltIcon className="h-8 w-8" />

            <h2>Capabilities</h2>
          </div>
          <div className='space-y-2'>
            <p className='infoText'> Change the ChatGPT Model to use</p>
            <p className='infoText'> Messages are stored in Firebase's Firestore</p>
            <p className='infoText'> Hot Toast notifications when ChatGPT is thinking</p>
          </div>
        </div>
        <div>
          <div className='flex flex-col items-center justify-center mb-5'>
            <ExclamationTriangleIcon className="h-8 w-8" />

            <h2>Limitations</h2>
          </div>
          <div className='space-y-2'>
            <p className='infoText'> May occasioonally generate incorrect information</p>
            <p className='infoText'> May occasioonally produce harmful instructions or biased content</p>
            <p className='infoText'> Limited knowledge of world and events after 2021</p>
          </div>
        </div>
      </div>
    </div>

  )
}
