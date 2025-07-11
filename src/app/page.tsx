import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center text-white">
      <div>
        <h1 className="text-4xl pb-2">Fitness Tracker</h1>
        <p className="italic text-white/65 text-lg">
          Be strong. Be big. Track progress.
        </p>
        <div className="mt-4">
          <Button
            asChild
            className="bg-blue-700 capitalize w-full text-lg py-6"
          >
            <Link href="/training">Get started</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
