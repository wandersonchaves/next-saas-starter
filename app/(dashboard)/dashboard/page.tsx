import {redirect} from 'next/navigation'

import {getTeamForUser, getUser} from '@/lib/db/queries'

import {Settings} from './settings'

export default async function SettingsPage() {
  const user = await getUser()

  if (!user) {
    redirect('/login')
  }

  const teamData = await getTeamForUser(user.id)

  if (!teamData) {
    throw new Error('Team not found')
  }

  return <Settings teamData={teamData} />
}
