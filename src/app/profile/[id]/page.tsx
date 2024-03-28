"use client"

import { useParams, useRouter } from "next/navigation"

const ProfileWithId = () => {

  const params = useParams()
  const router = useRouter()

  return (
    <div className="flex flex-col gap-3">
      Profile With Id: {params.id}
      <button onClick={() => router.push('/profile')}>back to main page</button>
    </div>
  )
}

export default ProfileWithId