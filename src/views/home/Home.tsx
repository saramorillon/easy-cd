import React from 'react'
import { Build } from '../../database/entity/Build'
import { Job } from '../../database/entity/Job'
import Jobs from './Jobs'
import LastBuilds from './LastBuilds'

interface IHomeProps {
  builds: Build[]
  jobs: Job[]
}

export default function Home({ builds, jobs }: IHomeProps): JSX.Element {
  return (
    <div className="columns">
      <div className="column is-one-fifth">
        <LastBuilds builds={builds} />
      </div>
      <div className="column">
        <Jobs jobs={jobs} />
      </div>
    </div>
  )
}
