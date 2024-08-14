import React from 'react'
import TitleSection from './TitleSection'
import Image from 'next/image'
import { collabApps } from '@/constants'

const Skills = () => {
  return (
    <section className='max-container padding-containe py-16'>
      <TitleSection title='My Skills' />
      <div className='mt-12 lg:flex lg:items-center lg:justify-around'>
        <div>
          <h2>Web Development</h2>
          <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <Image
                    src="/brainwavesymbol.svg"
                    width={48}
                    height={48}
                    alt="brainwave" />
                </div>
              </div>
            </div>

            <ul>
              {collabApps.map((app, index) => (
                <li
                  key={app.id}
                  style={{
                    transform: `rotate(${index * (360 / collabApps.length)}deg)`,
                  }}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom`}
                >
                  <div
                    style={{
                      transform: `-rotate(${index * (360 / collabApps.length)}deg)`,
                    }}
                    className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl`}
                  >
                    <Image 
                      className="m-auto"
                      width={app.width}
                      height={app.height}
                      alt={app.title}
                      src={app.icon}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        </div>
        <div>
          <h2>UI/UX Design</h2>
        </div>
        <div>
          <h2>Tools & Platforms</h2>
        </div>
    </section>
  )
}

export default Skills