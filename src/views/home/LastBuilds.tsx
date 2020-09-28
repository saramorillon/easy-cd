import classname from 'classname'
import { format, formatDistance } from 'date-fns'
import React from 'react'
import { Build, BuildStatus } from '../../database/entity/Build'

interface IBuildProps {
  build: Build
}

const colors: { [s in BuildStatus]: string } = {
  [BuildStatus.CANCELLED]: '',
  [BuildStatus.ERROR]: 'has-text-danger',
  [BuildStatus.SUCCESS]: 'has-text-success',
  [BuildStatus.PENDING]: 'has-text-info',
}

const icons: { [s in BuildStatus]: string } = {
  [BuildStatus.CANCELLED]: 'far fa-stop-circle',
  [BuildStatus.ERROR]: 'far fa-times-circle',
  [BuildStatus.SUCCESS]: 'far fa-check-circle',
  [BuildStatus.PENDING]: 'fas fa-circle-notch fa-spin',
}

function BuildItem({ build }: IBuildProps): JSX.Element {
  const createdAt = formatDistance(build.createdAt, new Date(), { addSuffix: true })
  const createAtTitle = format(build.createdAt, 'yyyy-MM-dd HH:mm')
  return (
    <div className="panel-block">
      <span className={classname('panel-icon', colors[build.status])}>
        <i className={icons[build.status]} aria-hidden="true"></i>
      </span>
      <a href={`/build/${build.id}`}>{build.job.name}</a>&nbsp;
      <small className="has-text-grey-light	" title={createAtTitle}>
        {createdAt}
      </small>
    </div>
  )
}

interface ILastBuildsProps {
  builds: Build[]
}

export default function LastBuilds({ builds }: ILastBuildsProps): JSX.Element {
  return (
    <nav className="panel">
      <p className="panel-heading">Last builds</p>
      {builds.map((build) => (
        <BuildItem key={build.id} build={build} />
      ))}
    </nav>
  )
}
