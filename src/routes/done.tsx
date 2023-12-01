import './index.css'
import { Header } from '~/components/Header'
import { useLocation } from 'solid-start'

export default function Home() {
  const location = useLocation()
  let joinLink = ''
  if (location.state && location.state.email) {
    const { email } = location.state
    joinLink = `https://i.prefinery.com/projects/rjddzqda/users/instant?email=${email}&utm_source=remover&utm_campaign=remover`
  } else {
    joinLink = `https://www.visible.cx/lp/see-how-your-data-is-analysed`
  }

  return (
    <>
      <main class="mt-10">
        <div class="container mx-auto px-4 text-center mb-10">
          <Header />
          <h1 class="text-5xl mb-20 mt-20 font-bold">Done!</h1>
          <p class="mt-5">
            Over the next few minutes we will progressively send emails to the
            databrokers saved in our database. You will also be cc'd on these
            emails - this is purely done for your own information, no follow up
            is expected from you.
          </p>
          <p class="mt-5">
            You can repeat this after a minimum of 45 days (we recommend doing
            it no earlier than 90 days).
          </p>
          <img src="break.png" class="mt-10 mb-10 mx-auto" width="50px" />
          <p class="text-xl mb-20">This was built by the team at Visible.</p>
          <p class="text-xl mb-10">
            If you'd like to see more of what we do, please consider joining the
            community below.
          </p>
          <div class="flex justify-center">
            <div class="bg-blue-400 hover:bg-blue-500 my-4 max-w-fit justify-center flex rounded-md px-4 py-1 text-white font-semibold">
              <a href={joinLink} class="fit-content rounded-md py-2 m-auto">
                Join the community
              </a>
            </div>
            {location.state && location.state.email ? (
              <div class="bg-transparent hover:bg-blue-400 hover:text-white text-blue-400 my-4 max-w-fit justify-center flex rounded-md px-4 py-1 text-black font-semibold border border-blue-400 ml-5">
                <a
                  href="https://www.visible.cx/lp/see-how-your-data-is-analysed"
                  class="fit-content rounded-md py-2 m-auto"
                >
                  Learn more
                </a>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
        <div class="section bg-sky-50">
          <div class="container mx-auto px-4 text-left p-5">
            <div class="grid md:grid-cols-3 gap-4">
              <div class="col-span-2">
                <h1 class="text-4xl mt-10 font-semibold ">
                  See how your personal data is analysed.
                </h1>
                <h2 class="text-2xl mb-10 mt-10 font-semibold">
                  by AI, people and businesses online.
                </h2>
                <p>
                  Decisions are made everyday using your{' '}
                  <strong>digital-self</strong>, changing your life without your
                  knowledge.
                </p>
                <br />
                <p>
                  <strong>Visible is building an app</strong> that will help you
                  gain a true reflection of yourself in data, ensure that{' '}
                  <strong>
                    your online image reflects the version of you that you want
                    to be seen.
                  </strong>
                </p>
                <br />
                <ul>
                  <li>Learn how algorithms [& people] see you,</li>
                  <li>Understand the data driving decisions,</li>
                  <li>Change your habits and behaviour.</li>
                </ul>
                <br />
                <p>
                  The be notified of updates and join the early access beta
                  launch, join the community.
                </p>
                <div class="flex justify-start">
                  <div class="bg-blue-400 hover:bg-blue-500 my-4 max-w-fit justify-center flex rounded-md px-4 py-1 text-white font-semibold">
                    <a
                      href={joinLink}
                      class="fit-content rounded-md py-2 m-auto"
                    >
                      Join the community
                    </a>
                  </div>
                  {location.state && location.state.email ? (
                    <div class="bg-transparent hover:bg-blue-400 hover:text-white text-blue-400 my-4 max-w-fit justify-center flex rounded-md px-4 py-1 text-black font-semibold border border-blue-400 ml-5">
                      <a
                        href="https://www.visible.cx/lp/see-how-your-data-is-analysed"
                        class="fit-content rounded-md py-2 m-auto"
                      >
                        Learn more
                      </a>
                    </div>
                  ) : (
                    ''
                  )}
                </div>
              </div>
              <div class="">
                <div class="grid md:grid-cols-2 gap-1 justify-items-center mt-10">
                  <div class="col-span-2 max-w-xs">
                    <img src="VisibleApp.png"></img>
                  </div>
                  <div class="px-1 max-w-xs justify-self-end">
                    <img src="GooglePlay.png" class="h-xs" />
                  </div>
                  <div class="px-1 max-w-xs justify-self-start">
                    <img src="AppStore.png" class="h-xs" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
