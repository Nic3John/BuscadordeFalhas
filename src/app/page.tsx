import Header from '@/components/Header/Header'
import LoadingComponent from '@/components/PagesComponents/LoadingComponent'

export default function Home() {
  return (
    <main className="max-w-screen-sm h-screen mx-auto sm:border ">
      <div className="h-[20%]">
        <Header />
      </div>
      <div className="w-full h-[80%] flex flex-col items-center justify-center">
        <LoadingComponent />
      </div>
    </main>
  )
}
